import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const MANUAL_CATEGORIES: DocCategory[] = [
  {
    title: "1. Foundations & Core Principles",
    defaultOpen: true,
    items: [
      { id: "manual-overview", text: "What is Software Testing & 7 Principles" },
      { id: "manual-sdlc-models", text: "SDLC Models (Waterfall, V-Model, Agile)" },
      { id: "manual-stlc-lifecycle", text: "STLC 6 Phases & Quality Gates" },
      { id: "manual-verification-validation", text: "Verification vs Validation & Reviews" },
    ],
  },
  {
    title: "2. Agile QA & Team Workflows",
    defaultOpen: true,
    items: [
      { id: "manual-agile-scrum", text: "Agile Scrum QA & Sprint Ceremonies" },
      { id: "manual-user-stories-dor-dod", text: "User Stories, Gherkin & DoR vs DoD" },
      { id: "manual-defect-triage-signoff", text: "Defect Triage, TSR & QA Sign-Off" },
    ],
  },
  {
    title: "3. Testing Types Encyclopedia",
    defaultOpen: true,
    items: [
      { id: "manual-functional-testing", text: "Functional Testing (Unit, Integration, System, UAT)" },
      { id: "manual-non-functional-testing", text: "Non-Functional Testing (Perf, Usability, Compat)" },
      { id: "manual-smoke-sanity-regression", text: "Smoke, Sanity, Regression & Retesting" },
      { id: "manual-exploratory-testing", text: "Exploratory Testing, Charters & Heuristics" },
      { id: "manual-50-testing-types", text: "50+ Software Testing Types Taxonomy" },
    ],
  },
  {
    title: "4. Test Design Techniques",
    defaultOpen: false,
    items: [
      { id: "manual-test-design-techniques", text: "Boundary Value Analysis (BVA) & ECP" },
      { id: "manual-decision-tables", text: "Decision Table Testing & Rule Reduction" },
      { id: "manual-state-transition-usecase", text: "State Transition & Use Case Testing" },
      { id: "manual-error-guessing-attacks", text: "Error Guessing & QA Attack Catalog" },
    ],
  },
  {
    title: "5. Test Artifacts & Documentation",
    defaultOpen: false,
    items: [
      { id: "manual-test-plan-ieee829", text: "Master Test Plan (IEEE 829 Standard)" },
      { id: "manual-test-cases-rtm", text: "Writing Test Cases & RTM Traceability" },
      { id: "manual-qa-metrics-kpis", text: "QA Metrics, KPIs & Defect Density" },
    ],
  },
  {
    title: "6. Defect Management & RCA",
    defaultOpen: false,
    items: [
      { id: "manual-defect-lifecycle", text: "Defect Life Cycle & Severity vs Priority" },
      { id: "manual-bug-reporting", text: "Anatomy of a Production-Grade Bug Report" },
      { id: "manual-root-cause-analysis", text: "Root Cause Analysis (5 Whys & Fishbone)" },
    ],
  },
  {
    title: "7. Specialized Manual Testing",
    defaultOpen: false,
    items: [
      { id: "manual-api-testing-fundamentals", text: "Manual REST API Testing with Postman" },
      { id: "manual-database-sql-testing", text: "Database & SQL Verification for QA" },
      { id: "manual-mobile-testing", text: "Mobile App Testing (Android & iOS)" },
      { id: "manual-payment-fintech-testing", text: "Payment Gateway & FinTech QA" },
    ],
  },
  {
    title: "8. Advanced & Trending QA",
    defaultOpen: false,
    items: [
      { id: "manual-security-accessibility", text: "Security (OWASP) & Accessibility (WCAG)" },
      { id: "manual-shift-left-shift-right", text: "Shift-Left & Shift-Right in CI/CD" },
      { id: "manual-ai-in-qa", text: "Generative AI & Modern Quality Engineering" },
    ],
  },
];

