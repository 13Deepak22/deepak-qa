import { Skeleton, SkeletonGrid, SkeletonHeader, SkeletonText } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading services page">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <SkeletonHeader withMetrics={false} />

        {/* Stats Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-line bg-card/60 p-3.5 space-y-1.5">
              <Skeleton className="h-7 w-20 rounded-sm" />
              <Skeleton className="h-3 w-28 rounded-xs" />
            </div>
          ))}
        </div>

        {/* 4 Core Services Grid */}
        <div className="mt-12 space-y-6">
          <Skeleton className="h-5 w-44 rounded-xs" />
          <SkeletonGrid count={4} columns={2} />
        </div>


      </div>
    </main>
  );
}

