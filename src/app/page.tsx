import Link from "next/link";
import type { Metadata } from "next";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import VideoBlock from "@/components/VideoBlock";
import { Container, Media, SectionHeading, ButtonLink, Arrow } from "@/components/ui";
import { NoticeList, MapEmbed, ContactLines, AdmissionBand } from "@/components/sections";
import { QuickTiles, StatsBand, CampusLifeHighlights } from "@/components/home-bands";
import { coursesByLevel, type Course } from "@/lib/courses";
import { site, formatPhone } from "@/lib/site";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Bhandup West, Mumbai` },
  alternates: { canonical: "/" },
};

const slides: Slide[] = [
  {
    id: "welcome",
    rail: "Welcome",
    title: "A degree college for Bhandup, since 2009",
    body: "Jana Seva Sangh's Shri Ram College of Commerce offers undergraduate and postgraduate study in commerce, management, arts and computing, affiliated to the University of Mumbai.",
    image: { label: "Main college building, exterior", ...photos.exterior },
    primary: { label: "Explore programmes", href: "/courses" },
    secondary: { label: "Enquire now", href: "/admissions#enquire" },
  },
  {
    id: "programmes",
    rail: "Programmes",
    title: "Commerce, management, arts and computing",
    body: "Choose from commerce, accounting, banking, management, arts and computing degrees, with postgraduate study in advanced accountancy and management.",
    image: { label: "Students in a classroom lecture", ...photos.lecture },
    primary: { label: "View all programmes", href: "/courses" },
    secondary: { label: "Visit departments", href: "/departments" },
  },
  {
    id: "access",
    rail: "Open to all",
    title: "Higher education within reach of every student",
    body: "Our mission is affordable education with equal access, regardless of gender, caste, class or religion — and a first step for many first-generation graduates.",
    image: { label: "Bhandup station", ...photos.station },
    primary: { label: "Our vision and mission", href: "/about#vision-mission" },
  },
  {
    id: "life",
    rail: "Campus life",
    title: "Learning that carries on beyond the classroom",
    body: "Mentoring, guest lectures, industrial visits, NSS, cultural events and sport help students grow in confidence as well as knowledge.",
    image: { label: "College hall", ...photos.hall },
    primary: { label: "Discover campus life", href: "/campus-life" },
  },
];

const reasons = [
  {
    title: "A mentor who knows you",
    text: "Every student is assigned a faculty mentor who looks after a small group, offering guidance on academic and personal matters throughout the year.",
  },
  {
    title: "Affordable and inclusive",
    text: "The college was founded to make higher education accessible to students from every background in Bhandup and the surrounding areas.",
  },
  {
    title: "Learning by doing",
    text: "Presentations, projects, group discussions and paper presentations sit alongside lectures, so students practise what they learn.",
  },
  {
    title: "Exposure to the working world",
    text: "Guest lectures, seminars, workshops, industrial visits and internships connect classroom study with how organisations really work.",
  },
  {
    title: "Confidence from the first year",
    text: "Personality development programmes and seminars build communication and soft skills from the very start of the degree.",
  },
  {
    title: "Education with a social purpose",
    text: "Through NSS and community initiatives — plantation drives, blood donation, village visits — students learn to serve as well as succeed.",
  },
];

function ProgrammeRow({ c, compact }: { c: Course; compact?: boolean }) {
  return (
    <li className={`group grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 py-6 ${compact ? "" : "md:grid-cols-[9rem_1fr_auto] md:items-baseline"}`}>
      <p className="font-serif text-[1.625rem] font-medium leading-none text-maroon md:text-[1.75rem]">{c.code}</p>
      <div className={`col-span-2 ${compact ? "" : "md:col-span-1"}`}>
        <h4 className="text-[1.1875rem] font-semibold text-ink">
          <Link href={`/courses/${c.slug}`} className="after:absolute after:inset-0 hover:text-maroon">
            {c.name}
          </Link>
        </h4>
        <p className="mt-1 max-w-[52ch] text-[1.0625rem] text-ink-soft">{c.summary}</p>
        <p className="mt-2 text-[0.9375rem] font-medium text-muted">{c.category}</p>
      </div>
      <div className={`relative z-10 col-span-2 flex items-center gap-5 ${compact ? "" : "md:col-span-1 md:flex-col md:items-end md:gap-2"}`}>
        <Link href={`/courses/${c.slug}`} className="inline-flex items-center gap-1.5 text-[1.0625rem] font-semibold text-maroon">
          <span className="link-u">View details</span>
          <Arrow className="transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link href={`/courses/${c.slug}#enquire`} className="link-u text-[1.0625rem] text-muted hover:text-ink">
          Enquire now
        </Link>
      </div>
    </li>
  );
}

