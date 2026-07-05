import Link from "next/link";
import { Orbit, Github, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "For candidates",
    links: [
      { label: "Browse jobs", href: "/browse-jobs" },
      { label: "Saved jobs", href: "/saved-jobs" },
      { label: "Career advice", href: "/about" },
    ],
  },
  {
    title: "For companies",
    links: [
      { label: "Post a job", href: "/post-job" },
      { label: "Pricing", href: "/about" },
      { label: "Why OrbitJobs", href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/about" },
      { label: "Privacy", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Orbit className="h-4.5 w-4.5" />
            </span>
            OrbitJobs
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            The job board built for product and engineering talent — clear salaries,
            real roles, no noise.
          </p>
          <div className="mt-5 flex gap-3 text-muted">
            <Link href="#" aria-label="OrbitJobs on Twitter" className="hover:text-primary">
              <Twitter className="h-4.5 w-4.5" />
            </Link>
            <Link href="#" aria-label="OrbitJobs on LinkedIn" className="hover:text-primary">
              <Linkedin className="h-4.5 w-4.5" />
            </Link>
            <Link href="#" aria-label="OrbitJobs on GitHub" className="hover:text-primary">
              <Github className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-ink">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} OrbitJobs. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}
