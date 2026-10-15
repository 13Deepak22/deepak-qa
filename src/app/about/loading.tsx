import { Skeleton, SkeletonHeader, SkeletonText } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading about page">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <SkeletonHeader withMetrics={false} />

        {/* Intro Grid: Portrait on left/right + Bio copy */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start">
          <div className="space-y-6">
            <Skeleton className="h-6 w-48 rounded-xs" />
            <SkeletonText lines={4} lastLineWidth="w-4/5" />
            <SkeletonText lines={4} lastLineWidth="w-2/3" />
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-10 w-32 rounded-md" />
              <Skeleton className="h-10 w-36 rounded-md" />
            </div>
          </div>

          {/* Portrait Skeleton Box */}
          <div className="rounded-2xl border border-line bg-card p-4 aspect-4/5 flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
        </div>

        {/* Chapters Skeleton */}
        <div className="mt-16 border-t border-line pt-10 space-y-8">
          <Skeleton className="h-4 w-36 rounded-xs" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-line bg-card p-6 space-y-4">
                <Skeleton className="h-4 w-20 rounded-xs" />
                <Skeleton className="h-6 w-4/5 rounded-sm" />
                <SkeletonText lines={3} lastLineWidth="w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
