import { documents, docHref, type DocKey, type DocItem } from "@/lib/documents";
import { committeeMembers, type Member } from "@/lib/people";
import { formatPhone } from "@/lib/site";

const ext = (href: string) => (href.startsWith("http") || href.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** Small status label used for documents and disclosure items. */
export function StatusPill({ tone, children }: { tone: "ok" | "wait" | "na"; children: React.ReactNode }) {
  const cls =
    tone === "ok" ? "border-[#2f6b3a]/30 bg-[#eef6ef] text-[#24552d]" : tone === "na" ? "border-stone bg-white text-muted" : "border-sand bg-ivory text-ink-soft";
  return <span className={`inline-flex max-w-full items-center self-start rounded-full sm:shrink-0 sm:self-center border px-2.5 py-0.5 text-[0.875rem] font-medium ${cls}`}>{children}</span>;
}

export function DocRow({ doc, id }: { doc: DocItem; id?: string }) {
  const href = docHref(doc);
  return (
    <li id={id} className="flex scroll-mt-28 flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex min-w-0 gap-4">
        <svg aria-hidden viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-red" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 2.5h6.5L15 6v11.5H5z" /><path d="M11.5 2.5V6H15M7.5 10h5M7.5 13h5" />
        </svg>
        <div className="min-w-0">
          <p className="font-medium text-ink">{doc.title}</p>
          {doc.description && <p className="mt-0.5 text-[1rem] text-muted">{doc.description}</p>}
          {doc.updated && <p className="mt-0.5 text-[0.9375rem] text-muted">Updated {doc.updated}</p>}
        </div>
      </div>
      <div className="pl-9 sm:pl-0">
        {doc.notApplicable ? (
          <StatusPill tone="na">Not applicable: {doc.notApplicable}</StatusPill>
        ) : href ? (
          <a href={href} {...ext(href)} className="inline-flex min-h-11 items-center gap-2 font-semibold text-maroon">
            <span className="link-u">{href.endsWith(".pdf") ? "View PDF" : "Open"}</span>
            <span className="sr-only"> ({doc.title}, opens in a new tab)</span>
          </a>
        ) : (
          <StatusPill tone="wait">To be published</StatusPill>
        )}
      </div>
    </li>
  );
}

/** List of documents from the registry. */
export function DocumentList({ ids, className = "" }: { ids: DocKey[]; className?: string }) {
  return (
    <ul className={`divide-y divide-stone border-y border-stone ${className}`}>
      {ids.map((id) => <DocRow key={id} id={`doc-${id}`} doc={documents[id]} />)}
    </ul>
  );
}

/** Table of members by role; names appear once supplied in lib/people.ts. */
export function MemberTable({ members, className = "", id }: { members: Member[]; className?: string; id?: string }) {
  return (
    <dl id={id} className={`scroll-mt-28 divide-y divide-stone border-y border-stone ${className}`}>
      {members.map((m, i) => (
        <div key={m.role + i} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
          <dt className="text-ink-soft">{m.role}</dt>
          <dd>
            {m.name ? (
              <>
                <span className="font-medium text-ink">{m.name}</span>
                {m.designation && <span className="block text-[1rem] text-muted">{m.designation}</span>}
                {m.phone && <a href={`tel:+91${m.phone}`} className="link-u block text-[1rem] text-ink-soft">{formatPhone(m.phone)}</a>}
                {m.email && <a href={`mailto:${m.email}`} className="link-u block text-[1rem] text-ink-soft">{m.email}</a>}
              </>
            ) : (
              <StatusPill tone="wait">To be published</StatusPill>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A statutory committee: heading, legal basis and members. */
export function Committee({ id, headingLevel = 2 }: { id: keyof typeof committeeMembers; headingLevel?: 2 | 3 }) {
  const c = committeeMembers[id];
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <section id={`committee-${id}`} className="scroll-mt-28">
      <H className={headingLevel === 2 ? "t-h2" : "t-h3"}>{c.title}</H>
      <p className="mt-3 text-[1.0625rem] text-muted">{c.basis}</p>
      <MemberTable members={c.members} className="mt-6" />
    </section>
  );
}
