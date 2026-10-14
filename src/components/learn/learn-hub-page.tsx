"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
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
    tagline: "The bedrock of software quality & exploratory verification",
    description: "Master the 50+ software testing types taxonomy, STLC 6 stages, Bug lifecycle state machines, Defect Triage meetings, Severity vs Priority matrix, and modern Shift-Left / Shift-Right QA.",
    category: "fundamentals",
    categoryLabel: "Testing Fundamentals",
    logo: "manual",
    level: "All Levels",
    docCount: 14,
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
    docCount: 19,
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

export function LearnHubPage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="enter enter-1 pb-8 sm:pb-10 border-b border-line">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">06</span> / Knowledge Base &amp; Learning Hub
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            Choose what you want to learn.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            Production-grade test engineering curriculums, comprehensive syntax directories, architecture blueprints, and real-world testing lifecycles by Deepak Gupta.
          </p>
        </div>

        {/* Sober List of Learning Tracks */}
        <div className="enter enter-2 mt-2">
          <ol className="divide-y divide-line">
            {LEARNING_TRACKS.map((track, idx) => (
              <li key={track.id}>
                <Link
                  href={`/learn/${track.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg hover:bg-paper-deep/60 transition-colors duration-150 cursor-pointer"
                >
                  {/* Left: Number, Logo, Title, and Tagline */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0">
                    <span className="font-mono text-sm text-pass font-semibold shrink-0 w-6 pt-0.5 sm:pt-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-lg border border-line bg-card flex items-center justify-center p-2 group-hover:border-pass/50 group-hover:bg-pass/5 transition shadow-2xs">
                      <ToolLogo name={track.logo} className="h-full w-full object-contain" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-pass transition tracking-tight font-medium">
                          {track.title}
                        </h2>
                        <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded border border-line bg-paper text-muted shrink-0">
                          {track.docCount} Docs
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-1">
                        {track.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Difficulty Level & CTA Arrow */}
                  <div className="flex items-center gap-4 shrink-0 pl-10 sm:pl-0 font-mono text-xs text-muted group-hover:text-pass transition self-end sm:self-center">
                    <span className="hidden md:inline-block text-[11px] uppercase tracking-wider text-muted">
                      {track.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-pass">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
