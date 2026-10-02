"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  MinusCircle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { releaseGate } from "@/data";

export type TestStatus = "wait" | "run" | "pass" | "fail" | "skip";

export interface SimulatedCheck {
  file: string;
  tag: string;
  targetSeconds: number;
  targetStatus: "pass" | "fail" | "skip";
  msLabel: string;
  assertions?: string[];
  errorMessage?: string;
  expectedDiff?: string;
  receivedDiff?: string;
  skipReason?: string;
}

interface TestDefinition {
  file: string;
  tag: string;
  failTag?: string;
  baseSeconds: number;
  passAssertions: string[];
  failError: string;
  expectedDiff: string;
  receivedDiff: string;
  skipReason: string;
}

// 5 core test definitions each with their own unique pass, fail, and skip reasons
const TEST_DEFINITIONS: TestDefinition[] = [
  {
    file: "paulpay/upi.spec.ts",
    tag: "UPI 2.0",
    failTag: "PSP Gateway",
    baseSeconds: 1.1,
    passAssertions: [
      "Validate VPA handle format & checksum regex (/^[\\w.-]+@[\\w.-]+$/)",
      "Intercept NPCI UPI Intent deep-link dispatch in 180ms",
      "Assert bank debit webhook HMAC-SHA256 signature matches",
    ],
    failError: "AssertionError: NPCI Intent switch timeout (>1500ms on PSP handle)",
    expectedDiff: "HTTP 200 OK (Intent deep-link switch confirmed)",
    receivedDiff: "HTTP 504 Gateway Timeout from bank PSP switch",
    skipReason: "Skipped: Bank PSP gateway staging sandbox rate-limited; synthetic stub active",
  },
  {
    file: "credme/ekyc.spec.ts",
    tag: "DigiLocker",
    failTag: "OCR Liveness",
    baseSeconds: 1.4,
    passAssertions: [
      "Verify Aadhaar XML signature with UIDAI public cert",
      "OCR facial confidence score: 99.4% (min threshold 90%)",
      "Deduplicate PAN number across credit bureau database",
    ],
    failError: "AssertionError: Face OCR match score below 90% threshold (74.2% on glare photo)",
    expectedDiff: "Confidence score >= 90.0% with valid facial liveness",
    receivedDiff: "74.2% match (Liveness check flagged camera glare artifact)",
    skipReason: "Skipped: UIDAI Aadhaar sandbox rate-limited; synthetic mock active to maintain suite SLA",
  },
  {
    file: "api/payments.spec.ts",
    tag: "REST API",
    failTag: "Race Condition",
    baseSeconds: 0.6,
    passAssertions: [
      "Assert RFC-7231 Idempotency-Key prevents duplicate debits",
      "Validate distributed Redis lock TTL expires at exactly 30s",
      "Confirm ledger credit & debit balance symmetry = 0.00 INR",
    ],
    failError: "AssertionError: Duplicate payment accepted without 409 lock on concurrent retry",
    expectedDiff: "HTTP 409 Conflict (Redis Idempotency Key Locked)",
    receivedDiff: "HTTP 200 OK (Duplicate transaction #TXN_998124 created)",
    skipReason: "Skipped: Bank settlement webhook bypassed during non-prod release stage",
  },
  {
    file: "appium/cards.spec.ts",
    tag: "Mobile",
    failTag: "Mobile SLA",
    baseSeconds: 2.0,
    passAssertions: [
      "Render dynamic virtual card CVV with 60-second OTP blur",
      "Assert Android biometric prompt resolves with enrolled fingerprint",
      "Toggle instant card freeze switch and verify SQLite offline cache",
    ],
    failError: "AssertionError: CVV reveal transition exceeded 2000ms SLA limit",
    expectedDiff: "CVV revealed in < 2,000ms",
    receivedDiff: "2,540ms (Android main UI thread blocked by synchronous encryption)",
    skipReason: "Skipped: Android biometric hardware emulation bypassed on cloud device pool",
  },
  {
    file: "jmeter/load.spec.ts",
    tag: "Stress Load",
    failTag: "Latency SLA",
    baseSeconds: 3.2,
    passAssertions: [
      "Sustain 500 concurrent threads against loan disbursal endpoint",
      "p99 response time: 210ms (< 500ms strict SLA limit)",
      "Zero 5xx server errors across 10,000 synthetic requests",
    ],
    failError: "AssertionError: p99 latency SLA breached under 500 concurrent threads",
    expectedDiff: "p99 response time < 500ms across 10,000 requests",
    receivedDiff: "1,280ms p99 latency on loan disbursal endpoint",
    skipReason: "Skipped: High-concurrency stress test bypassed during off-peak smoke run",
  },
];

