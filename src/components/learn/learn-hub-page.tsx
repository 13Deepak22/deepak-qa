"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Layers,
  GraduationCap,
  HelpCircle,
  FileText,
} from "lucide-react";
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

export interface InterviewModuleItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  qCount: string;
  categoryLabel: string;
  logo: ToolLogoName;
  level: "All Levels" | "Intermediate" | "Advanced" | "DevOps QA" | "Practical" | "Real-World";
  highlights: string[];
}

export const GUIDE_TRACKS: LearningTrack[] = [
  {
    id: "manual",
    slug: "manual",
    title: "Manual Software Testing & QA",
    shortTitle: "Manual Testing",
    tagline: "31 chapters from basic to advance: SDLC, STLC, BVA, ECP & Defect triage.",
    description: "Start from absolute zero: 7 ISTQB principles, SDLC models, STLC 6 phases, BVA & ECP, decision tables, state machines, IEEE 829 test plans, defect lifecycle, and FinTech payment QA.",
    category: "fundamentals",
    categoryLabel: "Fundamentals",
    logo: "manual",
    level: "All Levels",
    docCount: 31,
  },
  {
    id: "automation",
    slug: "automation",
    title: "Test Automation Architecture",
    shortTitle: "Automation Testing",
    tagline: "Production test architecture: POM, Docker grids, and CI/CD pipelines.",
    description: "Design production-grade test automation architecture: Page Object Model (POM), data-driven testing, GitHub Actions CI/CD pipelines, Docker containerized grids, and the test automation pyramid.",
    category: "automation",
    categoryLabel: "Architecture",
    logo: "automation",
    level: "Intermediate",
    docCount: 12,
  },
  {
    id: "postman",
    slug: "postman",
    title: "Postman & REST API Automation",
    shortTitle: "Postman API",
    tagline: "HTTP requests, environment scopes, assertions & Newman headless suites.",
    description: "Automate REST APIs with Postman: dynamic variables, environment scopes, pre-request & test assertion scripts, JSON schema validation, Newman headless CLI runners, and mock servers.",
    category: "api-perf",
    categoryLabel: "API",
    logo: "postman",
    level: "Beginner",
    docCount: 10,
  },
  {
    id: "jmeter",
    slug: "jmeter",
    title: "Apache JMeter Performance Testing",
    shortTitle: "JMeter Load Testing",
    tagline: "Virtual user load simulation, Thread Groups, Timers & CLI execution.",
    description: "Simulate thousands of concurrent virtual users: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Timers, Listeners, Response Assertions, and Distributed Remote Slaves.",
    category: "api-perf",
    categoryLabel: "Performance",
    logo: "jmeter",
    level: "Advanced",
    docCount: 10,
  },
  {
    id: "selenium",
    slug: "selenium",
    title: "Selenium WebDriver & Grid",
    shortTitle: "Selenium 4",
    tagline: "Modern Selenium 4: W3C compliance, locators, dynamic waits & Grid.",
    description: "Classic browser automation using modern Selenium 4: W3C WebDriver compliance, dynamic locators, explicit & fluent waits, Actions API, JavaScriptExecutor, and Selenium Grid distributed testing.",
    category: "automation",
    categoryLabel: "Web Automation",
    logo: "selenium",
    level: "Intermediate",
    docCount: 11,
  },
  {
    id: "appium",
    slug: "appium",
    title: "Appium Mobile Automation",
    shortTitle: "Appium Mobile",
    tagline: "Native Android & iOS automation with UiAutomator2 and XCUITest.",
    description: "Automate native Android and iOS mobile applications: UiAutomator2, XCUITest driver, mobile touch gestures, Appium Inspector, real device testing, and cloud device farm execution.",
    category: "automation",
    categoryLabel: "Mobile",
    logo: "appium",
    level: "Advanced",
    docCount: 11,
  },
  {
    id: "playwright",
    slug: "playwright",
    title: "Microsoft Playwright Automation",
    shortTitle: "Playwright",
    tagline: "Zero-flakiness web testing: auto-waits, trace viewer, codegen & MCP.",
    description: "Next-generation web automation: auto-waiting, multi-page browser contexts, network mocking & HAR capture, Codegen test generator, Trace Viewer debugging, and API testing capabilities.",
    category: "automation",
    categoryLabel: "Web Automation",
    logo: "playwright",
    level: "Intermediate",
    docCount: 16,
  },
  {
    id: "java",
    slug: "java",
    title: "Java for QA & Test Automation",
    shortTitle: "Java for Testers",
    tagline: "64 chapters: OOP, 50+ keywords, Collections, Streams & ThreadLocal.",
    description: "Start Java from absolute zero: JDK architecture, 50+ keywords, modern switch expressions, Collections (List, Set, Map), exception handling, and ThreadLocal safety.",
    category: "languages",
    categoryLabel: "Java",
    logo: "java",
    level: "All Levels",
    docCount: 64,
  },
  {
    id: "javascript",
    slug: "javascript",
    title: "Modern JavaScript for Playwright",
    shortTitle: "JS for Playwright",
    tagline: "19 Playwright-tailored chapters: ES6+, async/await & page fixtures.",
    description: "Start JavaScript from absolute zero: const/let scoping, destructuring fixtures ({ page, request }), async/await event loop, for..of locator iteration, page.evaluate, and network mocking.",
    category: "languages",
    categoryLabel: "JavaScript",
    logo: "javascript",
    level: "All Levels",
    docCount: 19,
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript for QA Engineers",
    shortTitle: "TS for Playwright",
    tagline: "16 Playwright-tailored chapters: typed POM, generics & Zod schema.",
    description: "Start TypeScript from absolute zero: strict typing, strongly typed Page Object Models, generic API clients, utility types (Partial, Pick, Omit), test.extend custom fixtures, and Zod schema validation.",
    category: "languages",
    categoryLabel: "TypeScript",
    logo: "typescript",
    level: "Intermediate",
    docCount: 16,
  },
];

