import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionHeading, Media, Arrow, ButtonLink } from "@/components/ui";
import VideoBlock from "@/components/VideoBlock";
import { photos, type Photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Campus life",
  description:
    "Cultural events, sport, NSS, DLLE, student council and community service at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/campus-life" },
};

const strands = [
  {
    title: "Culture and celebration",
    text: "The Cultural Committee organises events through the year, and the Annual Day brings the whole college together to celebrate talent and achievement. Students plan, host and perform, gaining confidence on and off the stage.",
    img: "Annual Day celebrations",
    photo: photos.hall as Photo | undefined,
  },
  {
    title: "Sport and fitness",
    text: "The Gymkhana Committee runs sport at the college, including the annual Sports Day. The college gymnasium gives students a place to stay active alongside their studies.",
    img: "Sports Day",
    photo: photos.sports,
  },
  {
    title: "Service to the community",
    text: "Through the National Service Scheme (NSS) and community initiatives — tree plantation drives, blood donation camps, nutritious food distribution and village visits — students put their education to work for others.",
    img: "NSS plantation drive",
    photo: undefined,
  },
  {
    title: "Learning beyond lectures",
    text: "Guest lectures, seminars, workshops, conferences and industrial visits introduce students to professionals and workplaces, and help them see how classroom ideas are used in practice.",
    img: "Guest lecture or seminar",
    photo: photos.session,
  },
];

const groups = [
  { name: "Students' Council", text: "Represents student views and helps organise college events." },
  { name: "Cultural Committee", text: "Plans cultural programmes, celebrations and the Annual Day." },
  { name: "Gymkhana Committee", text: "Organises sport, competitions and the Sports Day." },
  { name: "National Service Scheme (NSS)", text: "Community service and social awareness activities." },
  { name: "DLLE", text: "Lifelong learning and extension work that takes learning into the community." },
  { name: "Magazine Committee", text: "Produces the college magazine with student writing and art." },
  { name: "Placement and Career Guidance Cell", text: "Career guidance, training and placement support." },
  { name: "Alumni Association", text: "Keeps graduates connected with the college and its students." },
];

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Campus life" }]}
        title="Campus life"
        intro="College is about more than lectures. Clubs, committees, sport and service give every student the chance to lead, create and contribute."
        image={{ label: "Students in a classroom", ...photos.classroomStudents }}
      />

      <section aria-label="Student life" className="py-16 lg:py-24">
        <Container className="space-y-20 lg:space-y-28">
          {strands.map((s, i) => (
            <article key={s.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Media label={s.img} src={s.photo?.src} alt={s.photo?.alt ?? s.img} className={`aspect-[3/2] w-full lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`} />
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                <h2 className="t-h2">{s.title}</h2>
                <p className="mt-5 text-ink-soft measure">{s.text}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section aria-labelledby="h-groups" className="border-y border-stone bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading id="h-groups" title="Get involved" intro="Committees and cells run by staff and students offer many ways to take part." />
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <li key={g.name} className="border-t-2 border-red py-5">
                <h3 className="t-h4 text-red">{g.name}</h3>
                <p className="mt-2 text-[1.0625rem] text-ink-soft">{g.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/institutional-information#committees" className="mt-8 inline-flex items-center gap-2 font-semibold text-maroon">
            <span className="link-u">See all committees and cells</span><Arrow />
          </Link>
        </Container>
      </section>

      <section aria-labelledby="h-gallery" className="py-16 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="h-gallery" title="Gallery" intro="A look around the college: its classrooms, laboratories, hall and the people who make it work." />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-flow-dense md:grid-cols-4">
            {[photos.hall, photos.session, photos.sports, photos.trophies, photos.labTeaching, photos.classroomStudents, photos.corridor, photos.facultyMeeting, photos.lab, photos.office].map((g, i) => (
              <Media
                key={g.src}
                label={g.alt}
                {...g}
                sizes={i === 0 || i === 5 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"}
                className={i === 0 ? "col-span-2 row-span-2 aspect-square" : i === 5 ? "col-span-2 row-span-2 aspect-square md:col-start-3" : "aspect-square"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="h-film" className="border-t border-stone bg-ivory py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <h2 id="h-film" className="t-h2">A year at the college</h2>
            <p className="mt-5 text-ink-soft">See students in classrooms, on stage and in the community.</p>
            <ButtonLink href="/contact?form=visit#forms" variant="secondary" className="mt-8">Plan a campus visit</ButtonLink>
          </div>
          <VideoBlock className="lg:col-span-8" title="Student life highlights" caption="Events, sport and community service across the academic year." />
        </Container>
      </section>
    </>
  );
}
