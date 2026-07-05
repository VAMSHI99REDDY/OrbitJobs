"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, MapPin } from "lucide-react";
import { Job } from "@/types/job";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSavedJobs } from "@/hooks/use-saved-jobs";
import { toast } from "@/hooks/use-toast";
import { cn, formatSalary, timeAgo } from "@/lib/utils";

const modeAccent: Record<Job["workMode"], string> = {
  Remote: "bg-primary",
  Hybrid: "bg-amber",
  Onsite: "bg-primary-dark",
};

const modeBadge: Record<Job["workMode"], "default" | "amber" | "outline"> = {
  Remote: "default",
  Hybrid: "amber",
  Onsite: "outline",
};

export function JobCard({ job }: { job: Job }) {
  const { isSaved, toggleSaved, hydrated } = useSavedJobs();
  const saved = hydrated && isSaved(job.id);

  return (
    <div className="group relative flex overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
      <span className={cn("w-1.5 shrink-0", modeAccent[job.workMode])} aria-hidden />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/jobs/${job.id}`} className="flex items-start gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-line bg-bg">
              <Image src={job.companyLogo} alt={`${job.company} logo`} fill className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold leading-tight text-ink group-hover:text-primary">
                {job.title}
              </h3>
              <p className="text-sm text-muted">{job.company}</p>
            </div>
          </Link>

          <button
            aria-label={saved ? "Remove from saved jobs" : "Save job"}
            aria-pressed={saved}
            onClick={() => {
              const isNowSaved = toggleSaved(job.id);
              toast({
                title: isNowSaved ? "Job saved" : "Removed from saved jobs",
                description: `${job.title} at ${job.company}`,
                variant: isNowSaved ? "success" : "default",
              });
            }}
            className="shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-line/60 hover:text-primary"
          >
            <Bookmark className={cn("h-4.5 w-4.5", saved && "fill-primary text-primary")} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {job.location}
          </span>
          <span aria-hidden>•</span>
          <span>{timeAgo(job.postedAt)}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {job.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="muted">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={modeBadge[job.workMode]}>{job.workMode}</Badge>
            <Badge variant="outline">{job.employmentType}</Badge>
          </div>
          <span className="font-mono text-sm font-medium text-ink">
            {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
          </span>
        </div>

        <Button asChild size="sm" variant="secondary" className="mt-1 w-full">
          <Link href={`/jobs/${job.id}`}>View job</Link>
        </Button>
      </div>
    </div>
  );
}
