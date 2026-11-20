import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import VideoBlock from "@/components/VideoBlock";
import { Media } from "@/components/ui";
import { photos, videos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Beyond the classroom",
  description: "Industrial visits, guest lectures, seminars, add-on courses and skills training at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/campus-life/beyond-the-classroom" },
};

const items = [
  { title: "Industrial visits", text: "Visits to factories, banks and businesses show students how the processes they study work in practice.", photo: photos.ivDemo },
  { title: "Add-on courses", text: "Short certificate courses run alongside the degree build practical skills, from computer applications to communication.", photo: photos.session },
  { title: "Skills training", text: "Hands-on sessions such as first-aid practice prepare students for situations they will meet at work and in daily life.", photo: photos.firstAid },
  { title: "Guest lectures and seminars", text: "Professionals and academics speak on their fields, and workshops and conferences let students present their own work.", photo: photos.lecture },
];

export default function BeyondPage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/beyond-the-classroom"
      intro="Visits, guest speakers and practical courses connect classroom ideas with the working world."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Learning at the college does not stop at the syllabus. Departments and committees arrange experiences that
          help students see how their subject is used, and add skills that a degree alone does not cover.
        </p>
      </div>

      <ul className="mt-14 space-y-14">
        {items.map((it) => (
          <li key={it.title} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <Media label={it.title} {...it.photo} className="aspect-[4/3] w-full" sizes="(min-width:768px) 30vw, 100vw" />
            <div>
              <h2 className="t-h3 text-red">{it.title}</h2>
              <p className="mt-3 text-ink-soft">{it.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <VideoBlock className="mt-16" {...videos.addOn} />
    </SectionShell>
  );
}
