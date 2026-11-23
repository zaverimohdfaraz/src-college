/**
 * Official documents published under the UGC Guidelines on Public Self-Disclosure by HEIs.
 *
 * HOW TO PUBLISH A DOCUMENT
 * 1. Save the PDF in /public/documents/ (e.g. /public/documents/naac-certificate.pdf).
 * 2. Set `file` on the matching entry below to its path ("/documents/naac-certificate.pdf").
 * 3. Optionally set `updated` (e.g. "2026-11") so visitors know how current it is.
 * The website then shows a "View PDF" link everywhere that document is listed,
 * and the UGC self-disclosure page marks it as published.
 *
 * For yearly documents (annual reports, accounts, AQARs…), set `file` on the edition instead,
 * and add a new edition at the top each year.
 *
 * For a page on another website (e.g. University of Mumbai ordinances), set `url` instead.
 * Set `notApplicable` with a short reason when an item does not apply to the college.
 */
export type DocItem = {
  title: string;
  description?: string;
  file?: string;
  /** Documents issued every year: one slot per edition. Set `file` on each as it arrives. */
  editions?: { label: string; file?: string }[];
  url?: string;
  updated?: string;
  notApplicable?: string;
};

export const documents = {
  // a) About the institution
  trustRegistration: { title: "Trust registration and Memorandum / Trust Deed of the Jana Seva Sangh", description: "Registration of the sponsoring trust under the Maharashtra Public Trusts Act and its constitution." },
  idp: { title: "Institutional Development Plan", description: "The college's plan for academic and infrastructure development over the coming years." },
  affiliation: { title: "Affiliation letters from the University of Mumbai", description: "Permanent or temporary affiliation for each programme." },
  governmentPermission: { title: "Government of Maharashtra permission", description: "Permission to start the college and its programmes." },
  ycmouCentre: { title: "YCMOU study centre approval", description: "Approval of the college as a study centre of Yashwantrao Chavan Maharashtra Open University." },
  ugcRecognition: { title: "UGC recognition under Sections 2(f) and 12B", description: "Recognition letter, where the college has been recognised." },
  naacCertificate: { title: "NAAC accreditation certificate", description: "Certificate showing the grade and period of validity." },
  naacSsr: { title: "NAAC Self Study Report (SSR)" },
  nirf: { title: "NIRF data", description: "Data submitted to the National Institutional Ranking Framework, if the college participated." },
  annualReports: { title: "Annual reports", description: "Report of the college's academic year and activities.", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },
  annualAccounts: { title: "Audited annual accounts", description: "Balance sheet, income and expenditure account, receipts and payments account, with the auditor's report.", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },
  aishe: { title: "AISHE certificates", description: "Data submission certificates for the All India Survey on Higher Education.", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },

  // b) Administration
  cdcComposition: { title: "College Development Committee: composition", description: "Members of the College Development Committee under the Maharashtra Public Universities Act, 2016." },
  committeesComposition: { title: "Statutory committees: composition", description: "Members of the IQAC, ICC, Grievance Redressal, Anti-Ragging, Equal Opportunity and SEDG committees for the current year." },

  // c) Academics
  academicCalendar: { title: "Academic calendar for the current year" },
  muOrdinances: { title: "University of Mumbai: ordinances, regulations and syllabi", url: "https://mu.ac.in" },
  iqacComposition: { title: "IQAC composition" },
  iqacMinutes: { title: "IQAC meeting minutes and action-taken reports", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },
  aqar: { title: "Annual Quality Assurance Reports (AQAR)", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },
  mous: { title: "Memoranda of understanding (MoUs) and collaborations" },

  // d) Admissions and fees
  prospectus: { title: "Prospectus for the current year", description: "Programmes, eligibility, admission procedure, rules and fee structure." },
  feeStructure: { title: "Fee structure for all programmes" },
  feeRefundPolicy: { title: "Fee refund policy", description: "The college's refund rules, following UGC and University of Mumbai directions." },

  // h) Information corner
  newsletters: { title: "Newsletters and college magazine", editions: [{ label: "2025–26" }, { label: "2024–25" }, { label: "2023–24" }] },
  reservationRoster: { title: "Reservation roster", description: "Roster for teaching and non-teaching posts, where applicable." },
} satisfies Record<string, DocItem>;

export type DocKey = keyof typeof documents;

export const docHref = (d: DocItem) => d.file ?? d.url;
export const isPublished = (d: DocItem) => !!docHref(d) || !!d.editions?.some((e) => e.file);
