import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Best practices",
  description: "Mentoring every student and activity-based learning: the best practices of Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/institutional-information/best-practices" },
};

const practices = [
  {
    title: "Mentoring every student",
    goal: "That no student goes unnoticed or unsupported.",
    how: "Each faculty member mentors a group of around 15 to 20 students, meeting them through the year and counselling them on academic and personal matters. Mentors track attendance and results and stay in touch with parents where needed.",
    photo: photos.faculty,
  },
  {
    title: "Activity-based learning",
    goal: "That students learn actively rather than by rote.",
    how: "Lesson plans, presentations, poster and paper presentations, projects, industrial visits and internships ask students to apply what they learn, explain it to others and connect it with practice.",
    photo: photos.labTeaching,
  },
];

export default function BestPracticesPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/best-practices"
      intro="Two practices that shape how the college teaches and supports its students."
    >
      <div className="space-y-16">
        {practices.map((p) => (
          <article key={p.title} className="grid gap-8 md:grid-cols-2 md:items-start">
            <Media label={p.title} {...p.photo} className="aspect-[4/3] w-full" sizes="(min-width:768px) 30vw, 100vw" />
            <div>
              <h2 className="t-h2">{p.title}</h2>
              <p className="mt-4 font-semibold text-red">Aim</p>
              <p className="mt-1 text-ink-soft">{p.goal}</p>
              <p className="mt-4 font-semibold text-red">In practice</p>
              <p className="mt-1 text-ink-soft">{p.how}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-14 measure text-ink-soft">
        The college reports that these practices have improved students&apos; understanding of their subjects,
        strengthened results, reduced backlogs and encouraged more students towards placements and higher studies.
      </p>
    </SectionShell>
  );
}
