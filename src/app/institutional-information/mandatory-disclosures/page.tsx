import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote } from "@/components/support-bits";
import { disclosures } from "@/lib/institutional";

export const metadata: Metadata = {
  title: "Mandatory disclosures",
  description: "Official documents of Shri Ram College of Commerce & Science: affiliation, accreditation, AQAR, AISHE, RTI and statutory committees.",
  alternates: { canonical: "/institutional-information/mandatory-disclosures" },
};

export default function DisclosuresPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/mandatory-disclosures"
      intro="Higher education institutions publish key documents so that students, parents and regulators can see how they are governed."
    >
      <h2 className="t-h2">Documents</h2>
      <ul className="mt-8 divide-y divide-stone border-y border-stone">
        {disclosures.map((d) => (
          <li key={d} className="flex gap-4 py-4 text-ink">
            <svg aria-hidden viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-red" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 2.5h6.5L15 6v11.5H5z" /><path d="M11.5 2.5V6H15M7.5 10h5M7.5 13h5" />
            </svg>
            {d}
          </li>
        ))}
      </ul>
      <div className="prose-college mt-10 measure">
        <h2>Right to Information</h2>
        <p>
          Requests under the Right to Information Act, 2005 can be made in writing to the college&apos;s Public
          Information Officer at the college office.
        </p>
      </div>
      <ContactNote title="Requesting a document">Copies of these documents can be requested from the college office.</ContactNote>
    </SectionShell>
  );
}