export const COURSE_TRACKS = GUIDE_TRACKS;
export const LEARNING_TRACKS = GUIDE_TRACKS;

export const INTERVIEW_MODULES: InterviewModuleItem[] = [
  {
    id: "interview-manual-testing",
    slug: "interview/interview-manual-testing",
    title: "Manual Q&A",
    shortTitle: "Manual",
    tagline: "130+ questions: SDLC, STLC, Defect Life Cycle, ISTQB principles & BVA.",
    description: "Sequence-wise interview questions covering testing fundamentals, 7 ISTQB principles, verification vs validation, severity vs priority, boundary value analysis, decision tables, defect triage, and root cause analysis.",
    qCount: "130+ Q&As",
    categoryLabel: "Manual QA",
    logo: "manual",
    level: "All Levels",
    highlights: ["SDLC & STLC", "Defect Cycle", "BVA & ECP", "Agile QA"],
  },
  {
    id: "interview-selenium-java",
    slug: "interview/interview-selenium-java",
    title: "Selenium with Java",
    shortTitle: "Selenium Java",
    tagline: "159 questions: WebDriver, dynamic locators, waits, TestNG & POM.",
    description: "Complete Selenium with Java interview questions: Selenium 3 vs 4, StaleElementReferenceException handling, FluentWait vs WebDriverWait, JavaScriptExecutor, Page Object Model, and TestNG framework.",
    qCount: "153 Q&As",
    categoryLabel: "Web Automation",
    logo: "selenium",
    level: "Intermediate",
    highlights: ["WebDriver Core", "Locators", "Waits", "TestNG & POM"],
  },
  {
    id: "interview-playwright-mcp",
    slug: "interview/interview-playwright-mcp",
    title: "Playwright + MCP Automation",
    shortTitle: "Playwright + MCP",
    tagline: "33 questions: MCP server architecture, AI test generation, self-healing & CI/CD.",
    description: "Deep dive into Microsoft Playwright and Model Context Protocol (MCP) testing: CDP engine, live locators, Planner/Generator/Healer agents, MCP server tools, self-healing mechanics, and enterprise CI/CD governance.",
    qCount: "37 Q&As",
    categoryLabel: "AI Automation",
    logo: "playwright",
    level: "Advanced",
    highlights: ["Engine Architecture", "MCP Protocol", "Self-Healing QA", "CI/CD Governance"],
  },
  {
    id: "interview-api-postman",
    slug: "interview/interview-api-postman",
    title: "API Testing with Postman",
    shortTitle: "Postman API",
    tagline: "143+ questions: REST architecture, HTTP methods, scripts & Newman.",
    description: "Complete API testing interview questions: REST architecture, idempotency, pre-request scripts, test assertions, Newman headless CLI suites, environment scopes, and mock servers.",
    qCount: "107+ Q&As",
    categoryLabel: "API Testing",
    logo: "postman",
    level: "All Levels",
    highlights: ["REST Verbs", "Status Codes", "Newman CLI", "Mocks"],
  },
  {
    id: "interview-sql-database",
    slug: "interview/interview-sql-database",
    title: "SQL & Database Testing",
    shortTitle: "SQL & DB",
    tagline: "52+ questions: SELECT queries, WHERE, GROUP BY, joins & ACID rules.",
    description: "Core SQL interview questions for QA engineers: find second highest salary, eliminate duplicate rows, INNER vs LEFT joins, aggregations, ACID transactions, and database testing for QA.",
    qCount: "52+ Q&As",
    categoryLabel: "Database QA",
    logo: "jira",
    level: "Intermediate",
    highlights: ["Queries & Joins", "Aggregations", "ACID", "Database QA"],
  },
  {
    id: "interview-core-java",
    slug: "interview/interview-core-java",
    title: "Core Java for SDET / QA",
    shortTitle: "Core Java",
    tagline: "52+ questions: OOP concepts, Collections, Exceptions & ThreadLocal.",
    description: "Essential Java interview questions for QA: OOP principles, method overriding vs overloading, Collections (List, Set, Map), exceptions hierarchy, garbage collection, and ThreadLocal safety.",
    qCount: "55+ Q&As",
    categoryLabel: "Core Java",
    logo: "java",
    level: "Intermediate",
    highlights: ["OOP Principles", "Collections", "Exceptions", "ThreadLocal"],
  },
  {
    id: "interview-java-coding-programs",
    slug: "interview/interview-java-coding-programs",
    title: "Top 20 Java Programs",
    shortTitle: "Java Programs",
    tagline: "Top 20 coding interview programs with complete runnable Java code.",
    description: "String reverse, palindrome check, Fibonacci sequence, prime numbers, armstrong number, remove duplicates, count characters, and array sorting with full runnable Java solutions.",
    qCount: "20 Programs",
    categoryLabel: "Coding",
    logo: "java",
    level: "Practical",
    highlights: ["String Reverse", "Palindrome", "Fibonacci", "Sorting"],
  },
  {
    id: "interview-git",
    slug: "interview/interview-git",
    title: "Git & Version Control",
    shortTitle: "Git & GitHub",
    tagline: "25 questions: Repositories, branching, remotes, git revert & reset.",
    description: "Master essential Git commands and workflows for QA: git init, staging, commits, branch management, merge, remote GitHub workflow, git revert, reset, and commit --amend.",
    qCount: "25 Q&As",
    categoryLabel: "Version Control",
    logo: "automation",
    level: "All Levels",
    highlights: ["Git vs GitHub", "Branching & Merging", "Remote Workflow", "Revert & Reset"],
  },
  {
    id: "interview-git-cicd-jenkins",
    slug: "interview/interview-git-cicd-jenkins",
    title: "CI/CD, Jenkins & Docker",
    shortTitle: "DevOps QA",
    tagline: "106 questions: Jenkinsfile, webhook triggers, Docker & Linux.",
    description: "DevOps & CI/CD interview questions for QA: Jenkins declarative pipelines, webhook triggers, Docker test containers, Linux commands, and CI test execution.",
    qCount: "106 Q&As",
    categoryLabel: "DevOps & CI/CD",
    logo: "automation",
    level: "DevOps QA",
    highlights: ["Git Flow", "Merge Conflicts", "Pipelines", "Docker"],
  },
  {
    id: "interview-100-real-time-scenarios",
    slug: "interview/interview-100-real-time-scenarios",
    title: "100 Real-Time Scenarios",
    shortTitle: "100 Scenarios",
    tagline: "106 scenario-based questions: e-commerce, payment timeouts & hotfixes.",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    qCount: "105 Scenarios",
    categoryLabel: "Scenarios",
    logo: "interview",
    level: "Real-World",
    highlights: ["E-Commerce QA", "Payments", "Hotfixes", "Disputes"],
  },
];

