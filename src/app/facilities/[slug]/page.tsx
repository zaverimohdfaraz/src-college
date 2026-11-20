import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionShell from "@/components/SectionShell";
import { Media } from "@/components/ui";
import { facilities, getFacility } from "@/lib/facilities";
import { findPage } from "@/lib/sections";

export function generateStaticParams() {
  return facilities.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFacility(slug);
  if (!f) return {};
  return { title: findPage("facilities", `/facilities/${slug}`).label, description: f.metaDescription, alternates: { canonical: `/facilities/${slug}` } };
}

export default async function FacilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFacility(slug);
  if (!f) notFound();
  const [, ...more] = f.photos;

  return (
    <SectionShell section="facilities" href={`/facilities/${slug}`} intro={f.intro}>
      <div className="prose-college measure">
        {f.body.map((p, i) => <p key={i} className={i === 0 ? "t-lead" : undefined}>{p}</p>)}
      </div>

      <h2 className="t-h2 mt-14">{f.points.heading}</h2>
      <ul className="mt-6 divide-y divide-stone border-y border-stone">
        {f.points.items.map((p) => (
          <li key={p} className="flex gap-4 py-4 text-ink-soft">
            <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            {p}
          </li>
        ))}
      </ul>

      {more.length > 0 && (
        <div className={`mt-14 grid gap-4 ${more.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {more.map((ph) => (
            <Media key={ph.src} label={ph.alt} {...ph} className={more.length > 1 ? "aspect-[4/3] w-full" : "aspect-[16/9] w-full"} sizes="(min-width:1024px) 30vw, 50vw" />
          ))}
        </div>
      )}
    </SectionShell>
  );
}
