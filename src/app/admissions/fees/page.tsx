import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { DocumentList } from "@/components/disclosure";
import { ContactNote } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "Fees, prospectus and refunds",
  description: "Prospectus, fee structure and fee refund policy of Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/admissions/fees" },
};

export default function FeesPage() {
  return (
    <SectionShell
      section="admissions"
      href="/admissions/fees"
      intro="The prospectus and fee structure for the current year, and the rules for refunds if you withdraw."
    >
      <h2 className="t-h2">Prospectus and fee structure</h2>
      <p className="mt-4 measure text-ink-soft">
        Fees are fixed for each academic year and differ by programme. The prospectus sets out the programmes,
        eligibility, admission procedure, rules and the full fee structure.
      </p>
      <DocumentList ids={["prospectus", "feeStructure"]} className="mt-8" />

      <h2 className="t-h2 mt-16">Fee refund policy</h2>
      <div className="prose-college mt-5 measure">
        <p>
          If a student withdraws from a programme after paying fees, the refund is made according to the fee refund
          directions of the University Grants Commission and the University of Mumbai in force for that academic year.
          These directions set how much is refunded depending on when the student withdraws, and limit the processing
          charges that may be deducted.
        </p>
        <ul>
          <li>Apply for cancellation of admission and refund in writing to the college office.</li>
          <li>Return the original fee receipt and any college identity card issued.</li>
          <li>Original documents submitted at admission are returned to the student; they are not withheld.</li>
          <li>The refund is paid to the account from which the fee was paid, or as the office advises.</li>
        </ul>
      </div>
      <DocumentList ids={["feeRefundPolicy"]} className="mt-8" />
      <ContactNote title="Questions about fees">The accounts section of the college office can explain the fees for your programme.</ContactNote>
    </SectionShell>
  );
}
