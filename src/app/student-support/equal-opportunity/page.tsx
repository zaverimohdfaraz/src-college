import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote } from "@/components/support-bits";
import { Committee } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Equal Opportunity Cell",
  description: "Equal access for every student at Shri Ram College of Commerce & Science, and help for students with particular needs.",
  alternates: { canonical: "/student-support/equal-opportunity" },
};

export default function EqualOpportunityPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/equal-opportunity"
      intro="Equal access for all students, irrespective of gender, caste, class, religion or disability."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Equal access is part of the college&apos;s mission. The Equal Opportunity Cell makes sure every student has the
          same right to teaching, facilities, activities and support, and helps students who face disadvantage or
          discrimination.
        </p>
        <h2>Support for particular needs</h2>
        <p>
          Students who need support because of a disability, health condition or financial difficulty are encouraged
          to speak to their mentor or the college office, so that reasonable help can be arranged. This may include
          seating arrangements, help with forms and scholarships, or arrangements for examinations allowed under
          University of Mumbai rules, such as a writer or extra time for eligible students.
        </p>
        <h2>Students from reserved categories</h2>
        <p>
          The college follows government and University of Mumbai rules on reservation in admission, and helps eligible
          students apply for scholarships and freeships.
        </p>
        <h2>If you are treated unfairly</h2>
        <p>
          Discrimination of any kind is not tolerated. If you feel you have been treated unfairly, tell your mentor or
          raise it through the grievance redressal process.
        </p>
      </div>
      <div className="mt-16"><Committee id="eoc" /></div>
      <ContactNote />
    </SectionShell>
  );
}
