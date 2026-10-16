"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Search,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import type { ToolLogo as ToolLogoName } from "@/data";

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  toolTag: string;
  toolKey: string;
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
  toolKey: string;
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
    toolKey: "playwright",
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
    toolKey: "postman",
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
    toolKey: "selenium",
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
    toolKey: "appium",
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
    toolKey: "jmeter",
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
    toolKey: "java",
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
    toolKey: "typescript",
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
    toolKey: "typescript",
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
    toolKey: "devops",
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
    toolKey: "manual",
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
    toolKey: "playwright",
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
    toolKey: "postman",
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
    toolKey: "selenium",
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
    toolKey: "java",
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
    toolKey: "java",
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
    toolKey: "devops",
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
    toolKey: "git",
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
    toolKey: "sql",
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
    toolKey: "manual",
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
    toolKey: "manual",
    tagline: "105 scenario-based questions: e-commerce, payment timeouts & hotfixes.",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    qCount: "105 Scenarios",
    logo: "interview",
  },
];

interface ToolDefinition {
  id: string;
  name: string;
  logo: ToolLogoName;
  count: number;
}

const FEATURED_TOOLS: ToolDefinition[] = [
  { id: "all", name: "All Tools", logo: "automation", count: 20 },
  { id: "playwright", name: "Playwright", logo: "playwright", count: 2 },
  { id: "postman", name: "Postman", logo: "postman", count: 2 },
  { id: "selenium", name: "Selenium", logo: "selenium", count: 2 },
  { id: "appium", name: "Appium", logo: "appium", count: 1 },
  { id: "jmeter", name: "JMeter", logo: "jmeter", count: 1 },
  { id: "java", name: "Java", logo: "java", count: 3 },
  { id: "typescript", name: "TypeScript", logo: "typescript", count: 2 },
  { id: "devops", name: "Docker & CI/CD", logo: "docker", count: 2 },
  { id: "git", name: "Git", logo: "git", count: 1 },
  { id: "sql", name: "SQL", logo: "sql", count: 1 },
  { id: "manual", name: "Manual QA", logo: "manual", count: 3 },
];

type SectionFilter = "all" | "guides" | "interviews";

