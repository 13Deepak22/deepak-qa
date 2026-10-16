"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Search,
  X,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import type { ToolLogo as ToolLogoName } from "@/data";
import { QuickPrepModal } from "@/components/learn/quick-prep-modal";
import { QuizModal } from "@/components/learn/quiz-modal";

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
    tagline: "Auto-waits, multi-context browser isolation, and trace debugging.",
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
    tagline: "Variables, assertion scripts, JSON schema validation, and Newman runner.",
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
    tagline: "W3C WebDriver compliance, dynamic locators, and Grid distributed testing.",
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
    tagline: "Native mobile automation with UiAutomator2, XCUITest, and touch gestures.",
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
    tagline: "Thread Groups, load distribution, response assertions, and CLI execution.",
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
    tagline: "OOP concepts, Collections framework, exception handling, and ThreadLocal safety.",
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
    tagline: "Strict typing, typed Page Object Models, generics, and Zod validation.",
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
    tagline: "Modern ES6+, async/await execution, and fixture destructuring.",
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
    tagline: "Page Object Model, containerized test execution, and CI/CD pipelines.",
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
    tagline: "STLC phases, test design techniques, boundary value analysis, and defect triage.",
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
    tagline: "Playwright architecture, live locators, trace debugging, and MCP protocol integration.",
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
    tagline: "REST architecture, HTTP status codes, pre-request scripts, assertions, and Newman CLI.",
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
    tagline: "WebDriver 4, dynamic locators, explicit waits, TestNG lifecycle, and Page Object Models.",
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
    tagline: "OOP principles, Collections, exception handling, and ThreadLocal safety.",
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
    tagline: "Common string, array, and algorithmic interview programs with runnable solutions.",
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
    tagline: "Jenkins declarative pipelines, webhook triggers, Docker test containers, and Linux commands.",
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
    tagline: "Branching workflows, merge conflicts, pull requests, git revert, and remote repository commands.",
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
    tagline: "Complex SELECT queries, JOIN operations, aggregate functions, and database testing for QA.",
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
    tagline: "STLC phases, test design techniques, severity vs priority, defect triage, and test cases.",
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
    tagline: "Practical scenarios: concurrency conflicts, payment timeouts, flakiness mitigation, and triage.",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    qCount: "105 Scenarios",
    logo: "interview",
  },
];

// Unified Tool Resource Definition (merges Guide + Interview Q&A if tools are the same)
export interface UnifiedToolResource {
  id: string;
  name: string;
  toolTag: string;
  tagline: string;
  description: string;
  logo: ToolLogoName;
  guide?: {
    slug: string;
    title: string;
    docCount: number;
    label: string;
  };
  interview?: {
    slug: string;
    title: string;
    qCount: string;
    label: string;
  };
  extraResource?: {
    slug: string;
    title: string;
    count: string;
    label: string;
  };
}

