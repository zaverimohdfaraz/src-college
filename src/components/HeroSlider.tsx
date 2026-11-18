"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Media, cx, Arrow } from "./ui";

export type Slide = {
  id: string;
  rail: string; // short label in the index rail
  title: string;
  body: string;
  image: { label: string; src?: string; alt: string };
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const DURATION = 7000;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);
  const regionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => {
      setReduced(mq.matches);
      if (mq.matches) setPlaying(false);
    };
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const running = playing && !hovering && !reduced;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(next, DURATION);
    return () => window.clearTimeout(t);
  }, [running, next, index]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Introducing the college"
      onKeyDown={onKey}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => { if (!regionRef.current?.contains(e.relatedTarget as Node)) setHovering(false); }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
      className="on-dark relative isolate bg-ink text-white"
    >
      <div className="relative h-[clamp(560px,82svh,820px)] overflow-hidden">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${s.rail}`}
              aria-hidden={!active}
              inert={!active}
              className={cx("absolute inset-0 transition-opacity duration-[900ms] ease-out", active ? "z-10 opacity-100" : "z-0 opacity-0")}
            >
              <div className={cx("absolute inset-0", active && !reduced && "animate-[slow-zoom_8s_ease-out_both]")}>
                <Media {...s.image} dark hideLabel priority={i === 0} sizes="100vw" className="h-full w-full" />
              </div>
              {!s.image.src && (
                <span className="absolute right-4 top-4 z-10 hidden rounded-[2px] bg-black/40 px-2.5 py-1.5 text-[0.9375rem] font-medium text-white/80 lg:block">
                  Photo to be supplied: {s.image.label}
                </span>
              )}
              {/* Legibility scrim */}
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,24,27,0.82)_0%,rgba(26,24,27,0.55)_45%,rgba(26,24,27,0.1)_80%)] max-md:bg-[linear-gradient(0deg,rgba(26,24,27,0.9)_10%,rgba(26,24,27,0.45)_65%,rgba(26,24,27,0.25)_100%)]" />

              <div className="relative mx-auto flex h-full max-w-[1320px] items-end px-5 pb-36 sm:px-8 md:items-center md:pb-24 lg:px-12">
                <div key={active ? `on-${index}` : "off"} className="max-w-[40rem]">
                  <h2
                    className={cx("t-display text-white", active && !reduced && "animate-[hero-in_0.8s_var(--ease-out-quart)_both]")}
                  >
                    {s.title}
                  </h2>
                  <p
                    className={cx("mt-5 max-w-[34rem] text-[1.1875rem] leading-relaxed text-white/85 md:text-[1.3125rem]", active && !reduced && "animate-[hero-in_0.8s_0.12s_var(--ease-out-quart)_both]")}
                  >
                    {s.body}
                  </p>
                  {(s.primary || s.secondary) && (
                    <div className={cx("mt-8 flex flex-wrap gap-3", active && !reduced && "animate-[hero-in_0.8s_0.22s_var(--ease-out-quart)_both]")}>
                      {s.primary && (
                        <Link href={s.primary.href} className="inline-flex h-12 items-center gap-2 rounded-[3px] bg-red px-6 font-semibold text-white transition-colors hover:bg-maroon">
                          {s.primary.label}
                        </Link>
                      )}
                      {s.secondary && (
                        <Link href={s.secondary.href} className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-white/45 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-ink">
                          {s.secondary.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Index rail: the slider's navigation and progress in one */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-[1320px] items-stretch px-0 md:px-8 lg:px-12">
          <div className="flex flex-1 items-stretch bg-red md:max-w-[56rem]">
            <ol className="hidden flex-1 md:flex" aria-label="Slides">
              {slides.map((s, i) => {
                const active = i === index;
                return (
                  <li key={s.id} className="flex-1 border-r border-white/20">
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-current={active ? "true" : undefined}
                      aria-label={`Show slide ${i + 1}: ${s.rail}`}
                      className={cx("group relative flex h-full w-full flex-col items-start gap-1 px-5 py-4 text-left transition-colors", active ? "bg-white/10" : "hover:bg-white/5")}
                    >
                      <span className="text-[0.9375rem] tabular-nums text-white/60">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cx("text-[1.0625rem] font-medium leading-snug", active ? "text-white" : "text-white/70 group-hover:text-white")}>{s.rail}</span>
                      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-white/15">
                        {active && (
                          <span
                            key={`${index}-${running}`}
                            className="block h-full origin-left bg-white"
                            style={running ? { animation: `rail-progress ${DURATION}ms linear both` } : { transform: "scaleX(1)" }}
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Mobile: compact counter */}
            <div className="flex flex-1 items-center gap-4 px-5 md:hidden">
              <span className="text-[1.0625rem] tabular-nums text-white/80">
                {index + 1} / {slides.length}
              </span>
              <span className="truncate text-[1.0625rem] font-medium">{slides[index].rail}</span>
            </div>

            <div className="flex shrink-0 border-l border-white/20">
              <button type="button" onClick={prev} aria-label="Previous slide" className="flex w-14 items-center justify-center transition-colors hover:bg-white/10">
                <Arrow className="h-5 w-5 rotate-180" />
              </button>
              <button type="button" onClick={next} aria-label="Next slide" className="flex w-14 items-center justify-center border-l border-white/20 transition-colors hover:bg-white/10">
                <Arrow className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause automatic slide changes" : "Play automatic slide changes"}
                aria-pressed={!playing}
                className="flex w-14 items-center justify-center border-l border-white/20 transition-colors hover:bg-white/10"
              >
                {playing && !reduced ? (
                  <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><rect x="5" y="4" width="3.2" height="12" rx="0.6" /><rect x="11.8" y="4" width="3.2" height="12" rx="0.6" /></svg>
                ) : (
                  <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="M6 4.2v11.6a.6.6 0 00.9.5l9.3-5.8a.6.6 0 000-1L6.9 3.7a.6.6 0 00-.9.5z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live={running ? "off" : "polite"}>
        Slide {index + 1} of {slides.length}: {slides[index].title}
      </p>
    </section>
  );
}
