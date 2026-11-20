import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionShell from "@/components/SectionShell";
import { Arrow, ButtonLink } from "@/components/ui";
import { coursesByLevel } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Undergraduate and postgraduate programmes, departments, teaching and the academic calendar at Shri Ram College of Commerce & Science, Bhandup West, Mumbai.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics"
      intro="Programmes in commerce, management, arts and computing, taught by five departments, with teaching that combines structure, practice and personal attention."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Undergraduate degrees are offered as an affiliated college of the University of Mumbai. Postgraduate options
          include on-campus and open-university routes.
        </p>
      </div>

      {[
        { title: "Undergraduate", list: coursesByLevel("Undergraduate") },
        { title: "Postgraduate", list: coursesByLevel("Postgraduate") },
      ].map((g) => (
        <section key={g.title} aria-labelledby={`h-${g.title}`} className="mt-14">
          <h2 id={`h-${g.title}`} className="t-h3 flex items-baseline justify-between border-b-2 border-red pb-3 text-red">
            {g.title} <span className="text-[1.0625rem] font-normal text-muted">{g.list.length} programmes</span>
          </h2>
          <ul className="divide-y divide-stone">
            {g.list.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[9rem_1fr_auto] sm:gap-6">
                  <span className="relative aspect-[16/9] overflow-hidden rounded-[3px] bg-ink">
                    <Image src={`/images/courses/${c.slug}.webp`} alt="" fill sizes="9rem" className="object-cover transition-[scale] duration-700 group-hover:scale-[1.05]" />
                  </span>
                  <span>
                    <span className="block font-serif text-[1.25rem] leading-none text-maroon">{c.code}</span>
                    <span className="mt-1.5 block font-medium text-ink group-hover:text-maroon">{c.name}</span>
                  </span>
                  <Arrow className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-maroon" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <ButtonLink href="/courses" variant="secondary" className="mt-10">Browse and filter all programmes</ButtonLink>
    </SectionShell>
  );
}
