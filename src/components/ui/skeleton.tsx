import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "shimmer" | "pulse" | "static";
}

/**
 * Universal Skeleton primitive for layout and content loading states.
 */
export function Skeleton({
  className = "",
  variant = "shimmer",
  ...props
}: SkeletonProps) {
  const variantClass =
    variant === "shimmer"
      ? "skeleton-shimmer"
      : variant === "pulse"
      ? "skeleton-pulse"
      : "";

  return (
    <div
      aria-hidden="true"
      className={`skeleton-box ${variantClass} ${className}`}
      {...props}
    />
  );
}

/**
 * Simulates multiple lines of text with realistic widths.
 */
export function SkeletonText({
  lines = 3,
  className = "",
  lastLineWidth = "w-3/5",
}: {
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}) {
  return (
    <div className={`space-y-2.5 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => {
        const isLast = i === lines - 1;
        const width = isLast ? lastLineWidth : i % 2 === 1 ? "w-11/12" : "w-full";
        return (
          <Skeleton
            key={i}
            className={`h-3.5 ${width} rounded-sm`}
          />
        );
      })}
    </div>
  );
}

/**
 * Simulates a badge / pill.
 */
export function SkeletonBadge({ className = "w-16 h-5" }: { className?: string }) {
  return <Skeleton className={`rounded-full ${className}`} />;
}

/**
 * Standard section / page eyebrow and title header.
 */
export function SkeletonSectionHeader({
  eyebrow = true,
  withSubtitle = true,
  className = "",
}: {
  eyebrow?: boolean;
  withSubtitle?: boolean;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`} aria-hidden="true">
      {eyebrow && <Skeleton className="h-3 w-28 rounded-xs" />}
      <Skeleton className="h-8 sm:h-10 w-2/3 max-w-md rounded-md" />
      {withSubtitle && <Skeleton className="h-4 w-4/5 max-w-lg rounded-xs" />}
    </div>
  );
}

/**
 * Standard page header skeleton (eyebrow, title, description, optional metrics).
 */
export function SkeletonHeader({
  withMetrics = true,
  className = "",
}: {
  withMetrics?: boolean;
  className?: string;
}) {
  return (
    <div className={`pb-8 sm:pb-10 border-b border-line space-y-4 ${className}`} aria-hidden="true">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl w-full">
          <Skeleton className="h-3 w-32 rounded-xs" />
          <Skeleton className="h-9 sm:h-12 w-3/4 max-w-md rounded-md" />
          <Skeleton className="h-4 w-full max-w-lg rounded-xs" />
        </div>

        {withMetrics && (
          <div className="flex items-center gap-3 shrink-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="border border-line rounded-lg p-3 w-20 space-y-1.5 bg-card/60"
              >
                <Skeleton className="h-2 w-10 rounded-xs" />
                <Skeleton className="h-6 w-12 rounded-sm" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Generic Card skeleton with icon, title, description, and footer.
 */
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-line bg-card p-6 shadow-xs flex flex-col justify-between space-y-5 ${className}`}
      aria-hidden="true"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-11 w-11 rounded-lg" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-3 w-24 rounded-xs" />
        <Skeleton className="h-6 w-4/5 rounded-sm" />
        <SkeletonText lines={2} lastLineWidth="w-4/5" />
      </div>

      <div className="pt-4 border-t border-line/70 flex items-center justify-between">
        <Skeleton className="h-3 w-20 rounded-xs" />
        <Skeleton className="h-3 w-16 rounded-xs" />
      </div>
    </div>
  );
}

/**
 * Responsive Grid of SkeletonCards.
 */
export function SkeletonGrid({
  count = 6,
  columns = 3,
  className = "",
}: {
  count?: number;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const colClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colClass} gap-5 sm:gap-6 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Home Hero Section
 */
export function SkeletonHero({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-6 ${className}`} aria-hidden="true">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-32 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <div className="space-y-2.5 max-w-xl">
        <Skeleton className="h-11 sm:h-14 w-full rounded-md" />
        <Skeleton className="h-11 sm:h-14 w-3/4 rounded-md" />
      </div>
      <SkeletonText lines={3} lastLineWidth="w-4/5" className="max-w-xl" />
      <div className="flex flex-wrap gap-3 pt-2">
        <Skeleton className="h-11 w-36 rounded-md" />
        <Skeleton className="h-11 w-32 rounded-md" />
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-line/60">
        <Skeleton className="h-3 w-20 rounded-xs" />
        <div className="flex items-center gap-2.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-6 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Dedicated Skeleton for Release Gatekeeper Box
 */
export function SkeletonReleaseGate({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-line bg-card p-6 shadow-xs space-y-5 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-36 rounded-xs" />
        </div>
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-line/40">
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-xs" />
              <Skeleton className="h-3.5 w-36 rounded-xs" />
            </div>
            <Skeleton className="h-3.5 w-16 rounded-xs" />
          </div>
        ))}
      </div>
      <Skeleton className="h-10 w-full rounded-md mt-4" />
    </div>
  );
}

