import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, OnThisPage, Pending, Arrow } from "@/components/ui";
import { site, formatPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student support",
  description:
    "Mentoring, scholarships, examinations, careers and placement, anti-ragging, grievance redressal and women's safety at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/student-support" },
};

const sections = [
  { id: "mentoring", label: "Mentoring" },
  { id: "scholarships", label: "Scholarships and freeships" },
  { id: "examinations", label: "Examinations and results" },
  { id: "careers", label: "Careers and placement" },
  { id: "anti-ragging", label: "Anti-ragging" },
  { id: "grievance", label: "Grievance redressal" },
  { id: "wdc", label: "Women's safety and ICC" },
  { id: "inclusion", label: "Equal opportunity" },
];

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`h-${id}`} className="border-t border-stone pt-12 first:border-0 first:pt-0">
      <h2 id={`h-${id}`} className="t-h2">{title}</h2>
      <div className="prose-college mt-6 measure">{children}</div>
    </section>
  );
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function StudentSupportPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Campus life", href: "/campus-life" }, { label: "Student support" }]}
        title="Student support"
        intro="Help is available to every student — with studies, finances, careers and personal safety. This page explains where to go and what to expect."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <aside className="lg:col-span-3"><OnThisPage items={sections} /></aside>
        <div className="space-y-16 lg:col-span-8 lg:col-start-5">
          <div role="note" className="border-l-[3px] border-red bg-ivory px-6 py-5">
            <p className="font-semibold text-ink">Need help urgently?</p>
            <p className="mt-1 text-ink-soft">
              Speak to your mentor or any member of staff, or contact the college office on{" "}
              <a href={`tel:+91${site.phones[0]}`} className="link-u font-medium text-ink">{formatPhone(site.phones[0])}</a>. For ragging,
              you can also call the national anti-ragging helpline, <a href="tel:18001805522" className="link-u font-medium text-ink">1800-180-5522</a> (toll free, 24 hours).
            </p>
          </div>

          <Block id="mentoring" title="Mentoring">
            <p>
              Every student is assigned a faculty mentor who looks after a small group of around 15 to 20 students. Your
              mentor is the first person to talk to about your progress, attendance, subject choices or any personal
              difficulty that is affecting your studies.
            </p>
            <p>Mentors meet students through the year and can point you to the right committee or office for further help.</p>
          </Block>

          <Block id="scholarships" title="Scholarships and freeships">
            <p>
              The college was founded to make higher education affordable, and it helps eligible students apply for
              financial support.
            </p>
            <ul>
              <li>
                Government of Maharashtra scholarships and freeships are applied for online through the{" "}
                <a href="https://mahadbt.maharashtra.gov.in" {...ext}>MahaDBT portal</a>. Eligibility depends on the scheme,
                category and family income.
              </li>
              <li>
                Central government scholarships are available through the{" "}
                <a href="https://scholarships.gov.in" {...ext}>National Scholarship Portal</a>.
              </li>
              <li>The Jana Seva Sangh also awards scholarships to deserving students.</li>
            </ul>
            <p>
              Watch the notices page for application windows, and ask the college office for help with documents and
              verification.
            </p>
          </Block>

          <Block id="examinations" title="Examinations and results">
            <p>
              Examinations follow the University of Mumbai&apos;s scheme for each programme. The college&apos;s
              Examination Committee conducts internal and college-level examinations and coordinates with the University
              for semester examinations.
            </p>
            <ul>
              <li>Timetables, hall-ticket instructions and results are announced on the notices page and the college notice board.</li>
              <li>Regular attendance is expected; the Attendance Committee works with students who fall behind.</li>
              <li>Questions about marks, revaluation or ATKT should be raised with the examination office promptly.</li>
            </ul>
            <Link href="/notices" className="inline-flex items-center gap-2 font-semibold !no-underline">
              <span className="link-u">See the latest notices</span><Arrow />
            </Link>
          </Block>

          <Block id="careers" title="Careers and placement">
            <p>
              The Placement and Career Guidance Cell helps students plan their next step, whether that is a first job,
              a professional qualification or further study.
            </p>
            <ul>
              <li>Career guidance and counselling</li>
              <li>Personality development, communication and soft-skills sessions from the first year</li>
              <li>Internships, industrial visits and guest lectures that connect students with employers</li>
              <li>Information about recruitment opportunities and higher education</li>
            </ul>
            <Pending>Placement records and recruiter information will be published only from data verified by the college.</Pending>
          </Block>

          <Block id="anti-ragging" title="Anti-ragging">
            <p>
              <strong>Ragging is strictly prohibited</strong> at the college, on campus and off campus. It is a punishable
              offence under the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.
              The college&apos;s Anti-Ragging Cell acts on every complaint, and students found guilty face disciplinary
              action that can include suspension, expulsion and a police complaint.
            </p>
            <ul>
              <li>Report ragging to the Anti-Ragging Cell, your mentor, the Principal or any member of staff.</li>
              <li>
                National anti-ragging helpline: <a href="tel:18001805522">1800-180-5522</a> (toll free, 24 hours) or{" "}
                <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a>.
              </li>
              <li>
                Students and parents submit the anti-ragging undertaking online at{" "}
                <a href="https://www.antiragging.in" {...ext}>antiragging.in</a> at the time of admission.
              </li>
            </ul>
          </Block>

          <Block id="grievance" title="Grievance redressal">
            <p>
              Students who have a complaint about academic matters, administration, facilities or treatment on campus can
              seek a fair resolution through the college&apos;s grievance redressal process, set up in accordance with the
              UGC (Redress of Grievances of Students) Regulations, 2023.
            </p>
            <ul>
              <li>Raise the issue first with your mentor or the relevant office.</li>
              <li>If it is not resolved, submit a written grievance to the college&apos;s grievance redressal committee.</li>
              <li>
                Grievances can also be registered on the UGC&apos;s{" "}
                <a href="https://samadhaan.ugc.ac.in" {...ext}>e-Samadhan portal</a>.
              </li>
            </ul>
            <p>Complaints are handled confidentially, and no student will be penalised for raising a genuine grievance.</p>
            <Pending>Names and contact details of the grievance redressal committee and ombudsperson to be supplied by the college.</Pending>
          </Block>

          <Block id="wdc" title="Women's safety and the Internal Complaints Committee">
            <p>
              The Women Development Cell (WDC) works for the safety, confidence and development of women students and
              staff through awareness programmes, workshops and support.
            </p>
            <p>
              Complaints of sexual harassment are handled by the Internal Complaints Committee (ICC), constituted under
              the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and the
              relevant UGC regulations. Complaints are dealt with confidentially and without retaliation.
            </p>
            <Pending>ICC and WDC members and contact details for the current year to be supplied by the college.</Pending>
          </Block>

          <Block id="inclusion" title="Equal opportunity">
            <p>
              The college is committed to equal access for all students, irrespective of gender, caste, class, religion
              or disability. Students who need support because of a disability, health condition or financial
              difficulty are encouraged to speak to their mentor or the college office, so that reasonable help can be
              arranged.
            </p>
          </Block>
        </div>
      </Container>
    </>
  );
}
