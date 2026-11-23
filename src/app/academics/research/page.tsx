import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { MemberTable } from "@/components/disclosure";
import { facts } from "@/lib/people";

export const metadata: Metadata = {
  title: "Research and innovation",
  description: "Student research and projects, entrepreneurship and central facilities at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/academics/research" },
};

export default function ResearchPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics/research"
      intro="As an undergraduate and postgraduate teaching college, research at the college centres on student projects, faculty development and practical inquiry."
    >
      <div className="prose-college measure">
        <h2>Research and Development Cell</h2>
        <p>
          The college encourages faculty and students to take up research through projects, paper presentations,
          seminars and conferences. Postgraduate programmes include research methodology and a project, and
          undergraduate programmes include project work in the final years.
        </p>

      </div>
      <MemberTable id="research-details" members={facts.research} className="mt-6" />
      <div className="prose-college mt-12 measure">
        <h2>Entrepreneurship</h2>
        <p>
          Through guest lectures, industrial visits and add-on courses, students learn how businesses are started and
          run. Students interested in starting a venture can approach the Placement and Career Guidance Cell for
          guidance and contacts.
        </p>
      </div>
      <MemberTable id="incubation" members={facts.incubation} className="mt-6" />
      <div className="prose-college mt-12 measure">
        <h2>Central facilities</h2>
        <p>
          The <Link href="/facilities/library">library</Link>, the <Link href="/facilities/computer-laboratory">computer laboratory</Link> and
          the <Link href="/facilities/classrooms-and-hall">multipurpose hall</Link> are shared by all departments for
          study, practical work and academic events.
        </p>
      </div>
    </SectionShell>
  );
}
