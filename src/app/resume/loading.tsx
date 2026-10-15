import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function ResumeLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading resume">
      <div className="mx-auto max-w-4xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Header Bar with Download Action Skeletons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-28 rounded-xs" />
            <Skeleton className="h-8 w-60 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-28 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </div>

        {/* Printable Resume Sheet Skeleton */}
        <div className="mt-8 rounded-xl border border-line bg-card p-8 sm:p-12 shadow-sm space-y-8">
          {/* Header row */}
          <div className="space-y-3 border-b border-line pb-6">
            <Skeleton className="h-10 w-64 rounded-md" />
            <Skeleton className="h-4 w-48 rounded-xs" />
            <div className="flex flex-wrap gap-4 pt-2">
              <Skeleton className="h-3.5 w-36 rounded-xs" />
              <Skeleton className="h-3.5 w-32 rounded-xs" />
              <Skeleton className="h-3.5 w-28 rounded-xs" />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-32 rounded-xs" />
            <SkeletonText lines={3} lastLineWidth="w-4/5" />
          </div>

          {/* Core Competencies */}
          <div className="space-y-3 border-t border-line pt-6">
            <Skeleton className="h-4 w-36 rounded-xs" />
            <div className="flex flex-wrap gap-2 pt-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-24 rounded-md" />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6 border-t border-line pt-6">
            <Skeleton className="h-4 w-40 rounded-xs" />
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-52 rounded-xs" />
                  <Skeleton className="h-4 w-28 rounded-xs" />
                </div>
                <Skeleton className="h-4 w-36 rounded-xs" />
                <SkeletonText lines={3} lastLineWidth="w-5/6" />
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3 border-t border-line pt-6">
            <Skeleton className="h-4 w-28 rounded-xs" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-60 rounded-xs" />
              <Skeleton className="h-4 w-20 rounded-xs" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
