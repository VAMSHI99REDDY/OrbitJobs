"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, SearchX } from "lucide-react";
import { jobs as allJobs, companies as allCompanies } from "@/data/jobs";
import type { JobFilters, SortOption } from "@/types/job";
import { JobCard } from "@/components/jobs/job-card";
import { JobCardSkeleton } from "@/components/jobs/job-card-skeleton";
import { EmptyState } from "@/components/jobs/empty-state";
import { JobFiltersPanel, MAX_SALARY } from "@/components/jobs/job-filters";
import { JobSort } from "@/components/jobs/job-sort";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const emptyFilters: JobFilters = {
  query: "",
  location: "",
  employmentType: [],
  workMode: [],
  experienceLevel: [],
  company: [],
  salaryMin: 0,
  salaryMax: MAX_SALARY,
};

export function BrowseJobsClient() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = React.useState<JobFilters>(emptyFilters);
  const [sort, setSort] = React.useState<SortOption>("relevant");
  const [loading, setLoading] = React.useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  React.useEffect(() => {
    const q = searchParams.get("q") ?? "";
    const location = searchParams.get("location") ?? "";
    const company = searchParams.get("company");
    const category = searchParams.get("category");
    setFilters((f) => ({
      ...f,
      query: q,
      location,
      company: company ? [company] : f.company,
      ...(category ? { query: f.query || category } : {}),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(id);
  }, [filters, sort]);

  const filtered = React.useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const loc = filters.location.trim().toLowerCase();

    let result = allJobs.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q)) ||
        job.category.toLowerCase().includes(q);

      const matchesLocation =
        !loc ||
        job.location.toLowerCase().includes(loc) ||
        (loc === "remote" && job.workMode === "Remote");

      const matchesType =
        filters.employmentType.length === 0 || filters.employmentType.includes(job.employmentType);

      const matchesMode = filters.workMode.length === 0 || filters.workMode.includes(job.workMode);

      const matchesExperience =
        filters.experienceLevel.length === 0 || filters.experienceLevel.includes(job.experienceLevel);

      const matchesCompany = filters.company.length === 0 || filters.company.includes(job.company);

      const matchesSalary = job.salaryMax >= filters.salaryMin && job.salaryMin <= filters.salaryMax;

      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesMode &&
        matchesExperience &&
        matchesCompany &&
        matchesSalary
      );
    });

    if (sort === "latest") {
      result = [...result].sort(
        (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
      );
    } else if (sort === "salary") {
      result = [...result].sort((a, b) => b.salaryMax - a.salaryMax);
    } else {
      result = [...result].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }

    return result;
  }, [filters, sort]);

  const activeFilterCount =
    filters.employmentType.length +
    filters.workMode.length +
    filters.experienceLevel.length +
    filters.company.length +
    (filters.location ? 1 : 0) +
    (filters.salaryMin > 0 || filters.salaryMax < MAX_SALARY ? 1 : 0);

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-semibold md:text-3xl">Browse jobs</h1>
        <p className="mt-1 text-sm text-muted">
          {filtered.length} role{filtered.length === 1 ? "" : "s"} matching your search
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={filters.query}
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
          placeholder="Search by title, skill, or company"
          className="flex-1"
        />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
                {activeFilterCount}
              </span>
            )}
          </Button>
          <JobSort value={sort} onChange={setSort} />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-line bg-surface p-5 shadow-soft">
            <JobFiltersPanel
              filters={filters}
              onChange={setFilters}
              companies={allCompanies.map((c) => c.name)}
              onReset={() => setFilters(emptyFilters)}
            />
          </div>
        </aside>

        <div>
          {loading ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={SearchX}
              title="No jobs match your filters"
              description="Try widening your salary range, clearing a filter, or searching a different keyword."
              actionLabel="Reset filters"
              onAction={() => setFilters(emptyFilters)}
            />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <JobFiltersPanel
            filters={filters}
            onChange={setFilters}
            companies={allCompanies.map((c) => c.name)}
            onReset={() => setFilters(emptyFilters)}
          />
          <Button className="mt-6 w-full" onClick={() => setMobileFiltersOpen(false)}>
            Show {filtered.length} results
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
