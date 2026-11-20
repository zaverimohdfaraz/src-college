import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { vision, mission } from "@/lib/about";

export const metadata: Metadata = {
  title: "Vision and mission",
  description:
    "The vision and mission of Shri Ram College of Commerce & Science: a student-centric college offering affordable, value-based higher education to all.",
  alternates: { canonical: "/about/vision-mission" },
};

export default function VisionMissionPage() {
  return (
    <SectionShell section="about"
      href="/about/vision-mission"
      intro="What the college is working towards, and the commitments that guide its teaching and student support."
    >
      <section aria-labelledby="h-vision">
        <h2 id="h-vision" className="t-h2">Our vision</h2>
        <figure className="mt-8 border-l-[3px] border-red bg-ivory px-8 py-10 md:px-12">
          <blockquote className="font-serif text-[1.75rem] leading-snug text-ink md:text-[2.25rem]">{vision}</blockquote>
        </figure>
      </section>

      <section aria-labelledby="h-mission" className="mt-20">
        <h2 id="h-mission" className="t-h2">Our mission</h2>
        <ol className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {mission.map((m, i) => (
            <li key={m} className="flex gap-5 border-t border-stone pt-6">
              <span className="font-serif text-[2.25rem] leading-none text-red tabular-nums">{i + 1}</span>
              <p className="text-ink-soft">{m}</p>
            </li>
          ))}
        </ol>
      </section>
    </SectionShell>
  );
}
