import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { ServicesSection } from "@/components/home/services";
import { services } from "@/data";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: "Testing Services & Quality Engineering",
    description:
      "Professional QA testing services by Deepak Gupta: Manual exploratory testing, automated regression in Playwright & Appium, fintech payment verification (UPI, Razorpay, Cashfree), and defect root cause analysis.",
    alternates: { canonical: "/services" },
    openGraph: {
      title: `Testing Services & Quality Engineering — ${siteTitleSuffix}`,
      description:
        "Specialized QA services: Manual exploratory passes, automated regression suites in Playwright & Appium, fintech payment gatekeeper checks, and root cause analysis.",
      url: "/services",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} testing services` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Testing Services & Quality Engineering — ${siteTitleSuffix}`,
      description:
        "Specialized QA services: Manual exploratory passes, automated regression suites in Playwright & Appium, fintech payment gatekeeper checks, and root cause analysis.",
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

  const deliverables = [
    {
      num: "01",
      title: "Test Strategy & Plan",
      icon: FileSpreadsheet,
      body: "Comprehensive scope definition, device/browser coverage matrix, environmental topology, risk assessment, and clear entry/exit criteria for every milestone.",
    },
    {
      num: "02",
      title: "Traceability Matrix (RTM)",
      icon: Layers,
      body: "Bidirectional traceability linking PRD/FRD user stories and business rules directly to executed test cases and automated regression scripts.",
    },
    {
      num: "03",
      title: "Actionable Bug Reports & RCA",
      icon: Activity,
      body: "Structured Jira defect tickets with clear reproduction steps, network HAR files, request/response payloads, video captures, and root cause isolation.",
    },
    {
      num: "04",
      title: "Release Sign-off Certificate",
      icon: ShieldCheck,
      body: "Formal deployment authorization summarizing test pass rates, open risk waivers, performance benchmarks, and explicit go/no-go recommendations.",
    },
  ];

  const phases = [
    {
      step: "Phase 1",
      title: "Requirement Analysis & Risk Discovery",
      body: "Early review of PRDs, user stories, and partner API contracts. Identifying payment edge cases, validation gaps, and race conditions before code is written.",
    },
    {
      step: "Phase 2",
      title: "Manual Exploratory & Edge-Case Pass",
      body: "Real-device testing across Android, iOS, and desktop browsers. Verifying UPI intent/collect flows, camera permissions for KYC, and network drop recovery.",
    },
    {
      step: "Phase 3",
      title: "Automated Regression Execution",
      body: "Execution of Playwright and Appium test suites across critical merchant journeys. Ensuring legacy functionality remains intact on every code change.",
    },
    {
      step: "Phase 4",
      title: "Release Gate & Production Sanity",
      body: "Final sign-off validation against pre-prod staging, followed by immediate post-deployment sanity checks in production with zero disruption to active users.",
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
                <span className="text-pass">01</span> / Testing Services &amp; Quality Engineering
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                How a release earns the right to ship.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft text-base sm:text-lg">
              {services.lede}
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

      {/* Main Services Section with Toolkit Enabled */}
      <ServicesSection showToolkit={true} showHeader={false} id="core-services" />

      {/* QA Deliverables & Artefacts */}
      <section className="border-t border-line bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                Deliverables &amp; Documentation
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
                Tangible proof at every release milestone.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Every QA engagement yields clear, auditable documentation that gives engineering leaders complete confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="flex flex-col border border-line bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-paper text-pass">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Stage Quality Lifecycle */}
      <section className="border-t border-line bg-paper-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              End-to-End Methodology
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
              The 4-stage quality assurance lifecycle.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              From requirement grooming to post-deployment health checks, testing is integrated directly into each stage of product delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, idx) => (
              <div key={phase.step} className="flex flex-col border border-line bg-paper p-5 sm:p-6">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                  {phase.step}
                </span>
                <h3 className="mt-3 font-serif text-xl tracking-tight text-ink">{phase.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{phase.body}</p>
                <div className="mt-auto pt-4 flex items-center gap-1.5 text-pass font-mono text-[0.68rem] uppercase">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Stage {idx + 1} Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech & Mobile Domain Specialization */}
      <section className="border-t border-line bg-card py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                Domain Specialization
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl text-ink">
                Fintech payments, lending, &amp; native mobile testing.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft text-sm sm:text-base">
                Testing financial software demands deep familiarity with regulatory compliance, bank partner gateways, and sensitive user data. I specialize in testing payment flows that cannot afford failure:
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-pass mt-0.5" />
                  <span><strong>UPI &amp; Gateway Integrations:</strong> Validation of intent flows, QR scanning, Razorpay, Cashfree, and PayU webhooks under network jitter.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-pass mt-0.5" />
                  <span><strong>Loan Origination &amp; Management (LOS/LMS):</strong> Multi-step underwriting, repayment schedules, interest calculations, and bank mandates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-pass mt-0.5" />
                  <span><strong>eKYC &amp; Onboarding:</strong> DigiLocker Aadhaar paperless offline XML, PAN verification, and Aadhaar eSign consent flows.</span>
                </li>
              </ul>
            </div>

            <div className="border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-pass" />
                <h3 className="font-serif text-2xl tracking-tight text-ink">Mobile Device Coverage</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                Native app tests executed across both Android and iOS real devices and emulators:
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="border border-line bg-card p-3">
                  <p className="text-pass font-bold">Android Matrix</p>
                  <p className="text-muted mt-1 text-[0.7rem]">OS 10 through 15</p>
                  <p className="text-ink-soft mt-1 text-[0.7rem]">Samsung, Pixel, Xiaomi, OnePlus</p>
                </div>
                <div className="border border-line bg-card p-3">
                  <p className="text-pass font-bold">iOS Matrix</p>
                  <p className="text-muted mt-1 text-[0.7rem]">iOS 15 through 18</p>
                  <p className="text-ink-soft mt-1 text-[0.7rem]">iPhone 11 through 16 Pro</p>
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-4 flex items-center justify-between text-xs text-muted">
                <span>Frameworks</span>
                <span className="font-mono text-ink">Appium · UiAutomator2 · XCUITest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-t border-line">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-paper border border-line p-6 sm:p-8">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
              Next in Portfolio
            </p>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
              Ready to see the tools, code &amp; investigations?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Explore the full technical skills list, read a live defect investigation, or reach out directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/skills"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="ATS keywords & stack"
            >
              <span>Skills &amp; Toolkit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/rca"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Race condition investigation"
            >
              <span>RCA Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#contact"
              className="press inline-flex items-center gap-2 border border-pass bg-paper px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
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
