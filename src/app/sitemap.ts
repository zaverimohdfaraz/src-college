import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    ["", 1],
    ["/about", 0.8],
    ["/academics", 0.8],
    ["/courses", 0.9],
    ["/departments", 0.7],
    ["/admissions", 0.9],
    ["/campus-life", 0.6],
    ["/facilities", 0.6],
    ["/student-support", 0.7],
    ["/institutional-information", 0.6],
    ["/contact", 0.8],
    ["/notices", 0.6],
    ["/privacy-policy", 0.2],
  ] as const;
  return [
    ...pages.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: now, priority })),
    ...courses.map((c) => ({ url: `${site.url}/courses/${c.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
