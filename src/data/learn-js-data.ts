import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const JS_CATEGORIES: DocCategory[] = [
  {
    title: "Basics",
    defaultOpen: true,
    items: [
      { id: "javascript-getting-started", text: "JS Setup, V8 & First Script" },
      { id: "javascript-keywords-syntax", text: "Keywords Directory & Tokens" },
      { id: "javascript-variables-types", text: "Variables, Scopes & Equality" },
      { id: "javascript-operators-control-flow", text: "Operators, Switch & Short-Circuit" },
      { id: "javascript-loops-iteration", text: "Loops & Playwright Locators" },
      { id: "javascript-functions", text: "Functions, Arrow & Rest/Spread" },
      { id: "javascript-arrays-methods", text: "Arrays & Array Methods" },
      { id: "javascript-strings-regex", text: "Strings, Regex & Template Literals" },
    ],
  },
  {
    title: "OOP & Objects",
    defaultOpen: false,
    items: [
      { id: "javascript-objects-json", text: "Objects, JSON & Prototype Cloning" },
      { id: "javascript-classes-oop", text: "ES6 Classes & POM Architecture" },
    ],
  },
  {
    title: "Advance JS Concepts",
    defaultOpen: false,
    items: [
      { id: "javascript-async-await", text: "Promises & Async/Await Deep Dive" },
      { id: "javascript-event-loop", text: "Event Loop & Execution Timing" },
      { id: "javascript-error-handling", text: "Error Handling & Resilient Retries" },
      { id: "javascript-nodejs-npm", text: "Node.js, npm & Environment Config" },
    ],
  },
  {
    title: "Practice JavaScript",
    defaultOpen: false,
    items: [
      { id: "javascript-test-assertions", text: "Assertions & Matchers (Playwright/Jest)" },
    ],
  },
];

