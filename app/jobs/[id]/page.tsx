import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Briefcase, ExternalLink, MapPin, Clock, GraduationCap } from "lucide-react";
import { jobs } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobActions } from "@/components/jobs/job-actions";
import { JobCard } from "@/components/jobs/job-card";
import { formatSalary, timeAgo } from "@/lib/utils";

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return { title: "Job not found" };
  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  };
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  const similarJobs = jobs
    .filter((j) => j.id !== job.id && j.category === job.category)
    .slice(0, 3);

  return (
    <div className="container py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-line">
                  <Image src={job.companyLogo} alt={`${job.company} logo`} fill className="object-cover" />
                </div>
                <div>
                  <h1 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                    {job.title}
                  </h1>
                  <p className="mt-1 text-muted">{job.company}</p>
                </div>
              </div>
              <span className="font-mono text-lg font-semibold text-ink">
                {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="outline">
                <MapPin className="h-3.5 w-3.5" /> {job.location}
              </Badge>
              <Badge variant="outline">
                <Briefcase className="h-3.5 w-3.5" /> {job.employmentType}
              </Badge>
              <Badge variant="outline">
                <GraduationCap className="h-3.5 w-3.5" /> {job.experienceLevel}
              </Badge>
              <Badge variant="outline">
                <Clock className="h-3.5 w-3.5" /> {timeAgo(job.postedAt)}
              </Badge>
              <Badge>{job.workMode}</Badge>
            </div>

            <div className="mt-6">
              <JobActions job={job} />
            </div>
          </div>

          <section className="mt-8 space-y-8">
            <div>
              <h2 className="font-display text-lg font-semibold">About this role</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{job.description}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold">Responsibilities</h2>
              <ul className="mt-3 space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold">Requirements</h2>
              <ul className="mt-3 space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <Badge key={s} variant="muted">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold">Benefits</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {job.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <h3 className="font-display text-base font-semibold">About {job.company}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{job.companyDescription}</p>
            <Separator className="my-4" />
            <Link
              href={job.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Visit company website
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>

      {similarJobs.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">Similar jobs</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similarJobs.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
