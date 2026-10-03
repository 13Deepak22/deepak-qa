import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InteractiveAtsAnalyzer } from "@/components/resume/interactive-ats-analyzer";
import { DownloadOptions } from "@/components/resume/download-options";
import { education, experience, profile, publicApps, resume, toolkit } from "@/data";
import { experienceLabel } from "@/lib/career";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  const description = `Resume of Deepak Gupta, Senior QA Engineer & SDET in Noida, India: ${experienceLabel()} years of manual and automation testing, Playwright, Appium, fintech payment gateways, and defect root cause analysis.`;
  return {
    title: "Resume — Senior QA Engineer & SDET",
    description,
    alternates: { canonical: "/resume" },
    openGraph: {
      title: `Resume — Senior QA Engineer & SDET — ${siteTitleSuffix}`,
      description,
      url: "/resume",
      type: "profile",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} resume` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Resume — Senior QA Engineer & SDET — ${siteTitleSuffix}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="resume-section mt-8 border-t border-line pt-6">
      <h2 className="font-mono text-[0.72rem] font-bold tracking-[0.16em] text-pass uppercase">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ResumePage() {
  const keyKpis = [
    { label: "Critical Escapes", value: "0 P0", hint: "Across 20+ production releases" },
    { label: "Regression Time Cut", value: "50%", hint: "Via Playwright & Appium suites" },
    { label: "Verification SLA", value: "99.8%", hint: "High-concurrency payment tests" },
    { label: "Fintech Domain", value: "UPI 2.0", hint: "NPCI, Cashfree, Razorpay & eKYC" },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Header Ribbon & Downloads */}
        <div data-print="hide" className="enter enter-1 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">CV</span> / Executive Resume &amp; ATS Profile
            </p>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-ink tracking-tight font-bold">
              Deepak Gupta
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
              Calibrated for 99% ATS scoring with single-column linear hierarchy, standard headings, and Google XYZ achievement metrics. Download as PDF, Word (.docx), or JPG.
            </p>
          </div>
          <DownloadOptions />
        </div>

        {/* Interactive ATS Analyzer & Audit Suite */}
        <InteractiveAtsAnalyzer />

        {/* The Formal Resume Document */}
        <article
          aria-label={`Resume of ${profile.name}`}
          className="resume-sheet enter enter-2 mt-8 border border-line bg-card px-6 py-8 text-ink shadow-[0_30px_60px_-45px_rgba(28,25,21,0.55)] sm:px-12 sm:py-12"
        >
          {/* Header Block */}
          <header className="border-b border-line pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h1 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl font-bold text-ink">
                {profile.name}
              </h1>
              <span className="font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                Available for Full-time Roles
              </span>
            </div>

            <p className="mt-2 text-base font-semibold text-pass sm:text-lg">
              {resume.headline}
            </p>

            {/* Quick KPI Ribbon inside Resume */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-t border-b border-line/70 py-3.5 bg-paper/60 px-3">
              {keyKpis.map((kpi) => (
                <div key={kpi.label} className="flex flex-col">
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">{kpi.label}</span>
                  <span className="font-serif text-lg font-bold text-ink">{kpi.value}</span>
                  <span className="text-[0.65rem] text-ink-soft">{kpi.hint}</span>
                </div>
              ))}
            </div>

            {/* Contact Coordinates */}
            <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft font-mono">
              <li className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-pass shrink-0" />
                <span>{profile.places}, {profile.location}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-pass shrink-0" />
                <a href={profile.phoneHref} className="hover:text-pass transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-pass shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-pass transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-pass shrink-0" />
                <a href={profile.linkedin} className="hover:text-pass transition-colors" target="_blank" rel="noopener noreferrer">
                  {bare(profile.linkedin)}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-pass shrink-0" />
                <a href={profile.github} className="hover:text-pass transition-colors" target="_blank" rel="noopener noreferrer">
                  {bare(profile.github)}
                </a>
              </li>
            </ul>
          </header>

          {/* Professional Summary */}
          <Section title="Executive Summary">
            <p className="leading-relaxed text-ink-soft text-sm sm:text-base font-normal">
              {resume.summary}
            </p>
          </Section>

          {/* Technical Skills & Competencies */}
          <Section title="Technical Competencies">
            <dl className="grid gap-3 text-sm">
              {toolkit.map((group) => (
                <div key={group.label} className="resume-item grid gap-x-4 gap-y-1 sm:grid-cols-[10rem_minmax(0,1fr)]">
                  <dt className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-pass rounded-full shrink-0" />
                    <span>{group.label}</span>
                  </dt>
                  <dd className="leading-relaxed text-ink-soft text-xs sm:text-sm">
                    {group.items.join(", ")}
                    {group.label.includes("Exposure") ? (
                      <span className="text-muted"> ({resume.exposureNote})</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* Professional Experience */}
          <Section title="Professional Experience">
            <div className="grid gap-8">
              {experience.map((role) => (
                <div key={`${role.org}-${role.period}`} className="resume-item border-l-2 border-pass/40 pl-4 py-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">{role.title}</h3>
                    <p className="font-mono text-xs text-muted tracking-wider">{role.period.replace(" — ", " – ")}</p>
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2">
                    <p className="font-medium text-pass text-sm">{role.org}</p>
                    <span className="text-muted text-xs">·</span>
                    <span className="font-mono text-xs text-ink-soft">
                      {role.org === "Exude Vincom" ? "Noida, India (Fintech & Lending)" : "Chandigarh, India (Fintech & Payments)"}
                    </span>
                  </div>

                  <ul className="mt-3 list-disc space-y-2 pl-4 text-xs sm:text-sm leading-relaxed text-ink-soft marker:text-pass">
                    {role.points.map((point) => (
                      <li key={point} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Commercial Applications & Case Studies */}
          <Section title="Key Projects & Applications Verified">
            <ul className="grid gap-3 text-sm leading-relaxed text-ink-soft">
              {publicApps.map((app) => (
                <li key={app.title} className="resume-item border-b border-line/60 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-serif font-bold text-ink text-base">{app.title}</span>
                    <span className="border border-line bg-paper px-2 py-0.5 font-mono text-[0.65rem] text-muted uppercase">
                      {app.domain}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                    {app.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="resume-item flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-serif text-lg font-bold text-ink">{education.degree}</h3>
                <p className="text-sm font-medium text-pass">{education.school}</p>
              </div>
              <p className="font-mono text-xs text-muted">{education.period.replace(" — ", " – ")}</p>
            </div>
          </Section>

          {/* Certifications and Courses */}
          <Section title="Certifications & Continuous Learning">
            <ul className="list-disc space-y-1.5 pl-4 text-xs sm:text-sm leading-relaxed text-ink-soft marker:text-pass">
              {education.credentials.map((item) => (
                <li key={item.name} className="pl-1">
                  <span className="font-bold text-ink">{item.name}</span> — {item.by} ({item.period})
                </li>
              ))}
              {education.courses.map((course) => (
                <li key={course} className="pl-1">{course}</li>
              ))}
            </ul>
          </Section>
        </article>

        {/* Bottom Navigation CTA */}
        <div data-print="hide" className="mt-10 border border-line bg-paper p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wider text-pass">Next in Portfolio</p>
            <h3 className="mt-1 font-serif text-2xl text-ink font-bold">
              Inspect Real Defect Investigations
            </h3>
            <p className="mt-1 text-xs text-ink-soft">
              See the exact root-cause analysis (RCA) and thread trace for a double-spend race condition.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/rca"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
            >
              <span>View RCA Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#contact"
              className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
            >
              <span>Schedule Interview</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
