# Deepak Gupta — QA Engineer

Portfolio for fintech QA: UPI, lending, cards, automation, and release checks. Copy comes from the resume and lives in `src/data/`. Date of birth is not published.

## Stack

- [Next.js](https://nextjs.org) App Router and React — static pages, metadata, sitemap, and social image
- TypeScript
- Tailwind CSS
- `next/font` — Fraunces, Source Sans 3, IBM Plex Mono
- Playwright with axe — the site checks its own main paths and accessibility

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test:e2e
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
  app/                 Routes: home, /about, /resume, not-found, sitemap, robots, manifest, social images
    globals.css        Tailwind entry; imports src/styles in cascade order
  components/
    layout/            Header, footer, contact panel, theme toggle, cursor, back to top
    home/              Headline, release gate, practice icons, experience log, public apps
    about/             Chapter scrollspy and section marks
    resume/            Download (print to PDF) button
    not-found/         Route check card
    ui/                Shared pieces: logo mark, in-view trigger
  data/                Site copy, split by page; import everything from "@/data"
    profile.ts         Name, contact details, headlines, navigation
    home.ts            Release gate, practice areas, toolkit, public apps
    experience.ts      Employment history
    about.ts           About chapters and education
    resume.ts          Resume headline and summary; other sections reuse the files above
  lib/site.ts          Site URL, titles, SEO description, and structured data
  lib/og.ts            Shared size and colors for the social images
  styles/              tokens, base, home, about, resume (print), motion, cursor
tests/
  *.spec.ts            One spec per page or feature, plus a11y.spec.ts
  support/helpers.ts   Shared test helpers
public/                Logo and portrait
```

Resume and photo originals sit outside the app in `../source/`.

## Edit the copy

Phone, email, LinkedIn, and headlines live in `src/data/profile.ts`. Homepage sections live in `src/data/home.ts` and `src/data/experience.ts`, and the About page lives in `src/data/about.ts`. Tests import the same data, so most copy edits need no test changes.

Years of experience ("3+", "more than three") are counted from the career start date in `src/lib/career.ts`. Pages rebuild daily, so the number goes up on each anniversary without a redeploy.

The resume at `/resume` prints to a text-based PDF for applicant tracking systems. It has no photo and no date of birth.

## Contact form

The form sends each message to your inbox through [Resend](https://resend.com), with Reply-To set to the visitor. Without a key, it opens the visitor's mail app instead.

1. Sign up at resend.com with the email the messages should reach, then create an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. On Vercel, add it under Settings > Environment Variables, then redeploy.
3. Keep `CONTACT_FROM` on `onboarding@resend.dev` until you verify your own domain in Resend. That sender can only deliver to your own Resend account email.

A hidden trap field, a minimum fill time, length limits, and a per-visitor rate limit keep out most spam.

On Vercel, the sitemap and social cards use the project's production domain automatically. Set `NEXT_PUBLIC_SITE_URL` only when you add a custom domain.

## Deploy

The app is a standard Next.js project and deploys on Vercel, or any host that runs `npm run build`.
