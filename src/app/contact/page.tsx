import type { Metadata } from "next";
import { Container, PageHero, ButtonLink } from "@/components/ui";
import { MapEmbed, ContactLines } from "@/components/sections";
import EnquiryForm from "@/components/EnquiryForm";
import { directory } from "@/lib/people";
import { StatusPill } from "@/components/disclosure";
import { site, formatPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Address, phone numbers, email, map and directions for Jana Seva Sangh's Shri Ram College of Commerce & Science, Datta Mandir Road, Bhandup West, Mumbai 400078.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title="Contact the college"
        intro="Call, email or send a message using the form below. To visit the campus, call the college office to arrange a convenient time."
      />

      <section aria-labelledby="h-reach" className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="h-reach" className="t-h2">Reach us</h2>
            <ContactLines className="mt-8" />
            <div className="mt-10 border-t border-stone pt-8">
              <h3 className="t-h4">Getting here</h3>
              <p className="mt-2 text-ink-soft">
                The college is on Datta Mandir Road in Bhandup West. Bhandup and Nahur stations on the Central line are
                the nearest suburban railway stations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</ButtonLink>
                <ButtonLink href={site.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">Open in Google Maps</ButtonLink>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed className="aspect-[4/3] border border-stone lg:aspect-auto lg:h-full lg:min-h-[30rem]" title={`Map: ${site.name}, Bhandup West`} />
          </div>
        </Container>
      </section>

      <section id="directory" aria-labelledby="h-directory" className="scroll-mt-28 border-t border-stone py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-directory" className="t-h2">Telephone directory</h2>
            <p className="mt-4 text-ink-soft">Office hours and direct lines for each section are added as they are confirmed.</p>
          </div>
          <dl className="divide-y divide-stone border-y border-stone lg:col-span-8">
            {directory.map((d, i) => (
              <div key={d.office + i} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <dt className="text-ink">{d.office}</dt>
                <dd>
                  {d.phone ? (
                    <a href={`tel:+91${d.phone}`} className="link-u font-semibold text-ink">{formatPhone(d.phone)}</a>
                  ) : d.email ? (
                    <a href={`mailto:${d.email}`} className="link-u font-semibold text-ink">{d.email}</a>
                  ) : (
                    <StatusPill tone="wait">To be published</StatusPill>
                  )}
                </dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <dt className="text-ink">Official email</dt>
              <dd><a href={`mailto:${site.email}`} className="link-u font-semibold text-ink">{site.email}</a></dd>
            </div>
          </dl>
        </Container>
      </section>

      <section id="forms" aria-labelledby="h-forms" className="border-t border-stone bg-ivory py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-forms" className="t-h2">Send an enquiry</h2>
            <p className="mt-5 text-ink-soft">
              Leave your name, email, mobile number and the course you are interested in. The college office will
              contact you.
            </p>
          </div>
          <div className="border border-stone bg-white p-6 sm:p-9 lg:col-span-7 lg:col-start-6">
            <EnquiryForm type="contact" />
          </div>
        </Container>
      </section>
    </>
  );
}
