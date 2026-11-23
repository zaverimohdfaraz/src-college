/**
 * UGC Guidelines on Public Self-Disclosure by Higher Education Institutions:
 * every item, where it is on this website, and whether it is complete.
 * Status is worked out from lib/documents.ts and lib/people.ts, so publishing a
 * document or adding names updates this page automatically.
 */
import { documents, isPublished, type DocKey } from "@/lib/documents";
import { officers, committeeMembers, rti, directory, facts, faculty, type Member } from "@/lib/people";
import { departments } from "@/lib/departments";

type Check =
  | { kind: "page" }
  | { kind: "doc"; doc: DocKey }
  | { kind: "people"; members: Member[] }
  | { kind: "na"; reason: string }
  | { kind: "confirm"; note: string };

export type UgcItem = { label: string; href?: string; check: Check };
export type UgcSection = { letter: string; title: string; items: UgcItem[] };

export type Status = { tone: "ok" | "wait" | "na"; label: string };

export function statusOf(c: Check): Status {
  switch (c.kind) {
    case "page":
      return { tone: "ok", label: "Published" };
    case "doc":
      return isPublished(documents[c.doc]) ? { tone: "ok", label: "Published" } : { tone: "wait", label: "Document awaited" };
    case "people":
      return c.members.every((m) => m.name) ? { tone: "ok", label: "Published" } : { tone: "wait", label: "Names awaited" };
    case "na":
      return { tone: "na", label: c.reason };
    case "confirm":
      return { tone: "wait", label: c.note };
  }
}

const uni = { kind: "na", reason: "University post: see University of Mumbai" } as const;

