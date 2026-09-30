import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import { ExperienceLog } from "@/components/home/experience-log";
import { HeadlineCycle } from "@/components/home/headline-cycle";
import { ImpactMetrics } from "@/components/home/impact-metrics";
import { PublicApps } from "@/components/home/public-apps";
import { RcaCaseStudy } from "@/components/home/rca-case-study";
import { ServicesSection } from "@/components/home/services";
import { TestRun } from "@/components/home/test-run";
import { profile, unpublishedWork } from "@/data";

export default function HomePage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      {/* Hero & Live Release Gate */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 md:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.9fr)] md:items-start md:gap-x-8 lg:gap-x-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0">
          <HeadlineCycle />
          <p className="enter enter-3 mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
            {profile.lede}
          </p>
          <p className="enter enter-4 mt-6 max-w-lg text-balance font-mono text-xs tracking-[0.1em] text-muted uppercase sm:tracking-[0.14em]">
            {profile.focus.join("  ·  ")}
          </p>
          <div className="enter enter-5 mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Link
              href="/#work"
              className="press bg-ink px-5 py-3 text-center text-sm text-paper hover:bg-ink-soft min-[420px]:text-left"
              data-cursor="Proof, app by app"
            >
              Selected work
            </Link>
            <Link
              href="/#investigation"
              className="press border border-line bg-paper px-5 py-3 text-center text-sm text-ink hover:border-pass hover:text-pass min-[420px]:text-left"
              data-cursor="Case study & RCA"
            >
              RCA case study
            </Link>
            <Link
              href="/#contact"
              className="press border border-pass px-5 py-3 text-center text-sm hover:bg-pass-fill hover:text-on-band min-[420px]:text-left"
              data-cursor="Tell me what's shipping"
            >
              Start a conversation
            </Link>
          </div>
        </div>
        <div className="enter enter-5 min-w-0 md:pt-2 lg:pt-6">
          <TestRun />
        </div>
      </section>

      {/* Metrics Bar: 15+ Products Tested, 100+ Automated Checks */}
      <ImpactMetrics />

      {/* 01 / Testing Services */}
      <ServicesSection />

      {/* 02 / Defect Investigation & Root Cause Analysis (RCA) */}
      <RcaCaseStudy />

      {/* 03 / Experience */}
      <section id="experience" className="scroll-mt-20 border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">03</span> / Experience
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Where I have worked.
          </h2>
          <ExperienceLog />
        </div>
      </section>

      {/* 04 / Projects (15+ Apps & Portals Tested) */}
      <section id="work" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">04</span> / Projects
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
                Public apps.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
              <span className="font-medium text-ink">15+ products &amp; systems tested</span> across fintech, lending, and enterprise workflows. 7 public consumer applications listed below; 8+ confidential portals protected under NDA.
            </p>
          </div>
          <div className="mt-10 border-t border-line">
            <PublicApps />
            <div className="flex items-start gap-3 border-b border-line py-6 sm:gap-4 sm:py-7 lg:pl-[5.5rem]">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-dashed border-line text-muted sm:h-12 sm:w-12"
              >
                <LockKeyhole className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    Internal and confidential
                  </p>
                  <span className="border border-line bg-paper px-2 py-0.5 font-mono text-[0.65rem] text-muted uppercase">
                    8+ Enterprise Portals
                  </span>
                </div>
                <p className="mt-2 max-w-3xl font-serif text-lg leading-snug tracking-tight text-ink-soft sm:text-xl">
                  {unpublishedWork}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                  <span className="border border-line/60 bg-paper/50 px-2 py-1 font-mono text-[0.68rem]">
                    🔒 Loan Management System (LMS)
                  </span>
                  <span className="border border-line/60 bg-paper/50 px-2 py-1 font-mono text-[0.68rem]">
                    🔒 Loan Origination System (LOS)
                  </span>
                  <span className="border border-line/60 bg-paper/50 px-2 py-1 font-mono text-[0.68rem]">
                    🔒 Merchant Settlement Portal
                  </span>
                  <span className="border border-line/60 bg-paper/50 px-2 py-1 font-mono text-[0.68rem]">
                    🔒 Partner Banking APIs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
