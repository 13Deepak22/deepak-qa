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

export const COURSE_TRACKS: LearningTrack[] = [
  {
    id: "manual",
    slug: "manual",
    title: "Manual Software Testing & QA",
    shortTitle: "Manual Testing",
    tagline: "Zero-to-Hero master curriculum: 31 chapters from basic to advance",
    description: "Start from absolute zero: 7 ISTQB principles, SDLC models, STLC 6 phases, BVA & ECP, decision tables, state machines, IEEE 829 test plans, defect lifecycle, and FinTech payment QA.",
    category: "fundamentals",
    categoryLabel: "Testing Fundamentals",
    logo: "manual",
    level: "All Levels",
    docCount: 31,
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
    title: "Modern JavaScript for QA & Playwright",
    shortTitle: "JavaScript for Playwright",
    tagline: "Playwright-tailored master curriculum: 19 chapters from basic to advance",
    description: "Start JavaScript from absolute zero: const/let scoping, destructuring fixtures ({ page, request }), async/await event loop, for..of locator iteration, page.evaluate, and network mocking.",
    category: "languages",
    categoryLabel: "Programming Languages",
    logo: "javascript",
    level: "All Levels",
    docCount: 19,
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript for QA & Playwright Engineers",
    shortTitle: "TypeScript for Playwright",
    tagline: "Playwright-tailored master curriculum: 16 chapters from basic to advance",
    description: "Start TypeScript from absolute zero: strict typing, strongly typed Page Object Models, generic API clients, utility types (Partial, Pick, Omit), test.extend custom fixtures, and Zod schema validation.",
    category: "languages",
    categoryLabel: "Programming Languages",
    logo: "typescript",
    level: "Intermediate",
    docCount: 16,
  },
];

export const LEARNING_TRACKS = COURSE_TRACKS;

