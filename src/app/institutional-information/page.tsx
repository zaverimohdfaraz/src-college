import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, OnThisPage, Pending, Arrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Institutional information",
  description:
    "Committees, quality assurance, accreditation documents, mandatory disclosures and alumni information for Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/institutional-information" },
};

const sections = [
  { id: "overview", label: "At a glance" },
  { id: "committees", label: "Committees and cells" },
  { id: "quality", label: "Quality assurance" },
  { id: "practices", label: "Best practices" },
  { id: "disclosures", label: "Mandatory disclosures" },
  { id: "alumni", label: "Alumni" },
  { id: "publications", label: "Publications" },
];

const committees = [
  {
    group: "Student welfare and safety",
    items: [
      ["Anti-Ragging Cell", "Prevents ragging and acts on any complaint, in line with UGC regulations."],
      ["Women Development Cell (WDC)", "Promotes the safety, confidence and development of women students and staff."],
      ["Discipline Committee", "Upholds the code of conduct and a respectful campus environment."],
      ["Attendance Committee", "Monitors attendance and supports students at risk of falling behind."],
    ],
  },
  {
    group: "Academic administration",
    items: [
      ["Admission Committee", "Oversees the admission process each academic year."],
      ["Examination Committee", "Conducts college examinations and coordinates with the University."],
      ["Library Committee", "Guides the development and use of library resources."],
      ["UMIC", "College committee listed by the institution; description to be confirmed."],
    ],
  },
  {
    group: "Student development",
    items: [
      ["Students' Council", "Represents students and helps organise college activities."],
      ["Cultural Committee", "Plans cultural programmes and the Annual Day."],
      ["Gymkhana Committee", "Runs sport and the Sports Day."],
      ["National Service Scheme (NSS)", "Community service and social awareness."],
      ["DLLE", "Lifelong learning and extension activities."],
      ["Magazine Committee", "Publishes the college magazine."],
      ["Placement and Career Guidance Cell", "Career guidance, training and placement support."],
      ["Alumni Association", "Connects graduates with the college."],
    ],
  },
];

const disclosures = [
  "Affiliation letters from the University of Mumbai",
  "Recognition and approval documents",
  "NAAC accreditation certificates and Self Study Reports",
  "Annual Quality Assurance Reports (AQAR)",
  "AISHE certificates",
  "Right to Information (RTI): Public Information Officer and Appellate Authority",
  "Composition of statutory committees",
  "Audited financial statements, where required",
];

