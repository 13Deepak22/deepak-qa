"use client";

import { ToolLogo } from "@/components/home/tool-logo";

export type LearnViewType = "docs" | "mcp" | "cli" | "api";
export type LanguageType = "node" | "python" | "java" | "dotnet";

interface DocsHeaderBarProps {
  activeView: LearnViewType;
  onSelectView: (view: LearnViewType) => void;
  selectedLanguage?: LanguageType;
  onSelectLanguage?: (lang: LanguageType) => void;
}

export function DocsHeaderBar({
  activeView,
  onSelectView,
}: DocsHeaderBarProps) {
  const navItems: { id: LearnViewType; label: string }[] = [
    { id: "docs", label: "Docs" },
    { id: "mcp", label: "MCP" },
    { id: "cli", label: "CLI" },
    { id: "api", label: "API" },
  ];

  const upcomingTools: { id: "selenium" | "appium" | "postman" | "jmeter"; name: string }[] = [
    { id: "selenium", name: "Selenium" },
    { id: "appium", name: "Appium" },
    { id: "postman", name: "Postman" },
    { id: "jmeter", name: "JMeter" },
  ];

  return (
    <div className="sticky top-20 z-30 border-b border-line/60 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Left: Playwright Brand & Top Navigation Items (Docs, MCP, CLI, API, Node.js) */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          {/* Playwright Brand Link */}
          <button
            type="button"
            onClick={() => onSelectView("docs")}
            className="flex items-center gap-1.5 shrink-0 font-medium text-ink hover:text-pass transition cursor-pointer"
          >
            <ToolLogo name="playwright" className="h-4 w-4 shrink-0" />
            <span className="font-semibold text-xs tracking-tight">Playwright</span>
          </button>

          <span className="text-line/60 hidden sm:inline">|</span>

          {/* Docs / MCP / CLI / API navigation tabs matching official Playwright site */}
          <nav className="flex items-center gap-1 sm:gap-2 font-sans text-xs">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectView(item.id)}
                  className={`rounded-md px-2 py-1 font-medium transition cursor-pointer ${
                    isActive
                      ? "text-pass font-semibold bg-pass/10"
                      : "text-ink/80 hover:text-ink hover:bg-card"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Node.js Static Badge (dropdown removed per user request) */}
            <span className="inline-flex items-center gap-1.5 rounded-md border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[11px] font-mono font-medium text-ink/80 ml-1">
              <span className="h-1.5 w-1.5 rounded-full bg-pass" />
              Node.js
            </span>
          </nav>
        </div>

        {/* Right: Upcoming Tools & Version Pill */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted mr-1 hidden lg:inline">
            Roadmap:
          </span>
          <div className="flex items-center gap-1.5">
            {upcomingTools.map((t, idx) => (
              <div
                key={t.id}
                className={`flex items-center gap-1 rounded border border-line/40 px-2 py-0.5 text-[11px] text-muted opacity-60 ${
                  idx >= 2 ? "hidden xl:flex" : ""
                }`}
              >
                <ToolLogo name={t.id} className="h-3 w-3 shrink-0" />
                <span>{t.name}</span>
                <span className="text-[9px] font-mono text-muted">(soon)</span>
              </div>
            ))}
          </div>

          <span className="rounded bg-pass/15 px-2 py-0.5 font-mono text-[9px] font-bold text-pass uppercase ml-1">
            v1.50+
          </span>
        </div>
      </div>
    </div>
  );
}
