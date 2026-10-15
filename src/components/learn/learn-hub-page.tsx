"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import type { ToolLogo as ToolLogoName } from "@/data";

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  category: "fundamentals" | "automation" | "api-perf" | "languages";
  categoryLabel: string;
  logo: ToolLogoName;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  docCount: number;
}

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: "manual",
    slug: "manual",
    title: "Manual Software Testing & QA",
    shortTitle: "Manual Testing",
    tagline: "Zero-to-Hero master curriculum: 29 chapters from basic to advance",
    description: "Start from absolute zero: 7 ISTQB principles, SDLC models, STLC 6 phases, BVA & ECP, decision tables, state machines, IEEE 829 test plans, defect lifecycle, and FinTech payment QA.",
    category: "fundamentals",
    categoryLabel: "Testing Fundamentals",
    logo: "manual",
    level: "All Levels",
    docCount: 29,
  },
  {
    id: "automation",
    slug: "automation",
    title: "Test Automation Architecture",
    shortTitle: "Automation Testing",
    tagline: "Scalable enterprise test frameworks & CI/CD delivery",
    description: "Design production-grade test automation architecture: Page Object Model (POM), data-driven testing, GitHub Actions CI/CD pipelines, Docker containerized grids, and the test automation pyramid.",
    category: "automation",
    categoryLabel: "Automation Architecture",
    logo: "automation",
    level: "Intermediate",
    docCount: 12,
  },
  {
    id: "postman",
    slug: "postman",
    title: "Postman & REST API Automation",
    shortTitle: "Postman API",
    tagline: "Automate HTTP requests, environments & Newman CLI suites",
    description: "Automate REST APIs with Postman: dynamic variables, environment scopes, pre-request & test assertion scripts, JSON schema validation, Newman headless CLI runners, and mock servers.",
    category: "api-perf",
    categoryLabel: "API & Performance",
    logo: "postman",
    level: "Beginner",
    docCount: 10,
  },
  {
    id: "jmeter",
    slug: "jmeter",
    title: "Apache JMeter Performance Testing",
    shortTitle: "JMeter Load Testing",
    tagline: "High-scale load, stress, spike & soak performance engineering",
    description: "Simulate thousands of concurrent virtual users: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Timers, Listeners, Response Assertions, and Distributed Remote Slaves.",
    category: "api-perf",
    categoryLabel: "API & Performance",
    logo: "jmeter",
    level: "Advanced",
    docCount: 10,
  },
  {
    id: "selenium",
    slug: "selenium",
    title: "Selenium WebDriver & Grid",
    shortTitle: "Selenium 4",
    tagline: "The battle-tested enterprise browser automation standard",
    description: "Classic browser automation using modern Selenium 4: W3C WebDriver compliance, dynamic locators, explicit & fluent waits, Actions API, JavaScriptExecutor, and Selenium Grid distributed testing.",
    category: "automation",
    categoryLabel: "Web & Mobile Automation",
    logo: "selenium",
    level: "Intermediate",
    docCount: 11,
  },
  {
    id: "appium",
    slug: "appium",
    title: "Appium Mobile Automation",
    shortTitle: "Appium (Android & iOS)",
    tagline: "End-to-end native, hybrid & mobile web automation",
    description: "Automate native Android and iOS mobile applications: UiAutomator2, XCUITest driver, mobile touch gestures, Appium Inspector, real device testing, and cloud device farm execution.",
    category: "automation",
    categoryLabel: "Web & Mobile Automation",
    logo: "appium",
    level: "Advanced",
    docCount: 11,
  },
  {
    id: "playwright",
    slug: "playwright",
    title: "Microsoft Playwright Automation",
    shortTitle: "Playwright",
    tagline: "Fast, resilient, modern web testing with zero flakiness",
    description: "Next-generation web automation: auto-waiting, multi-page browser contexts, network mocking & HAR capture, Codegen test generator, Trace Viewer debugging, and API testing capabilities.",
    category: "automation",
    categoryLabel: "Web & Mobile Automation",
    logo: "playwright",
    level: "Intermediate",
    docCount: 16,
  },
  {
    id: "java",
    slug: "java",
    title: "Java for QA & Test Automation",
    shortTitle: "Java for Testers",
    tagline: "Robust OOP, 50+ keywords, Streams & ThreadLocal concurrency",
    description: "Start Java from absolute zero: JDK architecture, 50+ keywords, modern switch expressions, Collections (List, Set, Map), exception handling, and ThreadLocal safety.",
    category: "languages",
    categoryLabel: "Programming Languages",
    logo: "java",
    level: "All Levels",
    docCount: 64,
  },
  {
    id: "javascript",
    slug: "javascript",
    title: "Modern JavaScript for QA",
    shortTitle: "JavaScript for QA",
    tagline: "ES6+, Async/Await, Playwright Locators & Event Loop",
    description: "Start JavaScript from absolute zero: let vs const scoping, arrow functions, async/await deep dive, Event Loop microtasks, Playwright locator loops (for..of), and Web-first assertions.",
    category: "languages",
    categoryLabel: "Programming Languages",
    logo: "javascript",
    level: "All Levels",
    docCount: 15,
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript for QA Engineers",
    shortTitle: "TypeScript for QE",
    tagline: "Compile-time safety, strongly typed POM & custom fixtures",
    description: "Start TypeScript from absolute zero: any vs unknown vs never, discriminated unions with switch statements, generic REST API clients, utility types (Partial, Pick, Omit), and Playwright test.extend fixtures.",
    category: "languages",
    categoryLabel: "Programming Languages",
    logo: "typescript",
    level: "Intermediate",
    docCount: 13,
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Tracks", count: 10 },
  { id: "fundamentals", label: "Fundamentals", count: 1 },
  { id: "automation", label: "Automation", count: 4 },
  { id: "api-perf", label: "API & Perf", count: 2 },
  { id: "languages", label: "Languages", count: 3 },
] as const;

