/**
 * Officers and committee members published under the UGC self-disclosure guidelines.
 * Leave `name` empty until the college confirms it; the website then shows
 * "To be published". Add `phone`, `email` or `photo` (/images/people/…) where available.
 */
export type Member = { role: string; name?: string; designation?: string; phone?: string; email?: string; photo?: string };

/** Principal and administrative officers (UGC: Administration). */
export const officers: Member[] = [
  { role: "Principal" },
  { role: "Vice Principal" },
  { role: "Registrar / Office Superintendent" },
  { role: "Accounts Officer (finance)" },
  { role: "College Examination Officer" },
  { role: "Librarian" },
];

/** Statutory and student-welfare committees. Members are listed by role; names are added once confirmed. */
export const committeeMembers: Record<string, { title: string; basis: string; members: Member[] }> = {
  cdc: {
    title: "College Development Committee",
    basis: "Constituted under Section 97 of the Maharashtra Public Universities Act, 2016.",
    members: [
      { role: "Chairperson (President of the management or nominee)" },
      { role: "Secretary of the management" },
      { role: "Heads of departments (one nominated)" },
      { role: "Teachers elected by the teachers" },
      { role: "Representative of non-teaching staff" },
      { role: "Local members from industry, research or social service" },
      { role: "IQAC coordinator" },
      { role: "President and Secretary of the Students' Council" },
      { role: "Member Secretary (Principal)" },
    ],
  },
  iqac: {
    title: "Internal Quality Assurance Cell",
    basis: "Constituted as per NAAC guidelines.",
    members: [
      { role: "Chairperson (Principal)" },
      { role: "IQAC coordinator" },
      { role: "Senior teachers" },
      { role: "Member of the management" },
      { role: "Administrative officer" },
      { role: "Local society, alumni, employer and student representatives" },
    ],
  },
  icc: {
    title: "Internal Complaints Committee",
    basis: "Constituted under the Sexual Harassment of Women at Workplace Act, 2013 and the UGC Regulations, 2015.",
    members: [
      { role: "Presiding Officer (senior woman faculty member)" },
      { role: "Faculty members" },
      { role: "Non-teaching staff member" },
      { role: "Student representatives" },
      { role: "External member (NGO or person familiar with the issues)" },
    ],
  },
  sgrc: {
    title: "Students' Grievance Redressal Committee (SGRC)",
    basis: "Constituted under the UGC (Redress of Grievances of Students) Regulations, 2023.",
    members: [
      { role: "Chairperson (senior professor)" },
      { role: "Members (senior faculty)" },
      { role: "Special invitee (student representative)" },
    ],
  },
  antiRagging: {
    title: "Anti-Ragging Committee and Squad",
    basis: "Constituted under the UGC Regulations on Curbing the Menace of Ragging, 2009.",
    members: [
      { role: "Chairperson (Principal)" },
      { role: "Faculty members" },
      { role: "Representative of civil and police administration" },
      { role: "Local media representative" },
      { role: "Parent and student representatives" },
      { role: "Non-teaching staff member" },
    ],
  },
  eoc: {
    title: "Equal Opportunity Cell",
    basis: "Established as per UGC guidelines.",
    members: [{ role: "Coordinator" }, { role: "Faculty members" }, { role: "Student representatives" }],
  },
  sedg: {
    title: "Socio-Economically Disadvantaged Groups (SEDG) Cell",
    basis: "Established as per UGC guidelines under NEP 2020.",
    members: [{ role: "Coordinator" }, { role: "Faculty members" }, { role: "Student representatives" }],
  },
};

/** Public Information Officer and Appellate Authority under the RTI Act, 2005. */
export const rti: Member[] = [{ role: "Public Information Officer" }, { role: "Appellate Authority" }];

/** Telephone directory. Numbers marked as general lines are the published college numbers. */
export const directory: { office: string; phone?: string; email?: string }[] = [
  { office: "College office, line 1", phone: "9967609447" },
  { office: "College office, line 2", phone: "9769457128" },
  { office: "College office, line 3", phone: "9820271328" },
  { office: "Principal's office" },
  { office: "Admissions" },
  { office: "Examinations" },
  { office: "Accounts and fees" },
  { office: "Library" },
  { office: "Placement Cell" },
  { office: "YCMOU study centre" },
];

/**
 * Faculty by department (UGC: department-wise faculty details with photographs).
 * Example: commerce: [{ role: "Assistant Professor", name: "Dr. A. B. Name", designation: "M.Com., Ph.D.", photo: "/images/people/name.webp" }]
 */
export const faculty: Record<string, Member[]> = {
  commerce: [],
  accounts: [],
  "information-technology": [],
  arts: [],
  mathematics: [],
};

/**
 * Facts the college still has to confirm. Each shows "To be published" until `name` (the answer) is filled in.
 * Example: { role: "Ramp at the entrance", name: "Available" }
 */
export const facts: Record<string, Member[]> = {
  hostel: [{ role: "Hostel for students" }],
  accessibility: [
    { role: "Ramp at the building entrance" },
    { role: "Lift" },
    { role: "Accessible washroom" },
    { role: "Ground-floor classrooms on request" },
  ],
  health: [
    { role: "First-aid room or sick bay" },
    { role: "Tie-up with a doctor or nearby hospital" },
    { role: "Counsellor" },
  ],
  research: [
    { role: "Research and Development Cell: coordinator" },
    { role: "Research projects (current and completed)" },
    { role: "Consultancy projects" },
    { role: "Industry collaborations" },
  ],
  incubation: [{ role: "Incubation centre / Entrepreneurship Cell" }, { role: "Start-ups by students or alumni" }],
};
