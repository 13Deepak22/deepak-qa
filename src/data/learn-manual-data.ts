import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const MANUAL_CATEGORIES: DocCategory[] = [
  {
    "title": "1. Foundations & Core Principles",
    "defaultOpen": true,
    "items": [
      {
        "id": "manual-overview",
        "text": "What is Software Testing & 7 Principles"
      },
      {
        "id": "manual-sdlc-models",
        "text": "SDLC Models (Waterfall, V-Model, Agile)"
      },
      {
        "id": "manual-stlc-lifecycle",
        "text": "STLC 6 Phases & Quality Gates"
      },
      {
        "id": "manual-verification-validation",
        "text": "Verification vs Validation & Reviews"
      }
    ]
  },
  {
    "title": "2. Agile QA & Team Workflows",
    "defaultOpen": true,
    "items": [
      {
        "id": "manual-agile-scrum",
        "text": "Agile Scrum QA & Sprint Ceremonies"
      },
      {
        "id": "manual-user-stories-dor-dod",
        "text": "User Stories, Gherkin & DoR vs DoD"
      },
      {
        "id": "manual-defect-triage-signoff",
        "text": "Defect Triage, TSR & QA Sign-Off"
      }
    ]
  },
  {
    "title": "3. Testing Types Encyclopedia",
    "defaultOpen": true,
    "items": [
      {
        "id": "manual-functional-testing",
        "text": "Functional Testing (Unit, Integration, System, UAT)"
      },
      {
        "id": "manual-non-functional-testing",
        "text": "Non-Functional Testing (Perf, Usability, Compat)"
      },
      {
        "id": "manual-smoke-sanity-regression",
        "text": "Smoke, Sanity, Regression & Retesting"
      },
      {
        "id": "manual-exploratory-testing",
        "text": "Exploratory Testing, Charters & Heuristics"
      },
      {
        "id": "manual-50-testing-types",
        "text": "50+ Software Testing Types Taxonomy"
      }
    ]
  },
  {
    "title": "4. Test Design Techniques",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-test-design-techniques",
        "text": "Boundary Value Analysis (BVA) & ECP"
      },
      {
        "id": "manual-decision-tables",
        "text": "Decision Table Testing & Rule Reduction"
      },
      {
        "id": "manual-state-transition-usecase",
        "text": "State Transition & Use Case Testing"
      },
      {
        "id": "manual-error-guessing-attacks",
        "text": "Error Guessing & QA Attack Catalog"
      }
    ]
  },
  {
    "title": "5. Test Artifacts & Documentation",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-test-plan-ieee829",
        "text": "Master Test Plan (IEEE 829 Standard)"
      },
      {
        "id": "manual-test-cases-rtm",
        "text": "Writing Test Cases & RTM Traceability"
      },
      {
        "id": "manual-qa-metrics-kpis",
        "text": "QA Metrics, KPIs & Defect Density"
      }
    ]
  },
  {
    "title": "6. Defect Management & RCA",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-defect-lifecycle",
        "text": "Defect Life Cycle & Severity vs Priority"
      },
      {
        "id": "manual-bug-reporting",
        "text": "Anatomy of a Production-Grade Bug Report"
      },
      {
        "id": "manual-root-cause-analysis",
        "text": "Root Cause Analysis (5 Whys & Fishbone)"
      }
    ]
  },
  {
    "title": "7. Specialized Manual Testing",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-api-testing-fundamentals",
        "text": "Manual REST API Testing with Postman"
      },
      {
        "id": "manual-database-sql-testing",
        "text": "Database & SQL Verification for QA"
      },
      {
        "id": "manual-mobile-testing",
        "text": "Mobile App Testing (Android & iOS)"
      },
      {
        "id": "manual-payment-fintech-testing",
        "text": "Payment Gateway & FinTech QA"
      }
    ]
  },
  {
    "title": "8. Advanced & Trending QA",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-security-accessibility",
        "text": "Security (OWASP) & Accessibility (WCAG)"
      },
      {
        "id": "manual-shift-left-shift-right",
        "text": "Shift-Left & Shift-Right in CI/CD"
      },
      {
        "id": "manual-ai-in-qa",
        "text": "Generative AI & Modern Quality Engineering"
      }
    ]
  },
  {
    "title": "9. Interview Masterclass & Cheat Sheets",
    "defaultOpen": false,
    "items": [
      {
        "id": "manual-interview-qa-top-30",
        "text": "Top 30 Manual QA Interview Questions & Answers"
      },
      {
        "id": "manual-cheat-sheets-reference",
        "text": "Comprehensive Manual QA Quick Reference Cheat Sheets"
      }
    ]
  }
];

