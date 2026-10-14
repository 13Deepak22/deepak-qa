"use client";

import { ToolLogo } from "@/components/home/tool-logo";

export function LearnSubHeader() {
  const upcomingTools: { id: "selenium" | "appium" | "postman" | "jmeter"; name: string }[] = [
    { id: "selenium", name: "Selenium" },
    { id: "appium", name: "Appium" },
    { id: "postman", name: "Postman" },
    { id: "jmeter", name: "JMeter" },
  ];

  return (
    <div className="border-t border-line/60 bg-paper/95 py-2 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
        {/* Left: Active Tool Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[10px] tracking-wider uppercase text-muted">DOCS</span>
          <span className="text-line">/</span>
          <div className="flex items-center gap-1.5 font-medium text-ink">
            <ToolLogo name="playwright" className="h-4 w-4 shrink-0" />
            <span className="font-semibold">Playwright</span>
            <span className="rounded bg-pass/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-pass uppercase">
              Active Doc • v1.50+
            </span>
          </div>
        </div>

        {/* Right: Upcoming Tools */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-muted text-[10px] uppercase font-mono mr-1 hidden sm:inline">Upcoming:</span>
          {upcomingTools.map((t, idx) => (
            <div
              key={t.id}
              className={`flex items-center gap-1 rounded border border-line/40 px-2 py-0.5 text-[11px] text-muted opacity-60 ${
                idx >= 2 ? "hidden md:flex" : ""
              }`}
            >
              <ToolLogo name={t.id} className="h-3 w-3 shrink-0" />
              <span>{t.name}</span>
              <span className="text-[9px] font-mono text-muted">(soon)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Keep ToolBanner alias for backwards compatibility
export const ToolBanner = LearnSubHeader;
