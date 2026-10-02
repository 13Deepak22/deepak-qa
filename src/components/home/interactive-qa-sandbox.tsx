"use client";

import { useEffect, useRef, useState } from "react";
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
  Layers,
  Play,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wifi,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface ScenarioControl {
  id: string;
  label: string;
  paramKey: string;
  icon: "shield" | "fingerprint" | "globe" | "zap" | "alert";
  onLabel: string;
  offLabel: string;
  defaultVal: boolean;
  defectRiskDescription: string;
}

interface Scenario {
  id: string;
  name: string;
  category: string;
  endpoint: string;
  method: "POST" | "GET" | "PUT";
  generatePayload: (controls: Record<string, boolean>) => Record<string, unknown>;
  steps: {
    name: string;
    durationMs: number;
    assertionCheck: string;
    failureReason?: string;
  }[];
  customControl?: ScenarioControl;
  edgeCases: string[];
  targetPlatforms: string[];
  expectedSuccess: string;
  defectWarning: string;
  defectStepIndex: number;
}

const SCENARIOS: Scenario[] = [
  {
    id: "upi-intent",
    name: "UPI Intent Payment & Webhook",
    category: "Payment Gateway",
    endpoint: "/api/v1/payments/upi-intent",
    method: "POST",
    generatePayload: (controls) => {
      const randomTxn = Math.floor(100000 + Math.random() * 900000);
      const randomAmt = (Math.floor(100 + Math.random() * 4900) + 0.99).toFixed(2);
      return {
        txn_id: `TXN_${randomTxn}_PL`,
        amount_inr: parseFloat(randomAmt),
        vpa: "user@okhdfcbank",
        idempotency_key: controls["idempotency"] ? `idem_${Math.random().toString(36).substring(2, 10)}` : undefined,
        timeout_sec: 45,
        timestamp_epoch: Date.now(),
      };
    },
    customControl: {
      id: "idempotency",
      label: "Idempotency",
      paramKey: "idempotency_key",
      icon: "shield",
      onLabel: "Active (RFC-7231)",
      offLabel: "Omitted (Defect Risk)",
      defaultVal: true,
      defectRiskDescription: "Warning: Missing Idempotency Key under network retry triggers race-condition double debit!",
    },
    steps: [
      {
        name: "Validate VPA handle format & checksum",
        durationMs: 180,
        assertionCheck: "Assert regex /^[\w.-]+@[\w.-]+$/ matched OK (12ms)",
      },
      {
        name: "Acquire distributed Redis idempotency lock",
        durationMs: 240,
        assertionCheck: "Assert Redis SETNX lock held with 30s TTL lease",
        failureReason: "AssertionError: Duplicate payment accepted without 409 lock on concurrent retry",
      },
      {
        name: "Dispatch NPCI UPI Intent intent-switch payload",
        durationMs: 420,
        assertionCheck: "Assert NPCI switch handshake ACK status: 00 (SUCCESS)",
      },
      {
        name: "Intercept bank debit webhook & verify HMAC signature",
        durationMs: 310,
        assertionCheck: "Assert SHA256 HMAC digest matches PSP security key",
      },
      {
        name: "Reconcile wallet balance & generate digital receipt",
        durationMs: 200,
        assertionCheck: "Assert ledger double-entry debit/credit delta == 0.00 INR",
      },
    ],
    edgeCases: [
      "Concurrent request race condition on same VPA within 150ms",
      "NPCI switch response timeout boundary (45s threshold)",
      "Bank webhook delivery out-of-order sequence resolution",
      "Idempotent replay rejection with cached HTTP 200 payload",
    ],
    targetPlatforms: ["NPCI UPI 2.0 Gateway", "HDFC / ICICI PSP Switches", "Node.js / Redis Cluster"],
    expectedSuccess: "Payment verified with 0 duplicate debits. Webhook HMAC validated in 310ms.",
    defectWarning: "Warning: Missing Idempotency Key under network retry triggers race-condition double debit!",
    defectStepIndex: 1, // Acquiring Redis lock fails if idempotency omitted
  },
  {
    id: "loan-disbursal",
    name: "Instant Loan Disbursal Gate",
    category: "Lending Engine (LOS)",
    endpoint: "/api/v2/lending/disburse-escrow",
    method: "POST",
    generatePayload: (controls) => {
      const loanAppNum = Math.floor(1000 + Math.random() * 9000);
      const cibil = Math.floor(720 + Math.random() * 80);
      return {
        loan_application_id: `LN_2026_${loanAppNum}`,
        sanctioned_amount: 50000,
        cibil_score_cached: cibil,
        kyc_hash: `sha256_${Math.random().toString(36).substring(2, 14)}`,
        penny_drop_status: controls["penny_drop"] ? "VERIFIED_98PCT" : "NAME_MISMATCH_74PCT",
        timestamp_epoch: Date.now(),
      };
    },
    customControl: {
      id: "penny_drop",
      label: "Penny Drop Match",
      paramKey: "penny_drop_status",
      icon: "zap",
      onLabel: "Strict 98% Match",
      offLabel: "74% Mismatch (Defect)",
      defaultVal: true,
      defectRiskDescription: "Caution: Name similarity score below 85% threshold must halt escrow transfer to prevent fraud!",
    },
    steps: [
      {
        name: "Verify Pan-Aadhaar KYC checksum against NSDL",
        durationMs: 220,
        assertionCheck: "Assert NSDL API response: PAN ACTIVE & Aadhaar seeded",
      },
      {
        name: "Re-query CIBIL Bureau score threshold (min 680)",
        durationMs: 380,
        assertionCheck: "Assert CIBIL score >= 680 threshold (Bureau query: 742)",
      },
      {
        name: "Perform Penny-Drop beneficiary name matching (98%+ match)",
        durationMs: 290,
        assertionCheck: "Assert Levenshtein phonetic similarity >= 0.85 threshold",
        failureReason: "AssertionError: Beneficiary bank name similarity 74.2% is below 85% escrow safety threshold",
      },
      {
        name: "Lock escrow account balance & generate NACH mandate",
        durationMs: 340,
        assertionCheck: "Assert eNACH mandate registered with NPCI e-sign OK",
      },
      {
        name: "Release IMPS settlement fund & update LMS ledger",
        durationMs: 260,
        assertionCheck: "Assert IMPS RRN settlement code 200 acknowledged",
      },
    ],
    edgeCases: [
      "Beneficiary bank account name phonetic distance mismatch (e.g., initial variations)",
      "NSDL KYC verification gateway 503 fallback with exponential backoff",
      "Escrow account concurrent fund reservation limits",
      "NACH mandate e-sign token replay vulnerability protection",
    ],
    targetPlatforms: ["Lending Origination System (LOS)", "NSDL / UIDAI Gateway", "IMPS Escrow Engine"],
    expectedSuccess: "Loan disbursal approved. Penny-drop matched at 98.4%. LMS ledger synced in real-time.",
    defectWarning: "Fraud alert: Penny-drop name similarity below 85% threshold halted fund transfer before escrow release.",
    defectStepIndex: 2, // Penny-drop step fails if match is off
  },
  {
    id: "forex-rate-lock",
    name: "Forex Live Rate Lock & Settlement",
    category: "Forex Multi-Currency",
    endpoint: "/api/v3/forex/lock-rate-card",
    method: "POST",
    generatePayload: (controls) => {
      const baseRate = 86.42;
      const rateJitter = (Math.random() * 0.08 - 0.04).toFixed(4);
      const lockedRate = (baseRate + parseFloat(rateJitter)).toFixed(2);
      return {
        base_currency: "INR",
        target_currency: "USD",
        amount_usd: 1500,
        locked_fx_rate: parseFloat(lockedRate),
        rate_lock_ttl_sec: controls["rate_lock_ttl"] ? 180 : 0,
        rbi_purpose_code: "S0305",
        card_kit_number: "4111-XXXX-XXXX-9021",
        timestamp_epoch: Date.now(),
      };
    },
    customControl: {
      id: "rate_lock_ttl",
      label: "Rate Lock TTL",
      paramKey: "rate_lock_ttl_sec",
      icon: "globe",
      onLabel: "180s Active Window",
      offLabel: "Stale / Expired (0s)",
      defaultVal: true,
      defectRiskDescription: "Edge case: Stale rate lock beyond 180s window must be rejected with 409 Conflict to protect spread!",
    },
    steps: [
      {
        name: "Verify live interbank FX rate volatility bounds (±0.05%)",
        durationMs: 160,
        assertionCheck: "Assert FX feed heartbeat delta < 250ms & spread within bounds",
      },
      {
        name: "Validate LRS limit (Liberalised Remittance Scheme) quota",
        durationMs: 300,
        assertionCheck: "Assert RBI LRS cumulative quota < $250,000 USD limit for PAN",
      },
      {
        name: "Lock exchange rate for 180-second checkout window",
        durationMs: 210,
        assertionCheck: "Assert rate lock TTL timestamp <= now() + 180s",
        failureReason: "AssertionError: Quote expired. Attempted settlement on stale FX rate (lock window lapsed)",
      },
      {
        name: "Execute Visa/Mastercard multi-currency settlement",
        durationMs: 450,
        assertionCheck: "Assert Visa multi-currency settlement ISO-8583 message ACK",
      },
      {
        name: "Dispatch SMS notification & update forex card balance",
        durationMs: 180,
        assertionCheck: "Assert card balance updated with encrypted card-kit hash",
      },
    ],
    edgeCases: [
      "Forex market gap slippage during multi-currency conversion",
      "Stale quote settlement attempt after 180s checkout countdown expires",
      "RBI LRS annual ceiling breach on high-volume remittances",
      "Offline card balance reconciliation sync after in-flight flight mode",
    ],
    targetPlatforms: ["Visa Direct / Mastercard Cross-Border", "RBI LRS Reporting Engine", "Forex Card Ledger"],
    expectedSuccess: "Rate held at locked INR/USD quote for 180s. LRS annual limit checked successfully.",
    defectWarning: "Edge case triggered: Stale rate lock beyond 180s window rejected with 409 Conflict.",
    defectStepIndex: 2, // Rate lock TTL check fails if stale
  },
  {
    id: "biometric-session",
    name: "Biometric Auth & Suspend Invalidation",
    category: "Mobile Security",
    endpoint: "/api/v1/auth/biometric-verify",
    method: "POST",
    generatePayload: (controls) => {
      const devices = ["android_sdk34_pixel8", "samsung_s24_knox", "ios18_iphone16_pro"];
      const randomDevice = devices[Math.floor(Math.random() * devices.length)];
      return {
        device_id: randomDevice,
        biometric_token: `bio_jwt_${Math.random().toString(36).substring(2, 10)}`,
        app_state: "foreground",
        jailbreak_root_check: "CLEAN",
        session_timeout_policy: controls["session_wipe"] ? "STRICT_15MIN_WIPE" : "PERSISTENT_CACHE_VULNERABLE",
        timestamp_epoch: Date.now(),
      };
    },
    customControl: {
      id: "session_wipe",
      label: "Memory Wipe Policy",
      paramKey: "session_timeout_policy",
      icon: "fingerprint",
      onLabel: "Strict 15m Wipe",
      offLabel: "Unmasked Leak (Defect)",
      defaultVal: true,
      defectRiskDescription: "Security flaw: Token remaining valid after background suspend violates RBI Master Direction guidelines!",
    },
    steps: [
      {
        name: "Check hardware root / Magisk / jailbreak flags",
        durationMs: 140,
        assertionCheck: "Assert Google Play Integrity API / SafetyNet: MEETS_STRONG_INTEGRITY",
      },
      {
        name: "Verify hardware keystore biometric signature",
        durationMs: 220,
        assertionCheck: "Assert Android StrongBox Keymaster ECDSA signature validated",
      },
      {
        name: "Generate short-lived 15-minute access token",
        durationMs: 180,
        assertionCheck: "Assert JWT claims contain exp == now() + 900s & sub binding",
      },
      {
        name: "Simulate background app suspend & memory wipe test",
        durationMs: 320,
        assertionCheck: "Assert secure memory buffer zeroed on onTrimMemory(TRIM_MEMORY_UI_HIDDEN)",
        failureReason: "AssertionError: Sensitive account balances remained unmasked in RAM memory heap after app suspend",
      },
      {
        name: "Assert sensitive wallet balances masked on resume",
        durationMs: 190,
        assertionCheck: "Assert resume screen displays masked strings (e.g., ₹••,•••.••)",
      },
    ],
    edgeCases: [
      "Hardware-backed Android KeyStore / iOS Secure Enclave invalidation on new biometric enrollment",
      "App process hibernation memory extraction via Frida / Xposed hooks",
      "Zero PII leaks in screenshot previews in OS multi-tasking drawer",
      "Biometric sensor hardware spoof detection fallback to PIN",
    ],
    targetPlatforms: ["Android 14+ (StrongBox Keymaster)", "iOS 17+ (Secure Enclave)", "React Native / Appium Mobile"],
    expectedSuccess: "Biometric token validated. Zero unmasked PII data leaked upon app resume.",
    defectWarning: "Security flaw: Token persisted without memory wipe after background suspend violates RBI guidelines.",
    defectStepIndex: 3, // Memory wipe step fails if policy is vulnerable
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
  const [scenarioControls, setScenarioControls] = useState<Record<string, Record<string, boolean>>>({
    "upi-intent": { idempotency: true },
    "loan-disbursal": { penny_drop: true },
    "forex-rate-lock": { rate_lock_ttl: true },
    "biometric-session": { session_wipe: true },
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedStepIndex, setCompletedStepIndex] = useState<number>(-1);
  const [stepStatuses, setStepStatuses] = useState<Array<"pending" | "running" | "passed" | "failed" | "skipped">>([]);
  const [testResult, setTestResult] = useState<"idle" | "success" | "defect">("idle");
  const [defectInfo, setDefectInfo] = useState<{ step: number; reason: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"logs" | "payload" | "matrix">("logs");
  const [payloadCache, setPayloadCache] = useState<Record<string, unknown>>({});
  const [simulationLog, setSimulationLog] = useState<Array<{ type: "init" | "env" | "pass" | "fail" | "skip" | "info"; text: string; ms?: number }>>([]);

  const activeRunIdRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      activeRunIdRef.current++;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const activeScenario = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];
  const currentControl = activeScenario.customControl;
  const currentControlValue = currentControl
    ? scenarioControls[activeScenario.id]?.[currentControl.id] ?? currentControl.defaultVal
    : true;

  // Initialize or re-generate payload when scenario or control changes
  const updatePayload = (scenario = activeScenario, controls = scenarioControls) => {
    const scControls = controls[scenario.id] || {};
    const generated = scenario.generatePayload(scControls);
    setPayloadCache(generated);
    return generated;
  };

  const handleReset = () => {
    activeRunIdRef.current++;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isRunningRef.current = false;
    setIsRunning(false);
    setCompletedStepIndex(-1);
    setTestResult("idle");
    setDefectInfo(null);
    setStepStatuses([]);
    setSimulationLog([]);
  };

  const handleToggleControl = (controlId: string) => {
    handleReset();
    setScenarioControls((prev) => {
      const current = prev[activeScenario.id] || {};
      const updated = {
        ...prev,
        [activeScenario.id]: {
          ...current,
          [controlId]: !current[controlId],
        },
      };
      const newScControls = updated[activeScenario.id];
      setPayloadCache(activeScenario.generatePayload(newScControls));
      return updated;
    });
  };

  const handleRunSimulation = () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    // Invalidate prior executions and cancel pending timers
    activeRunIdRef.current++;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    const currentRunId = activeRunIdRef.current;

    // Fresh payload for this run
    const activeControls = scenarioControls[activeScenario.id] || {};
    const freshPayload = activeScenario.generatePayload(activeControls);
    setPayloadCache(freshPayload);

    setIsRunning(true);
    setCompletedStepIndex(-1);
    setTestResult("idle");
    setDefectInfo(null);
    setStepStatuses(activeScenario.steps.map(() => "pending"));

    const initialLogs: Array<{ type: "init" | "env" | "pass" | "fail" | "skip" | "info"; text: string; ms?: number }> = [
      { type: "init", text: `Loaded test scenario: "${activeScenario.name}" [${activeScenario.category}]` },
      {
        type: "env",
        text: `Target: ${activeScenario.targetPlatforms[0]} / Latency: ${isThrottled ? "3G Jitter (1600ms)" : "5G Direct (20ms)"}`,
      },
    ];
    setSimulationLog(initialLogs);

    const multiplier = isThrottled ? 2.2 : 1;
    let currentStep = 0;
    const shouldFail = currentControl ? !activeControls[currentControl.id] : false;
    const failAtStep = shouldFail ? activeScenario.defectStepIndex : -1;

    const runNextStep = () => {
      if (activeRunIdRef.current !== currentRunId) return;

      if (currentStep < activeScenario.steps.length) {
        const stepIdx = currentStep;

        // Mark current as running, with all preceding steps strictly passed
        setStepStatuses(
          activeScenario.steps.map((_, i) => {
            if (i < stepIdx) return "passed";
            if (i === stepIdx) return "running";
            return "pending";
          })
        );

        const step = activeScenario.steps[stepIdx];
        const jitter = 0.85 + Math.random() * 0.3;
        const stepTime = Math.round(step.durationMs * multiplier * jitter);

        timeoutRef.current = setTimeout(() => {
          if (activeRunIdRef.current !== currentRunId) return;

          if (stepIdx === failAtStep) {
            // Defect detected at this step
            setStepStatuses(
              activeScenario.steps.map((_, i) => {
                if (i < stepIdx) return "passed";
                if (i === stepIdx) return "failed";
                return "skipped";
              })
            );
            setCompletedStepIndex(stepIdx);
            isRunningRef.current = false;
            setIsRunning(false);
            setTestResult("defect");
            const failureMsg = step.failureReason || activeScenario.defectWarning;
            setDefectInfo({ step: stepIdx + 1, reason: failureMsg });
            setSimulationLog((prev) => [
              ...prev,
              {
                type: "fail",
                text: `step_${stepIdx + 1}: ${step.name} -> FAIL (${stepTime}ms) - ${failureMsg}`,
                ms: stepTime,
              },
              {
                type: "skip",
                text: `Remaining ${activeScenario.steps.length - stepIdx - 1} assertions skipped due to release gate halt.`,
              },
            ]);
          } else {
            // Step passed - mark all steps up to stepIdx as passed
            setStepStatuses(
              activeScenario.steps.map((_, i) => {
                if (i <= stepIdx) return "passed";
                return "pending";
              })
            );
            setCompletedStepIndex(stepIdx);
            setSimulationLog((prev) => [
              ...prev,
              {
                type: "pass",
                text: `step_${stepIdx + 1}: ${step.name} -> ${step.assertionCheck} (${stepTime}ms)`,
                ms: stepTime,
              },
            ]);

            currentStep++;
            runNextStep();
          }
        }, stepTime);
      } else {
        // All steps successfully verified
        if (activeRunIdRef.current !== currentRunId) return;
        setStepStatuses(activeScenario.steps.map(() => "passed"));
        setCompletedStepIndex(activeScenario.steps.length - 1);
        isRunningRef.current = false;
        setIsRunning(false);
        setTestResult("success");
        setSimulationLog((prev) => [
          ...prev,
          {
            type: "info",
            text: `SUITE_PASS: All ${activeScenario.steps.length} release gate assertions confirmed with 0 defects.`,
          },
        ]);
      }
    };

    runNextStep();
  };

  const ControlIcon = currentControl?.icon === "shield"
    ? ShieldCheck
    : currentControl?.icon === "fingerprint"
    ? Fingerprint
    : currentControl?.icon === "globe"
    ? Globe
    : currentControl?.icon === "zap"
    ? Zap
    : AlertCircle;

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
                  disabled={isRunning}
                  onClick={() => {
                    if (isRunning) return;
                    handleReset();
                    setSelectedId(sc.id);
                    const currentScControls = scenarioControls[sc.id] || {};
                    setPayloadCache(sc.generatePayload(currentScControls));
                  }}
                  className={`group relative flex w-full items-center gap-3 px-4 py-3.5 text-xs font-mono transition-colors text-left border-line disabled:opacity-70 disabled:cursor-not-allowed ${
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

              {/* Network Throttling Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={isThrottled}
                data-testid="sandbox-toggle-throttle"
                data-cursor={
                  isThrottled
                    ? "Switch to 5G low-latency mode (20ms)"
                    : "Simulate 3G packet drop & latency jitter (1600ms)"
                }
                disabled={isRunning}
                onClick={() => {
                  if (isRunning) return;
                  setIsThrottled(!isThrottled);
                }}
                className={`press group flex items-center gap-2.5 border px-3 py-1.5 text-xs font-mono transition-all rounded-xs select-none shadow-2xs disabled:opacity-60 disabled:cursor-not-allowed ${
                  isThrottled
                    ? "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                    : "border-line bg-card text-ink-soft hover:border-line-deep hover:bg-paper"
                }`}
                title="Toggle network latency throttling simulation"
              >
                <div className="flex items-center gap-1.5">
                  <Wifi
                    className={`h-3.5 w-3.5 transition-colors ${
                      isThrottled ? "text-amber-600 dark:text-amber-400" : "text-muted"
                    }`}
                  />
                  <span className="text-[0.68rem] tracking-wider uppercase text-muted">
                    Throttle
                  </span>
                </div>

                {/* Hardware Toggle Track & Knob */}
                <span
                  className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out ${
                    isThrottled ? "bg-amber-500" : "bg-line"
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`inline-block h-3 w-3 rounded-full bg-paper shadow-xs transition-transform duration-200 ease-in-out ${
                  isThrottled ? "translate-x-3.5" : "translate-x-0.5"
                    }`}
                  />
                </span>

                {/* State Label */}
                <span className="font-semibold tabular-nums text-[0.72rem]">
                  {isThrottled ? "3G Jitter (1600ms)" : "5G (20ms)"}
                </span>
              </button>

              {/* Dynamic Scenario-Specific Toggle Switch */}
              {currentControl && (
                <button
                  type="button"
                  role="switch"
                  aria-checked={currentControlValue}
                  data-testid={`sandbox-toggle-${currentControl.id}`}
                  data-cursor={
                    currentControlValue
                      ? `Toggle off to simulate defect: ${currentControl.defectRiskDescription}`
                      : `Enable strict validation to pass release gate`
                  }
                  disabled={isRunning}
                  onClick={() => {
                    if (isRunning) return;
                    handleToggleControl(currentControl.id);
                  }}
                  className={`press group flex items-center gap-2.5 border px-3 py-1.5 text-xs font-mono transition-all rounded-xs select-none shadow-2xs disabled:opacity-60 disabled:cursor-not-allowed ${
                    currentControlValue
                      ? "border-pass/50 bg-pass/10 text-pass"
                      : "border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                  title={currentControl.defectRiskDescription}
                >
                  <div className="flex items-center gap-1.5">
                    <ControlIcon
                      className={`h-3.5 w-3.5 transition-colors ${
                        currentControlValue ? "text-pass" : "text-red-500"
                      }`}
                    />
                    <span className="text-[0.68rem] tracking-wider uppercase text-muted">
                      {currentControl.label}
                    </span>
                  </div>

                  {/* Hardware Toggle Track & Knob */}
                  <span
                    className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out ${
                      currentControlValue ? "bg-pass" : "bg-red-500"
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`inline-block h-3 w-3 rounded-full bg-paper shadow-xs transition-transform duration-200 ease-in-out ${
                        currentControlValue ? "translate-x-3.5" : "translate-x-0.5"
                      }`}
                    />
                  </span>

                  {/* State Label */}
                  <span className="font-semibold text-[0.72rem]">
                    {currentControlValue ? currentControl.onLabel : currentControl.offLabel}
                  </span>
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
                  Assertion Pipeline (
                  {testResult === "success"
                    ? `${activeScenario.steps.length}/${activeScenario.steps.length} Passed`
                    : testResult === "defect"
                    ? `${completedStepIndex + 1}/${activeScenario.steps.length} Halted`
                    : isRunning
                    ? `${completedStepIndex + 1}/${activeScenario.steps.length} Running`
                    : `0/${activeScenario.steps.length} Ready`}
                  )
                </span>
                <span className="font-mono text-xs text-pass flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {isThrottled ? "Throttled Mode (3G)" : "Real-time Mode (5G)"}
                </span>
              </div>

              <div className="space-y-3">
                {activeScenario.steps.map((step, idx) => {
                  let status = stepStatuses[idx] || "pending";
                  if (testResult === "success") {
                    status = "passed";
                  } else if (testResult === "defect") {
                    const failIdx = defectInfo ? defectInfo.step - 1 : activeScenario.defectStepIndex;
                    if (idx < failIdx) status = "passed";
                    else if (idx === failIdx) status = "failed";
                    else status = "skipped";
                  }
                  const isDone = status === "passed";
                  const isCurrent = status === "running" && testResult === "idle";
                  const isFailed = status === "failed";
                  const isSkipped = status === "skipped";

                  return (
                    <div
                      key={step.name}
                      className={`flex items-start gap-3 border p-3 transition-colors ${
                        isDone
                          ? "border-pass/40 bg-pass-fill/5"
                          : isFailed
                          ? "border-red-500/50 bg-red-500/10 shadow-sm"
                          : isSkipped
                          ? "border-line/50 bg-card/20 opacity-50"
                          : isCurrent
                          ? "border-pass bg-card shadow-sm animate-pulse"
                          : "border-line bg-card/40 opacity-70"
                      }`}
                    >
                      <span className="mt-0.5 inline-flex shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 text-pass" />
                        ) : isFailed ? (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        ) : isSkipped ? (
                          <span className="inline-block h-4 w-4 rounded-full border border-line/60 bg-card text-center font-mono text-[0.55rem] leading-4 text-muted">
                            —
                          </span>
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
                          <p className={`font-sans text-xs font-medium ${
                            isDone ? "text-ink" : isFailed ? "text-red-600 dark:text-red-400 font-semibold" : isSkipped ? "text-muted" : "text-ink-soft"
                          }`}>
                            {step.name}
                          </p>
                          <span className="font-mono text-[0.68rem] text-muted shrink-0">
                            {Math.round(step.durationMs * (isThrottled ? 2.2 : 1))}ms
                          </span>
                        </div>
                        {isFailed && defectInfo && (
                          <p className="mt-1 font-mono text-[0.68rem] text-red-600 dark:text-red-400">
                            ↳ {defectInfo.reason}
                          </p>
                        )}
                        {isDone && (
                          <p className="mt-0.5 font-mono text-[0.65rem] text-muted truncate">
                            ↳ {step.assertionCheck}
                          </p>
                        )}
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
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3 mb-4">
                {/* Segmented Interactive Tab Buttons */}
                <div className="inline-flex items-center gap-1 p-1 rounded-xs border border-line bg-paper/80 shadow-2xs">
                  <button
                    type="button"
                    data-testid="sandbox-tab-logs"
                    data-cursor="View live step-by-step console logs & assertions"
                    onClick={() => setActiveTab("logs")}
                    className={`press flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs transition-all ${
                      activeTab === "logs"
                        ? "bg-card text-pass border border-pass/30 font-semibold shadow-xs"
                        : "text-muted hover:text-ink hover:bg-card/50"
                    }`}
                  >
                    <Terminal className="h-3 w-3 shrink-0" />
                    <span className="uppercase tracking-wider text-[0.68rem]">Console Logs</span>
                  </button>
                  <button
                    type="button"
                    data-testid="sandbox-tab-payload"
                    data-cursor="Inspect raw JSON request payload & idempotency keys"
                    onClick={() => {
                      if (Object.keys(payloadCache).length === 0) {
                        const currentScControls = scenarioControls[activeScenario.id] || {};
                        setPayloadCache(activeScenario.generatePayload(currentScControls));
                      }
                      setActiveTab("payload");
                    }}
                    className={`press flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs transition-all ${
                      activeTab === "payload"
                        ? "bg-card text-pass border border-pass/30 font-semibold shadow-xs"
                        : "text-muted hover:text-ink hover:bg-card/50"
                    }`}
                  >
                    <Code2 className="h-3 w-3 shrink-0" />
                    <span className="uppercase tracking-wider text-[0.68rem]">JSON Payload</span>
                  </button>
                  <button
                    type="button"
                    data-testid="sandbox-tab-matrix"
                    data-cursor="Inspect edge case assertions & target test matrix"
                    onClick={() => setActiveTab("matrix")}
                    className={`press flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs transition-all ${
                      activeTab === "matrix"
                        ? "bg-card text-pass border border-pass/30 font-semibold shadow-xs"
                        : "text-muted hover:text-ink hover:bg-card/50"
                    }`}
                  >
                    <Layers className="h-3 w-3 shrink-0" />
                    <span className="uppercase tracking-wider text-[0.68rem]">Test Matrix</span>
                  </button>
                </div>

                {/* Read-Only Status Telemetry Chip */}
                <div className="flex items-center gap-1.5">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[0.68rem] tracking-wider transition-colors shadow-2xs select-none ${
                      testResult === "defect"
                        ? "border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400"
                        : isRunning
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        : "border-line bg-paper/90 text-muted"
                    }`}
                    title="Real-time HTTP response status"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        testResult === "defect"
                          ? "bg-red-600"
                          : isRunning
                          ? "bg-amber-500 animate-ping"
                          : "bg-pass"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-[0.6rem] uppercase tracking-widest text-muted font-semibold">
                      Status:
                    </span>
                    <span
                      className={`font-semibold tabular-nums ${
                        testResult === "defect"
                          ? "text-red-600 dark:text-red-400"
                          : isRunning
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-pass"
                      }`}
                    >
                      {testResult === "defect"
                        ? "409 CONFLICT"
                        : isRunning
                        ? "102 PROCESSING"
                        : "200 OK"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tab Contents */}
              <div key={activeTab} className="flex-1 font-mono text-[0.75rem] leading-relaxed overflow-x-auto min-h-[220px] content-fade">
                {activeTab === "logs" && (
                  <div className="space-y-1.5 text-ink-soft">
                    {simulationLog.length === 0 ? (
                      <div className="space-y-1.5 text-muted">
                        <p>[INIT] Loaded test scenario: &quot;{activeScenario.name}&quot;</p>
                        <p>[ENV] Target: {activeScenario.targetPlatforms[0]} / Latency: {isThrottled ? "3G Jitter" : "Direct 5G"}</p>
                        <p className="italic pt-3">
                          Press &quot;Run Verification Flow&quot; above to trigger live step-by-step test execution.
                        </p>
                      </div>
                    ) : (
                      <>
                        {simulationLog.map((log, idx) => (
                          <p
                            key={idx}
                            className={
                              log.type === "pass"
                                ? "text-pass"
                                : log.type === "fail"
                                ? "text-red-500 font-semibold"
                                : log.type === "skip"
                                ? "text-amber-600 dark:text-amber-400"
                                : log.type === "info"
                                ? "text-pass font-semibold mt-2"
                                : "text-muted"
                            }
                          >
                            [{log.type.toUpperCase()}] {log.text}
                          </p>
                        ))}
                        {isRunning && (
                          <p className="text-ink animate-pulse">
                            [RUN] Evaluating step_{completedStepIndex + 2} assertions...
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}

                {activeTab === "payload" && (
                  <pre className="text-xs text-ink-soft bg-paper p-3 border border-line overflow-auto">
                    {JSON.stringify(
                      Object.keys(payloadCache).length > 0
                        ? payloadCache
                        : activeScenario.generatePayload(scenarioControls[activeScenario.id] || {}),
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
                        {activeScenario.edgeCases.map((ec, i) => (
                          <li key={i}>{ec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-line bg-paper p-2.5">
                      <span className="font-semibold text-ink">Target Platforms &amp; Gateways:</span>
                      <p className="text-ink-soft text-[0.72rem] mt-0.5">
                        {activeScenario.targetPlatforms.join(" • ")}
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
