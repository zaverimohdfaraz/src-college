import type { Metadata } from "next";
import { Container, PageHero, Media, Pending, ButtonLink } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Library, computer laboratory, gymnasium, classrooms and digital resources at Shri Ram College of Commerce, Bhandup West.",
  alternates: { canonical: "/facilities" },
};

const facilities = [
  {
    id: "library",
    photo: photos.library,
    title: "Library",
    text: "The library supports every programme with textbooks, reference works and reading space for quiet study. Students also have access to e-journals and e-books for research and project work. A Library Committee oversees its development and use.",
    points: ["Reference and textbook collection", "Reading space for individual study", "Access to e-journals and e-books"],
  },
  {
    id: "computer-lab",
    photo: photos.labWide,
    title: "Computer laboratory",
    text: "The computer laboratory is where much of the practical work for the I.T. and Computer Science programmes takes place, from programming exercises to project development. It is also used for computer-based work across other programmes.",
    points: ["Practical sessions for computing programmes", "Project and assignment work", "Support for digital learning across the college"],
  },
  {
    id: "gymnasium",
    photo: photos.gym,
    title: "Gymnasium",
    text: "The college gymnasium gives students space to exercise and stay fit. Together with Sports Day and Gymkhana activities, it supports the college's commitment to students' physical well-being.",
    points: ["Fitness equipment for students", "Supports Gymkhana and sports activities"],
  },
  {
    id: "classrooms",
    photo: photos.classroom,
    title: "Classrooms",
    text: "Classrooms are used for lectures, presentations, group discussions and seminars. Teaching makes use of presentations, online content and video material alongside traditional instruction.",
    points: ["Lectures, seminars and discussions", "Presentation-based teaching"],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Campus life", href: "/campus-life" }, { label: "Facilities" }]}
        title="Facilities"
        intro="The college functions from its own campus on Datta Mandir Road, Bhandup West, with spaces for study, practical work and recreation."
      />
      <Container className="py-16 lg:py-24">
        <div className="space-y-20 lg:space-y-28">
          {facilities.map((f, i) => (
            <section key={f.id} id={f.id} aria-labelledby={`h-${f.id}`} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <Media label={f.title} {...f.photo} className={`aspect-[4/3] w-full lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`} />
              <div className={`lg:col-span-5 lg:pt-6 ${i % 2 ? "lg:order-1" : ""}`}>
                <h2 id={`h-${f.id}`} className="t-h2">{f.title}</h2>
                <p className="mt-5 text-ink-soft">{f.text}</p>
                <ul className="prose-college mt-6">
                  {f.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <Pending className="mt-20">
          Details such as library holdings, laboratory equipment and opening hours will be added once confirmed by the
          college. Only facilities verified by the college are listed on this page.
        </Pending>
        <div className="mt-10">
          <ButtonLink href="/contact?form=visit#forms">Plan a campus visit</ButtonLink>
        </div>
      </Container>
    </>
  );
}
