"use client";

import { ToolLogo } from "@/components/home/tool-logo";
import { BookOpen, Sparkles } from "lucide-react";

export function ToolBanner() {
  const tools: { id: "playwright" | "selenium" | "appium" | "postman" | "jmeter"; name: string; version: string; active: boolean; badge: string }[] = [
    {
      id: "playwright",
      name: "Playwright",
      version: "v1.50+",
      active: true,
      badge: "Active Doc",
    },
    {
      id: "selenium",
      name: "Selenium",
      version: "Upcoming",
      active: false,
      badge: "Coming Soon",
    },
    {
      id: "appium",
      name: "Appium",
      version: "Upcoming",
      active: false,
      badge: "Coming Soon",
    },
    {
      id: "postman",
      name: "Postman",
      version: "Upcoming",
      active: false,
      badge: "Coming Soon",
    },
    {
      id: "jmeter",
      name: "JMeter",
      version: "Upcoming",
      active: false,
      badge: "Coming Soon",
    },
  ];

  return (
    <div className="mb-6 rounded-xl border border-line bg-card/70 p-4 sm:p-5 backdrop-blur-xs shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-pass/15 text-pass">
              <BookOpen className="h-3 w-3" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-pass">
              QA Automation Learning Hub
            </span>
          </div>
          <p className="text-xs text-muted">
            Official specifications, syntax guides, and runtime patterns for modern QA engineering.
          </p>
        </div>

        {/* Tool Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {tools.map((t) => (
            <div
              key={t.id}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs transition border ${
                t.active
                  ? "border-pass/60 bg-paper font-semibold text-ink shadow-xs"
                  : "border-line/40 bg-paper/30 text-muted opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="h-4 w-4 shrink-0">
                <ToolLogo name={t.id as any} className="h-4 w-4" />
              </div>
              <span>{t.name}</span>
              <span
                className={`rounded px-1.5 py-0.2 font-mono text-[9.5px] uppercase ${
                  t.active
                    ? "bg-pass/15 text-pass font-bold"
                    : "bg-paper-deep text-muted"
                }`}
              >
                {t.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

