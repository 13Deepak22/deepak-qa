"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ArrowRight, ExternalLink, Home, Info, Sparkles } from "lucide-react";
import { DocTabs } from "./doc-tabs";
import { DocCodeBlock } from "./doc-code-block";
import { ComparisonTable } from "./comparison-table";
import { InteractiveRunner } from "./interactive-runner";
import { DOC_CATEGORIES, type TocHeading } from "@/data/learn-docs-data";
import { EXTENDED_DOCS } from "@/data/learn-extended-docs";
import type { LanguageType } from "./docs-header-bar";

export interface DocViewerProps {
  activeDocId: string;
  onNavigate: (docId: string, anchorId?: string) => void;
  onOpenApi: (apiId: string) => void;
  selectedLanguage?: LanguageType;
}

function formatDocText(text: string): React.ReactNode[] {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="font-mono text-xs bg-paper-deep text-pass px-1.5 py-0.5 rounded border border-line/40 font-medium"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isExternal = linkUrl.startsWith("http");
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-pass hover:underline font-medium"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export function getDocToc(docId: string): TocHeading[] {
  switch (docId) {
    case "intro":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "installing-playwright", text: "Installing Playwright", level: 2 },
        { id: "using-npm-yarn-or-pnpm", text: "Using npm, yarn or pnpm", level: 3 },
        { id: "using-the-vs-code-extension", text: "Using the VS Code Extension", level: 3 },
        { id: "whats-installed", text: "What's Installed", level: 2 },
        { id: "running-the-example-test", text: "Running the Example Test", level: 2 },
        { id: "html-test-reports", text: "HTML Test Reports", level: 2 },
        { id: "running-the-example-test-in-ui-mode", text: "Running the Example Test in UI Mode", level: 2 },
        { id: "updating-playwright", text: "Updating Playwright", level: 2 },
        { id: "system-requirements", text: "System requirements", level: 2 },
      ];
    case "writing-tests":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "first-test", text: "First test", level: 2 },
        { id: "test-hooks", text: "Test hooks (beforeEach & afterEach)", level: 2 },
        { id: "test-fixtures", text: "Using Test Fixtures", level: 2 },
        { id: "web-first-assertions", text: "Web-First Assertions", level: 2 },
      ];
    case "codegen":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "running-codegen", text: "Running Codegen", level: 2 },
        { id: "recording-actions", text: "Recording user actions", level: 2 },
        { id: "generating-assertions", text: "Generating assertions", level: 2 },
        { id: "emulating-devices", text: "Emulating devices & viewports", level: 2 },
      ];
    case "running-tests":
      return [
        { id: "running-tests", text: "Command line options", level: 2 },
        { id: "headed-mode", text: "Running in Headed mode", level: 2 },
        { id: "filtering-tests", text: "Filtering tests by file or tag", level: 2 },
        { id: "debugging-tests", text: "Debugging tests with Inspector", level: 2 },
        { id: "ui-mode", text: "Interactive UI Mode", level: 2 },
      ];
    case "trace-viewer":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "recording-traces", text: "Recording a Trace", level: 2 },
        { id: "opening-traces", text: "Opening the Trace Viewer", level: 2 },
        { id: "inspecting-traces", text: "Inspecting Actions & DOM snapshots", level: 2 },
      ];
    case "accessibility-testing":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "installation", text: "Installing @axe-core/playwright", level: 2 },
        { id: "scanning-entire-page", text: "Scanning an entire page", level: 2 },
        { id: "scanning-components", text: "Scanning specific components", level: 2 },
        { id: "configuring-rules", text: "Configuring Axe rules", level: 2 },
      ];
    case "locators":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "recommended-built-in-locators", text: "Recommended built-in locators", level: 2 },
        { id: "locate-by-role", text: "Locate by role", level: 3 },
        { id: "locate-by-label", text: "Locate by label", level: 3 },
        { id: "locate-by-placeholder", text: "Locate by placeholder", level: 3 },
        { id: "locate-by-text", text: "Locate by text", level: 3 },
        { id: "filtering-locators", text: "Filtering locators", level: 2 },
      ];
    case "assertions":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "list-of-assertions", text: "List of Web-First assertions", level: 2 },
        { id: "auto-retrying-assertions", text: "Auto-retrying assertions", level: 2 },
        { id: "non-retrying-assertions", text: "Non-retrying assertions", level: 2 },
        { id: "timeouts", text: "Assertion timeouts", level: 2 },
      ];
    case "browsers":
      return [
        { id: "browser-downloads", text: "Managing browser binaries", level: 2 },
        { id: "custom-paths", text: "Custom installation directories", level: 2 },
        { id: "firewall-proxy", text: "Download behind firewall / proxy", level: 2 },
        { id: "hermetic-execution", text: "Hermetic browser execution", level: 2 },
      ];
    case "configuration":
      return [
        { id: "configuration-matrix", text: "Configuration matrix & projects", level: 2 },
        { id: "timeouts", text: "Timeouts & expect limits", level: 2 },
        { id: "web-server", text: "Local web server integration", level: 2 },
        { id: "reporters", text: "Custom & built-in reporters", level: 2 },
      ];
    case "release-notes":
      return [
        { id: "v1-50", text: "Playwright v1.50+ Highlights", level: 2 },
        { id: "new-apis", text: "New APIs & locator enhancements", level: 2 },
        { id: "browser-versions", text: "Updated Browser Versions", level: 2 },
      ];
    case "library":
      return [
        { id: "introduction", text: "Introduction", level: 2 },
        { id: "differences-when-using-library", text: "Differences when using library", level: 2 },
        { id: "library-example", text: "Library Example", level: 3 },
        { id: "test-example", text: "Test Example", level: 3 },
        { id: "key-differences", text: "Key Differences", level: 3 },
        { id: "usage", text: "Usage", level: 2 },
        { id: "first-script", text: "First script", level: 2 },
        { id: "record-scripts", text: "Record scripts", level: 2 },
        { id: "browser-downloads", text: "Browser downloads", level: 2 },
        { id: "typescript-support", text: "TypeScript support", level: 2 },
        { id: "in-javascript", text: "In JavaScript", level: 3 },
        { id: "in-typescript", text: "In TypeScript", level: 3 },
      ];
    default:
      if (EXTENDED_DOCS[docId]) {
        return EXTENDED_DOCS[docId].sections.map((s) => ({
          id: s.id,
          text: s.heading,
          level: s.level || 2,
        }));
      }
      return [];
  }
}

