import type { TocHeading, DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const MCP_CATEGORIES: DocCategory[] = [
  {
    title: "Introduction",
    id: "mcp-intro",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "mcp-intro", text: "Introduction" }],
  },
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "mcp-install", text: "Installation" },
      { id: "mcp-clients", text: "Client Setup" },
      { id: "mcp-first-interaction", text: "First Interaction" },
    ],
  },
  {
    title: "Core Concepts",
    defaultOpen: true,
    items: [
      { id: "mcp-snapshots", text: "Accessibility Snapshots" },
      { id: "mcp-capabilities", text: "Capabilities (--caps)" },
      { id: "mcp-vision", text: "Vision Mode" },
    ],
  },
  {
    title: "Browser Automation",
    defaultOpen: false,
    items: [
      { id: "mcp-navigation", text: "Navigation & Clicks" },
      { id: "mcp-inputs", text: "Forms, Keyboard & Mouse" },
      { id: "mcp-dialogs", text: "Dialogs & Waiting" },
      { id: "mcp-tabs", text: "Tabs & Windows" },
    ],
  },
  {
    title: "Network & Storage",
    defaultOpen: false,
    items: [
      { id: "mcp-network", text: "Network Routing & Mocking" },
      { id: "mcp-storage", text: "Storage & Cookies" },
    ],
  },
  {
    title: "Developer Tools",
    defaultOpen: false,
    items: [
      { id: "mcp-console", text: "Console & Logs" },
      { id: "mcp-eval", text: "JavaScript Evaluation" },
      { id: "mcp-tracing", text: "Tracing" },
    ],
  },
  {
    title: "Video Recording",
    id: "mcp-video",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "mcp-video", text: "Video Recording" }],
  },
  {
    title: "Sessions",
    defaultOpen: false,
    items: [
      { id: "mcp-profiles", text: "Profile & State" },
      { id: "mcp-connecting", text: "Connecting to Browsers (CDP)" },
    ],
  },
  {
    title: "Configuration",
    id: "mcp-config",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "mcp-config", text: "Configuration" }],
  },
];

