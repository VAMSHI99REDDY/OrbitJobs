import { Suspense } from "react";
import type { Metadata } from "next";
import { BrowseJobsClient } from "@/components/jobs/browse-jobs-client";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Browse jobs",
  description:
    "Search thousands of engineering, design, product, and data roles with transparent salaries and real-time filters.",
};

export default function BrowseJobsPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-10">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="mt-4 h-11 w-full" />
        </div>
      }
    >
      <BrowseJobsClient />
    </Suspense>
  );
}
