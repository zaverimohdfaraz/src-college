"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import EnquiryForm from "./EnquiryForm";
import { cx } from "./ui";

const tabs = [
  { id: "message", label: "Send a message", short: "Message" },
  { id: "visit", label: "Plan a campus visit", short: "Campus visit" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const noSubscribe = () => () => {};

export default function ContactForms() {
  // Read ?form=visit and ?subject=… without forcing the page to render dynamically:
  // the server (and hydration) sees "", then the client re-renders with the real query.
  const search = useSyncExternalStore(noSubscribe, () => window.location.search, () => "");
  const params = useMemo(() => new URLSearchParams(search), [search]);
  const subject = (params.get("subject") || "").slice(0, 120);

  const [chosen, setTab] = useState<TabId | null>(null);
  const tab: TabId = chosen ?? (params.get("form") === "visit" ? "visit" : "message");

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    setTab(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Choose a form" className="flex border-b border-stone">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={cx(
              "relative -mb-px h-12 flex-1 whitespace-nowrap px-3 text-[1.0625rem] font-semibold transition-colors sm:flex-none sm:px-5",
              tab === t.id ? "border-b-2 border-red text-ink" : "border-b-2 border-transparent text-muted hover:text-ink",
            )}
          >
            <span className="sm:hidden">{t.short}</span>
            <span className="max-sm:hidden">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="pt-8">
        <div id="panel-message" role="tabpanel" aria-labelledby="tab-message" hidden={tab !== "message"}>
          <EnquiryForm key={`c-${subject}`} type="contact" defaults={subject ? { subject } : {}} />
        </div>
        <div id="panel-visit" role="tabpanel" aria-labelledby="tab-visit" hidden={tab !== "visit"}>
          <p className="mb-6 text-ink-soft">
            Choose a preferred date and the college office will contact you to confirm a convenient time for your visit.
          </p>
          <EnquiryForm type="visit" />
        </div>
      </div>
    </div>
  );
}
