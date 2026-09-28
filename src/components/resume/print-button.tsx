"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="press inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-ink px-5 text-sm text-paper hover:bg-ink-soft"
      data-cursor="Save it as a PDF"
    >
      <Download size={16} strokeWidth={1.75} aria-hidden="true" />
      Download PDF
    </button>
  );
}
