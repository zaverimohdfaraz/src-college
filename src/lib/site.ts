/**
 * Central institutional configuration.
 *
 * Every value here was taken from the college's existing public pages
 * (sr-college.com, its AQAR filing) and must be re-verified by the college
 * before launch. See CONTENT-CHECKLIST.md at the project root.
 */

import { coursesByLevel } from "@/lib/courses";
import { navLinks } from "@/lib/sections";
import { photos, type Photo } from "@/lib/images";

export const site = {
  name: "Jana Seva Sangh's Shri Ram College of Commerce & Science",
  shortName: "Shri Ram College of Commerce & Science",
  trust: "Jana Seva Sangh",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sr-college.com",
  description:
    "Jana Seva Sangh's Shri Ram College of Commerce & Science, Bhandup West, Mumbai — an affiliated college of the University of Mumbai offering undergraduate and postgraduate programmes in commerce, management, arts and computing since 2009.",
  established: "28 August 2009",
  establishedYear: 2009,
  affiliation: "University of Mumbai",
  address: {
    line1: "Datta Mandir Road, Bhandup West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400078",
    country: "India",
    full: "Datta Mandir Road, Bhandup West, Mumbai, Maharashtra 400078, India",
  },
  geo: { lat: 19.1525637, lng: 72.9412388 },
  /** Official map link supplied by the client — used for "Open in Google Maps" and "Get directions". */
  mapsUrl: "https://maps.app.goo.gl/zwUeofn2XYAnwGWW7",
  directionsUrl: "https://maps.app.goo.gl/zwUeofn2XYAnwGWW7",
  /**
   * Embedded map pin. Update `geo` above with the coordinates from the client's
   * map link (open it in a browser and copy the numbers after "@" in the URL).
   */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=19.1525637,72.9412388&z=17&output=embed",
  email: "info@sr-college.com",
  phones: ["9967609447", "9769457128", "9820271328"],
  /** Social profiles: add only verified, official URLs. Empty = not shown. */
  social: [] as { label: string; href: string }[],
} as const;

export const formatPhone = (p: string) =>
  `+91 ${p.slice(0, 5)} ${p.slice(5)}`;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = {
  label: string;
  href: string;
  intro?: string;
  /** Photo shown in the desktop dropdown. */
  image?: Photo;
  /** `wide` columns take double width and list their links in two columns (desktop dropdown). */
  columns?: { heading: string; links: NavLink[]; wide?: boolean }[];
};

/** "Bachelor of Commerce in Banking and Insurance" -> "Banking and Insurance", for compact menus. */
const subject = (name: string) => name.replace(/^(Bachelor|Master) of (Science in |Commerce in )?/, "");

export const navigation: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    intro: "A degree college of the Jana Seva Sangh, serving Bhandup and its neighbourhoods since 2009.",
    image: photos.front,
    columns: [
      { heading: "The college", links: navLinks("about", "The college", true) },
      { heading: "The trust", links: navLinks("about", "The trust", true) },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    intro: "Undergraduate and postgraduate study in commerce, management, arts and computing.",
    image: photos.lecture,
    columns: [
      {
        heading: "Study",
        links: [...navLinks("academics", "Study"), { label: "All programmes", href: "/courses" }, { label: "Departments", href: "/departments" }],
      },
      {
        heading: "Undergraduate",
        wide: true,
        links: coursesByLevel("Undergraduate").map((c) => ({ label: c.code, href: `/courses/${c.slug}`, description: subject(c.name) })),
      },
      {
        heading: "Postgraduate",
        links: coursesByLevel("Postgraduate").map((c) => ({ label: c.code, href: `/courses/${c.slug}`, description: subject(c.name) })),
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    intro: "How to apply, who can apply, and answers to common questions.",
    image: photos.office,
    columns: [
      { heading: "Admissions", links: navLinks("admissions", undefined, true) },
      {
        heading: "Get in touch",
        links: [
          { label: "Admission enquiry", href: "/admissions#enquire", description: "Tell us which programme interests you." },
          { label: "Scholarships and freeships", href: "/student-support/scholarships", description: "Government schemes and trust scholarships." },
          { label: "Contact the college", href: "/contact", description: "Phone, email, address and directions." },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    intro: "Learning that continues beyond the classroom.",
    image: photos.cultural,
    columns: [
      { heading: "Student life", links: navLinks("campusLife") },
      { heading: "Facilities", links: navLinks("facilities") },
      { heading: "Support", links: navLinks("support", "Support") },
    ],
  },
  {
    label: "Institutional Information",
    href: "/institutional-information",
    intro: "Committees, quality assurance and institutional documents.",
    image: photos.exterior,
    columns: [
      { heading: "Governance", links: navLinks("institutional", undefined, true) },
      { heading: "Rights and safety", links: navLinks("support", "Rights and safety", true) },
    ],
  },
  { label: "Contact", href: "/contact" },
];
