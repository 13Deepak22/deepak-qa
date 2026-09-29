"use client";

import { AlertTriangle, CheckCircle2, Play, RefreshCw, ShieldAlert, Terminal, XCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { rcaCaseStudy } from "@/data";

export function RcaCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedCount, setSimulatedCount] = useState(
    rcaCaseStudy.steps[0].terminalLogs.length
  );

  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const currentStep = rcaCaseStudy.steps[activeStep];
  const displayedLogs = currentStep.terminalLogs.slice(0, simulatedCount);

  const startSimulation = useCallback((phaseIndex: number) => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setActiveStep(phaseIndex);
    setIsSimulating(true);
    setSimulatedCount(0);

    const logsCount = rcaCaseStudy.steps[phaseIndex].terminalLogs.length;
    for (let i = 1; i <= logsCount; i++) {
      const timer = setTimeout(() => {
        setSimulatedCount(i);
        if (i === logsCount) {
          setIsSimulating(false);
        }
      }, i * 210);
      timersRef.current.push(timer);
    }
  }, []);

  // Cleanup pending timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const getStatusIcon = (status: string) => {
    if (status === "fail") return <XCircle className="h-3.5 w-3.5 shrink-0 text-rose-400" />;
    if (status === "warn") return <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-400" />;
    if (status === "pass") return <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-pass" />;
    return <Play className="h-3.5 w-3.5 shrink-0 text-on-band/60" />;
  };

  return (
    <section id="investigation" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Section Heading */}
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">{rcaCaseStudy.sectionIndex}</span> / Defect Investigation &amp; RCA
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
              {rcaCaseStudy.tagline}
            </h2>
            <p className="mt-3 font-serif text-lg text-pass italic">
              {rcaCaseStudy.domain} · {rcaCaseStudy.severity}
            </p>
          </div>
          <p className="leading-relaxed text-ink-soft">
            {rcaCaseStudy.summary}
          </p>
        </div>

        {/* Quick Metrics Bar */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-line py-5 sm:grid-cols-4">
          {rcaCaseStudy.metrics.map((metric) => (
            <div key={metric.label} className="min-w-0">
              <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase block">
                {metric.label}
              </span>
              <span className="mt-1 font-mono text-sm font-medium text-ink block truncate">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Main 2-Column Balanced Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left Column: 4-Step Interactive Phase Selection Cards & The QA Principle */}
          <div className="flex flex-col gap-6 min-w-0">
            <div className="space-y-3 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                  Investigation breakdown
                </h3>
                <span className="font-mono text-[0.62rem] tracking-wider text-muted uppercase">
                  Select a phase
                </span>
              </div>

              <div className="flex flex-col gap-3 min-w-0">
                {rcaCaseStudy.steps.map((item, index) => {
                  const isActive = activeStep === index;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      data-active={isActive}
                      onClick={() => startSimulation(index)}
                      className={`rca-step-card group relative flex min-w-0 w-full flex-col items-start p-4 text-left border sm:p-5 transition-all ${
                        isActive
                          ? "border-pass bg-paper shadow-xs ring-1 ring-pass/40"
                          : "border-line bg-paper/60 hover:border-pass/60 hover:bg-paper"
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute top-0 right-0 left-0 h-0.5 bg-pass"
                        />
                      )}
                      <div className="flex w-full flex-wrap items-center justify-between gap-1.5">
                        <span
                          className={`font-mono text-[0.68rem] tracking-[0.14em] uppercase ${
                            isActive ? "text-pass font-semibold" : "text-muted group-hover:text-pass"
                          }`}
                        >
                          Phase {item.step} · {item.phase}
                        </span>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 font-mono text-[0.62rem] border shrink-0 ${
                            index === 1
                              ? "border-rose-700/40 bg-rose-500/10 text-rose-900 dark:text-rose-300"
                              : index === 2
                              ? "border-amber-700/40 bg-amber-500/10 text-amber-900 dark:text-amber-300"
                              : index === 3
                              ? "border-pass/40 bg-pass-fill/10 text-ink dark:text-pass font-medium"
                              : "border-line text-muted"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="mt-2.5 font-serif text-lg leading-snug tracking-tight text-ink group-hover:text-pass">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                        {item.summary}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QA Principle Card */}
            <div className="border border-line bg-card p-5 min-w-0">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                The QA Principle
              </p>
              <p className="mt-2 font-serif text-sm leading-relaxed text-ink-soft italic">
                &ldquo;{rcaCaseStudy.takeaway}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Finding (Top) + Dynamic Test Runner (Bottom) */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* 1. Detailed Finding Card - Positioned on right side ABOVE test runner */}
            <div
              key={activeStep}
              className="rca-deepdive-animate min-w-0 border border-line bg-paper p-5 sm:p-6 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-pass-fill bg-band text-pass">
                  {activeStep === 1 ? (
                    <XCircle className="h-4 w-4 text-rose-400" />
                  ) : activeStep === 2 ? (
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                  ) : activeStep === 3 ? (
                    <CheckCircle2 className="h-4 w-4 text-pass" />
                  ) : (
                    <ShieldAlert className="h-4 w-4 text-pass" />
                  )}
                </span>
                <div className="min-w-0">
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase block">
                    Detailed finding · Phase {currentStep.step}: {currentStep.phase}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl tracking-tight text-ink">
                    {currentStep.title}
                  </h4>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-[0.9375rem]">
                {currentStep.detail}
              </p>
            </div>

            {/* 2. Dynamic Test Runner Terminal - Updates & simulates per active phase */}
            <div className="band min-w-0 rounded-none border border-line bg-band p-5 text-on-band sm:p-6 shadow-md overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-on-band/15 pb-4">
                <div className="flex min-w-0 items-center gap-2">
                  <Terminal className="h-4 w-4 shrink-0 text-pass" />
                  <span className="truncate font-mono text-[0.72rem] tracking-wider uppercase text-on-band/85">
                    {currentStep.specFile}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => startSimulation(activeStep)}
                  disabled={isSimulating}
                  className="press inline-flex shrink-0 items-center gap-1.5 border border-on-band/20 px-3 py-1 font-mono text-[0.68rem] text-on-band hover:border-pass hover:text-pass disabled:opacity-50 transition-colors"
                >
                  <RefreshCw className={`h-3 w-3 ${isSimulating ? "animate-spin text-pass" : ""}`} />
                  <span>{isSimulating ? "running..." : `re-run phase ${currentStep.step}`}</span>
                </button>
              </div>

              {/* Sub-command prompt */}
              <div className="mt-3 flex items-center gap-2 font-mono text-[0.68rem] text-on-band/60">
                <span className="text-pass">$</span>
                <span className="truncate">{currentStep.command}</span>
              </div>

              {/* Live Terminal Log Stream */}
              <div className="mt-4 min-h-[14rem] font-mono text-[0.72rem] leading-relaxed space-y-2.5 overflow-x-auto">
                {displayedLogs.map((log, i) => (
                  <div
                    key={`${activeStep}-${i}-${log.timestamp}`}
                    className="terminal-log-animate flex items-start gap-2"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <span className="text-on-band/60 shrink-0 select-none">{log.timestamp}</span>
                    <span
                      className={`px-1 text-[0.62rem] border shrink-0 uppercase ${
                        log.status === "fail"
                          ? "border-rose-400/40 text-rose-300"
                          : log.status === "warn"
                          ? "border-amber-400/40 text-amber-300"
                          : log.status === "pass"
                          ? "border-pass/40 text-pass"
                          : "border-on-band/20 text-on-band/75"
                      }`}
                    >
                      {log.source}
                    </span>
                    <span
                      className={
                        log.status === "fail"
                          ? "text-rose-200/95"
                          : log.status === "warn"
                          ? "text-amber-200/90"
                          : log.status === "pass"
                          ? "text-on-band"
                          : "text-on-band/85"
                      }
                    >
                      {log.event}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dynamic Phase Outcome Banner */}
              {displayedLogs.length === currentStep.terminalLogs.length && (
                <div
                  className={`rca-deepdive-animate mt-4 pt-3 border-t font-mono text-xs flex items-center gap-2 ${
                    activeStep === 3
                      ? "border-pass/30 text-pass"
                      : activeStep === 1
                      ? "border-rose-400/30 text-rose-300"
                      : "border-amber-400/30 text-amber-300"
                  }`}
                >
                  {getStatusIcon(
                    activeStep === 3 ? "pass" : activeStep === 1 ? "fail" : "warn"
                  )}
                  <span>{currentStep.outcome}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
