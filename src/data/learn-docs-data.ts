export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export interface DocItem {
  id: string;
  text: string;
  badge?: string;
}

export interface DocCategory {
  title: string;
  id?: string;
  isDirectLink?: boolean;
  defaultOpen?: boolean;
  items: DocItem[];
}

export interface ApiDoc {
  id: string;
  name: string;
  parentClass: string;
  signature: string;
  description: string;
  parameters: { name: string; type: string; description: string }[];
  returns: string;
  codeExample: string;
}

export const DOC_CATEGORIES: DocCategory[] = [
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "intro", text: "Installation" },
      { id: "writing-tests", text: "Writing tests" },
      { id: "codegen", text: "Generating tests" },
      { id: "running-tests", text: "Running and debugging tests" },
      { id: "trace-viewer", text: "Trace viewer" },
      { id: "ci-intro", text: "Setting up CI" },
      { id: "vscode", text: "VS Code" },
    ],
  },
  {
    title: "Release notes",
    id: "release-notes",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "release-notes", text: "Release notes" }],
  },
  {
    title: "Canary releases",
    id: "canary-releases",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "canary-releases", text: "Canary releases" }],
  },
  {
    title: "Playwright Test",
    defaultOpen: false,
    items: [
      { id: "test-agents", text: "Agents" },
      { id: "test-annotations", text: "Annotations" },
      { id: "test-cli", text: "Command line" },
      { id: "test-configuration", text: "Configuration" },
      { id: "test-use-options", text: "Configuration (use)" },
      { id: "emulation", text: "Emulation" },
      { id: "test-fixtures", text: "Fixtures" },
      { id: "test-global-setup-teardown", text: "Global setup and teardown" },
      { id: "test-parallel", text: "Parallelism" },
      { id: "test-parameterize", text: "Parameterize tests" },
      { id: "test-projects", text: "Projects" },
      { id: "test-reporters", text: "Reporters" },
      { id: "test-retries", text: "Retries" },
      { id: "test-sharding", text: "Sharding" },
      { id: "test-timeouts", text: "Timeouts" },
      { id: "test-typescript", text: "TypeScript" },
      { id: "test-ui-mode", text: "UI Mode" },
      { id: "test-webserver", text: "Web server" },
    ],
  },
  {
    title: "Guides",
    defaultOpen: true,
    items: [
      { id: "library", text: "Library", badge: "Primary" },
      { id: "accessibility-testing", text: "Accessibility testing" },
      { id: "input", text: "Actions" },
      { id: "assertions", text: "Assertions" },
      { id: "api-testing", text: "API testing" },
      { id: "auth", text: "Authentication" },
      { id: "actionability", text: "Auto-waiting" },
      { id: "best-practices", text: "Best Practices" },
      { id: "browsers", text: "Browsers" },
      { id: "chrome-extensions", text: "Chrome extensions" },
      { id: "clock", text: "Clock" },
      { id: "test-components", text: "Component testing" },
      { id: "debug", text: "Debugging Tests" },
      { id: "dialogs", text: "Dialogs" },
      { id: "downloads", text: "Downloads" },
      { id: "evaluating", text: "Evaluating JavaScript" },
      { id: "events", text: "Events" },
      { id: "extensibility", text: "Extensibility" },
      { id: "frames", text: "Frames" },
      { id: "handles", text: "Handles" },
      { id: "browser-contexts", text: "Isolation" },
      { id: "locators", text: "Locators" },
      { id: "mock", text: "Mock APIs" },
      { id: "mock-browser-apis", text: "Mock browser APIs" },
      { id: "navigations", text: "Navigations" },
      { id: "network", text: "Network" },
      { id: "other-locators", text: "Other locators" },
      { id: "pages", text: "Pages" },
      { id: "pom", text: "Page object models" },
      { id: "screenshots", text: "Screenshots" },
      { id: "service-workers", text: "Service Workers" },
      { id: "aria-snapshots", text: "Snapshot testing" },
      { id: "codegen-guide", text: "Test generator" },
      { id: "touch-events", text: "Touch events (legacy)" },
      { id: "trace-viewer-guide", text: "Trace viewer" },
      { id: "videos", text: "Videos" },
      { id: "test-snapshots", text: "Visual comparisons" },
      { id: "webview2", text: "WebView2" },
    ],
  },
  {
    title: "Migration",
    defaultOpen: false,
    items: [
      { id: "protractor", text: "Migrating from Protractor" },
      { id: "puppeteer", text: "Migrating from Puppeteer" },
      { id: "testing-library", text: "Migrating from Testing Library" },
    ],
  },
  {
    title: "Integrations",
    defaultOpen: false,
    items: [
      { id: "docker", text: "Docker" },
      { id: "ci", text: "Continuous Integration" },
      { id: "selenium-grid", text: "Selenium Grid (experimental)" },
    ],
  },
  {
    title: "Supported languages",
    id: "languages",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "languages", text: "Supported languages" }],
  },
];

