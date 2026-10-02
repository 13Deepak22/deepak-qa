"use client";

import { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Fingerprint,
  Globe,
  Landmark,
  Play,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface Scenario {
  id: string;
  name: string;
  category: string;
  endpoint: string;
  method: "POST" | "GET" | "PUT";
  normalPayload: Record<string, unknown>;
  steps: { name: string; durationMs: number }[];
  expectedSuccess: string;
  defectWarning: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "upi-intent",
    name: "UPI Intent Payment & Webhook",
    category: "Payment Gateway",
    endpoint: "/api/v1/payments/upi-intent",
    method: "POST",
    normalPayload: {
      txn_id: "TXN_998124_PL",
      amount_inr: 2499.0,
      vpa: "user@okhdfcbank",
      idempotency_key: "idem_8f7b2c9e",
      timeout_sec: 45,
    },
    steps: [
      { name: "Validate VPA handle format & checksum", durationMs: 180 },
      { name: "Acquire distributed Redis idempotency lock", durationMs: 240 },
      { name: "Dispatch NPCI UPI Intent intent-switch payload", durationMs: 420 },
      { name: "Intercept bank debit webhook & verify HMAC signature", durationMs: 310 },
      { name: "Reconcile wallet balance & generate digital receipt", durationMs: 200 },
    ],
    expectedSuccess: "Payment verified with 0 duplicate debits. Webhook HMAC validated in 310ms.",
    defectWarning: "Warning: Missing Idempotency Key under network retry triggers race-condition double debit!",
  },
  {
    id: "loan-disbursal",
    name: "Instant Loan Disbursal Gate",
    category: "Lending Engine (LOS)",
    endpoint: "/api/v2/lending/disburse-escrow",
    method: "POST",
    normalPayload: {
      loan_application_id: "LN_2026_8831",
      sanctioned_amount: 50000,
      cibil_score_cached: 742,
      kyc_hash: "sha256_e3b0c44298fc",
      penny_drop_status: "VERIFIED",
    },
    steps: [
      { name: "Verify Pan-Aadhaar KYC checksum against NSDL", durationMs: 220 },
      { name: "Re-query CIBIL Bureau score threshold (min 680)", durationMs: 380 },
      { name: "Perform Penny-Drop beneficiary name matching (98%+ match)", durationMs: 290 },
      { name: "Lock escrow account balance & generate NACH mandate", durationMs: 340 },
      { name: "Release IMPS settlement fund & update LMS ledger", durationMs: 260 },
    ],
    expectedSuccess: "Loan disbursal approved. Penny-drop matched. LMS ledger synced in real-time.",
    defectWarning: "Caution: Name mismatch below 85% threshold must halt fund transfer before escrow release.",
  },
  {
    id: "forex-rate-lock",
    name: "Forex Live Rate Lock & Settlement",
    category: "Forex Multi-Currency",
    endpoint: "/api/v3/forex/lock-rate-card",
    method: "POST",
    normalPayload: {
      base_currency: "INR",
      target_currency: "USD",
      amount_usd: 1500,
      locked_fx_rate: 86.42,
      rbi_purpose_code: "S0305",
      card_kit_number: "4111-XXXX-XXXX-9021",
    },
    steps: [
      { name: "Verify live interbank FX rate volatility bounds (±0.05%)", durationMs: 160 },
      { name: "Validate LRS limit (Liberalised Remittance Scheme) quota", durationMs: 300 },
      { name: "Lock exchange rate for 180-second checkout window", durationMs: 210 },
      { name: "Execute Visa/Mastercard multi-currency settlement", durationMs: 450 },
      { name: "Dispatch SMS notification & update forex card balance", durationMs: 180 },
    ],
    expectedSuccess: "Rate held at 86.42 INR/USD for 180s. LRS annual limit checked successfully.",
    defectWarning: "Edge case: Stale rate lock beyond 180s window must be rejected with 409 Conflict.",
  },
  {
    id: "biometric-session",
    name: "Biometric Auth & Suspend Invalidation",
    category: "Mobile Security",
    endpoint: "/api/v1/auth/biometric-verify",
    method: "POST",
    normalPayload: {
      device_id: "android_sdk34_pixel8",
      biometric_token: "bio_jwt_sec_9918",
      app_state: "foreground",
      jailbreak_root_check: "CLEAN",
    },
    steps: [
      { name: "Check hardware root / Magisk / jailbreak flags", durationMs: 140 },
      { name: "Verify hardware keystore biometric signature", durationMs: 220 },
      { name: "Generate short-lived 15-minute access token", durationMs: 180 },
      { name: "Simulate background app suspend & memory wipe test", durationMs: 320 },
      { name: "Assert sensitive wallet balances masked on resume", durationMs: 190 },
    ],
    expectedSuccess: "Biometric token validated. Zero unmasked PII data leaked upon app resume.",
    defectWarning: "Security flaw: Token remaining valid after 15-minute background suspend violates RBI guidelines.",
  },
];

