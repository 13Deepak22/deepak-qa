"use client";

import { useEffect } from "react";
import { X, ExternalLink, Code2 } from "lucide-react";
import { API_DOCS, type ApiDoc } from "@/data/learn-docs-data";
import { DocCodeBlock } from "./doc-code-block";

interface ApiDrawerProps {
  apiId: string | null;
  onClose: () => void;
}

export function ApiDrawer({ apiId, onClose }: ApiDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (apiId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [apiId, onClose]);

  if (!apiId) return null;

  const doc: ApiDoc | undefined = API_DOCS[apiId];
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className="relative z-10 flex h-full w-full max-w-lg flex-col border-l border-line bg-card shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4 bg-paper/60">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-pass/15 text-pass">
              <Code2 className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase text-muted">
                {doc.parentClass} API Reference
              </p>
              <h3 className="font-mono text-sm font-bold text-ink">{doc.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close API drawer"
            className="rounded-md p-1.5 text-muted hover:bg-paper hover:text-ink transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin">
          {/* Method Signature */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Syntax
            </span>
            <div className="mt-1.5 rounded-lg border border-line bg-paper p-3 font-mono text-xs text-ink">
              <code>{doc.signature}</code>
            </div>
          </div>

          {/* Description */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Description
            </span>
            <p className="mt-1 text-xs text-ink/90 leading-relaxed">{doc.description}</p>
          </div>

          {/* Parameters */}
          {doc.parameters.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Parameters
              </span>
              <div className="mt-2 divide-y divide-line/60 rounded-lg border border-line bg-paper/50 overflow-hidden">
                {doc.parameters.map((param) => (
                  <div key={param.name} className="p-3 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-semibold text-pass">{param.name}</span>
                      <span className="text-[10px] text-muted">{param.type}</span>
                    </div>
                    <p className="mt-1 text-muted text-[11.5px] leading-relaxed">
                      {param.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Returns */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Returns
            </span>
            <div className="mt-1 font-mono text-xs text-pass bg-paper px-3 py-1.5 rounded border border-line inline-block">
              {doc.returns}
            </div>
          </div>

          {/* Example Code */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Usage Example
            </span>
            <DocCodeBlock code={doc.codeExample} language="typescript" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-line px-5 py-3 bg-paper/60 flex items-center justify-between text-xs text-muted">
          <span>In-page Playwright API Reference</span>
          <button
            onClick={onClose}
            className="rounded bg-pass px-3 py-1 text-xs font-medium text-white hover:bg-pass/90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

