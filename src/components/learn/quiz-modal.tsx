"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  X,
  Target,
  Trophy,
  Flame,
  CheckCircle2,
  XCircle,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckSquare,
  Square,
  ArrowRight,
  HelpCircle,
  Award,
  Check,
} from "lucide-react";
import {
  QUIZ_SECTIONS,
  QUIZ_QUESTIONS,
  type QuizQuestion,
  type QuizSectionConfig,
} from "@/data/learn-quiz-data";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type QuizState = "config" | "active" | "scorecard";

interface UserAnswer {
  question: QuizQuestion;
  selectedIndex: number;
  isCorrect: boolean;
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  // All sections auto-selected (checked) by default
  const [selectedSectionIds, setSelectedSectionIds] = useState<Set<string>>(
    () => new Set(QUIZ_SECTIONS.map((s) => s.id))
  );

  const [quizState, setQuizState] = useState<QuizState>("config");
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(20); // 10, 20, 50, or 100
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");

  // Active quiz session state
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [answersHistory, setAnswersHistory] = useState<UserAnswer[]>([]);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Scorecard review filter
  const [reviewFilter, setReviewFilter] = useState<"all" | "incorrect" | "correct">("all");

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
    setSelectedSectionIds(new Set(QUIZ_SECTIONS.map((s) => s.id)));
  };

  const deselectAllSections = () => {
    setSelectedSectionIds(new Set([QUIZ_SECTIONS[0].id]));
  };

  // Pool of questions matching selected sections and difficulty
  const availablePool = useMemo(() => {
    const pool: QuizQuestion[] = [];
    for (const secId of selectedSectionIds) {
      const questions = QUIZ_QUESTIONS[secId] || [];
      for (const q of questions) {
        if (difficultyFilter === "all" || q.difficulty === difficultyFilter) {
          pool.push(q);
        }
      }
    }
    return pool;
  }, [selectedSectionIds, difficultyFilter]);

  // Start the Quiz with a randomized subset of the available pool
  const startQuiz = useCallback(
    (customQuestions?: QuizQuestion[]) => {
      let questionsToUse = customQuestions;
      if (!questionsToUse) {
        if (availablePool.length === 0) return;
        // Fisher-Yates shuffle
        const shuffled = [...availablePool];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        questionsToUse = shuffled.slice(0, Math.min(questionCountLimit, shuffled.length));
      }

      setActiveQuestions(questionsToUse);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setAnswersHistory([]);
      setCurrentStreak(0);
      setMaxStreak(0);
      setQuizState("active");
    },
    [availablePool, questionCountLimit]
  );

  // Handle selecting an option
  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    const currentQ = activeQuestions[currentIndex];
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === currentQ.answerIndex;
    const newStreak = isCorrect ? currentStreak + 1 : 0;
    setCurrentStreak(newStreak);
    if (newStreak > maxStreak) {
      setMaxStreak(newStreak);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedIndex: idx,
        isCorrect,
      },
    ]);
  };

  // Advance to next question or end quiz
  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizState("scorecard");
    }
  };

  // Retry missed questions
  const handleRetryMissed = () => {
    const missed = answersHistory.filter((a) => !a.isCorrect).map((a) => a.question);
    if (missed.length > 0) {
      startQuiz(missed);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (quizState === "active" && !isAnswerSubmitted) {
        if (e.key === "1" || e.key === "a" || e.key === "A") handleSelectOption(0);
        else if (e.key === "2" || e.key === "b" || e.key === "B") handleSelectOption(1);
        else if (e.key === "3" || e.key === "c" || e.key === "C") handleSelectOption(2);
        else if (e.key === "4" || e.key === "d" || e.key === "D") handleSelectOption(3);
      } else if (quizState === "active" && isAnswerSubmitted) {
        if (e.key === "Enter" || e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!isOpen) return null;

  const currentQ = activeQuestions[currentIndex];
  const correctCount = answersHistory.filter((a) => a.isCorrect).length;
  const scorePercent =
    answersHistory.length > 0
      ? Math.round((correctCount / answersHistory.length) * 100)
      : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-line bg-card shadow-2xl overflow-hidden">
        
        {/* ========================================================= */}
        {/* TOP BAR                                                   */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-paper/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pass/15 border border-pass/30 flex items-center justify-center text-pass shadow-2xs">
              <Target className="w-5 h-5 text-pass" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-medium text-ink">
                  QA &amp; SDET Quiz Arena
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-pass/30 bg-pass/10 text-pass font-mono text-[10px] font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  {availablePool.length} MCQs Available
                </span>
              </div>
              <p className="text-xs text-muted font-mono mt-0.5">
                {quizState === "active"
                  ? `Question ${currentIndex + 1} of ${activeQuestions.length}`
                  : quizState === "scorecard"
                  ? "Quiz Completed · Score Breakdown"
                  : "Configure your practice exam below"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {quizState === "active" && (
              <button
                type="button"
                onClick={() => setQuizState("config")}
                className="px-2.5 py-1 rounded-lg border border-line hover:border-pass/60 text-muted hover:text-ink font-mono text-xs transition cursor-pointer"
              >
                Quit Quiz
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-line hover:border-pass/60 text-muted hover:text-ink transition cursor-pointer"
              aria-label="Close Quiz"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar when quiz is active */}
        {quizState === "active" && (
          <div className="w-full bg-paper h-1 border-b border-line overflow-hidden">
            <div
              className="bg-pass h-full transition-all duration-300 ease-out"
              style={{
                width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`,
              }}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* 1. CONFIGURATION VIEW                                      */}
        {/* ========================================================= */}
        {quizState === "config" && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header explanation */}
              <div>
                <h3 className="font-serif text-xl text-ink font-normal">
                  Customize Your Quiz Topics
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-soft mt-1 leading-relaxed">
                  Select which sections you want to be tested on. All 12 QA sections are selected by default.
                </p>
              </div>

              {/* Section Checkbox List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-1 border-b border-line/60">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Included Sections ({selectedSectionIds.size} of {QUIZ_SECTIONS.length} selected)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={selectAllSections}
                      className="font-mono text-xs text-pass hover:underline cursor-pointer"
                    >
                      Select All (12)
                    </button>
                    <span className="text-muted/40">•</span>
                    <button
                      type="button"
                      onClick={deselectAllSections}
                      className="font-mono text-xs text-muted hover:text-ink cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {QUIZ_SECTIONS.map((sec) => {
                    const isSelected = selectedSectionIds.has(sec.id);
                    return (
                      <label
                        key={sec.id}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition cursor-pointer text-left ${
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
                            <CheckSquare className="w-4.5 h-4.5 fill-pass/20" />
                          ) : (
                            <Square className="w-4.5 h-4.5 text-muted/60" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-serif text-xs font-medium truncate text-ink">
                            {sec.name}
                          </p>
                          <p className="font-mono text-[9px] text-muted truncate">
                            {sec.questionCount} MCQs Available
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Options: Question Count & Difficulty */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                    Number of Questions
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 20, 50, 100].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setQuestionCountLimit(num)}
                        className={`py-2 rounded-lg border font-mono text-xs font-semibold transition cursor-pointer ${
                          questionCountLimit === num
                            ? "border-pass bg-pass/20 text-pass shadow-2xs"
                            : "border-line bg-paper text-muted hover:text-ink"
                        }`}
                      >
                        {num} Qs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg border border-line bg-paper font-mono text-xs text-ink focus:outline-none focus:border-pass cursor-pointer"
                  >
                    <option value="all">All Difficulties (Balanced)</option>
                    <option value="Beginner">Beginner Only</option>
                    <option value="Intermediate">Intermediate Only</option>
                    <option value="Advanced">Advanced Only</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Launch Button */}
            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                Pool contains <span className="font-bold text-pass">{availablePool.length}</span> matching questions
              </span>

              <button
                type="button"
                onClick={() => startQuiz()}
                disabled={availablePool.length === 0}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-semibold transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer shadow-md shadow-pass/25"
              >
                <span>Start Practice Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. ACTIVE QUIZ SESSION                                    */}
        {/* ========================================================= */}
        {quizState === "active" && currentQ && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Question metadata & Live Stats */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full border border-pass/30 bg-pass/10 text-pass font-mono text-[11px] font-semibold">
                    {currentQ.sectionTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-line bg-paper text-muted font-mono text-[10px]">
                    {currentQ.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-mono text-[10px] border ${
                      currentQ.difficulty === "Advanced"
                        ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
                        : currentQ.difficulty === "Intermediate"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {currentQ.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  {currentStreak > 1 && (
                    <span className="flex items-center gap-1 text-amber-400 animate-pulse font-semibold">
                      <Flame className="w-4 h-4 fill-amber-400" />
                      {currentStreak} Streak!
                    </span>
                  )}
                  <span className="text-muted">
                    Score: <span className="font-semibold text-pass">{correctCount}</span> / {answersHistory.length}
                  </span>
                </div>
              </div>

              {/* Big Question Prompt */}
              <div className="pt-2">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal leading-relaxed tracking-tight">
                  {currentQ.question}
                </h3>
              </div>

              {/* 4 Interactive MCQ Options */}
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {currentQ.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.answerIndex;

                  let cardStyle =
                    "border-line bg-paper hover:border-pass/60 hover:bg-pass/5 text-ink";

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      cardStyle =
                        "border-emerald-500 bg-emerald-500/15 text-emerald-300 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                    } else if (isSelected && !isCorrect) {
                      cardStyle =
                        "border-rose-500 bg-rose-500/15 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]";
                    } else {
                      cardStyle = "border-line/40 bg-card/40 text-muted opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 group cursor-pointer ${cardStyle}`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg font-mono text-xs font-semibold flex items-center justify-center shrink-0 border transition ${
                          isAnswerSubmitted && isCorrect
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : isAnswerSubmitted && isSelected && !isCorrect
                            ? "bg-rose-500 text-white border-rose-500"
                            : isSelected
                            ? "bg-pass text-paper border-pass"
                            : "bg-card border-line text-muted group-hover:border-pass/60 group-hover:text-pass"
                        }`}
                      >
                        {isAnswerSubmitted && isCorrect ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : isAnswerSubmitted && isSelected && !isCorrect ? (
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          letter
                        )}
                      </div>

                      <div className="flex-1 font-sans text-xs sm:text-sm leading-relaxed">
                        {option}
                      </div>

                      <span className="font-mono text-[10px] text-muted/60 opacity-0 group-hover:opacity-100 transition shrink-0 hidden sm:inline">
                        Press [{idx + 1}]
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technical Explanation Box (Expands when answered) */}
              {isAnswerSubmitted && (
                <div className="rounded-xl border border-line bg-paper/80 p-4 sm:p-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-line/60">
                    {selectedOption === currentQ.answerIndex ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Correct Answer!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        Incorrect · Correct is Option {String.fromCharCode(65 + currentQ.answerIndex)}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-soft leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                Question {currentIndex + 1} of {activeQuestions.length}
              </span>

              {isAnswerSubmitted && (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-semibold transition cursor-pointer shadow-md shadow-pass/25 animate-in fade-in duration-150"
                >
                  <span>
                    {currentIndex < activeQuestions.length - 1
                      ? "Next Question"
                      : "View Scorecard"}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. SCORECARD & REVIEW                                      */}
        {/* ========================================================= */}
        {quizState === "scorecard" && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Score Banner */}
              <div className="p-6 rounded-2xl border border-line bg-paper/70 text-center relative overflow-hidden">
                <div className="inline-flex p-3 rounded-2xl bg-pass/15 border border-pass/30 text-pass mb-3 shadow-sm">
                  <Trophy className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  {scorePercent >= 90
                    ? "SDET Master Class! 🏆"
                    : scorePercent >= 75
                    ? "Senior QA Ready! 🌟"
                    : scorePercent >= 60
                    ? "Good Effort! 👍"
                    : "Keep Practicing! 📚"}
                </h3>

                <p className="font-sans text-sm text-ink-soft mt-1 max-w-md mx-auto">
                  You scored <strong className="text-ink">{correctCount}</strong> out of{" "}
                  <strong className="text-ink">{answersHistory.length}</strong> questions correct (
                  <strong className="text-pass">{scorePercent}%</strong>).
                </p>

                {/* Score Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 max-w-lg mx-auto">
                  <div className="p-3 rounded-xl border border-line bg-card">
                    <p className="font-mono text-[10px] text-muted uppercase">Accuracy</p>
                    <p className="font-mono text-lg font-bold text-pass">{scorePercent}%</p>
                  </div>
                  <div className="p-3 rounded-xl border border-line bg-card">
                    <p className="font-mono text-[10px] text-muted uppercase">Correct</p>
                    <p className="font-mono text-lg font-bold text-emerald-400">{correctCount}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-line bg-card">
                    <p className="font-mono text-[10px] text-muted uppercase">Incorrect</p>
                    <p className="font-mono text-lg font-bold text-rose-400">
                      {answersHistory.length - correctCount}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-line bg-card">
                    <p className="font-mono text-[10px] text-muted uppercase">Best Streak</p>
                    <p className="font-mono text-lg font-bold text-amber-400">🔥 {maxStreak}</p>
                  </div>
                </div>
              </div>

              {/* Review Filter Tabs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-line">
                  <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                    Question-by-Question Breakdown
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setReviewFilter("all")}
                      className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                        reviewFilter === "all"
                          ? "bg-pass text-paper font-semibold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      All ({answersHistory.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter("incorrect")}
                      className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                        reviewFilter === "incorrect"
                          ? "bg-rose-500 text-white font-semibold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      Mistakes ({answersHistory.length - correctCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter("correct")}
                      className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                        reviewFilter === "correct"
                          ? "bg-emerald-500 text-white font-semibold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      Correct ({correctCount})
                    </button>
                  </div>
                </div>

                {/* Review Questions List */}
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {answersHistory
                    .filter((ans) => {
                      if (reviewFilter === "incorrect") return !ans.isCorrect;
                      if (reviewFilter === "correct") return ans.isCorrect;
                      return true;
                    })
                    .map((ans, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border text-left transition ${
                          ans.isCorrect
                            ? "border-emerald-500/30 bg-emerald-500/5"
                            : "border-rose-500/30 bg-rose-500/5"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-mono text-[10px] text-muted">
                            {ans.question.sectionTitle} · {ans.question.category}
                          </span>
                          <span
                            className={`font-mono text-[10px] font-semibold flex items-center gap-1 ${
                              ans.isCorrect ? "text-emerald-400" : "text-rose-400"
                            }`}
                          >
                            {ans.isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" /> Missed
                              </>
                            )}
                          </span>
                        </div>

                        <p className="font-serif text-sm text-ink font-medium">
                          {ans.question.question}
                        </p>

                        <div className="mt-2 text-xs space-y-1 font-sans">
                          {!ans.isCorrect && (
                            <p className="text-rose-300">
                              Your Answer:{" "}
                              <span className="line-through">
                                {ans.question.options[ans.selectedIndex]}
                              </span>
                            </p>
                          )}
                          <p className="text-emerald-300 font-medium">
                            Correct Answer: {ans.question.options[ans.question.answerIndex]}
                          </p>
                          <p className="text-muted text-[11px] pt-1">
                            {ans.question.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setQuizState("config")}
                className="px-4 py-2 rounded-xl border border-line bg-paper hover:border-pass/60 text-ink font-mono text-xs transition cursor-pointer"
              >
                ⚙ Change Topics / Settings
              </button>

              <div className="flex items-center gap-2">
                {answersHistory.some((a) => !a.isCorrect) && (
                  <button
                    type="button"
                    onClick={handleRetryMissed}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 font-mono text-xs transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry Mistakes ({answersHistory.length - correctCount})</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => startQuiz()}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-semibold transition cursor-pointer shadow-md shadow-pass/25"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Full Quiz</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

