# OrbitJobs

## Project Overview

OrbitJobs is a modern, production-ready job board web application built to demonstrate clean architecture, polished user interfaces, and robust deployment pipelines. Developed with Next.js 15, React 19, and TypeScript, the application serves as a comprehensive showcase of modern frontend engineering practices. It features real-time search, multi-facet filtering, responsive design, and seamless integration with continuous deployment workflows.

**Live Demo:** [https://job-board-nine-rust.vercel.app](https://job-board-nine-rust.vercel.app)  
**GitHub Repository:** [https://github.com/VAMSHI99REDDY/OrbitJobs](https://github.com/VAMSHI99REDDY/OrbitJobs)

---

## Screenshots

| Home | Browse Jobs | Job Details |
| :---: | :---: | :---: |
| ![Home](docs/screenshot-home.png) | ![Browse Jobs](docs/screenshot-browse.png) | ![Job Details](docs/screenshot-details.png) |

---

## Features

- **Dynamic Homepage:** Includes a hero section with an animated role search, a live market-stats ticker, featured job listings, popular categories, top hiring companies, and user testimonials.
- **Robust Job Discovery:** Offers real-time search and multi-facet filtering by job type, experience level, location, salary range, work mode, and company. Includes sorting capabilities (latest, highest salary, most relevant) with optimized loading states.
- **Comprehensive Job Details:** Provides a full breakdown of the role including responsibilities, requirements, skills, benefits, and company information. Supports interactive actions to apply, save, and share jobs, alongside intelligent similar-job suggestions.
- **Saved Jobs Management:** Allows users to bookmark and remove job listings, with data persisted locally via `localStorage`.
- **Job Submission Workflow:** Features a validated "Post a Job" submission form, temporarily storing submissions to `localStorage`.
- **Company Information:** Features an "About" page detailing the platform's mission, vision, feature highlights, team overview, and a contact form.
- **Theming:** Full support for dark and light modes using `next-themes`.

---

## Additional Highlights

- **Responsive Design:** Engineered with a mobile-first approach, ensuring a seamless user experience across all device sizes.
- **Accessibility:** Built with semantic HTML landmarks, visible focus states, `prefers-reduced-motion` support, and properly labeled form controls to meet web accessibility standards.
- **SEO Optimization:** Implements dynamic metadata generation per route utilizing the Next.js Metadata API for improved search engine visibility.
- **Reusable Components:** Utilizes a highly modular component architecture with Radix primitives and Tailwind CSS for scalable and maintainable UI development.
- **Performance:** Leverages Next.js App Router for optimized static generation and server-side rendering, ensuring fast initial page loads and smooth client-side transitions.
- **CI/CD Pipeline:** Enforces code quality and automated deployment through strict GitHub Actions and Vercel integrations.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix primitives + CVA)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theming:** next-themes
- **Tooling:** ESLint, Prettier (with `prettier-plugin-tailwindcss`)

---

## Folder Structure

```text
job-board/
├── app/                     # App Router pages & layouts
│   ├── about/
│   ├── browse-jobs/
│   ├── jobs/[id]/
│   ├── post-job/
│   ├── saved-jobs/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css          # Global styles & variables
├── components/
│   ├── ui/                  # Reusable UI primitives (buttons, cards, etc.)
│   ├── layout/              # Navbar, Footer
│   ├── home/                # Homepage-specific components
│   └── jobs/                # Job listing components (cards, filters, etc.)
├── data/
│   └── jobs.ts              # Sample dataset of job listings and companies
├── hooks/
│   ├── use-saved-jobs.ts    # Custom hook for localStorage persistence
│   └── use-toast.ts         # Custom hook for notifications
├── lib/
│   └── utils.ts             # Shared utilities (formatting, styling, etc.)
├── types/
│   └── job.ts               # TypeScript interfaces and types
├── public/                  # Static assets and images
├── .github/workflows/       # GitHub Actions CI/CD configurations
└── README.md
```

---

## Installation & Setup

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or another package manager

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/VAMSHI99REDDY/OrbitJobs.git
   cd job-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Commands

- `npm run lint` — Run ESLint to analyze code quality.
- `npm run build` — Create an optimized production build.
- `npm run start` — Serve the production build locally.

---

## Deployment

The application is configured for zero-downtime automated deployments via Vercel.

The deployment workflow is fully automated through GitHub integration:
1. Pushing code to the `main` branch on GitHub automatically triggers a new build on Vercel.
2. Vercel automatically detects the Next.js framework, installs dependencies, and executes the production build process.
3. Upon a successful build, Vercel deploys the application and updates the live production URL.

---

## Continuous Integration / Continuous Deployment (CI/CD)

The project enforces code quality and structural integrity using GitHub Actions. The `.github/workflows/ci.yml` pipeline runs automatically on every push and pull request to the `main` branch. 

The pipeline performs the following steps:
1. Checks out the latest repository code.
2. Installs project dependencies using a clean installation (`npm ci`).
3. Executes static code analysis (`npm run lint`) to catch formatting and syntax errors.
4. Compiles a production build (`npm run build`) to ensure type safety and build validity.

This workflow guarantees that broken code or type errors cannot be merged silently into the main branch.

---

## AI Assistance

Artificial Intelligence tools were utilized responsibly during the development of this project to enhance productivity. AI was leveraged for:
- Initial architecture and folder-structure planning.
- Structuring and drafting project documentation.
- Assisting with the implementation of UI components and React hooks.
- Generating realistic sample data for job listings and company profiles.

All AI-generated code and content were rigorously reviewed, refactored, and validated by the developer to ensure correctness, consistency, and adherence to industry best practices.

---

## Future Improvements

- Migrate `localStorage` persistence (for saved jobs and job submissions) to a secure backend database (e.g., PostgreSQL or Supabase) paired with user authentication.
- Integrate a live API to fetch real-world company and job data dynamically.
- Implement an applicant tracking dashboard for users to manage their submitted job postings.
- Introduce automated testing, including unit tests (Vitest/React Testing Library) and end-to-end tests (Playwright).
- Implement pagination or infinite scrolling within the "Browse Jobs" view to handle larger datasets efficiently.

---

## License

This project is licensed under the MIT License — free to use for learning, portfolio development, or assessment purposes.

---

## Author

**Vamshi Reddy**  
Frontend Engineer  
[GitHub Profile](https://github.com/VAMSHI99REDDY)
