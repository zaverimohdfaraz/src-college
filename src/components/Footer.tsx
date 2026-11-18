import Link from "next/link";
import { site, formatPhone } from "@/lib/site";
import { courses } from "@/lib/courses";
import { Container } from "./ui";
import { Brand } from "./Brand";

const quick = [
  { label: "About the college", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus life", href: "/campus-life" },
  { label: "Facilities", href: "/facilities" },
  { label: "Student support", href: "/student-support" },
  { label: "Notices", href: "/notices" },
  { label: "Institutional information", href: "/institutional-information" },
];

/** Official external bodies students and parents commonly need. */
const important = [
  { label: "University of Mumbai", href: "https://mu.ac.in" },
  { label: "YCMOU", href: "https://ycmou.ac.in" },
  { label: "UGC", href: "https://www.ugc.gov.in" },
  { label: "MahaDBT scholarships", href: "https://mahadbt.maharashtra.gov.in" },
  { label: "National Scholarship Portal", href: "https://scholarships.gov.in" },
  { label: "Anti-ragging (UGC)", href: "https://www.antiragging.in" },
  { label: "UGC e-Samadhan", href: "https://samadhaan.ugc.ac.in" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-night text-white/75">
      <div aria-hidden className="h-1 bg-red-bright" />

      {/* Enquiry band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-[1.75rem] leading-snug text-white md:text-[2rem]">
            Questions about a programme or admissions?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/admissions#enquire" className="inline-flex h-12 items-center rounded-[3px] bg-red px-6 font-semibold text-white transition-colors hover:bg-red-dark">
              Send an admission enquiry
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center rounded-[3px] border border-white/35 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-ink">
              Contact the college
            </Link>
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-3">
          <Brand tone="dark" />
          <p className="mt-6 max-w-sm text-[1.0625rem] leading-relaxed">
            A degree college of the {site.trust}, affiliated to the {site.affiliation} and serving students of Bhandup
            and the surrounding neighbourhoods since {site.establishedYear}.
          </p>
          <address className="mt-6 space-y-1 text-[1.0625rem] not-italic">
            <p>{site.address.line1}, {site.address.city} {site.address.postalCode}</p>
            <p className="flex flex-col items-start">
              {site.phones.map((p) => (
                <span key={p}>
                  <a href={`tel:+91${p}`} className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">{formatPhone(p)}</a>
                  
                </span>
              ))}
            </p>
            <p><a href={`mailto:${site.email}`} className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">{site.email}</a></p>
          </address>
        </div>

        <nav aria-label="The college" className="lg:col-span-2 lg:col-start-5">
          <p className="mb-4 font-semibold text-white">The college</p>
          <ul className="text-[1.0625rem] lg:space-y-2.5">
            {quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline hover:underline-offset-4 inline-flex min-h-11 items-center lg:min-h-0">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Programmes" className="lg:col-span-3">
          <p className="mb-4 font-semibold text-white">Programmes</p>
          <ul className="grid grid-cols-2 gap-x-6 text-[1.0625rem] lg:gap-y-2.5">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-white hover:underline hover:underline-offset-4 inline-flex min-h-11 items-center lg:min-h-0">{c.code}</Link>
              </li>
            ))}
          </ul>
          <Link href="/courses" className="mt-2 inline-flex min-h-11 items-center text-[1.0625rem] font-semibold text-white underline-offset-4 hover:underline">
            All programmes
          </Link>
        </nav>

        <nav aria-label="Important links" className="lg:col-span-3">
          <p className="mb-4 font-semibold text-white">Important links</p>
          <ul className="text-[1.0625rem] lg:space-y-2.5">
            {important.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 hover:text-white hover:underline hover:underline-offset-4 lg:min-h-0">
                  {l.label}
                  <svg aria-hidden viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 2h6v6M10 2L3 9" /></svg>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[1rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 lg:gap-y-2">
            <li><Link href="/privacy-policy" className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">Privacy policy</Link></li>
            <li><Link href="/institutional-information#disclosures" className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">Mandatory disclosures</Link></li>
            <li><Link href="/student-support#grievance" className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">Grievance redressal</Link></li>
            <li><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline inline-flex min-h-11 items-center lg:min-h-0">Directions</a></li>
          </ul>
        </Container>
      </div>
       <div className="border-t border-white/10 bg-black/25">
        <Container className="flex min-h-14 items-center justify-center py-3 text-center text-[1rem] text-white/70">
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.nexorasoln.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-red-bright decoration-2 underline-offset-4 transition-colors hover:text-red-bright lg:min-h-0"
            >
              Nexora Solutions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