export const UNIFIED_TOOLS: UnifiedToolResource[] = [
  // 1. Playwright: Merged Guide (16 docs) + Interview Q&A (37 Q&As)
  {
    id: "playwright",
    name: "Microsoft Playwright",
    toolTag: "Playwright · Web & MCP",
    tagline: "Auto-waits, multi-context browser isolation, network mocking, and MCP protocol integration.",
    description: "Next-gen web test automation: zero-flakiness auto-waiting, network mocking, HAR capture, Codegen test generator, Trace Viewer debugging, and API testing capabilities.",
    logo: "playwright",
    guide: {
      slug: "playwright",
      title: "Playwright Engineering Guide",
      docCount: 16,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-playwright-mcp",
      title: "Playwright + MCP Q&A",
      qCount: "37 Q&As",
      label: "Interview Q&A",
    },
  },

  // 2. Postman: Merged Guide (10 docs) + Interview Q&A (107+ Q&As)
  {
    id: "postman",
    name: "Postman & REST API",
    toolTag: "Postman · REST & Newman",
    tagline: "Variables, pre-request scripts, JSON schema validation, and Newman headless runner.",
    description: "Automate REST APIs with Postman: pre-request scripts, test assertions, environment scopes, JSON schema validation, Newman headless CLI runners, and mock servers.",
    logo: "postman",
    guide: {
      slug: "postman",
      title: "Postman API Automation Guide",
      docCount: 10,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-api-postman",
      title: "API Testing Interview Q&A",
      qCount: "107+ Q&As",
      label: "Interview Q&A",
    },
  },

  // 3. Selenium: Merged Guide (11 docs) + Interview Q&A (153 Q&As)
  {
    id: "selenium",
    name: "Selenium WebDriver & Grid",
    toolTag: "Selenium 4 · Web Grid",
    tagline: "W3C WebDriver compliance, dynamic locators, explicit waits, and Grid distributed scaling.",
    description: "Classic browser automation using modern Selenium 4: W3C WebDriver compliance, dynamic locators, explicit & fluent waits, Actions API, JavaScriptExecutor, and Selenium Grid distributed testing.",
    logo: "selenium",
    guide: {
      slug: "selenium",
      title: "Selenium 4 Engineering Guide",
      docCount: 11,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-selenium-java",
      title: "Selenium with Java Q&A",
      qCount: "153 Q&As",
      label: "Interview Q&A",
    },
  },

  // 4. Java: Merged Guide (64 docs) + Interview Q&A (55+ Q&As) + Top 20 Programs
  {
    id: "java",
    name: "Java for QA Engineers",
    toolTag: "Java · SDET & Frameworks",
    tagline: "OOP concepts, Collections framework, exception hierarchies, and ThreadLocal safety.",
    description: "Start Java from absolute zero to advanced SDET: JDK architecture, Collections (List, Set, Map), OOP principles, multi-threading, TestNG lifecycle, and coding algorithms.",
    logo: "java",
    guide: {
      slug: "java",
      title: "Java for QA Guide",
      docCount: 64,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-core-java",
      title: "Core Java Interview Q&A",
      qCount: "55+ Q&As",
      label: "Interview Q&A",
    },
    extraResource: {
      slug: "interview/interview-java-coding-programs",
      title: "Top 20 Java Programs",
      count: "20 Programs",
      label: "Coding Solutions",
    },
  },

  // 5. Manual Testing: Merged Guide (31 docs) + Interview Q&A (130+ Q&As)
  {
    id: "manual",
    name: "Manual Software Testing",
    toolTag: "Manual QA · STLC & ISTQB",
    tagline: "STLC phases, test design techniques, boundary value analysis, and defect triage.",
    description: "Start from absolute zero: 7 ISTQB principles, SDLC models, STLC 6 phases, BVA & ECP, decision tables, state machines, IEEE 829 test plans, defect lifecycle, and FinTech payment QA.",
    logo: "manual",
    guide: {
      slug: "manual",
      title: "Manual QA Engineering Guide",
      docCount: 31,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-manual-testing",
      title: "Manual Testing Interview Q&A",
      qCount: "130+ Q&As",
      label: "Interview Q&A",
    },
  },

  // 6. DevOps & CI/CD: Merged Guide (12 docs) + Interview Q&A (106 Q&As)
  {
    id: "automation-devops",
    name: "DevOps & CI/CD Pipelines",
    toolTag: "Docker · Jenkins & CI/CD",
    tagline: "Page Object Models, declarative pipelines, Dockerized test execution, and Linux commands.",
    description: "Design production-grade test automation architecture: Page Object Model (POM), data-driven testing, GitHub Actions CI/CD pipelines, Docker containerized grids, and the test automation pyramid.",
    logo: "docker",
    guide: {
      slug: "automation",
      title: "Architecture & CI/CD Guide",
      docCount: 12,
      label: "Guide",
    },
    interview: {
      slug: "interview/interview-git-cicd-jenkins",
      title: "CI/CD & Jenkins Q&A",
      qCount: "106 Q&As",
      label: "Interview Q&A",
    },
  },

  // 7. Appium (Separate - Guide only)
  {
    id: "appium",
    name: "Appium Mobile Automation",
    toolTag: "Appium · iOS & Android",
    tagline: "Native mobile automation with UiAutomator2, XCUITest driver, and touch gestures.",
    description: "Automate native mobile apps: UiAutomator2, XCUITest driver, mobile touch gestures, Appium Inspector, real device testing, and cloud device farm execution.",
    logo: "appium",
    guide: {
      slug: "appium",
      title: "Appium Mobile Automation Guide",
      docCount: 11,
      label: "Engineering Guide",
    },
  },

  // 8. JMeter (Separate - Guide only)
  {
    id: "jmeter",
    name: "Apache JMeter Load Testing",
    toolTag: "JMeter · Concurrency Load",
    tagline: "Thread Groups, load distribution, response assertions, and distributed CLI execution.",
    description: "Simulate thousands of concurrent virtual users: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Timers, Listeners, Response Assertions, and Distributed Remote Slaves.",
    logo: "jmeter",
    guide: {
      slug: "jmeter",
      title: "JMeter Performance Guide",
      docCount: 10,
      label: "Engineering Guide",
    },
  },

  // 9. TypeScript (Separate - Guide only)
  {
    id: "typescript",
    name: "TypeScript for QA Engineers",
    toolTag: "TypeScript · Strongly Typed POM",
    tagline: "Strict typing, typed Page Object Models, generics, custom fixtures, and Zod validation.",
    description: "Start TypeScript from absolute zero: strict typing, strongly typed Page Object Models, generic API clients, utility types (Partial, Pick, Omit), custom fixtures, and Zod schema validation.",
    logo: "typescript",
    guide: {
      slug: "typescript",
      title: "TypeScript for QA Guide",
      docCount: 16,
      label: "Engineering Guide",
    },
  },

  // 10. JavaScript (Separate - Guide only)
  {
    id: "javascript",
    name: "Modern JavaScript for Testers",
    toolTag: "JavaScript · Modern ES6+",
    tagline: "Modern ES6+, async/await execution, fixture destructuring, and network mocking.",
    description: "Start JavaScript from absolute zero: const/let scoping, destructuring fixtures ({ page, request }), async/await event loop, for..of locator iteration, page.evaluate, and network mocking.",
    logo: "javascript",
    guide: {
      slug: "javascript",
      title: "Modern JavaScript Guide",
      docCount: 19,
      label: "Engineering Guide",
    },
  },

  // 11. SQL & Database Testing (Separate - Interview Q&A only)
  {
    id: "interview-sql-database",
    name: "SQL & Database Testing",
    toolTag: "SQL · Data Verification",
    tagline: "Complex SELECT queries, JOIN operations, aggregate functions, and database testing for QA.",
    description: "Core SQL interview questions for QA engineers: find second highest salary, eliminate duplicate rows, INNER vs LEFT joins, aggregations, ACID transactions, and database testing for QA.",
    logo: "sql",
    interview: {
      slug: "interview/interview-sql-database",
      title: "SQL & Database Testing Q&A",
      qCount: "52+ Q&As",
      label: "Interview Q&A",
    },
  },

  // 12. Git & Version Control (Separate - Interview Q&A only)
  {
    id: "interview-git",
    name: "Git & Version Control",
    toolTag: "Git · Branching & Remotes",
    tagline: "Branching workflows, merge conflicts, pull requests, git revert, and remote commands.",
    description: "Master essential Git commands and workflows for QA: git init, staging, commits, branch management, merge, remote GitHub workflow, git revert, reset, and commit --amend.",
    logo: "git",
    interview: {
      slug: "interview/interview-git",
      title: "Git & Version Control Q&A",
      qCount: "25 Q&As",
      label: "Interview Q&A",
    },
  },

  // 13. 100 Real-Time QA Scenarios (Separate - Scenarios Q&A only)
  {
    id: "interview-100-real-time-scenarios",
    name: "100 Real-Time QA Scenarios",
    toolTag: "Scenarios · Real-World QA",
    tagline: "Practical scenarios: concurrency conflicts, payment timeouts, flakiness mitigation, and triage.",
    description: "100 practical real-world QA engineering scenarios: concurrency conflicts, payment gateway timeouts, cart drop-offs, flakiness mitigation, production escalations, and cross-team disputes.",
    logo: "interview",
    interview: {
      slug: "interview/interview-100-real-time-scenarios",
      title: "100 Real-Time QA Scenarios",
      qCount: "105 Scenarios",
      label: "Scenario Q&A",
    },
  },

  // 14. Top 20 Java Programs (Separate - Coding Practice only)
  {
    id: "interview-java-coding-programs",
    name: "Top 20 Java Programs",
    toolTag: "Java · Coding Solutions",
    tagline: "Common string, array, and algorithmic interview programs with runnable solutions.",
    description: "String reverse, palindrome check, Fibonacci sequence, prime numbers, armstrong number, remove duplicates, count characters, and array sorting with full runnable Java solutions.",
    logo: "java",
    interview: {
      slug: "interview/interview-java-coding-programs",
      title: "Top 20 Java Programs",
      qCount: "20 Programs",
      label: "Coding Solutions",
    },
  },
];

