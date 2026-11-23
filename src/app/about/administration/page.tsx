import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { MemberTable, Committee, DocumentList } from "@/components/disclosure";
import { officers } from "@/lib/people";
import { departments } from "@/lib/departments";

export const metadata: Metadata = {
  title: "Administration",
  description: "Principal, administrative officers, College Development Committee, Internal Complaints Committee, Ombudsperson and heads of departments of Shri Ram College of Commerce & Science.",
  alternates: { canonical: "/about/administration" },
};

export default function AdministrationPage() {
  return (
    <SectionShell
      section="about"
      href="/about/administration"
      intro="The people and bodies responsible for running the college, with how to reach them."
    >
      <section aria-labelledby="h-officers">
        <h2 id="h-officers" className="t-h2">Principal and officers</h2>
        <p className="mt-3 text-[1.0625rem] text-muted">Profiles with photographs and contact details are added as they are confirmed.</p>
        <MemberTable id="officers" members={officers} className="mt-6" />
      </section>

      <div className="mt-16"><Committee id="cdc" /></div>
      <DocumentList ids={["cdcComposition"]} className="mt-6" />

      <section aria-labelledby="h-ombud" className="mt-16">
        <h2 id="h-ombud" className="t-h2">Ombudsperson</h2>
        <div className="prose-college mt-5 measure">
          <p>
            Under the UGC (Redress of Grievances of Students) Regulations, 2023, the Ombudsperson for students of affiliated
            colleges is appointed by the affiliating university. Students who are not satisfied with the decision of the
            college&apos;s Students&apos; Grievance Redressal Committee may appeal to the Ombudsperson of the University of
            Mumbai. <Link href="/student-support/grievance-redressal">How to raise a grievance</Link>.
          </p>
        </div>
      </section>

      <div className="mt-16"><Committee id="icc" /></div>

      <section aria-labelledby="h-hod" className="mt-16">
        <h2 id="h-hod" className="t-h2">Academic leadership</h2>
        <p className="mt-3 text-[1.0625rem] text-muted">Heads of departments.</p>
        <MemberTable id="hods" members={departments.map((d) => ({ role: d.name }))} className="mt-6" />
      </section>

      <p className="mt-12 text-ink-soft">
        For the Chief Vigilance Officer, Finance Officer and similar university-level posts named in the UGC guidelines,
        students of affiliated colleges should refer to the <a className="link-u text-ink" href="https://mu.ac.in" target="_blank" rel="noopener noreferrer">University of Mumbai</a>.
      </p>
    </SectionShell>
  );
}
