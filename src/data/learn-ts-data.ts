import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const TS_CATEGORIES: DocCategory[] = [
  {
    title: "1. TS Foundations & Type Safety",
    defaultOpen: true,
    items: [
      { id: "typescript-getting-started", text: "Why TS for Playwright & tsconfig.json Setup" },
      { id: "typescript-primitives-strict", text: "Primitives, Strict Null Checks & Locator Inference" },
      { id: "typescript-any-unknown-never", text: "any vs unknown vs never in Test Assertions" },
    ],
  },
  {
    title: "2. Type Modeling: Interfaces & Unions",
    defaultOpen: true,
    items: [
      { id: "typescript-interfaces-aliases", text: "Interfaces vs Types: Modeling API Payloads" },
      { id: "typescript-unions-narrowing", text: "Union Types, Narrowing & Custom Type Guards" },
      { id: "typescript-enums-tuples", text: "Enums vs as const & Tuples for Coordinates" },
    ],
  },
  {
    title: "3. Strongly Typed Page Object Model",
    defaultOpen: true,
    items: [
      { id: "typescript-classes-pom", text: "Typing readonly page: Page & readonly Locators" },
      { id: "typescript-getters-inheritance", text: "Dynamic Getters, BasePage & Composition" },
    ],
  },
  {
    title: "4. Advanced Generics in Automation",
    defaultOpen: false,
    items: [
      { id: "typescript-generics-basics", text: "Generic Functions & Generic REST API Clients" },
      { id: "typescript-generic-constraints", text: "Generic Constraints & DB Query Typing" },
    ],
  },
  {
    title: "5. Utility Types for Test Data",
    defaultOpen: false,
    items: [
      { id: "typescript-utility-types", text: "Partial, Pick, Omit & Record for Fixture Data" },
      { id: "typescript-advanced-types", text: "Template Literal Types & satisfies Operator" },
    ],
  },
  {
    title: "6. Playwright Custom Fixtures & Architecture",
    defaultOpen: false,
    items: [
      { id: "typescript-fixtures-extend", text: "test.extend<CustomFixtures>() Deep Dive" },
      { id: "typescript-authenticated-fixtures", text: "Multi-Role Authenticated Storage State Fixtures" },
      { id: "typescript-network-types", text: "Typing page.route() & Zod Schema Validation" },
      { id: "typescript-tsconfig-paths", text: "tsconfig.json Path Aliases (@/pages) & ESLint" },
    ],
  },
];

