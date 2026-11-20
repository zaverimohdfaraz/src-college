import { z } from "zod";
import { courses } from "./courses";

/**
 * One enquiry form, four fields: name, email, phone, course.
 * Shared by the browser (instant feedback) and the server (authoritative check),
 * so the rules can never drift apart.
 */

const clean = (s: string) =>
  s
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F\u200B-\u200F\u2028-\u202F\u2060\uFEFF]/g, "") // control and invisible characters
    .replace(/\s+/g, " ")
    .trim();

/* ---------- Name ---------- */
// Letters (any script, so Devanagari names work), single spaces, dots, apostrophes and hyphens.
// Must start with a letter, at least 3 characters, no digits, no links, no "aaaa"-style mashing.
const NAME_CHARS = /^[\p{L}\p{M}](?:[\p{L}\p{M}]|[ .'’-](?=[\p{L}\p{M} ]))*\.?$/u;

const fullName = z
  .string({ message: "Full name is required." })
  .transform(clean)
  .pipe(
    z
      .string()
      .min(1, "Full name is required.")
      .min(3, "Full name must be at least 3 characters.")
      .max(60, "Full name must be 60 characters or fewer.")
      .refine((v) => !/\d/.test(v), "Full name cannot contain numbers.")
      .refine((v) => NAME_CHARS.test(v), "Use letters and spaces only (dots, apostrophes and hyphens are allowed).")
      .refine((v) => (v.match(/[\p{L}]/gu) ?? []).length >= 3, "Enter your real full name.")
      .refine((v) => !/(\p{L})\1{2,}/iu.test(v), "Enter your real full name."),
  );

/* ---------- Email ---------- */
const EMAIL =
  /^(?!\.)(?!.*\.\.)[a-z0-9._%+-]{1,64}(?<!\.)@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/;

// Throwaway inboxes: enquiries from these cannot be answered.
const DISPOSABLE = new Set([
  "mailinator.com", "yopmail.com", "guerrillamail.com", "guerrillamail.info", "sharklasers.com", "10minutemail.com",
  "tempmail.com", "temp-mail.org", "tempmail.net", "trashmail.com", "getnada.com", "dispostable.com", "maildrop.cc",
  "throwawaymail.com", "fakeinbox.com", "mintemail.com", "mohmal.com", "emailondeck.com", "tempinbox.com",
  "example.com", "example.org", "test.com",
]);

// Common slips on popular domains.
const TYPOS: Record<string, string> = {
  "gmal.com": "gmail.com", "gmial.com": "gmail.com", "gamil.com": "gmail.com", "gmaill.com": "gmail.com",
  "gmail.co": "gmail.com", "gmail.con": "gmail.com", "gmail.cm": "gmail.com", "gmail.in": "gmail.com", "gnail.com": "gmail.com",
  "yaho.com": "yahoo.com", "yahoo.co": "yahoo.com", "yahoo.con": "yahoo.com", "yahooo.com": "yahoo.com",
  "hotmal.com": "hotmail.com", "hotmail.co": "hotmail.com", "hotmial.com": "hotmail.com",
  "outlok.com": "outlook.com", "outlook.co": "outlook.com", "rediffmal.com": "rediffmail.com", "redifmail.com": "rediffmail.com",
  "icloud.co": "icloud.com",
};

const email = z
  .string({ message: "Email is required." })
  .transform((v) => clean(v).replace(/\s/g, "").toLowerCase())
  .pipe(
    z
      .string()
      .min(1, "Email is required.")
      .max(100, "Email must be 100 characters or fewer.")
      .refine((v) => EMAIL.test(v), "Enter a valid email address, like name@gmail.com.")
      .superRefine((v, ctx) => {
        const domain = v.split("@")[1] ?? "";
        if (TYPOS[domain]) ctx.addIssue({ code: "custom", message: `Check the email. Did you mean ${v.split("@")[0]}@${TYPOS[domain]}?` });
        else if (DISPOSABLE.has(domain)) ctx.addIssue({ code: "custom", message: "Use an email address you check regularly. Temporary inboxes are not accepted." });
      }),
  );

/* ---------- Phone ---------- */
/** Strips spaces, dashes and a +91 / 91 / 0 prefix, leaving the 10-digit number. */
export const normalizePhone = (raw: string) => {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
};

const FAKE_NUMBERS = new Set(["9876543210", "9999999999", "8888888888", "7777777777", "6666666666", "9123456789", "9012345678"]);

const phone = z
  .string({ message: "Mobile number is required." })
  .refine((v) => /^[\d\s()+-]*$/.test(v), "Use digits only.")
  .transform((v) => normalizePhone(v))
  .pipe(
    z
      .string()
      .min(1, "Mobile number is required.")
      .refine((d) => d.length === 10, "Enter a 10-digit mobile number.")
      .refine((d) => /^[6-9]/.test(d), "Indian mobile numbers start with 6, 7, 8 or 9.")
      .refine((d) => !FAKE_NUMBERS.has(d) && !/^(\d)\1{6,}/.test(d) && !/(\d)\1{7,}/.test(d), "Enter your real mobile number."),
  );

/* ---------- Course ---------- */
const course = z
  .string({ message: "Choose a course." })
  .refine((v) => v.length > 0, "Choose a course.")
  .refine((v) => courses.some((c) => c.slug === v), "Choose a course from the list.");

/** Exactly these four fields. Anything else sent to the server is rejected. */
const enquiry = z.object({ fullName, email, phone, course }).strict();

/** Where the form was sent from. Same fields; only the email subject differs. */
export const schemas = { contact: enquiry, admission: enquiry, course: enquiry } as const;

export type FormType = keyof typeof schemas;
export const formTypes = Object.keys(schemas) as FormType[];

/** Flatten zod issues into { field: firstMessage }. */
export const fieldErrors = (error: z.ZodError) => {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.code === "unrecognized_keys" ? "_form" : String(issue.path[0] ?? "_form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
};
