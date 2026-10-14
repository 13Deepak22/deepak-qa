import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const POSTMAN_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "postman-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "postman-overview", text: "Overview" }],
  },
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "postman-quickstart", text: "Installation & Setup" },
      { id: "postman-requests", text: "Building HTTP Requests" },
    ],
  },
  {
    title: "Core Concepts",
    defaultOpen: true,
    items: [
      { id: "postman-collections", text: "Collections & Runner" },
      { id: "postman-variables", text: "Variables & Scopes" },
      { id: "postman-scripts-tests", text: "Writing Tests & Assertions" },
    ],
  },
  {
    title: "Tooling & Automation",
    defaultOpen: false,
    items: [
      { id: "postman-newman-cli", text: "Newman CLI & Headless" },
      { id: "postman-mock-servers", text: "Mock Servers & Design" },
      { id: "postman-ci-cd", text: "CI/CD & Monitoring" },
    ],
  },
];

export const POSTMAN_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "postman-overview": {
    id: "postman-overview",
    title: "Introduction to Postman & API Platform",
    category: "Overview",
    sourceUrl: "https://learning.postman.com/docs/getting-started/overview/",
    description: "Postman is an industry-leading API development and automated testing platform that simplifies each step of the API lifecycle.",
    sections: [
      {
        id: "what-is-postman",
        heading: "What is Postman?",
        paragraphs: [
          "Postman is an enterprise-grade API platform used by over 30 million developers and 500,000 organizations worldwide to design, test, document, mock, and monitor APIs.",
          "It started as a popular REST client and has evolved into a complete API lifecycle platform supporting REST, GraphQL, gRPC, WebSocket, Webhook, and SOAP protocols.",
          "Postman enables QA and automation engineers to write powerful automated regression test suites using JavaScript, execute them in parallel, perform data-driven testing with CSV/JSON files, and integrate them directly into continuous delivery (CI/CD) pipelines with the Newman CLI.",
        ],
        callouts: [
          {
            type: "tip",
            title: "API Lifecycle Coverage",
            text: "Postman provides unified tooling for: Design (OpenAPI, AsyncAPI) → Prototyping (Mock Servers) → Testing (Assertions, Runner, Newman) → Documentation (Web Portals) → Monitoring (Cloud Schedulers, Alerting).",
          },
        ],
      },
      {
        id: "core-capabilities",
        heading: "Core Capabilities for QA & Test Automation",
        paragraphs: [
          "Postman offers specific high-impact capabilities built for quality assurance professionals:",
        ],
        table: {
          headers: ["Capability", "Description", "QA Advantage"],
          rows: [
            ["API Client", "Interactive request builder for REST, GraphQL, SOAP & gRPC", "Rapid manual exploratory testing with headers & auth"],
            ["Test Scripts", "BDD JavaScript assertions via Chai library (pm.test, pm.expect)", "Write rich regression assertions with zero boilerplate"],
            ["Collection Runner", "Sequential or data-driven execution of hundreds of requests", "Parameterize tests with CSV/JSON files at scale"],
            ["Variables & Environments", "Dynamic scopes (Global, Collection, Environment, Data, Local)", "Switch between Dev, Staging, and Production instantly"],
            ["Newman CLI", "Headless command-line runner for Node.js & Docker", "Run test collections inside GitHub Actions, Jenkins, GitLab"],
            ["Mock Servers", "Simulated cloud endpoints matching saved request examples", "Unblock frontend testing before backend implementation"],
            ["Monitors", "Scheduled cloud collection runs with health alerts", "Continuous production API uptime and latency tracking"],
          ],
        },
      },
      {
        id: "sandbox-architecture",
        heading: "Postman JavaScript Sandbox Architecture",
        paragraphs: [
          "Postman executes pre-request and test scripts inside an isolated Node.js / V8 JavaScript sandbox environment.",
          "The sandbox exposes the global pm object (Postman runtime API) along with popular utility libraries bundled out-of-the-box:",
          "• Lodash (_): Utility library for deep comparisons, array filtering, and transformations.",
          "• Cheerio: Fast HTML parser providing jQuery-like DOM traversal for HTML response inspection.",
          "• Crypto-JS: Cryptographic standards (MD5, SHA-256, HMAC, AES) for generating signatures and checksums.",
          "• Moment.js: Date formatting and parsing utility.",
          "• Ajv & tv4: High-performance JSON Schema validators to ensure response structural integrity.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. QUICKSTART & SETUP                                         */
  /* ------------------------------------------------------------- */
  "postman-quickstart": {
    id: "postman-quickstart",
    title: "Installation & Postman App Setup",
    category: "Getting Started",
    sourceUrl: "https://learning.postman.com/docs/getting-started/installation/install-app/",
    description: "Install Postman native desktop applications, configure the Postman Agent, and explore the core user interface.",
    sections: [
      {
        id: "installation-options",
        heading: "Installing the Postman Desktop App",
        paragraphs: [
          "Postman is available as a native standalone desktop app on macOS, Windows (64-bit & ARM64), and Linux. While Postman for Web is available in any browser, the Desktop App is strongly recommended for automation engineers because it overcomes CORS (Cross-Origin Resource Sharing) restrictions and directly accesses local network endpoints (e.g., localhost:8080).",
        ],
        codeBlocks: [
          {
            title: "Installation Commands",
            tabs: [
              {
                label: "Windows (winget)",
                language: "powershell",
                code: `# Install Postman via Windows Package Manager
winget install Postman.Postman

# Or via Chocolatey
choco install postman`,
              },
              {
                label: "macOS (Homebrew)",
                language: "bash",
                code: `# Install via Homebrew Cask
brew install --cask postman`,
              },
              {
                label: "Linux (Snap)",
                language: "bash",
                code: `# Install via Snap on Ubuntu / Debian
sudo snap install postman`,
              },
            ],
          },
        ],
      },
      {
        id: "navigating-interface",
        heading: "Navigating the Postman Interface",
        paragraphs: [
          "The Postman desktop interface is structured into three primary operational zones:",
          "1. Left Sidebar: Displays your Workspaces, Collections, Environments, Mock Servers, Monitors, and Request History.",
          "2. Request Builder (Center/Top): Configure HTTP method, URL, Query Params, Authorization headers, Request Body, Pre-request Scripts, and Test Assertions.",
          "3. Response Viewer (Center/Bottom): Displays HTTP status code, round-trip response time, payload size, pretty-formatted JSON/XML response, cookies, and the Test Results tab showing pass/fail status.",
        ],
        callouts: [
          {
            type: "note",
            title: "Postman Agent vs Cloud Agent",
            text: "When using Postman in the browser, install the lightweight Postman Desktop Agent to bypass browser CORS limitations and execute requests against private intranet or localhost services.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. BUILDING HTTP REQUESTS                                     */
  /* ------------------------------------------------------------- */
  "postman-requests": {
    id: "postman-requests",
    title: "Building & Sending HTTP Requests",
    category: "Getting Started",
    sourceUrl: "https://learning.postman.com/docs/sending-requests/create-requests/request-basics/",
    description: "Master HTTP methods, request bodies, query parameters, authentication schemes, and response inspection.",
    sections: [
      {
        id: "request-methods-url",
        heading: "Configuring Methods and URL Parameters",
        paragraphs: [
          "Postman supports all standard HTTP verbs: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.",
          "Query parameters entered in the Params tab are automatically URL-encoded and appended to the query string in the address bar (e.g., ?page=1&limit=20).",
          "Path variables can be defined with a colon prefix (e.g., https://api.example.com/users/:userId) and their values edited directly in the Params table.",
        ],
      },
      {
        id: "request-body-formats",
        heading: "Request Body Formats",
        paragraphs: [
          "When crafting POST, PUT, or PATCH requests, select the appropriate body encoding from the Body tab:",
          "• raw (JSON): The standard for REST APIs. Select 'JSON' in the rightmost dropdown to automatically set the Content-Type: application/json header.",
          "• form-data: Simulates HTML <form> submission with support for both text key-value pairs and multipart file uploads.",
          "• x-www-form-urlencoded: Standard URL-encoded key-value pairs for web authentication and OAuth token exchange.",
          "• binary: Send raw file streams (images, audio, PDFs, archives).",
          "• GraphQL: Dedicated editor with query syntax highlighting and JSON variables editor.",
        ],
        codeBlocks: [
          {
            title: "Example JSON Request Body",
            tabs: [
              {
                label: "Payload (JSON)",
                language: "json",
                code: `{
  "username": "qa_automation_lead",
  "email": "deepak@qa-engineering.io",
  "role": "QA_LEAD",
  "attributes": {
    "frameworks": ["Playwright", "Selenium", "Appium", "Postman"],
    "active": true
  }
}`,
              },
            ],
          },
        ],
      },
      {
        id: "authentication-schemes",
        heading: "Configuring Authentication",
        paragraphs: [
          "Postman automates authorization headers across all standard authentication protocols:",
          "• Bearer Token: Injects the Authorization: Bearer <token> header into requests automatically.",
          "• API Key: Injects custom key-value pairs into headers (e.g. X-API-Key) or query parameters.",
          "• Basic Auth: Encodes username and password into standard Base64 string (Authorization: Basic <base64>).",
          "• OAuth 2.0: Full interactive browser-based OAuth flow with automatic token refresh, token caching, and PKCE (Proof Key for Code Exchange) support.",
          "• Inherit auth from parent: Children requests in a collection or folder automatically inherit authentication settings from the parent folder.",
        ],
      },
      {
        id: "inspecting-responses",
        heading: "Inspecting Responses & Diagnostics",
        paragraphs: [
          "When a request completes, Postman displays rich diagnostic metrics:",
          "• Status: HTTP status code and message (e.g. 200 OK, 201 Created, 404 Not Found).",
          "• Time: Total round-trip latency broken down into DNS Lookup, TCP Handshake, SSL Handshake, Transfer Start (TTFB), and Download time.",
          "• Size: Exact byte size of response headers and response body.",
          "• Pretty / Raw / Preview: Tree-collapsible JSON syntax viewer, raw plaintext, or rendered HTML preview.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. COLLECTIONS & RUNNER                                       */
  /* ------------------------------------------------------------- */
  "postman-collections": {
    id: "postman-collections",
    title: "Collections & Collection Runner",
    category: "Core Concepts",
    sourceUrl: "https://learning.postman.com/docs/collections/running-collections/intro-to-collection-runs/",
    description: "Organize API endpoints, share common authorization, execute automated regression suites, and run data-driven tests.",
    sections: [
      {
        id: "what-is-a-collection",
        heading: "Understanding Postman Collections",
        paragraphs: [
          "A Postman Collection is an executable blueprint grouping related API requests, documentation, scripts, and tests into a unified, shareable artifact.",
          "Collections form the foundational building block for automated regression testing, mock servers, automated documentation, and CI/CD pipelines.",
          "You can organize requests inside nested Folders representing microservices, resource paths, or functional user journeys (e.g., Auth -> Cart -> Checkout -> Payment).",
        ],
      },
      {
        id: "collection-runner",
        heading: "The Collection Runner",
        paragraphs: [
          "The Postman Collection Runner executes all requests within a collection or folder in sequential order, validating test assertions across each step.",
          "Key configuration parameters:",
          "• Iterations: Number of times the entire collection sequence should execute.",
          "• Delay: Millisecond pause between consecutive requests to avoid rate limits.",
          "• Data File: Inject external CSV or JSON test data files for data-driven testing.",
          "• Keep variable values: Persist changes made to environment variables during the run.",
          "• Stop run if an error occurs: Halts execution immediately upon encountering an unhandled HTTP error or test failure.",
        ],
      },
      {
        id: "data-driven-testing",
        heading: "Data-Driven Testing with CSV & JSON",
        paragraphs: [
          "Data-driven testing allows QA engineers to execute the identical API request sequence against hundreds of test scenarios (positive, negative, boundary values) by feeding input data from external files.",
        ],
        codeBlocks: [
          {
            title: "Data File Formats",
            tabs: [
              {
                label: "data.json",
                language: "json",
                code: `[
  { "username": "admin_user", "expectedStatus": 200, "role": "admin" },
  { "username": "readonly_user", "expectedStatus": 200, "role": "viewer" },
  { "username": "banned_user", "expectedStatus": 403, "role": "none" },
  { "username": "invalid_user", "expectedStatus": 404, "role": "none" }
]`,
              },
              {
                label: "data.csv",
                language: "text",
                code: `username,expectedStatus,role
admin_user,200,admin
readonly_user,200,viewer
banned_user,403,none
invalid_user,404,none`,
              },
              {
                label: "Test Script (pm.*)",
                language: "javascript",
                code: `// Access iteration data row values via pm.iterationData
const expectedStatus = pm.iterationData.get("expectedStatus");
const expectedRole = pm.iterationData.get("role");

pm.test(\`Status code is \${expectedStatus}\`, function () {
    pm.response.to.have.status(expectedStatus);
});

pm.test("Response contains correct role", function () {
    const json = pm.response.json();
    pm.expect(json.role).to.eql(expectedRole);
});`,
              },
            ],
          },
        ],
      },
      {
        id: "workflow-control",
        heading: "Dynamic Workflow Control with postman.setNextRequest",
        paragraphs: [
          "By default, the Collection Runner executes requests in the top-down visual order defined in the collection.",
          "To implement conditional branching, loops, or skip steps based on runtime response data, use postman.setNextRequest():",
        ],
        codeBlocks: [
          {
            title: "Branching and Looping Example",
            tabs: [
              {
                label: "Conditional Flow",
                language: "javascript",
                code: `// In the Tests tab of 'Login Request'
const res = pm.response.json();

if (res.requiresTwoFactor) {
    // Jump directly to 2FA verification step
    postman.setNextRequest("Submit 2FA Code");
} else if (res.accountExpired) {
    // Jump to renew subscription
    postman.setNextRequest("Renew Subscription");
} else {
    // Continue normal flow
    postman.setNextRequest("Get User Profile");
}

// To terminate execution immediately at any point:
// postman.setNextRequest(null);`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. VARIABLES & SCOPES                                         */
  /* ------------------------------------------------------------- */
  "postman-variables": {
    id: "postman-variables",
    title: "Variables & Scopes Hierarchy",
    category: "Core Concepts",
    sourceUrl: "https://learning.postman.com/docs/sending-requests/variables/variables/",
    description: "Master Postman variable scopes (Global, Collection, Environment, Data, Local) and dynamic built-in mock variables.",
    sections: [
      {
        id: "variable-scopes-hierarchy",
        heading: "The 5 Variable Scopes Hierarchy",
        paragraphs: [
          "Variables allow you to store and reuse values across requests and scripts in Postman. If you change a value in one place, it updates across all referenced requests.",
          "Postman resolves variables according to a strict scope hierarchy, moving from broadest to narrowest:",
        ],
        table: {
          headers: ["Scope", "Precedence", "Lifetime", "Description & Usage"],
          rows: [
            ["Global", "1 (Broadest)", "Persistent", "Accessible across all collections and workspaces. Use for general constants."],
            ["Collection", "2", "Persistent", "Dedicated to a specific collection. Use for collection base URLs, mock IDs, auth."],
            ["Environment", "3", "Persistent", "Bound to the active environment (Dev, Staging, Prod). Use for hostnames, tokens."],
            ["Data", "4", "Iteration", "Supplied by external CSV/JSON files in Collection Runner / Newman."],
            ["Local", "5 (Narrowest)", "Request execution", "Created in pre-request or test scripts via pm.variables.set(). Highest precedence."],
          ],
        },
        callouts: [
          {
            type: "tip",
            title: "Precedence Rule",
            text: "If a variable with the same name exists in both Environment and Collection scopes, the Environment variable wins because it is narrower in scope.",
          },
        ],
      },
      {
        id: "referencing-variables",
        heading: "Referencing Variables in Requests & Scripts",
        paragraphs: [
          "• In UI fields (URL, Headers, Body, Auth): Wrap the variable name in double curly braces: {{baseUrl}}/api/v1/users",
          "• In JavaScript Scripts (Pre-request & Tests): Use the pm.environment, pm.collectionVariables, pm.globals, or pm.variables APIs.",
        ],
        codeBlocks: [
          {
            title: "Getting and Setting Variables in Scripts",
            tabs: [
              {
                label: "JavaScript (pm.*)",
                language: "javascript",
                code: `// Get variable (searches local -> data -> environment -> collection -> global)
const baseUrl = pm.variables.get("baseUrl");

// Set Environment Variable (persists across requests in active environment)
pm.environment.set("jwt_token", pm.response.json().token);

// Set Collection Variable (persists within collection)
pm.collectionVariables.set("lastUserId", "usr_99812");

// Set Global Variable (accessible everywhere)
pm.globals.set("companyId", "CORP-42");

// Clear variables when done
pm.environment.unset("jwt_token");`,
              },
            ],
          },
        ],
      },
      {
        id: "dynamic-variables",
        heading: "Dynamic Built-in Mock Variables",
        paragraphs: [
          "Postman includes over 100 built-in dynamic variables powered by Faker.js that generate realistic mock data on the fly. Reference them using {{$variableName}} anywhere in request URLs, headers, or body payloads.",
        ],
        table: {
          headers: ["Dynamic Variable", "Output Example", "Description"],
          rows: [
            ["{{$guid}} / {{$randomUUID}}", "c9a646d3-9c61-4cd9-bc14-b63e87ced5d6", "Random RFC-compliant UUID v4"],
            ["{{$timestamp}}", "1713098400", "Current Unix timestamp in seconds"],
            ["{{$isoTimestamp}}", "2026-10-14T10:15:30.000Z", "Current UTC ISO-8601 date timestamp"],
            ["{{$randomEmail}}", "deepak_qa99@example.com", "Randomized valid email address"],
            ["{{$randomFirstName}}", "Deepak", "Random first name"],
            ["{{$randomLastName}}", "Gupta", "Random last name"],
            ["{{$randomPhoneNumber}}", "+1-555-839-2918", "Randomized international phone number"],
            ["{{$randomInt}}", "428", "Random integer between 0 and 1000"],
            ["{{$randomPrice}}", "129.99", "Random commercial monetary price"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. WRITING TESTS & ASSERTIONS                                 */
  /* ------------------------------------------------------------- */
  "postman-scripts-tests": {
    id: "postman-scripts-tests",
    title: "Writing Tests & Assertions with pm.* API",
    category: "Core Concepts",
    sourceUrl: "https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/",
    description: "Write automated assertions using the BDD Chai assertion library, validate JSON schemas, and test response times.",
    sections: [
      {
        id: "script-execution-lifecycle",
        heading: "The Postman Script Execution Lifecycle",
        paragraphs: [
          "Postman scripts execute at two distinct points during every request lifecycle:",
          "1. Pre-request Script: Executes BEFORE the HTTP request is transmitted over the wire. Use it to compute dynamic timestamps, generate cryptographic signatures (HMAC), or refresh expired tokens.",
          "2. Test Script: Executes AFTER the HTTP response payload has been received back from the server. Use it to inspect status codes, assert response schemas, and extract values for subsequent requests.",
        ],
      },
      {
        id: "essential-assertions",
        heading: "Essential Assertion Patterns with pm.test & pm.expect",
        paragraphs: [
          "Postman testing uses the BDD syntax powered by the Chai Assertion Library. Test assertions are wrapped inside pm.test('description', function() { ... }).",
        ],
        codeBlocks: [
          {
            title: "Comprehensive Test Assertions Suite",
            tabs: [
              {
                label: "Tests Script",
                language: "javascript",
                code: `// 1. HTTP Status Code Assertions
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Successful status code family (2xx)", function () {
    pm.response.to.be.success; // 200, 201, 204
});

// 2. Response Time Performance SLA
pm.test("Response time is under 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// 3. Header Assertions
pm.test("Content-Type is JSON", function () {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

// 4. JSON Body Content Assertions
pm.test("Response payload validates expected properties", function () {
    const json = pm.response.json();
    
    // Exact value check
    pm.expect(json.status).to.eql("success");
    
    // Type validation
    pm.expect(json.userId).to.be.a("string");
    pm.expect(json.roles).to.be.an("array").that.includes("QA_LEAD");
    
    // Object property checks
    pm.expect(json.metadata).to.have.property("version");
    pm.expect(json.users).to.have.lengthOf.at.least(1);
});

// 5. Correlate and Save Token for Next Request
pm.test("Extract and store authentication token", function () {
    const json = pm.response.json();
    pm.expect(json.token).to.be.a("string").and.not.empty;
    pm.environment.set("authToken", json.token);
});`,
              },
            ],
          },
        ],
      },
      {
        id: "json-schema-validation",
        heading: "JSON Schema Validation with Ajv",
        paragraphs: [
          "Verifying individual fields is useful, but validating the entire structural contract of an API response prevents regressions when fields are renamed or types change.",
        ],
        codeBlocks: [
          {
            title: "JSON Schema Contract Test",
            tabs: [
              {
                label: "Schema Test (Ajv)",
                language: "javascript",
                code: `// Define JSON Schema standard contract
const userSchema = {
    type: "object",
    required: ["id", "username", "email", "isActive", "roles"],
    properties: {
        id: { type: "string" },
        username: { type: "string", minLength: 3 },
        email: { type: "string", format: "email" },
        isActive: { type: "boolean" },
        roles: {
            type: "array",
            items: { type: "string" }
        }
    }
};

pm.test("Response matches strict JSON schema contract", function () {
    const responseData = pm.response.json();
    pm.expect(tv4.validate(responseData, userSchema)).to.be.true;
});`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. NEWMAN CLI & HEADLESS                                      */
  /* ------------------------------------------------------------- */
  "postman-newman-cli": {
    id: "postman-newman-cli",
    title: "Newman CLI & Headless Execution",
    category: "Tooling & Automation",
    sourceUrl: "https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/",
    description: "Run Postman collections headlessly in terminal environments, generate HTML/JUnit reports, and execute within Docker containers.",
    sections: [
      {
        id: "what-is-newman",
        heading: "What is Newman?",
        paragraphs: [
          "Newman is the official, open-source command-line collection runner for Postman. Built on Node.js, it allows you to run and test Postman collections directly from the terminal, build servers, or continuous integration pipelines.",
          "Newman executes collections identically to the desktop Postman app, running pre-request scripts, evaluating test assertions, injecting environment variables, and producing detailed execution summaries.",
        ],
      },
      {
        id: "installing-running-newman",
        heading: "Installing & Running Newman",
        paragraphs: [
          "Install Newman globally via npm or run it via the official Docker image:",
        ],
        codeBlocks: [
          {
            title: "Newman Installation & Basic Run",
            tabs: [
              {
                label: "npm Install",
                language: "bash",
                code: `# Install Newman globally
npm install -g newman

# Verify installed version
newman -v

# Run exported collection
newman run ./collections/smoke-tests.json

# Run collection with environment file
newman run ./collections/smoke-tests.json -e ./environments/staging.json`,
              },
              {
                label: "Docker",
                language: "bash",
                code: `# Pull official Newman Docker image
docker pull postman/newman

# Run collection via Docker container
docker run -v $(pwd):/etc/newman -t postman/newman run /etc/newman/smoke-tests.json`,
              },
            ],
          },
        ],
      },
      {
        id: "reporters-htmlextra",
        heading: "Rich HTML Reporting with htmlextra",
        paragraphs: [
          "Newman supports multiple reporter formats simultaneously. The popular community reporter newman-reporter-htmlextra generates stunning, interactive HTML dashboards with request breakdowns, failure details, and visual charts.",
        ],
        codeBlocks: [
          {
            title: "Configure Reporters",
            tabs: [
              {
                label: "CLI & Reporters",
                language: "bash",
                code: `# Install the htmlextra reporter
npm install -g newman-reporter-htmlextra

# Run with CLI, JUnit XML (for CI test tracking), and HTMLExtra dashboard
newman run ./tests/api-suite.json \\
  -e ./env/production.json \\
  -r cli,junit,htmlextra \\
  --reporter-junit-export ./reports/junit-report.xml \\
  --reporter-htmlextra-export ./reports/dashboard.html \\
  --reporter-htmlextra-title "Deepak QA API Regression Dashboard" \\
  --bail`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "--bail Flag in CI",
            text: "Use the --bail flag in CI/CD pipelines to fail the job immediately upon encountering the first failed assertion, speeding up feedback loops.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. MOCK SERVERS & API DESIGN                                  */
  /* ------------------------------------------------------------- */
  "postman-mock-servers": {
    id: "postman-mock-servers",
    title: "Mock Servers & API Design",
    category: "Tooling & Automation",
    sourceUrl: "https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/",
    description: "Simulate backend APIs with Postman Mock Servers, configure response examples, and enable frontend and QA unblocking.",
    sections: [
      {
        id: "mock-servers-concept",
        heading: "Why Use Mock Servers?",
        paragraphs: [
          "In modern software development, frontend teams, mobile engineers, and QA automation engineers often need to build and verify tests before backend endpoints are deployed.",
          "Postman Mock Servers provide hosted, public or private HTTP endpoints that simulate real backend behavior by matching incoming requests against saved Examples in a collection.",
        ],
      },
      {
        id: "how-matching-works",
        heading: "Request Matching Algorithm",
        paragraphs: [
          "When a request hits your Mock Server URL (e.g. https://<mock-id>.mock.pstmn.io/users/123), Postman matches it using the following criteria:",
          "1. HTTP Method: GET, POST, PUT, DELETE.",
          "2. URL Path: Exact path and parameterized matches.",
          "3. Query Parameters: If query parameters are saved in the example.",
          "4. Request Headers: Optional header matching (e.g. x-mock-response-code: 404).",
          "5. Request Body: Matching payload contents for POST/PUT.",
        ],
      },
      {
        id: "mock-headers-control",
        heading: "Controlling Mocks with Request Headers",
        paragraphs: [
          "You can force the Mock Server to return specific response codes or simulate network conditions by sending special headers:",
          "• x-mock-response-code: Force a specific HTTP status code (e.g., 400, 401, 500).",
          "• x-mock-response-name: Force return of an example by its exact saved name.",
          "• x-mock-response-id: Return an example by its unique ID.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. CI/CD INTEGRATION & MONITORING                             */
  /* ------------------------------------------------------------- */
  "postman-ci-cd": {
    id: "postman-ci-cd",
    title: "CI/CD Integration & Cloud Monitoring",
    category: "Tooling & Automation",
    sourceUrl: "https://learning.postman.com/docs/collections/using-newman-cli/ci-plugins/",
    description: "Automate API tests in GitHub Actions, GitLab CI, and Jenkins, and configure continuous Postman Cloud Monitors.",
    sections: [
      {
        id: "github-actions-pipeline",
        heading: "GitHub Actions CI/CD Pipeline",
        paragraphs: [
          "Integrate automated API regression testing into your GitHub pull request workflows using Newman:",
        ],
        codeBlocks: [
          {
            title: ".github/workflows/api-tests.yml",
            tabs: [
              {
                label: "GitHub Actions",
                language: "yaml",
                code: `name: Automated API Regression Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  api-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Node.js LTS
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Newman & HTMLExtra Reporter
        run: npm install -g newman newman-reporter-htmlextra

      - name: Execute Postman API Tests
        run: |
          newman run ./tests/postman/api_collection.json \\
            -e ./tests/postman/staging_env.json \\
            -r cli,htmlextra \\
            --reporter-htmlextra-export ./reports/test-report.html \\
            --bail

      - name: Upload Test Report Artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: api-test-report
          path: ./reports/test-report.html`,
              },
            ],
          },
        ],
      },
      {
        id: "postman-monitors",
        heading: "Postman Cloud Monitors",
        paragraphs: [
          "Postman Monitors run scheduled collections in the cloud without requiring local hardware or CI triggers.",
          "• Schedule frequencies: Every 5 minutes, hourly, daily, or weekly.",
          "• Multi-region execution: Run tests across US East, US West, Europe, and Asia-Pacific to evaluate regional latency differences.",
          "• Automated alerts: Instant notifications via Email, Slack, Microsoft Teams, PagerDuty, or Webhooks upon test failure or high latency.",
        ],
      },
    ],
  },
};

