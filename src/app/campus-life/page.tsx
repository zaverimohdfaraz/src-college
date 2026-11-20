import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import VideoBlock from "@/components/VideoBlock";
import { videos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Campus life",
  description:
    "Cultural events, sport, NSS, industrial visits, student committees and community service at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/campus-life" },
};

export default function CampusLifePage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life"
      intro="College is about more than lectures. Clubs, committees, sport and service give every student the chance to lead, create and contribute."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Life at the college follows a full calendar: cultural events and the Annual Day, Sports Day, NSS drives,
          industrial visits, guest lectures and add-on courses run alongside the academic programme.
        </p>
        <p>
          Most of these activities are planned and run by students themselves, through committees guided by faculty.
          Organising an event, leading a team or representing the college at an intercollegiate festival builds the
          confidence and practical skills that employers and universities look for.
        </p>
        <p>
          Every student is welcome to take part, whatever their programme or year. Ask your mentor or a committee
          convenor how to join.
        </p>
      </div>

      <VideoBlock className="mt-14" {...videos.tour} />
    </SectionShell>
  );
}
