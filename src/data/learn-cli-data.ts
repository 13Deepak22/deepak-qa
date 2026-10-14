import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const CLI_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "cli-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "cli-overview", text: "CLI Overview" }],
  },
  {
    title: "Playwright Test CLI",
    defaultOpen: true,
    items: [
      { id: "cli-test-run", text: "Running Tests" },
      { id: "cli-test-filter", text: "Filtering & Grep" },
      { id: "cli-test-ui", text: "Interactive UI Mode" },
      { id: "cli-test-debug", text: "Debugging with Inspector" },
      { id: "cli-test-sharding", text: "Sharding Tests" },
      { id: "cli-test-projects", text: "Projects & Browsers" },
    ],
  },
  {
    title: "Codegen & Tooling",
    defaultOpen: true,
    items: [
      { id: "cli-codegen", text: "Test Generator (codegen)" },
      { id: "cli-trace", text: "Trace Viewer (show-trace)" },
      { id: "cli-report", text: "HTML Report (show-report)" },
    ],
  },
  {
    title: "Browser Management",
    defaultOpen: false,
    items: [
      { id: "cli-install", text: "Installing Browsers" },
      { id: "cli-sysdeps", text: "System Dependencies" },
      { id: "cli-uninstall", text: "Uninstalling Browsers" },
    ],
  },
  {
    title: "Playwright Agent CLI",
    defaultOpen: false,
    items: [
      { id: "cli-agent-overview", text: "Agent CLI Overview" },
      { id: "cli-agent-commands", text: "Agent Commands Reference" },
      { id: "cli-agent-skills", text: "Skills & LLM Integration" },
    ],
  },
];

