import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const MANUAL_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "manual-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "manual-overview", text: "Overview & ISTQB Principles" }],
  },
  {
    title: "Life Cycles & Testing Flow",
    defaultOpen: true,
    items: [
      { id: "manual-e2e-testing-flow", text: "End-to-End QA Testing Flow" },
      { id: "manual-sdlc-stlc", text: "SDLC vs STLC Life Cycles" },
      { id: "manual-verification-validation", text: "Verification vs Validation" },
      { id: "manual-agile-scrum", text: "Agile QA & Scrum Ceremonies" },
    ],
  },
  {
    title: "Testing Types Encyclopedia",
    defaultOpen: true,
    items: [
      { id: "manual-50-testing-types", text: "50+ Software Testing Types" },
      { id: "manual-smoke-sanity-regression", text: "Smoke, Sanity & Regression" },
      { id: "manual-exploratory-testing", text: "Exploratory & Ad-Hoc Testing" },
    ],
  },
  {
    title: "Test Design Techniques",
    defaultOpen: true,
    items: [
      { id: "manual-test-design-techniques", text: "BVA, ECP & Decision Tables" },
      { id: "manual-state-transition-usecase", text: "State Transition & Use Cases" },
    ],
  },
  {
    title: "Artifacts & Defect Management",
    defaultOpen: false,
    items: [
      { id: "manual-test-cases-artifacts", text: "Test Cases, Scenarios & RTM" },
      { id: "manual-defect-lifecycle", text: "Defect Life Cycle & Severity/Priority" },
      { id: "manual-bug-reporting-rca", text: "Writing Bug Reports & RCA" },
    ],
  },
  {
    title: "Modern Trending QA (2025/2026)",
    defaultOpen: false,
    items: [
      { id: "manual-trending-methodologies", text: "Shift-Left, Shift-Right & AI in QA" },
    ],
  },
];