export function LearnHubPage() {
  const [selectedTool, setSelectedTool] = useState<string>("all");
  const [activeSection, setActiveSection] = useState<SectionFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter guides by tool and search query
  const filteredGuides = useMemo(() => {
    return GUIDE_TRACKS.filter((guide) => {
      const matchesTool = selectedTool === "all" || guide.toolKey === selectedTool;
      if (!matchesTool) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        guide.title.toLowerCase().includes(q) ||
        guide.tagline.toLowerCase().includes(q) ||
        guide.toolTag.toLowerCase().includes(q)
      );
    });
  }, [selectedTool, searchQuery]);

  // Filter interviews by tool and search query
  const filteredInterviews = useMemo(() => {
    return INTERVIEW_MODULES.filter((item) => {
      const matchesTool = selectedTool === "all" || item.toolKey === selectedTool;
      if (!matchesTool) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.toolTag.toLowerCase().includes(q)
      );
    });
  }, [selectedTool, searchQuery]);

  const totalResults =
    (activeSection !== "interviews" ? filteredGuides.length : 0) +
    (activeSection !== "guides" ? filteredInterviews.length : 0);

  const activeToolDef = FEATURED_TOOLS.find((t) => t.id === selectedTool);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20">
        
        {/* Minimal Editorial Header */}
        <div className="enter enter-1">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">06</span> / Engineering Guides &amp; Knowledge Base
          </p>
          <div className="mt-2.5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-normal">
                Learn with me.
              </h1>
              <p className="mt-2 text-sm sm:text-base text-ink-soft max-w-2xl leading-relaxed">
                Production-grade automation architectures, frameworks, and real-world interview Q&amp;As across the modern QA stack.
              </p>
            </div>

            {/* Quick Count Badge */}
            <div className="font-mono text-xs text-muted shrink-0 pb-1 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
              <span>10 Guides · 10 Interview Modules · 860+ Q&amp;As</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HIGHLIGHTED TOOLS STRIP                                    */}
        {/* ========================================================= */}
        <div className="enter enter-2 mt-8 pt-6 border-t border-line">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-pass" />
              <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                Highlight by Tool &amp; Tech Stack
              </span>
            </div>
            {selectedTool !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedTool("all")}
                className="font-mono text-xs text-pass hover:underline cursor-pointer"
                data-cursor="Show all tools & frameworks"
              >
                Reset tool filter
              </button>
            )}
          </div>

          {/* Interactive Tool Badges Grid/Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FEATURED_TOOLS.map((tool) => {
              const isActive = selectedTool === tool.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setSelectedTool(tool.id)}
                  data-cursor={`Filter by ${tool.name} (${tool.count} modules)`}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs transition-all duration-150 cursor-pointer shrink-0 border ${
                    isActive
                      ? "bg-ink text-paper border-ink font-semibold shadow-xs scale-[1.02]"
                      : "bg-card border-line text-ink-soft hover:text-ink hover:border-pass/60 hover:bg-paper"
                  }`}
                >
                  <div className={`h-4 w-4 shrink-0 flex items-center justify-center ${isActive ? "brightness-125" : ""}`}>
                    {tool.logo && <ToolLogo name={tool.logo} className="h-full w-full object-contain" />}
                  </div>
                  <span>{tool.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      isActive ? "bg-paper/20 text-paper" : "bg-paper border border-line text-muted"
                    }`}
                  >
                    {tool.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MINIMAL CONTROLS: VIEW TOGGLE & SEARCH                     */}
        {/* ========================================================= */}
        <div className="enter enter-2 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-line/60">
          
          {/* View Modes */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveSection("all")}
              data-cursor="View all guides and interview questions"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs cursor-pointer transition ${
                activeSection === "all"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-card"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>All</span>
              <span className="text-[10px] opacity-80">({filteredGuides.length + filteredInterviews.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("guides")}
              data-cursor="View engineering guides only"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs cursor-pointer transition ${
                activeSection === "guides"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-card"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Guides</span>
              <span className="text-[10px] opacity-80">({filteredGuides.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("interviews")}
              data-cursor="View interview Q&A modules only"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs cursor-pointer transition ${
                activeSection === "interviews"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-card"
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Interview Q&amp;A</span>
              <span className="text-[10px] opacity-80">({filteredInterviews.length})</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools & topics..."
              data-cursor="Search across all QA guides & interview questions"
              className="w-full pl-8 pr-7 py-1.5 rounded-md border border-line bg-card font-mono text-xs text-ink placeholder:text-muted/70 focus:outline-none focus:border-pass focus:ring-1 focus:ring-pass/40 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                data-cursor="Clear search query"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-ink cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty state if search yields 0 */}
        {totalResults === 0 && (
          <div className="mt-12 text-center py-12 rounded-lg border border-line bg-card">
            <p className="font-serif text-lg text-ink">No modules found matching your filter</p>
            <p className="font-mono text-xs text-muted mt-1">Try clearing your search query or selecting &quot;All Tools&quot;</p>
            <button
              type="button"
              onClick={() => {
                setSelectedTool("all");
                setSearchQuery("");
                setActiveSection("all");
              }}
              data-cursor="Reset all active filters"
              className="mt-4 px-3 py-1.5 rounded bg-pass text-paper font-mono text-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SECTION 1: ENGINEERING GUIDES                             */}
        {/* ========================================================= */}
        {(activeSection === "all" || activeSection === "guides") && filteredGuides.length > 0 && (
          <section className="enter enter-2 mt-8">
            <div className="flex items-center justify-between pb-2.5 border-b border-line">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-pass" />
                <h2 className="font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                  Engineering Guides
                </h2>
                <span className="font-mono text-xs text-muted">
                  / {filteredGuides.length} {filteredGuides.length === 1 ? "Guide" : "Guides"}
                </span>
              </div>
              {selectedTool !== "all" && activeToolDef && (
                <span className="font-mono text-[11px] text-muted">
                  Filtered by <strong className="text-ink">{activeToolDef.name}</strong>
                </span>
              )}
            </div>

            {/* Responsive Minimal Guides Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {filteredGuides.map((track) => (
                <Link
                  key={track.id}
                  href={`/learn/${track.slug}`}
                  data-cursor={`Read ${track.shortTitle} guide (${track.docCount} chapters)`}
                  className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-4 shadow-2xs hover:border-pass/70 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div>
                    {/* Prominent Tool Header */}
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

                  {/* Clean Action Footer */}
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
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 2: INTERVIEW Q&A MODULES                           */}
        {/* ========================================================= */}
        {(activeSection === "all" || activeSection === "interviews") && filteredInterviews.length > 0 && (
          <section className={`enter enter-3 ${activeSection === "all" ? "mt-10 sm:mt-12 pt-8 border-t border-line" : "mt-8"}`}>
            <div className="flex items-center justify-between pb-2.5 border-b border-line">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-pass" />
                <h2 className="font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                  Interview Q&amp;A Modules
                </h2>
                <span className="font-mono text-xs text-muted">
                  / {filteredInterviews.length} {filteredInterviews.length === 1 ? "Module" : "Modules"}
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted hidden sm:inline">
                Sequenced from Master QA Interview repository
              </span>
            </div>

            {/* Responsive Minimal Interviews Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {filteredInterviews.map((item) => (
                <Link
                  key={item.id}
                  href={`/learn/${item.slug}`}
                  data-cursor={`Study ${item.shortTitle} interview questions (${item.qCount})`}
                  className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-4 shadow-2xs hover:border-pass/70 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div>
                    {/* Prominent Tool Header */}
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

                  {/* Clean Action Footer */}
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
          </section>
        )}

      </div>
    </main>
  );
}
