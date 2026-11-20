import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import VideoBlock from "@/components/VideoBlock";
import { videos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Teaching and learning",
  description: "How Shri Ram College of Commerce & Science teaches: planned lessons, mentoring, active learning, add-on courses and digital resources.",
  alternates: { canonical: "/academics/teaching-and-learning" },
};

const approach = [
  { title: "Planned teaching", text: "An academic committee prepares the academic calendar in advance, and faculty prepare lesson plans before each semester begins." },
  { title: "Mentoring", text: "Each faculty member mentors a group of students, counselling them on academic progress and personal concerns." },
  { title: "Active learning", text: "Presentations, poster and paper presentations, group discussions and project work help students apply what they learn." },
  { title: "Beyond the syllabus", text: "Guest lectures, seminars, workshops, conferences, industrial visits and internships connect study with practice." },
  { title: "Digital resources", text: "Presentations, online content and video lectures support classroom teaching, alongside access to e-journals and e-books." },
  { title: "Listening to feedback", text: "The college collects feedback from students, parents and alumni and uses it to improve teaching and support." },
];

export default function TeachingPage() {
  return (
    <SectionShell
      section="academics"
      href="/academics/teaching-and-learning"
      intro="A structured, student-centred approach that the college continues to develop in response to feedback."
    >
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {approach.map((a) => (
          <li key={a.title} className="border-t-[3px] border-red pt-5">
            <h2 className="t-h3 text-red">{a.title}</h2>
            <p className="mt-3 text-ink-soft">{a.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="t-h2 mt-20">Add-on courses</h2>
      <div className="prose-college mt-6 measure">
        <p>
          Short add-on courses run alongside the degree and give students practical, job-ready skills, such as advanced
          spreadsheets, accounting software, office applications, digital marketing and communication. They are taught
          in the college&apos;s classrooms and computer laboratory, and lead to a certificate on completion.
        </p>
      </div>
      <VideoBlock className="mt-10" {...videos.addOn} />
    </SectionShell>
  );
}
