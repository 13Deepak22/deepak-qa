import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RcaCaseStudy } from "@/components/home/rca-case-study";
import { profile } from "@/data";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: "Defect Investigation & Root Cause Analysis (RCA)",
    description:
      "Deep-dive fintech defect investigation by Deepak Gupta: Tracing a double-debit race condition under network jitter in CredMe LMS, isolated and prevented before production.",
    alternates: { canonical: "/rca" },
    openGraph: {
      title: `Defect Investigation & RCA — ${siteTitleSuffix}`,
      description:
        "Deep-dive fintech defect investigation: Tracing a double-debit race condition under network jitter in CredMe LMS, isolated and prevented before production.",
      url: "/rca",
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} RCA Case Study` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Defect Investigation & RCA — ${siteTitleSuffix}`,
      description:
        "Deep-dive fintech defect investigation: Tracing a double-debit race condition under network jitter in CredMe LMS, isolated and prevented before production.",
      images: ["/opengraph-image"],
    },
  };
}

export default function RcaPage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Top Breadcrumb */}
        <div className="enter enter-1">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted hover:text-pass uppercase transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to portfolio</span>
          </Link>
        </div>
      </div>

      {/* The full RCA Investigation & Interactive Test Runner */}
      <RcaCaseStudy />

      {/* Deep-dive Technical Summary & Call to Action */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-28">
        <div className="enter enter-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-line pt-12">
          <div className="border border-line bg-card p-5">
            <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase block">
              01 · Discovery Method
            </span>
            <h3 className="mt-2 font-serif text-lg font-medium text-ink">
              Exploratory Latency Conditioning
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Tested on 2G/3G throttled network profiles with 4,500ms artificial gateway response delays, reproducing asynchronous webhook vs. client tap overlaps.
            </p>
          </div>

          <div className="border border-line bg-card p-5">
            <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase block">
              02 · Root Cause
            </span>
            <h3 className="mt-2 font-serif text-lg font-medium text-ink">
              Application Memory Race
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Backend verified idempotency in application RAM rather than holding a row-level database lock, allowing concurrent worker threads to both evaluate state as PENDING.
            </p>
          </div>

          <div className="border border-line bg-card p-5">
            <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase block">
              03 · Automated Prevention
            </span>
            <h3 className="mt-2 font-serif text-lg font-medium text-ink">
              Release Gate Concurrency Suite
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Automated POM suite dispatches 5 simultaneous duplicate webhook payloads to enforce database UNIQUE constraints before release sign-off.
            </p>
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="enter enter-5 mt-12 flex flex-col gap-6 border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
              Release Assurance
            </span>
            <h3 className="mt-1 font-serif text-2xl tracking-tight text-ink">
              Need P0/P1 defect prevention on your releases?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Connect with Deepak to discuss manual exploratory, API concurrency, and mobile QA strategies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/skills"
              className="press border border-line bg-paper px-4 py-2.5 text-sm text-ink hover:border-pass hover:text-pass"
            >
              Explore Full Skills
            </Link>
            <Link
              href="/#contact"
              className="press border border-pass bg-pass-fill/15 px-4 py-2.5 text-sm font-medium text-ink hover:bg-pass-fill hover:text-on-band"
            >
              {profile.availability}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
