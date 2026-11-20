import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Alumni",
  description: "The Alumni Association of Shri Ram College of Commerce & Science, Bhandup: stay connected, mentor students and take part in events.",
  alternates: { canonical: "/institutional-information/alumni" },
};

const ways = [
  ["Stay in touch", "Share your current role and contact details so the college can invite you to events."],
  ["Mentor a student", "Talk to current students about your course, your work and the choices you made."],
  ["Speak at the college", "Give a guest lecture or join a career talk organised by the Placement Cell."],
  ["Help with placements", "Tell the Placement Cell about internships and openings at your workplace."],
];

export default function AlumniPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/alumni"
      intro="Graduates of the college are part of a growing community that stretches back to 2009."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The Alumni Association keeps former students in touch with the college. Alumni bring the world of work into
          the classroom, and their experience is one of the most useful things current students can hear.
        </p>
      </div>
      <h2 className="t-h2 mt-14">Ways to stay involved</h2>
      <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {ways.map(([t, d]) => (
          <li key={t} className="border-t-[3px] border-red pt-5">
            <h3 className="t-h3 text-red">{t}</h3>
            <p className="mt-2 text-ink-soft">{d}</p>
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact#forms" className="mt-12">Get in touch with the college</ButtonLink>
    </SectionShell>
  );
}
