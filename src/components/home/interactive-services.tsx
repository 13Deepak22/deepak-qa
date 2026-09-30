"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Link from "next/link";

interface MinimalServiceItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: React.ElementType;
  highlights: string[];
  tools: string[];
  outcome: string;
}

const SERVICES_DATA: MinimalServiceItem[] = [
  {
    id: "automation",
    name: "Web & Mobile Automation",
    tagline: "Resilient E2E regression suites across Android, iOS & Web browsers.",
    badge: "SDET Frameworks",
    icon: Code2,
    highlights: [
      "Page Object Model (POM) architecture with zero maintenance flakiness",
      "Headless parallel execution across desktop and mobile browser viewports",
      "Automated trace capture, video recordings, and failure diagnostics",
    ],
    tools: ["Playwright", "Appium", "Selenium", "TypeScript"],
    outcome: "Cuts regression turnaround from 2 days to under 4 hours.",
  },
  {
    id: "exploratory",
    name: "Manual Exploratory",
    tagline: "Heuristic discovery targeting edge cases that automated scripts miss.",
    badge: "Edge Defect Hunting",
    icon: Compass,
    highlights: [
      "Boundary-value analysis, equivalence partitioning & state transitions",
      "Network latency injection, offline cache recovery & airplane mode triage",
      "Biometric session interrupts and multi-device usability checks",
    ],
    tools: ["Charles Proxy", "Postman", "ADB Shell", "Xcode Sim"],
    outcome: "100% defect containment on checkout & payment funnels.",
  },
  {
    id: "api",
    name: "API & Microservices",
    tagline: "Schema contracts, webhook resilience, and high-concurrency benchmarks.",
    badge: "Backend & Gateway",
    icon: Terminal,
    highlights: [
      "OpenAPI and JSON Schema contract validation with automated auth",
      "HMAC signature verification, webhook retries & backoff scheduling",
      "Concurrency stress testing using Apache JMeter to detect deadlocks",
    ],
    tools: ["Postman", "Apache JMeter", "Newman", "Swagger"],
    outcome: "Sub-300ms SLA verified under 500+ concurrent threads.",
  },
  {
    id: "fintech",
    name: "Fintech & Payments",
    tagline: "Zero-tolerance verification for UPI, digital lending & escrow ledgers.",
    badge: "Mission-Critical",
    icon: ShieldCheck,
    highlights: [
      "Distributed double-debit & race condition prevention with Redis locks",
      "Automated penny-drop beneficiary validation across 25+ Indian banks",
      "e-NACH auto-debit scheduling and RBI regulatory compliance checks",
    ],
    tools: ["UPI Simulator", "Redis Mock", "Charles Proxy", "Postman"],
    outcome: "Zero P0 financial escapes across 20+ production releases.",
  },
];

export function InteractiveServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>("automation");
  const service = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];
  const ServiceIcon = service.icon;

  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Testing Services</span> / Core Capabilities
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              How releases earn the right to ship.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Four core testing disciplines engineered for zero defect escapes. Select a capability to inspect key methods.
          </p>
        </div>

        {/* 4 Minimal Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {SERVICES_DATA.map((s) => {
            const isSelected = s.id === service.id;
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                data-testid={`service-tab-${s.id}`}
                onClick={() => setActiveServiceId(s.id)}
                className={`p-3 border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-pass bg-paper text-pass shadow-xs ring-1 ring-pass/40"
                    : "border-line bg-paper/60 text-ink-soft hover:bg-paper hover:text-ink"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center border ${
                      isSelected ? "border-pass bg-pass-fill/15 text-pass" : "border-line bg-paper text-muted"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-serif text-sm font-bold text-ink truncate">{s.name}</span>
                </div>
                <span
                  className={`mt-2 font-mono text-[0.62rem] uppercase tracking-wider ${
                    isSelected ? "text-pass font-semibold" : "text-muted"
                  }`}
                >
                  {isSelected ? "● Active View" : "Select"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimal Active Service Card */}
        <div key={service.id} className="mt-3 border border-line bg-paper shadow-xs content-fade">
          <div className="p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/60 pb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center border border-pass/30 bg-pass-fill/15 text-pass shrink-0">
                  <ServiceIcon className="h-4 w-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">{service.name}</h3>
                    <span className="border border-pass/30 bg-pass-fill/10 text-pass px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-xs text-ink-soft mt-0.5">{service.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {service.tools.map((t) => (
                  <span key={t} className="border border-line bg-paper px-2 py-0.5 font-mono text-[0.68rem] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights & Verified Outcome Grid */}
            <div className="mt-3.5 grid md:grid-cols-2 gap-4 items-center">
              {/* Left: 3 concise checkmarks */}
              <div className="space-y-1.5">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                    <span className="text-xs text-ink font-sans">{h}</span>
                  </div>
                ))}
              </div>

              {/* Right: Outcome Box + Redirect CTA */}
              <div className="border border-line bg-card/60 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted block">
                    Verified Production Outcome:
                  </span>
                  <p className="font-mono text-xs text-pass font-semibold mt-0.5">
                    {service.outcome}
                  </p>
                </div>

                <Link
                  href="/services"
                  data-testid="services-redirect-cta"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0 shadow-xs"
                >
                  <span>Full methodology</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
