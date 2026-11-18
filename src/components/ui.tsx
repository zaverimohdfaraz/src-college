import Link from "next/link";
import Image from "next/image";
import type { ReactNode, ComponentProps } from "react";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export function Container({ className, children, as: As = "div" }: { className?: string; children: ReactNode; as?: "div" | "section" | "header" | "footer" | "nav" }) {
  return <As className={cx("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}>{children}</As>;
}

type BtnProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "light" | "ghost-light"; size?: "md" | "lg" };
export function ButtonLink({ variant = "primary", size = "md", className, children, ...rest }: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[3px] text-center font-semibold leading-tight transition-colors duration-200 max-sm:whitespace-normal sm:whitespace-nowrap";
  const sizes = { md: "min-h-11 py-2 px-5 text-[1.0625rem]", lg: "min-h-[3.25rem] py-2.5 px-7 text-[1.125rem]" };
  const variants = {
    primary: "bg-red text-white hover:bg-maroon",
    secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
    light: "bg-white text-maroon hover:bg-ivory",
    "ghost-light": "border border-white/45 text-white hover:bg-white hover:text-maroon",
  };
  return (
    <Link className={cx(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={cx("h-4 w-4 shrink-0", className)} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3.5 10h12.5M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Photograph slot. Renders the real image when `src` is supplied; until then
 * it shows a clearly labelled placeholder so nobody mistakes it for a real photo.
 */
export function Media({
  src,
  alt,
  label,
  className,
  dark,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  labelTop,
  hideLabel,
  still,
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  dark?: boolean;
  priority?: boolean;
  sizes?: string;
  labelTop?: boolean;
  hideLabel?: boolean;
  /** Turn off the scroll reveal (e.g. images that are on screen at load). */
  still?: boolean;
}) {
  if (src) {
    return (
      <div className={cx("group/media relative overflow-hidden bg-stone", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cx(
            "object-cover transition-[scale] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.04]",
            !priority && !still && "media-reveal",
          )}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={cx("relative overflow-hidden", dark ? "hatch-dark" : "hatch", className)}
    >
      {!hideLabel && <div
        className={cx(
          labelTop ? "absolute right-3 top-3" : "absolute bottom-3 left-3",
          "flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-[2px] px-2.5 py-1.5 text-[0.9375rem] font-medium",
          dark ? "bg-black/35 text-white/85" : "bg-white/80 text-ink/75",
        )}
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2.5" y="5" width="15" height="11" rx="1.5" />
          <circle cx="10" cy="10.5" r="3" />
          <path d="M7 5l1.2-2h3.6L13 5" />
        </svg>
        <span className="truncate">Photo to be supplied: {label}</span>
      </div>}
    </div>
  );
}

/** Marks information the college has not yet supplied. Visible on purpose. */
export function Pending({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx("rounded-[3px] border border-dashed border-sand bg-ivory/70 px-5 py-4 text-[1.0625rem] text-muted", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  className,
  id,
  light,
}: {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}) {
  return (
    <div className={cx("max-w-3xl", className)}>
      {kicker && <p className={cx("t-kicker mb-4", light && "!text-white/80")}>{kicker}</p>}
      <h2 id={id} className={cx("t-h2", light && "!text-white")}>
        {title}
      </h2>
      {intro && <div className={cx("t-lead mt-5 measure", light && "!text-white/80")}>{intro}</div>}
    </div>
  );
}

/** Interior page masthead with breadcrumb. */
export function PageHero({
  title,
  intro,
  crumbs,
  image,
}: {
  title: string;
  intro?: ReactNode;
  crumbs: { label: string; href?: string }[];
  image?: { label: string; src?: string; alt: string };
}) {
  return (
    <header className="on-dark relative isolate overflow-hidden bg-night text-white">
      <div aria-hidden className="hatch-dark absolute inset-0 -z-10 opacity-90" />
      <div aria-hidden className="absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full border border-white/[0.07]" />
      <Container className={cx("grid gap-10 pb-14 pt-10 lg:pb-20 lg:pt-14", image && "lg:grid-cols-12 lg:items-end")}>
        <div className={cx(image && "lg:col-span-7")}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 text-[1rem] text-white/65">
              <li>
                <Link href="/" className="link-u inline-flex min-h-11 items-center hover:text-white lg:min-h-0">Home</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden className="text-white/35">/</span>
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="link-u inline-flex min-h-11 items-center hover:text-white lg:min-h-0">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-white">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <span aria-hidden className="mb-6 block h-[3px] w-14 bg-red-bright" />
          <h1 className="t-h1 max-w-[18ch] text-white">{title}</h1>
          {intro && <div className="mt-6 max-w-[62ch] text-[1.25rem] leading-relaxed text-white/80 md:text-[1.3125rem]">{intro}</div>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <Media {...image} dark still className="aspect-[4/3] w-full ring-1 ring-white/10" priority sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
        )}
      </Container>
      <div aria-hidden className="h-1 bg-red" />
    </header>
  );
}

/** Small anchored sub-navigation for long interior pages. */
export function OnThisPage({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <p className="t-h4 mb-3 text-ink">On this page</p>
      <ul className="space-y-1 border-l border-stone">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[1.0625rem] text-muted transition-colors hover:border-red hover:text-ink">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
