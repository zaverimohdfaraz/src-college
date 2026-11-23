import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { DocumentList } from "@/components/disclosure";
import type { DocKey } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Documents and reports",
  description: "Official documents of Shri Ram College of Commerce & Science: trust registration, affiliation, recognition, NAAC accreditation, annual reports, audited accounts, AISHE and reservation roster.",
  alternates: { canonical: "/institutional-information/mandatory-disclosures" },
};

const groups: { title: string; ids: DocKey[] }[] = [
  { title: "Establishment and sponsoring body", ids: ["trustRegistration", "governmentPermission", "idp"] },
  { title: "Affiliation, recognition and approvals", ids: ["affiliation", "ugcRecognition", "ycmouCentre"] },
  { title: "Accreditation and quality", ids: ["naacCertificate", "naacSsr", "aqar", "nirf", "aishe"] },
  { title: "Reports and accounts", ids: ["annualReports", "annualAccounts"] },
  { title: "Governance and committees", ids: ["cdcComposition", "committeesComposition", "reservationRoster"] },
];

export default function DocumentsPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/mandatory-disclosures"
      intro="Official documents published for students, parents, regulators and the public, under the UGC guidelines on public self-disclosure."
    >
      <p className="measure text-ink-soft">
        Documents are added as PDFs as they are released by the college. For a document not yet published, contact the
        college office or make a request under the <Link href="/institutional-information/rti" className="link-u text-ink">Right to Information Act</Link>.
      </p>
      <div className="mt-12 space-y-14">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="t-h3 text-red">{g.title}</h2>
            <DocumentList ids={g.ids} className="mt-4" />
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
