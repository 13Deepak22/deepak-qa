import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { DownloadOptions } from "@/components/resume/download-options";
import { education, experience, profile, publicApps, resume, resumeSkills } from "@/data";
import { experienceLabel } from "@/lib/career";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  const description = `Resume of Deepak Gupta, QA Engineer in Noida, India: ${experienceLabel()} years of manual and automation testing, Playwright, Appium, fintech payment gateways, and defect root cause analysis.`;
  return {
    title: "Resume — QA Engineer",
    description,
    alternates: { canonical: "/resume" },
    openGraph: {
      title: `Resume — QA Engineer — ${siteTitleSuffix}`,
      description,
      url: "/resume",
      type: "profile",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} resume` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Resume — QA Engineer — ${siteTitleSuffix}`,
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

function LinkedInIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

const bare = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "");

export default function ResumePage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Header Ribbon & Downloads */}
        <div data-print="hide" className="enter enter-1 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-pass uppercase">Curriculum Vitae</p>
            <h1 className="mt-1 font-serif text-2xl sm:text-3xl text-ink font-bold tracking-tight">
              Deepak Gupta
            </h1>
            <p className="mt-1 text-xs text-ink-soft">
              Minimal single-column format. Optimized for clarity, recruiter scanning, and ATS parsing.
            </p>
          </div>
          <DownloadOptions />
        </div>

        {/* The Formal Resume Document */}
        <article
          aria-label={`Resume of ${profile.name}`}
          className="resume-sheet enter enter-2 border border-line bg-card px-6 py-8 text-ink shadow-[0_30px_60px_-45px_rgba(28,25,21,0.55)] sm:px-12 sm:py-12"
        >
          {/* Header Block */}
          <header className="border-b border-line pb-6">
            <h1 className="font-serif text-3xl tracking-tight sm:text-4xl font-bold text-ink">
              {profile.name}
            </h1>

            <p className="mt-1.5 text-base font-semibold text-pass sm:text-lg">
              {resume.headline}
            </p>

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
              {profile.website ? (
                <li className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-pass shrink-0" />
                  <a href={profile.website} className="hover:text-pass transition-colors" target="_blank" rel="noopener noreferrer">
                    {bare(profile.website)}
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-1.5">
                <LinkedInIcon className="h-3.5 w-3.5 text-pass shrink-0" />
                <a href={profile.linkedin} className="hover:text-pass transition-colors" target="_blank" rel="noopener noreferrer">
                  {bare(profile.linkedin)}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <GitHubIcon className="h-3.5 w-3.5 text-pass shrink-0" />
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
            <dl className="grid gap-2.5 text-xs sm:text-sm">
              {resumeSkills.map((group) => (
                <div key={group.category} className="resume-item grid gap-x-4 gap-y-0.5 sm:grid-cols-[11rem_minmax(0,1fr)]">
                  <dt className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-pass rounded-full shrink-0" />
                    <span>{group.category}</span>
                  </dt>
                  <dd className="leading-relaxed text-ink-soft">
                    {group.items}
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

          {/* Key Projects & Applications Verified */}
          <Section title="Key Projects & Applications Verified">
            <div className="grid gap-3 sm:grid-cols-2">
              {publicApps.slice(0, 6).map((app) => (
                <div key={app.title} className="resume-item border border-line/60 bg-paper/40 p-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-serif font-bold text-ink text-sm">{app.title}</span>
                    <span className="border border-line bg-paper px-1.5 py-0.5 font-mono text-[0.62rem] text-muted uppercase">
                      {app.domain}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                    {app.detail}
                  </p>
                </div>
              ))}
            </div>
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
          <Section title="Technical Training & Certifications">
            <ul className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-ink-soft">
              {education.courses.map((course) => (
                <li key={course} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-pass rounded-full shrink-0" />
                  <span className="font-medium text-ink">{course}</span>
                </li>
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
