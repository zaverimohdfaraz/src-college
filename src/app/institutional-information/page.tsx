import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Institutional information",
  description:
    "Key facts, committees, quality assurance, mandatory disclosures, alumni and publications of Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/institutional-information" },
};

export default function InstitutionalInfoPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information"
      intro="How the college is organised, how it assures quality, and the official information it makes available to students, parents and the public."
    >
      <h2 className="t-h2">At a glance</h2>
      <dl className="mt-8 divide-y divide-stone border-y border-stone">
        {[
          ["Name", site.name],
          ["Managed by", `${site.trust} (charitable trust)`],
          ["Established", site.established],
          ["Affiliation", `${site.affiliation} (affiliated college)`],
          ["Open university", "Study centre of Yashwantrao Chavan Maharashtra Open University (YCMOU)"],
          ["Type", "Co-educational, self-financed"],
          ["Campus", "Own campus, Bhandup West, Mumbai"],
          ["Address", site.address.full],
        ].map(([k, v]) => (
          <div key={k} className="grid gap-1 py-4 md:grid-cols-[13rem_1fr] md:gap-8">
            <dt className="font-semibold text-red">{k}</dt>
            <dd className="text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
