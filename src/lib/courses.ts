/**
 * Programme catalogue.
 *
 * Source: programme list on the college's existing website. The college must
 * confirm, for the coming academic year, that each programme is offered, and
 * supply eligibility, duration, intake and fees before any of those are shown.
 * Syllabus and subject lists are intentionally excluded.
 */

export type Level = "Undergraduate" | "Postgraduate";

export type Course = {
  slug: string;
  code: string;
  name: string;
  level: Level;
  category: "Commerce" | "Management" | "Arts" | "Computing";
  department: string; // slug in departments.ts
  /** Body through which the programme is offered, where known. */
  offeredThrough: string;
  /** Extra caution shown on the page when the offering needs confirmation. */
  availabilityNote?: string;
  summary: string;
  overview: string[];
  develops: string[];
  areas: string[];
  careers: string[];
  related: string[];
};

export const courses: Course[] = [
  {
    slug: "bcom",
    code: "B.Com.",
    name: "Bachelor of Commerce",
    level: "Undergraduate",
    category: "Commerce",
    department: "commerce",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "The foundation degree in commerce: how businesses are organised, financed, accounted for and regulated.",
    overview: [
      "The Bachelor of Commerce is the broadest of the college's commerce programmes and the one most students choose when they want to keep many doors open. It introduces the working parts of a business — accounts, economics, law, management and markets — and shows how they fit together.",
      "Because it is a general degree, B.Com. suits students who are still deciding between a professional qualification, a job straight after graduation or further study. Many students pair it with preparation for professional examinations in accountancy, company secretarial work or cost accounting.",
    ],
    develops: [
      "A working understanding of accounting and financial statements",
      "Familiarity with the economic and legal environment in which businesses operate",
      "Clear written and spoken communication for business settings",
      "The habit of reading numbers carefully and drawing sensible conclusions from them",
    ],
    areas: ["Accounting", "Business economics", "Commercial law", "Management", "Taxation"],
    careers: [
      "Accounts, audit and finance support roles",
      "Banking and financial services operations",
      "Preparation for professional qualifications such as CA, CS or CMA",
      "Postgraduate study, including M.Com. and MBA",
    ],
    related: ["baf", "bbi", "mcom-advanced-accountancy"],
  },
  {
    slug: "baf",
    code: "B.A.F.",
    name: "Bachelor of Commerce in Accounting and Finance",
    level: "Undergraduate",
    category: "Commerce",
    department: "accounts",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A focused commerce degree for students who want to work closely with accounts, audit, tax and corporate finance.",
    overview: [
      "Accounting and Finance takes the core of a commerce education and goes deeper into the two areas most businesses depend on every day: keeping accurate financial records and making sound decisions about money.",
      "The programme is suited to students who already enjoy working with figures and want a degree that sits close to the work of accountants, auditors and finance teams. It also gives a firm base for those planning to take professional accountancy examinations alongside or after their degree.",
    ],
    develops: [
      "Confidence in preparing and interpreting financial statements",
      "An understanding of audit, taxation and compliance responsibilities",
      "Analytical judgement in budgeting and financial planning",
      "Accuracy and professional discipline in handling financial information",
    ],
    areas: ["Financial accounting", "Cost and management accounting", "Auditing", "Direct and indirect taxation", "Corporate finance"],
    careers: [
      "Accounting, audit and taxation practice",
      "Finance teams in companies and firms",
      "Preparation for CA, CMA and similar professional routes",
      "Postgraduate study in accountancy or finance",
    ],
    related: ["bcom", "bbi", "mcom-advanced-accountancy"],
  },
  {
    slug: "bbi",
    code: "B.B.I.",
    name: "Bachelor of Commerce in Banking and Insurance",
    level: "Undergraduate",
    category: "Commerce",
    department: "commerce",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A commerce degree built around how banks, insurers and other financial institutions work and serve their customers.",
    overview: [
      "Banking and Insurance looks at the financial system from the inside: how banks take deposits and lend, how insurance spreads and prices risk, and how both are regulated to protect the public.",
      "Alongside the institutional knowledge, the programme places weight on customer service, the use of technology in financial services, and the ethical responsibilities that come with handling other people's money.",
    ],
    develops: [
      "Knowledge of banking operations, products and regulation",
      "An understanding of risk and how insurance manages it",
      "Customer-facing communication and service skills",
      "Awareness of digital banking and financial technology",
    ],
    areas: ["Banking operations", "Insurance principles", "Financial regulation", "Risk management", "Financial services marketing"],
    careers: [
      "Branch, operations and customer roles in banks",
      "Insurance sales, underwriting and claims support",
      "Financial services and NBFC roles",
      "Preparation for banking recruitment examinations",
    ],
    related: ["bcom", "baf", "bms"],
  },
  {
    slug: "bms",
    code: "B.M.S.",
    name: "Bachelor of Management Studies",
    level: "Undergraduate",
    category: "Management",
    department: "commerce",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "An introduction to managing people, projects and organisations, with room to specialise in a functional area.",
    overview: [
      "The Bachelor of Management Studies is designed for students interested in how organisations are led and run. It covers the main functions of management — marketing, finance and human resources — and the decision-making that ties them together.",
      "Teaching makes use of presentations, case discussions, projects and group work, so that students practise the communication and teamwork that management roles demand as well as learning the concepts behind them.",
    ],
    develops: [
      "An overview of how organisations plan, decide and operate",
      "Presentation, negotiation and teamwork skills",
      "Problem-solving through case studies and projects",
      "Initiative and an entrepreneurial outlook",
    ],
    areas: ["Marketing", "Finance", "Human resource management", "Operations", "Entrepreneurship"],
    careers: [
      "Management trainee and executive roles",
      "Sales, marketing and business development",
      "Human resources and administration",
      "MBA and other postgraduate management study",
    ],
    related: ["bcom", "bbi", "mba"],
  },
  {
    slug: "ba",
    code: "B.A.",
    name: "Bachelor of Arts",
    level: "Undergraduate",
    category: "Arts",
    department: "arts",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A humanities and social sciences degree that builds reading, writing and critical thinking.",
    overview: [
      "The Bachelor of Arts gives students time to study people, societies, languages and ideas. It asks students to read closely, argue carefully and write clearly — abilities that are valued in almost every profession.",
      "B.A. suits students who are drawn to languages, history, society or public life, and those who are considering teaching, civil services preparation, media or further study in the humanities.",
    ],
    develops: [
      "Critical reading and the ability to weigh different arguments",
      "Clear, well-structured writing",
      "Understanding of social, cultural and historical contexts",
      "Confidence in discussion and public speaking",
    ],
    areas: ["Languages and literature", "History", "Social sciences", "Cultural studies"],
    careers: [
      "Teaching and education (with further qualifications)",
      "Media, communication and content roles",
      "Preparation for competitive and civil services examinations",
      "Postgraduate study in the humanities and social sciences",
    ],
    related: ["bcom", "bms"],
  },
  {
    slug: "bsc-it",
    code: "B.Sc. I.T.",
    name: "Bachelor of Science in Information Technology",
    level: "Undergraduate",
    category: "Computing",
    department: "information-technology",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A practical computing degree covering programming, networks, databases and the systems that businesses run on.",
    overview: [
      "Information Technology focuses on building and running the systems organisations rely on. Students learn to program, design databases, work with networks and the web, and understand how technology supports business operations.",
      "Much of the learning happens in the computer laboratory, through practical sessions and project work. The programme suits students who like to build things and want a degree that leads directly into technology work.",
    ],
    develops: [
      "Programming ability across more than one language",
      "Database, networking and web development fundamentals",
      "Structured problem-solving and debugging",
      "Project experience working on a complete application",
    ],
    areas: ["Software development", "Web technologies", "Databases", "Networking", "IT in business"],
    careers: [
      "Software and web development",
      "Technical support and systems administration",
      "Quality assurance and testing",
      "Postgraduate study such as M.Sc. I.T. or MCA",
    ],
    related: ["bsc-cs", "mca"],
  },
  {
    slug: "bsc-cs",
    code: "B.Sc. C.S.",
    name: "Bachelor of Science in Computer Science",
    level: "Undergraduate",
    category: "Computing",
    department: "information-technology",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A computing degree that goes beneath the applications to the logic, mathematics and algorithms behind them.",
    overview: [
      "Computer Science is concerned with how computation works: algorithms, data structures, operating systems and the mathematics that underpins them. Where Information Technology emphasises applying systems, Computer Science places more weight on understanding and designing them.",
      "The programme draws on the Department of Mathematics as well as Information Technology, and suits students who enjoy logical reasoning and want a strong theoretical base for a career in software or further study.",
    ],
    develops: [
      "Algorithmic thinking and efficient problem-solving",
      "Programming grounded in data structures and design",
      "Mathematical reasoning applied to computing problems",
      "Understanding of how operating systems and software are built",
    ],
    areas: ["Algorithms and data structures", "Programming", "Discrete mathematics", "Operating systems", "Software engineering"],
    careers: [
      "Software development and engineering",
      "Data and analytics support roles",
      "Technical roles in product and services companies",
      "Postgraduate study in computer science or MCA",
    ],
    related: ["bsc-it", "mca"],
  },
  {
    slug: "mcom-advanced-accountancy",
    code: "M.Com.",
    name: "Master of Commerce in Advanced Accountancy",
    level: "Postgraduate",
    category: "Commerce",
    department: "accounts",
    offeredThrough: "University of Mumbai (affiliated college)",
    summary:
      "A postgraduate commerce degree that takes accounting, audit and financial reporting to an advanced level.",
    overview: [
      "The M.Com. in Advanced Accountancy is for commerce graduates who want to deepen their expertise in accounting and related fields. It revisits familiar areas — financial reporting, cost accounting, audit and taxation — at the depth expected of senior practitioners and teachers.",
      "The programme also introduces research methods, preparing students who may later pursue teaching, research or doctoral study in commerce.",
    ],
    develops: [
      "Advanced command of accounting standards and reporting",
      "Analytical skill in cost, management and financial decisions",
      "Research and academic writing ability",
      "Readiness for senior finance responsibilities",
    ],
    areas: ["Advanced financial accounting", "Cost and management accounting", "Auditing", "Taxation", "Research methodology"],
    careers: [
      "Senior accounting and finance roles",
      "Audit and tax practice",
      "Teaching in commerce (with the required eligibility tests)",
      "Research and doctoral study",
    ],
    related: ["bcom", "baf"],
  },
  {
    slug: "mba",
    code: "MBA",
    name: "Master of Business Administration",
    level: "Postgraduate",
    category: "Management",
    department: "commerce",
    offeredThrough:
      "Yashwantrao Chavan Maharashtra Open University (YCMOU) — the college is a YCMOU study centre",
    availabilityNote:
      "Offered through the YCMOU study centre at the college. Please confirm current specialisations and the admission cycle with the college office.",
    summary:
      "A flexible management programme through the college's YCMOU study centre, suited to graduates and working professionals.",
    overview: [
      "The MBA is offered through the college's study centre of Yashwantrao Chavan Maharashtra Open University. The open-university format is designed to make postgraduate management education accessible to students who are working or who need a flexible schedule.",
      "Specialisations previously listed by the study centre include Finance, Marketing, Human Resources and Manufacturing, allowing students to build expertise in the area most relevant to their career.",
    ],
    develops: [
      "Strategic understanding of how organisations compete and grow",
      "Specialist knowledge in a chosen management function",
      "Leadership, decision-making and people management",
      "The ability to apply management ideas to one's own workplace",
    ],
    areas: ["Finance", "Marketing", "Human resources", "Manufacturing and operations", "Strategy"],
    careers: [
      "Progression into managerial roles",
      "Functional specialisms in finance, marketing or HR",
      "Operations and production management",
      "Entrepreneurship and family-business leadership",
    ],
    related: ["bms", "bcom"],
  },
  {
    slug: "mca",
    code: "MCA",
    name: "Master of Computer Applications",
    level: "Postgraduate",
    category: "Computing",
    department: "information-technology",
    offeredThrough: "University of Mumbai distance education (previously listed as IDOL)",
    availabilityNote:
      "This programme was previously listed in connection with the University of Mumbai's distance-education institute. Its current availability at the college must be confirmed before you apply.",
    summary:
      "A postgraduate computing programme for graduates who want to move into, or advance in, software and IT roles.",
    overview: [
      "The Master of Computer Applications develops professional software skills at postgraduate level, covering application development, databases, networks and current approaches to building software.",
      "It is suited both to computing graduates who want to deepen their expertise and to graduates from other backgrounds who are making a planned move into the technology sector.",
    ],
    develops: [
      "Professional software design and development skills",
      "Knowledge of databases, networks and modern application architecture",
      "Project planning and delivery",
      "Readiness for technical responsibilities in industry",
    ],
    areas: ["Application development", "Database systems", "Networking", "Software engineering", "Emerging technologies"],
    careers: [
      "Software development and engineering",
      "Systems analysis and IT consulting",
      "Database and application administration",
      "Technical teaching and further study",
    ],
    related: ["bsc-it", "bsc-cs"],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const coursesByLevel = (level: Level) => courses.filter((c) => c.level === level);
export const courseOptions = courses.map((c) => ({ value: c.slug, label: `${c.code} — ${c.name}` }));
