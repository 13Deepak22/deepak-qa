import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { ExperienceLog } from "@/components/home/experience-log";
import { InteractiveCareerMetrics } from "@/components/experience/interactive-career-metrics";
import { experience } from "@/data";
import { experienceLabel } from "@/lib/career";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: `Work Experience — ${experienceLabel()} Years in QA Engineering`,
    description:
      `Professional QA engineering experience of Deepak Gupta: ${experienceLabel()} years across Exude Vincom and Paul Merchants testing fintech releases, loan systems, and payment journeys.`,
    alternates: { canonical: "/experience" },
    openGraph: {
      title: `Experience — ${siteTitleSuffix}`,
      description:
        `Professional QA engineering experience: ${experienceLabel()} years testing live fintech releases, lending platforms, and merchant payment gateways.`,
      url: "/experience",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} experience` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Experience — ${siteTitleSuffix}`,
      description:
        `Professional QA engineering experience: ${experienceLabel()} years testing live fintech releases, lending platforms, and merchant payment gateways.`,
      images: ["/opengraph-image"],
    },
  };
}

export default function ExperiencePage() {
  const years = experienceLabel();

  const milestones = [
    { label: "Total Career", value: `${years} Years`, hint: "Continuous QA focus" },
    { label: "Companies", value: "2 Teams", hint: "Exude Vincom & Paul Merchants" },
    { label: "Products Guarded", value: "15+", hint: "Fintech, portals & mobile" },
    { label: "Manual Effort Cut", value: "50%", hint: "Via regression automation" },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <div className="enter enter-1">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">02</span> / Professional Experience
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                Where I have worked.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft text-base sm:text-lg">
              Two fintech-driven product organizations, {years} years in quality assurance. Guarding financial transactions, maintaining regression suites, and clearing production release gates.
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
      </div>

      {/* Interactive Experience Timeline Rail */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="border border-line bg-card p-6 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between border-b border-line pb-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Employment Chronicle</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">Roles &amp; Impact History</h2>
            </div>
            <span className="font-mono text-xs text-muted hidden sm:inline">Active Timeline</span>
          </div>

          <ExperienceLog />
        </div>
      </section>

      {/* Interactive Career Metrics & Defect Hall of Fame */}
      <section className="border-t border-line bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <InteractiveCareerMetrics />
        </div>
      </section>

      {/* Organization Deep Dives */}
      <section className="border-t border-line bg-paper-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">Team Breakdown</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
              Detailed responsibilities &amp; domain scope.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {experience.map((role) => {
              const isCurrent = role.period.includes("Present");
              return (
                <div key={role.org} className="flex flex-col border border-line bg-paper p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight text-ink">{role.org}</h3>
                        <p className="font-mono text-xs text-pass tracking-wider uppercase mt-0.5">{role.title}</p>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{role.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3.5 text-sm text-ink-soft">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-pass mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-t border-line">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-paper border border-line p-6 sm:p-8">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Next Section</p>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
              Explore the applications and services.
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Inspect the 15+ public apps and confidential portals tested across these engagements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="press inline-flex items-center gap-2 border border-pass bg-paper px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="15+ Apps & Portals"
            >
              <span>View Selected Work</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/services"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Testing Services"
            >
              <span>Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#contact"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Start a conversation"
            >
              <span>Contact Deepak</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
