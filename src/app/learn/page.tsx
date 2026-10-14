"use client";

import { Suspense, useEffect, useState } from "react";
import { ToolBanner } from "@/components/learn/tool-banner";
import { DocsSidebar, MobileDocsDrawer } from "@/components/learn/docs-sidebar";
import { DocViewer, getDocToc } from "@/components/learn/doc-viewer";
import { DocsToc } from "@/components/learn/docs-toc";
import { ApiDrawer } from "@/components/learn/api-drawer";

function LearnPageContent() {
  const [activeDocId, setActiveDocId] = useState<string>("library");
  const [activeApiId, setActiveApiId] = useState<string | null>(null);

  // Sync with window.location.hash on initial load and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash) return;

      // Check if hash matches a doc ID
      const knownDocs = [
        "library",
        "intro",
        "writing-tests",
        "codegen",
        "running-tests",
        "trace-viewer",
        "accessibility-testing",
        "locators",
        "assertions",
        "browsers",
        "configuration",
        "release-notes",
      ];

      if (knownDocs.includes(hash)) {
        setActiveDocId(hash);
      } else {
        // Could be an in-page section of current doc
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleNavigate = (docId: string, anchorId?: string) => {
    setActiveDocId(docId);

    if (anchorId) {
      window.history.pushState(null, "", `#${anchorId}`);
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      window.history.pushState(null, "", `#${docId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeToc = getDocToc(activeDocId);

  return (
    <div className="min-h-screen bg-paper pb-16 pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Tool Hub Banner */}
        <ToolBanner />

        {/* 3-Column Documentation Layout */}
        <div className="flex gap-8 lg:gap-10">
          {/* Left Sidebar (Desktop) */}
          <div className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pr-2">
              <DocsSidebar activeDocId={activeDocId} onSelectDoc={handleNavigate} />
            </div>
          </div>

          {/* Center Main Content */}
          <main className="min-w-0 flex-1">
            {/* Mobile Controls: Topics drawer + On this page */}
            <div className="lg:hidden mb-4 flex items-center justify-between gap-3">
              <MobileDocsDrawer activeDocId={activeDocId} onSelectDoc={handleNavigate} />
            </div>

            <div className="xl:hidden">
              <DocsToc items={activeToc} />
            </div>

            <DocViewer
              activeDocId={activeDocId}
              onNavigate={handleNavigate}
              onOpenApi={(id) => setActiveApiId(id)}
            />
          </main>

          {/* Right Table of Contents (Desktop) */}
          <div className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pl-2">
              <DocsToc items={activeToc} />
            </div>
          </div>
        </div>
      </div>

      {/* In-page API Reference Drawer */}
      <ApiDrawer apiId={activeApiId} onClose={() => setActiveApiId(null)} />
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper p-8 text-center text-sm text-muted">Loading documentation...</div>}>
      <LearnPageContent />
    </Suspense>
  );
}
