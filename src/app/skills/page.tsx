import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FileText, ShieldCheck } from "lucide-react";
import { SkillsSection } from "@/components/home/skills-section";
import { profile, toolkit } from "@/data";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  const totalSkills = toolkit.reduce((total, group) => total + group.items.length, 0);
  const description = `Explore ${totalSkills}+ verified QA testing skills of Deepak Gupta: Automation (Playwright, Appium, Selenium), Fintech & Payments (UPI, NPCI), REST API testing, and manual exploratory passes.`;

  return {
    title: "Skills & Technical Toolkit",
    description,
    alternates: { canonical: "/skills" },
    openGraph: {
      title: `Skills & Technical Toolkit — ${siteTitleSuffix}`,
      description,
      url: "/skills",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} skills` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Skills & Technical Toolkit — ${siteTitleSuffix}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default function SkillsPage() {
  const totalSkills = toolkit.reduce((total, group) => total + group.items.length, 0);

  const stats = [
    { label: "Verified Skills", value: `${totalSkills}+` },
    { label: "Core Categories", value: `${toolkit.length}` },
    { label: "Products Tested", value: "15+" },
    { label: "Release Gate Sign-off", value: "100%" },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        {/* Eyebrow & Header */}
        <div className="enter enter-1">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">02</span> / Technical Toolkit
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                Skills, tools, and domains.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft">
              {totalSkills} verified QA competencies across web, mobile, API, and lending infrastructure. Every tool and skill listed here is derived directly from live production releases.
            </p>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="enter enter-2 mt-10 grid grid-cols-2 gap-4 border-y border-line py-5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="min-w-0">
              <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase block">
                {s.label}
              </span>
              <span className="mt-1 font-mono text-base sm:text-lg font-medium text-ink block truncate">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Skills Explorer Component */}
        <div className="enter enter-3 mt-4">
          <SkillsSection />
        </div>

        {/* ATS Keywords & Recruiter Reference Matrix */}
        <section className="enter enter-4 mt-16 border-t border-line pt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-pass" />
                <h2 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                  ATS Recruitment &amp; Keyword Index
                </h2>
              </div>
              <p className="mt-2 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                Ready for automated parsing &amp; hiring filters.
              </p>
            </div>
            <Link
              href="/resume"
              className="press inline-flex items-center gap-2 border border-line bg-paper px-4 py-2 font-mono text-xs text-ink hover:border-pass hover:text-pass self-start sm:self-auto"
            >
              <FileText className="size-3.5" />
              <span>View ATS plain-text resume</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group) => (
              <div key={group.label} className="border border-line bg-card p-5">
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-ink uppercase">
                    {group.label}
                  </h3>
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
        </section>

        {/* Bottom Call to Action Bar */}
        <div className="enter enter-5 mt-16 flex flex-col gap-6 border border-line bg-paper-deep p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
              Next Steps
            </span>
            <h3 className="mt-1 font-serif text-2xl tracking-tight text-ink">
              Ready to verify quality on your next release?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Download the official resume or start a direct conversation with Deepak.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="press border border-line bg-paper px-5 py-3 text-sm text-ink hover:border-pass hover:text-pass"
            >
              <Download className="mr-2 inline-block size-3.5" />
              Download Resume
            </Link>
            <Link
              href="/#contact"
              className="press border border-pass bg-pass-fill/15 px-5 py-3 text-sm font-medium text-ink hover:bg-pass-fill hover:text-on-band"
            >
              {profile.availability}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
