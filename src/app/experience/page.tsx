import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Clock,
  Download,
  FileText,
  Layers,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ExperienceLog } from "@/components/home/experience-log";
import { InteractiveCareerMetrics } from "@/components/experience/interactive-career-metrics";
import { SkillsSection } from "@/components/home/skills-section";
import { InteractiveJobMatcher } from "@/components/skills/interactive-job-matcher";
import { PublicApps } from "@/components/home/public-apps";
import { InteractiveEnterprisePortals } from "@/components/work/interactive-enterprise-portals";
import { profile, publicApps, toolkit } from "@/data";
import { experienceLabel } from "@/lib/career";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  const years = experienceLabel();
  const totalSkills = toolkit.reduce((total, group) => total + group.items.length, 0);

  return {
    title: `Experience, Work & Skills — ${years} Years in QA Engineering`,
    description: `Professional QA engineering experience, verified skills, and tested applications of Deepak Gupta: ${years} years across Exude Vincom and Paul Merchants testing 15+ fintech releases, loan systems, and payment journeys with ${totalSkills}+ verified technical skills.`,
    alternates: { canonical: "/experience" },
    openGraph: {
      title: `Experience, Work & Skills — ${siteTitleSuffix}`,
      description: `Professional QA engineering experience: ${years} years testing live fintech releases, lending platforms, and merchant payment gateways across 15+ applications and ${totalSkills}+ verified competencies.`,
      url: "/experience",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} experience` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Experience, Work & Skills — ${siteTitleSuffix}`,
      description: `Professional QA engineering experience: ${years} years testing live fintech releases, lending platforms, and merchant payment gateways across 15+ applications and ${totalSkills}+ verified competencies.`,
      images: ["/opengraph-image"],
    },
  };
}

