"use client";

import { Suspense, useEffect, useState } from "react";
import { DocsSidebar, MobileDocsDrawer } from "@/components/learn/docs-sidebar";
import { DocViewer, getDocToc } from "@/components/learn/doc-viewer";
import { DocsToc } from "@/components/learn/docs-toc";
import { ApiDrawer } from "@/components/learn/api-drawer";
import { DocsHeaderBar, type LearnViewType, type LanguageType } from "@/components/learn/docs-header-bar";
import { DOC_CATEGORIES, type TocHeading } from "@/data/learn-docs-data";
import { MCP_DOCS } from "@/data/learn-mcp-data";
import { CLI_DOCS } from "@/data/learn-cli-data";
import { API_DOCS_DETAILED } from "@/data/learn-api-data";

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
        setActiveDocId("mcp-intro");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash.startsWith("mcp-") || MCP_DOCS[hash]) {
        setActiveView("mcp");
        setActiveDocId(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash === "cli") {
        setActiveView("cli");
        setActiveDocId("cli-overview");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash.startsWith("cli-") || CLI_DOCS[hash]) {
        setActiveView("cli");
        setActiveDocId(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash === "api") {
        setActiveView("api");
        setActiveDocId("api-overview");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash.startsWith("api-") || API_DOCS_DETAILED[hash]) {
        setActiveView("api");
        setActiveDocId(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (hash.startsWith("class-")) {
        setActiveView("api");
        const apiDocKey = `api-${hash}`;
        if (API_DOCS_DETAILED[apiDocKey]) {
          setActiveDocId(apiDocKey);
        } else {
          setActiveDocId("api-overview");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Check if hash matches any known doc ID across all categories
      const allKnownDocIds = DOC_CATEGORIES.flatMap((c) => c.items).map((i) => i.id);

      if (allKnownDocIds.includes(hash)) {
        setActiveView("docs");
        setActiveDocId(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
    let targetDocId = "library";
    if (view === "mcp") targetDocId = "mcp-intro";
    else if (view === "cli") targetDocId = "cli-overview";
    else if (view === "api") targetDocId = "api-overview";
    else if (view === "docs") targetDocId = "library";

    setActiveDocId(targetDocId);
    window.history.pushState(null, "", `#${targetDocId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (docId: string, anchorId?: string) => {
    // Determine view from docId
    if (docId.startsWith("mcp-") || docId === "mcp") {
      setActiveView("mcp");
    } else if (docId.startsWith("cli-") || docId === "cli") {
      setActiveView("cli");
    } else if (docId.startsWith("api-") || docId === "api") {
      setActiveView("api");
    } else {
      setActiveView("docs");
    }

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

  // Determine active Table of Contents dynamically for the active document
  const activeToc: TocHeading[] = getDocToc(activeDocId, activeView);

  return (
    <main id="content" tabIndex={-1} className="outline-none min-h-screen bg-paper pb-16">
      {/* Playwright Sub-Header Bar (Docs | MCP | CLI | API | Node.js) */}
      <DocsHeaderBar
        activeView={activeView}
        onSelectView={handleSelectView}
      />

      <div className="w-full px-4 sm:px-6 lg:pl-6 lg:pr-24 pt-6 sm:pt-8">
        {/* Responsive Documentation Layout with wide main section */}
        <div className="flex gap-6 lg:gap-8 xl:gap-10">
          {/* Left Sidebar (Desktop) */}
          <div className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-32 max-h-[calc(100vh-9rem)] flex flex-col pb-6 pr-1 overflow-hidden">
              <DocsSidebar
                activeView={activeView}
                activeDocId={activeDocId}
                onSelectDoc={handleNavigate}
                onSelectView={handleSelectView}
              />
            </div>
          </div>

          {/* Center Main Content - Spacious, properly aligned, unconstrained */}
          <div className="min-w-0 flex-1">
            {/* Mobile Controls: Topics drawer */}
            <div className="lg:hidden mb-4 flex items-center justify-between gap-3">
              <MobileDocsDrawer
                activeView={activeView}
                activeDocId={activeDocId}
                onSelectDoc={handleNavigate}
                onSelectView={handleSelectView}
              />
            </div>

            {/* Active View Body with theme-matched transition animation */}
            <div
              key={`${activeView}-${activeDocId}`}
              className="page-transition min-h-[60vh]"
            >
              <DocViewer
                activeView={activeView}
                activeDocId={activeDocId}
                onNavigate={handleNavigate}
                onOpenApi={(id) => {
                  const apiDocKey = id.startsWith("api-") ? id : `api-${id}`;
                  if (API_DOCS_DETAILED[apiDocKey]) {
                    handleNavigate(apiDocKey);
                  } else {
                    setActiveApiId(id);
                  }
                }}
                selectedLanguage={selectedLanguage}
              />
            </div>
          </div>

          {/* Right Table of Contents (Desktop - ends right before goto top icon) */}
          <div className="hidden xl:block w-52 shrink-0">
            <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto overflow-x-hidden pb-8 pl-1">
              <DocsToc items={activeToc} variant="desktop" />
            </div>
          </div>
        </div>
      </div>

      {/* In-page API Reference Drawer */}
      <ApiDrawer apiId={activeApiId} onClose={() => setActiveApiId(null)} />
    </main>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper p-8 text-center text-sm text-muted">Loading documentation...</div>}>
      <LearnPageContent />
    </Suspense>
  );
}
