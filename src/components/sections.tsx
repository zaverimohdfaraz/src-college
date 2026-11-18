import Link from "next/link";
import { notices } from "@/lib/notices";
import { site, formatPhone } from "@/lib/site";
import { Arrow, cx } from "./ui";

export function NoticeList({ limit }: { limit?: number }) {
  const items = limit ? notices.slice(0, limit) : notices;
  if (!items.length) {
    return (
      <div className="border-y border-stone py-10">
        <p className="t-h3 text-ink">No current notices</p>
        <p className="mt-2 max-w-md text-ink-soft">
          Official notices about admissions, examinations and events are posted here when the college issues them. For
          anything urgent, please contact the college office.
        </p>
        <a href={`tel:+91${site.phones[0]}`} className="link-u mt-4 inline-block font-semibold text-maroon">
          Call {formatPhone(site.phones[0])}
        </a>
      </div>
    );
  }
  return (
    <ul className="divide-y divide-stone border-y border-stone">
      {items.map((n) => {
        const d = new Date(n.date);
        const inner = (
          <>
            <time dateTime={n.date} className="w-24 shrink-0 text-[1.0625rem] tabular-nums text-muted">
              {d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </time>
            <span className="flex-1">
              <span className="block text-[0.9375rem] font-semibold text-red">{n.category}</span>
              <span className="mt-0.5 block font-medium text-ink">{n.title}</span>
            </span>
            {n.href && <Arrow className="mt-1 text-muted" />}
          </>
        );
        return (
          <li key={n.id}>
            {n.href ? (
              <Link href={n.href} className="flex items-start gap-6 py-5 hover:bg-ivory/60">{inner}</Link>
            ) : (
              <div className="flex items-start gap-6 py-5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function MapEmbed({ className, title = "Map showing the location of the college" }: { className?: string; title?: string }) {
  return (
    <div className={cx("relative w-full overflow-hidden bg-stone", className)}>
      <iframe
        src={site.mapEmbedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
        allowFullScreen
      />
    </div>
  );
}

export function ContactLines({ className }: { className?: string }) {
  return (
    <dl className={cx("grid gap-6 sm:grid-cols-2", className)}>
      <div className="sm:col-span-2">
        <dt className="t-h4 text-red">Address</dt>
        <dd className="mt-1 text-ink-soft">
          {site.name}
          <br />
          {site.address.line1}, {site.address.city} {site.address.postalCode}
          <br />
          {site.address.state}, {site.address.country}
        </dd>
      </div>
      <div>
        <dt className="t-h4 text-red">Phone</dt>
        <dd className="mt-1 space-y-0.5">
          {site.phones.map((p) => (
            <a key={p} href={`tel:+91${p}`} className="link-u block w-fit text-ink-soft hover:text-maroon">{formatPhone(p)}</a>
          ))}
        </dd>
      </div>
      <div>
        <dt className="t-h4 text-red">Email</dt>
        <dd className="mt-1">
          <a href={`mailto:${site.email}`} className="link-u text-ink-soft hover:text-maroon">{site.email}</a>
        </dd>
      </div>
    </dl>
  );
}

/** Admission enquiry call to action band. */
export function AdmissionBand() {
  return (
    <section aria-labelledby="admission-band" className="on-dark relative overflow-hidden bg-red text-white">
      <div aria-hidden className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/10" />
      <div aria-hidden className="absolute -right-4 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-24">
        <div className="lg:col-span-8">
          <h2 id="admission-band" className="t-h1 text-white">Thinking of studying with us?</h2>
          <p className="mt-6 max-w-xl text-[1.25rem] leading-relaxed text-white/85">
            Tell us which programme interests you and the admissions office will guide you through eligibility,
            documents and the steps for the coming academic year.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          <Link href="/admissions#enquire" className="inline-flex h-[3.25rem] items-center justify-center rounded-[3px] bg-white px-7 font-semibold text-red-dark transition-colors hover:bg-blush">
            Enquire about admissions
          </Link>
          <Link href="/admissions" className="inline-flex h-[3.25rem] items-center justify-center rounded-[3px] border border-white/45 px-7 font-semibold text-white transition-colors hover:bg-white hover:text-red-dark">
            How admission works
          </Link>
        </div>
      </div>
    </section>
  );
}
