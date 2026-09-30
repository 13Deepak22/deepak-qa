import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  User,
} from "lucide-react";
import Link from "next/link";
import { HeadlineCycle } from "@/components/home/headline-cycle";
import { ImpactMetrics } from "@/components/home/impact-metrics";
import { InteractiveExperiencePreview } from "@/components/home/interactive-experience-preview";
import { InteractiveQASandbox } from "@/components/home/interactive-qa-sandbox";
import { InteractiveServices } from "@/components/home/interactive-services";
import { InteractiveWorkPreview } from "@/components/home/interactive-work-preview";
import { ReleaseGatekeeper } from "@/components/home/release-gatekeeper";
import { ScopeEstimator } from "@/components/home/scope-estimator";
import { SkillsSection } from "@/components/home/skills-section";
import { TestRun } from "@/components/home/test-run";
import { profile } from "@/data";
import { experienceLabel } from "@/lib/career";

export default function HomePage() {
  const years = experienceLabel();

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
              href="/work"
              data-testid="hero-link-work"
              data-cursor="Inspect 15+ consumer apps & enterprise banking portals"
              className="press inline-flex items-center justify-center gap-1.5 border border-pass bg-pass text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pass/90 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <span>Selected work</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              data-testid="hero-link-services"
              data-cursor="Explore QA testing services, deliverables & methodology"
              className="press inline-flex items-center justify-center gap-1.5 border border-pass bg-card text-pass px-4 py-2.5 text-sm font-semibold hover:bg-pass hover:text-paper transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <span>Testing services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/experience"
              data-testid="hero-link-experience"
              data-cursor={`View complete ${years}-year career history across Exude Vincom & Paul Merchants`}
              className="press inline-flex items-center justify-center gap-1.5 border border-pass bg-card text-pass px-4 py-2.5 text-sm font-semibold hover:bg-pass hover:text-paper transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <span>Experience timeline</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              data-testid="hero-link-contact"
              data-cursor="Discuss your upcoming release or audit requirements"
              className="press inline-flex items-center justify-center gap-1.5 border border-line bg-paper px-4 py-2.5 text-sm text-ink hover:border-pass hover:text-pass transition-all duration-200"
            >
              <span>Start a conversation</span>
            </Link>
          </div>
        </div>
        <div className="enter enter-5 min-w-0 md:pt-2 lg:pt-6">
          <TestRun />
        </div>
      </section>

      {/* Metrics Bar: 15+ Products Tested, 100+ Automated Checks */}
      <ImpactMetrics />

      {/* 01 / Live QA Test Workbench (Interactive Assertion Runner & Defect Simulator) */}
      <InteractiveQASandbox />

      {/* 02 / Interactive Testing Services (Explore Methodology, Sample Assertions & Code) */}
      <InteractiveServices />

      {/* 03 / Interactive Release Gatekeeper (Ship or Halt? Decision Simulator) */}
      <ReleaseGatekeeper />

      {/* 04 / Interactive Applications Showcase (Explore 15+ Products, Journeys & Edge Cases) */}
      <InteractiveWorkPreview />

      {/* 05 / Interactive Career Spotlight (Role Switcher with Impact Dimensions) */}
      <InteractiveExperiencePreview />

      {/* 06 / Technical Stack & Live ATS Query Engine */}
      <section className="scroll-mt-20 border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-8">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">Technical Directory</span> / Core Competencies
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
                97+ Verified testing skills &amp; ATS keywords.
              </h2>
            </div>
            <Link
              href="/skills"
              data-testid="home-link-skills"
              data-cursor="Browse complete directory of 97+ categorized QA competencies & keywords"
              className="press inline-flex items-center gap-1.5 border border-pass bg-pass text-paper px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass/90 transition-all duration-200 hover:-translate-y-0.5 shadow-xs shrink-0"
            >
              <span>View full skills directory</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* 07 / Interactive Quality Planner & Scope Estimator */}
      <ScopeEstimator />

      {/* 08 / Meet the Tester & ATS Resume Downloads */}
      <section className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {/* About Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <User className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">Personal Story</p>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink">Meet the Tester</h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-soft">
                Learn about Deepak&apos;s testing philosophy, day-to-day release standards, and how he balances manual exploratory discovery with automated regression suites.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/about"
                  data-testid="home-link-about"
                  data-cursor="Read Deepak's full background, philosophy & approach"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-pass text-paper px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-pass/90 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                >
                  <span>Read full bio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resume Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">ATS Formats</p>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink">Download Resume</h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-soft">
                Access Deepak&apos;s plain ATS-optimized resume, available for instant viewing and one-click PDF, Word (DOCX), and JPG download formats.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/resume"
                  data-testid="home-link-resume"
                  data-cursor="View and download ATS resume in PDF, Word (DOCX), or JPG formats"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-pass text-paper px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-pass/90 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                >
                  <span>View &amp; download resume</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
