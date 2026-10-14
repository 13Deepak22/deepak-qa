"use client";

import { ExternalLink, Home, Terminal, Sparkles, Command, ShieldCheck, Play } from "lucide-react";
import Link from "next/link";
import { DocTabs } from "./doc-tabs";
import { DocCodeBlock } from "./doc-code-block";
import type { TocHeading } from "@/data/learn-docs-data";

export function getCliToc(): TocHeading[] {
  return [
    { id: "overview", text: "Playwright CLI Overview", level: 2 },
    { id: "test-runner-cli", text: "Test Runner CLI Commands", level: 2 },
    { id: "agent-cli", text: "Playwright Agent CLI", level: 2 },
    { id: "codegen-cli", text: "Codegen & Recording", level: 2 },
    { id: "diagnostics-cli", text: "Inspect, Trace & Report Tools", level: 2 },
    { id: "browser-management", text: "Browser Binary Management", level: 2 },
  ];
}

export function CliView() {
  const runnerCommands = `# Run all tests across configured projects
npx playwright test

# Run tests in headed browser mode
npx playwright test --headed

# Run tests matching title / grep pattern
npx playwright test -g "checkout"

# Run tests tagged with specific annotation
npx playwright test --grep "@smoke"

# Run on specific browser project
npx playwright test --project=chromium
npx playwright test --project=webkit --project=firefox

# Run specific spec file and line
npx playwright test tests/login.spec.ts:42

# Run tests with automatic retry limit
npx playwright test --retries=2

# Distribute execution across CI machines
npx playwright test --shard=1/4`;

  const agentCliCommands = `# Launch persistent agent browser session
playwright-cli open https://example.com

# Capture semantic snapshot without token overhead
playwright-cli snapshot

# Click element by accessible reference
playwright-cli click "button 'Sign in'"

# Fill input field
playwright-cli fill "textbox 'Email'" "alice@example.com"

# Press keyboard key
playwright-cli press "Enter"

# Save browser storage state
playwright-cli storage save auth.json

# Close session
playwright-cli close`;

  const codegenCommands = `# Generate tests for an existing URL
npx playwright codegen https://playwright.dev

# Emulate mobile screen size and touch
npx playwright codegen --device="iPhone 14 Pro" https://m.twitter.com

# Target Python language generation
npx playwright codegen --target=python https://example.com

# Save authenticated session while recording
npx playwright codegen --save-storage=auth.json https://my-app.com/login

# Load saved authentication session
npx playwright codegen --load-storage=auth.json https://my-app.com/dashboard`;

  const diagnosticsCommands = `# Open interactive UI mode with time travel watcher
npx playwright test --ui

# Step through tests using Playwright Inspector
npx playwright test --debug

# Open saved trace file
npx playwright show-trace trace.zip

# Open last HTML report
npx playwright show-report`;

  return (
    <article className="prose-custom max-w-none font-sans text-ink leading-relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-muted">
        <Link href="/" className="flex items-center hover:text-ink transition-colors" aria-label="Home page">
          <Home className="h-3.5 w-3.5" />
        </Link>
        <span className="text-line">/</span>
        <span className="hover:text-ink cursor-default">Tools</span>
        <span className="text-line">/</span>
        <span className="font-medium text-pass">Playwright CLI</span>
      </nav>

      {/* Main Title Header */}
      <header className="mb-8 border-b border-line/60 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 text-xs font-mono font-medium text-pass">
            <Terminal className="h-3.5 w-3.5 text-pass" />
            Command Line Tools
          </div>
          <a
            href="https://playwright.dev/agent-cli/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-pass transition"
          >
            <span>Original source</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl mb-2">Playwright CLI</h1>
        <p className="text-sm sm:text-base text-muted">
          Unified command-line interfaces for test execution, code generation, diagnostics, and AI coding agent browser automation.
        </p>
      </header>

      {/* Section 1: Overview */}
      <section id="overview" className="mb-10 scroll-mt-32">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Playwright CLI Overview</h2>
        <p className="text-sm sm:text-base leading-relaxed text-ink/90 mb-3">
          The Playwright CLI suite consists of two complementary interfaces:
        </p>
        <ul className="list-disc pl-5 text-sm sm:text-base space-y-1.5 mb-4 text-ink/90">
          <li>
            <strong>Playwright Test Runner CLI (<code className="text-xs bg-card px-1.5 py-0.5 rounded font-mono">playwright test</code>):</strong> High-throughput test execution, parallel worker coordination, filtering, reporters, and CI sharding.
          </li>
          <li>
            <strong>Playwright Agent CLI (<code className="text-xs bg-card px-1.5 py-0.5 rounded font-mono">playwright-cli</code>):</strong> Token-efficient, interactive commands designed specifically for AI agents, terminal automation, and rapid exploratory testing.
          </li>
        </ul>
      </section>

      {/* Section 2: Test Runner CLI */}
      <section id="test-runner-cli" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Test Runner CLI Commands</h2>
        <p className="text-sm text-ink/90 mb-3">
          Execute and filter tests from the command line:
        </p>
        <DocCodeBlock code={runnerCommands} language="bash" />
      </section>

      {/* Section 3: Agent CLI */}
      <section id="agent-cli" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Playwright Agent CLI</h2>
        <p className="text-sm text-ink/90 mb-3">
          Designed for autonomous agents to execute discrete browser actions with minimal token footprint:
        </p>
        <DocCodeBlock code={agentCliCommands} language="bash" />
      </section>

      {/* Section 4: Codegen */}
      <section id="codegen-cli" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Codegen & Recording</h2>
        <p className="text-sm text-ink/90 mb-3">
          Generate production-ready test scripts automatically by clicking through any web application:
        </p>
        <DocCodeBlock code={codegenCommands} language="bash" />
      </section>

      {/* Section 5: Diagnostics */}
      <section id="diagnostics-cli" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Inspect, Trace & Report Tools</h2>
        <p className="text-sm text-ink/90 mb-3">
          Interactive debugging and artifact inspection commands:
        </p>
        <DocCodeBlock code={diagnosticsCommands} language="bash" />
      </section>

      {/* Section 6: Browser Management */}
      <section id="browser-management" className="mb-10 scroll-mt-32 border-t border-line/60 pt-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl mb-3">Browser Binary Management</h2>
        <div className="my-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-line bg-card/80 font-mono text-ink">
              <tr>
                <th className="px-3.5 py-2.5 font-semibold">Command</th>
                <th className="px-3.5 py-2.5 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 bg-paper/40 font-mono text-xs">
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">npx playwright install</td>
                <td className="px-3.5 py-2.5">Downloads all standard browser binaries (Chromium, Firefox, WebKit).</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">npx playwright install --with-deps</td>
                <td className="px-3.5 py-2.5">Installs browser binaries plus required OS system libraries (Linux/CI).</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">npx playwright install chromium</td>
                <td className="px-3.5 py-2.5">Installs only the Chromium browser binary to save disk space.</td>
              </tr>
              <tr className="hover:bg-card/40 transition">
                <td className="px-3.5 py-2.5 font-semibold text-pass">npx playwright uninstall --all</td>
                <td className="px-3.5 py-2.5">Removes all cached browser binaries from system cache directory.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
