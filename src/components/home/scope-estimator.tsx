"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileCheck,
  Layers,
  Send,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface ScopePlan {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  coverageSplit: { manual: number; automation: number; api: number };
  criticalRisks: string[];
  recommendedToolkit: string[];
  deliverables: string[];
  timeframe: string;
}

const PLANS: ScopePlan[] = [
  {
    id: "fintech",
    title: "Fintech & Payment Gateway",
    subtitle: "UPI Intent, Netbanking, Multi-Currency Wallets & Double-Debit Protection",
    badge: "Highest Risk / Zero-Tolerance",
    coverageSplit: { manual: 40, automation: 35, api: 25 },
    criticalRisks: [
      "Duplicate ledger debit under flaky 3G network reconnection",
      "Webhook HMAC signature spoofing or missing idempotency locks",
      "Stale currency exchange rate lock window beyond 180 seconds",
      "Sensitive card / PII data exposure in client debug logs",
    ],
    recommendedToolkit: ["Postman Automation", "Charles Proxy", "Playwright", "Redis Mock"],
    deliverables: ["Payment Security Matrix", "Idempotency Test Suite", "Zero-P0 Release Sign-off"],
    timeframe: "Continuous release audit / Pre-launch gate",
  },
  {
    id: "mobile",
    title: "Mobile App (iOS & Android)",
    subtitle: "Consumer utility, e-commerce, banking & cross-device compatibility",
    badge: "Cross-Device UX & Stability",
    coverageSplit: { manual: 45, automation: 45, api: 10 },
    criticalRisks: [
      "Background app kill memory wipe & biometric re-authentication failure",
      "OS-version-specific crashes across Android 10-15 and iOS 16-18",
      "Push notification deep-linking routing errors",
      "Offline cache desynchronization upon network reconnection",
    ],
    recommendedToolkit: ["Appium (Java POM)", "SauceLabs / Real Devices", "ADB Shell", "XCTest"],
    deliverables: ["Device Compatibility Matrix", "Automated Smoke Suite", "Crash-Free Sign-off"],
    timeframe: "Bi-weekly sprint regression & app store builds",
  },
  {
    id: "lending",
    title: "Lending Portal (LOS & LMS)",
    subtitle: "Loan Origination, Underwriting Matrix, e-NACH Mandate & Disbursals",
    badge: "Complex Business Rules",
    coverageSplit: { manual: 50, automation: 30, api: 20 },
    criticalRisks: [
      "Penny-drop beneficiary name mismatch threshold bypass",
      "CIBIL score-tier calculation errors for sanctioning brackets",
      "NACH recurring mandate auto-debit scheduling race condition",
      "Escrow account ledger discrepancy between LOS and LMS",
    ],
    recommendedToolkit: ["Selenium WebDriver", "Postman", "SQL / DBeaver", "Jira Xray"],
    deliverables: ["Underwriting Decision Tree Matrix", "Escrow Reconciliation Suite", "UAT Sign-off"],
    timeframe: "End-to-end milestone UAT and release audits",
  },
  {
    id: "api",
    title: "API & Backend Microservices",
    subtitle: "High-throughput REST/GraphQL APIs, webhooks, and partner integrations",
    badge: "High Concurrency & Load",
    coverageSplit: { manual: 15, automation: 50, api: 35 },
    criticalRisks: [
      "Rate-limit bypass under DDoS burst traffic",
      "Unhandled 500 error cascades causing partner API timeouts",
      "Payload contract schema drift between backend and frontend",
      "Database connection pool exhaustion under 500+ virtual users",
    ],
    recommendedToolkit: ["Postman Collection Runner", "Apache JMeter", "Newman CLI", "Playwright API"],
    deliverables: ["API Regression Collection", "JMeter Stress Benchmark Report", "OpenAPI Contract Validator"],
    timeframe: "Continuous regression & load certification",
  },
];

