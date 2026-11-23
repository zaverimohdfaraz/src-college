import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote } from "@/components/support-bits";
import { MemberTable } from "@/components/disclosure";
import { facts } from "@/lib/people";

export const metadata: Metadata = {
  title: "Facilities for differently-abled students",
  description: "Access, examination support and help for students with disabilities at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/student-support/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/accessibility"
      intro="The college aims to make study possible for every student, in line with the Rights of Persons with Disabilities Act, 2016."
    >
      <div className="prose-college measure">
        <h2>Support available</h2>
        <ul>
          <li>Seating and classroom arrangements suited to the student&apos;s needs</li>
          <li>Help with admission forms, scholarship applications and university procedures</li>
          <li>Examination arrangements allowed under University of Mumbai rules for eligible students, such as a writer (scribe), extra time or a separate room</li>
          <li>Reservation in admission as per government and university rules</li>
          <li>Mentoring and a named contact through the Equal Opportunity Cell</li>
        </ul>
        <h2>Access to the campus</h2>
        <p>
          Students who need help moving around the campus should tell the college office at admission, so arrangements
          can be made.
        </p>
      </div>
      <MemberTable id="barrier-free" members={facts.accessibility} className="mt-6" />
      <div className="prose-college mt-12 measure">
        <h2>Accessibility of this website</h2>
        <p>
          This website is built to be usable with screen readers and keyboards, with readable text sizes and good colour
          contrast. If any part of it is hard to use, please tell the college.
        </p>
      </div>
      <ContactNote title="Ask for support">Tell the college office or your mentor what you need, in confidence.</ContactNote>
    </SectionShell>
  );
}
