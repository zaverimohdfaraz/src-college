import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import VideoBlock from "@/components/VideoBlock";
import { videos } from "@/lib/images";
import { MemberTable } from "@/components/disclosure";
import { facts } from "@/lib/people";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Library, computer laboratory, gymnasium, classrooms and the multipurpose hall at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <SectionShell
      section="facilities"
      href="/facilities"
      intro="The college functions from its own campus on Datta Mandir Road, Bhandup West, with spaces for study, practical work and recreation."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The building brings classrooms, laboratories, the library, a gymnasium and a multipurpose hall under one
          roof.
        </p>
      </div>
      <VideoBlock className="mt-12" {...videos.facilities} />
      <section aria-labelledby="h-hostel" className="mt-16">
        <h2 id="h-hostel" className="t-h2">Hostel</h2>
        <MemberTable id="hostel" members={facts.hostel} className="mt-6" />
      </section>
    </SectionShell>
  );
}
