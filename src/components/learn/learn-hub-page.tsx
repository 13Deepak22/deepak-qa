"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Search,
  X,
} from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import type { ToolLogo as ToolLogoName } from "@/data";

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  toolTag: string;
  tagline: string;
  description: string;
  logo: ToolLogoName;
  docCount: number;
}

export interface InterviewModuleItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  toolTag: string;
  tagline: string;
  description: string;
  qCount: string;
  logo: ToolLogoName;
}

export const GUIDE_TRACKS: LearningTrack[] = [
  {
    id: "playwright",
    slug: "playwright",
    title: "Microsoft Playwright Automation",
    shortTitle: "Playwright",
    toolTag: "Playwright · Web & MCP",
    tagline: "Auto-waits, multi-context browser isolation, trace viewer & MCP AI test agents.",
    description: "Next-gen web automation: zero-flakiness auto-waiting, network mocking, HAR capture, Codegen test generator, Trace Viewer debugging, and API testing capabilities.",
    logo: "playwright",
    docCount: 16,
  },
  {
    id: "postman",
    slug: "postman",
    title: "Postman & REST API Automation",
    shortTitle: "Postman API",
    toolTag: "Postman · REST API",
    tagline: "Dynamic variables, JSON schemas, assertion scripts & Newman headless suites.",
    description: "Automate REST APIs with Postman: pre-request scripts, test assertions, environment scopes, JSON schema validation, Newman headless CLI runners, and mock servers.",
    logo: "postman",
    docCount: 10,
  },
  {
    id: "selenium",
    slug: "selenium",
    title: "Selenium WebDriver & Grid",
    shortTitle: "Selenium 4",
    toolTag: "Selenium 4 · Web Grid",
    tagline: "W3C WebDriver compliance, dynamic locators, explicit waits & Grid scaling.",
    description: "Classic browser automation using modern Selenium 4: W3C WebDriver compliance, dynamic locators, explicit & fluent waits, Actions API, JavaScriptExecutor, and Selenium Grid distributed testing.",
    logo: "selenium",
    docCount: 11,
  },
  {
    id: "appium",
    slug: "appium",
    title: "Appium Mobile Automation",
    shortTitle: "Appium Mobile",
    toolTag: "Appium · iOS & Android",
    tagline: "Native Android & iOS automation with UiAutomator2, XCUITest & touch gestures.",
    description: "Automate native mobile apps: UiAutomator2, XCUITest driver, mobile touch gestures, Appium Inspector, real device testing, and cloud device farm execution.",
    logo: "appium",
    docCount: 11,
  },
  {
    id: "jmeter",
    slug: "jmeter",
    title: "Apache JMeter Performance Testing",
    shortTitle: "JMeter Load Testing",
    toolTag: "JMeter · Concurrency Load",
    tagline: "Virtual user load simulation, Thread Groups, Timers & CLI remote slaves.",
    description: "Simulate thousands of concurrent virtual users: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Timers, Listeners, Response Assertions, and Distributed Remote Slaves.",
    logo: "jmeter",
    docCount: 10,
  },
  {
    id: "java",
    slug: "java",
    title: "Java for QA & Test Automation",
    shortTitle: "Java for Testers",
    toolTag: "Java · SDET & Frameworks",
    tagline: "64 chapters: OOP, 50+ keywords, Collections, Streams & ThreadLocal safety.",
    description: "Start Java from absolute zero: JDK architecture, 50+ keywords, modern switch expressions, Collections (List, Set, Map), exception handling, and ThreadLocal safety.",
    logo: "java",
    docCount: 64,
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript for QA Engineers",
    shortTitle: "TS for Playwright",
    toolTag: "TypeScript · Strongly Typed POM",
    tagline: "Strict typing, typed Page Object Models, generics & Zod schema validation.",
    description: "Start TypeScript from absolute zero: strict typing, strongly typed Page Object Models, generic API clients, utility types (Partial, Pick, Omit), custom fixtures, and Zod schema validation.",
    logo: "typescript",
    docCount: 16,
  },
  {
    id: "javascript",
    slug: "javascript",
    title: "Modern JavaScript for Playwright",
    shortTitle: "JS for Playwright",
    toolTag: "JavaScript · Modern ES6+",
    tagline: "19 Playwright-tailored chapters: ES6+, async/await & fixture destructuring.",
    description: "Start JavaScript from absolute zero: const/let scoping, destructuring fixtures ({ page, request }), async/await event loop, for..of locator iteration, page.evaluate, and network mocking.",
    logo: "javascript",
    docCount: 19,
  },
  {
    id: "automation",
    slug: "automation",
    title: "Test Automation Architecture",
    shortTitle: "Architecture & CI/CD",
    toolTag: "DevOps · CI/CD & Docker",
    tagline: "Production test architecture: POM, Docker grids & GitHub Actions CI/CD.",
    description: "Design production-grade test automation architecture: Page Object Model (POM), data-driven testing, GitHub Actions CI/CD pipelines, Docker containerized grids, and the test automation pyramid.",
    logo: "docker",
    docCount: 12,
  },
  {
    id: "manual",
    slug: "manual",
    title: "Manual Software Testing & QA",
    shortTitle: "Manual QA",
    toolTag: "Manual QA · STLC & ISTQB",
    tagline: "31 chapters: 7 ISTQB principles, SDLC, STLC, BVA, ECP & Defect triage.",
    description: "Start from absolute zero: 7 ISTQB principles, SDLC models, STLC 6 phases, BVA & ECP, decision tables, state machines, IEEE 829 test plans, defect lifecycle, and FinTech payment QA.",
    logo: "manual",
    docCount: 31,
  },
];

