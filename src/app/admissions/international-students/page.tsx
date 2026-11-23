import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "International students",
  description: "Admission procedure and support for international students and students from outside India at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/admissions/international-students" },
};

export default function InternationalPage() {
  return (
    <SectionShell
      section="admissions"
      href="/admissions/international-students"
      intro="Students from outside India are welcome to enquire about admission."
    >
      <div className="prose-college measure">
        <h2>Admission procedure</h2>
        <p>
          Admission of foreign nationals and students with qualifications from outside India follows the rules of the
          University of Mumbai. Before admission, the University requires an eligibility certificate confirming that
          the applicant&apos;s qualifications are equivalent to the Indian qualification required for the programme.
        </p>
        <ul>
          <li>Send an enquiry with your nationality, qualifications and the programme you are interested in.</li>
          <li>The college office will explain the eligibility and equivalence process and the documents needed, which usually include your passport, a valid student visa and mark sheets with certified translations where needed.</li>
          <li>Foreign nationals must also complete any registration required by Indian immigration authorities after arrival.</li>
        </ul>
        <h2>Study in India</h2>
        <p>
          The Government of India&apos;s <a href="https://www.studyinindia.gov.in" target="_blank" rel="noopener noreferrer">Study in India</a> programme
          provides information for international students about studying at Indian institutions.
        </p>
        <h2>Support on campus</h2>
        <p>
          International students have access to the same mentoring, library, laboratory and student support as all
          students. The college office can advise on documents and university procedures.
        </p>
      </div>
      <ContactNote />
    </SectionShell>
  );
}
