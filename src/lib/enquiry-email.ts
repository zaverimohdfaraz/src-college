import "server-only";
import { courses } from "./courses";
import { site, formatPhone } from "./site";
import type { FormType } from "./validation";
import { escapeHtml } from "./mailer";

const formTitle: Record<FormType, string> = {
  contact: "Website enquiry",
  admission: "Admission enquiry",
  course: "Course enquiry",
};

const fieldLabels: Record<string, string> = {
  fullName: "Name",
  email: "Email",
  phone: "Mobile",
  course: "Course",
};

const programmeName = (slug: unknown) =>
  courses.find((c) => c.slug === slug)?.name ?? String(slug);

function display(key: string, value: unknown) {
  if (key === "course") return programmeName(value);
  if (key === "phone") return formatPhone(String(value));
  return String(value ?? "");
}

function rows(values: Record<string, unknown>) {
  return Object.keys(fieldLabels)
    .filter((k) => values[k] !== undefined && values[k] !== "")
    .map((k) => ({ key: k, label: fieldLabels[k], value: display(k, values[k]) }));
}

const personName = (v: Record<string, unknown>) => String(v.fullName ?? "");

const RED = "#cc2b20";

function shell(title: string, inner: string) {
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#f8f5f1;font-family:Arial,Helvetica,sans-serif;color:#1d1b1e">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-top:5px solid ${RED}">
<tr><td style="padding:24px 28px 8px">
<div style="font-size:13px;color:${RED};font-weight:bold">${escapeHtml(site.name)}</div>
<h1 style="margin:6px 0 0;font-size:22px;line-height:1.3;color:#1d1b1e">${escapeHtml(title)}</h1>
</td></tr>
${inner}
<tr><td style="padding:18px 28px 24px;font-size:12px;color:#5f5b5a;border-top:1px solid #e8e2da">
${escapeHtml(site.address.line1)}, Mumbai ${escapeHtml(site.address.postalCode)} &middot; ${escapeHtml(site.email)}
</td></tr></table></body></html>`;
}

/** Email the college office receives. Reply goes straight to the enquirer. */
export function buildEnquiryEmail(type: FormType, values: Record<string, unknown>) {
  const list = rows(values);
  const who = personName(values);
  const what = programmeName(values.course);
  const subject = `${formTitle[type]}: ${who} — ${what}`.slice(0, 180);
  const received = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" });

  const tableRows = list
    .map(
      (r) => `<tr>
<td style="padding:10px 12px;border-bottom:1px solid #e8e2da;width:38%;vertical-align:top;font-size:14px;color:#5f5b5a">${escapeHtml(r.label)}</td>
<td style="padding:10px 12px;border-bottom:1px solid #e8e2da;font-size:15px;white-space:pre-wrap">${
        r.key === "email"
          ? `<a href="mailto:${escapeHtml(r.value)}" style="color:${RED}">${escapeHtml(r.value)}</a>`
          : r.key === "phone"
            ? `<a href="tel:+91${escapeHtml(String(values.phone))}" style="color:${RED}">${escapeHtml(r.value)}</a>`
            : escapeHtml(r.value)
      }</td></tr>`,
    )
    .join("");

  const html = shell(
    formTitle[type],
    `<tr><td style="padding:4px 28px 0;font-size:13px;color:#5f5b5a">Received ${escapeHtml(received)} via the college website. Reply to this email to answer ${escapeHtml(who)} directly.</td></tr>
<tr><td style="padding:16px 28px 20px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #e8e2da">${tableRows}</table></td></tr>`,
  );

  const text = [
    `${formTitle[type]} — ${site.name}`,
    `Received ${received} via the college website.`,
    "",
    ...list.map((r) => `${r.label}: ${r.value}`),
    "",
    `Reply to this email to answer ${who} directly.`,
  ].join("\n");

  return { subject, html, text };
}

/** Short acknowledgement sent to the person who filled the form. */
export function buildAutoReply(type: FormType, values: Record<string, unknown>) {
  const who = personName(values).split(" ")[0];
  const next: Record<FormType, string> = {
    contact: "The college office will contact you with details about the course.",
    admission:
      "The admissions office will contact you with guidance on eligibility, documents and the admission schedule. This acknowledgement does not confirm admission.",
    course: "The college office will contact you with details about this programme.",
  };
  const phones = site.phones.map(formatPhone).join(", ");
  const subject = `We have received your ${formTitle[type].toLowerCase()} — ${site.shortName}`;
  const html = shell(
    `Thank you, ${who}`,
    `<tr><td style="padding:12px 28px 22px;font-size:15px;line-height:1.6">
<p style="margin:0 0 12px">We have received your ${escapeHtml(formTitle[type].toLowerCase())}. ${escapeHtml(next[type])}</p>
<p style="margin:0">If it is urgent, call the college office on ${escapeHtml(phones)}.</p>
</td></tr>`,
  );
  const text = `Thank you, ${who}.\n\nWe have received your ${formTitle[type].toLowerCase()}. ${next[type]}\n\nIf it is urgent, call the college office on ${phones}.\n\n${site.name}`;
  return { subject, html, text };
}
