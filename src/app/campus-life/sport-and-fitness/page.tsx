import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Media, Arrow } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sport and fitness",
  description: "The Gymkhana Committee, Sports Day and the college gymnasium at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/campus-life/sport-and-fitness" },
};

export default function SportPage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/sport-and-fitness"
      intro="Sport, fitness and friendly competition are part of a balanced college life."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The Gymkhana Committee runs sport at the college. It organises the annual Sports Day, selects teams for
          intercollegiate competitions and encourages every student to stay active.
        </p>
        <h2>Sports Day</h2>
        <p>
          Sports Day brings the whole college onto the ground for track events, team games and indoor competitions.
          Classes compete against one another, and winners are recognised at the Annual Day.
        </p>
        <h2>Games on campus</h2>
        <p>
          The college ground and the covered sports area are used for games such as badminton, carrom, chess and
          table-top games, as well as practice for competitions.
        </p>
        <h2>Representing the college</h2>
        <p>
          Students with sporting talent can represent the college in University of Mumbai and intercollegiate
          tournaments. Speak to the Gymkhana Committee to try out for a team.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <Media label="Badminton on the college ground" {...photos.sportsGround} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
        <Media label="Covered sports area" {...photos.sports} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
      </div>
      <Media label="Trophies won by students" {...photos.trophies} className="mt-4 aspect-[16/9] w-full" />

      <Link href="/facilities/gymnasium" className="mt-10 inline-flex items-center gap-2 font-semibold text-maroon">
        <span className="link-u">See the college gymnasium</span><Arrow />
      </Link>
    </SectionShell>
  );
}
