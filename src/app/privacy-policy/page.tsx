import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects and uses information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Privacy policy" }]} title="Privacy policy" intro="How the college handles the information you share through this website." />
      <Container className="py-16 lg:py-24">
        <div className="prose-college measure">
          <h2>What we collect</h2>
          <p>
            When you send an enquiry through this website, we collect the four details the form asks for: your name,
            email address, mobile number and the course you are interested in. The email the college receives also shows the date and time of
            the submission. Your network address is used briefly to protect the forms from misuse and is not kept.
          </p>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and provide the information you asked for</li>
            <li>To keep a record of enquiries so that the college office can follow up properly</li>
          </ul>
          <p>
            We do not sell your information, and we do not use it for unrelated marketing. Submitting a form does not
            create an account, register you as a student or confirm admission.
          </p>
          <h2>How it is stored</h2>
          <p>
            Submissions are sent by email to the college office and are not stored on this website. Access is limited
            to staff who need it to respond, and enquiry emails are kept only as long as they are needed for that
            purpose. If you fill in a form, you may also receive a short email confirming that it was received.
          </p>
          <h2>Third-party services</h2>
          <p>
            The contact page includes an embedded Google Map, and videos may be embedded from external services. These
            services may set their own cookies when you interact with them, under their own privacy policies.
          </p>
          <h2>Your choices</h2>
          <p>
            You may ask the college to correct or delete the information you submitted by writing to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2>Contact</h2>
          <p>
            {site.name}, {site.address.full}.
          </p>
          <p className="t-caption">This policy may be updated from time to time. The latest version is always published on this page.</p>
        </div>
      </Container>
    </>
  );
}
