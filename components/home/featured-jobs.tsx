import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/data/jobs";
import { JobCard } from "@/components/jobs/job-card";
import { Button } from "@/components/ui/button";

export function FeaturedJobs() {
  const featured = jobs.filter((j) => j.featured).slice(0, 6);

  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary">Handpicked</p>
          <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
            Featured roles this week
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/browse-jobs">
            Browse all jobs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
