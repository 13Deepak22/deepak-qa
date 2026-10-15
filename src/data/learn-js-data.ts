import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const JS_CATEGORIES: DocCategory[] = [
  {
    title: "1. JS Foundations for Playwright",
    defaultOpen: true,
    items: [
      { id: "javascript-getting-started", text: "V8 Engine, Node.js & First Playwright Script" },
      { id: "javascript-variables-scopes", text: "Variables (const, let), Scoping & Test State" },
      { id: "javascript-destructuring-fixtures", text: "Destructuring in Playwright Fixtures ({ page })" },
      { id: "javascript-operators-truthy", text: "Operators, Nullish Coalescing (??) & Assertions" },
    ],
  },
  {
    title: "2. Control Flow & Locator Iteration",
    defaultOpen: true,
    items: [
      { id: "javascript-loops-locators", text: "Loops: for..of vs forEach (The Async Pitfall)" },
      { id: "javascript-conditional-logic", text: "Conditionals, Modern Switch & A/B Test Guards" },
    ],
  },
  {
    title: "3. Functions, Scope & Modern ES6+",
    defaultOpen: true,
    items: [
      { id: "javascript-functions-arrows", text: "Arrow Functions & 'this' in Page Object Models" },
      { id: "javascript-rest-spread", text: "Rest/Spread & structuredClone for Test Data" },
      { id: "javascript-strings-regex", text: "Template Literals & RegExp in getByRole Locators" },
    ],
  },
  {
    title: "4. Async JS & The Event Loop (Core)",
    defaultOpen: false,
    items: [
      { id: "javascript-async-await", text: "Promises & async/await (Eliminating Test Flake)" },
      { id: "javascript-event-loop", text: "The Event Loop & Playwright Auto-Wait Internals" },
      { id: "javascript-promise-concurrency", text: "Promise.all & Concurrency in Parallel Tests" },
    ],
  },
  {
    title: "5. Data Structures & Test Payloads",
    defaultOpen: false,
    items: [
      { id: "javascript-arrays-methods", text: "Array Methods (.map, .filter) on Table Locators" },
      { id: "javascript-objects-json", text: "Objects, JSON Parsing & Deep Mutation Safety" },
      { id: "javascript-sets-maps", text: "Sets & Maps for Multi-Worker Test Caching" },
    ],
  },
  {
    title: "6. Browser Evaluation & Mocking",
    defaultOpen: false,
    items: [
      { id: "javascript-dom-page-evaluate", text: "page.evaluate() vs Locators across Boundary" },
      { id: "javascript-network-mocking", text: "Network Interception, page.route & Mock JSON" },
    ],
  },
  {
    title: "7. Error Handling & Node.js Runtime",
    defaultOpen: false,
    items: [
      { id: "javascript-error-handling", text: "try/catch, Custom Errors & expect().toPass()" },
      { id: "javascript-nodejs-fs", text: "Node.js fs/promises, CSV/PDFs & process.env" },
    ],
  },
];

