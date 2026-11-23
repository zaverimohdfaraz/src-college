import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ContactNote } from "@/components/support-bits";
import { Committee } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Women's safety and the ICC",
  description: "The Women Development Cell and the Internal Complaints Committee at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/student-support/womens-safety" },
};

export default function WomensSafetyPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/womens-safety"
      intro="The college is committed to a campus where every woman student and staff member is safe and respected."
    >
      <div className="prose-college measure">
        <h2>Women Development Cell</h2>
        <p>
          The Women Development Cell (WDC) works for the safety, confidence and development of women students and staff.
          Through the year it organises:
        </p>
        <ul>
          <li>Awareness sessions on legal rights, health and personal safety</li>
          <li>Workshops on self-defence, confidence and career planning</li>
          <li>Talks by women professionals and programmes around International Women&apos;s Day</li>
        </ul>

        <h2>Internal Complaints Committee</h2>
        <p>
          Complaints of sexual harassment are handled by the Internal Complaints Committee (ICC), constituted under the
          Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and the UGC
          regulations on the subject. The committee is chaired by a senior woman member of staff and includes an
          external member, as the law requires.
        </p>
        <h2>Making a complaint</h2>
        <ul>
          <li>Speak to any woman member of staff, or write to the ICC through the college office or by email.</li>
          <li>A written complaint should normally be made within three months of the incident.</li>
          <li>Complaints are dealt with confidentially, and the complainant is protected from retaliation.</li>
        </ul>
      </div>

      <div className="mt-16"><Committee id="icc" /></div>
      <ContactNote title="Contacting the ICC">Mark your letter or email &ldquo;Confidential: Internal Complaints Committee&rdquo;.</ContactNote>
    </SectionShell>
  );
}
