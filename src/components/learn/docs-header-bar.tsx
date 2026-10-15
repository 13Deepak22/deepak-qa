"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ToolLogo as ToolLogoName } from "@/data";

export type LearnViewType =
  | "docs"
  | "mcp"
  | "cli"
  | "api"
  | "selenium"
  | "appium"
  | "postman"
  | "jmeter"
  | "manual"
  | "automation"
  | "java"
  | "javascript"
  | "typescript"
  | "interview";

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
  const isPlaywright = ["docs", "mcp", "cli", "api"].includes(activeView);
  const isSelenium = activeView === "selenium";
  const isAppium = activeView === "appium";
  const isPostman = activeView === "postman";
  const isJMeter = activeView === "jmeter";
  const isManual = activeView === "manual";
  const isAutomation = activeView === "automation";
  const isJava = activeView === "java";
  const isJavaScript = activeView === "javascript";
  const isTypeScript = activeView === "typescript";
  const isInterview = activeView === "interview";

  const playwrightNavItems: { id: LearnViewType; label: string }[] = [
    { id: "docs", label: "Docs" },
    { id: "mcp", label: "MCP" },
    { id: "cli", label: "CLI" },
    { id: "api", label: "API" },
  ];

  return (
    <div className="sticky top-20 z-30 border-b border-line/60 bg-paper/95 backdrop-blur-md">
      <div className="w-full flex items-center justify-between py-2 px-4 sm:px-6 lg:px-[88px] 2xl:px-[96px] min-h-[38px]">
        {/* Left: Quick return to Learning Hub */}
        <Link
          href="/learn"
          className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-pass transition cursor-pointer shrink-0"
          title="Return to Guides Hub"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-pass" />
          <span className="hidden xs:inline">All Guides</span>
        </Link>

        {/* Center: Track Context / Sub-nav */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 text-xs justify-center mx-auto">
          <nav className="flex items-center gap-1 sm:gap-1.5 font-sans text-xs">
            {isPlaywright ? (
              <>
                {playwrightNavItems.map((item) => {
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelectView(item.id)}
                      className={`rounded px-2.5 py-0.5 text-[11px] font-medium transition cursor-pointer ${
                        isActive
                          ? "text-pass font-semibold bg-pass/10 border border-pass/20"
                          : "text-ink/80 hover:text-ink hover:bg-card"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <span className="text-line/60 mx-1">|</span>

                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Node.js
                </span>
              </>
            ) : isSelenium ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Selenium Documentation
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Java • Python • JS • C# • Selenium Grid
                </span>
              </>
            ) : isAppium ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Appium Mobile Guide
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Android • iOS • W3C Mobile • XCUITest • UiAutomator2
                </span>
              </>
            ) : isPostman ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Postman API Guide
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  REST • Collections • Newman • Automated Assertions
                </span>
              </>
            ) : isJMeter ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  JMeter Load Guide
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Java • Thread Groups • Samplers • Performance &amp; CLI
                </span>
              </>
            ) : isManual ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Manual Testing Track
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  SDLC • STLC • BVA • ECP • Bug Life Cycle &amp; RCA
                </span>
              </>
            ) : isAutomation ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Automation Architecture
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  POM • Screenplay • BDD • Test Pyramids • CI/CD
                </span>
              </>
            ) : isJava ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  Java for Testers
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Core OOP • Collections • Streams • TestNG Providers
                </span>
              </>
            ) : isJavaScript ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  JavaScript for Testers
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  ES6+ • Promises • Async/Await • Node.js &amp; npm
                </span>
              </>
            ) : isTypeScript ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  TypeScript for Testers
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Static Types • Interfaces • Typed POM • Generics
                </span>
              </>
            ) : isInterview ? (
              <>
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold text-pass bg-pass/10 border border-pass/20">
                  QA Interview Master Q&amp;A
                </span>
                <span className="text-line/60 mx-1">|</span>
                <span className="inline-flex items-center gap-1.5 rounded border border-line/60 bg-paper-deep/60 px-2 py-0.5 text-[10.5px] font-mono font-medium text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  Manual • Selenium • Postman • SQL • Java Programs • CI/CD • 100 Scenarios
                </span>
              </>
            ) : null}
          </nav>
        </div>

        {/* Right spacer for symmetrical centering */}
        <div className="w-16 hidden sm:block shrink-0" />
      </div>
    </div>
  );
}
