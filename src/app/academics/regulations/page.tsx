import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { DocumentList } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Regulations and ordinances",
  description: "University of Mumbai ordinances, regulations, syllabi and examination rules that apply to programmes at Shri Ram College of Commerce & Science.",
  alternates: { canonical: "/academics/regulations" },
};

const links = [
  ["University of Mumbai", "Ordinances, regulations, circulars and syllabi for each programme", "https://mu.ac.in"],
  ["UGC regulations", "Regulations that apply to all higher education institutions", "https://www.ugc.gov.in"],
  ["YCMOU", "Rules for programmes at the YCMOU study centre", "https://ycmou.ac.in"],
];

export default function RegulationsPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics/regulations"
      intro="As an affiliated college, the college follows the statutes, ordinances and regulations of the University of Mumbai."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The University sets the syllabus, the scheme of examination, passing rules, credit requirements and rules for
          revaluation and ATKT for each programme. The college applies these rules and announces any changes to students.
        </p>
      </div>
      <ul className="mt-10 divide-y divide-stone border-y border-stone">
        {links.map(([t, d, u]) => (
          <li key={t} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <span><span className="block font-semibold text-ink">{t}</span><span className="text-[1rem] text-muted">{d}</span></span>
            <a href={u} target="_blank" rel="noopener noreferrer" className="link-u shrink-0 font-semibold text-maroon">Visit website<span className="sr-only"> (opens in a new tab)</span></a>
          </li>
        ))}
      </ul>
      <h2 className="t-h2 mt-16">College documents</h2>
      <DocumentList ids={["academicCalendar"]} className="mt-6" />
    </SectionShell>
  );
}
