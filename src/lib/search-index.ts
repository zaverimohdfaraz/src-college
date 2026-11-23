/** Builds the list of pages the site search looks through. */
import { sections, type SubPage } from "@/lib/sections";
import { courses } from "@/lib/courses";
import { facilities } from "@/lib/facilities";
import { departments } from "@/lib/departments";
import { documents } from "@/lib/documents";

export type SearchEntry = { href: string; title: string; text: string; area: string; keywords?: string };

export function buildIndex(): SearchEntry[] {
  const out: SearchEntry[] = [
    { href: "/", title: "Home", text: "Shri Ram College of Commerce & Science, Bhandup West, Mumbai.", area: "Home" },
    { href: "/courses", title: "All programmes", text: "Browse and filter undergraduate and postgraduate programmes.", area: "Academics", keywords: "courses degree ug pg" },
    { href: "/contact", title: "Contact the college", text: "Phone, email, address, map, telephone directory and enquiry form.", area: "Contact", keywords: "phone email address map location directions telephone directory enquiry" },
    { href: "/notices", title: "Notices and circulars", text: "Official announcements about admissions, examinations, scholarships and events.", area: "Information corner", keywords: "circulars announcements" },
    { href: "/privacy-policy", title: "Privacy policy", text: "How enquiry information is used.", area: "Legal" },
  ];
  for (const s of Object.values(sections)) {
    for (const p of s.pages as SubPage[]) {
      if (out.some((o) => o.href === p.href)) continue;
      out.push({ href: p.href, title: p.title ?? p.label, text: p.summary, area: s.name, keywords: p.group });
    }
  }
  for (const c of courses) {
    out.push({
      href: `/courses/${c.slug}`,
      title: `${c.code} ${c.name}`,
      text: c.summary,
      area: `Programme · ${c.level}`,
      keywords: [c.code.replace(/[^a-z]/gi, ""), c.slug.replace(/-/g, " "), c.category, ...(c.areas ?? []), ...(c.careers ?? [])].join(" "),
    });
  }
  for (const f of facilities) {
    const e = out.find((o) => o.href === `/facilities/${f.slug}`);
    if (e) e.keywords = [e.keywords, ...f.points.items].join(" ");
  }
  for (const d of departments) {
    const e = out.find((o) => o.href === `/departments/${d.slug}`);
    if (e) e.keywords = [e.keywords, ...d.focus].join(" ");
  }
  // Documents point to the documents page so they can be found by name.
  out.push({
    href: "/institutional-information/mandatory-disclosures",
    title: "Documents and reports",
    text: "Official documents published by the college.",
    area: "Institutional information",
    keywords: Object.values(documents).map((d) => d.title).join(" "),
  });
  return out;
}
