import Link from "next/link";
import type { ReactNode } from "react";
import { Container, PageHero, cx } from "@/components/ui";
import { AdmissionBand } from "@/components/sections";
import { sections, findPage, type SectionKey, type SubPage } from "@/lib/sections";

/**
 * Shared frame for every page in a multi-page section (About, Academics, Campus life…):
 * masthead with breadcrumb, a section menu and the page content.
 */
export default function SectionShell({
  section,
  href,
  intro,
  children,
  after,
  band = true,
}: {
  section: SectionKey;
  href: string;
  intro: ReactNode;
  children: ReactNode;
  /** Full-width content placed after the main column (for example an enquiry form). */
  after?: ReactNode;
  /** Show the admissions band at the foot of the page. */
  band?: boolean;
}) {
  const s = sections[section];
  const pages = s.pages as SubPage[];
  const page = findPage(section, href);
  const isLanding = href === s.href;

  const crumbs = isLanding ? [{ label: s.name }] : [{ label: s.name, href: s.href }, { label: page.label }];

  const linkClass = (active: boolean) =>
    cx(
      "-ml-px block border-l-2 py-1.5 pl-4 text-[1.0625rem] transition-colors",
      active ? "border-red font-semibold text-red" : "border-transparent text-muted hover:border-red hover:text-ink",
    );

  const groupedList = (
    <div className="space-y-8">
      {s.groups.map((g) => (
        <div key={g}>
          {s.groups.length > 1 && <p className="t-h4 mb-3 text-ink">{g}</p>}
          <ul className="space-y-1 border-l border-stone">
            {pages.filter((p) => p.group === g).map((p) => (
              <li key={p.href}>
                <Link href={p.href} aria-current={p.href === href ? "page" : undefined} className={linkClass(p.href === href)}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <PageHero
        crumbs={crumbs}
        title={page.title ?? page.label}
        intro={intro}
        image={page.photo ? { label: page.label, ...page.photo } : undefined}
      />

      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <aside className="min-w-0 lg:col-span-3">
          <nav aria-label={`${s.name} pages`} className="lg:sticky lg:top-28">
            {/* Phones and tablets: a collapsible list that names the current page. */}
            <details className="group border border-stone bg-ivory lg:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-[0.9375rem] text-muted">In {s.name.toLowerCase()}</span>
                  <span className="block font-semibold text-ink">{page.label}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2 text-[1rem] font-semibold text-red">
                  {pages.length} pages
                  <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-stone bg-white px-5 py-5">{groupedList}</div>
            </details>
            <div className="hidden lg:block">{groupedList}</div>
          </nav>
        </aside>

        <div className="min-w-0 lg:col-span-8 lg:col-start-5">
          {children}

        </div>
      </Container>
      {after}
      {band && <AdmissionBand />}
    </>
  );
}