export const MANUAL_DOCS: Record<string, DetailedDoc> = {
  "manual-overview": {
    "id": "manual-overview",
    "title": "What is Software Testing & The 7 ISTQB Core Principles",
    "category": "1. Foundations & Core Principles",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Start Manual Testing from absolute zero: core definitions, error vs bug vs failure vs defect, the true cost of defects, historic software disasters, QA vs QC vs QE, and the 7 fundamental principles of testing.",
    "sections": [
      {
        "id": "what-is-software-testing",
        "heading": "What is Software Testing?",
        "paragraphs": [
          "Software Testing is a systematic engineering process of executing a software application with the dual intent of finding defects and evaluating capabilities to ensure it satisfies specified business requirements and meets end-user expectations.",
          "Testing is not merely 'clicking around randomly until something breaks'—it is an empirical, disciplined investigation that provides stakeholders with objective quality metrics, security posture verification, and release risk assessments.",
          "In modern engineering teams, manual testing provides human intuition, contextual reasoning, heuristic domain exploration, and qualitative usability assessment that automated scripts cannot replicate."
        ],
        "callouts": [
          {
            "type": "tip",
            "title": "Core QA Philosophy",
            "text": "Automated tests verify that the code still does what it was programmed to do; manual exploratory testing discovers whether the system actually fulfills the real-world human mission."
          }
        ],
        "keyTakeaways": [
          "Software testing is both verification (conformance to specs) and validation (meeting real user needs).",
          "Manual testing is indispensable for usability, edge case exploration, UX nuance, and risk analysis.",
          "Quality cannot be 'tested into' an application at the end; it must be built in from requirements refinement."
        ]
      },
      {
        "id": "error-defect-bug-failure",
        "heading": "Error vs Defect vs Bug vs Failure vs Incident (ISTQB Definitions)",
        "paragraphs": [
          "Industry professionals use precise terminology to describe quality anomalies across the life cycle:"
        ],
        "table": {
          "headers": [
            "Term",
            "ISTQB Formal Definition",
            "Originator",
            "Real-World E-Commerce Example"
          ],
          "rows": [
            [
              "Error (Mistake)",
              "A human action that produces an incorrect result.",
              "Developer / Architect / Analyst",
              "Developer incorrectly assumes shipping discount applies before tax instead of after tax."
            ],
            [
              "Defect / Bug",
              "A flaw or imperfection in a work product (code, spec, config) where it does not meet requirements.",
              "Exists inside Source Code or Document",
              "The discount calculation function contains an incorrect operator: balance - discount + tax."
            ],
            [
              "Failure",
              "An event in which a system or component does not perform a required function within specified limits.",
              "Occurs at Runtime by User or Test",
              "A customer is charged ₹1,200 instead of ₹1,000 at checkout and checkout terminates with an exception."
            ],
            [
              "Incident",
              "An unplanned event or symptom flagged during operation that requires investigation.",
              "Flagged by QA, User, or Datadog Alert",
              "Customer support receives 15 tickets within 10 minutes reporting incorrect invoices; Sentry alerts fire."
            ]
          ]
        }
      },
      {
        "id": "cost-of-bugs",
        "heading": "The Economics of Quality: The 1-10-100 Defect Cost Rule",
        "paragraphs": [
          "A foundational law of software engineering is that the cost to detect and repair a defect increases exponentially as the software progresses through the life cycle stages:"
        ],
        "table": {
          "headers": [
            "Phase Detected",
            "Relative Cost Multiplier",
            "Typical Repair Activity",
            "Business Impact"
          ],
          "rows": [
            [
              "Requirements Phase",
              "1x ($100)",
              "Clarifying a user story or Figma mock with PM",
              "Zero code rewritten, negligible delay"
            ],
            [
              "Architecture & Design",
              "3x - 5x ($500)",
              "Adjusting database schema or API contract",
              "Minor documentation and model update"
            ],
            [
              "Development / Coding",
              "10x ($1,000)",
              "Developer debugging unit tests locally",
              "A few hours of developer time"
            ],
            [
              "System Testing (QA)",
              "30x - 50x ($5,000)",
              "Logging Jira defect, retesting build, triage",
              "Regression testing cycle required"
            ],
            [
              "Production Release",
              "100x - 1,000x+ ($100,000+)",
              "Emergency hotfix, rollbacks, customer support, legal liability, churn",
              "Reputational damage, financial loss, SLA breach"
            ]
          ]
        }
      },
      {
        "id": "historic-failures",
        "heading": "Historic Software Catastrophes Caused by Missing Tests",
        "paragraphs": [
          "History demonstrates why thorough quality assurance is essential to modern society:",
          "1. Ariane 5 Flight 501 (1996): A 64-bit floating point number was converted into a 16-bit signed integer without overflow validation. The resulting exception destroyed a $370 million spacecraft 37 seconds after launch.",
          "2. Knight Capital Trading Glitch (2012): Dead, obsolete test code was repurposed on 7 servers while an 8th was missed. When activated, the rogue code executed millions of erroneous buy orders, losing $440 million in 45 minutes and bankrupting the firm.",
          "3. Therac-25 Radiation Tragedy (1985-1987): A race condition in software controlling radiation therapy machines delivered lethal radiation doses to patients due to missing concurrency boundary testing.",
          "4. NASA Mars Climate Orbiter (1999): One team used Imperial units (pound-seconds) while another used Metric (newton-seconds). The software failure caused the $327 million spacecraft to burn up in Mars' atmosphere.",
          "5. Patriot Missile Tracking Failure (1991): A floating-point rounding error in the system clock accumulated over 100 hours of uptime, shifting the radar range gate by 0.34 seconds and failing to intercept an incoming missile."
        ]
      },
      {
        "id": "qa-vs-qc-vs-qe",
        "heading": "QA vs QC vs QE: Understanding the Distinct Roles",
        "paragraphs": [
          "Although frequently used interchangeably, Quality Assurance (QA), Quality Control (QC), and Quality Engineering (QE) serve distinct objectives:"
        ],
        "table": {
          "headers": [
            "Attribute",
            "Quality Assurance (QA)",
            "Quality Control (QC)",
            "Quality Engineering (QE)"
          ],
          "rows": [
            [
              "Primary Focus",
              "Process-oriented (Prevention)",
              "Product-oriented (Detection)",
              "Architecture & Enablement"
            ],
            [
              "Key Question",
              "'Are we following the right processes to prevent bugs?'",
              "'Did we find all the existing bugs in this build?'",
              "'Can we engineer tools and pipelines for continuous quality?'"
            ],
            [
              "Timing",
              "Proactive throughout SDLC planning & design",
              "Reactive during and after test execution on built code",
              "Continuous across infrastructure, CI/CD, and test harnesses"
            ],
            [
              "Core Tasks",
              "Process audits, PR reviews, requirement refinement, standardizing DoR",
              "Executing manual test runs, logging Jira tickets, smoke testing",
              "Building automated frameworks, synthetic monitoring, load harnesses"
            ]
          ]
        }
      },
      {
        "id": "7-principles-testing",
        "heading": "The 7 Fundamental Principles of Testing (ISTQB Standard)",
        "paragraphs": [
          "Every professional tester must master these 7 foundational tenets established by the International Software Testing Qualifications Board (ISTQB):",
          "1. Testing shows the presence of defects, not their absence: Testing reduces the probability of undiscovered defects remaining in the software, but even if no defects are found, it is never proof of 100% correctness.",
          "2. Exhaustive testing is impossible: Testing all combinations of inputs and preconditions is mathematically intractable for non-trivial systems. Instead, testers apply risk assessment, Equivalence Partitioning, and Boundary Value Analysis.",
          "3. Early testing saves time and money (Shift-Left): Static testing activities (requirement reviews, user story refinements) should start as early as possible in the life cycle.",
          "4. Defect clustering (Pareto Principle): A small number of modules usually contain most of the defects discovered during pre-release testing (approx. 80% of defects originate from 20% of modules).",
          "5. Beware of the pesticide paradox: If the same tests are repeated over and over, eventually the same set of test cases will no longer find any new defects. Test cases must be regularly reviewed, updated, and supplemented with exploratory testing.",
          "6. Testing is context dependent: Testing a high-frequency banking payment system requires vastly different risk modeling, security rigor, and compliance checks than testing an internal marketing blog.",
          "7. Absence-of-errors is a fallacy: Fixing 99% of bugs does not guarantee the success of a system if the built system does not fulfill user requirements or business value."
        ],
        "checklist": [
          "Never claim a software build is '100% bug-free'—report objective test coverage and remaining risk.",
          "Apply BVA and ECP to avoid wasteful exhaustive combinations.",
          "Review user stories before developer coding begins (Shift-Left).",
          "Identify complex modules (e.g. billing, checkout) where defects typically cluster.",
          "Rotate exploratory charters periodically to avoid the pesticide paradox."
        ]
      }
    ]
  },
  "manual-sdlc-models": {
    "id": "manual-sdlc-models",
    "title": "Software Development Life Cycle (SDLC) Models Deep Dive",
    "category": "1. Foundations & Core Principles",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Comprehensive breakdown of SDLC phases and comparative analysis of Waterfall, V-Model, Iterative, Spiral, and Agile Scrum delivery models with QA responsibilities.",
    "sections": [
      {
        "id": "what-is-sdlc",
        "heading": "What is the Software Development Life Cycle (SDLC)?",
        "paragraphs": [
          "The Software Development Life Cycle (SDLC) is a structured framework that outlines the sequential and iterative phases required to conceive, design, build, test, deploy, and maintain an enterprise software product.",
          "The 6 standard phases include:",
          "1. Requirement Gathering & Analysis: Business analysts and product managers gather customer requirements and produce Software Requirement Specifications (SRS) or PRDs.",
          "2. System Design & Architecture: Architects define technical stack, database schemas, microservice topologies, and API contracts.",
          "3. Implementation / Coding: Software engineers write code according to the architecture designs.",
          "4. Testing & Verification: QA engineers execute verification and validation activities to ensure conformance and stability.",
          "5. Deployment: Release of the software to staging, UAT, and production environments.",
          "6. Maintenance & Monitoring: Monitoring production metrics, applying security patches, and fixing runtime issues."
        ]
      },
      {
        "id": "v-model",
        "heading": "The V-Model: Direct Mapping Between Dev & QA",
        "paragraphs": [
          "The V-Model (Verification and Validation Model) explicitly associates every development phase with a corresponding testing level, demonstrating that test planning starts simultaneously with requirement gathering:"
        ],
        "table": {
          "headers": [
            "Development Phase (Left Wing)",
            "Corresponding Testing Phase (Right Wing)",
            "Primary Objective"
          ],
          "rows": [
            [
              "Business Requirement Analysis",
              "User Acceptance Testing (UAT)",
              "Validate software against original customer business goals"
            ],
            [
              "System Requirement Specs (SRS)",
              "System Testing",
              "Verify end-to-end functionality, security, and performance"
            ],
            [
              "High-Level Architecture Design",
              "Integration Testing",
              "Verify interfaces and data flow between integrated modules"
            ],
            [
              "Low-Level Design (Class / DB)",
              "Unit Testing",
              "Verify individual methods, algorithms, and class logic"
            ],
            [
              "Coding (Apex of the V)",
              "Static Code Analysis / Peer Review",
              "Verify code syntax, linting, and internal logic standards"
            ]
          ]
        }
      },
      {
        "id": "sdlc-models-comparison",
        "heading": "Waterfall vs V-Model vs Agile Scrum vs Kanban: Comparison",
        "paragraphs": [
          "Understanding when to apply each model is an essential skill for QA leadership:"
        ],
        "table": {
          "headers": [
            "Criterion",
            "Waterfall Model",
            "V-Model",
            "Agile Scrum",
            "Kanban"
          ],
          "rows": [
            [
              "Workflow Structure",
              "Strictly linear and sequential",
              "Rigid parallel V-shape (Dev vs QA)",
              "Iterative 1-2 week sprint increments",
              "Continuous flow with WIP limits"
            ],
            [
              "Requirement Flexibility",
              "Extremely rigid; change requests expensive",
              "Rigid; requirements locked early",
              "High; backlogs continuously refined",
              "Maximum; tickets prioritized continuously"
            ],
            [
              "When QA Starts",
              "Late in the cycle after coding completes",
              "Early parallel planning, execution late",
              "Continuous from Day 1 in every sprint",
              "Continuous at every task state"
            ],
            [
              "Feedback Loop",
              "Months or years until working software",
              "Long feedback cycles until system stage",
              "Continuous feedback at sprint reviews",
              "Instantaneous cycle time feedback"
            ],
            [
              "Best Suited For",
              "Fixed-scope aerospace, medical firmware",
              "Safety-critical banking and defense",
              "Modern web, mobile apps, SaaS, FinTech",
              "Maintenance, DevOps, support teams"
            ]
          ]
        },
        "keyTakeaways": [
          "Waterfall is risky for modern software because defects found late cost 100x more to fix.",
          "The V-Model proves that test planning begins on Day 1 alongside requirements analysis.",
          "Agile Scrum integrates QA into cross-functional teams, avoiding the 'throw it over the wall' syndrome."
        ]
      }
    ]
  },
  "manual-stlc-lifecycle": {
    "id": "manual-stlc-lifecycle",
    "title": "Software Testing Life Cycle (STLC) 6 Detailed Phases & Quality Gates",
    "category": "1. Foundations & Core Principles",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Master the 6 formal stages of the Software Testing Life Cycle (STLC) with detailed entry criteria, activities, deliverables, and exit criteria for each quality gate.",
    "sections": [
      {
        "id": "what-is-stlc",
        "heading": "What is the Software Testing Life Cycle (STLC)?",
        "paragraphs": [
          "The Software Testing Life Cycle (STLC) is a structured sequence of specific testing activities executed by QA professionals to ensure that software quality goals are systematically met.",
          "Unlike SDLC which encompasses the entire product creation, STLC focuses exclusively on quality verification and validation phases.",
          "Every STLC phase operates under strict Quality Gates: an Entry Criteria (prerequisites required to start) and an Exit Criteria (deliverables required before advancing)."
        ]
      },
      {
        "id": "stlc-6-phases",
        "heading": "The 6 Formal STLC Phases Breakdown",
        "paragraphs": [
          "The standard STLC flow proceeds through 6 distinct stages:"
        ],
        "table": {
          "headers": [
            "STLC Phase",
            "Entry Criteria",
            "Core Activities",
            "Exit Criteria & Deliverables"
          ],
          "rows": [
            [
              "1. Requirement Analysis",
              "Signed PRD / SRS / Figma wireframes available",
              "Identify testable requirements, clarify ambiguities, identify gaps with PM",
              "RTM (Requirements Traceability Matrix), Requirement Clarification Log"
            ],
            [
              "2. Test Planning",
              "Requirement document approved, scope frozen",
              "Define test strategy, estimate effort, assign resources, determine test environment",
              "Master Test Plan (IEEE 829), Effort Estimation document"
            ],
            [
              "3. Test Case Design",
              "Test plan approved, user stories refined",
              "Write detailed test cases, test data creation, derive boundary values and decision tables",
              "Reviewed Test Cases, Test Data sets, Updated RTM"
            ],
            [
              "4. Environment Setup",
              "Architecture specs and hardware/software ready",
              "Provision QA staging servers, seed test database, verify network and build deployment",
              "Ready QA Environment, Smoke Test Pass confirmation"
            ],
            [
              "5. Test Execution",
              "Build deployed to QA, test cases approved",
              "Execute manual test cases, log defects in Jira, perform retesting and regression runs",
              "Defect Reports, Test Execution Log, Bug Metrics"
            ],
            [
              "6. Test Closure",
              "Testing completed, exit criteria met, no blocker bugs",
              "Analyze test metrics, evaluate defect density, conduct QA retro, formal sign-off",
              "Test Summary Report (TSR), QA Release Sign-Off Certificate"
            ]
          ]
        },
        "checklist": [
          "Check that Entry Criteria are 100% satisfied before initiating any testing phase.",
          "Always maintain a live Requirement Clarification document during Phase 1.",
          "Verify the QA environment with a 15-minute smoke pass before beginning formal execution.",
          "Do not sign off on a release if any P1/Blocker defect remains open without VP engineering sign-off."
        ]
      }
    ]
  },
  "manual-verification-validation": {
    "id": "manual-verification-validation",
    "title": "Verification vs Validation & Static vs Dynamic Testing",
    "category": "1. Foundations & Core Principles",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Master the fundamental differences between Verification ('building it right') and Validation ('building the right thing'), static inspections, reviews, and dynamic execution.",
    "sections": [
      {
        "id": "verification-vs-validation",
        "heading": "Verification vs Validation: The Core Distinctions",
        "paragraphs": [
          "Software engineering quality is evaluated through two complementary dimensions:"
        ],
        "table": {
          "headers": [
            "Criterion",
            "Verification ('Building it Right')",
            "Validation ('Building the Right Thing')"
          ],
          "rows": [
            [
              "Core Question",
              "'Are we building the product according to specifications?'",
              "'Are we building the product that the user actually needs?'"
            ],
            [
              "Nature of Activity",
              "Static testing (no code execution)",
              "Dynamic testing (executing software on devices)"
            ],
            [
              "Target Work Products",
              "PRDs, architecture diagrams, database schemas, source code",
              "Deployed builds, running APIs, staging web applications"
            ],
            [
              "Methods Used",
              "Peer reviews, walkthroughs, static code analysis, inspections",
              "Functional testing, integration testing, UAT, exploratory runs"
            ],
            [
              "Conducted By",
              "Developers, QA, Business Analysts, System Architects",
              "QA Engineers, Beta Testers, End Users, Product Managers"
            ],
            [
              "Cost Impact",
              "Lowest cost to catch defects (early in SDLC)",
              "Higher cost to fix defects (later in SDLC)"
            ]
          ]
        }
      },
      {
        "id": "static-testing-reviews",
        "heading": "Static Testing: The 4 Formal Review Types",
        "paragraphs": [
          "Static testing finds defects directly in documents and code without running the software:",
          "1. Informal Review: An informal peer review with no formal protocol, such as two engineers reviewing a user story or diagram over coffee.",
          "2. Walkthrough: The author of the document guides peers through the work product to gather feedback, explain design decisions, and achieve consensus.",
          "3. Technical Review: A peer group of qualified technical experts analyzes conformance with architecture standards, maintainability, and security.",
          "4. Formal Inspection (Fagan Inspection): The most rigorous static technique with defined roles (Moderator, Author, Reader, Scribe, Inspector) and 6 formal phases (Planning, Overview, Preparation, Inspection Meeting, Rework, Follow-up)."
        ],
        "keyTakeaways": [
          "Verification ensures conformance to technical specs; validation ensures market fitness.",
          "Static testing catches 50-60% of all software defects before a single line of test code is run.",
          "Fagan Inspections have the highest defect removal rate of any quality practice in software engineering."
        ]
      }
    ]
  },
  "manual-agile-scrum": {
    "id": "manual-agile-scrum",
    "title": "Agile Scrum QA & Sprint Ceremonies Mastery",
    "category": "2. Agile QA & Team Workflows",
    "sourceUrl": "https://www.scrum.org/",
    "description": "Operate as a high-impact embedded QA engineer in modern Agile Scrum sprints: ceremonies, three amigos meetings, velocity metrics, and avoiding the mini-waterfall trap.",
    "sections": [
      {
        "id": "agile-values-qa",
        "heading": "Agile Principles & The QA Transformation",
        "paragraphs": [
          "In traditional Waterfall projects, QA was a gated police checkpoint at the end of the timeline. In Agile Scrum, Quality is a continuous shared responsibility across the entire cross-functional team.",
          "The 4 core values of the Agile Manifesto reshape daily QA:",
          "1. Individuals and interactions over processes and tools: QA collaborates directly with developers at their desks rather than tossing Jira tickets across departmental silos.",
          "2. Working software over comprehensive documentation: Lean, executable test charters and prioritized checklists replace bloated 200-page test plan binders.",
          "3. Customer collaboration over contract negotiation: QA tests from the perspective of user personas and customer value journeys.",
          "4. Responding to change over following a plan: QA welcomes evolving sprint scope with adaptive regression strategies."
        ]
      },
      {
        "id": "scrum-ceremonies-qa",
        "heading": "The 5 Scrum Ceremonies & QA's Specific Role in Each",
        "paragraphs": [
          "A professional QA engineer actively drives quality in every sprint ceremony:",
          "1. Sprint Planning: QA reviews candidate stories, challenges vague acceptance criteria, estimates QA effort (not just dev coding time), and sets capacity based on regression needs.",
          "2. Daily Standup (15 mins): QA reports 3 essential data points: what test execution was completed, what builds are currently being tested, and what blockers/critical bugs prevent progress.",
          "3. Backlog Refinement / 3 Amigos Meeting: Product Owner, Developer, and QA examine future stories. QA asks 'What if?' questions to expose edge cases and formulate positive and negative test scenarios.",
          "4. Sprint Review / Demo: QA demonstrates verified features to stakeholders, provides quality metrics, and confirms acceptance criteria satisfaction.",
          "5. Sprint Retrospective: QA analyzes escaped defects, staging environment flakiness, and process bottlenecks to continuously improve team velocity."
        ],
        "callouts": [
          {
            "type": "warning",
            "title": "The Mini-Waterfall Trap",
            "text": "If developers write code for 8 days and dump all tickets on QA on Day 9 of a 10-day sprint, your team is practicing mini-waterfall, not Agile! Enforce continuous delivery of stories throughout the sprint."
          }
        ],
        "keyTakeaways": [
          "QA must estimate test effort during sprint planning; never estimate story points based solely on dev coding hours.",
          "The Three Amigos meeting is where 60% of requirement ambiguities and potential bugs are eliminated before coding.",
          "In Agile, testing is not a phase; testing is an ongoing activity that runs in parallel with development."
        ]
      }
    ]
  },
  "manual-user-stories-dor-dod": {
    "id": "manual-user-stories-dor-dod",
    "title": "User Stories, Gherkin BDD & DoR vs DoD Standards",
    "category": "2. Agile QA & Team Workflows",
    "sourceUrl": "https://cucumber.io/docs/gherkin/",
    "description": "Deconstruct Agile user stories using the INVEST quality criteria, write unambiguous Given-When-Then acceptance criteria in Gherkin, and establish ironclad DoR and DoD gates.",
    "sections": [
      {
        "id": "invest-model",
        "heading": "The INVEST Criteria for Testable User Stories",
        "paragraphs": [
          "Every user story entering a sprint backlog must satisfy Bill Wake's INVEST quality standard:",
          "1. Independent: The story can be developed, tested, and deployed without tightly coupling to another story.",
          "2. Negotiable: Details are co-created through collaboration between Product, Dev, and QA.",
          "3. Valuable: Delivers clear, tangible value to the end user or business.",
          "4. Estimable: Team understands the technical scope sufficiently to assign accurate story points.",
          "5. Small: Scoped to be completed, tested, and verified within a single sprint iteration (typically 2-5 days).",
          "6. Testable: Unambiguous acceptance criteria exist that allow QA to determine pass or fail definitively."
        ]
      },
      {
        "id": "gherkin-bdd-syntax",
        "heading": "Writing Acceptance Criteria in Gherkin Syntax",
        "paragraphs": [
          "Gherkin provides structured, human-readable specifications using the Given-When-Then pattern:"
        ],
        "codeBlocks": [
          {
            "title": "E-Commerce Checkout Gherkin Example",
            "language": "gherkin",
            "code": "Feature: Coupon Code Discount Validation\n\n  Scenario: Successfully apply valid 20% festive discount\n    Given a logged-in customer has a cart total of ₹2,000.00\n    And the promo code \"DIWALI20\" is active in the promotion system\n    When the customer enters \"DIWALI20\" in the discount code input\n    And clicks the \"Apply Coupon\" button\n    Then a success message \"Coupon applied! You saved ₹400.00\" should appear\n    And the order subtotal should update to ₹1,600.00\n    And the tax calculation should recalculate based on ₹1,600.00\n\n  Scenario: Prevent applying an expired discount code\n    Given a customer has items in the cart\n    When the customer enters expired coupon \"SUMMER10\"\n    And clicks \"Apply Coupon\"\n    Then an error banner \"This coupon expired on 31-Aug-2026\" should be displayed\n    And no discount should be applied to the order total"
          }
        ]
      },
      {
        "id": "dor-vs-dod",
        "heading": "Definition of Ready (DoR) vs Definition of Done (DoD)",
        "paragraphs": [
          "DoR and DoD prevent misunderstandings between Product, Engineering, and QA:"
        ],
        "table": {
          "headers": [
            "Attribute",
            "Definition of Ready (DoR)",
            "Definition of Done (DoD)"
          ],
          "rows": [
            [
              "Purpose",
              "Guarantees a story is clear and ready for development to begin.",
              "Guarantees a completed feature is production-ready and fully tested."
            ],
            [
              "When Enforced",
              "Before sprint planning and task pickup.",
              "Before a user story is closed or merged into the release branch."
            ],
            [
              "Key Stakeholders",
              "Product Owner, Tech Lead, QA Engineer.",
              "Entire Scrum Team (Dev, QA, DevOps, PO)."
            ],
            [
              "Failure Outcome",
              "Story is rejected from sprint planning back to refinement.",
              "Story cannot be demoed or marked closed in Jira."
            ]
          ]
        },
        "checklist": [
          "DoR: Business value and user persona clearly documented.",
          "DoR: Acceptance criteria defined in Given-When-Then format.",
          "DoR: Edge cases and error states documented in Figma mocks.",
          "DoD: Unit test coverage >= 80% achieved by development.",
          "DoD: QA functional and boundary test cases passed 100%.",
          "DoD: Zero open P1/Blocker or P2/Critical defects remaining.",
          "DoD: Feature branch deployed and verified on staging environment."
        ]
      }
    ]
  },
  "manual-defect-triage-signoff": {
    "id": "manual-defect-triage-signoff",
    "title": "Defect Triage, TSR & Production QA Sign-Off Protocol",
    "category": "2. Agile QA & Team Workflows",
    "sourceUrl": "https://www.atlassian.com/agile/quality",
    "description": "Conduct high-efficiency defect triage meetings, draft standard enterprise Test Summary Reports (TSR), and issue formal production release QA sign-off certificates.",
    "sections": [
      {
        "id": "defect-triage-protocol",
        "heading": "The Defect Triage Meeting Protocol",
        "paragraphs": [
          "Defect Triage is a recurring collaborative session where new bugs are reviewed, prioritized, and assigned to balance product quality against release velocity.",
          "Key Attendees (The Core Triad):",
          "1. QA Lead / QA Engineer: Explains the bug reproduction steps, severity, user impact, and device scope.",
          "2. Engineering Lead / Developer: Estimates technical effort to fix, architectural risk, and potential regression radius.",
          "3. Product Manager / Owner: Decides business urgency (Priority), commercial impact, and release timeline.",
          "The 4 Triage Outcomes:",
          "1. Fix Immediately (P1/P2): Bug must be resolved in current sprint before release.",
          "2. Defer to Next Sprint (P3): Low business impact; scheduled into backlog.",
          "3. Reject / Not a Bug: Behavior conforms to approved business requirements.",
          "4. Need More Information: QA requested to capture network HAR logs, video proof, or system telemetry."
        ]
      },
      {
        "id": "tsr-template",
        "heading": "Test Summary Report (TSR) Enterprise Structure",
        "paragraphs": [
          "At the end of testing, QA publishes a formal TSR summarizing quality health for stakeholders:"
        ],
        "codeBlocks": [
          {
            "title": "Standard Test Summary Report Template",
            "language": "markdown",
            "code": "# TEST SUMMARY REPORT: RELEASE v3.14.0\n**Project:** Consumer Checkout & Payment Gateway Overhaul\n**Date:** 15-Oct-2026 | **Lead QA:** Deepak Gupta\n**Release Recommendation:** GO FOR PRODUCTION DEPLOYMENT\n\n### 1. Executive Summary\nDuring the 2-week testing cycle for Release v3.14.0, 142 total test cases were executed across Web, Android, and iOS. All 18 planned user stories have satisfied their Definition of Done.\n\n### 2. Test Execution Metrics\n- Total Planned Tests: 142\n- Executed: 142 (100%)\n- Passed: 139 (97.9%)\n- Failed: 0 (0%)\n- Blocked / Deferred: 3 (2.1% - minor cosmetic backlog items)\n\n### 3. Defect Metrics\n- Total Bugs Discovered: 28\n- Fixed & Retested: 25\n- Open Blocker (P1): 0 (Zero Tolerance Met)\n- Open Critical (P2): 0 (Zero Tolerance Met)\n- Open Major (P3): 2 (Approved for next patch)\n- Open Minor (P4): 1 (Cosmetic alignment)\n\n### 4. Risk Assessment & Known Issues\n- PROD-BUG-412: Minor 2-pixel icon misalignment on iPad mini in landscape mode (Low risk).\n- Performance: Checkout API latency averaged 210ms under 500 concurrent virtual users (Within 300ms SLA).\n\n### 5. Final QA Sign-Off\nI hereby certify that Release v3.14.0 has successfully passed all quality gates, regression validation, and security compliance checks.\n**Signed:** Deepak Gupta (Lead QA Engineer)"
          }
        ]
      }
    ]
  },
  "manual-functional-testing": {
    "id": "manual-functional-testing",
    "title": "Functional Testing Deep Dive: Unit, Integration, System & UAT",
    "category": "3. Testing Types Encyclopedia",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Explore the 4 standard functional testing levels: unit, integration strategies (stubs vs drivers), end-to-end system testing, and User Acceptance Testing (Alpha vs Beta).",
    "sections": [
      {
        "id": "functional-levels-overview",
        "heading": "The 4 Formal Levels of Functional Testing",
        "paragraphs": [
          "Functional testing validates what the system does against functional specifications, input data, and expected output states across 4 primary layers:"
        ],
        "table": {
          "headers": [
            "Level",
            "Focus Area",
            "Test Basis",
            "Primary Performer"
          ],
          "rows": [
            [
              "1. Unit Testing",
              "Individual functions, methods, classes, and algorithms in isolation",
              "Component specifications, low-level design",
              "Software Developers"
            ],
            [
              "2. Integration Testing",
              "Interfaces and data communication between integrated modules or microservices",
              "API contracts, high-level architecture",
              "Developers & QA Engineers"
            ],
            [
              "3. System Testing (SIT)",
              "Complete, fully integrated application end-to-end functionality and business flows",
              "System requirements (SRS / PRD)",
              "Dedicated QA Engineers"
            ],
            [
              "4. User Acceptance (UAT)",
              "Real-world user readiness, business process validation, and contract fulfillment",
              "Business requirements, user journeys",
              "Product Managers, Beta Users, Clients"
            ]
          ]
        }
      },
      {
        "id": "integration-strategies",
        "heading": "Integration Testing Strategies: Stubs, Drivers & Approaches",
        "paragraphs": [
          "When combining software modules, teams utilize 4 classic integration methodologies:",
          "1. Big Bang Integration: All modules are combined simultaneously and tested all at once. Risky and difficult to isolate bug origin.",
          "2. Top-Down Integration: Testing starts from highest-level modules down to lower modules. Unwritten lower modules are simulated using 'Stubs' (dummy modules called by parent).",
          "3. Bottom-Up Integration: Testing starts from foundational unit modules upward. Unwritten higher-level calling modules are simulated using 'Drivers' (dummy modules that invoke child).",
          "4. Sandwich / Hybrid Integration: Combines top-down and bottom-up approaches around a central functional core layer."
        ],
        "callouts": [
          {
            "type": "tip",
            "title": "Stubs vs Drivers Rule of Thumb",
            "text": "Stub: A dummy program called BY the module under test. Driver: A dummy program that CALLS the module under test."
          }
        ]
      },
      {
        "id": "uat-testing",
        "heading": "User Acceptance Testing (UAT): Alpha vs Beta",
        "paragraphs": [
          "UAT is the final gate before public commercial availability:",
          "1. Alpha Testing: Performed at the developer's site by internal employees and cross-functional teams in a controlled staging environment.",
          "2. Beta Testing: Performed at external customer sites by real end-users in real-world production environments with genuine user hardware and networks.",
          "3. Contract Acceptance Testing: Verifies specific contractual terms agreed upon in custom enterprise software contracts.",
          "4. Regulatory Acceptance Testing: Validates compliance with legal standards (HIPAA for healthcare, PCI-DSS for credit cards, GDPR for privacy)."
        ]
      }
    ]
  },
  "manual-non-functional-testing": {
    "id": "manual-non-functional-testing",
    "title": "Non-Functional Testing: Performance, Usability & Compatibility",
    "category": "3. Testing Types Encyclopedia",
    "sourceUrl": "https://www.nngroup.com/articles/ten-usability-heuristics/",
    "description": "Verify operational quality attributes: the 6 types of performance testing, Nielsen Norman 10 Usability Heuristics, cross-browser/device compatibility matrices, and L10n vs I18n.",
    "sections": [
      {
        "id": "performance-testing-types",
        "heading": "The 6 Core Performance Testing Types",
        "paragraphs": [
          "Performance testing evaluates speed, responsiveness, resource consumption, and stability under varied workloads:",
          "1. Load Testing: Validates system behavior under expected normal and peak business traffic (e.g., 5,000 concurrent shopping users).",
          "2. Stress Testing: Pushes traffic beyond maximum capacity until the system breaks to observe graceful degradation and recovery.",
          "3. Endurance / Soak Testing: Applies sustained moderate load over long periods (24 to 72 hours) to detect memory leaks, database connection pool exhaustion, and CPU throttling.",
          "4. Spike Testing: Evaluates response when traffic suddenly surges by 500-1000% within seconds (e.g., flash sales, ticket drops) and drops back down.",
          "5. Volume Testing: Floods the database with millions of records to test query performance, disk I/O, and pagination efficiency.",
          "6. Scalability Testing: Determines the capacity limit when hardware resources (CPU, RAM, container replicas) are scaled up or out."
        ]
      },
      {
        "id": "usability-heuristics",
        "heading": "Usability Testing: Jakob Nielsen's 10 Heuristics for QA",
        "paragraphs": [
          "Every manual tester must evaluate UX using Jakob Nielsen's foundational principles:",
          "1. Visibility of system status: Provide feedback with spinners, progress bars, and status pills.",
          "2. Match between system and the real world: Use plain language, familiar icons, and real-world concepts.",
          "3. User control and freedom: Provide clear 'Undo', 'Redo', and 'Cancel' options when users make mistakes.",
          "4. Consistency and standards: Maintain uniform typography, button styles, and navigation patterns.",
          "5. Error prevention: Prevent errors before they happen (disable submit buttons, confirm destructive actions).",
          "6. Recognition rather than recall: Make options visible; don't force users to remember information across steps.",
          "7. Flexibility and efficiency of use: Provide keyboard shortcuts and accelerators for expert users.",
          "8. Aesthetic and minimalist design: Remove redundant clutter that distracts from core action buttons.",
          "9. Help users recognize, diagnose, and recover from errors: Error messages must state the problem in plain text and suggest a solution.",
          "10. Help and documentation: Provide contextual tooltips and searchable help centers."
        ]
      },
      {
        "id": "l10n-vs-i18n",
        "heading": "Localization (L10n) vs Internationalization (I18n)",
        "paragraphs": [
          "Global enterprise software requires rigorous linguistic and cultural verification:"
        ],
        "table": {
          "headers": [
            "Criterion",
            "Internationalization (I18n)",
            "Localization (L10n)"
          ],
          "rows": [
            [
              "Definition",
              "Engineering the codebase to support multiple languages without code changes.",
              "Adapting the software for a specific country, locale, culture, and language."
            ],
            [
              "Timing",
              "During architecture and design phase (Developer responsibility).",
              "During content translation and market rollout (QA & Linguist responsibility)."
            ],
            [
              "Key Verification Items",
              "UTF-8 Unicode encoding, dynamic string replacement, supporting right-to-left (RTL) text.",
              "Correct date formats (DD/MM vs MM/DD), currencies (₹, $, €), translated text overflow."
            ]
          ]
        }
      }
    ]
  },
  "manual-smoke-sanity-regression": {
    "id": "manual-smoke-sanity-regression",
    "title": "Smoke, Sanity, Regression & Retesting Masterclass",
    "category": "3. Testing Types Encyclopedia",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Never confuse these essential testing types again: the definitive 4-way comparative matrix, test selection strategies, regression prioritization, and retesting verification.",
    "sections": [
      {
        "id": "comparative-matrix",
        "heading": "Smoke vs Sanity vs Regression vs Retesting: 4-Way Matrix",
        "paragraphs": [
          "These 4 terms represent distinct testing objectives that every QA engineer must clearly differentiate:"
        ],
        "table": {
          "headers": [
            "Attribute",
            "Smoke Testing",
            "Sanity Testing",
            "Regression Testing",
            "Retesting"
          ],
          "rows": [
            [
              "Objective",
              "Verify basic critical stability to accept or reject new build.",
              "Quick check of specific bug fixes or modified module.",
              "Ensure recent code changes have NOT broken untouched existing features.",
              "Verify that a specifically logged defect is genuinely fixed."
            ],
            [
              "Scope",
              "Broad & shallow (critical end-to-end paths only).",
              "Narrow & deep (only the affected module).",
              "Broad & deep (impacted areas and dependent modules).",
              "Extremely narrow (only the exact failed test case steps)."
            ],
            [
              "When Performed",
              "Immediately after a new build is deployed to QA.",
              "After receiving a minor bug-fix build from dev.",
              "Before major release, after bug fixes and feature merges.",
              "Immediately upon receiving a bug marked 'FIXED'."
            ],
            [
              "Subset Of",
              "Acceptance / Build Verification Test.",
              "Subset of Regression Testing.",
              "Comprehensive Test Suite.",
              "Targeted Defect Verification."
            ],
            [
              "Execution Time",
              "Fast (10 - 20 minutes).",
              "Fast (30 - 45 minutes).",
              "Extensive (Hours or Days, or automated).",
              "Very fast (2 - 5 minutes per bug)."
            ]
          ]
        }
      },
      {
        "id": "retesting-vs-regression",
        "heading": "Retesting vs Regression: The Classic Interview Distinction",
        "paragraphs": [
          "Understanding the exact difference is crucial for release planning:",
          "1. Retesting: You found a bug where clicking 'Submit' with an invalid email threw an HTTP 500 error. The developer marked it fixed. You run the EXACT SAME test steps to verify that the HTTP 500 error no longer occurs and a friendly validation message appears.",
          "2. Regression Testing: After verifying the email fix, you test user registration, password reset, and Google SSO to ensure the developer's code change didn't inadvertently break existing authentication features."
        ],
        "keyTakeaways": [
          "Smoke test: Is the build stable enough to test? (Build verification).",
          "Sanity test: Is the modified feature functioning as expected? (Quick verification).",
          "Retesting: Did the developer fix the exact bug reported? (Defect verification).",
          "Regression testing: Did the bug fix break anything else? (Side-effect verification)."
        ]
      }
    ]
  },
  "manual-exploratory-testing": {
    "id": "manual-exploratory-testing",
    "title": "Exploratory Testing, Charters & Heuristic Frameworks",
    "category": "3. Testing Types Encyclopedia",
    "sourceUrl": "https://www.satisfice.com/",
    "description": "Master exploratory testing: simultaneous learning, test design and execution, crafting test charters, Session-Based Test Management (SBTM), and James Bach's SFDIPOT heuristics.",
    "sections": [
      {
        "id": "what-is-exploratory-testing",
        "heading": "What is Exploratory Testing?",
        "paragraphs": [
          "Cem Kaner formally defined Exploratory Testing as: 'An approach to software testing that emphasizes the personal freedom and responsibility of the individual tester to continually optimize the quality of his/her work by treating test-related learning, test design, test execution, and test result interpretation as mutually supportive activities that run in parallel throughout the project.'",
          "Exploratory testing is NOT chaotic, unstructured ad-hoc testing. It is disciplined, timeboxed heuristic exploration guided by focused charters."
        ]
      },
      {
        "id": "test-charters-sbtm",
        "heading": "Test Charters & Session-Based Test Management (SBTM)",
        "paragraphs": [
          "Session-Based Test Management (SBTM) organizes exploratory testing into structured, reportable units called sessions (typically 60-90 minutes).",
          "Every session is driven by a Test Charter following this standard formula:",
          "'Explore [Target / Feature] with [Resources / Tools] to discover [Information / Potential Risks]'"
        ],
        "codeBlocks": [
          {
            "title": "Production Exploratory Test Charter Example",
            "language": "markdown",
            "code": "### EXPLORATORY TEST CHARTER\n**Charter ID:** CHARTER-CHECKOUT-004\n**Target:** Multi-currency payment checkout flow\n**Tester:** Deepak Gupta | **Timebox:** 90 Minutes\n**Charter Statement:** Explore currency conversion, decimal precision, and foreign card processing using Charles Proxy latency throttling and Indian/US test cards to discover rounding anomalies and timeout race conditions.\n\n### Session Debrief Notes\n- Found Bug #1: When switching from USD ($49.99) to INR, system rounds ₹4,149.171 to ₹4,149.00 causing a 17-paisa reconciliation mismatch in ledger.\n- Found Bug #2: Slow 3G network causes card expiration dropdown to freeze during auto-fill.\n- Opportunity: Add currency flag icon beside the price input for clearer visual confirmation."
          }
        ]
      },
      {
        "id": "heuristics-sfdipot",
        "heading": "James Bach's SFDIPOT Heuristic Taxonomy",
        "paragraphs": [
          "When exploring complex software, use the 'San Francisco Depot' mnemonic to cover all dimensions:",
          "1. Structure: Everything that makes up the product (code, database schemas, hardware, libraries).",
          "2. Function: Everything the software does (calculations, transformations, inputs, outputs).",
          "3. Data: Everything the product processes (formats, boundaries, corrupt files, extreme volumes).",
          "4. Interfaces: Every entry and exit conduit (APIs, UI forms, CLI, websockets, webhooks).",
          "5. Platform: The environment the software relies upon (OS versions, browsers, network topologies).",
          "6. Operations: How real users will interact (personas, usage habits, concurrent users).",
          "7. Time: Relationships across time (timezones, leap years, timeouts, daylight saving transitions)."
        ]
      }
    ]
  },
  "manual-50-testing-types": {
    "id": "manual-50-testing-types",
    "title": "50+ Software Testing Types Master Taxonomy",
    "category": "3. Testing Types Encyclopedia",
    "sourceUrl": "https://www.istqb.org/",
    "description": "The definitive encyclopedia of 50+ software testing types categorized by objective, execution level, and engineering phase with concise industry definitions.",
    "sections": [
      {
        "id": "testing-types-taxonomy",
        "heading": "The Complete Software Testing Taxonomy",
        "paragraphs": [
          "Over 50 distinct testing types exist in modern software engineering. Here is the categorized master reference:"
        ],
        "table": {
          "headers": [
            "Category",
            "Testing Type",
            "Primary Focus & Description"
          ],
          "rows": [
            [
              "Functional",
              "Unit Testing",
              "Testing individual methods, classes, and code units in isolation."
            ],
            [
              "Functional",
              "Integration Testing",
              "Verifying communication and data flow between integrated modules."
            ],
            [
              "Functional",
              "System Testing (SIT)",
              "End-to-end evaluation of the integrated system against specs."
            ],
            [
              "Functional",
              "Smoke Testing",
              "Sanity check of critical core paths to verify build stability."
            ],
            [
              "Functional",
              "Sanity Testing",
              "Targeted testing of a specific feature or bug-fix build."
            ],
            [
              "Functional",
              "Regression Testing",
              "Verifying untouched features remain unbroken after code modifications."
            ],
            [
              "Functional",
              "Retesting",
              "Verifying that a specifically logged defect is resolved."
            ],
            [
              "Functional",
              "User Acceptance (UAT)",
              "Customer/client verification before production launch."
            ],
            [
              "Functional",
              "Alpha Testing",
              "Internal testing by employees at developer site."
            ],
            [
              "Functional",
              "Beta Testing",
              "External testing by real end users in real environments."
            ],
            [
              "Functional",
              "Monkey Testing",
              "Random, unscripted inputs to test unexpected application crashes."
            ],
            [
              "Functional",
              "Gorilla Testing",
              "Intensive, rigorous testing of a single specific module."
            ],
            [
              "Non-Functional",
              "Load Testing",
              "Testing performance under normal and expected peak workloads."
            ],
            [
              "Non-Functional",
              "Stress Testing",
              "Testing beyond capacity limits to evaluate breaking point and recovery."
            ],
            [
              "Non-Functional",
              "Endurance / Soak",
              "Testing under sustained load over long duration for memory leaks."
            ],
            [
              "Non-Functional",
              "Spike Testing",
              "Testing rapid traffic surges of 500-1000% within seconds."
            ],
            [
              "Non-Functional",
              "Volume Testing",
              "Testing system performance with massive database record volumes."
            ],
            [
              "Non-Functional",
              "Usability Testing",
              "Evaluating ease of use, user flow clarity, and visual heuristics."
            ],
            [
              "Non-Functional",
              "Accessibility (WCAG)",
              "Verifying compliance for users with visual, auditory, or motor impairments."
            ],
            [
              "Non-Functional",
              "Compatibility Testing",
              "Verifying cross-browser, cross-device, and cross-OS behavior."
            ],
            [
              "Non-Functional",
              "Security Testing",
              "Testing for vulnerabilities (OWASP Top 10, SQLi, XSS, auth flaws)."
            ],
            [
              "Non-Functional",
              "Penetration Testing",
              "Ethical hacking simulating real external cyberattacks."
            ],
            [
              "Specialized",
              "API Testing",
              "Verifying REST/GraphQL endpoints without GUI frontend."
            ],
            [
              "Specialized",
              "Database Testing",
              "Verifying data persistence, ACID properties, and relational constraints."
            ],
            [
              "Specialized",
              "Localization (L10n)",
              "Verifying country-specific language, currency, and date formats."
            ],
            [
              "Specialized",
              "Internationalization (I18n)",
              "Verifying architecture supports global locales without code rewrites."
            ],
            [
              "Specialized",
              "A/B Testing",
              "Comparing two variants (A vs B) against business conversion metrics."
            ],
            [
              "Specialized",
              "Chaos Testing",
              "Injecting deliberate infrastructure failures to verify resilience."
            ],
            [
              "Specialized",
              "Mutation Testing",
              "Modifying source code to verify whether test cases catch mutants."
            ]
          ]
        }
      }
    ]
  },
  "manual-test-design-techniques": {
    "id": "manual-test-design-techniques",
    "title": "Boundary Value Analysis (BVA) & Equivalence Partitioning (ECP)",
    "category": "4. Test Design Techniques",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Master the most powerful black-box test design techniques: 2-value and 3-value BVA formulas, equivalence class derivation, boundary tables, and practical worked mathematical examples.",
    "sections": [
      {
        "id": "why-test-design-techniques",
        "heading": "Why Black-Box Test Design Techniques Matter",
        "paragraphs": [
          "Exhaustive testing is impossible. If an input field accepts an integer between 1 and 100, executing all 100 valid inputs plus thousands of invalid inputs is wasteful and redundant.",
          "Black-box test design techniques provide mathematical rigor to select the minimum number of high-yield test cases that discover the maximum number of defects."
        ]
      },
      {
        "id": "equivalence-partitioning",
        "heading": "Equivalence Class Partitioning (ECP)",
        "paragraphs": [
          "Equivalence Partitioning divides the input domain into partitions (classes) where the software is assumed to process every value in that partition in the exact same way.",
          "Rule: One test case from a valid partition represents the entire valid partition. One test case from each invalid partition tests that specific failure handler."
        ],
        "table": {
          "headers": [
            "Input Field",
            "Valid Equivalence Partition",
            "Invalid Partition 1",
            "Invalid Partition 2"
          ],
          "rows": [
            [
              "Age (18 to 65 years)",
              "18 <= Age <= 65 (e.g. 25, 40)",
              "Age < 18 (e.g. 15, -5)",
              "Age > 65 (e.g. 70, 100)"
            ],
            [
              "PIN Code (6 digits)",
              "Numeric string length = 6 (e.g. 110001)",
              "Length < 6 (e.g. 1100)",
              "Length > 6 or Non-Numeric (e.g. 1100019, 1100AB)"
            ],
            [
              "Discount Code (Fixed 4 chars)",
              "UPPERCASE length = 4 (e.g. SAVE)",
              "Length != 4 (e.g. PROMO, S)",
              "Lowercase or Special chars (e.g. save, SA@#)"
            ]
          ]
        }
      },
      {
        "id": "boundary-value-analysis",
        "heading": "Boundary Value Analysis (BVA): 2-Value vs 3-Value",
        "paragraphs": [
          "Empirical studies reveal that the vast majority of software defects occur at the boundaries of input ranges due to developer off-by-one errors (using '<' instead of '<=').",
          "1. 2-Value BVA (Standard ISTQB): Tests values on the boundary and immediately outside the boundary: {Min, Min-1} and {Max, Max+1}. Total 4 test cases.",
          "2. 3-Value BVA (Robustness Testing): Tests immediately below, on, and immediately above the boundary: {Min-1, Min, Min+1} and {Max-1, Max, Max+1}. Total 6 test cases."
        ],
        "table": {
          "headers": [
            "Test Case #",
            "Value Point",
            "Derived Input (For Range [18, 65])",
            "Expected System Result"
          ],
          "rows": [
            [
              "TC_BVA_001",
              "Min - 1",
              "17",
              "Invalid: Error banner 'Must be at least 18 years old'"
            ],
            [
              "TC_BVA_002",
              "Min (Boundary)",
              "18",
              "Valid: Eligible for registration"
            ],
            [
              "TC_BVA_003",
              "Min + 1",
              "19",
              "Valid: Eligible for registration"
            ],
            [
              "TC_BVA_004",
              "Nominal (Mid)",
              "40",
              "Valid: Standard middle value"
            ],
            [
              "TC_BVA_005",
              "Max - 1",
              "64",
              "Valid: Eligible for registration"
            ],
            [
              "TC_BVA_006",
              "Max (Boundary)",
              "65",
              "Valid: Eligible for registration"
            ],
            [
              "TC_BVA_007",
              "Max + 1",
              "66",
              "Invalid: Error banner 'Exceeds maximum age limit of 65'"
            ]
          ]
        },
        "keyTakeaways": [
          "Always test the boundary points because developers frequently confuse '<' and '<='.",
          "Equivalence partitioning reduces thousands of test cases down to a handful of representatives.",
          "Combine ECP with BVA to achieve maximum functional coverage with minimal test execution time."
        ]
      }
    ]
  },
  "manual-decision-tables": {
    "id": "manual-decision-tables",
    "title": "Decision Table Testing & Combinatorial Rule Reduction",
    "category": "4. Test Design Techniques",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Model complex business logic and intersecting conditions using Decision Tables: condition stubs, action stubs, truth tables (2^n rules), and mathematical rule reduction logic.",
    "sections": [
      {
        "id": "what-is-decision-table",
        "heading": "What is Decision Table Testing?",
        "paragraphs": [
          "When system behavior depends on multiple interacting conditions (e.g. credit card approvals, premium discounts, insurance eligibility), testing single conditions in isolation fails to catch logic collisions.",
          "Decision Tables provide a rigorous tabular method to map every combination of input conditions to their expected system actions.",
          "Formula: For 'n' binary conditions (True/False), there are 2^n possible rules to evaluate."
        ]
      },
      {
        "id": "ecommerce-decision-table",
        "heading": "Worked Industrial Example: E-Commerce Promotional Rules",
        "paragraphs": [
          "Consider an e-commerce platform with 3 conditions: (C1) Order > ₹1,000, (C2) Prime Member, (C3) Valid Coupon Applied.",
          "Here is the complete Decision Table mapping all 8 combinations (2^3) down to their business actions:"
        ],
        "table": {
          "headers": [
            "Rule Element",
            "Rule 1",
            "Rule 2",
            "Rule 3",
            "Rule 4",
            "Rule 5",
            "Rule 6",
            "Rule 7",
            "Rule 8"
          ],
          "rows": [
            [
              "C1: Order > ₹1,000",
              "True",
              "True",
              "True",
              "True",
              "False",
              "False",
              "False",
              "False"
            ],
            [
              "C2: Prime Member",
              "True",
              "True",
              "False",
              "False",
              "True",
              "True",
              "False",
              "False"
            ],
            [
              "C3: Coupon Applied",
              "True",
              "False",
              "True",
              "False",
              "True",
              "False",
              "True",
              "False"
            ],
            [
              "A1: 20% Discount",
              "Yes",
              "No",
              "Yes",
              "No",
              "No",
              "No",
              "No",
              "No"
            ],
            [
              "A2: 10% Discount",
              "No",
              "Yes",
              "No",
              "No",
              "Yes",
              "No",
              "Yes",
              "No"
            ],
            [
              "A3: Free Express Shipping",
              "Yes",
              "Yes",
              "No",
              "No",
              "Yes",
              "Yes",
              "No",
              "No"
            ],
            [
              "A4: Standard Shipping (₹80)",
              "No",
              "No",
              "Yes",
              "Yes",
              "No",
              "No",
              "Yes",
              "Yes"
            ]
          ]
        }
      },
      {
        "id": "rule-reduction-technique",
        "heading": "Combinatorial Rule Reduction Logic",
        "paragraphs": [
          "When two rules produce the exact same outcome regardless of one condition's state, that condition is marked as 'Don't Care' (-) and the rules are collapsed together:",
          "1. In Rules 7 and 8, when Order <= ₹1,000 and the user is NOT a Prime Member, standard shipping applies whether they have a coupon or not. These collapse into a single test case.",
          "2. Through systematic reduction, 8 raw rules reduce to 4-5 high-value test cases, cutting test execution effort by 40% while preserving 100% logic coverage."
        ]
      }
    ]
  },
  "manual-state-transition-usecase": {
    "id": "manual-state-transition-usecase",
    "title": "State Transition & Use Case Testing Techniques",
    "category": "4. Test Design Techniques",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Design tests for finite state machines, invalid transitions, and sequence dependencies. Master Use Case testing with actor preconditions, happy paths, and alternate flows.",
    "sections": [
      {
        "id": "state-transition-testing",
        "heading": "State Transition Testing: The ATM PIN Lockout Example",
        "paragraphs": [
          "State Transition Testing verifies how an application transitions between states in response to events and input triggers.",
          "A classic finite state machine example is an ATM card PIN verification with a 3-attempt lockout threshold:"
        ],
        "table": {
          "headers": [
            "Current State",
            "Input Event / Trigger",
            "Next State",
            "System Action"
          ],
          "rows": [
            [
              "1. S1: Awaiting Card",
              "Insert valid debit card",
              "S2: Awaiting PIN",
              "Display 'Please Enter Your 4-Digit PIN'"
            ],
            [
              "2. S2: Awaiting PIN",
              "Enter correct PIN",
              "S3: Authenticated",
              "Display account services menu (Withdraw, Balance)"
            ],
            [
              "3. S2: Awaiting PIN",
              "Enter incorrect PIN (Attempt 1)",
              "S4: 1st PIN Error",
              "Display 'Incorrect PIN. 2 attempts remaining.'"
            ],
            [
              "4. S4: 1st PIN Error",
              "Enter incorrect PIN (Attempt 2)",
              "S5: 2nd PIN Error",
              "Display 'Warning: Final attempt before card lockout.'"
            ],
            [
              "5. S5: 2nd PIN Error",
              "Enter incorrect PIN (Attempt 3)",
              "S6: Card Blocked",
              "Retain card, log security alert, notify customer"
            ],
            [
              "6. S4 or S5",
              "Enter correct PIN",
              "S3: Authenticated",
              "Reset error counter to 0, display account menu"
            ],
            [
              "7. S2: Awaiting PIN",
              "Press 'Cancel' button",
              "S1: Awaiting Card",
              "Eject debit card immediately"
            ]
          ]
        }
      },
      {
        "id": "use-case-testing",
        "heading": "Use Case Testing: Happy Paths & Alternate Flows",
        "paragraphs": [
          "Use Case testing designs end-to-end tests based on real-world actor interactions with the system:",
          "1. Actor: The human user persona (e.g. Registered Customer, Admin, Auditor).",
          "2. Preconditions: System state required before starting (e.g. User logged in, Cart has items, Payment API online).",
          "3. Main Success Scenario (Happy Path): The ideal flow where everything goes right and the user achieves their business goal with zero errors.",
          "4. Alternate Flows: Legitimate variations of the happy path (e.g. user chooses NetBanking instead of UPI, user edits shipping address during checkout).",
          "5. Exception Flows: Error states that prevent completion (e.g. card declined, session expired, item went out of stock during payment)."
        ]
      }
    ]
  },
  "manual-error-guessing-attacks": {
    "id": "manual-error-guessing-attacks",
    "title": "Error Guessing & The QA Attack Catalog",
    "category": "4. Test Design Techniques",
    "sourceUrl": "https://www.satisfice.com/",
    "description": "Leverage tester intuition, experience, and historical defect databases. Explore the definitive QA Attack Catalog: 25 common developer failure patterns to target.",
    "sections": [
      {
        "id": "what-is-error-guessing",
        "heading": "What is Error Guessing?",
        "paragraphs": [
          "Error Guessing is an experience-based test technique where the tester anticipates where errors are most likely to occur based on past experience, developer habits, and system architecture weaknesses.",
          "It is not blind guessing—it is structured pattern matching against common engineering mistakes."
        ]
      },
      {
        "id": "qa-attack-catalog",
        "heading": "The QA Attack Catalog: 25 Developer Traps to Test",
        "paragraphs": [
          "Here are 25 high-yield input and scenario patterns that consistently uncover software bugs:",
          "1. Empty Inputs: Submit empty strings, spaces only ('   '), and null values in mandatory fields.",
          "2. Extreme Characters: Long strings (10,000+ characters), Unicode emojis (🚀🎉), and RTL Arabic text.",
          "3. Special Characters: Inject HTML/JS/SQL symbols (\", ', <, >, ;, --, &, %, \\, null bytes).",
          "4. Zero & Negative Values: Enter ₹0, -₹100, or quantity -1 in shopping carts or transfer inputs.",
          "5. Floating Point Precision: Enter numbers with many decimal places ($10.9999999) to check rounding.",
          "6. Double Click / Rapid Taps: Double-click 'Submit', 'Pay Now', or 'Delete' buttons within 100ms.",
          "7. Browser Back & Forward: Click 'Back' immediately after completing payment or submitting a multi-step form.",
          "8. Refresh During Processing: Press F5 while a payment spinner is actively communicating with the gateway.",
          "9. Multiple Tabs: Open the same checkout cart in Tab 1 and Tab 2, change quantity in Tab 1, and pay in Tab 2.",
          "10. Session Expiration: Log in, wait for token to expire (e.g. 15 mins), and click 'Save Changes'.",
          "11. Concurrent Logins: Log into the same account on Chrome and mobile app simultaneously.",
          "12. File Upload Exploits: Upload non-image files renamed as .jpg (e.g. test.exe.jpg), 0-byte files, and 100MB files.",
          "13. Timezone Discrepancies: Change client device clock across date boundaries (leap year, Dec 31 -> Jan 1).",
          "14. Offline / Airplane Mode: Toggle airplane mode while an API upload or form submit is in progress."
        ],
        "checklist": [
          "Test all numeric inputs with 0, -1, and max integer (2,147,483,647).",
          "Test double-clicking all primary submission buttons to catch duplicate transactions.",
          "Verify that pasting formatted text from MS Word does not break text editors with hidden formatting codes.",
          "Check multi-tab session consistency to prevent race conditions in shopping carts."
        ]
      }
    ]
  },
  "manual-test-plan-ieee829": {
    "id": "manual-test-plan-ieee829",
    "title": "Master Test Plan (IEEE 829 Standard) Architecture",
    "category": "5. Test Artifacts & Documentation",
    "sourceUrl": "https://standards.ieee.org/",
    "description": "Architect comprehensive Master Test Plans conforming to the international IEEE 829 standard: scope definition, quality risks, environment setup, and release criteria.",
    "sections": [
      {
        "id": "what-is-test-plan",
        "heading": "What is a Master Test Plan?",
        "paragraphs": [
          "A Master Test Plan (MTP) is a formal engineering contract that outlines the testing scope, strategy, objectives, schedule, deliverables, resources, and risks for a software release.",
          "It is not a static document locked in a drawer—it is a living blueprint that aligns Developers, QA, Product, and Executives on release quality criteria."
        ]
      },
      {
        "id": "ieee-829-16-sections",
        "heading": "The 16 Core Sections of the IEEE 829 Test Plan Standard",
        "paragraphs": [
          "The international standard IEEE 829 mandates 16 essential sections:",
          "1. Test Plan Identifier: Unique document ID and version control history (e.g. MTP-FINTECH-v2.1).",
          "2. Introduction: Overview of the software system, business objectives, and background.",
          "3. Test Items: Deployed software artifacts, microservice builds, database migrations, and APK/iOS bundles.",
          "4. Features to be Tested: Detailed list of modules and capabilities within testing scope.",
          "5. Features Not to be Tested: Explicit list of out-of-scope modules (e.g. legacy admin dashboard, third-party payment vendor internal code).",
          "6. Approach / Strategy: Overall testing levels, tools, automation ratio, defect triage protocol, and testing types.",
          "7. Item Pass/Fail Criteria: Objective quality thresholds (e.g. 100% P1 test cases pass, 0 blocker bugs).",
          "8. Suspension & Resumption Criteria: When testing must halt (e.g. build fails smoke test or database unreachable) and when it resumes.",
          "9. Test Deliverables: Artifacts produced by QA (Test Plan, Test Cases, RTM, Defect Reports, TSR).",
          "10. Testing Tasks: Specific testing activities and dependencies.",
          "11. Environmental Needs: Hardware, staging servers, database seeds, network bandwidth simulators, and test accounts.",
          "12. Responsibilities: RACI matrix mapping roles to tasks (Who tests, who approves, who deploys).",
          "13. Staffing & Training Needs: Required headcount, domain onboarding, and tool training.",
          "14. Schedule & Milestones: Testing timeline aligned with sprint releases and code freeze dates.",
          "15. Risks & Contingencies: Technical and project risks with mitigation strategies.",
          "16. Approvals: Formal sign-off signatures from QA Lead, Engineering Manager, and Product Owner."
        ]
      }
    ]
  },
  "manual-test-cases-rtm": {
    "id": "manual-test-cases-rtm",
    "title": "Writing Production Test Cases & Requirements Traceability (RTM)",
    "category": "5. Test Artifacts & Documentation",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Write unambiguous, step-by-step test cases that any engineer can execute without assumptions. Build bi-directional Requirements Traceability Matrices (RTM) to guarantee 100% coverage.",
    "sections": [
      {
        "id": "test-case-anatomy",
        "heading": "Standard Anatomical Fields of a Professional Test Case",
        "paragraphs": [
          "Every high-quality test case documented in Jira, TestRail, or Zephyr must include these standardized fields:",
          "1. Test Case ID: Globally unique identifier (e.g. TC_AUTH_012).",
          "2. Test Title: Clear summary of the specific scenario being tested.",
          "3. Module / Feature: Functional component (e.g. Authentication, Checkout, Wallet).",
          "4. Pre-conditions: Prerequisites required before starting (e.g. User has verified mobile number and ₹500 balance).",
          "5. Test Steps: Numbered, sequential actions describing exact clicks, inputs, and navigations.",
          "6. Test Data: Exact values to input (e.g. User: test@qa.com, Pass: P@ssw0rd123).",
          "7. Expected Result: Unambiguous behavior the system must exhibit.",
          "8. Actual Result: Documented behavior during execution.",
          "9. Status: Pass, Fail, Blocked, or Skipped."
        ]
      },
      {
        "id": "worked-test-case-example",
        "heading": "Worked Test Case Suite: E-Commerce Checkout",
        "paragraphs": [
          "Here is a complete, production-grade test case table demonstrating positive, negative, and edge testing:"
        ],
        "table": {
          "headers": [
            "TC ID",
            "Title & Objective",
            "Step-by-Step Action",
            "Test Data",
            "Expected Result"
          ],
          "rows": [
            [
              "TC_PAY_001",
              "Verify successful credit card payment with 3D Secure OTP",
              "1. Navigate to checkout\n2. Select Credit Card\n3. Enter valid card details\n4. Click Pay\n5. Enter OTP 123456",
              "Card: 4111...1111\nExpiry: 12/28\nCVV: 123\nOTP: 123456",
              "Order confirmation page displayed with Order ID, invoice sent to email, payment captured."
            ],
            [
              "TC_PAY_002",
              "Verify error handling when card is expired",
              "1. Navigate to checkout\n2. Select Credit Card\n3. Enter past expiration date\n4. Observe field validation",
              "Expiry: 01/22",
              "Inline error 'Card expiration date must be in the future' displays; Pay button disabled."
            ],
            [
              "TC_PAY_003",
              "Verify prevention of double debits on rapid double click",
              "1. On final payment confirmation screen, rapidly double-click 'Pay ₹500 Now'",
              "Mouse double click within 150ms",
              "Button immediately disables upon 1st click with spinner; only one payment authorization request dispatched."
            ],
            [
              "TC_PAY_004",
              "Verify session timeout during 3D Secure OTP entry",
              "1. Reach bank OTP screen\n2. Wait 10 minutes without entering OTP\n3. Enter OTP and submit",
              "OTP: 123456 after 10m idle",
              "Session expired error displayed; transaction safely rolled back; zero funds debited."
            ]
          ]
        }
      },
      {
        "id": "rtm-traceability",
        "heading": "Requirements Traceability Matrix (RTM): 100% Coverage",
        "paragraphs": [
          "An RTM is a grid mapping Business Requirements to Test Cases and Defect IDs to ensure zero requirements are overlooked:",
          "1. Forward Traceability: Maps Requirements -> Test Cases. Ensures every requirement has at least one test case.",
          "2. Backward Traceability: Maps Test Cases -> Requirements. Ensures tests don't test unrequested features.",
          "3. Bi-Directional Traceability: Combines both directions, tracking from SRS -> User Story -> Test Cases -> Defects."
        ],
        "table": {
          "headers": [
            "Requirement ID",
            "User Story Description",
            "Test Case IDs",
            "Execution Status",
            "Defect IDs (if any)"
          ],
          "rows": [
            [
              "REQ-AUTH-01",
              "User can log in with email and password",
              "TC_AUTH_001, TC_AUTH_002",
              "Passed",
              "None"
            ],
            [
              "REQ-AUTH-02",
              "User account locked after 5 failed attempts",
              "TC_AUTH_005, TC_AUTH_006",
              "Failed",
              "BUG-AUTH-102 (Lockout triggers at 6th attempt)"
            ],
            [
              "REQ-PAY-01",
              "Support UPI QR code scan and payment",
              "TC_PAY_011, TC_PAY_012",
              "Passed",
              "None"
            ]
          ]
        }
      }
    ]
  },
  "manual-qa-metrics-kpis": {
    "id": "manual-qa-metrics-kpis",
    "title": "QA Metrics, KPIs, Defect Density & Leakage Rate",
    "category": "5. Test Artifacts & Documentation",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Quantify software quality using proven mathematical formulas: Defect Density, Defect Removal Efficiency (DRE), Defect Leakage Rate, and test execution velocity metrics.",
    "sections": [
      {
        "id": "why-measure-quality",
        "heading": "Why Quantify Quality with Metrics?",
        "paragraphs": [
          "You cannot manage what you do not measure. Subjective claims like 'the build feels pretty good' are unacceptable in professional engineering.",
          "QA metrics provide leadership with mathematical transparency regarding system stability, testing effectiveness, and release risk."
        ]
      },
      {
        "id": "core-qa-formulas",
        "heading": "The 4 Essential Quality Assurance Formulas",
        "paragraphs": [
          "Every test lead and senior QA must know these formulas:",
          "1. Defect Density: Measures defect concentration per module size.",
          "   Formula: Defect Density = (Total Defects Found) / (Size in KLOC or Story Points)",
          "   Example: If 35 bugs are found across 50 story points, Defect Density = 35 / 50 = 0.70 bugs per story point.",
          "2. Defect Removal Efficiency (DRE): Measures the percentage of bugs caught by QA before production release.",
          "   Formula: DRE = (Defects Found in Pre-Release QA) / (Defects in QA + Defects Escaped to Production) * 100%",
          "   Example: QA found 90 bugs. Production users found 10 bugs after release. DRE = 90 / (90 + 10) * 100% = 90.0%. World-class benchmark is >= 95%.",
          "3. Defect Leakage Rate: Measures the escape percentage into production.",
          "   Formula: Defect Leakage Rate = (Defects Escaped to Production) / (Total Defects Found in Pre-Release) * 100%",
          "   Example: 10 escaped / 90 QA bugs = 11.1% leakage.",
          "4. Test Execution Rate & Pass Percentage:",
          "   Execution Rate = (Executed Tests / Total Planned Tests) * 100%",
          "   Pass Percentage = (Passed Tests / Total Executed Tests) * 100%"
        ]
      }
    ]
  },
  "manual-defect-lifecycle": {
    "id": "manual-defect-lifecycle",
    "title": "Defect Life Cycle & Severity vs Priority 2x2 Matrix",
    "category": "6. Defect Management & RCA",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Master the complete Defect Life Cycle state machine, transition rules, and the 4x4 Severity vs Priority Matrix with real-world FinTech examples.",
    "sections": [
      {
        "id": "bug-lifecycle-states",
        "heading": "The Defect Life Cycle State Machine",
        "paragraphs": [
          "A defect lifecycle defines the formal stages a bug passes through from initial discovery by QA to final closure:",
          "1. NEW: The bug is initially logged and documented in Jira by QA.",
          "2. ASSIGNED: Lead QA or Tech Lead assigns the ticket to a specific developer for resolution.",
          "3. OPEN: The developer actively investigates, reproduces, and debugs the root cause.",
          "4. FIXED: The developer writes code, verifies locally, and merges the fix into the staging build.",
          "5. PENDING RETEST: Build containing the fix is deployed to the QA environment.",
          "6. RETEST: QA re-executes the exact reproduction steps on the new build.",
          "7. VERIFIED / CLOSED: QA confirms the bug is genuinely resolved with zero regressions.",
          "8. REOPENED: If the bug still persists upon retesting, QA transitions it back to REOPENED with new logs.",
          "Exception States: DEFERRED (postponed to future sprint), REJECTED (working as designed), DUPLICATE (already logged), CANNOT REPRODUCE."
        ]
      },
      {
        "id": "severity-vs-priority-matrix",
        "heading": "Severity vs Priority: The 4 Quadrants Demystified",
        "paragraphs": [
          "Severity measures the TECHNICAL IMPACT of the defect on system operation.",
          "Priority measures the BUSINESS URGENCY of resolving the defect."
        ],
        "table": {
          "headers": [
            "Quadrant",
            "Severity Level",
            "Priority Level",
            "Real-World Industrial Example"
          ],
          "rows": [
            [
              "High Severity / High Priority (P1)",
              "Critical (System Crash / Data Loss)",
              "Immediate Fix",
              "Payment gateway crashes on checkout; user funds debited but order never generated."
            ],
            [
              "High Severity / Low Priority (P2)",
              "Critical (Full Crash on Edge Case)",
              "Deferred to next patch",
              "App crashes completely, but only on legacy Android 8.0 devices (0.01% of userbase)."
            ],
            [
              "Low Severity / High Priority (P1/P2)",
              "Minor (No data loss, zero crash)",
              "Immediate Fix",
              "Company brand logo corrupted on homepage or legal typo in CEO name on public portal."
            ],
            [
              "Low Severity / Low Priority (P4)",
              "Trivial / Cosmetic",
              "Backlog backlog",
              "Minor 2px alignment discrepancy on internal developer documentation page."
            ]
          ]
        },
        "keyTakeaways": [
          "Severity is decided by QA based on technical damage (crash, data corruption, security breach).",
          "Priority is decided jointly with Product Manager based on commercial impact and business urgency.",
          "Never reopen a bug for a DIFFERENT issue; if the original bug is fixed but a new bug appeared, log a new ticket and link it."
        ]
      }
    ]
  },
  "manual-bug-reporting": {
    "id": "manual-bug-reporting",
    "title": "Anatomy of a Production-Grade Bug Report",
    "category": "6. Defect Management & RCA",
    "sourceUrl": "https://www.atlassian.com/software/jira",
    "description": "Write clear, reproducible, and respected bug reports that developers love: standardized title syntax, environment details, unambiguous reproduction steps, and diagnostic attachments.",
    "sections": [
      {
        "id": "why-bug-report-quality-matters",
        "heading": "Why Bug Report Quality Defines QA Reputation",
        "paragraphs": [
          "A vague bug report like 'Login is broken, please fix' wastes hours of developer time, causes frustrating back-and-forth comments, and delays releases.",
          "A production-grade bug report provides all diagnostic evidence (logs, payloads, video, device state) so the developer can isolate the root cause in minutes without having to ask a single clarifying question."
        ]
      },
      {
        "id": "standard-title-syntax",
        "heading": "Standardized Bug Title Syntax",
        "paragraphs": [
          "Always formulate bug titles using this industry-standard convention:",
          "'[MODULE][PLATFORM] Clear description of failure under specific condition'",
          "Good Title: '[CHECKOUT][ANDROID] Double-tap on \"Pay Now\" causes duplicate ₹500 wallet debit on slow 3G network'",
          "Bad Title: 'Payment not working on phone'"
        ]
      },
      {
        "id": "bug-report-template",
        "heading": "Production-Grade Bug Report Template & Example",
        "paragraphs": [
          "Follow this industry standard structure in Jira, Linear, or GitHub Issues:"
        ],
        "codeBlocks": [
          {
            "title": "Production Jira Bug Ticket Example",
            "language": "markdown",
            "code": "[PAYMENT][ANDROID] Double-tap on \"Pay Now\" causes duplicate ₹500 wallet debit\n**Severity:** Critical | **Priority:** P1 Blocker | **Reporter:** Deepak Gupta\n\n### Description\nDuring UPI checkout on unstable networks, rapid sequential taps on the \"Pay Now\" button bypasses button disabling and dispatches two concurrent payment authorization API requests, causing duplicate wallet debits for a single order.\n\n### Environment\n- App Version: v3.12.0 (Build 412)\n- Device: Samsung Galaxy S23 (SM-S911B)\n- OS: Android 14 (OneUI 6.0)\n- Network: Simulated Slow 3G (400ms latency, 2% packet loss via Charles Proxy)\n- User Account: Test User ID #88412 (Seeded with ₹2,000.00 wallet balance)\n\n### Steps to Reproduce\n1. Log into the app with credentials above.\n2. Add \"Digital Gold Voucher (₹500)\" to cart and proceed to checkout.\n3. Select \"Wallet Balance\" as payment method.\n4. Rapidly double-tap the \"Pay ₹500 Now\" button within 250ms.\n5. Observe the order confirmation screen and check wallet transaction history.\n\n### Expected Result\n- The \"Pay Now\" button should immediately disable upon the first tap (displaying a spinner).\n- Only ONE API request to `/api/v1/payments/commit` should be dispatched.\n- Order should succeed with a single ₹500 deduction (Remaining balance: ₹1,500.00).\n\n### Actual Result\n- The button remains clickable for ~400ms before disabling.\n- Two POST requests with different idempotency keys are sent to `/api/v1/payments/commit`.\n- Two duplicate transactions appear in ledger: ₹500 and ₹500 (Remaining balance: ₹1,000.00).\n\n### Diagnostic Evidence Attached\n- [Video_Proof_DoubleDebit.mp4] (Screen recording with touch indicators enabled)\n- [Logcat_Snippet.txt] (Contains timestamped UI click events and network dispatches)\n- [Charles_Network_Session.chls] (Shows both concurrent HTTP 200 responses)"
          }
        ]
      }
    ]
  },
  "manual-root-cause-analysis": {
    "id": "manual-root-cause-analysis",
    "title": "Root Cause Analysis (RCA), 5 Whys & Fishbone Diagram",
    "category": "6. Defect Management & RCA",
    "sourceUrl": "https://asq.org/quality-resources/fishbone",
    "description": "Master engineering incident investigations: The 5 Whys iterative interrogative method, Ishikawa Fishbone diagrams, and writing Post-Mortem CAPA reports.",
    "sections": [
      {
        "id": "what-is-rca",
        "heading": "What is Root Cause Analysis (RCA)?",
        "paragraphs": [
          "Root Cause Analysis (RCA) is a systematic problem-solving methodology aimed at identifying the fundamental, underlying breakdown in process, architecture, or communication that allowed a defect to occur and escape into production.",
          "Rule: Fixing the bug only addresses the symptom; fixing the root cause prevents an entire class of future defects."
        ]
      },
      {
        "id": "five-whys-example",
        "heading": "The 5 Whys Methodology in Action",
        "paragraphs": [
          "By asking 'Why?' five successive times, teams peel away surface layers to uncover process breakdowns:",
          "Incident: Production users experienced incorrect discount calculations on Black Friday.",
          "1. Why did users receive incorrect discounts? Because the pricing microservice returned cached promo rates from the previous week.",
          "2. Why did it return stale cached rates? Because the Redis cache invalidation event failed to trigger during the midnight promo push.",
          "3. Why did the invalidation event fail to trigger? Because the Redis cluster connection timed out under heavy traffic spikes.",
          "4. Why was there no timeout retry mechanism? Because the backend retry policy was disabled during a recent refactor and never tested under load.",
          "5. Why was it not tested under load? ROOT CAUSE: Because our pre-release checklist does not mandate performance verification for backend configuration updates.",
          "Actionable Corrective & Preventive Action (CAPA): Add automated Redis failover tests to CI and mandate cache invalidation validation in the QA release sign-off checklist."
        ]
      },
      {
        "id": "fishbone-diagram",
        "heading": "The Ishikawa (Fishbone / 6M) Diagram for QA",
        "paragraphs": [
          "The Fishbone diagram categorizes potential defect causes into 6 operational pillars:",
          "1. Methods: Inadequate test cases, missing boundary tests, ambiguous acceptance criteria.",
          "2. Machine / Technology: Unstable staging environments, database connection pooling limits.",
          "3. Material: Corrupt test data, outdated third-party API mocks.",
          "4. Measurement: Lack of code coverage metrics, missing synthetic monitoring alerts.",
          "5. Manpower / People: Developer fatigue, lack of domain onboarding, missed 3 Amigos meeting.",
          "6. Milieu / Environment: Difference between staging architecture and multi-region production."
        ]
      }
    ]
  },
  "manual-api-testing-fundamentals": {
    "id": "manual-api-testing-fundamentals",
    "title": "Manual REST API Testing with Postman & Browser DevTools",
    "category": "7. Specialized Manual Testing",
    "sourceUrl": "https://www.postman.com/",
    "description": "Master manual API testing: HTTP methods, response status codes, header validation, Postman environment variables, pre-request scripts, and JSON schema inspection.",
    "sections": [
      {
        "id": "why-api-testing",
        "heading": "Why Manual QA Must Test APIs",
        "paragraphs": [
          "UI testing alone is insufficient. Modern applications are driven by decoupled frontend single-page apps (React, Next.js, mobile apps) communicating with backend microservices via REST APIs.",
          "If a frontend validation fails or is bypassed (e.g. by an attacker or network glitch), the backend API must enforce data integrity, authentication, and boundary restrictions."
        ]
      },
      {
        "id": "http-status-codes-cheatsheet",
        "heading": "HTTP Status Codes Cheatsheet for QA Engineers",
        "paragraphs": [
          "Every manual tester must know the exact semantic meaning of HTTP response status codes:"
        ],
        "table": {
          "headers": [
            "Code",
            "Status Name",
            "Category",
            "When Expected in Testing"
          ],
          "rows": [
            [
              "200",
              "OK",
              "Success",
              "Standard response for successful GET, PUT, or POST requests."
            ],
            [
              "201",
              "Created",
              "Success",
              "Returned when a new entity is successfully created in database."
            ],
            [
              "204",
              "No Content",
              "Success",
              "Action succeeded, but response body is intentionally empty (e.g. DELETE)."
            ],
            [
              "400",
              "Bad Request",
              "Client Error",
              "Payload failed validation (missing required fields, malformed JSON)."
            ],
            [
              "401",
              "Unauthorized",
              "Client Error",
              "Missing or expired JWT bearer token / authentication credentials."
            ],
            [
              "403",
              "Forbidden",
              "Client Error",
              "User is authenticated, but lacks permissions (e.g. regular user accessing /admin)."
            ],
            [
              "404",
              "Not Found",
              "Client Error",
              "Requested resource URI does not exist."
            ],
            [
              "409",
              "Conflict",
              "Client Error",
              "State conflict (e.g. attempting to register an email that already exists)."
            ],
            [
              "422",
              "Unprocessable Entity",
              "Client Error",
              "JSON syntax valid, but semantic business rules fail (e.g. end date before start date)."
            ],
            [
              "429",
              "Too Many Requests",
              "Client Error",
              "Rate limit exceeded (e.g. user requested OTP 5 times within 1 minute)."
            ],
            [
              "500",
              "Internal Server Error",
              "Server Error",
              "Unhandled exception in backend code (ALWAYS a backend bug to log)."
            ],
            [
              "502",
              "Bad Gateway",
              "Server Error",
              "Reverse proxy (Nginx) received invalid response from upstream microservice."
            ],
            [
              "503",
              "Service Unavailable",
              "Server Error",
              "Server overloaded or down for maintenance."
            ],
            [
              "504",
              "Gateway Timeout",
              "Server Error",
              "Database query or upstream third-party service timed out."
            ]
          ]
        }
      },
      {
        "id": "postman-workflow",
        "heading": "Manual API Testing Workflow in Postman",
        "paragraphs": [
          "1. Inspect Request Headers: Always verify 'Authorization: Bearer <token>', 'Content-Type: application/json', and custom tracking headers like 'X-Correlation-ID'.",
          "2. Test Boundary Values in Payloads: Submit null, empty string, negative numbers, extreme character counts, and unexpected data types (string instead of integer).",
          "3. Verify Negative Error Responses: Ensure the API returns proper 4xx status codes with user-friendly error messages rather than unhandled 500 stack traces.",
          "4. Verify Response Headers: Check 'Cache-Control', 'Strict-Transport-Security (HSTS)', and 'Content-Security-Policy'."
        ]
      }
    ]
  },
  "manual-database-sql-testing": {
    "id": "manual-database-sql-testing",
    "title": "Database & SQL Verification for QA Engineers",
    "category": "7. Specialized Manual Testing",
    "sourceUrl": "https://www.postgresql.org/",
    "description": "Verify backend data persistence, relational data integrity, foreign key cascades, transaction atomicity (ACID), and write essential SQL queries for manual QA verification.",
    "sections": [
      {
        "id": "why-database-testing",
        "heading": "Why Database Testing is Essential for QA",
        "paragraphs": [
          "A green checkmark on the frontend UI does not guarantee that user data was safely written to persistent storage.",
          "Database testing confirms that transactions commit correctly, foreign keys prevent data corruption, triggers execute, and sensitive data (passwords, card CVVs) are hashed according to security regulations."
        ]
      },
      {
        "id": "sql-query-cookbook",
        "heading": "Essential SQL Query Cookbook for QA Testers",
        "paragraphs": [
          "Every manual QA engineer must be proficient in writing these foundational SQL queries:"
        ],
        "codeBlocks": [
          {
            "title": "Essential QA SQL Queries",
            "language": "sql",
            "code": "-- 1. Verify a recently created user record in database\nSELECT id, email, is_verified, created_at, status \nFROM users \nWHERE email = 'deepak.qa@test.com';\n\n-- 2. Check for orphaned records (e.g. Order Items without an existing Order)\nSELECT oi.id, oi.order_id, oi.product_id, oi.price\nFROM order_items oi\nLEFT JOIN orders o ON oi.order_id = o.id\nWHERE o.id IS NULL;\n\n-- 3. Verify duplicate payment records created for the same user order\nSELECT order_id, COUNT(*) AS duplicate_count\nFROM payments\nGROUP BY order_id\nHAVING COUNT(*) > 1;\n\n-- 4. Check that passwords are encrypted and never stored in plain text\nSELECT id, email, password_hash\nFROM users\nWHERE password_hash NOT LIKE '$2b$%' AND password_hash NOT LIKE '$argon2%';"
          }
        ]
      },
      {
        "id": "acid-properties-testing",
        "heading": "ACID Properties: Testing Transaction Integrity",
        "paragraphs": [
          "Database transactions must strictly adhere to the 4 ACID tenets:",
          "1. Atomicity ('All or Nothing'): If a user transfers ₹500 from Account A to Account B, both debit and credit must succeed. If debit succeeds but credit fails due to network drop, the entire transaction MUST roll back.",
          "2. Consistency: Database state must strictly satisfy all table constraints (NOT NULL, UNIQUE, CHECK, FOREIGN KEY) before and after transaction execution.",
          "3. Isolation: Concurrent transactions must execute without interfering with one another (preventing dirty reads and phantom reads).",
          "4. Durability: Once a transaction commits, data must persist on disk even if the database server abruptly loses power 1 second later."
        ]
      }
    ]
  },
  "manual-mobile-testing": {
    "id": "manual-mobile-testing",
    "title": "Mobile App Manual Testing (Android & iOS)",
    "category": "7. Specialized Manual Testing",
    "sourceUrl": "https://developer.android.com/",
    "description": "Master mobile application quality assurance: touch gestures, OS fragmentation, real-device interruption testing matrix, and network drop recovery.",
    "sections": [
      {
        "id": "mobile-vs-web",
        "heading": "Mobile App QA vs Web Testing: Key Differences",
        "paragraphs": [
          "Mobile testing introduces unique physical and environmental complexities that do not exist on desktop web browsers:",
          "1. Hardware Fragmentation: Testing across diverse screen densities, aspect ratios, CPU chipsets, and manufacturer OS skins (Samsung OneUI, Xiaomi MIUI, Pure Pixel).",
          "2. Device Sensors & Peripherals: Accelerometer, gyroscope, GPS location mocking, camera, biometric fingerprint / Face ID.",
          "3. Resource Constraints: Battery drain, CPU thermal throttling, low storage limits, and aggressive OS background process killing."
        ]
      },
      {
        "id": "mobile-interruption-matrix",
        "heading": "Mobile Interruption Testing Matrix",
        "paragraphs": [
          "Real-world mobile users are constantly interrupted. Test these scenarios during critical app flows (e.g. checkout, video upload, KYC):"
        ],
        "table": {
          "headers": [
            "Interruption Event",
            "Test Action",
            "Expected App Behavior"
          ],
          "rows": [
            [
              "Incoming Phone Call",
              "Receive phone call while submitting form",
              "App suspends gracefully; upon call completion, form state is fully preserved."
            ],
            [
              "Low Battery Alert (20% / 10%)",
              "OS low battery modal pops up over app",
              "App does not crash; UI remains responsive behind modal."
            ],
            [
              "Network Switching",
              "Walk out of Wi-Fi range onto 4G cellular",
              "App switches network interfaces seamlessly without logging user out."
            ],
            [
              "Airplane Mode Toggle",
              "Activate Airplane mode mid-transaction",
              "Graceful offline banner appears; transaction cleanly aborted with retry option."
            ],
            [
              "App Backgrounding (Home button)",
              "Press Home, wait 5 minutes, reopen app",
              "App resumes from saved state; doesn't force cold restart unless memory pressured."
            ],
            [
              "Lock Screen / Sleep",
              "Press Power button to lock screen, unlock",
              "Biometric prompt displays (for banking apps) or resumes exact view."
            ]
          ]
        }
      }
    ]
  },
  "manual-payment-fintech-testing": {
    "id": "manual-payment-fintech-testing",
    "title": "Payment Gateway & FinTech Quality Assurance",
    "category": "7. Specialized Manual Testing",
    "sourceUrl": "https://stripe.com/docs/testing",
    "description": "Master mission-critical FinTech testing: payment authorization flows, 3D Secure OTP verification, refunds, chargebacks, idempotency keys, and double-debit prevention.",
    "sections": [
      {
        "id": "payment-architecture",
        "heading": "Payment Gateway Architecture: The 5 Entities",
        "paragraphs": [
          "Every payment transaction involves 5 coordinated entities:",
          "1. Cardholder / Customer: The user initiating the purchase.",
          "2. Merchant: The application / business selling the service or goods.",
          "3. Payment Gateway: The secure software application (Stripe, Razorpay, Adyen) encrypting card data and communicating with processors.",
          "4. Acquiring Bank: The merchant's bank receiving customer funds.",
          "5. Issuing Bank: The customer's bank (HDFC, Chase, Barclays) that issued the debit/credit card and validates balances and 3D Secure OTP."
        ]
      },
      {
        "id": "idempotency-keys",
        "heading": "Idempotency Keys: Preventing Duplicate Debits",
        "paragraphs": [
          "In distributed payment architectures, network failures frequently occur AFTER the issuing bank debits customer funds but BEFORE the merchant receives the 200 OK confirmation.",
          "If the mobile app automatically retries the request without an Idempotency Key, the customer will be debited twice!",
          "Idempotency Guarantee: An Idempotency Key (UUID) is attached to the payment header. The payment gateway guarantees that no matter how many times a request with the SAME idempotency key is received within 24 hours, the card is charged exactly ONCE."
        ]
      },
      {
        "id": "payment-test-scenarios",
        "heading": "Essential Payment Gateway QA Scenarios",
        "paragraphs": [
          "1. Happy Path: Valid test card, correct CVV, 3DS OTP verified -> Payment captured, order ID generated, receipt emailed.",
          "2. Insufficient Funds: Use Stripe decline card (e.g. 4000...0002) -> Friendly decline message displayed; order remains in unpaid state.",
          "3. Incorrect CVV / Expired Date: Verify inline validation catches format errors before dispatching API call.",
          "4. 3DS Bank OTP Timeout: Wait 10 minutes on bank ACS screen -> Session timeout displayed; funds not debited; cart restored.",
          "5. Partial & Full Refunds: Initiate refund from admin dashboard -> Ledger updates, refund status reflects in customer transaction history.",
          "6. Currency Conversion: Purchase $10 USD item from an Indian INR card -> Currency conversion rate and foreign markup displayed clearly."
        ]
      }
    ]
  },
  "manual-security-accessibility": {
    "id": "manual-security-accessibility",
    "title": "Security (OWASP Top 10) & Accessibility (WCAG 2.2)",
    "category": "8. Advanced & Trending QA",
    "sourceUrl": "https://owasp.org/www-project-top-ten/",
    "description": "Execute manual security audits against OWASP Top 10 vulnerabilities (SQLi, XSS, IDOR) and verify WCAG 2.2 AA digital accessibility compliance.",
    "sections": [
      {
        "id": "owasp-top-10-qa",
        "heading": "OWASP Top 10: Manual QA Verification Techniques",
        "paragraphs": [
          "Security is not solely the job of specialized penetration testers. Manual QA engineers can uncover 60% of critical vulnerabilities using these direct inspection techniques:",
          "1. SQL Injection (SQLi): Input single quotes (') or payloads like ' OR '1'='1 into search and login inputs to check if raw SQL exceptions are exposed.",
          "2. Cross-Site Scripting (XSS): Enter HTML/JS strings like <script>alert('XSS')</script> into profile names and comments to verify that the frontend escapes characters properly.",
          "3. Insecure Direct Object References (IDOR): Log in as User A, inspect an order URL like /api/v1/orders/88412, and manually change the ID in Postman to 88411 to check if User B's order is exposed without authorization.",
          "4. Sensitive Data in URLs: Verify that passwords, tokens, and PII are never passed via GET query parameters (which leak into browser history and server logs).",
          "5. Broken Authentication: Verify that session tokens are invalidated on logout and password reset."
        ]
      },
      {
        "id": "wcag-accessibility",
        "heading": "WCAG 2.2 AA Accessibility Audit Checklist",
        "paragraphs": [
          "Digital accessibility ensures software is usable by people with visual, auditory, motor, and cognitive disabilities:",
          "1. Keyboard-Only Navigation: Navigate the entire website using only Tab, Shift+Tab, Enter, Space, and Escape. A clear, high-contrast visual focus ring must indicate the active element.",
          "2. Color Contrast Ratio: Text against background must satisfy minimum contrast ratios: 4.5:1 for standard body text and 3.0:1 for large display headings (verified using WebAIM Contrast Checker).",
          "3. Screen Reader Verification: Test critical journeys using Apple VoiceOver (Mac/iOS) or NVDA (Windows). All buttons must have descriptive aria-labels (not just 'click here').",
          "4. Form Label Association: Every input element must have an explicitly linked <label for=\"id\"> tag so screen readers read the field purpose when focused.",
          "5. Target Size (WCAG 2.2): Interactive touch targets must be at least 24x24 CSS pixels with sufficient spacing to prevent accidental clicks."
        ]
      }
    ]
  },
  "manual-shift-left-shift-right": {
    "id": "manual-shift-left-shift-right",
    "title": "Shift-Left & Shift-Right in Continuous Testing",
    "category": "8. Advanced & Trending QA",
    "sourceUrl": "https://martinfowler.com/articles/continuousDelivery.html",
    "description": "Evolve from traditional staged testing into full-lifecycle Quality Engineering: Shift-Left early static prevention vs Shift-Right production observability and feature flags.",
    "sections": [
      {
        "id": "shift-left-prevention",
        "heading": "Shift-Left: Preventing Defects Before Code is Written",
        "paragraphs": [
          "Shift-Left moves testing activities to the earliest possible stages of the software development life cycle (SDLC).",
          "Instead of waiting for a compiled build, QA begins testing at the requirements and architecture design phases:",
          "1. Three Amigos Refinement: QA, Dev, and Product review stories together to resolve logic flaws before coding.",
          "2. Static Verification: Reviewing API contracts (OpenAPI / Swagger specs) and database schemas for boundary constraints.",
          "3. BDD Specifications: Collaborating on Given-When-Then criteria that developers run locally as automated unit/integration tests."
        ]
      },
      {
        "id": "shift-right-production",
        "heading": "Shift-Right: Testing & Monitoring in Production",
        "paragraphs": [
          "Shift-Right recognizes that no staging environment perfectly replicates the scale, network latency, and diversity of real-world production users.",
          "QA utilizes modern production testing techniques:",
          "1. Feature Flags / Toggles (LaunchDarkly): Enabling new features for internal QA users in production before turning them on for 1% -> 10% -> 100% of public users.",
          "2. Canary Releases: Routing 2% of live customer traffic to a newly deployed build and monitoring error rates before complete deployment.",
          "3. Synthetic Monitoring: Scheduled automated scripts continuously simulating user logins and checkout journeys on production 24/7.",
          "4. Chaos Engineering: Injecting simulated latency or server drops in production staging to verify automated failover."
        ]
      }
    ]
  },
  "manual-ai-in-qa": {
    "id": "manual-ai-in-qa",
    "title": "Generative AI & Modern Quality Engineering",
    "category": "8. Advanced & Trending QA",
    "sourceUrl": "https://github.com/features/copilot",
    "description": "Leverage Generative AI and LLMs as a force multiplier in manual testing: synthetic test data generation, combinatorial prompt engineering, visual AI diffing, and exploratory testing.",
    "sections": [
      {
        "id": "ai-force-multiplier",
        "heading": "AI as a Force Multiplier for Manual Testers",
        "paragraphs": [
          "Artificial Intelligence will not replace manual testers—but manual testers who leverage AI will replace those who do not.",
          "AI excels at combinatorial calculations and synthetic data synthesis, allowing human QA to focus on deep exploratory testing, usability nuances, and business risk analysis."
        ]
      },
      {
        "id": "practical-ai-use-cases",
        "heading": "Practical AI Use Cases in Daily Manual QA",
        "paragraphs": [
          "1. Deriving Edge Cases from PRDs: Prompting an LLM with a complex user story to surface obscure boundary conditions, race conditions, and negative paths.",
          "2. Generating Synthetic Test Data: Instant generation of 50 localized customer profiles with valid Luhn credit cards, realistic addresses, and edge-case unicode names.",
          "3. Formulating Gherkin Scenarios: Transforming bullet-point business requirements into formal Given-When-Then acceptance criteria.",
          "4. Root Cause Analysis Brainstorming: Supplying application logs and error traces to assist in 5 Whys categorization."
        ]
      }
    ]
  },
  "manual-interview-qa-top-30": {
    "id": "manual-interview-qa-top-30",
    "title": "Top 30 Manual QA Interview Questions & Expert Answers",
    "category": "9. Interview Masterclass & Cheat Sheets",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Ace your senior manual QA and SDET interviews with model answers, technical justifications, practical real-world scenarios, and common interview traps.",
    "sections": [
      {
        "id": "interview-foundations",
        "heading": "Foundational & Conceptual QA Questions (Q1 - Q10)",
        "paragraphs": [
          "1. What is the difference between Error, Bug, Defect, and Failure?: An Error is a human mistake made by a developer or analyst. A Defect or Bug is the manifestation of that mistake inside the code or specification document. A Failure is a runtime event where the running software fails to deliver expected behavior to the user. An Incident is the symptom or alert flagged when a failure occurs.",
          "2. What is the 7th ISTQB principle (Absence-of-errors fallacy)?: Fixing 99% of bugs does not guarantee the commercial success of a software product if the system built does not fulfill actual user needs, business goals, or market usability.",
          "3. What is the difference between Verification and Validation?: Verification ('Are we building the product right?') is static evaluation of specs, code reviews, and architecture diagrams without running code. Validation ('Are we building the right product?') is dynamic evaluation of running software against real customer requirements.",
          "4. Explain the difference between QA, QC, and QE: QA is process-oriented (preventing bugs through audits and standards). QC is product-oriented (detecting bugs through manual test execution). QE is engineering-oriented (building automated pipelines, tools, and testing infrastructure).",
          "5. How does 2-Value BVA differ from 3-Value BVA?: 2-value BVA tests on the boundary and just outside {Min, Min-1} and {Max, Max+1} (4 tests). 3-value BVA (Robustness testing) tests immediately below, on, and immediately above {Min-1, Min, Min+1} and {Max-1, Max, Max+1} (6 tests).",
          "6. Differentiate Smoke, Sanity, Regression, and Retesting: Smoke tests basic stability of a new build (broad & shallow). Sanity tests a specific bug fix or module (narrow & deep). Retesting verifies that a specifically logged bug is fixed. Regression ensures untouched features remain unbroken by recent code changes.",
          "7. What is Severity vs Priority?: Severity is the technical impact (crash, data loss) determined by QA. Priority is the commercial urgency (revenue impact, release blocker) determined jointly with the Product Manager.",
          "8. Can a bug have High Severity and Low Priority?: Yes. For example, a complete app crash that occurs ONLY on a deprecated legacy OS (e.g. Android 8.0) used by 0.01% of customers. Technical impact is extreme (crash), but business urgency is low.",
          "9. Can a bug have Low Severity and High Priority?: Yes. For example, the company brand logo is corrupted on the homepage or the CEO's name has a typo on an investor portal. Zero technical crash, but immediate commercial priority to fix.",
          "10. What is the Defect Life Cycle and when do you reopen a bug?: A bug goes through NEW -> ASSIGNED -> OPEN -> FIXED -> RETEST -> VERIFIED/CLOSED. You reopen a bug ONLY if the exact reproduction steps still reproduce the same bug on the new build."
        ]
      },
      {
        "id": "interview-process-strategy",
        "heading": "Process, Strategy & Practical Scenarios (Q11 - Q20)",
        "paragraphs": [
          "11. What do you do when a developer says 'It works on my machine'?: (1) Verify environment differences (OS version, browser cache, database seeds). (2) Share full reproduction steps with screen recording video, network HAR logs, and console error traces. (3) Invite developer to pair test on the exact test device.",
          "12. What if requirements change constantly mid-sprint?: (1) Enforce the Definition of Ready (DoR); don't accept stories with moving scope into an active sprint. (2) If business priorities change, renegotiate scope with the Product Owner and adjust story points. (3) Use exploratory test charters to test evolving features flexibly.",
          "13. When is testing considered complete? When to stop testing?: Testing is stopped when formal Exit Criteria are met: (1) 100% planned tests executed. (2) Zero open P1/Blocker or P2/Critical bugs. (3) Test coverage meets agreed SLA (>= 95%). (4) Budget or timebox limits reached with documented residual risk sign-off.",
          "14. How to test a Pen / Water Bottle / Elevator? (The Heuristic Product Framework): Structure answers into 6 pillars: (1) Functional (does it write smoothly on paper, plastic, wood?). (2) Boundary (extreme pressure, writing upside down). (3) Performance (writing speed, heat/cold -20°C to 50°C). (4) Usability (grip comfort, weight). (5) Security/Safety (non-toxic ink, cap air-hole for choking hazard). (6) Durability (drop from 2 meters, water resistance).",
          "15. What are the 16 sections of an IEEE 829 Test Plan?: Scope, Test Items, Features to be Tested, Features Not to be Tested, Approach, Item Pass/Fail Criteria, Suspension/Resumption, Deliverables, Tasks, Environment Needs, Responsibilities, Staffing, Schedule, Risks, Approvals.",
          "16. What is the 5 Whys technique in RCA?: An iterative interrogative method where you ask 'Why?' 5 successive times to peel away surface symptoms and uncover the fundamental process breakdown.",
          "17. What is Exploratory Testing vs Ad-hoc testing?: Ad-hoc testing is unstructured, unrecorded random clicking. Exploratory testing is disciplined, timeboxed exploration driven by formal test charters and documented in Session-Based Test Management (SBTM).",
          "18. What are User Stories, Acceptance Criteria, DoR and DoD?: User stories define user value. Acceptance criteria define pass/fail conditions in Gherkin. DoR ensures a story is clear before development begins. DoD ensures code is fully tested and verified before release.",
          "19. What is Session-Based Test Management (SBTM)?: A method to manage exploratory testing by timeboxing sessions into 60-90 minute blocks, measuring TBS metrics (Test time, Bug reporting time, Setup time), and conducting a debrief with leads.",
          "20. What is Defect Density and Defect Leakage Rate?: Defect Density is total bugs divided by size (KLOC or story points). Defect Leakage Rate is the percentage of bugs that escaped QA into production: (Escaped / Total) * 100%."
        ]
      },
      {
        "id": "interview-technical-domain",
        "heading": "Technical, API, Mobile & Security Scenarios (Q21 - Q30)",
        "paragraphs": [
          "21. Difference between Alpha Testing and Beta Testing?: Alpha testing is conducted by internal employees in a controlled staging environment. Beta testing is conducted by external real end-users on their own production devices and networks.",
          "22. What are HTTP status codes 401 vs 403 vs 404 vs 500 vs 502?: 401 is Unauthorized (missing/expired token). 403 is Forbidden (authenticated but lacks role permission). 404 is Not Found. 500 is Internal Server Error (unhandled backend exception). 502 is Bad Gateway (reverse proxy upstream failure).",
          "23. How do you test a REST API manually without a frontend?: Use Postman or cURL to inspect request/response payloads, headers, status codes, response time SLAs, input boundary validation, and error JSON structures.",
          "24. What SQL queries are essential for QA?: SELECT with WHERE, COUNT, GROUP BY, HAVING, and LEFT JOIN to identify orphaned records (e.g. order items without a parent order).",
          "25. How do you test an e-commerce payment flow for double-debit vulnerabilities?: Test rapid double-clicks on 'Pay Now', test network drops immediately after OTP submission, and verify backend Idempotency Key deduplication.",
          "26. What is Mobile Interruption Testing?: Testing app stability during incoming phone calls, SMS popups, battery alerts (20%/10%), alarms, charger connect/disconnect, and switching between Wi-Fi and 4G.",
          "27. What is the OWASP Top 10 and how does manual QA check for SQLi and XSS?: SQLi: inject single quotes (') and ' OR '1'='1 to check for exposed SQL errors. XSS: inject <script>alert(1)</script> to verify input sanitization.",
          "28. How do you test accessibility (WCAG 2.2 AA) manually?: (1) Navigate the entire app using only the keyboard (Tab, Shift+Tab, Enter). (2) Verify 4.5:1 color contrast. (3) Verify screen reader announcement (NVDA/VoiceOver) for all interactive buttons.",
          "29. What is Shift-Left and Shift-Right testing?: Shift-Left moves testing early into requirements and architecture design. Shift-Right tests in production through feature flags, canary rollouts, and synthetic monitoring.",
          "30. How will Generative AI impact manual testers in the next 5 years?: AI will accelerate synthetic test data generation, edge case derivation, and initial test drafting. However, human intuition, exploratory domain testing, UX critique, and risk governance will remain irreplaceable."
        ]
      }
    ]
  },
  "manual-cheat-sheets-reference": {
    "id": "manual-cheat-sheets-reference",
    "title": "Comprehensive Manual QA Quick Reference Cheat Sheets",
    "category": "9. Interview Masterclass & Cheat Sheets",
    "sourceUrl": "https://www.istqb.org/",
    "description": "Instant quick-reference cheat sheets for everyday manual testing, test design formulas, HTTP response codes, STLC deliverables, and production release checklists.",
    "sections": [
      {
        "id": "cheat-sheet-formulas",
        "heading": "Cheat Sheet 1: Black-Box Test Design Formulas",
        "paragraphs": [
          "Quick formulas for Boundary Value Analysis and Equivalence Partitioning:",
          "1. 2-Value BVA Points for range [Min, Max]: {Min - 1, Min} and {Max, Max + 1} -> 4 Test Cases.",
          "2. 3-Value BVA Points (Robustness) for range [Min, Max]: {Min - 1, Min, Min + 1} and {Max - 1, Max, Max + 1} -> 6 Test Cases.",
          "3. Equivalence Partitions for range [Min, Max]: 1 Valid Partition: [Min to Max]; 2 Invalid Partitions: [< Min] and [> Max].",
          "4. Decision Table Rule Combinations for n binary conditions: Total Rules = 2^n."
        ]
      },
      {
        "id": "cheat-sheet-http-codes",
        "heading": "Cheat Sheet 2: HTTP Status Codes for QA Engineers",
        "table": {
          "headers": [
            "Status Code",
            "Name",
            "Category",
            "QA Interpretation"
          ],
          "rows": [
            [
              "200 OK",
              "OK",
              "Success",
              "Request succeeded; data returned in body."
            ],
            [
              "201 Created",
              "Created",
              "Success",
              "New entity successfully persisted in database."
            ],
            [
              "204 No Content",
              "No Content",
              "Success",
              "Action succeeded (e.g. DELETE); empty body expected."
            ],
            [
              "400 Bad Request",
              "Bad Request",
              "Client Error",
              "Validation failed (missing required field, malformed syntax)."
            ],
            [
              "401 Unauthorized",
              "Unauthorized",
              "Client Error",
              "Missing or expired authentication token."
            ],
            [
              "403 Forbidden",
              "Forbidden",
              "Client Error",
              "User authenticated but lacks role permissions (RBAC)."
            ],
            [
              "404 Not Found",
              "Not Found",
              "Client Error",
              "Endpoint or resource identifier does not exist."
            ],
            [
              "409 Conflict",
              "Conflict",
              "Client Error",
              "Resource already exists (e.g. duplicate email registration)."
            ],
            [
              "422 Unprocessable",
              "Unprocessable",
              "Client Error",
              "Semantic business rule failed (e.g. checkout amount < minimum)."
            ],
            [
              "429 Too Many Req",
              "Rate Limited",
              "Client Error",
              "Rate limit exceeded (e.g. OTP spam prevention)."
            ],
            [
              "500 Internal Error",
              "Server Error",
              "Server Defect",
              "Unhandled exception in backend code (ALWAYS a backend bug)."
            ],
            [
              "502 Bad Gateway",
              "Bad Gateway",
              "Server Defect",
              "Reverse proxy received invalid response from upstream microservice."
            ],
            [
              "503 Service Unavail",
              "Unavailable",
              "Infrastructure",
              "Server overloaded or temporarily down for maintenance."
            ],
            [
              "504 Gateway Timeout",
              "Gateway Timeout",
              "Infrastructure",
              "Upstream database query or third-party service timed out."
            ]
          ]
        }
      },
      {
        "id": "cheat-sheet-stlc-deliverables",
        "heading": "Cheat Sheet 3: STLC Quality Gate Deliverables",
        "table": {
          "headers": [
            "STLC Phase",
            "Mandatory Entry Criteria",
            "Key QA Activities",
            "Official Exit Deliverable"
          ],
          "rows": [
            [
              "1. Requirement Analysis",
              "Approved PRD / User Stories",
              "Identify test scope, clarify ambiguities",
              "RTM (Requirements Traceability Matrix)"
            ],
            [
              "2. Test Planning",
              "Requirement document frozen",
              "Define strategy, estimate effort",
              "Master Test Plan (IEEE 829)"
            ],
            [
              "3. Test Case Design",
              "Test plan approved",
              "Write test cases, boundary analysis",
              "Reviewed Test Case Suite & Test Data"
            ],
            [
              "4. Environment Setup",
              "Hardware / server provisioned",
              "Deploy build, seed test database",
              "QA Environment Ready & Smoke Test Pass"
            ],
            [
              "5. Test Execution",
              "Build deployed, test cases ready",
              "Execute test cases, log Jira defects",
              "Test Execution Logs & Defect Reports"
            ],
            [
              "6. Test Closure",
              "Testing complete, zero blocker bugs",
              "Evaluate metrics, release sign-off",
              "Test Summary Report (TSR) & Sign-Off"
            ]
          ]
        }
      }
    ]
  }
};
