"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  Play,
  RotateCcw,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Link from "next/link";

interface AssertionItem {
  label: string;
  latency: string;
  tag: string;
}

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: React.ElementType;
  highlights: string[];
  tools: string[];
  outcome: string;
  metricLabel: string;
  metricValue: string;
  runner: {
    title: string;
    runtimeTarget: string;
    command: string;
    framework: string;
    executionTime: string;
    assertions: AssertionItem[];
  };
}

const SERVICES_DATA: ServiceItem[] = [
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
    metricLabel: "Regression Turnaround",
    metricValue: "-78% Cycle Time",
    runner: {
      title: "Playwright Test Runner · Chromium & Android",
      runtimeTarget: "Playwright 1.48 · Chrome & Android 14 Viewports",
      command: "npx playwright test --project=chromium,mobile-android --workers=4",
      framework: "Playwright + Appium",
      executionTime: "1.84s",
      assertions: [
        { label: "Assert biometric biometric-prompt resolves in < 300ms", latency: "64ms", tag: "E2E" },
        { label: "Assert checkout cart state survives refresh with zero cache drift", latency: "128ms", tag: "State" },
        { label: "Capture video trace & zero-flakiness retry assertion confirmed", latency: "42ms", tag: "Telemetry" },
      ],
    },
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
    tools: ["Network Logs", "Postman", "DevTools", "Xcode Sim"],
    outcome: "100% defect containment on checkout & payment funnels.",
    metricLabel: "Defect Containment",
    metricValue: "Zero P0 Escapes",
    runner: {
      title: "Network Throttling & Heuristic Discovery",
      runtimeTarget: "Network Simulation · 3G Jitter & Latency Injection",
      command: "network --throttle=3g-slow --drop-packets=12% --inspect-handshake",
      framework: "Network + Logcat",
      executionTime: "2.40s",
      assertions: [
        { label: "Intercept background suspend & assert memory zeroed on trim", latency: "85ms", tag: "Security" },
        { label: "Simulate offline payment swipe and assert FIFO queue replay", latency: "140ms", tag: "Resilience" },
        { label: "Stress-test rapid 5x tap race condition on payment button", latency: "92ms", tag: "Concurrency" },
      ],
    },
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
    tools: ["Postman", "Apache JMeter", "Newman", "REST APIs"],
    outcome: "Sub-300ms SLA verified under 500+ concurrent threads.",
    metricLabel: "High-Concurrency SLA",
    metricValue: "p99 < 150ms",
    runner: {
      title: "Apache JMeter & Newman · Concurrency Benchmark",
      runtimeTarget: "Apache JMeter 5.6 · 500 Virtual Concurrent Users",
      command: "jmeter -n -t payments_load.jmx -Jthreads=500 -Jrampup=15s",
      framework: "JMeter + Newman",
      executionTime: "0.85s",
      assertions: [
        { label: "Validate JSON Schema contract compliance", latency: "38ms", tag: "Schema" },
        { label: "Assert HMAC-SHA256 signature verification in webhook callback", latency: "45ms", tag: "Auth" },
        { label: "Confirm p99 latency at 148ms under 500 threads (< 300ms strict SLA)", latency: "65ms", tag: "Benchmark" },
      ],
    },
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
    tools: ["UPI Simulator", "Redis Mock", "Payment Gateways", "Postman"],
    outcome: "Zero P0 financial escapes across 20+ production releases.",
    metricLabel: "Ledger Integrity",
    metricValue: "0.00 INR Delta",
    runner: {
      title: "NPCI UPI 2.0 & Redis Mock · Idempotency Gate",
      runtimeTarget: "NPCI UPI 2.0 Simulator & Redis Idempotency Engine",
      command: "newman run upi_escrow_suite.json --env=staging --bail=false",
      framework: "NPCI + Redis",
      executionTime: "1.12s",
      assertions: [
        { label: "Assert distributed Redis SETNX idempotency lock lease active (30s)", latency: "22ms", tag: "Lock" },
        { label: "Verify ₹1 penny-drop name similarity >= 85% safety threshold", latency: "89ms", tag: "KYC" },
        { label: "Confirm double-entry ledger balance delta == 0.00 INR", latency: "37ms", tag: "Ledger" },
      ],
    },
  },
];

