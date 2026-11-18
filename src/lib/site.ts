/**
 * Central institutional configuration.
 *
 * Every value here was taken from the college's existing public pages
 * (sr-college.com, its AQAR filing) and must be re-verified by the college
 * before launch. See CONTENT-CHECKLIST.md at the project root.
 */

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
  columns?: { heading: string; links: NavLink[] }[];
};

export const navigation: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    intro: "A degree college of the Jana Seva Sangh, serving Bhandup and its neighbourhoods since 2009.",
    columns: [
      {
        heading: "The college",
        links: [
          { label: "About the college", href: "/about" },
          { label: "History", href: "/about#history" },
          { label: "Vision and mission", href: "/about#vision-mission" },
          { label: "Leadership", href: "/about#leadership" },
        ],
      },
      {
        heading: "The trust",
        links: [
          { label: "Jana Seva Sangh", href: "/about#trust" },
          { label: "Our values", href: "/about#values" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    intro: "Undergraduate and postgraduate study in commerce, management, arts and computing.",
    columns: [
      {
        heading: "Study",
        links: [
          { label: "Academics overview", href: "/academics" },
          { label: "All programmes", href: "/courses" },
          { label: "Departments", href: "/departments" },
        ],
      },
      {
        heading: "Popular programmes",
        links: [
          { label: "B.Com.", href: "/courses/bcom" },
          { label: "B.M.S.", href: "/courses/bms" },
          { label: "B.Sc. I.T.", href: "/courses/bsc-it" },
          { label: "M.Com. Advanced Accountancy", href: "/courses/mcom-advanced-accountancy" },
        ],
      },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Campus Life",
    href: "/campus-life",
    intro: "Learning that continues beyond the classroom.",
    columns: [
      {
        heading: "On campus",
        links: [
          { label: "Student life", href: "/campus-life" },
          { label: "Facilities", href: "/facilities" },
          { label: "Plan a campus visit", href: "/contact?form=visit#forms" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Student support", href: "/student-support" },
          { label: "Scholarships", href: "/student-support#scholarships" },
          { label: "Careers and placement", href: "/student-support#careers" },
          { label: "Examinations", href: "/student-support#examinations" },
        ],
      },
    ],
  },
  {
    label: "Institutional Information",
    href: "/institutional-information",
    intro: "Committees, quality assurance and institutional documents.",
    columns: [
      {
        heading: "Governance",
        links: [
          { label: "Overview", href: "/institutional-information" },
          { label: "Committees and cells", href: "/institutional-information#committees" },
          { label: "Quality assurance", href: "/institutional-information#quality" },
          { label: "Alumni", href: "/institutional-information#alumni" },
        ],
      },
      {
        heading: "Rights and safety",
        links: [
          { label: "Anti-ragging", href: "/student-support#anti-ragging" },
          { label: "Grievance redressal", href: "/student-support#grievance" },
          { label: "Women's safety and ICC", href: "/student-support#wdc" },
          { label: "Mandatory disclosures", href: "/institutional-information#disclosures" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];
