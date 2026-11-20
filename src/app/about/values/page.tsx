import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { values } from "@/lib/about";

export const metadata: Metadata = {
  title: "Our values",
  description:
    "Access, care, rigour, character and service: the values of Shri Ram College of Commerce & Science and the Jana Seva Sangh.",
  alternates: { canonical: "/about/values" },
};

export default function ValuesPage() {
  return (
    <SectionShell section="about"
      href="/about/values"
      intro="How the college aims to treat its students, and what it hopes they will take with them when they leave."
    >
      <dl className="divide-y divide-stone border-y border-stone">
        {values.map((v) => (
          <div key={v.title} className="grid gap-2 py-8 md:grid-cols-[12rem_1fr] md:gap-8">
            <dt className="font-serif text-[1.875rem] leading-tight text-red">{v.title}</dt>
            <dd className="measure text-ink-soft md:pt-1.5">{v.text}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
