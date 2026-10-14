import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const AUTOMATION_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "automation-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "automation-overview", text: "Overview" }],
  },
  {
    title: "Pyramids & Architecture",
    defaultOpen: true,
    items: [
      { id: "automation-pyramid", text: "The Test Automation Pyramid" },
      { id: "automation-framework-design", text: "Framework Architecture & Layers" },
    ],
  },
  {
    title: "Design Patterns",
    defaultOpen: true,
    items: [
      { id: "automation-pom-patterns", text: "Page Object Model (POM)" },
      { id: "automation-screenplay-pattern", text: "Screenplay & Fluent Patterns" },
    ],
  },
  {
    title: "Framework Paradigms",
    defaultOpen: true,
    items: [
      { id: "automation-framework-types", text: "Data-Driven & Keyword-Driven" },
      { id: "automation-bdd-cucumber", text: "BDD with Cucumber & Gherkin" },
    ],
  },
  {
    title: "Execution & CI/CD",
    defaultOpen: false,
    items: [
      { id: "automation-flaky-tests", text: "Eliminating Flaky Tests" },
      { id: "automation-parallel-cicd", text: "Parallel Execution & CI/CD" },
    ],
  },
];

export const AUTOMATION_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "automation-overview": {
    id: "automation-overview",
    title: "Test Automation Strategy & Architecture",
    category: "Overview",
    sourceUrl: "https://martinfowler.com/articles/practical-test-pyramid.html",
    description: "Understand the core principles of test automation engineering: determining when to automate, calculating automation ROI, and avoiding expensive maintenance traps.",
    sections: [
      {
        id: "why-automate",
        heading: "Why Test Automation?",
        paragraphs: [
          "Test automation is the practice of utilizing specialized software tools to execute tests against a software system automatically, compare actual outcomes to predicted outcomes, and report results without human intervention.",
          "The primary value of automation is not replacing human manual testers, but empowering engineering teams with high-speed, repeatable feedback loops on regression health across every commit and deployment.",
          "When architected correctly, automated test suites slash regression cycle times from days to minutes, unlock continuous integration and continuous deployment (CI/CD), and free manual QA engineers to focus on high-value exploratory and security testing.",
        ],
      },
      {
        id: "when-to-automate",
        heading: "When to Automate vs When NOT to Automate",
        paragraphs: [
          "Attempting to automate 100% of testing is an anti-pattern that leads to high maintenance costs and brittle suites. Follow this decision rubric:",
        ],
        table: {
          headers: ["Candidate for Automation (YES)", "Candidate for Manual Testing (NO)"],
          rows: [
            ["High-volume, repetitive regression test cases.", "Frequently changing UI designs in early discovery phase."],
            ["Critical core business flows (Login, Payments, Checkout).", "One-off exploratory testing sessions and bug hunts."],
            ["Data-driven tests requiring hundreds of input permutations.", "Usability, user experience (UX), and accessibility feel."],
            ["Performance, load, and stress test scenarios.", "Ad-hoc investigations with vague or changing specifications."],
            ["Complex API contract and schema validation suites.", "Tests requiring human visual verification (e.g. nuanced canvas rendering)."],
          ],
        },
      },
      {
        id: "automation-roi",
        heading: "Calculating Automation ROI (Return on Investment)",
        paragraphs: [
          "To justify test automation investments to engineering leadership, calculate ROI over a projected time horizon (e.g. 1 year):",
        ],
        codeBlocks: [
          {
            title: "ROI Calculation Formula",
            language: "bash",
            code: `ROI = (Cost Savings from Automation - Total Investment Cost) / Total Investment Cost * 100

Where:
- Cost Savings = (Manual Execution Hours Saved * Hourly Rate) + (Early Bug Prevention Savings)
- Total Investment = (Tooling/Cloud License Costs) + (Script Development & Maintenance Hours * Hourly Rate)

Rule of Thumb: An automated test case generally pays for itself after approximately 5 to 7 regression execution cycles.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. THE TEST AUTOMATION PYRAMID                                */
  /* ------------------------------------------------------------- */
  "automation-pyramid": {
    id: "automation-pyramid",
    title: "The Test Automation Pyramid & Anti-Patterns",
    category: "Pyramids & Architecture",
    sourceUrl: "https://martinfowler.com/bliki/TestPyramid.html",
    description: "Analyze Mike Cohn's classic Test Automation Pyramid, explore the Ice Cream Cone anti-pattern, and review modern alternatives like the Testing Trophy.",
    sections: [
      {
        id: "the-pyramid",
        heading: "The Classic Test Automation Pyramid (Mike Cohn)",
        paragraphs: [
          "Introduced by Mike Cohn in 'Succeeding with Agile', the Test Automation Pyramid advocates for a healthy balance of test granularity across three primary layers:",
        ],
        codeBlocks: [
          {
            title: "The Test Automation Pyramid",
            language: "bash",
            code: `        ▲
       / \\
      /   \\       UI / End-to-End Tests (10%)
     / E2E \\      Slowest, Most Expensive, Brittle
    /───────\\
   /         \\    Service / API / Integration Tests (20-30%)
  /  API/SVC  \\   Fast, High Reliability, Robust Business Logic
 /─────────────\\
/               \\  Unit Tests (60-70%)
/      UNIT      \\ Fastest, Inexpensive, Pinpoints Exact Line of Failure
───────────────────`,
          },
        ],
        table: {
          headers: ["Layer", "Recommended %", "Execution Speed", "Cost to Develop & Maintain", "Failure Isolation"],
          rows: [
            ["Unit Tests", "60% - 70%", "Milliseconds per test", "Very Low", "Immediate (Exact class & line)"],
            ["API / Integration Tests", "20% - 30%", "Sub-second per test", "Moderate", "Pinpoints specific service or endpoint"],
            ["UI / E2E Tests", "10% - 15%", "5 to 60 seconds per test", "High (DOM changes, browser rendering)", "Complex (Requires trace/video inspection)"],
          ],
        },
      },
      {
        id: "ice-cream-cone-antipattern",
        heading: "The Ice Cream Cone (Inverted Pyramid) Anti-Pattern",
        paragraphs: [
          "The 'Ice Cream Cone' or 'Inverted Pyramid' occurs when an organization has minimal unit and integration tests, but writes hundreds of slow, brittle UI-level end-to-end tests.",
          "Symptoms: Test suite takes 4+ hours to run; builds constantly fail due to flakiness rather than real bugs; developers ignore CI failures; maintenance takes more time than feature development.",
        ],
      },
      {
        id: "testing-trophy",
        heading: "The Testing Trophy (Kent C. Dodds)",
        paragraphs: [
          "In modern component-driven architectures (React, Next.js, microservices), Kent C. Dodds proposed the 'Testing Trophy', emphasizing Integration testing above all:",
          "1. **Static:** ESLint, TypeScript types (catches typos and type mismatches instantly).",
          "2. **Unit:** Standalone algorithms, utilities, pure functions.",
          "3. **Integration (Widest part):** Testing components and API interactions together as they interact in the real system.",
          "4. **End-to-End:** Critical happy-path user journeys.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. FRAMEWORK ARCHITECTURE                                     */
  /* ------------------------------------------------------------- */
  "automation-framework-design": {
    id: "automation-framework-design",
    title: "Test Automation Framework Architecture & Layers",
    category: "Pyramids & Architecture",
    sourceUrl: "https://martinfowler.com/",
    description: "Discover the architectural layers of an enterprise-grade automation framework: runner, page objects, configuration, drivers, utilities, and reporting.",
    sections: [
      {
        id: "layered-architecture",
        heading: "Layered Automation Framework Architecture",
        paragraphs: [
          "A production-grade test automation framework decouples test logic from underlying driver mechanics, locator strategies, and environment configurations.",
        ],
        codeBlocks: [
          {
            title: "Framework Component Diagram",
            language: "bash",
            code: `┌─────────────────────────────────────────────────────────────┐
│                       Test Layer                            │
│  - Spec / Feature Files (e.g. checkout.spec.ts, login.feature)│
│  - Assertions & Business Journey Logic                       │
└──────────────────────────────┬──────────────────────────────┘
                               │ calls actions
┌──────────────────────────────▼──────────────────────────────┐
│                    Page Object Layer                        │
│  - Page Objects (LoginPage, CartPage, PaymentModal)         │
│  - Component Objects (Navbar, DatePicker, TableGrid)        │
└──────────────────────────────┬──────────────────────────────┘
                               │ uses driver & helpers
┌──────────────────────────────▼──────────────────────────────┐
│                    Core Engine / Utility Layer              │
│  - Driver / Browser Factory (Playwright, Selenium, Appium)   │
│  - Smart Wait & Synchronization Utilities                    │
│  - API Client & Database Helpers                             │
│  - Test Data Fixtures & Factory Builders                    │
└──────────────────────────────┬──────────────────────────────┘
                               │ configured by & outputs to
┌──────────────────────────────▼──────────────────────────────┐
│                    Infrastructure Layer                     │
│  - Config Manager (.env, dev.json, prod.json)               │
│  - Reporters (Allure, HTML Report, JUnit XML)                │
│  - CI/CD Runners (GitHub Actions, Jenkins, Docker)          │
└─────────────────────────────────────────────────────────────┘`,
          },
        ],
      },
      {
        id: "framework-responsibilities",
        heading: "Key Architectural Responsibilities",
        paragraphs: [
          "1. **Separation of Concerns:** Test scripts should only describe *what* is being tested, while Page Objects describe *how* interactions occur with the DOM.",
          "2. **Zero Hardcoded Values:** URLs, credentials, timeouts, and environments must be read from environment variables or configuration files.",
          "3. **Stateless Test Execution:** Each test must be completely independent and capable of running in any order or in parallel without relying on state from preceding tests.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. PAGE OBJECT MODEL (POM)                                    */
  /* ------------------------------------------------------------- */
  "automation-pom-patterns": {
    id: "automation-pom-patterns",
    title: "Page Object Model (POM) Design Pattern",
    category: "Design Patterns",
    sourceUrl: "https://martinfowler.com/bliki/PageObject.html",
    description: "The Page Object Model is the gold standard design pattern for UI automation, promoting maintainability, code reusability, and clean separation between test logic and element locators.",
    sections: [
      {
        id: "what-is-pom",
        heading: "What is the Page Object Model?",
        paragraphs: [
          "The Page Object Model (POM) is an object-oriented design pattern that creates an object repository for web UI elements. Under this pattern, each web page (or distinct component) is represented by a corresponding class.",
          "The class encapsulates the locators for the page elements and provides public methods representing the services or actions available on that page (e.g., `loginAs()`, `searchProduct()`, `checkout()`).",
        ],
        callouts: [
          {
            type: "warning",
            title: "Crucial POM Rule: Never Put Assertions in Page Objects",
            text: "Page objects should return data, status, or new page instances—they should NOT contain assertions (expect/assert). Assertions belong strictly inside the test spec files so that verification intent remains transparent.",
          },
        ],
      },
      {
        id: "pom-implementation",
        heading: "TypeScript Implementation of POM",
        codeBlocks: [
          {
            title: "LoginPage.ts (Page Object Class)",
            language: "typescript",
            code: `import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel("Email address");
    this.passwordInput = page.getByLabel("Password");
    this.submitButton = page.getByRole("button", { name: "Sign in" });
    this.errorMessage = page.locator("[role='alert']");
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }

  async getErrorMessageText(): Promise<string> {
    return await this.errorMessage.innerText();
  }
}`,
          },
          {
            title: "login.spec.ts (Clean Test Script)",
            language: "typescript",
            code: `import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test.describe("Authentication Suite", () => {
  test("User logs in successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login("qa.engineer@deepakqa.com", "SecretPass123!");

    await expect(dashboardPage.welcomeHeader).toBeVisible();
    await expect(dashboardPage.userBadge).toContainText("Deepak");
  });

  test("Shows validation error for invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("qa.engineer@deepakqa.com", "WrongPassword!");

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Invalid email or password");
  });
});`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. SCREENPLAY & FLUENT PATTERNS                               */
  /* ------------------------------------------------------------- */
  "automation-screenplay-pattern": {
    id: "automation-screenplay-pattern",
    title: "Screenplay & Fluent Chained Design Patterns",
    category: "Design Patterns",
    sourceUrl: "https://serenity-js.org/handbook/design/screenplay-pattern/",
    description: "Explore advanced automation design patterns: the user-centric Screenplay Pattern (Actors, Tasks, Questions) and Method Chaining Fluent Page Objects.",
    sections: [
      {
        id: "fluent-page-objects",
        heading: "Fluent Page Object Pattern (Method Chaining)",
        paragraphs: [
          "The Fluent pattern enhances POM by having action methods return `this` (or the next Page instance if navigation occurs), enabling readable, chained test steps:",
        ],
        codeBlocks: [
          {
            title: "Fluent Method Chaining Example",
            language: "typescript",
            code: `// Test script reads like a natural sentence
test("Complete checkout journey", async ({ page }) => {
  await new HomePage(page)
    .goto()
    .searchFor("Mechanical Keyboard")
    .selectFirstResult()
    .addToCart()
    .proceedToCheckout()
    .fillShippingAddress(customerData)
    .selectPaymentMethod("UPI")
    .submitOrder();

  await expect(page.getByText("Order Placed Successfully")).toBeVisible();
});`,
          },
        ],
      },
      {
        id: "screenplay-pattern",
        heading: "The Screenplay Pattern",
        paragraphs: [
          "Originated by Antony Marcano and popular in Serenity BDD, the Screenplay Pattern applies SOLID principles to test automation by organizing tests around **Actors** performing **Tasks** using **Abilities** and asking **Questions**:",
        ],
        table: {
          headers: ["Concept", "Role in Pattern", "Code Example Analogy"],
          rows: [
            ["Actor", "The persona performing the test actions.", "`const deepak = Actor.named('Deepak').whoCan(BrowseTheWeb.with(browser))`"],
            ["Ability", "What the actor can interact with (Browser, REST API, Database).", "`actor.whoCan(CallAnApi.at(baseUrl))`"],
            ["Task", "A high-level business activity made of multiple low-level interactions.", "`actor.attemptsTo(Authenticate.withCredentials(user, pass))`"],
            ["Question", "How the actor inspects system state for assertions.", "`actor.asks(TheText.of(Dashboard.Heading))`"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. FRAMEWORK TYPES                                            */
  /* ------------------------------------------------------------- */
  "automation-framework-types": {
    id: "automation-framework-types",
    title: "Data-Driven, Keyword-Driven & Hybrid Frameworks",
    category: "Framework Paradigms",
    sourceUrl: "https://www.istqb.org/",
    description: "Compare core automation framework paradigms: Data-Driven testing (DDT) using external fixtures, Keyword-Driven execution engines, and modern Hybrid architectures.",
    sections: [
      {
        id: "framework-types-comparison",
        heading: "Comparison of Framework Paradigms",
        table: {
          headers: ["Framework Paradigm", "Core Characteristic", "Best Suited For"],
          rows: [
            ["Linear (Record & Playback)", "Sequential actions recorded directly; hardcoded data.", "Throwaway proofs-of-concept; rapid bug reproduction."],
            ["Modular Framework", "App divided into reusable functional modules.", "Medium-sized apps with independent features."],
            ["Data-Driven Framework (DDT)", "Separates test scripts from test data (stored in JSON, CSV, Excel, DB).", "Testing calculations, tax brackets, login permutations across 100+ data sets."],
            ["Keyword-Driven Framework", "Tests written as tables of keywords (e.g. CLICK, TYPE, VERIFY).", "Teams where non-technical manual testers author tests via Excel tables."],
            ["Behavior-Driven (BDD)", "Scenarios authored in natural language Gherkin (Given/When/Then).", "Cross-functional teams requiring shared alignment between Product, Dev, and QA."],
            ["Hybrid Framework", "Combines Data-Driven, Page Object Model, and modular utilities.", "Standard enterprise-grade test automation suites."],
          ],
        },
      },
      {
        id: "data-driven-example",
        heading: "Data-Driven Testing (DDT) with TypeScript / Playwright",
        paragraphs: [
          "In modern testing, DDT uses parameterized test arrays or external JSON fixtures:",
        ],
        codeBlocks: [
          {
            title: "Parameterized Data-Driven Test",
            language: "typescript",
            code: `import { test, expect } from "@playwright/test";

const testCases = [
  { username: "standard_user", expectedRole: "User", canDelete: false },
  { username: "admin_user", expectedRole: "Administrator", canDelete: true },
  { username: "readonly_user", expectedRole: "Viewer", canDelete: false },
];

for (const data of testCases) {
  test(\`Verify permissions for \${data.username}\`, async ({ page }) => {
    await page.goto("/login");
    await page.fill("#username", data.username);
    await page.fill("#password", "Password123!");
    await page.click("#login-btn");

    await expect(page.locator(".role-badge")).toHaveText(data.expectedRole);
    if (data.canDelete) {
      await expect(page.locator("#delete-account-btn")).toBeEnabled();
    } else {
      await expect(page.locator("#delete-account-btn")).toHaveCount(0);
    }
  });
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. BDD WITH CUCUMBER & GHERKIN                                */
  /* ------------------------------------------------------------- */
  "automation-bdd-cucumber": {
    id: "automation-bdd-cucumber",
    title: "Behavior-Driven Development (BDD) with Cucumber",
    category: "Framework Paradigms",
    sourceUrl: "https://cucumber.io/docs/gherkin/",
    description: "Learn how to bridge communication gaps between product stakeholders and engineering using Gherkin syntax, Cucumber feature files, step definitions, and hooks.",
    sections: [
      {
        id: "what-is-bdd",
        heading: "What is Behavior-Driven Development?",
        paragraphs: [
          "Behavior-Driven Development (BDD) is an Agile software development process that encourages collaboration among developers, QA, and non-technical business participants in a software project.",
          "BDD uses human-readable Gherkin syntax (`Feature`, `Scenario`, `Given`, `When`, `Then`) to write executable specifications that serve simultaneously as living documentation and automated tests.",
        ],
      },
      {
        id: "gherkin-syntax",
        heading: "Gherkin Keywords & Feature Files",
        codeBlocks: [
          {
            title: "shopping_cart.feature (Gherkin File)",
            language: "gherkin",
            code: `Feature: Shopping Cart & Discount Calculations
  As a registered customer
  I want to apply discount vouchers during checkout
  So that I can receive promotional savings on my purchase

  Background:
    Given the user is logged in as "deepak@example.com"
    And the user has an empty shopping cart

  @smoke @regression
  Scenario: Applying valid percentage discount
    Given the user adds "Wireless Mouse" priced at "$50.00" to the cart
    When the user applies voucher code "SAVE20"
    Then the cart subtotal should display "$50.00"
    And the discount amount should display "$10.00"
    And the final checkout total should be "$40.00"

  @regression
  Scenario Outline: Applying tiered volume discounts
    Given the user adds <quantity> units of "USB-C Cable" priced at "$10.00"
    When the user proceeds to checkout
    Then the applied discount percentage should be <discount>%
    And the final total should be <final_price>

    Examples:
      | quantity | discount | final_price |
      | 1        | 0        | "$10.00"    |
      | 5        | 10       | "$45.00"    |
      | 10       | 20       | "$80.00"    |`,
          },
          {
            title: "cart.steps.ts (Step Definitions)",
            language: "typescript",
            code: `import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("the user has an empty shopping cart", async function () {
  await this.cartPage.clearCart();
});

Given("the user adds {string} priced at {string} to the cart", async function (product: string, price: string) {
  await this.catalogPage.addProductToCart(product);
});

When("the user applies voucher code {string}", async function (code: string) {
  await this.cartPage.applyVoucher(code);
});

Then("the final checkout total should be {string}", async function (expectedTotal: string) {
  const actualTotal = await this.cartPage.getFinalTotal();
  expect(actualTotal).toBe(expectedTotal);
});`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. ELIMINATING FLAKY TESTS                                    */
  /* ------------------------------------------------------------- */
  "automation-flaky-tests": {
    id: "automation-flaky-tests",
    title: "Eliminating Flaky Tests & Synchronization Strategies",
    category: "Execution & CI/CD",
    sourceUrl: "https://playwright.dev/docs/actionability",
    description: "Diagnose root causes of flaky tests, implement deterministic auto-waiting, banish sleep anti-patterns, and establish quarantine pipelines.",
    sections: [
      {
        id: "what-is-a-flaky-test",
        heading: "What is a Flaky Test?",
        paragraphs: [
          "A flaky test is a test that exhibits both a passing and a failing status across multiple runs without any changes to the underlying code or test logic.",
          "Flaky tests are the #1 destroyer of automation credibility: they waste engineering hours triaging phantom failures, erode trust in CI pipelines, and cause real bugs to be dismissed as 'just another flaky test'.",
        ],
      },
      {
        id: "root-causes-flakiness",
        heading: "Top 5 Root Causes & Modern Remedies",
        table: {
          headers: ["Root Cause", "The Anti-Pattern (DON'T)", "The Resilient Solution (DO)"],
          rows: [
            ["1. Arbitrary Sleeps", "`Thread.sleep(5000)` or `page.waitForTimeout(3000)`", "Explicit conditional wait for target element state (e.g. `toBeVisible()`, auto-waiting locators)."],
            ["2. Shared State Pollution", "Tests relying on DB records created by earlier tests.", "Generate isolated UUID/timestamp test entities per test run; clean up in `@AfterEach`."],
            ["3. Async Network Latency", "Clicking button before background fetch API completes.", "Wait for specific network response via `page.waitForResponse('/api/cart')`."],
            ["4. Dynamic Element Animations", "Interacting with dropdown while CSS fade-in is running.", "Ensure element is stable and actionability checks (visible, enabled, stationary) pass."],
            ["5. Timezone & Clock Flakes", "Comparing `new Date()` without timezone lock.", "Mock the system clock or force fixed UTC timezone in test runner configs."],
          ],
        },
      },
      {
        id: "retry-vs-quarantine",
        heading: "Smart Retries vs Quarantine Policy",
        paragraphs: [
          "While CI runners support automated retries (e.g. `retries: 2`), retrying is a painkiller, not a cure. If a test passes on retry, it should be automatically flagged as 'Quarantined', tracked in Jira, and investigated before it corrupts release confidence.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. PARALLEL EXECUTION & CI/CD                                 */
  /* ------------------------------------------------------------- */
  "automation-parallel-cicd": {
    id: "automation-parallel-cicd",
    title: "Parallel Execution, Docker & CI/CD Pipelines",
    category: "Execution & CI/CD",
    sourceUrl: "https://docs.github.com/en/actions",
    description: "Scale test execution horizontally across worker threads and Docker containers, integrate quality gates into GitHub Actions pipelines, and generate rich test reports.",
    sections: [
      {
        id: "parallel-execution",
        heading: "Parallel Test Execution & Thread Safety",
        paragraphs: [
          "Running 1,000 automated tests sequentially at 15 seconds per test takes over 4 hours. By parallelizing across 8 worker processes or cloud containers, execution time drops to under 30 minutes.",
          "**Thread Safety Rule:** When writing tests in Java, always use `ThreadLocal<WebDriver>` so that each concurrent thread maintains its own isolated browser session without cross-thread contamination.",
        ],
      },
      {
        id: "github-actions-pipeline",
        heading: "Production GitHub Actions CI/CD Pipeline",
        codeBlocks: [
          {
            title: ".github/workflows/e2e-tests.yml",
            language: "yaml",
            code: `name: Playwright Regression Pipeline

on:
  push:
    branches: [main, release/*]
  pull_request:
    branches: [main]

jobs:
  test:
    timeout-minutes: 30
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers with dependencies
        run: npx playwright install --with-deps

      - name: Run Playwright Tests (4 Parallel Workers)
        run: npx playwright test --workers=4
        env:
          CI: true
          BASE_URL: https://staging.deepakqa.com

      - name: Upload HTML Test Report Artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 14`,
          },
        ],
      },
    ],
  },
};