export default function InstitutionalInfoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Institutional information" }]}
        title="Institutional information"
        intro="How the college is organised, how it assures quality, and the official information it makes available to students, parents and the public."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <aside className="lg:col-span-3"><OnThisPage items={sections} /></aside>
        <div className="space-y-24 lg:col-span-8 lg:col-start-5">
          <section id="overview" aria-labelledby="h-overview">
            <h2 id="h-overview" className="t-h2">At a glance</h2>
            <dl className="mt-8 divide-y divide-stone border-y border-stone">
              {[
                ["Name", site.name],
                ["Managed by", `${site.trust} (charitable trust)`],
                ["Established", site.established],
                ["Affiliation", `${site.affiliation} (affiliated college)`],
                ["Open university", "Study centre of Yashwantrao Chavan Maharashtra Open University (YCMOU)"],
                ["Type", "Co-educational, self-financed"],
                ["Campus", "Own campus, Bhandup West, Mumbai"],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 md:grid-cols-[13rem_1fr] md:gap-8">
                  <dt className="font-semibold text-red">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="committees" aria-labelledby="h-committees">
            <h2 id="h-committees" className="t-h2">Committees and cells</h2>
            <p className="mt-5 text-ink-soft measure">
              Committees made up of faculty, staff and students share responsibility for the life of the college.
            </p>
            <div className="mt-10 space-y-12">
              {committees.map((g) => (
                <div key={g.group}>
                  <h3 className="t-h3 border-b-2 border-red pb-3 text-red">{g.group}</h3>
                  <dl className="divide-y divide-stone">
                    {g.items.map(([n, d]) => (
                      <div key={n} className="grid gap-1 py-4 md:grid-cols-[17rem_1fr] md:gap-8">
                        <dt className="font-semibold text-ink">{n}</dt>
                        <dd className="text-ink-soft">{d}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <Pending className="mt-8">Committee membership for the current academic year will be published once confirmed by the college.</Pending>
          </section>

          <section id="quality" aria-labelledby="h-quality">
            <h2 id="h-quality" className="t-h2">Quality assurance and accreditation</h2>
            <div className="prose-college mt-6 measure">
              <p>
                The college is assessed by the National Assessment and Accreditation Council (NAAC) and maintains an
                Internal Quality Assurance Cell (IQAC), which plans, monitors and reviews academic and administrative
                quality throughout the year.
              </p>
              <p>
                The IQAC collects feedback from students, parents and alumni, reviews teaching and learning, and prepares
                the Annual Quality Assurance Report (AQAR) submitted to NAAC.
              </p>
            </div>
            <Pending className="mt-8">
              The current accreditation certificate, grade, validity period, Self Study Reports and AQARs will be published
              here from official documents supplied by the college.
            </Pending>
          </section>

          <section id="practices" aria-labelledby="h-practices">
            <h2 id="h-practices" className="t-h2">Best practices</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div className="border-t-[3px] border-red pt-5">
                <h3 className="t-h3 text-red">Mentoring every student</h3>
                <p className="mt-3 text-ink-soft">
                  Each faculty member mentors a group of around 15 to 20 students, counselling them on academic and
                  personal matters. The aim is that no student goes unnoticed or unsupported.
                </p>
              </div>
              <div className="border-t-[3px] border-red pt-5">
                <h3 className="t-h3 text-red">Activity-based learning</h3>
                <p className="mt-3 text-ink-soft">
                  Lesson plans, presentations, poster and paper presentations, projects, industrial visits and internships
                  help students learn actively rather than by rote.
                </p>
              </div>
            </div>
            <p className="mt-8 text-ink-soft measure">
              The college reports that these practices have improved students&apos; understanding of their subjects,
              strengthened results, reduced backlogs and encouraged more students towards placements and higher studies.
            </p>
          </section>

          <section id="disclosures" aria-labelledby="h-disclosures">
            <h2 id="h-disclosures" className="t-h2">Mandatory disclosures</h2>
            <p className="mt-5 text-ink-soft measure">
              Higher education institutions publish key documents so that students, parents and regulators can see how
              they are governed. The following documents will be available here.
            </p>
            <ul className="mt-8 divide-y divide-stone border-y border-stone">
              {disclosures.map((d) => (
                <li key={d} className="flex items-center justify-between gap-6 py-4">
                  <span className="text-ink">{d}</span>
                  <span className="shrink-0 text-[1rem] text-muted">Awaiting document</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="alumni" aria-labelledby="h-alumni">
            <h2 id="h-alumni" className="t-h2">Alumni</h2>
            <p className="mt-5 text-ink-soft measure">
              Graduates of the college are part of a growing community. The Alumni Association keeps former students in
              touch with the college, and alumni are invited to share their experience, mentor current students and take
              part in events.
            </p>
            <Link href="/contact?subject=Alumni%20registration#forms" className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon">
              <span className="link-u">Alumni: get in touch with the college</span><Arrow />
            </Link>
          </section>

          <section id="publications" aria-labelledby="h-pubs">
            <h2 id="h-pubs" className="t-h2">College publications</h2>
            <p className="mt-5 text-ink-soft measure">
              The college magazine, produced by the Magazine Committee, features writing, art and reports by students and
              staff.
            </p>
            <Pending className="mt-6">Issues of the college magazine and other publications will be added when supplied.</Pending>
          </section>
        </div>
      </Container>
    </>
  );
}
