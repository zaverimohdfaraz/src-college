"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Course } from "@/lib/courses";
import { Arrow, cx } from "./ui";

const levels = ["All levels", "Undergraduate", "Postgraduate"] as const;
const categories = ["All subjects", "Commerce", "Management", "Arts", "Computing"] as const;

export default function CourseFinder({ courses }: { courses: Course[] }) {
  const [level, setLevel] = useState<(typeof levels)[number]>("All levels");
  const [cat, setCat] = useState<(typeof categories)[number]>("All subjects");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return courses.filter(
      (c) =>
        (level === "All levels" || c.level === level) &&
        (cat === "All subjects" || c.category === cat) &&
        (!term || `${c.code} ${c.name} ${c.summary} ${c.areas.join(" ")}`.toLowerCase().includes(term)),
    );
  }, [courses, level, cat, q]);

  const Chip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cx(
        "h-10 rounded-full border px-4 text-[1.0625rem] font-medium transition-colors",
        active ? "border-ink bg-ink text-white" : "border-sand bg-white text-ink hover:border-ink",
      )}
    >
      {children}
    </button>
  );

  return (
    <div>
      <div className="grid gap-6 border-b border-stone pb-8 lg:grid-cols-[1fr_20rem] lg:items-end">
        <div className="space-y-4">
          <div role="group" aria-label="Filter by level" className="flex flex-wrap gap-2">
            {levels.map((l) => <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>)}
          </div>
          <div role="group" aria-label="Filter by subject" className="flex flex-wrap gap-2">
            {categories.map((c) => <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
          </div>
        </div>
        <div>
          <label htmlFor="course-search" className="mb-1.5 block text-[1.0625rem] font-semibold">Search programmes</label>
          <input
            id="course-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="For example, accounting"
            className="h-11 w-full rounded-[3px] border border-sand bg-white px-4 placeholder:text-grey focus:border-red focus:outline-none focus:ring-2 focus:ring-red/25"
          />
        </div>
      </div>

      <p className="mt-6 text-[1.0625rem] text-muted" aria-live="polite">
        Showing {list.length} of {courses.length} programmes
      </p>

      {list.length === 0 ? (
        <div className="mt-6 border-y border-stone py-12">
          <p className="t-h3">No programmes match these filters</p>
          <p className="mt-2 text-ink-soft">Try a different subject or clear the search to see every programme.</p>
          <button type="button" onClick={() => { setLevel("All levels"); setCat("All subjects"); setQ(""); }} className="link-u mt-4 font-semibold text-maroon">
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-stone border-y border-stone">
          {list.map((c) => (
            <li key={c.slug} className="group relative grid gap-5 py-8 md:grid-cols-[15rem_1fr_11rem] md:gap-8">
              <div className="relative aspect-[16/9] w-full max-w-[24rem] overflow-hidden rounded-[3px] bg-ink">
                <Image
                  src={`/images/courses/${c.slug}.webp`}
                  alt={`${c.code} — ${c.name}`}
                  fill
                  sizes="(min-width:768px) 15rem, 24rem"
                  className="object-cover transition-[scale] duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <h2 className="t-h3">
                  <Link href={`/courses/${c.slug}`} className="after:absolute after:inset-0 group-hover:text-maroon">{c.name}</Link>
                </h2>
                <p className="mt-2 measure text-ink-soft">{c.summary}</p>
                <p className="mt-3 text-[1rem] text-muted">
                  {c.category} · {c.offeredThrough}
                </p>
              </div>
              <div className="relative z-10 flex items-start gap-5 md:flex-col md:items-end md:gap-2">
                <Link href={`/courses/${c.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-maroon">
                  <span className="link-u">View details</span><Arrow />
                </Link>
                <Link href={`/courses/${c.slug}#enquire`} className="link-u text-[1.0625rem] text-muted hover:text-ink">Enquire now</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