export function DocViewer({ activeDocId, onNavigate, onOpenApi, selectedLanguage = "node" }: DocViewerProps) {
  // Common interactive tabs data
  const packageManagerTabs = [
    { label: "npm", language: "bash", code: "npm init playwright@latest" },
    { label: "yarn", language: "bash", code: "yarn create playwright" },
    { label: "pnpm", language: "bash", code: "pnpm create playwright" },
  ];

  const runTestTabs = [
    { label: "npm", language: "bash", code: "npx playwright test" },
    { label: "yarn", language: "bash", code: "yarn playwright test" },
    { label: "pnpm", language: "bash", code: "pnpm exec playwright test" },
  ];

  const showReportTabs = [
    { label: "npm", language: "bash", code: "npx playwright show-report" },
    { label: "yarn", language: "bash", code: "yarn playwright show-report" },
    { label: "pnpm", language: "bash", code: "pnpm exec playwright show-report" },
  ];

  const uiModeTabs = [
    { label: "npm", language: "bash", code: "npx playwright test --ui" },
    { label: "yarn", language: "bash", code: "yarn playwright test --ui" },
    { label: "pnpm", language: "bash", code: "pnpm exec playwright test --ui" },
  ];

  const updateTabs = [
    {
      label: "npm",
      language: "bash",
      code: "npm install -D @playwright/test@latest\nnpx playwright install --with-deps",
    },
    {
      label: "yarn",
      language: "bash",
      code: "yarn add --dev @playwright/test@latest\nyarn playwright install --with-deps",
    },
    {
      label: "pnpm",
      language: "bash",
      code: "pnpm install --save-dev @playwright/test@latest\npnpm exec playwright install --with-deps",
    },
  ];

  const libraryTabs = [
    {
      label: "TypeScript",
      language: "typescript",
      code: `import { chromium, devices } from 'playwright';
import assert from 'node:assert';

(async () => {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 11']);
  const page = await context.newPage();

  // The actual interesting bit
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
})();`,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: `const assert = require('node:assert');
const { chromium, devices } = require('playwright');

(async () => {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 11']);
  const page = await context.newPage();

  // The actual interesting bit
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
})();`,
    },
  ];

  const testTabs = [
    {
      label: "TypeScript",
      language: "typescript",
      code: `import { expect, test, devices } from '@playwright/test';

test.use(devices['iPhone 11']);

test('should be titled', async ({ page, context }) => {
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  await expect(page).toHaveTitle('Example');
});`,
    },
    {
      label: "JavaScript",
      language: "javascript",
      code: `const { expect, test, devices } = require('@playwright/test');

test.use(devices['iPhone 11']);

test('should be titled', async ({ page, context }) => {
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  await expect(page).toHaveTitle('Example');
});`,
    },
  ];

  const proxyTabs = [
    {
      label: "Bash",
      language: "bash",
      code: `# Manual
HTTPS_PROXY=https://192.0.2.1 npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
HTTPS_PROXY=https://192.0.2.1 npm install`,
    },
    {
      label: "PowerShell",
      language: "powershell",
      code: `# Manual
$Env:HTTPS_PROXY="https://192.0.2.1"
npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
$Env:HTTPS_PROXY="https://192.0.2.1"
npm install`,
    },
    {
      label: "Batch",
      language: "batch",
      code: `# Manual
set HTTPS_PROXY=https://192.0.2.1
npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
set HTTPS_PROXY=https://192.0.2.1
npm install`,
    },
  ];

  const artifactRepoTabs = [
    {
      label: "Bash",
      language: "bash",
      code: `# Manual
PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npm install`,
    },
    {
      label: "PowerShell",
      language: "powershell",
      code: `# Manual
$Env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"
npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
$Env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"
npm install`,
    },
    {
      label: "Batch",
      language: "batch",
      code: `# Manual
set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1
npx playwright install

# Through @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1
npm install`,
    },
  ];

  const skipDownloadTabs = [
    {
      label: "Bash",
      language: "bash",
      code: `# When using @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install`,
    },
    {
      label: "PowerShell",
      language: "powershell",
      code: `# When using @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
$Env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
npm install`,
    },
    {
      label: "Batch",
      language: "batch",
      code: `# When using @playwright/browser-chromium, @playwright/browser-firefox
# and @playwright/browser-webkit helper packages
set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
npm install`,
    },
  ];

  const scrollToAnchor = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Render Based on Active Document
  switch (activeDocId) {
    /* ------------------------------------------------------------- */
    /* 1. INSTALLATION (/docs/intro)                                  */
    /* ------------------------------------------------------------- */
    case "intro":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Getting Started</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Installation</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
                <span className="h-2 w-2 rounded-full bg-pass animate-pulse" />
                Getting Started
              </span>
              <a
                href="https://playwright.dev/docs/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted hover:text-pass transition"
              >
                <span>Original source</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Installation</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm sm:text-base leading-relaxed text-ink/90 mb-3">
              Playwright Test is an end-to-end test framework for modern web apps. It bundles test
              runner, assertions, isolation, parallelization and rich tooling. Playwright supports
              Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or
              headed, with native mobile emulation for Chrome (Android) and Mobile Safari.
            </p>
            <div className="rounded-lg border border-line bg-card/60 p-4 text-xs space-y-1">
              <span className="font-semibold text-ink">You will learn:</span>
              <ul className="list-disc pl-5 space-y-1 text-muted">
                <li>
                  <button
                    onClick={() => scrollToAnchor("installing-playwright")}
                    className="text-pass hover:underline"
                  >
                    How to install Playwright
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToAnchor("whats-installed")}
                    className="text-pass hover:underline"
                  >
                    What&apos;s installed
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToAnchor("running-the-example-test")}
                    className="text-pass hover:underline"
                  >
                    How to run the example test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToAnchor("html-test-reports")}
                    className="text-pass hover:underline"
                  >
                    How to open the HTML test report
                  </button>
                </li>
              </ul>
            </div>
          </section>

          <section id="installing-playwright" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Installing Playwright</h2>
            <p className="text-sm text-ink/90 mb-4">
              Get started by installing Playwright using npm, yarn or pnpm:
            </p>

            <div id="using-npm-yarn-or-pnpm" className="scroll-mt-32 mb-6">
              <DocTabs tabs={packageManagerTabs} />
            </div>

            <p className="text-sm font-semibold text-ink mb-2">When prompted, choose / confirm:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted mb-4">
              <li>TypeScript or JavaScript (default: TypeScript)</li>
              <li>Tests folder name (default: <code className="text-pass font-mono">tests</code>)</li>
              <li>Add a GitHub Actions workflow (recommended for CI)</li>
              <li>Install Playwright browsers (default: yes)</li>
            </ul>

            <div id="using-the-vs-code-extension" className="mt-6 rounded-lg border border-line bg-card/60 p-4 scroll-mt-32">
              <h3 className="text-sm font-bold text-ink mb-1">Using the VS Code Extension</h3>
              <p className="text-xs text-muted">
                You can also create, record, and run tests directly inside Visual Studio Code using the official{" "}
                <span className="font-semibold text-pass">Playwright Test for VSCode</span> extension.
              </p>
            </div>
          </section>

          <section id="whats-installed" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">What&apos;s Installed</h2>
            <p className="text-sm text-ink/90 mb-3">
              Playwright downloads required browser binaries and creates the project scaffold below:
            </p>
            <DocCodeBlock
              code={`playwright.config.ts         # Test configuration
package.json
package-lock.json            # Or yarn.lock / pnpm-lock.yaml
tests/
  example.spec.ts            # Minimal starter test`}
              language="bash"
            />
            <p className="mt-3 text-xs text-muted">
              The <button onClick={() => onNavigate("configuration")} className="text-pass underline">playwright.config.ts</button> centralizes configuration: target browsers, timeouts, retries, projects, reporters and more.
            </p>
          </section>

          <section id="running-the-example-test" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Running the Example Test</h2>
            <p className="text-sm text-ink/90 mb-3">
              By default tests run headless in parallel across Chromium, Firefox and WebKit:
            </p>
            <DocTabs tabs={runTestTabs} />
            <InteractiveRunner />
          </section>

          <section id="html-test-reports" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">HTML Test Reports</h2>
            <p className="text-sm text-ink/90 mb-3">
              After a test run, the HTML Reporter provides a dashboard filterable by the browser, passed, failed, skipped, and flaky tests:
            </p>
            <DocTabs tabs={showReportTabs} />
          </section>

          <section id="running-the-example-test-in-ui-mode" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Running the Example Test in UI Mode</h2>
            <p className="text-sm text-ink/90 mb-3">
              Run tests with UI Mode for watch mode, live step view, and time travel debugging:
            </p>
            <DocTabs tabs={uiModeTabs} />
          </section>

          <section id="updating-playwright" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Updating Playwright</h2>
            <p className="text-sm text-ink/90 mb-3">
              Update Playwright and download new browser binaries and their dependencies:
            </p>
            <DocTabs tabs={updateTabs} />
          </section>

          <section id="system-requirements" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">System requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-muted">
              <li>Node.js: 20.x, 22.x, or later.</li>
              <li>Windows 11+, Windows Server 2019+ or WSL.</li>
              <li>macOS 14 (Sonoma) or later.</li>
              <li>Debian 12/13, Ubuntu 22.04/24.04 (x86-64 or arm64).</li>
            </ul>
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("library")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Library
            </button>
            <button
              onClick={() => onNavigate("writing-tests")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Writing tests <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 2. WRITING TESTS (/docs/writing-tests)                         */
    /* ------------------------------------------------------------- */
    case "writing-tests":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Getting Started</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Writing tests</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass mb-2">
              Writing tests
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Writing tests</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed">
              Playwright tests are designed to be resilient, hermetic, and fast. Tests use{" "}
              <button onClick={() => onNavigate("assertions")} className="text-pass underline">
                Web-First assertions
              </button>{" "}
              that wait until conditions are met before evaluating.
            </p>
          </section>

          <section id="first-test" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">First test</h2>
            <p className="text-sm text-ink/90 mb-3">
              Here is a full example test navigating to a website and verifying its title and links:
            </p>
            <DocTabs
              tabs={[
                {
                  label: "TypeScript",
                  language: "typescript",
                  code: `import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});`,
                },
                {
                  label: "JavaScript",
                  language: "javascript",
                  code: `const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});`,
                },
              ]}
            />
          </section>

          <section id="test-hooks" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Test hooks (beforeEach & afterEach)</h2>
            <p className="text-sm text-ink/90 mb-3">
              You can use <code className="text-pass font-mono text-xs">test.beforeEach</code> and{" "}
              <code className="text-pass font-mono text-xs">test.afterEach</code> to set up repetitive test preconditions:
            </p>
            <DocCodeBlock
              code={`test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});`}
              language="typescript"
            />
          </section>

          <section id="test-fixtures" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Using Test Fixtures</h2>
            <p className="text-sm text-ink/90 mb-2">
              Playwright tests receive built-in fixtures like <code className="text-pass font-mono text-xs">page</code> and{" "}
              <code className="text-pass font-mono text-xs">context</code> automatically with zero teardown boilerplate.
            </p>
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("intro")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Installation
            </button>
            <button
              onClick={() => onNavigate("codegen")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Generating tests <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 3. GENERATING TESTS (/docs/codegen-intro)                     */
    /* ------------------------------------------------------------- */
    case "codegen":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Getting Started</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Generating tests</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass mb-2">
              Test Generator
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Generating tests (Codegen)</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed">
              Playwright comes with Codegen to record your browser interactions and automatically generate readable test scripts using resilient locators.
            </p>
          </section>

          <section id="running-codegen" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Running Codegen</h2>
            <p className="text-sm text-ink/90 mb-3">Run the codegen tool pointing to your target website:</p>
            <DocCodeBlock code="npx playwright codegen demo.playwright.dev/todomvc" language="bash" />
          </section>

          <section id="recording-actions" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Recording user actions</h2>
            <p className="text-sm text-ink/90 mb-2">
              As you click, type, and navigate, Playwright records locators prioritized by user-facing roles (<code className="text-pass font-mono">getByRole</code>, <code className="text-pass font-mono">getByText</code>).
            </p>
          </section>

          <section id="emulating-devices" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Emulating devices & viewports</h2>
            <DocCodeBlock code="npx playwright codegen --device='iPhone 13' wikipedia.org" language="bash" />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("writing-tests")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Writing tests
            </button>
            <button
              onClick={() => onNavigate("running-tests")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Running tests <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 4. RUNNING TESTS (/docs/running-tests)                         */
    /* ------------------------------------------------------------- */
    case "running-tests":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Getting Started</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Running & debugging tests</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Running & debugging tests
            </h1>
          </header>

          <section id="running-tests" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Command line options</h2>
            <DocCodeBlock
              code={`# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run on a specific browser
npx playwright test --project=webkit

# Run specific test file
npx playwright test tests/todo.spec.ts`}
              language="bash"
            />
          </section>

          <section id="debugging-tests" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Debugging with Playwright Inspector</h2>
            <p className="text-sm text-ink/90 mb-3">
              Step through tests line by line with live DOM inspection and locator picker:
            </p>
            <DocCodeBlock code="npx playwright test --debug" language="bash" />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("codegen")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Generating tests
            </button>
            <button
              onClick={() => onNavigate("trace-viewer")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Trace viewer <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 5. TRACE VIEWER (/docs/trace-viewer-intro)                     */
    /* ------------------------------------------------------------- */
    case "trace-viewer":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Getting Started</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Trace viewer</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Trace viewer</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed mb-4">
              Playwright Trace Viewer is a post-mortem GUI tool that lets you explore recorded test runs with full DOM snapshots, action logs, console entries, and network waterfalls.
            </p>
            <DocCodeBlock code="npx playwright show-trace trace.zip" language="bash" />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("running-tests")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Running tests
            </button>
            <button
              onClick={() => onNavigate("accessibility-testing")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Accessibility testing <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 6. ACCESSIBILITY TESTING (/docs/accessibility-testing)        */
    /* ------------------------------------------------------------- */
    case "accessibility-testing":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Accessibility testing</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Accessibility testing
            </h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed mb-4">
              Playwright integrates with Deque&apos;s <code className="text-pass font-mono text-xs">@axe-core/playwright</code> engine to scan websites for WCAG compliance and accessibility violations.
            </p>
            <DocCodeBlock code="npm install @axe-core/playwright -D" language="bash" />
          </section>

          <section id="scanning-entire-page" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Scanning an entire page</h2>
            <DocCodeBlock
              code={`import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('page should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});`}
              language="typescript"
            />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("library")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Library
            </button>
            <button
              onClick={() => onNavigate("locators")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Locators <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 7. LOCATORS (/docs/locators)                                  */
    /* ------------------------------------------------------------- */
    case "locators":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Locators</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Locators</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed mb-4">
              Locators represent a way to find elements on the page at any moment. Playwright automatically waits for elements to be actionable before performing actions.
            </p>
          </section>

          <section id="recommended-built-in-locators" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Recommended built-in locators</h2>
            <div className="space-y-4 text-xs">
              <div className="rounded-lg border border-line bg-card/60 p-3">
                <span className="font-mono font-semibold text-pass">page.getByRole(role, options)</span>
                <p className="text-muted mt-1">Locate by explicit and implicit accessibility attributes.</p>
                <div className="mt-2"><DocCodeBlock code={`await page.getByRole('button', { name: 'Submit' }).click();`} language="typescript" /></div>
              </div>
              <div className="rounded-lg border border-line bg-card/60 p-3">
                <span className="font-mono font-semibold text-pass">page.getByText(text, options)</span>
                <p className="text-muted mt-1">Locate by text content.</p>
                <div className="mt-2"><DocCodeBlock code={`await expect(page.getByText('Welcome back!')).toBeVisible();`} language="typescript" /></div>
              </div>
              <div className="rounded-lg border border-line bg-card/60 p-3">
                <span className="font-mono font-semibold text-pass">page.getByLabel(text, options)</span>
                <p className="text-muted mt-1">Locate a form control by associated label&apos;s text.</p>
                <div className="mt-2"><DocCodeBlock code={`await page.getByLabel('Password').fill('secret');`} language="typescript" /></div>
              </div>
            </div>
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("accessibility-testing")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Accessibility testing
            </button>
            <button
              onClick={() => onNavigate("assertions")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Assertions <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 8. ASSERTIONS (/docs/test-assertions)                         */
    /* ------------------------------------------------------------- */
    case "assertions":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Assertions</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Assertions</h1>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Introduction</h2>
            <p className="text-sm text-ink/90 leading-relaxed mb-4">
              Playwright includes test assertions in the form of <code className="text-pass font-mono text-xs">expect</code> function. Web-First assertions will wait until the expected condition is met, eliminating artificial sleep calls.
            </p>
          </section>

          <section id="list-of-assertions" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">List of Web-First assertions</h2>
            <div className="overflow-x-auto rounded-lg border border-line bg-card/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-line bg-paper font-mono uppercase text-muted">
                    <th className="p-3">Assertion</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  <tr>
                    <td className="p-3 font-mono text-pass">await expect(locator).toBeVisible()</td>
                    <td className="p-3 text-muted">Element is visible on page</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-pass">await expect(locator).toBeChecked()</td>
                    <td className="p-3 text-muted">Checkbox or radio is checked</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-pass">await expect(locator).toHaveText(text)</td>
                    <td className="p-3 text-muted">Element matches text content</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-pass">
                      <button onClick={() => onOpenApi("page-assertions-to-have-title")} className="text-pass underline">
                        await expect(page).toHaveTitle(title)
                      </button>
                    </td>
                    <td className="p-3 text-muted">Page document title matches expected string or regex</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-pass">
                      <button onClick={() => onOpenApi("page-assertions-to-have-screenshot")} className="text-pass underline">
                        await expect(page).toHaveScreenshot()
                      </button>
                    </td>
                    <td className="p-3 text-muted">Pixel-by-pixel visual screenshot comparison</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("locators")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Locators
            </button>
            <button
              onClick={() => onNavigate("browsers")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Browsers <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 9. BROWSERS (/docs/browsers)                                  */
    /* ------------------------------------------------------------- */
    case "browsers":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Browsers</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Browsers & Binaries</h1>
          </header>

          <section id="browser-downloads" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Managing browser binaries</h2>
            <DocCodeBlock code="npx playwright install" language="bash" />
          </section>

          <section id="firewall-proxy" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Download behind firewall / proxy</h2>
            <DocTabs tabs={proxyTabs} />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("assertions")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Assertions
            </button>
            <button
              onClick={() => onNavigate("configuration")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Configuration <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 10. CONFIGURATION (/docs/test-configuration)                  */
    /* ------------------------------------------------------------- */
    case "configuration":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Configuration</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Configuration</h1>
          </header>

          <section id="configuration-matrix" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Configuration matrix & projects</h2>
            <DocCodeBlock
              code={`import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});`}
              language="typescript"
            />
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("browsers")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Browsers
            </button>
            <button
              onClick={() => onNavigate("release-notes")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Release notes <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    /* ------------------------------------------------------------- */
    /* 11. RELEASE NOTES (/docs/release-notes)                       */
    /* ------------------------------------------------------------- */
    case "release-notes":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="text-muted">Release notes</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">v1.50+</span>
          </nav>

          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Release notes</h1>
          </header>

          <section id="v1-50" className="mb-10 scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Playwright v1.50+ Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs text-muted">
              <li>Upgraded Chromium 133, Firefox 134, and WebKit 18.2 engine builds.</li>
              <li>Aria snapshot testing improvements for accessibility regression workflows.</li>
              <li>UI Mode updates: live step inspector, time travel debugging enhancements.</li>
            </ul>
          </section>

          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("configuration")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition"
            >
              <ArrowLeft className="h-4 w-4" /> Configuration
            </button>
            <button
              onClick={() => onNavigate("library")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition"
            >
              Back to Library <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    case "library":
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="flex items-center hover:text-ink transition-colors" aria-label="Home page">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <span className="text-line">/</span>
            <span className="hover:text-ink cursor-default">Guides</span>
            <span className="text-line">/</span>
            <span className="font-medium text-pass">Library</span>
          </nav>

          {/* Main Title Header */}
          <header className="mb-8 border-b border-line/60 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
                <span className="h-2 w-2 rounded-full bg-pass animate-pulse" />
                Playwright Automation Reference
              </div>
              <a
                href="https://playwright.dev/docs/library"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-pass transition"
              >
                <span>Original source</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Library</h1>
          </header>

          {/* Section 1: Introduction */}
          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#introduction" onClick={(e) => scrollToAnchor("introduction", e)} className="hover:text-pass transition">
                Introduction
              </a>
            </h2>
            <p className="mb-3 text-sm sm:text-base leading-relaxed text-ink/90">
              Playwright Library provides unified APIs for launching and interacting with browsers, while
              Playwright Test provides all this plus a fully managed end-to-end Test Runner and
              experience.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-ink/90">
              Under most circumstances, for end-to-end testing, you&apos;ll want to use{" "}
              <code className="rounded bg-paper-deep px-1.5 py-0.5 font-mono text-xs text-pass font-semibold">
                @playwright/test
              </code>{" "}
              (Playwright Test), and not{" "}
              <code className="rounded bg-paper-deep px-1.5 py-0.5 font-mono text-xs text-ink font-semibold">
                playwright
              </code>{" "}
              (Playwright Library) directly. To get started with Playwright Test, follow the{" "}
              <button
                type="button"
                onClick={() => onNavigate("intro")}
                className="text-pass font-medium underline underline-offset-2 hover:opacity-80 cursor-pointer"
              >
                Getting Started Guide
              </button>
              .
            </p>
            <InteractiveRunner />
          </section>

          {/* Section 2: Differences when using library */}
          <section id="differences-when-using-library" className="mb-12 scroll-mt-32">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#differences-when-using-library" onClick={(e) => scrollToAnchor("differences-when-using-library", e)} className="hover:text-pass transition">
                Differences when using library
              </a>
            </h2>

            {/* Library Example */}
            <div id="library-example" className="mb-8 scroll-mt-32">
              <h3 className="text-lg font-semibold text-ink mb-2">
                <a href="#library-example" onClick={(e) => scrollToAnchor("library-example", e)} className="hover:text-pass transition">
                  Library Example
                </a>
              </h3>
              <p className="mb-3 text-sm text-ink/90">
                The following is an example of using the Playwright Library directly to launch Chromium,
                go to a page, and check its title:
              </p>

              <DocTabs tabs={libraryTabs} />

              <p className="text-xs text-muted">
                Run it with{" "}
                <code className="rounded bg-paper-deep px-1.5 py-0.5 font-mono text-xs text-ink">
                  node my-script.js
                </code>
                .
              </p>
            </div>

            {/* Test Example */}
            <div id="test-example" className="mb-8 scroll-mt-32">
              <h3 className="text-lg font-semibold text-ink mb-2">
                <a href="#test-example" onClick={(e) => scrollToAnchor("test-example", e)} className="hover:text-pass transition">
                  Test Example
                </a>
              </h3>
              <p className="mb-3 text-sm text-ink/90">
                A test to achieve similar behavior, would look like:
              </p>

              <DocTabs tabs={testTabs} />

              <p className="text-xs text-muted">
                Run it with{" "}
                <code className="rounded bg-paper-deep px-1.5 py-0.5 font-mono text-xs text-ink">
                  npx playwright test
                </code>
                .
              </p>
            </div>

            {/* Key Differences Table */}
            <div id="key-differences" className="scroll-mt-32">
              <h3 className="text-lg font-semibold text-ink mb-2">
                <a href="#key-differences" onClick={(e) => scrollToAnchor("key-differences", e)} className="hover:text-pass transition">
                  Key Differences
                </a>
              </h3>
              <p className="mb-4 text-sm text-ink/90">The key differences to note are as follows:</p>

              <ComparisonTable onOpenApi={onOpenApi} />

              <p className="mt-6 mb-3 text-sm font-medium text-ink">
                In addition to the above, Playwright Test, as a full-featured Test Runner, includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink/90">
                <li>
                  <strong>Configuration Matrix and Projects</strong>: In the above example, in the
                  Playwright Library version, if we wanted to run with a different device or browser, we&apos;d
                  have to modify the script and plumb the information through. With Playwright Test, we
                  can just specify the{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate("configuration")}
                    className="text-pass underline cursor-pointer"
                  >
                    matrix of configurations
                  </button>{" "}
                  in one place, and it will run the one test under each of these configurations.
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("configuration")}
                    className="text-pass hover:underline cursor-pointer"
                  >
                    Parallelization
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("assertions")}
                    className="text-pass hover:underline cursor-pointer"
                  >
                    Web-First Assertions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("configuration")}
                    className="text-pass hover:underline cursor-pointer"
                  >
                    Reporting
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("configuration")}
                    className="text-pass hover:underline cursor-pointer"
                  >
                    Retries
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("trace-viewer")}
                    className="text-pass hover:underline cursor-pointer"
                  >
                    Easily Enabled Tracing
                  </button>
                </li>
                <li className="text-muted">and more…</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Usage */}
          <section id="usage" className="mb-12 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#usage" onClick={(e) => scrollToAnchor("usage", e)} className="hover:text-pass transition">
                Usage
              </a>
            </h2>
            <p className="mb-3 text-sm text-ink/90">
              Use npm or Yarn to install Playwright library in your Node.js project. See{" "}
              <button
                type="button"
                onClick={() => onNavigate("intro", "system-requirements")}
                className="text-pass underline cursor-pointer"
              >
                system requirements
              </button>
              .
            </p>

            <DocCodeBlock code="npm i -D playwright" language="bash" />

            <p className="mt-4 mb-2 text-sm text-ink/90">
              You will also need to install browsers - either manually or by adding a package that will
              do it for you automatically.
            </p>

            <DocCodeBlock
              code={`# Download the Chromium, Firefox and WebKit browser\nnpx playwright install chromium firefox webkit\n\n# Alternatively, add packages that will download a browser upon npm install\nnpm i -D @playwright/browser-chromium @playwright/browser-firefox @playwright/browser-webkit`}
              language="bash"
            />

            <p className="mt-3 text-xs text-muted">
              See{" "}
              <button
                type="button"
                onClick={() => scrollToAnchor("browser-downloads")}
                className="text-pass underline cursor-pointer"
              >
                managing browsers
              </button>{" "}
              for more options.
            </p>

            <p className="mt-5 mb-2 text-sm text-ink/90">
              Once installed, you can import Playwright in a Node.js script, and launch any of the 3
              browsers (
              <code className="text-pass font-mono text-xs">chromium</code>,{" "}
              <code className="text-pass font-mono text-xs">firefox</code> and{" "}
              <code className="text-pass font-mono text-xs">webkit</code>).
            </p>

            <DocCodeBlock
              code={`const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();`}
              language="javascript"
            />

            <p className="mt-4 mb-2 text-sm text-ink/90">
              Playwright APIs are asynchronous and return Promise objects. Our code examples use the async/await pattern to ease readability. The code is wrapped in an unnamed async arrow function which is
              invoking itself.
            </p>

            <DocCodeBlock
              code={`(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself`}
              language="javascript"
            />
          </section>

          {/* Section 4: First script */}
          <section id="first-script" className="mb-12 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#first-script" onClick={(e) => scrollToAnchor("first-script", e)} className="hover:text-pass transition">
                First script
              </a>
            </h2>
            <p className="mb-3 text-sm text-ink/90">
              In our first script, we will navigate to{" "}
              <code className="font-mono text-xs bg-paper-deep px-1 rounded">https://playwright.dev/</code>{" "}
              and take a screenshot in WebKit.
            </p>

            <DocCodeBlock
              code={`const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('https://playwright.dev/');\n  await page.screenshot({ path: \`example.png\` });\n  await browser.close();\n})();`}
              language="javascript"
            />

            <p className="mt-4 mb-2 text-sm text-ink/90">
              By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the{" "}
              <code className="bg-paper-deep px-1 rounded font-mono text-xs">headless: false</code> flag
              while launching the browser. You can also use{" "}
              <code className="bg-paper-deep px-1 rounded font-mono text-xs">slowMo</code> to slow down
              execution. Learn more in the debugging tools{" "}
              <button
                type="button"
                onClick={() => onNavigate("running-tests", "debugging-tests")}
                className="text-pass underline cursor-pointer"
              >
                section
              </button>
              .
            </p>

            <DocCodeBlock
              code={`firefox.launch({ headless: false, slowMo: 50 });`}
              language="javascript"
            />
          </section>

          {/* Section 5: Record scripts */}
          <section id="record-scripts" className="mb-12 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#record-scripts" onClick={(e) => scrollToAnchor("record-scripts", e)} className="hover:text-pass transition">
                Record scripts
              </a>
            </h2>
            <p className="mb-3 text-sm text-ink/90">
              <button
                type="button"
                onClick={() => onNavigate("codegen")}
                className="text-pass underline cursor-pointer font-medium"
              >
                Command line tools
              </button>{" "}
              can be used to record user interactions and generate JavaScript code.
            </p>

            <DocCodeBlock code="npx playwright codegen wikipedia.org" language="bash" />
          </section>

          {/* Section 6: Browser downloads */}
          <section id="browser-downloads" className="mb-12 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#browser-downloads" onClick={(e) => scrollToAnchor("browser-downloads", e)} className="hover:text-pass transition">
                Browser downloads
              </a>
            </h2>
            <p className="mb-3 text-sm text-ink/90">To download Playwright browsers run:</p>

            <DocCodeBlock code={`# Explicitly download browsers\nnpx playwright install`} language="bash" />

            <p className="mt-4 mb-2 text-sm text-ink/90">
              Alternatively, you can add{" "}
              <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-chromium</code>,{" "}
              <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-firefox</code>{" "}
              and{" "}
              <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-webkit</code>{" "}
              packages to automatically download the respective browser during the package installation.
            </p>

            <DocCodeBlock
              code={`# Use a helper package that downloads a browser on npm install\nnpm install @playwright/browser-chromium`}
              language="bash"
            />

            {/* Sub-item: Download behind a firewall or a proxy */}
            <div className="mt-6 rounded-lg border border-line bg-card/60 p-4">
              <h4 className="text-sm font-semibold text-ink mb-1">Download behind a firewall or a proxy</h4>
              <p className="text-xs text-muted mb-3">
                Pass <code className="text-pass font-mono">HTTPS_PROXY</code> environment variable to download through a proxy.
              </p>
              <DocTabs tabs={proxyTabs} />
            </div>

            {/* Sub-item: Download from artifact repository */}
            <div className="mt-6 rounded-lg border border-line bg-card/60 p-4">
              <h4 className="text-sm font-semibold text-ink mb-1">Download from artifact repository</h4>
              <p className="text-xs text-muted mb-3">
                By default, Playwright downloads browsers from Microsoft&apos;s CDN. Pass{" "}
                <code className="text-pass font-mono">PLAYWRIGHT_DOWNLOAD_HOST</code> environment variable
                to download from an internal artifacts repository instead.
              </p>
              <DocTabs tabs={artifactRepoTabs} />
            </div>

            {/* Sub-item: Skip browser download */}
            <div className="mt-6 rounded-lg border border-line bg-card/60 p-4">
              <h4 className="text-sm font-semibold text-ink mb-1">Skip browser download</h4>
              <p className="text-xs text-muted mb-3">
                In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately. This can be done by setting{" "}
                <code className="text-pass font-mono">PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD</code> variable before installing packages.
              </p>
              <DocTabs tabs={skipDownloadTabs} />
            </div>
          </section>

          {/* Section 7: TypeScript support */}
          <section id="typescript-support" className="mb-12 scroll-mt-32 border-t border-line/60 pt-8">
            <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
              <a href="#typescript-support" onClick={(e) => scrollToAnchor("typescript-support", e)} className="hover:text-pass transition">
                TypeScript support
              </a>
            </h2>
            <p className="mb-4 text-sm text-ink/90">
              Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience.
            </p>

            {/* In JavaScript */}
            <div id="in-javascript" className="mb-6 scroll-mt-32">
              <h3 className="text-lg font-semibold text-ink mb-2">
                <a href="#in-javascript" onClick={(e) => scrollToAnchor("in-javascript", e)} className="hover:text-pass transition">
                  In JavaScript
                </a>
              </h3>
              <p className="mb-2 text-sm text-ink/90">
                Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm.
              </p>
              <DocCodeBlock code={`// @ts-check\n// ...`} language="javascript" />

              <p className="mt-4 mb-2 text-sm text-ink/90">
                Alternatively, you can use JSDoc to set types for variables.
              </p>
              <DocCodeBlock code={`/** @type {import('playwright').Page} */\nlet page;`} language="javascript" />
            </div>

            {/* In TypeScript */}
            <div id="in-typescript" className="scroll-mt-32">
              <h3 className="text-lg font-semibold text-ink mb-2">
                <a href="#in-typescript" onClick={(e) => scrollToAnchor("in-typescript", e)} className="hover:text-pass transition">
                  In TypeScript
                </a>
              </h3>
              <p className="mb-2 text-sm text-ink/90">
                TypeScript support will work out-of-the-box. Types can also be imported explicitly.
              </p>
              <DocCodeBlock code={`let page: import('playwright').Page;`} language="typescript" />
            </div>
          </section>

          {/* Pagination Footer */}
          <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={() => onNavigate("intro")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Getting Started
            </button>
            <button
              onClick={() => onNavigate("accessibility-testing")}
              className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition cursor-pointer"
            >
              Accessibility testing <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </article>
      );

    default: {
      const extDoc = EXTENDED_DOCS[activeDocId];
      if (extDoc) {
        // Flatten all items from DOC_CATEGORIES to find adjacent pages
        const allDocItems = DOC_CATEGORIES.flatMap((c) => c.items);
        const currentIndex = allDocItems.findIndex((item) => item.id === activeDocId);
        const prevDoc = currentIndex > 0 ? allDocItems[currentIndex - 1] : null;
        const nextDoc =
          currentIndex >= 0 && currentIndex < allDocItems.length - 1
            ? allDocItems[currentIndex + 1]
            : null;

        const langLabels: Record<string, string> = {
          node: "Node.js",
          python: "Python",
          java: "Java",
          dotnet: ".NET",
        };

        return (
          <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
              <Link href="/" className="flex items-center hover:text-ink transition-colors" aria-label="Home page">
                <Home className="h-3.5 w-3.5" />
              </Link>
              <span className="text-line">/</span>
              <span className="text-muted">{extDoc.category}</span>
              <span className="text-line">/</span>
              <span className="font-medium text-pass">{extDoc.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8 border-b border-line/60 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
                    <span className="h-2 w-2 rounded-full bg-pass animate-pulse" />
                    {extDoc.category}
                  </span>
                  {selectedLanguage && selectedLanguage !== "node" && (
                    <span className="inline-flex items-center rounded-md border border-line bg-paper-deep px-2 py-0.5 text-[11px] font-mono text-muted">
                      {langLabels[selectedLanguage] || selectedLanguage}
                    </span>
                  )}
                </div>
                {extDoc.sourceUrl && (
                  <a
                    href={extDoc.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted hover:text-pass transition"
                  >
                    <span>Original source</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{extDoc.title}</h1>
              {extDoc.description && (
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {extDoc.description}
                </p>
              )}
            </header>

            {/* Sections */}
            {extDoc.sections.map((sec) => {
              const isH3 = sec.level === 3;
              return (
                <section key={sec.id} id={sec.id} className="mb-10 scroll-mt-32">
                  {isH3 ? (
                    <h3 className="group flex items-center text-lg font-semibold text-ink sm:text-xl mb-3">
                      <a
                        href={`#${sec.id}`}
                        onClick={(e) => scrollToAnchor(sec.id, e)}
                        className="hover:text-pass transition"
                      >
                        {sec.heading}
                      </a>
                    </h3>
                  ) : (
                    <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-3">
                      <a
                        href={`#${sec.id}`}
                        onClick={(e) => scrollToAnchor(sec.id, e)}
                        className="hover:text-pass transition"
                      >
                        {sec.heading}
                      </a>
                    </h2>
                  )}

                  {/* Paragraphs */}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-ink/90 mb-3">
                      {formatDocText(p)}
                    </p>
                  ))}

                  {/* Code Blocks */}
                  {sec.codeBlocks &&
                    sec.codeBlocks.map((cb, bIdx) => (
                      <div key={bIdx} className="my-4">
                        {cb.title && (
                          <div className="mb-1.5 text-xs font-mono font-medium text-muted">
                            {cb.title}
                          </div>
                        )}
                        {cb.tabs && cb.tabs.length > 0 ? (
                          <DocTabs tabs={cb.tabs} />
                        ) : cb.code ? (
                          <DocCodeBlock code={cb.code} language={cb.language || "typescript"} />
                        ) : null}
                      </div>
                    ))}

                  {/* Table */}
                  {sec.table && (
                    <div className="my-6 overflow-x-auto rounded-lg border border-line bg-card/60 shadow-2xs">
                      <table className="w-full border-collapse text-left text-xs">
                        <thead>
                          <tr className="border-b border-line bg-paper-deep/60">
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-2.5 font-semibold text-ink">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line/40">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-paper/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2.5 text-ink/90 leading-relaxed">
                                  {formatDocText(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Callouts */}
                  {sec.callouts &&
                    sec.callouts.map((callout, cIdx) => {
                      const isWarn = callout.type === "warning";
                      const isTip = callout.type === "tip";
                      return (
                        <div
                          key={cIdx}
                          className={`my-4 rounded-lg border p-4 text-xs transition-colors ${
                            isWarn
                              ? "border-amber-500/30 bg-amber-500/5 text-ink"
                              : isTip
                              ? "border-pass/30 bg-pass/5 text-ink"
                              : "border-blue-500/30 bg-blue-500/5 text-ink"
                          }`}
                        >
                          <div className="font-semibold mb-1 flex items-center gap-1.5">
                            {isWarn ? (
                              <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                            ) : isTip ? (
                              <Sparkles className="h-3.5 w-3.5 text-pass" />
                            ) : (
                              <Info className="h-3.5 w-3.5 text-blue-500" />
                            )}
                            <span className="capitalize">{callout.title || callout.type}</span>
                          </div>
                          <p className="leading-relaxed text-ink/90">{formatDocText(callout.text)}</p>
                        </div>
                      );
                    })}
                </section>
              );
            })}

            {/* Pagination Footer */}
            <nav
              aria-label="Docs pagination"
              className="mt-16 flex items-center justify-between border-t border-line pt-6"
            >
              {prevDoc ? (
                <button
                  type="button"
                  onClick={() => onNavigate(prevDoc.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-pass transition cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" /> {prevDoc.text}
                </button>
              ) : (
                <div />
              )}
              {nextDoc ? (
                <button
                  type="button"
                  onClick={() => onNavigate(nextDoc.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-pass hover:opacity-80 transition cursor-pointer"
                >
                  {nextDoc.text} <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div />
              )}
            </nav>
          </article>
        );
      }

      // Fallback
      return (
        <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
          <header className="mb-8 border-b border-line/60 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Documentation</h1>
            <p className="mt-2 text-sm text-muted">
              Select any topic from the sidebar index to view its complete guide.
            </p>
          </header>
          <div className="rounded-lg border border-line bg-card/60 p-6 text-center">
            <p className="text-sm text-ink mb-4">Jump directly into the primary guide:</p>
            <button
              type="button"
              onClick={() => onNavigate("library")}
              className="rounded-md bg-pass/10 px-4 py-2 text-xs font-semibold text-pass hover:bg-pass/20 transition cursor-pointer"
            >
              Playwright Library Guide
            </button>
          </div>
        </article>
      );
    }
  }
}

