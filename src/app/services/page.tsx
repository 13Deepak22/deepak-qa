import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  FileCheck2,
  Layers,
  Lock,
  Monitor,
  ShieldCheck,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";
import { RcaCaseStudy } from "@/components/home/rca-case-study";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: "Testing Services & Quality Engineering",
    description:
      "Professional QA testing services by Deepak Gupta: Manual exploratory testing, automated regression in Playwright & Appium, API microservice verification, and fintech payment gatekeeper checks.",
    alternates: { canonical: "/services" },
    openGraph: {
      title: `Testing Services & Quality Engineering — ${siteTitleSuffix}`,
      description:
        "Specialized QA services: Modern web automation in Playwright, real-device mobile testing in Appium, API integration suites, and fintech payment verification.",
      url: "/services",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} testing services` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Testing Services & Quality Engineering — ${siteTitleSuffix}`,
      description:
        "Specialized QA services: Modern web automation in Playwright, real-device mobile testing in Appium, API integration suites, and fintech payment verification.",
      images: ["/opengraph-image"],
    },
  };
}

export default function ServicesPage() {
  const stats = [
    { label: "Products Tested", value: "15+", hint: "Fintech, portals & mobile apps" },
    { label: "Automated Checks", value: "10k+", hint: "Playwright & Appium regressions" },
    { label: "Effort Reduction", value: "50%", hint: "Manual sanity hours cut" },
    { label: "Critical Escapes", value: "0", hint: "On cleared production gates" },
  ];

  // Core Service Offerings (Highlighting Deepak's primary pillars)
  const coreServices = [
    {
      num: "01",
      key: "web-automation",
      title: "Web & E2E Test Automation",
      tagline: "Deterministic, fast automated suites that run on every pull request.",
      summary:
        "Architecting resilient test suites using Playwright (TypeScript) and Selenium (Java) with strict Page Object Model design. Built with auto-waiting synchronization, isolated test data, and parallel CI/CD pipeline execution.",
      icon: Monitor,
      tools: ["Playwright", "Selenium", "TypeScript", "Java", "TestNG", "CI/CD"],
      outcomes: [
        "Cross-browser matrix: Chromium, WebKit, and Firefox parity",
        "Sub-5-minute parallel execution on GitHub Actions & Jenkins",
        "Zero flaky tests via strict dynamic locators and smart waits",
      ],
    },
    {
      num: "02",
      key: "mobile-automation",
      title: "Native Mobile App Testing",
      tagline: "Real-device verification across Android & iOS ecosystem fragmentation.",
      summary:
        "End-to-end automated and exploratory passes on native Android and iOS builds. Covering gesture interactions, payment app-switching, biometric auth prompts, and network drop resilience.",
      icon: Smartphone,
      tools: ["Appium", "UiAutomator2", "XCUITest", "Android Studio", "Xcode"],
      outcomes: [
        "UPI Intent app-switch and return callback verification",
        "DigiLocker eKYC & camera runtime permission validation",
        "Offline SQLite data persistence & sync recovery",
      ],
    },
    {
      num: "03",
      key: "api-testing",
      title: "API & Microservice Contract Testing",
      tagline: "Catch breaking contract regressions before frontend integration.",
      summary:
        "Comprehensive API test suites using Postman and Newman CLI. Validating JSON schemas, authentication handshakes, webhook signatures, rate-limit resilience, and database state transitions.",
      icon: Terminal,
      tools: ["Postman", "Newman", "REST APIs", "JSON Schema", "Webhooks"],
      outcomes: [
        "Automated JSON schema contract validation on every deployment",
        "OAuth2, JWT token expiration, and auth header assertions",
        "Idempotent retry logic and webhook replay verification",
      ],
    },
    {
      num: "04",
      key: "fintech-payments",
      title: "Fintech & Payment Gateway Gatekeeping",
      tagline: "Zero tolerance for transaction failure or financial state corruption.",
      summary:
        "Specialized QA verification for mission-critical payment workflows. Thoroughly testing UPI, Razorpay, Cashfree, and banking integrations against double-debit races and ledger inconsistencies.",
      icon: Lock,
      tools: ["UPI 2.0", "Razorpay", "Cashfree", "NPCI", "Idempotency"],
      outcomes: [
        "Distributed lock & idempotency testing against concurrency spikes",
        "Payment callback signature validation & ledger symmetry checks",
        "Strict regulatory compliance & sensitive data privacy checks",
      ],
    },
  ];

  // Specialized QA Practices
  const practices = [
    {
      icon: FileCheck2,
      title: "Exploratory & Edge-Case Pass",
      desc: "Uncovering unscripted edge cases, network drops, race conditions, and boundary values that automated scripts alone miss.",
    },
    {
      icon: Cpu,
      title: "Performance & Load Profiling",
      desc: "JMeter stress testing to validate endpoint response SLAs (p95 < 300ms), database lock contention, and concurrency limits.",
    },
    {
      icon: Code2,
      title: "Actionable Defect Triage & RCA",
      desc: "Jira tickets with exact reproduction steps, network HAR payloads, video recordings, and developer-ready root cause analysis.",
    },
    {
      icon: Zap,
      title: "Continuous Quality Pipeline",
      desc: "Shifting QA left into PR checks, automated smoke suites, and deployment gates that block faulty builds before staging.",
    },
  ];

  // Flexible Engagement Models
  const engagementModels = [
    {
      badge: "Full Ownership",
      title: "Sprint-Embedded QA Partner",
      desc: "Dedicated end-to-end testing embedded directly in your engineering team. Owning PRD review, test design, automation, and release sign-off.",
      bullets: ["Agile sprint alignment", "Zero-escape release gatekeeping", "Continuous regression updates"],
    },
    {
      badge: "High Leverage",
      title: "Automation Framework Architecture",
      desc: "Greenfield architecture of a modern Playwright or Appium automation framework tailored to your tech stack, ready for your team to scale.",
      bullets: ["Robust Page Object structure", "CI/CD pipeline integration", "Team onboarding & documentation"],
    },
    {
      badge: "Rapid Audit",
      title: "Pre-Release Launch Hardening",
      desc: "Intensive exploratory, security, and payment gate audit ahead of major product launches, funding milestones, or partner integrations.",
      bullets: ["Critical journey stress-test", "Detailed bug reports with HAR logs", "Actionable release readiness report"],
    },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <div className="enter enter-1">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">01</span> / QA Services &amp; Test Architecture
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                How a release earns the right to ship.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft text-base sm:text-lg">
              Manual exploratory rigor and automated regression pipelines engineered for web, mobile, and fintech architectures. Built to catch critical regressions before users ever can.
            </p>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="enter enter-2 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-b border-line py-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{stat.label}</span>
              <span className="mt-1 font-serif text-3xl font-bold tracking-tight text-pass sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-ink-soft">{stat.hint}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Service Offerings */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-10 sm:mb-12">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              Core Offerings
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
              Four specialized testing services.
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-soft leading-relaxed">
            Every engagement delivers maintainable test suites, clear reproduction logs, and measurable reduction in release risk.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.key}
                data-cursor={`Service: ${service.title}`}
                className="flex flex-col border border-line bg-card p-6 sm:p-8 transition-colors hover:border-pass/50 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-line bg-paper text-pass">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                    Service {service.num}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-1.5 font-serif text-sm italic text-pass">
                  {service.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.summary}
                </p>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5" aria-label={`${service.title} tools`}>
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-line bg-paper px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-ink"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Measurable Outcomes */}
                <div className="mt-6 border-t border-line/60 pt-5">
                  <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase mb-2.5">
                    Verified Outcomes
                  </p>
                  <ul className="space-y-2 text-xs text-ink-soft">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Specialized Practices Strip */}
      <section className="border-t border-line bg-paper-deep py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              Methodology &amp; Discipline
            </p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Engineering-first testing practices.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.title}
                  className="border border-line bg-paper p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-line bg-card text-pass mb-4">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-serif text-lg font-medium text-ink tracking-tight">
                      {practice.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                      {practice.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Defect Case Study (Live proof of deep RCA investigation) */}
      <RcaCaseStudy id="rca" />

      {/* How Teams Work With Me (Engagement Models) */}
      <section className="border-t border-line bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-10 sm:mb-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                Collaboration
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
                How teams engage with Deepak.
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-soft leading-relaxed">
              Flexible engagement structures designed to fit high-velocity startups and scaling engineering teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col border border-line bg-card p-6 sm:p-7 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="border border-pass/40 bg-pass/10 text-pass px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider font-semibold">
                    {model.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl tracking-tight text-ink sm:text-2xl">
                  {model.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                  {model.desc}
                </p>

                <ul className="mt-6 space-y-2 border-t border-line/60 pt-5 text-xs text-ink-soft">
                  {model.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-pass shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Portfolio CTA Bar */}
      <div className="border-t border-line bg-paper-deep py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-line bg-paper p-6 sm:p-8 shadow-xs">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                Get In Touch
              </p>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
                Have an upcoming release or need automation?
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Explore the interactive QA learning workbench or connect directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/experience#skills"
                className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
                data-cursor="Jump to verified technical skills & frameworks"
              >
                <span>Skills &amp; Stack</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/learn"
                className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
                data-cursor="Read technical QA guides, Playwright docs & Q&A"
              >
                <span>Learn Hub</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/#contact"
                className="press inline-flex items-center gap-2 border border-pass bg-pass text-on-band px-4.5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors shadow-2xs"
                data-cursor="Schedule a direct QA consultation"
              >
                <span>Contact Deepak</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
