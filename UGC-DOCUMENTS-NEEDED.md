# Documents and details needed from the college

The website now covers every item in the **UGC Guidelines on Public Self-Disclosure by HEIs**.
The page **/institutional-information/ugc-disclosure** shows the live status of each item.
It marks an item "Published" as soon as its document or details are added.

## How to add them

- **PDF documents:** save the file in `public/documents/`. Then set `file: "/documents/<name>.pdf"` on the matching entry in `src/lib/documents.ts`.
- **Names and contacts:** fill in `name` (and optionally `designation`, `phone`, `email`, `photo`) in `src/lib/people.ts`.
- **Faculty profiles:** add them under `faculty` in `src/lib/people.ts`, with photos in `public/images/people/`.
- **Facts to confirm** (hostel, barrier-free access, health facilities, research, incubation): fill in `name` with the answer in the `facts` list in `src/lib/people.ts`, e.g. `{ role: "Lift", name: "Available" }`. For something the college doesn't have, write that, e.g. `{ role: "Hostel for students", name: "Not available" }`.
- **Job vacancies:** add them to `src/lib/jobs.ts`. **Notices:** add them to `src/lib/notices.ts`.

---

## 1. Documents (PDF)

| # | Document | Key in documents.ts |
|---|----------|---------------------|
| 1 | Trust registration certificate and Trust Deed / Memorandum of the Jana Seva Sangh | trustRegistration |
| 2 | Government of Maharashtra permission letter(s) | governmentPermission |
| 3 | Institutional Development Plan | idp |
| 4 | University of Mumbai affiliation letters (all programmes) | affiliation |
| 5 | YCMOU study centre approval letter | ycmouCentre |
| 6 | UGC 2(f) / 12B recognition letter (or confirm "not recognised") | ugcRecognition |
| 7 | NAAC certificate (grade and validity) | naacCertificate |
| 8 | NAAC Self Study Report | naacSsr |
| 9 | AQARs (recent years) | aqar |
| 10 | NIRF data (or confirm "did not participate") | nirf |
| 11 | AISHE certificates | aishe |
| 12 | Annual reports (recent years) | annualReports |
| 13 | Audited accounts: balance sheet, I&E, receipts and payments, audit report | annualAccounts |
| 14 | College Development Committee composition | cdcComposition |
| 15 | Statutory committees composition (current year) | committeesComposition |
| 16 | Academic calendar for the current year | academicCalendar |
| 17 | IQAC composition and meeting minutes / ATR | iqacComposition, iqacMinutes |
| 18 | MoUs / collaboration agreements (or confirm none) | mous |
| 19 | Prospectus for the current year | prospectus |
| 20 | Fee structure, all programmes | feeStructure |
| 21 | Fee refund policy (college's own, if any) | feeRefundPolicy |
| 22 | Newsletters / college magazine (PDF) | newsletters |
| 23 | Reservation roster (if applicable) | reservationRoster |

## 2. Names and contact details

- **Principal and officers:** Principal, Vice Principal, Registrar / Office Superintendent, Accounts Officer, College Examination Officer and Librarian. For each, give their name, qualification, phone/email and a photo.
  *(President, Director, Principal and Vice Principal profiles for the Leadership page are still on hold, as requested.)*
- **Heads of the five departments.**
- **Faculty of each department:** name, designation, qualification and photo.
- **Committee members (current year):** College Development Committee, IQAC, ICC, SGRC, Anti-Ragging Committee/Squad, Equal Opportunity Cell and SEDG Cell.
- **RTI:** the Public Information Officer and the Appellate Authority.
- **Telephone directory:** direct numbers or emails for the Principal's office, Admissions, Examinations, Accounts, Library, Placement Cell and YCMOU centre.
  Also confirm which of the three college numbers is which.

## 3. Facts to confirm

- **Hostel:** does the college have a hostel? (If not, the item is marked "Not applicable".)
- **NCC:** is there an NCC unit, or NSS only?
- **Barrier-free access:** ramps, lift and accessible washroom.
- **Research:** a Research and Development Cell, research projects, consultancy, and any incubation centre or Entrepreneurship Cell.
- **Health facilities:** first-aid room, a tie-up with a doctor or hospital, and a counsellor.
- **NAAC grade and cycle, and NIRF participation.**
- **Academic collaborations or MoUs.**
