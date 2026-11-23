import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { DocumentList } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Collaborations",
  description: "Academic and industry collaborations and MoUs of Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/academics/collaborations" },
};

export default function CollaborationsPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics/collaborations"
      intro="Partnerships with universities, institutions and organisations extend what the college can offer its students."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The college is affiliated to the University of Mumbai and is a study centre of Yashwantrao Chavan Maharashtra
          Open University. Its students also benefit from organisations that host industrial visits, guest lectures,
          add-on courses and internships.
        </p>
        <p>Memoranda of understanding (MoUs) signed by the college are published below.</p>
      </div>
      <DocumentList ids={["mous"]} className="mt-8" />
    </SectionShell>
  );
}
