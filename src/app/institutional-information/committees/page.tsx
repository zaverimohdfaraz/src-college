import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { committees } from "@/lib/institutional";

export const metadata: Metadata = {
  title: "Committees and cells",
  description: "Statutory and college committees at Shri Ram College of Commerce & Science, Bhandup: student welfare, academic administration and student development.",
  alternates: { canonical: "/institutional-information/committees" },
};

export default function CommitteesPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/committees"
      intro="Committees made up of faculty, staff and students share responsibility for the life of the college."
    >
      <div className="space-y-14">
        {committees.map((g) => (
          <div key={g.group}>
            <h2 className="t-h3 border-b-2 border-red pb-3 text-red">{g.group}</h2>
            <dl className="divide-y divide-stone">
              {g.items.map(([n, d]) => (
                <div key={n} className="grid gap-1 py-4 md:grid-cols-[17rem_1fr] md:gap-8">
                  <dt className="font-semibold text-ink">{n}</dt>
                  <dd className="text-ink-soft">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <div className="prose-college mt-12 measure">
        <p>
          Members of the statutory committees are published on the pages for{" "}
          <a href="/student-support/womens-safety#committee-icc">the ICC</a>,{" "}
          <a href="/student-support/grievance-redressal#committee-sgrc">grievance redressal</a>,{" "}
          <a href="/student-support/anti-ragging#committee-antiRagging">anti-ragging</a>,{" "}
          <a href="/student-support/equal-opportunity#committee-eoc">equal opportunity</a>,{" "}
          <a href="/student-support/sedg-cell#committee-sedg">SEDG</a>,{" "}
          <a href="/institutional-information/quality-assurance#committee-iqac">IQAC</a> and{" "}
          <a href="/about/administration#committee-cdc">College Development Committee</a>.
          Each committee is led by a faculty convenor and is constituted for each academic year. Students can
          approach any committee through its convenor or the college office, which can also tell you who the current
          members are.
        </p>
      </div>
    </SectionShell>
  );
}
