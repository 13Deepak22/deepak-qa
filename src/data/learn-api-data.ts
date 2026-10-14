import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const API_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "api-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "api-overview", text: "API Overview" }],
  },
  {
    title: "Core Classes",
    defaultOpen: true,
    items: [
      { id: "api-class-playwright", text: "Playwright" },
      { id: "api-class-browser", text: "Browser" },
      { id: "api-class-browsercontext", text: "BrowserContext" },
      { id: "api-class-page", text: "Page" },
      { id: "api-class-locator", text: "Locator" },
      { id: "api-class-framelocator", text: "FrameLocator" },
      { id: "api-class-elementhandle", text: "ElementHandle" },
    ],
  },
  {
    title: "Assertions",
    defaultOpen: true,
    items: [
      { id: "api-class-locatorassertions", text: "LocatorAssertions" },
      { id: "api-class-pageassertions", text: "PageAssertions" },
      { id: "api-class-apiresponseassertions", text: "APIResponseAssertions" },
    ],
  },
  {
    title: "Network & Mocking",
    defaultOpen: false,
    items: [
      { id: "api-class-apirequestcontext", text: "APIRequestContext" },
      { id: "api-class-apiresponse", text: "APIResponse" },
      { id: "api-class-route", text: "Route" },
      { id: "api-class-request", text: "Request" },
      { id: "api-class-response", text: "Response" },
      { id: "api-class-websocket", text: "WebSocket" },
    ],
  },
  {
    title: "Input & Devices",
    defaultOpen: false,
    items: [
      { id: "api-class-keyboard", text: "Keyboard" },
      { id: "api-class-mouse", text: "Mouse" },
      { id: "api-class-touchscreen", text: "Touchscreen" },
    ],
  },
  {
    title: "Diagnostics & Tracing",
    defaultOpen: false,
    items: [
      { id: "api-class-tracing", text: "Tracing" },
      { id: "api-class-cdpsession", text: "CDPSession" },
      { id: "api-class-video", text: "Video" },
    ],
  },
];

