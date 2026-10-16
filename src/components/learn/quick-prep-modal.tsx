"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  X,
  Zap,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  QUICK_PREP_SECTIONS,
  QUICK_PREP_QUESTIONS,
  type QuickPrepItem,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/55 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-line bg-card shadow-xl overflow-hidden">
        
        {/* Minimal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-line bg-paper/60">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] tracking-wider uppercase text-pass font-semibold">
              01 / Quick Prep
            </span>
            <span className="text-muted/40">•</span>
            <span className="font-mono text-[11px] text-muted">
              {activePool.length} Q&amp;As in pool
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Compact Track Filter */}
            <button
              type="button"
              onClick={() => setShowSectionFilter((prev) => !prev)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono text-[11px] transition cursor-pointer ${
                showSectionFilter
                  ? "border-pass bg-pass/10 text-pass"
                  : "border-line bg-paper/60 text-muted hover:text-ink"
              }`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Tracks ({selectedSectionIds.size}/12)</span>
              {showSectionFilter ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-muted hover:text-ink hover:bg-paper transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimalist Collapsible Chip Selector */}
        {showSectionFilter && (
          <div className="p-4 border-b border-line bg-paper/30 animate-in slide-in-from-top-1 duration-150">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-line/50">
              <span className="font-mono text-[11px] text-muted">
                Toggle tracks to include in random flashcards:
              </span>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={selectAllSections}
                  className="text-pass hover:underline cursor-pointer"
                >
                  All
                </button>
                <span className="text-muted/40">•</span>
                <button
                  type="button"
                  onClick={deselectAllSections}
                  className="text-muted hover:text-ink cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
              {QUICK_PREP_SECTIONS.map((sec) => {
                const isSelected = selectedSectionIds.has(sec.id);
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => toggleSection(sec.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[11px] transition cursor-pointer ${
                      isSelected
                        ? "border-pass/50 bg-pass/10 text-pass font-medium"
                        : "border-line/70 bg-card text-muted hover:text-ink hover:border-line"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-pass" : "bg-muted/40"}`} />
                    <span>{sec.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search & Difficulty Filter Strip */}
        <div className="flex items-center justify-between gap-3 px-5 py-2 border-b border-line/60 bg-paper/20">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-7 pr-2 py-1 rounded-md border border-line/60 bg-paper/60 font-mono text-[11px] text-ink placeholder:text-muted/50 focus:outline-none focus:border-pass"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="py-1 px-2 rounded-md border border-line/60 bg-paper/60 font-mono text-[11px] text-muted focus:outline-none focus:border-pass cursor-pointer"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <button
              type="button"
              onClick={() => setOnlyBookmarks((prev) => !prev)}
              className={`p-1 rounded-md border transition cursor-pointer ${
                onlyBookmarks
                  ? "border-amber-500/50 bg-amber-500/10 text-amber-500"
                  : "border-line/60 text-muted hover:text-ink"
              }`}
              title="Show Bookmarked Only"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Question Card Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between min-h-[300px]">
          {filteredPool.length === 0 ? (
            <div className="my-auto text-center py-10">
              <p className="font-serif text-base text-ink">No questions match your current filters.</p>
              <button
                type="button"
                onClick={() => {
                  selectAllSections();
                  setSearchQuery("");
                  setOnlyBookmarks(false);
                  setDifficultyFilter("all");
                }}
                className="mt-3 px-3 py-1 rounded-md border border-line bg-paper font-mono text-xs text-ink hover:border-pass cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : currentQuestion ? (
            <div className="space-y-4">
              
              {/* Meta pills */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-pass font-medium">
                    {currentQuestion.sectionTitle}
                  </span>
                  <span className="text-muted/40">•</span>
                  <span className="font-mono text-[10px] text-muted">
                    {currentQuestion.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(currentQuestion.id)}
                    className="p-1 rounded text-muted hover:text-amber-500 transition cursor-pointer"
                    title="Bookmark"
                  >
                    {isCurrentBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded text-muted hover:text-ink transition cursor-pointer"
                    title="Copy Q&A"
                  >
                    {copied ? <Check className="w-4 h-4 text-pass" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Question Headline */}
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink font-normal leading-relaxed">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Reveal Answer Section */}
              <div className="pt-2">
                {!isAnswerRevealed ? (
                  <button
                    type="button"
                    onClick={() => setIsAnswerRevealed(true)}
                    className="w-full py-3 px-4 rounded-lg border border-dashed border-line hover:border-pass/60 bg-paper/40 hover:bg-pass/5 text-ink-soft hover:text-pass transition flex items-center justify-center gap-2 font-mono text-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-pass" />
                    <span>Reveal Technical Answer (or press Space)</span>
                  </button>
                ) : (
                  <div className="rounded-lg border border-line bg-paper/50 p-4 sm:p-5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-line/50">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-pass font-semibold">
                        Key Points &amp; Answer
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsAnswerRevealed(false)}
                        className="text-[10px] font-mono text-muted hover:text-ink flex items-center gap-1 cursor-pointer"
                      >
                        <EyeOff className="w-3 h-3" />
                        <span>Hide</span>
                      </button>
                    </div>

                    <div className="space-y-2.5 font-sans text-xs sm:text-sm text-ink-soft leading-relaxed">
                      {currentQuestion.answers.map((line, idx) => {
                        const trimmed = line.trim();
                        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("o ");
                        const isCode =
                          trimmed.includes("(") && trimmed.includes(")") && (trimmed.startsWith("pm.") || trimmed.startsWith("browser_") || trimmed.includes(";"));

                        return (
                          <div
                            key={idx}
                            className={`flex gap-2 ${
                              isCode ? "font-mono text-xs bg-paper-deep text-pass px-2.5 py-1.5 rounded border border-line/40" : ""
                            }`}
                          >
                            {isBullet && <span className="text-pass shrink-0">•</span>}
                            <span className="flex-1">{line.replace(/^[•\-o]\s*/, "")}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ) : null}

          {/* Minimal Bottom Bar */}
          <div className="mt-6 pt-3.5 border-t border-line flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
              <button
                type="button"
                onClick={handlePrev}
                disabled={historyIndex <= 0}
                className="px-2 py-1 rounded border border-line bg-paper hover:border-pass/60 text-ink disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span>{historyIndex + 1} explored</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs"
            >
              <span>Next Random</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
