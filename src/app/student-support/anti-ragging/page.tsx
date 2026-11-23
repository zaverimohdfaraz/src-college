import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { ext } from "@/components/support-bits";
import { Committee } from "@/components/disclosure";

export const metadata: Metadata = {
  title: "Anti-ragging",
  description: "Ragging is prohibited at Shri Ram College of Commerce & Science. How to report it, the national helpline and what happens after a complaint.",
  alternates: { canonical: "/student-support/anti-ragging" },
};

export default function AntiRaggingPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/anti-ragging"
      intro="Ragging is strictly prohibited, on campus and off campus. Every complaint is acted on."
    >
      <div role="note" className="border-l-[3px] border-red bg-ivory px-6 py-5">
        <p className="font-semibold text-ink">National anti-ragging helpline</p>
        <p className="mt-1 text-ink-soft">
          Call <a href="tel:18001805522" className="link-u font-medium text-ink">1800-180-5522</a> (toll free, 24 hours) or email{" "}
          <a href="mailto:helpline@antiragging.in" className="link-u font-medium text-ink">helpline@antiragging.in</a>.
        </p>
      </div>

      <div className="prose-college mt-12 measure">
        <p>
          Ragging is a punishable offence under the UGC Regulations on Curbing the Menace of Ragging in Higher
          Educational Institutions, 2009. The college&apos;s Anti-Ragging Cell acts on every complaint, and students
          found guilty face disciplinary action that can include suspension, expulsion and a police complaint.
        </p>
        <h2>What counts as ragging</h2>
        <p>
          Any act that teases, humiliates, frightens or harms another student, physically or mentally, including on
          social media, is ragging. Asking a student to do something against their will, or excluding them because of
          their background, is also ragging.
        </p>
        <h2>How to report it</h2>
        <ul>
          <li>Tell the Anti-Ragging Cell, your mentor, the Principal or any member of staff.</li>
          <li>Call or email the national helpline above. Complaints can be made anonymously.</li>
          <li>Witnesses are encouraged to report ragging too.</li>
        </ul>
        <h2>What happens next</h2>
        <p>
          The complaint is inquired into promptly and confidentially. The student who reported it is protected from
          retaliation, and action is taken against those found responsible.
        </p>
        <h2>Undertaking at admission</h2>
        <p>
          Students and parents submit the anti-ragging undertaking online at{" "}
          <a href="https://www.antiragging.in" {...ext}>antiragging.in</a> at the time of admission.
        </p>
      </div>
      <div className="mt-16"><Committee id="antiRagging" /></div>
    </SectionShell>
  );
}
