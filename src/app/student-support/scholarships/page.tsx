import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote, ext } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "Scholarships and freeships",
  description: "Government of Maharashtra (MahaDBT), National Scholarship Portal and Jana Seva Sangh scholarships for students of Shri Ram College of Commerce & Science.",
  alternates: { canonical: "/student-support/scholarships" },
};

export default function ScholarshipsPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/scholarships"
      intro="The college was founded to make higher education affordable, and it helps eligible students apply for financial support."
    >
      <div className="prose-college measure">
        <h2>Where scholarships come from</h2>
        <ul>
          <li>
            <strong>Government of Maharashtra</strong> scholarships and freeships are applied for online through the{" "}
            <a href="https://mahadbt.maharashtra.gov.in" {...ext}>MahaDBT portal</a>. Eligibility depends on the
            scheme, category and family income.
          </li>
          <li>
            <strong>Central government</strong> scholarships are available through the{" "}
            <a href="https://scholarships.gov.in" {...ext}>National Scholarship Portal</a>.
          </li>
          <li><strong>The Jana Seva Sangh</strong> also awards scholarships to deserving students.</li>
        </ul>

        <h2>How to apply</h2>
        <ol>
          <li>Check which schemes you may be eligible for on the portal before the application window opens.</li>
          <li>Keep your documents ready: usually your Aadhaar card, a bank account linked to Aadhaar, income certificate, caste certificate and caste validity where applicable, previous mark sheets and the fee receipt.</li>
          <li>Apply online within the dates announced on the portal and on the college notices page.</li>
          <li>Submit a printout of the application with copies of your documents to the college office for verification.</li>
          <li>Track your application on the portal and respond quickly if any correction is requested.</li>
        </ol>
        <p>Exact requirements differ between schemes and change from year to year, so always read the portal guidelines for the current year.</p>
      </div>

      <ContactNote title="Help with your application">
        The college office helps students with documents and verification.
      </ContactNote>
    </SectionShell>
  );
}
