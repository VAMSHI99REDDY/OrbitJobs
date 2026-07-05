"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { jobs } from "@/data/jobs";
import { useSavedJobs } from "@/hooks/use-saved-jobs";
import { JobCard } from "@/components/jobs/job-card";
import { JobCardSkeleton } from "@/components/jobs/job-card-skeleton";
import { EmptyState } from "@/components/jobs/empty-state";
import { Button } from "@/components/ui/button";

export default function SavedJobsPage() {
  const { savedIds, hydrated } = useSavedJobs();
  const savedJobs = jobs.filter((j) => savedIds.includes(j.id));

  return (
    <div className="container py-10">
      <h1 className="font-display text-2xl font-semibold md:text-3xl">Saved jobs</h1>
      <p className="mt-1 text-sm text-muted">
        Jobs you bookmark are stored on this device so you can come back to them anytime.
      </p>

      <div className="mt-8">
        {!hydrated ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </div>
        ) : savedJobs.length === 0 ? (
          <EmptyState
            icon={Bookmark}
            title="No saved jobs yet"
            description="Tap the bookmark icon on any job card to save it here for later."
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {savedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

        {hydrated && savedJobs.length === 0 && (
          <div className="mt-4 text-center">
            <Button asChild variant="link">
              <Link href="/browse-jobs">Go to browse jobs →</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