export const CLI_DOCS: Record<string, DetailedDoc> = {
  "cli-overview": {
    id: "cli-overview",
    title: "Playwright Command Line Interface",
    category: "Overview",
    sourceUrl: "https://playwright.dev/docs/test-cli",
    description: "Execute end-to-end test suites, launch recording tools, manage browser binaries, and power coding agents directly from your terminal.",
    sections: [
      {
        id: "introduction",
        heading: "Overview of CLI Tools",
        paragraphs: [
          "Playwright bundles two primary command line tools for developers and AI agents:",
          "1. `playwright` (`npx playwright`): The end-to-end test runner, codegen recorder, trace viewer, and browser binary manager.\n2. `playwright-cli` (`npm i -g @playwright/cli`): The specialized agent automation CLI for LLM terminals (e.g. Claude Code, Copilot).",
        ],
        codeBlocks: [
          {
            title: "Quick Test Run",
            language: "bash",
            code: "# Run tests across all configured projects\nnpx playwright test",
          },
        ],
      },
      {
        id: "core-subcommands",
        heading: "Core Subcommands Matrix",
        paragraphs: ["Key subcommands available under `npx playwright`:"],
        table: {
          headers: ["Command", "Arguments", "Description"],
          rows: [
            ["npx playwright test", "[options] [files]", "Executes end-to-end tests."],
            ["npx playwright test --ui", "-", "Launches time-travel interactive UI mode."],
            ["npx playwright codegen", "[url]", "Records browser actions and outputs test code."],
            ["npx playwright show-trace", "[trace.zip]", "Opens execution trace file in viewer."],
            ["npx playwright show-report", "[dir]", "Serves interactive HTML test report."],
            ["npx playwright install", "[browsers]", "Downloads Chromium, Firefox, WebKit binaries."],
            ["npx playwright install-deps", "-", "Installs native Linux OS dependencies."],
          ],
        },
      },
    ],
  },

  "cli-test-run": {
    id: "cli-test-run",
    title: "Running Tests via CLI",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/running-tests",
    description: "Command line options for running tests in headless or headed mode, retries, timeouts, and workers.",
    sections: [
      {
        id: "basic-execution",
        heading: "Basic Test Execution",
        paragraphs: [
          "Execute all tests defined in your test directory using `npx playwright test`.",
        ],
        codeBlocks: [
          {
            title: "Common CLI Flags",
            language: "bash",
            code: `# Run all tests
npx playwright test

# Run in visible headed browser
npx playwright test --headed

# Specify workers limit (e.g. 4 parallel workers)
npx playwright test --workers=4

# Automatically retry failed tests up to 2 times
npx playwright test --retries=2

# Set custom global timeout (in milliseconds)
npx playwright test --timeout=60000`,
          },
        ],
      },
    ],
  },

  "cli-test-filter": {
    id: "cli-test-filter",
    title: "Filtering & Grep",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/running-tests#filtering-tests",
    description: "Run specific files, directories, lines, or tests tagged with title grep patterns.",
    sections: [
      {
        id: "filtering-methods",
        heading: "Filter by File or Line",
        paragraphs: [
          "Target specific test files or specific line numbers directly on the command line:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Run single test file
npx playwright test tests/login.spec.ts

# Run tests in a directory
npx playwright test tests/e2e/

# Run specific test at line 42
npx playwright test tests/checkout.spec.ts:42`,
          },
        ],
      },
      {
        id: "grep-tagging",
        heading: "Filtering with --grep and --grep-invert",
        paragraphs: [
          "Filter tests based on regular expression patterns matching test titles or tags:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Run only tests matching "auth"
npx playwright test -g "auth"

# Run tests with @smoke tag
npx playwright test --grep "@smoke"

# Exclude flaky tests tagged with @slow
npx playwright test --grep-invert "@slow"`,
          },
        ],
      },
    ],
  },

  "cli-test-ui": {
    id: "cli-test-ui",
    title: "Interactive UI Mode CLI",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/test-ui-mode",
    description: "Launch the time-travel debugging UI with DOM snapshot scrubbing, action log, and watch mode.",
    sections: [
      {
        id: "launching-ui-mode",
        heading: "Launching UI Mode",
        paragraphs: [
          "UI Mode provides an interactive GUI for running and debugging test suites with real-time watch mode, console outputs, and visual locator pickers.",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "npx playwright test --ui",
          },
        ],
      },
      {
        id: "ui-mode-features",
        heading: "Core UI Mode Capabilities",
        paragraphs: [
          "• **Time-travel timeline**: Scrub through every before/after DOM state.\n• **Watch mode**: Automatically re-runs tests on file save.\n• **Locator playground**: Interactively test and generate locators against live web app.\n• **Console & Network tabs**: Inspect API calls, headers, payloads, and console warnings.",
        ],
      },
    ],
  },

  "cli-test-debug": {
    id: "cli-test-debug",
    title: "Debugging with Inspector",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/debug",
    description: "Step-by-step execution control using Playwright Inspector, pause statements, and live locator editing.",
    sections: [
      {
        id: "debug-mode",
        heading: "Launching in Debug Mode",
        paragraphs: [
          "Pass `--debug` to open the Playwright Inspector window and run tests with a 0ms step delay:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Debug entire suite
npx playwright test --debug

# Debug specific file
npx playwright test tests/billing.spec.ts --debug`,
          },
        ],
      },
    ],
  },

  "cli-test-sharding": {
    id: "cli-test-sharding",
    title: "Sharding Tests across Machines",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/test-sharding",
    description: "Split your test suite into parallel chunks across multiple CI runners for rapid execution.",
    sections: [
      {
        id: "sharding-syntax",
        heading: "Sharding Syntax",
        paragraphs: [
          "Use `--shard=x/y` where `x` is the current shard index (1-based) and `y` is the total number of shards:",
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

  "cli-test-projects": {
    id: "cli-test-projects",
    title: "Projects & Browser Matrix",
    category: "Playwright Test CLI",
    sourceUrl: "https://playwright.dev/docs/test-projects",
    description: "Filter execution by configured browser projects (chromium, firefox, webkit, Mobile Chrome, Mobile Safari).",
    sections: [
      {
        id: "project-filtering",
        heading: "Selecting Projects",
        paragraphs: [
          "Target specific browser projects defined in your `playwright.config.ts`:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Run only Chromium
npx playwright test --project=chromium

# Run Chromium and Mobile Safari
npx playwright test --project=chromium --project="Mobile Safari"`,
          },
        ],
      },
    ],
  },

  "cli-codegen": {
    id: "cli-codegen",
    title: "Test Generator (codegen)",
    category: "Codegen & Tooling",
    sourceUrl: "https://playwright.dev/docs/codegen",
    description: "Record user interactions in a real browser and generate resilient test code in TypeScript, JavaScript, Python, C#, or Java.",
    sections: [
      {
        id: "recording-tests",
        heading: "Launching Codegen",
        paragraphs: [
          "Run `npx playwright codegen` with an optional target URL to open a browser and the Playwright Inspector recorder window:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Open codegen on a website
npx playwright codegen https://playwright.dev

# Emulate mobile screen size and viewport
npx playwright codegen --device="iPhone 14 Pro" https://example.com

# Target Python language generation
npx playwright codegen --target=python https://example.com

# Save authenticated session while recording
npx playwright codegen --save-storage=auth.json https://my-app.com/login

# Load saved session
npx playwright codegen --load-storage=auth.json https://my-app.com/dashboard`,
          },
        ],
      },
    ],
  },

  "cli-trace": {
    id: "cli-trace",
    title: "Trace Viewer (show-trace)",
    category: "Codegen & Tooling",
    sourceUrl: "https://playwright.dev/docs/trace-viewer",
    description: "Open and inspect local or remote zip trace files with DOM snapshots, console logs, and action timelines.",
    sections: [
      {
        id: "viewing-traces",
        heading: "Opening Trace Files",
        paragraphs: [
          "View recorded trace zip files generated during CI or local test runs:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Open local trace archive
npx playwright show-trace trace.zip

# Open remote trace hosted on S3 or GitHub artifact
npx playwright show-trace https://example.com/build-124/trace.zip`,
          },
        ],
      },
    ],
  },

  "cli-report": {
    id: "cli-report",
    title: "HTML Report (show-report)",
    category: "Codegen & Tooling",
    sourceUrl: "https://playwright.dev/docs/test-reporters#html-reporter",
    description: "Serve and filter interactive HTML reports with video recordings, traces, and step-by-step diffs.",
    sections: [
      {
        id: "serving-reports",
        heading: "Opening the HTML Report",
        paragraphs: [
          "Playwright generates an interactive HTML report under `playwright-report/`. Serve it locally with:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Serve default report
npx playwright show-report

# Serve custom report folder on specific port
npx playwright show-report custom-report --port=9323`,
          },
        ],
      },
    ],
  },

  "cli-install": {
    id: "cli-install",
    title: "Installing Browsers",
    category: "Browser Management",
    sourceUrl: "https://playwright.dev/docs/browsers#installing-browsers",
    description: "Download hermetic browser binaries for Chromium, Firefox, WebKit, and FFmpeg.",
    sections: [
      {
        id: "install-options",
        heading: "Browser Binary Download Commands",
        paragraphs: [
          "Download specific or all browser engines:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Install all browsers (Chromium, Firefox, WebKit)
npx playwright install

# Install Chromium only (fastest CI setup)
npx playwright install chromium

# Install with native OS system dependencies
npx playwright install --with-deps`,
          },
        ],
      },
    ],
  },

  "cli-sysdeps": {
    id: "cli-sysdeps",
    title: "System Dependencies",
    category: "Browser Management",
    sourceUrl: "https://playwright.dev/docs/browsers#install-system-dependencies",
    description: "Install missing Linux operating system shared libraries required to run Chromium, WebKit, and Firefox.",
    sections: [
      {
        id: "installing-deps",
        heading: "Installing Linux OS Dependencies",
        paragraphs: [
          "In Linux CI containers (e.g. Ubuntu, Debian), browser engines require shared system libraries like NSS, Cairo, and GStreamer:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: `# Install system dependencies for all browsers
sudo npx playwright install-deps

# Install system dependencies for Chromium only
sudo npx playwright install-deps chromium`,
          },
        ],
      },
    ],
  },

  "cli-uninstall": {
    id: "cli-uninstall",
    title: "Uninstalling Browsers",
    category: "Browser Management",
    sourceUrl: "https://playwright.dev/docs/browsers#uninstalling-browsers",
    description: "Free disk space by removing unused browser binaries and cached engines from your machine.",
    sections: [
      {
        id: "uninstall-command",
        heading: "Removing Cached Browsers",
        paragraphs: [
          "Playwright stores browser binaries under `~/.cache/ms-playwright` (Linux/macOS) or `%LOCALAPPDATA%\\ms-playwright` (Windows).",
          "Remove all cached binaries to free gigabytes of local disk storage:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "npx playwright uninstall --all",
          },
        ],
      },
    ],
  },

  "cli-agent-overview": {
    id: "cli-agent-overview",
    title: "Playwright Agent CLI Overview",
    category: "Playwright Agent CLI",
    sourceUrl: "https://playwright.dev/docs/test-agents",
    description: "Autonomous browser automation CLI designed for AI coding agents like Claude Code, Copilot, and Cursor.",
    sections: [
      {
        id: "what-is-agent-cli",
        heading: "What is playwright-cli?",
        paragraphs: [
          "`playwright-cli` is a high-speed terminal interface built specifically for LLMs. It exposes persistent sessions, accessible element IDs, and fast state checkpoints without needing heavy JSON-RPC servers.",
        ],
        codeBlocks: [
          {
            title: "Installation",
            language: "bash",
            code: "npm install -g @playwright/cli@latest",
          },
        ],
      },
    ],
  },

  "cli-agent-commands": {
    id: "cli-agent-commands",
    title: "Agent Commands Reference",
    category: "Playwright Agent CLI",
    sourceUrl: "https://playwright.dev/docs/test-agents",
    description: "Complete syntax reference for open, snapshot, click, type, press, and close commands.",
    sections: [
      {
        id: "commands-table",
        heading: "Agent Command Syntax",
        paragraphs: ["Commands executed sequentially by autonomous terminal agents:"],
        codeBlocks: [
          {
            language: "bash",
            code: `# 1. Open URL in headed browser
playwright-cli open https://demo.playwright.dev/todomvc --headed

# 2. Get accessibility snapshot with element IDs
playwright-cli snapshot

# 3. Type into input
playwright-cli type "Clean desk"

# 4. Press Enter key
playwright-cli press Enter

# 5. Click element by ref handle
playwright-cli click e12

# 6. Save authenticated storage state
playwright-cli storage save session.json

# 7. Close browser process
playwright-cli close`,
          },
        ],
      },
    ],
  },

  "cli-agent-skills": {
    id: "cli-agent-skills",
    title: "Skills & LLM Integration",
    category: "Playwright Agent CLI",
    sourceUrl: "https://playwright.dev/docs/test-agents",
    description: "Install Playwright agent skills directly into Claude Code, Cursor, and Antigravity assistants.",
    sections: [
      {
        id: "install-skills",
        heading: "Installing Agent Skills",
        paragraphs: [
          "Install pre-configured agent automation skills into your AI assistant workspace:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "playwright-cli install --skills",
          },
        ],
      },
    ],
  },
};

