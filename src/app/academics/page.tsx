import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionHeading, Pending, Arrow, ButtonLink } from "@/components/ui";
import { AdmissionBand } from "@/components/sections";
import { coursesByLevel } from "@/lib/courses";
import { departments } from "@/lib/departments";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Undergraduate and postgraduate programmes, departments and the approach to teaching at Shri Ram College of Commerce, Bhandup West, Mumbai.",
  alternates: { canonical: "/academics" },
};

const approach = [
  { title: "Planned teaching", text: "An academic committee prepares the academic calendar in advance, and faculty prepare lesson plans before each semester begins." },
  { title: "Mentoring", text: "Each faculty member mentors a group of students, counselling them on academic progress and personal concerns." },
  { title: "Active learning", text: "Presentations, poster and paper presentations, group discussions and project work help students apply what they learn." },
  { title: "Beyond the syllabus", text: "Guest lectures, seminars, workshops, conferences, industrial visits and internships connect study with practice." },
  { title: "Digital resources", text: "Presentations, online content and video lectures support classroom teaching, alongside access to e-journals and e-books." },
  { title: "Listening to feedback", text: "The college collects feedback from students, parents and alumni and uses it to improve teaching and support." },
];

export default function AcademicsPage() {
  const ug = coursesByLevel("Undergraduate");
  const pg = coursesByLevel("Postgraduate");

  return (
    <>
      <PageHero
        crumbs={[{ label: "Academics" }]}
        title="Academics"
        intro="Programmes in commerce, management, arts and computing, taught by five departments, with teaching that combines structure, practice and personal attention."
      />

      <section aria-labelledby="h-programmes" className="py-16 lg:py-24">
        <Container>
          <SectionHeading id="h-programmes" title="Programmes" intro="Undergraduate degrees are offered as an affiliated college of the University of Mumbai. Postgraduate options include on-campus and open-university routes." />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {[
              { title: "Undergraduate", list: ug },
              { title: "Postgraduate", list: pg },
            ].map((g) => (
              <div key={g.title}>
                <h3 className="t-h3 border-b-2 border-red pb-3 text-red">{g.title}</h3>
                <ul className="divide-y divide-stone">
                  {g.list.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/courses/${c.slug}`} className="group flex items-baseline gap-5 py-4">
                        <span className="w-24 shrink-0 font-serif text-[1.375rem] text-maroon">{c.code}</span>
                        <span className="flex-1 font-medium text-ink group-hover:text-maroon">{c.name}</span>
                        <Arrow className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-maroon" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/courses" variant="secondary">Browse and filter all programmes</ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-labelledby="h-approach" className="border-y border-stone bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading id="h-approach" title="How we teach" intro="The college follows a structured, student-centred approach that it continues to develop in response to feedback." />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((a) => (
              <div key={a.title} className="border-t-[3px] border-red pt-5">
                <h3 className="t-h3 text-red">{a.title}</h3>
                <p className="mt-3 text-ink-soft">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="h-depts" className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="h-depts" title="Departments" intro="Five academic departments share responsibility for teaching across the college's programmes." />
            <ButtonLink href="/departments" variant="secondary" className="mt-8">Visit the departments</ButtonLink>
          </div>
          <ul className="divide-y divide-stone border-y border-stone lg:col-span-7 lg:col-start-6">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link href={`/departments#${d.slug}`} className="group grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-center">
                  <span>
                    <span className="block font-serif text-[1.5rem] text-ink group-hover:text-maroon">{d.name}</span>
                    <span className="mt-1 block text-[1.0625rem] text-muted">{d.focus.slice(0, 4).join(", ")}</span>
                  </span>
                  <Arrow className="hidden text-muted md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="h-cal" className="pb-16 lg:pb-24">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-cal" className="t-h2">Academic calendar</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-ink-soft measure">
              Term dates, examination periods and holidays follow the University of Mumbai schedule and the
              college&apos;s own academic plan, which is published at the start of each year.
            </p>
            <Pending className="mt-6">The academic calendar for the current year will be published here once issued by the college.</Pending>
          </div>
        </Container>
      </section>

      <AdmissionBand />
    </>
  );
}
