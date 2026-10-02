"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Play,
  RotateCcw,
  Smartphone,
  Tablet,
  Wifi,
} from "lucide-react";

interface DeviceItem {
  id: string;
  os: "android" | "ios";
  name: string;
  osVersion: string;
  screen: string;
  driver: string;
}

interface MobileScenario {
  id: string;
  name: string;
  category: string;
  assertions: {
    step: string;
    latency: string;
  }[];
}

const DEVICES: DeviceItem[] = [
  { id: "pixel8", os: "android", name: "Google Pixel 8", osVersion: "Android 14 (API 34)", screen: "1080x2400 @ 428dpi", driver: "Appium UiAutomator2" },
  { id: "s24", os: "android", name: "Samsung Galaxy S24", osVersion: "Android 14 (OneUI 6.1)", screen: "1080x2340 @ 416dpi", driver: "Appium UiAutomator2" },
  { id: "oneplus", os: "android", name: "OnePlus 12", osVersion: "Android 13 (OxygenOS 13)", screen: "1440x3168 @ 510dpi", driver: "Appium UiAutomator2" },
  { id: "iphone16", os: "ios", name: "iPhone 16 Pro", osVersion: "iOS 18.1", screen: "1179x2556 @ 460ppi", driver: "Appium XCUITest" },
  { id: "iphone15", os: "ios", name: "iPhone 15", osVersion: "iOS 17.5", screen: "1179x2556 @ 460ppi", driver: "Appium XCUITest" },
  { id: "iphone13mini", os: "ios", name: "iPhone 13 mini", osVersion: "iOS 16.6", screen: "1080x2340 @ 476ppi", driver: "Appium XCUITest" },
];

const SCENARIOS: MobileScenario[] = [
  {
    id: "upi",
    name: "UPI Intent Deep-Link & Biometrics",
    category: "Fintech Payments",
    assertions: [
      { step: "Trigger UPI Intent dispatch & verify app-switch to GooglePay/PhonePe", latency: "140ms" },
      { step: "Verify biometric fingerprint/FaceID auth prompt renders within safe area", latency: "65ms" },
      { step: "Confirm payment callback payload signature validated against merchant backend", latency: "92ms" },
    ],
  },
  {
    id: "kyc",
    name: "DigiLocker eKYC & Camera Liveness",
    category: "Identity Verification",
    assertions: [
      { step: "Request camera runtime permission & handle graceful permission denial", latency: "38ms" },
      { step: "Capture selfie frame with 99.4% facial liveness confidence score", latency: "185ms" },
      { step: "Verify Aadhaar paperless offline XML parsed with SHA-256 integrity check", latency: "110ms" },
    ],
  },
  {
    id: "offline",
    name: "Airplane Mode & SQLite Cache Replay",
    category: "Network Resilience",
    assertions: [
      { step: "Simulate sudden airplane mode disconnect during checkout form submission", latency: "24ms" },
      { step: "Assert form draft persists in local encrypted SQLite store with zero state loss", latency: "45ms" },
      { step: "Reconnect network & verify automatic idempotent background queue sync", latency: "135ms" },
    ],
  },
];

