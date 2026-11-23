import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageHero } from "@/components/ui";
import SiteSearch from "@/components/SiteSearch";
import { buildIndex } from "@/lib/search-index";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the website of Shri Ram College of Commerce & Science, Bhandup West.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  const index = buildIndex();
  return (
    <>
      <PageHero crumbs={[{ label: "Search" }]} title="Search" intro="Find programmes, admissions information, student support, committees and official documents." />
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <Suspense fallback={null}>
            <SiteSearch index={index} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
