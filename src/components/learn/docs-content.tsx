"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Home } from "lucide-react";
import { DocTabs } from "./doc-tabs";
import { DocCodeBlock } from "./doc-code-block";
import { ComparisonTable } from "./comparison-table";

export function DocsContent() {
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

  return (
    <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
        <Link
          href="/"
          className="flex items-center hover:text-ink transition-colors"
          aria-label="Home page"
        >
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
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Library
        </h1>
      </header>

      {/* Section 1: Introduction */}
      <section id="introduction" className="mb-12 scroll-mt-24">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#introduction" className="hover:text-pass transition">
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
          <a
            href="https://playwright.dev/docs/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass font-medium underline underline-offset-2 hover:opacity-80"
          >
            Getting Started Guide
          </a>
          .
        </p>
      </section>

      {/* Section 2: Differences when using library */}
      <section id="differences-when-using-library" className="mb-12 scroll-mt-24">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#differences-when-using-library" className="hover:text-pass transition">
            Differences when using library
          </a>
        </h2>

        {/* Library Example */}
        <div id="library-example" className="mb-8 scroll-mt-24">
          <h3 className="text-lg font-semibold text-ink mb-2">
            <a href="#library-example" className="hover:text-pass transition">
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
        <div id="test-example" className="mb-8 scroll-mt-24">
          <h3 className="text-lg font-semibold text-ink mb-2">
            <a href="#test-example" className="hover:text-pass transition">
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

        {/* Key Differences */}
        <div id="key-differences" className="scroll-mt-24">
          <h3 className="text-lg font-semibold text-ink mb-2">
            <a href="#key-differences" className="hover:text-pass transition">
              Key Differences
            </a>
          </h3>
          <p className="mb-4 text-sm text-ink/90">
            The key differences to note are as follows:
          </p>

          <ComparisonTable />

          <p className="mt-6 mb-3 text-sm font-medium text-ink">
            In addition to the above, Playwright Test, as a full-featured Test Runner, includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-ink/90">
            <li>
              <strong>Configuration Matrix and Projects</strong>: In the above example, in the
              Playwright Library version, if we wanted to run with a different device or browser, we&apos;d
              have to modify the script and plumb the information through. With Playwright Test, we
              can just specify the{" "}
              <a
                href="https://playwright.dev/docs/test-configuration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass underline"
              >
                matrix of configurations
              </a>{" "}
              in one place, and it will run the one test under each of these configurations.
            </li>
            <li>
              <a
                href="https://playwright.dev/docs/test-parallel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass hover:underline"
              >
                Parallelization
              </a>
            </li>
            <li>
              <a
                href="https://playwright.dev/docs/test-assertions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass hover:underline"
              >
                Web-First Assertions
              </a>
            </li>
            <li>
              <a
                href="https://playwright.dev/docs/test-reporters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass hover:underline"
              >
                Reporting
              </a>
            </li>
            <li>
              <a
                href="https://playwright.dev/docs/test-retries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass hover:underline"
              >
                Retries
              </a>
            </li>
            <li>
              <a
                href="https://playwright.dev/docs/trace-viewer-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pass hover:underline"
              >
                Easily Enabled Tracing
              </a>
            </li>
            <li className="text-muted">and more…</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Usage */}
      <section id="usage" className="mb-12 scroll-mt-24 border-t border-line/60 pt-8">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#usage" className="hover:text-pass transition">
            Usage
          </a>
        </h2>
        <p className="mb-3 text-sm text-ink/90">
          Use npm or Yarn to install Playwright library in your Node.js project. See{" "}
          <a
            href="https://playwright.dev/docs/intro#system-requirements"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass underline"
          >
            system requirements
          </a>
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
          <a
            href="https://playwright.dev/docs/browsers#managing-browser-binaries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass underline"
          >
            managing browsers
          </a>{" "}
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
          Playwright APIs are asynchronous and return Promise objects. Our code examples use{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass underline"
          >
            the async/await pattern
          </a>{" "}
          to ease readability. The code is wrapped in an unnamed async arrow function which is
          invoking itself.
        </p>

        <DocCodeBlock
          code={`(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself`}
          language="javascript"
        />
      </section>

      {/* Section 4: First script */}
      <section id="first-script" className="mb-12 scroll-mt-24 border-t border-line/60 pt-8">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#first-script" className="hover:text-pass transition">
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
          <a
            href="https://playwright.dev/docs/debug"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass underline"
          >
            section
          </a>
          .
        </p>

        <DocCodeBlock
          code={`firefox.launch({ headless: false, slowMo: 50 });`}
          language="javascript"
        />
      </section>

      {/* Section 5: Record scripts */}
      <section id="record-scripts" className="mb-12 scroll-mt-24 border-t border-line/60 pt-8">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#record-scripts" className="hover:text-pass transition">
            Record scripts
          </a>
        </h2>
        <p className="mb-3 text-sm text-ink/90">
          <a
            href="https://playwright.dev/docs/test-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pass underline"
          >
            Command line tools
          </a>{" "}
          can be used to record user interactions and generate JavaScript code.
        </p>

        <DocCodeBlock code="npx playwright codegen wikipedia.org" language="bash" />
      </section>

      {/* Section 6: Browser downloads */}
      <section id="browser-downloads" className="mb-12 scroll-mt-24 border-t border-line/60 pt-8">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#browser-downloads" className="hover:text-pass transition">
            Browser downloads
          </a>
        </h2>
        <p className="mb-3 text-sm text-ink/90">To download Playwright browsers run:</p>

        <DocCodeBlock
          code={`# Explicitly download browsers\nnpx playwright install`}
          language="bash"
        />

        <p className="mt-4 mb-2 text-sm text-ink/90">
          Alternatively, you can add{" "}
          <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-chromium</code>,{" "}
          <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-firefox</code>{" "}
          and{" "}
          <code className="font-mono text-xs bg-paper-deep px-1 rounded">@playwright/browser-webkit</code>{" "}
          packages to automatically download the respective browser during the package
          installation.
        </p>

        <DocCodeBlock
          code={`# Use a helper package that downloads a browser on npm install\nnpm install @playwright/browser-chromium`}
          language="bash"
        />

        {/* Sub-item: Download behind a firewall or a proxy */}
        <div className="mt-6 rounded-lg border border-line bg-card/60 p-4">
          <h4 className="text-sm font-semibold text-ink mb-1">
            Download behind a firewall or a proxy
          </h4>
          <p className="text-xs text-muted mb-3">
            Pass <code className="text-pass font-mono">HTTPS_PROXY</code> environment variable to
            download through a proxy.
          </p>
          <DocTabs tabs={proxyTabs} />
        </div>

        {/* Sub-item: Download from artifact repository */}
        <div className="mt-6 rounded-lg border border-line bg-card/60 p-4">
          <h4 className="text-sm font-semibold text-ink mb-1">
            Download from artifact repository
          </h4>
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
            In certain cases, it is desired to avoid browser downloads altogether because browser
            binaries are managed separately. This can be done by setting{" "}
            <code className="text-pass font-mono">PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD</code> variable
            before installing packages.
          </p>
          <DocTabs tabs={skipDownloadTabs} />
        </div>
      </section>

      {/* Section 7: TypeScript support */}
      <section id="typescript-support" className="mb-12 scroll-mt-24 border-t border-line/60 pt-8">
        <h2 className="group flex items-center text-xl font-bold text-ink sm:text-2xl mb-4">
          <a href="#typescript-support" className="hover:text-pass transition">
            TypeScript support
          </a>
        </h2>
        <p className="mb-4 text-sm text-ink/90">
          Playwright includes built-in support for TypeScript. Type definitions will be imported
          automatically. It is recommended to use type-checking to improve the IDE experience.
        </p>

        {/* In JavaScript */}
        <div id="in-javascript" className="mb-6 scroll-mt-24">
          <h3 className="text-lg font-semibold text-ink mb-2">
            <a href="#in-javascript" className="hover:text-pass transition">
              In JavaScript
            </a>
          </h3>
          <p className="mb-2 text-sm text-ink/90">
            Add the following to the top of your JavaScript file to get type-checking in VS Code or
            WebStorm.
          </p>
          <DocCodeBlock code={`// @ts-check\n// ...`} language="javascript" />

          <p className="mt-4 mb-2 text-sm text-ink/90">
            Alternatively, you can use JSDoc to set types for variables.
          </p>
          <DocCodeBlock
            code={`/** @type {import('playwright').Page} */\nlet page;`}
            language="javascript"
          />
        </div>

        {/* In TypeScript */}
        <div id="in-typescript" className="scroll-mt-24">
          <h3 className="text-lg font-semibold text-ink mb-2">
            <a href="#in-typescript" className="hover:text-pass transition">
              In TypeScript
            </a>
          </h3>
          <p className="mb-2 text-sm text-ink/90">
            TypeScript support will work out-of-the-box. Types can also be imported explicitly.
          </p>
          <DocCodeBlock
            code={`let page: import('playwright').Page;`}
            language="typescript"
          />
        </div>
      </section>

      {/* Pagination Footer */}
      <nav aria-label="Docs pagination" className="mt-16 flex items-center justify-between border-t border-line pt-6">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider text-muted">Previous</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-pass cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> Guides
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[11px] uppercase tracking-wider text-muted">Next</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-pass cursor-pointer">
            Accessibility testing <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </nav>
    </article>
  );
}