export const COURSE_TRACKS = GUIDE_TRACKS;
export const LEARNING_TRACKS = GUIDE_TRACKS;

export const INTERVIEW_MODULES: InterviewModuleItem[] = [
  {
    id: "interview-playwright-mcp",
    slug: "interview/interview-playwright-mcp",
    title: "Playwright + MCP Automation",
    shortTitle: "Playwright + MCP",
    toolTag: "Playwright · MCP Protocol",
    tagline: "37 questions: MCP server architecture, AI test generation & self-healing QA.",
    description: "Deep dive into Microsoft Playwright and Model Context Protocol (MCP) testing: CDP engine, live locators, Planner/Generator/Healer agents, MCP server tools, and CI/CD governance.",
    qCount: "37 Q&As",
    logo: "playwright",
  },
  {
    id: "interview-api-postman",
    slug: "interview/interview-api-postman",
    title: "API Testing with Postman",
    shortTitle: "Postman API",
    toolTag: "Postman · REST & Newman",
    tagline: "107+ questions: REST architecture, HTTP methods, scripts & Newman CLI.",
    description: "Complete API testing interview questions: REST architecture, idempotency, pre-request scripts, test assertions, Newman headless CLI suites, environment scopes, and mock servers.",
    qCount: "107+ Q&As",
    logo: "postman",
  },
  {
    id: "interview-selenium-java",
    slug: "interview/interview-selenium-java",
    title: "Selenium with Java",
    shortTitle: "Selenium Java",
    toolTag: "Selenium · WebDriver & POM",
    tagline: "153 questions: WebDriver 4, dynamic locators, waits, TestNG & POM.",
    description: "Complete Selenium with Java interview questions: Selenium 3 vs 4, StaleElementReferenceException handling, FluentWait vs WebDriverWait, JavaScriptExecutor, Page Object Model, and TestNG framework.",
    qCount: "153 Q&As",
    logo: "selenium",
  },
  {
    id: "interview-core-java",
    slug: "interview/interview-core-java",
    title: "Core Java for SDET / QA",
    shortTitle: "Core Java",
    toolTag: "Java · SDET Fundamentals",
    tagline: "55+ questions: OOP concepts, Collections, Exceptions & ThreadLocal.",
    description: "Essential Java interview questions for QA: OOP principles, method overriding vs overloading, Collections (List, Set, Map), exceptions hierarchy, garbage collection, and ThreadLocal safety.",
    qCount: "55+ Q&As",
    logo: "java",
  },
  {
    id: "interview-java-coding-programs",
    slug: "interview/interview-java-coding-programs",
    title: "Top 20 Java Programs",
    shortTitle: "Java Programs",
    toolTag: "Java · Coding Solutions",
    tagline: "Top 20 coding interview programs with complete runnable Java code.",
    description: "String reverse, palindrome check, Fibonacci sequence, prime numbers, armstrong number, remove duplicates, count characters, and array sorting with full runnable Java solutions.",
    qCount: "20 Programs",
    logo: "java",
  },
  {
    id: "interview-git-cicd-jenkins",
    slug: "interview/interview-git-cicd-jenkins",
    title: "CI/CD, Jenkins & Docker",
    shortTitle: "DevOps QA",
    toolTag: "Docker · Pipelines & Linux",
    tagline: "106 questions: Jenkinsfile, webhook triggers, Docker & Linux test runners.",
    description: "DevOps & CI/CD interview questions for QA: Jenkins declarative pipelines, webhook triggers, Docker test containers, Linux commands, and automated CI test execution.",
    qCount: "106 Q&As",
    logo: "docker",
  },
  {
    id: "interview-git",
    slug: "interview/interview-git",
    title: "Git & Version Control",
    shortTitle: "Git & GitHub",
    toolTag: "Git · Branching & Remotes",
    tagline: "25 questions: Repositories, branching, remotes, git revert & reset.",
    description: "Master essential Git commands and workflows for QA: git init, staging, commits, branch management, merge, remote GitHub workflow, git revert, reset, and commit --amend.",
    qCount: "25 Q&As",
    logo: "git",
  },
  {
    id: "interview-sql-database",
    slug: "interview/interview-sql-database",
    title: "SQL & Database Testing",
    shortTitle: "SQL & DB",
    toolTag: "SQL · Data Verification",
    tagline: "52+ questions: SELECT queries, WHERE, GROUP BY, joins & ACID rules.",
    description: "Core SQL interview questions for QA engineers: find second highest salary, eliminate duplicate rows, INNER vs LEFT joins, aggregations, ACID transactions, and database testing for QA.",
    qCount: "52+ Q&As",
    logo: "sql",
  },
  {
    id: "interview-manual-testing",
    slug: "interview/interview-manual-testing",
    title: "Manual Testing Q&A",
    shortTitle: "Manual QA",
    toolTag: "Manual QA · ISTQB & BVA",
    tagline: "130+ questions: SDLC, STLC, Defect Life Cycle, ISTQB principles & BVA.",
    description: "Sequence-wise interview questions covering testing fundamentals, 7 ISTQB principles, verification vs validation, severity vs priority, boundary value analysis, decision tables, defect triage, and root cause analysis.",
    qCount: "130+ Q&As",
    logo: "manual",
  },
  {
    id: "interview-100-real-time-scenarios",
    slug: "interview/interview-100-real-time-scenarios",
    title: "100 Real-Time QA Scenarios",
    shortTitle: "100 Scenarios",
    toolTag: "Scenarios · Real-World QA",
    tagline: "105 scenario-based questions: e-commerce, payment timeouts & hotfixes.",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    qCount: "105 Scenarios",
    logo: "interview",
  },
];

