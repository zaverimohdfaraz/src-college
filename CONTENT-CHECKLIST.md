# Content checklist — to confirm with the college before launch

Facts on the site were taken from the college's existing website and its AQAR filing. Anything not verified is shown on the site as a clearly marked "to be supplied" notice, never as invented content.

## Must confirm (currently shown on the site)

- [ ] **Phone numbers** 9967609447, 9769457128, 9820271328. The old site also lists +91 99671 58478 in its header.
- [ ] **Email** info@sr-college.com. The old site also lists shriramcollege09@gmail.com and ycmousrcc@gmail.com.
- [ ] **Office hours.** These are not shown, because the old site gives two conflicting sets (Mon–Sat 9–4 and Mon–Fri 9–5 / Sat 11–3).
- [ ] **Founding date** 28 August 2009 and **affiliation** to the University of Mumbai.
- [ ] **YCMOU study centre** (code 31541), and the MBA specialisations: Finance, Marketing, HR and Manufacturing.
- [ ] **Programme availability** for the coming year. In particular, confirm whether the **MCA** (previously listed via IDOL) is still offered.
- [ ] **Vision statement.** It is shown lightly edited for grammar. The original reads: "To develop a student centric environment to strength the intellectual cultural social and physical standards are met."
- [ ] **Mentor ratio** of 15–20 students per faculty member, taken from the Institutional Distinctiveness page.
- [ ] **NAAC.** The logo reads "NAAC re-accredited 'B+' grade (CGPA 2.67)". Confirm this is the current, valid grade. The site text deliberately does not state a grade until the certificate is supplied.
- [ ] **"UMIC" committee.** Its full name and purpose are needed.
- [ ] **Nearest stations.** The contact page names Bhandup and Nahur.

## To supply

- [ ] Photographs: campus, classrooms, library, computer lab, gymnasium, events, and hero slides (4)
- [ ] Videos: college introduction, student activities
- [ ] Leadership: President, Director, Principal and Vice Principal (names, photos, messages)
- [ ] Faculty for each of the 5 departments (name, designation, qualification, photo)
- [ ] Duration, eligibility, intake and fees for each programme (optional; currently pointed to the office)
- [ ] Committee membership; grievance committee, ICC and WDC contacts
- [ ] NAAC certificates, SSR, AQARs, AISHE, RTI officer details, affiliation letters (mandatory disclosures)
- [ ] Academic calendar
- [ ] Current notices
- [ ] Official social media URLs (add to `site.social` in `src/lib/site.ts`)
- [ ] Jana Seva Sangh founding year and office-bearers
- [ ] College magazine issues

## Email setup (needed before going live)

- [ ] Mail account the website sends from (e.g. website@sr-college.com) and its SMTP host/port
- [ ] App password for that account (Gmail / Google Workspace: 2-Step Verification → App passwords)
- [ ] Address(es) that should receive enquiries (`ENQUIRY_TO`), e.g. office and admissions
- [ ] Whether enquirers should get an automatic acknowledgement email (on by default)

## Photos

Current campus photos (public/images/campus/) are stills from the college's promotional video, upscaled for the web.
They are good enough to launch with but are soft at full width. Replace with original photographs when available
(same file names, landscape, at least 2000px wide). Still missing: NSS activity, Annual Day/cultural event on stage,
Sports Day, industrial visit, leadership and faculty portraits. Captions/alt text live in src/lib/images.ts.
