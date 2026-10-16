"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  X,
  Zap,
  RotateCcw,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Search,
  CheckSquare,
  Square,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import type { ToolLogo as ToolLogoName } from "@/data";
import {
  QUICK_PREP_SECTIONS,
  QUICK_PREP_QUESTIONS,
  type QuickPrepItem,
  type QuickPrepSectionConfig,
} from "@/data/learn-quick-prep-data";

interface QuickPrepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickPrepModal({ isOpen, onClose }: QuickPrepModalProps) {
  // All sections auto-selected (checked) by default
  const [selectedSectionIds, setSelectedSectionIds] = useState<Set<string>>(
    () => new Set(QUICK_PREP_SECTIONS.map((s) => s.id))
  );

  const [showSectionFilter, setShowSectionFilter] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => new Set());
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);

  // History tracking for Next/Previous random navigation
  const [history, setHistory] = useState<QuickPrepItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("deepak_qa_quickprep_bookmarks");
      if (saved) {
        setBookmarkedIds(new Set(JSON.parse(saved)));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save bookmarks
  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem("deepak_qa_quickprep_bookmarks", JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Section toggle handlers
  const toggleSection = (id: string) => {
    setSelectedSectionIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) {
          next.delete(id);
        }
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectAllSections = () => {
    setSelectedSectionIds(new Set(QUICK_PREP_SECTIONS.map((s) => s.id)));
  };

  const deselectAllSections = () => {
    // Keep at least the first one selected
    setSelectedSectionIds(new Set([QUICK_PREP_SECTIONS[0].id]));
  };

  // Pool of questions from selected sections
  const activePool = useMemo(() => {
    const pool: QuickPrepItem[] = [];
    for (const secId of selectedSectionIds) {
      const questions = QUICK_PREP_QUESTIONS[secId] || [];
      pool.push(...questions);
    }
    return pool;
  }, [selectedSectionIds]);

  // Filtered pool based on search query, difficulty, bookmarks
  const filteredPool = useMemo(() => {
    return activePool.filter((item) => {
      if (onlyBookmarks && !bookmarkedIds.has(item.id)) return false;
      if (difficultyFilter !== "all" && item.difficulty !== difficultyFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchQ = item.question.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        const matchAns = item.answers.some((a) => a.toLowerCase().includes(q));
        if (!matchQ && !matchCat && !matchAns) return false;
      }
      return true;
    });
  }, [activePool, onlyBookmarks, bookmarkedIds, difficultyFilter, searchQuery]);

  // Function to pick a new random question
  const pickRandomQuestion = useCallback(() => {
    if (filteredPool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredPool.length);
    const chosen = filteredPool[randomIndex];
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), chosen]);
    setHistoryIndex((prev) => prev + 1);
    setIsAnswerRevealed(false);
  }, [filteredPool, historyIndex]);

  // Initial pick when modal opens or pool changes
  useEffect(() => {
    if (isOpen && history.length === 0 && filteredPool.length > 0) {
      pickRandomQuestion();
    }
  }, [isOpen, history.length, filteredPool.length, pickRandomQuestion]);

  // Current active question
  const currentQuestion = historyIndex >= 0 && historyIndex < history.length ? history[historyIndex] : null;

  // Handlers for Next and Prev
  const handleNext = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      setIsAnswerRevealed(false);
    } else {
      pickRandomQuestion();
    }
  };

  const handlePrev = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      setIsAnswerRevealed(false);
    }
  };

  const handleCopy = () => {
    if (!currentQuestion) return;
    const text = `Q: ${currentQuestion.question}\n\nCategory: ${currentQuestion.category} (${currentQuestion.sectionTitle})\n\nA:\n${currentQuestion.answers.join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === " " && (e.target as HTMLElement).tagName !== "INPUT") {
        e.preventDefault();
        setIsAnswerRevealed((prev) => !prev);
      } else if (e.key === "ArrowRight" && (e.target as HTMLElement).tagName !== "INPUT") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" && (e.target as HTMLElement).tagName !== "INPUT") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!isOpen) return null;

  const isCurrentBookmarked = currentQuestion ? bookmarkedIds.has(currentQuestion.id) : false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-line bg-card shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-paper/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pass/15 border border-pass/30 flex items-center justify-center text-pass shadow-2xs">
              <Zap className="w-5 h-5 fill-pass/30" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-medium text-ink">
                  Quick Prep · Random Q&amp;A
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-pass/30 bg-pass/10 text-pass font-mono text-[10px] font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  {activePool.length} in Pool
                </span>
              </div>
              <p className="text-xs text-muted font-mono mt-0.5">
                Press <kbd className="px-1 py-0.5 bg-paper rounded border border-line text-[10px]">Space</kbd> to reveal · <kbd className="px-1 py-0.5 bg-paper rounded border border-line text-[10px]">Right Arrow</kbd> for next
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Section Filter Panel */}
            <button
              type="button"
              onClick={() => setShowSectionFilter((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition cursor-pointer ${
                showSectionFilter
                  ? "border-pass bg-pass/15 text-pass"
                  : "border-line bg-card hover:border-pass/60 text-ink-soft hover:text-ink"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sections ({selectedSectionIds.size}/12)</span>
              {showSectionFilter ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-line hover:border-pass/60 text-muted hover:text-ink transition cursor-pointer"
              aria-label="Close Quick Prep"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Collapsible Section Filter Grid */}
        {showSectionFilter && (
          <div className="p-4 border-b border-line bg-paper/40 animate-in slide-in-from-top-2 duration-150 max-h-56 overflow-y-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-line/60">
              <span className="font-mono text-xs text-muted">
                Select sections to include in random Q&amp;A generation:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={selectAllSections}
                  className="font-mono text-[11px] text-pass hover:underline cursor-pointer"
                >
                  Select All (12)
                </button>
                <span className="text-muted/40">•</span>
                <button
                  type="button"
                  onClick={deselectAllSections}
                  className="font-mono text-[11px] text-muted hover:text-ink cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {QUICK_PREP_SECTIONS.map((sec) => {
                const isSelected = selectedSectionIds.has(sec.id);
                return (
                  <label
                    key={sec.id}
                    className={`flex items-center gap-2.5 p-2 rounded-lg border transition cursor-pointer text-left ${
                      isSelected
                        ? "border-pass/50 bg-pass/10 text-ink shadow-2xs"
                        : "border-line/60 bg-card/60 text-muted hover:border-line hover:text-ink"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSection(sec.id)}
                      className="sr-only"
                    />
                    <div className="shrink-0 text-pass">
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 fill-pass/20" />
                      ) : (
                        <Square className="w-4 h-4 text-muted/60" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-xs font-medium truncate text-ink">
                        {sec.name}
                      </p>
                      <p className="font-mono text-[9px] text-muted truncate">
                        {sec.questionCount} Q&amp;As
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 border-b border-line bg-card/60">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords (e.g. MCP, wait, SQL)..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-line bg-paper/80 font-mono text-xs text-ink placeholder:text-muted/60 focus:outline-none focus:border-pass"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Difficulty Filter */}
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="py-1 px-2.5 rounded-lg border border-line bg-paper/80 font-mono text-xs text-ink focus:outline-none focus:border-pass cursor-pointer"
            >
              <option value="all">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Bookmarks Toggle */}
            <button
              type="button"
              onClick={() => setOnlyBookmarks((prev) => !prev)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-mono text-xs transition cursor-pointer ${
                onlyBookmarks
                  ? "border-amber-500/60 bg-amber-500/15 text-amber-400"
                  : "border-line bg-paper/80 text-muted hover:text-ink"
              }`}
              title="Show only bookmarked questions"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved ({bookmarkedIds.size})</span>
            </button>
          </div>
        </div>

        {/* Question Flashcard Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between min-h-[340px]">
          {filteredPool.length === 0 ? (
            <div className="my-auto text-center py-12">
              <p className="font-serif text-lg text-ink">No questions match your current filters.</p>
              <p className="font-mono text-xs text-muted mt-1">
                Try selecting more sections or clearing the search bar.
              </p>
              <button
                type="button"
                onClick={() => {
                  selectAllSections();
                  setSearchQuery("");
                  setOnlyBookmarks(false);
                  setDifficultyFilter("all");
                }}
                className="mt-4 px-3.5 py-1.5 rounded-lg bg-pass text-paper font-mono text-xs cursor-pointer inline-flex items-center gap-1.5"
              >
                Reset All Filters
              </button>
            </div>
          ) : currentQuestion ? (
            <div className="flex flex-col gap-5">
              
              {/* Question Metadata Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-pass/30 bg-pass/10 text-pass font-mono text-[11px] font-semibold">
                    {currentQuestion.sectionTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-line bg-paper text-muted font-mono text-[10px]">
                    {currentQuestion.category}
                  </span>
                  {currentQuestion.difficulty && (
                    <span
                      className={`px-2 py-0.5 rounded-full font-mono text-[10px] border ${
                        currentQuestion.difficulty === "Advanced"
                          ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
                          : currentQuestion.difficulty === "Intermediate"
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {currentQuestion.difficulty}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={() => toggleBookmark(currentQuestion.id)}
                    className={`p-1.5 rounded-lg border transition cursor-pointer ${
                      isCurrentBookmarked
                        ? "border-amber-500/60 bg-amber-500/20 text-amber-400"
                        : "border-line bg-paper hover:border-amber-500/40 text-muted hover:text-ink"
                    }`}
                    title={isCurrentBookmarked ? "Remove Bookmark" : "Bookmark Question"}
                  >
                    {isCurrentBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 fill-amber-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-line bg-paper hover:border-pass/60 text-muted hover:text-ink transition cursor-pointer"
                    title="Copy Question & Answer"
                  >
                    {copied ? <Check className="w-4 h-4 text-pass" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Big Question Prompt */}
              <div className="pt-2">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal leading-relaxed tracking-tight">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Reveal Answer Banner / Container */}
              <div className="mt-2">
                {!isAnswerRevealed ? (
                  <button
                    type="button"
                    onClick={() => setIsAnswerRevealed(true)}
                    className="w-full py-4 px-6 rounded-xl border border-dashed border-pass/40 bg-pass/5 hover:bg-pass/10 hover:border-pass text-pass transition flex items-center justify-center gap-2.5 font-mono text-sm font-semibold cursor-pointer group shadow-2xs"
                  >
                    <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>Reveal Technical Answer (or press Space)</span>
                  </button>
                ) : (
                  <div className="rounded-xl border border-line bg-paper/70 p-5 sm:p-6 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-line/60">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-pass uppercase tracking-wider">
                          Key Technical Points &amp; Answer
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsAnswerRevealed(false)}
                        className="text-xs font-mono text-muted hover:text-ink flex items-center gap-1 cursor-pointer"
                      >
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Answer</span>
                      </button>
                    </div>

                    <div className="space-y-3 font-sans text-sm text-ink-soft leading-relaxed">
                      {currentQuestion.answers.map((line, idx) => {
                        const trimmed = line.trim();
                        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("o ");
                        const isCode =
                          trimmed.includes("(") && trimmed.includes(")") && (trimmed.startsWith("pm.") || trimmed.startsWith("browser_") || trimmed.includes(";"));
                        
                        return (
                          <div
                            key={idx}
                            className={`flex gap-2.5 ${isCode ? "font-mono text-xs bg-paper-deep text-pass px-3 py-2 rounded-lg border border-line/50" : ""}`}
                          >
                            {isBullet && <span className="text-pass shrink-0">•</span>}
                            <span className="flex-1">
                              {line.replace(/^[•\-o]\s*/, "")}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ) : null}

          {/* Bottom Card Navigation Toolbar */}
          <div className="mt-8 pt-4 border-t border-line flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={historyIndex <= 0}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper hover:border-pass/60 text-ink-soft hover:text-ink disabled:opacity-40 disabled:pointer-events-none transition font-mono text-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="font-mono text-xs text-muted">
                {historyIndex + 1} of {history.length} explored
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pass text-paper hover:bg-pass-fill transition font-mono text-xs font-semibold cursor-pointer shadow-sm shadow-pass/20"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Next Random Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