export function LearnHubPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTracks = useMemo(() => {
    if (activeCategory === "all") return LEARNING_TRACKS;
    return LEARNING_TRACKS.filter((track) => track.category === activeCategory);
  }, [activeCategory]);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="enter enter-1 pb-8 sm:pb-10 border-b border-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">06</span> / Knowledge Base &amp; Learning Hub
              </p>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-medium">
                Choose what you want to learn.
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                Production-grade test engineering curriculums, comprehensive syntax directories, architecture blueprints, and real-world testing lifecycles by Deepak Gupta.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 font-mono text-xs">
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Tracks</span>
                <span className="text-lg font-bold text-ink">10</span>
              </div>
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Chapters</span>
                <span className="text-lg font-bold text-pass">230+</span>
              </div>
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Access</span>
                <span className="text-lg font-bold text-ink">Free</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-150 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-ink text-paper font-semibold shadow-2xs"
                      : "border border-line bg-card text-muted hover:text-ink hover:border-pass/40"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? "bg-paper/20 text-paper" : "bg-paper text-muted"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Attractive Responsive Cards Grid */}
        <div className="enter enter-2 mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredTracks.map((track) => {
              const originalIndex = LEARNING_TRACKS.findIndex((t) => t.id === track.id) + 1;
              return (
                <Link
                  key={track.id}
                  href={`/learn/${track.slug}`}
                  className="group relative flex flex-col justify-between rounded-xl border border-line bg-card p-5 sm:p-6 shadow-xs hover:border-pass/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pass/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top: Icon + Number & Level */}
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="h-12 w-12 rounded-xl border border-line bg-paper/90 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:border-pass/40 group-hover:bg-pass/5 transition-all duration-200 shadow-2xs">
                        <ToolLogo name={track.logo} className="h-full w-full object-contain" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-line bg-paper text-muted font-medium">
                          {track.level}
                        </span>
                        <span className="font-mono text-xs font-semibold text-pass/80 group-hover:text-pass transition-colors">
                          #{String(originalIndex).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted block">
                      {track.categoryLabel}
                    </span>

                    {/* Title */}
                    <h2 className="mt-1 font-serif text-xl sm:text-[1.35rem] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                      {track.title}
                    </h2>

                    {/* Tagline */}
                    <p className="mt-1 font-mono text-xs text-muted/90 line-clamp-1">
                      {track.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                      {track.description}
                    </p>
                  </div>

                  {/* Bottom Bar: Docs count + CTA */}
                  <div className="mt-6 pt-4 border-t border-line/70 flex items-center justify-between text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 text-muted">
                      <BookOpen className="h-3.5 w-3.5 text-pass shrink-0" />
                      <span className="font-semibold text-ink">{track.docCount}</span> Chapters
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-pass group-hover:translate-x-0.5 transition-transform">
                      <span>Explore Track</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