/**
 * Dedicated Skeleton for Test Sandbox Component
 */
export function SkeletonSandbox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-line bg-card p-6 shadow-xs space-y-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-line pb-3">
        <Skeleton className="h-4 w-40 rounded-xs" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-24 rounded-xs" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-28 rounded-xs" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </div>
      <Skeleton className="h-10 w-full rounded-md mt-2" />
    </div>
  );
}

/**
 * Dedicated Skeleton for Metrics Ribbon
 */
export function SkeletonMetrics({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-line bg-card p-4 space-y-2">
          <Skeleton className="h-8 w-20 rounded-sm" />
          <Skeleton className="h-3 w-28 rounded-xs" />
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Public Apps Grid
 */
export function SkeletonPublicApps({ count = 6, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-card p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <Skeleton className="h-5 w-3/4 rounded-sm" />
            <SkeletonText lines={2} lastLineWidth="w-4/5" />
          </div>
          <div className="pt-3 border-t border-line/60 flex items-center justify-between">
            <div className="flex gap-1.5">
              <Skeleton className="h-4 w-12 rounded-xs" />
              <Skeleton className="h-4 w-14 rounded-xs" />
            </div>
            <Skeleton className="h-4 w-16 rounded-xs" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Enterprise Portals
 */
export function SkeletonPortals({ count = 4, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-48 rounded-sm" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
          <SkeletonText lines={2} lastLineWidth="w-3/4" />
          <div className="flex flex-wrap gap-2 pt-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Experience Timeline
 */
export function SkeletonExperience({ count = 3, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`space-y-8 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-line bg-card p-6 sm:p-8 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
            <div className="space-y-1.5">
              <Skeleton className="h-6 w-56 rounded-sm" />
              <Skeleton className="h-4 w-40 rounded-xs" />
            </div>
            <Skeleton className="h-5 w-32 rounded-full" />
          </div>
          <SkeletonText lines={3} lastLineWidth="w-2/3" />
          <div className="flex flex-wrap gap-2 pt-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <Skeleton key={j} className="h-5 w-18 rounded-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Skills Grid
 */
export function SkeletonSkills({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-5 w-32 rounded-xs" />
          </div>
          <div className="space-y-2 pt-2">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="flex items-center justify-between py-1 border-b border-line/40">
                <Skeleton className="h-3.5 w-24 rounded-xs" />
                <Skeleton className="h-3 w-16 rounded-xs" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Services Grid
 */
export function SkeletonServices({ count = 4, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-card p-6 sm:p-7 space-y-4">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-6 w-48 rounded-sm" />
          <SkeletonText lines={3} lastLineWidth="w-4/5" />
          <div className="space-y-2 pt-3 border-t border-line/50">
            <Skeleton className="h-3.5 w-full rounded-xs" />
            <Skeleton className="h-3.5 w-5/6 rounded-xs" />
            <Skeleton className="h-3.5 w-4/5 rounded-xs" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Dedicated Skeleton for Resume View
 */
export function SkeletonResume({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-4xl mx-auto rounded-xl border border-line bg-card p-6 sm:p-10 space-y-8 ${className}`} aria-hidden="true">
      {/* Resume Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <Skeleton className="h-10 w-64 rounded-md" />
        <Skeleton className="h-4 w-48 rounded-xs" />
        <div className="flex flex-wrap gap-4 pt-2">
          <Skeleton className="h-3 w-32 rounded-xs" />
          <Skeleton className="h-3 w-36 rounded-xs" />
          <Skeleton className="h-3 w-40 rounded-xs" />
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        <Skeleton className="h-5 w-32 rounded-xs" />
        <SkeletonText lines={3} lastLineWidth="w-3/4" />
      </div>

      {/* Experience */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-44 rounded-xs" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="pl-4 border-l-2 border-line space-y-2 py-1">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-48 rounded-xs" />
              <Skeleton className="h-3.5 w-24 rounded-xs" />
            </div>
            <SkeletonText lines={2} lastLineWidth="w-4/5" />
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <Skeleton className="h-5 w-36 rounded-xs" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Full documentation reader skeleton (DocsHeaderBar, Sidebar, Main Document Content, Code Snippet, and Table of Contents).
 */
export function SkeletonDocViewer({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full min-h-[75vh] ${className}`} aria-hidden="true">
      {/* Document Top Bar */}
      <div className="border-b border-line bg-card/60 px-4 py-3 sm:px-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-7 w-7 rounded-md" />
            <Skeleton className="h-4 w-32 rounded-xs" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar Skeleton */}
          <div className="hidden lg:block w-64 shrink-0 space-y-6">
            <Skeleton className="h-9 w-full rounded-md" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-24 rounded-xs" />
              <div className="space-y-2 pl-2">
                <Skeleton className="h-7 w-full rounded-md" />
                <Skeleton className="h-7 w-5/6 rounded-md" />
                <Skeleton className="h-7 w-4/5 rounded-md" />
                <Skeleton className="h-7 w-full rounded-md" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-4 w-28 rounded-xs" />
              <div className="space-y-2 pl-2">
                <Skeleton className="h-7 w-full rounded-md" />
                <Skeleton className="h-7 w-3/4 rounded-md" />
                <Skeleton className="h-7 w-5/6 rounded-md" />
              </div>
            </div>
          </div>

          {/* Central Main Document Skeleton */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Breadcrumb & Tag */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16 rounded-xs" />
              <Skeleton className="h-4 w-4 rounded-xs" />
              <Skeleton className="h-4 w-24 rounded-xs" />
              <Skeleton className="h-5 w-20 rounded-full ml-auto" />
            </div>

            {/* Document Title */}
            <Skeleton className="h-10 sm:h-12 w-4/5 rounded-md" />

            {/* Description Paragraph */}
            <SkeletonText lines={3} lastLineWidth="w-3/4" />

            {/* Code Block Skeleton */}
            <div className="rounded-xl border border-line bg-card overflow-hidden">
              <div className="border-b border-line px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                </div>
                <Skeleton className="h-4 w-20 rounded-xs" />
              </div>
              <div className="p-4 space-y-2.5 font-mono">
                <Skeleton className="h-3.5 w-1/3 rounded-xs" />
                <Skeleton className="h-3.5 w-2/3 rounded-xs" />
                <Skeleton className="h-3.5 w-1/2 rounded-xs" />
                <Skeleton className="h-3.5 w-4/5 rounded-xs" />
                <Skeleton className="h-3.5 w-3/5 rounded-xs" />
              </div>
            </div>

            {/* Sub-section Heading & Text */}
            <div className="space-y-3 pt-4">
              <Skeleton className="h-7 w-1/2 rounded-md" />
              <SkeletonText lines={4} lastLineWidth="w-2/3" />
            </div>

            {/* Callout box skeleton */}
            <div className="rounded-lg border border-line/80 bg-paper-deep/40 p-4 space-y-2">
              <Skeleton className="h-4 w-28 rounded-xs" />
              <Skeleton className="h-3.5 w-full rounded-xs" />
              <Skeleton className="h-3.5 w-4/5 rounded-xs" />
            </div>

            {/* Bottom Nav Buttons */}
            <div className="pt-8 border-t border-line flex items-center justify-between">
              <Skeleton className="h-10 w-28 rounded-lg" />
              <Skeleton className="h-10 w-28 rounded-lg" />
            </div>
          </div>

          {/* Right TOC Skeleton */}
          <div className="hidden xl:block w-48 shrink-0 space-y-3">
            <Skeleton className="h-3.5 w-24 rounded-xs mb-4" />
            <Skeleton className="h-3 w-full rounded-xs" />
            <Skeleton className="h-3 w-5/6 rounded-xs pl-2" />
            <Skeleton className="h-3 w-4/5 rounded-xs pl-2" />
            <Skeleton className="h-3 w-full rounded-xs" />
            <Skeleton className="h-3 w-3/4 rounded-xs pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