export function ScopeEstimator() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("fintech");
  const plan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[0];

  return (
    <section className="scroll-mt-20 border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Interactive Quality Planner</span> / Strategic Assessment
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              What are you shipping next?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Select your product architecture to preview Deepak&apos;s tailored test strategy, critical risk checklist, and recommended automation stack.
          </p>
        </div>

        {/* Product Type Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PLANS.map((p) => {
            const isSelected = p.id === plan.id;
            return (
              <button
                key={p.id}
                type="button"
                data-testid={`scope-plan-${p.id}`}
                data-cursor={`Select ${p.title} architecture for test coverage estimate`}
                onClick={() => setSelectedPlanId(p.id)}
                className={`p-4 border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-pass bg-paper text-pass shadow-sm ring-1 ring-pass/40"
                    : "border-line bg-paper/60 text-ink-soft hover:bg-paper hover:text-ink"
                }`}
              >
                <div>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1">
                    {p.badge}
                  </span>
                  <span className="block font-serif text-base font-bold text-ink">{p.title}</span>
                </div>
                <span
                  className={`mt-4 font-mono text-[0.68rem] uppercase tracking-wider ${
                    isSelected ? "text-pass font-semibold" : "text-muted"
                  }`}
                >
                  {isSelected ? "● Strategy Active" : "Select Architecture"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Strategy Board */}
        <div className="mt-4 border border-line bg-paper shadow-sm">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line bg-paper-deep p-5 sm:px-6">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-serif text-2xl text-ink font-bold">{plan.title}</h3>
                <span className="border border-pass/40 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider">
                  Deepak&apos;s Blueprint
                </span>
              </div>
              <p className="text-xs text-ink-soft mt-1">{plan.subtitle}</p>
            </div>

            {/* Coverage Split Bar */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                  Target Coverage Split
                </span>
                <span className="font-mono text-xs text-ink font-semibold">
                  {plan.coverageSplit.manual}% Manual · {plan.coverageSplit.automation}% Auto · {plan.coverageSplit.api}% API
                </span>
              </div>
            </div>
          </div>

          {/* Strategy Details Body */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-line p-6 gap-6 lg:gap-0">
            {/* Left: Critical Risk Checklist */}
            <div className="lg:pr-6 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-red-600 dark:text-red-400" />
                <h4 className="font-serif text-lg font-bold text-ink">
                  High-Risk Failure Points Guarded
                </h4>
              </div>

              <div className="space-y-2.5">
                {plan.criticalRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 border border-line bg-card/60 p-3">
                    <span className="font-mono text-xs text-red-500 font-bold shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="font-sans text-xs text-ink leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Recommended Stack & Deliverables */}
            <div className="lg:pl-6 space-y-5 pt-6 lg:pt-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-4 w-4 text-pass" />
                  <h4 className="font-serif text-lg font-bold text-ink">
                    Engineered Toolkit &amp; Deliverables
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="border border-line bg-card/60 p-3.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                      Core Automation &amp; Test Stack:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {plan.recommendedToolkit.map((tool) => (
                        <span
                          key={tool}
                          className="border border-pass/30 bg-paper px-2.5 py-1 font-mono text-xs text-pass font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-line bg-card/60 p-3.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                      Release Sign-Off Artifacts:
                    </span>
                    <div className="mt-2 space-y-1">
                      {plan.deliverables.map((del) => (
                        <p key={del} className="text-xs text-ink flex items-center gap-1.5 font-sans">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                          <span>{del}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Call to Action */}
              <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[0.68rem] text-pass font-semibold block uppercase">
                    Ready to harden your release?
                  </span>
                  <p className="text-xs text-ink-soft">
                    Deepak provides full QA lifecycle ownership from test strategy to final production sign-off.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  data-testid="scope-btn-contact"
                  data-cursor="Start a quality assurance consultation with Deepak"
                  className="press inline-flex items-center gap-2 border border-pass bg-pass text-paper px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass/90 transition-colors shrink-0 shadow-sm"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Start a conversation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
