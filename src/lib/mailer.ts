import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

export class MailConfigError extends Error {}

const g = globalThis as unknown as { __srccMailer?: Transporter };

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new MailConfigError(`${name} is not set. Add it to .env.local or the Vercel environment variables.`);
  return v;
}

/** One SMTP connection reused across requests on the same server instance. */
export function getTransport(): Transporter {
  if (g.__srccMailer) return g.__srccMailer;
  const port = Number(process.env.SMTP_PORT || 465);
  g.__srccMailer = nodemailer.createTransport({
    host: required("SMTP_HOST"),
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user: required("SMTP_USER"), pass: required("SMTP_PASS") },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return g.__srccMailer;
}

export function mailSettings() {
  const user = required("SMTP_USER");
  return {
    from: process.env.MAIL_FROM || `"SRCC Website" <${user}>`,
    to: required("ENQUIRY_TO"), // comma-separated list is fine
    sendAutoReply: process.env.SEND_AUTO_REPLY !== "false",
  };
}

export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