const GUIDE_CATEGORY_TABS = [
  { id: "all", label: "All", count: 10 },
  { id: "fundamentals", label: "Fundamentals", count: 1 },
  { id: "automation", label: "Automation", count: 4 },
  { id: "api-perf", label: "API & Perf", count: 2 },
  { id: "languages", label: "Languages", count: 3 },
] as const;

export const COURSE_CATEGORY_TABS = GUIDE_CATEGORY_TABS;

type HubSection = "all" | "guides" | "interviews";

export function LearnHubPage() {
  const [activeSection, setActiveSection] = useState<HubSection>("all");
  const [activeGuideCategory, setActiveGuideCategory] = useState<string>("all");

  const filteredGuides = useMemo(() => {
    if (activeGuideCategory === "all") return GUIDE_TRACKS;
    return GUIDE_TRACKS.filter((track) => track.category === activeGuideCategory);
  }, [activeGuideCategory]);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20">
        {/* Eyebrow & Header - On-theme editorial typography */}
        <div className="enter enter-1">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">06</span> / Knowledge Base &amp; Engineering Guides
          </p>
          <div className="mt-2 grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Choose what you want to learn.
            </h1>
            <p className="leading-relaxed text-ink-soft text-sm sm:text-base">
              10 comprehensive engineering guides and 8 sequential interview Q&amp;A modules from <em>QA Interview.pdf</em>.
            </p>
          </div>
        </div>

        {/* Minimal On-Theme Stats Ribbon */}
        <div className="enter enter-2 mt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-b border-line py-4 sm:py-5">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Guides</span>
            <div className="mt-1 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              10 <span className="font-mono text-xs font-normal text-muted uppercase">Tracks</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Interviews</span>
            <div className="mt-1 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-pass">
              8 <span className="font-mono text-xs font-normal text-muted uppercase">Topics</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Master Q&amp;As</span>
            <div className="mt-1 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              860+ <span className="font-mono text-xs font-normal text-muted uppercase">Verified</span>
            </div>
          </div>
        </div>

        {/* Minimal Segmented Section Switcher */}
        <div className="enter enter-2 mt-6 flex items-center gap-1.5 border-b border-line pb-3 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveSection("all")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition cursor-pointer shrink-0 ${
              activeSection === "all"
                ? "bg-ink text-paper font-semibold shadow-2xs"
                : "text-muted hover:text-ink hover:bg-card"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Resources</span>
            <span className="text-[10px] opacity-75">(18)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSection("guides")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition cursor-pointer shrink-0 ${
              activeSection === "guides"
                ? "bg-pass text-paper font-semibold shadow-2xs"
                : "text-muted hover:text-ink hover:bg-card"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>1. Guides</span>
            <span className="text-[10px] opacity-75">(10)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSection("interviews")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition cursor-pointer shrink-0 ${
              activeSection === "interviews"
                ? "bg-pass text-paper font-semibold shadow-2xs"
                : "text-muted hover:text-ink hover:bg-card"
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>2. Interview Q&amp;As</span>
            <span className="text-[10px] opacity-75">(8)</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: GUIDES                                         */}
        {/* ========================================================= */}
        {(activeSection === "all" || activeSection === "guides") && (
          <section className="enter enter-2 mt-7 sm:mt-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-line">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                  <BookOpen className="h-3.5 w-3.5" />
                  Section 01 · Engineering Guides
                </span>
                <span className="text-xs font-mono text-muted">/ 10 Guides</span>
              </div>

              {/* Minimal Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none shrink-0 font-mono text-xs">
                {GUIDE_CATEGORY_TABS.map((tab) => {
                  const isActive = activeGuideCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveGuideCategory(tab.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded transition shrink-0 cursor-pointer text-[11px] ${
                        isActive
                          ? "bg-ink text-paper font-semibold shadow-2xs"
                          : "border border-line bg-card text-muted hover:text-ink hover:border-pass/40"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className="text-[9.5px] opacity-70">{tab.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Responsive 4-Column Guides Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
              {filteredGuides.map((track) => {
                const originalIndex = GUIDE_TRACKS.findIndex((t) => t.id === track.id) + 1;
                return (
                  <Link
                    key={track.id}
                    href={`/learn/${track.slug}`}
                    className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-3.5 sm:p-4 shadow-2xs hover:border-pass/60 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 overflow-hidden cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="h-8 w-8 rounded-md border border-line bg-paper flex items-center justify-center p-1.5 group-hover:scale-105 group-hover:border-pass/40 transition-transform">
                          <ToolLogo name={track.logo} className="h-full w-full object-contain" />
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-[10px]">
                          <span className="px-1.5 py-0.5 rounded border border-line bg-paper text-muted">
                            {track.level}
                          </span>
                          <span className="text-muted/60 font-semibold">
                            #{String(originalIndex).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-2.5 font-serif text-[15px] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                        {track.title}
                      </h3>

                      <p className="mt-1 font-sans text-[11.5px] text-ink-soft leading-relaxed line-clamp-2">
                        {track.tagline}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-muted">
                        <strong className="text-ink font-semibold">{track.docCount}</strong> Chapters
                      </span>
                      <span className="inline-flex items-center gap-1 text-pass font-medium group-hover:translate-x-0.5 transition-transform">
                        <span>Read Guide</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 2: INTERVIEWS (FROM QA Interview.pdf)              */}
        {/* ========================================================= */}
        {(activeSection === "all" || activeSection === "interviews") && (
          <section className={`enter enter-3 ${activeSection === "all" ? "mt-9 sm:mt-11 pt-6 border-t border-line" : "mt-7 sm:mt-9"}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-line">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                  <HelpCircle className="h-3.5 w-3.5" />
                  Section 02 · Interview Q&amp;A Modules
                </span>
                <span className="text-xs font-mono text-muted hidden sm:inline">/ 8 Topics · 860+ Questions</span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-line bg-card text-[11px] font-mono text-muted self-start sm:self-auto">
                <FileText className="h-3 w-3 text-pass" />
                <span>Sequenced from QA Interview.pdf</span>
              </span>
            </div>

            {/* Responsive 4-Column Interviews Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
              {INTERVIEW_MODULES.map((item, idx) => {
                return (
                  <Link
                    key={item.id}
                    href={`/learn/${item.slug}`}
                    className="group relative flex flex-col justify-between rounded-lg border border-line bg-card p-3.5 sm:p-4 shadow-2xs hover:border-pass/60 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 overflow-hidden cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="h-8 w-8 rounded-md border border-line bg-paper flex items-center justify-center p-1.5 group-hover:scale-105 group-hover:border-pass/40 transition-transform">
                          <ToolLogo name={item.logo} className="h-full w-full object-contain" />
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-[10px]">
                          <span className="px-1.5 py-0.5 rounded border border-pass/30 bg-pass/10 text-pass font-semibold">
                            {item.qCount}
                          </span>
                          <span className="text-muted/60 font-semibold">
                            #{String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-2.5 font-serif text-[15px] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-sans text-[11.5px] text-ink-soft leading-relaxed line-clamp-2">
                        {item.tagline}
                      </p>

                      {/* Compact Chips */}
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {item.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="font-mono text-[9.5px] px-1.5 py-0.5 rounded border border-line/60 bg-paper/60 text-muted"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-muted">
                        <strong className="text-ink font-semibold">{item.qCount}</strong> in sequence
                      </span>
                      <span className="inline-flex items-center gap-1 text-pass font-medium group-hover:translate-x-0.5 transition-transform">
                        <span>View Q&amp;As</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
