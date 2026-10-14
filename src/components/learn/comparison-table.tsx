"use client";

interface ComparisonTableProps {
  onOpenApi?: (apiId: string) => void;
}

export function ComparisonTable({ onOpenApi }: ComparisonTableProps) {
  const triggerApi = (apiId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenApi) onOpenApi(apiId);
  };

  const rows = [
    {
      aspect: "Installation",
      library: <code>npm install playwright</code>,
      test: (
        <span>
          <code>npm init playwright@latest</code> — note <em>install</em> vs. <em>init</em>
        </span>
      ),
    },
    {
      aspect: "Install browsers",
      library: (
        <span>
          Install <code>@playwright/browser-chromium</code>, <code>@playwright/browser-firefox</code> and/or <code>@playwright/browser-webkit</code>
        </span>
      ),
      test: (
        <span>
          <code>npx playwright install</code> or <code>npx playwright install chromium</code> for a single one
        </span>
      ),
    },
    {
      aspect: (
        <span>
          <code>import</code> from
        </span>
      ),
      library: <code>playwright</code>,
      test: <code>@playwright/test</code>,
    },
    {
      aspect: "Initialization",
      library: (
        <div className="space-y-1 text-xs">
          <p className="font-medium text-ink">Explicitly need to:</p>
          <ol className="list-decimal pl-4 space-y-1 text-muted">
            <li>Pick a browser to use, e.g. <code>chromium</code></li>
            <li>
              Launch browser with{" "}
              <button
                type="button"
                onClick={(e) => triggerApi("browser-type-launch", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                browserType.launch()
              </button>
            </li>
            <li>
              Create a context with{" "}
              <button
                type="button"
                onClick={(e) => triggerApi("browser-new-context", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                browser.newContext()
              </button>
              , <em>and</em> pass any context options explicitly, e.g. <code>devices[&apos;iPhone 11&apos;]</code>
            </li>
            <li>
              Create a page with{" "}
              <button
                type="button"
                onClick={(e) => triggerApi("browser-context-new-page", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                browserContext.newPage()
              </button>
            </li>
          </ol>
        </div>
      ),
      test: (
        <p className="text-xs text-muted leading-relaxed">
          An isolated <code>page</code> and <code>context</code> are provided to each test out-of the box, along with other built-in fixtures. No explicit creation. If referenced by the test in its arguments, the Test Runner will create them for the test. (i.e. lazy-initialization)
        </p>
      ),
    },
    {
      aspect: "Assertions",
      library: <span className="text-xs text-muted">No built-in Web-First Assertions</span>,
      test: (
        <div className="space-y-1 text-xs">
          <p className="text-muted">
            <span className="font-semibold text-pass">Web-First assertions</span> like:
          </p>
          <ul className="list-disc pl-4 space-y-0.5 text-muted">
            <li>
              <button
                type="button"
                onClick={(e) => triggerApi("page-assertions-to-have-title", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                expect(page).toHaveTitle()
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => triggerApi("page-assertions-to-have-screenshot", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                expect(page).toHaveScreenshot()
              </button>
            </li>
          </ul>
          <p className="text-muted/80 pt-1">which auto-wait and retry for the condition to be met.</p>
        </div>
      ),
    },
    {
      aspect: "Timeouts",
      library: <span className="text-xs text-muted">Defaults to 30s for most operations.</span>,
      test: (
        <span className="text-xs text-muted">
          Most operations don&apos;t time out, but every test has a timeout that makes it fail (30s by default).
        </span>
      ),
    },
    {
      aspect: "Cleanup",
      library: (
        <div className="space-y-1 text-xs">
          <p className="font-medium text-ink">Explicitly need to:</p>
          <ol className="list-decimal pl-4 space-y-0.5 text-muted">
            <li>
              Close context with{" "}
              <button
                type="button"
                onClick={(e) => triggerApi("browser-context-close", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                browserContext.close()
              </button>
            </li>
            <li>
              Close browser with{" "}
              <button
                type="button"
                onClick={(e) => triggerApi("browser-close", e)}
                className="text-pass underline hover:opacity-80 font-mono font-medium"
              >
                browser.close()
              </button>
            </li>
          </ol>
        </div>
      ),
      test: (
        <span className="text-xs text-muted">
          No explicit close of built-in fixtures; the Test Runner will take care of it.
        </span>
      ),
    },
    {
      aspect: "Running",
      library: (
        <span className="text-xs text-muted">
          When using the Library, you run the code as a node script, possibly with some compilation first.
        </span>
      ),
      test: (
        <span className="text-xs text-muted">
          When using the Test Runner, you use the <code>npx playwright test</code> command. Along with your config, the Test Runner handles any compilation and choosing what to run and how to run it.
        </span>
      ),
    },
  ];

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-card shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-paper/80 font-mono text-xs uppercase text-ink">
              <th className="py-3 px-4 w-1/4 font-semibold">Aspect</th>
              <th className="py-3 px-4 w-[37.5%] font-semibold text-muted">Library</th>
              <th className="py-3 px-4 w-[37.5%] font-semibold text-pass">Test Runner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60">
            {rows.map((row, idx) => (
              <tr key={idx} className="transition-colors hover:bg-paper/40">
                <td className="py-3.5 px-4 font-medium text-ink align-top">
                  {row.aspect}
                </td>
                <td className="py-3.5 px-4 align-top">
                  {row.library}
                </td>
                <td className="py-3.5 px-4 align-top">
                  {row.test}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