type CategoryTab = "guides" | "interviews";

export function LearnHubPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("guides");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter guides by search query
  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return GUIDE_TRACKS;
    const q = searchQuery.toLowerCase();
    return GUIDE_TRACKS.filter(
      (guide) =>
        guide.title.toLowerCase().includes(q) ||
        guide.tagline.toLowerCase().includes(q) ||
        guide.toolTag.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filter interviews by search query
  const filteredInterviews = useMemo(() => {
    if (!searchQuery.trim()) return INTERVIEW_MODULES;
    const q = searchQuery.toLowerCase();
    return INTERVIEW_MODULES.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.toolTag.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const isGuides = activeCategory === "guides";
  const currentCount = isGuides ? filteredGuides.length : filteredInterviews.length;
  const totalCount = isGuides ? GUIDE_TRACKS.length : INTERVIEW_MODULES.length;

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20">
        
        {/* Minimal Editorial Header */}
        <div className="enter enter-1">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">06</span> / Engineering Knowledge Base
          </p>
          <div className="mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-normal">
                Learn with me.
              </h1>
              <p className="mt-2 text-sm sm:text-base text-ink-soft max-w-2xl leading-relaxed">
                Production-grade automation architectures, engineering patterns, and real-world interview Q&amp;As.
              </p>
            </div>

            {/* Quick Minimal Stats Indicator */}
            <div className="font-mono text-xs text-muted shrink-0 pb-1 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
              <span>10 Engineering Guides · 10 Interview Modules</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TWO CATEGORIES ONLY: 1. GUIDES  |  2. INTERVIEW Q&A       */}
        {/* ========================================================= */}
        <div className="enter enter-2 mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Two Category Tabs */}
          <div className="inline-flex p-1 rounded-xl border border-line bg-card shadow-2xs">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("guides");
                setSearchQuery("");
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs transition cursor-pointer ${
                activeCategory === "guides"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-paper"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>1. Engineering Guides</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeCategory === "guides" ? "bg-paper/25 text-paper" : "bg-paper border border-line text-muted"}`}>
                10
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("interviews");
                setSearchQuery("");
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs transition cursor-pointer ${
                activeCategory === "interviews"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-paper"
              }`}
            >
              <HelpCircle className="h-4 w-4" />
              <span>2. Interview Q&amp;A</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeCategory === "interviews" ? "bg-paper/25 text-paper" : "bg-paper border border-line text-muted"}`}>
                10
              </span>
            </button>
          </div>

          {/* Quick Search Within Active Category */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isGuides ? "Search guides (Playwright, Postman...)" : "Search interview questions..."}
              className="w-full pl-9 pr-7 py-2 rounded-lg border border-line bg-card font-mono text-xs text-ink placeholder:text-muted/70 focus:outline-none focus:border-pass focus:ring-1 focus:ring-pass/40 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Category Header & Result Counter */}
        <div className="mt-6 flex items-center justify-between pb-2.5 border-b border-line">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="font-semibold text-pass uppercase tracking-wider">
              {isGuides ? "Engineering Guides" : "Interview Q&A Modules"}
            </span>
            <span className="text-muted">
              / Showing {currentCount} of {totalCount} {isGuides ? "Guides" : "Modules"}
            </span>
          </div>

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="font-mono text-xs text-pass hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Empty State */}
        {currentCount === 0 && (
          <div className="mt-12 text-center py-12 rounded-lg border border-line bg-card">
            <p className="font-serif text-lg text-ink">No {isGuides ? "guides" : "modules"} match your search</p>
            <p className="font-mono text-xs text-muted mt-1">Try another keyword like &quot;Playwright&quot;, &quot;Selenium&quot;, or &quot;Java&quot;</p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-3 py-1.5 rounded bg-pass text-paper font-mono text-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* CATEGORY 1: ENGINEERING GUIDES GRID                       */}
        {/* ========================================================= */}
        {isGuides && filteredGuides.length > 0 && (
          <div className="enter enter-2 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {filteredGuides.map((track) => (
              <Link
                key={track.id}
                href={`/learn/${track.slug}`}
                data-cursor={`Read ${track.shortTitle} guide (${track.docCount} chapters)`}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-4 shadow-2xs hover:border-pass/70 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Tool Brand Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-lg border border-line bg-paper flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-pass/50 group-hover:shadow-2xs transition-all">
                      <ToolLogo name={track.logo} className="h-full w-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10.5px] font-semibold text-pass tracking-wide uppercase truncate block">
                        {track.toolTag}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        {track.docCount} Chapters
                      </span>
                    </div>
                  </div>

                  {/* Guide Title & Tagline */}
                  <h3 className="mt-3 font-serif text-[16px] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                    {track.title}
                  </h3>

                  <p className="mt-1.5 font-sans text-xs text-ink-soft leading-relaxed line-clamp-2">
                    {track.tagline}
                  </p>
                </div>

                {/* Minimal Footer */}
                <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted text-[11px]">
                    Complete Guide
                  </span>
                  <span className="inline-flex items-center gap-1 text-pass font-medium group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* CATEGORY 2: INTERVIEW Q&A MODULES GRID                     */}
        {/* ========================================================= */}
        {!isGuides && filteredInterviews.length > 0 && (
          <div className="enter enter-2 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {filteredInterviews.map((item) => (
              <Link
                key={item.id}
                href={`/learn/${item.slug}`}
                data-cursor={`Study ${item.shortTitle} interview questions (${item.qCount})`}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-4 shadow-2xs hover:border-pass/70 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Tool Brand Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-lg border border-line bg-paper flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-pass/50 group-hover:shadow-2xs transition-all">
                      <ToolLogo name={item.logo} className="h-full w-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10.5px] font-semibold text-pass tracking-wide uppercase truncate block">
                        {item.toolTag}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        {item.qCount}
                      </span>
                    </div>
                  </div>

                  {/* Interview Title & Tagline */}
                  <h3 className="mt-3 font-serif text-[16px] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 font-sans text-xs text-ink-soft leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* Minimal Footer */}
                <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted text-[11px]">
                    Sequential Q&amp;As
                  </span>
                  <span className="inline-flex items-center gap-1 text-pass font-medium group-hover:translate-x-1 transition-transform">
                    <span>View Q&amp;As</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
