import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { institutions } from "@/lib/about";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jana Seva Sangh",
  description:
    "The Jana Seva Sangh, the charitable trust that founded and manages Shri Ram College of Commerce & Science, and the schools and colleges it runs.",
  alternates: { canonical: "/about/trust" },
};

export default function TrustPage() {
  return (
    <SectionShell section="about"
      href="/about/trust"
      intro="A charitable trust devoted to serving society through education, health care and public welfare."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The Jana Seva Sangh establishes and maintains schools and colleges, supports students through scholarships,
          provides medical assistance and contributes to community development.
        </p>
        <p>
          The trust founded Shri Ram College of Commerce & Science in 2009 so that students from its schools and junior
          colleges, and others from the neighbourhood, could continue to degree level close to home.
        </p>
      </div>

      <h2 className="t-h2 mt-16">Institutions of the trust</h2>
      <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
        {institutions.map((i) => (
          <li key={i} className="border-b border-stone py-4 text-ink-soft">{i}</li>
        ))}
      </ul>

      <figure className="mt-16">
        <Media label="NSS volunteers" {...photos.nss2} className="aspect-[16/9] w-full" />
        <figcaption className="mt-3 text-[1rem] text-muted">Students carry the trust&apos;s spirit of service into NSS work such as plantation drives.</figcaption>
      </figure>
    </SectionShell>
  );
}
