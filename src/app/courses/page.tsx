import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { AdmissionBand } from "@/components/sections";
import CourseFinder from "@/components/CourseFinder";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Browse undergraduate and postgraduate programmes at Shri Ram College of Commerce & Science, Bhandup: B.Com., B.A.F., B.B.I., B.M.S., B.A., B.Sc. I.T., B.Sc. C.S., M.Com., MBA and MCA.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Programmes" }]}
        title="Programmes"
        intro="Filter by level or subject to find programmes that match your interests, then open a programme to learn what it involves and where it can lead."
      />
      <section className="py-14 lg:py-20">
        <Container>
          <CourseFinder courses={courses} />
          <p className="t-caption mt-8 max-w-3xl">
            Programme availability, intake, eligibility and fees are confirmed by the college office for each academic
            year. Please send an enquiry or contact the college before applying.
          </p>
        </Container>
      </section>
      <AdmissionBand />
    </>
  );
}