export function MobileDeviceMatrix() {
  const [selectedOs, setSelectedOs] = useState<"android" | "ios">("android");
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("pixel8");
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("upi");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(-1);

  const filteredDevices = DEVICES.filter((d) => d.os === selectedOs);
  const activeDevice = DEVICES.find((d) => d.id === selectedDeviceId) || filteredDevices[0];
  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setStepIndex(-1);

    const steps = activeScenario.assertions.length;
    let current = 0;

    const interval = setInterval(() => {
      setStepIndex(current);
      current++;
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
        }, 350);
      }
    }, 450);
  };

  const isComplete = stepIndex >= activeScenario.assertions.length - 1;

  return (
    <div className="border border-line bg-paper p-6 sm:p-8 shadow-xs">
      {/* Top Device OS Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-pass" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Interactive Mobile Test Matrix
            </h3>
          </div>
          <p className="text-xs text-ink-soft mt-1">
            Simulate native Android &amp; iOS automation execution across real device viewports.
          </p>
        </div>

        {/* OS Toggle */}
        <div className="flex items-center gap-2 border border-line bg-card p-1">
          <button
            type="button"
            data-testid="os-toggle-android"
            onClick={() => {
              setSelectedOs("android");
              setSelectedDeviceId("pixel8");
              setStepIndex(-1);
            }}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
              selectedOs === "android"
                ? "bg-pass text-on-band font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            Android Matrix
          </button>
          <button
            type="button"
            data-testid="os-toggle-ios"
            onClick={() => {
              setSelectedOs("ios");
              setSelectedDeviceId("iphone16");
              setStepIndex(-1);
            }}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
              selectedOs === "ios"
                ? "bg-pass text-on-band font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            iOS Matrix
          </button>
        </div>
      </div>

      {/* Device Model Selector Bar */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        {filteredDevices.map((dev) => {
          const isSelected = dev.id === activeDevice.id;
          return (
            <button
              key={dev.id}
              type="button"
              data-testid={`device-select-${dev.id}`}
              onClick={() => {
                setSelectedDeviceId(dev.id);
                setStepIndex(-1);
              }}
              className={`p-3 border text-left font-mono text-xs transition-all ${
                isSelected
                  ? "border-pass bg-card text-pass shadow-2xs font-semibold"
                  : "border-line bg-card/40 text-ink-soft hover:bg-card hover:text-ink"
              }`}
            >
              <p className="font-bold truncate">{dev.name}</p>
              <p className="text-[0.65rem] text-muted truncate mt-0.5">{dev.osVersion}</p>
            </button>
          );
        })}
      </div>

      {/* Simulator Execution Workbench */}
      <div className="mt-5 border border-line bg-card p-5 sm:p-6">
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 4 Cols: Active Device Metadata & Scenario Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3 font-mono text-xs">
              <div className="border border-line bg-paper p-3 space-y-1.5">
                <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                  Hardware Profile:
                </span>
                <p className="font-bold text-ink text-sm">{activeDevice.name}</p>
                <p className="text-[0.7rem] text-muted">{activeDevice.screen}</p>
                <div className="pt-1.5 border-t border-line/60 flex items-center justify-between text-[0.68rem]">
                  <span className="text-muted">Driver:</span>
                  <span className="text-pass font-semibold">{activeDevice.driver}</span>
                </div>
              </div>

              <div>
                <span className="text-[0.62rem] uppercase tracking-wider text-muted block mb-1.5">
                  Select Mobile Test Journey:
                </span>
                <div className="space-y-1.5">
                  {SCENARIOS.map((sc) => {
                    const isSelected = sc.id === activeScenario.id;
                    return (
                      <button
                        key={sc.id}
                        type="button"
                        data-testid={`scenario-select-${sc.id}`}
                        onClick={() => {
                          setSelectedScenarioId(sc.id);
                          setStepIndex(-1);
                        }}
                        className={`w-full text-left p-2.5 border transition-all text-[0.72rem] ${
                          isSelected
                            ? "border-pass bg-pass-fill/10 text-pass font-bold"
                            : "border-line bg-paper text-ink-soft hover:text-ink"
                        }`}
                      >
                        <span className="block truncate">{sc.name}</span>
                        <span className="text-[0.6rem] text-muted uppercase block mt-0.5">{sc.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Run Button */}
            <button
              type="button"
              data-testid="mobile-simulate-run"
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="press w-full flex items-center justify-center gap-2 border border-pass bg-pass text-on-band px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors disabled:opacity-60 shadow-xs"
            >
              {isSimulating ? (
                <>
                  <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                  <span>Executing on Device...</span>
                </>
              ) : isComplete ? (
                <>
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Re-test Scenario</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Execute Native Run</span>
                </>
              )}
            </button>
          </div>

          {/* Right 8 Cols: Live Device Terminal & Step Assertions */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-line bg-paper p-4 font-mono text-xs">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      isSimulating ? "bg-amber-500 animate-ping" : isComplete ? "bg-pass" : "bg-pass"
                    }`}
                  />
                  <span className="text-[0.7rem] uppercase text-ink font-semibold">
                    {activeDevice.driver} · Test Session Log
                  </span>
                </div>
                <span className="text-[0.65rem] text-muted">
                  {stepIndex >= 0 ? `${stepIndex + 1}/${activeScenario.assertions.length} Steps` : "Idle"}
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {activeScenario.assertions.map((assertion, idx) => {
                  const isPassed = stepIndex >= idx;
                  const isCurrent = isSimulating && stepIndex === idx - 1;

                  return (
                    <div
                      key={idx}
                      className={`p-2.5 border transition-all flex items-center justify-between gap-3 text-xs ${
                        isPassed
                          ? "border-pass/40 bg-pass-fill/5"
                          : isCurrent
                          ? "border-amber-500/50 bg-amber-500/5 animate-pulse"
                          : "border-line/60 bg-card/40 text-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {isPassed ? (
                          <CheckCircle2 className="h-4 w-4 text-pass shrink-0" />
                        ) : isCurrent ? (
                          <span className="h-3.5 w-3.5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin shrink-0" />
                        ) : (
                          <span className="h-3.5 w-3.5 rounded-full border border-muted shrink-0" />
                        )}
                        <span className={`text-[0.72rem] truncate ${isPassed ? "text-ink font-medium" : "text-ink-soft"}`}>
                          {assertion.step}
                        </span>
                      </div>
                      <span className={`text-[0.68rem] shrink-0 font-bold ${isPassed ? "text-pass" : "text-muted"}`}>
                        {isPassed ? assertion.latency : "--"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-4 pt-2.5 border-t border-line/60 flex items-center justify-between text-[0.68rem] text-muted">
              <span>Target: <strong className="text-ink">{activeDevice.name} ({activeDevice.screen})</strong></span>
              <span className="text-pass font-semibold">
                {isComplete ? "Verified on Device Matrix" : isSimulating ? "Testing..." : "Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

