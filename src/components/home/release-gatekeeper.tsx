"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  FileCode,
  Gauge,
  Lock,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Unlock,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface GateRule {
  id: string;
  name: string;
  description: string;
  category: string;
  healthyState: string;
  failingState: string;
  impactOnFailure: string;
}

const GATE_RULES: GateRule[] = [
  {
    id: "p0-bugs",
    name: "Zero Critical (P0/P1) Defects",
    description: "No blocker issues in core transaction or auth journeys.",
    category: "Defect Triage",
    healthyState: "0 Open P0/P1 Bugs",
    failingState: "1 Blocker Bug Detected in Payment Gateway",
    impactOnFailure: "Blocks deployment. Prevents revenue loss and broken user journeys.",
  },
  {
    id: "regression-pass",
    name: "Automated Regression Coverage",
    description: "Full suite of Playwright & Appium end-to-end tests.",
    category: "Test Automation",
    healthyState: "100% Suites Green (142/142 Passed)",
    failingState: "2 Failing E2E Checks in KYC Flow",
    impactOnFailure: "Regression failure indicates unintended side-effects in new build.",
  },
  {
    id: "latency-sla",
    name: "API Latency & 99th Percentile SLA",
    description: "Backend endpoints response time under concurrency.",
    category: "Performance SLA",
    healthyState: "148ms p95 (Well under 300ms SLA)",
    failingState: "1,840ms Latency Spike on /disburse",
    impactOnFailure: "High latency triggers mobile timeout exceptions and payment drops.",
  },
  {
    id: "idempotency-check",
    name: "Fintech Concurrency & Idempotency",
    description: "Redis distributed locks on payment debit endpoints.",
    category: "Financial Safety",
    healthyState: "Idempotency Verified & Lock Active",
    failingState: "Missing Idempotency Token on Retry",
    impactOnFailure: "Catastrophic risk: Network retry will double-debit customer accounts.",
  },
];

