"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, CheckCircle2, Loader2, Sparkles, Terminal, Laptop, ShieldCheck } from "lucide-react";

interface Step {
  id: number;
  label: string;
  code: string;
  duration: string;
  status: "idle" | "running" | "success";
  output?: string;
}

export function InteractiveRunner() {
  const initialSteps: Step[] = [
    {
      id: 1,
      label: "Launch Browser Engine",
      code: "const browser = await chromium.launch({ headless: true });",
      duration: "18ms",
      status: "idle",
      output: "✓ Chromium v133.0 spawned with hermetic sandbox",
    },
    {
      id: 2,
      label: "Create Isolated Context",
      code: "const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });",
      duration: "4ms",
      status: "idle",
      output: "✓ Ephemeral context created (cookies: 0, cache: clean)",
    },
    {
      id: 3,
      label: "Open New Page",
      code: "const page = await context.newPage();",
      duration: "6ms",
      status: "idle",
      output: "✓ Tab initialized [about:blank]",
    },
    {
      id: 4,
      label: "Navigate & Wait For Commit",
      code: "await page.goto('https://demo.playwright.dev/todomvc', { waitUntil: 'load' });",
      duration: "32ms",
      status: "idle",
      output: "✓ HTTP 200 OK — DOM loaded & network idle",
    },
    {
      id: 5,
      label: "Locate & Fill Input",
      code: "await page.getByPlaceholder('What needs to be done?').fill('Ship Playwright Suite');",
      duration: "8ms",
      status: "idle",
      output: "✓ Actionability checks passed: element visible, enabled & editable",
    },
    {
      id: 6,
      label: "Press Enter Key",
      code: "await page.getByPlaceholder('What needs to be done?').press('Enter');",
      duration: "3ms",
      status: "idle",
      output: "✓ Key 'Enter' dispatched to DOM tree",
    },
    {
      id: 7,
      label: "Web-First Assertion",
      code: "await expect(page.getByTestId('todo-title')).toHaveText('Ship Playwright Suite');",
      duration: "2ms",
      status: "idle",
      output: "✓ Assertion passed: Auto-retry resolved in 2ms (0 retries needed)",
    },
  ];

  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const runAllSteps = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompleted(false);

    // Reset steps
    setSteps(initialSteps.map((s) => ({ ...s, status: "idle" })));
    let currentIdx = 0;

    const executeNext = () => {
      if (currentIdx >= initialSteps.length) {
        setIsRunning(false);
        setActiveStepIndex(null);
        setCompleted(true);
        return;
      }

      setActiveStepIndex(currentIdx);
      setSteps((prev) =>
        prev.map((s, idx) =>
          idx === currentIdx ? { ...s, status: "running" } : s
        )
      );

      timerRef.current = setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, idx) =>
            idx === currentIdx ? { ...s, status: "success" } : s
          )
        );
        currentIdx++;
        executeNext();
      }, 450);
    };

    executeNext();
  };

  const resetAll = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsRunning(false);
    setActiveStepIndex(null);
    setCompleted(false);
    setSteps(initialSteps);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-line bg-card/70 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-pass/50 hover:shadow-md">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-line bg-paper/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-pass/15 text-pass">
            <Laptop className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
              Interactive Execution Simulator
            </span>
            <span className="ml-2 hidden font-mono text-[10px] text-muted sm:inline">
              Real-time lifecycle & auto-waiting engine
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetAll}
            className="flex items-center gap-1 rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted hover:border-pass hover:text-ink transition cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={runAllSteps}
            disabled={isRunning}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold text-white shadow-xs transition cursor-pointer ${
              isRunning
                ? "bg-pass/60 cursor-not-allowed"
                : "bg-pass hover:opacity-90 active:scale-95"
            }`}
          >
            {isRunning ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Executing...</span>
              </>
            ) : completed ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Passed (7/7)</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Run Playwright Test</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Steps List */}
      <div className="divide-y divide-line/40 p-1 sm:p-2">
        {steps.map((step, idx) => {
          const isCurrent = activeStepIndex === idx;
          const isDone = step.status === "success";

          return (
            <div
              key={step.id}
              className={`group flex flex-col gap-1.5 rounded-lg p-2.5 sm:p-3 transition-all duration-200 ${
                isCurrent
                  ? "bg-pass/10 border border-pass/30 shadow-xs"
                  : isDone
                  ? "bg-card/40 hover:bg-card"
                  : "hover:bg-card/30"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2">
                  {/* Status Indicator Icon */}
                  {step.status === "running" ? (
                    <Loader2 className="h-4 w-4 animate-spin text-pass" />
                  ) : step.status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 text-pass animate-in zoom-in-75 duration-200" />
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-line/80 font-mono text-[9px] text-muted">
                      {step.id}
                    </span>
                  )}
                  <span className={`font-serif ${isDone ? "text-ink font-semibold" : isCurrent ? "text-pass font-semibold" : "text-ink/80"}`}>
                    {step.label}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-muted">
                  {isDone ? step.duration : step.status === "running" ? "timing..." : "awaiting"}
                </span>
              </div>

              {/* Step Code Snippet */}
              <div className="ml-6 overflow-x-auto rounded border border-line/30 bg-paper/60 px-2.5 py-1.5 font-mono text-[11px] text-ink/90">
                <code>{step.code}</code>
              </div>

              {/* Console Output if done or current */}
              {(isDone || isCurrent) && step.output && (
                <div className="ml-6 flex items-center gap-1.5 font-mono text-[10.5px] text-pass/90 animate-in fade-in-50 duration-200">
                  <Terminal className="h-3 w-3 shrink-0" />
                  <span>{step.output}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completed Banner */}
      {completed && (
        <div className="border-t border-line/60 bg-pass/10 px-4 py-2.5 text-center font-mono text-xs text-pass flex items-center justify-center gap-2 animate-in fade-in-50 duration-300">
          <ShieldCheck className="h-4 w-4" />
          <span>Test suite passed in 73ms with hermetic isolation & zero flakiness.</span>
        </div>
      )}
    </div>
  );
}

