import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const TS_CATEGORIES: DocCategory[] = [
  {
    title: "Basics",
    defaultOpen: true,
    items: [
      { id: "typescript-getting-started", text: "TS Setup, tsc Compiler & First Program" },
      { id: "typescript-keywords-syntax", text: "Keywords & Type Operators" },
      { id: "typescript-types-basics", text: "Primitives, Any vs Unknown & Never" },
      { id: "typescript-functions", text: "Function Signatures & Overloading" },
    ],
  },
  {
    title: "OOP & Interface",
    defaultOpen: false,
    items: [
      { id: "typescript-interfaces-aliases", text: "Interfaces vs Type Aliases" },
      { id: "typescript-enums-tuples", text: "Enums, Const Enums & Tuples" },
      { id: "typescript-classes-pom", text: "Classes & Strongly Typed POM" },
    ],
  },
  {
    title: "Advance TypeScript Concepts",
    defaultOpen: false,
    items: [
      { id: "typescript-narrowing-guards", text: "Type Guards & Discriminated Switch" },
      { id: "typescript-generics", text: "Generics in Test Automation" },
      { id: "typescript-utility-types", text: "Utility Types for Test Fixtures" },
      { id: "typescript-advanced-types", text: "Template Literal Types & Satisfies" },
    ],
  },
  {
    title: "Practice TypeScript",
    defaultOpen: false,
    items: [
      { id: "typescript-fixtures-custom", text: "Custom Typed Fixtures (test.extend)" },
      { id: "typescript-tsconfig-setup", text: "tsconfig.json & Path Aliases" },
    ],
  },
];