export function ReleaseGatekeeper() {
  // State for the 4 toggles: true = healthy/pass, false = failing/blocked
  const [gateStates, setGateStates] = useState<Record<string, boolean>>({
    "p0-bugs": true,
    "regression-pass": true,
    "latency-sla": true,
    "idempotency-check": true,
  });

  const toggleGate = (id: string) => {
    setGateStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAllGreen = () => {
    setGateStates({
      "p0-bugs": true,
      "regression-pass": true,
      "latency-sla": true,
      "idempotency-check": true,
    });
  };

  const simulateFailure = () => {
    setGateStates({
      "p0-bugs": false,
      "regression-pass": true,
      "latency-sla": true,
      "idempotency-check": false,
    });
  };

  const passedCount = Object.values(gateStates).filter(Boolean).length;
  const isApproved = passedCount === 4;
  const failedRules = GATE_RULES.filter((r) => !gateStates[r.id]);

  return (
    <section className="scroll-mt-20 border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Interactive Decision Gate</span> / Release Philosophy
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              The Release Gatekeeper: Ship or Halt?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Toggle Deepak&apos;s real-world release criteria below to see how his rigorous quality gate safeguards production deployments.
          </p>
        </div>

        {/* Gatekeeper Interactive Board */}
        <div className="mt-10 border border-line bg-paper shadow-sm">
          {/* Top Status Banner */}
          <div
            className={`p-6 sm:px-8 border-b transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isApproved
                ? "bg-pass-fill/15 border-pass/40 text-ink"
                : "bg-red-500/10 border-red-500/30 text-ink"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`inline-flex h-14 w-14 shrink-0 items-center justify-center border ${
                  isApproved
                    ? "border-pass bg-card text-pass"
                    : "border-red-500 bg-card text-red-600 dark:text-red-400"
                }`}
              >
                {isApproved ? (
                  <Unlock className="h-7 w-7" />
                ) : (
                  <Lock className="h-7 w-7" />
                )}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[0.7rem] uppercase tracking-wider px-2 py-0.5 font-bold ${
                      isApproved
                        ? "bg-pass text-paper"
                        : "bg-red-600 text-paper"
                    }`}
                  >
                    {isApproved ? "GATE OPEN" : "GATE LOCKED"}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {passedCount}/4 Checks Green
                  </span>
                </div>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold">
                  {isApproved
                    ? "Production Deployment Approved"
                    : "Deployment Halted — Critical Failures Detected"}
                </h3>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={resetAllGreen}
                className="px-3 py-1.5 border border-line bg-card text-xs font-mono text-muted hover:text-ink transition-colors flex items-center gap-1"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                <span>All Green</span>
              </button>
              <button
                type="button"
                onClick={simulateFailure}
                className="px-3 py-1.5 border border-line bg-card text-xs font-mono text-muted hover:text-ink transition-colors flex items-center gap-1"
              >
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                <span>Simulate Failure</span>
              </button>
            </div>
          </div>

          {/* Interactive Toggle Grid */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            {/* Left: 4 Interactive Switches */}
            <div className="p-6 space-y-4">
              <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase block">
                Click Any Check to Toggle Its State:
              </span>

              <div className="space-y-3">
                {GATE_RULES.map((rule) => {
                  const isHealthy = gateStates[rule.id];
                  return (
                    <button
                      key={rule.id}
                      type="button"
                      onClick={() => toggleGate(rule.id)}
                      className={`w-full text-left p-4 border transition-all flex items-start justify-between gap-3 ${
                        isHealthy
                          ? "border-pass/40 bg-pass-fill/5 hover:border-pass"
                          : "border-red-500/50 bg-red-500/5 hover:border-red-500"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block h-2.5 w-2.5 rounded-full ${
                              isHealthy ? "bg-pass animate-pulse" : "bg-red-500"
                            }`}
                          />
                          <p className="font-sans text-xs font-bold text-ink">
                            {rule.name}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-ink-soft">
                          {rule.description}
                        </p>
                        <p
                          className={`mt-2 font-mono text-[0.72rem] font-semibold ${
                            isHealthy ? "text-pass" : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {isHealthy ? `✓ ${rule.healthyState}` : `✕ ${rule.failingState}`}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <span
                          className={`inline-block font-mono text-[0.65rem] uppercase tracking-wider px-2 py-1 border ${
                            isHealthy
                              ? "border-pass/30 bg-card text-pass"
                              : "border-red-500/30 bg-card text-red-600 dark:text-red-400"
                          }`}
                        >
                          {isHealthy ? "PASS" : "BLOCK"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Live Gate Decision Log */}
            <div className="p-6 flex flex-col justify-between bg-card/40">
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    Gatekeeper Audit Log
                  </span>
                  <span className="font-mono text-xs text-pass">Real-time Gate Evaluation</span>
                </div>

                {isApproved ? (
                  <div className="space-y-4">
                    <div className="border border-pass/30 bg-paper p-4">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="h-5 w-5 text-pass shrink-0 mt-0.5" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-pass font-bold">
                            Zero-Defect Sign-off Ready
                          </p>
                          <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">
                            All 4 quality gates satisfy Deepak&apos;s rigorous release requirements. Zero P0/P1 defects, 100% automated regression passed, API SLA verified within limits, and distributed idempotency active.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-line bg-paper p-4 space-y-2 text-xs">
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted block">
                        Production Gate Artifacts Generated:
                      </span>
                      <p className="text-ink flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                        <span>Signed Test Summary Report (TSR) &amp; Execution Matrix</span>
                      </p>
                      <p className="text-ink flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                        <span>Automated Regression Run Artifacts (Playwright HTML report)</span>
                      </p>
                      <p className="text-ink flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                        <span>Payment Reconciliation &amp; Webhook Audit Log</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="border border-red-500/40 bg-red-500/10 p-4">
                      <div className="flex items-start gap-2.5">
                        <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                            Deployment Blocked by QA Gatekeeper
                          </p>
                          <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">
                            {failedRules.length} critical gate condition(s) breached. Release cannot be certified until blockers are triaged and re-tested.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-line bg-paper p-4 space-y-2 text-xs">
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted block">
                        Deepak&apos;s Active Triage Protocol:
                      </span>
                      {failedRules.map((r) => (
                        <div key={r.id} className="border-l-2 border-red-500 pl-2 py-0.5">
                          <p className="font-bold text-ink">{r.name}:</p>
                          <p className="text-ink-soft text-[0.72rem]">{r.impactOnFailure}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Authority Stamp */}
              <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[0.68rem] text-muted">
                  Sign-off Authority: Deepak Gupta (Senior QA Engineer)
                </span>
                <span className="font-mono text-[0.68rem] text-pass font-semibold">
                  Zero Financial Leaks in Prod
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
