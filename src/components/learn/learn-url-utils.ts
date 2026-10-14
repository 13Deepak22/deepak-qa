import type { LearnViewType } from "./docs-header-bar";
import { DOC_CATEGORIES } from "@/data/learn-docs-data";
import { MCP_DOCS } from "@/data/learn-mcp-data";
import { CLI_DOCS } from "@/data/learn-cli-data";
import { API_DOCS_DETAILED } from "@/data/learn-api-data";
import { SELENIUM_DOCS } from "@/data/learn-selenium-data";
import { APPIUM_DOCS } from "@/data/learn-appium-data";
import { POSTMAN_DOCS } from "@/data/learn-postman-data";
import { JMETER_DOCS } from "@/data/learn-jmeter-data";
import { MANUAL_DOCS } from "@/data/learn-manual-data";
import { AUTOMATION_DOCS } from "@/data/learn-automation-data";
import { JAVA_DOCS } from "@/data/learn-java-data";
import { JS_DOCS } from "@/data/learn-js-data";
import { TS_DOCS } from "@/data/learn-ts-data";

export interface ResolvedLearnLocation {
  view: LearnViewType;
  docId: string;
}

export function resolveTrackAndDoc(slug?: string[]): ResolvedLearnLocation {
  if (!slug || slug.length === 0) {
    return { view: "manual", docId: "manual-overview" };
  }

  const first = slug[0].toLowerCase();
  const second = slug[1]?.toLowerCase();

  // 1. Playwright & Sub-tracks
  if (first === "playwright" || first === "pw" || first === "docs") {
    if (!second) return { view: "docs", docId: "library" };
    if (second === "mcp" || second.startsWith("mcp-")) return { view: "mcp", docId: second === "mcp" ? "mcp-intro" : second };
    if (second === "cli" || second.startsWith("cli-")) return { view: "cli", docId: second === "cli" ? "cli-overview" : second };
    if (second === "api" || second.startsWith("api-")) return { view: "api", docId: second === "api" ? "api-overview" : second };
    return { view: "docs", docId: second };
  }

  // Direct shortcuts for sub-views
  if (first === "mcp") return { view: "mcp", docId: second || "mcp-intro" };
  if (first === "cli") return { view: "cli", docId: second || "cli-overview" };
  if (first === "api") return { view: "api", docId: second || "api-overview" };

  // 2. Selenium
  if (first === "selenium" || first === "se") {
    return { view: "selenium", docId: second || "selenium-overview" };
  }

  // 3. Appium
  if (first === "appium") {
    return { view: "appium", docId: second || "appium-overview" };
  }

  // 4. Postman
  if (first === "postman") {
    return { view: "postman", docId: second || "postman-overview" };
  }

  // 5. JMeter
  if (first === "jmeter") {
    return { view: "jmeter", docId: second || "jmeter-overview" };
  }

  // 6. Manual QA
  if (first === "manual" || first === "manual-testing" || first === "manual-qa") {
    return { view: "manual", docId: second || "manual-overview" };
  }

  // 7. Automation Architecture
  if (first === "automation" || first === "automation-testing" || first === "automation-architecture") {
    return { view: "automation", docId: second || "automation-overview" };
  }

  // 8. Java
  if (first === "java") {
    return { view: "java", docId: second || "java-getting-started" };
  }

  // 9. JavaScript
  if (first === "javascript" || first === "js") {
    return { view: "javascript", docId: second || "javascript-getting-started" };
  }

  // 10. TypeScript
  if (first === "typescript" || first === "ts") {
    return { view: "typescript", docId: second || "typescript-getting-started" };
  }

  // Direct doc identifier fallback across all collections
  if (SELENIUM_DOCS[first]) return { view: "selenium", docId: first };
  if (APPIUM_DOCS[first]) return { view: "appium", docId: first };
  if (POSTMAN_DOCS[first]) return { view: "postman", docId: first };
  if (JMETER_DOCS[first]) return { view: "jmeter", docId: first };
  if (MANUAL_DOCS[first]) return { view: "manual", docId: first };
  if (AUTOMATION_DOCS[first]) return { view: "automation", docId: first };
  if (JAVA_DOCS[first]) return { view: "java", docId: first };
  if (JS_DOCS[first]) return { view: "javascript", docId: first };
  if (TS_DOCS[first]) return { view: "typescript", docId: first };
  if (MCP_DOCS[first]) return { view: "mcp", docId: first };
  if (CLI_DOCS[first]) return { view: "cli", docId: first };
  if (API_DOCS_DETAILED[first]) return { view: "api", docId: first };

  const allPlaywrightDocIds = DOC_CATEGORIES.flatMap((c) => c.items).map((i) => i.id);
  if (allPlaywrightDocIds.includes(first)) {
    return { view: "docs", docId: first };
  }

  return { view: "docs", docId: "library" };
}

