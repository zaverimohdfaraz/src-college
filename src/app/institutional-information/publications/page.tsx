import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";

export const metadata: Metadata = {
  title: "College publications",
  description: "The college magazine of Shri Ram College of Commerce & Science, Bhandup, produced by the Magazine Committee.",
  alternates: { canonical: "/institutional-information/publications" },
};

export default function PublicationsPage() {
  return (
    <SectionShell
      section="institutional"
      href="/institutional-information/publications"
      intro="The college magazine, produced by the Magazine Committee, features writing, art and reports by students and staff."
    >
      <div className="prose-college measure">
        <h2>The college magazine</h2>
        <p>
          The magazine records the year at the college: events, achievements, NSS work and visits, alongside essays,
          poems, stories, artwork and photography by students.
        </p>
        <h2>Contributing</h2>
        <p>
          Every student can contribute. The Magazine Committee announces a call for entries during the year; submit
          your work to the committee&apos;s faculty convenor. Students can also join the editorial team to help select,
          edit and design the issue.
        </p>
        <h2>Reading past issues</h2>
        <p>Ask at the library or the college office for current and past issues.</p>
      </div>
    </SectionShell>
  );
}
