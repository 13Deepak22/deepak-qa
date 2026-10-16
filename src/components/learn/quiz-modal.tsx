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
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  QUIZ_SECTIONS,
  QUIZ_QUESTIONS,
  type QuizQuestion,
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
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(20);
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

  // Start Quiz
  const startQuiz = useCallback(
    (customQuestions?: QuizQuestion[]) => {
      let questionsToUse = customQuestions;
      if (!questionsToUse) {
        if (availablePool.length === 0) return;
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

  // Select an option
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

  // Next question
  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizState("scorecard");
    }
  };

  // Retry missed
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/55 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-line bg-card shadow-xl overflow-hidden">
        
        {/* Minimal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-line bg-paper/60">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] tracking-wider uppercase text-pass font-semibold">
              02 / QA Quiz
            </span>
            <span className="text-muted/40">•</span>
            <span className="font-mono text-[11px] text-muted">
              {quizState === "active"
                ? `Question ${currentIndex + 1} of ${activeQuestions.length}`
                : quizState === "scorecard"
                ? "Results"
                : `${availablePool.length} MCQs ready`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {quizState === "active" ? (
              <button
                type="button"
                onClick={() => {
                  setQuizState("config");
                  onClose();
                }}
                className="font-mono text-xs text-muted hover:text-rose-500 px-2 py-0.5 rounded transition cursor-pointer hover:bg-rose-500/10"
              >
                Quit
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-md text-muted hover:text-ink hover:bg-paper transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Thin progress line for active quiz */}
        {quizState === "active" && (
          <div className="w-full bg-paper-deep h-0.5 overflow-hidden">
            <div
              className="bg-pass h-full transition-all duration-200 ease-out"
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
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink font-normal">
                  Customize Practice Exam
                </h3>
                <p className="font-mono text-xs text-muted mt-0.5">
                  All 12 QA sections are auto-selected. Click any chip to toggle.
                </p>
              </div>

              {/* Minimal Section Chips (Auto-selected by default) */}
              <div>
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-line/50">
                  <span className="font-mono text-[11px] text-muted">
                    Selected Sections ({selectedSectionIds.size}/12):
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
                  {QUIZ_SECTIONS.map((sec) => {
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

              {/* Minimal Length & Difficulty Segmented Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="block font-mono text-[11px] text-muted mb-1.5 uppercase tracking-wider">
                    Question Count
                  </span>
                  <div className="flex rounded-lg border border-line bg-paper/60 p-0.5">
                    {[10, 20, 50, 100].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setQuestionCountLimit(num)}
                        className={`flex-1 py-1 rounded-md font-mono text-xs font-medium transition cursor-pointer text-center ${
                          questionCountLimit === num
                            ? "bg-card text-pass shadow-2xs font-semibold"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block font-mono text-[11px] text-muted mb-1.5 uppercase tracking-wider">
                    Difficulty Level
                  </span>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full py-1.5 px-2.5 rounded-lg border border-line bg-paper/60 font-mono text-xs text-ink focus:outline-none focus:border-pass cursor-pointer"
                  >
                    <option value="all">All Difficulties (Balanced)</option>
                    <option value="Beginner">Beginner Only</option>
                    <option value="Intermediate">Intermediate Only</option>
                    <option value="Advanced">Advanced Only</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Launch CTA */}
            <div className="mt-8 pt-3.5 border-t border-line flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted">
                Pool has <span className="font-semibold text-pass">{availablePool.length}</span> questions
              </span>

              <button
                type="button"
                onClick={() => startQuiz()}
                disabled={availablePool.length === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs disabled:opacity-40"
              >
                <span>Start Practice Exam</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. ACTIVE QUIZ SESSION                                    */}
        {/* ========================================================= */}
        {quizState === "active" && currentQ && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Question metadata & Live Stats */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-pass font-medium">
                    {currentQ.sectionTitle}
                  </span>
                  <span className="text-muted/40">•</span>
                  <span className="font-mono text-[10px] text-muted">
                    {currentQ.category}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 font-mono text-[11px]">
                  {currentStreak > 1 && (
                    <span className="flex items-center gap-1 text-amber-500 font-medium">
                      <Flame className="w-3.5 h-3.5 fill-amber-500" />
                      {currentStreak}
                    </span>
                  )}
                  <span className="text-muted">
                    {correctCount} / {answersHistory.length} correct
                  </span>
                </div>
              </div>

              {/* Big Question Prompt */}
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink font-normal leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* 4 Interactive MCQ Options */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                {currentQ.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.answerIndex;

                  let cardStyle =
                    "border-line bg-paper/50 hover:border-pass/60 hover:bg-pass/5 text-ink";

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      cardStyle =
                        "border-pass bg-pass/10 text-pass font-medium";
                    } else if (isSelected && !isCorrect) {
                      cardStyle =
                        "border-rose-500/70 bg-rose-500/10 text-rose-500";
                    } else {
                      cardStyle = "border-line/40 bg-card text-muted opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${cardStyle}`}
                    >
                      <div
                        className={`w-5.5 h-5.5 rounded font-mono text-xs font-semibold flex items-center justify-center shrink-0 border transition ${
                          isAnswerSubmitted && isCorrect
                            ? "bg-pass text-paper border-pass"
                            : isAnswerSubmitted && isSelected && !isCorrect
                            ? "bg-rose-500 text-white border-rose-500"
                            : isSelected
                            ? "bg-pass text-paper border-pass"
                            : "bg-paper border-line text-muted"
                        }`}
                      >
                        {isAnswerSubmitted && isCorrect ? (
                          <Check className="w-3 h-3 stroke-[3]" />
                        ) : (
                          letter
                        )}
                      </div>

                      <div className="flex-1 font-sans text-xs sm:text-sm leading-relaxed">
                        {option}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Technical Explanation Callout */}
              {isAnswerSubmitted && (
                <div className="rounded-lg border-l-2 border-pass bg-paper/60 p-3.5 text-xs text-ink-soft leading-relaxed animate-in fade-in duration-150">
                  <p className="font-mono text-[10px] text-pass font-semibold uppercase tracking-wider mb-1">
                    {selectedOption === currentQ.answerIndex ? "Correct" : "Explanation"}
                  </p>
                  <p>{currentQ.explanation}</p>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-3.5 border-t border-line flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted">
                Question {currentIndex + 1} of {activeQuestions.length}
              </span>

              {isAnswerSubmitted && (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs animate-in fade-in duration-150"
                >
                  <span>
                    {currentIndex < activeQuestions.length - 1
                      ? "Next Question"
                      : "Finish Exam"}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. SCORECARD & REVIEW                                      */}
        {/* ========================================================= */}
        {quizState === "scorecard" && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Score Header */}
              <div className="p-4 rounded-xl border border-line bg-paper/50 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl sm:text-2xl font-normal text-ink">
                      {scorePercent}% Accuracy
                    </span>
                    <span className="px-2 py-0.5 rounded-full border border-pass/40 bg-pass/10 text-pass font-mono text-[10px] font-semibold">
                      {scorePercent >= 85 ? "SDET Master" : scorePercent >= 70 ? "Senior QA" : "Needs Review"}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-muted mt-1">
                    Answered {correctCount} of {answersHistory.length} questions correctly · Max streak: {maxStreak}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-pass/10 border border-pass/30 flex items-center justify-center text-pass shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>

              {/* Review Filter Tabs */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-1 border-b border-line/60">
                  <span className="font-mono text-[11px] text-muted uppercase tracking-wider">
                    Review Questions
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <button
                      type="button"
                      onClick={() => setReviewFilter("all")}
                      className={`px-2 py-0.5 rounded transition cursor-pointer ${
                        reviewFilter === "all" ? "bg-pass text-paper font-semibold" : "text-muted hover:text-ink"
                      }`}
                    >
                      All ({answersHistory.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter("incorrect")}
                      className={`px-2 py-0.5 rounded transition cursor-pointer ${
                        reviewFilter === "incorrect" ? "bg-rose-500 text-white font-semibold" : "text-muted hover:text-ink"
                      }`}
                    >
                      Missed ({answersHistory.length - correctCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter("correct")}
                      className={`px-2 py-0.5 rounded transition cursor-pointer ${
                        reviewFilter === "correct" ? "bg-pass text-paper font-semibold" : "text-muted hover:text-ink"
                      }`}
                    >
                      Correct ({correctCount})
                    </button>
                  </div>
                </div>

                {/* Question List */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {answersHistory
                    .filter((ans) => {
                      if (reviewFilter === "incorrect") return !ans.isCorrect;
                      if (reviewFilter === "correct") return ans.isCorrect;
                      return true;
                    })
                    .map((ans, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border text-left text-xs ${
                          ans.isCorrect
                            ? "border-pass/30 bg-pass/5"
                            : "border-rose-500/30 bg-rose-500/5"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-mono text-[10px] text-muted">
                            {ans.question.sectionTitle}
                          </span>
                          <span className={`font-mono text-[10px] font-semibold ${ans.isCorrect ? "text-pass" : "text-rose-500"}`}>
                            {ans.isCorrect ? "Correct" : "Missed"}
                          </span>
                        </div>

                        <p className="font-serif text-xs sm:text-sm text-ink font-medium">
                          {ans.question.question}
                        </p>

                        <p className="mt-1.5 text-muted text-[11px] leading-relaxed">
                          Correct: <span className="text-ink font-medium">{ans.question.options[ans.question.answerIndex]}</span>
                        </p>
                      </div>
                    ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-3.5 border-t border-line flex items-center justify-between">
              <button
                type="button"
                onClick={() => setQuizState("config")}
                className="font-mono text-xs text-muted hover:text-ink cursor-pointer"
              >
                ← Change Settings
              </button>

              <div className="flex items-center gap-2">
                {answersHistory.some((a) => !a.isCorrect) && (
                  <button
                    type="button"
                    onClick={handleRetryMissed}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/40 text-rose-500 hover:bg-rose-500/10 font-mono text-xs transition cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Retry Missed ({answersHistory.length - correctCount})</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => startQuiz()}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-pass text-paper hover:bg-pass-fill font-mono text-xs font-medium transition cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