export const MANUAL_DOCS: Record<string, DetailedDoc> = {
  /* ========================================================================= */
  /* CATEGORY 1: FOUNDATIONS & CORE PRINCIPLES                                 */
  /* ========================================================================= */
  "manual-overview": {
    id: "manual-overview",
    title: "What is Software Testing & The 7 ISTQB Core Principles",
    category: "1. Foundations & Core Principles",
    sourceUrl: "https://www.istqb.org/",
    description: "Start Manual Testing from absolute zero: core definitions, the true cost of software defects, historic engineering disasters, QA vs QC vs QE, and the 7 fundamental principles of testing.",
    sections: [
      {
        id: "what-is-software-testing",
        heading: "What is Software Testing?",
        paragraphs: [
          "Software Testing is a systematic process of executing a software application with the intent of finding defects, verifying that it meets specified requirements, and validating that it satisfies end-user needs and business goals.",
          "Testing is not merely 'clicking buttons until something breaks'—it is an empirical investigation that provides stakeholders with objective information regarding the quality, security, performance, and risk profile of the software product.",
          "In modern engineering teams, manual testing provides human intuition, contextual reasoning, heuristic domain exploration, and qualitative usability assessment that automated scripts cannot replicate.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Core QA Philosophy",
            text: "Automated tests verify that the code still does what it was programmed to do; manual exploratory testing discovers whether the system actually fulfills the real-world human mission.",
          },
        ],
      },
      {
        id: "cost-of-bugs",
        heading: "The Economics of Quality: The 1-10-100 Defect Cost Rule",
        paragraphs: [
          "A foundational law of software engineering is that the cost to detect and repair a defect increases exponentially as the software progresses through the life cycle stages:",
        ],
        table: {
          headers: ["Phase Detected", "Relative Cost Multiplier", "Typical Repair Activity", "Business Impact"],
          rows: [
            ["Requirements Phase", "1x ($100)", "Clarifying a user story or Figma mock with PM", "Zero code rewritten, negligible delay"],
            ["Architecture & Design", "3x - 5x ($500)", "Adjusting database schema or API contract", "Minor documentation and model update"],
            ["Development / Coding", "10x ($1,000)", "Developer debugging unit tests locally", "A few hours of developer time"],
            ["System Testing (QA)", "30x - 50x ($5,000)", "Logging Jira defect, retesting build, triage", "Regression testing cycle required"],
            ["Production Release", "100x - 1,000x+ ($100,000+)", "Emergency hotfix, rollbacks, customer support, legal liability, churn", "Reputational damage, financial loss, SLA breach"],
          ],
        },
      },
      {
        id: "historic-failures",
        heading: "Historic Software Catastrophes Caused by Missing Tests",
        paragraphs: [
          "History demonstrates why thorough quality assurance is essential to technological civilization:",
          "1. Ariane 5 Flight 501 (1996): A 64-bit floating point number was converted into a 16-bit signed integer without overflow validation. The resulting exception destroyed a $370 million spacecraft 37 seconds after launch.",
          "2. Knight Capital Trading Glitch (2012): Dead, obsolete test code was repurposed on 7 servers while an 8th was missed. When activated, the rogue code executed millions of erroneous buy orders, losing $440 million in 45 minutes and bankrupting the firm.",
          "3. Therac-25 Radiation Tragedy (1985-1987): A race condition in the software controlling radiation therapy machines delivered lethal radiation doses to patients due to missing concurrency boundary testing.",
        ],
      },
      {
        id: "qa-vs-qc-vs-qe",
        heading: "QA vs QC vs QE: Understanding the Distinct Roles",
        paragraphs: [
          "Although frequently used interchangeably, Quality Assurance (QA), Quality Control (QC), and Quality Engineering (QE) serve distinct objectives:",
        ],
        table: {
          headers: ["Attribute", "Quality Assurance (QA)", "Quality Control (QC)", "Quality Engineering (QE)"],
          rows: [
            ["Primary Focus", "Process-oriented (Prevention)", "Product-oriented (Detection)", "Architecture & Enablement"],
            ["Key Question", "'Are we following the right processes to prevent bugs?'", "'Did we find all the existing bugs in this build?'", "'Can we engineer tools and pipelines for continuous quality?'"],
            ["Timing", "Proactive throughout SDLC planning & design", "Reactive during and after test execution on built code", "Continuous across infrastructure, CI/CD, and test harnesses"],
            ["Core Tasks", "Process audits, PR reviews, requirement refinement, standardizing DoR", "Executing manual test runs, logging Jira tickets, smoke testing", "Building automated frameworks, synthetic monitoring, load harnesses"],
          ],
        },
      },
      {
        id: "7-principles-testing",
        heading: "The 7 Fundamental Principles of Testing (ISTQB Standard)",
        paragraphs: [
          "Every professional tester must master these 7 foundational tenets established by the International Software Testing Qualifications Board (ISTQB):",
          "1. Testing shows the presence of defects, not their absence: Testing reduces the probability of undiscovered defects remaining in the software, but even if no defects are found, it is never proof of 100% correctness.",
          "2. Exhaustive testing is impossible: Testing all combinations of inputs and preconditions is mathematically intractable for non-trivial systems. Instead, testers apply risk assessment, Equivalence Partitioning, and Boundary Value Analysis.",
          "3. Early testing saves time and money (Shift-Left): Static testing activities (requirement reviews, user story refinements) should start as early as possible in the life cycle.",
          "4. Defect clustering (Pareto Principle): A small number of modules usually contain most of the defects discovered during pre-release testing (approx. 80% of defects originate from 20% of modules).",
          "5. Beware of the pesticide paradox: If the same tests are repeated over and over, eventually the same set of test cases will no longer find any new defects. Test cases must be regularly reviewed, updated, and supplemented with exploratory testing.",
          "6. Testing is context dependent: Testing a high-frequency banking payment system requires vastly different risk modeling, security rigor, and compliance checks than testing an internal marketing blog.",
          "7. Absence-of-errors is a fallacy: Fixing 99% of bugs does not guarantee the success of a system if the built system does not fulfill user requirements or business value.",
        ],
      },
    ],
  },

  "manual-sdlc-models": {
    id: "manual-sdlc-models",
    title: "Software Development Life Cycle (SDLC) Models Deep Dive",
    category: "1. Foundations & Core Principles",
    sourceUrl: "https://www.istqb.org/",
    description: "Comprehensive breakdown of SDLC phases and comparative analysis of Waterfall, V-Model, Iterative, Spiral, and Agile Scrum delivery models.",
    sections: [
      {
        id: "what-is-sdlc",
        heading: "What is the Software Development Life Cycle (SDLC)?",
        paragraphs: [
          "The Software Development Life Cycle (SDLC) is a structured framework that outlines the sequential and iterative phases required to conceive, design, build, test, deploy, and maintain an enterprise software product.",
          "The 6 standard phases include:",
          "1. Requirement Gathering & Analysis: Business analysts and product managers gather customer requirements and produce Software Requirement Specifications (SRS) or PRDs.",
          "2. System Design & Architecture: Architects define technical stack, database schemas, microservice topologies, and API contracts.",
          "3. Implementation / Coding: Software engineers write code according to the architecture designs.",
          "4. Testing & Verification: QA engineers execute verification and validation activities to ensure conformance and stability.",
          "5. Deployment: Release of the software to staging, UAT, and production environments.",
          "6. Maintenance & Monitoring: Monitoring production metrics, applying security patches, and fixing runtime issues.",
        ],
      },
      {
        id: "v-model",
        heading: "The V-Model: Direct Mapping Between Dev & QA",
        paragraphs: [
          "The V-Model (Verification and Validation Model) explicitly associates every development phase with a corresponding testing level, demonstrating that test planning starts simultaneously with requirement gathering:",
        ],
        table: {
          headers: ["Development Phase (Left Wing)", "Corresponding Testing Phase (Right Wing)", "Primary Objective"],
          rows: [
            ["Business Requirement Analysis", "User Acceptance Testing (UAT)", "Validate software against original customer business goals"],
            ["System Requirement Specs (SRS)", "System Testing", "Verify end-to-end functionality, security, and performance"],
            ["High-Level Architecture Design", "Integration Testing", "Verify interfaces and data flow between integrated modules"],
            ["Low-Level Design (Class / DB)", "Unit Testing", "Verify individual methods, algorithms, and class logic"],
            ["Coding (Apex of the V)", "Static Code Analysis / Peer Review", "Verify code syntax, linting, and internal logic standards"],
          ],
        },
      },
      {
        id: "sdlc-models-comparison",
        heading: "Waterfall vs V-Model vs Agile Scrum: Architectural Comparison",
        paragraphs: [
          "Understanding when to apply each model is an essential skill for QA leadership:",
        ],
        table: {
          headers: ["Criterion", "Waterfall Model", "V-Model", "Agile Scrum"],
          rows: [
            ["Workflow Structure", "Strictly linear and sequential", "Rigid parallel V-shape (Dev vs QA)", "Iterative 1-2 week sprint increments"],
            ["Requirement Flexibility", "Extremely rigid; change requests are expensive", "Rigid; requirements locked early", "High; backlogs continuously refined"],
            ["When QA Starts", "Late in the cycle after coding completes", "Early in parallel planning, but execution is late", "Continuous from Day 1 in every sprint"],
            ["Feedback Loop", "Months or years until working software", "Long feedback cycles until system stage", "Continuous feedback at end of every sprint"],
            ["Best Suited For", "Fixed-scope aerospace, medical device firmware", "Safety-critical banking and defense systems", "Modern web, mobile apps, SaaS, and FinTech"],
          ],
        },
      },
    ],
  },

  "manual-stlc-lifecycle": {
    id: "manual-stlc-lifecycle",
    title: "Software Testing Life Cycle (STLC) 6 Detailed Phases & Quality Gates",
    category: "1. Foundations & Core Principles",
    sourceUrl: "https://www.istqb.org/",
    description: "Master the 6 formal stages of the Software Testing Life Cycle (STLC) with detailed entry criteria, activities, deliverables, and exit criteria for each quality gate.",
    sections: [
      {
        id: "what-is-stlc",
        heading: "What is the Software Testing Life Cycle (STLC)?",
        paragraphs: [
          "The Software Testing Life Cycle (STLC) is a structured sequence of specific testing activities executed by QA professionals to ensure that software quality goals are systematically met.",
          "Unlike SDLC which encompasses the entire product creation, STLC focuses exclusively on quality verification and validation phases.",
          "Every STLC phase operates under strict Quality Gates: an Entry Criteria (prerequisites required to start) and an Exit Criteria (deliverables required before advancing).",
        ],
      },
      {
        id: "stlc-6-phases",
        heading: "The 6 Formal STLC Phases Breakdown",
        paragraphs: [
          "The standard STLC flow proceeds through 6 distinct stages:",
        ],
        table: {
          headers: ["Phase", "Entry Criteria", "Key Activities", "Deliverables / Exit Criteria"],
          rows: [
            ["1. Requirement Analysis", "SRS document, PRD, or User Story with acceptance criteria", "Analyze requirements, identify ambiguities, assess testability, define scope", "Requirement Traceability Matrix (RTM draft), QA clarification questions"],
            ["2. Test Planning", "Finalized requirements, architecture overview", "Estimate test effort, resource staffing, tool selection, risk analysis, schedule", "Master Test Plan document, Risk Assessment Matrix, Effort Estimation"],
            ["3. Test Case Development", "Approved Test Plan, finalized UI mocks (Figma)", "Draft test scenarios, detailed test cases with preconditions and steps, test data seeding", "Approved Test Cases, Test Data sets, Updated RTM mapping"],
            ["4. Test Environment Setup", "Hardware/server specs, test architecture diagram", "Deploy staging servers, configure test databases, seed test accounts, execute smoke test", "Operational Test Environment, Smoke Test Passed Sign-off"],
            ["5. Test Execution", "Environment ready, test cases reviewed, build deployed", "Execute functional test cases, log defect tickets in Jira, retest bug fixes, run regression", "Test Execution Log, Defect Reports, Daily Execution Status Reports"],
            ["6. Test Cycle Closure", "Testing completed, all P1/P2 defects closed or formally deferred", "Analyze test metrics, evaluate Defect Removal Efficiency (DRE), conduct retrospective", "Test Summary Report (TSR), Production QA Sign-Off Certificate, Lessons Learned"],
          ],
        },
      },
      {
        id: "quality-gates",
        heading: "Quality Gates: Entry vs Exit Criteria in Action",
        paragraphs: [
          "Quality gates prevent defective artifacts from leaking downstream:",
          "Example: Exit Criteria for STLC Phase 5 (Test Execution) before a Production Release:",
          "1. 100% of planned Critical and High priority test cases executed.",
          "2. Overall test pass rate is >= 98%.",
          "3. Zero open Critical (P1) or High (P2) severity defects.",
          "4. All deferred P3/P4 defects have written sign-off from Product Management and Engineering Lead.",
          "5. Full automated smoke test suite passing in staging with zero flakiness.",
        ],
      },
    ],
  },

  "manual-verification-validation": {
    id: "manual-verification-validation",
    title: "Verification vs Validation & Static Testing Techniques",
    category: "1. Foundations & Core Principles",
    sourceUrl: "https://www.istqb.org/",
    description: "Deep dive into Static vs Dynamic testing, the differences between Verification and Validation, and formal peer review methodologies (Walkthroughs, Technical Reviews, Inspections).",
    sections: [
      {
        id: "verification-vs-validation",
        heading: "Verification vs Validation: The Core Distinction",
        paragraphs: [
          "Barry Boehm famously summarized this distinction into two intuitive questions:",
          "Verification: 'Are we building the product right?' — Focuses on evaluating artifacts (requirements, designs, code) to ensure they comply with predefined standards and specifications. Code is not executed.",
          "Validation: 'Are we building the right product?' — Focuses on evaluating the actual running software to ensure it satisfies real user needs, business workflows, and customer expectations. Code is executed.",
        ],
        table: {
          headers: ["Dimension", "Verification (Static)", "Validation (Dynamic)"],
          rows: [
            ["Nature", "Static evaluation without code execution", "Dynamic execution on running software"],
            ["Target", "Documents, PRDs, architecture diagrams, code reviews", "Compiled binaries, web pages, APIs, mobile apps"],
            ["Who Performs", "Developers (code review), QA (requirement review), BAs", "QA engineers, UAT testers, end users"],
            ["Methods", "Inspections, Walkthroughs, Desk-checking, Linters", "Functional testing, Performance testing, Regression testing"],
            ["Output", "Review comments, design flaws caught early", "Bug reports, test execution logs, failure traces"],
          ],
        },
      },
      {
        id: "formal-review-types",
        heading: "Static Testing Review Types (Informal, Walkthrough, Technical, Inspection)",
        paragraphs: [
          "Static testing is the most cost-effective defect prevention technique in software engineering. The 4 formal review types include:",
          "1. Informal Review: An undocumented peer check where two engineers sit together or review a pull request without formal protocol.",
          "2. Walkthrough: An author-led review meeting where the author explains the document/code step-by-step to gather constructive feedback and build consensus.",
          "3. Technical Review: A peer group of qualified technical experts analyzes the technical design or architectural viability against engineering standards.",
          "4. Inspection (Fagan Inspection): The most formal, rigorous review methodology governed by defined roles (Moderator, Author, Reader, Scribe, Inspector). Involves formal entry criteria, metric collection (defects per page), and strict exit criteria.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 2: AGILE QA & TEAM WORKFLOWS                                     */
  /* ========================================================================= */
  "manual-agile-scrum": {
    id: "manual-agile-scrum",
    title: "Agile Scrum QA Framework & Sprint Ceremonies",
    category: "2. Agile QA & Team Workflows",
    sourceUrl: "https://www.scrum.org/",
    description: "How high-performing manual QA engineers operate within Agile Scrum teams: ceremonies, 3 Amigos collaborations, capacity estimations, and sprint cadence.",
    sections: [
      {
        id: "qa-role-in-agile",
        heading: "The Modern QA Engineer in an Agile Scrum Pod",
        paragraphs: [
          "In traditional Waterfall teams, QA was an isolated phase at the end of the project. In modern Agile Scrum, QA engineers are embedded directly inside cross-functional engineering pods alongside Product Managers, Designers, and Developers.",
          "The QA's mission shifts from a policing gatekeeper to an enabler of quality, advocating for testability, edge cases, and user safety from Day 1 of the sprint.",
        ],
      },
      {
        id: "scrum-ceremonies-qa",
        heading: "The 5 Scrum Ceremonies & QA Responsibilities",
        paragraphs: [
          "Every Agile ceremony requires specific QA inputs and preparation:",
        ],
        table: {
          headers: ["Scrum Ceremony", "Timing & Duration", "QA Responsibilities & Inputs", "Deliverables"],
          rows: [
            ["1. Backlog Refinement", "Weekly / Mid-sprint (1 hr)", "Analyze upcoming user stories, challenge ambiguities, identify missing edge cases, highlight third-party dependencies", "Clear Acceptance Criteria, QA complexity story points"],
            ["2. Sprint Planning", "First day of sprint (1-2 hrs)", "Estimate QA execution effort, commit to sprint testing capacity, plan test data requirements", "QA sub-tasks broken down with realistic hour estimates"],
            ["3. Daily Standup", "Daily morning (15 min)", "State: 1) What was tested yesterday, 2) What is being validated today, 3) Any environment or PR blockers", "Immediate blocker resolution, alignment with developers"],
            ["4. Sprint Review & Demo", "Final day of sprint (1 hr)", "Demonstrate verified acceptance criteria on staging, showcase edge case resilience to stakeholders", "Stakeholder sign-off, live feature validation"],
            ["5. Sprint Retrospective", "After sprint review (1 hr)", "Identify QA bottlenecks (e.g. stories dumped on last 2 days), discuss escaped bugs, refine DoR/DoD", "Actionable continuous improvement items for next sprint"],
          ],
        },
      },
      {
        id: "three-amigos",
        heading: "The Three Amigos Collaboration",
        paragraphs: [
          "The Three Amigos is a collaborative workshop held before coding begins, uniting three essential perspectives:",
          "1. Business / Product Perspective (The 'What' and 'Why'): Defines business value and expected user outcome.",
          "2. Development Perspective (The 'How'): Identifies architectural implementation, database impacts, and technical constraints.",
          "3. Quality Assurance Perspective (The 'What If'): Introduces edge cases, error conditions, security considerations, and negative paths.",
          "Outcome: High-quality user stories with zero ambiguous requirements before a developer writes a single line of code.",
        ],
      },
    ],
  },

  "manual-user-stories-dor-dod": {
    id: "manual-user-stories-dor-dod",
    title: "User Stories, Acceptance Criteria, Gherkin & DoR vs DoD",
    category: "2. Agile QA & Team Workflows",
    sourceUrl: "https://cucumber.io/docs/gherkin/",
    description: "How to deconstruct user stories, write bulletproof Gherkin acceptance criteria (Given-When-Then), and enforce Definition of Ready (DoR) and Definition of Done (DoD).",
    sections: [
      {
        id: "user-story-anatomy",
        heading: "Anatomy of an Agile User Story",
        paragraphs: [
          "A user story is a lightweight description of a feature told from the perspective of the person who desires the new capability.",
          "Standard User Story Template:",
          "As a [specific persona/user role],\nI want to [perform an action/trigger a capability],\nSo that [I achieve a specific business benefit or outcome].",
          "Example: 'As a verified mobile banking customer, I want to transfer funds via UPI using the payee's phone number, so that I can complete peer-to-peer payments instantly without entering bank IFSC details.'",
        ],
      },
      {
        id: "gherkin-acceptance-criteria",
        heading: "Writing Acceptance Criteria in Gherkin Syntax",
        paragraphs: [
          "Acceptance criteria define the exact boundary conditions under which a user story is considered functionally complete. Gherkin (Given-When-Then) provides an unambiguous standard:",
          "1. Given [initial context / system precondition]",
          "2. When [user performs an action or event occurs]",
          "3. Then [expected observable system outcome]",
          "4. And [additional assertion or side effect]",
        ],
        codeBlocks: [
          {
            title: "Gherkin Acceptance Criteria Example: Insufficient Balance",
            language: "gherkin",
            code: `Scenario: UPI Transfer fails when account balance is insufficient
  Given the user is logged into the mobile banking app with Account #9876
  And the current available balance is ₹1,500.00
  When the user initiates a UPI transfer of ₹2,000.00 to "merchant@upi"
  And confirms the transfer with a valid 6-digit MPIN
  Then the system should reject the transaction immediately
  And display the error message "Transaction Failed: Insufficient Funds"
  And the available balance should remain ₹1,500.00 with zero deduction
  And an entry should be logged in the audit ledger with status "FAILED_INSUFFICIENT_FUNDS"`,
          },
        ],
      },
      {
        id: "dor-vs-dod",
        heading: "Definition of Ready (DoR) vs Definition of Done (DoD)",
        paragraphs: [
          "DoR and DoD are the two most critical quality gates in an Agile team:",
        ],
        table: {
          headers: ["Attribute", "Definition of Ready (DoR) - Entrance Gate", "Definition of Done (DoD) - Exit Gate"],
          rows: [
            ["Purpose", "Ensures a story is clear and actionable before development starts", "Ensures a feature is production-releasable before sprint closes"],
            ["Ownership", "Product Manager & QA lead", "Entire cross-functional engineering pod"],
            ["Typical Criteria", "1. User story follows standard Persona format.\n2. Figma UI/UX mocks attached and approved.\n3. Acceptance criteria defined in Given-When-Then.\n4. API contracts and payload schemas documented.\n5. Test data requirements and test accounts identified.\n6. Story points estimated.", "1. Code written and peer-reviewed (minimum 1 approval).\n2. Unit test coverage >= 80% passing in CI.\n3. All functional test cases executed and passed.\n4. Zero open Critical or High severity defects.\n5. Tested on target mobile devices and browsers.\n6. API documentation and release notes updated."],
          ],
        },
      },
    ],
  },

  "manual-defect-triage-signoff": {
    id: "manual-defect-triage-signoff",
    title: "Defect Triage Meetings, Test Summary Reports & QA Sign-Off",
    category: "2. Agile QA & Team Workflows",
    sourceUrl: "https://www.istqb.org/",
    description: "Run effective defect triage meetings, construct comprehensive Test Summary Reports (TSR), evaluate residual release risk, and issue formal QA Sign-Off certificates.",
    sections: [
      {
        id: "defect-triage",
        heading: "The Defect Triage Meeting: Roles & Decision Tree",
        paragraphs: [
          "A Defect Triage Meeting is a regular forum (typically daily during release sprints) where newly discovered bugs are reviewed, prioritized, and assigned.",
          "Core Attendees:",
          "1. QA Lead: Presents the bug, reproduction steps, severity, and user impact.",
          "2. Engineering Lead: Assesses technical feasibility, code complexity, and regression blast radius.",
          "3. Product Manager: Decides business urgency and whether the issue blocks production release.",
        ],
        table: {
          headers: ["Triage Outcome", "Condition Trigger", "Action Required"],
          rows: [
            ["Fix Immediately", "Critical/High blocker preventing core user journey", "Developer assigned instantly; hotfix prioritized in current sprint"],
            ["Defer to Next Sprint", "Medium/Low issue with clear workaround; fix too risky for current release", "Logged into backlog with agreed target milestone"],
            ["Working as Designed", "Discrepancy is intentional behavior per latest PRD", "Closed with explanation citing approved specification"],
            ["Duplicate", "Same root cause already logged in existing Jira ticket", "Linked to parent ticket and closed as duplicate"],
            ["Cannot Reproduce", "Bug cannot be triggered with provided steps and logs", "Assigned back to QA for further network traces/video evidence"],
          ],
        },
      },
      {
        id: "test-summary-report",
        heading: "The Test Summary Report (TSR) Architecture",
        paragraphs: [
          "The Test Summary Report is the formal document submitted by QA at the conclusion of a test cycle summarizing testing results, metrics, and residual risks.",
          "Standard Sections of a Production TSR:",
          "1. Executive Summary & Release Scope: Brief overview of features validated in this release.",
          "2. Test Execution Metrics: Total planned test cases, executed, passed, failed, blocked (% pass rate).",
          "3. Defect Analysis: Total bugs logged, breakdown by severity and priority, resolution status.",
          "4. Environment & Platform Coverage: Specific devices, browser engines, and OS builds verified.",
          "5. Residual Risks & Known Limitations: Documented minor issues deferred to subsequent releases.",
          "6. Formal Sign-Off Recommendation: Unconditional GO, Conditional GO (with mitigations), or NO-GO.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 3: TESTING TYPES ENCYCLOPEDIA                                    */
  /* ========================================================================= */
  "manual-functional-testing": {
    id: "manual-functional-testing",
    title: "Functional Testing Hierarchy: Unit, Integration, System, Acceptance",
    category: "3. Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "Detailed analysis of the 4 hierarchical levels of functional testing: Unit Testing, Integration Testing architectures, System Testing, and Acceptance Testing (Alpha/Beta/UAT).",
    sections: [
      {
        id: "functional-testing-overview",
        heading: "What is Functional Testing?",
        paragraphs: [
          "Functional testing is a black-box and gray-box testing discipline that validates whether each software feature behaves in strict accordance with the functional requirement specifications.",
          "It answers the fundamental question: 'Does the application execute the specified business task when supplied with valid and invalid inputs?'",
        ],
      },
      {
        id: "four-testing-levels",
        heading: "The 4 Levels of Functional Testing",
        paragraphs: [
          "Testing is structured hierarchically from microscopic code units to macroscopic customer journeys:",
        ],
        table: {
          headers: ["Testing Level", "Scope & Target", "Primary Executor", "Techniques & Focus"],
          rows: [
            ["1. Unit Testing", "Individual functions, isolated methods, single components", "Software Developers (paired with QA)", "Mocking dependencies, branch coverage, assert return values"],
            ["2. Integration Testing", "Interfaces and data interaction between integrated modules/services", "Developers & QA Engineers", "Top-Down (stubs), Bottom-Up (drivers), Sandwich, Contract testing"],
            ["3. System Testing", "The completely integrated software application end-to-end", "QA Engineering Team", "Validates SRS specs, UI workflows, database persistence, security, third-party APIs"],
            ["4. Acceptance Testing (UAT)", "Final verification against customer business needs", "Business Stakeholders, Beta Testers, End Users", "Alpha testing (internal simulated), Beta testing (external real), Operational Acceptance"],
          ],
        },
      },
      {
        id: "integration-approaches",
        heading: "Integration Testing Architectural Approaches",
        paragraphs: [
          "When integrating multiple microservices or modules, QA teams employ specific integration strategies:",
          "1. Big Bang Integration: All modules are connected simultaneously and tested in a single pass. Disadvantage: Pinpointing the root cause of failures is extremely difficult.",
          "2. Top-Down Integration: Higher-level modules are integrated first, while lower-level modules are simulated using 'Stubs' (dummy modules that return hardcoded data).",
          "3. Bottom-Up Integration: Lower-level modules (utility classes, database connectors) are tested first using 'Drivers' (scripts that call the module) before integrating upward.",
          "4. Sandwich / Hybrid Integration: Combines top-down and bottom-up approaches around a central functional core.",
        ],
      },
    ],
  },

  "manual-non-functional-testing": {
    id: "manual-non-functional-testing",
    title: "Non-Functional Testing: Performance, Usability, Accessibility & Compatibility",
    category: "3. Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "Explore the critical non-functional testing dimensions that define software quality: performance, usability, accessibility (WCAG), compatibility, and internationalization.",
    sections: [
      {
        id: "what-is-non-functional",
        heading: "What is Non-Functional Testing?",
        paragraphs: [
          "While functional testing verifies WHAT the software does, non-functional testing verifies HOW WELL the software executes under various operational conditions.",
          "An application can have 100% of functional test cases passing, but if it takes 15 seconds to load a checkout page or crashes when 50 users connect simultaneously, it is a production failure.",
        ],
      },
      {
        id: "core-non-functional-types",
        heading: "Key Non-Functional Testing Categories",
        paragraphs: [
          "Essential non-functional areas manual QA engineers must evaluate:",
        ],
        table: {
          headers: ["Testing Type", "Core Objective", "Primary Metrics & Criteria", "Example Scenario"],
          rows: [
            ["Performance Testing", "Measure speed, responsiveness, and resource utilization", "Page load time < 2s, API p99 latency < 300ms, CPU/Memory footprint", "Checking page rendering under simulated 3G network throttling in DevTools"],
            ["Usability Testing", "Assess user-friendliness, cognitive load, and UX flow", "Task completion rate, error frequency, System Usability Scale (SUS)", "Observing whether first-time users can complete signup in under 60 seconds"],
            ["Compatibility Testing", "Verify consistent behavior across environments", "Visual consistency across Chromium, Safari, Firefox, Android, iOS", "Verifying table rendering across 320px mobile viewport vs 1440px desktop"],
            ["Accessibility Testing", "Ensure system is usable by people with disabilities", "WCAG 2.2 Level AA compliance, color contrast 4.5:1, keyboard navigable", "Navigating the entire checkout funnel using only the Tab and Enter keys"],
            ["Internationalization (I18n)", "Verify readiness for multiple languages and locales", "UTF-8 encoding, currency formatting (₹ vs $), date format (DD/MM vs MM/DD)", "Testing German translation with 30% longer words to ensure zero UI overflow"],
          ],
        },
      },
    ],
  },

  "manual-smoke-sanity-regression": {
    id: "manual-smoke-sanity-regression",
    title: "Smoke vs Sanity vs Regression vs Retesting Matrix",
    category: "3. Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "Clear and definitive comparison between Smoke, Sanity, Regression, and Retesting, complete with triggers, scope, timing, and real-world execution examples.",
    sections: [
      {
        id: "comparative-overview",
        heading: "The Definitive Comparison Matrix",
        paragraphs: [
          "Confusing Smoke, Sanity, and Regression testing is one of the most common mistakes in software testing. Here is the authoritative breakdown:",
        ],
        table: {
          headers: ["Dimension", "Smoke Testing (BVT)", "Sanity Testing", "Retesting", "Regression Testing"],
          rows: [
            ["Also Known As", "Build Verification Test (BVT)", "Tester's Acceptance Test", "Defect Verification", "Side-Effect Testing"],
            ["Purpose", "Verify overall build stability before accepting for detailed testing", "Verify that a specific bug fix or new module works as expected", "Verify that a specific reported defect is genuinely fixed", "Verify that new code changes did not break existing working features"],
            ["Scope", "Broad & Shallow (Covers critical paths of all modules)", "Narrow & Deep (Covers only the modified component)", "Microscopic (Covers only the exact failed test step)", "Broad & Deep (Covers unchanged adjacent modules)"],
            ["When Triggered", "On every new deployment/build into QA environment", "After receiving a minor bug-fix release or patch", "Immediately upon developer marking a Jira bug 'Fixed'", "Prior to release, or after merging major feature PRs"],
            ["Typical Execution Time", "15 - 30 minutes", "30 - 60 minutes", "5 - 10 minutes", "Several hours to days (prime automation target)"],
            ["Consequence of Failure", "Reject build immediately; send back to developers", "Reject specific release build; do not proceed with regression", "Reopen the original Jira bug with new failure logs", "Block production release; log high-priority regression bug"],
          ],
        },
      },
      {
        id: "regression-strategies",
        heading: "Regression Testing Selection Strategies",
        paragraphs: [
          "As codebases grow to thousands of test cases, running every single test for every minor change is inefficient. QA teams apply three regression selection strategies:",
          "1. Retest All: Running 100% of the regression test suite. Safest approach, but resource-intensive; typically reserved for major version releases or framework upgrades.",
          "2. Selective Regression: Selecting test cases based on module blast radius analysis (analyzing git commit diffs to identify which downstream components share dependencies).",
          "3. Risk-Based Regression: Prioritizing test cases based on Business Criticality and Failure Likelihood (e.g. payment checkout and authentication are tested every release; FAQ page formatting is tested less frequently).",
        ],
      },
    ],
  },

  "manual-exploratory-testing": {
    id: "manual-exploratory-testing",
    title: "Exploratory Testing, Charters & Heuristic Cheat Sheets",
    category: "3. Testing Types Encyclopedia",
    sourceUrl: "https://www.satisfice.com/",
    description: "Master the art of Session-Based Test Management (SBTM), writing effective test charters, and applying James Bach and Michael Bolton's heuristic cheat sheets (SFDPO, FEW HICCUPS).",
    sections: [
      {
        id: "what-is-exploratory-testing",
        heading: "What is Exploratory Testing?",
        paragraphs: [
          "Cem Kaner and James Bach define exploratory testing as 'an approach to software testing that emphasizes the personal freedom and responsibility of the individual tester to continually optimize the quality of his or her work by treating test-related learning, test design, test execution, and test result interpretation as mutually supportive activities that run in parallel throughout the project.'",
          "Exploratory testing is NOT chaotic, unstructured 'monkey clicking'—it is rigorous, hypothesis-driven scientific investigation guided by charters, heuristics, and deep domain models.",
        ],
      },
      {
        id: "sbtm-charters",
        heading: "Session-Based Test Management (SBTM) & Charters",
        paragraphs: [
          "To provide visibility and structure to exploratory testing, teams use Session-Based Test Management (SBTM):",
          "1. Charter: A clear, timeboxed mission statement outlining what to explore, with what tools, and looking for what risks.",
          "2. Timebox: An uninterrupted session of 60 to 90 minutes dedicated exclusively to the charter.",
          "3. Session Log: Structured notes documenting setup, bugs found, questions raised, and test ideas.",
          "4. Debrief: A 10-minute review between the tester and QA lead to discuss findings.",
        ],
        codeBlocks: [
          {
            title: "Production Test Charter Example",
            language: "markdown",
            code: `# EXPLORATORY TEST CHARTER: UPI Checkout Under Unstable Network
- Mission: Explore the UPI payment confirmation flow with simulated high latency and dropped packets to discover state desynchronization defects.
- Environment: Staging v2.4.12, Android 14 (Pixel 7), Chrome DevTools Network Throttling (Slow 3G + 10% packet drop)
- Duration: 75 minutes
- Strategy & Heuristics: SFDPO (Data & Operations), Stress attacks, Rapid double-clicking
- Bugs Discovered:
  1. BUG-402: Order status stuck in "PENDING" if user backgrounds app during bank redirection.
  2. BUG-405: Duplicate transaction created if user double-taps "Retry Payment" within 400ms.
- Questions Raised: Does the payment gateway send a secondary webhook reconciliation if the browser session expires?`,
          },
        ],
      },
      {
        id: "heuristic-cheat-sheets",
        heading: "The Essential QA Heuristic Cheat Sheets",
        paragraphs: [
          "Heuristics are mental shortcuts that help testers systematically brainstorm creative test ideas:",
          "1. SFDPO (San Francisco Depot) - Product Dimensions to explore:",
          "- Structure: What is the product made of? (Code files, databases, third-party libraries, CDN caches)",
          "- Function: What does the product do? (User actions, calculation logic, transformations)",
          "- Data: What does the product process? (Valid inputs, boundary values, empty states, special characters)",
          "- Platform: What does the product rely on? (OS versions, hardware, browser engines, network conditions)",
          "- Operations: How will the product be used? (Power users, novices, malicious attackers, heavy concurrency)",
          "2. FEW HICCUPS - Oracles to determine if something is a bug:",
          "- Familiarity, Explainability, World, History, Image, Comparable products, User expectations, Purpose, Standards.",
        ],
      },
    ],
  },

  "manual-50-testing-types": {
    id: "manual-50-testing-types",
    title: "50+ Software Testing Types Master Taxonomy",
    category: "3. Testing Types Encyclopedia",
    sourceUrl: "https://www.istqb.org/",
    description: "The complete taxonomy of 50+ software testing types categorized into 6 operational domains: Functional, Non-Functional, UI/UX, Security, Platform, and Deployment.",
    sections: [
      {
        id: "taxonomy-overview",
        heading: "The Complete Testing Types Taxonomy",
        paragraphs: [
          "Software testing encompasses over 50 specialized testing disciplines. Master this categorized directory to select the exact testing methodology for any engineering scenario:",
        ],
        table: {
          headers: ["Domain", "Testing Types Included", "Primary Objective"],
          rows: [
            ["1. Functional & Structural (12 Types)", "Smoke, Sanity, Unit, Integration, System, Acceptance (UAT), Regression, Retesting, Boundary Value, Decision Table, State Transition, Use Case", "Verify that functional requirements, business workflows, and edge cases produce correct mathematical and logical outputs."],
            ["2. Non-Functional & Performance (10 Types)", "Load, Stress, Spike, Soak (Endurance), Scalability, Concurrency, Volume, Latency, Memory Leak, Benchmark", "Evaluate system throughput, resource utilization, failure recovery thresholds, and degradation under heavy virtual user loads."],
            ["3. UI, UX & Accessibility (7 Types)", "Usability, Visual Regression, Accessibility (a11y), Cross-Browser, Responsive, Touch Gesture, Internationalization (I18n)", "Ensure seamless visual layout, intuitive user ergonomics, multi-device responsiveness, and full compliance with WCAG standards."],
            ["4. Security & Vulnerability (7 Types)", "Penetration, Vulnerability Scanning, Authentication, Authorization, SQL Injection, Cross-Site Scripting (XSS), Data Masking", "Identify vulnerabilities, permission escalation flaws, data exposure risks, and injection attack vectors."],
            ["5. Compatibility & Platform (6 Types)", "Cross-Platform, Backward Compatibility, Forward Compatibility, Interoperability, Hardware Architecture, Network Variation", "Verify consistent behavior across operating systems, browser engines, hardware architectures, and erratic network topologies."],
            ["6. Deployment & Release (8 Types)", "Alpha, Beta, Operational Acceptance (OAT), Disaster Recovery, Canary Verification, A/B Testing, Blue-Green, Failover", "Ensure continuous delivery safety, seamless traffic migration, database schema rollbacks, and business continuity."],
          ],
        },
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 4: TEST DESIGN TECHNIQUES                                        */
  /* ========================================================================= */
  "manual-test-design-techniques": {
    id: "manual-test-design-techniques",
    title: "Boundary Value Analysis (BVA) & Equivalence Class Partitioning (ECP)",
    category: "4. Test Design Techniques",
    sourceUrl: "https://www.istqb.org/",
    description: "Deep mathematical and practical mastery of Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) with single and multi-variable industrial examples.",
    sections: [
      {
        id: "why-test-design",
        heading: "Why Black-Box Test Design Techniques?",
        paragraphs: [
          "Exhaustive testing is mathematically impossible. If a simple input field accepts any integer from 1 to 100,000, testing every single number would take days.",
          "Black-box test design techniques use mathematical sampling to maximize defect detection probability while minimizing the number of executed test cases.",
        ],
      },
      {
        id: "ecp-theory-practice",
        heading: "Equivalence Class Partitioning (ECP)",
        paragraphs: [
          "Equivalence Partitioning divides the input domain into distinct partitions (classes) where the software is assumed to process all values within a partition in an identical manner.",
          "Rule: Selecting one representative test value from each partition is mathematically equivalent to testing all values in that partition.",
          "Partitions are divided into Valid Equivalence Classes (inputs accepted by system) and Invalid Equivalence Classes (inputs rejected with specific error messages).",
        ],
        table: {
          headers: ["Requirement", "Valid Partition", "Invalid Partition 1", "Invalid Partition 2"],
          rows: [
            ["Age: 18 to 60 years", "18 <= age <= 60 (Test: 35)", "age < 18 (Test: 12 -> 'Underage Error')", "age > 60 (Test: 75 -> 'Overage Error')"],
            ["Password Length: 8 to 20 chars", "8 <= len <= 20 (Test: 'SecureP@ss123')", "len < 8 (Test: 'Ab1!' -> 'Too Short')", "len > 20 (Test: 25 chars -> 'Too Long')"],
            ["Payment Currency: INR, USD, EUR", "Input in {'INR', 'USD', 'EUR'} (Test: 'USD')", "Unsupported currency (Test: 'XYZ')", "Special chars / empty (Test: '', '$$$')"],
          ],
        },
      },
      {
        id: "bva-theory-practice",
        heading: "Boundary Value Analysis (BVA)",
        paragraphs: [
          "Decades of software engineering metrics reveal that the majority of coding defects cluster at the boundaries of input ranges (e.g. developers using `<` instead of `<=`, or zero-index off-by-one errors).",
          "BVA focuses exclusively on testing the extremes of equivalence partitions.",
          "2-Value BVA vs 3-Value BVA:",
          "- 2-Value BVA: Tests the Boundary value and its immediate outside neighbor (Min, Min-1, Max, Max+1).",
          "- 3-Value BVA (More rigorous): Tests the Boundary value, its immediate outside neighbor, and its immediate inside neighbor (Min-1, Min, Min+1, Max-1, Max, Max+1).",
        ],
        table: {
          headers: ["Field Range", "Boundary Points Tested (3-Value BVA)", "Expected Behavior"],
          rows: [
            ["Item Quantity: 1 to 99", "0 (Min - 1)", "Rejected: 'Minimum order is 1 item'"],
            ["Item Quantity: 1 to 99", "1 (Min)", "Accepted: Valid minimum order"],
            ["Item Quantity: 1 to 99", "2 (Min + 1)", "Accepted: Valid nominal order"],
            ["Item Quantity: 1 to 99", "98 (Max - 1)", "Accepted: Valid nominal order"],
            ["Item Quantity: 1 to 99", "99 (Max)", "Accepted: Valid maximum order"],
            ["Item Quantity: 1 to 99", "100 (Max + 1)", "Rejected: 'Maximum order exceeded (limit 99)'"],
          ],
        },
      },
    ],
  },

  "manual-decision-tables": {
    id: "manual-decision-tables",
    title: "Decision Table Testing & Combinatorial Rule Reduction",
    category: "4. Test Design Techniques",
    sourceUrl: "https://www.istqb.org/",
    description: "Systematic test design for complex combinatorial business rules: condition stubs, action stubs, truth table derivation, and 'don't care' rule reduction.",
    sections: [
      {
        id: "decision-table-concept",
        heading: "What is Decision Table Testing?",
        paragraphs: [
          "Decision Tables are ideal for software features where the output depends on a combination of multiple boolean or discrete input conditions.",
          "Structure of a Decision Table:",
          "1. Condition Stub: Lists all input conditions and business factors.",
          "2. Condition Entries: The combinations of True (T) and False (F) values for each condition ($2^n$ combinations for $n$ binary conditions).",
          "3. Action Stub: Lists all possible outcomes and system actions.",
          "4. Action Entries: Specifies which actions execute for each combination of conditions.",
        ],
      },
      {
        id: "fintech-decision-table",
        heading: "Industrial Example: Instant Personal Loan Approval Decision Table",
        paragraphs: [
          "Business Requirements:",
          "- Condition 1: Credit Score >= 750",
          "- Condition 2: Monthly Income >= ₹50,000",
          "- Condition 3: Existing Loan Defaults = 0",
        ],
        table: {
          headers: ["Condition / Action", "Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 5"],
          rows: [
            ["C1: Credit Score >= 750", "True", "True", "True", "False", "False"],
            ["C2: Monthly Income >= ₹50,000", "True", "True", "False", "True", "Don't Care (-)"],
            ["C3: Zero Existing Defaults", "True", "False", "True", "True", "False"],
            ["Action: Instant Loan Approval", "YES", "NO", "NO", "NO", "NO"],
            ["Action: Refer to Manual Underwriting", "NO", "YES", "YES", "YES", "NO"],
            ["Action: Immediate Hard Rejection", "NO", "NO", "NO", "NO", "YES"],
          ],
        },
        callouts: [
          {
            type: "tip",
            title: "Rule Reduction Tip",
            text: "Notice Rule 5: If an applicant has existing defaults (C3 = False) and low credit (C1 = False), their income is irrelevant ('Don't Care'). Collapsing redundant rules saves hours of test execution time without lowering test coverage.",
          },
        ],
      },
    ],
  },

  "manual-state-transition-usecase": {
    id: "manual-state-transition-usecase",
    title: "State Transition Testing & Use Case Testing",
    category: "4. Test Design Techniques",
    sourceUrl: "https://www.istqb.org/",
    description: "Model Finite State Machines (FSM), 0-switch and 1-switch coverage, State Transition Tables (STT), and End-to-End Use Case user journey flows.",
    sections: [
      {
        id: "state-transition-testing",
        heading: "State Transition Testing (Finite State Machines)",
        paragraphs: [
          "State Transition Testing is applied to systems where the system's response to an event depends not only on the current input, but also on its historical state.",
          "Key Concepts:",
          "1. States: Distinct operational modes or conditions of the software entity (e.g. `Draft`, `Submitted`, `Paid`, `Cancelled`).",
          "2. Transitions: Movement from one state to another triggered by an event.",
          "3. Events / Inputs: External stimuli (user clicks, webhook arrival, timeout).",
          "4. Actions: Output produced during the transition (send notification, debit wallet).",
        ],
      },
      {
        id: "ecommerce-state-machine",
        heading: "Real-World State Transition Table: E-Commerce Order Lifecycle",
        paragraphs: [
          "State Transition Tables ensure that all valid transitions are verified AND all illegal transitions are blocked:",
        ],
        table: {
          headers: ["Current State", "Trigger Event", "Target State", "Expected Action", "Validity"],
          rows: [
            ["Cart Created", "Add Item", "Cart Created", "Update item count & total", "Valid Transition"],
            ["Cart Created", "Click Checkout", "Pending Payment", "Reserve stock, display payment modal", "Valid Transition"],
            ["Pending Payment", "Payment Success Webhook", "Order Placed", "Send confirmation email, debit payment", "Valid Transition"],
            ["Pending Payment", "Payment Timeout (15m)", "Payment Expired", "Release reserved stock, notify user", "Valid Transition"],
            ["Order Placed", "Cancel Order within 2h", "Cancelled", "Trigger refund, restore inventory", "Valid Transition"],
            ["Order Shipped", "Cancel Order", "Order Shipped", "Reject: 'Cannot cancel shipped order'", "Invalid Transition (Negative Test)"],
            ["Cancelled", "Payment Success Webhook", "Cancelled", "Reject & alert fraud: duplicate webhook", "Invalid Transition (Security Test)"],
          ],
        },
      },
    ],
  },

  "manual-error-guessing-attacks": {
    id: "manual-error-guessing-attacks",
    title: "Error Guessing & The QA Attack Catalog",
    category: "4. Test Design Techniques",
    sourceUrl: "https://www.satisfice.com/",
    description: "Harness experienced-based testing intuition, risk priority calculation (RPN), and the comprehensive QA attack catalog for breaking web and mobile software.",
    sections: [
      {
        id: "error-guessing-concept",
        heading: "What is Error Guessing?",
        paragraphs: [
          "Error Guessing is an experience-based test design technique where the tester anticipates where developers are most likely to introduce errors based on past defect history, intuition, architectural complexity, and common human cognitive pitfalls.",
          "Unlike random ad-hoc testing, effective error guessing is structured around an Attack Catalog.",
        ],
      },
      {
        id: "qa-attack-catalog",
        heading: "The Essential QA Attack Catalog",
        paragraphs: [
          "Industrial attacks every QA engineer should test on any input field, API, or state machine:",
          "1. The Null and Empty Attack: Submitting empty strings, spaces only (`'   '`), `null`, `undefined`, or omitting keys entirely in JSON payloads.",
          "2. The Buffer Overflow Attack: Pasting strings of 256, 1,024, and 65,536 characters into text inputs to observe if truncation or backend unhandled 500 errors occur.",
          "3. The Special Character Attack: Testing unicode, emojis (🚀), mathematical symbols, RTL characters, and script tags (`<script>alert(1)</script>`).",
          "4. The Rapid Double-Click Attack: Double-clicking or spamming submit/payment buttons within 200ms to verify database idempotency and prevent duplicate records.",
          "5. The Browser Navigation Attack: Hitting Browser Back, Forward, or Refresh midway through a multi-step checkout wizard or during an in-flight API call.",
          "6. The Clock & Timezone Skew Attack: Changing system clock backwards or forwards across midnight, leap year boundaries (Feb 29), or daylight saving time shifts.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 5: TEST ARTIFACTS & DOCUMENTATION                               */
  /* ========================================================================= */
  "manual-test-plan-ieee829": {
    id: "manual-test-plan-ieee829",
    title: "Master Test Plan Engineering (IEEE 829 Standard)",
    category: "5. Test Artifacts & Documentation",
    sourceUrl: "https://standards.ieee.org/",
    description: "Craft comprehensive, audit-ready Test Plans based on the international IEEE 829 standard, covering scope, environment topology, staffing, risks, and sign-off criteria.",
    sections: [
      {
        id: "test-plan-importance",
        heading: "What is a Master Test Plan?",
        paragraphs: [
          "A Test Plan is the foundational blueprint that describes the testing scope, approach, resources, schedule, and quality criteria for an engineering project.",
          "It acts as a formal contract between QA, Development, Product Management, and Executive Leadership.",
        ],
      },
      {
        id: "ieee-829-structure",
        heading: "The 16 Essential Sections of an IEEE 829 Test Plan",
        paragraphs: [
          "The IEEE 829 standard establishes 16 structured sections:",
        ],
        table: {
          headers: ["Section #", "IEEE 829 Section Title", "Core Content & Description"],
          rows: [
            ["1", "Test Plan Identifier", "Unique document ID, version number, author, creation date"],
            ["2", "Introduction & Objectives", "Executive summary of the product release and business objectives"],
            ["3", "Test Items", "Software modules, APK/IPA builds, and API endpoints in scope"],
            ["4", "Features to be Tested", "Explicit list of functional, security, and performance requirements"],
            ["5", "Features NOT to be Tested", "Explicit list of out-of-scope items with clear risk rationale"],
            ["6", "Approach / Strategy", "Testing types applied (Smoke, Functional, Sanity, Regression, Exploratory)"],
            ["7", "Item Pass / Fail Criteria", "Quantitative metrics for passing or failing each test phase"],
            ["8", "Suspension & Resumption", "Criteria under which testing halts (e.g. smoke test failure blocks all runs)"],
            ["9", "Test Deliverables", "Test cases, RTM, defect reports, Test Summary Report (TSR)"],
            ["10", "Testing Tasks", "Granular breakdown of preparation, execution, and closure activities"],
            ["11", "Environmental Needs", "Hardware, OS versions, test databases, network topologies, API mocks"],
            ["12", "Responsibilities & Staffing", "Matrix mapping specific modules to QA engineers"],
            ["13", "Staffing & Training", "Tools training required (e.g. Postman, Charles Proxy, DevTools)"],
            ["14", "Schedule & Milestones", "Gantt chart milestones aligned with sprint release deadlines"],
            ["15", "Risks & Contingencies", "Identified testing risks (e.g. delayed builds) and fallback mitigations"],
            ["16", "Approvals & Sign-off", "Formal signature block for Lead QA, Dev Lead, and Product Manager"],
          ],
        },
      },
    ],
  },

  "manual-test-cases-rtm": {
    id: "manual-test-cases-rtm",
    title: "Writing Production-Grade Test Cases & RTM Traceability",
    category: "5. Test Artifacts & Documentation",
    sourceUrl: "https://www.istqb.org/",
    description: "Learn how to write unambiguous test cases with the 10 mandatory fields, manage test data, and build Bidirectional Requirement Traceability Matrices (RTM).",
    sections: [
      {
        id: "test-case-anatomy",
        heading: "The 10 Mandatory Fields of a Production-Grade Test Case",
        paragraphs: [
          "A poorly written test case leads to developer confusion, missed bugs, and unreproducible defect reports. Every enterprise test case must contain these 10 fields:",
        ],
        table: {
          headers: ["Field #", "Field Name", "Purpose & Best Practice Example"],
          rows: [
            ["1", "Test Case ID", "Unique identifier following convention: `TC_[Module]_[Feature]_[Number]` (e.g. `TC_PAY_UPI_001`)"],
            ["2", "Test Priority / Severity", "Business importance: Critical (P1), High (P2), Medium (P3), Low (P4)"],
            ["3", "Test Title / Summary", "Clear, action-oriented objective (e.g. 'Verify UPI transfer fails when VPA handle is invalid')"],
            ["4", "Linked Requirement (RTM ID)", "Direct link to user story or Jira ticket (e.g. `FIN-1042`)"],
            ["5", "Preconditions", "Exact system state required before step 1 (e.g. 'User logged in, wallet balance >= ₹500')"],
            ["6", "Test Data", "Specific parameters used (e.g. VPA: `invalid_user@xyz`, Amount: `₹250.00`)"],
            ["7", "Step-by-Step Instructions", "Numbered, reproducible, deterministic actions for the tester to execute"],
            ["8", "Expected Result", "Unambiguous expected system response, UI state, database entry, or error message"],
            ["9", "Actual Result", "Observed behavior during execution (filled during test run)"],
            ["10", "Execution Status", "Pass, Fail, Blocked, or Skipped (with defect ID linked if failed)"],
          ],
        },
      },
      {
        id: "rtm-traceability",
        heading: "Requirement Traceability Matrix (RTM)",
        paragraphs: [
          "The Requirement Traceability Matrix (RTM) is a document that correlates user requirements to the test cases that verify them.",
          "Three Types of Traceability:",
          "1. Forward Traceability: Maps Requirements $\\rightarrow$ Test Cases. Ensures that every requirement has at least one test case (eliminating blind spots).",
          "2. Backward Traceability: Maps Test Cases $\\rightarrow$ Requirements. Ensures that no 'rogue' or unauthorized test cases are written for features outside scope.",
          "3. Bidirectional Traceability: Combines both forward and backward tracking across the entire SDLC.",
        ],
      },
    ],
  },

  "manual-qa-metrics-kpis": {
    id: "manual-qa-metrics-kpis",
    title: "QA Metrics, KPIs, Defect Density & Leakage Formulas",
    category: "5. Test Artifacts & Documentation",
    sourceUrl: "https://www.istqb.org/",
    description: "Measure and demonstrate QA impact using mathematical formulas for Defect Density, Defect Leakage, Defect Removal Efficiency (DRE), and Execution Pass Rates.",
    sections: [
      {
        id: "why-qa-metrics",
        heading: "Why Software Testing Metrics Matter",
        paragraphs: [
          "Lord Kelvin famously observed: 'If you cannot measure it, you cannot improve it.'",
          "QA metrics provide quantitative evidence of software quality, team efficiency, release readiness, and the financial ROI of testing.",
        ],
      },
      {
        id: "core-formulas",
        heading: "The Essential QA Mathematical Formulas",
        paragraphs: [
          "Master these core mathematical equations used by Lead QA Engineers:",
        ],
        table: {
          headers: ["Metric Name", "Mathematical Formula", "Target Benchmark", "Strategic Meaning"],
          rows: [
            ["Defect Removal Efficiency (DRE)", "(Defects Found in QA / (Defects in QA + Defects in Prod)) * 100", ">= 95%", "Measures QA team's ability to filter out defects before production release."],
            ["Defect Leakage (Escape Rate)", "(Defects Found in Production / Total Defects Detected) * 100", "< 5%", "Measures percentage of bugs that escaped undetected into production."],
            ["Defect Density", "Total Defects / Size of Module (KLOC or Story Points)", "< 1.0 defect / Story Point", "Identifies defect-prone modules requiring refactoring or architectural review."],
            ["Test Case Execution Rate", "(Executed Test Cases / Total Planned Test Cases) * 100", "100% on release day", "Tracks testing progress against the sprint schedule."],
            ["Test Pass Rate", "(Passed Test Cases / Total Executed Test Cases) * 100", ">= 98% for release", "Indicates overall stability and release readiness."],
            ["Defect Rejection Rate", "(Rejected Defects / Total Reported Defects) * 100", "< 8%", "High rejection rates indicate poor requirements understanding by QA."],
          ],
        },
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 6: DEFECT MANAGEMENT & RCA                                       */
  /* ========================================================================= */
  "manual-defect-lifecycle": {
    id: "manual-defect-lifecycle",
    title: "Defect Life Cycle State Machine & Severity vs Priority",
    category: "6. Defect Management & RCA",
    sourceUrl: "https://www.istqb.org/",
    description: "Master the complete Defect Life Cycle state machine, transition rules, and the 4x4 Severity vs Priority Matrix with real-world FinTech examples.",
    sections: [
      {
        id: "bug-lifecycle-states",
        heading: "The Defect Life Cycle State Machine",
        paragraphs: [
          "A defect lifecycle defines the formal stages a bug passes through from initial discovery by QA to final closure:",
          "1. NEW: The bug is initially logged and documented in Jira.",
          "2. ASSIGNED: Lead QA or Tech Lead assigns the ticket to a specific developer.",
          "3. OPEN: The developer actively investigates, reproduces, and debugs the root cause.",
          "4. FIXED: The developer writes code, verifies locally, and merges the fix into the staging build.",
          "5. PENDING RETEST: Build containing the fix is deployed to the QA environment.",
          "6. RETEST: QA re-executes the exact reproduction steps on the new build.",
          "7. VERIFIED / CLOSED: QA confirms the bug is genuinely resolved with zero regressions.",
          "8. REOPENED: If the bug still persists upon retesting, QA transitions it back to REOPENED with new logs.",
          "Exception States: DEFERRED (postponed to future sprint), REJECTED (working as designed), DUPLICATE (already logged), CANNOT REPRODUCE.",
        ],
      },
      {
        id: "severity-vs-priority-matrix",
        heading: "Severity vs Priority: The 4x4 Matrix Demystified",
        paragraphs: [
          "Severity measures the TECHNICAL IMPACT of the defect on system operation.",
          "Priority measures the BUSINESS URGENCY of resolving the defect.",
        ],
        table: {
          headers: ["Quadrant", "Severity Level", "Priority Level", "Real-World Industrial Example"],
          rows: [
            ["High Severity / High Priority (P1)", "Critical (System Crash / Data Loss)", "Immediate Fix", "Payment gateway crashes on checkout; user funds debited but order never generated."],
            ["High Severity / Low Priority (P2)", "Critical (Full Crash on Edge Case)", "Deferred to next patch", "App crashes completely, but only on legacy Android 8.0 devices (0.01% of userbase)."],
            ["Low Severity / High Priority (P1/P2)", "Minor (No data loss, zero crash)", "Immediate Fix", "Company brand logo corrupted on homepage or legal typo in CEO name on public portal."],
            ["Low Severity / Low Priority (P4)", "Trivial / Cosmetic", "Backlog backlog", "Minor 2px alignment discrepancy on internal developer documentation page."],
          ],
        },
      },
    ],
  },

  "manual-bug-reporting": {
    id: "manual-bug-reporting",
    title: "Anatomy of a Production-Grade Bug Report",
    category: "6. Defect Management & RCA",
    sourceUrl: "https://www.atlassian.com/software/jira",
    description: "Write clear, reproducible, and respected bug reports that developers love: standardized title syntax, environment details, unambiguous reproduction steps, and diagnostic attachments.",
    sections: [
      {
        id: "why-bug-report-quality-matters",
        heading: "Why Bug Report Quality Defines QA Reputation",
        paragraphs: [
          "A vague bug report like 'Login is broken, please fix' wastes hours of developer time, causes frustrating back-and-forth comments, and delays releases.",
          "A production-grade bug report provides all diagnostic evidence (logs, payloads, video, device state) so the developer can isolate the root cause in minutes without having to ask a single clarifying question.",
        ],
      },
      {
        id: "bug-report-template",
        heading: "Production-Grade Bug Report Template & Example",
        paragraphs: [
          "Follow this industry standard structure in Jira, Linear, or GitHub Issues:",
        ],
        codeBlocks: [
          {
            title: "Production Jira Bug Ticket Example",
            language: "markdown",
            code: `[PAYMENT][ANDROID] Double-tap on "Pay Now" causes duplicate ₹500 wallet debit

### Description
During UPI checkout on unstable networks, rapid sequential taps on the "Pay Now" button bypasses button disabling and dispatches two concurrent payment authorization API requests, causing duplicate wallet debits for a single order.

### Environment
- App Version: v3.12.0 (Build 412)
- Device: Samsung Galaxy S23 (SM-S911B)
- OS: Android 14 (OneUI 6.0)
- Network: Simulated Slow 3G (400ms latency, 2% packet loss via Charles Proxy)
- User Account: Test User ID #88412 (Seeded with ₹2,000.00 wallet balance)

### Steps to Reproduce
1. Log into the app with credentials above.
2. Add "Digital Gold Voucher (₹500)" to cart and proceed to checkout.
3. Select "Wallet Balance" as payment method.
4. Rapidly double-tap the "Pay ₹500 Now" button within 250ms.
5. Observe the order confirmation screen and check wallet transaction history.

### Expected Result
- The "Pay Now" button should immediately disable upon the first tap (displaying a spinner).
- Only ONE API request to \`/api/v1/payments/commit\` should be dispatched.
- Order should succeed with a single ₹500 deduction (Remaining balance: ₹1,500.00).

### Actual Result
- The button remains clickable for ~400ms before disabling.
- Two POST requests with different idempotency keys are sent to \`/api/v1/payments/commit\`.
- Two duplicate transactions appear in ledger: ₹500 and ₹500 (Remaining balance: ₹1,000.00).

### Evidence Attached
- [Video_Proof_DoubleDebit.mp4] (Screen recording with touch indicators enabled)
- [Logcat_Snippet.txt] (Contains timestamped UI click events and network dispatches)
- [Charles_Network_Session.chls] (Shows both concurrent HTTP 200 responses)`,
          },
        ],
      },
    ],
  },

  "manual-root-cause-analysis": {
    id: "manual-root-cause-analysis",
    title: "Root Cause Analysis (RCA), 5 Whys & Fishbone Diagram",
    category: "6. Defect Management & RCA",
    sourceUrl: "https://asq.org/quality-resources/fishbone",
    description: "Master engineering incident investigations: The 5 Whys iterative interrogative method, Ishikawa Fishbone diagrams, and writing Post-Mortem CAPA reports.",
    sections: [
      {
        id: "what-is-rca",
        heading: "What is Root Cause Analysis (RCA)?",
        paragraphs: [
          "Root Cause Analysis (RCA) is a systematic problem-solving methodology aimed at identifying the fundamental, underlying breakdown in process, architecture, or communication that allowed a defect to occur and escape into production.",
          "Rule: Fixing the bug only addresses the symptom; fixing the root cause prevents an entire class of future defects.",
        ],
      },
      {
        id: "five-whys-example",
        heading: "The 5 Whys Methodology in Action",
        paragraphs: [
          "By asking 'Why?' five successive times, teams peel away surface layers to uncover process breakdowns:",
          "Incident: Production users experienced incorrect discount calculations on Black Friday.",
          "1. Why did users receive incorrect discounts? Because the pricing microservice returned cached promo rates from the previous week.",
          "2. Why did it return stale cached rates? Because the Redis cache invalidation event failed to trigger during the midnight promo push.",
          "3. Why did the invalidation event fail to trigger? Because the Redis cluster connection timed out under heavy traffic spikes.",
          "4. Why was there no timeout retry mechanism? Because the backend retry policy was disabled during a recent refactor and never tested under load.",
          "5. Why was it not tested under load? ROOT CAUSE: Because our pre-release checklist does not mandate performance verification for backend configuration updates.",
          "Actionable Corrective & Preventive Action (CAPA): Add automated Redis failover tests to CI and mandate cache invalidation validation in the QA release sign-off checklist.",
        ],
      },
      {
        id: "fishbone-diagram",
        heading: "The Ishikawa (Fishbone / 6M) Diagram for QA",
        paragraphs: [
          "The Fishbone diagram categorizes potential defect causes into 6 operational pillars:",
          "1. Methods: Inadequate test cases, missing boundary tests, ambiguous acceptance criteria.",
          "2. Machine / Technology: Unstable staging environments, database connection pooling limits.",
          "3. Material: Corrupt test data, outdated third-party API mocks.",
          "4. Measurement: Lack of code coverage metrics, missing synthetic monitoring alerts.",
          "5. Manpower / People: Developer fatigue, lack of domain onboarding, missed 3 Amigos meeting.",
          "6. Milieu / Environment: Difference between staging architecture and multi-region production.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 7: SPECIALIZED MANUAL TESTING                                    */
  /* ========================================================================= */
  "manual-api-testing-fundamentals": {
    id: "manual-api-testing-fundamentals",
    title: "Manual REST API Testing with Postman & Browser DevTools",
    category: "7. Specialized Manual Testing",
    sourceUrl: "https://www.postman.com/",
    description: "Master manual API testing: HTTP methods, response status codes, header validation, Postman environment variables, pre-request scripts, and JSON schema inspection.",
    sections: [
      {
        id: "why-api-testing",
        heading: "Why Manual QA Must Test APIs",
        paragraphs: [
          "UI testing alone is insufficient. Modern applications are driven by decoupled frontend single-page apps (React, Next.js, mobile apps) communicating with backend microservices via REST APIs.",
          "If a frontend validation fails or is bypassed (e.g. by an attacker or network glitch), the backend API must enforce data integrity, authentication, and boundary restrictions.",
        ],
      },
      {
        id: "http-status-codes-cheatsheet",
        heading: "HTTP Status Codes Cheatsheet for QA Engineers",
        paragraphs: [
          "Every manual tester must know the exact semantic meaning of HTTP response status codes:",
        ],
        table: {
          headers: ["Code", "Status Name", "Category", "When Expected in Testing"],
          rows: [
            ["200", "OK", "Success", "Standard response for successful GET, PUT, or POST requests."],
            ["201", "Created", "Success", "Returned when a new entity is successfully created in database."],
            ["204", "No Content", "Success", "Action succeeded, but response body is intentionally empty (e.g. DELETE)."],
            ["400", "Bad Request", "Client Error", "Payload failed validation (missing required fields, malformed JSON)."],
            ["401", "Unauthorized", "Client Error", "Missing or expired JWT bearer token / authentication credentials."],
            ["403", "Forbidden", "Client Error", "User is authenticated, but lacks permissions (e.g. regular user accessing /admin)."],
            ["404", "Not Found", "Client Error", "Requested resource URI does not exist."],
            ["409", "Conflict", "Client Error", "State conflict (e.g. attempting to register an email that already exists)."],
            ["422", "Unprocessable Entity", "Client Error", "JSON syntax is valid, but semantic business rules fail (e.g. end date before start date)."],
            ["429", "Too Many Requests", "Client Error", "Rate limit exceeded (e.g. user requested OTP 5 times within 1 minute)."],
            ["500", "Internal Server Error", "Server Error", "Unhandled exception in backend code (ALWAYS a backend bug to log)."],
            ["502", "Bad Gateway", "Server Error", "Reverse proxy (Nginx) received invalid response from upstream microservice."],
            ["503", "Service Unavailable", "Server Error", "Server overloaded or down for maintenance."],
            ["504", "Gateway Timeout", "Server Error", "Database query or upstream third-party service timed out."],
          ],
        },
      },
    ],
  },

  "manual-database-sql-testing": {
    id: "manual-database-sql-testing",
    title: "Database & SQL Verification for QA Engineers",
    category: "7. Specialized Manual Testing",
    sourceUrl: "https://www.postgresql.org/",
    description: "Verify backend data persistence, relational data integrity, foreign key cascades, transaction atomicity (ACID), and write essential SQL queries for manual QA verification.",
    sections: [
      {
        id: "why-sql-for-qa",
        heading: "Why Manual QA Engineers Must Query Databases",
        paragraphs: [
          "Never rely solely on UI screens to verify that a transaction succeeded. The UI might display a green 'Payment Successful' toast, while in reality the database failed to commit the ledger entry, created duplicate rows, or truncated critical customer data.",
          "Database testing verifies the truth behind the user interface.",
        ],
      },
      {
        id: "essential-sql-queries",
        heading: "Essential SQL Queries for Manual QA",
        paragraphs: [
          "The core SQL query patterns every tester must run during test execution:",
        ],
        codeBlocks: [
          {
            title: "SQL Verification Queries for QA",
            language: "sql",
            code: `-- 1. Verify User Registration Persisted Correctly
SELECT id, email, is_verified, phone_number, created_at
FROM users
WHERE email = 'deepak.test@example.com';

-- 2. Validate Multi-Table Relational Data via INNER JOIN
SELECT 
    o.order_id, 
    o.status AS order_status, 
    o.total_amount,
    p.payment_id,
    p.gateway_reference,
    p.status AS payment_status
FROM orders o
INNER JOIN payments p ON o.order_id = p.order_id
WHERE o.user_id = 88412
ORDER BY o.created_at DESC
LIMIT 1;

-- 3. Detect Duplicate Transaction Records (Idempotency Bug Detection)
SELECT idempotency_key, COUNT(*) AS duplicate_count
FROM transactions
GROUP BY idempotency_key
HAVING COUNT(*) > 1;

-- 4. Verify Financial Balance Consistency (Sum check)
SELECT 
    wallet_id,
    current_balance,
    (SELECT COALESCE(SUM(amount), 0) FROM wallet_credits WHERE wallet_id = w.wallet_id) -
    (SELECT COALESCE(SUM(amount), 0) FROM wallet_debits WHERE wallet_id = w.wallet_id) AS computed_balance
FROM wallets w
WHERE wallet_id = 'WAL-9921';`,
          },
        ],
      },
    ],
  },

  "manual-mobile-testing": {
    id: "manual-mobile-testing",
    title: "Mobile App Testing: Android & iOS Comprehensive Guide",
    category: "7. Specialized Manual Testing",
    sourceUrl: "https://developer.android.com/",
    description: "Exhaustive manual mobile app testing: device fragmentation, gestures, hardware features, OS interrupts (calls, low battery, push notifications), and log capture.",
    sections: [
      {
        id: "mobile-vs-web",
        heading: "Web Testing vs Mobile Application Testing",
        paragraphs: [
          "Mobile testing introduces physical constraints that do not exist on desktop web:",
          "Battery drain, limited RAM, intermittent cellular connectivity, sensor hardware, touch gestures, and operating system interruptions.",
        ],
      },
      {
        id: "mobile-interrupt-matrix",
        heading: "The Mobile Operating System Interrupt Matrix",
        paragraphs: [
          "Mobile apps must gracefully handle unexpected real-world interruptions without crashing or losing uncommitted form data:",
        ],
        table: {
          headers: ["Interrupt Event", "Testing Action", "Expected Graceful Behavior"],
          rows: [
            ["Incoming Phone Call", "Receive phone call while midway through checkout form", "App moves to background; on call completion, user returns with all form inputs intact."],
            ["Low Battery Alert", "Battery reaches 10% / 20% system modal warning", "Modal does not freeze camera/biometric scan; dismiss resumes app smoothly."],
            ["Network Drop / Airplane Mode", "Toggle Airplane Mode on during file upload or transaction", "App displays informative 'No Internet Connection' offline banner; retry button queued."],
            ["App Backgrounding & Return", "Press Home button, open 3 heavy apps, return to tested app", "App state restored from memory; if OS terminated process, session resumes safely."],
            ["Push Notification / SMS OTP", "Receive SMS OTP alert banner while typing on keyboard", "App auto-fills OTP (if permitted) without keyboard collapse or UI freeze."],
            ["Screen Auto-Rotation", "Rotate device 90 degrees during video playback / payment", "UI smoothly re-renders in landscape without layout collision or restarting activity."],
          ],
        },
      },
    ],
  },

  "manual-payment-fintech-testing": {
    id: "manual-payment-fintech-testing",
    title: "Payment Gateway & FinTech Manual Testing Architecture",
    category: "7. Specialized Manual Testing",
    sourceUrl: "https://razorpay.com/docs/",
    description: "Master FinTech quality assurance: UPI Intent flows, Luhn algorithm card validation, 3D Secure OTPs, webhook idempotency, and refund state lifecycles.",
    sections: [
      {
        id: "fintech-qa-architecture",
        heading: "The FinTech Ecosystem: How Money Moves",
        paragraphs: [
          "FinTech QA requires understanding the multi-party transaction lifecycle:",
          "Customer Browser / App $\\rightarrow$ Merchant Backend $\\rightarrow$ Payment Gateway (Razorpay/Stripe) $\\rightarrow$ Payment Network (NPCI/Visa/Mastercard) $\\rightarrow$ Issuing Bank $\\rightarrow$ Acquiring Bank.",
        ],
      },
      {
        id: "fintech-test-scenarios",
        heading: "Critical FinTech & Payment Test Scenarios",
        paragraphs: [
          "Every payment integration must be verified across these mission-critical scenarios:",
          "1. Idempotency Verification: Submitting the same transaction with identical `Idempotency-Key` must never charge the user twice.",
          "2. Webhook Delay & Reconciliation: When bank takes 15 minutes to confirm payment via webhook, the order status must update asynchronously without requiring customer to stay on the page.",
          "3. Partial Refunds & Chargebacks: Processing a partial refund of ₹200 on a ₹500 order correctly updates remaining refundable balance to ₹300.",
          "4. Luhn Algorithm Card Validation: Testing modulus 10 formula card numbers against invalid checksums before dispatching network calls.",
        ],
      },
    ],
  },

  /* ========================================================================= */
  /* CATEGORY 8: ADVANCED & TRENDING QA                                        */
  /* ========================================================================= */
  "manual-security-accessibility": {
    id: "manual-security-accessibility",
    title: "Security (OWASP Top 10) & Accessibility (WCAG 2.2) Testing",
    category: "8. Advanced & Trending QA",
    sourceUrl: "https://owasp.org/www-project-top-ten/",
    description: "Practical security and accessibility testing for manual QA: OWASP Top 10 vulnerability checks in browser DevTools and WCAG 2.2 Level AA compliance verification.",
    sections: [
      {
        id: "owasp-for-qa",
        heading: "OWASP Top 10 Security Checks for Manual Testers",
        paragraphs: [
          "Manual QA engineers do not need to be certified ethical hackers to catch critical security vulnerabilities:",
          "1. Broken Object Level Authorization (BOLA / IDOR): Changing a resource ID in the URL or API payload (e.g. changing `/api/orders/1001` to `/api/orders/1002`) to see if an unauthorized user can view another customer's confidential invoice.",
          "2. Cross-Site Scripting (XSS): Entering `<script>alert('XSS')</script>` into user profile fields or search boxes to verify proper HTML sanitization.",
          "3. Cookie Security Flags: Inspecting browser Application $\\rightarrow$ Cookies to ensure session tokens have `HttpOnly` (blocks JavaScript access) and `Secure` (HTTPS only) flags enabled.",
        ],
      },
      {
        id: "wcag-accessibility",
        heading: "Web Content Accessibility Guidelines (WCAG 2.2 AA)",
        paragraphs: [
          "Accessibility testing ensures people with visual, motor, auditory, or cognitive disabilities can navigate the software:",
          "The POUR Principles:",
          "1. Perceivable: Information must be presentable to users in ways they can perceive (e.g. all images have meaningful `alt` text; color contrast ratio is >= 4.5:1 for normal text).",
          "2. Operable: User interface components and navigation must be operable (e.g. entire site is 100% navigable via keyboard without getting trapped in a focus loop).",
          "3. Understandable: Information and operation must be understandable (clear form error messages, predictable navigation).",
          "4. Robust: Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive screen readers (NVDA, VoiceOver).",
        ],
      },
    ],
  },

  "manual-shift-left-shift-right": {
    id: "manual-shift-left-shift-right",
    title: "Shift-Left & Shift-Right Testing in Modern CI/CD",
    category: "8. Advanced & Trending QA",
    sourceUrl: "https://www.istqb.org/",
    description: "How high-velocity engineering teams integrate QA into continuous delivery pipelines: Shift-Left defect prevention vs Shift-Right testing in production (Canary, Feature Flags, Synthetic Monitoring).",
    sections: [
      {
        id: "shift-left-vs-shift-right",
        heading: "The Shift-Left vs Shift-Right Spectrum",
        paragraphs: [
          "Modern quality engineering spans the entire spectrum from early design to production operations:",
        ],
        table: {
          headers: ["Concept", "Core Strategy", "Key Activities & Techniques", "Business Outcome"],
          rows: [
            ["Shift-Left Testing", "Move testing activities as early as possible in the SDLC", "Requirement reviews, 3 Amigos, Static code analysis, pre-commit hooks, TDD/BDD", "Prevents defects before code is compiled; cuts cost of bugs by 90%"],
            ["Shift-Right Testing", "Extend testing into live production environments", "Testing in Production (TiP), Canary deployments, Feature Flags (LaunchDarkly), Synthetic APM monitoring, Chaos engineering", "Detects real-world traffic anomalies, third-party outages, and latency degradation in real-time"],
          ],
        },
      },
    ],
  },

  "manual-ai-in-qa": {
    id: "manual-ai-in-qa",
    title: "Generative AI & Modern Quality Engineering",
    category: "8. Advanced & Trending QA",
    sourceUrl: "https://github.com/features/copilot",
    description: "Leverage Generative AI and LLMs as a force multiplier in manual testing: synthetic test data generation, combinatorial prompt engineering, visual AI diffing, and exploratory testing.",
    sections: [
      {
        id: "ai-force-multiplier",
        heading: "AI as a Force Multiplier for Manual Testers",
        paragraphs: [
          "Artificial Intelligence will not replace manual testers—but manual testers who leverage AI will replace those who do not.",
          "AI excels at combinatorial calculations and synthetic data synthesis, allowing human QA to focus on deep exploratory testing, usability nuances, and business risk analysis.",
        ],
      },
      {
        id: "practical-ai-use-cases",
        heading: "Practical AI Use Cases in Daily Manual QA",
        paragraphs: [
          "1. Deriving Edge Cases from PRDs: Prompting an LLM with a complex user story to surface obscure boundary conditions, race conditions, and negative paths.",
          "2. Generating Synthetic Test Data: Instant generation of 50 localized customer profiles with valid Luhn credit cards, realistic addresses, and edge-case unicode names.",
          "3. Formulating Gherkin Scenarios: Transforming bullet-point business requirements into formal Given-When-Then acceptance criteria.",
          "4. Root Cause Analysis Brainstorming: Supplying application logs and error traces to assist in 5 Whys categorization.",
        ],
      },
    ],
  },
};
