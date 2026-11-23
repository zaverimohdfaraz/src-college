import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { StatusPill } from "@/components/disclosure";
import { ugcSections, statusOf } from "@/lib/ugc";

export const metadata: Metadata = {
  title: "Public self-disclosure (UGC)",
  description:
    "Information published by Shri Ram College of Commerce & Science under the UGC Guidelines on Public Self-Disclosure by Higher Education Institutions.",
  alternates: { canonical: "/institutional-information/ugc-disclosure" },
};

export default function UgcDisclosurePage() {
  const all = ugcSections.flatMap((s) => s.items.map((i) => statusOf(i.check)));
  const published = all.filter((s) => s.tone === "ok").length;
  const na = all.filter((s) => s.tone === "na").length;

  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/ugc-disclosure"
      intro="The National Education Policy 2020 asks institutions to be accountable through transparent public self-disclosure. This page lists every item in the UGC's guidelines and where to find it."
    >
      <div className="grid grid-cols-3 border-y border-stone">
        {[
          [published, "published"],
          [all.length - published - na, "being prepared"],
          [na, "not applicable"],
        ].map(([n, l], i) => (
          <div key={l} className={`py-5 ${i ? "border-l border-stone pl-4 sm:pl-6" : "pr-4"}`}>
            <p className="font-serif text-[2.25rem] leading-none text-red tabular-nums">{n}</p>
            <p className="mt-2 text-[1rem] text-muted">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[1rem] text-muted">
        All information is open to everyone, with no login or registration. Use the <Link href="/search" className="link-u text-ink">search</Link> to find anything on the website.
      </p>

      <div className="mt-14 space-y-14">
        {ugcSections.map((s) => (
          <section key={s.letter} aria-labelledby={`ugc-${s.letter}`}>
            <h2 id={`ugc-${s.letter}`} className="t-h3 flex gap-3 border-b-2 border-red pb-3 text-red">
              <span className="font-serif" aria-hidden>{s.letter})</span>
              {s.title}
            </h2>
            <ul className="divide-y divide-stone">
              {s.items.map((it) => {
                const st = statusOf(it.check);
                const href = it.href && it.check.kind === "doc" && !it.href.includes("#") ? `${it.href}#doc-${it.check.doc}` : it.href;
                return (
                  <li key={it.label} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    {href ? (
                      <Link href={href} className="link-u text-ink hover:text-red">{it.label}</Link>
                    ) : (
                      <span className="text-ink">{it.label}</span>
                    )}
                    <StatusPill tone={st.tone}>{st.label}</StatusPill>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
