# Shri Ram College of Commerce & Science — website

Institutional website for **Jana Seva Sangh's Shri Ram College of Commerce & Science**, Datta Mandir Road, Bhandup West, Mumbai 400078.

Built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4. Enquiry forms are emailed to the college with Nodemailer. Deploys to Vercel. No database is needed.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the SMTP settings
npm run dev                  # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `SMTP_HOST` | Yes | SMTP server, e.g. `smtp.gmail.com` |
| `SMTP_PORT` | No | `465` (default, SSL) or `587` (STARTTLS) |
| `SMTP_SECURE` | No | `true`/`false`; worked out from the port if blank |
| `SMTP_USER` | Yes | Mail account that sends the emails |
| `SMTP_PASS` | Yes | Its password. For Gmail/Google Workspace use an **App Password** |
| `ENQUIRY_TO` | Yes | Address(es) that receive enquiries, comma-separated |
| `MAIL_FROM` | No | Sender shown on emails (default `"SRCC Website" <SMTP_USER>`) |
| `SEND_AUTO_REPLY` | No | `false` turns off the acknowledgement email to the enquirer |
| `NEXT_PUBLIC_SITE_URL` | No | Public URL for canonical links, sitemap and Open Graph (default `https://sr-college.com`) |

Never commit `.env*` files; only `.env.example` is tracked.

## Deploy to Vercel

1. Push the repository to GitHub and import it in Vercel (framework preset: Next.js — no extra settings).
2. Add the SMTP variables, `ENQUIRY_TO` and `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables**.
3. Deploy. Pages are prerendered; `/api/enquiries/[type]` runs as a Node.js serverless function.

## Enquiry forms

Every enquiry form asks for exactly four things: **full name, email, mobile number and course**.
They post JSON to `/api/enquiries/{type}` and each submission is emailed to `ENQUIRY_TO`:

| Form | Where | Email subject starts with |
|---|---|---|
| `contact` | Contact page | Website enquiry |
| `admission` | Admissions page (`/admissions#enquire`) | Admission enquiry |
| `course` | Every course page (`/courses/[slug]#enquire`) | Course enquiry |

Rules (shared by browser and server, in `src/lib/validation.ts`):

- **Name**: 3–60 characters; letters in any script, single spaces, dots, apostrophes, hyphens; no digits, symbols or "aaaa"-style mashing. Disallowed characters are removed as the person types.
- **Email**: strict format, max 100 characters, lower-cased; temporary inboxes (mailinator, yopmail…) refused; common typos (gmial.com, gmail.co…) caught with a "Did you mean…" hint.
- **Mobile**: Indian mobile only, exactly 10 digits starting 6–9 (+91 / 0 prefix accepted and removed); obvious fakes like 9999999999 refused. Letters cannot be typed.
- **Course**: must be one of the listed courses.
- Any other field sent to the server is rejected.

Also: 10 KB body limit, honeypot field, minimum fill time, per-IP rate limiting, duplicate suppression (same enquiry within 10 minutes), HTML-escaping in emails, and generic error messages (SMTP errors are only logged server-side). The email's **Reply-To** is the enquirer.

There is intentionally **no database and no admin panel**: the college's inbox is the record of enquiries.

## Where content lives

| Content | File |
|---|---|
| Name, address, phones, email, map, social links, navigation | `src/lib/site.ts` |
| Programmes (descriptions, career directions, related) | `src/lib/courses.ts` |
| Departments and faculty | `src/lib/departments.ts` |
| Notices | `src/lib/notices.ts` |
| Page copy | `src/app/**/page.tsx` |

**Photos:** every image slot uses `<Media label="…" />`, which shows a labelled placeholder. Put the photo in `public/images/` and add `src="/images/…"` to that `Media`. Hero slides are defined at the top of `src/app/page.tsx`.

**Videos:** pass `youtubeId="…"` or `mp4="/videos/…"` to `<VideoBlock />`.

**Faculty:** add entries to the `faculty` array of a department in `src/lib/departments.ts` — the "to be supplied" notice is replaced automatically.

See `CONTENT-CHECKLIST.md` for everything the college still needs to supply or confirm before launch.