export const MANUAL_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "manual-overview": {
    id: "manual-overview",
    title: "Manual Software Testing Fundamentals & Core Principles",
    category: "Overview",
    sourceUrl: "https://www.istqb.org/",
    description: "Manual testing is the foundational discipline of software quality assurance where human intuition, domain context, and methodical analysis uncover critical vulnerabilities and usability defects.",
    sections: [
      {
        id: "what-is-manual-testing",
        heading: "What is Manual Testing?",
        paragraphs: [
          "Manual testing is the process in which a human QA engineer executes test cases manually without the aid of automated tools or scripts. The tester interacts with the software application as an end-user would, observing behavior, identifying discrepancies between expected and actual results, and validating usability, security, and edge-case resilience.",
          "While automated testing excels at fast, repetitive regression checks, manual testing remains indispensable for exploratory discovery, user experience assessment, visual nuances, dynamic business workflows, and complex human-centric decision trees.",
          "Software Quality Assurance (SQA) encompasses more than finding bugs—it is a systematic discipline that ensures quality is engineered into every stage of product delivery, from requirements refinement to production release.",
        ],
        callouts: [
          {
            type: "tip",
            title: "The Golden Rule of Manual Testing",
            text: "Automation verifies what is already known to work; manual exploratory testing investigates the unknown and uncovers what nobody thought could break.",
          },
        ],
      },
      {
        id: "qa-vs-qc-vs-qe",
        heading: "Quality Assurance (QA) vs Quality Control (QC) vs Quality Engineering (QE)",
        paragraphs: [
          "In modern engineering teams, QA, QC, and QE are often conflated, but they represent distinct phases of quality management:",
        ],
        table: {
          headers: ["Dimension", "Quality Assurance (QA)", "Quality Control (QC)", "Quality Engineering (QE)"],
          rows: [
            ["Focus", "Process-oriented (Prevention)", "Product-oriented (Detection)", "Architecture & Enablement"],
            ["Objective", "Prevent defects from being introduced into the product.", "Identify and document existing defects in finished software.", "Build automated testing infrastructure, CI pipelines, and testability."],
            ["Timing", "Throughout the entire SDLC (Planning, Design, Refinement).", "During and after test execution on built artifacts.", "Continuous across dev loops, infrastructure, and delivery pipelines."],
            ["Activities", "Process audits, requirement reviews, code review guidelines.", "Manual test execution, regression runs, bug triage.", "Test frameworks, performance harnesses, synthetic monitoring."],
          ],
        },
      },
      {
        id: "testing-principles",
        heading: "The 7 Fundamental ISTQB Testing Principles",
        paragraphs: [
          "The International Software Testing Qualifications Board (ISTQB) outlines seven universal principles that govern all software testing:",
        ],
        subsections: [
          {
            id: "principle-1",
            heading: "1. Testing shows the presence of defects, not their absence",
            paragraphs: [
              "Testing can prove that defects exist in the software, but it can never prove that there are zero defects remaining. Even comprehensive test suites cannot guarantee 100% bug-free operation under every permutation of user environment.",
            ],
          },
          {
            id: "principle-2",
            heading: "2. Exhaustive testing is impossible",
            paragraphs: [
              "Testing every possible combination of inputs, preconditions, and timing is computationally intractable. Instead, QA engineers utilize risk analysis, test design techniques (ECP, BVA), and prioritization to achieve optimal test coverage.",
            ],
          },
          {
            id: "principle-3",
            heading: "3. Early testing saves time and money (Shift-Left)",
            paragraphs: [
              "Defects caught during requirements or design phase cost up to 100x less to rectify than defects discovered in staging or production environments.",
            ],
          },
          {
            id: "principle-4",
            heading: "4. Defect clustering",
            paragraphs: [
              "A small proportion of modules typically contains the majority of defects discovered during pre-release testing (the Pareto Principle: 80% of bugs reside in 20% of the codebase).",
            ],
          },
          {
            id: "principle-5",
            heading: "5. The Pesticide Paradox",
            paragraphs: [
              "Repeating the exact same tests over and over again will eventually cease finding new defects. To detect new defects, test cases and exploratory scenarios must be regularly reviewed, updated, and varied.",
            ],
          },
          {
            id: "principle-6",
            heading: "6. Testing is context dependent",
            paragraphs: [
              "An e-commerce site is tested very differently from a fintech banking core, an avionics flight-control system, or a medical diagnostic device. Testing strategies must match risk profiles and regulatory compliance demands.",
            ],
          },
          {
            id: "principle-7",
            heading: "7. Absence-of-errors fallacy",
            paragraphs: [
              "Finding and fixing defects is useless if the system built is unusable or fails to fulfill the actual business and customer needs. A bug-free application that does not solve the user's problem is still a failed product.",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. END-TO-END QA TESTING FLOW                                 */
  /* ------------------------------------------------------------- */
  "manual-e2e-testing-flow": {
    id: "manual-e2e-testing-flow",
    title: "Complete End-to-End QA Testing Flow & Release Lifecycle",
    category: "Life Cycles & Testing Flow",
    sourceUrl: "https://www.istqb.org/",
    description: "Step-by-step end-to-end testing workflow from sprint kickoff, 3 Amigos requirement review, test authoring, build deployment smoke checks, triage meetings, to production release sign-off.",
    sections: [
      {
        id: "e2e-flow-overview",
        heading: "The 10-Step Enterprise QA Testing Journey",
        paragraphs: [
          "In modern tech organizations, manual testing is not an isolated reactive activity; it is a structured, collaborative lifecycle spanning the entire feature delivery timeline:",
        ],
        codeBlocks: [
          {
            title: "End-to-End QA Execution Pipeline",
            language: "bash",
            code: `[1. Sprint Kickoff & 3 Amigos] ──► [2. Test Strategy & Estimation]
                │
                ▼
[3. Test Case Authoring & RTM] ──► [4. Test Data & Env Provisioning]
                │
                ▼
[5. Build Deployment & Smoke]  ──► [6. Functional & Exploratory Execution]
                │
                ▼
[7. Defect Logging & Triage]   ──► [8. Retesting & Regression Sweeps]
                │
                ▼
[9. Go / No-Go Decision Gate]  ──► [10. Prod Release Smoke & Sign-Off]`,
          },
        ],
      },
      {
        id: "step-by-step-breakdown",
        heading: "Detailed Breakdown of Each Lifecycle Stage",
        table: {
          headers: ["Stage", "Phase Name", "Key QA Activities", "Primary Deliverable / Milestone"],
          rows: [
            ["Stage 1", "3 Amigos & Requirements Refinement", "Meet with Product Manager and Tech Lead to review PRD and Figma wireframes; challenge assumptions; define edge cases and acceptance criteria.", "Finalized Acceptance Criteria (Given-When-Then), Definition of Ready (DoR) sign-off."],
            ["Stage 2", "Test Estimation & Planning", "Estimate QA effort in story points; determine scope (manual vs automated); identify dependencies and 3rd-party sandbox requirements.", "Sprint Test Plan, QA Capacity allocation."],
            ["Stage 3", "Test Case Authoring & RTM", "Draft detailed test cases with preconditions, test data, and expected outcomes; map cases to requirement IDs in RTM.", "Approved Test Cases in Jira/Xray/TestRail, Requirement Traceability Matrix (RTM)."],
            ["Stage 4", "Test Data & Env Readiness", "Seed test database accounts; configure mock payment gateways; verify staging environment stability and feature flags.", "Verified Testbed, Seeded Test User Personas."],
            ["Stage 5", "Build Deployment & Smoke Test", "When developers deploy a candidate build, execute a rapid 15-minute smoke pass to verify core navigation and login.", "Smoke Pass: Build Accepted OR Smoke Fail: Build Rejected immediately."],
            ["Stage 6", "Deep Functional Execution", "Execute positive, negative, boundary, and exploratory test charters across target browsers and mobile devices.", "Execution Run Logs, Execution Velocity metrics."],
            ["Stage 7", "Defect Logging & Triage", "Log crystal-clear reproducible bug reports; participate in daily Defect Triage meetings with Engineering Leads to assign Priority.", "Defect Triage Minutes, Assigned Bug Tickets."],
            ["Stage 8", "Retesting & Regression Sweeps", "Verify bug fixes marked 'Resolved'; execute confirmation retesting; trigger full regression suite to prevent regression bugs.", "Updated Defect Status (Verified/Closed), Regression Summary."],
            ["Stage 9", "Go / No-Go Decision Gate", "Review open defect counts against exit criteria; evaluate residual risks with Product and Engineering leadership.", "Go / No-Go Verdict, Release Risk Assessment."],
            ["Stage 10", "Production Release & Sign-Off", "Execute high-priority smoke sanity checks in Production immediately following release; publish QA Sign-Off report.", "QA Release Sign-Off Document, Post-Mortem RCA if needed."],
          ],
        },
      },
      {
        id: "defect-triage-meeting",
        heading: "Inside the Defect Triage Meeting",
        paragraphs: [
          "The Defect Triage Meeting is the heartbeat of release quality. When dozens of bugs are logged during execution, the triage team convenes daily to decide which bugs must be fixed immediately and which can be postponed:",
        ],
        table: {
          headers: ["Role", "Attendee", "Responsibility in Triage"],
          rows: [
            ["QA Lead / Engineer", "Defect Reporter", "Demonstrates reproduction steps, explains technical severity, clarifies impact on user experience."],
            ["Engineering Lead", "Dev Representative", "Estimates fix complexity, assesses architectural risk of hotfix, assigns bug to developer."],
            ["Product Manager", "Business Representative", "Determines business priority, decides whether bug blocks launch or can be deferred to next sprint."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. SDLC VS STLC                                               */
  /* ------------------------------------------------------------- */
  "manual-sdlc-stlc": {
    id: "manual-sdlc-stlc",
    title: "Software Development (SDLC) vs Testing Life Cycle (STLC)",
    category: "Life Cycles & Testing Flow",
    sourceUrl: "https://www.istqb.org/",
    description: "Master the parallel relationship between the software development lifecycle and the software testing lifecycle, including requirements analysis, test planning, environment configuration, and test closure.",
    sections: [
      {
        id: "sdlc-overview",
        heading: "What is the SDLC?",
        paragraphs: [
          "The Software Development Life Cycle (SDLC) is the structured framework defining the stages involved in the development of a software application from inception to decommission.",
          "Classic SDLC phases include: 1) Requirement Gathering & Analysis, 2) System Architecture & Design, 3) Implementation / Coding, 4) Testing, 5) Deployment, and 6) Maintenance & Operations.",
        ],
      },
      {
        id: "stlc-overview",
        heading: "What is the STLC?",
        paragraphs: [
          "The Software Testing Life Cycle (STLC) defines the specific sequence of activities conducted by the QA team during the testing process to ensure software quality requirements are met.",
        ],
        table: {
          headers: ["STLC Phase", "Entry Criteria", "Core Activities", "Deliverables / Exit Criteria"],
          rows: [
            ["1. Requirement Analysis", "PRD, User Stories, Architecture docs available", "Review SRS/user stories; identify gaps, ambiguities, testability constraints; create RTM draft.", "Requirement Traceability Matrix (RTM), Automation Feasibility Report."],
            ["2. Test Planning", "Requirements analyzed and signed off", "Scope definition, resource allocation, tool selection, risk assessment, schedule estimation.", "Comprehensive Test Plan Document, Effort Estimation matrix."],
            ["3. Test Design & Development", "Test Plan approved", "Write test scenarios, detailed test cases, test data creation, verification checklists.", "Reviewed & approved Test Cases, Test Data sets, updated RTM."],
            ["4. Test Environment Setup", "Architecture specs and hardware/cloud available", "Provision test servers, DB mocks, configure network, deploy latest build, verify smoke build.", "Working Test Environment, Smoke Test Execution Checklist."],
            ["5. Test Execution", "Environment ready & smoke test passed", "Execute test cases; log defects with steps and evidence; verify bug fixes; execute regression passes.", "Test Execution Report, Bug Reports in Jira/Bugzilla, Updated Defect Log."],
            ["6. Test Cycle Closure", "Exit criteria met (zero Blocker/Critical bugs)", "Evaluate exit criteria; analyze metrics (defect density, pass rate); document lessons learned.", "Test Summary Report, Quality Sign-Off Document, Lessons Learned."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. VERIFICATION VS VALIDATION                                 */
  /* ------------------------------------------------------------- */
  "manual-verification-validation": {
    id: "manual-verification-validation",
    title: "Verification vs Validation & Static Testing",
    category: "Life Cycles & Testing Flow",
    sourceUrl: "https://www.istqb.org/",
    description: "Understand the differences between Verification ('Are we building the product right?') and Validation ('Are we building the right product?'), plus static testing techniques.",
    sections: [
      {
        id: "verification-vs-validation-table",
        heading: "Verification vs Validation Matrix",
        table: {
          headers: ["Dimension", "Verification (Static)", "Validation (Dynamic)"],
          rows: [
            ["Guiding Question", "'Are we building the product right?'", "'Are we building the right product?'"],
            ["Execution Target", "Evaluates documents, designs, requirements, and uncompiled code.", "Evaluates executable running software build."],
            ["Techniques", "Reviews, Walkthroughs, Inspections, Static Code Analysis.", "Functional testing, System testing, UAT, Performance testing."],
            ["Objective", "Catch architectural flaws and requirement ambiguities early.", "Ensure software meets user needs and operational business requirements."],
            ["Performed By", "Developers, QA Engineers, Architects, Business Analysts.", "QA Engineers, Product Managers, End-Users, Stakeholders."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. AGILE QA & SCRUM                                           */
  /* ------------------------------------------------------------- */
  "manual-agile-scrum": {
    id: "manual-agile-scrum",
    title: "Agile QA, User Stories & Scrum Ceremonies",
    category: "Life Cycles & Testing Flow",
    sourceUrl: "https://www.scrum.org/",
    description: "How modern QA engineers participate in cross-functional Agile Scrum teams, refine user stories, establish acceptance criteria, and ensure quality at sprint speed.",
    sections: [
      {
        id: "scrum-ceremonies-table",
        heading: "QA Responsibilities Across Scrum Ceremonies",
        table: {
          headers: ["Ceremony", "Timing", "QA Contribution"],
          rows: [
            ["Sprint Planning", "Start of sprint", "Estimate QA effort; identify edge cases; verify acceptance criteria clarity."],
            ["Daily Standup", "Daily (15 mins)", "Report on tests executed, blockers encountered, bug verification status."],
            ["Backlog Refinement", "Mid-sprint", "Challenge requirements; evaluate testability; formulate Given-When-Then criteria."],
            ["Sprint Review / Demo", "End of sprint", "Demonstrate verified user journeys to stakeholders and collect UX feedback."],
            ["Sprint Retrospective", "End of sprint", "Analyze test bottlenecks, escaped defect root causes, and process improvements."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. 50+ SOFTWARE TESTING TYPES                                 */
  /* ------------------------------------------------------------- */
  "manual-50-testing-types": {
    id: "manual-50-testing-types",
    title: "The 50+ Software Testing Types Encyclopedia",
    category: "Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "Exhaustive taxonomy of 50+ software testing types categorized into Functional, Non-Functional, Structural, and Modern Trending execution models.",
    sections: [
      {
        id: "functional-testing-types",
        heading: "1. Functional Testing Types (25 Types)",
        paragraphs: [
          "Functional testing validates that software behavior complies strictly with business requirements, specifications, and user stories:",
        ],
        table: {
          headers: ["#", "Testing Type", "Core Definition & Primary Objective"],
          rows: [
            ["1", "Unit Testing", "Testing individual functions, methods, or isolated classes by developers before merging code."],
            ["2", "Integration Testing", "Testing the interaction and data flow between integrated modules, APIs, and databases."],
            ["3", "System Testing (E2E)", "Validating the complete, end-to-end integrated application against functional specifications."],
            ["4", "User Acceptance Testing (UAT)", "Validation conducted by business stakeholders or end-users to confirm real-world business fitness."],
            ["5", "Smoke Testing (Build Verification)", "Shallow high-level test executed on fresh builds to verify critical core paths before deeper testing."],
            ["6", "Sanity Testing", "Targeted test pass on specific changed modules or hotfixes to verify recent bug resolution."],
            ["7", "Regression Testing", "Re-running comprehensive test suites to ensure new code changes haven't broken existing features."],
            ["8", "Re-Testing (Confirmation)", "Executing the exact steps of a previously reported bug to verify the developer's fix."],
            ["9", "Interface Testing", "Testing data transmission across internal component interfaces (e.g., Web Server to Application Server)."],
            ["10", "Compatibility Testing", "Verifying application functionality across diverse OS versions, hardware, and screen sizes."],
            ["11", "Cross-Browser Testing", "Ensuring identical rendering and behavior across Chrome, Firefox, Safari, Edge, and mobile browsers."],
            ["12", "Cross-Platform Testing", "Testing responsive behavior across Windows, macOS, Linux, iOS, and Android ecosystems."],
            ["13", "Localization Testing (L10n)", "Validating regional date/time formats, currency symbols, and translated text nuances."],
            ["14", "Internationalization Testing (I18n)", "Verifying that the application architecture supports multi-language expansion without code refactoring."],
            ["15", "Accessibility Testing (A11y)", "Verifying WCAG 2.1 AA compliance: screen reader compatibility, keyboard navigation, color contrast."],
            ["16", "Exploratory Testing", "Simultaneous learning, test design, and test execution driven by tester intuition and curiosity."],
            ["17", "Ad-Hoc Testing", "Informal, unplanned testing executed without formal documentation or predefined test cases."],
            ["18", "Monkey Testing", "Supplying random, chaotic, senseless inputs to test resilience against crashes and unhandled exceptions."],
            ["19", "Gorilla Testing", "Subjecting one specific module or subsystem to relentless, intensive testing over extended durations."],
            ["20", "Boundary Value Analysis (BVA)", "Testing extreme boundary thresholds of input ranges (Min, Min-1, Max, Max+1)."],
            ["21", "Equivalence Class Partitioning (ECP)", "Partitioning input data into valid and invalid sets where any value represents the group."],
            ["22", "Decision Table Testing", "Testing complex business rule combinations using truth tables with multiple conditions and actions."],
            ["23", "State Transition Testing", "Validating software lifecycle state machines (e.g., Order: Placed -> Paid -> Shipped -> Delivered)."],
            ["24", "Database / SQL Testing", "Validating ACID compliance, stored procedures, data integrity, and schema migrations directly via SQL."],
            ["25", "API / Web Services Testing", "Verifying HTTP REST/GraphQL endpoints: status codes, response headers, JSON payloads, and auth tokens."],
          ],
        },
      },
      {
        id: "non-functional-testing-types",
        heading: "2. Non-Functional Testing Types (15 Types)",
        paragraphs: [
          "Non-functional testing evaluates how well the system performs its functions, covering performance, security, reliability, and usability:",
        ],
        table: {
          headers: ["#", "Testing Type", "Core Definition & Primary Objective"],
          rows: [
            ["26", "Load Testing", "Testing system response times and throughput under anticipated normal and peak user traffic."],
            ["27", "Stress Testing", "Testing system stability by exceeding maximum capacity until failure, verifying graceful recovery."],
            ["28", "Endurance / Soak Testing", "Applying continuous medium-to-heavy load over 24-72 hours to detect memory leaks and resource depletion."],
            ["29", "Spike Testing", "Subjecting the application to sudden, dramatic bursts of traffic (e.g., Black Friday flash sale)."],
            ["30", "Scalability Testing", "Evaluating the application's ability to scale up (more CPU/RAM) or scale out (more server nodes)."],
            ["31", "Volume Testing (Flood)", "Testing database performance and application response when huge volumes of data are populated."],
            ["32", "Penetration Testing (Pen Test)", "Ethical hacking simulating real-world cyberattacks to uncover exploitable vulnerabilities."],
            ["33", "Security Vulnerability Testing", "Scanning for OWASP Top 10 vulnerabilities: SQL Injection, XSS, CSRF, broken auth, sensitive data exposure."],
            ["34", "Usability Testing", "Assessing user-friendliness, cognitive load, intuitive navigation, and overall user satisfaction."],
            ["35", "Reliability Testing", "Verifying that the application functions without failure under specified conditions for a specified duration."],
            ["36", "Maintainability Testing", "Evaluating how easily code can be modified, updated, debugged, and enhanced over time."],
            ["37", "Disaster Recovery / Failover", "Testing automated failover to backup servers and data restoration procedures during datacenter outages."],
            ["38", "Compliance / Regulatory Testing", "Verifying strict adherence to industry regulations: GDPR, HIPAA, PCI-DSS, SOC 2."],
            ["39", "Resilience Testing", "Testing application resilience when underlying network latency, packet loss, or microservice failures occur."],
            ["40", "Portability Testing", "Evaluating the effort required to transfer the application from one cloud or hardware environment to another."],
          ],
        },
      },
      {
        id: "methodological-testing-types",
        heading: "3. Structural & Methodological Classifications (10 Types)",
        table: {
          headers: ["#", "Testing Type", "Core Definition & Primary Objective"],
          rows: [
            ["41", "Black-Box Testing", "Testing software functionality without any knowledge of internal code logic or architecture."],
            ["42", "White-Box Testing (Clear-Box)", "Testing based on analysis of internal code structure, control flow branches, and statement coverage."],
            ["43", "Grey-Box Testing", "Testing with partial knowledge of internal architecture (e.g., viewing DB schemas or API logs)."],
            ["44", "Alpha Testing", "Internal acceptance testing conducted by in-house cross-functional employees before public preview."],
            ["45", "Beta Testing (External)", "Field testing by actual customers in real-world environments before full market launch."],
            ["46", "Operational Acceptance Testing (OAT)", "Verifying backup/restore, monitoring alerts, failover, and operational procedures prior to prod rollout."],
            ["47", "Visual Regression Testing", "Pixel-by-pixel snapshot comparison to catch unintentional CSS styling and layout regressions."],
            ["48", "Data Migration Testing", "Validating that legacy data migrated to a new database or schema is 100% intact without corruption."],
            ["49", "ETL Testing", "Validating Extract, Transform, Load data pipelines in data warehouses for accuracy and completeness."],
            ["50", "Chaos Engineering / Testing", "Intentionally injecting failures into production (e.g. killing server pods) to test self-healing resilience."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. SMOKE, SANITY & REGRESSION                                 */
  /* ------------------------------------------------------------- */
  "manual-smoke-sanity-regression": {
    id: "manual-smoke-sanity-regression",
    title: "Smoke vs Sanity vs Regression Testing",
    category: "Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "Demystify the critical differences, execution triggers, and operational scopes of Smoke Testing, Sanity Testing, Regression Testing, and Re-testing.",
    sections: [
      {
        id: "comparison-table-smoke-sanity-regression",
        heading: "Core Comparison Matrix",
        table: {
          headers: ["Parameter", "Smoke Testing", "Sanity Testing", "Regression Testing", "Re-Testing (Confirmation)"],
          rows: [
            ["Objective", "Verify build stability to proceed with deeper testing.", "Verify specific bug fixes or minor code changes work without full pass.", "Ensure new code changes haven't broken existing features.", "Verify that a specific previously failed defect has been fixed."],
            ["Scope", "Broad and shallow (Critical happy paths across entire app).", "Narrow and deep (Focused strictly on changed components).", "Broad and thorough (Covers existing test suites and edge cases).", "Extremely narrow (Executes only the exact steps of the reported bug)."],
            ["Trigger", "Executed on new build deployment from CI/CD pipeline.", "Executed on minor build release containing hotfixes.", "Executed before major release, sprint cut-off, or code refactor.", "Executed immediately when developer marks bug as 'Fixed'."],
            ["Executed By", "Automated CI/CD suite or QA manual checklist (15-30 min).", "QA manual pass on targeted module (30-60 min).", "Automated regression suite + QA exploratory sweep.", "QA engineer who originally reported the defect."],
            ["Failure Result", "Build REJECTED immediately; returned to development.", "Build REJECTED or hotfix returned to developer.", "Defect logged; release delayed if critical regressions found.", "Defect REOPENED with updated logs and screenshots."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. EXPLORATORY & AD-HOC TESTING                               */
  /* ------------------------------------------------------------- */
  "manual-exploratory-testing": {
    id: "manual-exploratory-testing",
    title: "Exploratory & Ad-Hoc Testing: Charters & SBTM",
    category: "Testing Types Encyclopedia",
    sourceUrl: "https://www.satisfice.com/",
    description: "Master structured exploratory testing using Session-Based Test Management (SBTM), charter templates, heuristics, and mind-mapping techniques.",
    sections: [
      {
        id: "sbtm-charters",
        heading: "Session-Based Test Management (SBTM)",
        paragraphs: [
          "Exploratory testing is not random clicking; high-performing QA engineers structure exploratory sessions using timed charters (typically 60-90 minutes) with focused objectives:",
        ],
        codeBlocks: [
          {
            title: "Sample Exploratory Test Charter",
            language: "markdown",
            code: `### EXPLORATORY TEST CHARTER:
**Target Feature:** Checkout Payment Gateway Error Handling
**Timebox:** 75 Minutes
**Charter Goal:** Explore UPI and Credit Card payment failures to discover edge cases in session timeout, invalid CVV retries, and network disconnection recovery.

#### Heuristics / Techniques:
- Goldilocks Heuristic: Too much, too little, just right (order quantities).
- Zero, One, Many: Cart containing 0 items, 1 item, 999 items.
- Network throttle to 'Slow 3G' during payment token handoff.

#### Discovered Observations & Defects:
- BUG-204: Disconnecting Wi-Fi during 3DS redirect hangs indefinitely without error timeout.
- USABILITY: Entering expired card month shows error only after submitting full page.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. TEST DESIGN TECHNIQUES                                     */
  /* ------------------------------------------------------------- */
  "manual-test-design-techniques": {
    id: "manual-test-design-techniques",
    title: "Test Design Techniques: BVA, ECP & Decision Tables",
    category: "Test Design Techniques",
    sourceUrl: "https://www.istqb.org/",
    description: "Master Black-Box test design techniques: Boundary Value Analysis (2-value & 3-value), Equivalence Class Partitioning, and Decision Tables.",
    sections: [
      {
        id: "ecp-and-bva",
        heading: "Equivalence Class Partitioning (ECP) & Boundary Value Analysis (BVA)",
        paragraphs: [
          "ECP and BVA are mathematical techniques designed to achieve maximum test coverage with the minimum number of test cases.",
        ],
        table: {
          headers: ["Requirement", "Valid Equivalence Class", "Invalid Equivalence Classes", "BVA Test Values (2-Value BVA)"],
          rows: [
            ["Age between 18 and 60", "18 to 60 (e.g., 25, 40)", "< 18 (e.g., 10), > 60 (e.g., 75)", "17 (Invalid), 18 (Valid), 60 (Valid), 61 (Invalid)"],
            ["Password length 8 to 16 chars", "8 to 16 characters", "< 8 chars, > 16 chars", "7 chars (Invalid), 8 chars (Valid), 16 chars (Valid), 17 chars (Invalid)"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. STATE TRANSITION & USE CASES                              */
  /* ------------------------------------------------------------- */
  "manual-state-transition-usecase": {
    id: "manual-state-transition-usecase",
    title: "State Transition Testing & Use Case Analysis",
    category: "Test Design Techniques",
    sourceUrl: "https://www.istqb.org/",
    description: "Model complex system state machines, identify invalid transitions, and author comprehensive end-to-end Use Cases.",
    sections: [
      {
        id: "state-machine-example",
        heading: "Order Lifecycle State Transition Matrix",
        table: {
          headers: ["Current State", "Trigger Event", "Next State", "Valid / Invalid Transition"],
          rows: [
            ["DRAFT", "Add Item", "DRAFT", "VALID"],
            ["DRAFT", "Click Checkout", "PENDING_PAYMENT", "VALID"],
            ["PENDING_PAYMENT", "Payment Success", "PAID", "VALID"],
            ["PENDING_PAYMENT", "Payment Timeout", "EXPIRED", "VALID"],
            ["PAID", "Dispatch Package", "SHIPPED", "VALID"],
            ["SHIPPED", "Cancel Order", "N/A (Error displayed)", "INVALID (Cannot cancel shipped order directly)"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 11. TEST ARTIFACTS & RTM                                      */
  /* ------------------------------------------------------------- */
  "manual-test-cases-artifacts": {
    id: "manual-test-cases-artifacts",
    title: "Test Cases, Scenarios & Requirements Traceability Matrix (RTM)",
    category: "Artifacts & Defect Management",
    sourceUrl: "https://www.istqb.org/",
    description: "Learn IEEE 829 test case structure, authoring actionable test steps, and building a Requirements Traceability Matrix (RTM) to ensure 100% requirement coverage.",
    sections: [
      {
        id: "test-case-structure",
        heading: "Standard IEEE 829 Test Case Structure",
        table: {
          headers: ["Field", "Description", "Example Value"],
          rows: [
            ["Test Case ID", "Unique alphanumeric identifier", "TC_PAY_042"],
            ["Test Title", "Concise description of the verification goal", "Verify OTP authentication succeeds during UPI transaction"],
            ["Module", "Functional area within application", "Payments / UPI Gateway"],
            ["Preconditions", "Prerequisites required before beginning execution", "User is logged in; wallet balance > ₹500; valid phone linked."],
            ["Test Steps", "Sequential, unambiguous user actions", "1. Navigate to /checkout\n2. Select UPI Payment\n3. Enter valid VPA 'user@okaxis'\n4. Click 'Pay Now'\n5. Enter received 6-digit OTP '123456'\n6. Click 'Verify & Pay'"],
            ["Test Data", "Exact inputs utilized during test run", "VPA: testuser@upi, OTP: 123456, Amount: ₹499.00"],
            ["Expected Result", "Definitive system behavior per requirements", "Transaction displays 'Payment Successful'; green checkmark shown; SMS alert dispatched; balance deducted ₹499."],
            ["Actual Result", "Observed system behavior during execution", "As expected (Passed) / Error 500 displayed (Failed)"],
            ["Status", "Current execution verdict", "Pass / Fail / Blocked / Skipped"],
            ["Severity & Priority", "Impact on system vs business urgency", "Severity: Critical | Priority: High"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 12. DEFECT LIFE CYCLE & SEVERITY                              */
  /* ------------------------------------------------------------- */
  "manual-defect-lifecycle": {
    id: "manual-defect-lifecycle",
    title: "Defect Life Cycle & Severity vs Priority Matrix",
    category: "Artifacts & Defect Management",
    sourceUrl: "https://www.istqb.org/",
    description: "Master the complete Defect Life Cycle state transitions, and learn to classify defects precisely using the Severity vs Priority decision matrix.",
    sections: [
      {
        id: "severity-vs-priority",
        heading: "Severity vs Priority 4x4 Decision Matrix",
        paragraphs: [
          "**Severity** measures the technical impact of a defect on the software system (How bad is the technical failure?). Determined by: QA Engineer.",
          "**Priority** measures the business urgency of fixing the defect (How fast must this be deployed?). Determined by: Product Manager / Triage Committee.",
        ],
        table: {
          headers: ["Classification", "Definition", "Real-World Industry Example"],
          rows: [
            ["High Severity, High Priority", "System crashes or critical core functionality completely broken with no workaround; immediate business blocker.", "All users attempting to complete checkout receive a 500 Internal Server Error; revenue stream completely halted."],
            ["High Severity, Low Priority", "Catastrophic crash or data corruption occurs, but only under an extremely rare, obscure edge case rarely encountered.", "App crashes with a kernel panic if a user running Windows 8.1 with Bulgarian locale attempts to export a 50,000-row CSV file."],
            ["Low Severity, High Priority", "Minor technical defect with zero functional impairment, but causing severe brand damage or regulatory violation.", "The company name is misspelled as 'DeepakQAA' on the main login screen, or the CEO's title is displayed incorrectly on the public investor landing page."],
            ["Low Severity, Low Priority", "Cosmetic UI defect or minor inconvenience with an intuitive workaround.", "A secondary button has a 2px padding misalignment on mobile screens in landscape orientation."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 13. BUG REPORTING & RCA                                       */
  /* ------------------------------------------------------------- */
  "manual-bug-reporting-rca": {
    id: "manual-bug-reporting-rca",
    title: "Writing High-Impact Bug Reports & Root Cause Analysis (RCA)",
    category: "Artifacts & Defect Management",
    sourceUrl: "https://www.istqb.org/",
    description: "Learn to write crystal-clear, reproducible bug reports that developers love, and perform systematic Root Cause Analysis using the 5 Whys and Fishbone techniques.",
    sections: [
      {
        id: "bug-report-template",
        heading: "Production-Grade Bug Report Template",
        codeBlocks: [
          {
            title: "Sample High-Impact Defect Report",
            language: "markdown",
            code: `### BUG TITLE:
[Checkout] Applying coupon 'SUMMER50' with decimal cart value throws unhandled 500 error

- **Project:** DeepakQA Fintech E-Commerce
- **Environment:** Staging v2.14.0 (Build #841)
- **Browser/Device:** Chrome 124.0.6367.60 on macOS Sonoma 14.4
- **Severity:** High (S2) | Priority: High (P1)
- **Reporter:** Deepak (QA Engineer)

#### Preconditions:
1. User has at least 1 completed order.
2. Cart contains items totaling a float value ($49.99).

#### Steps to Reproduce:
1. Navigate to /cart and add item ($49.99).
2. Click 'Proceed to Checkout'.
3. Enter coupon code: SUMMER50
4. Click 'Apply Coupon'.

#### Expected Result:
- Coupon applies 50% discount ($24.99 deduction). Total updates to $25.00.

#### Actual Result:
- Page displays 500 Internal Server Error banner.
- Console error: TypeError: Cannot read properties of undefined (reading 'toFixed').`,
          },
        ],
      },
      {
        id: "root-cause-analysis",
        heading: "Root Cause Analysis (RCA): 5 Whys Case Study",
        paragraphs: [
          "1. **Why did the payment gateway fail?** Because authentication API keys expired at midnight.",
          "2. **Why did keys expire unexpectedly?** Merchant account was on annual renewal that wasn't renewed.",
          "3. **Why was it not renewed?** Renewal alert was sent to an unmonitored former employee inbox.",
          "4. **Why sent to former employee?** No centralized company alias or key vault was used.",
          "5. **Root Cause:** Lack of centralized secret management and automated renewal policy.",
          "**Corrective & Preventive Action (CAPA):** Migrate all production credentials to AWS Secrets Manager with 30-day Slack expiry alerts.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 14. MODERN TRENDING QA METHODOLOGIES                          */
  /* ------------------------------------------------------------- */
  "manual-trending-methodologies": {
    id: "manual-trending-methodologies",
    title: "Trending QA Methodologies: Shift-Left, Shift-Right & AI in Testing",
    category: "Modern Trending QA (2025/2026)",
    sourceUrl: "https://www.istqb.org/",
    description: "Explore cutting-edge QA trends: Shift-Left testing, Shift-Right Testing in Production, AI-assisted test engineering, Risk-Based Testing, and modern QA KPIs.",
    sections: [
      {
        id: "shift-left-vs-shift-right",
        heading: "Shift-Left Testing vs Shift-Right Testing",
        paragraphs: [
          "The modern software quality paradigm spans the entire delivery continuum, shifting both left into early discovery and right into live production:",
        ],
        table: {
          headers: ["Dimension", "Shift-Left Testing (Prevention)", "Shift-Right Testing (Detection in Prod)"],
          rows: [
            ["Phase in SDLC", "Pre-code: Requirements, Architecture, Static reviews.", "Post-deployment: Live Production environments."],
            ["Core Philosophy", "Catch bugs before code is even written; prevent defect creation.", "Validate real user traffic, fault tolerance, and live telemetry."],
            ["Techniques Used", "3 Amigos meetings, BDD Given-When-Then, SonarQube static analysis, developer unit tests.", "Testing in Production (TiP), Feature Flags (LaunchDarkly), Canary releases, Chaos Engineering."],
            ["Primary Metric", "Defect Prevention Rate, Requirements Defect Density.", "Mean Time To Detect (MTTD), Mean Time To Resolve (MTTR)."],
          ],
        },
      },
      {
        id: "ai-in-testing",
        heading: "Artificial Intelligence (AI) in Software Testing",
        paragraphs: [
          "AI and Large Language Models (LLMs) are transforming QA by supercharging tester efficiency rather than replacing human critical thinking:",
        ],
        table: {
          headers: ["AI QA Capability", "How It Operates", "Real-World Efficiency Gain"],
          rows: [
            ["AI Test Case Generation", "Analyzing PRDs and user stories to automatically generate positive, negative, and edge test scenarios.", "Reduces test design time by 60% while uncovering overlooked edge cases."],
            ["Synthetic Test Data Seeding", "Generating realistic, anonymized test fixtures (valid credit cards, international addresses, KYC docs) that preserve privacy.", "Instant compliant test data generation without exposing real customer PII."],
            ["Visual AI Diffing", "Using computer vision to detect visual regressions, layout shifts, and font clipping across devices.", "Replaces flaky pixel-diff tools with human-like perceptual validation."],
            ["Self-Healing Test Locators", "Algorithms that dynamically recalculate DOM selector weights when UI elements are updated.", "Reduces automated test maintenance overhead caused by minor markup changes."],
          ],
        },
      },
      {
        id: "risk-based-testing",
        heading: "Risk-Based Testing (RBT) Framework",
        paragraphs: [
          "When tight release schedules make running all tests impossible, Risk-Based Testing prioritizes execution based on **Risk Score = Probability of Failure × Business Impact**:",
        ],
        table: {
          headers: ["Risk Level", "Impact × Probability", "Testing Strategy & Priority"],
          rows: [
            ["Critical (High × High)", "Severe financial loss or regulatory fine; highly likely to occur.", "Priority 1: Exhaustive testing, multiple devices, negative edge cases, automation."],
            ["Major (High × Low / Low × High)", "Significant inconvenience or rare catastrophic edge case.", "Priority 2: Standard functional coverage and exploratory charter."],
            ["Minor (Low × Low)", "Cosmetic bug or minor visual flaw in rarely visited settings page.", "Priority 3: Lightweight smoke check; executed only if time permits."],
          ],
        },
      },
      {
        id: "qa-kpis-metrics",
        heading: "Top QA Key Performance Indicators (KPIs) & Metrics",
        table: {
          headers: ["Metric Name", "Formula / Measurement", "Target Industry Standard"],
          rows: [
            ["Defect Leakage Rate", "`[Bugs Found in Prod / Total Bugs Found] * 100`", "< 5% (Over 95% of defects caught pre-prod)"],
            ["Defect Density", "`Total Defects Found / Size of Feature (KLOC or Story Points)`", "< 1 defect per story point"],
            ["Test Execution Velocity", "`Total Executed Test Cases / Sprint Working Days`", "Consistent burn-up matching sprint velocity"],
            ["Automated Test Pass Rate", "`[Passed Automated Tests / Total Automated Tests] * 100`", "> 98% (Zero tolerance for flaky tests)"],
            ["Mean Time To Resolve (MTTR)", "`Total Downtime / Total Number of Outages`", "< 30 minutes for Critical S1 issues"],
          ],
        },
      },
    ],
  },
};
