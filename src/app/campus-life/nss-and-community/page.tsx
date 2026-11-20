import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "NSS and community service",
  description: "The National Service Scheme (NSS), DLLE and community initiatives at Shri Ram College of Commerce & Science, Bhandup.",
  alternates: { canonical: "/campus-life/nss-and-community" },
};

const activities = [
  ["Tree plantation drives", "Volunteers plant and care for saplings in and around the city."],
  ["Blood donation camps", "Camps organised with blood banks, open to students, staff and neighbours."],
  ["Food distribution", "Nutritious food distribution for families who need it."],
  ["Village visits", "Visits that help students understand rural life and contribute through service."],
  ["Cleanliness drives", "Campaigns such as Swachh Bharat Abhiyan, on campus and in the neighbourhood."],
  ["Awareness programmes", "Rallies, street plays and talks on health, the environment and social issues."],
];

export default function NssPage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/nss-and-community"
      intro="Education with a social purpose: students put what they learn to work for others."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          The college has a unit of the National Service Scheme (NSS), the Government of India programme that develops
          students&apos; personality through community service. Its motto is &ldquo;Not me, but you&rdquo;.
        </p>
        <p>
          NSS volunteers take part in regular activities through the year, and NSS units usually hold a special camp as
          well. Under the University of Mumbai&apos;s current scheme, NSS can count towards the co-curricular credits
          of the degree; the NSS programme officer will explain the rules for your year.
        </p>
      </div>

      <h2 className="t-h2 mt-16">What volunteers do</h2>
      <dl className="mt-8 divide-y divide-stone border-y border-stone">
        {activities.map(([t, d]) => (
          <div key={t} className="grid gap-1 py-5 md:grid-cols-[15rem_1fr] md:gap-8">
            <dt className="font-semibold text-red">{t}</dt>
            <dd className="text-ink-soft">{d}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <Media label="NSS plantation drive" {...photos.nss} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
        <Media label="NSS volunteer with saplings" {...photos.nss2} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 30vw, 50vw" />
      </div>

      <h2 className="t-h2 mt-20">Lifelong learning and extension (DLLE)</h2>
      <div className="prose-college mt-6 measure">
        <p>
          Through the University of Mumbai&apos;s Department of Lifelong Learning and Extension, students carry out
          extension projects such as surveys, literacy work and awareness campaigns in the community. Completed
          projects may earn additional credit under the university&apos;s rules.
        </p>
        <h2>How to join</h2>
        <p>
          NSS and DLLE enrolment opens at the start of the academic year. Watch the notice board or ask your mentor for
          the date of the enrolment drive.
        </p>
      </div>
    </SectionShell>
  );
}
