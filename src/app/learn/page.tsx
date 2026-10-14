import type { Metadata } from "next";
import { siteTitleSuffix } from "@/lib/site";
import { ToolBanner } from "@/components/learn/tool-banner";
import { DocsSidebar, MobileDocsDrawer } from "@/components/learn/docs-sidebar";
import { DocsContent } from "@/components/learn/docs-content";
import { DocsToc } from "@/components/learn/docs-toc";

export function generateMetadata(): Metadata {
  return {
    title: "Learn QA Documentation — Playwright Library",
    description:
      "Playwright Library documentation: Unified APIs for launching and interacting with browsers, comparison with Playwright Test, TypeScript & JavaScript code examples, browser downloads, and CLI tools.",
    alternates: { canonical: "/learn" },
    openGraph: {
      title: `Learn QA Documentation — Playwright Library — ${siteTitleSuffix}`,
      description:
        "Playwright Library documentation: Unified APIs for launching and interacting with browsers, comparison with Playwright Test, TypeScript & JavaScript code examples, browser downloads, and CLI tools.",
      url: "/learn",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Playwright Documentation on Deepak Gupta QA Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Learn QA Documentation — Playwright Library — ${siteTitleSuffix}`,
      description:
        "Playwright Library documentation: Unified APIs for launching and interacting with browsers, comparison with Playwright Test, TypeScript & JavaScript code examples, browser downloads, and CLI tools.",
      images: ["/opengraph-image"],
    },
  };
}

export default function LearnPage() {
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
              <DocsSidebar />
            </div>
          </div>

          {/* Center Main Content */}
          <main className="min-w-0 flex-1">
            {/* Mobile Controls: Topics drawer + On this page */}
            <div className="lg:hidden mb-4 flex items-center justify-between gap-3">
              <MobileDocsDrawer />
            </div>

            <div className="xl:hidden">
              <DocsToc />
            </div>

            <DocsContent />
          </main>

          {/* Right Table of Contents (Desktop) */}
          <div className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pl-2">
              <DocsToc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

