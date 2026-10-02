"use client";

import { useState } from "react";
import {
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export function InteractiveRaceTimeline() {
  const [mode, setMode] = useState<"vulnerable" | "protected">("protected");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timelineStep, setTimelineStep] = useState<number>(3); // Default to completed protected state

  const handleSimulate = (targetMode: "vulnerable" | "protected") => {
    setMode(targetMode);
    setIsPlaying(true);
    setTimelineStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setTimelineStep(current);
      if (current >= 3) {
        clearInterval(interval);
        setTimeout(() => setIsPlaying(false), 300);
      }
    }, 600);
  };

  return (
    <div className="border border-line bg-paper p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-pass" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Interactive Concurrency &amp; Race Condition Timeline
            </h3>
          </div>
          <p className="text-xs text-ink-soft mt-1">
            Compare asynchronous thread execution: Vulnerable In-Memory Check vs. Remediated Redis SETNX Lock.
          </p>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex items-center gap-2 border border-line bg-card p-1">
          <button
            type="button"
            data-testid="race-mode-vulnerable"
            onClick={() => handleSimulate("vulnerable")}
            disabled={isPlaying}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
              mode === "vulnerable"
                ? "bg-red-600 text-white font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            Vulnerable Pipeline
          </button>
          <button
            type="button"
            data-testid="race-mode-protected"
            onClick={() => handleSimulate("protected")}
            disabled={isPlaying}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
              mode === "protected"
                ? "bg-pass text-on-band font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            Redis Protected
          </button>
        </div>
      </div>

      {/* Interactive Timeline Display */}
      <div className="mt-6 grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Thread A (Client Ingress / Tap 1) */}
        <div className="border border-line bg-card p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-line/60 pb-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pass" />
              <span className="font-bold text-ink">Worker Thread A (Client Tap 1)</span>
            </div>
            <span className="text-muted text-[0.65rem]">Timestamp: t=0ms</span>
          </div>

          <div className="space-y-2.5">
            <div className={`p-2.5 border transition-all ${timelineStep >= 1 ? "border-pass/40 bg-paper" : "border-line bg-paper/40 opacity-40"}`}>
              <span className="text-pass font-bold block text-[0.65rem]">STEP 1 · 0ms</span>
              <p className="text-ink text-[0.72rem]">Ingresses payment request #TXN_4091 for ₹10,000.</p>
            </div>

            <div className={`p-2.5 border transition-all ${timelineStep >= 2 ? "border-pass/40 bg-paper" : "border-line bg-paper/40 opacity-40"}`}>
              <span className="text-pass font-bold block text-[0.65rem]">STEP 2 · 14ms</span>
              <p className="text-ink text-[0.72rem]">
                {mode === "vulnerable"
                  ? "Queries in-memory state: 'PENDING'. Proceeds to bank disbursal API."
                  : "Acquires Redis SETNX lock 'disbursal:TXN_4091' with 30s TTL. Proceeds."}
              </p>
            </div>

            <div className={`p-2.5 border transition-all ${timelineStep >= 3 ? "border-pass/40 bg-paper" : "border-line bg-paper/40 opacity-40"}`}>
              <span className="text-pass font-bold block text-[0.65rem]">STEP 3 · 180ms</span>
              <p className="text-pass font-bold text-[0.72rem]">
                Payment Disbursed to Bank: ₹10,000 (HTTP 200 OK).
              </p>
            </div>
          </div>
        </div>

        {/* Thread B (Network Retry / Tap 2) */}
        <div className="border border-line bg-card p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-line/60 pb-2">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${mode === "vulnerable" ? "bg-red-500" : "bg-pass"}`} />
              <span className="font-bold text-ink">Worker Thread B (3G Latency Retry)</span>
            </div>
            <span className="text-muted text-[0.65rem]">Timestamp: t=12ms</span>
          </div>

          <div className="space-y-2.5">
            <div className={`p-2.5 border transition-all ${timelineStep >= 1 ? "border-line bg-paper" : "border-line bg-paper/40 opacity-40"}`}>
              <span className="text-muted font-bold block text-[0.65rem]">STEP 1 · 12ms</span>
              <p className="text-ink text-[0.72rem]">Client timeout triggers retry dispatch for ₹10,000.</p>
            </div>

            <div
              className={`p-2.5 border transition-all ${
                timelineStep >= 2
                  ? mode === "vulnerable"
                    ? "border-red-500/50 bg-red-500/10"
                    : "border-pass/40 bg-pass-fill/10"
                  : "border-line bg-paper/40 opacity-40"
              }`}
            >
              <span className={`font-bold block text-[0.65rem] ${mode === "vulnerable" ? "text-red-500" : "text-pass"}`}>
                STEP 2 · 22ms · CONCURRENCY CHECK
              </span>
              <p className="text-ink text-[0.72rem]">
                {mode === "vulnerable"
                  ? "CRITICAL FLAW: DB write still in-flight! In-memory check still evaluates as 'PENDING'."
                  : "PROTECTED: Redis SETNX lock held by Thread A. Returns HTTP 409 Conflict."}
              </p>
            </div>

            <div
              className={`p-2.5 border transition-all ${
                timelineStep >= 3
                  ? mode === "vulnerable"
                    ? "border-red-500/60 bg-red-500/15"
                    : "border-pass/40 bg-paper"
                  : "border-line bg-paper/40 opacity-40"
              }`}
            >
              <span className={`font-bold block text-[0.65rem] ${mode === "vulnerable" ? "text-red-600 dark:text-red-400" : "text-pass"}`}>
                STEP 3 · OUTCOME
              </span>
              <p className={`font-bold text-[0.72rem] ${mode === "vulnerable" ? "text-red-600 dark:text-red-400" : "text-pass"}`}>
                {mode === "vulnerable"
                  ? "FATAL DEFECT: Duplicate Disbursal Dispatched! Total Debited: ₹20,000 (Financial Loss)"
                  : "REMEDIATED: Duplicate Disbursal Rejected (0.00 INR Delta). Zero Leakage."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Outcome Banner */}
      <div className="mt-6 pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          {mode === "protected" ? (
            <ShieldCheck className="h-4 w-4 text-pass" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-red-500" />
          )}
          <span className="text-ink font-semibold">
            {mode === "protected"
              ? "Remediation Status: Enforced across all production release gates."
              : "Vulnerability State: Simulated in staging testbed under 3G throttled profiles."}
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleSimulate(mode)}
          disabled={isPlaying}
          className="press inline-flex items-center gap-1.5 border border-line bg-card px-3 py-1.5 text-ink hover:border-pass hover:text-pass transition-colors text-[0.7rem]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Re-simulate Execution</span>
        </button>
      </div>
    </div>
  );
}

