import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DownloadOptions } from "@/components/resume/download-options";
import { education, experience, profile, publicApps, resume, toolkit } from "@/data";
import { experienceLabel } from "@/lib/career";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  const description = `Resume of Deepak Gupta, QA engineer in Noida, India: ${experienceLabel()} years of manual and automation testing, skills, experience, projects, education, and certifications.`;
  return {
    title: "Resume",
    description,
    alternates: { canonical: "/resume" },
    openGraph: {
      title: `Resume — ${siteTitleSuffix}`,
      description,
      url: "/resume",
      type: "profile",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} resume` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Resume — ${siteTitleSuffix}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="resume-section mt-7 border-t border-line pt-6">
      <h2 className="font-mono text-[0.72rem] font-medium tracking-[0.16em] text-pass uppercase">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ResumePage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div data-print="hide" className="enter enter-1 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">CV</span> / Resume
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              One column, plain text, and standard headings, so applicant tracking systems read it cleanly. Download it
              as a PDF or Word file for an application, or as a JPG to share.
            </p>
          </div>
          <DownloadOptions />
        </div>

        <article
          aria-label={`Resume of ${profile.name}`}
          className="resume-sheet enter enter-2 mt-8 border border-line bg-card px-5 py-8 text-ink shadow-[0_30px_60px_-45px_rgba(28,25,21,0.55)] sm:px-12 sm:py-12"
        >
          <header>
            <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-base font-medium text-pass">{resume.headline}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-soft">
              <li>
                {profile.places}, {profile.location}
              </li>
              <li>
                <a href={profile.phoneHref} className="hover:text-pass">
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-pass">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className="hover:text-pass" target="_blank" rel="noopener noreferrer">
                  {bare(profile.linkedin)}
                </a>
              </li>
              <li>
                <a href={profile.github} className="hover:text-pass" target="_blank" rel="noopener noreferrer">
                  {bare(profile.github)}
                </a>
              </li>
            </ul>
          </header>

          <Section title="Summary">
            <p className="leading-relaxed text-ink-soft">{resume.summary}</p>
          </Section>

          <Section title="Skills">
            <dl className="grid gap-2.5 text-sm">
              {toolkit.map((group) => (
                <div key={group.label} className="resume-item grid gap-x-5 gap-y-0.5 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                  <dt className="font-semibold text-ink">{group.label}</dt>
                  <dd className="leading-relaxed text-ink-soft">
                    {group.items.join(", ")}
                    {group.label === "Exposure" ? <span className="text-muted"> ({resume.exposureNote})</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Experience">
            <div className="grid gap-6">
              {experience.map((role) => (
                <div key={`${role.org}-${role.period}`} className="resume-item">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted">{role.period.replace(" — ", " – ")}</p>
                  </div>
                  <p className="text-sm font-medium text-pass">{role.org}</p>
                  <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft marker:text-line">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <ul className="grid gap-2.5 text-sm leading-relaxed text-ink-soft">
              {publicApps.map((app) => (
                <li key={app.title} className="resume-item">
                  <span className="font-semibold text-ink">{app.title}</span>
                  <span className="text-muted"> ({app.domain})</span>: {app.detail}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Education">
            <div className="resume-item flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="text-sm font-medium text-pass">{education.school}</p>
              </div>
              <p className="text-sm text-muted">{education.period.replace(" — ", " – ")}</p>
            </div>
          </Section>

          <Section title="Certifications and Courses">
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft marker:text-line">
              {education.credentials.map((item) => (
                <li key={item.name}>
                  <span className="font-semibold text-ink">{item.name}</span>, {item.by} ({item.period})
                </li>
              ))}
              {education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </main>
  );
}
