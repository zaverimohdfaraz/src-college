import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, OnThisPage, Pending, Media, Arrow } from "@/components/ui";
import { AdmissionBand } from "@/components/sections";
import { site } from "@/lib/site";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the college",
  description:
    "The history, vision, mission and values of Jana Seva Sangh's Shri Ram College of Commerce, Bhandup West — founded in 2009 by the Jana Seva Sangh and affiliated to the University of Mumbai.",
  alternates: { canonical: "/about" },
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "history", label: "History" },
  { id: "vision-mission", label: "Vision and mission" },
  { id: "values", label: "Our values" },
  { id: "leadership", label: "Leadership" },
  { id: "trust", label: "Jana Seva Sangh" },
];

const mission = [
  "To offer affordable higher education with equal access for all, irrespective of gender, caste, class or religion.",
  "To support the development of every student in all areas of life, not in academics alone.",
  "To give students advanced knowledge and current skills in their chosen field, so that they are ready for employment.",
  "To provide value-based education that helps students become responsible and ethical citizens.",
];

const values = [
  { title: "Access", text: "Higher education should be within reach of every capable student, whatever their background or means." },
  { title: "Care", text: "Students learn best when someone knows them. Mentoring and small-group guidance are central to how the college works." },
  { title: "Rigour", text: "Lessons are planned, the academic calendar is set in advance, and progress is reviewed throughout the year." },
  { title: "Character", text: "Knowledge matters most when it is used responsibly. The college encourages integrity, discipline and respect." },
  { title: "Service", text: "As part of a charitable trust, the college expects its students to give back to the community around them." },
];

const leadership = ["President, Jana Seva Sangh", "Director", "Principal", "Vice Principal"];

