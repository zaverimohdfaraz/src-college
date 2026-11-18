"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { navigation, site, formatPhone } from "@/lib/site";
import { cx, Arrow } from "./ui";
import { Brand } from "./Brand";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const enter = useCallback((label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(label);
  }, []);
  const leave = useCallback(() => {
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const activeGroup = navigation.find((g) => g.label === open);

  return (
    <>
      <a href="#main" className="sr-only z-[100] bg-white px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Skip to main content
      </a>

      {/* Utility bar */}
      <div className="on-dark hidden bg-red text-[1rem] text-white md:block">
        <div className="mx-auto flex h-10 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <p className="truncate">
            Affiliated to the {site.affiliation}
            <span aria-hidden className="mx-2.5 text-white/50">|</span>
            NAAC accredited
            <span aria-hidden className="mx-2.5 text-white/50">|</span>
            Est. {site.establishedYear}
          </p>
          <ul className="flex shrink-0 items-center gap-5">
            {[
              ["Notices", "/notices"],
              ["Scholarships", "/student-support#scholarships"],
              ["Anti-ragging", "/student-support#anti-ragging"],
              ["Student support", "/student-support"],
            ].map(([l, h]) => (
              <li key={h} className="hidden lg:block">
                <Link href={h} className="text-white/90 hover:text-white hover:underline hover:underline-offset-4">{l}</Link>
              </li>
            ))}
            <li className="lg:border-l lg:border-white/30 lg:pl-5">
              <a href={`tel:+91${site.phones[0]}`} className="font-semibold hover:underline hover:underline-offset-4">{formatPhone(site.phones[0])}</a>
            </li>
          </ul>
        </div>
      </div>

      <header
        ref={navRef}
        className={cx(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-[6px] transition-[box-shadow,border-color] duration-300",
          scrolled ? "border-stone shadow-[0_6px_24px_-18px_rgba(36,35,38,0.5)]" : "border-transparent",
        )}
      >
        <div
          className={cx(
            "mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 lg:px-12",
            scrolled ? "h-[68px]" : "h-[84px]",
          )}
        >
          <Link href="/" className="shrink-0" aria-label={`${site.name}, home`}>
            <Brand priority size={scrolled ? "sm" : "md"} />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5 2xl:gap-1">
              {navigation.map((g) => {
                const hasMenu = !!g.columns;
                const expanded = open === g.label;
                return (
                  <li key={g.label} onMouseEnter={() => hasMenu && enter(g.label)} onMouseLeave={() => hasMenu && leave()}>
                    {hasMenu ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls="mega-panel"
                        onClick={() => setOpen(expanded ? null : g.label)}
                        className={cx(
                          "relative flex h-11 items-center gap-1.5 whitespace-nowrap px-2.5 text-[1rem] font-medium transition-colors 2xl:px-3 2xl:text-[1.0625rem]",
                          isActive(g.href) || expanded ? "text-maroon" : "text-ink hover:text-maroon",
                        )}
                      >
                        {g.label}
                        <svg aria-hidden viewBox="0 0 12 12" className={cx("h-2.5 w-2.5 transition-transform duration-200", expanded && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M2.5 4.5L6 8l3.5-3.5" />
                        </svg>
                        {isActive(g.href) && <span aria-hidden className="absolute inset-x-3 -bottom-px h-[2px] bg-red" />}
                      </button>
                    ) : (
                      <Link
                        href={g.href}
                        aria-current={isActive(g.href) ? "page" : undefined}
                        className={cx(
                          "relative flex h-11 items-center whitespace-nowrap px-2.5 text-[1rem] font-medium transition-colors 2xl:px-3 2xl:text-[1.0625rem]",
                          isActive(g.href) ? "text-maroon" : "text-ink hover:text-maroon",
                        )}
                      >
                        {g.label}
                        {isActive(g.href) && <span aria-hidden className="absolute inset-x-3 -bottom-px h-[2px] bg-red" />}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions#enquire"
              className="hidden h-11 items-center whitespace-nowrap rounded-[3px] bg-red px-5 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-maroon sm:inline-flex"
            >
              Enquire now
            </Link>
            <button
              type="button"
              className="flex h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-3 text-[1.0625rem] font-medium min-[375px]:px-3.5 xl:hidden"
              aria-expanded={mobile}
              aria-controls="mobile-menu"
              onClick={() => setMobile(true)}
            >
              <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
              </svg>
              <span className="max-[374px]:sr-only">Menu</span>
            </button>
          </div>
        </div>

        {/* Desktop mega panel */}
        <div
          id="mega-panel"
          onMouseEnter={() => activeGroup && enter(activeGroup.label)}
          onMouseLeave={leave}
          className={cx(
            "absolute inset-x-0 top-full hidden origin-top border-t border-stone bg-white shadow-[0_24px_40px_-28px_rgba(36,35,38,0.45)] transition-[opacity,transform,visibility] duration-200 xl:block",
            activeGroup ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
          )}
        >
          {activeGroup?.columns && (
            <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-10 px-12 py-10">
              <div className="col-span-4 border-r border-stone pr-10">
                <p className="t-h3 text-ink">{activeGroup.label}</p>
                <p className="mt-3 text-[1.0625rem] text-muted">{activeGroup.intro}</p>
                <Link href={activeGroup.href} className="mt-6 inline-flex items-center gap-2 text-[1.0625rem] font-semibold text-maroon">
                  <span className="link-u">Go to {activeGroup.label.toLowerCase()}</span>
                  <Arrow />
                </Link>
              </div>
              {activeGroup.columns.map((col) => (
                <div key={col.heading} className="col-span-4">
                  <p className="mb-4 text-[1rem] font-semibold text-muted">{col.heading}</p>
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="link-u text-[1.1875rem] text-ink hover:text-maroon">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} isActive={isActive} />
    </>
  );
}

function MobileMenu({ open, onClose, isActive }: { open: boolean; onClose: () => void; isActive: (h: string) => boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={cx(
        "fixed inset-0 z-[60] flex flex-col bg-white transition-[opacity,visibility] duration-250 xl:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-stone px-5 sm:px-8">
        <Brand size="sm" />
        <button ref={closeRef} type="button" onClick={onClose} className="flex h-11 items-center gap-2 rounded-[3px] border border-ink/20 px-3.5 text-[1.0625rem] font-medium">
          <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
          Close
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
        <ul className="divide-y divide-stone">
          <li>
            <Link href="/" className={cx("block py-4 font-serif text-[1.75rem]", isActive("/") && "text-maroon")}>Home</Link>
          </li>
          {navigation.map((g) => {
            const isOpen = expanded === g.label;
            if (!g.columns)
              return (
                <li key={g.label}>
                  <Link href={g.href} className={cx("block py-4 font-serif text-[1.75rem]", isActive(g.href) && "text-maroon")}>
                    {g.label}
                  </Link>
                </li>
              );
            return (
              <li key={g.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : g.label)}
                  className={cx("flex w-full items-center justify-between py-4 text-left font-serif text-[1.75rem]", isActive(g.href) && "text-maroon")}
                >
                  {g.label}
                  <span aria-hidden className={cx("relative h-4 w-4 transition-transform duration-200", isOpen && "rotate-45")}>
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current" />
                  </span>
                </button>
                <div className={cx("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <ul className="space-y-1 overflow-hidden">
                    {g.columns
                      .flatMap((c) => c.links)
                      .map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} tabIndex={isOpen ? 0 : -1} className="block py-2 pl-1 text-[1.1875rem] text-ink-soft">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    <li className="h-3" />
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-stone bg-ivory px-5 py-4 sm:px-8">
        <Link href="/admissions#enquire" className="flex h-12 items-center justify-center rounded-[3px] bg-red font-semibold text-white">
          Enquire about admissions
        </Link>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <a href={`tel:+91${site.phones[0]}`} className="flex h-11 items-center justify-center rounded-[3px] border border-ink/20 text-[1.0625rem] font-medium">
            Call the college
          </a>
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center rounded-[3px] border border-ink/20 text-[1.0625rem] font-medium">
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
