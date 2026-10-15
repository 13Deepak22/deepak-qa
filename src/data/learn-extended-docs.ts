export interface DocSection {
  id: string;
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  subsections?: DocSection[];
  codeBlocks?: Array<{
    title?: string;
    language?: string;
    tabs?: Array<{ label: string; language: string; code: string }>;
    code?: string;
  }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
  callouts?: Array<{
    type: "note" | "tip" | "warning";
    title?: string;
    text: string;
  }>;
  keyTakeaways?: string[];
  checklist?: string[];
  steps?: Array<{
    step: number | string;
    title: string;
    description: string;
    badge?: string;
  }>;
}

export interface DetailedDoc {
  id: string;
  title: string;
  category: string;
  badge?: string;
  sourceUrl: string;
  description: string;
  sections: DocSection[];
}

export const EXTENDED_DOCS: Record<string, DetailedDoc> = {
  /* ========================================================================= */
  /* GETTING STARTED ADDITIONS                                                */
  /* ========================================================================= */
  "ci-intro": {
    id: "ci-intro",
    title: "Setting up CI",
    category: "Getting Started",
    sourceUrl: "https://playwright.dev/docs/ci-intro",
    description: "Automate your end-to-end tests across GitHub Actions, GitLab CI, Jenkins, and Azure Pipelines.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Running tests on Continuous Integration (CI) ensures that every pull request and commit meets your quality standards before merging to main.",
          "When you initialize Playwright using npm init playwright@latest, an optional GitHub Actions workflow is automatically generated under .github/workflows/playwright.yml.",
        ],
      },
      {
        id: "github-actions",
        heading: "GitHub Actions Workflow",
        paragraphs: [
          "Here is the standard, production-ready GitHub Actions workflow for running Playwright tests across multiple browsers with automated report publishing:",
        ],
        codeBlocks: [
          {
            title: ".github/workflows/playwright.yml",
            language: "yaml",
            code: `name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
        cache: 'npm'
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: \${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30`,
          },
        ],
      },
      {
        id: "ci-best-practices",
        heading: "CI Best Practices",
        paragraphs: [
          "Follow these essential recommendations when executing Playwright in CI pipelines:",
        ],
        table: {
          headers: ["Best Practice", "Recommendation", "Benefit"],
          rows: [
            ["Browser Caching", "Cache ~/.cache/ms-playwright", "Reduces workflow run time by 2-3 minutes"],
            ["Worker Limit", "workers: process.env.CI ? 2 : undefined", "Prevents CPU starvation on standard 2-core VMs"],
            ["Sharding", "npx playwright test --shard=1/4", "Runs parallel jobs across multiple machines simultaneously"],
            ["Artifact Retention", "Upload playwright-report/ on failure", "Enables rapid debugging with interactive traces and videos"],
          ],
        },
      },
    ],
  },

  "vscode": {
    id: "vscode",
    title: "VS Code Extension",
    category: "Getting Started",
    sourceUrl: "https://playwright.dev/docs/getting-started-vscode",
    description: "Install, record, run, debug, and pick locators directly from Visual Studio Code.",
    sections: [
      {
        id: "installation",
        heading: "Installing the Extension",
        paragraphs: [
          "Install the official 'Playwright Test for VS Code' extension from the Microsoft marketplace (search for ms-playwright.playwright).",
          "Once installed, open the Testing sidebar (beaker icon) to view your test suite hierarchy.",
        ],
      },
      {
        id: "features",
        heading: "Key Extension Capabilities",
        paragraphs: [
          "The extension integrates deeply with the VS Code debugging engine:",
        ],
        table: {
          headers: ["Feature", "How to Use", "Description"],
          rows: [
            ["Run Tests", "Click green Play icon next to test()", "Executes test immediately with live inline terminal output"],
            ["Debug Tests", "Right-click test -> Debug Test", "Hits breakpoints, inspects variables, steps over/into awaits"],
            ["Pick Locator", "Click 'Pick Locator' button in sidebar", "Hover elements in live browser to generate stable locators"],
            ["Record New", "Click 'Record Tests' in Testing sidebar", "Generates test code into your active editor tab as you click"],
            ["Show Trace Viewer", "Click on trace link in test results", "Opens full time-travel trace viewer inside VS Code"],
          ],
        },
      },
    ],
  },

  /* ========================================================================= */
  /* CANARY RELEASES                                                           */
  /* ========================================================================= */
  "canary-releases": {
    id: "canary-releases",
    title: "Canary Releases",
    category: "Canary releases",
    sourceUrl: "https://playwright.dev/docs/canary-releases",
    description: "Try upcoming features, bug fixes, and new browser engine builds before official release.",
    sections: [
      {
        id: "installation",
        heading: "Installing Canary Builds",
        paragraphs: [
          "Canary builds are published nightly to npm under the @next dist-tag. They include all merged PRs up to the latest commit on the main branch.",
        ],
        codeBlocks: [
          {
            tabs: [
              { label: "npm", language: "bash", code: "npm install -D @playwright/test@next\nnpx playwright install --with-deps" },
              { label: "yarn", language: "bash", code: "yarn add --dev @playwright/test@next\nyarn playwright install --with-deps" },
              { label: "pnpm", language: "bash", code: "pnpm add -D @playwright/test@next\npnpm exec playwright install --with-deps" },
            ],
          },
        ],
      },
      {
        id: "when-to-use",
        heading: "When to use Canary",
        paragraphs: [
          "Canary releases are recommended when you want to verify fixes for recently reported bugs or test preview APIs before stable releases.",
          "For production CI/CD pipelines, always stick with stable semantic versions.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* PLAYWRIGHT TEST SUITE                                                     */
  /* ========================================================================= */
  "test-agents": {
    id: "test-agents",
    title: "Agents & Automation",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-agents",
    description: "Autonomous testing agents, prompt-driven assertions, and MCP integration.",
    sections: [
      {
        id: "overview",
        heading: "Testing with Autonomous Agents",
        paragraphs: [
          "Playwright supports agentic test execution patterns, Model Context Protocol (MCP) servers, and smart web-agent exploration.",
          "Agents can interact with pages using semantic locators, inspect accessibility trees, and evaluate assertions dynamically.",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

test('AI agent self-healing locator evaluation', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  
  // Use semantic accessibility locators for agent resilience
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Write comprehensive test suite');
  await input.press('Enter');

  await expect(page.getByTestId('todo-title')).toHaveText('Write comprehensive test suite');
});`,
          },
        ],
      },
    ],
  },

  "test-annotations": {
    id: "test-annotations",
    title: "Test Annotations",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-annotations",
    description: "Modify test execution with test.skip, test.fail, test.fixme, test.slow, and custom metadata.",
    sections: [
      {
        id: "built-in-annotations",
        heading: "Built-in Annotations",
        paragraphs: [
          "Playwright provides built-in modifiers to handle flaky tests, platform-specific skips, and slow network operations:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

// Skip conditionally based on browser
test('admin dashboard', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Feature unsupported in Safari');
  await page.goto('/admin');
});

// Mark expected failure (passes if it fails, fails if it passes!)
test('known bug #1402', async ({ page }) => {
  test.fail();
  // ... test code that fails until bug is fixed
});

// Triple default timeout for slow tests
test('large data export', async ({ page }) => {
  test.slow();
  await page.goto('/export');
});

// Custom metadata tagging for filtering
test('checkout payment', {
  tag: ['@smoke', '@payments'],
  annotation: { type: 'issue', description: 'https://github.com/org/repo/issues/42' },
}, async ({ page }) => {
  // ...
});`,
          },
        ],
        table: {
          headers: ["Annotation", "Behavior", "When to Use"],
          rows: [
            ["test.skip()", "Never executes the test body", "Feature not yet available or platform unsupported"],
            ["test.fail()", "Expects failure; fails if test passes", "Known unresolved bugs tracked in tickets"],
            ["test.fixme()", "Skips execution, marked in report as fixme", "Broken test awaiting refactor"],
            ["test.slow()", "Triples the timeout limit (e.g. 30s -> 90s)", "Heavy operations or integration setup"],
          ],
        },
      },
    ],
  },

  "test-cli": {
    id: "test-cli",
    title: "Command Line",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-cli",
    description: "Run, filter, shard, and inspect tests using the command line interface.",
    sections: [
      {
        id: "common-commands",
        heading: "Essential CLI Commands",
        paragraphs: [
          "Execute Playwright test commands from your project root:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Run all tests
npx playwright test

# Run in headed mode (open visible browser)
npx playwright test --headed

# Run on specific browser project
npx playwright test --project=chromium
npx playwright test --project=firefox --project=webkit

# Run specific test file
npx playwright test tests/auth.spec.ts

# Filter tests by grep / title pattern
npx playwright test -g "login"

# Run tests by tag
npx playwright test --grep "@smoke"

# Interactive UI Mode
npx playwright test --ui

# Debug mode with Playwright Inspector
npx playwright test --debug

# View last HTML report
npx playwright show-report`,
          },
        ],
      },
    ],
  },

  "test-configuration": {
    id: "test-configuration",
    title: "Configuration",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-configuration",
    description: "Configure test directories, workers, timeouts, reporters, web servers, and browser projects.",
    sections: [
      {
        id: "config-structure",
        heading: "Full playwright.config.ts Specification",
        paragraphs: [
          "The configuration file exports a defineConfig object that dictates the entire runtime behavior of your test suite:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});`,
          },
        ],
      },
    ],
  },

  "test-use-options": {
    id: "test-use-options",
    title: "Configuration (use)",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-use-options",
    description: "Configure baseURL, viewport, permissions, storageState, trace, video, and screenshot settings.",
    sections: [
      {
        id: "options-table",
        heading: "Common 'use' Properties",
        paragraphs: [
          "These options can be declared globally in playwright.config.ts or overridden per-project or per-test:",
        ],
        table: {
          headers: ["Option", "Type", "Description"],
          rows: [
            ["baseURL", "string", "Base URL used for all relative page.goto('/login') navigations"],
            ["trace", "'off' | 'on' | 'retain-on-failure' | 'on-first-retry'", "Records DOM, action, and network snapshots for trace viewer"],
            ["screenshot", "'off' | 'on' | 'only-on-failure'", "Captures page image on test completion or failure"],
            ["video", "'off' | 'on' | 'retain-on-failure' | 'on-first-retry'", "Records full video of user session"],
            ["storageState", "string | object", "Path to JSON file containing cookies & local storage for saved auth"],
            ["viewport", "{ width, height } | null", "Default browser viewport dimensions"],
            ["ignoreHTTPSErrors", "boolean", "Ignore self-signed or invalid SSL certificates"],
            ["locale", "string", "User locale, e.g. 'en-US' or 'de-DE'"],
          ],
        },
      },
    ],
  },

  "emulation": {
    id: "emulation",
    title: "Emulation",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/emulation",
    description: "Emulate mobile devices, geolocation, permissions, color scheme, timezone, and network conditions.",
    sections: [
      {
        id: "device-emulation",
        heading: "Emulating Devices & Context Attributes",
        paragraphs: [
          "Playwright ships with a device registry (devices) that accurately emulates screen size, devicePixelRatio, userAgent, and touch capability:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro'],
  locale: 'fr-FR',
  timezoneId: 'Europe/Paris',
  geolocation: { longitude: 2.3522, latitude: 48.8566 },
  permissions: ['geolocation'],
  colorScheme: 'dark',
});

test('verify localized mobile view', async ({ page }) => {
  await page.goto('https://maps.google.com');
  // Verified under French locale, dark mode, iPhone 14 Pro screen
});`,
          },
        ],
      },
    ],
  },

  "test-fixtures": {
    id: "test-fixtures",
    title: "Fixtures",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-fixtures",
    description: "Encapsulate test environment, dependencies, and reusable state using Playwright fixtures.",
    sections: [
      {
        id: "custom-fixtures",
        heading: "Creating Custom Fixtures",
        paragraphs: [
          "Fixtures establish setup and teardown automatically for each test. They provide isolated page objects, authenticated sessions, or database connections:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test as base, expect } from '@playwright/test';
import { TodoPage } from './todo-page';

type MyFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('Buy Milk');
    
    // Pass fixture to the test
    await use(todoPage);
    
    // Automatic teardown
    await todoPage.removeAll();
  },
});

test('custom fixture example', async ({ todoPage }) => {
  await expect(todoPage.todoItems).toHaveCount(1);
});`,
          },
        ],
      },
    ],
  },

  "test-global-setup-teardown": {
    id: "test-global-setup-teardown",
    title: "Global Setup and Teardown",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-global-setup-teardown",
    description: "Run setup scripts once before any tests start, and teardown scripts after all tests finish.",
    sections: [
      {
        id: "implementation",
        heading: "Project Dependency Pattern (Recommended)",
        paragraphs: [
          "Modern Playwright projects configure setup as a dependent project in playwright.config.ts:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// playwright.config.ts
export default defineConfig({
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json' },
      dependencies: ['setup'],
    },
  ],
});`,
          },
        ],
      },
    ],
  },

  "test-parallel": {
    id: "test-parallel",
    title: "Parallelism",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-parallel",
    description: "Speed up execution by running tests in parallel across worker processes.",
    sections: [
      {
        id: "configuration",
        heading: "Configuring Worker Processes",
        paragraphs: [
          "By default, Playwright runs test files in parallel across multiple worker processes. Set fullyParallel: true to run individual tests inside files concurrently as well:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true, // Run individual tests inside each file in parallel
  workers: process.env.CI ? 2 : '50%', // Use 50% of available CPU cores locally
});`,
          },
        ],
      },
    ],
  },

  "test-parameterize": {
    id: "test-parameterize",
    title: "Parameterize tests",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-parameterize",
    description: "Run tests with multiple data sets, matrix parameters, or CSV files.",
    sections: [
      {
        id: "example",
        heading: "Data-Driven Test Loops",
        paragraphs: [
          "Iterate over test arrays to generate independent test cases for each data item:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

const searchQueries = ['playwright', 'cypress', 'selenium', 'puppeteer'];

for (const query of searchQueries) {
  test(\`search test for: \${query}\`, async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.locator('#searchbox_input').fill(query);
    await page.locator('#searchbox_input').press('Enter');
    await expect(page).toHaveTitle(new RegExp(query, 'i'));
  });
}`,
          },
        ],
      },
    ],
  },

  "test-projects": {
    id: "test-projects",
    title: "Projects",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-projects",
    description: "Run test suites across different browsers, mobile viewports, or authentication roles.",
    sections: [
      {
        id: "matrix",
        heading: "Multi-Project Matrix",
        paragraphs: [
          "Projects allow testing multiple environments with customized settings in a single command:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile', use: { ...devices['iPhone 13 Pro'] } },
    { name: 'authenticated', use: { storageState: '.auth/user.json' } },
  ],
});`,
          },
        ],
      },
    ],
  },

  "test-reporters": {
    id: "test-reporters",
    title: "Reporters",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-reporters",
    description: "Generate HTML dashboards, terminal list outputs, JSON, JUnit XML, and Blob reports.",
    sections: [
      {
        id: "built-in-reporters",
        heading: "Supported Built-in Reporters",
        paragraphs: [
          "Playwright supports multiple simultaneous reporters for terminal readability and CI artifacts:",
        ],
        table: {
          headers: ["Reporter", "CLI Flag", "Description"],
          rows: [
            ["HTML", "--reporter=html", "Interactive browser dashboard with traces, screenshots, and logs"],
            ["List", "--reporter=list", "Terminal output with elapsed time and passed/failed markers"],
            ["Line", "--reporter=line", "Single-line live status for CI stdout log reduction"],
            ["JSON", "--reporter=json", "Machine-readable JSON data with full test metadata"],
            ["JUnit", "--reporter=junit", "XML format supported by Jenkins, GitLab, and Azure DevOps"],
            ["Blob", "--reporter=blob", "Self-contained reports for merging sharded CI test runs"],
          ],
        },
      },
    ],
  },

  "test-retries": {
    id: "test-retries",
    title: "Retries",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-retries",
    description: "Configure automatic retries for flaky tests and flag regressions.",
    sections: [
      {
        id: "retry-configuration",
        heading: "Configuring Retries",
        paragraphs: [
          "Retries re-execute failed tests from scratch in fresh browser contexts:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `export default defineConfig({
  retries: process.env.CI ? 2 : 0, // Retry failed tests twice on CI
});`,
          },
        ],
      },
    ],
  },

  "test-sharding": {
    id: "test-sharding",
    title: "Sharding",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-sharding",
    description: "Distribute tests across multiple CI machines to divide total execution time.",
    sections: [
      {
        id: "sharding-usage",
        heading: "Running Sharded Tests",
        paragraphs: [
          "Pass the --shard flag to divide your tests into N distinct chunks:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Machine 1 of 4
npx playwright test --shard=1/4

# Machine 2 of 4
npx playwright test --shard=2/4

# Machine 3 of 4
npx playwright test --shard=3/4

# Machine 4 of 4
npx playwright test --shard=4/4`,
          },
        ],
      },
    ],
  },

  "test-timeouts": {
    id: "test-timeouts",
    title: "Timeouts",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-timeouts",
    description: "Tune assertion, action, navigation, and global test timeout thresholds.",
    sections: [
      {
        id: "timeout-hierarchy",
        heading: "Timeout Hierarchy",
        paragraphs: [
          "Playwright implements four layers of configurable timeouts:",
        ],
        table: {
          headers: ["Timeout Type", "Default", "Description"],
          rows: [
            ["Test Timeout", "30,000ms", "Maximum duration for the entire test including before/after hooks"],
            ["Expect Timeout", "5,000ms", "Maximum wait time for Web-First assertions (e.g. toHaveText)"],
            ["Action Timeout", "0 (no limit)", "Maximum time for clicks, fills, and locator actions"],
            ["Navigation Timeout", "0 (no limit)", "Maximum time for page.goto() and response commitments"],
          ],
        },
      },
    ],
  },

  "test-typescript": {
    id: "test-typescript",
    title: "TypeScript",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-typescript",
    description: "Out-of-the-box TypeScript support with zero compilation config and path aliases.",
    sections: [
      {
        id: "zero-config",
        heading: "Zero-Config TypeScript Support",
        paragraphs: [
          "Playwright reads and executes .ts files out-of-the-box. It automatically respects your tsconfig.json compilerOptions and path aliases (@/components/*).",
        ],
      },
    ],
  },

  "test-ui-mode": {
    id: "test-ui-mode",
    title: "UI Mode",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-ui-mode",
    description: "Interactive time-travel debugging, watch mode, locator picking, and DOM snapshots.",
    sections: [
      {
        id: "launching-ui-mode",
        heading: "Launching UI Mode",
        paragraphs: [
          "Start the full graphical test runner with watch mode:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "npx playwright test --ui",
          },
        ],
      },
    ],
  },

  "test-webserver": {
    id: "test-webserver",
    title: "Web server",
    category: "Playwright Test",
    sourceUrl: "https://playwright.dev/docs/test-webserver",
    description: "Automatically spin up local development servers before running tests.",
    sections: [
      {
        id: "webserver-config",
        heading: "Configuring Local Web Servers",
        paragraphs: [
          "Playwright can start your frontend or backend server and wait for HTTP readiness before executing tests:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* GUIDES ADDITIONS                                                          */
  /* ========================================================================= */
  "input": {
    id: "input",
    title: "Actions",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/input",
    description: "Interact with buttons, text fields, checkboxes, dropdowns, and drag-and-drop targets.",
    sections: [
      {
        id: "actionability",
        heading: "Auto-waiting Actions",
        paragraphs: [
          "All Playwright actions perform automatic actionability checks (visible, enabled, stable, receive events) before triggering:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Text inputs
await page.getByLabel('User Name').fill('john_doe');

// Checkboxes and Radios
await page.getByLabel('I agree to the terms').check();
expect(await page.getByLabel('I agree to the terms').isChecked()).toBeTruthy();

// Select options
await page.getByLabel('Country').selectOption('Canada');
await page.getByLabel('Colors').selectOption(['red', 'green', 'blue']);

// Mouse clicks
await page.getByRole('button', { name: 'Submit' }).click({ button: 'left', clickCount: 1 });
await page.getByText('Item').dblclick();

// Drag and drop
await page.locator('#source').dragTo(page.locator('#target'));`,
          },
        ],
      },
    ],
  },

  "api-testing": {
    id: "api-testing",
    title: "API testing",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/api-testing",
    description: "Send REST requests directly from tests using request fixture without opening a browser.",
    sections: [
      {
        id: "rest-requests",
        heading: "Sending REST API Requests",
        paragraphs: [
          "Use the request fixture for high-speed API tests, mock data seeding, or token generation:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

test('create user via API', async ({ request }) => {
  const response = await request.post('/api/users', {
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.id).toBeDefined();
  expect(body.name).toBe('Alice');
});`,
          },
        ],
      },
    ],
  },

  "auth": {
    id: "auth",
    title: "Authentication",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/auth",
    description: "Save and reuse signed-in state (cookies & localStorage) across tests to avoid repeated logins.",
    sections: [
      {
        id: "storage-state",
        heading: "Reusing Authentication State",
        paragraphs: [
          "Log in once during setup, save the browser state, and load it instantly in subsequent tests:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// auth.setup.ts
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('user@example.com');
  await page.getByLabel('Password').fill('secret');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('/dashboard');

  // Save signed-in storage state to disk
  await page.context().storageState({ path: authFile });
});`,
          },
        ],
      },
    ],
  },

  "actionability": {
    id: "actionability",
    title: "Auto-waiting",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/actionability",
    description: "Understand automatic checks performed prior to executing click, fill, press, and check.",
    sections: [
      {
        id: "checks-table",
        heading: "Actionability Checklist",
        paragraphs: [
          "Before taking action on an element, Playwright verifies that it satisfies all requisite states:",
        ],
        table: {
          headers: ["Action", "Attached", "Visible", "Stable", "Receives Events", "Enabled", "Editable"],
          rows: [
            ["click", "Yes", "Yes", "Yes", "Yes", "Yes", "-"],
            ["fill", "Yes", "Yes", "Yes", "-", "Yes", "Yes"],
            ["check", "Yes", "Yes", "Yes", "Yes", "Yes", "-"],
            ["hover", "Yes", "Yes", "Yes", "Yes", "-", "-"],
            ["selectOption", "Yes", "Yes", "Yes", "Yes", "Yes", "-"],
          ],
        },
      },
    ],
  },

  "best-practices": {
    id: "best-practices",
    title: "Best Practices",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/best-practices",
    description: "Core design patterns, resilient locators, web-first assertions, and isolation principles.",
    sections: [
      {
        id: "rules",
        heading: "Top Recommendations",
        paragraphs: [
          "1. Use user-facing locators (getByRole, getByLabel, getByText) over CSS/XPath.",
          "2. Always use Web-First assertions (expect(locator).toBeVisible()) instead of manual conditionals.",
          "3. Maintain total test isolation: never let test B depend on state created by test A.",
          "4. Leverage soft assertions (expect.soft) for multi-field validation forms.",
        ],
      },
    ],
  },

  "chrome-extensions": {
    id: "chrome-extensions",
    title: "Chrome extensions",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/chrome-extensions",
    description: "Load and test unpacked Chrome manifest v3 browser extensions.",
    sections: [
      {
        id: "loading-extensions",
        heading: "Loading Extensions with Persistent Context",
        paragraphs: [
          "Extensions must be loaded using launchPersistentContext with Chromium:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { chromium } from '@playwright/test';
import path from 'path';

const pathToExtension = path.join(__dirname, 'my-extension');
const context = await chromium.launchPersistentContext('', {
  headless: false,
  args: [
    \`--disable-extensions-except=\${pathToExtension}\`,
    \`--load-extension=\${pathToExtension}\`,
  ],
});`,
          },
        ],
      },
    ],
  },

  "clock": {
    id: "clock",
    title: "Clock",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/clock",
    description: "Fast-forward, pause, and manipulate Date, setTimeout, and setInterval in tests.",
    sections: [
      {
        id: "clock-api",
        heading: "Manipulating Time",
        paragraphs: [
          "Avoid flaky page.waitForTimeout() by programmatically controlling time:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Fast-forward 5 minutes instantly
await page.clock.fastForward('05:00');

// Set fixed timestamp
await page.clock.setFixedTime(new Date('2026-01-01T12:00:00Z'));`,
          },
        ],
      },
    ],
  },

  "test-components": {
    id: "test-components",
    title: "Component testing",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/test-components",
    description: "Mount and test React, Vue, and Svelte UI components in real browser engines.",
    sections: [
      {
        id: "mounting",
        heading: "Mounting UI Components",
        paragraphs: [
          "Component testing tests individual UI units inside actual Chromium, WebKit, and Firefox browsers:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './Button';

test('render button component', async ({ mount }) => {
  const component = await mount(<Button title="Submit" />);
  await expect(component).toContainText('Submit');
  await component.click();
});`,
          },
        ],
      },
    ],
  },

  "debug": {
    id: "debug",
    title: "Debugging Tests",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/debug",
    description: "Debug with Playwright Inspector, browser developer tools, console logs, and step-through.",
    sections: [
      {
        id: "inspector",
        heading: "Playwright Inspector",
        paragraphs: [
          "Run tests with --debug to pause execution at page.pause() or step line-by-line:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "npx playwright test --debug",
          },
        ],
      },
    ],
  },

  "dialogs": {
    id: "dialogs",
    title: "Dialogs",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/dialogs",
    description: "Handle window.alert, window.confirm, and window.prompt events without blocking execution.",
    sections: [
      {
        id: "dialog-handler",
        heading: "Handling Alert and Confirm Dialogs",
        paragraphs: [
          "Playwright auto-dismisses dialogs by default unless you register a listener beforehand:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `page.on('dialog', async dialog => {
  expect(dialog.message()).toBe('Are you sure?');
  await dialog.accept(); // or dialog.dismiss()
});

await page.getByRole('button', { name: 'Delete Item' }).click();`,
          },
        ],
      },
    ],
  },

  "downloads": {
    id: "downloads",
    title: "Downloads",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/downloads",
    description: "Intercept and verify file downloads triggered by link or button clicks.",
    sections: [
      {
        id: "download-promise",
        heading: "Waiting for Download Events",
        paragraphs: [
          "Wait for the download event and save the resulting file:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `const downloadPromise = page.waitForEvent('download');
await page.getByText('Download CSV').click();
const download = await downloadPromise;

// Save to disk
await download.saveAs('/path/to/downloaded.csv');
expect(download.suggestedFilename()).toBe('report.csv');`,
          },
        ],
      },
    ],
  },

  "evaluating": {
    id: "evaluating",
    title: "Evaluating JavaScript",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/evaluating",
    description: "Execute arbitrary scripts in browser context and pass parameters back and forth.",
    sections: [
      {
        id: "evaluate-examples",
        heading: "page.evaluate() & locator.evaluate()",
        paragraphs: [
          "Run functions inside the page execution environment:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Get window dimensions
const dimensions = await page.evaluate(() => {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
});

// Pass arguments to browser script
const result = await page.evaluate((multiplier) => {
  return window.myGlobalScore * multiplier;
}, 5);`,
          },
        ],
      },
    ],
  },

  "events": {
    id: "events",
    title: "Events",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/events",
    description: "Listen for console logs, page errors, network requests, popup windows, and requests.",
    sections: [
      {
        id: "listening",
        heading: "Subscribing to Page Events",
        paragraphs: [
          "Monitor errors and network lifecycle with event listeners:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Catch unhandled page errors
page.on('pageerror', exception => {
  console.error(\`Page error caught: \${exception}\`);
});

// Intercept console.log
page.on('console', msg => {
  if (msg.type() === 'error') console.log(\`Console error: \${msg.text()}\`);
});`,
          },
        ],
      },
    ],
  },

  "extensibility": {
    id: "extensibility",
    title: "Extensibility",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/extensibility",
    description: "Register custom selector engines and create reusable matchers.",
    sections: [
      {
        id: "custom-selectors",
        heading: "Custom Selectors",
        paragraphs: [
          "Extend locator querying with custom query engines and domain-specific selectors.",
        ],
      },
    ],
  },

  "frames": {
    id: "frames",
    title: "Frames",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/frames",
    description: "Locate elements inside iFrames and nested frame trees seamlessly.",
    sections: [
      {
        id: "frame-locator",
        heading: "page.frameLocator()",
        paragraphs: [
          "Frame locators auto-wait for the iframe to load and resolve target elements inside:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Locate element inside iframe
const iframe = page.frameLocator('iframe#payment-frame');
await iframe.getByPlaceholder('Card Number').fill('4242424242424242');
await iframe.getByRole('button', { name: 'Pay Now' }).click();`,
          },
        ],
      },
    ],
  },

  "handles": {
    id: "handles",
    title: "Handles",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/handles",
    description: "Manage JSHandle and ElementHandle references to DOM nodes.",
    sections: [
      {
        id: "jshandle",
        heading: "JSHandle Overview",
        paragraphs: [
          "JSHandle represents an in-page JavaScript object in the browser. Note that Locators are preferred over ElementHandles in modern Playwright.",
        ],
      },
    ],
  },

  "browser-contexts": {
    id: "browser-contexts",
    title: "Isolation",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/browser-contexts",
    description: "Hermetic browser contexts provide independent sessions, cookies, and cache.",
    sections: [
      {
        id: "multi-context",
        heading: "Multi-User Testing with Contexts",
        paragraphs: [
          "Run two isolated users (e.g. Chat sender and receiver) concurrently in one test:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

test('chat messaging between two users', async ({ browser }) => {
  // Context A: User 1
  const user1Context = await browser.newContext();
  const page1 = await user1Context.newPage();
  await page1.goto('/chat/user1');

  // Context B: User 2
  const user2Context = await browser.newContext();
  const page2 = await user2Context.newPage();
  await page2.goto('/chat/user2');

  await page1.getByPlaceholder('Message').fill('Hello Alice!');
  await page1.getByRole('button', { name: 'Send' }).click();

  await expect(page2.getByText('Hello Alice!')).toBeVisible();
});`,
          },
        ],
      },
    ],
  },

  "mock": {
    id: "mock",
    title: "Mock APIs",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/mock",
    description: "Intercept HTTP requests and provide mock JSON responses or replayed HAR files.",
    sections: [
      {
        id: "route-fulfill",
        heading: "page.route() API Mocking",
        paragraphs: [
          "Fulfill network requests with mock payloads without hitting actual backend servers:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await page.route('*/**/api/v1/fruits', async route => {
  const json = [
    { name: 'Strawberry', id: 21 },
    { name: 'Banana', id: 35 },
  ];
  await route.fulfill({ json });
});

await page.goto('/fruits');
await expect(page.getByText('Strawberry')).toBeVisible();`,
          },
        ],
      },
    ],
  },

  "mock-browser-apis": {
    id: "mock-browser-apis",
    title: "Mock browser APIs",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/mock-browser-apis",
    description: "Mock navigator.geolocation, navigator.mediaDevices, clipboard, and notifications.",
    sections: [
      {
        id: "mocking-apis",
        heading: "Mocking Browser Web APIs",
        paragraphs: [
          "Override browser APIs before page script initialization with page.addInitScript:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await page.addInitScript(() => {
  // Mock battery status API
  (navigator as any).getBattery = () => Promise.resolve({
    charging: true,
    level: 0.95,
  });
});`,
          },
        ],
      },
    ],
  },

  "navigations": {
    id: "navigations",
    title: "Navigations",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/navigations",
    description: "Manage page loads, redirects, hashchanges, and wait states (load, domcontentloaded, networkidle).",
    sections: [
      {
        id: "wait-until",
        heading: "Navigation Wait States",
        paragraphs: [
          "page.goto() waits for the 'load' event by default. You can configure custom waitUntil strategies:",
        ],
        table: {
          headers: ["Strategy", "Description", "Recommended For"],
          rows: [
            ["load", "Waits for window 'load' event", "Standard traditional multi-page apps"],
            ["domcontentloaded", "Waits for DOMContentLoaded event", "Fast initial rendering tests"],
            ["networkidle", "Waits until no network requests for 500ms", "Single Page Apps (SPAs) fetching initial JSON"],
            ["commit", "Waits for server response headers", "Testing response headers and streaming responses"],
          ],
        },
      },
    ],
  },

  "network": {
    id: "network",
    title: "Network",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/network",
    description: "Monitor, intercept, abort, and modify HTTP headers, query params, and payloads.",
    sections: [
      {
        id: "aborting",
        heading: "Aborting Unnecessary Requests",
        paragraphs: [
          "Block third-party tracking scripts, fonts, or images to speed up test execution:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await page.route('**/*.{png,jpg,jpeg,webp}', route => route.abort());
await page.route('*google-analytics.com/**', route => route.abort());
await page.goto('https://example.com');`,
          },
        ],
      },
    ],
  },

  "other-locators": {
    id: "other-locators",
    title: "Other locators",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/other-locators",
    description: "CSS, XPath, React components, Vue selectors, and Shadow DOM piercing.",
    sections: [
      {
        id: "css-xpath",
        heading: "CSS and XPath Selectors",
        paragraphs: [
          "Playwright automatically pierces open Shadow DOM roots with standard CSS and XPath selectors:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Standard CSS
page.locator('button.primary-btn');

// XPath
page.locator('//button[normalize-space()="Submit"]');

// Piercing Shadow DOM automatically
page.locator('custom-element >> button');`,
          },
        ],
      },
    ],
  },

  "pages": {
    id: "pages",
    title: "Pages",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/pages",
    description: "Handle new tabs, popup windows, and multi-tab workflows.",
    sections: [
      {
        id: "popups",
        heading: "Handling Popup Tabs",
        paragraphs: [
          "Capture new browser tabs opened via window.open() or target='_blank' links:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `const popupPromise = page.waitForEvent('popup');
await page.getByText('Open Terms in New Tab').click();
const popup = await popupPromise;

await popup.waitForLoadState();
await expect(popup).toHaveTitle(/Terms of Service/);`,
          },
        ],
      },
    ],
  },

  "pom": {
    id: "pom",
    title: "Page object models",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/pom",
    description: "Encapsulate UI interaction logic into clean, maintainable Page Object Model classes.",
    sections: [
      {
        id: "pom-pattern",
        heading: "Creating a Page Object Model",
        paragraphs: [
          "Page objects reduce test code duplication and simplify maintenance when UI layouts change:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('User');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }
}`,
          },
        ],
      },
    ],
  },

  "screenshots": {
    id: "screenshots",
    title: "Screenshots",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/screenshots",
    description: "Capture element screenshots, full-page scrolling captures, and buffer representations.",
    sections: [
      {
        id: "capturing",
        heading: "Taking Screenshots",
        paragraphs: [
          "Capture full page snapshots or specific element nodes:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Full page screenshot
await page.screenshot({ path: 'fullpage.png', fullPage: true });

// Element screenshot
await page.getByRole('dialog').screenshot({ path: 'modal.png' });`,
          },
        ],
      },
    ],
  },

  "service-workers": {
    id: "service-workers",
    title: "Service Workers",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/service-workers",
    description: "Inspect, test, and intercept Progressive Web Apps (PWAs) with Service Workers.",
    sections: [
      {
        id: "overview",
        heading: "Testing Service Workers",
        paragraphs: [
          "Playwright supports inspecting service worker lifecycle and offline cache behavior across Chromium and WebKit.",
        ],
      },
    ],
  },

  "aria-snapshots": {
    id: "aria-snapshots",
    title: "Snapshot testing",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/aria-snapshots",
    description: "Assert against YAML-based Accessible Rich Internet Applications (ARIA) tree snapshots.",
    sections: [
      {
        id: "aria-expect",
        heading: "ARIA Snapshot Assertions",
        paragraphs: [
          "Match page accessibility structures directly using expect(locator).toMatchAriaSnapshot():",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await expect(page.locator('nav')).toMatchAriaSnapshot(\`
  - list:
    - listitem:
      - link "Home"
    - listitem:
      - link "Docs"
\`);`,
          },
        ],
      },
    ],
  },

  "codegen-guide": {
    id: "codegen-guide",
    title: "Test generator",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/codegen",
    description: "Advanced options for the built-in Playwright Codegen tool.",
    sections: [
      {
        id: "codegen-flags",
        heading: "Advanced Codegen Flags",
        paragraphs: [
          "Generate test scripts with custom viewport, target language, and authenticated storage:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Save auth state while generating
npx playwright codegen --save-storage=auth.json https://example.com

# Emulate iPhone device
npx playwright codegen --device="iPhone 14" https://example.com

# Target Python language
npx playwright codegen --target=python https://example.com`,
          },
        ],
      },
    ],
  },

  "touch-events": {
    id: "touch-events",
    title: "Touch events (legacy)",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/touch-events",
    description: "Simulate mobile tap, swipe, and multi-touch gestures.",
    sections: [
      {
        id: "touch-tap",
        heading: "page.touchscreen.tap()",
        paragraphs: [
          "Tap elements on touchscreen viewports with coordinates:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await page.touchscreen.tap(100, 200);`,
          },
        ],
      },
    ],
  },

  "trace-viewer-guide": {
    id: "trace-viewer-guide",
    title: "Trace viewer",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/trace-viewer",
    description: "Inspect action timeline, DOM snapshots, network waterfall, console logs, and source code.",
    sections: [
      {
        id: "trace-inspection",
        heading: "Opening and Inspecting Traces",
        paragraphs: [
          "Open local or cloud traces with the trace CLI:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "npx playwright show-trace trace.zip",
          },
        ],
      },
    ],
  },

  "videos": {
    id: "videos",
    title: "Videos",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/videos",
    description: "Record full video clips of test runs and attach them to HTML reports on failure.",
    sections: [
      {
        id: "video-config",
        heading: "Enabling Video Recording",
        paragraphs: [
          "Set video: 'retain-on-failure' in your configuration to record videos only when tests fail:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `export default defineConfig({
  use: {
    video: 'retain-on-failure',
  },
});`,
          },
        ],
      },
    ],
  },

  "test-snapshots": {
    id: "test-snapshots",
    title: "Visual comparisons",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/test-snapshots",
    description: "Detect visual regressions by comparing page and element screenshots with golden baselines.",
    sections: [
      {
        id: "visual-regression",
        heading: "expect(page).toHaveScreenshot()",
        paragraphs: [
          "Playwright automatically masks dynamic animations and provides configurable pixel diff ratios:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';

test('landing page visual regression', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('landing.png', {
    maxDiffPixelRatio: 0.05,
    mask: [page.locator('.timestamp')],
  });
});`,
          },
        ],
      },
    ],
  },

  "webview2": {
    id: "webview2",
    title: "WebView2",
    category: "Guides",
    sourceUrl: "https://playwright.dev/docs/webview2",
    description: "Automate Microsoft Edge WebView2 controls inside Windows desktop applications.",
    sections: [
      {
        id: "connecting",
        heading: "Connecting to WebView2",
        paragraphs: [
          "Playwright connects to WebView2 using the Chrome DevTools Protocol (CDP) port:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `import { chromium } from 'playwright';

// Connect over CDP port
const browser = await chromium.connectOverCDP('http://localhost:9222');
const page = browser.contexts()[0].pages()[0];
await page.goto('https://myapp.local');`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* MIGRATION                                                                 */
  /* ========================================================================= */
  "protractor": {
    id: "protractor",
    title: "Migrating from Protractor",
    category: "Migration",
    sourceUrl: "https://playwright.dev/docs/protractor",
    description: "Step-by-step guide to migrate Angular and Protractor test suites to Playwright.",
    sections: [
      {
        id: "protractor-mapping",
        heading: "Protractor to Playwright API Mapping",
        paragraphs: [
          "Migrate legacy element(by.css()) and browser.waitForAngular() to resilient Playwright APIs:",
        ],
        table: {
          headers: ["Protractor", "Playwright Equivalent", "Notes"],
          rows: [
            ["browser.get(url)", "await page.goto(url)", "Playwright auto-waits for load"],
            ["element(by.css(sel))", "page.locator(sel)", "Auto-waiting locators"],
            ["element(by.buttonText(txt))", "page.getByRole('button', { name: txt })", "Semantic accessibility locator"],
            ["browser.sleep(ms)", "page.waitForTimeout(ms)", "Discouraged; use Web-First assertions instead"],
            ["browser.waitForAngular()", "Not needed", "Playwright auto-waits for network idle & DOM stability"],
          ],
        },
      },
    ],
  },

  "puppeteer": {
    id: "puppeteer",
    title: "Migrating from Puppeteer",
    category: "Migration",
    sourceUrl: "https://playwright.dev/docs/puppeteer",
    description: "Convert Puppeteer scripts to Playwright with multi-browser support and auto-waiting.",
    sections: [
      {
        id: "puppeteer-migration",
        heading: "Differences & Migration Guide",
        paragraphs: [
          "Playwright was created by the original authors of Puppeteer and offers cross-browser support (Chromium, Firefox, WebKit) and auto-waiting:",
        ],
        table: {
          headers: ["Puppeteer", "Playwright", "Advantage in Playwright"],
          rows: [
            ["const puppeteer = require('puppeteer')", "import { chromium } from 'playwright'", "True cross-browser support"],
            ["await page.waitForSelector('.btn')", "Built-in automatically", "Zero explicit wait boilerplate"],
            ["await page.click('.btn')", "await page.locator('.btn').click()", "Auto-waiting and retrying"],
            ["page.$ / page.$$", "page.locator()", "Lazy evaluation avoids stale elements"],
          ],
        },
      },
    ],
  },

  "testing-library": {
    id: "testing-library",
    title: "Migrating from Testing Library",
    category: "Migration",
    sourceUrl: "https://playwright.dev/docs/testing-library",
    description: "Transition from DOM Testing Library queries to built-in Playwright getBy* locators.",
    sections: [
      {
        id: "testing-library-mapping",
        heading: "Query Mapping",
        paragraphs: [
          "Playwright provides native equivalents for all Testing Library queries with auto-waiting built-in:",
        ],
        table: {
          headers: ["Testing Library", "Playwright Native Equivalent"],
          rows: [
            ["getByRole('button', { name: /save/i })", "page.getByRole('button', { name: 'Save' })"],
            ["getByLabelText('Username')", "page.getByLabel('Username')"],
            ["getByPlaceholderText('Search...')", "page.getByPlaceholder('Search...')"],
            ["getByText('Welcome')", "page.getByText('Welcome')"],
            ["getByTestId('custom-id')", "page.getByTestId('custom-id')"],
          ],
        },
      },
    ],
  },

  /* ========================================================================= */
  /* INTEGRATIONS                                                              */
  /* ========================================================================= */
  "docker": {
    id: "docker",
    title: "Docker",
    category: "Integrations",
    sourceUrl: "https://playwright.dev/docs/docker",
    description: "Run Playwright tests in official pre-configured Docker containers with browser dependencies.",
    sections: [
      {
        id: "docker-image",
        heading: "Official Docker Images",
        paragraphs: [
          "Microsoft publishes official Docker images with all browser binaries and OS dependencies installed:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Run tests inside official Docker image
docker run -v $(pwd):/work/ -w /work/ -it --rm --ipc=host \\
  mcr.microsoft.com/playwright:v1.50.0-noble \\
  /bin/bash -c "npm ci && npx playwright test"`,
          },
        ],
      },
    ],
  },

  "ci": {
    id: "ci",
    title: "Continuous Integration",
    category: "Integrations",
    sourceUrl: "https://playwright.dev/docs/ci",
    description: "Configure Jenkins, GitLab CI, Azure DevOps, Bitbucket Pipelines, and CircleCI.",
    sections: [
      {
        id: "ci-providers",
        heading: "Provider Examples",
        paragraphs: [
          "Playwright runs identically on all major CI providers using standard Node.js and headless browser runners.",
        ],
      },
    ],
  },

  "selenium-grid": {
    id: "selenium-grid",
    title: "Selenium Grid (experimental)",
    category: "Integrations",
    sourceUrl: "https://playwright.dev/docs/selenium-grid",
    description: "Connect to Selenium Grid 4 nodes and external cloud browser providers via CDP.",
    sections: [
      {
        id: "grid-connection",
        heading: "Connecting to Selenium Grid",
        paragraphs: [
          "Connect to existing enterprise Selenium 4 hubs via the selenium-grid feature flag:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "SELENIUM_REMOTE_URL=http://localhost:4444/wd/hub npx playwright test",
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* SUPPORTED LANGUAGES                                                       */
  /* ========================================================================= */
  "languages": {
    id: "languages",
    title: "Supported languages",
    category: "Supported languages",
    sourceUrl: "https://playwright.dev/docs/languages",
    description: "Playwright API is available in TypeScript, JavaScript, Python, .NET (C#), and Java.",
    sections: [
      {
        id: "language-bindings",
        heading: "Official Language Bindings",
        paragraphs: [
          "All language ports share the same high-performance browser automation core and feature parity:",
        ],
        table: {
          headers: ["Language", "Package", "Docs URL"],
          rows: [
            ["Node.js / TypeScript", "@playwright/test", "https://playwright.dev/docs/intro"],
            ["Python", "pytest-playwright", "https://playwright.dev/python/docs/intro"],
            [".NET (C#)", "Microsoft.Playwright", "https://playwright.dev/dotnet/docs/intro"],
            ["Java", "com.microsoft.playwright", "https://playwright.dev/java/docs/intro"],
          ],
        },
      },
    ],
  },
};

