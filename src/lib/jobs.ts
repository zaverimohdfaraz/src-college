/** Vacancies. Add one entry per advertisement; remove when closed. `href` can point to a PDF in /public/documents. */
export type Job = { title: string; details: string; lastDate?: string; href?: string };

export const jobs: Job[] = [];
