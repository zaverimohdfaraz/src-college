import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";
import { ext } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "Examinations and results",
  description: "Internal assessment, semester examinations, results and revaluation at Shri Ram College of Commerce & Science, affiliated to the University of Mumbai.",
  alternates: { canonical: "/student-support/examinations" },
};

export default function ExaminationsPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/examinations"
      intro="Examinations follow the University of Mumbai's scheme for each programme."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The college&apos;s Examination Committee conducts internal and college-level examinations and coordinates
          with the University of Mumbai for semester examinations.
        </p>
        <h2>How you are assessed</h2>
        <p>
          Most programmes combine continuous internal assessment, such as class tests, assignments, projects,
          presentations and attendance, with an end-of-semester examination. The weight given to each part is set by
          the university for your programme and year.
        </p>
        <h2>Before the examination</h2>
        <ul>
          <li>Fill in the examination form within the dates announced by the college.</li>
          <li>Timetables and hall-ticket instructions are published on the notices page and the college notice board.</li>
          <li>Carry your hall ticket and college identity card to every paper.</li>
          <li>Regular attendance is expected; the Attendance Committee works with students who fall behind.</li>
        </ul>
        <h2>Results, revaluation and ATKT</h2>
        <ul>
          <li>Results are announced by the college and, for university examinations, on the <a href="https://mu.ac.in" {...ext}>University of Mumbai</a> website.</li>
          <li>If you want a photocopy of your answer book or a revaluation, apply within the time limit given with the result.</li>
          <li>Students with backlogs (ATKT) should meet the examination office promptly to plan their reappearance.</li>
        </ul>
      </div>
      <Link href="/notices" className="mt-10 inline-flex items-center gap-2 font-semibold text-maroon">
        <span className="link-u">See the latest notices</span><Arrow />
      </Link>
    </SectionShell>
  );
}
