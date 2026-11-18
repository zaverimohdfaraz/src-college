import Link from "next/link";
import { Container, Media, Arrow } from "./ui";
import CountUp from "./CountUp";
import { courses } from "@/lib/courses";
import { departments } from "@/lib/departments";
import { photos, type Photo } from "@/lib/images";

const ic = "h-7 w-7 text-red";
const icons = {
  admissions: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10.5L14 5l11 5.5L14 16 3 10.5z" strokeLinejoin="round" /><path d="M8 13v6c0 1.6 2.7 3 6 3s6-1.4 6-3v-6M25 10.5V17" strokeLinecap="round" /></svg>
  ),
  programmes: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 6.5C7.5 5 11 5 14 7c3-2 6.5-2 10-.5v15c-3.5-1.5-7-1.5-10 .5-3-2-6.5-2-10-.5v-15z" strokeLinejoin="round" /><path d="M14 7v15" /></svg>
  ),
  notices: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 11v6h3l9 5V6l-9 5H5z" strokeLinejoin="round" /><path d="M21 10.5a5 5 0 010 7" strokeLinecap="round" /></svg>
  ),
  exams: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="6" y="4" width="16" height="20" rx="1.5" /><path d="M10 10h8M10 14h8M10 18h5" strokeLinecap="round" /></svg>
  ),
  scholarships: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="14" cy="11" r="6" /><path d="M10 16l-2 8 6-3 6 3-2-8" strokeLinejoin="round" /><path d="M12 11.2l1.4 1.3L16.2 9.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  contact: (
    <svg aria-hidden viewBox="0 0 28 28" className={ic} fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 24s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" strokeLinejoin="round" /><circle cx="14" cy="11" r="3" /></svg>
  ),
};

const tiles = [
  { label: "Admissions", sub: "How to apply and enquire", href: "/admissions", icon: icons.admissions },
  { label: "Programmes", sub: "UG and PG courses", href: "/courses", icon: icons.programmes },
  { label: "Notices", sub: "Official announcements", href: "/notices", icon: icons.notices },
  { label: "Examinations", sub: "Timetables and results", href: "/student-support#examinations", icon: icons.exams },
  { label: "Scholarships", sub: "MahaDBT and NSP", href: "/student-support#scholarships", icon: icons.scholarships },
  { label: "Visit us", sub: "Map and directions", href: "/contact", icon: icons.contact },
];

/** Fast routes to what visitors look for most — directly below the hero. */
export function QuickTiles() {
  return (
    <nav aria-label="Quick links" className="relative z-10 border-b border-stone bg-white shadow-[0_18px_40px_-34px_rgba(29,27,30,0.6)]">
      <Container className="!px-0 sm:!px-8 lg:!px-12">
        <ul className="grid grid-cols-2 gap-px bg-stone sm:grid-cols-3 lg:grid-cols-6 lg:border-x lg:border-stone">
          {tiles.map((t) => (
            <li key={t.label} className="bg-white">
              <Link href={t.href} className="group relative flex h-full flex-col gap-3 px-5 py-6 transition-colors hover:bg-blush lg:px-6 lg:py-7">
                <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-red-bright transition-transform duration-300 group-hover:scale-x-100" />
                {t.icon}
                <span>
                  <span className="block font-semibold text-ink group-hover:text-red-dark">{t.label}</span>
                  <span className="mt-0.5 block text-[1rem] text-muted">{t.sub}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

/** Verifiable figures only — each is counted from the site's own data or official records. */
export function StatsBand() {
  const stats = [
    { value: 2009, label: "Year the college was founded", plain: true },
    { value: courses.length, label: "Undergraduate and postgraduate programmes" },
    { value: departments.length, label: "Academic departments" },
    { value: 16, label: "Committees and cells for students" },
  ];
  return (
    <section aria-label="The college in numbers" className="on-dark bg-night text-white">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-3 py-10 lg:py-14 ${i % 2 ? "pl-6 sm:pl-10" : "pr-6"} ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-10" : ""} ${i % 2 ? "border-l border-white/15 lg:border-l" : ""} ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""}`}
            >
              <dt className="order-2 max-w-[14rem] text-[1.0625rem] leading-snug text-white/75">{s.label}</dt>
              <dd className="order-1 font-serif text-[clamp(2.75rem,2rem+3vw,4.5rem)] font-medium leading-none text-red-bright">
                {s.plain ? s.value : <CountUp to={s.value} />}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

const life = [
  { title: "Cultural events", text: "Annual Day and celebrations through the year", img: "Cultural event on stage", photo: photos.cultural },
  { title: "Sport", text: "Gymkhana, Sports Day and the gymnasium", img: "Sports Day", photo: photos.sportsGround },
  { title: "NSS and service", text: "Plantation drives, blood donation, village visits", img: "NSS activity", photo: photos.nss as Photo | undefined },
  { title: "Seminars and visits", text: "Guest lectures, workshops and industrial visits", img: "Guest lecture", photo: photos.ivDemo },
];

export function CampusLifeHighlights() {
  return (
    <section aria-labelledby="h-life" className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="t-kicker mb-3">Campus life</p>
            <h2 id="h-life" className="t-h2">More than a classroom</h2>
            <p className="t-lead mt-5">Committees, clubs and service give every student a chance to lead, perform and contribute.</p>
          </div>
          <Link href="/campus-life" className="inline-flex shrink-0 items-center gap-2 font-semibold text-maroon">
            <span className="link-u">Explore campus life</span><Arrow />
          </Link>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {life.map((l) => (
            <li key={l.title}>
              <Link href="/campus-life" className="group relative block overflow-hidden">
                <Media label={l.img} src={l.photo?.src} pos={l.photo?.pos} alt={l.photo?.alt ?? l.img} labelTop className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(29,27,30,0.92),rgba(29,27,30,0.55)_60%,transparent)] p-6 pt-16 text-white">
                  <span aria-hidden className="mb-3 block h-[3px] w-8 bg-red-bright transition-[width] duration-300 group-hover:w-14" />
                  <p className="font-serif text-[1.625rem] leading-tight">{l.title}</p>
                  <p className="mt-1.5 text-[1.0625rem] text-white/80">{l.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
