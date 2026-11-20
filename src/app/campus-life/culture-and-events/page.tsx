import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Culture and events",
  description: "The Annual Day, cultural programmes and intercollegiate festivals at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/campus-life/culture-and-events" },
};

const events = [
  { title: "Annual Day", text: "The high point of the cultural year. Students perform music, dance and drama, and the college recognises academic, cultural and sporting achievement in front of families and guests." },
  { title: "Intercollegiate festivals", text: "Students take part in festivals hosted by colleges across Mumbai, including Ayodhyam, competing in performance, fine arts and literary events and representing the college." },
  { title: "Celebrations through the year", text: "National days, festivals and commemorative days are marked on campus with programmes planned by the Cultural Committee and the Students' Council." },
  { title: "Competitions and talent events", text: "Elocution, debate, poster-making, rangoli and quiz competitions give students of every programme a stage for their talent." },
];

export default function CulturePage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/culture-and-events"
      intro="The Cultural Committee organises events through the year, and students plan, host and perform."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Cultural life at the college is run largely by students. Committees choose themes, rehearse performances,
          manage stages and look after guests, gaining confidence on and off the stage.
        </p>
      </div>

      <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {events.map((e) => (
          <li key={e.title} className="border-t-[3px] border-red pt-5">
            <h2 className="t-h3 text-red">{e.title}</h2>
            <p className="mt-3 text-ink-soft">{e.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <Media label="College hall" {...photos.hall} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
        <Media label="Event on the college ground" {...photos.groundEvent} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
      </div>

      <h2 className="t-h2 mt-20">Taking part</h2>
      <div className="prose-college mt-6 measure">
        <p>
          Auditions and sign-ups for events are announced in class and on the notice board. Students who prefer to work
          behind the scenes are just as needed: hosting, decoration, photography, stage management and hospitality are
          all handled by volunteers.
        </p>
      </div>
    </SectionShell>
  );
}