// Dynamic run generator: ensures 3 to 4 tests ALWAYS pass, while other 1-2 vary dynamically!
function generateDynamicRun(isInitial = false): {
  checks: SimulatedCheck[];
  gateOnPass: string;
  gateOnFail: string;
} {
  if (isInitial) {
    return {
      checks: TEST_DEFINITIONS.map((t) => ({
        file: t.file,
        tag: t.tag,
        targetSeconds: t.baseSeconds,
        targetStatus: "pass" as const,
        msLabel: `${t.baseSeconds.toFixed(1)}s`,
        assertions: t.passAssertions,
      })),
      gateOnPass: releaseGate.gate,
      gateOnFail: "blocked · regressions caught",
    };
  }

  // Guarantee: 3 to 4 tests ALWAYS pass! (occasionally 5 for full clean pass)
  // Non-passing count is either 1 (most common ~60%), 2 (~25%), or 0 (~15%).
  const rand = Math.random();
  const nonPassCount = rand < 0.15 ? 0 : rand < 0.75 ? 1 : 2; // guarantees 3, 4, or 5 pass!

  // Pick which tests will not pass completely randomly across all 5
  const shuffledIndices = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5);
  const nonPassIndices = new Set(shuffledIndices.slice(0, nonPassCount));

  let hasFail = false;

  const checks: SimulatedCheck[] = TEST_DEFINITIONS.map((def, idx) => {
    // Dynamic realistic jitter on execution timer (± 0.2s)
    const jitter = Math.round((Math.random() * 0.4 - 0.2) * 10) / 10;
    const duration = Math.max(0.4, Math.round((def.baseSeconds + jitter) * 10) / 10);
    const msLabel = `${duration.toFixed(1)}s`;

    if (!nonPassIndices.has(idx)) {
      // Guaranteed Pass
      return {
        file: def.file,
        tag: def.tag,
        targetSeconds: duration,
        targetStatus: "pass",
        msLabel,
        assertions: def.passAssertions,
      };
    }

    // This test dynamically either fails or skips
    const isFail = Math.random() < 0.65 || !hasFail;
    if (isFail) {
      hasFail = true;
      return {
        file: def.file,
        tag: def.failTag || def.tag,
        targetSeconds: duration,
        targetStatus: "fail",
        msLabel,
        errorMessage: def.failError,
        expectedDiff: def.expectedDiff,
        receivedDiff: def.receivedDiff,
        assertions: [
          def.passAssertions[0],
          `✕ ${def.failError} [FAILED]`,
        ],
      };
    } else {
      const skipSecs = Math.round(Math.max(0.3, duration * 0.35) * 10) / 10;
      return {
        file: def.file,
        tag: def.tag,
        targetSeconds: skipSecs,
        targetStatus: "skip",
        msLabel: `${skipSecs.toFixed(1)}s`,
        skipReason: def.skipReason,
      };
    }
  });

  const hasSkips = checks.some((c) => c.targetStatus === "skip");

  return {
    checks,
    gateOnPass: hasSkips ? "ready with exclusions" : "ready for review",
    gateOnFail: "blocked · defect caught",
  };
}

const PLAYBACK_MS = 2800;

function clock(seconds: number) {
  return `${Math.max(0, seconds).toFixed(1)}s`;
}

