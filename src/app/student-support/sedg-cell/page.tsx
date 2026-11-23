import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { Committee } from "@/components/disclosure";
import { ContactNote } from "@/components/support-bits";

export const metadata: Metadata = {
  title: "SEDG Cell",
  description: "The Socio-Economically Disadvantaged Groups (SEDG) Cell at Shri Ram College of Commerce & Science supports students from disadvantaged backgrounds.",
  alternates: { canonical: "/student-support/sedg-cell" },
};

export default function SedgPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/sedg-cell"
      intro="Support for students whose social or economic circumstances make higher education harder to access."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The National Education Policy 2020 asks institutions to give special attention to Socio-Economically
          Disadvantaged Groups (SEDGs). The SEDG Cell helps such students join, stay and succeed at the college.
        </p>
        <h2>Who the cell supports</h2>
        <p>
          Students from scheduled castes, scheduled tribes, other backward classes and minorities; students from
          low-income families; first-generation learners; women; students with disabilities; and students from rural
          or remote areas.
        </p>
        <h2>What the cell does</h2>
        <ul>
          <li>Helps students apply for <Link href="/student-support/scholarships">scholarships and freeships</Link></li>
          <li>Arranges mentoring and remedial support where students need it</li>
          <li>Runs awareness and confidence-building programmes</li>
          <li>Listens to concerns and refers students to the right support</li>
        </ul>
      </div>
      <div className="mt-16"><Committee id="sedg" /></div>
      <ContactNote title="Contact the SEDG Cell">Speak to your mentor or the college office to reach the cell.</ContactNote>
    </SectionShell>
  );
}
