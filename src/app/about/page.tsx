import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the college",
  description:
    "Jana Seva Sangh's Shri Ram College of Commerce & Science, Bhandup West — founded in 2009 by the Jana Seva Sangh and affiliated to the University of Mumbai.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SectionShell section="about"
      href="/about"
      intro="Founded in 2009 by the Jana Seva Sangh, Shri Ram College of Commerce & Science brings university education to students of Bhandup and the eastern suburbs of Mumbai."
    >
      <section aria-labelledby="h-intro">
        <h2 id="h-intro" className="t-h2">Introduction</h2>
        <div className="prose-college mt-6 measure">
          <p className="t-lead">
            {site.name} is an affiliated college of the {site.affiliation}, located on Datta Mandir Road in Bhandup West.
            It offers undergraduate and postgraduate programmes in commerce, management, arts and computing.
          </p>
          <p>
            The college exists to make good higher education available close to home. Many students who join are the
            first in their families to study at degree level, and the college sees it as its responsibility to support
            them academically and personally until they graduate with confidence.
          </p>
          <p>
            Teaching is planned and purposeful. The academic calendar is prepared before each year begins, faculty
            prepare lesson plans for each semester, and classroom teaching is supported by presentations, online
            material, projects, seminars and guest lectures. Each faculty member mentors a small group of students, which
            means no student has to find their way alone.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-stone">
          {[
            ["Established", site.established],
            ["Affiliated to", site.affiliation],
            ["Managed by", site.trust],
            ["Study centre of", "YCMOU"],
          ].map(([k, v], i) => (
            <div key={k} className={`border-b border-stone py-5 ${i % 2 === 0 ? "pr-6" : "border-l pl-6"}`}>
              <dt className="text-[1rem] font-semibold text-red">{k}</dt>
              <dd className="mt-1 font-serif text-[1.375rem] leading-snug text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SectionShell>
  );
}
