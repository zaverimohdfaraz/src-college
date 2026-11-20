"use client";

import { useState } from "react";
import { cx } from "./ui";

/**
 * Responsive video slot. Supply either a YouTube ID or a self-hosted MP4.
 * With neither, it renders a clearly labelled placeholder — never fake footage.
 */
export default function VideoBlock({
  title,
  caption,
  youtubeId,
  mp4,
  poster,
  className,
}: {
  title: string;
  caption?: string;
  youtubeId?: string;
  mp4?: string;
  poster?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const hasSource = Boolean(youtubeId || mp4);

  return (
    <figure className={className}>
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {playing && youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : playing && mp4 ? (
          <video className="absolute inset-0 h-full w-full bg-black" src={mp4} poster={poster} controls autoPlay playsInline />
        ) : (
          <button
            type="button"
            disabled={!hasSource}
            onClick={() => setPlaying(true)}
            aria-label={hasSource ? `Play video: ${title}` : `${title}: video to be supplied by the college`}
            className="group absolute inset-0 h-full w-full disabled:cursor-default"
            style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
          >
            {!poster && <span aria-hidden className="hatch-dark absolute inset-0" />}
            <span aria-hidden className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
            <span
              aria-hidden
              className={cx(
                "absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-transform duration-300",
                hasSource ? "border-white bg-red text-white group-hover:scale-105" : "border-white/50 text-white/70",
              )}
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor"><path d="M7 4.5v15a.8.8 0 001.2.7l12-7.5a.8.8 0 000-1.4l-12-7.5A.8.8 0 007 4.5z" /></svg>
            </span>
            {!hasSource && (
              <span className="absolute bottom-3 left-3 rounded-[2px] bg-black/40 px-2.5 py-1.5 text-[0.9375rem] font-medium text-white/85">
                Video to be supplied by the college
              </span>
            )}
          </button>
        )}
      </div>
      <figcaption className="mt-4">
        <span className="t-h4 block text-ink">{title}</span>
        {caption && <span className="t-caption mt-1 block">{caption}</span>}
      </figcaption>
    </figure>
  );
}
