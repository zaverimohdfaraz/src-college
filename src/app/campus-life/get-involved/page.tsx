import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Student committees and cells at Shri Ram College of Commerce & Science, Bhandup, and how to join them.",
  alternates: { canonical: "/campus-life/get-involved" },
};

const groups = [
  { name: "Students' Council", text: "Represents student views to the college and helps organise events." },
  { name: "Cultural Committee", text: "Plans cultural programmes, celebrations and the Annual Day." },
  { name: "Gymkhana Committee", text: "Organises sport, competitions and Sports Day." },
  { name: "National Service Scheme (NSS)", text: "Community service and social awareness activities." },
  { name: "DLLE", text: "Lifelong learning and extension projects in the community." },
  { name: "Magazine Committee", text: "Produces the college magazine with student writing and art." },
  { name: "Placement and Career Guidance Cell", text: "Career guidance, training and placement support." },
  { name: "Women Development Cell", text: "Workshops and awareness programmes for women students." },
  { name: "Alumni Association", text: "Keeps graduates connected with the college and its students." },
];

export default function GetInvolvedPage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/get-involved"
      intro="Committees and cells run by staff and students offer many ways to take part."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Joining a committee is the quickest way to make friends across programmes and years, and to gain experience
          of planning, teamwork and leadership.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
        {groups.map((g) => (
          <li key={g.name} className="border-t-2 border-red py-5">
            <h2 className="t-h4 text-red">{g.name}</h2>
            <p className="mt-2 text-[1.0625rem] text-ink-soft">{g.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="t-h2 mt-16">How to join</h2>
      <div className="prose-college mt-6 measure">
        <ol>
          <li>Watch for announcements at the start of the year, in class and on the notice board.</li>
          <li>Tell your mentor which committee interests you; they will introduce you to its faculty convenor.</li>
          <li>Attend the first meeting. Most committees welcome new members throughout the year.</li>
        </ol>
      </div>

      <Link href="/institutional-information/committees" className="mt-10 inline-flex items-center gap-2 font-semibold text-maroon">
        <span className="link-u">See all committees and cells</span><Arrow />
      </Link>
    </SectionShell>
  );
}
