import { site, formatPhone } from "@/lib/site";

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Prominent box with the college phone and email. */
export function ContactNote({ title = "Contact the college office", children }: { title?: string; children?: React.ReactNode }) {
  return (
    <div role="note" className="mt-12 border-l-[3px] border-red bg-ivory px-6 py-5">
      <p className="font-semibold text-ink">{title}</p>
      <p className="mt-1 text-ink-soft">
        {children}
        {children ? " " : ""}Call <a href={`tel:+91${site.phones[0]}`} className="link-u font-medium text-ink">{formatPhone(site.phones[0])}</a> or
        email <a href={`mailto:${site.email}`} className="link-u font-medium text-ink">{site.email}</a>.
      </p>
    </div>
  );
}