export const INTERVIEW_MODULES: InterviewModuleItem[] = [
  {
    id: "interview-manual-testing",
    slug: "interview/interview-manual-testing",
    title: "Manual Testing Interview Q&A",
    shortTitle: "Manual Testing Q&A",
    tagline: "130+ sequential questions: SDLC, STLC, Defect Life Cycle, ISTQB principles & BVA",
    description: "Sequence-wise interview questions covering testing fundamentals, 7 ISTQB principles, verification vs validation, severity vs priority, boundary value analysis, decision tables, defect triage, and root cause analysis.",
    qCount: "130+ Q&As",
    categoryLabel: "Manual QA Masterclass",
    logo: "manual",
    level: "All Levels",
    highlights: ["SDLC & STLC", "Defect Life Cycle", "BVA & ECP", "Agile QA", "RCA"],
  },
  {
    id: "interview-selenium-java",
    slug: "interview/interview-selenium-java",
    title: "Selenium with Java & Cucumber",
    shortTitle: "Selenium with Java Q&A",
    tagline: "144+ sequential questions: WebDriver architecture, locators, dynamic waits, TestNG & Cucumber BDD",
    description: "Complete Selenium with Java interview questions: Selenium 3 vs 4, StaleElementReferenceException handling, FluentWait vs WebDriverWait, JavaScriptExecutor, Page Object Model, and Cucumber BDD step definitions.",
    qCount: "144+ Q&As",
    categoryLabel: "Web Automation Masterclass",
    logo: "selenium",
    level: "Intermediate",
    highlights: ["WebDriver Core", "Dynamic Locators", "Waits & Timeouts", "Actions API", "Cucumber BDD"],
  },
  {
    id: "interview-api-postman",
    slug: "interview/interview-api-postman",
    title: "API Testing with Postman",
    shortTitle: "Postman API Q&A",
    tagline: "143+ sequential questions: REST principles, HTTP verbs, status codes, environments & Newman CLI",
    description: "Complete API testing interview questions: REST architecture, idempotency, pre-request scripts, test assertions, Newman headless CLI suites, environment scopes, and mock servers.",
    qCount: "143+ Q&As",
    categoryLabel: "API Testing Masterclass",
    logo: "postman",
    level: "All Levels",
    highlights: ["REST Principles", "Status Codes", "Environment Scopes", "Newman CLI", "Mock Servers"],
  },
  {
    id: "interview-sql-database",
    slug: "interview/interview-sql-database",
    title: "SQL & Database Testing",
    shortTitle: "SQL & DB Q&A",
    tagline: "52+ sequential questions: SELECT queries, WHERE filters, GROUP BY, HAVING, INNER/LEFT joins & ACID",
    description: "Core SQL interview questions for QA engineers: find second highest salary, eliminate duplicate rows, INNER vs LEFT joins, aggregations, ACID transactions, and database testing for QA.",
    qCount: "52+ Q&As",
    categoryLabel: "Database QA Masterclass",
    logo: "jira",
    level: "Intermediate",
    highlights: ["Queries & Joins", "Aggregations", "ACID Compliance", "Database QA", "Indexing"],
  },
  {
    id: "interview-core-java",
    slug: "interview/interview-core-java",
    title: "Core Java for Test Automation",
    shortTitle: "Core Java Q&A",
    tagline: "52+ sequential questions: OOP principles, String vs StringBuilder, Collections & Threads",
    description: "Essential Java interview questions for QA: OOP principles, method overriding vs overloading, Collections (List, Set, Map), exceptions hierarchy, garbage collection, and ThreadLocal safety.",
    qCount: "52+ Q&As",
    categoryLabel: "Programming Masterclass",
    logo: "java",
    level: "Intermediate",
    highlights: ["OOP Principles", "Collections Framework", "Exceptions", "ThreadLocal", "JVM Memory"],
  },
  {
    id: "interview-java-coding-programs",
    slug: "interview/interview-java-coding-programs",
    title: "Top 20 Java Coding Programs",
    shortTitle: "Java Coding Programs",
    tagline: "The 20 most frequently asked Java coding programs in SDET/QA interviews with complete solutions",
    description: "String reverse, palindrome check, Fibonacci sequence, prime numbers, armstrong number, remove duplicates, count characters, and array sorting with full runnable Java solutions.",
    qCount: "20 Programs with Code",
    categoryLabel: "Coding Solutions Masterclass",
    logo: "java",
    level: "Practical",
    highlights: ["String Reverse", "Palindrome", "Fibonacci", "Prime Numbers", "Array Sorting"],
  },
  {
    id: "interview-git-cicd-jenkins",
    slug: "interview/interview-git-cicd-jenkins",
    title: "Git, CI/CD, Jenkins & Docker",
    shortTitle: "DevOps & CI/CD Q&A",
    tagline: "214+ sequential questions: Git branching, merge conflicts, Jenkins declarative pipelines & Docker grids",
    description: "DevOps & CI/CD interview questions for QA: Git branching, merge conflicts, Jenkins declarative pipelines, webhook triggers, Docker containers, and Selenium Grid execution.",
    qCount: "214+ Q&As",
    categoryLabel: "DevOps & CI/CD Masterclass",
    logo: "automation",
    level: "DevOps QA",
    highlights: ["Git Flow", "Merge Conflicts", "Jenkinsfile Pipelines", "Docker Grids", "Webhooks"],
  },
  {
    id: "interview-100-real-time-scenarios",
    slug: "interview/interview-100-real-time-scenarios",
    title: "100 Real-Time QA Engineer Scenarios",
    shortTitle: "100 Real-Time Scenarios",
    tagline: "Practical situational questions: e-commerce flows, payment timeouts, production hotfixes & escalations",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    qCount: "106 Scenarios",
    categoryLabel: "Scenario-Based Masterclass",
    logo: "interview",
    level: "Real-World",
    highlights: ["E-Commerce QA", "Payment Gateways", "Production Incidents", "Conflict Triage", "Flakiness"],
  },
];

const COURSE_CATEGORY_TABS = [
  { id: "all", label: "All Courses", count: 10 },
  { id: "fundamentals", label: "Fundamentals", count: 1 },
  { id: "automation", label: "Automation", count: 4 },
  { id: "api-perf", label: "API & Perf", count: 2 },
  { id: "languages", label: "Languages", count: 3 },
] as const;

type HubSection = "all" | "courses" | "interviews";

