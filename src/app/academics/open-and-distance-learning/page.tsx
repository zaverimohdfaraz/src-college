import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { DocumentList } from "@/components/disclosure";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Open and distance learning",
  description: "Programmes offered through the Yashwantrao Chavan Maharashtra Open University (YCMOU) study centre at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/academics/open-and-distance-learning" },
};

export default function OdlPage() {
  const odl = courses.filter((c) => c.offeredThrough?.includes("YCMOU"));
  return (
    <SectionShell
      section="academics"
      href="/academics/open-and-distance-learning"
      intro="The college is a study centre of Yashwantrao Chavan Maharashtra Open University (YCMOU), a state open university recognised for open and distance learning."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Open and distance learning lets students who are working, or who need a flexible schedule, study for a
          recognised qualification. Learners study from YCMOU&apos;s course material and attend counselling sessions and
          examinations organised through the study centre.
        </p>
        <h2>Programmes at the study centre</h2>
      </div>
      <ul className="mt-6 divide-y divide-stone border-y border-stone">
        {odl.map((c) => (
          <li key={c.slug} className="flex items-center justify-between gap-6 py-4">
            <span><span className="font-semibold text-ink">{c.code}</span> <span className="text-ink-soft">{c.name}</span></span>
            <Link href={`/courses/${c.slug}`} className="link-u shrink-0 font-semibold text-maroon">Details</Link>
          </li>
        ))}
      </ul>
      <div className="prose-college mt-12 measure">
        <h2>Recognition</h2>
        <p>
          The list of open and distance learning and online programmes recognised by the UGC, including those of YCMOU,
          is published by the UGC&apos;s Distance Education Bureau at <a href="https://deb.ugc.ac.in" target="_blank" rel="noopener noreferrer">deb.ugc.ac.in</a>.
          Admission, fees and examinations for these programmes follow YCMOU&apos;s rules; see <a href="https://ycmou.ac.in" target="_blank" rel="noopener noreferrer">ycmou.ac.in</a>.
        </p>
      </div>
      <DocumentList ids={["ycmouCentre"]} className="mt-10" />
    </SectionShell>
  );
}