export const API_DOCS_DETAILED: Record<string, DetailedDoc> = {
  "api-overview": {
    id: "api-overview",
    title: "Playwright API Reference Overview",
    category: "Overview",
    sourceUrl: "https://playwright.dev/docs/api/class-playwright",
    description: "Complete object-oriented class hierarchy: Browser, BrowserContext, Page, Locator, and Web-First Assertions.",
    sections: [
      {
        id: "hierarchy",
        heading: "Object-Oriented Architecture",
        paragraphs: [
          "Playwright structures automation into an explicit, isolated hierarchy:",
          "• **Playwright**: Entry point providing chromium, firefox, webkit browser types and device descriptors.\n• **Browser**: A browser process instance launched via `browserType.launch()`. Owns multiple BrowserContexts.\n• **BrowserContext**: An isolated incognito profile with its own cookies, cache, and storage.\n• **Page**: A single browser tab inside a BrowserContext.\n• **Locator**: The primary auto-waiting element abstraction.",
        ],
      },
    ],
  },

  "api-class-playwright": {
    id: "api-class-playwright",
    title: "Class: Playwright",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-playwright",
    description: "Playwright module entry point providing chromium, firefox, webkit browser instances and mobile device presets.",
    sections: [
      {
        id: "properties",
        heading: "Properties & Methods",
        paragraphs: [
          "Imported from `'playwright'` or `'@playwright/test'`:",
        ],
        codeBlocks: [
          {
            title: "Playwright Properties",
            language: "typescript",
            code: `import { chromium, firefox, webkit, devices } from 'playwright';

// Launch specific browser
const browser = await chromium.launch({ headless: true });

// Access device emulation presets
const iPhone = devices['iPhone 14 Pro'];
const context = await browser.newContext({ ...iPhone });`,
          },
        ],
      },
    ],
  },

  "api-class-browser": {
    id: "api-class-browser",
    title: "Class: Browser",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-browser",
    description: "Represents an active browser engine process. Spawns isolated BrowserContext sessions.",
    sections: [
      {
        id: "browser-methods",
        heading: "Core Browser Methods",
        paragraphs: ["Key methods available on `Browser` instances:"],
        table: {
          headers: ["Method", "Returns", "Description"],
          rows: [
            ["browser.newContext([options])", "Promise<BrowserContext>", "Creates a hermetic incognito browser context."],
            ["browser.newPage([options])", "Promise<Page>", "Convenience method creating a context and opening a tab."],
            ["browser.close()", "Promise<void>", "Terminates the browser process and all contexts."],
            ["browser.version()", "string", "Returns browser engine version."],
            ["browser.isConnected()", "boolean", "Checks if browser connection is active."],
          ],
        },
      },
    ],
  },

  "api-class-browsercontext": {
    id: "api-class-browsercontext",
    title: "Class: BrowserContext",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-browsercontext",
    description: "Isolated incognito browser session containing independent cookies, cache, local storage, and proxy settings.",
    sections: [
      {
        id: "context-methods",
        heading: "Key BrowserContext Methods",
        paragraphs: ["Manage isolated session boundaries and network interception:"],
        table: {
          headers: ["Method", "Returns", "Description"],
          rows: [
            ["context.newPage()", "Promise<Page>", "Creates a new tab inside this context."],
            ["context.cookies([urls])", "Promise<Cookie[]>", "Returns cookies matching specified URLs."],
            ["context.addCookies(cookies)", "Promise<void>", "Injects cookies into this context."],
            ["context.clearCookies()", "Promise<void>", "Clears all cookies in this context."],
            ["context.route(url, handler)", "Promise<void>", "Intercepts network requests for this context."],
            ["context.storageState([options])", "Promise<StorageState>", "Exports auth cookies and localStorage."],
            ["context.close()", "Promise<void>", "Closes this context and all child pages."],
          ],
        },
      },
    ],
  },

  "api-class-page": {
    id: "api-class-page",
    title: "Class: Page",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-page",
    description: "Primary interface to interact with a single tab, navigate URLs, listen to events, and query locators.",
    sections: [
      {
        id: "page-methods",
        heading: "Essential Page Methods",
        paragraphs: ["Actions and inspections on the active tab:"],
        table: {
          headers: ["Method", "Returns", "Description"],
          rows: [
            ["page.goto(url, [options])", "Promise<Response | null>", "Navigates to URL and waits for network commitment."],
            ["page.locator(selector)", "Locator", "Creates a locator for elements matching selector."],
            ["page.getByRole(role, [options])", "Locator", "Finds element by accessible ARIA role."],
            ["page.getByText(text, [options])", "Locator", "Finds element containing text content."],
            ["page.getByPlaceholder(text)", "Locator", "Finds input by placeholder attribute."],
            ["page.screenshot([options])", "Promise<Buffer>", "Captures a PNG or JPEG screenshot."],
            ["page.evaluate(fn, [arg])", "Promise<R>", "Executes JavaScript in page context."],
            ["page.waitForURL(urlOrRegExp)", "Promise<void>", "Waits until page URL matches expected pattern."],
            ["page.close()", "Promise<void>", "Closes this page tab."],
          ],
        },
      },
    ],
  },

  "api-class-locator": {
    id: "api-class-locator",
    title: "Class: Locator",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-locator",
    description: "Central Playwright abstraction with built-in auto-waiting, retrying, and strictness checks.",
    sections: [
      {
        id: "locator-actions",
        heading: "Locator Actions Matrix",
        paragraphs: [
          "Every action on a `Locator` automatically waits for visibility, stability, enabled state, and interactability:",
        ],
        table: {
          headers: ["Method", "Returns", "Description"],
          rows: [
            ["locator.click([options])", "Promise<void>", "Clicks element once actionability checks pass."],
            ["locator.fill(value)", "Promise<void>", "Clears input and types entire value atomically."],
            ["locator.press(key)", "Promise<void>", "Presses a keyboard key on focused element."],
            ["locator.check()", "Promise<void>", "Checks a checkbox or radio button."],
            ["locator.selectOption(values)", "Promise<string[]>", "Selects options in <select> dropdown."],
            ["locator.hover()", "Promise<void>", "Hovers cursor over element bounding box."],
            ["locator.textContent()", "Promise<string | null>", "Returns inner text of element."],
            ["locator.count()", "Promise<number>", "Returns count of matching elements."],
            ["locator.filter(options)", "Locator", "Narrows down matched elements by text or child locator."],
          ],
        },
      },
    ],
  },

  "api-class-framelocator": {
    id: "api-class-framelocator",
    title: "Class: FrameLocator",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-framelocator",
    description: "Seamlessly locate elements inside iframe or frame elements with auto-waiting.",
    sections: [
      {
        id: "frame-locating",
        heading: "Locating Elements inside Iframes",
        paragraphs: [
          "FrameLocator allows querying elements within nested iframes without manually retrieving frame handles:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Locate element inside iframe
const iframe = page.frameLocator('iframe#payment-frame');
await iframe.getByPlaceholder('Card number').fill('4242424242424242');
await iframe.getByRole('button', { name: 'Submit' }).click();`,
          },
        ],
      },
    ],
  },

  "api-class-elementhandle": {
    id: "api-class-elementhandle",
    title: "Class: ElementHandle",
    category: "Core Classes",
    sourceUrl: "https://playwright.dev/docs/api/class-elementhandle",
    description: "Legacy in-page DOM element pointer. Use Locator for modern tests instead.",
    sections: [
      {
        id: "elementhandle-note",
        heading: "Usage Recommendation",
        paragraphs: [
          "The use of `ElementHandle` is discouraged. Modern Playwright tests should use `Locator` instead, which eliminates flakiness through auto-retrying and dynamic DOM re-querying.",
        ],
      },
    ],
  },

  "api-class-locatorassertions": {
    id: "api-class-locatorassertions",
    title: "Class: LocatorAssertions",
    category: "Assertions",
    sourceUrl: "https://playwright.dev/docs/api/class-locatorassertions",
    description: "Web-first, auto-retrying expect matchers for Locator instances.",
    sections: [
      {
        id: "matchers-table",
        heading: "Web-First Locator Matchers",
        paragraphs: ["These assertions continuously retry until expected condition is met or timeout expires:"],
        table: {
          headers: ["Matcher", "Description"],
          rows: [
            ["await expect(locator).toBeVisible()", "Element is visible in DOM."],
            ["await expect(locator).toBeHidden()", "Element is hidden or removed from DOM."],
            ["await expect(locator).toBeEnabled()", "Element is enabled (not disabled)."],
            ["await expect(locator).toBeChecked()", "Checkbox or radio input is checked."],
            ["await expect(locator).toHaveText(expected)", "Element matches text content."],
            ["await expect(locator).toContainText(expected)", "Element contains substring text."],
            ["await expect(locator).toHaveValue(value)", "Form input matches value."],
            ["await expect(locator).toHaveCount(count)", "Locator matches exact element count."],
            ["await expect(locator).toHaveAttribute(name, val)", "Element matches specified attribute."],
          ],
        },
      },
    ],
  },

  "api-class-pageassertions": {
    id: "api-class-pageassertions",
    title: "Class: PageAssertions",
    category: "Assertions",
    sourceUrl: "https://playwright.dev/docs/api/class-pageassertions",
    description: "Auto-retrying assertions for Page title, URL, and visual screenshots.",
    sections: [
      {
        id: "page-matchers",
        heading: "Page-Level Matchers",
        paragraphs: [
          "• `await expect(page).toHaveTitle(titleOrRegExp)`: Asserts document title.\n• `await expect(page).toHaveURL(urlOrRegExp)`: Asserts browser URL.\n• `await expect(page).toHaveScreenshot([name])`: Compares page snapshot image against baseline screenshot.",
        ],
      },
    ],
  },

  "api-class-apiresponseassertions": {
    id: "api-class-apiresponseassertions",
    title: "Class: APIResponseAssertions",
    category: "Assertions",
    sourceUrl: "https://playwright.dev/docs/api/class-apiresponseassertions",
    description: "Web-first assertions for APIResponse instances returned by APIRequestContext.",
    sections: [
      {
        id: "api-matchers",
        heading: "API Response Matchers",
        paragraphs: [
          "• `await expect(response).toBeOK()`: Asserts status code is in range 200..299.",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `const response = await page.request.get('/api/users/1');
await expect(response).toBeOK();`,
          },
        ],
      },
    ],
  },

  "api-class-apirequestcontext": {
    id: "api-class-apirequestcontext",
    title: "Class: APIRequestContext",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-apirequestcontext",
    description: "Send direct HTTP(S) requests to APIs without launching browser tabs.",
    sections: [
      {
        id: "methods",
        heading: "HTTP Request Methods",
        paragraphs: [
          "Execute REST and GraphQL calls with automated cookie session sharing:",
        ],
        table: {
          headers: ["Method", "Returns", "Description"],
          rows: [
            ["request.get(url, [options])", "Promise<APIResponse>", "Sends HTTP GET request."],
            ["request.post(url, [options])", "Promise<APIResponse>", "Sends HTTP POST request."],
            ["request.put(url, [options])", "Promise<APIResponse>", "Sends HTTP PUT request."],
            ["request.delete(url, [options])", "Promise<APIResponse>", "Sends HTTP DELETE request."],
            ["request.patch(url, [options])", "Promise<APIResponse>", "Sends HTTP PATCH request."],
          ],
        },
      },
    ],
  },

  "api-class-apiresponse": {
    id: "api-class-apiresponse",
    title: "Class: APIResponse",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-apiresponse",
    description: "Represents HTTP response returned by APIRequestContext methods.",
    sections: [
      {
        id: "response-methods",
        heading: "Response Inspection Methods",
        paragraphs: [
          "• `response.status()`: Returns HTTP status code.\n• `response.json()`: Parses response body as JSON.\n• `response.text()`: Returns response body as UTF-8 string.\n• `response.headers()`: Returns map of response headers.",
        ],
      },
    ],
  },

  "api-class-route": {
    id: "api-class-route",
    title: "Class: Route",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-route",
    description: "Provides methods to inspect, fulfill, continue, or abort intercepted network requests.",
    sections: [
      {
        id: "route-actions",
        heading: "Interception Methods",
        paragraphs: [
          "• `route.fulfill([options])`: Mocks response with status, headers, and body.\n• `route.continue([options])`: Forwards request with optional modified headers/URL.\n• `route.abort([errorCode])`: Aborts request (e.g. 'failed', 'blockedbyclient').",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `await page.route('**/api/users', async route => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([{ id: 1, name: 'Alice' }]),
  });
});`,
          },
        ],
      },
    ],
  },

  "api-class-request": {
    id: "api-class-request",
    title: "Class: Request",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-request",
    description: "Represents an HTTP request dispatched by the page.",
    sections: [
      {
        id: "request-methods",
        heading: "Request Properties",
        paragraphs: [
          "• `request.url()`: Full request URL.\n• `request.method()`: HTTP verb (GET, POST, etc.).\n• `request.postDataJSON()`: Parsed JSON payload.\n• `request.headers()`: Request headers map.",
        ],
      },
    ],
  },

  "api-class-response": {
    id: "api-class-response",
    title: "Class: Response",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-response",
    description: "Represents an HTTP response received by the browser.",
    sections: [
      {
        id: "response-methods",
        heading: "Response Properties",
        paragraphs: [
          "• `response.url()`: Target URL.\n• `response.status()`: HTTP status number.\n• `response.ok()`: True if status is 200-299.\n• `response.body()`: Raw response buffer.",
        ],
      },
    ],
  },

  "api-class-websocket": {
    id: "api-class-websocket",
    title: "Class: WebSocket",
    category: "Network & Mocking",
    sourceUrl: "https://playwright.dev/docs/api/class-websocket",
    description: "Inspect and intercept WebSocket connection frames, messages, and closures.",
    sections: [
      {
        id: "websocket-events",
        heading: "Listening to WebSocket Traffic",
        paragraphs: [
          "Listen to bidirectional messages sent over WebSockets in real time:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `page.on('websocket', ws => {
  console.log(\`WebSocket opened: \${ws.url()}\`);
  ws.on('framereceived', frame => console.log('Received:', frame.payload));
  ws.on('framesent', frame => console.log('Sent:', frame.payload));
});`,
          },
        ],
      },
    ],
  },

  "api-class-keyboard": {
    id: "api-class-keyboard",
    title: "Class: Keyboard",
    category: "Input & Devices",
    sourceUrl: "https://playwright.dev/docs/api/class-keyboard",
    description: "Simulate low-level keyboard input events, key press sequences, and modifier combinations.",
    sections: [
      {
        id: "keyboard-methods",
        heading: "Keyboard Methods",
        paragraphs: [
          "• `page.keyboard.press('KeyA')`: Dispatches keydown, keypress, keyup.\n• `page.keyboard.down('Shift')`: Holds down modifier key.\n• `page.keyboard.insertText('text')`: Injects characters without dispatching key events.",
        ],
      },
    ],
  },

  "api-class-mouse": {
    id: "api-class-mouse",
    title: "Class: Mouse",
    category: "Input & Devices",
    sourceUrl: "https://playwright.dev/docs/api/class-mouse",
    description: "Low-level mouse movement, clicks, dragging, and wheel scrolling.",
    sections: [
      {
        id: "mouse-methods",
        heading: "Mouse Methods",
        paragraphs: [
          "• `page.mouse.move(x, y)`: Moves pointer.\n• `page.mouse.down()`: Presses mouse button.\n• `page.mouse.up()`: Releases mouse button.\n• `page.mouse.wheel(deltaX, deltaY)`: Dispatches wheel scroll events.",
        ],
      },
    ],
  },

  "api-class-touchscreen": {
    id: "api-class-touchscreen",
    title: "Class: Touchscreen",
    category: "Input & Devices",
    sourceUrl: "https://playwright.dev/docs/api/class-touchscreen",
    description: "Simulate mobile touch taps and gestures on touchscreen displays.",
    sections: [
      {
        id: "touch-methods",
        heading: "Touchscreen Methods",
        paragraphs: [
          "• `page.touchscreen.tap(x, y)`: Dispatches touchstart, touchend at coordinates.",
        ],
      },
    ],
  },

  "api-class-tracing": {
    id: "api-class-tracing",
    title: "Class: Tracing",
    category: "Diagnostics & Tracing",
    sourceUrl: "https://playwright.dev/docs/api/class-tracing",
    description: "Record execution traces with screenshots, snapshots, and sources for post-mortem analysis.",
    sections: [
      {
        id: "tracing-methods",
        heading: "Starting and Stopping Traces",
        paragraphs: [
          "Programmatically capture diagnostic archives for debugging:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `// Start tracing
await context.tracing.start({ screenshots: true, snapshots: true });

// Run your test steps
await page.goto('https://example.com');

// Stop and export archive
await context.tracing.stop({ path: 'trace.zip' });`,
          },
        ],
      },
    ],
  },

  "api-class-cdpsession": {
    id: "api-class-cdpsession",
    title: "Class: CDPSession",
    category: "Diagnostics & Tracing",
    sourceUrl: "https://playwright.dev/docs/api/class-cdpsession",
    description: "Communicate directly with the Chrome DevTools Protocol for low-level performance, profiling, and heap snapshots.",
    sections: [
      {
        id: "cdp-usage",
        heading: "Direct Chrome DevTools Protocol Access",
        paragraphs: [
          "Execute raw CDP commands in Chromium-based browsers:",
        ],
        codeBlocks: [
          {
            language: "typescript",
            code: `const client = await page.context().newCDPSession(page);
await client.send('Performance.enable');
const metrics = await client.send('Performance.getMetrics');
console.log(metrics);`,
          },
        ],
      },
    ],
  },

  "api-class-video": {
    id: "api-class-video",
    title: "Class: Video",
    category: "Diagnostics & Tracing",
    sourceUrl: "https://playwright.dev/docs/api/class-video",
    description: "Manage recorded video files of page execution sessions.",
    sections: [
      {
        id: "video-methods",
        heading: "Video Path and Delete",
        paragraphs: [
          "• `video.path()`: Returns filesystem path to recorded video file.\n• `video.delete()`: Deletes video recording file.",
        ],
      },
    ],
  },
};
