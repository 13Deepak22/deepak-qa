import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading page content">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24">
        {/* Hero Section Skeleton */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.9fr)] lg:items-start lg:gap-x-14">
          <div className="space-y-6">
            <Skeleton className="h-4 w-32 rounded-xs" />
            <Skeleton className="h-12 sm:h-16 w-11/12 rounded-lg" />
            <SkeletonText lines={3} lastLineWidth="w-3/4" />
            <div className="flex flex-wrap gap-2 pt-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>

            {/* Navigation links grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 max-w-lg">
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Release Gatekeeper Box Skeleton */}
          <div className="rounded-xl border border-line bg-card p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2.5">
                <Skeleton className="h-3.5 w-3.5 rounded-full" />
                <Skeleton className="h-4 w-36 rounded-xs" />
              </div>
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-line/50">
                  <Skeleton className="h-3.5 w-40 rounded-xs" />
                  <Skeleton className="h-3.5 w-16 rounded-xs" />
                </div>
              ))}
            </div>
            <Skeleton className="h-9 w-full rounded-md mt-4" />
          </div>
        </div>

        {/* Impact Metrics Skeleton */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-line pt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-line bg-card p-4 space-y-2">
              <Skeleton className="h-8 w-16 rounded-sm" />
              <Skeleton className="h-3 w-28 rounded-xs" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

