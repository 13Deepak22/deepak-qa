"use client";

import { Suspense, useEffect, useState } from "react";
import { DocsSidebar, MobileDocsDrawer } from "@/components/learn/docs-sidebar";
import { DocViewer, getDocToc } from "@/components/learn/doc-viewer";
import { DocsToc } from "@/components/learn/docs-toc";
import { ApiDrawer } from "@/components/learn/api-drawer";
import { DocsHeaderBar, type LearnViewType, type LanguageType } from "@/components/learn/docs-header-bar";
import { McpView, getMcpToc } from "@/components/learn/mcp-view";
import { CliView, getCliToc } from "@/components/learn/cli-view";
import { ApiView, getApiToc } from "@/components/learn/api-view";
import { DOC_CATEGORIES, type TocHeading } from "@/data/learn-docs-data";

function LearnPageContent() {
  const [activeView, setActiveView] = useState<LearnViewType>("docs");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>("node");
  const [activeDocId, setActiveDocId] = useState<string>("library");
  const [activeApiId, setActiveApiId] = useState<string | null>(null);

  // Sync with window.location.hash on initial load and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash) return;

      if (hash === "mcp") {
        setActiveView("mcp");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash === "cli") {
        setActiveView("cli");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash === "api" || hash.startsWith("class-")) {
        setActiveView("api");
        if (hash.startsWith("class-")) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // Check if hash matches any known doc ID across all categories
      const allKnownDocIds = DOC_CATEGORIES.flatMap((c) => c.items).map((i) => i.id);

      if (allKnownDocIds.includes(hash)) {
        setActiveView("docs");
        setActiveDocId(hash);
      } else {
        // In-page section anchor
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

  const handleSelectView = (view: LearnViewType) => {
    setActiveView(view);
    window.history.pushState(null, "", `#${view}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (docId: string, anchorId?: string) => {
    setActiveView("docs");
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

  // Determine active Table of Contents based on activeView
  let activeToc: TocHeading[] = [];
  if (activeView === "mcp") {
    activeToc = getMcpToc();
  } else if (activeView === "cli") {
    activeToc = getCliToc();
  } else if (activeView === "api") {
    activeToc = getApiToc();
  } else {
    activeToc = getDocToc(activeDocId);
  }

  return (
    <div className="min-h-screen bg-paper pb-16">
      {/* Playwright Sub-Header Bar (Docs | MCP | CLI | API | Node.js v) */}
      <DocsHeaderBar
        activeView={activeView}
        onSelectView={handleSelectView}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-6">
        {/* 3-Column Documentation Layout */}
        <div className="flex gap-8 lg:gap-10">
          {/* Left Sidebar (Desktop) */}
          <div className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto pb-8 pr-2">
              <DocsSidebar activeDocId={activeView === "docs" ? activeDocId : activeView} onSelectDoc={handleNavigate} />
            </div>
          </div>

          {/* Center Main Content */}
          <main className="min-w-0 flex-1">
            {/* Mobile Controls: Topics drawer */}
            <div className="lg:hidden mb-4 flex items-center justify-between gap-3">
              <MobileDocsDrawer activeDocId={activeView === "docs" ? activeDocId : activeView} onSelectDoc={handleNavigate} />
            </div>

            {/* Mobile TOC */}
            <div className="xl:hidden mb-6">
              <DocsToc items={activeToc} />
            </div>

            {/* Active View Body */}
            {activeView === "docs" && (
              <DocViewer
                activeDocId={activeDocId}
                onNavigate={handleNavigate}
                onOpenApi={(id) => setActiveApiId(id)}
              />
            )}

            {activeView === "mcp" && <McpView />}

            {activeView === "cli" && <CliView />}

            {activeView === "api" && <ApiView onOpenApi={(id) => setActiveApiId(id)} />}
          </main>

          {/* Right Table of Contents (Desktop) */}
          <div className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto pb-8 pl-2">
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
