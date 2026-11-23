import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "News and achievements",
  description: "Recent events, activities and achievements of students and staff at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/institutional-information/news" },
};

const highlights = [
  { title: "Students at the Ayodhyam intercollegiate festival", text: "Students represented the college in performance and cultural events at the intercollegiate festival.", photo: photos.cultural, href: "/campus-life/culture-and-events" },
  { title: "NSS plantation drive", text: "NSS volunteers planted saplings as part of the unit's environmental work.", photo: photos.nss, href: "/campus-life/nss-and-community" },
  { title: "Industrial visit", text: "Students saw industrial processes first-hand during a department-organised industrial visit.", photo: photos.ivDemo, href: "/campus-life/beyond-the-classroom" },
  { title: "Skills training and add-on courses", text: "Students took part in add-on course sessions and first-aid training on campus.", photo: photos.firstAid, href: "/campus-life/beyond-the-classroom" },
  { title: "Sport on the college ground", text: "Students competed in games and sports organised by the Gymkhana Committee.", photo: photos.sportsGround, href: "/campus-life/sport-and-fitness" },
  { title: "Trophies and awards", text: "Trophies won by students in intercollegiate and university competitions are displayed at the college.", photo: photos.trophies, href: "/campus-life/sport-and-fitness" },
];

export default function NewsPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/news"
      intro="Recent events at the college and what its students have achieved. Official announcements are on the notices page."
    >
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {highlights.map((h) => (
          <li key={h.title} className="group relative">
            <Media label={h.title} {...h.photo} className="aspect-[16/10] w-full" sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" />
            <h2 className="t-h3 mt-5"><Link href={h.href} className="after:absolute after:inset-0 group-hover:text-red">{h.title}</Link></h2>
            <p className="mt-2 text-ink-soft">{h.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-14 text-ink-soft">
        For circulars and announcements, see the <Link href="/notices" className="link-u font-semibold text-maroon">notices page</Link>.
      </p>
    </SectionShell>
  );
}
