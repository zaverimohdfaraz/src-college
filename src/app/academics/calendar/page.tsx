import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Academic calendar",
  description: "How the academic year at Shri Ram College of Commerce & Science is organised: semesters, examinations and vacations under the University of Mumbai.",
  alternates: { canonical: "/academics/calendar" },
};

const year = [
  { when: "June to July", what: "Admissions and the start of the year", text: "First-year admissions follow the declaration of results. Classes for continuing students begin, and the first-year orientation programme is held." },
  { when: "July to October", what: "First half: odd semester", text: "Teaching for Semesters I, III and V, with internal assessment, projects and activities such as NSS enrolment and cultural events." },
  { when: "October to November", what: "Semester examinations and Diwali vacation", text: "End-of-semester examinations are followed by the Diwali vacation." },
  { when: "November to March", what: "Second half: even semester", text: "Teaching for Semesters II, IV and VI. This half usually includes the Annual Day and Sports Day." },
  { when: "March to April", what: "Semester examinations", text: "End-of-semester examinations for the even semester." },
  { when: "May", what: "Summer vacation", text: "Results are declared by the University and the college, and the cycle begins again." },
];

export default function CalendarPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics/calendar"
      intro="The academic year follows the University of Mumbai's semester pattern and the college's own academic plan."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Each year is divided into two semesters. Before the year begins, the academic committee prepares a calendar
          of teaching days, internal assessments, examinations, events and holidays.
        </p>
        <p>The outline below shows how a typical year runs. Exact dates change each year.</p>
      </div>

      <ol className="relative mt-12 space-y-10 border-l border-stone pl-8">
        {year.map((y) => (
          <li key={y.what} className="relative">
            <span aria-hidden className="absolute -left-[calc(2rem+5px)] top-2 h-[9px] w-[9px] rounded-full bg-red ring-4 ring-white" />
            <p className="text-[1rem] font-semibold text-red">{y.when}</p>
            <h2 className="mt-1 font-serif text-[1.5rem] leading-snug text-ink">{y.what}</h2>
            <p className="mt-2 measure text-ink-soft">{y.text}</p>
          </li>
        ))}
      </ol>

      <div className="prose-college mt-14 measure">
        <p>
          Dates for the current year, including examination timetables and holidays, are announced on the notices page
          and the college notice board.
        </p>
      </div>
      <Link href="/notices" className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon">
        <span className="link-u">See the latest notices</span><Arrow />
      </Link>
    </SectionShell>
  );
}
