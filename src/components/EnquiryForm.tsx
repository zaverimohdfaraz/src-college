"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { schemas, fieldErrors, qualificationOptions, type FormType } from "@/lib/validation";
import { courseOptions } from "@/lib/courses";
import { cx } from "./ui";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "date" | "number";
  required?: boolean;
  options?: { value: string; label: string }[];
  autoComplete?: string;
  hint?: string;
  half?: boolean;
  placeholder?: string;
};

const programmeOptions = [...courseOptions, { value: "undecided", label: "Not decided yet" }];

const definitions: Record<FormType, { fields: Field[]; submit: string; sending: string }> = {
  contact: {
    submit: "Send message",
    sending: "Sending message…",
    fields: [
      { name: "fullName", label: "Full name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
      { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "subject", label: "Subject", type: "text", required: true },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
  },
  admission: {
    submit: "Send admission enquiry",
    sending: "Sending enquiry…",
    fields: [
      { name: "studentName", label: "Student name", type: "text", required: true, autoComplete: "name", half: true },
      { name: "guardianName", label: "Parent or guardian name", type: "text", half: true, hint: "Optional" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
      { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "programme", label: "Programme of interest", type: "select", required: true, options: programmeOptions, half: true },
      { name: "qualification", label: "Current education level", type: "select", required: true, options: [...qualificationOptions], half: true },
      { name: "message", label: "Your question", type: "textarea", hint: "Optional. Tell us what you would like to know." },
    ],
  },
  course: {
    submit: "Send course enquiry",
    sending: "Sending enquiry…",
    fields: [
      { name: "fullName", label: "Full name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
      { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "course", label: "Course of interest", type: "select", required: true, options: programmeOptions },
      { name: "message", label: "Your question", type: "textarea", hint: "Optional" },
    ],
  },
  visit: {
    submit: "Request a visit",
    sending: "Sending request…",
    fields: [
      { name: "visitorName", label: "Visitor name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
      { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "preferredDate", label: "Preferred date", type: "date", required: true, half: true, hint: "The office will confirm a time with you." },
      { name: "visitors", label: "Number of visitors", type: "number", required: true, half: true },
      { name: "message", label: "Anything we should know?", type: "textarea", hint: "Optional" },
    ],
  },
};

type Status = { state: "idle" } | { state: "sending" } | { state: "success"; message: string } | { state: "error"; message: string };

export default function EnquiryForm({
  type,
  defaults = {},
  idPrefix = type,
  tone = "light",
}: {
  type: FormType;
  defaults?: Record<string, string>;
  idPrefix?: string;
  tone?: "light" | "ivory";
}) {
  const def = definitions[type];
  const initial = useMemo(() => Object.fromEntries(def.fields.map((f) => [f.name, defaults[f.name] ?? (f.name === "visitors" ? "1" : "")])), [def, defaults]);
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const startedAt = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const validate = (v: Record<string, string>) => {
    const r = schemas[type].safeParse(v);
    return r.success ? {} : fieldErrors(r.error);
  };

  const update = (name: string, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validate(next)[name] ?? "" }));
  };

  const blur = (name: string) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validate(values)[name] ?? "" }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status.state === "sending") return; // prevent double submission

    const errs = validate(values);
    setTouched(Object.fromEntries(def.fields.map((f) => [f.name, true])));
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = def.fields.find((f) => errs[f.name]);
      if (first) formRef.current?.querySelector<HTMLElement>(`#${idPrefix}-${first.name}`)?.focus();
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch(`/api/enquiries/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot.current?.value ?? "", startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setStatus({ state: "success", message: data.message });
        setValues(initial);
        setTouched({});
        setErrors({});
      } else {
        if (data?.errors) setErrors(data.errors);
        setStatus({ state: "error", message: data?.message || "The form could not be sent. Check your connection and try again." });
      }
    } catch {
      setStatus({ state: "error", message: "The form could not be sent. Check your internet connection and try again." });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const today = new Date().toISOString().slice(0, 10);
  const inputBase = cx(
    "block w-full rounded-[3px] border px-4 text-[1.125rem] text-ink placeholder:text-grey transition-colors focus:outline-none focus:ring-2 focus:ring-red/25",
    tone === "ivory" ? "bg-white" : "bg-ivory/60 focus:bg-white",
  );

  if (status.state === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-[3px] border border-[#2f6b45]/25 bg-[#eef6f0] p-7 outline-none">
        <div className="flex items-start gap-4">
          <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-[#2f6b45]" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M7.5 12.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="t-h3 text-ink">Thank you</p>
            <p className="mt-2 text-ink-soft">{status.message}</p>
            <p className="mt-2 t-caption">Sending an enquiry does not reserve a seat or confirm admission.</p>
            <button type="button" onClick={() => { setStatus({ state: "idle" }); startedAt.current = Date.now(); }} className="link-u mt-5 font-semibold text-maroon">
              Send another enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative" aria-busy={status.state === "sending"}>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-website`}>Leave this field empty</label>
        <input ref={honeypot} id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="mb-6 rounded-[3px] border border-red/30 bg-red/[0.06] px-5 py-4 text-[1.0625rem] text-red-dark outline-none">
          {status.message}
        </div>
      )}

      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        {def.fields.map((f) => {
          const id = `${idPrefix}-${f.name}`;
          const err = touched[f.name] ? errors[f.name] : "";
          const describedBy = [f.hint && `${id}-hint`, err && `${id}-error`].filter(Boolean).join(" ") || undefined;
          const common = {
            id,
            name: f.name,
            value: values[f.name] ?? "",
            required: f.required,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": describedBy,
            onBlur: () => blur(f.name),
            className: cx(inputBase, err ? "border-red" : "border-sand hover:border-ink/40 focus:border-red"),
          };
          return (
            <div key={f.name} className={cx(f.half ? "sm:col-span-1" : "sm:col-span-2")}>
              <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-3 text-[1.0625rem] font-semibold text-ink">
                <span>
                  {f.label}
                  {f.required && <span aria-hidden className="ml-0.5 text-red">*</span>}
                </span>
                {f.hint && (
                  <span id={`${id}-hint`} className="text-[0.9375rem] font-normal text-muted">{f.hint}</span>
                )}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} rows={4} maxLength={2000} onChange={(e) => update(f.name, e.target.value)} className={cx(common.className, "min-h-[7.5rem] resize-y py-3")} />
              ) : f.type === "select" ? (
                <div className="relative">
                  <select {...common} onChange={(e) => update(f.name, e.target.value)} className={cx(common.className, "h-12 appearance-none pr-10", !values[f.name] && "text-grey")}>
                    <option value="" disabled>Choose an option</option>
                    {f.options!.map((o) => (
                      <option key={o.value} value={o.value} className="text-ink">{o.label}</option>
                    ))}
                  </select>
                  <svg aria-hidden viewBox="0 0 12 12" className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2.5 4.5L6 8l3.5-3.5" /></svg>
                </div>
              ) : (
                <input
                  {...common}
                  type={f.type}
                  inputMode={f.type === "tel" ? "tel" : f.type === "number" ? "numeric" : undefined}
                  autoComplete={f.autoComplete}
                  min={f.type === "date" ? today : f.type === "number" ? 1 : undefined}
                  max={f.type === "number" ? 10 : undefined}
                  maxLength={f.type === "date" || f.type === "number" ? undefined : f.type === "email" ? 120 : 80}
                  onChange={(e) => update(f.name, e.target.value)}
                  className={cx(common.className, "h-12")}
                />
              )}
              {err && (
                <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-[1rem] text-red-dark">
                  <svg aria-hidden viewBox="0 0 16 16" className="mt-[3px] h-3.5 w-3.5 shrink-0" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-.75 3.25h1.5v4.5h-1.5v-4.5zm0 5.75h1.5V12h-1.5v-1.5z" /></svg>
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-caption max-w-sm">
          The college uses these details only to respond to your enquiry. See the{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">privacy policy</a>.
        </p>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-[3px] bg-red px-7 font-semibold text-white transition-colors hover:bg-maroon disabled:cursor-wait disabled:opacity-75"
        >
          {status.state === "sending" && (
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="3" /><path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          )}
          {status.state === "sending" ? def.sending : def.submit}
        </button>
      </div>
    </form>
  );
}
