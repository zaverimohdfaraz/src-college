import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { MemberTable } from "@/components/disclosure";
import { rti } from "@/lib/people";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Right to Information",
  description: "How to request information from Shri Ram College of Commerce & Science under the Right to Information Act, 2005: Public Information Officer and Appellate Authority.",
  alternates: { canonical: "/institutional-information/rti" },
};

export default function RtiPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/rti"
      intro="Any citizen of India can request information under the Right to Information Act, 2005."
    >
      <h2 className="t-h2">Officers</h2>
      <MemberTable id="rti-officers" members={rti} className="mt-6" />
      <div className="prose-college mt-12 measure">
        <h2>How to apply</h2>
        <ol>
          <li>Write an application addressed to the Public Information Officer, stating the information you need.</li>
          <li>Pay the application fee prescribed under the Maharashtra RTI Rules. Applicants below the poverty line are exempt on proof.</li>
          <li>Submit it at the college office or send it by post to: {site.address.full}.</li>
        </ol>
        <p>
          Information is normally provided within 30 days. If you do not receive a reply, or are not satisfied with it,
          you may appeal to the Appellate Authority within 30 days.
        </p>
      </div>
    </SectionShell>
  );
}
