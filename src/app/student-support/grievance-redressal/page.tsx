import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote, ext } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "Grievance redressal",
  description: "How students of Shri Ram College of Commerce & Science can raise a grievance and get a fair resolution, under the UGC (Redress of Grievances of Students) Regulations, 2023.",
  alternates: { canonical: "/student-support/grievance-redressal" },
};

const steps = [
  ["Speak to someone first", "Raise the issue with your mentor or the office concerned. Many problems are solved quickly this way."],
  ["Submit a written grievance", "If it is not resolved, write to the grievance redressal committee, giving your name, class, roll number and the details of the issue. Hand it in at the college office or send it by email."],
  ["Committee review", "The committee looks into the grievance, may ask you and others for information, and gives its decision in writing within the time limit set by the UGC regulations."],
  ["Appeal", "If you are not satisfied, you may appeal to the Ombudsperson appointed by the University of Mumbai, or register the grievance on the UGC's e-Samadhan portal."],
];

export default function GrievancePage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/grievance-redressal"
      intro="Students with a complaint about academic matters, administration, facilities or treatment on campus can seek a fair resolution."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The college&apos;s grievance redressal process follows the UGC (Redress of Grievances of Students)
          Regulations, 2023. Complaints are handled confidentially, and no student will be penalised for raising a
          genuine grievance.
        </p>
      </div>

      <ol className="mt-12 space-y-8">
        {steps.map(([t, d], i) => (
          <li key={t} className="flex gap-6 border-t border-stone pt-6">
            <span className="font-serif text-[2.25rem] leading-none text-red tabular-nums">{i + 1}</span>
            <div>
              <h2 className="t-h3">{t}</h2>
              <p className="mt-2 text-ink-soft">{d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="prose-college mt-12 measure">
        <p>
          UGC e-Samadhan portal: <a href="https://samadhaan.ugc.ac.in" {...ext}>samadhaan.ugc.ac.in</a>
        </p>
      </div>

      <ContactNote title="Submitting a grievance">Address written grievances to the Grievance Redressal Committee.</ContactNote>
    </SectionShell>
  );
}