export function LearnHubPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isQuickPrepOpen, setIsQuickPrepOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  // Check URL parameters for direct deep-linking (?view=quiz or ?view=quick-prep)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const view = params.get("view") || params.get("mode");
      if (view === "quiz") {
        setIsQuizOpen(true);
      } else if (view === "quick-prep" || view === "prep") {
        setIsQuickPrepOpen(true);
      }
    }
  }, []);

  // Filter unified tools by search query across name, toolTag, tagline, description, and link slugs
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return UNIFIED_TOOLS;
    const q = searchQuery.toLowerCase().trim();
    return UNIFIED_TOOLS.filter((tool) => {
      const matchName = tool.name.toLowerCase().includes(q);
      const matchTag = tool.toolTag.toLowerCase().includes(q);
      const matchTagline = tool.tagline.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchGuide =
        tool.guide &&
        (tool.guide.title.toLowerCase().includes(q) ||
          tool.guide.slug.toLowerCase().includes(q));
      const matchInterview =
        tool.interview &&
        (tool.interview.title.toLowerCase().includes(q) ||
          tool.interview.slug.toLowerCase().includes(q));
      const matchExtra =
        tool.extraResource &&
        tool.extraResource.title.toLowerCase().includes(q);
      return (
        matchName ||
        matchTag ||
        matchTagline ||
        matchDesc ||
        matchGuide ||
        matchInterview ||
        matchExtra
      );
    });
  }, [searchQuery]);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20">
        
        {/* Minimal Theme-Matching Header */}
        <div className="enter enter-1 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">06</span> / Knowledge Base
            </p>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-normal">
              Learn with me.
            </h1>
            <p className="mt-2 text-sm sm:text-base text-ink-soft max-w-xl leading-relaxed">
              Personal reference notes, test automation guides, and QA interview prep unified by tool.
            </p>
          </div>

          {/* Minimal, Theme-Matching Action Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsQuickPrepOpen(true)}
              data-cursor="Open Quick Prep"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-lg border border-line bg-card hover:border-pass hover:text-pass text-ink font-mono text-xs transition cursor-pointer shadow-2xs hover:-translate-y-0.5"
            >
              <Zap className="w-3.5 h-3.5 text-pass transition-transform group-hover:scale-110" />
              <span className="font-medium">Quick Prep</span>
              <span className="text-[10px] text-muted group-hover:text-pass font-normal">· 1,400+ Q&amp;A</span>
            </button>

            <button
              type="button"
              onClick={() => setIsQuizOpen(true)}
              data-cursor="Start QA Quiz"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-lg border border-pass/40 bg-pass/10 hover:bg-pass hover:text-paper text-pass font-mono text-xs font-semibold transition cursor-pointer shadow-2xs hover:-translate-y-0.5"
            >
              <Target className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>QA Quiz</span>
              <span className="text-[10px] opacity-80 font-normal">· 1,200+ MCQs</span>
            </button>
          </div>
        </div>

        {/* Search & Tool Stats Bar (No category division tabs) */}
        <div className="enter enter-2 mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted">
              Showing <span className="font-semibold text-pass">{filteredTools.length}</span> tools &amp; frameworks
            </span>
            <span className="text-muted/40">•</span>
            <span className="font-mono text-[11px] text-muted hidden md:inline">
              Guides &amp; Interview Q&amp;As unified in one grid
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, guides, or interview questions..."
              className="w-full pl-9 pr-7 py-2 rounded-lg border border-line bg-card font-mono text-xs text-ink placeholder:text-muted/70 focus:outline-none focus:border-pass focus:ring-1 focus:ring-pass/40 transition shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-xl border border-line bg-card">
            <p className="font-serif text-lg text-ink">No tools match &ldquo;{searchQuery}&rdquo;</p>
            <p className="font-mono text-xs text-muted mt-1.5">
              Try searching for &quot;Playwright&quot;, &quot;API&quot;, &quot;Selenium&quot;, &quot;Java&quot;, or &quot;SQL&quot;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-3.5 py-1.5 rounded-lg bg-pass text-paper font-mono text-xs cursor-pointer inline-flex items-center gap-1.5 hover:bg-pass-fill transition"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* UNIFIED TOOLS GRID: Merged Guides + Interview Q&As         */}
        {/* ========================================================= */}
        {filteredTools.length > 0 && (
          <div className="enter enter-2 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
            {filteredTools.map((tool) => {
              const hasBoth = Boolean(tool.guide && tool.interview);

              return (
                <article
                  key={tool.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-line bg-card p-3.5 sm:p-4 shadow-2xs hover:border-pass hover:shadow-[0_8px_25px_-6px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-pass before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  <div>
                    {/* Top Bar: Tool Logo + Availability Pill Badge */}
                    <div className="flex items-center justify-between gap-2.5">
                      <div className="h-8.5 w-8.5 shrink-0 rounded-lg border border-line bg-paper flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 group-hover:border-pass/60 shadow-2xs">
                        <ToolLogo name={tool.logo} className="h-full w-full object-contain" />
                      </div>

                      {/* Availability Pill Badge */}
                      <div className="shrink-0">
                        {hasBoth ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-pass/35 bg-pass/12 text-pass font-mono text-[9px] font-semibold whitespace-nowrap shadow-[0_0_8px_rgba(16,185,129,0.12)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-pass shadow-[0_0_4px_var(--pass)] animate-pulse" />
                            Guide + Q&amp;A
                          </span>
                        ) : tool.guide ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-line bg-paper/80 text-muted font-mono text-[8.5px] font-medium whitespace-nowrap">
                            Guide
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-line bg-paper/80 text-muted font-mono text-[8.5px] font-medium whitespace-nowrap">
                            Interview Q&amp;A
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tool Tag & Full Title */}
                    <div className="mt-2.5">
                      <span className="font-mono text-[9px] font-bold text-pass uppercase tracking-wider block">
                        {tool.toolTag}
                      </span>
                      <h2 className="mt-0.5 font-serif text-[15px] sm:text-[15.5px] font-medium tracking-tight text-ink group-hover:text-pass transition-colors leading-snug">
                        {tool.name}
                      </h2>
                    </div>

                    {/* Tool Tagline */}
                    <p className="mt-1.5 font-sans text-[11.5px] text-ink-soft leading-snug line-clamp-2">
                      {tool.tagline}
                    </p>
                  </div>

                  {/* Bottom Actions: Guides and Q&A Buttons */}
                  <div className="mt-3 pt-2.5 border-t border-line/60">
                    {hasBoth && tool.guide && tool.interview ? (
                      <div className="flex flex-col gap-1.5">
                        <div className="grid grid-cols-2 gap-1.5">
                          {/* Guide Button */}
                          <Link
                            href={`/learn/${tool.guide.slug}`}
                            data-cursor={`Read ${tool.name} Guide`}
                            className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-line bg-paper/90 hover:border-pass hover:bg-pass/10 text-ink hover:text-pass transition-all font-mono text-[11px] font-semibold group/btn shadow-2xs"
                          >
                            <BookOpen className="h-3 w-3 text-pass shrink-0" />
                            <span>Guide</span>
                            <span className="text-[9px] text-muted font-normal group-hover/btn:text-pass">· {tool.guide.docCount}</span>
                          </Link>

                          {/* Interview Q&A Button */}
                          <Link
                            href={`/learn/${tool.interview.slug}`}
                            data-cursor={`Study ${tool.name} Interview Q&As`}
                            className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-line bg-paper/90 hover:border-pass hover:bg-pass/10 text-ink hover:text-pass transition-all font-mono text-[11px] font-semibold group/btn shadow-2xs"
                          >
                            <HelpCircle className="h-3 w-3 text-pass shrink-0" />
                            <span>Q&amp;A</span>
                            <span className="text-[9px] text-muted font-normal group-hover/btn:text-pass">· {tool.interview.qCount.replace(" Q&As", "")}</span>
                          </Link>
                        </div>

                        {/* Extra Resource (e.g. Top 20 Java Programs for Java) */}
                        {tool.extraResource && (
                          <Link
                            href={`/learn/${tool.extraResource.slug}`}
                            data-cursor={`Practice ${tool.extraResource.title}`}
                            className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-md border border-line/60 bg-paper/60 hover:border-pass hover:bg-pass/10 text-ink-soft hover:text-pass transition-all font-mono text-[10px]"
                          >
                            <span>💻 {tool.extraResource.title}</span>
                            <span className="text-muted text-[9px]">· {tool.extraResource.count.replace(" Programs", "")}</span>
                          </Link>
                        )}
                      </div>
                    ) : tool.guide ? (
                      <Link
                        href={`/learn/${tool.guide.slug}`}
                        data-cursor={`Read ${tool.name} Guide`}
                        className="flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg border border-line bg-paper/90 hover:border-pass hover:bg-pass/10 text-ink hover:text-pass transition-all group/btn shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="h-3 w-3 text-pass shrink-0" />
                          <span className="font-mono text-[11px] font-semibold">Engineering Guide</span>
                        </div>
                        <span className="font-mono text-[9.5px] text-muted group-hover/btn:text-pass inline-flex items-center gap-1 font-medium">
                          <span>{tool.guide.docCount} docs</span>
                          <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    ) : tool.interview ? (
                      <Link
                        href={`/learn/${tool.interview.slug}`}
                        data-cursor={`Study ${tool.name} Interview Questions`}
                        className="flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg border border-line bg-paper/90 hover:border-pass hover:bg-pass/10 text-ink hover:text-pass transition-all group/btn shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5">
                          <HelpCircle className="h-3 w-3 text-pass shrink-0" />
                          <span className="font-mono text-[11px] font-semibold">Interview Questions</span>
                        </div>
                        <span className="font-mono text-[9.5px] text-muted group-hover/btn:text-pass inline-flex items-center gap-1 font-medium">
                          <span>{tool.interview.qCount}</span>
                          <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Quick Prep Flashcard Modal */}
        <QuickPrepModal
          isOpen={isQuickPrepOpen}
          onClose={() => setIsQuickPrepOpen(false)}
        />

        {/* QA Quiz Engine Modal */}
        <QuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />

      </div>
    </main>
  );
}
