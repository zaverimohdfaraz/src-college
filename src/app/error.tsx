"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[1320px] px-5 py-28 sm:px-8 lg:px-12">
      <h1 className="t-h1">This page did not load</h1>
      <p className="t-lead mt-5 max-w-xl">Something went wrong while loading this page. Try again, or return to the homepage.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="inline-flex h-11 items-center rounded-[3px] bg-red px-5 font-semibold text-white hover:bg-maroon">
          Try again
        </button>
        <Link href="/" className="inline-flex h-11 items-center rounded-[3px] border border-ink/25 px-5 font-semibold hover:bg-ink hover:text-white">
          Go to the homepage
        </Link>
      </div>
    </div>
  );
}
