"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface DocCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  borderless?: boolean;
  hideHeader?: boolean;
}

export function DocCodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = false,
  borderless = false,
  hideHeader = false,
}: DocCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const lines = code.trim().split("\n");

  const highlightToken = (line: string, lang: string) => {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) {
      return <span className="text-zinc-400 dark:text-zinc-500 italic">{line}</span>;
    }
    if (trimmed.startsWith("#")) {
      return <span className="text-zinc-400 dark:text-zinc-500 italic">{line}</span>;
    }

    const tokens = line.split(
      /(\/\*.*?\*\/|\/\/.*|#.*|'.*?'|".*?"|`.*?`|\b(?:import|export|from|const|let|var|await|async|require|function|return|test|expect|devices|chromium|webkit|firefox|true|false|set|npm|npx)\b|[{}()[\];,.])/g
    );

    return tokens.map((token, idx) => {
      if (!token) return null;

      if (token.startsWith("//") || token.startsWith("/*") || token.startsWith("#")) {
        return (
          <span key={idx} className="text-zinc-400 dark:text-zinc-500 italic">
            {token}
          </span>
        );
      }

      if (
        (token.startsWith("'") && token.endsWith("'")) ||
        (token.startsWith('"') && token.endsWith('"')) ||
        (token.startsWith("`") && token.endsWith("`"))
      ) {
        return (
          <span key={idx} className="text-emerald-600 dark:text-emerald-400">
            {token}
          </span>
        );
      }

      if (
        [
          "import",
          "export",
          "from",
          "const",
          "let",
          "var",
          "await",
          "async",
          "return",
          "function",
        ].includes(token)
      ) {
        return (
          <span key={idx} className="text-rose-600 dark:text-rose-400 font-semibold">
            {token}
          </span>
        );
      }

      if (["test", "expect", "devices", "chromium", "webkit", "firefox", "require"].includes(token)) {
        return (
          <span key={idx} className="text-amber-600 dark:text-amber-400 font-medium">
            {token}
          </span>
        );
      }

      if (["npm", "npx", "install", "set"].includes(token)) {
        return (
          <span key={idx} className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {token}
          </span>
        );
      }

      if (["{", "}", "(", ")", "[", "]", ";", ",", "."].includes(token)) {
        return (
          <span key={idx} className="text-zinc-500 dark:text-zinc-400">
            {token}
          </span>
        );
      }

      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(token)) {
        if (
          [
            "launch",
            "newPage",
            "newContext",
            "goto",
            "route",
            "abort",
            "title",
            "close",
            "toHaveTitle",
            "screenshot",
            "use",
            "fill",
            "click",
            "press",
            "check",
            "locator",
            "getByRole",
            "getByText",
            "getByLabel",
          ].includes(token)
        ) {
          return (
            <span key={idx} className="text-sky-600 dark:text-sky-400">
              {token}
            </span>
          );
        }
      }

      return <span key={idx}>{token}</span>;
    });
  };

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-300 ${
        borderless
          ? "my-0 border-0 rounded-none bg-transparent shadow-none"
          : "my-4 rounded-lg border border-line bg-card shadow-xs hover:border-pass/40 hover:shadow-sm"
      }`}
    >
      {!hideHeader && filename && (
        <div className="flex items-center justify-between border-b border-line/60 bg-paper/60 px-4 py-1.5 font-mono text-[11px] text-muted">
          <span>{filename}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted/70">{language}</span>
        </div>
      )}

      {/* Copy Button with smooth tooltip and animation */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute top-2.5 right-2.5 z-10 flex h-7 items-center gap-1.5 rounded-md border border-line bg-paper/90 px-2 text-xs font-mono text-muted opacity-80 backdrop-blur-xs transition-all duration-200 hover:border-pass hover:bg-card hover:text-ink hover:opacity-100 group-hover:opacity-100 cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-pass animate-in zoom-in-75 duration-200" />
            <span className="text-[10px] text-pass font-semibold animate-in fade-in-50 duration-200">
              Copied!
            </span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span className="text-[10px] hidden sm:inline">Copy</span>
          </>
        )}
      </button>

      {/* Code Area with smooth horizontal scroll */}
      <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-ink scrollbar-thin">
        <pre className="m-0 bg-transparent p-0">
          <code>
            {lines.map((line, idx) => (
              <div key={idx} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell select-none pr-4 text-right font-mono text-xs text-muted/40">
                    {idx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">
                  {highlightToken(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
