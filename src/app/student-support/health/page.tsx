import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { ContactNote } from "@/components/support-bits";
import { MemberTable } from "@/components/disclosure";
import { facts } from "@/lib/people";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Health and well-being",
  description: "First aid, health awareness, emergencies and counselling support for students at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/student-support/health" },
};

export default function HealthPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support/health"
      intro="Students' physical and mental well-being matters as much as their results."
    >
      <div className="prose-college measure">
        <h2>First aid and emergencies</h2>
        <p>
          If a student falls ill or is injured on campus, tell any member of staff or the college office straight away. In
          an emergency, the college contacts the student&apos;s family and helps get the student to the nearest hospital. For an ambulance, call <a href="tel:108">108</a>.
        </p>
        <p>
          Students learn first aid themselves through skills-training sessions, so that they can help others on campus
          and in daily life.
        </p>
      </div>
      <h2 className="t-h3 mt-10">Health facilities</h2>
      <MemberTable id="health-facilities" members={facts.health} className="mt-4" />
      <Media label="First-aid training" {...photos.firstAid} className="mt-10 aspect-[16/9] w-full" />
      <div className="prose-college mt-12 measure">
        <h2>Health awareness</h2>
        <p>
          NSS and the Women Development Cell organise blood donation camps and awareness sessions on health, nutrition
          and hygiene. The gymnasium and Sports Day encourage students to stay active.
        </p>
        <h2>Mental health and counselling</h2>
        <p>
          If you are feeling stressed, anxious or low, talk to your mentor, who can listen and help you find support.
          You can also call Tele-MANAS, the Government of India&apos;s free mental-health helpline, on{" "}
          <a href="tel:14416">14416</a> or <a href="tel:18008914416">1-800-891-4416</a>, available 24 hours in many languages.
        </p>
        <h2>Tell the college about health needs</h2>
        <p>
          If you have a health condition the college should know about, for example for examinations or emergencies,
          inform your mentor or the college office in confidence.
        </p>
      </div>
      <ContactNote />
    </SectionShell>
  );
}
