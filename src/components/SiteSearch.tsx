"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { SearchEntry } from "@/lib/search-index";

const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, " ");

/** Words are matched from their start, so "rti" finds "RTI" but not "parties". */
const hasWord = (hay: string, t: string) => (" " + hay).includes(" " + t);

function score(e: SearchEntry, terms: string[]) {
  const title = " " + norm(e.title).replace(/\s+/g, " ");
  const body = " " + norm(`${e.text} ${e.area} ${e.keywords ?? ""}`).replace(/\s+/g, " ");
  let total = 0;
  for (const t of terms) {
    if (hasWord(title, t)) total += 5;
    else if (hasWord(body, t)) total += 1;
    else return 0; // every word must match somewhere
  }
  return total;
}

export default function SiteSearch({ index }: { index: SearchEntry[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const [q, setQ] = useState(params.get("q") ?? "");

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return [];
    return index
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((r) => r.e);
  }, [q, index]);

  return (
    <div>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false });
        }}
      >
        <label htmlFor="site-search" className="t-h4 block text-ink">Search the website</label>
        <div className="mt-3 flex gap-2">
          <input
            id="site-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="For example: B.Com., scholarships, anti-ragging"
            autoComplete="off"
            autoFocus
            className="min-h-12 w-full min-w-0 rounded-[3px] border border-sand bg-white px-4 text-[1.0625rem] text-ink placeholder:text-muted focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
          />
          <button type="submit" className="min-h-12 shrink-0 rounded-[3px] bg-red px-5 font-semibold text-white hover:bg-maroon">Search</button>
        </div>
      </form>

      <div aria-live="polite" className="mt-10">
        {q.trim().length > 1 && (
          <p className="text-[1rem] text-muted">
            {results.length ? `${results.length} result${results.length === 1 ? "" : "s"}` : "No pages match. Try a different word, or browse the menu."}
          </p>
        )}
        <ul className="mt-4 divide-y divide-stone">
          {results.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="group block py-5">
                <span className="text-[0.9375rem] font-semibold text-red">{r.area}</span>
                <span className="mt-1 block font-serif text-[1.375rem] leading-snug text-ink group-hover:text-red">{r.title}</span>
                <span className="mt-1 block text-ink-soft">{r.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
