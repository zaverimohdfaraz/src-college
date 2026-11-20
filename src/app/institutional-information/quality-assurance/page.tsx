import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote, ext } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "Quality assurance and accreditation",
  description: "NAAC accreditation and the Internal Quality Assurance Cell (IQAC) at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/institutional-information/quality-assurance" },
};

const cycle = [
  ["Plan", "The IQAC sets quality goals for the year with the Principal and the academic committees."],
  ["Teach and support", "Lesson plans, mentoring and activities put those goals into practice."],
  ["Listen", "Feedback is collected from students, parents, alumni and staff."],
  ["Review and report", "Results are reviewed, improvements agreed, and the Annual Quality Assurance Report (AQAR) is submitted to NAAC."],
];

export default function QualityPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/quality-assurance"
      intro="How the college checks and improves the quality of its teaching, support and administration."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The college is assessed by the National Assessment and Accreditation Council (NAAC) and maintains an Internal
          Quality Assurance Cell (IQAC), which plans, monitors and reviews academic and administrative quality throughout
          the year.
        </p>
        <h2>The quality cycle</h2>
      </div>
      <ol className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {cycle.map(([t, d], i) => (
          <li key={t} className="flex gap-5 border-t border-stone pt-6">
            <span className="font-serif text-[2.25rem] leading-none text-red tabular-nums">{i + 1}</span>
            <div>
              <h3 className="t-h3">{t}</h3>
              <p className="mt-2 text-ink-soft">{d}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="prose-college mt-14 measure">
        <h2>About NAAC</h2>
        <p>
          NAAC is an autonomous body of the University Grants Commission that assesses higher education institutions on
          curriculum, teaching, research, infrastructure, student support, governance and values. Details of the
          process are on the <a href="http://www.naac.gov.in" {...ext}>NAAC website</a>.
        </p>
      </div>
      <ContactNote title="Accreditation documents">The current accreditation certificate, Self Study Report and AQARs can be requested from the college office.</ContactNote>
    </SectionShell>
  );
}
