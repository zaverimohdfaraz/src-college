import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { history } from "@/lib/about";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "History",
  description:
    "How the Jana Seva Sangh founded Shri Ram College of Commerce & Science in Bhandup West in 2009, and how the college has grown since.",
  alternates: { canonical: "/about/history" },
};

export default function HistoryPage() {
  return (
    <SectionShell section="about"
      href="/about/history"
      intro="The college grew out of the Jana Seva Sangh's long work in education in Bhandup."
    >
      <div className="prose-college measure">
        <p className="t-lead">
          Having run schools and junior colleges in the area for many years, the trust established a degree college so
          that its students — and others from the neighbourhood — could continue their studies without travelling far.
        </p>
      </div>

      <h2 className="t-h2 mt-16">Timeline</h2>
      <ol className="relative mt-10 space-y-12 border-l border-stone pl-8">
        {history.map(([year, text]) => (
          <li key={year} className="relative">
            <span aria-hidden className="absolute -left-[calc(2rem+5px)] top-2 h-[9px] w-[9px] rounded-full bg-red ring-4 ring-white" />
            <p className="font-serif text-[1.875rem] leading-none text-red">{year}</p>
            <p className="mt-3 measure text-ink-soft">{text}</p>
          </li>
        ))}
      </ol>

      <figure className="mt-16">
        <Media label="College building" {...photos.exterior} className="aspect-[16/9] w-full" />
        <figcaption className="mt-3 text-[1rem] text-muted">The college building on Datta Mandir Road, Bhandup West.</figcaption>
      </figure>
    </SectionShell>
  );
}
