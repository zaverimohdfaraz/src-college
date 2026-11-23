/**
 * Multi-page sections of the site. Each section lists its pages in menu order; the
 * shared SectionShell uses this to draw the section menu, breadcrumbs and previous/next links,
 * and the main navigation (site.ts) is built from the same lists.
 */
import { photos, type Photo } from "@/lib/images";
import { departments } from "@/lib/departments";

export type SubPage = {
  href: string;
  label: string;
  group: string;
  /** Page heading. Defaults to the label. */
  title?: string;
  summary: string;
  photo?: Photo;
};

export type Section = {
  key: string;
  name: string;
  href: string;
  groups: string[];
  pages: SubPage[];
};

const deptPhoto: Record<string, Photo> = {
  commerce: photos.classroomStudents,
  accounts: photos.lecture,
  "information-technology": photos.labTeaching,
  arts: photos.session,
  mathematics: photos.classroom,
};

export const sections = {
  about: {
    key: "about",
    name: "About",
    href: "/about",
    groups: ["The college", "The trust"],
    pages: [
      { href: "/about", label: "About the college", group: "The college", summary: "Who we are, where we are and how teaching works at the college.", photo: photos.front },
      { href: "/about/history", label: "History", group: "The college", summary: "How the Jana Seva Sangh's work in schools led to a degree college in 2009.", photo: photos.exterior },
      { href: "/about/vision-mission", label: "Vision and mission", group: "The college", summary: "The environment the college works to create, and the four commitments behind it.", photo: photos.classroomStudents },
      { href: "/about/leadership", label: "Leadership", group: "The college", summary: "The trust and the people who lead the college on campus.", photo: photos.hall },
      { href: "/about/administration", label: "Administration", group: "The college", summary: "The Principal, administrative officers, the College Development Committee and the Ombudsperson.", photo: photos.office },
      { href: "/about/trust", label: "Jana Seva Sangh", group: "The trust", title: "The Jana Seva Sangh", summary: "The charitable trust that founded and manages the college, and its other institutions.", photo: photos.nss },
      { href: "/about/values", label: "Our values", group: "The trust", summary: "Access, care, rigour, character and service: how the college aims to treat its students.", photo: photos.corridorStudents },
    ],
  },
  academics: {
    key: "academics",
    name: "Academics",
    href: "/academics",
    groups: ["Study", "Departments"],
    pages: [
      { href: "/academics", label: "Academics overview", group: "Study", title: "Academics", summary: "Every programme the college offers, at undergraduate and postgraduate level.", photo: photos.lecture },
      { href: "/academics/teaching-and-learning", label: "Teaching and learning", group: "Study", summary: "Planned lessons, mentoring, active learning and add-on courses.", photo: photos.session },
      { href: "/academics/calendar", label: "Academic calendar", group: "Study", summary: "How the academic year is organised into semesters, examinations and breaks.", photo: photos.classroom },
      { href: "/academics/open-and-distance-learning", label: "Open and distance learning", group: "Study", summary: "Programmes offered through the college's YCMOU study centre.", photo: photos.session },
      { href: "/academics/regulations", label: "Regulations and ordinances", group: "Study", summary: "The University of Mumbai rules that govern programmes and examinations.", photo: photos.library },
      { href: "/academics/research", label: "Research and innovation", group: "Study", summary: "Student research, projects, entrepreneurship and central facilities.", photo: photos.labStudents },
      { href: "/academics/collaborations", label: "Collaborations", group: "Study", summary: "Partnerships with institutions and organisations.", photo: photos.ivGroup },
      { href: "/departments", label: "All departments", group: "Departments", title: "Departments", summary: "The five departments that teach the college's programmes.", photo: photos.faculty },
      ...departments.map((d) => ({
        href: `/departments/${d.slug}`,
        label: d.name.replace("Department of ", ""),
        group: "Departments",
        title: d.name,
        summary: d.intro.split(". ")[0] + ".",
        photo: deptPhoto[d.slug],
      })),
    ],
  },
  admissions: {
    key: "admissions",
    name: "Admissions",
    href: "/admissions",
    groups: ["Admissions"],
    pages: [
      { href: "/admissions", label: "How to apply", group: "Admissions", title: "Admissions", summary: "The four steps from first enquiry to confirmed admission.", photo: photos.office },
      { href: "/admissions/eligibility-and-documents", label: "Eligibility and documents", group: "Admissions", summary: "Who can apply for each level of study, and the documents usually needed.", photo: photos.corridorStudents },
      { href: "/admissions/fees", label: "Fees, prospectus and refunds", group: "Admissions", summary: "The prospectus, fee structure and fee refund policy.", photo: photos.office },
      { href: "/admissions/international-students", label: "International students", group: "Admissions", summary: "How students from outside India can apply.", photo: photos.corridorStudents },
      { href: "/admissions/faq", label: "Common questions", group: "Admissions", summary: "Answers to the questions families ask most often.", photo: photos.classroomStudents },
    ],
  },
  campusLife: {
    key: "campusLife",
    name: "Campus life",
    href: "/campus-life",
    groups: ["Student life"],
    pages: [
      { href: "/campus-life", label: "Student life", group: "Student life", title: "Campus life", summary: "Clubs, committees, sport and service beyond the classroom.", photo: photos.groundEvent },
      { href: "/campus-life/culture-and-events", label: "Culture and events", group: "Student life", summary: "Festivals, the Annual Day and intercollegiate events.", photo: photos.cultural },
      { href: "/campus-life/sport-and-fitness", label: "Sport and fitness", group: "Student life", summary: "The Gymkhana, Sports Day and the college gymnasium.", photo: photos.sportsGround },
      { href: "/campus-life/nss-and-community", label: "NSS and community service", group: "Student life", summary: "Plantation drives, blood donation camps and village visits.", photo: photos.nss },
      { href: "/campus-life/beyond-the-classroom", label: "Beyond the classroom", group: "Student life", summary: "Industrial visits, guest lectures, add-on courses and skills training.", photo: photos.ivGroup },
      { href: "/campus-life/get-involved", label: "Get involved", group: "Student life", summary: "The committees and cells students can join.", photo: photos.corridorStudents },
      { href: "/campus-life/gallery", label: "Gallery and videos", group: "Student life", summary: "Photographs and short films from around the college.", photo: photos.ivDemo },
    ],
  },
  facilities: {
    key: "facilities",
    name: "Facilities",
    href: "/facilities",
    groups: ["Facilities"],
    pages: [
      { href: "/facilities", label: "All facilities", group: "Facilities", title: "Facilities", summary: "Spaces for study, practical work and recreation.", photo: photos.corridor },
      { href: "/facilities/library", label: "Library", group: "Facilities", summary: "Textbooks, reference works, e-resources and quiet reading space.", photo: photos.library },
      { href: "/facilities/computer-laboratory", label: "Computer laboratory", group: "Facilities", summary: "Practical work for the computing programmes and digital learning for all.", photo: photos.labWide },
      { href: "/facilities/gymnasium", label: "Gymnasium", group: "Facilities", summary: "Fitness equipment and space to stay active.", photo: photos.gym },
      { href: "/facilities/classrooms-and-hall", label: "Classrooms and hall", group: "Facilities", summary: "Lecture rooms, digital teaching and the multipurpose hall.", photo: photos.hall },
    ],
  },
  support: {
    key: "support",
    name: "Student support",
    href: "/student-support",
    groups: ["Support", "Rights and safety"],
    pages: [
      { href: "/student-support", label: "Support and mentoring", group: "Support", title: "Student support", summary: "Where to go for help, and how mentoring works.", photo: photos.faculty },
      { href: "/student-support/scholarships", label: "Scholarships and freeships", group: "Support", summary: "Government schemes and trust scholarships, and how to apply.", photo: photos.office },
      { href: "/student-support/examinations", label: "Examinations and results", group: "Support", summary: "Internal assessment, semester examinations, results and revaluation.", photo: photos.classroomStudents },
      { href: "/student-support/careers", label: "Careers and placement", group: "Support", summary: "Career guidance, training, internships and recruitment.", photo: photos.placementCell },
      { href: "/student-support/health", label: "Health and well-being", group: "Support", summary: "First aid, health awareness and counselling support.", photo: photos.firstAid },
      { href: "/student-support/anti-ragging", label: "Anti-ragging", group: "Rights and safety", summary: "Ragging is prohibited. How to report it, and what happens next.", photo: photos.corridorStudents },
      { href: "/student-support/grievance-redressal", label: "Grievance redressal", group: "Rights and safety", summary: "How to raise a complaint and get a fair resolution.", photo: photos.office },
      { href: "/student-support/womens-safety", label: "Women's safety and ICC", group: "Rights and safety", title: "Women's safety and the ICC", summary: "The Women Development Cell and the Internal Complaints Committee.", photo: photos.lecture },
      { href: "/student-support/equal-opportunity", label: "Equal Opportunity Cell", group: "Rights and safety", summary: "Equal access for every student, irrespective of background.", photo: photos.labStudents },
      { href: "/student-support/sedg-cell", label: "SEDG Cell", group: "Rights and safety", title: "Socio-Economically Disadvantaged Groups Cell", summary: "Support for students from socio-economically disadvantaged groups.", photo: photos.classroomStudents },
      { href: "/student-support/accessibility", label: "Differently-abled students", group: "Rights and safety", title: "Facilities for differently-abled students", summary: "Access, examination support and help for students with disabilities.", photo: photos.corridor },
    ],
  },
  institutional: {
    key: "institutional",
    name: "Institutional information",
    href: "/institutional-information",
    groups: ["Governance", "Information corner"],
    pages: [
      { href: "/institutional-information", label: "At a glance", group: "Governance", title: "Institutional information", summary: "Key facts about the college and how it is organised.", photo: photos.exterior },
      { href: "/institutional-information/ugc-disclosure", label: "UGC self-disclosure", group: "Governance", title: "Public self-disclosure", summary: "Everything the UGC asks colleges to publish, in one place.", photo: photos.front },
      { href: "/institutional-information/committees", label: "Committees and cells", group: "Governance", summary: "The committees that share responsibility for college life.", photo: photos.facultyMeeting },
      { href: "/institutional-information/quality-assurance", label: "IQAC and accreditation", group: "Governance", title: "Quality assurance and accreditation", summary: "NAAC, the IQAC and how the college reviews its work.", photo: photos.trophies },
      { href: "/institutional-information/best-practices", label: "Best practices", group: "Governance", summary: "Mentoring every student and activity-based learning.", photo: photos.labTeaching },
      { href: "/institutional-information/mandatory-disclosures", label: "Documents and reports", group: "Governance", title: "Documents and reports", summary: "Affiliation, accreditation, annual reports, accounts and other official documents.", photo: photos.office },
      { href: "/institutional-information/news", label: "News and achievements", group: "Information corner", summary: "Recent events and what students have achieved.", photo: photos.cultural },
      { href: "/institutional-information/job-openings", label: "Job openings", group: "Information corner", summary: "Teaching and non-teaching vacancies at the college.", photo: photos.corridor },
      { href: "/institutional-information/rti", label: "Right to Information", group: "Information corner", summary: "How to request information under the RTI Act, 2005.", photo: photos.office },
      { href: "/institutional-information/alumni", label: "Alumni", group: "Information corner", summary: "Staying connected with the college after graduation.", photo: photos.groundEvent },
      { href: "/institutional-information/publications", label: "Newsletters and magazine", group: "Information corner", title: "Newsletters and the college magazine", summary: "The college magazine, newsletters and student writing.", photo: photos.library },
    ],
  },
} satisfies Record<string, Section>;

export type SectionKey = keyof typeof sections;

export const findPage = (key: SectionKey, href: string) => {
  const page = (sections[key].pages as SubPage[]).find((p) => p.href === href);
  if (!page) throw new Error(`Unknown page ${href} in section ${key}`);
  return page;
};

/** Pages of a section in one group, as navigation links. */
export const navLinks = (key: SectionKey, group?: string, withSummary = false) =>
  (sections[key].pages as SubPage[])
    .filter((p) => !group || p.group === group)
    .map((p) => ({ label: p.label, href: p.href, ...(withSummary ? { description: p.summary } : {}) }));
