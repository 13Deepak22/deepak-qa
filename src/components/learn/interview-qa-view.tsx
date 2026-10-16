"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Check,
  Copy,
  ChevronDown,
  ChevronsDown,
  ChevronsUp,
  HelpCircle,
  X,
  Code2,
  ArrowUp,
  Layers,
  ClipboardCheck,
  Globe,
  Bot,
  Network,
  Database,
  Coffee,
  GitBranch,
  Workflow,
  Target,
  type LucideIcon,
} from "lucide-react";
import { INTERVIEW_DOCS } from "@/data/learn-interview-data";
import {
  MASTER_INTERVIEW_QUESTIONS,
  type StructuredInterviewQuestion,
} from "@/data/learn-interview-questions";

export interface InterviewQAViewProps {
  activeDocId: string;
  onSelectDoc: (docId: string) => void;
}

const ALL_INTERVIEW_TRACKS: {
  id: string;
  label: string;
  count: number;
  short: string;
  icon: LucideIcon;
}[] = [
  { id: "interview-manual-testing", label: "Manual", count: 100, short: "Manual", icon: ClipboardCheck },
  { id: "interview-selenium-java", label: "Selenium + Java", count: 153, short: "Selenium", icon: Globe },
  { id: "interview-playwright-mcp", label: "Playwright + MCP", count: 37, short: "Playwright", icon: Bot },
  { id: "interview-api-postman", label: "Postman & Rest Assured", count: 107, short: "API", icon: Network },
  { id: "interview-sql-database", label: "SQL & Database", count: 50, short: "SQL", icon: Database },
  { id: "interview-core-java", label: "Core Java", count: 55, short: "Java", icon: Coffee },
  { id: "interview-java-coding-programs", label: "Top 20 Java Programs", count: 20, short: "Programs", icon: Code2 },
  { id: "interview-git", label: "Git & GitHub", count: 25, short: "Git", icon: GitBranch },
  { id: "interview-git-cicd-jenkins", label: "CI/CD & DevOps", count: 106, short: "DevOps", icon: Workflow },
  { id: "interview-100-real-time-scenarios", label: "100 QA Scenarios", count: 105, short: "Scenarios", icon: Target },
];

function isCodeLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (/^(for\s*\(|if\s*\(|while\s*\(|public\s+|private\s+|class\s+|int\s+|String\s+|boolean\s+|void\s+|return\b|import\s+|package\s+)/.test(trimmed)) return true;
  if (/^(const\s+|let\s+|var\s+|await\s+|async\s+|expect\(|test\(|test\.describe\(|page\.)/.test(trimmed)) return true;
  if (/^(SELECT\b|INSERT\b|UPDATE\b|DELETE\b|CREATE\b|ALTER\b|DROP\b|FROM\b|WHERE\b|HAVING\b|ORDER\s+BY\b|GROUP\s+BY\b)/i.test(trimmed)) return true;
  if (/^(git\s+|mvn\s+|docker\s+|npm\s+|npx\s+|pip\s+|curl\s+|pm\.)/.test(trimmed)) return true;
  if (trimmed.endsWith(";") || trimmed.endsWith("{") || trimmed === "}" || trimmed === "};") return true;
  if (/System\.out\.println|WebDriver\s+driver|\.findElement\(|@Test|@Before|@After|pm\.test\(|pm\.expect\(/.test(trimmed)) return true;
  return false;
}

type AnswerBlock =
  | { type: "code"; lines: string[] }
  | { type: "text"; text: string };

function groupAnswerBlocks(answers: string[]): AnswerBlock[] {
  const blocks: AnswerBlock[] = [];
  let currentCode: string[] = [];

  for (const line of answers) {
    if (isCodeLine(line)) {
      currentCode.push(line);
    } else {
      if (currentCode.length > 0) {
        blocks.push({ type: "code", lines: [...currentCode] });
        currentCode = [];
      }
      blocks.push({ type: "text", text: line });
    }
  }

  if (currentCode.length > 0) {
    blocks.push({ type: "code", lines: [...currentCode] });
  }

  return blocks;
}

function formatDocText(text: string): React.ReactNode[] {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="font-mono text-xs bg-paper-deep text-pass px-1.5 py-0.5 rounded border border-line/40 font-medium"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isExternal = linkUrl.startsWith("http");
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-pass hover:underline font-medium"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

function renderFormattedLine(line: string) {
  const bulletMatch = line.match(/^(\s*)([•\-o*👉✓✗✔])\s+(.*)$/);
  if (bulletMatch) {
    const indent = bulletMatch[1].length;
    const bullet = bulletMatch[2];
    const content = bulletMatch[3];
    return (
      <div
        className="flex items-start gap-2 my-1"
        style={{ paddingLeft: `${Math.max(indent * 8, 4)}px` }}
      >
        <span className="text-pass font-semibold shrink-0 mt-0.5 text-xs select-none">
          {bullet}
        </span>
        <span className="text-ink/90 flex-1">{formatDocText(content)}</span>
      </div>
    );
  }

  const numberedMatch = line.match(/^(\s*)(\d+)[.)]\s+(.*)$/);
  if (numberedMatch) {
    const indent = numberedMatch[1].length;
    const num = numberedMatch[2];
    const content = numberedMatch[3];
    return (
      <div
        className="flex items-start gap-2 my-1"
        style={{ paddingLeft: `${Math.max(indent * 8, 4)}px` }}
      >
        <span className="font-mono text-xs font-semibold text-muted shrink-0 mt-0.5 select-none">
          {num}.
        </span>
        <span className="text-ink/90 flex-1">{formatDocText(content)}</span>
      </div>
    );
  }

  return <p className="my-1 leading-relaxed text-ink/90">{formatDocText(line)}</p>;
}

interface InterviewSection {
  id: string;
  heading: string;
  questions: StructuredInterviewQuestion[];
}

export function InterviewQAView({ activeDocId, onSelectDoc }: InterviewQAViewProps) {
  const currentDocKey = INTERVIEW_DOCS[activeDocId] ? activeDocId : "interview-selenium-java";

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: '/' to focus search, Esc to blur
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Directly use verified questions from master extraction
  const allQuestions = useMemo(() => {
    return MASTER_INTERVIEW_QUESTIONS[currentDocKey] || [];
  }, [currentDocKey]);

  // Group questions into sections based on category
  const sections = useMemo<InterviewSection[]>(() => {
    const map = new Map<string, StructuredInterviewQuestion[]>();
    for (const q of allQuestions) {
      const cat = q.category || "General";
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(q);
    }
    return Array.from(map.entries()).map(([heading, questions]) => ({
      id: "sec-" + heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      heading,
      questions,
    }));
  }, [allQuestions]);

  // Set default active section
  useEffect(() => {
    if (sections.length > 0) {
      setActiveSectionId(sections[0].id);
    }
  }, [sections, currentDocKey]);

  // Scroll spy to highlight active section in the frozen sidebar
  useEffect(() => {
    if (sections.length === 0) return;
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSectionId(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 195;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSectionId(id);
      setMobileDrawerOpen(false);
    }
  };

  // Filter sections & questions based on search query
  const visibleSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return sections;
    }
    const qLower = searchQuery.toLowerCase().trim();
    return sections
      .map((sec) => {
        const matchingQuestions = sec.questions.filter((q) => {
          if (q.question.toLowerCase().includes(qLower)) return true;
          if (q.num.toLowerCase().includes(qLower)) return true;
          if (q.category.toLowerCase().includes(qLower)) return true;
          return q.answers.some((a) => a.toLowerCase().includes(qLower));
        });
        return {
          ...sec,
          questions: matchingQuestions,
        };
      })
      .filter((sec) => sec.questions.length > 0);
  }, [sections, searchQuery]);

  const totalMatchingQuestions = useMemo(() => {
    return visibleSections.reduce((acc, sec) => acc + sec.questions.length, 0);
  }, [visibleSections]);

  const toggleCard = (id: string) => {
    setExpandedCardIds((prev) => ({
      ...prev,
      [id]: !isCardExpanded(id),
    }));
  };

  const isCardExpanded = (id: string) => {
    if (expandedCardIds[id] !== undefined) {
      return expandedCardIds[id];
    }
    return true;
  };

  const handleExpandAll = () => {
    const next: Record<string, boolean> = {};
    allQuestions.forEach((q) => {
      next[q.id] = true;
    });
    setExpandedCardIds(next);
  };

  const handleCollapseAll = () => {
    const next: Record<string, boolean> = {};
    allQuestions.forEach((q) => {
      next[q.id] = false;
    });
    setExpandedCardIds(next);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentTrackMeta = ALL_INTERVIEW_TRACKS.find((t) => t.id === currentDocKey) || ALL_INTERVIEW_TRACKS[0];

  return (
    <div className="min-h-screen bg-paper pb-20">
      {/* Sober, Minimal Sticky Navigation Header */}
      <div className="border-b border-line/70 bg-paper/95 backdrop-blur-md sticky top-20 z-30">
        <div className="w-full px-4 sm:px-6 lg:px-[88px] 2xl:px-[96px] py-3">
          {/* Row 1: Back + Module Name + Count + Clean Module Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left: Back to Hub + Track Title + Count */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Link
                href="/learn"
                className="press inline-flex items-center gap-1.5 border border-line bg-card px-2.5 py-1 rounded-md font-mono text-xs uppercase tracking-wider text-muted hover:border-pass hover:text-pass transition-colors shrink-0"
                title="Return to Learning Hub"
                data-cursor="Return to Learning Hub"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hub</span>
              </Link>

              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2 w-2 rounded-full bg-pass shrink-0" />
                <h1 className="font-serif text-base sm:text-lg font-bold text-ink truncate">
                  {currentTrackMeta.label}
                </h1>
              </div>
            </div>

            {/* Right: Module Switcher Pills */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 max-w-full">
              {ALL_INTERVIEW_TRACKS.map((t) => {
                const isActive = t.id === currentDocKey;
                const Icon = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectDoc(t.id);
                      setSearchQuery("");
                    }}
                    data-cursor={`Switch to ${t.label} track`}
                    className={`press inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-ink text-paper font-semibold"
                        : "border border-line bg-card text-muted hover:text-ink hover:border-line"
                    }`}
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span>{t.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Single Search Bar + View Actions */}
          <div className="mt-2.5 pt-2 border-t border-line/40 flex items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search questions in ${currentTrackMeta.label} (press /)...`}
                data-cursor={`Search questions in ${currentTrackMeta.label} (press /)`}
                className="w-full pl-8 pr-12 py-1.5 rounded-md border border-line bg-card text-ink text-xs placeholder:text-muted focus:border-pass focus:outline-none transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  data-cursor="Clear search filter"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Actions: Expand, Collapse */}
            <div className="flex items-center gap-2 shrink-0 text-xs font-mono">
              <button
                onClick={handleExpandAll}
                data-cursor="Expand all technical answers"
                className="press inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-line bg-card text-[11px] uppercase tracking-wider text-muted hover:text-ink hover:border-line transition-colors cursor-pointer"
                title="Expand all questions"
              >
                <ChevronsDown className="h-3.5 w-3.5 shrink-0" />
                <span>Expand</span>
              </button>

              <button
                onClick={handleCollapseAll}
                data-cursor="Collapse all technical answers"
                className="press inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-line bg-card text-[11px] uppercase tracking-wider text-muted hover:text-ink hover:border-line transition-colors cursor-pointer"
                title="Collapse all questions"
              >
                <ChevronsUp className="h-3.5 w-3.5 shrink-0" />
                <span>Collapse</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Layout: Left Frozen Sidebar + Right Section-wise Feed */}
      <div className="w-full px-4 sm:px-6 lg:px-[88px] 2xl:px-[96px] pt-6 sm:pt-8">
        <div className="flex gap-6 lg:gap-8">
          {/* Left Side Sections Navigation (Desktop - Frozen like Courses) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-[11.5rem] max-h-[calc(100vh-12.5rem)] flex flex-col rounded-xl border border-line bg-card/90 p-3 shadow-2xs">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-2 pb-2.5 mb-2 border-b border-line/60">
                <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-pass" />
                  Sections
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {sections.length} Topics
                </span>
              </div>

              {/* Scrollable Sections Navigation */}
              <nav className="flex-1 min-h-0 space-y-1 overflow-y-auto overflow-x-hidden pr-1.5 docs-scrollbar">
                {sections.map((sec, idx) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      data-cursor={`Jump to ${sec.heading} (${sec.questions.length} questions)`}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer group ${
                        isActive
                          ? "bg-pass/15 font-semibold text-pass ring-1 ring-pass/30 shadow-xs"
                          : "text-muted hover:bg-paper-deep/60 hover:text-ink"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`font-mono text-[10px] shrink-0 ${isActive ? "text-pass font-bold" : "text-muted/70 group-hover:text-muted"}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate font-medium">{sec.heading}</span>
                      </div>
                      <span
                        className={`shrink-0 font-mono text-[10px] px-1.5 py-0.2 rounded ml-2 ${
                          isActive
                            ? "bg-pass/20 text-pass font-bold"
                            : "bg-paper-deep text-muted"
                        }`}
                      >
                        {sec.questions.length}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Main Content Area - Contains all questions, section-wise */}
          <main className="min-w-0 flex-1">
            {/* Mobile Section Selection Trigger */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileDrawerOpen(true)}
                data-cursor="Select interview topic section"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-line bg-card text-xs font-mono text-ink shadow-2xs cursor-pointer hover:border-pass transition-colors"
              >
                <span className="flex items-center gap-2 truncate">
                  <Layers className="h-4 w-4 text-pass shrink-0" />
                  <span className="text-muted">Section:</span>
                  <strong className="text-ink truncate">
                    {sections.find((s) => s.id === activeSectionId)?.heading || "Jump to Section"}
                  </strong>
                </span>
                <span className="text-[11px] text-pass font-semibold shrink-0 ml-2">
                  Sections ▾
                </span>
              </button>
            </div>

            {/* Active Search Result Banner */}
            {searchQuery.trim() && (
              <div className="flex items-center justify-between gap-2 p-3 mb-6 rounded-xl border border-line/60 bg-paper-deep/50 text-xs font-mono text-muted">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  <span>
                    Found <strong className="text-ink font-semibold">{totalMatchingQuestions}</strong> questions matching &ldquo;{searchQuery}&rdquo;
                  </span>
                </div>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-pass hover:underline cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* If no questions found matching search */}
            {visibleSections.length === 0 ? (
              <div className="text-center py-16 rounded-xl border border-dashed border-line bg-card/60 p-8">
                <HelpCircle className="h-8 w-8 text-muted mx-auto mb-2 opacity-50" />
                <h3 className="font-serif text-base font-bold text-ink">No questions found</h3>
                <p className="mt-1 text-xs text-muted">
                  No questions matched your search query &ldquo;{searchQuery}&rdquo;.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-3 py-1.5 rounded-md border border-line bg-card text-muted hover:text-ink font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            ) : (
              /* Section-wise layout: Every section with header + questions */
              <div className="space-y-10 sm:space-y-12">
                {visibleSections.map((sec, secIdx) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-32">
                    {/* Section Divider Header */}
                    <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-line/70">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-pass/10 text-pass border border-pass/20 shrink-0">
                          Section {String(secIdx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-serif text-lg sm:text-xl font-bold text-ink truncate">
                          {sec.heading}
                        </h2>
                      </div>
                      <span className="font-mono text-xs text-muted shrink-0">
                        {sec.questions.length} Questions
                      </span>
                    </div>

                    {/* Cards in this Section */}
                    <div className="space-y-3.5">
                      {sec.questions.map((q) => {
                        const isExpanded = isCardExpanded(q.id);
                        const answerBlocks = groupAnswerBlocks(q.answers);

                        return (
                          <div
                            key={q.id}
                            id={q.id}
                            className={`rounded-xl border transition-colors bg-card ${
                              isExpanded ? "border-line" : "border-line/70 hover:border-line"
                            }`}
                          >
                            {/* Question Header */}
                            <div
                              onClick={() => toggleCard(q.id)}
                              data-cursor={isExpanded ? "Collapse technical answer" : "Expand technical answer & code"}
                              className="p-4 sm:p-4.5 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer select-none hover:bg-paper-deep/30 transition-colors"
                            >
                              <div className="flex items-start gap-3 sm:gap-3.5 flex-1 min-w-0">
                                {/* Sequence Badge */}
                                <span className="inline-flex items-center justify-center h-6 px-2 rounded bg-paper-deep text-ink font-mono text-xs font-semibold border border-line shrink-0 mt-0.5">
                                  Q{q.num.padStart(2, "0")}
                                </span>

                                <div className="min-w-0 flex-1">
                                  {/* Subcategory Label */}
                                  <div className="font-mono text-[10.5px] uppercase tracking-wider text-muted mb-1">
                                    {q.category}
                                  </div>

                                  {/* Question Title */}
                                  <h3 className="font-serif text-base sm:text-lg font-semibold text-ink leading-snug">
                                    {formatDocText(q.question)}
                                  </h3>
                                </div>
                              </div>

                              {/* Actions: Copy & Accordion Chevron */}
                              <div className="flex items-center gap-1 shrink-0 pt-0.5" onClick={(e) => e.stopPropagation()}>
                                {/* Copy Question & Answer */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleCopy(q.id, `Q${q.num}: ${q.question}\n\nAnswer:\n${q.answers.join("\n")}`);
                                  }}
                                  title="Copy question and answer"
                                  data-cursor="Copy question and answer to clipboard"
                                  className="p-1.5 rounded-md border border-line bg-card text-muted hover:text-ink transition-colors cursor-pointer"
                                >
                                  {copiedId === q.id ? (
                                    <Check className="h-3.5 w-3.5 text-pass" />
                                  ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                  )}
                                </button>

                                {/* Expand/Collapse Chevron */}
                                <button
                                  type="button"
                                  onClick={() => toggleCard(q.id)}
                                  data-cursor={isExpanded ? "Collapse answer" : "Expand answer"}
                                  className={`p-1.5 rounded-md border border-line bg-card text-muted transition-transform duration-150 cursor-pointer ${
                                    isExpanded ? "rotate-180 text-ink" : ""
                                  }`}
                                  title={isExpanded ? "Collapse" : "Expand"}
                                >
                                  <ChevronDown className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Question Answer Body */}
                            {isExpanded && (
                              <div className="border-t border-line/60 bg-paper/40 px-4 sm:px-6 py-4.5 transition-all">
                                {/* Sub-label */}
                                <div className="mb-3 text-[11px] font-mono text-muted uppercase tracking-wider">
                                  <span>Answer &amp; Technical Breakdown</span>
                                </div>

                                {/* Answer Content */}
                                <div className="space-y-2.5 font-sans text-sm sm:text-base leading-relaxed text-ink/90">
                                  {answerBlocks.map((block, bIdx) => {
                                    if (block.type === "code") {
                                      const codeString = block.lines.join("\n");
                                      return (
                                        <div
                                          key={bIdx}
                                          className="my-3 rounded-lg border border-line bg-paper-deep/70 overflow-hidden font-mono text-xs sm:text-[13px] shadow-2xs"
                                        >
                                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-line/60 bg-card text-[11px] text-muted">
                                            <span className="flex items-center gap-1.5">
                                              <Code2 className="h-3 w-3 text-pass" />
                                              <span>CODE Snippet</span>
                                            </span>
                                            <button
                                              onClick={() => handleCopy(`${q.id}-code-${bIdx}`, codeString)}
                                              data-cursor="Copy code snippet to clipboard"
                                              className="flex items-center gap-1 text-[10.5px] hover:text-ink transition-colors cursor-pointer"
                                              title="Copy code"
                                            >
                                              {copiedId === `${q.id}-code-${bIdx}` ? (
                                                <>
                                                  <Check className="h-3 w-3 text-pass" />
                                                  <span className="text-pass font-semibold">Copied</span>
                                                </>
                                              ) : (
                                                <>
                                                  <Copy className="h-3 w-3" />
                                                  <span>Copy</span>
                                                </>
                                              )}
                                            </button>
                                          </div>
                                          <pre className="p-3.5 overflow-x-auto text-ink/95 leading-relaxed docs-scrollbar">
                                            <code>{codeString}</code>
                                          </pre>
                                        </div>
                                      );
                                    }

                                    return (
                                      <div key={bIdx}>
                                        {renderFormattedLine(block.text)}
                                      </div>
                                    );
                                  })}
                                </div>

                                {/* Bottom card footer */}
                                <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-xs font-mono text-muted">
                                  <span className="text-[11px]">
                                    Q{q.num} of {allQuestions.length}
                                  </span>
                                  <button
                                    onClick={() => toggleCard(q.id)}
                                    className="text-muted hover:text-ink transition-colors cursor-pointer text-[11px]">
                                    Collapse ↑
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Sections Navigation Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-paper p-4 shadow-xl border-r border-line flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-pass" />
                Sections ({sections.length})
              </span>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-md text-muted hover:text-ink cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto space-y-1 py-3 docs-scrollbar">
              {sections.map((sec, idx) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                      isActive
                        ? "bg-pass/15 font-semibold text-pass ring-1 ring-pass/30"
                        : "text-muted hover:bg-card hover:text-ink"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`font-mono text-[10px] shrink-0 ${isActive ? "text-pass font-bold" : "text-muted"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate font-medium">{sec.heading}</span>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded bg-paper-deep text-muted">
                      {sec.questions.length}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-ink text-paper shadow-md hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center"
          title="Scroll back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