export const MCP_DOCS: Record<string, DetailedDoc> = {
  "mcp-intro": {
    id: "mcp-intro",
    title: "Playwright MCP Introduction",
    category: "Introduction",
    sourceUrl: "https://playwright.dev/mcp/introduction",
    description:
      "Connect AI coding assistants and LLMs to real browser engines using structured accessibility snapshots and the Model Context Protocol.",
    sections: [
      {
        id: "what-is-playwright-mcp",
        heading: "What is Playwright MCP?",
        paragraphs: [
          "Playwright MCP is an official Model Context Protocol (MCP) server package (@playwright/mcp@latest) that provides high-fidelity, deterministic browser automation capabilities directly to LLMs.",
          "Unlike screenshot-heavy vision automation agents that consume huge token budgets and suffer from coordinate inaccuracies, Playwright MCP captures clean, semantic accessibility snapshots (AXTree).",
        ],
        codeBlocks: [
          {
            title: "Quick Start via NPX",
            language: "bash",
            code: "npx -y @playwright/mcp@latest",
          },
        ],
      },
      {
        id: "why-accessibility-snapshots",
        heading: "Why Accessibility Snapshots (AXTree)?",
        paragraphs: [
          "Traditional web scrapers feed raw DOM HTML to LLMs, wasting thousands of tokens on script tags, stylesheets, and nested wrappers. Vision agents process huge screenshot images, introducing coordinate hallucinations.",
          "Playwright MCP exposes the browser's accessibility tree, mapping only interactable semantic roles, labels, and clean reference handles (e.g. `ref=e5`).",
        ],
        table: {
          headers: ["Approach", "Token Overhead", "Reliability", "Auto-Waiting"],
          rows: [
            ["Raw DOM HTML", "Extremely High (30k-100k tokens)", "Low (noise & hallucinations)", "No"],
            ["Vision (Screenshots)", "High (1k-3k tokens per step)", "Medium (coordinate drift)", "No"],
            ["Playwright MCP (AXTree)", "Minimal (300-800 tokens)", "Deterministic (semantic refs)", "Yes (built-in)"],
          ],
        },
      },
      {
        id: "supported-ai-clients",
        heading: "Supported AI Clients",
        paragraphs: [
          "Playwright MCP adheres strictly to the official Model Context Protocol specification and connects out-of-the-box with all leading AI developer tools:",
          "• VS Code & GitHub Copilot Chat (via `@playwright/mcp`)\n• Cursor IDE (Settings -> MCP Servers)\n• Windsurf / Cascade\n• Claude Code CLI (`claude mcp add`)\n• Claude Desktop App\n• Google Antigravity & Agentic Frameworks",
        ],
      },
    ],
  },

  "mcp-install": {
    id: "mcp-install",
    title: "Installing Playwright MCP",
    category: "Getting Started",
    sourceUrl: "https://playwright.dev/mcp/getting-started/installation",
    description: "Install and configure @playwright/mcp with Node.js 20+ across desktop apps, CLI tools, and IDEs.",
    sections: [
      {
        id: "prerequisites",
        heading: "Prerequisites",
        paragraphs: [
          "Before configuring Playwright MCP, ensure you have Node.js 20 or newer installed on your machine.",
          "Run `node -v` in your terminal to verify your runtime version.",
        ],
      },
      {
        id: "installation-commands",
        heading: "Installation & Run Options",
        paragraphs: [
          "Playwright MCP can be executed directly using `npx` without needing global installation, or installed globally for dedicated local server instances.",
        ],
        codeBlocks: [
          {
            tabs: [
              {
                label: "npx (Recommended)",
                language: "bash",
                code: "# Run latest MCP server with core capabilities\nnpx -y @playwright/mcp@latest",
              },
              {
                label: "Global Install",
                language: "bash",
                code: "npm install -g @playwright/mcp\nplaywright-mcp --caps=network,storage",
              },
              {
                label: "Docker",
                language: "bash",
                code: "docker run -i --rm --init -p 3000:3000 mcr.microsoft.com/playwright/mcp",
              },
            ],
          },
        ],
      },
      {
        id: "browser-binaries",
        heading: "Browser Engine Binaries",
        paragraphs: [
          "When you launch Playwright MCP for the first time, it uses your local Chromium browser or automatically downloads hermetic browser binaries.",
          "To pre-install all browser binaries before launching the MCP server, run `npx playwright install --with-deps`.",
        ],
      },
    ],
  },

  "mcp-clients": {
    id: "mcp-clients",
    title: "Client Setup & Configuration",
    category: "Getting Started",
    sourceUrl: "https://playwright.dev/mcp/getting-started/clients",
    description: "Step-by-step connection guides for Cursor, Claude Code, VS Code, and Claude Desktop.",
    sections: [
      {
        id: "cursor-setup",
        heading: "Cursor IDE Setup",
        paragraphs: [
          "In Cursor, navigate to **Settings -> Features -> MCP** and click **+ Add New MCP Server**.",
          "Set Name to `playwright`, Type to `command`, and Command to `npx -y @playwright/mcp@latest`.",
        ],
        codeBlocks: [
          {
            title: "~/.cursor/mcp.json",
            language: "json",
            code: `{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}`,
          },
        ],
      },
      {
        id: "claude-code-setup",
        heading: "Claude Code CLI Setup",
        paragraphs: [
          "Add Playwright MCP to your Claude Code workspace using the built-in `claude mcp add` command:",
        ],
        codeBlocks: [
          {
            language: "bash",
            code: "claude mcp add playwright npx -y @playwright/mcp@latest",
          },
        ],
      },
      {
        id: "claude-desktop-setup",
        heading: "Claude Desktop Configuration",
        paragraphs: [
          "Add the server definition to your `claude_desktop_config.json` configuration file:",
        ],
        codeBlocks: [
          {
            title: "%APPDATA%\\Claude\\claude_desktop_config.json (Windows)",
            language: "json",
            code: `{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--caps=network,storage"]
    }
  }
}`,
          },
        ],
      },
    ],
  },

  "mcp-first-interaction": {
    id: "mcp-first-interaction",
    title: "First Interaction with Playwright MCP",
    category: "Getting Started",
    sourceUrl: "https://playwright.dev/mcp/getting-started/first-interaction",
    description: "Run your first end-to-end autonomous agent interaction and verify accessibility feedback.",
    sections: [
      {
        id: "example-prompt",
        heading: "Sample AI Prompts",
        paragraphs: [
          "Once Playwright MCP is connected in your AI assistant, enter any natural language browsing or testing instruction:",
          "• *'Open https://demo.playwright.dev/todomvc, add three tasks, and mark the second task complete.'*\n• *'Navigate to our staging store, search for wireless earbuds, and verify the checkout button is visible.'*\n• *'Fill out the contact form with test values and take an accessibility snapshot.'*",
        ],
      },
      {
        id: "tool-execution-flow",
        heading: "Autonomous Tool Execution Loop",
        paragraphs: [
          "Under the hood, your assistant will orchestrate a sequence of automated tool invocations:",
          "1. `browser_navigate`: Opens the requested URL in a headed Chromium browser.\n2. `browser_snapshot`: Receives structured accessibility roles and names.\n3. `browser_type`: Types characters into input elements identified by `ref`.\n4. `browser_click`: Clicks buttons, checkboxes, and links with auto-waiting.",
        ],
        codeBlocks: [
          {
            title: "Simulated Agent Log Stream",
            language: "text",
            code: `[Agent] -> browser_navigate { url: "https://demo.playwright.dev/todomvc" }
[MCP]   <- Navigated to https://demo.playwright.dev/todomvc (status: 200)
[Agent] -> browser_snapshot {}
[MCP]   <- Accessibility Tree:
          - textbox "What needs to be done?" [ref=e1]
[Agent] -> browser_type { target: "ref=e1", text: "Buy groceries" }
[Agent] -> browser_press_key { key: "Enter" }
[MCP]   <- Task added: "Buy groceries" [ref=e4]`,
          },
        ],
      },
    ],
  },

  "mcp-snapshots": {
    id: "mcp-snapshots",
    title: "Accessibility Snapshots (AXTree)",
    category: "Core Concepts",
    sourceUrl: "https://playwright.dev/mcp/core-concepts/snapshots",
    description: "Deep dive into accessibility tree snapshots, element references, and token optimization.",
    sections: [
      {
        id: "snapshot-structure",
        heading: "Snapshot Structure & Format",
        paragraphs: [
          "The `browser_snapshot` tool returns an indented YAML-style representation of the document's accessibility hierarchy.",
          "Every interactable node includes its ARIA role, accessible name, state flags (`[focused]`, `[disabled]`), and an ephemeral reference handle (`ref=...`).",
        ],
        codeBlocks: [
          {
            title: "Sample Accessibility Snapshot",
            language: "yaml",
            code: `- generic [active]:
  - banner:
    - heading "Todo Application" [level=1]
  - main:
    - textbox "What needs to be done?" [ref=e1] [focused]
    - list:
      - listitem:
        - checkbox "Toggle Complete" [ref=e2]
        - text "Review pull requests"
        - button "Delete task" [ref=e3]
    - button "Clear completed" [ref=e4] [disabled]`,
          },
        ],
      },
      {
        id: "reference-handles",
        heading: "Deterministic Reference Handles (ref)",
        paragraphs: [
          "Rather than guessing fragile CSS or XPath selectors, the model targets elements directly using `ref=eX`.",
          "Playwright MCP binds reference handles to internal `Locator` instances, guaranteeing that actions like clicks and keyboard typing trigger Playwright's automatic actionability checks.",
        ],
      },
    ],
  },

  "mcp-capabilities": {
    id: "mcp-capabilities",
    title: "Capabilities & Flags (--caps)",
    category: "Core Concepts",
    sourceUrl: "https://playwright.dev/mcp/core-concepts/capabilities",
    description: "Fine-tune exposed tools using capability flags to maintain security and optimize token budgets.",
    sections: [
      {
        id: "available-caps",
        heading: "Capability Flags Matrix",
        paragraphs: [
          "By default, Playwright MCP exposes only core browser actions to prevent token clutter. Additional capabilities can be activated via `--caps` command-line flags:",
        ],
        table: {
          headers: ["Capability", "Flag", "Included Tools", "Description"],
          rows: [
            ["Core", "Always on", "navigate, click, type, fill, hover, snapshot", "Primary browser automation tools."],
            ["Network", "--caps=network", "browser_route, browser_unroute, browser_network_state", "Network traffic interception and API mocking."],
            ["Storage", "--caps=storage", "browser_cookie_list, browser_cookie_set, browser_storage", "Cookie and localStorage session persistence."],
            ["DevTools", "--caps=devtools", "browser_console_messages, browser_evaluate, browser_tracing", "Console logs, JS eval, and performance traces."],
            ["Vision", "--caps=vision", "browser_take_screenshot, browser_click_coords", "Visual coordinates and PNG screenshots."],
            ["Video", "--caps=devtools", "browser_start_video, browser_stop_video", "Records video sessions with chapter cards."],
          ],
        },
      },
      {
        id: "configuring-caps",
        heading: "Configuring Multiple Capabilities",
        paragraphs: [
          "Combine capabilities with commas in your MCP client configuration arguments:",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "args": [
    "-y",
    "@playwright/mcp@latest",
    "--caps=network,storage,devtools"
  ]
}`,
          },
        ],
      },
    ],
  },

  "mcp-vision": {
    id: "mcp-vision",
    title: "Vision Mode & Coordinates",
    category: "Core Concepts",
    sourceUrl: "https://playwright.dev/mcp/core-concepts/vision-mode",
    description: "Enable visual screenshot processing and coordinate-based interactions for Canvas, WebGL, and games.",
    sections: [
      {
        id: "when-to-use-vision",
        heading: "When to Enable Vision Mode",
        paragraphs: [
          "Accessibility snapshots handle 95% of standard web applications. However, certain web apps (e.g. HTML5 Canvas, WebGL 3D scenes, maps, legacy flash-like games) lack semantic DOM trees.",
          "In these specialized scenarios, enable `--caps=vision` to allow the AI model to capture visual viewport images and dispatch click coordinates.",
        ],
      },
      {
        id: "vision-tools",
        heading: "Vision Tools",
        paragraphs: [
          "• `browser_take_screenshot`: Captures a base64 or PNG snapshot of the active viewport.\n• `browser_click_coords`: Clicks at specific X, Y pixel coordinates.",
        ],
      },
    ],
  },

  "mcp-navigation": {
    id: "mcp-navigation",
    title: "Navigation & Clicks",
    category: "Browser Automation",
    sourceUrl: "https://playwright.dev/mcp/browser-automation/navigation",
    description: "Deterministic page loading, waiting for network idle, semantic clicks, and hover triggers.",
    sections: [
      {
        id: "navigation-tools",
        heading: "Core Navigation Tools",
        paragraphs: [
          "• `browser_navigate`: Navigates the current browser tab to target URL and waits for network commitment.\n• `browser_navigate_back`: Simulates history back navigation.\n• `browser_click`: Clicks element identified by accessible selector or ref handle with automatic actionability.",
        ],
        codeBlocks: [
          {
            title: "Navigation Tool Invocations",
            language: "json",
            code: `// Navigate
{ "tool": "browser_navigate", "arguments": { "url": "https://example.com" } }

// Semantic Click
{ "tool": "browser_click", "arguments": { "target": "button 'Submit Order'" } }`,
          },
        ],
      },
    ],
  },

  "mcp-inputs": {
    id: "mcp-inputs",
    title: "Forms, Keyboard & Mouse",
    category: "Browser Automation",
    sourceUrl: "https://playwright.dev/mcp/browser-automation/inputs",
    description: "Atomic multi-field form fills, typing, special key strokes, and drag-and-drop operations.",
    sections: [
      {
        id: "form-filling",
        heading: "Atomic Form Filling",
        paragraphs: [
          "Rather than making separate round-trips for every input, `browser_fill_form` allows the AI model to fill out an entire checkout or login form in a single tool invocation:",
        ],
        codeBlocks: [
          {
            title: "browser_fill_form Arguments",
            language: "json",
            code: `{
  "tool": "browser_fill_form",
  "arguments": {
    "values": {
      "textbox 'First Name'": "Alice",
      "textbox 'Last Name'": "Smith",
      "textbox 'Email'": "alice@example.com",
      "combobox 'Country'": "United States"
    }
  }
}`,
          },
        ],
      },
      {
        id: "keyboard-mouse",
        heading: "Keyboard & Mouse Actions",
        paragraphs: [
          "• `browser_type`: Types characters sequentially into a target input element.\n• `browser_press_key`: Dispatches keyboard key events (e.g. 'Enter', 'Escape', 'Tab', 'ArrowDown').\n• `browser_hover`: Hovers the cursor over an element to reveal hover cards or drop-down submenus.\n• `browser_drag`: Drags a source element and drops it onto target locator.",
        ],
      },
    ],
  },

  "mcp-dialogs": {
    id: "mcp-dialogs",
    title: "Dialogs & Waiting",
    category: "Browser Automation",
    sourceUrl: "https://playwright.dev/mcp/browser-automation/dialogs",
    description: "Intercept JavaScript alerts, confirms, prompts, and configure explicit stability wait states.",
    sections: [
      {
        id: "handling-dialogs",
        heading: "JavaScript Dialogs (Alert, Confirm, Prompt)",
        paragraphs: [
          "By default, Playwright automatically dismisses dialogs to prevent execution hangs. Use `browser_handle_dialog` to accept or enter custom text into prompt dialogs.",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "tool": "browser_handle_dialog",
  "arguments": {
    "action": "accept",
    "promptText": "Confirmed by Agent"
  }
}`,
          },
        ],
      },
      {
        id: "waiting-mechanics",
        heading: "Waiting Tools",
        paragraphs: [
          "Playwright MCP includes auto-waiting on all element actions. In cases where animations, async timers, or third-party widgets require explicit wait conditions, use `browser_wait_for`.",
        ],
      },
    ],
  },

  "mcp-tabs": {
    id: "mcp-tabs",
    title: "Tabs & Windows",
    category: "Browser Automation",
    sourceUrl: "https://playwright.dev/mcp/browser-automation/tabs",
    description: "Manage multiple browser tabs, handle new popup windows, and switch active context.",
    sections: [
      {
        id: "tab-management",
        heading: "Multi-Tab Operations",
        paragraphs: [
          "The `browser_tabs` tool enables inspection and switching across multiple tabs in the active browser context.",
          "When links open with `target=\"_blank\"` or popups appear, Playwright MCP automatically tracks the newly opened page and lets the agent switch focus effortlessly.",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `// List open tabs
{ "tool": "browser_tabs", "arguments": { "action": "list" } }

// Select specific tab index
{ "tool": "browser_tabs", "arguments": { "action": "select", "index": 1 } }`,
          },
        ],
      },
    ],
  },

  "mcp-network": {
    id: "mcp-network",
    title: "Network Routing & Mocking",
    category: "Network & Storage",
    sourceUrl: "https://playwright.dev/mcp/network-storage/network",
    description: "Intercept HTTP requests, mock API responses, and simulate offline connection modes.",
    sections: [
      {
        id: "api-mocking",
        heading: "Mocking REST & GraphQL Endpoints",
        paragraphs: [
          "With `--caps=network` enabled, agents can stub backend services, mock error codes (e.g. 500, 403), or inject custom JSON payloads using `browser_route`.",
        ],
        codeBlocks: [
          {
            title: "Mocking a User Profile API",
            language: "json",
            code: `{
  "tool": "browser_route",
  "arguments": {
    "url": "**/api/v1/user",
    "status": 200,
    "contentType": "application/json",
    "body": "{\\"id\\": 42, \\"name\\": \\"Test QA User\\", \\"role\\": \\"admin\\"}"
  }
}`,
          },
        ],
      },
      {
        id: "offline-mode",
        heading: "Simulating Offline States",
        paragraphs: [
          "Test offline handling and service workers using `browser_network_state_set` with `offline: true`.",
        ],
      },
    ],
  },

  "mcp-storage": {
    id: "mcp-storage",
    title: "Storage & Cookies",
    category: "Network & Storage",
    sourceUrl: "https://playwright.dev/mcp/network-storage/storage",
    description: "Persist authentication states, inject session cookies, and inspect localStorage.",
    sections: [
      {
        id: "managing-cookies",
        heading: "Cookie & Session Management",
        paragraphs: [
          "With `--caps=storage`, use `browser_cookie_list`, `browser_cookie_set`, and `browser_cookie_clear` to bypass login forms in test workflows by directly injecting valid session cookies or JWT tokens.",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "tool": "browser_cookie_set",
  "arguments": {
    "name": "auth_token",
    "value": "xyz987_session_token",
    "domain": "example.com",
    "path": "/"
  }
}`,
          },
        ],
      },
    ],
  },

  "mcp-console": {
    id: "mcp-console",
    title: "Console & Logs",
    category: "Developer Tools",
    sourceUrl: "https://playwright.dev/mcp/developer-tools/console",
    description: "Inspect browser JavaScript console errors, warnings, and unhandled exception traces.",
    sections: [
      {
        id: "reading-console",
        heading: "Inspecting Console Output",
        paragraphs: [
          "Enable `--caps=devtools` to invoke `browser_console_messages`.",
          "Agents can verify that no unexpected uncaught exceptions, 404 network errors, or React hydration warnings occurred during execution.",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "tool": "browser_console_messages",
  "arguments": { "level": "error" }
}`,
          },
        ],
      },
    ],
  },

  "mcp-eval": {
    id: "mcp-eval",
    title: "JavaScript Evaluation",
    category: "Developer Tools",
    sourceUrl: "https://playwright.dev/mcp/developer-tools/evaluation",
    description: "Execute arbitrary JavaScript code inside the browser window context.",
    sections: [
      {
        id: "browser-evaluate",
        heading: "Evaluating Scripts with browser_evaluate",
        paragraphs: [
          "With `--caps=devtools` enabled, the agent can execute code directly in the page window context to query custom properties, trigger internal application events, or extract performance metrics.",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "tool": "browser_evaluate",
  "arguments": {
    "function": "() => window.performance.timing.loadEventEnd - window.performance.timing.navigationStart"
  }
}`,
          },
        ],
      },
    ],
  },

  "mcp-tracing": {
    id: "mcp-tracing",
    title: "Performance & Diagnostic Tracing",
    category: "Developer Tools",
    sourceUrl: "https://playwright.dev/mcp/developer-tools/tracing",
    description: "Record Playwright execution traces for time-travel debugging in the Trace Viewer.",
    sections: [
      {
        id: "recording-traces",
        heading: "Traces for Agent Workflows",
        paragraphs: [
          "Record complete diagnostic zip traces of agent sessions including DOM snapshots, network waterfall charts, and action timelines.",
          "Traces can be opened directly with `npx playwright show-trace trace.zip` or inspected inside VS Code.",
        ],
      },
    ],
  },

  "mcp-video": {
    id: "mcp-video",
    title: "Video Recording",
    category: "Video Recording",
    sourceUrl: "https://playwright.dev/mcp/video-recording",
    description: "Record browser sessions as WebM videos with chapter markers and action overlays.",
    sections: [
      {
        id: "video-tools",
        heading: "Video Recording Tools",
        paragraphs: [
          "Record high-resolution videos of agent automation sessions with chapter cards and action callouts.",
          "Requires the `devtools` capability flag (`--caps=devtools`).",
        ],
        codeBlocks: [
          {
            title: "Video Tool Example",
            language: "json",
            code: `// 1. Start recording
{ "tool": "browser_start_video", "arguments": { "filename": "agent-run.webm" } }

// 2. Add chapter marker
{ "tool": "browser_video_chapter", "arguments": { "title": "Submitting Payment" } }

// 3. Stop recording
{ "tool": "browser_stop_video", "arguments": {} }`,
          },
        ],
      },
      {
        id: "video-parameters",
        heading: "Video Parameters",
        paragraphs: [
          "• `filename`: Optional custom filename (e.g. `checkout-test.webm`). Defaults to timestamped webm in output directory.\n• `size`: Optional custom video dimension object (`{ width: 1280, height: 720 }`).",
        ],
      },
    ],
  },

  "mcp-profiles": {
    id: "mcp-profiles",
    title: "Profile & State Persistence",
    category: "Sessions",
    sourceUrl: "https://playwright.dev/mcp/sessions/profiles",
    description: "Maintain persistent browser profiles, stay logged into sites, and manage user data directories.",
    sections: [
      {
        id: "persistent-profiles",
        heading: "Persistent Browser Profiles",
        paragraphs: [
          "By default, Playwright MCP uses an isolated, ephemeral browser session. To keep login sessions, cookies, and cached data across multiple agent sessions, specify a persistent user data directory:",
        ],
        codeBlocks: [
          {
            language: "json",
            code: `{
  "args": [
    "-y",
    "@playwright/mcp@latest",
    "--user-data-dir=./.playwright-mcp-profile"
  ]
}`,
          },
        ],
      },
    ],
  },

  "mcp-connecting": {
    id: "mcp-connecting",
    title: "Connecting to Browsers (CDP)",
    category: "Sessions",
    sourceUrl: "https://playwright.dev/mcp/sessions/connecting",
    description: "Attach Playwright MCP to already running Chrome or Edge browser instances using CDP.",
    sections: [
      {
        id: "cdp-connection",
        heading: "Connecting via Chrome DevTools Protocol (CDP)",
        paragraphs: [
          "You can connect Playwright MCP to an already running desktop browser session (such as Google Chrome or Microsoft Edge launched with `--remote-debugging-port=9222`).",
          "This lets the agent operate within your personal browser session, with all your existing authenticated accounts, extensions, and bookmarks already available.",
        ],
        codeBlocks: [
          {
            title: "Launch Chrome with Debugging Port",
            language: "bash",
            code: `chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\\temp\\chrome-debug"`,
          },
          {
            title: "MCP Config to Attach to CDP",
            language: "json",
            code: `{
  "args": [
    "-y",
    "@playwright/mcp@latest",
    "--endpoint=http://localhost:9222"
  ]
}`,
          },
        ],
      },
    ],
  },

  "mcp-config": {
    id: "mcp-config",
    title: "Configuration & CLI Options",
    category: "Configuration",
    sourceUrl: "https://playwright.dev/mcp/configuration",
    description: "Complete reference of all command-line arguments, environment variables, and browser options for @playwright/mcp.",
    sections: [
      {
        id: "cli-options-table",
        heading: "Command Line Options Reference",
        paragraphs: [
          "All options supported by `@playwright/mcp@latest` when configured in MCP clients or launched via terminal:",
        ],
        table: {
          headers: ["Option Flag", "Type", "Default", "Description"],
          rows: [
            ["--browser=<name>", "string", "chromium", "Target engine: chromium, firefox, webkit, chrome, msedge."],
            ["--headless", "boolean", "false", "Runs browser headlessly without opening visible GUI window."],
            ["--caps=<list>", "string", "core", "Comma-separated capabilities: network, storage, devtools, vision."],
            ["--endpoint=<url>", "string", "none", "Connects to existing browser via CDP or WebSocket endpoint."],
            ["--user-data-dir=<path>", "string", "none", "Path to persistent profile directory for cookies and storage."],
            ["--viewport-size=<wxh>", "string", "1280x720", "Default browser viewport dimensions in pixels."],
            ["--device=<name>", "string", "none", "Emulates specific device descriptor (e.g. 'iPhone 15', 'Pixel 7')."],
            ["--port=<number>", "number", "none", "Runs MCP server via SSE on specified HTTP port."],
          ],
        },
      },
    ],
  },
};
