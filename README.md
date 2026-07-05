# OrbitJobs — AI-Powered Job Board

A modern, production-ready job board web application built with Next.js 15, React 19,
and TypeScript. OrbitJobs demonstrates clean architecture, polished UI/UX, accessibility,
and deployment readiness — built as a portfolio-quality showcase project.

**Live demo:** _add your Vercel URL here after deploying_

---

## Screenshots

> Add screenshots here after running the app locally.

| Home | Browse Jobs | Job Details |
| --- | --- | --- |
| `docs/screenshot-home.png` | `docs/screenshot-browse.png` | `docs/screenshot-details.png` |

---

## Features

- **Home** — hero with animated role search, live stats ticker, featured jobs,
  popular categories, top companies, testimonials, and a call-to-action.
- **Browse Jobs** — real-time search, multi-facet filtering (job type, experience,
  location, salary range, work mode, company), and sorting (latest, highest salary,
  most relevant), with loading skeletons and empty states.
- **Job Details** — full role breakdown (responsibilities, requirements, skills,
  benefits, company info), apply/save/share actions, and similar-job suggestions.
- **Saved Jobs** — bookmark and remove jobs, persisted to `localStorage`.
- **Post a Job** — validated submission form, stored to `localStorage`.
- **About** — mission, vision, feature highlights, team, and contact form.
- **Dark / light mode** via `next-themes`.
- Responsive, mobile-first layout with a distinctive visual identity (see Design
  Notes below).
- Accessible: visible focus states, semantic landmarks, `prefers-reduced-motion`
  support, labeled form controls.
- SEO metadata per route via the Next.js Metadata API.

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)-style components (Radix primitives + CVA)
- [Lucide React](https://lucide.dev/) icons
- [Framer Motion](https://www.framer.com/motion/) animations
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

---

## Design Notes

The visual identity is deliberately distinct from generic AI-generated defaults:

- **Palette** — electric violet primary (`#4F3DF5`), deep navy hero background
  (`#12153D`), warm amber accent for salary/CTA emphasis (`#FFB648`), on a cool
  off-white surface.
- **Type** — Space Grotesk for display/headings, Inter for body copy, IBM Plex
  Mono for salary figures and the market-stats ticker.
- **Signature element** — job cards carry a colored left accent bar keyed to
  work mode (Remote / Hybrid / Onsite), and the hero features a cycling,
  animated role search that previews real listings on the site.

---

## Folder Structure

```
job-board/
├── app/                     # App Router pages & layouts
│   ├── about/
│   ├── browse-jobs/
│   ├── jobs/[id]/
│   ├── post-job/
│   ├── saved-jobs/
│   ├── layout.tsx
│   ├── page.tsx             # Home
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── ui/                  # shadcn/ui-style primitives (button, card, ...)
│   ├── layout/               # Navbar, Footer
│   ├── home/                 # Hero, Stats, FeaturedJobs, Categories, ...
│   └── jobs/                 # JobCard, JobFiltersPanel, JobSort, ...
├── data/
│   └── jobs.ts               # 25 sample job listings + companies/testimonials
├── hooks/
│   ├── use-saved-jobs.ts     # localStorage-backed bookmarks
│   └── use-toast.ts
├── lib/
│   └── utils.ts               # cn(), formatSalary(), timeAgo(), slugify()
├── types/
│   └── job.ts
├── public/
├── .github/workflows/ci.yml   # Lint + build on push/PR
└── README.md
```

---

## Installation

```bash
git clone <your-repo-url>
cd job-board
npm install
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build Commands

```bash
npm run lint     # ESLint
npm run build    # Production build
npm run start    # Serve the production build locally
```

---

## Deployment

This project is pre-configured for zero-config deployment on
[Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel auto-detects Next.js — no environment variables or build settings
   are required.

---

## GitHub Actions CI/CD

`.github/workflows/ci.yml` runs on every push and pull request to `main`:

1. Checks out the repository
2. Installs dependencies (`npm ci`)
3. Runs ESLint (`npm run lint`)
4. Builds the project (`npm run build`)

The workflow fails the run if any step fails, so broken code can't merge silently.

---

## AI Tools Used

This project was scaffolded and implemented with the assistance of **Claude**
(Anthropic), used for:

- Architecture and folder-structure planning
- Component implementation (UI primitives, page composition, hooks)
- Sample data generation for the 25 job listings
- Design-token planning (palette, type, layout) and accessibility review
- Documentation (this README)

All code was reviewed for correctness and consistency as part of the build.

---

## Future Improvements

- Replace `localStorage` persistence (saved jobs, job submissions) with a real
  backend (e.g. Supabase/Postgres) and authentication.
- Add real company/job data via an API integration.
- Add applicant tracking for the Post a Job flow (dashboard for posted roles).
- Add end-to-end tests (Playwright) and unit tests (Vitest/React Testing Library).
- Add pagination or infinite scroll to Browse Jobs for larger datasets.
- Internationalization (i18n) for non-English markets.

---

## License

MIT — free to use for learning, portfolio, or assessment purposes.
