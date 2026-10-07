import {
  ArrowUpRight,
  FileText,
  User,
} from "lucide-react";
import Link from "next/link";
import { HeadlineCycle } from "@/components/home/headline-cycle";
import { ImpactMetrics } from "@/components/home/impact-metrics";
import { InteractiveQASandbox } from "@/components/home/interactive-qa-sandbox";
import { InteractiveServices } from "@/components/home/interactive-services";
import { InteractiveWorkPreview } from "@/components/home/interactive-work-preview";
import { ReleaseGatekeeper } from "@/components/home/release-gatekeeper";
import { ScopeEstimator } from "@/components/home/scope-estimator";
import { TestRun } from "@/components/home/test-run";
import { profile } from "@/data";
import { experienceLabel } from "@/lib/career";

export default function HomePage() {
  const years = experienceLabel();

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      {/* Hero & Live Release Gate */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.9fr)] lg:items-start lg:gap-x-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0">
          <HeadlineCycle />
          <p className="enter enter-3 mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
            {profile.lede}
          </p>
          <p className="enter enter-4 mt-6 max-w-lg text-balance font-mono text-xs tracking-[0.1em] text-muted uppercase sm:tracking-[0.14em]">
            {profile.focus.join("  ·  ")}
          </p>
          <div className="enter enter-5 mt-8 max-w-lg space-y-2.5">
            {/* Quick Navigation 2-Column Grid (Borders align symmetrically) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Link
                href="/work"
                data-testid="hero-work-link"
                className="press flex items-center justify-between border border-pass bg-card px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shadow-2xs"
                data-cursor="15+ apps & portals"
              >
                <span>Selected work</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                data-testid="hero-services-link"
                className="press flex items-center justify-between border border-pass bg-card px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shadow-2xs"
                data-cursor="Services & methodology"
              >
                <span>Testing services</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/skills"
                data-testid="hero-skills-link"
                className="press flex items-center justify-between border border-pass bg-card px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shadow-2xs"
                data-cursor="97+ verified skills"
              >
                <span>Skills directory</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/experience"
                data-testid="hero-experience-link"
                className="press flex items-center justify-between border border-pass bg-card px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shadow-2xs"
                data-cursor={`${years} years experience`}
              >
                <span>Experience timeline</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>

            {/* Primary Action Button (Spans exact width of grid) */}
            <Link
              href="/#contact"
              data-testid="hero-contact-link"
              className="press flex w-full items-center justify-center border-2 border-pass bg-pass text-on-band px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors shadow-xs"
              data-cursor="Tell me what's shipping"
            >
              <span>Start a conversation</span>
            </Link>
          </div>
        </div>
        <div className="enter enter-5 min-w-0 pt-2 lg:pt-6">
          <TestRun />
        </div>
      </section>

      {/* Metrics Bar: 15+ Products Tested, 10k+ Automated Checks */}
      <ImpactMetrics />

      {/* 01 / Live QA Test Workbench (Interactive Assertion Runner & Defect Simulator) */}
      <InteractiveQASandbox />

      {/* 02 / Interactive Testing Services (Explore Methodology, Sample Assertions & Code) */}
      <InteractiveServices />

      {/* 04 / Interactive Release Gatekeeper (Ship or Halt? Decision Simulator) */}
      <ReleaseGatekeeper />



      {/* 06 / Meet the Tester & ATS Resume Downloads */}
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
                  data-testid="about-redirect-cta"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Read Deepak's story"
                >
                  <span>Read full bio</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
                  data-testid="resume-redirect-cta"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Download resume"
                >
                  <span>View &amp; download resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
