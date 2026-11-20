import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import EnquiryForm from "@/components/EnquiryForm";
import { ContactLines } from "@/components/sections";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to enquire about and apply for undergraduate and postgraduate programmes at Shri Ram College of Commerce & Science, Bhandup West, Mumbai.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  { title: "Explore the programmes", text: "Read about each programme to see what it covers and where it can lead." },
  { title: "Send an enquiry", text: "Use the form on this page, or call the college office. Tell us the programme you are interested in." },
  { title: "Speak with the admissions office", text: "The office will contact you with guidance on eligibility, the admission schedule for the coming year and the documents required." },
  { title: "Complete the formal admission", text: "Admission is completed through the official process announced by the college and the University of Mumbai for that year." },
];

export default function AdmissionsPage() {
  return (
    <SectionShell
      section="admissions"
      href="/admissions"
      band={false}
      intro="Choosing a college is a big decision. The admissions office is here to answer your questions and guide you and your family through each step."
    >
      <h2 className="t-h2">How admission works</h2>
      <p className="mt-5 measure text-ink-soft">
        The website collects enquiries. The admission itself is handled by the college office, following University of
        Mumbai guidelines.
      </p>
      <ol className="mt-10 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-white p-7">
            <span className="font-serif text-[2.5rem] leading-none text-red">{i + 1}</span>
            <h3 className="t-h3 mt-4">{s.title}</h3>
            <p className="mt-3 text-[1.0625rem] text-ink-soft">{s.text}</p>
          </li>
        ))}
      </ol>

      <section id="enquire" aria-labelledby="h-enquire" className="mt-20 scroll-mt-28">
        <h2 id="h-enquire" className="t-h2">Admission enquiry</h2>
        <p className="mt-5 measure text-ink-soft">Fill in the form and the admissions office will contact you.</p>
        <div className="mt-8 border border-stone bg-ivory/50 p-6 sm:p-9">
          <EnquiryForm type="admission" tone="ivory" />
        </div>
        <ContactLines className="mt-10" />
      </section>
    </SectionShell>
  );
}
