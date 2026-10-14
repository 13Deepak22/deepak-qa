"use client";

import { useEffect, useState } from "react";
import { DocsSidebar, MobileDocsDrawer } from "@/components/learn/docs-sidebar";
import { DocViewer, getDocToc } from "@/components/learn/doc-viewer";
import { DocsToc } from "@/components/learn/docs-toc";
import { ApiDrawer } from "@/components/learn/api-drawer";
import { DocsHeaderBar, type LearnViewType, type LanguageType } from "@/components/learn/docs-header-bar";
import { type TocHeading } from "@/data/learn-docs-data";
import { API_DOCS_DETAILED } from "@/data/learn-api-data";
import { resolveTrackAndDoc, getAestheticUrl } from "./learn-url-utils";

export interface LearnPageClientProps {
  initialSlug?: string[];
}

export function LearnPageClient({ initialSlug = [] }: LearnPageClientProps) {
  const initial = resolveTrackAndDoc(initialSlug);
  const [activeView, setActiveView] = useState<LearnViewType>(initial.view);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>("node");
  const [activeDocId, setActiveDocId] = useState<string>(initial.docId);
  const [activeApiId, setActiveApiId] = useState<string | null>(null);

  // Sync state with URL pathname & browser history navigation
  useEffect(() => {
    const syncFromUrl = () => {
      const path = window.location.pathname;
      const pathParts = path.replace(/^\/learn\/?/, "").split("/").filter(Boolean);
      const hash = window.location.hash.replace("#", "").trim();

      // If accessing via old hash like #manual or #jmeter, upgrade to aesthetic path
      if (hash && (hash.startsWith("manual") || hash.startsWith("automation") || hash.startsWith("java") || hash.startsWith("jmeter") || hash.startsWith("postman") || hash.startsWith("appium") || hash.startsWith("selenium") || hash.startsWith("mcp") || hash.startsWith("cli") || hash.startsWith("api"))) {
        const resolvedFromHash = resolveTrackAndDoc([hash]);
        setActiveView(resolvedFromHash.view);
        setActiveDocId(resolvedFromHash.docId);
        const aestheticUrl = getAestheticUrl(resolvedFromHash.view, resolvedFromHash.docId);
        window.history.replaceState(null, "", aestheticUrl);
        return;
      }

      const resolved = resolveTrackAndDoc(pathParts);
      setActiveView(resolved.view);
      setActiveDocId(resolved.docId);

      // Handle anchor scroll if present
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };


    syncFromUrl();

    const handlePopState = () => {
      syncFromUrl();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectView = (view: LearnViewType) => {
    setActiveView(view);
    let targetDocId = "library";
    if (view === "manual") targetDocId = "manual-overview";
    else if (view === "automation") targetDocId = "automation-overview";
    else if (view === "java") targetDocId = "java-getting-started";
    else if (view === "javascript") targetDocId = "javascript-getting-started";
    else if (view === "typescript") targetDocId = "typescript-getting-started";
    else if (view === "jmeter") targetDocId = "jmeter-overview";
    else if (view === "postman") targetDocId = "postman-overview";
    else if (view === "appium") targetDocId = "appium-overview";
    else if (view === "selenium") targetDocId = "selenium-overview";
    else if (view === "mcp") targetDocId = "mcp-intro";
    else if (view === "cli") targetDocId = "cli-overview";
    else if (view === "api") targetDocId = "api-overview";
    else if (view === "docs") targetDocId = "library";

    setActiveDocId(targetDocId);
    const aestheticUrl = getAestheticUrl(view, targetDocId);
    window.history.pushState(null, "", aestheticUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (docId: string, anchorId?: string) => {
    // Determine target track from docId
    let nextView: LearnViewType = activeView;
    if (docId.startsWith("manual-") || docId === "manual") nextView = "manual";
    else if (docId.startsWith("automation-") || docId === "automation") nextView = "automation";
    else if (docId.startsWith("java-") || docId === "java") nextView = "java";
    else if (docId.startsWith("javascript-") || docId === "javascript" || docId === "js") nextView = "javascript";
    else if (docId.startsWith("typescript-") || docId === "typescript" || docId === "ts") nextView = "typescript";
    else if (docId.startsWith("jmeter-") || docId === "jmeter") nextView = "jmeter";
    else if (docId.startsWith("postman-") || docId === "postman") nextView = "postman";
    else if (docId.startsWith("appium-") || docId === "appium") nextView = "appium";
    else if (docId.startsWith("selenium-") || docId === "selenium") nextView = "selenium";
    else if (docId.startsWith("mcp-") || docId === "mcp") nextView = "mcp";
    else if (docId.startsWith("cli-") || docId === "cli") nextView = "cli";
    else if (docId.startsWith("api-") || docId === "api") nextView = "api";
    else if (!["selenium", "appium", "postman", "jmeter", "manual", "automation", "java", "javascript", "typescript"].includes(activeView)) {
      nextView = "docs";
    }

    setActiveView(nextView);
    setActiveDocId(docId);

    const baseAestheticUrl = getAestheticUrl(nextView, docId);

    if (anchorId) {
      window.history.pushState(null, "", `${baseAestheticUrl}#${anchorId}`);
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      window.history.pushState(null, "", baseAestheticUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Determine active Table of Contents dynamically for the active document
  const activeToc: TocHeading[] = getDocToc(activeDocId, activeView);

  return (
    <main id="content" tabIndex={-1} className="outline-none min-h-screen bg-paper pb-16">
      {/* 2-Tier Header Bar: Tools Switcher Top Middle, Subs Down */}
      <DocsHeaderBar
        activeView={activeView}
        onSelectView={handleSelectView}
      />

      <div className="w-full px-4 sm:px-6 lg:px-[88px] 2xl:px-[96px] pt-6 sm:pt-8">
        {/* Responsive Documentation Layout with wide main section */}
        <div className="flex gap-6 lg:gap-8">
          {/* Left Sidebar (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-36 h-[calc(100vh-10.5rem)] max-h-[calc(100vh-10.5rem)] flex flex-col pb-2">
              <DocsSidebar
                activeView={activeView}
                activeDocId={activeDocId}
                onSelectDoc={handleNavigate}
                onSelectView={handleSelectView}
                className="h-full min-h-0"
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
          <div className="hidden xl:block w-48 shrink-0">
            <div className="sticky top-36 h-[calc(100vh-10.5rem)] max-h-[calc(100vh-10.5rem)] overflow-y-auto overflow-x-hidden pb-8 pl-1 pr-1 docs-scrollbar">
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

