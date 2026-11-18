import "server-only";
import { createHash } from "node:crypto";
import { getTransport, mailSettings, MailConfigError } from "./mailer";
import { buildEnquiryEmail, buildAutoReply } from "./enquiry-email";
import { schemas, fieldErrors, type FormType } from "./validation";

export const MAX_BODY_BYTES = 10 * 1024;
const MIN_FILL_MS = 2500; // humans take longer than this to fill a form
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 8;

// Best-effort in-memory limiter. On serverless each instance keeps its own
// map, so this throttles bursts rather than guaranteeing a hard limit.
const hits = new Map<string, number[]>();
function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

// Suppress accidental double submissions of the same enquiry.
const sent = new Map<string, number>();
function isDuplicate(fp: string) {
  const t = sent.get(fp);
  return t !== undefined && Date.now() - t < DUPLICATE_WINDOW_MS;
}
function remember(fp: string) {
  if (sent.size > 2000) sent.clear();
  sent.set(fp, Date.now());
}

export type Result =
  | { status: 201 | 200; body: { ok: true; message: string } }
  | { status: 400 | 413 | 415 | 422 | 429 | 503 | 500; body: { ok: false; message: string; errors?: Record<string, string> } };

const success: Record<FormType, string> = {
  contact: "Your message has been sent. The college office will reply by email or phone.",
  admission: "Your admission enquiry has been sent. The admissions office will contact you with guidance.",
  course: "Your course enquiry has been sent. The college office will contact you about this programme.",
  visit: "Your visit request has been sent. The college office will contact you to confirm a time.",
};

export async function handleEnquiry(type: FormType, req: Request): Promise<Result> {
  if (!(req.headers.get("content-type") || "").includes("application/json")) {
    return { status: 415, body: { ok: false, message: "Send the form as JSON." } };
  }
  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > MAX_BODY_BYTES) return { status: 413, body: { ok: false, message: "The form is too large to send." } };

  const raw = await req.text();
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) {
    return { status: 413, body: { ok: false, message: "The form is too large to send." } };
  }

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { status: 400, body: { ok: false, message: "The form data could not be read. Refresh the page and try again." } };
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { status: 400, body: { ok: false, message: "The form data could not be read. Refresh the page and try again." } };
  }

  const { website, startedAt, ...fields } = data as Record<string, unknown>;

  // Spam protection: hidden honeypot field and minimum fill time.
  const elapsed = Date.now() - Number(startedAt);
  if ((typeof website === "string" && website.length > 0) || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    // Pretend success so bots get no signal.
    return { status: 200, body: { ok: true, message: success[type] } };
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(`${type}:${ip}`)) {
    return { status: 429, body: { ok: false, message: "Too many submissions from this connection. Please wait a few minutes and try again." } };
  }

  const parsed = schemas[type].safeParse(fields);
  if (!parsed.success) {
    return {
      status: 422,
      body: { ok: false, message: "Some fields need attention.", errors: fieldErrors(parsed.error) },
    };
  }

  const values = parsed.data as Record<string, unknown>;
  const fingerprint = createHash("sha256")
    .update(JSON.stringify([type, values.email, values.phone, values.message ?? "", values.programme ?? values.course ?? values.subject ?? values.preferredDate ?? ""]))
    .digest("hex");

  if (isDuplicate(fingerprint)) {
    return { status: 200, body: { ok: true, message: "We already have this enquiry. The college office will be in touch." } };
  }

  try {
    const transport = getTransport();
    const settings = mailSettings();
    const mail = buildEnquiryEmail(type, values);

    await transport.sendMail({
      from: settings.from,
      to: settings.to,
      replyTo: String(values.email),
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    remember(fingerprint);

    if (settings.sendAutoReply) {
      const reply = buildAutoReply(type, values);
      // The enquiry has already reached the college; a failed acknowledgement must not fail the request.
      await transport
        .sendMail({ from: settings.from, to: String(values.email), replyTo: settings.to, ...reply })
        .catch((err) => console.error(`[enquiry:${type}] auto-reply failed`, err));
    }

    return { status: 201, body: { ok: true, message: success[type] } };
  } catch (err) {
    console.error(`[enquiry:${type}]`, err instanceof MailConfigError ? err.message : err);
    return {
      status: 503,
      body: { ok: false, message: "The form could not be sent just now. Please try again shortly, or contact the college by phone or email." },
    };
  }
}