export default function Home() {
  const ug = coursesByLevel("Undergraduate");
  const pg = coursesByLevel("Postgraduate");

  return (
    <>
      <HeroSlider slides={slides} />
      <QuickTiles />

      {/* Welcome */}
      <section aria-labelledby="welcome" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="t-kicker mb-3">Welcome</p>
            <h2 id="welcome" className="t-h1 text-red">An education rooted in service to the community</h2>
            <Media
              label="Students in a classroom"
              {...photos.classroomStudents}
              className="mt-10 hidden aspect-[4/3] w-full lg:block"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <div className="prose-college t-lead !text-ink-soft">
              <p>
                Jana Seva Sangh&apos;s Shri Ram College of Commerce was founded on 28 August 2009 by the Jana Seva Sangh, a
                charitable trust that has served the people of Mumbai through schools, colleges and welfare work for
                decades.
              </p>
              <p>
                The college was established to bring quality higher education to students in Bhandup and its
                neighbourhoods — many of them the first in their families to attend college. Its aim is to cultivate
                intellectual curiosity, personal growth and professional achievement in equal measure.
              </p>
            </div>
            <p className="mt-6 max-w-[60ch] text-ink-soft">
              Teaching here combines lectures with presentations, projects and guided discussion, and each student has a
              faculty mentor. Outside the classroom, cultural events, sport and community service give students the
              chance to lead, organise and contribute.
            </p>

            <dl className="mt-12 grid grid-cols-2 border-t border-stone">
              {[
                ["Established", "28 August 2009"],
                ["Affiliated to", "University of Mumbai"],
                ["Managed by", "Jana Seva Sangh"],
                ["Study centre of", "YCMOU"],
              ].map(([k, v], i) => (
                <div key={k} className={`border-b border-stone py-5 ${i % 2 === 0 ? "pr-6" : "border-l pl-6"}`}>
                  <dt className="text-[1rem] font-semibold text-red">{k}</dt>
                  <dd className="mt-1 font-serif text-[1.375rem] leading-snug text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <Link href="/about" className="mt-10 inline-flex items-center gap-2 font-semibold text-maroon">
              <span className="link-u">More about the college</span>
              <Arrow />
            </Link>
          </div>
        </Container>
      </section>

      <StatsBand />

      {/* Programmes */}
      <section aria-labelledby="programmes" className="border-t border-stone bg-ivory py-20 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="programmes"
              kicker="Academic programmes"
              title="Find the programme that fits your goals"
              intro="Undergraduate degrees in commerce, management, arts and computing, and postgraduate study in accountancy, management and computer applications."
            />
            <ButtonLink href="/courses" variant="secondary" className="self-start lg:self-auto">
              Compare all programmes
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h3 className="t-h3 flex items-baseline justify-between border-b-2 border-red pb-3 text-red">
                Undergraduate <span className="text-[1.0625rem] font-normal text-muted">{ug.length} programmes</span>
              </h3>
              <ul className="relative divide-y divide-stone [&>li]:relative">
                {ug.map((c) => <ProgrammeRow key={c.slug} c={c} />)}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <h3 className="t-h3 flex items-baseline justify-between border-b-2 border-red pb-3 text-red">
                Postgraduate <span className="text-[1.0625rem] font-normal text-muted">{pg.length} programmes</span>
              </h3>
              <ul className="relative divide-y divide-stone [&>li]:relative">
                {pg.map((c) => <ProgrammeRow key={c.slug} c={c} compact />)}
              </ul>
              <p className="t-caption mt-6 border-l-2 border-red pl-4">
                The MBA is offered through the college&apos;s YCMOU study centre. Programme availability is confirmed each
                academic year by the college office.
              </p>

              <aside aria-labelledby="h-help" className="on-dark relative mt-12 overflow-hidden bg-red p-8 text-white lg:sticky lg:top-28">
                <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/15" />
                <h3 id="h-help" className="relative font-serif text-[1.75rem] leading-tight">Not sure which programme suits you?</h3>
                <p className="relative mt-3 text-white/85">
                  Tell the admissions office what you enjoy and what you hope to do next. They will help you compare
                  programmes, eligibility and career directions.
                </p>
                <div className="relative mt-6 flex flex-wrap gap-3">
                  <Link href="/admissions#enquire" className="inline-flex h-12 items-center rounded-[3px] bg-white px-6 font-semibold text-red-dark transition-colors hover:bg-blush">
                    Ask the admissions office
                  </Link>
                  <a href={`tel:+91${site.phones[0]}`} className="inline-flex h-12 items-center rounded-[3px] border border-white/45 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-red-dark">
                    Call {formatPhone(site.phones[0])}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section aria-labelledby="why" className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="why"
                kicker="Why Shri Ram College"
                title="A college that knows its students by name"
                intro="Small mentoring groups, practical teaching and a strong sense of community shape the experience here."
              />
            </div>
          </div>
          <ul className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {reasons.map((r) => (
              <li key={r.title} className="border-t-[3px] border-red pt-5">
                <h3 className="t-h3 text-red">{r.title}</h3>
                <p className="mt-3 text-ink-soft">{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Campus & facilities */}
      <section aria-labelledby="campus" className="border-t border-stone bg-ivory py-20 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="campus"
              kicker="Campus and facilities"
              title="Spaces for study, practice and recreation"
              intro="The college functions from its own campus on Datta Mandir Road, Bhandup West."
            />
            <ButtonLink href="/facilities" variant="secondary" className="self-start lg:self-auto">
              See all facilities
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-6">
            <figure className="flex flex-col md:col-span-4 md:row-span-2">
              <Media label="College building" {...photos.corridor} className="aspect-[4/3] w-full md:aspect-auto md:flex-1" />
              <figcaption className="t-caption mt-3">Inside the college building, Bhandup West</figcaption>
            </figure>
            <figure className="md:col-span-2">
              <Media label="Classroom" {...photos.classroom} className="aspect-[4/3] w-full" />
              <figcaption className="t-caption mt-3">Classrooms</figcaption>
            </figure>
            <figure className="md:col-span-2">
              <Media label="Library" {...photos.library} className="aspect-[4/3] w-full" />
              <figcaption className="t-caption mt-3">Library</figcaption>
            </figure>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              { label: "Computer laboratory", ...photos.lab, cap: "Computer laboratory" },
              { label: "Gymnasium", ...photos.gym, cap: "Gymnasium" },
            ].map((m) => (
              <figure key={m.label}>
                <Media label={m.label} src={m.src} alt={m.alt} className="aspect-[16/9] w-full" />
                <figcaption className="t-caption mt-3">{m.cap}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CampusLifeHighlights />

      {/* Video */}
      <section aria-labelledby="video" className="border-t border-stone bg-ivory py-20 lg:py-28">
        <Container>
          <SectionHeading id="video" kicker="See the college" title="Take a look around" />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <VideoBlock className="lg:col-span-8" title="An introduction to the college" caption="A short film about the college, its campus and its students." />
            <div className="flex flex-col justify-between gap-10 lg:col-span-4">
              <p className="t-lead">
                Films of the campus and student activities will appear here once the college supplies them, so visitors
                can see the classrooms, library and events for themselves.
              </p>
              <VideoBlock title="Student activities" caption="Highlights from cultural events, sport and community service." />
            </div>
          </div>
        </Container>
      </section>

      <AdmissionBand />

      {/* Notices + contact */}
      <section aria-labelledby="notices" className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading id="notices" kicker="Latest updates" title="Notices and announcements" />
            <div className="mt-10">
              <NoticeList limit={5} />
            </div>
            <Link href="/notices" className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon"><span className="link-u">All notices</span><Arrow /></Link>

            <div className="mt-14 bg-blush p-7 sm:p-9">
              <h3 className="t-h3 text-red">Student essentials</h3>
              <ul className="mt-5 divide-y divide-red/15">
                {[
                  { t: "Apply for scholarships and freeships", d: "Government of Maharashtra MahaDBT and the National Scholarship Portal", h: "/student-support#scholarships" },
                  { t: "Examinations and results", d: "Timetables, hall tickets and University of Mumbai results", h: "/student-support#examinations" },
                  { t: "Report ragging", d: "Anti-Ragging Cell and the 24-hour helpline 1800-180-5522", h: "/student-support#anti-ragging" },
                  { t: "Raise a grievance", d: "The college grievance committee and UGC e-Samadhan", h: "/student-support#grievance" },
                ].map((i) => (
                  <li key={i.h}>
                    <Link href={i.h} className="group flex items-start justify-between gap-6 py-4">
                      <span>
                        <span className="block font-semibold text-ink group-hover:text-red-dark">{i.t}</span>
                        <span className="mt-0.5 block text-[1.0625rem] text-muted">{i.d}</span>
                      </span>
                      <Arrow className="mt-1.5 text-red transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading kicker="Visit us" title="Find the college" />
            <ContactLines className="mt-10" />
            <MapEmbed className="mt-8 aspect-[4/3]" />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact the college</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
