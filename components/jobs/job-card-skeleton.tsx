import { Skeleton } from "@/components/ui/skeleton";

export function JobCardSkeleton() {
  return (
    <div className="flex overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
      <Skeleton className="w-1.5 shrink-0 rounded-none" />
      <div className="flex-1 space-y-4 p-5">
        <div className="flex items-start gap-3">
          <Skeleton className="h-11 w-11 rounded-xl" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-3 w-2/3" />
        <div className="flex gap-1.5">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}