export const API_DOCS: Record<string, ApiDoc> = {
  "browser-type-launch": {
    id: "browser-type-launch",
    name: "browserType.launch()",
    parentClass: "BrowserType",
    signature: "browserType.launch(options?: LaunchOptions): Promise<Browser>",
    description:
      "Launches a browser instance (Chromium, Firefox, or WebKit). Returns a Promise which resolves to a Browser instance.",
    parameters: [
      { name: "headless", type: "boolean", description: "Whether to run browser in headless mode. Defaults to true." },
      { name: "slowMo", type: "number", description: "Slows down Playwright operations by the specified amount of milliseconds. Useful for debugging." },
      { name: "args", type: "string[]", description: "Additional arguments to pass to the browser instance." },
      { name: "channel", type: "string", description: "Browser distribution channel, e.g. 'chrome', 'msedge'." },
      { name: "devtools", type: "boolean", description: "Whether to auto-open DevTools panel for each tab." },
    ],
    returns: "Promise<Browser>",
    codeExample: `import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: false,
  slowMo: 50
});`,
  },
  "browser-new-context": {
    id: "browser-new-context",
    name: "browser.newContext()",
    parentClass: "Browser",
    signature: "browser.newContext(options?: BrowserContextOptions): Promise<BrowserContext>",
    description:
      "Creates a new browser context. Contexts are hermetic isolated sessions (like an incognito profile) with their own cookies, local storage, and cache.",
    parameters: [
      { name: "viewport", type: "{ width: number, height: number }", description: "Sets a consistent viewport size for all pages in this context." },
      { name: "userAgent", type: "string", description: "Custom User Agent to be used in this context." },
      { name: "locale", type: "string", description: "Specify user locale, for example 'en-GB' or 'fr-FR'." },
      { name: "recordVideo", type: "{ dir: string, size?: { width, height } }", description: "Enables video recording for all pages in the context." },
      { name: "storageState", type: "string | StorageState", description: "Populates context with stored cookies and local storage items (for saved login state)." },
    ],
    returns: "Promise<BrowserContext>",
    codeExample: `import { chromium, devices } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices['iPhone 11'],
  locale: 'en-US'
});`,
  },
  "browser-context-new-page": {
    id: "browser-context-new-page",
    name: "browserContext.newPage()",
    parentClass: "BrowserContext",
    signature: "browserContext.newPage(): Promise<Page>",
    description:
      "Creates a new page (tab) in the browser context. All navigation and DOM interactions happen through this page instance.",
    parameters: [],
    returns: "Promise<Page>",
    codeExample: `const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://playwright.dev');`,
  },
  "page-assertions-to-have-title": {
    id: "page-assertions-to-have-title",
    name: "expect(page).toHaveTitle()",
    parentClass: "PageAssertions",
    signature: "expect(page).toHaveTitle(titleOrRegExp: string | RegExp, options?: { timeout?: number }): Promise<void>",
    description:
      "Web-First assertion that auto-retries and waits for the page to have the specified document title.",
    parameters: [
      { name: "titleOrRegExp", type: "string | RegExp", description: "Expected title or RegExp pattern to match against document.title." },
      { name: "timeout", type: "number", description: "Max time to wait for the condition to be met in milliseconds. Defaults to 5000ms." },
    ],
    returns: "Promise<void>",
    codeExample: `import { test, expect } from '@playwright/test';

test('verify home title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Fast and reliable/);
});`,
  },
  "page-assertions-to-have-screenshot": {
    id: "page-assertions-to-have-screenshot",
    name: "expect(page).toHaveScreenshot()",
    parentClass: "PageAssertions",
    signature: "expect(page).toHaveScreenshot(name?: string, options?: ScreenshotComparisonOptions): Promise<void>",
    description:
      "Compares page visual snapshot against an expected baseline screenshot. Automatically captures, diffs, and flags pixel regressions.",
    parameters: [
      { name: "name", type: "string", description: "Snapshot filename. If omitted, inferred from the test name." },
      { name: "maxDiffPixelRatio", type: "number", description: "Acceptable diff ratio between 0 and 1." },
      { name: "animations", type: "'disabled' | 'allow'", description: "Whether to freeze CSS animations. Defaults to 'disabled'." },
    ],
    returns: "Promise<void>",
    codeExample: `await expect(page).toHaveScreenshot('landing.png', {
  maxDiffPixelRatio: 0.05
});`,
  },
  "browser-context-close": {
    id: "browser-context-close",
    name: "browserContext.close()",
    parentClass: "BrowserContext",
    signature: "browserContext.close(): Promise<void>",
    description:
      "Closes the browser context and all its pages. Cleans up temp storage, cookies, and recorded video files.",
    parameters: [],
    returns: "Promise<void>",
    codeExample: `await context.close();`,
  },
  "browser-close": {
    id: "browser-close",
    name: "browser.close()",
    parentClass: "Browser",
    signature: "browser.close(): Promise<void>",
    description:
      "Closes the browser and all its contexts, terminating the underlying browser process.",
    parameters: [],
    returns: "Promise<void>",
    codeExample: `await browser.close();`,
  },
};

