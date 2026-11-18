/**
 * Official notices. Add only items issued by the college office.
 * Newest first. `href` may point to a PDF in /public/notices or an internal page.
 *
 * Example:
 * { id: "fy-admissions-2027", date: "2027-05-20", title: "First-year admissions open", category: "Admissions", href: "/notices/fy-2027.pdf" }
 */
export type Notice = { id: string; date: string; title: string; category: "Admissions" | "Examinations" | "Events" | "General"; href?: string };

export const notices: Notice[] = [];
