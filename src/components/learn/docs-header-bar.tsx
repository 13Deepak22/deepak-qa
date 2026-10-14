"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";

export type LearnViewType = "docs" | "mcp" | "cli" | "api";
export type LanguageType = "node" | "python" | "java" | "dotnet";

interface DocsHeaderBarProps {
  activeView: LearnViewType;
  onSelectView: (view: LearnViewType) => void;
  selectedLanguage: LanguageType;
  onSelectLanguage: (lang: LanguageType) => void;
}

export function DocsHeaderBar({
  activeView,
  onSelectView,
  selectedLanguage,
  onSelectLanguage,
}: DocsHeaderBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languageLabels: Record<LanguageType, string> = {
    node: "Node.js",
    python: "Python",
    java: "Java",
    dotnet: ".NET",
  };

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
        {/* Left: Playwright Brand & Top Navigation Items (Docs, MCP, CLI, API, Node.js v) */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          {/* Playwright Brand Link */}
          <button
            type="button"
            onClick={() => onSelectView("docs")}
            className="flex items-center gap-1.5 shrink-0 font-medium text-ink hover:text-pass transition"
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

            {/* Language dropdown (Node.js v, Python, Java, .NET) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 rounded-md px-2 py-1 font-medium text-ink/80 hover:text-ink hover:bg-card transition cursor-pointer text-xs"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>{languageLabels[selectedLanguage]}</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-1.5 w-32 rounded-lg border border-line bg-paper p-1 shadow-lg z-50 font-sans text-xs">
                  {(Object.keys(languageLabels) as LanguageType[]).map((lang) => {
                    const isSelected = selectedLanguage === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          onSelectLanguage(lang);
                          setDropdownOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left transition ${
                          isSelected
                            ? "bg-pass/15 font-semibold text-pass"
                            : "text-ink hover:bg-card"
                        }`}
                      >
                        <span>{languageLabels[lang]}</span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-pass" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
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

