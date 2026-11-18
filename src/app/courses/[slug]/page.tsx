import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Media, Pending, Arrow } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import { courses, getCourse } from "@/lib/courses";
import { getDepartment } from "@/lib/departments";
import { site, formatPhone } from "@/lib/site";
import { photos } from "@/lib/images";

const bannerFor = (dept: string) =>
  dept === "information-technology" ? photos.labStudents.src : dept === "accounts" ? photos.lecture.src : photos.classroomStudents.src;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return {
    title: `${c.code} — ${c.name}`,
    description: `${c.name} (${c.code}) at Shri Ram College of Commerce & Science, Bhandup West, Mumbai. ${c.summary}`,
    alternates: { canonical: `/courses/${c.slug}` },
    openGraph: { title: `${c.name} (${c.code})`, description: c.summary, url: `/courses/${c.slug}` },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();
  const dept = getDepartment(c.department);
  const related = c.related.map(getCourse).filter(Boolean) as NonNullable<ReturnType<typeof getCourse>>[];
  const distance = c.slug === "mba" || c.slug === "mca";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    courseCode: c.code,
    description: c.summary,
    provider: { "@type": "CollegeOrUniversity", name: site.name, sameAs: site.url },
    educationalCredentialAwarded: c.name,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Banner */}
      <header className="on-dark relative isolate overflow-hidden bg-ink text-white">
        <Media label={`${c.code} programme banner`} src={bannerFor(c.department)} alt="" dark hideLabel still className="absolute inset-0 -z-10 h-full w-full" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,24,27,0.92),rgba(26,24,27,0.55))]" />
        <Container className="pb-16 pt-10 lg:pb-24 lg:pt-14">
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex flex-wrap items-center gap-2 text-[1rem] text-white/65">
              <li><Link href="/" className="link-u hover:text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/courses" className="link-u hover:text-white">Programmes</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white">{c.code}</li>
            </ol>
          </nav>
          <p className="font-serif text-[clamp(3rem,2rem+5vw,6.5rem)] leading-[0.95] text-white/90">{c.code}</p>
          <h1 className="t-h1 mt-5 max-w-[22ch] text-white">{c.name}</h1>
          <p className="mt-6 max-w-2xl text-[1.25rem] leading-relaxed text-white/80">{c.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#enquire" className="inline-flex h-12 items-center rounded-[3px] bg-red px-6 font-semibold text-white transition-colors hover:bg-maroon">
              Enquire about {c.code}
            </a>
            <a href="#overview" className="inline-flex h-12 items-center rounded-[3px] border border-white/45 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-ink">
              Read the overview
            </a>
          </div>
        </Container>
        <div aria-hidden className="h-1 bg-red" />
      </header>

      <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-20 lg:col-span-7">
          {c.availabilityNote && (
            <div role="note" className="border-l-[3px] border-red bg-ivory px-6 py-5 text-ink-soft">
              <p className="font-semibold text-ink">Please note</p>
              <p className="mt-1">{c.availabilityNote}</p>
            </div>
          )}

          <section id="overview" aria-labelledby="h-overview">
            <h2 id="h-overview" className="t-h2">About the programme</h2>
            <div className="prose-college mt-6">
              {c.overview.map((p, i) => (
                <p key={i} className={i === 0 ? "t-lead !text-ink" : ""}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="h-develop">
            <h2 id="h-develop" className="t-h2">What the programme develops</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {c.develops.map((d) => (
                <li key={d} className="border-t-2 border-red pt-4 text-ink-soft">{d}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="h-areas">
            <h2 id="h-areas" className="t-h2">Academic and professional areas</h2>
            <p className="mt-4 text-ink-soft measure">The programme introduces students to the following broad areas.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.areas.map((a) => (
                <li key={a} className="rounded-full border border-sand bg-white px-4 py-1.5 text-[1.0625rem] text-ink">{a}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="h-careers">
            <h2 id="h-careers" className="t-h2">Where it can lead</h2>
            <p className="mt-4 text-ink-soft measure">
              Graduates follow many paths. The directions below are common for this field; outcomes depend on each
              student&apos;s results, further qualifications and choices.
            </p>
            <ul className="mt-8 divide-y divide-stone border-y border-stone">
              {c.careers.map((r) => (
                <li key={r} className="flex items-start gap-4 py-4">
                  <span aria-hidden className="mt-[0.7em] h-[1.5px] w-4 shrink-0 bg-red" />
                  <span className="text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Key facts */}
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-28">
            <div className="border border-stone bg-ivory p-7">
              <h2 className="t-h3 text-red">Key information</h2>
              <dl className="mt-6 space-y-5 text-[1.0625rem]">
                <div><dt className="font-semibold text-red">Level</dt><dd className="mt-0.5 font-medium text-ink">{c.level}</dd></div>
                <div><dt className="font-semibold text-red">Subject area</dt><dd className="mt-0.5 font-medium text-ink">{c.category}</dd></div>
                {dept && (
                  <div>
                    <dt className="font-semibold text-red">Department</dt>
                    <dd className="mt-0.5"><Link href={`/departments#${dept.slug}`} className="link-u font-medium text-maroon">{dept.name}</Link></dd>
                  </div>
                )}
                <div><dt className="font-semibold text-red">Offered through</dt><dd className="mt-0.5 font-medium text-ink">{c.offeredThrough}</dd></div>
                <div><dt className="font-semibold text-red">Mode</dt><dd className="mt-0.5 font-medium text-ink">{distance ? "Open and distance learning" : "Regular, on campus"}</dd></div>
              </dl>
              <Pending className="mt-6 !bg-white text-[1rem]">
                Duration, eligibility, intake and fees are confirmed by the college office for each academic year.
              </Pending>
            </div>
          </div>
        </aside>
      </Container>

      {/* Enquiry */}
      <section id="enquire" aria-labelledby="h-enquire" className="border-t border-stone bg-ivory py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="h-enquire" className="t-h2">Ask about {c.code}</h2>
            <p className="mt-5 text-ink-soft">
              Send your question and the college office will contact you with guidance on eligibility, the admission
              schedule and next steps.
            </p>
            <p className="mt-5 text-[1.0625rem] text-muted">
              Prefer to talk? Call <a href={`tel:+91${site.phones[0]}`} className="link-u text-ink">{formatPhone(site.phones[0])}</a>.
            </p>
          </div>
          <div className="border border-stone bg-white p-6 sm:p-9 lg:col-span-7 lg:col-start-6">
            <EnquiryForm type="course" defaults={{ course: c.slug }} idPrefix={`course-${c.slug}`} />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="h-related" className="py-16 lg:py-24">
          <Container>
            <h2 id="h-related" className="t-h2">Related programmes</h2>
            <ul className="mt-10 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug} className="bg-white">
                  <Link href={`/courses/${r.slug}`} className="group flex h-full flex-col p-7 transition-colors hover:bg-ivory">
                    <span className="font-serif text-[1.625rem] text-maroon">{r.code}</span>
                    <span className="mt-2 font-semibold text-ink">{r.name}</span>
                    <span className="mt-2 flex-1 text-[1.0625rem] text-ink-soft">{r.summary}</span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[1.0625rem] font-semibold text-maroon">
                      View programme <Arrow className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
