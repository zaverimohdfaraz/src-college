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
  const touch = useRef<{ x: number; y: number } | null>(null);
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
      onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
      onTouchEnd={(e) => {
        if (!touch.current) return;
        const dx = e.changedTouches[0].clientX - touch.current.x;
        const dy = e.changedTouches[0].clientY - touch.current.y;
        // Only a clearly sideways swipe changes slide, so scrolling the page never does.
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)();
        touch.current = null;
      }}
      className="on-dark relative isolate bg-ink text-white"
    >
      <div className="relative grid min-h-[clamp(560px,82svh,820px)] overflow-hidden">
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
              className={cx("relative [grid-area:1/1] transition-opacity duration-[900ms] ease-out", active ? "z-10 opacity-100" : "z-0 opacity-0")}
            >
              <div className={cx("absolute inset-0", active && !reduced && "animate-[slow-zoom_8s_ease-out_both]")}>
                <Media {...s.image} dark hideLabel still priority={i === 0} sizes="100vw" className="h-full w-full" />
              </div>
              {!s.image.src && (
                <span className="absolute right-4 top-4 z-10 hidden rounded-[2px] bg-black/40 px-2.5 py-1.5 text-[0.9375rem] font-medium text-white/80 lg:block">
                  Photo to be supplied: {s.image.label}
                </span>
              )}
              {/* Legibility scrim */}
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,24,27,0.82)_0%,rgba(26,24,27,0.55)_45%,rgba(26,24,27,0.1)_80%)] max-md:bg-[linear-gradient(0deg,rgba(26,24,27,0.94)_0%,rgba(26,24,27,0.74)_55%,rgba(26,24,27,0.55)_100%)]" />

              <div className="relative mx-auto flex h-full w-full max-w-[1320px] items-end px-5 pb-24 pt-16 sm:px-8 md:items-center md:pb-32 md:pt-20 lg:px-12 lg:pb-28">
                <div key={active ? `on-${index}` : "off"} className="max-w-[40rem]">
                  <h2
                    className={cx("t-display text-white", active && !reduced && "animate-[hero-in_0.8s_var(--ease-out-quart)_both]")}
                  >
                    {s.title}
                  </h2>
                  <p
                    className={cx("mt-4 max-w-[34rem] text-[1.125rem] leading-relaxed text-white/90 md:mt-5 md:text-[1.3125rem]", active && !reduced && "animate-[hero-in_0.8s_0.12s_var(--ease-out-quart)_both]")}
                  >
                    {s.body}
                  </p>
                  {(s.primary || s.secondary) && (
                    <div className={cx("mt-7 flex flex-wrap gap-3 md:mt-8", active && !reduced && "animate-[hero-in_0.8s_0.22s_var(--ease-out-quart)_both]")}>
                      {s.primary && (
                        <Link href={s.primary.href} className="inline-flex h-12 items-center gap-2 rounded-[3px] bg-red px-5 font-semibold sm:px-6 text-white transition-colors hover:bg-maroon">
                          {s.primary.label}
                        </Link>
                      )}
                      {s.secondary && (
                        <Link href={s.secondary.href} className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-white/45 px-5 font-semibold sm:px-6 text-white transition-colors hover:bg-white hover:text-ink">
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

      {/* Phones: slim progress segments, the slide name and a pause button. Swipe to change slide. */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-4 sm:px-8 md:hidden">
        <div className="flex items-end gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline gap-2 text-[0.9375rem]">
              <span className="truncate font-semibold text-white">{slides[index].rail}</span>
              <span className="shrink-0 tabular-nums text-white/60">{index + 1} of {slides.length}</span>
            </p>
            <ol className="-mb-3 -mt-2 flex gap-1.5" aria-label="Slides">
              {slides.map((s, i) => (
                <li key={s.id} className="flex-1">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === index ? "true" : undefined}
                    aria-label={`Show slide ${i + 1}: ${s.rail}`}
                    className="flex h-11 w-full items-center"
                  >
                    <span aria-hidden className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/30">
                      {i < index && <span className="absolute inset-0 bg-white/80" />}
                      {i === index && (
                        <span
                          key={`m-${index}-${running}`}
                          className="absolute inset-0 origin-left bg-white"
                          style={running ? { animation: `rail-progress ${DURATION}ms linear both` } : undefined}
                        />
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause automatic slide changes" : "Play automatic slide changes"}
            aria-pressed={!playing}
            className="mb-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm"
          >
            {playing && !reduced ? (
              <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><rect x="5" y="4" width="3.2" height="12" rx="0.6" /><rect x="11.8" y="4" width="3.2" height="12" rx="0.6" /></svg>
            ) : (
              <svg aria-hidden viewBox="0 0 20 20" className="ml-0.5 h-4 w-4" fill="currentColor"><path d="M6 4.2v11.6a.6.6 0 00.9.5l9.3-5.8a.6.6 0 000-1L6.9 3.7a.6.6 0 00-.9.5z" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Tablet and desktop: index rail, the slider's navigation and progress in one */}
      <div className="absolute inset-x-0 bottom-0 z-20 hidden md:block">
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
