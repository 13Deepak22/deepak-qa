"use client";

import { ExternalLink, Home, Layers, Code, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import { DocCodeBlock } from "./doc-code-block";
import { API_DOCS, type TocHeading } from "@/data/learn-docs-data";

export interface ApiViewProps {
  onOpenApi: (apiId: string) => void;
}

export function getApiToc(): TocHeading[] {
  return [
    { id: "core-classes", text: "Core Browser Classes", level: 2 },
    { id: "class-playwright", text: "Playwright Library", level: 3 },
    { id: "class-browser", text: "Browser", level: 3 },
    { id: "class-browser-context", text: "BrowserContext", level: 3 },
    { id: "class-page", text: "Page", level: 3 },
    { id: "class-locator", text: "Locator", level: 3 },
    { id: "class-assertions", text: "Web-First Assertions (expect)", level: 2 },
    { id: "network-classes", text: "Network & API Testing", level: 2 },
    { id: "class-request", text: "APIRequestContext & Request", level: 3 },
    { id: "class-route", text: "Route & Network Interception", level: 3 },
  ];
}

export function ApiView({ onOpenApi }: ApiViewProps) {
  const classes = [
    {
      id: "class-playwright",
      name: "Playwright",
      description: "Entry point to the Playwright library. Exposes chromium, firefox, webkit browser types and device descriptors.",
      methods: [
        { id: "browser-type-launch", name: "playwright.chromium.launch([options])", desc: "Launches a Chromium browser instance." },
        { id: "browser-type-launch", name: "playwright.devices", desc: "Dictionary of simulated mobile and desktop device descriptors." },
        { id: "browser-type-launch", name: "playwright.selectors", desc: "Custom selector engines registration and configuration." },
      ],
    },
    {
      id: "class-browser",
      name: "Browser",
      description: "A Browser instance created via browserType.launch(). Owns multiple isolated BrowserContexts.",
      methods: [
        { id: "browser-new-context", name: "browser.newContext([options])", desc: "Creates a hermetic incognito browser context." },
        { id: "browser-context-new-page", name: "browser.newPage([options])", desc: "Creates a new page in a default context." },
        { id: "browser-close", name: "browser.close()", desc: "Closes the browser process and all contexts." },
      ],
    },
    {
      id: "class-browser-context",
      name: "BrowserContext",
      description: "An isolated browser session with its own cookies, local storage, cache, and proxy rules.",
      methods: [
        { id: "browser-context-new-page", name: "context.newPage()", desc: "Creates a new tab inside this context." },
        { id: "browser-context-close", name: "context.close()", desc: "Closes this context and all its tabs." },
      ],
    },
    {
      id: "class-page",
      name: "Page",
      description: "Provides methods to interact with a single tab, navigate URLs, and inspect elements.",
      methods: [
        { id: "browser-type-launch", name: "page.goto(url, [options])", desc: "Navigates to specified URL and waits for load." },
        { id: "page-assertions-to-have-title", name: "page.title()", desc: "Returns the document title." },
        { id: "page-assertions-to-have-screenshot", name: "page.screenshot([options])", desc: "Captures a visual screenshot." },
      ],
    },
    {
      id: "class-locator",
      name: "Locator",
      description: "Central abstraction for finding elements with auto-waiting and retry capability.",
      methods: [
        { id: "browser-type-launch", name: "locator.click([options])", desc: "Clicks the element once actionability checks pass." },
        { id: "browser-type-launch", name: "locator.fill(value, [options])", desc: "Clears and fills an input field." },
        { id: "page-assertions-to-have-title", name: "locator.textContent()", desc: "Returns element textContent." },
      ],
    },
    {
      id: "class-assertions",
      name: "PageAssertions & LocatorAssertions",
      description: "Auto-retrying web-first matchers with configurable expectation timeouts.",
      methods: [
        { id: "page-assertions-to-have-title", name: "expect(page).toHaveTitle(titleOrRegExp)", desc: "Waits until document title matches." },
        { id: "page-assertions-to-have-screenshot", name: "expect(page).toHaveScreenshot([name])", desc: "Compares snapshot image against baseline." },
      ],
    },
  ];

  return (
    <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
        <Link href="/" className="flex items-center hover:text-ink transition-colors" aria-label="Home page">
          <Home className="h-3.5 w-3.5" />
        </Link>
        <span className="text-line">/</span>
        <span className="hover:text-ink cursor-default">Reference</span>
        <span className="text-line">/</span>
        <span className="font-medium text-pass">Playwright API</span>
      </nav>

      {/* Main Title Header */}
      <header className="mb-8 border-b border-line/60 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
            <Layers className="h-3.5 w-3.5 text-pass" />
            Class Reference
          </div>
          <a
            href="https://playwright.dev/docs/api/class-playwright"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-pass transition"
          >
            <span>Original source</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl mb-2">Playwright API Reference</h1>
        <p className="text-sm sm:text-base text-muted">
          Complete object-oriented API reference for Playwright, Browser, BrowserContext, Page, Locator, and Web-First Assertions.
        </p>
      </header>

      {/* Section 1: Core Classes */}
      <section id="core-classes" className="mb-10 scroll-mt-32">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Core Browser Classes</h2>
        <p className="text-sm sm:text-base leading-relaxed text-ink/90 mb-4">
          Playwright structures automation into a strict hierarchy: a Browser spawns isolated BrowserContexts (incognito profiles), each containing one or more Pages (tabs).
        </p>

        <div className="space-y-6">
          {classes.map((cls) => (
            <div key={cls.id} id={cls.id} className="rounded-lg border border-line bg-card/60 p-4 scroll-mt-32">
              <h3 className="text-lg font-bold text-ink mb-1 flex items-center justify-between">
                <span>{cls.name}</span>
                <span className="text-xs font-mono font-normal text-muted">class</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted mb-3">{cls.description}</p>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-muted tracking-wider">Key Methods:</span>
                <div className="grid grid-cols-1 gap-1.5">
                  {cls.methods.map((m) => (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => onOpenApi(m.id)}
                      className="group flex items-center justify-between rounded-md border border-line/40 bg-paper/50 px-3 py-2 text-left text-xs transition hover:border-pass hover:bg-card cursor-pointer"
                    >
                      <code className="font-mono text-pass font-medium group-hover:underline">{m.name}</code>
                      <span className="text-muted text-[11px]">{m.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Network Classes */}
      <section id="network-classes" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Network & API Testing</h2>
        <div id="class-request" className="mb-6 scroll-mt-32">
          <h3 className="text-lg font-semibold text-ink mb-2">APIRequestContext</h3>
          <p className="text-sm text-ink/90 mb-3">
            Send HTTP(S) requests directly without a browser instance:
          </p>
          <DocCodeBlock
            code={`// Initialize request context
const api = await playwright.request.newContext({
  baseURL: 'https://api.github.com',
  extraHTTPHeaders: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

const response = await api.get('/user/repos');
expect(response.ok()).toBeTruthy();`}
            language="typescript"
          />
        </div>

        <div id="class-route" className="scroll-mt-32">
          <h3 className="text-lg font-semibold text-ink mb-2">Route</h3>
          <p className="text-sm text-ink/90 mb-3">
            Intercept and mock network traffic per page or per context:
          </p>
          <DocCodeBlock
            code={`await page.route('**/api/profile', async (route) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ name: 'Deepak Gupta', role: 'Staff QA' }),
  });
});`}
            language="typescript"
          />
        </div>
      </section>
    </article>
  );
}

