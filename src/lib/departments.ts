/**
 * Departments, as listed on the college's existing website.
 * Faculty are intentionally empty until the college supplies verified details.
 */

export type Faculty = { name: string; designation: string; qualification?: string; photo?: string };

export type Department = {
  slug: string;
  name: string;
  intro: string;
  focus: string[];
  faculty: Faculty[];
};

export const departments: Department[] = [
  {
    slug: "commerce",
    name: "Department of Commerce",
    intro:
      "The Department of Commerce teaches how businesses are organised and how trade, markets and finance work. It anchors the college's commerce and management programmes and introduces students to economics, entrepreneurship and marketing.",
    focus: ["Business studies", "Trade and markets", "Financial management", "Economics", "Entrepreneurship", "Marketing"],
    faculty: [],
  },
  {
    slug: "accounts",
    name: "Department of Accounts",
    intro:
      "The Department of Accounts builds the technical core of the college's accounting programmes: recording and reporting financial information, taxation and audit. Students learn to keep accurate records, analyse budgets and meet regulatory requirements.",
    focus: ["Financial accounting", "Taxation", "Auditing", "Budget analysis", "Regulatory compliance"],
    faculty: [],
  },
  {
    slug: "information-technology",
    name: "Department of Information Technology",
    intro:
      "The Department of Information Technology teaches computer systems, programming and digital technologies. Its practical work, much of it in the computer laboratory, prepares students for software development, networking and IT roles in modern businesses.",
    focus: ["Programming", "Software development", "Networking", "Computer systems", "IT for business"],
    faculty: [],
  },
  {
    slug: "arts",
    name: "Department of Arts",
    intro:
      "The Department of Arts develops creativity and critical thinking through literature, history, languages and the social sciences. It supports students heading towards media, education, public life and cultural work.",
    focus: ["Languages", "Literature", "History", "Social sciences", "Cultural studies"],
    faculty: [],
  },
  {
    slug: "mathematics",
    name: "Department of Mathematics",
    intro:
      "The Department of Mathematics strengthens analytical and problem-solving ability through algebra, calculus and statistics. It supports programmes across the college, especially in computing and commerce, where quantitative reasoning matters.",
    focus: ["Algebra", "Calculus", "Statistics", "Quantitative reasoning", "Problem-solving"],
    faculty: [],
  },
];

export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug);
