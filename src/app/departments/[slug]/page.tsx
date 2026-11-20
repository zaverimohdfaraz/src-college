import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionShell from "@/components/SectionShell";
import { Arrow } from "@/components/ui";
import { departments, getDepartment } from "@/lib/departments";
import { courses } from "@/lib/courses";

// Mathematics supports quantitative programmes rather than owning one.
const supports: Record<string, string[]> = { mathematics: ["bsc-cs", "bsc-it", "bms"] };

/** What each department does beyond regular teaching. */
const activities: Record<string, string[]> = {
  commerce: ["Guest lectures by business professionals", "Industrial and bank visits", "Business quizzes and case-study competitions", "Guidance on M.Com., MBA and professional courses"],
  accounts: ["Practical sessions on accounting software", "Guidance for CA, CS and CMA aspirants", "Tax and audit awareness sessions", "Add-on courses in advanced spreadsheets and accounting"],
  "information-technology": ["Supervised practicals in the computer laboratory", "Project development and presentations", "Workshops on programming and new technologies", "Add-on courses in computer applications"],
  arts: ["Literary and elocution events", "Heritage and field visits", "Wall magazines and writing for the college magazine", "Awareness programmes with NSS and DLLE"],
  mathematics: ["Problem-solving and remedial sessions", "Support for quantitative papers across programmes", "Aptitude practice for placements and competitive examinations"],
};

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDepartment(slug);
  if (!d) return {};
  return {
    title: d.name,
    description: `${d.name} at Shri Ram College of Commerce & Science, Bhandup: ${d.focus.slice(0, 4).join(", ").toLowerCase()} and related programmes.`,
    alternates: { canonical: `/departments/${slug}` },
  };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDepartment(slug);
  if (!d) notFound();
  const programmes = courses.filter((c) => c.department === d.slug || supports[d.slug]?.includes(c.slug));

  return (
    <SectionShell section="academics" href={`/departments/${slug}`} intro={`Teaching in ${d.focus.slice(0, 3).map((f, i) => (i ? f.toLowerCase() : f)).join(", ")} and related subjects.`}>
      <div className="prose-college measure">
        <p className="t-lead">{d.intro}</p>
      </div>

      <h2 className="t-h3 mt-12">Areas of focus</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {d.focus.map((f) => (
          <li key={f} className="rounded-full border border-sand px-3.5 py-1 text-[1.0625rem]">{f}</li>
        ))}
      </ul>

      {programmes.length > 0 && (
        <section aria-labelledby="h-progs" className="mt-14">
          <h2 id="h-progs" className="t-h2">{supports[d.slug] ? "Programmes the department supports" : "Programmes"}</h2>
          <ul className="mt-6 divide-y divide-stone border-y border-stone">
            {programmes.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[9rem_1fr_auto] sm:gap-6">
                  <span className="relative aspect-[16/9] overflow-hidden rounded-[3px] bg-ink">
                    <Image src={`/images/courses/${c.slug}.webp`} alt="" fill sizes="9rem" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-serif text-[1.25rem] leading-none text-maroon">{c.code}</span>
                    <span className="mt-1.5 block font-medium text-ink group-hover:text-maroon">{c.name}</span>
                  </span>
                  <Arrow className="text-muted group-hover:text-maroon" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="h-act" className="mt-14">
        <h2 id="h-act" className="t-h2">Beyond regular teaching</h2>
        <div className="prose-college mt-6 measure">
          <ul>{(activities[d.slug] ?? []).map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
      </section>

      <section aria-labelledby="h-fac" className="mt-14">
        <h2 id="h-fac" className="t-h2">Faculty</h2>
        <p className="mt-5 measure text-ink-soft">
          The department&apos;s teachers take classes across the programmes listed above, and each also mentors a
          group of students. To speak with the department, contact the college office.
        </p>
      </section>
    </SectionShell>
  );
}