const institutions = [
  "Shri Ram College of Commerce (Degree College), Bhandup",
  "Kumari Kasturi Vidyalaya, Bhandup",
  "K.K.V. Junior College, Bhandup",
  "Bhandup N.T. High School and Junior College",
  "Janta Vidyalaya, Dongri",
  "Mazgaon N.T. High School, Mulund",
  "Nere High School and Junior College",
  "Vihighar High School",
  "Waze High School and Junior College",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        title="About the college"
        intro="Founded in 2009 by the Jana Seva Sangh, Shri Ram College of Commerce brings university education to students of Bhandup and the eastern suburbs of Mumbai."
        image={{ label: "College building", ...photos.exterior }}
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <aside className="lg:col-span-3">
          <OnThisPage items={sections} />
        </aside>

        <div className="space-y-24 lg:col-span-8 lg:col-start-5">
          <section id="introduction" aria-labelledby="h-intro">
            <h2 id="h-intro" className="t-h2">Introduction</h2>
            <div className="prose-college mt-6 measure">
              <p className="t-lead">
                {site.name} is an affiliated college of the {site.affiliation}, located on Datta Mandir Road in Bhandup
                West. It offers undergraduate and postgraduate programmes in commerce, management, arts and computing.
              </p>
              <p>
                The college exists to make good higher education available close to home. Many students who join are the
                first in their families to study at degree level, and the college sees it as its responsibility to
                support them academically and personally until they graduate with confidence.
              </p>
              <p>
                Teaching is planned and purposeful. The academic calendar is prepared before each year begins, faculty
                prepare lesson plans for each semester, and classroom teaching is supported by presentations, online
                material, projects, seminars and guest lectures. Each faculty member mentors a small group of students,
                which means no student has to find their way alone.
              </p>
            </div>
          </section>

          <section id="history" aria-labelledby="h-history">
            <h2 id="h-history" className="t-h2">History</h2>
            <p className="mt-6 measure text-ink-soft">
              The college grew out of the Jana Seva Sangh&apos;s long-standing work in education. Having run schools and
              junior colleges in the area for many years, the trust established a degree college so that its students —
              and others from the neighbourhood — could continue their studies without travelling far.
            </p>
            <ol className="relative mt-10 space-y-10 border-l border-stone pl-8">
              {[
                ["2009", "Founded on 28 August 2009 by the Jana Seva Sangh and affiliated to the University of Mumbai."],
                ["Growth", "Built a range of undergraduate programmes across commerce, management, arts, information technology and computer science, together with the M.Com. in Advanced Accountancy."],
                ["2024", "Became a study centre of Yashwantrao Chavan Maharashtra Open University (YCMOU), opening flexible postgraduate routes such as the MBA."],
                ["Today", "Continues to serve students from Bhandup and the surrounding suburbs through its undergraduate and postgraduate programmes."],
              ].map(([year, text]) => (
                <li key={year} className="relative">
                  <span aria-hidden className="absolute -left-[calc(2rem+5px)] top-2 h-[9px] w-[9px] rounded-full bg-red ring-4 ring-white" />
                  <p className="font-serif text-[1.625rem] leading-none text-maroon">{year}</p>
                  <p className="mt-2 measure text-ink-soft">{text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="vision-mission" aria-labelledby="h-vm">
            <h2 id="h-vm" className="t-h2">Vision and mission</h2>
            <figure className="mt-10 border-l-[3px] border-red bg-ivory px-8 py-10 md:px-12">
              <p className="text-[1.0625rem] font-semibold text-red">Our vision</p>
              <blockquote className="mt-4 font-serif text-[1.75rem] leading-snug text-ink md:text-[2.25rem]">
                To develop a student-centric environment in which intellectual, cultural, social and physical standards
                are strengthened and met.
              </blockquote>
            </figure>
            <div className="mt-12">
              <p className="t-h3 text-red">Our mission</p>
              <ol className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {mission.map((m, i) => (
                  <li key={m} className="flex gap-5">
                    <span className="font-serif text-[1.875rem] leading-none text-red tabular-nums">{i + 1}</span>
                    <p className="text-ink-soft">{m}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="values" aria-labelledby="h-values">
            <h2 id="h-values" className="t-h2">Our values</h2>
            <p className="mt-6 measure text-ink-soft">
              These values describe how the college aims to treat its students and what it hopes they will take with them
              when they leave.
            </p>
            <dl className="mt-10 divide-y divide-stone border-y border-stone">
              {values.map((v) => (
                <div key={v.title} className="grid gap-2 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
                  <dt className="font-serif text-[1.625rem] text-red">{v.title}</dt>
                  <dd className="text-ink-soft">{v.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="leadership" aria-labelledby="h-lead">
            <h2 id="h-lead" className="t-h2">Leadership</h2>
            <p className="mt-6 measure text-ink-soft">
              The college is governed by the Jana Seva Sangh and led on campus by its Principal, supported by the Vice
              Principal, faculty and administrative staff.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {leadership.map((role) => (
                <li key={role} className="flex gap-5">
                  <Media label={role} alt={role} className="aspect-[4/5] w-28 shrink-0" hideLabel />
                  <div className="pt-1">
                    <p className="text-[1rem] font-semibold text-red">{role}</p>
                    <p className="mt-2 text-[1.0625rem] text-muted">Name, photograph and message to be supplied by the college.</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="trust" aria-labelledby="h-trust">
            <h2 id="h-trust" className="t-h2">The Jana Seva Sangh</h2>
            <div className="prose-college mt-6 measure">
              <p>
                The Jana Seva Sangh is a charitable trust devoted to serving society. Its work spans education, health
                care and public welfare: it establishes and maintains schools and colleges, supports students through
                scholarships, provides medical assistance and contributes to community development.
              </p>
              <p>The trust&apos;s education wing includes the following institutions:</p>
            </div>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {institutions.map((i) => (
                <li key={i} className="border-b border-stone py-3 text-ink-soft">{i}</li>
              ))}
            </ul>
            <Pending className="mt-8">
              The trust&apos;s founding year, founders and office-bearers will be added once confirmed by the Jana Seva
              Sangh.
            </Pending>
          </section>

          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-stone pt-10">
            <Link href="/academics" className="inline-flex items-center gap-2 font-semibold text-maroon"><span className="link-u">Academics</span><Arrow /></Link>
            <Link href="/institutional-information" className="inline-flex items-center gap-2 font-semibold text-maroon"><span className="link-u">Institutional information</span><Arrow /></Link>
          </div>
        </div>
      </Container>
      <AdmissionBand />
    </>
  );
}
