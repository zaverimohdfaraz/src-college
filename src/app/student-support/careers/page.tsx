import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Careers and placement",
  description: "The Placement and Career Guidance Cell at Shri Ram College of Commerce & Science, Bhandup: guidance, training, internships and recruitment.",
  alternates: { canonical: "/student-support/careers" },
};

const steps = [
  { t: "First year: find your direction", d: "Career talks and counselling help you understand the options your programme opens, from jobs to professional courses and further study." },
  { t: "Second year: build skills", d: "Communication, personality development and soft-skills sessions, add-on courses and internships build a record employers notice." },
  { t: "Final year: prepare and apply", d: "Résumé writing, aptitude practice and mock interviews prepare you for recruitment drives and higher-education applications." },
];

export default function CareersPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/careers"
      intro="The Placement and Career Guidance Cell helps students plan their next step: a first job, a professional qualification or further study."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The cell works with students from the first year, so that by graduation they know what they want to do and
          are ready to apply for it.
        </p>
      </div>

      <ol className="mt-12 space-y-8">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-6 border-t border-stone pt-6">
            <span className="font-serif text-[2.25rem] leading-none text-red tabular-nums">{i + 1}</span>
            <div>
              <h2 className="t-h3">{s.t}</h2>
              <p className="mt-2 text-ink-soft">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <Media label="Placement Cell" {...photos.placementCell} className="mt-14 aspect-[16/9] w-full" />

      <div className="prose-college mt-14 measure">
        <h2>What the cell offers</h2>
        <ul>
          <li>Career guidance and one-to-one counselling</li>
          <li>Training in communication, interviews and aptitude</li>
          <li>Information on internships, recruitment drives and job openings</li>
          <li>Guidance on professional courses such as CA, CS and CMA, and on postgraduate study</li>
          <li>Industrial visits and guest lectures that connect students with employers</li>
        </ul>
        <h2>Registering with the cell</h2>
        <p>
          Final-year students register with the Placement Cell at the start of the year. Opportunities are shared with
          registered students through class announcements and the notice board.
        </p>
      </div>
    </SectionShell>
  );
}
