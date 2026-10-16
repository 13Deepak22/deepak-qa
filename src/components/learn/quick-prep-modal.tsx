"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  ArrowRight,
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

type PrepViewState = "config" | "active";

export function QuickPrepModal({ isOpen, onClose }: QuickPrepModalProps) {
  // All 12 sections auto-selected by default
  const [selectedSectionIds, setSelectedSectionIds] = useState<Set<string>>(
    () => new Set(QUICK_PREP_SECTIONS.map((s) => s.id))
  );

  // First page shows only the filter to select; "active" shows Q&A on Start
  const [viewState, setViewState] = useState<PrepViewState>("config");
  const [copied, setCopied] = useState<boolean>(false);

  // History tracking for Next/Previous random navigation
  const [history, setHistory] = useState<QuickPrepItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Reset to config state when modal opens & remove any legacy prep session key
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    setViewState("config");
    try {
      localStorage.removeItem("deepak_qa_saved_quick_prep_session");
    } catch {}
  }, [isOpen]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

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

  // Function to pick a new random question from selected pool
  const pickRandomQuestion = useCallback(() => {
    if (activePool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * activePool.length);
    const chosen = activePool[randomIndex];
    const newHistory = [...history.slice(0, historyIndex + 1), chosen];
    const newIndex = historyIndex + 1;
    setHistory(newHistory);
    setHistoryIndex(newIndex);
  }, [activePool, history, historyIndex]);

  // Handler to start Quick Prep
  const handleStartPrep = () => {
    if (activePool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * activePool.length);
    const chosen = activePool[randomIndex];
    const newHistory = [chosen];
    setHistory(newHistory);
    setHistoryIndex(0);
    setViewState("active");
  };

  // Current active question
  const currentQuestion =
    historyIndex >= 0 && historyIndex < history.length ? history[historyIndex] : null;

  // Handlers for Next and Prev
  const handleNext = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    } else {
      pickRandomQuestion();
    }
  };

  const handlePrev = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleCopy = () => {
    if (!currentQuestion) return;
    const text = `Q: ${currentQuestion.question}\n\nCategory: ${currentQuestion.category} (${currentQuestion.sectionTitle})\n\nA:\n${currentQuestion.answers.join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset to config state when modal closes
  const handleClose = () => {
    setViewState("config");
    onClose();
  };

  // Keyboard shortcut listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (viewState === "active") {
        if (e.key === "ArrowRight" && (e.target as HTMLElement).tagName !== "INPUT") {
          e.preventDefault();
          handleNext();
        } else if (e.key === "ArrowLeft" && (e.target as HTMLElement).tagName !== "INPUT") {
          e.preventDefault();
          handlePrev();
        }
      } else if (viewState === "config" && e.key === "Enter") {
        e.preventDefault();
        handleStartPrep();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/55 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl h-[560px] sm:h-[600px] max-h-[90vh] flex flex-col rounded-xl border border-line bg-card shadow-2xl overflow-hidden">
        
        {/* Minimal Frozen Top Bar */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-line bg-paper/60">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <span className="font-mono text-[10px] tracking-wider uppercase text-pass font-semibold shrink-0">
              01 / Quick Prep
            </span>
            <span className="text-muted/40">•</span>
            <span className="font-mono text-[11px] text-muted truncate">
              {viewState === "config"
                ? `${activePool.length} Q&As in pool`
                : `${historyIndex + 1} explored`}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {viewState === "active" ? (
              <button
                type="button"
                onClick={handleClose}
                className="font-mono text-xs text-muted hover:text-rose-500 px-2 py-0.5 rounded transition cursor-pointer hover:bg-rose-500/10"
              >
                Quit
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-md text-muted hover:text-ink hover:bg-paper transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 1. FIRST PAGE: ONLY FILTER SECTIONS TO SELECT THEN START  */}
        {/* ========================================================= */}
        {viewState === "config" && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink font-normal">
                  Select Quick Prep Tracks
                </h3>
                <p className="font-mono text-xs text-muted mt-0.5">
                  Choose which sections to include in random Q&amp;A. All 12 tracks are auto-selected.
                </p>
              </div>

              {/* Section Checkbox Chips (All 12 auto-selected by default) */}
              <div className="pt-0.5">
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-line/50">
                  <span className="font-mono text-[11px] text-muted">
                    Selected Tracks ({selectedSectionIds.size} of {QUICK_PREP_SECTIONS.length}):
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <button
                      type="button"
                      onClick={selectAllSections}
                      className="text-pass hover:underline cursor-pointer"
                    >
                      Select All
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

                <div className="flex flex-wrap gap-1.5">
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
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-pass" : "bg-muted/40"
                          }`}
                        />
                        <span>{sec.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Frozen Launch CTA Footer */}
            <div className="shrink-0 px-4 sm:px-5 py-3 border-t border-line bg-card flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between">
              <span className="font-mono text-[11px] text-muted text-center sm:text-left">
                Pool contains <span className="font-semibold text-pass">{activePool.length}</span> questions
              </span>

              <button
                type="button"
                onClick={handleStartPrep}
                disabled={activePool.length === 0}
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs disabled:opacity-40 w-full sm:w-auto"
              >
                <span>Start Quick Prep</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. SECOND PAGE: ACTIVE RANDOM Q&A FLASHCARD               */}
        {/* ========================================================= */}
        {viewState === "active" && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {currentQuestion ? (
              <>
                {/* FROZEN QUESTION HEADER */}
                <div className="shrink-0 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-line/60 bg-paper/30 space-y-1.5">
                  {/* Meta row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-pass font-semibold">
                        {currentQuestion.sectionTitle}
                      </span>
                      <span className="text-muted/40">•</span>
                      <span className="font-mono text-[10px] text-muted">
                        {currentQuestion.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="p-1 rounded text-muted hover:text-ink hover:bg-paper transition cursor-pointer"
                      title="Copy Q&A"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-pass" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Question Headline (Frozen) */}
                  <h3 className="font-serif text-base sm:text-lg text-ink font-normal leading-snug">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* SCROLLABLE INNER TECHNICAL ANSWER */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-3.5 min-h-0">
                  <div className="rounded-lg border border-line bg-paper/50 p-3 sm:p-4">
                    <div className="pb-1.5 mb-2.5 border-b border-line/50">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-pass font-semibold">
                        Key Points &amp; Answer
                      </span>
                    </div>

                    <div className="space-y-2 font-sans text-xs sm:text-[13px] text-ink-soft leading-relaxed">
                      {currentQuestion.answers.map((line, idx) => {
                        const trimmed = line.trim();
                        const isBullet =
                          trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("o ");
                        const isCode =
                          trimmed.includes("(") &&
                          trimmed.includes(")") &&
                          (trimmed.startsWith("pm.") ||
                            trimmed.startsWith("browser_") ||
                            trimmed.includes(";"));

                        return (
                          <div
                            key={idx}
                            className={`flex gap-2 ${
                              isCode
                                ? "font-mono text-xs bg-paper-deep text-pass px-2.5 py-1.5 rounded border border-line/40"
                                : ""
                            }`}
                          >
                            {isBullet && <span className="text-pass shrink-0 font-bold">•</span>}
                            <span className="flex-1">{line.replace(/^[•\-o]\s*/, "")}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* FROZEN BOTTOM NAVIGATION BAR */}
                <div className="shrink-0 px-4 sm:px-5 py-3 border-t border-line bg-card flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={historyIndex <= 0}
                      className="px-2.5 py-1.5 rounded border border-line bg-paper hover:border-pass/60 text-ink disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
                      aria-label="Previous question"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span>{historyIndex + 1} explored</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        )}

      </div>
    </div>
  );
}
