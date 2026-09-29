"use client";

import { CheckCircle2, ShieldAlert, Terminal, RefreshCw, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { rcaCaseStudy } from "@/data";

export function RcaCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState(rcaCaseStudy.terminalLogs);

  const rerunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulatedLogs([]);

    rcaCaseStudy.terminalLogs.forEach((log, index) => {
      setTimeout(() => {
        setSimulatedLogs((prev) => [...prev, log]);
        if (index === rcaCaseStudy.terminalLogs.length - 1) {
          setIsSimulating(false);
        }
      }, (index + 1) * 220);
    });
  };

  const currentStep = rcaCaseStudy.steps[activeStep];

  return (
    <section id="investigation" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Section Heading */}
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">{rcaCaseStudy.sectionIndex}</span> / Defect Investigation & RCA
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {rcaCaseStudy.tagline}
            </h2>
            <p className="mt-3 text-lg font-serif italic text-pass">
              {rcaCaseStudy.domain} · {rcaCaseStudy.severity}
            </p>
          </div>
          <p className="leading-relaxed text-ink-soft">
            {rcaCaseStudy.summary}
          </p>
        </div>

        {/* Quick Badges */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-line py-5">
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

        {/* 4-Step Interactive Timeline */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-3">
            <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              Investigation breakdown (select a phase)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {rcaCaseStudy.steps.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`tool-card group flex flex-col items-start p-5 text-left border transition-all ${
                      isActive
                        ? "border-pass bg-paper shadow-sm ring-1 ring-pass/40"
                        : "border-line bg-paper/60 hover:border-pass/60 hover:bg-paper"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                        Phase {item.step} · {item.phase}
                      </span>
                      <span className={`inline-flex items-center px-2 py-0.5 font-mono text-[0.62rem] border ${
                        index === 2
                          ? "border-amber-600/30 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                          : index === 3
                          ? "border-pass/30 bg-pass-fill/10 text-pass"
                          : "border-line text-muted"
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="mt-3 font-serif text-lg leading-snug tracking-tight text-ink group-hover:text-pass">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-2">
                      {item.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep Dive Card */}
            <div className="mt-6 border border-line bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-pass-fill bg-band text-pass">
                  {activeStep === 2 ? (
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                  ) : activeStep === 3 ? (
                    <CheckCircle2 className="h-4 w-4 text-pass" />
                  ) : (
                    <ShieldAlert className="h-4 w-4 text-pass" />
                  )}
                </span>
                <div>
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase block">
                    Detailed finding · Phase {currentStep.step}
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
          </div>

          {/* Interactive Concurrency Gate Terminal */}
          <div className="rounded-none border border-line bg-band p-5 text-on-band sm:p-6 shadow-md">
            <div className="flex items-center justify-between border-b border-on-band/15 pb-4">
              <div className="flex items-center gap-2.5">
                <Terminal className="h-4 w-4 text-pass" />
                <span className="font-mono text-xs tracking-wider uppercase text-on-band/80">
                  concurrency.idempotency.spec.ts
                </span>
              </div>
              <button
                type="button"
                onClick={rerunSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-1.5 border border-on-band/20 px-2.5 py-1 font-mono text-[0.68rem] text-on-band/80 hover:border-pass hover:text-pass disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isSimulating ? "animate-spin" : ""}`} />
                <span>{isSimulating ? "simulating..." : "re-test race"}</span>
              </button>
            </div>

            <div className="mt-4 min-h-[15rem] font-mono text-[0.72rem] leading-relaxed space-y-2.5 overflow-x-auto">
              <p className="text-on-band/50">
                # Simulating parallel webhook delivery during client auto-retry:
              </p>
              {simulatedLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-on-band/40 shrink-0">{log.timestamp}</span>
                  <span className={`px-1 text-[0.62rem] border shrink-0 ${
                    log.status === "warn"
                      ? "border-amber-400/40 text-amber-300"
                      : "border-pass/40 text-pass"
                  }`}>
                    {log.source}
                  </span>
                  <span className={log.status === "warn" ? "text-amber-200/90" : "text-on-band/90"}>
                    {log.event}
                  </span>
                </div>
              ))}
              {simulatedLogs.length === rcaCaseStudy.terminalLogs.length && (
                <div className="mt-4 pt-3 border-t border-on-band/15 text-pass font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Gate passed: release cleared with atomic idempotency enforcement.</span>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-on-band/15 pt-4">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-on-band/50 uppercase">
                The QA Principle
              </p>
              <p className="mt-1 text-xs leading-relaxed text-on-band/75 italic">
                &ldquo;{rcaCaseStudy.takeaway}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
