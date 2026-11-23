import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";
import { departments } from "@/lib/departments";
import { faculty } from "@/lib/people";
import { StatusPill } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "The Departments of Commerce, Accounts, Information Technology, Arts and Mathematics at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/departments" },
};

export default function DepartmentsPage() {
  return (
    <SectionShell
      section="academics"
      href="/departments"
      intro="Five departments share the teaching of the college's programmes, each bringing its own discipline and expertise."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Departments plan teaching for their subjects, prepare lesson plans, set internal assessments and organise
          guest lectures, visits and activities that bring their subjects to life.
        </p>
      </div>
      <ul className="mt-12 divide-y divide-stone border-y border-stone">
        {departments.map((d) => (
          <li key={d.slug}>
            <Link href={`/departments/${d.slug}`} className="group grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
              <span>
                <span className="block font-serif text-[1.625rem] leading-snug text-ink group-hover:text-red">{d.name}</span>
                <span className="mt-1 block text-[1.0625rem] text-muted">{d.focus.slice(0, 4).join(", ")}</span>
              </span>
              <Arrow className="hidden text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-red sm:block" />
            </Link>
          </li>
        ))}
      </ul>

      <section id="faculty" aria-labelledby="h-faculty" className="mt-16 scroll-mt-28">
        <h2 id="h-faculty" className="t-h2">Faculty</h2>
        <p className="mt-4 measure text-ink-soft">Faculty profiles with photographs are listed on each department&apos;s page.</p>
        <ul className="mt-6 divide-y divide-stone border-y border-stone">
          {departments.map((d) => {
            const n = (faculty[d.slug] ?? []).length;
            return (
              <li key={d.slug} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <Link href={`/departments/${d.slug}#faculty`} className="link-u text-ink hover:text-red">{d.name}</Link>
                {n ? <StatusPill tone="ok">{n} profile{n === 1 ? "" : "s"}</StatusPill> : <StatusPill tone="wait">To be published</StatusPill>}
              </li>
            );
          })}
        </ul>
      </section>
    </SectionShell>
  );
}
