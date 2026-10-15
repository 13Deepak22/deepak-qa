import { Skeleton, SkeletonGrid, SkeletonHeader } from "@/components/ui/skeleton";

export default function LearnLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading learning tracks">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header Skeleton */}
        <SkeletonHeader withMetrics={true} />

        {/* Category Filter Pills Skeleton */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full shrink-0" />
          ))}
        </div>

        {/* 3-Column Responsive Track Cards Grid Skeleton */}
        <div className="mt-8 sm:mt-10">
          <SkeletonGrid count={6} columns={3} />
        </div>
      </div>
    </main>
  );
}