export const TS_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. GETTING STARTED & COMPILER SETUP                           */
  /* ------------------------------------------------------------- */
  "typescript-getting-started": {
    id: "typescript-getting-started",
    title: "TypeScript Getting Started: tsc Compiler, tsconfig & First Program",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/typescript/",
    description: "Start TypeScript from absolute zero: why Microsoft developed TS, how the tsc compiler compiles to clean JavaScript, setting up tsconfig.json, and writing your first typed program.",
    sections: [
      {
        id: "what-is-typescript",
        heading: "What is TypeScript & Why Adopt It?",
        paragraphs: [
          "TypeScript is an open-source, strongly typed programming language developed by Anders Hejlsberg at Microsoft in 2012 that builds on JavaScript by adding static type definitions.",
          "Every valid JavaScript program is valid TypeScript. In test automation (Playwright, Cypress, WebdriverIO), TypeScript eliminates runtime failures caused by typos in element locators, altered API schemas, or missing fixture parameters before any test runs.",
        ],
        table: {
          headers: ["Dimension", "JavaScript (Vanilla)", "TypeScript"],
          rows: [
            ["Type Checking", "Dynamic (Evaluated at runtime during test run)", "Static (Evaluated at compile-time in IDE / CI)"],
            ["Refactoring Safety", "Risky; renaming a method or locator might break tests silently", "Safe; renaming updates all references across entire repo"],
            ["IDE Autocomplete", "Limited inference; frequent reference checking", "Rich IntelliSense for all Page methods and API responses"],
            ["Test Data Schemas", "Unenforced object literals", "Strict Interfaces and Types prevent invalid test fixtures"],
            ["Setup Complexity", "Zero build setup required", "Requires `tsconfig.json` (handled natively by Playwright)"],
          ],
        },
      },
      {
        id: "first-ts-program",
        heading: "Compiling Your First TypeScript Program",
        codeBlocks: [
          {
            title: "hello.ts",
            language: "typescript",
            code: `// Explicit type annotations
const frameworkName: string = "Playwright";
const targetTimeout: number = 30000;
const isHeadless: boolean = true;

function calculateBudget(timeout: number, retries: number): number {
    return timeout * retries;
}

const totalBudget: number = calculateBudget(targetTimeout, 3);
console.log(\`Running \${frameworkName} with \${totalBudget}ms budget (Headless: \${isHeadless})\`);`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. KEYWORDS & TYPE OPERATORS                                  */
  /* ------------------------------------------------------------- */
  "typescript-keywords-syntax": {
    id: "typescript-keywords-syntax",
    title: "TypeScript Keywords & Type Operators Directory",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-keywords/",
    description: "Complete guide to TypeScript-specific keywords, type operators (keyof, typeof, is, as, satisfies, infer), and access modifiers in test automation frameworks.",
    sections: [
      {
        id: "ts-keywords-table",
        heading: "TypeScript-Specific Keywords & Operators Table",
        table: {
          headers: ["Category", "Keyword / Operator", "Core Purpose", "Direct QA Testing Application"],
          rows: [
            ["Type Declaration", "`type`", "Defines a type alias for unions, primitives, tuples", "`type Environment = 'dev' | 'qa' | 'staging' | 'prod';`."],
            ["Type Declaration", "`interface`", "Defines an extensible contract for an object", "Page Object contracts, API payload schemas, user fixtures."],
            ["Type Declaration", "`enum`", "Named set of numeric or string constants", "`enum HttpStatus { OK = 200, CREATED = 201, BAD_REQUEST = 400 }`."],
            ["Type Assertion", "`as`", "Overrides compiler inference with explicit type", "Casting parsed JSON API responses: `(await res.json()) as OrderResponse`."],
            ["Type Guard", "`is`", "Declares a user-defined type predicate", "`function isError(res): res is ErrorResponse` for runtime branching."],
            ["Type Operator", "`keyof`", "Produces a union of an object type's keys", "Ensuring only valid field names can be passed to dynamic form helpers."],
            ["Type Operator", "`typeof`", "Extracts the type from an existing runtime value", "Creating a type contract directly from a mock JSON test fixture."],
            ["Class Modifiers", "`readonly`", "Prevents modification of field after assignment", "Page Object locators: `private readonly submitBtn: Locator;`."],
            ["Class Modifiers", "`private` / `protected`", "Restricts visibility to class / subclasses", "Hiding raw internal locators, exposing only public service methods."],
            ["Class Modifiers", "`implements`", "Guarantees a class satisfies an interface", "`class CheckoutPage implements ICheckoutPage { ... }`."],
            ["Modern Operators", "`satisfies`", "Validates a type without widening inference", "Validating test configuration objects while preserving exact literal types."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. PRIMITIVES, ANY, UNKNOWN & NEVER                           */
  /* ------------------------------------------------------------- */
  "typescript-types-basics": {
    id: "typescript-types-basics",
    title: "Primitives, Special Types (any vs unknown vs never)",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-types/",
    description: "Master TypeScript primitive annotations, why 'any' is an anti-pattern in test suites, safe narrowing with 'unknown', and exhaustive verification using 'never'.",
    sections: [
      {
        id: "any-vs-unknown",
        heading: "any vs unknown: Why 'any' is Toxic in Test Automation",
        table: {
          headers: ["Type", "Type Safety", "Can Assign Anything?", "Can Call Methods Directly?", "QA Verdict"],
          rows: [
            ["`any`", "NONE (Disabled)", "YES", "YES (compiles fine, crashes at runtime)", "CRITICAL ANTI-PATTERN: Never use in production test frameworks."],
            ["`unknown`", "STRICT (Enforced)", "YES", "NO (Must narrow type via `typeof` or type guard first)", "RECOMMENDED: Use for dynamic API payloads and unparsed JSON."],
            ["`never`", "EXHAUSTIVE", "NO", "NO (Represents values that can never occur)", "RECOMMENDED: Use in `default` switch cases for exhaustive checks."],
            ["`void`", "STANDARD", "Only undefined", "NO", "Use for test hooks and methods that do not return values."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. INTERFACES VS TYPE ALIASES                                 */
  /* ------------------------------------------------------------- */
  "typescript-interfaces-aliases": {
    id: "typescript-interfaces-aliases",
    title: "Interfaces vs Type Aliases for Test Data Contracts",
    category: "OOP & Interface",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-interfaces/",
    description: "Learn when to choose interface vs type alias in test frameworks, declaration merging, extending schemas, and defining strict test data fixtures.",
    sections: [
      {
        id: "interface-vs-type-table",
        heading: "Interface vs Type Alias Comparison Matrix",
        table: {
          headers: ["Dimension", "Interface (`interface`)", "Type Alias (`type`)"],
          rows: [
            ["Primary Use Case", "Defining object structures, Page Object contracts, API data models.", "Unions, primitives, tuples, utility combinations, function types."],
            ["Extensibility", "Extends via `extends` keyword; supports declaration merging.", "Combines via intersection operator (`&`)."],
            ["Unions & Primitives", "Cannot declare primitive aliases or union types directly.", "Can declare unions: `type Role = 'ADMIN' | 'USER'`."],
            ["QA Recommendation", "Use `interface` for Page Objects and Data Models.", "Use `type` for Union types, Enums, and Utility types."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. ENUMS, CONST ENUMS & TUPLES                                */
  /* ------------------------------------------------------------- */
  "typescript-enums-tuples": {
    id: "typescript-enums-tuples",
    title: "TypeScript Enums, Const Enums & Tuples in QA",
    category: "OOP & Interface",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-enums/",
    description: "Master numeric and string enums, zero-overhead const enums, and tuples for parameterized test datasets and coordinates.",
    sections: [
      {
        id: "enums-and-tuples",
        heading: "Enums & Tuples in Test Frameworks",
        codeBlocks: [
          {
            title: "String Enums & Tuples in Action",
            language: "typescript",
            code: `// String Enum for Environment targets
export enum Environment {
  DEV = "https://dev.deepakqa.internal",
  QA = "https://qa-test.deepakqa.internal",
  STAGING = "https://staging.deepakqa.com",
  PROD = "https://deepakqa.com",
}

// Tuple: Fixed-length typed array (e.g., [x, y] coordinates or [username, expectedStatus])
type TestCredentialTuple = [username: string, password: string, expectedStatus: number];

const testCases: TestCredentialTuple[] = [
  ["admin@deepakqa.com", "Password123!", 200],
  ["locked@deepakqa.com", "WrongPassword!", 403],
];`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. TYPE GUARDS & DISCRIMINATED SWITCH                         */
  /* ------------------------------------------------------------- */
  "typescript-narrowing-guards": {
    id: "typescript-narrowing-guards",
    title: "Type Guards & Exhaustive Discriminated Unions with Switch",
    category: "Advance TypeScript Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-type-guards/",
    description: "Master type narrowing with typeof, instanceof, in operator, user-defined type predicates (value is T), and exhaustive switch checks for complex API responses.",
    sections: [
      {
        id: "discriminated-unions-switch",
        heading: "Exhaustive Switch on Polymorphic API Responses",
        codeBlocks: [
          {
            title: "Exhaustive Switch Pattern",
            language: "typescript",
            code: `interface SuccessResponse { kind: "success"; orderId: string; }
interface ErrorResponse { kind: "error"; message: string; }

type OrderResponse = SuccessResponse | ErrorResponse;

function assertNever(x: never): never {
  throw new Error("Unhandled response: " + JSON.stringify(x));
}

export function processOrderResponse(res: OrderResponse) {
  switch (res.kind) {
    case "success":
      return res.orderId;
    case "error":
      throw new Error("Failed: " + res.message);
    default:
      return assertNever(res); // Enforces compile-time exhaustiveness!
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. FUNCTION SIGNATURES & OVERLOADING                          */
  /* ------------------------------------------------------------- */
  "typescript-functions": {
    id: "typescript-functions",
    title: "Typed Functions, Optional Parameters & Function Overloading",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-functions/",
    description: "Master parameter typing, return type annotations, optional/default parameters, and TypeScript function overloading for wait and assertion helpers.",
    sections: [
      {
        id: "function-overloading",
        heading: "Function Overloading in TypeScript Helpers",
        codeBlocks: [
          {
            title: "Overloaded Wait Utility",
            language: "typescript",
            code: `import { type Page, type Locator } from "@playwright/test";

// Function Overload Signatures
export function findElement(page: Page, selector: string): Locator;
export function findElement(page: Page, selector: string, timeout: number): Locator;

// Implementation Signature
export function findElement(page: Page, selector: string, timeout?: number): Locator {
  const locator = page.locator(selector);
  return locator;
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. STRONGLY TYPED PAGE OBJECTS                                */
  /* ------------------------------------------------------------- */
  "typescript-classes-pom": {
    id: "typescript-classes-pom",
    title: "Classes & Strongly Typed Page Object Model (POM)",
    category: "OOP & Interface",
    sourceUrl: "https://playwright.dev/docs/pom",
    description: "Write production-grade, typed Page Objects using TypeScript access modifiers (private, readonly), dependency injection, and fluent return types.",
    sections: [
      {
        id: "typed-pom-code",
        heading: "Architecture of a Strongly Typed Page Object",
        codeBlocks: [
          {
            title: "src/pages/CheckoutPage.ts",
            language: "typescript",
            code: `import { type Page, type Locator, expect } from "@playwright/test";

export interface PaymentDetails {
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export class CheckoutPage {
  private readonly page: Page;
  private readonly cardNumberInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardNumberInput = page.locator("#card-number");
    this.submitButton = page.locator("button[type='submit']");
  }

  async pay(payment: PaymentDetails): Promise<void> {
    await this.cardNumberInput.fill(payment.cardNumber);
    await this.submitButton.click();
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. GENERICS IN TEST AUTOMATION                                */
  /* ------------------------------------------------------------- */
  "typescript-generics": {
    id: "typescript-generics",
    title: "Generics in Test Frameworks: API Clients & Utilities",
    category: "Advance TypeScript Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-generics/",
    description: "Build flexible, reusable test utilities using TypeScript generics: strongly typed REST API clients, resilient polling helpers, and generic page factories.",
    sections: [
      {
        id: "generic-api-client",
        heading: "Generic REST API Client Wrapper",
        codeBlocks: [
          {
            title: "ApiClient.ts (Type-Safe Generic Client)",
            language: "typescript",
            code: `import { type APIRequestContext, expect } from "@playwright/test";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get<T>(url: string, expectedStatus = 200): Promise<T> {
    const response = await this.request.get(url);
    expect(response.status()).toBe(expectedStatus);
    return (await response.json()) as T;
  }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. UTILITY TYPES FOR TEST FIXTURES                           */
  /* ------------------------------------------------------------- */
  "typescript-utility-types": {
    id: "typescript-utility-types",
    title: "Utility Types (Partial, Required, Pick, Omit, Record) in QA",
    category: "Advance TypeScript Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/typescript-utility-types/",
    description: "Harness TypeScript built-in utility types to create flexible mock fixtures, customize API schemas, and prevent redundant interface boilerplate.",
    sections: [
      {
        id: "utility-types-summary",
        heading: "Essential Utility Types for Test Automation",
        table: {
          headers: ["Utility Type", "Transformation", "QA Testing Application"],
          rows: [
            ["`Partial<T>`", "Makes all properties in T optional", "Allowing tests to override only 1 or 2 specific fields in a baseline fixture."],
            ["`Required<T>`", "Makes all properties in T mandatory", "Ensuring full test data payloads are populated before final checkout."],
            ["`Pick<T, Keys>`", "Extracts only specified keys from T", "Creating lightweight registration payloads from a complete User model."],
            ["`Omit<T, Keys>`", "Removes specified keys from T", "Removing server-generated fields (`id`, `createdAt`) from POST request fixtures."],
            ["`Record<Keys, Type>`", "Constructs dictionary with key-value types", "Mapping environment names to base URLs or selector dictionaries."],
            ["`Readonly<T>`", "Prevents reassignment of all properties", "Immutable global configuration objects."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 11. CUSTOM PLAYWRIGHT FIXTURES                                */
  /* ------------------------------------------------------------- */
  "typescript-fixtures-custom": {
    id: "typescript-fixtures-custom",
    title: "Custom Typed Fixtures in Playwright (`test.extend`)",
    category: "Practice TypeScript",
    sourceUrl: "https://playwright.dev/docs/test-fixtures",
    description: "Write clean, dependency-injected Playwright tests by creating custom typed fixtures, automated page manager containers, and automatic teardown hooks.",
    sections: [
      {
        id: "test-extend-fixtures",
        heading: "Building Custom Page Object Fixtures",
        codeBlocks: [
          {
            title: "src/fixtures/custom-test.ts",
            language: "typescript",
            code: `import { test as base } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";

interface MyFixtures {
  checkoutPage: CheckoutPage;
}

export const test = base.extend<MyFixtures>({
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export { expect } from "@playwright/test";`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 12. ADVANCED TYPES & SATISFIES                                */
  /* ------------------------------------------------------------- */
  "typescript-advanced-types": {
    id: "typescript-advanced-types",
    title: "Advanced Types: Template Literals, Mapped Types & Satisfies",
    category: "Advance TypeScript Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/advanced-types-in-typescript/",
    description: "Master modern TypeScript operators: satisfies for config validation without type widening, template literal types for dynamic data-testid selectors, and mapped types.",
    sections: [
      {
        id: "template-literal-types",
        heading: "Template Literal Types for Dynamic Selectors",
        codeBlocks: [
          {
            title: "Type-Safe Dynamic Selectors",
            language: "typescript",
            code: `type ButtonId = "submit" | "cancel" | "reset";
// Template Literal Type produces strict union:
// "data-testid=submit-btn" | "data-testid=cancel-btn" | "data-testid=reset-btn"
type TestIdSelector = \`data-testid=\${ButtonId}-btn\`;

export function getByTestId(selector: TestIdSelector) {
  return \`[\${selector}]\`;
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 13. TSCONFIG & PATH ALIASES                                   */
  /* ------------------------------------------------------------- */
  "typescript-tsconfig-setup": {
    id: "typescript-tsconfig-setup",
    title: "tsconfig.json Best Practices & Clean Path Aliases for QA",
    category: "Practice TypeScript",
    sourceUrl: "https://www.typescriptlang.org/tsconfig",
    description: "Eliminate messy relative imports (../../..) using tsconfig path aliases, and configure strict compiler settings for maximum bug prevention.",
    sections: [
      {
        id: "tsconfig-qa-template",
        heading: "Production tsconfig.json for Test Repositories",
        codeBlocks: [
          {
            title: "tsconfig.json",
            language: "json",
            code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "baseUrl": ".",
    "paths": {
      "@pages/*": ["src/pages/*"],
      "@fixtures/*": ["src/fixtures/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}`,
          },
        ],
      },
    ],
  },
};
