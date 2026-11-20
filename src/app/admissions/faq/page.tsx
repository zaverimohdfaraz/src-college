import type { Metadata } from "next";
import Link from "next/link";
import SectionShell from "@/components/SectionShell";
import { site, formatPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions: common questions",
  description: "Answers to common questions about admission to Shri Ram College of Commerce & Science, Bhandup West: dates, merit, fees help and visits.",
  alternates: { canonical: "/admissions/faq" },
};

const faqs = [
  { q: "Does sending an enquiry confirm my admission?", a: "No. The enquiry form only lets the college know you are interested. Admission is confirmed only by the college office through the official admission process." },
  { q: "When do admissions open?", a: "Undergraduate admissions usually follow the declaration of Std. XII results, and postgraduate admissions follow graduation results. Exact dates are announced each year on the notices page and by the college office." },
  { q: "Is admission based on an entrance test?", a: "Admission to the college's undergraduate programmes is merit-based and follows University of Mumbai guidelines. The admissions office will explain the criteria that apply to your chosen programme." },
  { q: "What documents will I need?", a: "Usually your mark sheets, leaving certificate, Aadhaar card and photographs, plus category, migration or gap certificates where they apply. See the eligibility and documents page for the full list." },
  { q: "Can I get help with fees?", a: "Eligible students may apply for government scholarships and freeships, such as those offered through the Government of Maharashtra's MahaDBT portal and the National Scholarship Portal. The Jana Seva Sangh also awards scholarships to deserving students." },
  { q: "Where can I find the fees for my programme?", a: "Fees are set for each academic year and depend on the programme. The college office will give you the current fee structure when you enquire." },
  { q: "Is the college co-educational?", a: "Yes. The college admits both women and men to all its programmes." },
  { q: "Can I visit the college before deciding?", a: "Yes. Call the college office and they will suggest a convenient time to visit." },
];

export default function FaqPage() {
  return (
    <SectionShell
      section="admissions"
      href="/admissions/faq"
      intro={
        <>
          Can&apos;t find your answer? Call {formatPhone(site.phones[0])} or send a message through the contact page.
        </>
      }
    >
      <div className="divide-y divide-sand border-y border-sand">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[1.375rem] leading-snug text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden className="relative h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-45">
                <span className="absolute left-0 top-1/2 h-[1.5px] w-3.5 -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-3.5 w-[1.5px] -translate-x-1/2 bg-current" />
              </span>
            </summary>
            <p className="pb-6 pr-10 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-10 text-ink-soft">
        Still have a question? <Link href="/admissions#enquire" className="link-u font-semibold text-maroon">Send an admission enquiry</Link>.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
    </SectionShell>
  );
}
