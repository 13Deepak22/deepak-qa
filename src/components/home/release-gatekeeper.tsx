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
    healthyState: "0 Open P0/P1 Blockers",
    failingState: "1 Open Blocker in Gateway",
    impactOnFailure: "Blocks deployment. Prevents revenue loss and broken user journeys.",
  },
  {
    id: "regression-pass",
    name: "Automated Regression Coverage",
    description: "Full suite of Playwright & Appium end-to-end tests.",
    category: "Test Automation",
    healthyState: "100% Suites Green (142/142)",
    failingState: "2 Failing E2E Checks in KYC",
    impactOnFailure: "Regression failure indicates unintended side-effects in new build.",
  },
  {
    id: "latency-sla",
    name: "API Latency & 99th Percentile SLA",
    description: "Backend endpoints response time under concurrency.",
    category: "Performance SLA",
    healthyState: "148ms p95 (< 300ms SLA)",
    failingState: "1,840ms Latency Spike on API",
    impactOnFailure: "High latency triggers mobile timeout exceptions and payment drops.",
  },
  {
    id: "idempotency-check",
    name: "Fintech Concurrency & Idempotency",
    description: "Redis distributed locks on payment debit endpoints.",
    category: "Financial Safety",
    healthyState: "Idempotency Lock Active",
    failingState: "Missing Idempotency Token",
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
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
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
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold tracking-tight truncate">
                  {isApproved
                    ? "Production Deployment Approved"
                    : "Deployment Halted — Blockers Caught"}
                </h3>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                data-testid="gatekeeper-preset-all-green"
                data-cursor="Set all release criteria to healthy pass (Ship to production)"
                onClick={resetAllGreen}
                className="px-3 py-1.5 border border-line bg-card text-xs font-mono text-muted hover:text-ink transition-colors flex items-center gap-1 active:scale-95"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                <span>All Green</span>
              </button>
              <button
                type="button"
                data-testid="gatekeeper-preset-simulate-failure"
                data-cursor="Simulate critical bug injection and deployment halt"
                onClick={simulateFailure}
                className="px-3 py-1.5 border border-line bg-card text-xs font-mono text-muted hover:text-ink transition-colors flex items-center gap-1 active:scale-95"
              >
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                <span>Simulate Failure</span>
              </button>
            </div>
          </div>

          {/* Interactive Toggle Grid: Balanced equal heights with zero layout shift */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line items-stretch">
            {/* Left: 4 Interactive Switches (Fixed Invariant Box Height) */}
            <div className="p-5 sm:p-6 space-y-3 flex flex-col justify-between">
              <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase block">
                Click Any Check to Toggle Its State:
              </span>

              <div className="space-y-2.5">
                {GATE_RULES.map((rule) => {
                  const isHealthy = gateStates[rule.id];
                  return (
                    <button
                      key={rule.id}
                      type="button"
                      role="switch"
                      aria-checked={isHealthy}
                      data-testid={`gatekeeper-toggle-${rule.id}`}
                      data-cursor={`Toggle ${rule.name}: ${isHealthy ? 'Currently passing' : 'Currently blocking'}`}
                      onClick={() => toggleGate(rule.id)}
                      className={`w-full text-left p-3.5 border transition-colors duration-150 flex items-center justify-between gap-3 select-none active:scale-[0.99] rounded-xs ${
                        isHealthy
                          ? "border-pass/40 bg-pass-fill/5 hover:border-pass shadow-2xs"
                          : "border-red-500/50 bg-red-500/5 hover:border-red-500 shadow-2xs"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${
                              isHealthy ? "bg-pass animate-pulse" : "bg-red-500"
                            }`}
                          />
                          <p className="font-sans text-xs font-bold text-ink truncate">
                            {rule.name}
                          </p>
                        </div>
                        <p className="mt-0.5 text-xs text-ink-soft truncate">
                          {rule.description}
                        </p>
                        <p
                          className={`mt-1 font-mono text-[0.72rem] font-semibold truncate h-4 leading-4 flex items-center ${
                            isHealthy ? "text-pass" : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {isHealthy ? `✓ ${rule.healthyState}` : `✕ ${rule.failingState}`}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span
                          className={`inline-block font-mono text-[0.62rem] uppercase tracking-wider px-1.5 py-0.5 border ${
                            isHealthy
                              ? "border-pass/30 bg-card text-pass font-bold"
                              : "border-red-500/30 bg-card text-red-600 dark:text-red-400 font-bold"
                          }`}
                        >
                          {isHealthy ? "PASS" : "BLOCK"}
                        </span>
                        {/* Hardware Switch Pill */}
                        <span
                          className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out ${
                            isHealthy ? "bg-pass" : "bg-red-500"
                          }`}
                          aria-hidden="true"
                        >
                          <span
                            className={`inline-block h-3 w-3 rounded-full bg-paper shadow-xs transition-transform duration-200 ease-in-out ${
                              isHealthy ? "translate-x-3.5" : "translate-x-0.5"
                            }`}
                          />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Live Gate Decision Log */}
            <div className="p-5 sm:p-6 flex flex-col justify-between bg-card/40">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between border-b border-line pb-3 mb-3.5">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    Gatekeeper Audit Log
                  </span>
                  <span className="font-mono text-xs text-pass">Real-time Gate Evaluation</span>
                </div>

                {isApproved ? (
                  <div key="approved" className="flex-1 flex flex-col justify-between gap-3">
                    <div className="border border-pass/30 bg-paper p-3.5 rounded-xs">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="h-5 w-5 text-pass shrink-0 mt-0.5" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-pass font-bold">
                            Zero-Defect Sign-off Ready
                          </p>
                          <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                            All 4 quality gates satisfy Deepak&apos;s release standards. 0 critical bugs, 100% automated regression passed, API SLA verified, and idempotency active.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-line bg-paper p-3.5 space-y-2 text-xs rounded-xs flex-1 flex flex-col justify-center">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-1">
                        Production Gate Artifacts Generated:
                      </span>
                      <div className="space-y-2">
                        <p className="text-ink flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                          <span className="truncate">Signed Test Summary Report (TSR) &amp; Matrix</span>
                        </p>
                        <p className="text-ink flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                          <span className="truncate">Automated Regression Artifacts (Playwright HTML)</span>
                        </p>
                        <p className="text-ink flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                          <span className="truncate">Payment Reconciliation &amp; Webhook Audit Log</span>
                        </p>
                        <p className="text-ink flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                          <span className="truncate">Redis Idempotency Distributed Lock Lease Verified</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key="halted" className="flex-1 flex flex-col justify-between gap-3">
                    <div className="border border-red-500/40 bg-red-500/10 p-3.5 rounded-xs">
                      <div className="flex items-start gap-2.5">
                        <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                            Deployment Blocked by QA Gatekeeper
                          </p>
                          <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                            {failedRules.length} critical gate condition(s) breached. Release cannot ship until blockers are triaged and re-tested.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-line bg-paper p-3.5 text-xs rounded-xs flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                          Deepak&apos;s Active Triage Protocol ({failedRules.length} Blocking):
                        </span>
                        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold">
                          Action Required
                        </span>
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-between">
                        {failedRules.map((r) => (
                          <div key={r.id} className="border-l-2 border-red-500 pl-2.5 py-0.5">
                            <p className="font-bold text-ink text-xs truncate leading-snug">{r.name}</p>
                            <p className="text-ink-soft text-[0.72rem] leading-tight line-clamp-1 mt-0.5">{r.impactOnFailure}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Authority Stamp */}
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[0.68rem] text-muted">
                  Sign-off Authority: Deepak Gupta
                </span>
                <span className="font-mono text-[0.68rem] text-pass font-semibold">
                  Zero Financial Leaks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