export function LearnHubPage() {
  const [activeSection, setActiveSection] = useState<HubSection>("all");
  const [activeCourseCategory, setActiveCourseCategory] = useState<string>("all");

  const filteredCourses = useMemo(() => {
    if (activeCourseCategory === "all") return COURSE_TRACKS;
    return COURSE_TRACKS.filter((track) => track.category === activeCourseCategory);
  }, [activeCourseCategory]);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Hub Header */}
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
                Two dedicated sections: <strong>1. Comprehensive Engineering Courses</strong> with production blueprints, and <strong>2. QA Interview Questions &amp; Answers</strong> extracted sequentially from <em>QA Interview.pdf</em>.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-xs">
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Courses</span>
                <span className="text-lg font-bold text-ink">10</span>
              </div>
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Interviews</span>
                <span className="text-lg font-bold text-pass">8 Topics</span>
              </div>
              <div className="border border-line rounded-lg px-3.5 py-2.5 bg-card shadow-2xs">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Total Q&amp;A</span>
                <span className="text-lg font-bold text-ink">860+</span>
              </div>
            </div>
          </div>

          {/* Primary Two-Section Switcher */}
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl border border-line bg-card/70 shadow-xs max-w-fit">
            <button
              type="button"
              onClick={() => setActiveSection("all")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${
                activeSection === "all"
                  ? "bg-ink text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-paper"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>All Sections</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  activeSection === "all" ? "bg-paper/20 text-paper" : "bg-paper text-muted"
                }`}
              >
                18 Tracks
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("courses")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${
                activeSection === "courses"
                  ? "bg-pass text-paper font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-paper"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>1. Courses</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  activeSection === "courses" ? "bg-paper/20 text-paper" : "bg-paper text-muted"
                }`}
              >
                10 Tracks
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("interviews")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${
                activeSection === "interviews"
                  ? "bg-amber-600 text-white font-semibold shadow-2xs"
                  : "text-muted hover:text-ink hover:bg-paper"
              }`}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>2. Interviews Q&amp;A</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  activeSection === "interviews" ? "bg-white/20 text-white" : "bg-paper text-muted"
                }`}
              >
                8 Topics · 860+ Q&amp;As
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: COURSES                                        */}
        {/* ========================================================= */}
        {(activeSection === "all" || activeSection === "courses") && (
          <section className="enter enter-2 mt-10 sm:mt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-line">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-pass uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pass/10 border border-pass/20 mb-2">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Section 01 · Comprehensive Courses
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                  Full-Stack Testing &amp; Automation Courses
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-ink-soft">
                  10 curriculums from basic to advance: architecture diagrams, executable code snippets, and design patterns.
                </p>
              </div>

              {/* Course Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none shrink-0">
                {COURSE_CATEGORY_TABS.map((tab) => {
                  const isActive = activeCourseCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCourseCategory(tab.id)}
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

            {/* Courses Responsive Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredCourses.map((track) => {
                const originalIndex = COURSE_TRACKS.findIndex((t) => t.id === track.id) + 1;
                return (
                  <Link
                    key={track.id}
                    href={`/learn/${track.slug}`}
                    className="group relative flex flex-col justify-between rounded-xl border border-line bg-card p-5 sm:p-6 shadow-xs hover:border-pass/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pass/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

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

                      <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted block">
                        {track.categoryLabel}
                      </span>

                      <h3 className="mt-1 font-serif text-xl sm:text-[1.35rem] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                        {track.title}
                      </h3>

                      <p className="mt-1 font-mono text-xs text-muted/90 line-clamp-1">
                        {track.tagline}
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                        {track.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line/70 flex items-center justify-between text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 text-muted">
                        <BookOpen className="h-3.5 w-3.5 text-pass shrink-0" />
                        <span className="font-semibold text-ink">{track.docCount}</span> Chapters
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-pass group-hover:translate-x-0.5 transition-transform">
                        <span>Explore Course</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
          <section className={`enter enter-3 ${activeSection === "all" ? "mt-16 sm:mt-20 pt-10 border-t border-line" : "mt-10 sm:mt-12"}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-line">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2">
                  <HelpCircle className="h-3.5 w-3.5" />
                  Section 02 · Interviews Q&amp;A
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                  QA Interview Questions &amp; Answers
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-ink-soft max-w-3xl">
                  Extracted sequentially from <em>QA Interview.pdf</em> across 165 pages: 8 core topics and 860+ questions with verified answers, code snippets, and real-time scenarios. Click any topic below to view all questions sequence-wise.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-card text-xs font-mono text-muted shadow-2xs">
                  <FileText className="h-3.5 w-3.5 text-amber-500" />
                  <span>QA Interview.pdf · 165 Pages</span>
                </span>
              </div>
            </div>

            {/* Interviews Responsive Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {INTERVIEW_MODULES.map((item, idx) => {
                return (
                  <Link
                    key={item.id}
                    href={`/learn/${item.slug}`}
                    className="group relative flex flex-col justify-between rounded-xl border border-line bg-card p-5 sm:p-6 shadow-xs hover:border-amber-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="h-12 w-12 rounded-xl border border-line bg-paper/90 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-200 shadow-2xs">
                          <ToolLogo name={item.logo} className="h-full w-full object-contain" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                            {item.qCount}
                          </span>
                          <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors">
                            #{String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted block">
                        {item.categoryLabel}
                      </span>

                      <h3 className="mt-1 font-serif text-xl sm:text-[1.35rem] font-medium tracking-tight text-ink group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-mono text-xs text-muted/90 line-clamp-1">
                        {item.tagline}
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Topic Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="font-mono text-[10.5px] px-2 py-0.5 rounded-md border border-line/70 bg-paper/60 text-ink/80"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line/70 flex items-center justify-between text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 text-muted">
                        <HelpCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        <span className="font-semibold text-ink">{item.qCount}</span> in sequence
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                        <span>View All Q&amp;As</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
