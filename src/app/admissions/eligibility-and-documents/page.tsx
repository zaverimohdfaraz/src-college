import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";
import { coursesByLevel } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Eligibility and documents",
  description: "Who can apply to undergraduate and postgraduate programmes at Shri Ram College of Commerce & Science, and the documents usually needed for admission.",
  alternates: { canonical: "/admissions/eligibility-and-documents" },
};

const documents = [
  "Std. X and Std. XII mark sheets (for postgraduate admission, all degree mark sheets as well)",
  "School or college leaving certificate",
  "Aadhaar card",
  "Recent passport-size photographs",
  "Caste certificate and caste validity certificate, if you are applying under a reserved category",
  "Migration certificate, if you studied under a board or university outside Maharashtra",
  "Gap certificate or affidavit, if there is a break in your education",
];

export default function EligibilityPage() {
  return (
    <SectionShell
      section="admissions"
      href="/admissions/eligibility-and-documents"
      intro="A general guide to who can apply, and what to keep ready. The admissions office confirms the exact rules for each year."
    >
      <div className="prose-college measure">
        <h2>Undergraduate programmes</h2>
        <p>
          Applicants should have passed the Higher Secondary Certificate (Std. XII) examination, or an equivalent
          examination recognised by the University of Mumbai. Admission is merit-based and follows the university&apos;s
          guidelines. Some programmes may expect particular subjects at Std. XII, such as mathematics for the
          computing degrees.
        </p>
        <h2>Postgraduate programmes</h2>
        <p>
          Applicants need a bachelor&apos;s degree in a relevant subject from a recognised university. Programmes
          offered through YCMOU or university distance education follow the eligibility rules of that university.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {[{ t: "Undergraduate", l: coursesByLevel("Undergraduate") }, { t: "Postgraduate", l: coursesByLevel("Postgraduate") }].map((g) => (
          <div key={g.t}>
            <p className="t-h4 border-b border-ink pb-2">{g.t} programmes</p>
            <ul className="mt-2">
              {g.l.map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="group flex items-center justify-between border-b border-stone py-2.5">
                    <span className="text-ink group-hover:text-maroon">{c.code}</span>
                    <Arrow className="text-muted group-hover:text-maroon" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="t-h2 mt-16">Documents usually needed</h2>
      <p className="mt-5 measure text-ink-soft">Bring originals and photocopies. The office will tell you which apply to you.</p>
      <ul className="mt-8 divide-y divide-stone border-y border-stone">
        {documents.map((d) => (
          <li key={d} className="flex gap-4 py-4 text-ink-soft">
            <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            {d}
          </li>
        ))}
      </ul>

      <div className="prose-college mt-14 measure">
        <h2>Before you contact us</h2>
        <p>It helps to have this ready, so the office can give you clear and specific guidance:</p>
        <ul>
          <li>The programme or programmes you are considering</li>
          <li>Your current or most recent qualification, and your results if available</li>
          <li>Whether you are applying for the first year or another entry route</li>
          <li>Any questions about scholarships, timings or support you may need</li>
        </ul>
      </div>
      <Link href="/admissions#enquire" className="mt-8 inline-flex items-center gap-2 font-semibold text-maroon">
        <span className="link-u">Send an admission enquiry</span><Arrow />
      </Link>
    </SectionShell>
  );
}
