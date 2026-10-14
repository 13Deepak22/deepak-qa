"use client";

import { ExternalLink, Home, Terminal, Bot, Server, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import { DocTabs } from "./doc-tabs";
import { DocCodeBlock } from "./doc-code-block";
import type { TocHeading } from "@/data/learn-docs-data";

export function getMcpToc(): TocHeading[] {
  return [
    { id: "overview", text: "Overview & Architecture", level: 2 },
    { id: "key-features", text: "Key Features", level: 2 },
    { id: "quick-start", text: "Quick Start & Setup", level: 2 },
    { id: "capabilities", text: "Capabilities & Flags (--caps)", level: 2 },
    { id: "available-tools", text: "Available MCP Tools", level: 2 },
    { id: "example-workflow", text: "AI Agent Workflow Example", level: 2 },
  ];
}

export function McpView() {
  const quickStartTabs = [
    {
      label: "npx (Claude / Cursor)",
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
    {
      label: "Terminal CLI",
      language: "bash",
      code: `# Run standalone MCP server
npx @playwright/mcp@latest --caps=network,storage,testing,devtools`,
    },
    {
      label: "Claude Desktop Config",
      language: "json",
      code: `// claude_desktop_config.json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest",
        "--caps=network,storage"
      ]
    }
  }
}`,
    },
  ];

  const agentCodeExample = `// Example agent session with Playwright MCP
// 1. Agent asks for an accessibility snapshot:
const snapshot = await callMcpTool("playwright", "browser_snapshot", {});

// 2. Snapshot returns clean semantic tree without DOM noise:
// - button "Submit Order" [focused]
// - textbox "Promo Code"

// 3. Agent triggers deterministic action based on element reference:
await callMcpTool("playwright", "browser_click", {
  target: 'button "Submit Order"'
});`;

  const toolsTable = [
    ["browser_navigate", "url: string", "Navigates to URL and waits for network commitment."],
    ["browser_snapshot", "-", "Captures clean, token-efficient accessibility snapshot tree."],
    ["browser_click", "target: string", "Clicks an element identified by semantic accessibility selector."],
    ["browser_type", "target: string, text: string", "Types characters sequentially into target input."],
    ["browser_fill_form", "values: object", "Fills multiple form fields in one atomic tool invocation."],
    ["browser_press_key", "key: string", "Dispatches keyboard key events (e.g. 'Enter', 'Escape')."],
    ["browser_hover", "target: string", "Hovers cursor over an element to trigger dropdowns or menus."],
    ["browser_select_option", "target: string, value: string", "Selects an option in dropdown element."],
    ["browser_evaluate", "function: string", "Evaluates JavaScript in browser window context."],
    ["browser_take_screenshot", "path?: string", "Captures PNG visual snapshot of viewport."],
  ];

  return (
    <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
        <Link href="/" className="flex items-center hover:text-ink transition-colors" aria-label="Home page">
          <Home className="h-3.5 w-3.5" />
        </Link>
        <span className="text-line">/</span>
        <span className="hover:text-ink cursor-default">Ecosystem</span>
        <span className="text-line">/</span>
        <span className="font-medium text-pass">Playwright MCP</span>
      </nav>

      {/* Main Title Header */}
      <header className="mb-8 border-b border-line/60 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
            <Bot className="h-3.5 w-3.5 text-pass" />
            Model Context Protocol
          </div>
          <a
            href="https://playwright.dev/mcp/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-pass transition"
          >
            <span>Original source</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl mb-2">Playwright MCP</h1>
        <p className="text-sm sm:text-base text-muted">
          A Model Context Protocol server providing browser automation capabilities for LLMs and AI coding agents via structured accessibility snapshots — no heavy vision models required.
        </p>
      </header>

      {/* Section 1: Overview */}
      <section id="overview" className="mb-10 scroll-mt-32">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Overview & Architecture</h2>
        <p className="text-sm sm:text-base leading-relaxed text-ink/90 mb-3">
          Playwright MCP translates high-level model actions into deterministic browser commands. Rather than passing giant raw HTML trees or thousands of screenshot tokens to the LLM, Playwright MCP captures concise, semantic accessibility snapshots (AXTree).
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-ink/90 mb-4">
          This drastically cuts down latency, reduces token costs by up to 90%, and prevents hallucinations common when parsing messy web DOMs.
        </p>
      </section>

      {/* Section 2: Key Features */}
      <section id="key-features" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-sans">
          <div className="rounded-lg border border-line bg-card/60 p-4">
            <h3 className="font-semibold text-ink text-sm mb-1 flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-pass" /> Token Efficient
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Accessibility tree representation eliminates script tags, style sheets, and extraneous DOM nodes.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-card/60 p-4">
            <h3 className="font-semibold text-ink text-sm mb-1 flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-pass" /> Deterministic Auto-Waiting
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Every tool execution auto-waits for actionability, stability, and navigation events automatically.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-card/60 p-4">
            <h3 className="font-semibold text-ink text-sm mb-1 flex items-center gap-1.5">
              <Server className="h-4 w-4 text-pass" /> Standard MCP Spec
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Plugs seamlessly into Claude Desktop, Cursor, Antigravity, and any MCP-compliant AI assistant.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-card/60 p-4">
            <h3 className="font-semibold text-ink text-sm mb-1 flex items-center gap-1.5">
              <Terminal className="h-4 w-4 text-pass" /> Modular Capabilities
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Enable only what you need: network monitoring, storage sessions, PDF generation, or devtools inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Quick Start */}
      <section id="quick-start" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Quick Start & Setup</h2>
        <p className="text-sm text-ink/90 mb-3">
          Configure Playwright MCP inside your AI assistant or run it directly from your terminal:
        </p>
        <DocTabs tabs={quickStartTabs} />
      </section>

      {/* Section 4: Capabilities */}
      <section id="capabilities" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Capabilities & Flags (--caps)</h2>
        <p className="text-sm text-ink/90 mb-3">
          Control tool availability to maintain security and conserve model context:
        </p>
        <div className="my-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-line bg-card/80 font-mono text-ink">
              <tr>
                <th className="px-3.5 py-2.5 font-semibold">Capability</th>
                <th className="px-3.5 py-2.5 font-semibold">CLI Flag</th>
                <th className="px-3.5 py-2.5 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 bg-paper/40 font-mono text-xs">
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">Core</td>
                <td className="px-3.5 py-2.5 text-muted">Always on</td>
                <td className="px-3.5 py-2.5">Navigation, clicking, typing, and accessibility snapshots.</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">Network</td>
                <td className="px-3.5 py-2.5 text-muted">--caps=network</td>
                <td className="px-3.5 py-2.5">HTTP request/response inspection and network throttling.</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">Storage</td>
                <td className="px-3.5 py-2.5 text-muted">--caps=storage</td>
                <td className="px-3.5 py-2.5">Cookies, localStorage, and authentication state persistence.</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">Testing</td>
                <td className="px-3.5 py-2.5 text-muted">--caps=testing</td>
                <td className="px-3.5 py-2.5">Assertions and test runner orchestration.</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">DevTools</td>
                <td className="px-3.5 py-2.5 text-muted">--caps=devtools</td>
                <td className="px-3.5 py-2.5">Console logs, page errors, and performance traces.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Available Tools */}
      <section id="available-tools" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Available MCP Tools</h2>
        <p className="text-sm text-ink/90 mb-3">
          Every tool exposed to the AI model follows strict JSON Schema definitions:
        </p>
        <div className="my-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-line bg-card/80 font-mono text-ink">
              <tr>
                <th className="px-3.5 py-2.5 font-semibold">Tool Name</th>
                <th className="px-3.5 py-2.5 font-semibold">Key Parameters</th>
                <th className="px-3.5 py-2.5 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 bg-paper/40 font-mono text-xs">
              {toolsTable.map(([tool, params, desc], idx) => (
                <tr key={idx} className="hover:bg-card/40 transition">
                  <td className="px-3.5 py-2.5 font-semibold text-pass">{tool}</td>
                  <td className="px-3.5 py-2.5 text-muted">{params}</td>
                  <td className="px-3.5 py-2.5">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Workflow Example */}
      <section id="example-workflow" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">AI Agent Workflow Example</h2>
        <p className="text-sm text-ink/90 mb-3">
          Here is how an agent automates user actions via MCP without eyesight or pixel coordinates:
        </p>
        <DocCodeBlock code={agentCodeExample} language="typescript" />
      </section>
    </article>
  );
}

