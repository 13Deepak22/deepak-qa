"use client";

import { useEffect, useState } from "react";
import { releaseGate } from "@/data/portfolio";

const PLAYBACK_MS = 2800;

type Status = "wait" | "run" | "pass";

const durations = releaseGate.checks.map((check) => Number.parseFloat(check.ms));
const totalSeconds = durations.reduce((sum, value) => sum + value, 0);

function clock(seconds: number) {
  return `${Math.max(0, seconds).toFixed(1)}s`;
}

function frameAt(simulated: number) {
  let cursor = 0;
  let passed = 0;
  const rows = releaseGate.checks.map((check, index) => {
    const start = cursor;
    const length = durations[index];
    const end = start + length;
    cursor = end;
    const finished = simulated >= end - 0.001;
    const started = simulated >= start;
    const status: Status = finished ? "pass" : started ? "run" : "wait";
    if (finished) passed += 1;
    const shown = finished ? length : started ? simulated - start : 0;
    return { check, status, shown, progress: length === 0 ? 1 : Math.min(shown / length, 1) };
  });
  const done = simulated >= totalSeconds - 0.001;
  return { rows, passed, done, suiteSeconds: Math.min(simulated, totalSeconds) };
}

export function TestRun() {
  const [run, setRun] = useState(0);
  const [simulated, setSimulated] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSimulated(totalSeconds);
      return;
    }

    setSimulated(0);
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / PLAYBACK_MS, 1);
      setSimulated(progress * totalSeconds);
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [run]);

  const { rows, passed, done, suiteSeconds } = frameAt(simulated);

  return (
    <section className="report-card max-w-full" aria-label="Release gate output">
      <div className="flex items-start justify-between gap-4 border-b border-ink px-4 py-3 sm:px-5">
        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
            suite · {releaseGate.suite}
          </p>
          <p className="mt-1 font-mono text-sm">runner · {releaseGate.runner}</p>
        </div>
        <button
          type="button"
          className="press border border-ink px-3 py-2 font-mono text-xs tracking-[0.12em] uppercase hover:bg-ink hover:text-paper"
          onClick={() => setRun((value) => value + 1)}
        >
          Rerun
        </button>
      </div>
      <ol className="px-4 py-4 sm:px-5">
        {rows.map(({ check, status, shown, progress }) => (
          <li key={check.file} className="py-1.5 font-mono text-[0.82rem] sm:text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <span className="min-w-0 break-all">
                <span
                  className={
                    status === "pass" ? "text-pass" : status === "run" ? "text-ink" : "text-muted"
                  }
                >
                  {status}
                </span>
                <span className="ml-3 text-ink">{check.file}</span>
                {status === "run" ? <span className="runner-caret ml-1 inline-block h-[0.8em] w-[0.45em] bg-ink align-[-0.05em]" /> : null}
              </span>
              <span className="shrink-0 text-muted tabular-nums">
                {status === "pass" ? check.ms : clock(shown)}
              </span>
            </div>
            <span className="mt-1 block h-0.5 bg-line" aria-hidden="true">
              <span
                className="block h-full bg-pass"
                style={{ width: `${status === "wait" ? 0 : progress * 100}%` }}
              />
            </span>
          </li>
        ))}
        <li className="mt-4 border-t border-line pt-4 font-mono text-sm tabular-nums">
          {done ? releaseGate.summary : `${passed} passed · 0 failed · ${clock(suiteSeconds)}`}
        </li>
        <li className={`pt-2 font-mono text-sm ${done ? "text-pass" : "text-muted"}`}>
          {done ? `gate · ${releaseGate.gate}` : "gate · running"}
        </li>
      </ol>
    </section>
  );
}
