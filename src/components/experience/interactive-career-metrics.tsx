"use client";

import { useState } from "react";
import {
  Award,
  CheckCircle2,
} from "lucide-react";

interface CareerHighlight {
  id: string;
  category: "victory" | "defect" | "roi";
  title: string;
  org: string;
  date: string;
  metric: string;
  summary: string;
  technicalImpact: string[];
}

const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  {
    id: "paulpay-launch",
    category: "victory",
    title: "Zero-Defect Launch: PaulPay UPI 2.0",
    org: "Paul Merchants Ltd",
    date: "2024 - 2026",
    metric: "0 P0 Escapes · 50k+ Users",
    summary: "Led full-lifecycle QA for the core PaulPay consumer UPI wallet. Designed automated intent/collect test suites and handled live bank switch testing.",
    technicalImpact: [
      "Simulated 500+ concurrent payment callbacks to verify NPCI switch resilience",
      "Automated biometric auth & FaceID credential retrieval in under 300ms SLA",
      "Achieved 100% production gate clearance on initial multi-bank rollout",
    ],
  },
  {
    id: "credme-lms",
    category: "roi",
    title: "Automation ROI: CredMe Loan Suite",
    org: "Paul Merchants Ltd",
    date: "2024 - 2026",
    metric: "-70% Sanity Turnaround",
    summary: "Engineered reusable Page Object Model (POM) automation frameworks in Playwright & Appium, cutting multi-day regression cycles to under 4 hours.",
    technicalImpact: [
      "Migrated 400+ fragile manual regression test cases to parallel Playwright runners",
      "Established zero-flakiness retry criteria with automatic video trace captures",
      "Integrated automated regression runs directly into staging CI deployment triggers",
    ],
  },
  {
    id: "race-condition",
    category: "defect",
    title: "Mission-Critical Intercept: Double-Debit Race",
    org: "Paul Merchants Ltd",
    date: "2024",
    metric: "Intercepted in Staging",
    summary: "Discovered an asynchronous race condition in the loan disbursal pipeline where throttled network retries allowed duplicate money movement.",
    technicalImpact: [
      "Reproduced using Charles Proxy network throttling (3G Slow 450ms RTT profile)",
      "Proved in-memory idempotency check failed under concurrent worker threads",
      "Mandated distributed Redis SETNX row locks, completely preventing financial leakage",
    ],
  },
  {
    id: "exude-merchant",
    category: "victory",
    title: "Merchant Multi-Gateway Escrow Verification",
    org: "Exude Vincom Pvt Ltd",
    date: "2021 - 2023",
    metric: "100% Reconciliation Accuracy",
    summary: "Owned end-to-end quality assurance across Razorpay, Cashfree, and PayU payment gateways for enterprise merchant portal.",
    technicalImpact: [
      "Engineered automated three-way reconciliation scripts (Merchant, Gateway, Bank)",
      "Validated gross settlement fees, contractual MDR deductions, and refund reversals",
      "Guaranteed zero ledger delta across 15+ continuous release cycles",
    ],
  },
];

export function InteractiveCareerMetrics() {
  const [filter, setFilter] = useState<"all" | "victory" | "defect" | "roi">("all");

  const filteredItems = filter === "all"
    ? CAREER_HIGHLIGHTS
    : CAREER_HIGHLIGHTS.filter((h) => h.category === filter);

  return (
    <div className="border border-line bg-paper p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-pass" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Verified Career Milestones &amp; ROI
            </h3>
          </div>
          <p className="text-xs text-ink-soft mt-1">
            Proven outcomes, major production launches, and critical defects intercepted during Deepak&apos;s career.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 border border-line bg-card p-1">
          <button
            type="button"
            data-testid="career-filter-all"
            onClick={() => setFilter("all")}
            className={`px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider transition-colors ${
              filter === "all" ? "bg-pass text-on-band font-bold" : "text-muted hover:text-ink"
            }`}
          >
            All Milestones
          </button>
          <button
            type="button"
            data-testid="career-filter-victory"
            onClick={() => setFilter("victory")}
            className={`px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider transition-colors ${
              filter === "victory" ? "bg-pass text-on-band font-bold" : "text-muted hover:text-ink"
            }`}
          >
            Release Wins
          </button>
          <button
            type="button"
            data-testid="career-filter-defect"
            onClick={() => setFilter("defect")}
            className={`px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider transition-colors ${
              filter === "defect" ? "bg-pass text-on-band font-bold" : "text-muted hover:text-ink"
            }`}
          >
            Defects Stopped
          </button>
          <button
            type="button"
            data-testid="career-filter-roi"
            onClick={() => setFilter("roi")}
            className={`px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider transition-colors ${
              filter === "roi" ? "bg-pass text-on-band font-bold" : "text-muted hover:text-ink"
            }`}
          >
            Automation ROI
          </button>
        </div>
      </div>

      {/* Grid of Highlight Cards */}
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border border-line bg-card p-5 flex flex-col justify-between space-y-4 hover:border-pass/60 transition-colors shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                <span className="border border-line bg-paper px-2 py-0.5 text-[0.62rem] text-muted uppercase">
                  {item.org}
                </span>
                <span className="text-pass font-bold text-[0.7rem] bg-pass-fill/10 border border-pass/30 px-2 py-0.5">
                  {item.metric}
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-ink leading-tight">
                {item.title}
              </h4>
              <p className="mt-2 text-xs text-ink-soft leading-relaxed font-sans">
                {item.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-line/60 space-y-1.5 font-mono text-xs">
              <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                Technical Evidence:
              </span>
              {item.technicalImpact.map((impact, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[0.7rem] text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0 mt-0.5" />
                  <span className="leading-snug">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

