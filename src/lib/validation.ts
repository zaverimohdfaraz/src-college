import { z } from "zod";
import { courses } from "./courses";

/** Shared between the browser (instant feedback) and the server (authoritative). */

const clean = (s: string) =>
  s
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim();

const text = (label: string, min: number, max: number) =>
  z
    .string({ message: `${label} is required.` })
    .transform(clean)
    .pipe(
      z
        .string()
        .min(1, `${label} is required.`)
        .min(min, `${label} must be at least ${min} characters.`)
        .max(max, `${label} must be ${max} characters or fewer.`),
    );

const optionalText = (label: string, max: number) =>
  z
    .string()
    .optional()
    .transform((v) => (v ? clean(v) : ""))
    .pipe(z.string().max(max, `${label} must be ${max} characters or fewer.`));

const name = (label: string) =>
  text(label, 2, 80).refine((v) => /^[\p{L}\p{M}][\p{L}\p{M} .'-]*$/u.test(v), {
    message: `${label} can contain letters, spaces, dots, apostrophes and hyphens only.`,
  });

const email = z
  .string({ message: "Email is required." })
  .transform((v) => clean(v).toLowerCase())
  .pipe(z.string().min(1, "Email is required.").max(120).email("Enter a valid email address, like name@example.com."));

/** Accepts Indian mobiles (with or without +91 / 0) and other numbers of 8–15 digits. */
export const normalizePhone = (raw: string) => {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
};

const phone = z
  .string({ message: "Phone number is required." })
  .transform((v) => normalizePhone(clean(v)))
  .pipe(
    z
      .string()
      .min(1, "Phone number is required.")
      .refine((d) => (d.length === 10 ? /^[6-9]/.test(d) || /^(22|2\d)/.test(d) : d.length >= 8 && d.length <= 15), {
        message: "Enter a 10-digit mobile number, like 98200 12345.",
      }),
  );

const courseSlug = z
  .string({ message: "Choose a programme." })
  .refine((v) => v === "undecided" || courses.some((c) => c.slug === v), { message: "Choose a programme from the list." });

const message = (required: boolean) =>
  required ? text("Message", 10, 2000) : optionalText("Message", 2000);

export const qualificationOptions = [
  { value: "hsc-appearing", label: "Currently in Std. XII (HSC)" },
  { value: "hsc-passed", label: "Passed Std. XII (HSC) or equivalent" },
  { value: "diploma", label: "Diploma holder" },
  { value: "ug-appearing", label: "Currently in an undergraduate degree" },
  { value: "graduate", label: "Graduate" },
  { value: "postgraduate", label: "Postgraduate" },
  { value: "other", label: "Other" },
] as const;

export const schemas = {
  contact: z.object({
    fullName: name("Full name"),
    email,
    phone,
    subject: text("Subject", 3, 120),
    message: message(true),
  }),
  admission: z.object({
    studentName: name("Student name"),
    guardianName: optionalText("Parent or guardian name", 80),
    email,
    phone,
    programme: courseSlug,
    qualification: z.enum(qualificationOptions.map((o) => o.value) as [string, ...string[]], {
      message: "Choose the current education level.",
    }),
    message: message(false),
  }),
  course: z.object({
    fullName: name("Full name"),
    email,
    phone,
    course: courseSlug,
    message: message(false),
  }),
  visit: z.object({
    visitorName: name("Visitor name"),
    email,
    phone,
    preferredDate: z
      .string({ message: "Choose a preferred date." })
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a preferred date.")
      .refine((v) => {
        const d = new Date(`${v}T00:00:00+05:30`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const max = new Date(today);
        max.setDate(max.getDate() + 180);
        return !isNaN(d.getTime()) && d >= today && d <= max;
      }, "Choose a date between today and six months from now."),
    visitors: z.coerce
      .number({ message: "Enter the number of visitors." })
      .int("Enter a whole number.")
      .min(1, "At least one visitor is needed.")
      .max(10, "For groups larger than 10, please contact the college office."),
    message: message(false),
  }),
} as const;

export type FormType = keyof typeof schemas;
export const formTypes = Object.keys(schemas) as FormType[];

/** Flatten zod issues into { field: firstMessage }. */
export const fieldErrors = (error: z.ZodError) => {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "_form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
};
