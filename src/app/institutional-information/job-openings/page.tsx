import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Job openings",
  description: "Teaching and non-teaching vacancies at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/institutional-information/job-openings" },
};

export default function JobsPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/job-openings"
      intro="Vacancies for teaching and non-teaching posts are advertised here and on the notices page."
    >
      {jobs.length ? (
        <ul className="divide-y divide-stone border-y border-stone">
          {jobs.map((j) => (
            <li key={j.title} className="py-5">
              <p className="font-semibold text-ink">{j.title}</p>
              <p className="mt-1 text-[1rem] text-muted">{j.details}{j.lastDate ? ` Last date: ${j.lastDate}.` : ""}</p>
              {j.href && <a href={j.href} target="_blank" rel="noopener noreferrer" className="link-u mt-2 inline-block font-semibold text-maroon">View advertisement</a>}
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-stone bg-ivory px-6 py-8">
          <p className="font-semibold text-ink">No vacancies are listed at the moment.</p>
          <p className="mt-2 text-ink-soft">
            Check the <Link href="/notices" className="link-u text-ink">notices page</Link> for announcements. Appointments
            to teaching posts follow University of Mumbai and Government of Maharashtra rules, including the approved
            reservation roster.
          </p>
        </div>
      )}
    </SectionShell>
  );
}
