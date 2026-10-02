"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Play,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

interface EnterprisePortal {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  volume: string;
  sla: string;
  description: string;
  architectureNodes: {
    label: string;
    role: string;
  }[];
  criticalGuards: {
    vector: string;
    risk: string;
    assertion: string;
  }[];
  complianceBadges: string[];
}

const ENTERPRISE_PORTALS: EnterprisePortal[] = [
  {
    id: "los",
    title: "Loan Origination System (LOS)",
    subtitle: "Multi-Tier Underwriting & Digital KYC Engine",
    category: "Fintech Lending",
    volume: "10,000+ Applications / Day",
    sla: "Sub-2s Automated Risk Decisioning",
    description: "Multi-tiered applicant underwriting portal handling paperless DigiLocker eKYC, credit bureau pulls (CIBIL / Experian), bank statement OCR, and automated algorithmic risk tiering.",
    architectureNodes: [
      { label: "Applicant Mobile Web", role: "Document Upload & Consent" },
      { label: "DigiLocker / UIDAI Switch", role: "XML Signature & Face Match" },
      { label: "Credit Bureau Engine", role: "CIBIL / Experian Deduplication" },
      { label: "Underwriting Matrix", role: "Rule Engine & Risk Tiering" },
    ],
    criticalGuards: [
      {
        vector: "Aadhaar eSign Consent Tampering",
        risk: "Fraudulent application with mismatched signer cert",
        assertion: "Assert X.509 cert chain matches UIDAI public root within 250ms",
      },
      {
        vector: "Duplicate PAN Application Race",
        risk: "Simultaneous loan submissions bypassing bureau checks",
        assertion: "Verify Redis distributed SETNX lock prevents dual applicant creation",
      },
      {
        vector: "Penny-Drop Beneficiary Validation",
        risk: "Disbursal to mismatched third-party bank account",
        assertion: "Confirm name string similarity score >= 85% via Jaro-Winkler check",
      },
    ],
    complianceBadges: ["RBI Digital Lending Guidelines", "UIDAI eKYC Compliance", "ISO 27001 Data Encryption"],
  },
  {
    id: "lms",
    title: "Loan Management System (LMS)",
    subtitle: "Core Repayment Ledgers & e-NACH Mandates",
    category: "Fintech Core Ledgers",
    volume: "₹500Cr+ Under Management",
    sla: "Zero Ledger Inconsistency Standard",
    description: "Automated loan disbursal engine, amortized repayment scheduling, reducing balance interest calculation matrices, overdue penalty logic, and automated e-NACH bank mandate debit processing.",
    architectureNodes: [
      { label: "Core Loan Disbursal", role: "IMPS / NEFT Transfer Dispatch" },
      { label: "Double-Entry Ledger", role: "Asset & Liability Balance Audit" },
      { label: "e-NACH Mandate Engine", role: "NPCI Auto-Debit Batch Scheduler" },
      { label: "Penalty & Amortization", role: "Reducing Balance Interest Math" },
    ],
    criticalGuards: [
      {
        vector: "Double-Debit on Mandate Retry",
        risk: "Customer charged twice when bank webhook times out",
        assertion: "Assert immutable Idempotency-Key locks mandate debit for 24 hours",
      },
      {
        vector: "Floating Point Decimal Rounding Error",
        risk: "Cent-level drift corrupting general ledger balance",
        assertion: "Validate BigNumber fixed-precision math asserts Debit == Credit delta 0.00",
      },
      {
        vector: "Pre-Closure Foreclosure Fee Math",
        risk: "Incorrect interest rebate violating RBI fair lending rules",
        assertion: "Verify exact day-count fraction amortization matches audited schedules",
      },
    ],
    complianceBadges: ["Zero Ledger Imbalance Standard", "NPCI e-NACH Protocol", "RBI Fair Practices Code"],
  },
  {
    id: "settlement",
    title: "Merchant Settlement Portal",
    subtitle: "High-Volume Gross Reconciliation & Split Fees",
    category: "Payments & Accounting",
    volume: "2M+ Daily Transactions",
    sla: "T+1 Strict Settlement SLA",
    description: "High-volume transaction ledger reconciling gross settlements, MDR fee deductions, partner gateway split payments, merchant chargebacks, and automated bank batch transfers.",
    architectureNodes: [
      { label: "Payment Gateway Ingress", role: "Razorpay / Cashfree Webhooks" },
      { label: "Reconciliation Engine", role: "T+1 Bank MIS File Parser" },
      { label: "MDR Fee Calculator", role: "Contractual Tiered Deductions" },
      { label: "Nodal Account Switch", role: "Automated Batch Payouts" },
    ],
    criticalGuards: [
      {
        vector: "Mismatched Bank Settlement MIS",
        risk: "Payout released before bank confirmation received",
        assertion: "Assert three-way reconciliation (Merchant, Gateway, Bank) passes 100%",
      },
      {
        vector: "Chargeback Clawback Underflow",
        risk: "Negative merchant wallet balance allowing fraud escape",
        assertion: "Verify escrow hold reserve enforces minimum threshold buffer",
      },
      {
        vector: "Batch Payout Network Dropout",
        risk: "Half of batch paid, other half stuck in unknown state",
        assertion: "Confirm transactional batch commit rollback on unexpected TCP timeout",
      },
    ],
    complianceBadges: ["PCI-DSS Level 1 Audit", "RBI Nodal Account Compliance", "SOC 2 Type II Audited"],
  },
  {
    id: "gateway",
    title: "Partner Banking APIs & Gateway",
    subtitle: "Direct Bank Core Integration Middleware",
    category: "Integration Middleware",
    volume: "500+ TPS Peak Concurrency",
    sla: "p99 < 180ms Response Latency",
    description: "Direct integration middleware connecting partner banks for IMPS, NEFT, RTGS, and UPI 2.0 payment rails with strict cryptographic signature verification and fallback switches.",
    architectureNodes: [
      { label: "Internal Service Gateway", role: "Microservice Request Ingress" },
      { label: "HMAC / RSA Cryptography", role: "Bank Payload Signature Verification" },
      { label: "Failover Circuit Breaker", role: "Automated Secondary Bank Switch" },
      { label: "Partner Bank Core Switch", role: "Direct Host-to-Host CBS Link" },
    ],
    criticalGuards: [
      {
        vector: "Tampered Webhook Callback Payload",
        risk: "Attacker fakes payment success status via MITM injection",
        assertion: "Verify RSA-SHA256 signature mismatch immediately terminates session",
      },
      {
        vector: "Primary Bank Switch 504 Timeout",
        risk: "Checkout funnel stalls and abandons transaction",
        assertion: "Confirm circuit breaker switches to backup banking rail in < 150ms",
      },
      {
        vector: "High Concurrency Thread Deadlock",
        risk: "500 simultaneous requests exhaust connection pool",
        assertion: "Validate HikariCP connection pool recovers with p99 latency < 250ms",
      },
    ],
    complianceBadges: ["Mutual TLS 1.3 Encryption", "NPCI UPI 2.0 Standards", "Automated Circuit Breakers"],
  },
];

