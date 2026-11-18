import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { NoticeList } from "@/components/sections";

export const metadata: Metadata = {
  title: "Notices",
  description: "Official notices about admissions, examinations, scholarships and events at Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/notices" },
};

export default function NoticesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Notices" }]}
        title="Notices"
        intro="Official announcements from the college office about admissions, examinations, scholarships and events."
      />
      <Container className="py-16 lg:py-24">
        <div className="max-w-4xl">
          <NoticeList />
        </div>
      </Container>
    </>
  );
}
