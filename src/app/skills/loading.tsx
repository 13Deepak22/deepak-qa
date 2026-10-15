import { Skeleton, SkeletonHeader } from "@/components/ui/skeleton";

export default function SkillsLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading technical toolkit">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:py-16 lg:py-24">
        {/* Eyebrow & Header */}
        <SkeletonHeader withMetrics={false} />

        {/* Stats Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-line bg-card/60 p-3.5 space-y-1.5">
              <Skeleton className="h-7 w-16 rounded-sm" />
              <Skeleton className="h-3 w-28 rounded-xs" />
            </div>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-line bg-card p-6 space-y-5 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <Skeleton className="h-5 w-40 rounded-xs" />
                <Skeleton className="h-4 w-12 rounded-full" />
              </div>

              {/* Skill pills grid */}
              <div className="flex flex-wrap gap-2.5">
                {Array.from({ length: 8 }).map((_, j) => (
                  <Skeleton
                    key={j}
                    className="h-8 w-24 rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