export const ugcSections: UgcSection[] = [
  {
    letter: "a",
    title: "About the institution",
    items: [
      { label: "About us: overview", href: "/about", check: { kind: "page" } },
      { label: "Act and statutes, or memorandum of association", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "trustRegistration" } },
      { label: "Institutional Development Plan", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "idp" } },
      { label: "Affiliating university", href: "/institutional-information", check: { kind: "page" } },
      { label: "Learning support centre under ODL (YCMOU study centre)", href: "/academics/open-and-distance-learning", check: { kind: "page" } },
      { label: "Accreditation and ranking status (NAAC, NBA, NIRF)", href: "/institutional-information/quality-assurance", check: { kind: "doc", doc: "naacCertificate" } },
      { label: "Recognition and approval (2(f), 12B, as applicable)", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "ugcRecognition" } },
      { label: "Annual reports", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "annualReports" } },
      { label: "Annual accounts with audit report", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "annualAccounts" } },
      { label: "Sponsoring body details", href: "/about/trust", check: { kind: "page" } },
    ],
  },
  {
    letter: "b",
    title: "Administration",
    items: [
      { label: "Chancellor, Pro-Chancellor, Vice-Chancellor, Pro-Vice-Chancellor", check: uni },
      { label: "Registrar, Finance Officer, Controller of Examination, Chief Vigilance Officer", check: uni },
      { label: "Principal and college officers", href: "/about/administration#officers", check: { kind: "people", members: officers } },
      { label: "Ombudsperson", href: "/student-support/grievance-redressal", check: { kind: "page" } },
      { label: "College Development Committee (governing body)", href: "/about/administration#committee-cdc", check: { kind: "people", members: committeeMembers.cdc.members } },
      { label: "Internal Complaints Committee", href: "/student-support/womens-safety#committee-icc", check: { kind: "people", members: committeeMembers.icc.members } },
      { label: "Academic leadership (heads of departments)", href: "/about/administration#hods", check: { kind: "people", members: departments.map((d) => ({ role: d.name })) } },
    ],
  },
  {
    letter: "c",
    title: "Academics",
    items: [
      { label: "Details of academic programmes", href: "/courses", check: { kind: "page" } },
      { label: "Academic calendar", href: "/academics/calendar", check: { kind: "doc", doc: "academicCalendar" } },
      { label: "Statutes and ordinances on academics and examinations", href: "/academics/regulations", check: { kind: "page" } },
      { label: "Departments", href: "/departments", check: { kind: "page" } },
      { label: "Department-wise faculty and staff with photographs", href: "/departments#faculty", check: { kind: "people", members: Object.values(faculty).flat().length ? Object.values(faculty).flat() : [{ role: "Faculty" }] } },
      { label: "UGC-recognised ODL and online programmes", href: "/academics/open-and-distance-learning", check: { kind: "page" } },
      { label: "Internal Quality Assurance Cell (IQAC)", href: "/institutional-information/quality-assurance#committee-iqac", check: { kind: "people", members: committeeMembers.iqac.members } },
      { label: "Library", href: "/facilities/library", check: { kind: "page" } },
      { label: "Academic collaborations", href: "/academics/collaborations", check: { kind: "doc", doc: "mous" } },
    ],
  },
  {
    letter: "d",
    title: "Admissions and fees",
    items: [
      { label: "Prospectus, including fee structure", href: "/admissions/fees", check: { kind: "doc", doc: "prospectus" } },
      { label: "Admission process and guidelines", href: "/admissions", check: { kind: "page" } },
      { label: "Fee refund policy", href: "/admissions/fees", check: { kind: "page" } },
    ],
  },
  {
    letter: "e",
    title: "Research",
    items: [
      { label: "Research and Development Cell, projects and collaborations", href: "/academics/research#research-details", check: { kind: "people", members: facts.research } },
      { label: "Incubation centre, start-ups and entrepreneurship cell", href: "/academics/research#incubation", check: { kind: "people", members: facts.incubation } },
      { label: "Central facilities", href: "/facilities", check: { kind: "page" } },
    ],
  },
  {
    letter: "f",
    title: "Student life",
    items: [
      { label: "Sports facilities", href: "/campus-life/sport-and-fitness", check: { kind: "page" } },
      { label: "NCC and NSS", href: "/campus-life/nss-and-community", check: { kind: "page" } },
      { label: "Hostel details", href: "/facilities#hostel", check: { kind: "people", members: facts.hostel } },
      { label: "Placement Cell and its activities", href: "/student-support/careers", check: { kind: "page" } },
      { label: "Students' Grievance Redressal Committee and Ombudsperson", href: "/student-support/grievance-redressal#committee-sgrc", check: { kind: "people", members: committeeMembers.sgrc.members } },
      { label: "Health facilities", href: "/student-support/health#health-facilities", check: { kind: "people", members: facts.health } },
      { label: "Internal Complaints Committee", href: "/student-support/womens-safety#committee-icc", check: { kind: "people", members: committeeMembers.icc.members } },
      { label: "Anti-Ragging Cell", href: "/student-support/anti-ragging#committee-antiRagging", check: { kind: "people", members: committeeMembers.antiRagging.members } },
      { label: "Equal Opportunity Cell", href: "/student-support/equal-opportunity#committee-eoc", check: { kind: "people", members: committeeMembers.eoc.members } },
      { label: "Socio-Economically Disadvantaged Groups (SEDG) Cell", href: "/student-support/sedg-cell#committee-sedg", check: { kind: "people", members: committeeMembers.sedg.members } },
      { label: "Facilities for differently-abled students", href: "/student-support/accessibility#barrier-free", check: { kind: "people", members: facts.accessibility } },
    ],
  },
  {
    letter: "g",
    title: "Alumni",
    items: [{ label: "Alumni Association", href: "/institutional-information/alumni", check: { kind: "page" } }],
  },
  {
    letter: "h",
    title: "Information corner",
    items: [
      { label: "RTI: Public Information Officer and Appellate Authority", href: "/institutional-information/rti#rti-officers", check: { kind: "people", members: rti } },
      { label: "Circulars and notices", href: "/notices", check: { kind: "page" } },
      { label: "Announcements", href: "/notices", check: { kind: "page" } },
      { label: "Newsletters", href: "/institutional-information/publications", check: { kind: "doc", doc: "newsletters" } },
      { label: "News, recent events and achievements", href: "/institutional-information/news", check: { kind: "page" } },
      { label: "Job openings", href: "/institutional-information/job-openings", check: { kind: "page" } },
      { label: "Reservation roster", href: "/institutional-information/mandatory-disclosures", check: { kind: "doc", doc: "reservationRoster" } },
      { label: "Study in India and international students", href: "/admissions/international-students", check: { kind: "page" } },
    ],
  },
  {
    letter: "i",
    title: "Picture gallery",
    items: [{ label: "Photographs and videos", href: "/campus-life/gallery", check: { kind: "page" } }],
  },
  {
    letter: "j",
    title: "Contact us",
    items: [
      { label: "Phone, official email, address and location map", href: "/contact", check: { kind: "page" } },
      { label: "Telephone directory", href: "/contact#directory", check: { kind: "people", members: directory.map((d) => ({ role: d.office, name: d.phone })) } },
    ],
  },
];
