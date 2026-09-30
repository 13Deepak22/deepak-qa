import {
  ArrowRight,
  Building2,
  Calendar,
  FileText,
  LockKeyhole,
  Smartphone,
  User,
} from "lucide-react";
import Link from "next/link";
import { HeadlineCycle } from "@/components/home/headline-cycle";
import { ImpactMetrics } from "@/components/home/impact-metrics";
import { InteractiveExperiencePreview } from "@/components/home/interactive-experience-preview";
import { InteractiveQASandbox } from "@/components/home/interactive-qa-sandbox";
import { InteractiveWorkPreview } from "@/components/home/interactive-work-preview";
import { ScopeEstimator } from "@/components/home/scope-estimator";
import { ServicesSection } from "@/components/home/services";
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
              className="press bg-ink px-5 py-3 text-center text-sm text-paper hover:bg-ink-soft min-[420px]:text-left"
              data-cursor="15+ apps & portals"
            >
              Selected work
            </Link>
            <Link
              href="/services"
              className="press border border-line bg-paper px-5 py-3 text-center text-sm text-ink hover:border-pass hover:text-pass min-[420px]:text-left"
              data-cursor="Services & methodology"
            >
              Testing services
            </Link>
            <Link
              href="/experience"
              className="press border border-line bg-paper px-5 py-3 text-center text-sm text-ink hover:border-pass hover:text-pass min-[420px]:text-left"
              data-cursor={`${years} years experience`}
            >
              Experience timeline
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

      {/* 01 / Interactive QA Test Workbench (Real-time assertion runner & defect simulator) */}
      <InteractiveQASandbox />

      {/* 02 / Testing Services (Core services on homepage, full toolkit on /services) */}
      <ServicesSection />

      {/* 03 / Interactive Work Showcase (Clickable app explorer with test journeys) */}
      <InteractiveWorkPreview />

      {/* 04 / Interactive Experience Spotlight (Role switcher with impact filters) */}
      <InteractiveExperiencePreview />

      {/* 05 / Interactive Skills Directory (Live search & category filters) */}
      <section className="scroll-mt-20 border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-10">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">Technical Directory</span> / Core Competencies
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
                97+ Verified testing skills &amp; ATS keywords.
              </h2>
            </div>
            <Link
              href="/skills"
              className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0"
              data-cursor="Complete skills page"
            >
              <span>View full skills page &rarr;</span>
            </Link>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* 06 / Interactive Quality Planner & Scope Estimator */}
      <ScopeEstimator />

      {/* 07 / About Deepak & ATS Resume */}
      <section className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {/* About Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <User className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">Personal Story</p>
                  <h3 className="font-serif text-2xl text-ink">Meet the Tester</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Learn about Deepak&apos;s testing philosophy, day-to-day release standards, and how he balances manual exploratory discovery with automated regression suites.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/about"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Read Deepak's story"
                >
                  <span>Read full bio &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Resume Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">ATS Formats</p>
                  <h3 className="font-serif text-2xl text-ink">Download Resume</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Access Deepak&apos;s plain ATS-optimized resume, available for instant viewing and one-click PDF, Word (DOCX), and JPG download formats.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/resume"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Download resume"
                >
                  <span>View &amp; download resume &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
