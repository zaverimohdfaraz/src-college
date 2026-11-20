import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { sections } from "@/lib/sections";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sectionPages = Object.values(sections).flatMap((sec) => sec.pages.map((p) => p.href));
  const pages: [string, number][] = [
    ["", 1],
    ["/courses", 0.9],
    ["/contact", 0.8],
    ["/notices", 0.6],
    ["/privacy-policy", 0.2],
    ...[...new Set(sectionPages)].map((h): [string, number] => [h, h.split("/").length > 2 ? 0.6 : 0.8]),
  ];
  return [
    ...pages.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: now, priority })),
    ...courses.map((c) => ({ url: `${site.url}/courses/${c.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
