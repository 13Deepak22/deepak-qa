"use client";

import { useState } from "react";
import { DocCodeBlock } from "./doc-code-block";

interface TabItem {
  label: string;
  code: string;
  language?: string;
  filename?: string;
}

interface DocTabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}

export function DocTabs({ tabs, defaultIndex = 0 }: DocTabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-line bg-card shadow-xs transition-all duration-300 hover:border-pass/40 hover:shadow-sm">
      {/* Tabs Header */}
      <div className="flex border-b border-line bg-paper/70 px-2 pt-1.5">
        <div className="flex space-x-1" role="tablist">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-3.5 py-2 text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-pass font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-pass animate-in fade-in-50 duration-200" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels with smooth fade-in */}
      <div className="relative">
        {tabs.map((tab, idx) => {
          if (idx !== activeIndex) return null;
          return (
            <div
              key={tab.label}
              role="tabpanel"
              className="p-0 animate-in fade-in-50 duration-200"
            >
              <DocCodeBlock
                code={tab.code}
                language={
                  tab.language ||
                  (tab.label.toLowerCase().includes("typescript")
                    ? "typescript"
                    : tab.label.toLowerCase().includes("javascript")
                    ? "javascript"
                    : "bash")
                }
                filename={tab.filename}
                borderless={true}
                hideHeader={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
