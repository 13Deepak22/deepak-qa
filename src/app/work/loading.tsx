import { Skeleton, SkeletonGrid, SkeletonHeader } from "@/components/ui/skeleton";

export default function WorkLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading selected work">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <SkeletonHeader withMetrics={false} />

        {/* Stats Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-line bg-card/60 p-3.5 space-y-1.5">
              <Skeleton className="h-7 w-16 rounded-sm" />
              <Skeleton className="h-3 w-24 rounded-xs" />
            </div>
          ))}
        </div>

        {/* Public Apps Section Skeleton */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="h-3 w-28 rounded-xs" />
              <Skeleton className="h-6 w-56 rounded-sm" />
            </div>
            <Skeleton className="h-4 w-20 rounded-xs" />
          </div>

          <SkeletonGrid count={6} columns={3} />
        </div>

        {/* Enterprise Portals Section Skeleton */}
        <div className="mt-16 border-t border-line pt-10 space-y-6">
          <div className="space-y-1">
            <Skeleton className="h-3 w-32 rounded-xs" />
            <Skeleton className="h-6 w-64 rounded-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-line bg-card p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-40 rounded-xs" />
                  <Skeleton className="h-4 w-16 rounded-full" />
                </div>
                <Skeleton className="h-3.5 w-full rounded-xs" />
                <Skeleton className="h-3.5 w-4/5 rounded-xs" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