export function getAestheticUrl(view: LearnViewType, docId?: string): string {
  let trackSlug = "playwright";
  if (view === "selenium") trackSlug = "selenium";
  else if (view === "appium") trackSlug = "appium";
  else if (view === "postman") trackSlug = "postman";
  else if (view === "jmeter") trackSlug = "jmeter";
  else if (view === "manual") trackSlug = "manual";
  else if (view === "automation") trackSlug = "automation";
  else if (view === "java") trackSlug = "java";
  else if (view === "javascript") trackSlug = "javascript";
  else if (view === "typescript") trackSlug = "typescript";
  else if (view === "mcp") trackSlug = "playwright/mcp";
  else if (view === "cli") trackSlug = "playwright/cli";
  else if (view === "api") trackSlug = "playwright/api";

  const isDefaultDoc =
    !docId ||
    (view === "docs" && docId === "library") ||
    (view === "selenium" && docId === "selenium-overview") ||
    (view === "appium" && docId === "appium-overview") ||
    (view === "postman" && docId === "postman-overview") ||
    (view === "jmeter" && docId === "jmeter-overview") ||
    (view === "manual" && docId === "manual-overview") ||
    (view === "automation" && docId === "automation-overview") ||
    (view === "java" && docId === "java-getting-started") ||
    (view === "javascript" && docId === "javascript-getting-started") ||
    (view === "typescript" && docId === "typescript-getting-started") ||
    (view === "mcp" && docId === "mcp-intro") ||
    (view === "cli" && docId === "cli-overview") ||
    (view === "api" && docId === "api-overview");

  if (isDefaultDoc) {
    return `/learn/${trackSlug}`;
  }

  return `/learn/${trackSlug}/${docId}`;
}

export function getAllStaticLearnParams(): { slug?: string[] }[] {
  const params: { slug?: string[] }[] = [
    {}, // /learn
    { slug: ["manual"] },
    { slug: ["automation"] },
    { slug: ["postman"] },
    { slug: ["jmeter"] },
    { slug: ["selenium"] },
    { slug: ["appium"] },
    { slug: ["playwright"] },
    { slug: ["java"] },
    { slug: ["javascript"] },
    { slug: ["typescript"] },
    { slug: ["playwright", "mcp"] },
    { slug: ["playwright", "cli"] },
    { slug: ["playwright", "api"] },
  ];

  // Playwright main docs
  DOC_CATEGORIES.flatMap((c) => c.items).forEach((item) => {
    params.push({ slug: ["playwright", item.id] });
  });

  // Track-specific docs
  Object.keys(SELENIUM_DOCS).forEach((id) => params.push({ slug: ["selenium", id] }));
  Object.keys(APPIUM_DOCS).forEach((id) => params.push({ slug: ["appium", id] }));
  Object.keys(POSTMAN_DOCS).forEach((id) => params.push({ slug: ["postman", id] }));
  Object.keys(JMETER_DOCS).forEach((id) => params.push({ slug: ["jmeter", id] }));
  Object.keys(MANUAL_DOCS).forEach((id) => params.push({ slug: ["manual", id] }));
  Object.keys(AUTOMATION_DOCS).forEach((id) => params.push({ slug: ["automation", id] }));
  Object.keys(JAVA_DOCS).forEach((id) => params.push({ slug: ["java", id] }));
  Object.keys(JS_DOCS).forEach((id) => params.push({ slug: ["javascript", id] }));
  Object.keys(TS_DOCS).forEach((id) => params.push({ slug: ["typescript", id] }));

  return params;
}