export const TS_DOCS: Record<string, DetailedDoc> = {
  /* ========================================================================= */
  /* CATEGORY 1: TS FOUNDATIONS & TYPE SAFETY                                  */
  /* ========================================================================= */
  "typescript-getting-started": {
    id: "typescript-getting-started",
    title: "Why TypeScript for Playwright: Zero-Config Execution & tsconfig.json Setup",
    category: "1. TS Foundations & Type Safety",
    sourceUrl: "https://playwright.dev/docs/intro#typescript-support",
    description: "Start TypeScript from absolute zero tailored for Playwright: why TypeScript is the industry standard for test automation, out-of-the-box native compilation, and configuring tsconfig.json.",
    sections: [
      {
        id: "why-ts-playwright",
        heading: "Why TypeScript is the Default for Playwright",
        paragraphs: [
          "Microsoft built Playwright in TypeScript from Day 1. Every locator, assertion, browser context, and network event comes with first-class type definitions.",
          "Unlike other frameworks that require complex Webpack or Babel compilation pipelines, Playwright executes TypeScript natively out of the box using built-in transformation without any manual build step.",
        ],
        table: {
          headers: ["Problem in JavaScript Testing", "How TypeScript Solves It in Playwright"],
          rows: [
            ["Typo in locator method (e.g. `getByRolee()`) fails only at runtime midway through test run", "Compile-time error in IDE: red squiggly prevents test from running until fixed."],
            ["API response property renamed by backend (`user_id` -> `userId`) breaks tests silently", "Strict Interface definitions flag the obsolete property across the entire test repository."],
            ["Guessing available assertion matchers (`toHaveText` vs `toBeText`)", "Instant IntelliSense autocomplete showing exact parameters and timeouts."],
            ["Passing invalid string to browser options (`{ headless: 'yes' }`)", "Type error: `Type 'string' is not assignable to type 'boolean'`."],
          ],
        },
      },
      {
        id: "tsconfig-setup",
        heading: "The Recommended tsconfig.json for Playwright",
        paragraphs: [
          "Configure `tsconfig.json` at the root of your test project with strict safety checks and modern module resolution:",
        ],
        codeBlocks: [
          {
            title: "tsconfig.json",
            language: "json",
            code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022", "DOM"],
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/pages/*": ["src/pages/*"],
      "@/fixtures/*": ["src/fixtures/*"],
      "@/data/*": ["src/data/*"],
      "@/utils/*": ["src/utils/*"]
    }
  },
  "include": ["tests/**/*.ts", "src/**/*.ts", "playwright.config.ts"]
}`,
          },
        ],
      },
    ],
  },

  "typescript-primitives-strict": {
    id: "typescript-primitives-strict",
    title: "Primitives, Strict Null Checks & Playwright Locator Type Inference",
    category: "1. TS Foundations & Type Safety",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
    description: "Master string, number, boolean primitives, strict null checks (null vs undefined), and understand how Playwright infers Page and Locator types automatically.",
    sections: [
      {
        id: "primitives-and-inference",
        heading: "Primitive Types & Type Inference",
        paragraphs: [
          "TypeScript has 3 core primitive types: `string`, `number`, and `boolean`. In modern TypeScript, you do not need to annotate every variable—TypeScript automatically infers types from assigned values:",
        ],
        codeBlocks: [
          {
            title: "Type Inference in Playwright",
            language: "typescript",
            code: `import { test, expect, type Page, type Locator } from '@playwright/test';

test('typed locators and assertions', async ({ page }: { page: Page }) => {
  // TypeScript infers 'heading' is of type 'Locator'
  const heading: Locator = page.getByRole('heading', { level: 1 });
  
  // TypeScript infers 'text' is Promise<string>
  const text: string = await heading.innerText();
  
  // Strict boolean inference
  const isEnabled: boolean = await heading.isEnabled();
  expect(isEnabled).toBe(true);
});`,
          },
        ],
      },
      {
        id: "strict-null-checks",
        heading: "Strict Null Checks (null vs undefined)",
        paragraphs: [
          "With `\"strictNullChecks\": true`, TypeScript treats `null` and `undefined` as distinct types, preventing the #1 cause of production runtime crashes: `TypeError: Cannot read properties of undefined`.",
          "Use non-null assertions (`!`) sparingly, and prefer optional chaining (`?.`) or explicit assertions:",
        ],
        codeBlocks: [
          {
            title: "Handling Nullable Attributes Safely",
            language: "typescript",
            code: `// getAttribute returns Promise<string | null>
const href: string | null = await page.getByRole('link').getAttribute('href');

// ❌ UNSAFE: Assuming href is always string
// const domain = href.split('/')[2]; // Compile error: Object is possibly 'null'!

// ✅ SAFE: Explicit type narrowing before access
if (href !== null) {
  const domain = href.split('/')[2]; // TS knows href is definitely 'string' here!
  expect(domain).toBe('example.com');
}`,
          },
        ],
      },
    ],
  },

  "typescript-any-unknown-never": {
    id: "typescript-any-unknown-never",
    title: "any vs unknown vs never in Test Assertions",
    category: "1. TS Foundations & Type Safety",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
    description: "Why 'any' destroys test reliability, why 'unknown' is the safest type for API responses, and how 'never' enables exhaustive switch-case verification in test state machines.",
    sections: [
      {
        id: "any-vs-unknown",
        heading: "Why 'any' Destroys Test Safety vs 'unknown'",
        paragraphs: [
          "`any` turns off TypeScript's type checker completely, blinding your IDE to broken method calls. If you use `any`, you lose all the benefits of TypeScript.",
          "`unknown` is the type-safe counterpart of `any`. It says: 'We don't know what this data is yet, and you cannot access any properties until you explicitly narrow the type.'",
        ],
        codeBlocks: [
          {
            title: "any (Dangerous) vs unknown (Safe)",
            language: "typescript",
            code: `// ❌ DANGEROUS: Using any
const badResponse: any = await (await page.request.get('/api/user')).json();
badResponse.nonExistentMethod(); // No compile error! Fails catastrophically at runtime!

// ✅ SAFE: Using unknown
const safeResponse: unknown = await (await page.request.get('/api/user')).json();
// safeResponse.id; // Compile error: 'safeResponse' is of type 'unknown'!

// Must validate or assert type before access:
interface UserProfile {
  id: string;
  email: string;
}

if (typeof safeResponse === 'object' && safeResponse !== null && 'id' in safeResponse) {
  const user = safeResponse as UserProfile;
  expect(user.id).toBeTruthy(); // Type-safe!
}`,
          },
        ],
      },
      {
        id: "never-exhaustive-checking",
        heading: "The 'never' Type for Exhaustive State Machine Verification",
        paragraphs: [
          "The `never` type represents values that should NEVER occur. In testing, use `never` in default switch blocks to guarantee that all enum states or union values are handled:",
        ],
        codeBlocks: [
          {
            title: "Exhaustive Switch-Case Verification",
            language: "typescript",
            code: `type PaymentStatus = 'PENDING' | 'AUTHORIZED' | 'CAPTURED' | 'FAILED';

function getStatusBadgeColor(status: PaymentStatus): string {
  switch (status) {
    case 'PENDING': return 'yellow';
    case 'AUTHORIZED': return 'blue';
    case 'CAPTURED': return 'green';
    case 'FAILED': return 'red';
    default: {
      // If a developer adds 'REFUNDED' to PaymentStatus but forgets to update this function,
      // TypeScript throws a compile-time error right here!
      const _exhaustiveCheck: never = status;
      throw new Error(\`Unhandled payment status: \${_exhaustiveCheck}\`);
    }
  }
}`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 2: TYPE MODELING: INTERFACES & UNIONS                            */
  /* ========================================================================= */
  "typescript-interfaces-aliases": {
    id: "typescript-interfaces-aliases",
    title: "Interfaces vs Type Aliases: Modeling API Payloads in Playwright",
    category: "2. Type Modeling: Interfaces & Unions",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",
    description: "Model robust data contracts for REST APIs and Page Object Models: interface inheritance (extends), type aliases for unions, declaration merging, and read-only properties.",
    sections: [
      {
        id: "interface-vs-type",
        heading: "Interface vs Type: Which to Use in Test Automation?",
        paragraphs: [
          "Both `interface` and `type` can describe object shapes, but have distinct rules:",
          "1. Use `interface` for modeling object shapes, Page Object Models, and API contracts that benefit from `extends` inheritance.",
          "2. Use `type` for unions (`'mobile' | 'desktop'`), primitives, tuples, and complex mapped/utility types.",
        ],
        codeBlocks: [
          {
            title: "Modeling API Payloads with Interfaces",
            language: "typescript",
            code: `// Base entity interface
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Inherit from BaseEntity and extend with specific user fields
export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'customer' | 'auditor';
}

export interface UserResponse extends BaseEntity, CreateUserRequest {
  isVerified: boolean;
  walletBalance: number;
}`,
          },
        ],
      },
      {
        id: "readonly-interfaces",
        heading: "Preventing Accidental Test State Mutation with readonly",
        paragraphs: [
          "Mark properties as `readonly` in test data interfaces to ensure test workers do not mutate shared configurations:",
        ],
        codeBlocks: [
          {
            title: "Readonly Test Configuration",
            language: "typescript",
            code: `export interface EnvironmentConfig {
  readonly baseUrl: string;
  readonly defaultTimeoutMs: number;
  readonly maxRetries: number;
}

export const STAGING_CONFIG: EnvironmentConfig = {
  baseUrl: 'https://staging.qa.company.com',
  defaultTimeoutMs: 10000,
  maxRetries: 2
};

// STAGING_CONFIG.baseUrl = 'http://hack.com'; 
// ❌ Compile Error: Cannot assign to 'baseUrl' because it is a read-only property!`,
          },
        ],
      },
    ],
  },

  "typescript-unions-narrowing": {
    id: "typescript-unions-narrowing",
    title: "Union Types, Discriminated Unions & Custom Type Guards in QA",
    category: "2. Type Modeling: Interfaces & Unions",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
    description: "Model multi-state test responses with Discriminated Unions, eliminate flakiness with typeof and instanceof narrowing, and build custom type guards (is) for API payloads.",
    sections: [
      {
        id: "discriminated-unions",
        heading: "Discriminated Unions: Modeling Success vs Error Responses",
        paragraphs: [
          "When an API endpoint returns a success payload on HTTP 200 but an error schema on HTTP 400, a Discriminated Union with a common literal discriminator (e.g. `status: 'success' | 'error'`) ensures type-safe assertions:",
        ],
        codeBlocks: [
          {
            title: "Discriminated Union for Payment API",
            language: "typescript",
            code: `interface PaymentSuccess {
  status: 'SUCCESS';
  transactionId: string;
  authCode: string;
  amount: number;
}

interface PaymentFailure {
  status: 'FAILED';
  errorCode: 'INSUFFICIENT_FUNDS' | 'CARD_DECLINED' | 'GATEWAY_TIMEOUT';
  retryable: boolean;
}

export type PaymentApiResponse = PaymentSuccess | PaymentFailure;

test('verify payment response discrimination', async ({ request }) => {
  const res = await request.post('/api/pay', { data: { amount: 500 } });
  const data: PaymentApiResponse = await res.json();

  if (data.status === 'SUCCESS') {
    // TypeScript GUARANTEES transactionId exists here!
    console.log(\`Payment approved: \${data.transactionId}\`);
    expect(data.authCode).toBeTruthy();
  } else {
    // TypeScript GUARANTEES errorCode exists here!
    console.log(\`Payment rejected: \${data.errorCode}\`);
    expect(data.retryable).toBe(true);
  }
});`,
          },
        ],
      },
      {
        id: "custom-type-guards",
        heading: "Custom Type Guards (`pet is Cat`) in Assertions",
        paragraphs: [
          "A Custom Type Guard is a function that returns a type predicate (`value is T`). When the function returns `true`, TypeScript narrows the type automatically:",
        ],
        codeBlocks: [
          {
            title: "Type Guard for API Payloads",
            language: "typescript",
            code: `interface ApiErrorPayload {
  error: string;
  statusCode: number;
}

// Custom type guard function
export function isApiError(data: unknown): data is ApiErrorPayload {
  return (
    typeof data === 'object' &&
    data !== null &&
    'error' in data &&
    typeof (data as Record<string, unknown>).error === 'string'
  );
}

// In test:
const rawJson: unknown = await (await page.request.get('/api/broken')).json();
if (isApiError(rawJson)) {
  expect(rawJson.statusCode).toBe(400); // Fully typed!
}`,
          },
        ],
      },
    ],
  },

  "typescript-enums-tuples": {
    id: "typescript-enums-tuples",
    title: "Enums vs as const & Tuples for Coordinates in Playwright",
    category: "2. Type Modeling: Interfaces & Unions",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums",
    description: "Compare TypeScript Enums vs 'as const' string literal unions, and learn how Tuples type fixed-length arrays for drag-and-drop coordinates and multi-value fixture returns.",
    sections: [
      {
        id: "enums-vs-as-const",
        heading: "Enums vs 'as const' String Unions: Modern Best Practice",
        paragraphs: [
          "Traditional numeric enums generate extra JavaScript code at runtime. Modern TypeScript and Playwright conventions strongly recommend using string literal unions or `as const` objects instead:",
        ],
        codeBlocks: [
          {
            title: "as const Object Pattern for Test Selectors",
            language: "typescript",
            code: `// Modern 'as const' pattern: Zero runtime overhead, clean autocomplete
export const UserRole = {
  Admin: 'ROLE_ADMIN',
  Customer: 'ROLE_CUSTOMER',
  Auditor: 'ROLE_AUDITOR',
} as const;

// Derive TypeScript type automatically from the object values!
export type UserRoleType = typeof UserRole[keyof typeof UserRole];
// Equivalent to: 'ROLE_ADMIN' | 'ROLE_CUSTOMER' | 'ROLE_AUDITOR'`,
          },
        ],
      },
      {
        id: "tuples-in-playwright",
        heading: "Tuples for Coordinates & Drag-and-Drop Testing",
        paragraphs: [
          "A Tuple is an array with a fixed number of elements where each element has a strictly typed position. Tuples are ideal for screen coordinates `[x, y]` in canvas or drag-and-drop testing:",
        ],
        codeBlocks: [
          {
            title: "Tuples for Canvas / Mouse Coordinates",
            language: "typescript",
            code: `// [x: number, y: number]
type Coordinates = [x: number, y: number];

const startPoint: Coordinates = [150, 300];
const endPoint: Coordinates = [450, 600];

test('drag and drop using coordinates tuple', async ({ page }) => {
  await page.goto('/canvas-editor');
  
  await page.mouse.move(startPoint[0], startPoint[1]);
  await page.mouse.down();
  await page.mouse.move(endPoint[0], endPoint[1]);
  await page.mouse.up();
});`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 3: STRONGLY TYPED PAGE OBJECT MODEL                              */
  /* ========================================================================= */
  "typescript-classes-pom": {
    id: "typescript-classes-pom",
    title: "Typing readonly page: Page & readonly Locators in Page Object Models",
    category: "3. Strongly Typed Page Object Model",
    sourceUrl: "https://playwright.dev/docs/pom",
    description: "Design enterprise-grade Page Object Model (POM) classes in TypeScript with readonly access modifiers, strictly typed locators, and clean action methods.",
    sections: [
      {
        id: "strongly-typed-pom",
        heading: "Enterprise TypeScript Page Object Model Architecture",
        paragraphs: [
          "A professional Page Object Model in TypeScript encapsulates UI locators as `readonly` class properties, ensuring that tests cannot overwrite locators and that IDEs provide instant autocomplete:",
        ],
        codeBlocks: [
          {
            title: "src/pages/CheckoutPage.ts",
            language: "typescript",
            code: `import { type Page, type Locator, expect } from '@playwright/test';

export class CheckoutPage {
  // Readonly properties prevent accidental reassignment
  readonly page: Page;
  readonly cartItems: Locator;
  readonly promoInput: Locator;
  readonly applyPromoBtn: Locator;
  readonly subtotalText: Locator;
  readonly proceedToPayBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.getByTestId('cart-item-row');
    this.promoInput = page.getByPlaceholder('Enter discount code');
    this.applyPromoBtn = page.getByRole('button', { name: 'Apply' });
    this.subtotalText = page.getByTestId('cart-subtotal');
    this.proceedToPayBtn = page.getByRole('button', { name: 'Proceed to Pay' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/checkout');
    await expect(this.proceedToPayBtn).toBeVisible();
  }

  async applyPromoCode(code: string): Promise<void> {
    await this.promoInput.fill(code);
    await this.applyPromoBtn.click();
    await expect(this.page.getByText('Promo applied successfully')).toBeVisible();
  }

  async getSubtotalAmount(): Promise<number> {
    const rawText = await this.subtotalText.innerText();
    return parseFloat(rawText.replace(/[^0-9.]/g, ''));
  }
}`,
          },
        ],
      },
    ],
  },

  "typescript-getters-inheritance": {
    id: "typescript-getters-inheritance",
    title: "Dynamic Getters, BasePage & Composition vs Inheritance",
    category: "3. Strongly Typed Page Object Model",
    sourceUrl: "https://playwright.dev/docs/pom",
    description: "Build scalable BasePage architectures, use dynamic TypeScript getters for parameterized locators, and understand composition vs inheritance in test automation.",
    sections: [
      {
        id: "dynamic-getters",
        heading: "Parameterized Locators with TypeScript Getters & Methods",
        paragraphs: [
          "When a locator depends on dynamic parameters (e.g. an item name or order ID), you cannot initialize it in the constructor. Use a typed method instead:",
        ],
        codeBlocks: [
          {
            title: "Dynamic Parameterized Locators",
            language: "typescript",
            code: `export class OrdersPage {
  constructor(readonly page: Page) {}

  // Parameterized locator method returning Locator
  getOrderRow(orderId: string): Locator {
    return this.page.locator(\`tr[data-order-id="\${orderId}"]\`);
  }

  getStatusBadge(orderId: string): Locator {
    return this.getOrderRow(orderId).locator('span.status-badge');
  }

  async cancelOrder(orderId: string): Promise<void> {
    const cancelBtn = this.getOrderRow(orderId).getByRole('button', { name: 'Cancel' });
    await cancelBtn.click();
  }
}`,
          },
        ],
      },
      {
        id: "basepage-architecture",
        heading: "The BasePage Pattern with Common Navigation",
        paragraphs: [
          "Create an abstract `BasePage` that child pages extend to share common utilities (toasts, headers, loaders):",
        ],
        codeBlocks: [
          {
            title: "src/pages/BasePage.ts",
            language: "typescript",
            code: `import { type Page, type Locator, expect } from '@playwright/test';

export abstract class BasePage {
  readonly globalToast: Locator;
  readonly globalSpinner: Locator;

  constructor(readonly page: Page) {
    this.globalToast = page.locator('#global-toast-notification');
    this.globalSpinner = page.locator('.global-loading-spinner');
  }

  abstract goto(): Promise<void>;

  async waitForPageLoaded(): Promise<void> {
    await expect(this.globalSpinner).toBeHidden();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async assertToastMessage(message: string | RegExp): Promise<void> {
    await expect(this.globalToast).toContainText(message);
  }
}`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 4: ADVANCED GENERICS IN AUTOMATION                              */
  /* ========================================================================= */
  "typescript-generics-basics": {
    id: "typescript-generics-basics",
    title: "Generic Functions & Strongly Typed REST API Clients in Playwright",
    category: "4. Advanced Generics in Automation",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
    description: "Build reusable, type-safe API automation wrappers using TypeScript Generics: typing request.post<T>(), generic assertions, and response deserialization.",
    sections: [
      {
        id: "generic-api-client",
        heading: "Building a Generic REST API Client Wrapper",
        paragraphs: [
          "Without generics, every API call returns `unknown` or `any`, forcing you to write repetitive type casts. A generic method `<T>` allows callers to declare the exact response shape expected:",
        ],
        codeBlocks: [
          {
            title: "src/utils/ApiClient.ts",
            language: "typescript",
            code: `import type { APIRequestContext, APIResponse } from '@playwright/test';
import { expect } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  /**
   * Generic GET request that parses JSON into type T
   */
  async get<T>(endpoint: string, expectedStatus = 200): Promise<T> {
    const response: APIResponse = await this.request.get(endpoint);
    expect(response.status()).toBe(expectedStatus);
    const data: T = await response.json();
    return data; // Strongly typed as T!
  }

  /**
   * Generic POST request with typed payload and response
   */
  async post<TResponse, TPayload = unknown>(
    endpoint: string, 
    payload: TPayload, 
    expectedStatus = 201
  ): Promise<TResponse> {
    const response = await this.request.post(endpoint, { data: payload });
    expect(response.status()).toBe(expectedStatus);
    return (await response.json()) as TResponse;
  }
}`,
          },
        ],
      },
      {
        id: "using-generic-client",
        heading: "Consuming the Generic Client in Tests",
        paragraphs: [
          "Callers specify the expected interface, gaining full IntelliSense and compile-time verification:",
        ],
        codeBlocks: [
          {
            title: "Consuming Generic API Client",
            language: "typescript",
            code: `interface OrderSummary {
  orderId: string;
  total: number;
  currency: 'INR' | 'USD';
}

test('retrieve order summary via generic client', async ({ request }) => {
  const api = new ApiClient(request);

  // 'order' is automatically typed as OrderSummary!
  const order = await api.get<OrderSummary>('/api/orders/9921');
  
  expect(order.orderId).toBe('9921');
  expect(order.total).toBeGreaterThan(0);
});`,
          },
        ],
      },
    ],
  },

  "typescript-generic-constraints": {
    id: "typescript-generic-constraints",
    title: "Generic Constraints (T extends BaseEntity) & Database Query Typing",
    category: "4. Advanced Generics in Automation",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
    description: "Constrain generic types with 'extends', write generic table parsers that extract column data from Playwright locators, and type backend database queries.",
    sections: [
      {
        id: "generic-table-extractor",
        heading: "Generic Table Row Extractor with Constraints",
        paragraphs: [
          "In web testing, you frequently extract tabular data into objects. A generic table parser with constraints ensures that your extraction helper handles any table model:",
        ],
        codeBlocks: [
          {
            title: "src/utils/tableExtractor.ts",
            language: "typescript",
            code: `import type { Page } from '@playwright/test';

interface RowWithId {
  id: string;
}

/**
 * Extracts table rows into an array of typed objects T
 * T is constrained to require at least an 'id' property
 */
export async function extractTableRows<T extends RowWithId>(
  page: Page,
  tableSelector: string,
  transformRow: (cells: string[]) => T
): Promise<T[]> {
  const rows = await page.locator(\`\${tableSelector} tbody tr\`).all();
  const results: T[] = [];

  for (const row of rows) {
    const cellTexts = await row.locator('td').allInnerTexts();
    const parsed = transformRow(cellTexts);
    results.push(parsed);
  }

  return results;
}`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 5: UTILITY TYPES FOR TEST DATA                                  */
  /* ========================================================================= */
  "typescript-utility-types": {
    id: "typescript-utility-types",
    title: "Partial, Pick, Omit & Record for Combinatorial Test Data",
    category: "5. Utility Types for Test Data",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
    description: "Master TypeScript's built-in utility types: Partial<T> for optional test overrides, Omit<T> for negative boundary payloads, Pick<T>, and Record<K, V> for environment mapping.",
    sections: [
      {
        id: "utility-types-overview",
        heading: "Built-in Utility Types Essential for QA",
        paragraphs: [
          "Instead of declaring 10 duplicate interfaces for slight test payload variations, TypeScript's utility types transform existing types programmatically:",
        ],
        table: {
          headers: ["Utility Type", "Transformation Effect", "Real-World QA Application"],
          rows: [
            ["`Partial<T>`", "Makes all properties optional (`?`)", "Writing test data factory functions where callers only specify the field they want to test."],
            ["`Required<T>`", "Makes all properties mandatory", "Ensuring that production payloads contain zero omitted values before submitting."],
            ["`Omit<T, K>`", "Constructs type by removing keys `K`", "Negative testing: generating payloads missing mandatory fields (`Omit<User, 'password'>`)."],
            ["`Pick<T, K>`", "Constructs type with only keys `K`", "Micro-payloads: testing lightweight status updates."],
            ["`Record<K, V>`", "Constructs map with keys `K` and values `V`", "Environment mapping (`Record<'staging' | 'prod', string>`), fixture caches."],
            ["`Readonly<T>`", "Makes all properties immutable", "Preventing tests from mutating shared baseline fixtures."],
          ],
        },
      },
      {
        id: "test-data-factory-pattern",
        heading: "The Test Data Factory Pattern with Partial<T>",
        paragraphs: [
          "The Test Data Factory is an industry standard design pattern where a baseline valid object is merged with optional user overrides:",
        ],
        codeBlocks: [
          {
            title: "src/data/userFactory.ts",
            language: "typescript",
            code: `export interface UserAccount {
  id: string;
  username: string;
  email: string;
  age: number;
  tier: 'free' | 'premium';
}

/**
 * Factory function generating valid test accounts with optional overrides
 */
export function buildTestUser(overrides: Partial<UserAccount> = {}): UserAccount {
  const randomSuffix = Math.floor(Math.random() * 10000);
  
  return {
    id: \`USR-\${randomSuffix}\`,
    username: \`test_user_\${randomSuffix}\`,
    email: \`test\${randomSuffix}@company.com\`,
    age: 25,
    tier: 'free',
    ...overrides // Caller overrides apply here!
  };
}

// 1. Create default valid user
const user1 = buildTestUser();

// 2. Create premium underage user for boundary test
const underagePremiumUser = buildTestUser({ age: 16, tier: 'premium' });`,
          },
        ],
      },
    ],
  },

  "typescript-advanced-types": {
    id: "typescript-advanced-types",
    title: "Template Literal Types & the satisfies Operator in Test Suites",
    category: "5. Utility Types for Test Data",
    sourceUrl: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
    description: "Harness modern TypeScript features: Template Literal Types for pattern matching (e.g. emails, order tokens), the satisfies operator, and Awaited<T> for extracting Promise returns.",
    sections: [
      {
        id: "template-literal-types",
        heading: "Template Literal Types for Strict String Patterns",
        paragraphs: [
          "Template literal types allow you to enforce structural string formats at compile time:",
        ],
        codeBlocks: [
          {
            title: "Template Literal Types in Test Data",
            language: "typescript",
            code: `// Enforce that order IDs MUST start with "ORD-" followed by a string
type OrderId = \`ORD-\${string}\`;

// Enforce corporate email domain
type CompanyEmail = \`\${string}@deepakqa.com\`;

// ✅ Valid:
const validOrder: OrderId = 'ORD-98214';
const validEmail: CompanyEmail = 'deepak@deepakqa.com';

// ❌ Compile Errors:
// const badOrder: OrderId = 'INV-100'; // Type Error! Must start with ORD-
// const badEmail: CompanyEmail = 'user@gmail.com'; // Type Error!`,
          },
        ],
      },
      {
        id: "satisfies-operator",
        heading: "The 'satisfies' Operator for Test Configuration",
        paragraphs: [
          "The `satisfies` operator validates that an object matches an interface without widening its specific inferred literal types:",
        ],
        codeBlocks: [
          {
            title: "satisfies vs Type Annotation",
            language: "typescript",
            code: `type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// 'satisfies' verifies all values are HttpMethod, but preserves exact literal keys!
const endpoints = {
  getProfile: 'GET',
  submitPayment: 'POST',
} satisfies Record<string, HttpMethod>;

// endpoints.getProfile is inferred as exact literal 'GET', not widened to 'HttpMethod'!`,
          },
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 6: PLAYWRIGHT CUSTOM FIXTURES & ARCHITECTURE                     */
  /* ========================================================================= */
  "typescript-fixtures-extend": {
    id: "typescript-fixtures-extend",
    title: "Deep Dive into test.extend<CustomFixtures>() in TypeScript",
    category: "6. Playwright Custom Fixtures & Architecture",
    sourceUrl: "https://playwright.dev/docs/test-fixtures",
    description: "The architectural pinnacle of Playwright: creating strongly typed custom fixtures with test.extend<T>(), worker vs test scopes, and auto fixtures for automatic setup.",
    sections: [
      {
        id: "why-custom-fixtures",
        heading: "Why Custom Fixtures are Superior to beforeEach",
        paragraphs: [
          "Traditional test frameworks use `beforeEach` and `afterEach` hooks to instantiate Page Objects. In large projects, this causes messy shared variables and tight coupling.",
          "Playwright's Custom Fixtures are modular, isolated, self-contained, lazily evaluated, and composable. A test only executes the fixture setup if it explicitly declares the fixture in its arguments!",
        ],
      },
      {
        id: "building-custom-fixtures",
        heading: "Implementing Strongly Typed Custom Fixtures",
        paragraphs: [
          "Here is the clean enterprise architecture for custom fixtures:",
        ],
        codeBlocks: [
          {
            title: "src/fixtures/customTest.ts",
            language: "typescript",
            code: `import { test as base, expect } from '@playwright/test';
import { LoginPage } from '@/pages/LoginPage';
import { CheckoutPage } from '@/pages/CheckoutPage';

// 1. Declare interface defining all custom fixtures
export interface AppFixtures {
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
}

// 2. Extend base test with typed fixtures
export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    // Setup phase: instantiate page object
    const loginPage = new LoginPage(page);
    await use(loginPage); // Pass fixture to the test!
    // Teardown phase (runs automatically after test finishes)
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export { expect };`,
          },
          {
            title: "tests/checkout.spec.ts (Consuming Custom Fixtures)",
            language: "typescript",
            code: `// Import your extended test runner instead of @playwright/test
import { test, expect } from '@/fixtures/customTest';

test('user can complete purchase with discount', async ({ loginPage, checkoutPage }) => {
  // loginPage and checkoutPage are already instantiated and strongly typed!
  await loginPage.goto();
  await loginPage.login('qa_user', 'Password123!');

  await checkoutPage.goto();
  await checkoutPage.applyPromoCode('OCTOBER_FEST');
  const total = await checkoutPage.getSubtotalAmount();
  expect(total).toBeLessThan(500);
});`,
          },
        ],
      },
    ],
  },

  "typescript-authenticated-fixtures": {
    id: "typescript-authenticated-fixtures",
    title: "Multi-Role Authenticated Storage State Fixtures in TypeScript",
    category: "6. Playwright Custom Fixtures & Architecture",
    sourceUrl: "https://playwright.dev/docs/auth",
    description: "Eliminate repetitive UI logins: build typed storage state fixtures that bypass login screens and instantly launch browser contexts logged in as Admin, Customer, or Auditor.",
    sections: [
      {
        id: "auth-state-fixtures",
        heading: "Bypassing Login Screens via Storage State Fixtures",
        paragraphs: [
          "Logging in through the UI before every single test slows down test suites by 300%.",
          "Playwright's `storageState` captures session cookies and localStorage once during global setup, allowing fixtures to inject pre-authenticated browser contexts instantly:",
        ],
        codeBlocks: [
          {
            title: "src/fixtures/roleFixtures.ts",
            language: "typescript",
            code: `import { test as base, type Page } from '@playwright/test';

interface RolePages {
  adminPage: Page;
  customerPage: Page;
}

export const test = base.extend<RolePages>({
  adminPage: async ({ browser }, use) => {
    // Launch browser context with pre-saved Admin storage state
    const context = await browser.newContext({
      storageState: 'playwright/.auth/admin.json',
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  customerPage: async ({ browser }, use) => {
    // Launch browser context with pre-saved Customer storage state
    const context = await browser.newContext({
      storageState: 'playwright/.auth/customer.json',
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});`,
          },
        ],
      },
    ],
  },

  "typescript-network-types": {
    id: "typescript-network-types",
    title: "Typing page.route() Handlers & Zod Schema Validation",
    category: "6. Playwright Custom Fixtures & Architecture",
    sourceUrl: "https://zod.dev/",
    description: "Type network route mocks with Route and Request interfaces, and enforce runtime JSON schema validation using Zod with automatic TypeScript type inference.",
    sections: [
      {
        id: "zod-runtime-schema-validation",
        heading: "Runtime API Schema Validation with Zod & TypeScript",
        paragraphs: [
          "TypeScript type checks occur at compile time and disappear in JavaScript runtime. If a backend API changes in staging, compile-time types cannot catch it.",
          "Pair TypeScript with Zod to enforce runtime schema assertions on live API responses:",
        ],
        codeBlocks: [
          {
            title: "Zod Schema Assertion in Playwright",
            language: "typescript",
            code: `import { test, expect } from '@playwright/test';
import { z } from 'zod';

// 1. Define Zod runtime validation schema
export const UserApiSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  balance: z.number().nonnegative(),
  roles: z.array(z.enum(['ADMIN', 'CUSTOMER', 'GUEST'])),
  createdAt: z.string().datetime(),
});

// 2. Automatically derive static TypeScript type from schema!
export type UserApiType = z.infer<typeof UserApiSchema>;

test('validate production API matches schema contract', async ({ request }) => {
  const res = await request.get('/api/v1/user/me');
  expect(res.status()).toBe(200);
  const data = await res.json();

  // Runtime validation throws detailed error if schema changed
  const parsedData = UserApiSchema.parse(data);
  expect(parsedData.email).toContain('@');
});`,
          },
        ],
      },
    ],
  },

  "typescript-tsconfig-paths": {
    id: "typescript-tsconfig-paths",
    title: "tsconfig.json Path Aliases (@/pages) & Clean Enterprise Architecture",
    category: "6. Playwright Custom Fixtures & Architecture",
    sourceUrl: "https://playwright.dev/docs/test-configuration",
    description: "Organize enterprise Playwright frameworks: eliminating ugly relative import paths (../../../) with tsconfig path aliases, and setting up strict ESLint rules for Playwright.",
    sections: [
      {
        id: "path-aliases",
        heading: "Eliminating Relative Import Hell with Path Aliases",
        paragraphs: [
          "As test repositories scale to hundreds of spec files across nested directories, relative imports like `import { LoginPage } from '../../../../src/pages/LoginPage'` become brittle and impossible to refactor cleanly.",
          "Configure Path Aliases in `tsconfig.json` so that Playwright resolves imports with clean absolute prefixes:",
        ],
        codeBlocks: [
          {
            title: "Clean Imports with Path Aliases",
            language: "typescript",
            code: `// ❌ UGLY & BRITTLE:
// import { LoginPage } from '../../../../pages/LoginPage';
// import { buildUser } from '../../../../data/userFactory';

// ✅ CLEAN & ENTERPRISE:
import { LoginPage } from '@/pages/LoginPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { buildTestUser } from '@/data/userFactory';
import { test, expect } from '@/fixtures/customTest';`,
          },
        ],
      },
      {
        id: "playwright-eslint-rules",
        heading: "Essential ESLint Rules for Playwright",
        paragraphs: [
          "Install `eslint-plugin-playwright` to automatically catch common test automation bugs during code review and CI:",
          "1. `playwright/missing-playwright-await`: Enforces that all Playwright locator actions and assertions are preceded by `await`.",
          "2. `playwright/no-element-handle`: Prohibits obsolete `page.$()` and `page.$$()`, mandating modern `page.locator()`.",
          "3. `playwright/no-wait-for-timeout`: Flags and fails CI if any hardcoded `page.waitForTimeout()` sleeps are introduced.",
          "4. `playwright/prefer-web-first-assertions`: Mandates web-first assertions (`await expect(locator).toBeVisible()`) over raw boolean assertions.",
        ],
      },
    ],
  },
};
