import type { Metadata } from "next";
import { LearnPageClient } from "@/components/learn/learn-page-client";
import { LearnHubPage } from "@/components/learn/learn-hub-page";
import { getAllStaticLearnParams, resolveTrackAndDoc } from "@/components/learn/learn-url-utils";
import { siteTitleSuffix } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export function generateStaticParams() {
  return getAllStaticLearnParams();
}

const trackTitles: Record<string, string> = {
  docs: "Playwright Automation Docs",
  mcp: "Playwright MCP Server Docs",
  cli: "Playwright CLI Reference",
  api: "Playwright API Reference",
  selenium: "Selenium WebDriver & Grid Docs",
  appium: "Appium Mobile Automation Guide",
  postman: "Postman API Testing Guide",
  jmeter: "Apache JMeter Load & Performance Testing",
  manual: "Manual Software Testing & QA Guide",
  automation: "Test Automation Architecture & Patterns",
  java: "Java for QA & Test Automation",
  javascript: "JavaScript for Test Automation",
  typescript: "TypeScript for QA Engineers",
  interview: "QA Interview Questions & Answers Master Guide",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];

  if (slug.length === 0) {
    return {
      title: "Learn with me — Software Testing & Automation Hub — Deepak Gupta",
      description: "Choose what you want to learn: QA Interview Master Q&A, Manual Testing, Automation Architecture, Postman, JMeter, Selenium, Appium, Playwright, Java, JavaScript, and TypeScript.",
      alternates: { canonical: "/learn" },
      openGraph: {
        title: `Learn with me — Software Testing & Automation Hub — ${siteTitleSuffix}`,
        description: "Choose what you want to learn: QA Interview Master Q&A, Manual Testing, Automation Architecture, Postman, JMeter, Selenium, Appium, Playwright, Java, JavaScript, and TypeScript.",
        url: "/learn",
        type: "website",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Learn Software Testing & Automation with Deepak Gupta" }],
      },
      twitter: {
        card: "summary_large_image",
        title: `Learn with me — Software Testing & Automation Hub — ${siteTitleSuffix}`,
        description: "Choose what you want to learn: QA Interview Master Q&A, Manual Testing, Automation Architecture, Postman, JMeter, Selenium, Appium, Playwright, Java, JavaScript, and TypeScript.",
        images: ["/opengraph-image"],
      },
    };
  }

  const { view } = resolveTrackAndDoc(slug);
  const title = trackTitles[view] || "QA & Automation Learning Hub";
  const canonicalPath = `/learn/${slug.join("/")}`;

  return {
    title: `${title} — Deepak Gupta`,
    description: `Comprehensive ${title} reference, architecture diagrams, hands-on examples, and production-tested methodologies by Deepak Gupta.`,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${title} — ${siteTitleSuffix}`,
      description: `Comprehensive ${title} reference, architecture diagrams, hands-on examples, and production-tested methodologies.`,
      url: canonicalPath,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${title} — Deepak Gupta` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteTitleSuffix}`,
      description: `Comprehensive ${title} reference, architecture diagrams, hands-on examples, and production-tested methodologies.`,
      images: ["/opengraph-image"],
    },
  };
}

export default async function LearnCatchAllPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];

  // When visiting /learn without slug, display the dedicated Learning Hub selection page
  if (slug.length === 0) {
    return <LearnHubPage />;
  }

  // When visiting /learn/[track] or /learn/[track]/[docId], display the full interactive docs reader
  return <LearnPageClient initialSlug={slug} />;
}