export const JS_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. GETTING STARTED & SETUP                                    */
  /* ------------------------------------------------------------- */
  "javascript-getting-started": {
    id: "javascript-getting-started",
    title: "JavaScript Getting Started: V8 Engine, Node.js & Your First Script",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/javascript/",
    description: "Start JavaScript from absolute zero: ECMAScript standards, V8 execution engine, Browser vs Node.js runtime, setting up npm, and executing your first script.",
    sections: [
      {
        id: "what-is-javascript",
        heading: "What is JavaScript & How Does It Run?",
        paragraphs: [
          "JavaScript is a high-level, interpreted or Just-In-Time (JIT) compiled programming language conforming to the ECMAScript specification. Originally created by Brendan Eich in 1995 for Netscape, JavaScript has evolved from a simple browser scripting tool into the world's most versatile automation runtime.",
          "JavaScript executes via an engine: Google Chrome and Node.js use the **V8 Engine**, Mozilla Firefox uses **SpiderMonkey**, and Apple Safari uses **JavaScriptCore**.",
        ],
        table: {
          headers: ["Environment", "Host Runtime", "Primary Automation Application"],
          rows: [
            ["Browser Runtime", "Chrome / Firefox / Safari (Web APIs: DOM, Window, Fetch)", "Executing client-side automation scripts, evaluating DOM locators via DevTools."],
            ["Node.js Runtime", "Server-side headless V8 engine (C++ bindings, fs, process)", "Running Playwright, Cypress, WebdriverIO, Newman CLI test runners."],
          ],
        },
      },
      {
        id: "first-script",
        heading: "Executing Your First JavaScript Program",
        paragraphs: [
          "You can execute JavaScript in the browser console or via the terminal using Node.js:",
        ],
        codeBlocks: [
          {
            title: "hello.js",
            language: "javascript",
            code: `// Print output to terminal console
console.log("Hello, DeepakQA! Starting JavaScript from zero.");

// Basic calculation
const timeout = 30;
const retries = 3;
console.log(\`Total test budget: \${timeout * retries} seconds.\`);`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. RESERVED KEYWORDS & TOKENS                                 */
  /* ------------------------------------------------------------- */
  "javascript-keywords-syntax": {
    id: "javascript-keywords-syntax",
    title: "JavaScript Reserved Keywords & Syntax Directory",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/javascript-keywords-complete-reference/",
    description: "Complete directory of JavaScript reserved keywords categorized by functional role, with direct relevance and examples for test automation.",
    sections: [
      {
        id: "keywords-table",
        heading: "Complete JavaScript Keywords Table for Testers",
        table: {
          headers: ["Category", "Keyword", "Core Role", "Real-World QA Testing Application"],
          rows: [
            ["Variables & Binding", "`const`", "Block-scoped immutable reference", "Locators, Page Objects, baseUrl, API endpoints, assertion values."],
            ["Variables & Binding", "`let`", "Block-scoped reassignable variable", "Loop counters, retry attempts, dynamic order totals, accumulators."],
            ["Variables & Binding", "`var`", "Function-scoped legacy declaration", "Legacy Postman scripts (Avoid in modern frameworks due to hoisting)."],
            ["Control Flow", "`if` / `else`", "Conditional branch execution", "Asserting UI states, conditional flows based on environment flags."],
            ["Control Flow", "`switch` / `case`", "Multi-branch value matching", "Browser runner selection, environment routers, HTTP status code checks."],
            ["Control Flow", "`default`", "Fallback branch in switch", "Defaulting to Chromium browser or Staging environment URL."],
            ["Control Flow", "`break`", "Terminates loop or switch block", "Halting element search once target item is clicked."],
            ["Control Flow", "`continue`", "Skips current loop iteration", "Skipping disabled/out-of-stock table rows in catalog tests."],
            ["Control Flow", "`return`", "Exits function and returns value", "Returning text from helper methods or returning POM instances."],
            ["Functions", "`function`", "Standard function declaration", "Page Object methods, helper utilities, Cypress command definitions."],
            ["Functions", "`this`", "Current execution context", "Mocha test timeouts (`this.timeout()`), class methods."],
            ["Asynchronous", "`async`", "Declares an asynchronous function", "All Playwright test blocks: `test('login', async ({ page }) => { ... })`."],
            ["Asynchronous", "`await`", "Pauses execution until Promise settles", "`await page.goto('/')`, `await page.click('#btn')`."],
            ["Error Handling", "`try` / `catch`", "Guards against runtime errors", "Graceful handling of optional popups or flaky network calls."],
            ["Error Handling", "`finally`", "Unconditionally executed cleanup block", "Closing browser context, releasing DB connections, flushing logs."],
            ["Error Handling", "`throw`", "Manually raises an Exception", "`throw new Error('Element did not appear within 10s')`."],
            ["Object-Oriented", "`class`", "Declares a class template", "Page Object Model classes (`export class LoginPage { ... }`)."],
            ["Object-Oriented", "`extends`", "Inherits from parent class", "`export class CheckoutPage extends BasePage { ... }`."],
            ["Object-Oriented", "`super`", "Invokes parent constructor/methods", "`super(page);` inside child Page Object constructor."],
            ["Object-Oriented", "`new`", "Instantiates an object from class", "`const loginPage = new LoginPage(page);`."],
            ["Modules", "`import`", "Imports symbols from external module", "`import { test, expect } from '@playwright/test';`."],
            ["Modules", "`export`", "Exposes functions/classes to modules", "`export class BasePage { ... }`, `export const config = { ... };`."],
            ["Operators / Types", "`typeof`", "Returns string representing type", "Asserting API response data type: `expect(typeof res.id).toBe('string')`."],
            ["Operators / Types", "`instanceof`", "Tests if object inherits from class", "Verifying error instances: `expect(err instanceof TimeoutError).toBe(true)`."],
            ["Operators / Types", "`in`", "Checks property existence in object", "Asserting JSON schema: `'token' in response.body`."],
            ["Operators / Types", "`of`", "Iterates iterable values (`for..of`)", "Iterating Playwright locators: `for (const el of await locator.all())`."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. VARIABLES, TYPES & EQUALITY                                */
  /* ------------------------------------------------------------- */
  "javascript-variables-types": {
    id: "javascript-variables-types",
    title: "Variables, Scope, Primitive Types & Equality Pitfalls",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/variables-datatypes-javascript/",
    description: "Deep dive into let vs const vs var, block scoping, Temporal Dead Zone, JavaScript primitives vs reference types, truthy/falsy values, and strict equality in QA.",
    sections: [
      {
        id: "let-const-var-comparison",
        heading: "let vs const vs var: The Definitive Rules",
        table: {
          headers: ["Keyword", "Scope", "Can Reassign?", "Can Redeclare?", "Hoisting Behavior"],
          rows: [
            ["`const`", "Block `{}`", "NO", "NO", "Temporal Dead Zone (TDZ) - Throws ReferenceError if accessed before declaration."],
            ["`let`", "Block `{}`", "YES", "NO", "Temporal Dead Zone (TDZ) - Throws ReferenceError if accessed before declaration."],
            ["`var`", "Function", "YES", "YES", "Hoisted as `undefined` - Causes silent bugs and variable leaking across loop iterations."],
          ],
        },
      },
      {
        id: "strict-equality-truthy",
        heading: "Strict Equality (===) vs Loose (==) & 8 Falsy Values",
        codeBlocks: [
          {
            title: "Strict Equality vs Loose Equality in Assertions",
            language: "javascript",
            code: `// ❌ Loose Equality Dangerous Coercion:
0 == false;         // true! (0 coerced to boolean)
"" == false;        // true! (empty string coerced to boolean)
null == undefined;  // true!
"100" == 100;       // true! (string converted to number)

// ✅ Strict Equality (Checks Type AND Value):
0 === false;        // false
"" === false;       // false
null === undefined; // false
"100" === 100;      // false (Different types: string vs number)

// ⚠️ The Exactly 8 Falsy Values in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is TRUTHY (including [] and {}!)`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. OPERATORS, SWITCH & SHORT-CIRCUIT                          */
  /* ------------------------------------------------------------- */
  "javascript-operators-control-flow": {
    id: "javascript-operators-control-flow",
    title: "Operators, Switch Statements & Short-Circuit Operators (??, ?.)",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/javascript-operators/",
    description: "Master arithmetic, logical, and ternary operators, optional chaining (?.), nullish coalescing (??), and switch-case structures for multi-browser and multi-env runners.",
    sections: [
      {
        id: "switch-case-automation",
        heading: "Switch Statements for Multi-Browser Test Launchers",
        codeBlocks: [
          {
            title: "Multi-Browser Launch Switch",
            language: "javascript",
            code: `import { chromium, firefox, webkit } from "@playwright/test";

export async function launchTargetBrowser(browserName = "chromium", isHeadless = true) {
  const browserType = browserName.toLowerCase().trim();

  switch (browserType) {
    case "chromium":
    case "chrome":
      return await chromium.launch({ headless: isHeadless, args: ["--no-sandbox"] });
    case "firefox":
      return await firefox.launch({ headless: isHeadless });
    case "webkit":
    case "safari":
      return await webkit.launch({ headless: isHeadless });
    default:
      throw new Error(\`Unsupported browser: \${browserName}\`);
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. LOOPS & PLAYWRIGHT LOCATORS                                */
  /* ------------------------------------------------------------- */
  "javascript-loops-iteration": {
    id: "javascript-loops-iteration",
    title: "Loops, Iteration & Playwright Locator Sweeps",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/loops-in-javascript/",
    description: "Master for, for...of, for...in, while polling, and why for...of is the single most important loop for iterating Playwright locator elements.",
    sections: [
      {
        id: "playwright-locator-iteration",
        heading: "Iterating Web Elements with for...of in Playwright",
        paragraphs: [
          "In Playwright, NEVER use `.forEach()` with async functions because `.forEach()` cannot await asynchronous callbacks! Always use `for...of` with `locator.all()`:",
        ],
        codeBlocks: [
          {
            title: "for...of Element Iteration",
            language: "javascript",
            code: `import { test, expect } from "@playwright/test";

test("Verify all active products", async ({ page }) => {
  await page.goto("/catalog");

  const cards = await page.locator(".product-card").all();
  expect(cards.length).toBeGreaterThan(0);

  for (const card of cards) {
    const title = (await card.locator(".product-title").textContent())?.trim();
    const priceText = await card.locator(".product-price").textContent();
    const price = parseFloat(priceText.replace("$", ""));

    expect(price).toBeGreaterThan(0);
    await expect(card.locator("button.add-to-cart")).toBeVisible();
  }
});`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. FUNCTIONS, ARROW & REST/SPREAD                             */
  /* ------------------------------------------------------------- */
  "javascript-functions": {
    id: "javascript-functions",
    title: "Functions, Arrow Functions, Closures & Rest/Spread Syntax",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/javascript-functions/",
    description: "Understand function declarations vs arrow functions, lexical this, default parameters, rest (...args) and spread (...obj) operators for test data fixtures.",
    sections: [
      {
        id: "arrow-functions",
        heading: "Arrow Functions (=>) and Lexical this",
        paragraphs: [
          "Arrow functions provide a concise syntax and do NOT bind their own `this`, `arguments`, or `super`. They lexically inherit `this` from the enclosing execution context.",
        ],
        codeBlocks: [
          {
            title: "Spread Operator for Test Fixture Cloning",
            language: "javascript",
            code: `const baseUser = { role: "STANDARD", active: true, currency: "USD" };

// Clone and override role without mutating base
const adminUser = {
  ...baseUser,
  role: "ADMIN",
  permissions: ["read", "write", "delete"]
};`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. ARRAYS & ARRAY METHODS                                     */
  /* ------------------------------------------------------------- */
  "javascript-arrays-methods": {
    id: "javascript-arrays-methods",
    title: "JavaScript Arrays & Modern Transformation Methods",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/arrays-in-javascript/",
    description: "Master array manipulation and high-order methods for test assertions: map, filter, reduce, find, some, every, slice, and splice.",
    sections: [
      {
        id: "array-methods-qa",
        heading: "Array Methods for Data Assertions",
        codeBlocks: [
          {
            title: "Data Assertions with map, filter, every",
            language: "javascript",
            code: `const orders = [
  { id: "ORD-1", total: 49.99, status: "PAID" },
  { id: "ORD-2", total: 129.50, status: "PAID" },
  { id: "ORD-3", total: 15.00, status: "PENDING" },
];

// 1. .map(): Extract array of IDs
const orderIds = orders.map(o => o.id); // ['ORD-1', 'ORD-2', 'ORD-3']

// 2. .every(): Assert all totals positive
const allPositive = orders.every(o => o.total > 0); // true

// 3. .some(): Check for pending
const hasPending = orders.some(o => o.status === "PENDING"); // true`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. STRINGS, REGEX & TEMPLATE LITERALS                         */
  /* ------------------------------------------------------------- */
  "javascript-strings-regex": {
    id: "javascript-strings-regex",
    title: "Strings, Template Literals & Regular Expressions (RegExp)",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/javascript-strings/",
    description: "Master template literals for dynamic XPath/CSS locators, string sanitization methods (trim, split, replaceAll), and RegExp pattern matching.",
    sections: [
      {
        id: "strings-and-regex",
        heading: "Template Literals & RegExp in QA",
        codeBlocks: [
          {
            title: "Dynamic Locators & Regex Parsing",
            language: "javascript",
            code: `// Dynamic XPath with Template Literals
const userId = "usr_9482";
const locator = \`//tr[@data-user-id='\${userId}']//span[.='Active']\`;

// Extracting OTP with RegExp
const smsBody = "Your verification code is 849201. Do not share.";
const otpMatch = smsBody.match(/\\b\\d{6}\\b/);
console.log("Extracted OTP:", otpMatch ? otpMatch[0] : null); // "849201"`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. OBJECTS, JSON & CLONING                                    */
  /* ------------------------------------------------------------- */
  "javascript-objects-json": {
    id: "javascript-objects-json",
    title: "Objects, JSON Serialization & Deep Cloning in Test Automation",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/objects-in-javascript/",
    description: "Master JSON serialization (stringify, parse), structuredClone() for test fixtures, and Object inspection methods (keys, values, entries).",
    sections: [
      {
        id: "json-and-objects",
        heading: "Working with JSON Payloads",
        codeBlocks: [
          {
            title: "JSON Serialization & structuredClone",
            language: "javascript",
            code: `const payload = { customer: "Deepak", items: [1, 2] };

// Deep clone object without reference sharing
const cloned = structuredClone(payload);
cloned.items.push(3);

console.log(payload.items.length); // 2 (Original unmutated!)
console.log(cloned.items.length);  // 3`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. ES6 CLASSES & POM ARCHITECTURE                            */
  /* ------------------------------------------------------------- */
  "javascript-classes-oop": {
    id: "javascript-classes-oop",
    title: "ES6 Classes, Inheritance & Page Object Model Architecture",
    category: "OOP & Objects",
    sourceUrl: "https://www.geeksforgeeks.org/classes-in-javascript/",
    description: "Write production-grade Page Objects using ES6 class syntax, constructors, extends, super, and private class fields (#field).",
    sections: [
      {
        id: "pom-classes",
        heading: "Building Page Objects with ES6 Classes",
        codeBlocks: [
          {
            title: "src/pages/LoginPage.js",
            language: "javascript",
            code: `export class LoginPage {
  #emailInput;
  #passwordInput;
  #submitBtn;

  constructor(page) {
    this.page = page;
    this.#emailInput = page.locator("#email");
    this.#passwordInput = page.locator("#password");
    this.#submitBtn = page.locator("button[type='submit']");
  }

  async login(email, password) {
    await this.#emailInput.fill(email);
    await this.#passwordInput.fill(password);
    await this.#submitBtn.click();
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 11. ASYNC / AWAIT & PROMISES                                  */
  /* ------------------------------------------------------------- */
  "javascript-async-await": {
    id: "javascript-async-await",
    title: "Promises & Async/Await Deep Dive for Testers",
    category: "Advance JS Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/async-await-in-javascript/",
    description: "Demystify asynchronous operations in JavaScript: Promise states, avoiding unhandled rejections, Promise.all concurrent execution, and resilient async/await patterns.",
    sections: [
      {
        id: "the-promise-concept",
        heading: "What is a Promise?",
        paragraphs: [
          "A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is always in one of three states: Pending, Fulfilled, or Rejected.",
        ],
        codeBlocks: [
          {
            title: "Promise.all Concurrent API Requests",
            language: "javascript",
            code: `// Fetch multiple API endpoints concurrently
const [usersRes, ordersRes] = await Promise.all([
  request.get("/api/v1/users"),
  request.get("/api/v1/orders"),
]);

expect(usersRes.status()).toBe(200);
expect(ordersRes.status()).toBe(200);`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 12. EVENT LOOP & EXECUTION TIMING                             */
  /* ------------------------------------------------------------- */
  "javascript-event-loop": {
    id: "javascript-event-loop",
    title: "The JavaScript Event Loop & Execution Timing",
    category: "Advance JS Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/event-loop-in-javascript/",
    description: "Understand the single-threaded Node.js and browser event loop, call stack, microtasks (Promises) vs macrotasks (setTimeout), and how timing affects test automation.",
    sections: [
      {
        id: "event-loop-architecture",
        heading: "How the Event Loop Coordinates Work",
        paragraphs: [
          "JavaScript is single-threaded: it possesses one Call Stack. Asynchronous tasks (HTTP requests, file I/O, timers) are delegated to the underlying runtime (libuv in Node.js, Web APIs in the browser).",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 13. ERROR HANDLING & RETRIES                                  */
  /* ------------------------------------------------------------- */
  "javascript-error-handling": {
    id: "javascript-error-handling",
    title: "Error Handling, Try/Catch & Resilient Retries",
    category: "Advance JS Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/error-handling-in-javascript/",
    description: "Handle synchronous and asynchronous runtime exceptions, create custom Error types, and build self-healing retry wrappers for flaky steps.",
    sections: [
      {
        id: "retry-wrapper",
        heading: "Self-Healing Action Retry Wrapper",
        codeBlocks: [
          {
            title: "Resilient Action Retry Function",
            language: "javascript",
            code: `export async function retryAction(actionFn, maxRetries = 3, delayMs = 1000) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await actionFn();
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, delayMs));
      }
    }
  }
  throw new Error(\`Action failed after \${maxRetries} attempts: \${lastError.message}\`);
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 14. NODE.JS, NPM & ENVIRONMENT CONFIG                         */
  /* ------------------------------------------------------------- */
  "javascript-nodejs-npm": {
    id: "javascript-nodejs-npm",
    title: "Node.js, npm & Environment Configuration",
    category: "Advance JS Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/nodejs/",
    description: "Manage test dependencies via package.json, run tests with npm scripts, and read secure environment secrets using dotenv and process.env.",
    sections: [
      {
        id: "package-json-and-env",
        heading: "Configuring package.json for QA Projects",
        codeBlocks: [
          {
            title: "package.json Test Scripts",
            language: "json",
            code: `{
  "name": "deepak-qa-framework",
  "scripts": {
    "test": "npx playwright test",
    "test:staging": "cross-env TEST_ENV=staging npx playwright test"
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 15. ASSERTIONS & MATCHERS                                     */
  /* ------------------------------------------------------------- */
  "javascript-test-assertions": {
    id: "javascript-test-assertions",
    title: "Assertions & Assertion Libraries (Playwright / Jest)",
    category: "Practice JavaScript",
    sourceUrl: "https://playwright.dev/docs/test-assertions",
    description: "Master web-first auto-retrying assertions in Playwright vs standard synchronous matchers to eradicate flaky test failures.",
    sections: [
      {
        id: "web-first-assertions",
        heading: "Web-First Auto-Retrying Assertions (Playwright)",
        table: {
          headers: ["Web-First Assertion", "Verification Target", "Auto-Retrying?"],
          rows: [
            ["`await expect(loc).toBeVisible()`", "Element is present in DOM and rendered without display:none", "YES (polls up to timeout)"],
            ["`await expect(loc).toHaveText('Welcome')`", "Element text matches expected string or regex", "YES"],
            ["`await expect(loc).toBeEnabled()`", "Button or input is not disabled", "YES"],
            ["`expect(value).toBe(100)`", "Synchronous primitive equality (non-DOM)", "NO (instant evaluation)"],
          ],
        },
      },
    ],
  },
};
