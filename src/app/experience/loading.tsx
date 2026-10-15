import { Skeleton, SkeletonHeader, SkeletonText } from "@/components/ui/skeleton";

export default function ExperienceLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading experience page">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <SkeletonHeader withMetrics={false} />

        {/* Milestones Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-line bg-card/60 p-3.5 space-y-1.5">
              <Skeleton className="h-7 w-20 rounded-sm" />
              <Skeleton className="h-3 w-28 rounded-xs" />
            </div>
          ))}
        </div>

        {/* Experience Timeline Skeleton */}
        <div className="mt-14 space-y-10">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-line bg-card p-6 sm:p-8 space-y-6 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-xs" />
                    <Skeleton className="h-6 w-52 rounded-sm" />
                  </div>
                  <Skeleton className="h-4 w-40 rounded-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-24 rounded-full" />
                  <Skeleton className="h-5 w-28 rounded-full" />
                </div>
              </div>

              {/* Responsibilities list skeleton */}
              <div className="space-y-3">
                <SkeletonText lines={3} lastLineWidth="w-5/6" />
                <SkeletonText lines={3} lastLineWidth="w-3/4" />
              </div>

              {/* Tags / tools */}
              <div className="flex flex-wrap gap-2 pt-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-20 rounded-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
