import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { site, formatPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student support",
  description:
    "Mentoring, scholarships, examinations, careers and placement, anti-ragging, grievance redressal and women's safety at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/student-support" },
};

export default function StudentSupportPage() {
  return (
    <SectionShell
      section="support"
      href="/student-support"
      intro="Help is available to every student, with studies, finances, careers and personal safety. These pages explain where to go and what to expect."
    >
      <div role="note" className="border-l-[3px] border-red bg-ivory px-6 py-5">
        <p className="font-semibold text-ink">Need help urgently?</p>
        <p className="mt-1 text-ink-soft">
          Speak to your mentor or any member of staff, or contact the college office on{" "}
          <a href={`tel:+91${site.phones[0]}`} className="link-u font-medium text-ink">{formatPhone(site.phones[0])}</a>. For ragging,
          you can also call the national anti-ragging helpline, <a href="tel:18001805522" className="link-u font-medium text-ink">1800-180-5522</a> (toll free, 24 hours).
        </p>
      </div>

      <h2 className="t-h2 mt-16">Mentoring</h2>
      <div className="prose-college mt-6 measure">
        <p>
          Every student is assigned a faculty mentor who looks after a small group of around 15 to 20 students. Your
          mentor is the first person to talk to about your progress, attendance, subject choices or any personal
          difficulty that is affecting your studies.
        </p>
        <p>
          Mentors meet their groups through the year, keep in touch with parents where needed, and can point you to the
          right committee or office for further help.
        </p>
      </div>
    </SectionShell>
  );
}