export default function ExperiencePage() {
  const years = experienceLabel();
  const totalSkills = toolkit.reduce((total, group) => total + group.items.length, 0);

  const milestones = [
    { label: "Total Career", value: `${years} Years`, hint: "Continuous QA focus" },
    { label: "Companies", value: "2 Teams", hint: "Exude Vincom & Paul Merchants" },
    { label: "Products Guarded", value: "15+", hint: "7 Public Apps + 8+ Portals" },
    { label: "Verified Skills", value: `${totalSkills}+`, hint: "Automation, API & Manual" },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <div className="enter enter-1">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">02</span> / Career, Work &amp; Technical Skills
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                Where I have worked, what I tested &amp; my toolkit.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft text-base sm:text-lg">
              Two fintech-driven product organizations, {years} years in quality assurance. Guarding financial transactions, maintaining regression suites, and clearing production release gates across 15+ applications and enterprise portals.
            </p>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="enter enter-2 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-b border-line py-6">
          {milestones.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{item.label}</span>
              <span className="mt-1 font-serif text-3xl font-bold tracking-tight text-pass sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-ink-soft">{item.hint}</span>
            </div>
          ))}
        </div>

        {/* Quick Section Jumper Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-line pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-muted mr-1">Jump to:</span>
          <a
            href="#timeline"
            className="press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-card text-xs font-mono text-ink-soft hover:text-ink hover:border-pass transition-colors"
          >
            <Clock className="h-3 w-3 text-pass" />
            <span>Timeline</span>
          </a>
          <a
            href="#skills"
            className="press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-card text-xs font-mono text-ink-soft hover:text-ink hover:border-pass transition-colors"
          >
            <Wrench className="h-3 w-3 text-pass" />
            <span>Skills &amp; Toolkit</span>
          </a>
          <a
            href="#work"
            className="press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-card text-xs font-mono text-ink-soft hover:text-ink hover:border-pass transition-colors"
          >
            <Layers className="h-3 w-3 text-pass" />
            <span>Public Apps ({publicApps.length})</span>
          </a>
          <a
            href="#enterprise"
            className="press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-card text-xs font-mono text-ink-soft hover:text-ink hover:border-pass transition-colors"
          >
            <Building2 className="h-3 w-3 text-pass" />
            <span>Enterprise Portals</span>
          </a>
          <a
            href="#milestones"
            className="press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-card text-xs font-mono text-ink-soft hover:text-ink hover:border-pass transition-colors"
          >
            <Award className="h-3 w-3 text-pass" />
            <span>Milestones &amp; ROI</span>
          </a>
        </div>
      </div>

      {/* 01: Interactive Experience Timeline Rail */}
      <section id="timeline" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="border border-line bg-card p-6 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between border-b border-line pb-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">01 / Employment Chronicle</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">Roles &amp; Impact History</h2>
            </div>
            <span className="font-mono text-xs text-muted hidden sm:inline">Active Timeline</span>
          </div>

          <ExperienceLog />
        </div>
      </section>

      {/* 02: Technical Skills & Competencies */}
      <section id="skills" className="scroll-mt-24 border-t border-line bg-paper py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">02 / Technical Toolkit &amp; Domains</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">Verified Skills, Tools &amp; Frameworks</h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted sm:text-right">
              {totalSkills}+ QA competencies across web, mobile, API, and lending infrastructure. Derived directly from live releases.
            </p>
          </div>

          {/* Interactive Skills Filter & Search */}
          <div className="mt-6">
            <SkillsSection />
          </div>

          {/* Recruiter Role Fit Analyzer */}
          <div className="mt-16 border-t border-line pt-12">
            <InteractiveJobMatcher />
          </div>

          {/* ATS Keywords & Recruiter Reference Matrix */}
          <div className="mt-16 border-t border-line pt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-pass" />
                  <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                    ATS Keyword Index &amp; Reference
                  </h3>
                </div>
                <p className="mt-2 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                  Automated parsing &amp; hiring filters
                </p>
              </div>
              <Link
                href="/resume"
                className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2 font-mono text-xs text-ink hover:border-pass hover:text-pass self-start sm:self-auto"
              >
                <FileText className="h-3.5 w-3.5 text-pass" />
                <span>View ATS Resume</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {toolkit.map((group) => (
                <div key={group.label} className="border border-line bg-card p-5">
                  <div className="flex items-center justify-between border-b border-line/60 pb-3">
                    <h4 className="font-mono text-xs font-semibold tracking-wider text-ink uppercase">
                      {group.label}
                    </h4>
                    <span className="font-mono text-[0.65rem] text-muted">
                      {group.items.length} keywords
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03: Selected Work - 7 Public Consumer Products */}
      <section id="work" className="scroll-mt-24 border-t border-line bg-paper-deep py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">03 / Delivered Work &amp; Consumer Apps</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">7 Public Consumer Products Tested</h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted sm:text-right">
              Tap any product to inspect primary user journeys, test coverage areas, and store links.
            </p>
          </div>

          <div className="mt-6">
            <PublicApps />
          </div>
        </div>
      </section>

      {/* 04: Confidential & Enterprise Portals with Simulator */}
      <section id="enterprise" className="scroll-mt-24 border-t border-line bg-paper py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">04 / Confidential Architecture</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">8+ Enterprise Portals &amp; Lending Engines</h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted sm:text-right">
              Confidential internal banking, merchant split-settlement, and loan origination portals tested under NDA.
            </p>
          </div>

          <InteractiveEnterprisePortals />
        </div>
      </section>

      {/* 05: Interactive Career Metrics & Defect Hall of Fame */}
      <section id="milestones" className="scroll-mt-24 border-t border-line bg-paper py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <InteractiveCareerMetrics />
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 border-t border-line">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-paper border border-line p-6 sm:p-8">
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Next Steps</span>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
              Ready to verify quality on your next release?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Download the official ATS resume, explore the automation guides, or start a direct conversation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="press inline-flex items-center gap-2 border border-pass bg-paper px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="Download Resume"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Resume</span>
            </Link>
            <Link
              href="/learn"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Automation Guides & Q&A"
            >
              <span>Explore Guides</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#contact"
              className="press inline-flex items-center gap-2 border border-pass bg-pass-fill/15 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="Start a conversation"
            >
              <span>{profile.availability}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