export const JS_DOCS: Record<string, DetailedDoc> = {
  /* ========================================================================= */
  /* CATEGORY 1: JS FOUNDATIONS FOR PLAYWRIGHT                                 */
  /* ========================================================================= */
  "javascript-getting-started": {
    id: "javascript-getting-started",
    title: "JavaScript Getting Started: V8 Engine, Node.js & Your First Playwright Script",
    category: "1. JS Foundations for Playwright",
    sourceUrl: "https://playwright.dev/docs/intro",
    description: "Start JavaScript from absolute zero tailored for test automation: ECMAScript standards, how the V8 engine and Node.js execute Playwright, and writing your first end-to-end browser script.",
    sections: [
      {
        id: "what-is-javascript",
        heading: "What is JavaScript in Modern Test Automation?",
        paragraphs: [
          "JavaScript is a high-level, dynamically typed language adhering to the ECMAScript standard. While originally created in 1995 to animate web pages inside Netscape, JavaScript today powers the world's most advanced test automation frameworks (Playwright, Cypress, WebdriverIO).",
          "In modern QA automation, JavaScript runs in two distinct environments:",
          "1. Node.js Runtime (Your Test Suite): The test runner, test files, and assertions execute in Node.js on your local machine or CI/CD runner.",
          "2. Browser Engine (The Application Under Test): The application DOM, React components, and user events execute inside Chromium, Firefox, or WebKit.",
          "Playwright acts as the high-speed communication bridge, sending automated commands from Node.js into the browser engine via the Chrome DevTools Protocol (CDP) and WebSocket connections.",
        ],
      },
      {
        id: "first-playwright-script",
        heading: "Writing & Running Your First JavaScript Test",
        paragraphs: [
          "Here is the standard anatomy of a Playwright automated test in JavaScript:",
        ],
        codeBlocks: [
          {
            title: "tests/login-verification.spec.js",
            language: "javascript",
            code: `// Import the test and expect test runners from Playwright
import { test, expect } from '@playwright/test';

test('valid user can login and see dashboard', async ({ page }) => {
  // 1. Navigate to target URL
  await page.goto('https://demo.playwright.dev/todomvc');

  // 2. Locate input and simulate user typing
  const newTodoInput = page.getByPlaceholder('What needs to be done?');
  await newTodoInput.fill('Verify payment webhook');
  await newTodoInput.press('Enter');

  // 3. Web-first assertion with automatic waiting
  const todoItem = page.getByTestId('todo-title');
  await expect(todoItem).toHaveText('Verify payment webhook');
});`,
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "Web-First Assertions",
            text: "Notice `await expect(todoItem).toHaveText(...)`. Playwright's web-first assertions automatically wait up to 5,000ms for elements to appear, re-checking until the assertion passes or times out. Never use manual sleep functions (`setTimeout`) in Playwright!",
          },
        ],
      },
    ],
  },

  "javascript-variables-scopes": {
    id: "javascript-variables-scopes",
    title: "Variables (const, let), Scoping & Test State Management",
    category: "1. JS Foundations for Playwright",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
    description: "Master const vs let vs var in test suites, avoid temporal dead zone (TDZ) traps, understand block scope, and safely manage test state without cross-test pollution.",
    sections: [
      {
        id: "const-vs-let-vs-var",
        heading: "const vs let vs var: Rules for QA Automation",
        paragraphs: [
          "In test automation, improper variable declaration causes state leaks between tests running in parallel:",
        ],
        table: {
          headers: ["Keyword", "Scope", "Reassignable?", "Hoisting Behavior", "Best Practice in Playwright"],
          rows: [
            ["const", "Block `{}`", "NO (Immutable binding)", "Temporal Dead Zone (TDZ)", "Default choice (95% of test code): locators, URLs, selectors, test data."],
            ["let", "Block `{}`", "YES (Mutable)", "Temporal Dead Zone (TDZ)", "Use ONLY when reassigning values (e.g. counters, retry accumulators)."],
            ["var", "Function / Global", "YES (Mutable)", "Hoisted with `undefined`", "STRICTLY FORBIDDEN: Causes variable leakage and flaky race conditions in async tests."],
          ],
        },
      },
      {
        id: "mutation-trap",
        heading: "The Object Mutation Trap in Shared Test Data",
        paragraphs: [
          "`const` prevents variable reassignment, but does NOT make objects or arrays immutable. Modifying an object property in one test can accidentally mutate the shared payload for subsequent tests:",
        ],
        codeBlocks: [
          {
            title: "Test State Mutation Danger & Fix",
            language: "javascript",
            code: `// DANGEROUS: Shared across parallel test workers
const defaultUserPayload = {
  name: 'Test Customer',
  role: 'standard',
  permissions: ['read']
};

test('admin upgrade test', async ({ page }) => {
  // BUG: Mutates the global object directly!
  // defaultUserPayload.permissions.push('admin'); // Pollutes all subsequent tests!

  // SAFE: Create an isolated deep clone for this specific test
  const user = structuredClone(defaultUserPayload);
  user.permissions.push('admin'); // Isolated, safe mutation!
});`,
          },
        ],
      },
    ],
  },

  "javascript-destructuring-fixtures": {
    id: "javascript-destructuring-fixtures",
    title: "Destructuring in Playwright Fixtures: { page, request, context }",
    category: "1. JS Foundations for Playwright",
    sourceUrl: "https://playwright.dev/docs/test-fixtures",
    description: "Learn how JavaScript object and array destructuring powers Playwright's test signature, fixture injection, alias renaming, and default parameter handling.",
    sections: [
      {
        id: "fixture-destructuring",
        heading: "How Playwright Injects Fixtures via Destructuring",
        paragraphs: [
          "Every Playwright test function receives a single context object containing built-in fixtures. JavaScript's object destructuring syntax extracts exactly what the test needs:",
        ],
        codeBlocks: [
          {
            title: "Destructuring Playwright Fixtures",
            language: "javascript",
            code: `import { test, expect } from '@playwright/test';

// 1. Basic Destructuring: Extracting 'page'
test('ui test', async ({ page }) => {
  await page.goto('/');
});

// 2. Multi-Fixture Destructuring: Browser Context + API Request
test('hybrid ui + api test', async ({ page, request, context }) => {
  // Set extra HTTP headers on the browser context
  await context.setExtraHTTPHeaders({ 'X-Automation-Run': 'true' });

  // Make a fast API request to seed test data
  const response = await request.post('/api/users/seed');
  const { userId, authToken } = await response.json(); // Nested destructuring!

  // Navigate to UI with seeded user
  await page.goto(\`/users/\${userId}\`);
});`,
          },
        ],
      },
      {
        id: "destructuring-patterns",
        heading: "Renaming & Default Values in Destructuring",
        paragraphs: [
          "You can rename properties during destructuring to avoid naming collisions in Page Object Models:",
        ],
        codeBlocks: [
          {
            title: "Renaming & Defaults",
            language: "javascript",
            code: `const apiConfig = { endpoint: 'https://staging.api.com', timeoutMs: 5000 };

// Rename 'endpoint' to 'baseUrl' and supply default retries: 3
const { endpoint: baseUrl, timeoutMs, retries = 3 } = apiConfig;

console.log(baseUrl);   // 'https://staging.api.com'
console.log(retries);   // 3 (fallback default applied)`,
          },
        ],
      },
    ],
  },

  "javascript-operators-truthy": {
    id: "javascript-operators-truthy",
    title: "Operators, Nullish Coalescing (??) & Truthy/Falsy in Assertions",
    category: "1. JS Foundations for Playwright",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Truthy",
    description: "Master optional chaining (?.), nullish coalescing (??), strict equality (===), and understand truthy/falsy evaluation pitfalls in Playwright assertions.",
    sections: [
      {
        id: "optional-chaining-nullish",
        heading: "Optional Chaining (?.) & Nullish Coalescing (??)",
        paragraphs: [
          "When parsing complex JSON responses or dynamic DOM attributes, optional chaining and nullish coalescing prevent `TypeError: Cannot read properties of undefined`:",
        ],
        codeBlocks: [
          {
            title: "Safe Object Access in QA",
            language: "javascript",
            code: `const response = await page.request.get('/api/v1/checkout/status');
const data = await response.json();

// 1. Optional Chaining (?.) prevents runtime crash if 'transaction' is null
const trackingCode = data?.transaction?.shipping?.trackingNumber;

// 2. Nullish Coalescing (??) provides fallback ONLY for null or undefined (preserves 0 and false!)
const maxRetries = process.env.TEST_RETRIES ?? 2;
const discountAmount = data?.appliedDiscount ?? 0; // If discount is 0, ?? preserves 0!`,
          },
        ],
      },
      {
        id: "truthy-falsy-assertions",
        heading: "Truthy vs Falsy Pitfalls in Test Assertions",
        paragraphs: [
          "In JavaScript, exactly 8 values evaluate to `false` (falsy):",
          "`false`, `0`, `-0`, `0n`, `\"\"` (empty string), `null`, `undefined`, and `NaN`.",
          "Every other value is truthy—including empty arrays `[]` and empty objects `{}`!",
        ],
        callouts: [
          {
            type: "warning",
            title: "Assertion Gotcha",
            text: "Never do `expect(usersArray).toBeTruthy()` to check if a list has items! An empty array `[]` is truthy in JavaScript! Always assert array length: `expect(usersArray).not.toHaveLength(0)` or `expect(usersArray.length).toBeGreaterThan(0)`.",
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 2: CONTROL FLOW & LOCATOR ITERATION                              */
  /* ========================================================================= */
  "javascript-loops-locators": {
    id: "javascript-loops-locators",
    title: "Loops: for..of vs forEach (The #1 Async Playwright Pitfall)",
    category: "2. Control Flow & Locator Iteration",
    sourceUrl: "https://playwright.dev/docs/locators#looping-through-locators",
    description: "Understand why using Array.prototype.forEach with async/await silently breaks Playwright tests, and master for..of iteration across Playwright locators.",
    sections: [
      {
        id: "the-foreach-async-bug",
        heading: "Why Array.forEach() Silently Breaks in Playwright",
        paragraphs: [
          "One of the most dangerous bugs in automated testing occurs when engineers use `forEach()` with an `async` callback. `Array.prototype.forEach` does NOT await Promises—it fires all iterations concurrently and terminates immediately, leaving your test to finish before actions complete!",
        ],
        codeBlocks: [
          {
            title: "The Fatal forEach() Bug vs for..of Fix",
            language: "javascript",
            code: `// ❌ DEADLY BUG: forEach does NOT wait for await!
// Playwright finishes the test before clicks even execute!
const deleteButtons = await page.getByRole('button', { name: 'Delete' }).all();
deleteButtons.forEach(async (btn) => {
  await btn.click(); // Unhandled promise! Test runner exits prematurely!
});

// ✅ CORRECT: for..of executes sequentially and respects await
for (const btn of deleteButtons) {
  await btn.click();
  await expect(page.getByText('Item removed')).toBeVisible();
}`,
          },
        ],
      },
      {
        id: "iterating-locators-all",
        heading: "Iterating Over Playwright Locators with locator.all()",
        paragraphs: [
          "Playwright provides `locator.all()` to resolve a multi-element locator into an array of individual locators:",
        ],
        codeBlocks: [
          {
            title: "Table Row Validation Pattern",
            language: "javascript",
            code: `const tableRows = await page.locator('table.transactions tbody tr').all();
console.log(\`Found \${tableRows.length} transactions.\`);

for (const row of tableRows) {
  const statusCell = row.locator('td.status');
  const amountCell = row.locator('td.amount');

  // Verify each row in sequence
  await expect(statusCell).toHaveText('COMPLETED');
  const amountText = await amountCell.innerText();
  expect(parseFloat(amountText.replace('$', ''))).toBeGreaterThan(0);
}`,
          },
        ],
      },
    ],
  },

  "javascript-conditional-logic": {
    id: "javascript-conditional-logic",
    title: "Conditionals, Modern Switch & A/B Test Guards",
    category: "2. Control Flow & Locator Iteration",
    sourceUrl: "https://playwright.dev/docs/actionability",
    description: "Handle dynamic environments, A/B test UI variations, cookie banners, and use modern switch statements to build resilient test flows without introducing flakiness.",
    sections: [
      {
        id: "conditional-testing-rules",
        heading: "The Golden Rule of Conditional Logic in Testing",
        paragraphs: [
          "In test automation, conditional branching (`if / else`) should be minimized because tests should be deterministic. However, real-world applications frequently require handling optional cookie banners, dynamic marketing popups, or multi-role environments.",
        ],
      },
      {
        id: "handling-optional-modals",
        heading: "Handling Optional Modals & Cookie Banners",
        paragraphs: [
          "Use `locator.isVisible()` with short timeouts to handle non-deterministic overlays without hanging your test suite:",
        ],
        codeBlocks: [
          {
            title: "Safe Optional Modal Dismissal",
            language: "javascript",
            code: `// Dismiss optional promotional modal if it appears within 2 seconds
const promoModal = page.locator('#promo-overlay');
const closeBtn = promoModal.getByRole('button', { name: 'Close' });

// Check visibility without failing if missing
if (await closeBtn.isVisible({ timeout: 2000 })) {
  await closeBtn.click();
  await expect(promoModal).toBeHidden();
}`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 3: FUNCTIONS, SCOPE & MODERN ES6+                                */
  /* ========================================================================= */
  "javascript-functions-arrows": {
    id: "javascript-functions-arrows",
    title: "Arrow Functions & 'this' Binding in Page Object Models",
    category: "3. Functions, Scope & Modern ES6+",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    description: "Understand the critical differences between function declarations and arrow functions, lexical this binding, and how to avoid 'undefined is not a function' in Page Object Models.",
    sections: [
      {
        id: "arrow-vs-regular-functions",
        heading: "Arrow Functions vs Function Declarations",
        paragraphs: [
          "Arrow functions (`() => {}`) inherit `this` lexically from their enclosing execution context, whereas regular functions (`function() {}`) bind `this` based on how they are called.",
        ],
        table: {
          headers: ["Feature", "Arrow Function `() => {}`", "Regular `function() {}`"],
          rows: [
            ["`this` Binding", "Lexical (inherits from surrounding scope)", "Dynamic (depends on caller)"],
            ["Can be Constructor (`new`)?", "NO (TypeError)", "YES"],
            ["`arguments` Object", "NO (use `...args`)", "YES"],
            ["Best Usage in Playwright", "Callbacks (`page.route`, `array.map`), test blocks", "Page Object Model class methods"],
          ],
        },
      },
      {
        id: "pom-this-binding",
        heading: "The Page Object Model (POM) Class Method Pattern",
        paragraphs: [
          "In Page Object Models, declare standard class methods to ensure clean prototype inheritance and readable stack traces:",
        ],
        codeBlocks: [
          {
            title: "pages/LoginPage.js",
            language: "javascript",
            code: `export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Sign In' });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}`,
          },
        ],
      },
    ],
  },

  "javascript-rest-spread": {
    id: "javascript-rest-spread",
    title: "Rest/Spread & structuredClone for Test Data Engineering",
    category: "3. Functions, Scope & Modern ES6+",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/API/structuredClone",
    description: "Learn how to use rest parameters, object spread syntax, and structuredClone to generate combinatorial test payloads without mutating baseline fixtures.",
    sections: [
      {
        id: "rest-and-spread",
        heading: "Spread Syntax (...) for Test Payload Overrides",
        paragraphs: [
          "In test automation, you often need to test 10 variations of an API payload (e.g. valid, missing email, invalid age). Spread syntax makes generating payload variations effortless:",
        ],
        codeBlocks: [
          {
            title: "Test Data Synthesis with Spread",
            language: "javascript",
            code: `const baseUser = {
  firstName: 'Deepak',
  lastName: 'Gupta',
  email: 'qa.test@example.com',
  age: 28,
  address: { city: 'Noida', country: 'IN' }
};

// 1. Create modified variation for underage boundary test
const underagePayload = {
  ...baseUser,
  age: 16 // Overrides age, preserves all other fields!
};

// 2. Remove a field to test required validation using rest destructuring
const { email, ...payloadMissingEmail } = baseUser;
// payloadMissingEmail contains firstName, lastName, age, address, but NO email!`,
          },
        ],
      },
      {
        id: "structured-clone-deep-copy",
        heading: "Deep Cloning with structuredClone()",
        paragraphs: [
          "Object spread (`{ ...baseUser }`) only creates a SHALLOW copy. Nested objects (like `address`) still share the same reference!",
          "Use the modern native `structuredClone()` to perform true deep cloning for multi-level test fixtures.",
        ],
      },
    ],
  },

  "javascript-strings-regex": {
    id: "javascript-strings-regex",
    title: "Template Literals & RegExp in getByRole Locators",
    category: "3. Functions, Scope & Modern ES6+",
    sourceUrl: "https://playwright.dev/docs/locators#locate-by-role",
    description: "Harness backtick template literals for dynamic locator interpolation and Regular Expressions (RegExp) for resilient case-insensitive matching in Playwright.",
    sections: [
      {
        id: "template-literals-locators",
        heading: "Dynamic Locators with Template Literals",
        paragraphs: [
          "Template literals (backticks `` \`...${variable}...\` ``) allow dynamic interpolation of test variables directly into locators and test titles:",
        ],
        codeBlocks: [
          {
            title: "Dynamic Locators Example",
            language: "javascript",
            code: `const targetOrderId = 'ORD-98214';

// Dynamic text locator using template literals
const orderRow = page.locator(\`tr[data-order-id="\${targetOrderId}"]\`);
await expect(orderRow).toBeVisible();

// Dynamic test title
test(\`verify payment settlement for \${targetOrderId}\`, async ({ page }) => {
  await page.goto(\`/orders/\${targetOrderId}\`);
});`,
          },
        ],
      },
      {
        id: "regex-in-playwright",
        heading: "Using Regular Expressions (RegExp) in Locators",
        paragraphs: [
          "Hardcoding exact string matches in locators makes tests brittle when copy changes slightly (e.g. 'Sign in' vs 'Sign In' vs 'Sign in to account').",
          "Pass a RegExp to `getByRole`, `getByText`, or `toHaveTitle` for resilient, whitespace-forgiving matching:",
        ],
        codeBlocks: [
          {
            title: "RegExp in Locators",
            language: "javascript",
            code: `// Matches "Sign in", "SIGN IN", "Sign In" (case-insensitive flag 'i')
await page.getByRole('button', { name: /sign in/i }).click();

// Matches dynamic welcome message: "Welcome back, Deepak!"
await expect(page.getByRole('heading')).toHaveText(/welcome back,/i);

// Assert URL contains dynamic order token
await expect(page).toHaveURL(/\\/checkout\\/success\\?[a-f0-9]{32}/);`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 4: ASYNC JS & THE EVENT LOOP (CORE)                             */
  /* ========================================================================= */
  "javascript-async-await": {
    id: "javascript-async-await",
    title: "Promises & async/await: Eliminating Test Flakiness",
    category: "4. Async JS & The Event Loop (Core)",
    sourceUrl: "https://playwright.dev/docs/evaluating",
    description: "The definitive guide to Promises and async/await in Playwright: why forgetting await causes 90% of flakiness, how Promise states work, and chaining vs await syntax.",
    sections: [
      {
        id: "why-async-await",
        heading: "Why Playwright is 100% Asynchronous",
        paragraphs: [
          "Browser automation is inherently asynchronous: clicking a button, waiting for a network response, rendering DOM nodes, and evaluating animations take time.",
          "Almost every Playwright API method returns a `Promise`. You MUST prepend `await` to pause test execution until the browser confirms the action completed.",
        ],
        codeBlocks: [
          {
            title: "The Missing await Bug",
            language: "javascript",
            code: `// ❌ DEADLY BUG: Missing await!
// click() returns a Promise immediately. Node executes the next line BEFORE
// the browser actually clicks the button!
page.getByRole('button', { name: 'Submit' }).click(); // Missing await!
expect(page.getByText('Success')).toBeVisible();       // Assertion runs too early and fails!

// ✅ CORRECT: Await pauses until click actionability checks pass
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Success')).toBeVisible();`,
          },
        ],
        callouts: [
          {
            type: "warning",
            title: "Flaky Test Root Cause",
            text: "Over 90% of flaky test failures in Playwright trace back to a missing `await` before a locator action or assertion. Always configure ESLint with `@typescript-eslint/no-floating-promises` to catch missing awaits at build time!",
          },
        ],
      },
    ],
  },

  "javascript-event-loop": {
    id: "javascript-event-loop",
    title: "The Event Loop & Playwright Auto-Wait Internals",
    category: "4. Async JS & The Event Loop (Core)",
    sourceUrl: "https://playwright.dev/docs/actionability",
    description: "Understand the JavaScript Event Loop, Call Stack, Microtasks vs Macrotasks, and how Playwright's actionability checks (visible, stable, enabled, editable) eliminate hardcoded sleeps.",
    sections: [
      {
        id: "event-loop-architecture",
        heading: "How the V8 Event Loop Works",
        paragraphs: [
          "JavaScript is single-threaded. Concurrency is handled by the Event Loop consisting of:",
          "1. Call Stack: Executes synchronous code line-by-line.",
          "2. Microtask Queue: Processes resolved Promises (`async/await`, `Promise.then`). Highest priority queue—emptied completely before any macrotask runs.",
          "3. Macrotask Queue: Processes timers (`setTimeout`, `setInterval`), I/O, and UI events.",
        ],
      },
      {
        id: "playwright-auto-waiting",
        heading: "Playwright's Internal Actionability Checks",
        paragraphs: [
          "Before executing any action (e.g. `await locator.click()`), Playwright automatically performs 5 actionability checks on the target element:",
          "1. Attached: Element is present in the DOM tree.",
          "2. Visible: Element has non-empty bounding box and is not `display: none` or `visibility: hidden`.",
          "3. Stable: Element is not animating or moving across the screen.",
          "4. Enabled: Element is not `disabled`.",
          "5. Receives Events: Element is not obscured by another element (e.g. an invisible loading spinner overlay).",
          "If any check fails, Playwright keeps retrying up to the configured timeout (default 30,000ms). This auto-waiting mechanism is why Playwright suites are inherently more resilient than Selenium.",
        ],
      },
    ],
  },

  "javascript-promise-concurrency": {
    id: "javascript-promise-concurrency",
    title: "Promise.all & Concurrency in Parallel Test Execution",
    category: "4. Async JS & The Event Loop (Core)",
    sourceUrl: "https://playwright.dev/docs/test-parallel",
    description: "Use Promise.all, Promise.allSettled, and Promise.race to trigger concurrent actions (e.g. waiting for a navigation and button click simultaneously) and test race conditions.",
    sections: [
      {
        id: "promise-all-pattern",
        heading: "The Click-and-Wait Pattern with Promise.all",
        paragraphs: [
          "When clicking a link that triggers a new popup page or an asynchronous download, setting up the listener AFTER the click creates a race condition where the event fires before the listener is ready.",
          "Use `Promise.all` to arm the listener and trigger the click simultaneously:",
        ],
        codeBlocks: [
          {
            title: "Simultaneous Event Waiting",
            language: "javascript",
            code: `// 1. Wait for popup page while clicking external link
const [popup] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByRole('link', { name: 'Terms of Service' }).click()
]);

await popup.waitForLoadState('domcontentloaded');
await expect(popup).toHaveTitle(/terms of service/i);

// 2. Wait for specific API response while clicking checkout
const [response] = await Promise.all([
  page.waitForResponse(res => res.url().includes('/api/checkout') && res.status() === 200),
  page.getByRole('button', { name: 'Confirm Payment' }).click()
]);

const checkoutJson = await response.json();
expect(checkoutJson.status).toBe('SUCCESS');`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 5: DATA STRUCTURES & TEST PAYLOADS                              */
  /* ========================================================================= */
  "javascript-arrays-methods": {
    id: "javascript-arrays-methods",
    title: "Array Methods (.map, .filter, .reduce) on Table Locators",
    category: "5. Data Structures & Test Payloads",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    description: "Extract and manipulate test data from UI tables using modern functional JavaScript: map, filter, reduce, find, some, and every.",
    sections: [
      {
        id: "array-methods-in-qa",
        heading: "Functional Array Processing for Test Verification",
        paragraphs: [
          "Rather than writing bulky for-loops, use functional array methods to transform UI text lists and perform clean assertions:",
        ],
        codeBlocks: [
          {
            title: "Extracting & Asserting Table Columns",
            language: "javascript",
            code: `// 1. Extract all product titles into an array of strings
const titles = await page.locator('.product-card .title').allInnerTexts();
// ['Wireless Headphones', 'USB-C Cable', 'Mechanical Keyboard']

// 2. Use .map() to clean and normalize strings
const cleanTitles = titles.map(t => t.trim().toLowerCase());

// 3. Use .filter() to verify products matching search criteria
const keyboards = cleanTitles.filter(t => t.includes('keyboard'));
expect(keyboards.length).toBeGreaterThan(0);

// 4. Use .every() to assert all items are in stock
const prices = await page.locator('.product-price').allInnerTexts();
const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
const allAffordable = numericPrices.every(p => p < 500);
expect(allAffordable).toBe(true);

// 5. Use .reduce() to calculate expected cart subtotal
const calculatedTotal = numericPrices.reduce((sum, price) => sum + price, 0);
const displayedTotal = parseFloat(await page.locator('#cart-total').innerText());
expect(displayedTotal).toBeCloseTo(calculatedTotal, 2);`,
          },
        ],
      },
    ],
  },

  "javascript-objects-json": {
    id: "javascript-objects-json",
    title: "Objects, JSON Parsing & Deep Mutation Safety",
    category: "5. Data Structures & Test Payloads",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    description: "Manipulate JSON fixtures, parse API responses, inspect object keys/values, and ensure test data remains isolated across parallel test executions.",
    sections: [
      {
        id: "working-with-json",
        heading: "Parsing & Serializing JSON in Playwright",
        paragraphs: [
          "JSON is the standard format for API testing, mock responses, and test data fixtures in Playwright:",
        ],
        codeBlocks: [
          {
            title: "JSON Fixtures Management",
            language: "javascript",
            code: `// Import test data fixture directly
import testUserData from '../fixtures/users.json' with { type: 'json' };

test('verify user profile payload', async ({ request }) => {
  // Serialize JS object into JSON string
  const requestBody = JSON.stringify({
    ...testUserData.validCustomer,
    timestamp: Date.now()
  });

  const response = await request.post('/api/users', {
    headers: { 'Content-Type': 'application/json' },
    data: requestBody
  });

  // Parse JSON response body into JS object
  const responseData = await response.json();
  expect(responseData).toHaveProperty('id');
  expect(Object.keys(responseData)).toContain('createdAt');
});`,
          },
        ],
      },
    ],
  },

  "javascript-sets-maps": {
    id: "javascript-sets-maps",
    title: "Sets & Maps for Multi-Worker Test Caching",
    category: "5. Data Structures & Test Payloads",
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
    description: "Use ES6 Set for instantaneous duplicate detection in UI tables, and Map for caching authentication tokens and session state across tests.",
    sections: [
      {
        id: "set-uniqueness-test",
        heading: "Detecting Duplicate Records with Set",
        paragraphs: [
          "A `Set` stores only unique values. Comparing the size of a Set to the length of an array provides an instantaneous verification that no duplicate items exist in a UI table or API list:",
        ],
        codeBlocks: [
          {
            title: "Zero Duplicates Assertion with Set",
            language: "javascript",
            code: `// Extract all invoice IDs from a banking portal table
const invoiceIds = await page.locator('table.invoices td.invoice-id').allInnerTexts();

// A Set automatically strips duplicates
const uniqueInvoiceIds = new Set(invoiceIds);

// If lengths match, every invoice ID in the table is guaranteed unique!
expect(uniqueInvoiceIds.size).toBe(invoiceIds.length);`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 6: BROWSER EVALUATION & MOCKING                                  */
  /* ========================================================================= */
  "javascript-dom-page-evaluate": {
    id: "javascript-dom-page-evaluate",
    title: "page.evaluate() vs Locators: Crossing the Node-Browser Boundary",
    category: "6. Browser Evaluation & Mocking",
    sourceUrl: "https://playwright.dev/docs/evaluating",
    description: "Master page.evaluate(), understand how data is serialized across the Node.js to Browser WebSocket boundary, and know when to use locators vs raw JavaScript.",
    sections: [
      {
        id: "crossing-the-boundary",
        heading: "The Node.js $\\leftrightarrow$ Browser Engine Boundary",
        paragraphs: [
          "`page.evaluate(fn, arg)` executes the provided function directly inside the browser's JavaScript engine (Chrome V8).",
          "Arguments passed to `page.evaluate` and return values must be JSON-serializable (strings, numbers, booleans, plain objects). Functions or non-serializable DOM elements cannot cross the boundary directly.",
        ],
        codeBlocks: [
          {
            title: "page.evaluate() in Action",
            language: "javascript",
            code: `test('inspect client-side storage and window dimensions', async ({ page }) => {
  await page.goto('/dashboard');

  // 1. Read window scroll position inside the browser
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBe(0);

  // 2. Pass data from Node.js into the browser execution context
  const storageKey = 'authToken';
  const token = await page.evaluate((key) => {
    return window.localStorage.getItem(key);
  }, storageKey); // Passed as second argument!

  expect(token).toBeTruthy();
});`,
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "Locators vs evaluate()",
            text: "Use Playwright Locators (`page.getByRole()`, `locator.click()`) for user interactions because locators include automatic waiting and retries. Use `page.evaluate()` only for inspecting browser globals (`window`, `localStorage`, `performance.getEntriesByType('navigation')`).",
          },
        ],
      },
    ],
  },

  "javascript-network-mocking": {
    id: "javascript-network-mocking",
    title: "Network Interception, page.route & Mock JSON",
    category: "6. Browser Evaluation & Mocking",
    sourceUrl: "https://playwright.dev/docs/network",
    description: "Intercept HTTP requests with page.route(), abort slow assets (images, fonts), inject synthetic mock JSON payloads, and test backend 500 error resilience.",
    sections: [
      {
        id: "mocking-apis",
        heading: "Intercepting & Modifying Network Traffic with page.route()",
        paragraphs: [
          "Playwright allows you to intercept any network request dispatched by the web application and modify its headers, abort it, or fulfill it with mock data without touching backend servers:",
        ],
        codeBlocks: [
          {
            title: "Mocking API Responses and Speeding Up Tests",
            language: "javascript",
            code: `// 1. Mock API response to test Empty State UI
await page.route('**/api/v1/orders', async (route) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ orders: [] }) // Empty orders array!
  });
});

await page.goto('/orders');
await expect(page.getByText('No orders found. Start shopping!')).toBeVisible();

// 2. Abort all images and fonts to make test runs 3x faster
await page.route('**/*.{png,jpg,jpeg,svg,woff,woff2}', (route) => route.abort());

// 3. Simulate backend outage (HTTP 500) to test error banner
await page.route('**/api/v1/payment/checkout', (route) => {
  route.fulfill({
    status: 500,
    contentType: 'application/json',
    body: JSON.stringify({ error: 'Database connection failed' })
  });
});`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 7: ERROR HANDLING & NODE.JS RUNTIME                              */
  /* ========================================================================= */
  "javascript-error-handling": {
    id: "javascript-error-handling",
    title: "try/catch, Custom Errors & expect().toPass() Polling",
    category: "7. Error Handling & Node.js Runtime",
    sourceUrl: "https://playwright.dev/docs/test-assertions#expecttopass",
    description: "Robust error handling in test frameworks: try/catch/finally cleanup, custom assertions, and resilient asynchronous polling with Playwright's expect().toPass().",
    sections: [
      {
        id: "try-catch-finally",
        heading: "Resource Cleanup with try/catch/finally",
        paragraphs: [
          "When a test creates external resources (e.g. temporary files on disk or backend database records), use `try...finally` to ensure cleanup runs even if an assertion fails midway:",
        ],
        codeBlocks: [
          {
            title: "Safe Cleanup Pattern",
            language: "javascript",
            code: `test('export PDF report', async ({ page, request }) => {
  let createdReportId = null;

  try {
    const res = await request.post('/api/reports/generate');
    const { id } = await res.json();
    createdReportId = id;

    await page.goto(\`/reports/\${createdReportId}\`);
    await expect(page.getByText('Report Generated Successfully')).toBeVisible();
  } finally {
    // ALWAYS executes, even if the assertion above throws an error!
    if (createdReportId) {
      await request.delete(\`/api/reports/\${createdReportId}\`);
    }
  }
});`,
          },
        ],
      },
      {
        id: "expect-to-pass-polling",
        heading: "Resilient Asynchronous Polling with expect().toPass()",
        paragraphs: [
          "When verifying asynchronous backend jobs (e.g. video processing or payment settlement webhooks) that take several seconds to complete, use `expect().toPass()` to poll until the condition succeeds:",
        ],
        codeBlocks: [
          {
            title: "Polling Asynchronous Job Status",
            language: "javascript",
            code: `// Repeatedly polls the API until status becomes 'PROCESSED' or timeout expires
await expect(async () => {
  const response = await page.request.get(\`/api/jobs/\${jobId}\`);
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.status).toBe('PROCESSED');
}).toPass({
  intervals: [1000, 2000, 5000], // Backoff intervals
  timeout: 30000                  // Overall max wait
});`,
          },
        ],
      },
    ],
  },

  "javascript-nodejs-fs": {
    id: "javascript-nodejs-fs",
    title: "Node.js fs/promises, File Downloads & process.env Configuration",
    category: "7. Error Handling & Node.js Runtime",
    sourceUrl: "https://nodejs.org/api/fs.html",
    description: "Interact with the local operating system: verifying downloaded CSV/PDF files with fs/promises, generating dynamic test data with crypto, and managing multi-environment configs with process.env.",
    sections: [
      {
        id: "verifying-downloads",
        heading: "Verifying File Downloads with fs/promises",
        paragraphs: [
          "Testing file exports (CSV, PDF, Excel) requires capturing the download event in Playwright and inspecting the saved file using Node.js's built-in `fs/promises` module:",
        ],
        codeBlocks: [
          {
            title: "File Download Verification",
            language: "javascript",
            code: `import fs from 'node:fs/promises';
import path from 'node:path';
import { test, expect } from '@playwright/test';

test('verify invoice CSV export', async ({ page }) => {
  await page.goto('/billing');

  // 1. Wait for download event and trigger export click simultaneously
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download CSV' }).click()
  ]);

  // 2. Save file to temporary test directory
  const downloadPath = path.join('test-downloads', download.suggestedFilename());
  await download.saveAs(downloadPath);

  // 3. Read file contents using Node.js fs/promises
  const fileContent = await fs.readFile(downloadPath, 'utf-8');
  expect(fileContent).toContain('InvoiceID,Amount,Status');
  expect(fileContent).toContain('INV-2026-001,500.00,PAID');

  // 4. Cleanup
  await fs.unlink(downloadPath);
});`,
          },
        ],
      },
      {
        id: "environment-variables",
        heading: "Multi-Environment Configuration via process.env",
        paragraphs: [
          "Enterprise Playwright suites execute across Local, Dev, Staging, and Production environments. Configure your base URLs and credentials via `process.env`:",
        ],
        codeBlocks: [
          {
            title: "Dynamic Environment Config",
            language: "javascript",
            code: `// Reading environment variables with safe defaults
const ENV = process.env.TEST_ENV || 'staging';

const ENV_URLS = {
  local: 'http://localhost:3000',
  dev: 'https://dev.internal-portal.com',
  staging: 'https://staging.internal-portal.com',
  prod: 'https://app.internal-portal.com'
};

export const BASE_URL = ENV_URLS[ENV] || ENV_URLS.staging;
export const ADMIN_USERNAME = process.env.ADMIN_USER || 'qa_admin@test.com';`,
          },
        ],
      },
    ],
  },
};