export function InteractiveEnterprisePortals() {
  const [activePortalId, setActivePortalId] = useState<string>("los");
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifiedStepIndex, setVerifiedStepIndex] = useState<number>(-1);

  const portal = ENTERPRISE_PORTALS.find((p) => p.id === activePortalId) || ENTERPRISE_PORTALS[0];

  const handleRunVerification = () => {
    if (isVerifying) return;
    setIsVerifying(true);
    setVerifiedStepIndex(-1);

    const steps = portal.criticalGuards.length;
    let current = 0;

    const interval = setInterval(() => {
      setVerifiedStepIndex(current);
      current++;
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVerifying(false);
        }, 350);
      }
    }, 450);
  };

  const isComplete = verifiedStepIndex >= portal.criticalGuards.length - 1;

  return (
    <div className="mt-8 border border-line bg-card shadow-xs">
      {/* 4 Portals Selector Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line border-b border-line bg-paper">
        {ENTERPRISE_PORTALS.map((p) => {
          const isSelected = p.id === portal.id;
          return (
            <button
              key={p.id}
              type="button"
              data-testid={`enterprise-portal-tab-${p.id}`}
              onClick={() => {
                setActivePortalId(p.id);
                setVerifiedStepIndex(-1);
              }}
              className={`p-4 text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-card text-pass shadow-2xs font-semibold"
                  : "bg-paper text-ink-soft hover:bg-card/60 hover:text-ink"
              }`}
            >
              <div>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted block mb-1">
                  {p.category}
                </span>
                <h4 className="font-serif text-sm font-bold text-ink truncate leading-tight">
                  {p.title}
                </h4>
              </div>

              <span
                className={`mt-3 font-mono text-[0.6rem] uppercase tracking-wider ${
                  isSelected ? "text-pass font-bold" : "text-muted"
                }`}
              >
                {isSelected ? "● Active Architecture" : "Inspect Portal"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Inspection Canvas */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Header & Specs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-line/60 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider font-semibold">
                {portal.category}
              </span>
              <span className="font-mono text-xs text-muted">
                NDA Protected Enterprise Asset
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink">{portal.title}</h3>
            <p className="text-xs sm:text-sm text-ink-soft mt-1">{portal.description}</p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0">
            <div className="border border-line bg-paper px-3 py-1.5 text-right">
              <span className="text-[0.6rem] text-muted block uppercase">Daily Volume:</span>
              <span className="text-ink font-bold">{portal.volume}</span>
            </div>
            <div className="border border-line bg-paper px-3 py-1.5 text-right">
              <span className="text-[0.6rem] text-muted block uppercase">Performance SLA:</span>
              <span className="text-pass font-bold">{portal.sla}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: System Architecture on Left, Critical Failure Vectors on Right */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 5 Cols: System Architecture Pipeline */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted block mb-3">
                System Topology &amp; Verification Nodes:
              </span>

              <div className="space-y-2">
                {portal.architectureNodes.map((node, idx) => (
                  <div
                    key={node.label}
                    className="border border-line bg-paper p-3 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-pass font-bold">
                        0{idx + 1}.
                      </span>
                      <span className="font-mono text-xs font-semibold text-ink">
                        {node.label}
                      </span>
                    </div>
                    <span className="text-[0.68rem] text-muted font-mono truncate">
                      {node.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="border border-line bg-paper/60 p-3.5 space-y-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted block">
                Audited Standards &amp; Controls:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {portal.complianceBadges.map((badge) => (
                  <span
                    key={badge}
                    className="border border-line bg-card px-2 py-0.5 font-mono text-[0.65rem] text-ink"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Critical Failure Vectors Guarded & Live Verification */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-line bg-paper p-5 font-mono text-xs shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-pass" />
                  <span className="text-xs font-bold text-ink uppercase tracking-wider">
                    High-Risk Failure Vectors Eliminated:
                  </span>
                </div>

                <button
                  type="button"
                  data-testid={`verify-portal-${portal.id}`}
                  onClick={handleRunVerification}
                  disabled={isVerifying}
                  className="press inline-flex items-center gap-1.5 border border-pass bg-pass text-on-band px-2.5 py-1 text-[0.68rem] uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors disabled:opacity-60 shadow-xs"
                >
                  {isVerifying ? (
                    <>
                      <RotateCcw className="h-3 w-3 animate-spin" />
                      <span>Asserting...</span>
                    </>
                  ) : isComplete ? (
                    <>
                      <RotateCcw className="h-3 w-3" />
                      <span>Re-verify</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-current" />
                      <span>Run Test Suite</span>
                    </>
                  )}
                </button>
              </div>

              {/* Assertion Rows */}
              <div className="space-y-3">
                {portal.criticalGuards.map((guard, idx) => {
                  const isPassed = verifiedStepIndex >= idx;
                  const isCurrent = isVerifying && verifiedStepIndex === idx - 1;

                  return (
                    <div
                      key={guard.vector}
                      className={`p-3 border transition-all space-y-1.5 ${
                        isPassed
                          ? "border-pass/40 bg-pass-fill/5"
                          : isCurrent
                          ? "border-amber-500/50 bg-amber-500/5 animate-pulse"
                          : "border-line bg-card/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-ink text-xs truncate">
                          {guard.vector}
                        </span>
                        <span className="shrink-0 flex items-center gap-1 font-mono text-[0.65rem]">
                          {isPassed ? (
                            <span className="text-pass font-bold flex items-center gap-1">
                              <CheckCircle2 className="h-3.5 w-3.5 text-pass" />
                              Passed
                            </span>
                          ) : isCurrent ? (
                            <span className="text-amber-500">Checking...</span>
                          ) : (
                            <span className="text-muted">Unchecked</span>
                          )}
                        </span>
                      </div>

                      <p className="text-[0.7rem] text-red-600 dark:text-red-400 font-sans">
                        Risk: {guard.risk}
                      </p>

                      <div className="p-1.5 bg-paper border border-line/60 text-[0.68rem] text-pass font-mono">
                        Assertion: {guard.assertion}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Telemetry Footer */}
            <div className="mt-4 pt-2.5 border-t border-line/60 flex items-center justify-between text-[0.68rem] text-muted">
              <span>Target: <strong className="text-ink">{portal.title} Regression Suite</strong></span>
              <span className="text-pass font-semibold">
                {isComplete ? "100% Guarded · Zero Financial Escapes" : "Audit Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

