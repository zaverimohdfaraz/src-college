import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionHeading, Arrow } from "@/components/ui";
import { ContactLines } from "@/components/sections";
import EnquiryForm from "@/components/EnquiryForm";
import { coursesByLevel } from "@/lib/courses";
import { site, formatPhone } from "@/lib/site";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to enquire about admission to undergraduate and postgraduate programmes at Shri Ram College of Commerce & Science, Bhandup West, Mumbai.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  { title: "Explore the programmes", text: "Read about each programme to see what it covers and where it can lead. If you are unsure, choose 'Not decided yet' in the enquiry form." },
  { title: "Send an enquiry", text: "Use the form on this page. Tell us the programme you are interested in, your current education level and any questions." },
  { title: "Speak with the admissions office", text: "The office will contact you with guidance on eligibility, the admission schedule for the coming year and the documents required." },
  { title: "Complete the formal admission", text: "Admission is completed in person or through the official process announced by the college and the University of Mumbai for that year." },
];

const prepare = [
  "The programme or programmes you are considering",
  "Your current or most recent qualification, and your results if they are available",
  "Whether you are applying for the first year or seeking another entry route",
  "Any questions about scholarships, timings or support you may need",
];

const faqs = [
  {
    q: "Does sending an enquiry confirm my admission?",
    a: "No. The enquiry form only lets the college know you are interested. Admission is confirmed only by the college office through the official admission process.",
  },
  {
    q: "When do admissions open?",
    a: "Undergraduate admissions usually follow the declaration of Std. XII results, and postgraduate admissions follow graduation results. Exact dates are announced each year on the notices page and by the college office.",
  },
  {
    q: "Is admission based on an entrance test?",
    a: "Admission to the college's undergraduate programmes is merit-based and follows University of Mumbai guidelines. The admissions office will explain the criteria that apply to your chosen programme.",
  },
  {
    q: "Can I get help with fees?",
    a: "Eligible students may apply for government scholarships and freeships, such as those offered through the Government of Maharashtra's MahaDBT portal. See the student support page for details.",
  },
  {
    q: "Can I visit the college before deciding?",
    a: "Yes. You are welcome to request a campus visit, and the office will arrange a convenient time.",
  },
];

export default function AdmissionsPage() {
  const ug = coursesByLevel("Undergraduate");
  const pg = coursesByLevel("Postgraduate");
  return (
    <>
      <PageHero
        crumbs={[{ label: "Admissions" }]}
        title="Admissions"
        intro="Choosing a college is a big decision. The admissions office is here to answer your questions and guide you and your family through each step."
        image={{ label: "College office", ...photos.office }}
      />

      <section aria-labelledby="h-steps" className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            id="h-steps"
            title="How admission works"
            intro="The website collects enquiries. The admission itself is handled by the college office, following University of Mumbai guidelines."
          />
          <ol className="mt-12 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white p-7">
                <span className="font-serif text-[2.75rem] leading-none text-red">{i + 1}</span>
                <h3 className="t-h3 mt-5">{s.title}</h3>
                <p className="mt-3 text-[1.0625rem] text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="h-prepare" className="border-y border-stone bg-ivory py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="h-prepare" className="t-h2">Before you contact us</h2>
            <p className="mt-5 text-ink-soft">It helps to have this information ready, so the office can give you clear and specific guidance.</p>
            <ul className="prose-college mt-6">
              {prepare.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="t-h3 text-red">Programmes open for enquiry</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {[{ t: "Undergraduate", l: ug }, { t: "Postgraduate", l: pg }].map((g) => (
                <div key={g.t}>
                  <p className="t-h4 border-b border-ink pb-2">{g.t}</p>
                  <ul className="mt-2">
                    {g.l.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/courses/${c.slug}`} className="group flex items-center justify-between border-b border-stone py-2.5">
                          <span className="text-ink group-hover:text-maroon">{c.code}</span>
                          <Arrow className="text-muted group-hover:text-maroon" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="enquire" aria-labelledby="h-enquire" className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-enquire" className="t-h2">Admission enquiry</h2>
            <p className="mt-5 text-ink-soft">
              Fill in the form and the admissions office will contact you. Fields marked with an asterisk are required.
            </p>
            <ContactLines className="mt-10 !grid-cols-1" />
          </div>
          <div className="border border-stone bg-ivory/50 p-6 sm:p-9 lg:col-span-7 lg:col-start-6">
            <EnquiryForm type="admission" tone="ivory" />
          </div>
        </Container>
      </section>

      <section aria-labelledby="h-faq" className="border-t border-stone bg-ivory py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-faq" className="t-h2">Common questions</h2>
            <p className="mt-5 text-ink-soft">
              Can&apos;t find your answer? Call <a className="link-u text-ink" href={`tel:+91${site.phones[0]}`}>{formatPhone(site.phones[0])}</a> or{" "}
              <Link href="/contact" className="link-u text-ink">send a message</Link>.
            </p>
          </div>
          <div className="divide-y divide-sand border-y border-sand lg:col-span-7 lg:col-start-6">
            {faqs.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[1.375rem] text-ink [&::-webkit-details-marker]:hidden">
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
        </Container>
      </section>
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
    </>
  );
}