const SCENARIO_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "upi-intent": Zap,
  "loan-disbursal": Landmark,
  "forex-rate-lock": Globe,
  "biometric-session": Fingerprint,
};

export function InteractiveQASandbox() {
  const [selectedId, setSelectedId] = useState<string>("upi-intent");
  const [isThrottled, setIsThrottled] = useState<boolean>(false);
  const [hasIdempotency, setHasIdempotency] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedStepIndex, setCompletedStepIndex] = useState<number>(-1);
  const [testResult, setTestResult] = useState<"idle" | "success" | "defect">("idle");
  const [activeTab, setActiveTab] = useState<"logs" | "payload" | "matrix">("logs");

  const activeScenario = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    if (isRunning) return;

    setIsRunning(true);
    setCompletedStepIndex(-1);
    setTestResult("idle");

    const multiplier = isThrottled ? 2.2 : 1;
    let currentStep = 0;

    const runNextStep = () => {
      if (currentStep < activeScenario.steps.length) {
        const step = activeScenario.steps[currentStep];
        const stepTime = step.durationMs * multiplier;

        setTimeout(() => {
          setCompletedStepIndex(currentStep);
          currentStep++;
          runNextStep();
        }, stepTime);
      } else {
        // Finished all steps
        setIsRunning(false);
        // If scenario is UPI and idempotency was omitted, simulate defect detection!
        if (activeScenario.id === "upi-intent" && !hasIdempotency) {
          setTestResult("defect");
        } else {
          setTestResult("success");
        }
      }
    };

    runNextStep();
  };

  const handleReset = () => {
    setIsRunning(false);
    setCompletedStepIndex(-1);
    setTestResult("idle");
  };

  return (
    <section className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Interactive Workbench</span> / Live Quality Engine
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              Simulate live fintech release assertions.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Test the real-world validation rules, edge cases, and network throttling Deepak engineers to protect production systems.
          </p>
        </div>

        {/* Workbench Container */}
        <div className="mt-10 border border-line bg-paper shadow-sm">
          {/* Top Scenario Selector Tabs: Symmetrically divided 4 columns with upper green border highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-line bg-card">
            {SCENARIOS.map((sc, index) => {
              const isSelected = sc.id === activeScenario.id;
              const Icon = SCENARIO_ICONS[sc.id] || Activity;
              return (
                <button
                  key={sc.id}
                  type="button"
                  data-testid={`sandbox-scenario-${sc.id}`}
                  data-cursor={`Select ${sc.name} simulation`}
                  onClick={() => {
                    setSelectedId(sc.id);
                    handleReset();
                  }}
                  className={`group relative flex w-full items-center gap-3 px-4 py-3.5 text-xs font-mono transition-colors text-left border-line ${
                    index < 3 ? "lg:border-r" : "lg:border-r-0"
                  } ${index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"} ${
                    index < 2 ? "sm:border-b" : "sm:border-b-0"
                  } ${index < 3 ? "border-b sm:border-b-0" : "border-b-0"} ${
                    isSelected
                      ? "bg-paper text-pass font-medium"
                      : "bg-card text-ink-soft hover:bg-paper/70 hover:text-ink"
                  }`}
                >
                  {/* Active Green Upper Border Highlight */}
                  <span
                    className={`absolute inset-x-0 -top-px h-[3px] transition-all duration-200 ${
                      isSelected
                        ? "bg-pass shadow-[0_1px_3px_rgba(18,95,59,0.35)] dark:shadow-[0_1px_4px_rgba(47,175,110,0.4)]"
                        : "bg-transparent group-hover:bg-pass/30"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Matching Scenario Icon Badge */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xs border transition-colors ${
                      isSelected
                        ? "border-pass/40 bg-pass/10 text-pass shadow-2xs"
                        : "border-line/70 bg-paper/60 text-muted group-hover:border-line group-hover:text-ink"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Scenario Metadata */}
                  <div className="min-w-0 flex-1">
                    <span
                      className={`block truncate tracking-wider uppercase text-[0.65rem] transition-colors ${
                        isSelected ? "text-pass font-semibold" : "text-muted"
                      }`}
                    >
                      {sc.category}
                    </span>
                    <span
                      className={`block truncate font-sans text-xs transition-colors ${
                        isSelected
                          ? "font-semibold text-ink"
                          : "font-medium text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {sc.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Controls & Parameters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-paper p-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              {/* Endpoint Pill */}
              <div className="flex items-center gap-1.5 border border-line bg-card px-2.5 py-1 font-mono text-[0.72rem] text-ink">
                <span className="text-pass font-semibold">{activeScenario.method}</span>
                <span className="text-muted">{activeScenario.endpoint}</span>
              </div>

              {/* Network Throttling Toggle */}
              <button
                type="button"
                data-testid="sandbox-toggle-throttle"
                data-cursor={isThrottled ? "Switch to 5G low-latency mode (20ms)" : "Simulate 3G packet drop & latency jitter (1600ms)"}
                onClick={() => setIsThrottled(!isThrottled)}
                className={`flex items-center gap-1.5 border px-3 py-1 text-xs font-mono transition-colors ${
                  isThrottled
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium"
                    : "border-line bg-card text-muted hover:text-ink"
                }`}
              >
                <Wifi className="h-3.5 w-3.5" />
                <span>{isThrottled ? "3G Latency Jitter (1600ms)" : "5G Normal (20ms)"}</span>
              </button>

              {/* Idempotency Toggle (for UPI) */}
              {activeScenario.id === "upi-intent" && (
                <button
                  type="button"
                  data-testid="sandbox-toggle-idempotency"
                  data-cursor={hasIdempotency ? "Omit idempotency header to simulate race condition" : "Enable idempotency key to prevent double debit"}
                  onClick={() => setHasIdempotency(!hasIdempotency)}
                  className={`flex items-center gap-1.5 border px-3 py-1 text-xs font-mono transition-colors ${
                    hasIdempotency
                      ? "border-pass/40 bg-pass-fill/10 text-pass font-medium"
                      : "border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400 font-medium"
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{hasIdempotency ? "Idempotency Key: Active" : "Idempotency Key: Omitted (Defect Risk)"}</span>
                </button>
              )}
            </div>

            {/* Run & Reset Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                data-testid="sandbox-btn-reset"
                data-cursor="Reset test workbench pipeline"
                onClick={handleReset}
                disabled={isRunning}
                className="flex items-center gap-1 border border-line bg-card px-3 py-1.5 font-mono text-xs text-muted hover:text-ink disabled:opacity-50"
                title="Reset simulation"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>

              <button
                type="button"
                data-testid="sandbox-btn-run"
                data-cursor="Execute live step-by-step verification pipeline"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 border border-pass bg-pass text-paper px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass/90 transition-colors disabled:opacity-60 shadow-sm"
              >
                {isRunning ? (
                  <>
                    <Activity className="h-3.5 w-3.5 animate-spin" />
                    <span>Executing Assertions...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Run Verification Flow</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Workbench Body: Steps & Output Terminal */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Left: Execution Pipeline Steps */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                  Assertion Pipeline ({completedStepIndex + 1}/{activeScenario.steps.length} Passed)
                </span>
                <span className="font-mono text-xs text-pass flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {isThrottled ? "Throttled Mode" : "Real-time Mode"}
                </span>
              </div>

              <div className="space-y-3">
                {activeScenario.steps.map((step, idx) => {
                  const isDone = completedStepIndex >= idx;
                  const isCurrent = isRunning && completedStepIndex === idx - 1;

                  return (
                    <div
                      key={step.name}
                      className={`flex items-start gap-3 border p-3 transition-colors ${
                        isDone
                          ? "border-pass/40 bg-pass-fill/5"
                          : isCurrent
                          ? "border-pass bg-card shadow-sm animate-pulse"
                          : "border-line bg-card/40 opacity-70"
                      }`}
                    >
                      <span className="mt-0.5 inline-flex shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 text-pass" />
                        ) : isCurrent ? (
                          <Activity className="h-4 w-4 text-pass animate-spin" />
                        ) : (
                          <span className="inline-block h-4 w-4 rounded-full border border-line bg-card text-center font-mono text-[0.6rem] leading-4 text-muted">
                            {idx + 1}
                          </span>
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-sans text-xs font-medium ${isDone ? "text-ink" : "text-ink-soft"}`}>
                            {step.name}
                          </p>
                          <span className="font-mono text-[0.68rem] text-muted shrink-0">
                            {Math.round(step.durationMs * (isThrottled ? 2.2 : 1))}ms
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Final Result Banner */}
              {testResult === "success" && (
                <div className="mt-5 border border-pass/40 bg-pass-fill/10 p-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-pass shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-pass font-semibold">
                        Release Gate Passed — All Assertions Verified
                      </p>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        {activeScenario.expectedSuccess}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {testResult === "defect" && (
                <div className="mt-5 border border-red-500/40 bg-red-500/10 p-4">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold">
                        Defect Flagged — Potential Financial Leak Prevented
                      </p>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                        {activeScenario.defectWarning}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Live Telemetry & Inspector Tabs */}
            <div className="flex flex-col bg-card/60 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    data-testid="sandbox-tab-logs"
                    data-cursor="View live step-by-step console logs & assertions"
                    onClick={() => setActiveTab("logs")}
                    className={`font-mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1 transition-colors ${
                      activeTab === "logs"
                        ? "bg-paper text-pass border border-line font-medium"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Console Logs
                  </button>
                  <button
                    type="button"
                    data-testid="sandbox-tab-payload"
                    data-cursor="Inspect raw JSON request payload & idempotency keys"
                    onClick={() => setActiveTab("payload")}
                    className={`font-mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1 transition-colors ${
                      activeTab === "payload"
                        ? "bg-paper text-pass border border-line font-medium"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    JSON Payload
                  </button>
                  <button
                    type="button"
                    data-testid="sandbox-tab-matrix"
                    data-cursor="Inspect edge case assertions & target test matrix"
                    onClick={() => setActiveTab("matrix")}
                    className={`font-mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1 transition-colors ${
                      activeTab === "matrix"
                        ? "bg-paper text-pass border border-line font-medium"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Test Matrix
                  </button>
                </div>
                <span className="font-mono text-[0.65rem] text-muted">status: 200 OK</span>
              </div>

              {/* Tab Contents */}
              <div key={activeTab} className="flex-1 font-mono text-[0.75rem] leading-relaxed overflow-x-auto min-h-[220px] content-fade">
                {activeTab === "logs" && (
                  <div className="space-y-1.5 text-ink-soft">
                    <p className="text-muted">
                      [INIT] Loaded test scenario: &quot;{activeScenario.name}&quot;
                    </p>
                    <p className="text-muted">
                      [ENV] Target: Staging-US-East / Latency Profile: {isThrottled ? "3G Jitter" : "Direct"}
                    </p>
                    {activeScenario.steps.map((step, idx) => {
                      if (completedStepIndex < idx) return null;
                      return (
                        <p key={step.name} className="text-pass">
                          [PASS] step_{idx + 1}: {step.name} ({step.durationMs}ms)
                        </p>
                      );
                    })}
                    {isRunning && (
                      <p className="text-ink animate-pulse">
                        [RUN] Evaluating step_{completedStepIndex + 2} assertions...
                      </p>
                    )}
                    {testResult === "success" && (
                      <p className="text-pass font-semibold mt-2">
                        [SUITE_PASS] Verification completed with zero defects.
                      </p>
                    )}
                    {testResult === "defect" && (
                      <p className="text-red-500 font-semibold mt-2">
                        [DEFECT_DETECTED] Double-debit vulnerability captured!
                      </p>
                    )}
                    {completedStepIndex === -1 && !isRunning && (
                      <p className="text-muted italic pt-4">
                        Press &quot;Run Verification Flow&quot; above to trigger live step-by-step test execution.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "payload" && (
                  <pre className="text-xs text-ink-soft bg-paper p-3 border border-line overflow-auto">
                    {JSON.stringify(
                      activeScenario.id === "upi-intent"
                        ? {
                            ...activeScenario.normalPayload,
                            idempotency_key: hasIdempotency ? "idem_8f7b2c9e" : undefined,
                          }
                        : activeScenario.normalPayload,
                      null,
                      2
                    )}
                  </pre>
                )}

                {activeTab === "matrix" && (
                  <div className="space-y-2 text-xs">
                    <div className="border border-line bg-paper p-2.5">
                      <span className="font-semibold text-ink">Edge Case Assertions:</span>
                      <ul className="list-disc list-inside mt-1 text-ink-soft text-[0.72rem] space-y-0.5">
                        <li>Concurrent requests lock conflict handling</li>
                        <li>Response timeout boundary (30s threshold)</li>
                        <li>Malformed checksum validation</li>
                        <li>Idempotent duplicate rejection</li>
                      </ul>
                    </div>
                    <div className="border border-line bg-paper p-2.5">
                      <span className="font-semibold text-ink">Target Platforms:</span>
                      <p className="text-ink-soft text-[0.72rem] mt-0.5">
                        Android (APK/AAB), iOS (TestFlight), Backend Microservices (Docker/K8s)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Link */}
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[0.68rem] text-muted">Automated in Playwright &amp; Postman</span>
                <Link
                  href="/services"
                  className="font-mono text-xs uppercase tracking-wider text-pass flex items-center gap-1 hover:underline"
                >
                  <span>Explore testing services</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