export function InteractiveServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>("automation");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(-1);

  const service = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];
  const ServiceIcon = service.icon;

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(-1);

    const steps = service.runner.assertions.length;
    let current = 0;

    const interval = setInterval(() => {
      setSimStep(current);
      current++;
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
        }, 350);
      }
    }, 400);
  };

  const handleSelectTab = (id: string) => {
    setActiveServiceId(id);
    setSimStep(-1);
    setIsSimulating(false);
  };

  const isDone = simStep >= service.runner.assertions.length - 1;
  const passedCount = simStep >= 0 ? Math.min(simStep + 1, service.runner.assertions.length) : 0;

  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Testing Services</span> / Core Capabilities
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              How releases earn the right to ship.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-ink-soft sm:text-right">
            Four core testing disciplines engineered for zero defect escapes. Select a capability to inspect key methods and execute real-time simulation.
          </p>
        </div>

        {/* 4 Capability Selector Tabs */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {SERVICES_DATA.map((s) => {
            const isSelected = s.id === service.id;
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                data-testid={`service-tab-${s.id}`}
                onClick={() => handleSelectTab(s.id)}
                className={`p-3.5 border text-left transition-all flex flex-col justify-between select-none ${
                  isSelected
                    ? "border-pass bg-paper text-pass shadow-xs ring-1 ring-pass/40"
                    : "border-line bg-paper/60 text-ink-soft hover:bg-paper hover:text-ink"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center border transition-colors ${
                      isSelected ? "border-pass bg-pass-fill/15 text-pass" : "border-line bg-paper text-muted"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-serif text-sm font-bold text-ink truncate">{s.name}</span>
                </div>
                <span
                  className={`mt-2.5 font-mono text-[0.62rem] uppercase tracking-wider ${
                    isSelected ? "text-pass font-semibold" : "text-muted"
                  }`}
                >
                  {isSelected ? "● Active View" : "Select"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Container: Service Specs on Left, Interactive Test Runner on Right */}
        <div key={service.id} className="mt-4 border border-line bg-paper shadow-xs content-fade">
          <div className="p-5 sm:p-6 lg:p-7">
            {/* Sub-Header: Title, Badge & Stack Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/60 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center border border-pass/30 bg-pass-fill/15 text-pass shrink-0">
                  <ServiceIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">{service.name}</h3>
                    <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider font-semibold">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-soft mt-0.5">{service.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {service.tools.map((t) => (
                  <span key={t} className="border border-line bg-card px-2.5 py-1 font-mono text-[0.68rem] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Split Grid: Left Details & Right Themed Test Runner */}
            <div className="mt-6 grid lg:grid-cols-12 gap-6 items-stretch">
              {/* LEFT SIDE (5 Columns): Highlights, Outcome & Methodology Link */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted block mb-2.5">
                      Core Testing Disciplines &amp; Architecture:
                    </span>
                    <div className="space-y-2">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 border border-line/70 bg-card/40 p-2.5">
                          <CheckCircle2 className="h-4 w-4 text-pass shrink-0 mt-0.5" />
                          <span className="text-xs text-ink leading-relaxed font-sans">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production Outcome Box */}
                  <div className="border border-line bg-card/60 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                        Verified Production Outcome:
                      </span>
                      <span className="font-mono text-[0.65rem] text-pass font-semibold uppercase tracking-wider">
                        {service.metricValue}
                      </span>
                    </div>
                    <p className="font-serif text-sm text-ink font-bold leading-snug">
                      {service.outcome}
                    </p>
                    <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                      Engineered to protect high-volume fintech and consumer applications from financial loss, downtime, and user trust erosion.
                    </p>
                  </div>
                </div>

                {/* Footer Authority & CTA */}
                <div className="pt-3 border-t border-line/60 flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.68rem] text-muted">
                    Zero P0 Defects Standard
                  </span>
                  <Link
                    href="/services"
                    data-testid="services-redirect-cta"
                    className="press inline-flex items-center gap-1.5 border border-pass bg-card px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0 shadow-xs"
                    data-cursor="Inspect all testing frameworks and deliverables"
                  >
                    <span>Full methodology</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE (7 Columns): Themed Dynamic Test Runner */}
              <div className="lg:col-span-7 flex flex-col">
                <div
                  className="border border-line bg-card flex-1 flex flex-col justify-between shadow-2xs overflow-hidden"
                  data-testid="services-test-runner-panel"
                >
                  {/* Runner Top Terminal Bar */}
                  <div className="border-b border-line bg-paper px-4 py-3 sm:px-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          isSimulating
                            ? "bg-amber-500 animate-ping"
                            : isDone
                            ? "bg-pass"
                            : "bg-pass"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-semibold text-ink truncate">
                        {service.runner.title}
                      </span>
                    </div>

                    {/* Simulate Run Button */}
                    <button
                      type="button"
                      data-testid={`simulate-service-${service.id}`}
                      onClick={handleRunSimulation}
                      disabled={isSimulating}
                      className="press inline-flex items-center gap-1.5 border border-pass bg-pass text-on-band px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors disabled:opacity-60 shrink-0 shadow-xs"
                      data-cursor={`Run simulated assertions for ${service.name}`}
                    >
                      {isSimulating ? (
                        <>
                          <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                          <span>Executing...</span>
                        </>
                      ) : isDone ? (
                        <>
                          <RotateCcw className="h-3.5 w-3.5" />
                          <span>Re-run Suite</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current" />
                          <span>Simulate Run</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Runtime Target & CLI Command Bar */}
                  <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Environment Target Info */}
                      <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                        <span className="truncate">{service.runner.runtimeTarget}</span>
                        <span className="shrink-0 text-pass font-semibold">{service.runner.framework}</span>
                      </div>

                      {/* Command Terminal Bar */}
                      <div className="border border-line bg-paper p-2.5 font-mono text-xs text-ink-soft flex items-center gap-2 overflow-x-auto shadow-2xs">
                        <span className="text-pass font-bold select-none">$</span>
                        <code className="text-ink text-[0.72rem] select-all whitespace-nowrap">
                          {service.runner.command}
                        </code>
                      </div>
                    </div>

                    {/* Dynamic Assertion Execution Rows */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted">
                          Live Verification Assertions:
                        </span>
                        <span className="font-mono text-[0.65rem] text-muted">
                          {passedCount}/{service.runner.assertions.length} Verified
                        </span>
                      </div>

                      <div className="space-y-2">
                        {service.runner.assertions.map((assertion, idx) => {
                          const isPassed = simStep >= idx;
                          const isRunning = isSimulating && simStep === idx - 1;

                          return (
                            <div
                              key={idx}
                              className={`p-2.5 border transition-all flex items-center justify-between gap-3 text-xs ${
                                isPassed
                                  ? "border-pass/40 bg-pass-fill/5"
                                  : isRunning
                                  ? "border-amber-500/50 bg-amber-500/5"
                                  : "border-line bg-paper/50 text-muted"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="shrink-0">
                                  {isPassed ? (
                                    <CheckCircle2 className="h-4 w-4 text-pass" />
                                  ) : isRunning ? (
                                    <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                                  ) : (
                                    <span className="inline-block h-3.5 w-3.5 rounded-full border border-muted" />
                                  )}
                                </span>
                                <span
                                  className={`font-mono text-xs leading-tight truncate ${
                                    isPassed ? "text-ink font-medium" : isRunning ? "text-ink" : "text-ink-soft"
                                  }`}
                                >
                                  {assertion.label}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 font-mono text-[0.68rem]">
                                <span className="border border-line bg-paper px-1.5 py-0.5 text-muted hidden sm:inline-block">
                                  {assertion.tag}
                                </span>
                                <span className={isPassed ? "text-pass font-semibold" : "text-muted"}>
                                  {isPassed ? assertion.latency : "--"}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Progress Bar during simulation */}
                    {isSimulating && (
                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-paper border border-line overflow-hidden">
                          <div
                            className="h-full bg-pass transition-all duration-300 ease-out"
                            style={{
                              width: `${((simStep + 1) / service.runner.assertions.length) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Runner Telemetry Footer Bar */}
                  <div className="border-t border-line bg-paper px-4 py-2.5 sm:px-5 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-muted text-[0.68rem] uppercase">Status:</span>
                      <span
                        className={`text-[0.72rem] font-semibold uppercase ${
                          isDone ? "text-pass" : isSimulating ? "text-amber-500" : "text-ink"
                        }`}
                      >
                        {isSimulating
                          ? "Running Assertions..."
                          : isDone
                          ? "Pass 100% · All Verified"
                          : "Ready to Execute"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[0.68rem] text-muted">
                      <span>Total: <strong className="text-ink">{service.runner.executionTime}</strong></span>
                      <span className="hidden sm:inline">· Strict SLA Gate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