export function TestRun() {
  const [runIteration, setRunIteration] = useState(0);
  const [simulatedTime, setSimulatedTime] = useState(0);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Generate dynamic run on every rerun (initial run is clean all-pass)
  const currentRun = useMemo(() => {
    return generateDynamicRun(runIteration === 0);
  }, [runIteration]);

  const durations = useMemo(() => {
    return currentRun.checks.map((c) => c.targetSeconds);
  }, [currentRun]);

  const totalSeconds = useMemo(() => {
    return durations.reduce((sum, v) => sum + v, 0);
  }, [durations]);

  // Animation playback
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setSimulatedTime(totalSeconds);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / PLAYBACK_MS, 1);
      setSimulatedTime(progress * totalSeconds);
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [runIteration, totalSeconds, currentRun]);

  // Compute live test states
  const { rows, passedCount, failedCount, skippedCount, isDone, suiteSeconds } = useMemo(() => {
    let cursor = 0;
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    const computedRows = currentRun.checks.map((check, index) => {
      const start = cursor;
      const length = durations[index];
      const end = start + length;
      cursor = end;

      const isFinished = simulatedTime >= end - 0.001;
      const isStarted = simulatedTime >= start;

      let status: TestStatus = "wait";
      if (isFinished) {
        status = check.targetStatus;
        if (check.targetStatus === "pass") passed += 1;
        else if (check.targetStatus === "fail") failed += 1;
        else if (check.targetStatus === "skip") skipped += 1;
      } else if (isStarted) {
        status = "run";
      }

      const elapsedInTest = isFinished ? length : isStarted ? simulatedTime - start : 0;
      const progress = length === 0 ? 1 : Math.min(elapsedInTest / length, 1);

      return {
        check,
        status,
        elapsedInTest,
        progress,
      };
    });

    const done = simulatedTime >= totalSeconds - 0.001;

    return {
      rows: computedRows,
      passedCount: passed,
      failedCount: failed,
      skippedCount: skipped,
      isDone: done,
      suiteSeconds: Math.min(simulatedTime, totalSeconds),
    };
  }, [currentRun, durations, simulatedTime, totalSeconds]);

  // Trigger dynamic rerun
  const handleRerun = () => {
    setSimulatedTime(0);
    setExpandedRow(null);
    setRunIteration((prev) => prev + 1);
  };

  const hasFailed = failedCount > 0;
  const isDefaultInitial = runIteration === 0;

  // Gate verdict
  const gateVerdictText = isDone
    ? hasFailed
      ? `gate · ${currentRun.gateOnFail}`
      : `gate · ${currentRun.gateOnPass}`
    : "gate · running";

  // Summary string
  const summaryText = isDone
    ? isDefaultInitial && !hasFailed
      ? releaseGate.summary
      : `${passedCount} passed · ${failedCount} failed · ${clock(suiteSeconds)}`
    : `${passedCount} passed · ${failedCount} failed · ${clock(suiteSeconds)}`;

  return (
    <section
      className="report-card max-w-full"
      aria-label="Release gate output"
      data-testid="interactive-test-runner"
    >
      {/* Top Header: Suite meta & Rerun button */}
      <div className="border-b border-line bg-card/80 px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                !isDone
                  ? "bg-amber-500 animate-ping"
                  : hasFailed
                  ? "bg-red-600"
                  : "bg-pass"
              }`}
              aria-hidden="true"
            />
            <p className="min-w-0 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-pass font-semibold">
              suite · {releaseGate.suite}
            </p>
          </div>

          {/* Rerun Button */}
          <button
            type="button"
            className="press inline-flex shrink-0 items-center gap-1.5 border border-pass bg-card px-3 py-1.5 font-mono text-xs tracking-[0.12em] uppercase text-ink hover:bg-pass-fill hover:text-on-band transition-colors shadow-xs"
            onClick={handleRerun}
          >
            <RotateCcw className={`h-3 w-3 ${!isDone ? "animate-spin" : ""}`} />
            <span>Rerun</span>
          </button>
        </div>

        {/* Runner Subtitle */}
        <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-line/40 pt-1.5">
          <p className="font-mono text-xs sm:text-sm text-ink-soft">
            runner · {releaseGate.runner}
          </p>
          <span className="font-mono text-[0.68rem]">
            {!isDone ? (
              <span className="text-ink animate-pulse">Running live assertions...</span>
            ) : hasFailed ? (
              <span className="inline-flex items-center gap-1 font-semibold text-red-600 dark:text-red-400">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{failedCount} Defect Caught</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-pass font-medium">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                <span>100% Assertion Integrity</span>
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Main Suite Test Item Rows */}
      <ol className="divide-y divide-line/40 px-4 py-2 sm:px-5">
        {rows.map(({ check, status, elapsedInTest, progress }) => {
          const isExpanded = expandedRow === check.file;
          const isFailed = status === "fail";
          const isSkipped = status === "skip";
          const isPassed = status === "pass";
          const isRunning = status === "run";

          return (
            <li
              key={check.file}
              className={`py-2 font-mono text-[0.82rem] sm:text-sm ${
                isFailed ? "border-l-2 border-red-600 pl-2.5 bg-red-600/5 rounded-xs" : ""
              }`}
            >
              {/* Row Header */}
              <div
                className="flex cursor-pointer items-baseline justify-between gap-3 group"
                onClick={() => setExpandedRow(isExpanded ? null : check.file)}
                title="Click to toggle assertion details"
              >
                <div className="flex min-w-0 items-center gap-2">
                  {/* Status Indicator Badge */}
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-xs ${
                      isPassed
                        ? "text-pass bg-pass/10"
                        : isFailed
                        ? "text-red-600 dark:text-red-400 bg-red-600/15 border border-red-500/30"
                        : isSkipped
                        ? "text-amber-600 dark:text-amber-400 bg-amber-500/10"
                        : isRunning
                        ? "text-ink bg-card border border-line"
                        : "text-muted"
                    }`}
                  >
                    {isPassed && <CheckCircle2 className="h-3 w-3 shrink-0 text-pass" />}
                    {isFailed && <AlertCircle className="h-3 w-3 shrink-0 text-red-600 dark:text-red-400" />}
                    {isSkipped && <MinusCircle className="h-3 w-3 shrink-0 text-amber-600 dark:text-amber-400" />}
                    {isRunning && (
                      <span className="inline-block h-2.5 w-2.5 animate-spin rounded-full border-2 border-pass border-t-transparent" />
                    )}
                    {status === "wait" && <Clock className="h-3 w-3 shrink-0 text-muted/60" />}
                    <span>{status}</span>
                  </span>

                  {/* File Path & Runner caret during execution */}
                  <span className="min-w-0 truncate font-mono text-ink group-hover:text-pass transition-colors">
                    {check.file}
                    {isRunning ? (
                      <span className="runner-caret ml-1 inline-block h-[0.8em] w-[0.45em] bg-ink align-[-0.05em]" />
                    ) : null}
                  </span>

                  {/* Tag Pill */}
                  <span className="hidden rounded-xs border border-line/60 bg-paper px-1.5 py-0.2 text-[0.65rem] text-muted sm:inline-block">
                    {check.tag}
                  </span>
                </div>

                {/* Right: Elapsed Clock / Duration + Expand Indicator */}
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="font-mono text-xs tabular-nums text-muted">
                    {isPassed || isFailed || isSkipped ? check.msLabel : clock(elapsedInTest)}
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-muted transition-transform duration-150 ${
                      isExpanded ? "rotate-180 text-ink" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Individual Progress Bar */}
              <span className="mt-1 block h-0.5 w-full bg-line/60 overflow-hidden" aria-hidden="true">
                <span
                  className={`block h-full ${
                    isFailed
                      ? "bg-red-600"
                      : isSkipped
                      ? "bg-amber-500"
                      : "bg-pass"
                  }`}
                  style={{ width: `${status === "wait" ? 0 : progress * 100}%` }}
                />
              </span>

              {/* Expandable Details Drawer */}
              {isExpanded && (
                <div className="runner-drawer-animate mt-2">
                  {/* FAILURE STATE: Compact High-Precision Dark Terminal Box */}
                  {isFailed && (
                    <div className="border border-ink bg-band text-on-band p-2.5 sm:p-3 my-1 font-mono text-[0.72rem] leading-normal shadow-sm">
                      {/* Compact Title Row */}
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5 mb-2">
                        <div className="flex items-center gap-1.5 text-red-400 font-semibold min-w-0 truncate">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{check.errorMessage}</span>
                        </div>
                        <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-wider text-red-400 border border-red-500/40 bg-red-500/15 px-1.5 py-0.2">
                          P0 Defect
                        </span>
                      </div>

                      {/* Tight Diff Box */}
                      <div className="rounded-xs bg-black/40 border border-white/10 px-2.5 py-1.5 space-y-0.5 text-[0.68rem]">
                        {check.expectedDiff && (
                          <div className="flex items-baseline gap-1.5 text-emerald-400">
                            <span className="font-bold select-none text-[0.65rem] opacity-80">[+]</span>
                            <span className="font-semibold text-white/70">Expected:</span>
                            <span>{check.expectedDiff}</span>
                          </div>
                        )}
                        {check.receivedDiff && (
                          <div className="flex items-baseline gap-1.5 text-red-400">
                            <span className="font-bold select-none text-[0.65rem] opacity-80">[-]</span>
                            <span className="font-semibold text-white/70">Received:</span>
                            <span>{check.receivedDiff}</span>
                          </div>
                        )}
                      </div>

                      {/* Compact Footer: Smooth RCA link on the right without shifting */}
                      <div className="mt-2 flex items-center justify-between gap-2 text-[0.68rem] pt-1.5 border-t border-white/10">
                        <span className="text-white/60 truncate">
                          Jira #DEF-402 · Defect isolated before production
                        </span>
                        <Link
                          href="/rca"
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 hover:underline font-medium shrink-0 transition-colors"
                        >
                          <span>Inspect RCA Case Study</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* SKIPPED STATE: Amber Callout */}
                  {isSkipped && check.skipReason && (
                    <div className="border border-amber-500/40 bg-amber-500/10 p-2.5 rounded-xs font-mono text-xs">
                      <div className="flex items-start gap-1.5 text-amber-700 dark:text-amber-300 font-medium">
                        <MinusCircle className="h-3.5 w-3.5 shrink-0 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-semibold uppercase text-[0.68rem] tracking-wider">
                            Suite Bypass Notice:
                          </p>
                          <p className="mt-0.5 text-[0.7rem] leading-relaxed text-ink-soft">
                            {check.skipReason}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PASSED STATE: Green Check Verified Box */}
                  {isPassed && check.assertions && check.assertions.length > 0 && (
                    <div className="border border-pass/30 bg-card p-2.5 rounded-xs font-mono text-xs">
                      <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-1.5">
                        Assertions Verified:
                      </p>
                      <ul className="space-y-0.5 text-[0.7rem] text-ink-soft">
                        {check.assertions.map((assertion, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-pass font-bold">✓</span>
                            <span>{assertion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Suite Breakdown & Summary Footer */}
      <div className="border-t border-line bg-card/60 px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-sm tabular-nums">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-xs border border-pass/40 bg-pass/10 px-2 py-0.5 text-xs text-pass font-medium">
              <CheckCircle2 className="h-3 w-3" />
              <span>{passedCount} passed</span>
            </span>

            {failedCount > 0 && (
              <span className="inline-flex items-center gap-1 rounded-xs border border-red-600/50 bg-red-600/15 px-2 py-0.5 text-xs text-red-600 dark:text-red-400 font-semibold">
                <AlertCircle className="h-3 w-3" />
                <span>{failedCount} failed</span>
              </span>
            )}

            {skippedCount > 0 && (
              <span className="inline-flex items-center gap-1 rounded-xs border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                <MinusCircle className="h-3 w-3" />
                <span>{skippedCount} skipped</span>
              </span>
            )}

            <span className="text-xs text-muted">
              · {clock(suiteSeconds)}
            </span>
          </div>

          <div className="font-mono text-xs text-muted">
            <span>{summaryText}</span>
          </div>
        </div>

        {/* Gate Verdict Banner */}
        <div
          className={`mt-2.5 flex flex-wrap items-center justify-between gap-2.5 p-2.5 rounded-xs border transition-colors ${
            !isDone
              ? "border-line bg-paper/50 text-muted"
              : hasFailed
              ? "border-2 border-red-600 bg-band text-on-band shadow-sm"
              : "border border-pass/50 bg-pass/10 text-pass"
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-xs min-w-0">
            {!isDone ? (
              <Clock className="h-4 w-4 animate-spin text-muted shrink-0" />
            ) : hasFailed ? (
              <ShieldAlert className="h-4 w-4 text-red-400 shrink-0" />
            ) : (
              <ShieldCheck className="h-4 w-4 text-pass shrink-0" />
            )}
            <span
              className={`font-semibold uppercase tracking-wider ${
                hasFailed ? "text-red-400" : ""
              }`}
            >
              {gateVerdictText}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            {isDone ? (
              hasFailed ? (
                <Link
                  href="/rca"
                  className="inline-flex items-center gap-1 font-mono text-[0.7rem] text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
                >
                  <span>Deployment Blocked · View RCA</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ) : (
                <span className="text-[0.68rem] text-muted">
                  Zero Regressions · Ready to Deploy
                </span>
              )
            ) : (
              <span className="text-[0.68rem] text-muted">
                Evaluating Assertions...
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
