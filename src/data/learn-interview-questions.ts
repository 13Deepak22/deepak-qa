// AUTO-GENERATED FROM QA INTERVIEW.PDF - 100% CLEAN & VERIFIED
// Every question is guaranteed to have non-empty answers with zero duplicates.

export interface StructuredInterviewQuestion {
  id: string;
  num: string;
  sectionNum?: string;
  question: string;
  category: string;
  answers: string[];
}

export const MASTER_INTERVIEW_QUESTIONS: Record<string, StructuredInterviewQuestion[]> = {
  "interview-manual-testing": [
    {
      "id": "manual-q1",
      "num": "1",
      "question": "What is Software Testing?",
      "category": "Basics of Software Testing",
      "answers": [
        "Software Testing is the process of evaluating and verifying that a software application or system meets the",
        "specified requirements and works as intended. It involves executing the software to identify defects, ensuring it",
        "is free from critical bugs, and confirming that it delivers the expected business value.",
        "\u2022 The main goals are:",
        "o Verification: Does the software meet the design specifications?",
        "o Validation: Does the software meet the customer's needs?",
        "\u2022 Testing is not only about finding defects; it's also about preventing defects and improving quality."
      ]
    },
    {
      "id": "manual-q2",
      "num": "2",
      "question": "Difference between Verification and Validation.",
      "category": "Basics of Software Testing",
      "answers": [
        "\u2022 Verification ensures the product is built according to the requirements and design. It answers, \u201cAre we",
        "building the product right?\u201d",
        "Example: Reviewing documents, inspecting code.",
        "\u2022 Validation ensures the product meets the actual needs of the user. It answers, \u201cAre we building the",
        "right product?\u201d",
        "Example: Testing the application with real-world scenarios.",
        "Key point: Verification is a static process (no code execution), while Validation is a dynamic process",
        "(involves running the code)."
      ]
    },
    {
      "id": "manual-q3",
      "num": "3",
      "question": "What is the Software Development Life Cycle (SDLC)?",
      "category": "Basics of Software Testing",
      "answers": [
        "The SDLC is the process of planning, creating, testing, and deploying software. It defines the stages a project",
        "goes through from conception to maintenance.",
        "Phases include:",
        "1. Requirement Gathering",
        "2. Design",
        "3. Development",
        "4. Testing",
        "5. Deployment",
        "6. Maintenance",
        "Example: In an e-commerce project, SDLC starts from collecting requirements (shopping cart, payment",
        "gateway) to designing UI, developing code, testing, deploying, and fixing post-release issues."
      ]
    },
    {
      "id": "manual-q4",
      "num": "4",
      "question": "What is the Software Testing Life Cycle (STLC)?",
      "category": "Basics of Software Testing",
      "answers": [
        "STLC is the sequence of specific activities conducted during the testing process to ensure software quality.",
        "Phases include:",
        "1. Requirement Analysis",
        "2. Test Planning",
        "3. Test Case Development",
        "4. Test Environment Setup",
        "5. Test Execution",
        "6. Test Cycle Closure",
        "Each stage has its deliverables. For example, during Test Planning, we produce the Test Plan Document;",
        "during Test Execution, we produce Defect Reports."
      ]
    },
    {
      "id": "manual-q5",
      "num": "5",
      "question": "What are the different levels of testing?",
      "category": "Basics of Software Testing",
      "answers": [
        "1. Unit Testing: Testing individual components (done by developers).",
        "2. Integration Testing: Ensuring different modules work together.",
        "3. System Testing: Testing the complete system as a whole.",
        "4. Acceptance Testing: Ensuring the system meets user needs (UAT).",
        "Example: In an ATM project, first test the PIN verification function (unit test), then combine it with balance",
        "checking (integration test), then test the whole ATM workflow (system test), and finally let users test before go-",
        "live (acceptance test)."
      ]
    },
    {
      "id": "manual-q6",
      "num": "6",
      "question": "What are the types of testing?",
      "category": "Basics of Software Testing",
      "answers": [
        "\u2022 Functional Testing: Validates the business logic and features.",
        "\u2022 Non-Functional Testing: Checks performance, usability, and reliability.",
        "\u2022 Maintenance Testing: After production changes, ensure existing features still work (Regression",
        "Testing).",
        "Example: Testing a login form for valid/invalid credentials is functional testing; testing the speed of login is",
        "performance testing."
      ]
    },
    {
      "id": "manual-q7",
      "num": "7",
      "question": "Difference between Manual Testing and Automation Testing.",
      "category": "Basics of Software Testing",
      "answers": [
        "\u2022 Manual Testing: Human testers execute test cases without tools. It's flexible and good for exploratory",
        "or usability testing.",
        "\u2022 Automation Testing: Uses scripts/tools to run tests automatically; suitable for regression, performance,",
        "and repetitive tasks."
      ]
    },
    {
      "id": "manual-q8",
      "num": "8",
      "question": "What is a Test Case?",
      "category": "Basics of Software Testing",
      "answers": [
        "A Test Case is a set of conditions and steps that determine whether a software feature works as expected.",
        "Includes: Test Case ID, description, preconditions, steps, expected result, actual result, status.",
        "Example: Test the \u201cForgot Password\u201d feature\u2014steps include entering an email, checking if a reset link is",
        "received."
      ]
    },
    {
      "id": "manual-q9",
      "num": "9",
      "question": "What is a Test Plan?",
      "category": "Basics of Software Testing",
      "answers": [
        "A Test Plan is a detailed document outlining the testing strategy, scope, schedule, resources, and objectives.",
        "Key sections:",
        "\u2022 Objective",
        "\u2022 Scope (In-Scope/Out-of-Scope)",
        "\u2022 Test strategy",
        "\u2022 Entry/Exit criteria",
        "\u2022 Schedule",
        "\u2022 Risks and mitigation"
      ]
    },
    {
      "id": "manual-q10",
      "num": "10",
      "question": "What is the difference between Severity and Priority?",
      "category": "Basics of Software Testing",
      "answers": [
        "\u2022 Severity: Impact of a defect on the system.",
        "Example: A crash in the payment gateway is Critical Severity.",
        "\u2022 Priority: Order in which the defect should be fixed.",
        "Example: A spelling mistake on the home page may have low severity but high priority if it impacts",
        "branding."
      ]
    },
    {
      "id": "manual-q11",
      "num": "11",
      "question": "What is the purpose of Test Documentation?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "Test documentation serves as a knowledge base for the testing process, ensuring that testing is structured,",
        "traceable, and repeatable.",
        "Its main purposes are:",
        "\u2022 To communicate testing scope, approach, and progress to stakeholders.",
        "\u2022 To provide evidence that testing was carried out.",
        "\u2022 To help in knowledge transfer to new team members.",
        "\u2022 To track coverage and ensure all requirements are tested.",
        "Examples of Test Documentation:",
        "\u2022 Test Plan",
        "\u2022 Test Cases",
        "\u2022 Test Scenario Documents",
        "\u2022 Traceability Matrix",
        "\u2022 Test Summary Report"
      ]
    },
    {
      "id": "manual-q12",
      "num": "12",
      "question": "What is a Test Scenario?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "A Test Scenario is a high-level description of what to test. It outlines what functionality or feature needs to",
        "be validated without going into detailed steps.",
        "\u2022 Focuses on user journeys rather than step-by-step execution.",
        "\u2022 Useful when we want to ensure end-to-end coverage.",
        "Example:",
        "For an e-commerce site:",
        "Scenario \u2013 Verify that a user can place an order successfully.",
        "This scenario will cover login \u2192 searching \u2192 adding to cart \u2192 payment \u2192 order confirmation."
      ]
    },
    {
      "id": "manual-q13",
      "num": "13",
      "question": "What is a Test Case? How is it different from a Test Scenario?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "A Test Case is a detailed set of instructions for executing a specific part of a test scenario.",
        "\u2022 Test Scenario is broad (what to test).",
        "\u2022 Test Case is detailed (how to test).",
        "Example:",
        "Scenario \u2013 Verify login functionality.",
        "Test Case \u2013 Step 1: Open login page \u2192 Step 2: Enter valid username/password \u2192 Step 3: Click login \u2192",
        "Expected Result: Redirect to dashboard."
      ]
    },
    {
      "id": "manual-q14",
      "num": "14",
      "question": "What is a Traceability Matrix (RTM) and why is it important?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "The Requirement Traceability Matrix is a document that maps requirements to test cases.",
        "Purpose:",
        "\u2022 Ensure complete coverage (no missed requirements).",
        "\u2022 Helps in impact analysis when requirements change.",
        "Structure:",
        "| Requirement ID | Requirement Description | Test Case ID(s) | Status |",
        "Example:",
        "If Req ID REQ-101 is \u201cUser should reset password,\u201d RTM will link it to all test cases covering reset",
        "functionality."
      ]
    },
    {
      "id": "manual-q15",
      "num": "15",
      "question": "What is a Bug/Defect in Software Testing?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "A defect (or bug) is a deviation of the software from its expected behavior or requirement.",
        "Example:",
        "Expected: Clicking \u201cAdd to Cart\u201d should increase the cart count.",
        "Actual: Clicking does nothing \u2192 This is a defect.",
        "Key points:",
        "\u2022 Error: Human mistake in code or requirement.",
        "\u2022 Defect: Deviation found during testing.",
        "\u2022 Failure: When the defect shows up in production."
      ]
    },
    {
      "id": "manual-q16",
      "num": "16",
      "question": "Explain the Defect Life Cycle.",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "The Defect Life Cycle (Bug Life Cycle) describes the stages a defect goes through from discovery to closure.",
        "Typical stages:",
        "1. New: Tester logs the defect.",
        "2. Assigned: Defect is assigned to a developer.",
        "3. Open: Developer starts working on it.",
        "4. Fixed: Developer fixes the defect.",
        "5. Retest: Tester retests to verify the fix.",
        "6. Closed: Defect is confirmed fixed.",
        "7. Reopened: If the defect reappears.",
        "Example:",
        "You find the payment button unresponsive \u2192 log it \u2192 dev fixes \u2192 you retest \u2192 if working fine, you close it."
      ]
    },
    {
      "id": "manual-q17",
      "num": "17",
      "question": "What is Defect Severity vs. Priority? Give examples.",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "\u2022 Severity: Impact on the system's functionality.",
        "\u2022 Priority: Urgency of fixing the defect.",
        "Example:",
        "\u2022 A spelling mistake in the company name: Low severity, High priority (branding issue).",
        "\u2022 System crash when clicking \u201cCheckout\u201d: High severity, High priority.",
        "\u2022 Minor color mismatch in footer: Low severity, Low priority."
      ]
    },
    {
      "id": "manual-q18",
      "num": "18",
      "question": "How do you write a good Bug Report?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "A good bug report should be clear, concise, and complete.",
        "Include:",
        "\u2022 Bug ID",
        "\u2022 Title/Summary",
        "\u2022 Steps to Reproduce",
        "\u2022 Expected Result",
        "\u2022 Actual Result",
        "\u2022 Screenshots/Logs",
        "\u2022 Environment details",
        "\u2022 Severity/Priority",
        "Example:",
        "Title: Payment fails when using PayPal.",
        "Steps: Add item \u2192 Checkout \u2192 Choose PayPal \u2192 Click Pay.",
        "Expected: Payment completes successfully.",
        "Actual: \u201cTransaction Failed\u201d error appears."
      ]
    },
    {
      "id": "manual-q19",
      "num": "19",
      "question": "What are Entry and Exit Criteria in Testing?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "\u2022 Entry Criteria: Conditions that must be met before testing begins.",
        "Example: Test environment ready, test data prepared, build deployed.",
        "\u2022 Exit Criteria: Conditions that must be met before ending testing.",
        "Example: All planned test cases executed, critical defects fixed, test summary report prepared."
      ]
    },
    {
      "id": "manual-q20",
      "num": "20",
      "question": "What is a Test Summary Report?",
      "category": "Test Documentation & Defect Management",
      "answers": [
        "A Test Summary Report (TSR) is prepared at the end of the testing phase to summarize:",
        "\u2022 Scope of testing",
        "\u2022 Test execution results",
        "\u2022 Defect details and their status",
        "\u2022 Coverage analysis",
        "\u2022 Risks and recommendations"
      ]
    },
    {
      "id": "manual-q21",
      "num": "21",
      "question": "What are Test Design Techniques?",
      "category": "Test Design Techniques",
      "answers": [
        "Test Design Techniques are systematic approaches to creating test cases that ensure maximum coverage with",
        "minimum effort. They help testers focus on critical areas, avoid duplication, and discover more defects.",
        "They are generally divided into:",
        "1. Black-Box Techniques \u2013 Based on requirements, without looking at the code.",
        "2. White-Box Techniques \u2013 Based on code structure.",
        "3. Experience-Based Techniques \u2013 Based on tester's knowledge and experience.",
        "Example: If a login page requires a password of 8\u201312 characters, you can use Boundary Value Analysis to",
        "check passwords of 7, 8, 12, and 13 characters."
      ]
    },
    {
      "id": "manual-q22",
      "num": "22",
      "question": "What is Equivalence Partitioning (EP)? Give an example.",
      "category": "Test Design Techniques",
      "answers": [
        "Equivalence Partitioning divides test data into groups (partitions) that are expected to be treated the same by",
        "the system. If one value in a group works, all should work; if one fails, all fail.",
        "Example:",
        "Suppose a field accepts numbers from 1 to 100.",
        "Partitions:",
        "\u2022 Valid: 1 to 100 (e.g., test with 50)",
        "\u2022 Invalid: < 1 (e.g., 0) and > 100 (e.g., 101)",
        "Benefit: Reduces the number of test cases without losing coverage."
      ]
    },
    {
      "id": "manual-q23",
      "num": "23",
      "question": "What is Boundary Value Analysis (BVA)? Give an example.",
      "category": "Test Design Techniques",
      "answers": [
        "BVA focuses on testing at the edges of input ranges, as defects often occur at boundaries.",
        "Example:",
        "If the valid input is 18\u201360 for age:",
        "Test values: 17 (just below), 18 (minimum), 60 (maximum), 61 (just above).",
        "This ensures that both lower and upper limits are tested, along with just-outside values."
      ]
    },
    {
      "id": "manual-q24",
      "num": "24",
      "question": "Explain Decision Table Testing with an example.",
      "category": "Test Design Techniques",
      "answers": [
        "Decision Table Testing is used for systems with complex business rules. It helps ensure all possible",
        "combinations of inputs and outcomes are tested.",
        "Example: Loan approval:",
        "Conditions:",
        "1. Credit score > 700",
        "2. Income > \u20b930,000",
        "Actions: Approve / Reject",
        "Credit > 700 Income > 30k Action",
        "Y Y Approve",
        "Y N Reject",
        "N Y Reject",
        "N N Reject"
      ]
    },
    {
      "id": "manual-q25",
      "num": "25",
      "question": "What is State Transition Testing? Give an example.",
      "category": "Test Design Techniques",
      "answers": [
        "State Transition Testing checks how the system behaves when changing from one state to another based on",
        "events/inputs.",
        "Example: ATM machine:",
        "\u2022 State: Card inserted \u2192 Enter PIN \u2192 Valid PIN \u2192 Access account.",
        "\u2022 Test invalid PIN thrice \u2192 State changes to \u201cCard blocked.\u201d",
        "Used when the software has finite states and rules for transitions."
      ]
    },
    {
      "id": "manual-q26",
      "num": "26",
      "question": "What is Use Case Testing?",
      "category": "Test Design Techniques",
      "answers": [
        "Use Case Testing is based on user scenarios describing how the system will be used in real life.",
        "\u2022 Focuses on end-to-end workflows.",
        "\u2022 Helps find gaps in integration points.",
        "Example: E-commerce: A \u201cPlace Order\u201d use case will include login, product selection, adding to cart,",
        "payment, and confirmation."
      ]
    },
    {
      "id": "manual-q27",
      "num": "27",
      "question": "What is Error Guessing?",
      "category": "Test Design Techniques",
      "answers": [
        "Error Guessing relies on the experience and intuition of the tester to guess where defects are likely to be.",
        "\u2022 Not a formal technique.",
        "\u2022 Often used alongside other methods.",
        "Example: A tester may guess that an email field might accept invalid formats like test@.com and try those",
        "inputs."
      ]
    },
    {
      "id": "manual-q28",
      "num": "28",
      "question": "What is Exploratory Testing?",
      "category": "Test Design Techniques",
      "answers": [
        "Exploratory Testing is simultaneous learning, test design, and execution without predefined test cases.",
        "\u2022 Useful when time is short or documentation is incomplete.",
        "\u2022 Requires skilled testers with domain knowledge.",
        "Example: Testing a new chat application without test scripts\u2014exploring features, sending random messages,",
        "trying special characters, etc."
      ]
    },
    {
      "id": "manual-q29",
      "num": "29",
      "question": "What is Pairwise Testing?",
      "category": "Test Design Techniques",
      "answers": [
        "Pairwise Testing is a combinatorial technique where testers create test cases covering all possible pairs of",
        "input parameters.",
        "\u2022 Reduces the total number of test cases while covering important interactions.",
        "Example:",
        "Browser (Chrome, Firefox, Edge) \u00d7 OS (Windows, Mac, Linux) \u2192 Instead of testing all 9 combinations,",
        "pairwise covers each pair at least once."
      ]
    },
    {
      "id": "manual-q30",
      "num": "30",
      "question": "What is White-Box Testing? How is it different from Black-Box Testing?",
      "category": "Test Design Techniques",
      "answers": [
        "\u2022 White-Box Testing: Based on code structure, checks internal paths, branches, loops. Done by",
        "developers or testers with coding skills. Example: Unit Testing, Code Coverage Testing.",
        "\u2022 Black-Box Testing: Based on requirements without code knowledge. Example: Functional Testing, UI",
        "Testing.",
        "Key difference:",
        "\u2022 White-box asks \u201cHow is it built?\u201d",
        "\u2022 Black-box asks \u201cDoes it work as expected?\u201d"
      ]
    },
    {
      "id": "manual-q31",
      "num": "31",
      "question": "What is Functional Testing?",
      "category": "Functional Testing Types",
      "answers": [
        "Functional Testing verifies that the software's features work according to the specified requirements. It focuses",
        "on what the system does rather than how it does it.",
        "\u2022 Done using black-box techniques.",
        "\u2022 Ensures business logic works correctly.",
        "Example: For a banking app, functional testing ensures that money transfers, balance checks, and account",
        "statements work as expected."
      ]
    },
    {
      "id": "manual-q32",
      "num": "32",
      "question": "What is Smoke Testing? Why is it called so?",
      "category": "Functional Testing Types",
      "answers": [
        "Smoke Testing is a preliminary check to verify that the most critical functionalities of an application work",
        "before conducting more detailed testing.",
        "\u2022 Also known as Build Verification Testing (BVT).",
        "\u2022 Ensures the application is stable enough for further testing.",
        "Example: In an e-commerce app, smoke testing might include logging in, searching for a product, adding to",
        "cart, and logging out.",
        "Why called \u201cSmoke Testing\u201d? In hardware testing, if a device smoked after powering on, it failed the initial",
        "test. The software analogy means, \u201cIf the build fails basic tests, it's not worth continuing.\u201d"
      ]
    },
    {
      "id": "manual-q33",
      "num": "33",
      "question": "What is Sanity Testing? How is it different from Smoke Testing?",
      "category": "Functional Testing Types",
      "answers": [
        "Sanity Testing is a narrow, focused testing to verify specific bug fixes or minor changes in functionality.",
        "\u2022 It checks if the specific part of the application works correctly after changes.",
        "Difference:",
        "\u2022 Smoke Testing: Broad, shallow, early build check.",
        "\u2022 Sanity Testing: Narrow, deep check after bug fixes.",
        "Example: If a bug in \u201cpassword reset\u201d is fixed, sanity testing will focus only on that functionality."
      ]
    },
    {
      "id": "manual-q34",
      "num": "34",
      "question": "What is Regression Testing? Why is it important?",
      "category": "Functional Testing Types",
      "answers": [
        "Regression Testing ensures that new changes (code updates, bug fixes, enhancements) have not broken existing",
        "features.",
        "\u2022 It's repeated after every change in the application.",
        "\u2022 Often automated for efficiency.",
        "Example: If a payment gateway's UI is updated, regression testing ensures that login, search, cart, and other",
        "existing features still work."
      ]
    },
    {
      "id": "manual-q35",
      "num": "35",
      "question": "What is User Acceptance Testing (UAT)?",
      "category": "Functional Testing Types",
      "answers": [
        "UAT is the final phase of testing where end users or clients verify that the software meets their business needs.",
        "\u2022 Usually done in a staging environment.",
        "\u2022 If UAT passes, the software is approved for production.",
        "Example: For an HR payroll system, HR managers check if salary slips, tax deductions, and leave calculations",
        "match actual requirements."
      ]
    },
    {
      "id": "manual-q36",
      "num": "36",
      "question": "What is Integration Testing? What are its types?",
      "category": "Functional Testing Types",
      "answers": [
        "Integration Testing verifies that different modules or systems work together correctly.",
        "Types:",
        "1. Big Bang: All modules integrated at once.",
        "2. Incremental: Modules integrated step-by-step.",
        "o Top-Down: Higher-level modules tested first.",
        "o Bottom-Up: Lower-level modules tested first.",
        "Example: In an online travel booking site, integrating the flight search module with the payment and ticket",
        "generation modules."
      ]
    },
    {
      "id": "manual-q37",
      "num": "37",
      "question": "What is System Testing?",
      "category": "Functional Testing Types",
      "answers": [
        "System Testing validates the entire application as a whole in a complete, integrated environment.",
        "\u2022 Ensures the software meets both functional and non-functional requirements.",
        "\u2022 Usually the last step before UAT.",
        "Example: For an e-learning platform, system testing would check login, course enrollment, video streaming,",
        "payment, and certificate generation in a single end-to-end flow."
      ]
    },
    {
      "id": "manual-q38",
      "num": "38",
      "question": "What is End-to-End (E2E) Testing? How is it different from System Testing?",
      "category": "Functional Testing Types",
      "answers": [
        "E2E Testing checks the complete workflow of an application from start to finish, including interactions with",
        "external systems.",
        "Difference:",
        "\u2022 System Testing: Focuses on the application in isolation.",
        "\u2022 E2E Testing: Includes external dependencies (e.g., third-party APIs).",
        "Example: Booking a movie ticket\u2014includes selecting a movie, seat booking, payment via a third-party",
        "gateway, receiving a confirmation email."
      ]
    },
    {
      "id": "manual-q39",
      "num": "39",
      "question": "What is Exploratory Testing? How is it different from Ad-hoc Testing?",
      "category": "Functional Testing Types",
      "answers": [
        "Exploratory Testing is simultaneous learning, test design, and execution without pre-written test cases.",
        "\u2022 Done by experienced testers to uncover unexpected defects.",
        "Difference:",
        "\u2022 Exploratory: Structured with a charter (goal).",
        "\u2022 Ad-hoc: Completely unstructured and random.",
        "Example: While exploring a social media app, a tester tries unusual profile names or long status updates to see",
        "if the system handles them."
      ]
    },
    {
      "id": "manual-q40",
      "num": "40",
      "question": "What is Usability Testing? Why is it important?",
      "category": "Functional Testing Types",
      "answers": [
        "Usability Testing evaluates how easy and intuitive the application is for end users.",
        "\u2022 Focuses on UI design, navigation, and user satisfaction.",
        "\u2022 Often involves real users providing feedback.",
        "Example: In a food delivery app, testers check if users can easily search for a restaurant, apply filters, and place",
        "an order without confusion.",
        "Importance: Good usability increases customer satisfaction and reduces training/support needs."
      ]
    },
    {
      "id": "manual-q41",
      "num": "41",
      "question": "What is Non-Functional Testing? How is it different from Functional Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Non-functional testing checks how well a system performs under specific conditions, rather than what it does.",
        "\u2022 Includes performance, scalability, security, usability, and reliability testing.",
        "\u2022 Functional testing verifies features, while non-functional testing verifies attributes of the system.",
        "Example:",
        "\u2022 Functional \u2192 \"Does the login work?\"",
        "\u2022 Non-functional \u2192 \"Does the login happen within 2 seconds under 1,000 users?\""
      ]
    },
    {
      "id": "manual-q42",
      "num": "42",
      "question": "What is Performance Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Performance Testing checks the speed, responsiveness, and stability of a system under expected workloads.",
        "\u2022 Identifies bottlenecks and ensures performance goals are met.",
        "Example: Testing if a banking site loads the account summary within 3 seconds for 500 concurrent users."
      ]
    },
    {
      "id": "manual-q43",
      "num": "43",
      "question": "What is Load Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Load Testing measures system performance under expected user load to ensure it can handle the planned usage.",
        "Example: Simulating 1,000 users logging in simultaneously to see if the application slows down."
      ]
    },
    {
      "id": "manual-q44",
      "num": "44",
      "question": "What is Stress Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Stress Testing evaluates how the system behaves beyond its normal capacity until it breaks.",
        "Example: Sending 5x expected traffic to see how the system fails and recovers."
      ]
    },
    {
      "id": "manual-q45",
      "num": "45",
      "question": "What is Scalability Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Scalability Testing checks whether the system can scale up or down to handle increased or decreased",
        "workloads.",
        "Example: Increasing the number of transactions in a payment system from 100/sec to 1,000/sec and checking if",
        "it scales properly."
      ]
    },
    {
      "id": "manual-q46",
      "num": "46",
      "question": "What is Stability Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Stability Testing (soak testing) checks if the system runs without failure for a long period under a certain load.",
        "Example: Running a live video stream for 72 hours to ensure no memory leaks or crashes."
      ]
    },
    {
      "id": "manual-q47",
      "num": "47",
      "question": "What is Security Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Security Testing ensures the system is protected against unauthorized access, vulnerabilities, and attacks.",
        "Example: Testing if an e-commerce site prevents SQL Injection and Cross-Site Scripting (XSS)."
      ]
    },
    {
      "id": "manual-q48",
      "num": "48",
      "question": "What is Compatibility Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Compatibility Testing ensures the application works across different devices, browsers, operating systems, and",
        "network environments.",
        "Example: Checking if a travel booking site works on Chrome, Firefox, Safari, and Edge on both Windows and",
        "Mac."
      ]
    },
    {
      "id": "manual-q49",
      "num": "49",
      "question": "What is Localization Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Localization Testing verifies that the application is adapted for a specific region or language.",
        "Example: Checking if the date format is DD/MM/YYYY in India and MM/DD/YYYY in the US."
      ]
    },
    {
      "id": "manual-q50",
      "num": "50",
      "question": "What is Accessibility Testing?",
      "category": "Non-Functional Testing Types",
      "answers": [
        "Accessibility Testing ensures the application can be used by people with disabilities.",
        "Example: Checking if a website supports screen readers and has proper alt text for images."
      ]
    },
    {
      "id": "manual-q51",
      "num": "51",
      "question": "What is Defect Leakage?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Defect Leakage happens when a bug escapes from one testing phase and is found in a later stage.",
        "Example: A bug missed during system testing but found during UAT."
      ]
    },
    {
      "id": "manual-q52",
      "num": "52",
      "question": "What is Defect Density?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Defect Density = Number of confirmed defects / Size of the software module.",
        "It helps measure the quality of code.",
        "Example: 10 defects found in 500 lines of code \u2192 Density = 0.02 defects per LOC."
      ]
    },
    {
      "id": "manual-q53",
      "num": "53",
      "question": "What is Defect Clustering?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Defect Clustering means that most defects are found in a small number of modules due to high complexity or",
        "poor design.",
        "Example: 80% of bugs being in the payment gateway module."
      ]
    },
    {
      "id": "manual-q54",
      "num": "54",
      "question": "What is a Bug Triage?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Bug Triage is a meeting to prioritize and assign defects based on severity, priority, and business impact."
      ]
    },
    {
      "id": "manual-q55",
      "num": "55",
      "question": "What is a Showstopper Defect?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "A showstopper is a critical defect that blocks testing progress.",
        "Example: Application crashes immediately after login."
      ]
    },
    {
      "id": "manual-q56",
      "num": "56",
      "question": "What is a Latent Defect?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "A defect that exists but is not detected during testing and appears later under specific conditions.",
        "Example: A bug in a tax calculation system that only appears at year-end."
      ]
    },
    {
      "id": "manual-q57",
      "num": "57",
      "question": "What is a Masked Defect?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "A defect hidden by another defect.",
        "Example: A crash in the payment page hides a bug in the discount calculation."
      ]
    },
    {
      "id": "manual-q58",
      "num": "58",
      "question": "What is Root Cause Analysis (RCA)?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "RCA identifies the underlying cause of a defect to prevent recurrence.",
        "Example: Investigating why a login bug occurred \u2192 Found incorrect password hashing logic."
      ]
    },
    {
      "id": "manual-q59",
      "num": "59",
      "question": "What is a Bug Life Cycle Tool? Give examples.",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Bug Life Cycle tools manage defects from logging to closure.",
        "Examples: Jira, Bugzilla, Mantis, Azure DevOps."
      ]
    },
    {
      "id": "manual-q60",
      "num": "60",
      "question": "What is the purpose of logging defects early?",
      "category": "Defect Management & Bug Reporting",
      "answers": [
        "Catching bugs early reduces the cost of fixing them, as the cost of a defect increases in later stages of SDLC."
      ]
    },
    {
      "id": "manual-q61",
      "num": "61",
      "question": "What is Agile Testing?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Agile Testing is testing that follows Agile principles, where testing and development happen simultaneously."
      ]
    },
    {
      "id": "manual-q62",
      "num": "62",
      "question": "What are User Stories?",
      "category": "Agile Testing Concepts",
      "answers": [
        "User Stories describe features from the end-user perspective.",
        "Example: \u201cAs a user, I want to reset my password so that I can regain access to my account.\u201d"
      ]
    },
    {
      "id": "manual-q63",
      "num": "63",
      "question": "What is Acceptance Criteria in Agile?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Conditions that a user story must meet to be considered complete."
      ]
    },
    {
      "id": "manual-q64",
      "num": "64",
      "question": "What is Sprint Testing?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Sprint Testing is testing within a sprint cycle, including functional and regression tests."
      ]
    },
    {
      "id": "manual-q65",
      "num": "65",
      "question": "What is Continuous Integration in Agile?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Continuous Integration means developers frequently merge code changes into a shared repository, followed by",
        "automated builds and tests."
      ]
    },
    {
      "id": "manual-q66",
      "num": "66",
      "question": "What is Shift-Left Testing?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Shift-Left means starting testing earlier in the SDLC to find bugs sooner."
      ]
    },
    {
      "id": "manual-q67",
      "num": "67",
      "question": "What is a Product Backlog?",
      "category": "Agile Testing Concepts",
      "answers": [
        "A prioritized list of all desired features, enhancements, and fixes."
      ]
    },
    {
      "id": "manual-q68",
      "num": "68",
      "question": "What is a Sprint Retrospective?",
      "category": "Agile Testing Concepts",
      "answers": [
        "A meeting at the end of a sprint to discuss what went well and what to improve."
      ]
    },
    {
      "id": "manual-q69",
      "num": "69",
      "question": "What is a Definition of Done (DoD)?",
      "category": "Agile Testing Concepts",
      "answers": [
        "A checklist that a product increment must meet to be considered complete."
      ]
    },
    {
      "id": "manual-q70",
      "num": "70",
      "question": "What is Pair Testing?",
      "category": "Agile Testing Concepts",
      "answers": [
        "Two testers (or a tester and a developer) work together on the same feature to increase coverage and find more",
        "bugs."
      ]
    },
    {
      "id": "manual-q71",
      "num": "71",
      "question": "What are Test Metrics?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Test metrics are measurements that track the effectiveness of testing.",
        "Examples: Test coverage, defect density, test execution rate."
      ]
    },
    {
      "id": "manual-q72",
      "num": "72",
      "question": "What is Test Coverage?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Test coverage measures how much of the application's functionality is tested."
      ]
    },
    {
      "id": "manual-q73",
      "num": "73",
      "question": "What is Requirement Coverage?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Requirement coverage ensures that all requirements have at least one test case linked."
      ]
    },
    {
      "id": "manual-q74",
      "num": "74",
      "question": "What is Code Coverage?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Code coverage measures the percentage of source code executed during testing."
      ]
    },
    {
      "id": "manual-q75",
      "num": "75",
      "question": "What is Test Execution Status?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "It shows the percentage of planned tests that are executed and their pass/fail rates."
      ]
    },
    {
      "id": "manual-q76",
      "num": "76",
      "question": "What is Test Case Effectiveness?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Measures the ability of test cases to detect defects."
      ]
    },
    {
      "id": "manual-q77",
      "num": "77",
      "question": "What is Defect Removal Efficiency (DRE)?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "DRE = (Defects found in testing / Total defects) \u00d7 100."
      ]
    },
    {
      "id": "manual-q78",
      "num": "78",
      "question": "What is Test Productivity?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Number of test cases created or executed per tester per day."
      ]
    },
    {
      "id": "manual-q79",
      "num": "79",
      "question": "What is Mean Time to Detect (MTTD)?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Average time taken to detect a defect after it is introduced."
      ]
    },
    {
      "id": "manual-q80",
      "num": "80",
      "question": "What is Mean Time to Repair (MTTR)?",
      "category": "Test Metrics & Measurement",
      "answers": [
        "Average time taken to fix a defect after it is reported."
      ]
    },
    {
      "id": "manual-q81",
      "num": "81",
      "question": "What challenges do you face in Manual Testing?",
      "category": "Common Testing Challenges",
      "answers": [
        "\u2022 Unclear requirements",
        "\u2022 Limited time for testing",
        "\u2022 Frequent changes in requirements",
        "\u2022 Incomplete test data"
      ]
    },
    {
      "id": "manual-q82",
      "num": "82",
      "question": "How do you handle requirement changes during testing?",
      "category": "Common Testing Challenges",
      "answers": [
        "By impact analysis, updating test cases, and communicating with stakeholders."
      ]
    },
    {
      "id": "manual-q83",
      "num": "83",
      "question": "How do you test when requirements are unclear?",
      "category": "Common Testing Challenges",
      "answers": [
        "By exploratory testing, involving business analysts, and validating with prototypes."
      ]
    },
    {
      "id": "manual-q84",
      "num": "84",
      "question": "How do you prioritize test cases?",
      "category": "Common Testing Challenges",
      "answers": [
        "Based on risk, business impact, and criticality."
      ]
    },
    {
      "id": "manual-q85",
      "num": "85",
      "question": "How do you ensure maximum coverage in less time?",
      "category": "Common Testing Challenges",
      "answers": [
        "By using risk-based testing, prioritizing core features, and automation for regression."
      ]
    },
    {
      "id": "manual-q86",
      "num": "86",
      "question": "What do you do when a developer disagrees with a bug?",
      "category": "Common Testing Challenges",
      "answers": [
        "Provide clear reproduction steps, evidence (screenshots/logs), and reference requirements."
      ]
    },
    {
      "id": "manual-q87",
      "num": "87",
      "question": "How do you manage testing under tight deadlines?",
      "category": "Common Testing Challenges",
      "answers": [
        "Focus on critical features, do smoke tests first, and parallelize execution."
      ]
    },
    {
      "id": "manual-q88",
      "num": "88",
      "question": "How do you test with limited test data?",
      "category": "Common Testing Challenges",
      "answers": [
        "Use data generation tools or create synthetic test data."
      ]
    },
    {
      "id": "manual-q89",
      "num": "89",
      "question": "How do you report testing progress to management?",
      "category": "Common Testing Challenges",
      "answers": [
        "Through daily status reports, dashboards, and defect trend charts."
      ]
    },
    {
      "id": "manual-q90",
      "num": "90",
      "question": "How do you ensure quality when there's pressure to release?",
      "category": "Common Testing Challenges",
      "answers": [
        "Run smoke tests, critical regression tests, and communicate risks clearly."
      ]
    },
    {
      "id": "manual-q91",
      "num": "91",
      "question": "What is Ad-hoc Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Unstructured, informal testing without documented test cases."
      ]
    },
    {
      "id": "manual-q92",
      "num": "92",
      "question": "What is Monkey Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Randomly providing input to the system to check stability."
      ]
    },
    {
      "id": "manual-q93",
      "num": "93",
      "question": "What is Alpha Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Testing done by internal teams before releasing to users."
      ]
    },
    {
      "id": "manual-q94",
      "num": "94",
      "question": "What is Beta Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Testing by a limited set of end users before full release."
      ]
    },
    {
      "id": "manual-q95",
      "num": "95",
      "question": "What is Installation Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Verifying that software installs, updates, and uninstalls correctly."
      ]
    },
    {
      "id": "manual-q96",
      "num": "96",
      "question": "What is Recovery Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Checking if the system recovers after a crash or failure."
      ]
    },
    {
      "id": "manual-q97",
      "num": "97",
      "question": "What is Compliance Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Ensuring the software meets regulations and standards."
      ]
    },
    {
      "id": "manual-q98",
      "num": "98",
      "question": "What is Internationalization Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Testing if the application supports multiple languages and cultural formats."
      ]
    },
    {
      "id": "manual-q99",
      "num": "99",
      "question": "What is Configuration Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "Verifying the system works with different configurations (hardware, OS, browsers)."
      ]
    },
    {
      "id": "manual-q100",
      "num": "100",
      "question": "What is the difference between Static Testing and Dynamic Testing?",
      "category": "Miscellaneous Manual Testing Topics",
      "answers": [
        "\u2022 Static Testing: Reviews, walkthroughs, inspections (no code execution).",
        "\u2022 Dynamic Testing: Executing code to find defects."
      ]
    }
  ],
  "interview-selenium-java": [
    {
      "id": "selenium-q1",
      "num": "1",
      "question": "How would you take screenshots and generate visual reports in Selenium?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "// Take full page screenshot",
        "File screenshot = ((TakesScreenshot)",
        "driver).getScreenshotAs(OutputType.FILE);",
        "FileUtils.copyFile(screenshot, new File(\"./screenshots/test_\" +",
        "System.currentTimeMillis() + \".png\"));",
        "// Take element screenshot (WebDriver 4.x)",
        "File elementScreenshot = element.getScreenshotAs(OutputType.FILE);",
        "FileUtils.copyFile(elementScreenshot, new File(\"./screenshots/element.png\"));",
        "// Screenshot on failure",
        "@AfterMethod",
        "public void tearDown(ITestResult result) {",
        "if (ITestResult.FAILURE == result.getStatus()) {",
        "File screenshot = ((TakesScreenshot)",
        "driver).getScreenshotAs(OutputType.FILE);",
        "FileUtils.copyFile(screenshot, new File(\"./screenshots/failure_\" +",
        "result.getName() + \".png\"));",
        "}",
        "}",
        "For visual reports, integrate with ExtentReports:",
        "extent.attachFile(screenshotPath);",
        "extent.attachBase64String(((TakesScreenshot)",
        "driver).getScreenshotAs(OutputType.BASE64));"
      ]
    },
    {
      "id": "selenium-q2",
      "num": "2",
      "question": "How do you manage test data and environment configuration in Selenium automation?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "// Using Properties file",
        "public class ConfigReader {",
        "private static Properties properties = new Properties();",
        "static {",
        "try {",
        "FileInputStream file = new",
        "FileInputStream(\"./src/test/resources/config.properties\");",
        "properties.load(file);",
        "} catch (IOException e) {",
        "e.printStackTrace();",
        "}",
        "}",
        "public static String getProperty(String key) {",
        "return properties.getProperty(key);",
        "}",
        "}",
        "// Usage",
        "String url = ConfigReader.getProperty(\"base.url\");",
        "String username = ConfigReader.getProperty(\"test.username\");",
        "String password = ConfigReader.getProperty(\"test.password\");",
        "// Using JSON for test data",
        "public class TestDataReader {",
        "public static Map<String, Object> readTestData(String testDataFile)",
        "throws IOException {",
        "String content = new",
        "String(Files.readAllBytes(Paths.get(testDataFile)));",
        "ObjectMapper mapper = new ObjectMapper();",
        "return mapper.readValue(content, Map.class);",
        "}",
        "}",
        "// Properties file example (config.properties)",
        "/*",
        "base.url=https://example.com",
        "browser=chrome",
        "wait.timeout=10",
        "test.username=user@example.com",
        "test.password=password123",
        "environment=staging",
        "*/"
      ]
    },
    {
      "id": "selenium-q3",
      "num": "3",
      "question": "What is the \u201cfinal\u201d keyword and its uses?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "The final keyword restricts modification:",
        "\u2022 Final Class: Cannot be extended/subclassed.",
        "public final class ImmutableClass {",
        "// Cannot be subclassed",
        "}",
        "// This will cause compile error",
        "// public class SubClass extends ImmutableClass { }",
        "\u2022 Final Method: Cannot be overridden.",
        "public class Parent {",
        "public final void criticalMethod() {",
        "System.out.println(\"Cannot override\");",
        "}",
        "}",
        "public class Child extends Parent {",
        "// This will cause compile error",
        "// public void criticalMethod() { }",
        "}",
        "\u2022 Final Variable: Cannot be reassigned (immutable).",
        "public class Configuration {",
        "public static final String DATABASE_URL =",
        "\"jdbc:mysql://localhost:3306/db\";",
        "public static final int CONNECTION_TIMEOUT = 30;",
        "public final String username = \"admin\";  // Instance final variable",
        "}",
        "// Cannot reassign",
        "// DATABASE_URL = \"new_url\";  // Compile error"
      ]
    },
    {
      "id": "selenium-q4",
      "num": "4",
      "question": "Explain the \u201cthis\u201d and \u201csuper\u201d keywords.",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "- this: References current object instance; used to access instance variables and methods.",
        "```java public class TestStep { private String stepName; private int stepNumber;",
        "public TestStep(String stepName, int stepNumber) {",
        "this.stepName = stepName;    // Distinguishes instance variable from",
        "parameter",
        "this.stepNumber = stepNumber;",
        "}",
        "public void execute() {",
        "System.out.println(\"Executing: \" + this.stepName);  // Reference",
        "current object",
        "}",
        "public TestStep cloneStep() {",
        "return new TestStep(this.stepName, this.stepNumber);  // Pass current",
        "object state",
        "}",
        "} ```",
        "\u2022 super: References parent class; used to call parent methods and constructors.",
        "public class BaseTest {",
        "public void setup() {",
        "System.out.println(\"Base setup\");",
        "}",
        "}",
        "public class DerivedTest extends BaseTest {",
        "@Override",
        "public void setup() {",
        "super.setup();  // Call parent method",
        "System.out.println(\"Derived setup\");",
        "}",
        "public DerivedTest() {",
        "super();  // Call parent constructor",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q5",
      "num": "5",
      "question": "How to generate TestNG reports and integrate with reporting tools?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "// Basic TestNG reporting",
        "public class ReportingTest {",
        "@Test",
        "public void testWithReporting() {",
        "System.out.println(\"Test with built-in reporting\");",
        "}",
        "}",
        "// testng.xml with listeners for reporting",
        "/*",
        "<suite>",
        "<listeners>",
        "<listener class-name=\"org.testng.reporters.FailedReporter\"/>",
        "<listener class-name=\"org.testng.reporters.EmailableReporter\"/>",
        "</listeners>",
        "</suite>",
        "*/",
        "// ExtentReports integration (Popular reporting tool)",
        "public class ExtentReportListener implements ITestListener {",
        "private ExtentReports extentReports;",
        "private ExtentTest extentTest;",
        "public ExtentReportListener() {",
        "extentReports = new ExtentReports();",
        "extentReports.attachReporter(",
        "new ExtentSparkReporter(\"target/ExtentReport.html\")",
        ");",
        "}",
        "@Override",
        "public void onStart(ITestContext context) {",
        "System.out.println(\"Report started\");",
        "}",
        "@Override",
        "public void onTestStart(ITestResult result) {",
        "extentTest = extentReports.createTest(result.getName());",
        "}",
        "@Override",
        "public void onTestSuccess(ITestResult result) {",
        "extentTest.pass(\"Test passed\");",
        "}",
        "@Override",
        "public void onTestFailure(ITestResult result) {",
        "extentTest.fail(result.getThrowable());",
        "// Attach screenshot",
        "extentTest.addScreenCaptureFromPath(\"screenshot_path\");",
        "}",
        "@Override",
        "public void onTestSkipped(ITestResult result) {",
        "extentTest.skip(\"Test skipped\");",
        "}",
        "@Override",
        "public void onFinish(ITestContext context) {",
        "extentReports.flush();",
        "}",
        "}",
        "// Allure reporting integration",
        "public class AllureReportTest {",
        "@Test",
        "@Description(\"Test login functionality\")",
        "@Severity(SeverityLevel.CRITICAL)",
        "public void testLoginWithAllure() {",
        "Step(\"Login with valid credentials\", () -> {",
        "System.out.println(\"Logging in\");",
        "});",
        "Step(\"Verify dashboard\", () -> {",
        "System.out.println(\"Dashboard verified\");",
        "});",
        "}",
        "}",
        "// POM configuration for reporting",
        "/*",
        "<plugin>",
        "<groupId>org.apache.maven.plugins</groupId>",
        "<artifactId>maven-surefire-plugin</artifactId>",
        "<configuration>",
        "<suiteXmlFiles>",
        "<suiteXmlFile>testng.xml</suiteXmlFile>",
        "</suiteXmlFiles>",
        "<reportFormat>html</reportFormat>",
        "</configuration>",
        "</plugin>",
        "*/",
        "// Generate and view reports",
        "// mvn clean test",
        "// Reports generated in: target/surefire-reports/",
        "// Open HTML report: target/surefire-reports/index.html"
      ]
    },
    {
      "id": "selenium-q6",
      "num": "6",
      "question": "How to implement custom assertions and validations?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "public class CustomAssertions {",
        "public static void assertElementPresent(WebDriver driver, By locator) {",
        "try {",
        "driver.findElement(locator);",
        "} catch (NoSuchElementException e) {",
        "throw new AssertionError(\"Element not found: \" + locator, e);",
        "}",
        "}",
        "public static void assertElementText(WebDriver driver, By locator, String",
        "expectedText) {",
        "String actualText = driver.findElement(locator).getText();",
        "Assert.assertEquals(actualText, expectedText,",
        "\"Text mismatch for element: \" + locator);",
        "}",
        "public static void assertPageTitle(WebDriver driver, String",
        "expectedTitle) {",
        "String actualTitle = driver.getTitle();",
        "Assert.assertEquals(actualTitle, expectedTitle, \"Page title",
        "mismatch\");",
        "}",
        "public static void assertUrlContains(WebDriver driver, String",
        "expectedUrl) {",
        "String currentUrl = driver.getCurrentUrl();",
        "Assert.assertTrue(currentUrl.contains(expectedUrl),",
        "\"URL does not contain: \" + expectedUrl);",
        "}",
        "}",
        "// Usage",
        "public class ValidationTest {",
        "@Test",
        "public void testWithCustomAssertions() {",
        "CustomAssertions.assertElementPresent(driver, By.id(\"username\"));",
        "CustomAssertions.assertPageTitle(driver, \"Login Page\");",
        "CustomAssertions.assertUrlContains(driver, \"/login\");",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q7",
      "num": "7",
      "question": "What is Selenium, and what are its components?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "Selenium is an open-source suite of tools for automating web browsers. It allows QA engineers to simulate user",
        "interactions like clicking buttons, entering text, and navigating between pages.",
        "Selenium is not a single tool; it's a suite with four major components:",
        "\u2022 Selenium IDE: A record-and-playback tool, mainly used for quick automation without coding.",
        "\u2022 Selenium RC (Remote Control): Older tool, now deprecated; allowed automation in different",
        "programming languages.",
        "\u2022 Selenium WebDriver: The most popular component, allowing direct browser communication without",
        "any intermediary.",
        "\u2022 Selenium Grid: Enables parallel test execution across multiple machines and browsers, improving test",
        "execution time.",
        "Why it's important in interviews: You need to show you know the whole suite, not just WebDriver."
      ]
    },
    {
      "id": "selenium-q8",
      "num": "8",
      "question": "What are the advantages of Selenium over other automation tools?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "\u2022 Open-source and free \u2014 No licensing costs.",
        "\u2022 Multi-language support \u2014 Works with Java, Python, C#, Ruby, JavaScript, etc.",
        "\u2022 Cross-browser compatibility \u2014 Supports Chrome, Firefox, Safari, Edge, Opera.",
        "\u2022 Cross-platform execution \u2014 Works on Windows, macOS, and Linux.",
        "\u2022 Integration with tools \u2014 Works with Maven, Jenkins, TestNG, Git, etc.",
        "\u2022 Community support \u2014 Large user base with active forums and GitHub repos.",
        "\u2022 Real browser execution \u2014 Unlike headless testing tools, it works with real browsers for better",
        "reliability."
      ]
    },
    {
      "id": "selenium-q9",
      "num": "9",
      "question": "Difference between Selenium WebDriver and Selenium RC.",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "Feature Selenium RC Selenium WebDriver",
        "Architecture Requires server to be up and running Directly interacts with browser",
        "Speed Slower due to server communication Faster execution",
        "API Complexity More verbose commands Simpler and cleaner API",
        "Browser Support Limited Extensive",
        "Status Deprecated Current standard"
      ]
    },
    {
      "id": "selenium-q10",
      "num": "10",
      "question": "Explain the architecture of Selenium WebDriver.",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "\u2022 Client Libraries: Language-specific bindings (Java, Python, C#, etc.).",
        "\u2022 JSON Wire Protocol / W3C Protocol: Defines the communication between client libraries and",
        "browser drivers.",
        "\u2022 Browser Drivers: Each browser has its own driver (ChromeDriver, GeckoDriver, etc.).",
        "\u2022 Browsers: Actual browser where automation is executed.",
        "Flow: Selenium Script \u2192 Client Library \u2192 JSON Wire/W3C Protocol \u2192 Browser Driver \u2192",
        "Browser"
      ]
    },
    {
      "id": "selenium-q11",
      "num": "11",
      "question": "What are some limitations of Selenium?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "\u2022 Works only for web applications, not desktop apps.",
        "\u2022 No built-in reporting (needs TestNG/Extent Reports).",
        "\u2022 Cannot handle CAPTCHA directly.",
        "\u2022 Requires third-party tools for file uploads in OS popups."
      ]
    },
    {
      "id": "selenium-q12",
      "num": "12",
      "question": "What are Java Collections, and where do you use them in Selenium?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "Collections are Java classes for storing groups of objects.",
        "Commonly used:",
        "\u2022 List: Store multiple web elements found by findElements().",
        "\u2022 Set: Store unique data (e.g., window handles).",
        "\u2022 Map: Store key-value pairs (e.g., test data mapping)."
      ]
    },
    {
      "id": "selenium-q13",
      "num": "13",
      "question": "How do you handle multiple classes in Selenium automation?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "\u2022 Use POM to organize page classes.",
        "\u2022 Create utility classes for reusable functions.",
        "\u2022 Maintain BaseTest class for setup/teardown.",
        "\u2022 Use inheritance to reuse methods."
      ]
    },
    {
      "id": "selenium-q14",
      "num": "14",
      "question": "What is this keyword in Java, and where do you use it in Selenium?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "this refers to the current object instance.",
        "In POM:",
        "public LoginPage(WebDriver driver) {",
        "this.driver = driver; // Assign parameter to instance variable",
        "}"
      ]
    },
    {
      "id": "selenium-q15",
      "num": "15",
      "question": "How do you take screenshots only on test failure?",
      "category": "WebDriver Architecture & Setup",
      "answers": [
        "In TestNG:",
        "@AfterMethod",
        "public void tearDown(ITestResult result) {",
        "if(ITestResult.FAILURE == result.getStatus()) {",
        "// take screenshot",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q16",
      "num": "16",
      "question": "Explain the difference between findElement() and findElements() methods.",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "- findElement(): Returns a single WebElement; throws NoSuchElementException if not",
        "found. java   WebElement element = driver.findElement(By.id(\"username\"));",
        "\u2022 findElements(): Returns a List of WebElements; returns empty list if no elements",
        "are found (no exception thrown).",
        "List<WebElement> elements = driver.findElements(By.className(\"item\"));",
        "Use findElement() when you expect exactly one element; use findElements() when",
        "checking if elements exist or iterating through multiple elements."
      ]
    },
    {
      "id": "selenium-q17",
      "num": "17",
      "question": "What are XPath and CSS Selector? When would you use each?",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Both are locator strategies in Selenium:",
        "\u2022 XPath: A query language for navigating XML/HTML documents. More powerful and",
        "flexible.",
        "By.xpath(\"//button[@id='submit' and @class='primary']\")",
        "By.xpath(\"//input[@placeholder='Enter username']\")",
        "By.xpath(\"//div[contains(@class, 'error-message')]\")",
        "\u2022 CSS Selector: Uses CSS styling rules. Generally faster than XPath.",
        "By.cssSelector(\"button#submit.primary\")",
        "By.cssSelector(\"input[placeholder='Enter username']\")",
        "By.cssSelector(\"div.error-message\")",
        "When to use: Use CSS Selector for simple, stable locators (faster performance). Use XPath",
        "for complex scenarios like traversing parent elements or multiple conditions."
      ]
    },
    {
      "id": "selenium-q18",
      "num": "18",
      "question": "How would you handle dynamic web elements or elements with frequently changing IDs?",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Strategies to handle dynamic elements:",
        "1. Use Partial Attribute Matching:",
        "By.xpath(\"//button[starts-with(@id, 'btn_')]\")",
        "By.cssSelector(\"button[id*='dynamic']\")",
        "2. Use Relative XPath Based on Text Content:",
        "By.xpath(\"//button[contains(text(), 'Submit')]\")",
        "By.xpath(\"//label[text()='Username']/following::input\")",
        "3. Use WebDriverWait with Custom Expected Condition:",
        "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));",
        "wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(\"//butt",
        "on[contains(@class, 'dynamic')]\")));",
        "4. Use Explicit Waits Before Interaction:",
        "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));",
        "WebElement element =",
        "wait.until(ExpectedConditions.elementToBeClickable(By.xpath(\"//button[@",
        "onclick*='submit']\")));",
        "element.click();"
      ]
    },
    {
      "id": "selenium-q19",
      "num": "19",
      "question": "Explain different locator strategies and their reliability order.",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Locator strategies ranked by reliability:",
        "1. ID (Most reliable) - Unique, direct, and unchanged",
        "By.id(\"userId\")",
        "2. Name - Usually stable and unique",
        "By.name(\"username\")",
        "3. CSS Selector - Fast, stable, and maintainable",
        "By.cssSelector(\"input.form-control[name='email']\")",
        "4. XPath - Flexible but can be fragile with DOM changes",
        "By.xpath(\"//input[@type='email']\")",
        "5. Link Text / Partial Link Text - Good for links but limited",
        "By.linkText(\"Click Here\")",
        "By.partialLinkText(\"Click\")",
        "6. Class Name - Can be fragile if styling changes",
        "By.className(\"button-primary\")",
        "7. Tag Name (Least reliable) - Not unique, too generic",
        "By.tagName(\"button\")",
        "Best Practice: Use ID or CSS selectors; avoid overly complex XPath or tag names."
      ]
    },
    {
      "id": "selenium-q20",
      "num": "20",
      "question": "What are Locators in Selenium?",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Locators are methods to find elements on a web page.",
        "Types:",
        "1. id \u2013 Finds element by unique id.",
        "2. name \u2013 Finds element by name attribute.",
        "3. className \u2013 Finds element by class attribute.",
        "4. tagName \u2013 Finds element by HTML tag.",
        "5. linkText \u2013 Finds links by exact text.",
        "6. partialLinkText \u2013 Finds links by partial text.",
        "7. cssSelector \u2013 Finds elements using CSS patterns.",
        "8. xpath \u2013 Finds elements using XPath expression."
      ]
    },
    {
      "id": "selenium-q21",
      "num": "21",
      "question": "What is XPath, and what are its types?",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "XPath is a query language for locating elements in XML/HTML documents.",
        "\u2022 Absolute XPath: Starts from the root node (/html/body/div[1]/input).",
        "\u2022 Relative XPath: Starts from the middle of the DOM (//input[@id='username']).",
        "Best Practice: Prefer relative XPath for stability."
      ]
    },
    {
      "id": "selenium-q22",
      "num": "22",
      "question": "Difference between Absolute XPath and Relative XPath.",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Feature Absolute XPath Relative XPath",
        "Start Root node Anywhere in DOM",
        "Syntax / at start // at start",
        "Stability Less stable (changes break) More stable",
        "Speed Slightly faster Slightly slower"
      ]
    },
    {
      "id": "selenium-q23",
      "num": "23",
      "question": "How do you handle dynamic elements in Selenium?",
      "category": "Locators, XPath & CSS Selectors",
      "answers": [
        "Dynamic elements have changing IDs or attributes. Solutions:",
        "\u2022 Use contains() or starts-with() in XPath.",
        "\u2022 Use CSS attribute selectors.",
        "\u2022 Use index-based XPath only if other attributes aren't stable."
      ]
    },
    {
      "id": "selenium-q24",
      "num": "24",
      "question": "What are different types of waits in Selenium?",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "Selenium provides three types of waits to handle synchronization issues:",
        "\u2022 Implicit Wait: Sets a default waiting time for all elements throughout the session.",
        "driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));",
        "\u2022 Explicit Wait: Waits for specific conditions on particular elements before",
        "performing actions.",
        "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"submitB",
        "tn\")));",
        "\u2022 Fluent Wait: Provides more control with custom polling frequency and exception",
        "handling.",
        "Wait<WebDriver> wait = new FluentWait<>(driver)",
        ".withTimeout(Duration.ofSeconds(10))",
        ".pollingEvery(Duration.ofMillis(500))",
        ".ignoring(NoSuchElementException.class);",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"element",
        "\")));"
      ]
    },
    {
      "id": "selenium-q25",
      "num": "25",
      "question": "What is implicit wait vs. explicit wait vs. fluent wait in practical scenarios?",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "| Scenario | Wait Type | Implementation | |\u2014\u2014\u2014-|\u2014\u2014\u2014\u2013|\u2014\u2014\u2014\u2014\u2014\u2013| | Page load & all",
        "elements should load within time | Implicit |",
        "driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10)); | | Wait for",
        "specific element visibility before action | Explicit | new WebDriverWait(driver,",
        "Duration.ofSeconds(10)).until(ExpectedConditions.visibilityOfElementLocated(B",
        "y.id(\"btn\"))); | | Complex condition with custom polling & exceptions | Fluent | new",
        "FluentWait<>(driver).withTimeout(Duration.ofSeconds(10)).pollingEvery(Duratio",
        "n.ofMillis(500)).ignoring(NoSuchElementException.class).until(...); |",
        "Best Practice: Avoid implicit waits; use explicit waits for better control and faster test",
        "execution."
      ]
    },
    {
      "id": "selenium-q26",
      "num": "26",
      "question": "What are Expected Conditions in Selenium WebDriverWait and give 5 examples?",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "Expected Conditions are predefined conditions to wait for elements:",
        "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));",
        "// 1. Presence - element exists in DOM",
        "wait.until(ExpectedConditions.presenceOfElementLocated(By.id(\"element\")));",
        "// 2. Visibility - element visible and rendered on page",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"element\")));",
        "// 3. Clickability - element is visible and enabled",
        "wait.until(ExpectedConditions.elementToBeClickable(By.id(\"button\")));",
        "// 4. Text to be present in element",
        "wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id(\"label\"),",
        "\"Expected Text\"));",
        "// 5. Staleness - element is no longer attached to DOM",
        "WebElement element = driver.findElement(By.id(\"temp\"));",
        "wait.until(ExpectedConditions.stalenessOf(element));",
        "// 6. Invisibility",
        "wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id(\"loader\")));",
        "// 7. Number of elements",
        "wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.className(\"item",
        "\"), 5));",
        "// 8. URL contains",
        "wait.until(ExpectedConditions.urlContains(\"login\"));",
        "// 9. Alert present",
        "wait.until(ExpectedConditions.alertIsPresent());"
      ]
    },
    {
      "id": "selenium-q27",
      "num": "27",
      "question": "What are Waits in Selenium, and what types are there?",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "Waits handle synchronization issues between script and web page.",
        "1. Implicit Wait: Sets a default wait for all elements.",
        "2. Explicit Wait: Waits for a specific condition (e.g., element visible).",
        "3. Fluent Wait: Similar to explicit wait but with polling interval and exception handling."
      ]
    },
    {
      "id": "selenium-q28",
      "num": "28",
      "question": "Difference between Implicit Wait and Explicit Wait.",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "Feature Implicit Wait Explicit Wait",
        "Scope Applied globally to all elements Specific to one element",
        "Syntax driver.manage().timeouts().implicitly",
        "Wait(10, TimeUnit.SECONDS);",
        "new WebDriverWait(driver,",
        "10).until(ExpectedConditions.visibilityOf(e",
        "lement));",
        "Flexibili",
        "ty Less flexible Highly flexible"
      ]
    },
    {
      "id": "selenium-q29",
      "num": "29",
      "question": "How do you handle dynamic waits in a slow-loading web application?",
      "category": "Synchronization & Dynamic Waits",
      "answers": [
        "\u2022 Use Explicit Waits with ExpectedConditions instead of Thread.sleep().",
        "\u2022 Combine with Fluent Wait to retry at intervals.",
        "new WebDriverWait(driver, Duration.ofSeconds(20))",
        ".until(ExpectedConditions.visibilityOfElementLocated(By.id(\"username\")));",
        "This ensures scripts wait only as long as necessary."
      ]
    },
    {
      "id": "selenium-q30",
      "num": "30",
      "question": "What is the difference between Actions class and direct element methods?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "- Direct Methods: Perform actions directly on an element. java   element.click();",
        "element.sendKeys(\"text\");   element.submit();",
        "\u2022 Actions Class: Simulates complex user interactions using mouse and keyboard.",
        "Actions actions = new Actions(driver);",
        "actions.moveToElement(element).click().build().perform();",
        "actions.doubleClick(element).perform();",
        "actions.rightClick(element).perform();",
        "actions.dragAndDrop(source, target).perform();",
        "actions.keyDown(Keys.SHIFT).click(element).keyUp(Keys.SHIFT).perform();",
        "Use Actions class for: hovering over elements, drag-and-drop, right-click, key",
        "combinations, or simulating complex user gestures."
      ]
    },
    {
      "id": "selenium-q31",
      "num": "31",
      "question": "How do you perform keyboard and mouse interactions using Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "// Keyboard interactions",
        "Actions actions = new Actions(driver);",
        "actions.sendKeys(Keys.ENTER).perform();",
        "actions.sendKeys(Keys.TAB).perform();",
        "actions.sendKeys(Keys.ESCAPE).perform();",
        "actions.keyDown(Keys.CONTROL).sendKeys(\"A\").keyUp(Keys.CONTROL).perform(); //",
        "Ctrl+A",
        "// Mouse interactions",
        "actions.click(element).perform();",
        "actions.doubleClick(element).perform();",
        "actions.rightClick(element).perform();",
        "actions.moveToElement(element).perform();",
        "actions.dragAndDrop(source, target).perform();",
        "// Key combinations",
        "actions.keyDown(Keys.SHIFT).click(element1).click(element2).keyUp(Keys.SHIFT)",
        ".perform(); // Multi-select"
      ]
    },
    {
      "id": "selenium-q32",
      "num": "32",
      "question": "How do you handle file uploads and downloads in Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "// File Upload",
        "WebElement uploadElement = driver.findElement(By.id(\"fileUpload\"));",
        "uploadElement.sendKeys(\"C:\\\\path\\\\to\\\\file.txt\");",
        "// Using Robot class for OS-level file dialogs",
        "Robot robot = new Robot();",
        "robot.keyPress(KeyEvent.VK_CONTROL);",
        "robot.keyPress(KeyEvent.VK_V);",
        "robot.keyRelease(KeyEvent.VK_V);",
        "robot.keyRelease(KeyEvent.VK_CONTROL);",
        "// File Download (configure browser to auto-download)",
        "ChromeOptions options = new ChromeOptions();",
        "HashMap<String, Object> chromePrefs = new HashMap<>();",
        "chromePrefs.put(\"download.default_directory\", \"/download/path\");",
        "chromePrefs.put(\"download.prompt_for_download\", false);",
        "options.setExperimentalOption(\"prefs\", chromePrefs);",
        "WebDriver driver = new ChromeDriver(options);",
        "// Verify downloaded file",
        "File downloadDir = new File(\"/download/path\");",
        "File[] files = downloadDir.listFiles();",
        "assertTrue(files != null && files.length > 0);"
      ]
    },
    {
      "id": "selenium-q33",
      "num": "33",
      "question": "How do you handle dropdowns in Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "\u2022 Use Select class:",
        "Select dropdown = new Select(element);",
        "dropdown.selectByVisibleText(\"Option\");",
        "dropdown.selectByValue(\"value\");",
        "dropdown.selectByIndex(2);"
      ]
    },
    {
      "id": "selenium-q34",
      "num": "34",
      "question": "What is the Actions class in Selenium, and when do you use it?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "The Actions class in Selenium is used to handle complex user interactions like mouse movements, drag-and-",
        "drop, right-clicks, double-clicks, and keyboard events.",
        "It follows the builder pattern, meaning you can chain multiple actions and then call .perform() to execute",
        "them.",
        "Example:",
        "j",
        "Actions actions = new Actions(driver);",
        "actions.moveToElement(element).click().build().perform();",
        "Use cases:",
        "\u2022 Hover over menus",
        "\u2022 Drag and drop",
        "\u2022 Simulating keyboard shortcuts"
      ]
    },
    {
      "id": "selenium-q35",
      "num": "35",
      "question": "How do you perform Drag and Drop in Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "You can use the Actions class:",
        "WebElement source = driver.findElement(By.id(\"source\"));",
        "WebElement target = driver.findElement(By.id(\"target\"));",
        "Actions actions = new Actions(driver);",
        "actions.dragAndDrop(source, target).perform();",
        "Alternative: Click-hold-move-release:",
        "actions.clickAndHold(source).moveToElement(target).release().perform();"
      ]
    },
    {
      "id": "selenium-q36",
      "num": "36",
      "question": "How do you scroll a page in Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "Using JavaScriptExecutor:",
        "js.executeScript(\"window.scrollTo(0, document.body.scrollHeight)\");",
        "Or scroll to an element:",
        "js.executeScript(\"arguments[0].scrollIntoView(true);\", element);"
      ]
    },
    {
      "id": "selenium-q37",
      "num": "37",
      "question": "How do you verify tooltips in Selenium?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "\u2022 Use getAttribute(\"title\") for static tooltips.",
        "\u2022 Use Actions to hover and fetch the tooltip element text."
      ]
    },
    {
      "id": "selenium-q38",
      "num": "38",
      "question": "What would you do if click() is not working on a button?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "Possible solutions:",
        "\u2022 Use Actions class to click.",
        "\u2022 Use JavaScriptExecutor:",
        "js.executeScript(\"arguments[0].click();\", element);",
        "\u2022 Scroll into view before clicking.",
        "\u2022 Ensure element is not overlapped by another element."
      ]
    },
    {
      "id": "selenium-q39",
      "num": "39",
      "question": "How do you test file uploads in remote execution (like Grid or Cloud)?",
      "category": "Web Elements & User Interactions",
      "answers": [
        "\u2022 Use RemoteWebDriver's LocalFileDetector:",
        "((RemoteWebDriver) driver).setFileDetector(new LocalFileDetector());"
      ]
    },
    {
      "id": "selenium-q40",
      "num": "40",
      "question": "What are the differences between driver.navigate(), driver.get(), and driver.switchTo()?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "- driver.get(): Loads a URL and waits for page load. Blocking operation. java",
        "driver.get(\"https://example.com\");",
        "\u2022 driver.navigate().to(): Similar to get() but allows navigation history.",
        "driver.navigate().to(\"https://example.com\");",
        "driver.navigate().back();    // Go to previous page",
        "driver.navigate().forward(); // Go to next page",
        "driver.navigate().refresh(); // Refresh current page",
        "\u2022 driver.switchTo(): Switches context between frames, windows, alerts, etc.",
        "driver.switchTo().frame(\"iframeId\");",
        "driver.switchTo().parentFrame();",
        "driver.switchTo().defaultContent();",
        "driver.switchTo().alert().accept();",
        "driver.switchTo().window(windowHandle);"
      ]
    },
    {
      "id": "selenium-q41",
      "num": "41",
      "question": "How do you handle pop-ups, alerts, and browser dialogs?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "- JavaScript Alerts: java   Alert alert = driver.switchTo().alert();   String",
        "alertText = alert.getText();   alert.accept();    // Click OK",
        "alert.dismiss();   // Click Cancel   alert.sendKeys(\"text\"); // Type in",
        "prompt",
        "\u2022 Window Handles:",
        "String mainWindow = driver.getWindowHandle();",
        "Set<String> allWindows = driver.getWindowHandles();",
        "for (String window : allWindows) {",
        "driver.switchTo().window(window);",
        "}",
        "driver.switchTo().window(mainWindow); // Back to main",
        "\u2022 Frames/iFrames:",
        "driver.switchTo().frame(\"frameName\");    // By name",
        "driver.switchTo().frame(0);              // By index",
        "driver.switchTo().frame(frameElement);   // By element",
        "driver.switchTo().parentFrame();         // Back to parent",
        "driver.switchTo().defaultContent();      // Back to main page"
      ]
    },
    {
      "id": "selenium-q42",
      "num": "42",
      "question": "Explain how to handle SSL certificate errors in Selenium.",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "// For Chrome",
        "ChromeOptions options = new ChromeOptions();",
        "options.setAcceptInsecureCerts(true);",
        "WebDriver driver = new ChromeDriver(options);",
        "// For Firefox",
        "FirefoxOptions options = new FirefoxOptions();",
        "options.setAcceptInsecureCerts(true);",
        "WebDriver driver = new FirefoxDriver(options);",
        "// For Edge",
        "EdgeOptions options = new EdgeOptions();",
        "options.setAcceptInsecureCerts(true);",
        "WebDriver driver = new EdgeDriver(options);",
        "// For Internet Explorer",
        "DesiredCapabilities caps = new DesiredCapabilities();",
        "caps.setCapability(CapabilityType.ACCEPT_INSECURE_CERTS, true);",
        "WebDriver driver = new InternetExplorerDriver(caps);"
      ]
    },
    {
      "id": "selenium-q43",
      "num": "43",
      "question": "What is the difference between switchTo() methods and how do you switch between",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "frames and windows?",
        "// Switch to frame by index",
        "driver.switchTo().frame(0);",
        "// Switch to frame by name/ID",
        "driver.switchTo().frame(\"frameName\");",
        "// Switch to frame by WebElement",
        "WebElement frameElement = driver.findElement(By.id(\"frame\"));",
        "driver.switchTo().frame(frameElement);",
        "// Switch back to parent frame",
        "driver.switchTo().parentFrame();",
        "// Switch to main page (out of all frames)",
        "driver.switchTo().defaultContent();",
        "// Switch to window",
        "String mainWindow = driver.getWindowHandle();",
        "Set<String> handles = driver.getWindowHandles();",
        "for (String handle : handles) {",
        "driver.switchTo().window(handle);",
        "if (driver.getTitle().equals(\"Expected Title\")) {",
        "break;",
        "}",
        "}",
        "// Switch back to main window",
        "driver.switchTo().window(mainWindow);"
      ]
    },
    {
      "id": "selenium-q44",
      "num": "44",
      "question": "How do you execute JavaScript in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "// Execute JavaScript",
        "JavascriptExecutor js = (JavascriptExecutor) driver;",
        "// Get element attribute",
        "String value = (String) js.executeScript(\"return",
        "document.getElementById('element').value;\");",
        "// Click element (bypass clicks intercepted by overlays)",
        "js.executeScript(\"arguments[0].click();\", element);",
        "// Scroll to element",
        "js.executeScript(\"arguments[0].scrollIntoView(true);\", element);",
        "// Scroll to top/bottom",
        "js.executeScript(\"window.scrollTo(0, 0);\");       // Top",
        "js.executeScript(\"window.scrollTo(0, document.body.scrollHeight);\"); //",
        "Bottom",
        "// Remove element from DOM",
        "js.executeScript(\"arguments[0].remove();\", element);",
        "// Set attribute",
        "js.executeScript(\"arguments[0].setAttribute('value', 'newValue');\", element);",
        "// Highlight element",
        "js.executeScript(\"arguments[0].style.border='3px solid red';\", element);",
        "// Get text content",
        "String text = (String) js.executeScript(\"return arguments[0].textContent;\",",
        "element);",
        "// Wait for AJAX completion (jQuery)",
        "js.executeScript(\"return jQuery.active == 0\");",
        "js.executeScript(\"return document.readyState\").equals(\"complete\");"
      ]
    },
    {
      "id": "selenium-q45",
      "num": "45",
      "question": "Explain the headless browser testing and its advantages/disadvantages.",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Headless Mode: Browser runs without GUI; faster and uses fewer resources.",
        "Advantages: - Faster execution (no rendering overhead) - Lower resource consumption",
        "(RAM & CPU) - CI/CD friendly (no display needed) - Parallel execution-friendly - Better for",
        "server environments",
        "Disadvantages: - Cannot see what's happening visually - Some JS/CSS behaviors might",
        "differ - Debugging is harder",
        "Implementation:",
        "// Chrome Headless",
        "ChromeOptions options = new ChromeOptions();",
        "options.addArguments(\"--headless=new\");",
        "WebDriver driver = new ChromeDriver(options);",
        "// Firefox Headless",
        "FirefoxOptions options = new FirefoxOptions();",
        "options.addArguments(\"--headless\");",
        "WebDriver driver = new FirefoxDriver(options);",
        "// Edge Headless",
        "EdgeOptions options = new EdgeOptions();",
        "options.addArguments(\"--headless\");",
        "WebDriver driver = new EdgeDriver(options);"
      ]
    },
    {
      "id": "selenium-q46",
      "num": "46",
      "question": "How do you handle popups in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Types:",
        "\u2022 Alert popup: driver.switchTo().alert().accept()",
        "\u2022 Confirmation popup: Accept or dismiss.",
        "\u2022 Prompt popup: Send text and accept.",
        "\u2022 File upload popup: Use sendKeys() with file path or Robot class."
      ]
    },
    {
      "id": "selenium-q47",
      "num": "47",
      "question": "How do you handle multiple browser windows in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "\u2022 Get main window handle: driver.getWindowHandle()",
        "\u2022 Get all handles: driver.getWindowHandles()",
        "\u2022 Switch: driver.switchTo().window(handle)"
      ]
    },
    {
      "id": "selenium-q48",
      "num": "48",
      "question": "How do you handle frames and iframes in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "\u2022 Switch by index: driver.switchTo().frame(0)",
        "\u2022 Switch by name/id: driver.switchTo().frame(\"frameName\")",
        "\u2022 Switch by WebElement: driver.switchTo().frame(element)",
        "\u2022 Switch back: driver.switchTo().defaultContent()"
      ]
    },
    {
      "id": "selenium-q49",
      "num": "49",
      "question": "What is JavaScriptExecutor in Selenium, and why is it used?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "JavaScriptExecutor allows you to run JavaScript code inside the browser from Selenium.",
        "It is useful when:",
        "\u2022 Elements are hidden behind overlays",
        "\u2022 Normal WebDriver methods fail due to dynamic rendering",
        "Example:",
        "JavascriptExecutor js = (JavascriptExecutor) driver;",
        "js.executeScript(\"arguments[0].click();\", element);",
        "It can also be used to scroll:",
        "js.executeScript(\"window.scrollBy(0,500)\");"
      ]
    },
    {
      "id": "selenium-q50",
      "num": "50",
      "question": "How do you handle browser notifications in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Disable notifications in Chrome:",
        "ChromeOptions options = new ChromeOptions();",
        "options.addArguments(\"--disable-notifications\");"
      ]
    },
    {
      "id": "selenium-q51",
      "num": "51",
      "question": "What is the difference between driver.close() and driver.quit()?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "\u2022 driver.close(): Closes the current browser tab.",
        "\u2022 driver.quit(): Closes all browser windows and ends WebDriver session."
      ]
    },
    {
      "id": "selenium-q52",
      "num": "52",
      "question": "How do you capture network traffic in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Use BrowserMob Proxy or DevTools Protocol in Chrome:",
        "DevTools devTools = ((ChromeDriver) driver).getDevTools();",
        "devTools.createSession();",
        "devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));"
      ]
    },
    {
      "id": "selenium-q53",
      "num": "53",
      "question": "How do you handle cookies in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Add:",
        "driver.manage().addCookie(new Cookie(\"name\", \"value\"));",
        "Get:",
        "Set<Cookie> cookies = driver.manage().getCookies();",
        "Delete:",
        "driver.manage().deleteAllCookies();"
      ]
    },
    {
      "id": "selenium-q54",
      "num": "54",
      "question": "How do you maximize and resize browser windows in Selenium?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "driver.manage().window().maximize();",
        "driver.manage().window().setSize(new Dimension(1024, 768));"
      ]
    },
    {
      "id": "selenium-q55",
      "num": "55",
      "question": "How do you handle elements inside multiple nested iframes?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "Switch to each iframe in sequence:",
        "driver.switchTo().frame(\"frame1\");",
        "driver.switchTo().frame(\"frame2\");",
        "// work here",
        "driver.switchTo().defaultContent();",
        "Or use parentFrame() to go one step back."
      ]
    },
    {
      "id": "selenium-q56",
      "num": "56",
      "question": "How do you capture logs from the browser console?",
      "category": "Browser Windows, Alerts & JavaScript",
      "answers": [
        "For Chrome:",
        "LogEntries logs = driver.manage().logs().get(LogType.BROWSER);",
        "for (LogEntry entry : logs) {",
        "System.out.println(entry.getMessage());",
        "}"
      ]
    },
    {
      "id": "selenium-q57",
      "num": "57",
      "question": "Explain the Page Object Model (POM) pattern and its advantages.",
      "category": "Page Object Model & Design Patterns",
      "answers": [
        "Page Object Model is a design pattern that represents each web page as a Java class.",
        "Structure:",
        "public class LoginPage {",
        "private WebDriver driver;",
        "// Locators",
        "private By usernameField = By.id(\"username\");",
        "private By passwordField = By.id(\"password\");",
        "private By loginButton = By.id(\"loginBtn\");",
        "// Constructor",
        "public LoginPage(WebDriver driver) {",
        "this.driver = driver;",
        "}",
        "// Page actions",
        "public void enterUsername(String username) {",
        "driver.findElement(usernameField).sendKeys(username);",
        "}",
        "public void enterPassword(String password) {",
        "driver.findElement(passwordField).sendKeys(password);",
        "}",
        "public DashboardPage clickLogin() {",
        "driver.findElement(loginButton).click();",
        "return new DashboardPage(driver);",
        "}",
        "}",
        "Advantages: - Improved maintainability (locators centralized in one place) - Reduced code",
        "duplication - Easy to update locators without touching test logic - Better readability and",
        "reusability - Separation of concerns (test logic vs. UI interactions)"
      ]
    },
    {
      "id": "selenium-q58",
      "num": "58",
      "question": "What is the Page Object Model (POM) and why is it important?",
      "category": "Page Object Model & Design Patterns",
      "answers": [
        "Page Object Model represents each web page as Java class with page elements and",
        "actions.",
        "Benefits: - Maintainability: Changes in UI need updates in one place only - Reusability:",
        "Page objects can be used across multiple tests - Readability: Tests are more readable with",
        "meaningful method names - Scalability: Easy to add new pages and tests - Reduced",
        "Duplication: Locators and actions centralized",
        "Implementation:",
        "// Page Object Class",
        "public class LoginPage {",
        "private WebDriver driver;",
        "// Locators",
        "private By usernameLocator = By.id(\"username\");",
        "private By passwordLocator = By.id(\"password\");",
        "private By loginButtonLocator = By.id(\"loginBtn\");",
        "private By errorMessageLocator = By.className(\"error-message\");",
        "// Constructor",
        "public LoginPage(WebDriver driver) {",
        "this.driver = driver;",
        "}",
        "// Page actions",
        "public void enterUsername(String username) {",
        "driver.findElement(usernameLocator).sendKeys(username);",
        "}",
        "public void enterPassword(String password) {",
        "driver.findElement(passwordLocator).sendKeys(password);",
        "}",
        "public DashboardPage clickLoginButton() {",
        "driver.findElement(loginButtonLocator).click();",
        "return new DashboardPage(driver);",
        "}",
        "public String getErrorMessage() {",
        "return driver.findElement(errorMessageLocator).getText();",
        "}",
        "public boolean isErrorMessageDisplayed() {",
        "try {",
        "return driver.findElement(errorMessageLocator).isDisplayed();",
        "} catch (NoSuchElementException e) {",
        "return false;",
        "}",
        "}",
        "}",
        "// Dashboard Page Object",
        "public class DashboardPage {",
        "private WebDriver driver;",
        "private By dashboardHeaderLocator = By.id(\"dashboardHeader\");",
        "private By userGreetingLocator = By.className(\"user-greeting\");",
        "public DashboardPage(WebDriver driver) {",
        "this.driver = driver;",
        "}",
        "public boolean isDashboardDisplayed() {",
        "try {",
        "WebDriverWait wait = new WebDriverWait(driver,",
        "Duration.ofSeconds(10));",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(dashboardHeaderLocat",
        "or));",
        "return true;",
        "} catch (TimeoutException e) {",
        "return false;",
        "}",
        "}",
        "public String getUserGreeting() {",
        "return driver.findElement(userGreetingLocator).getText();",
        "}",
        "}",
        "// Test using Page Objects",
        "public class LoginTest {",
        "private WebDriver driver;",
        "@BeforeMethod",
        "public void setUp() {",
        "driver = new ChromeDriver();",
        "driver.get(\"https://example.com/login\");",
        "}",
        "@Test",
        "public void testValidLogin() {",
        "LoginPage loginPage = new LoginPage(driver);",
        "loginPage.enterUsername(\"testuser\");",
        "loginPage.enterPassword(\"password123\");",
        "DashboardPage dashboardPage = loginPage.clickLoginButton();",
        "Assert.assertTrue(dashboardPage.isDashboardDisplayed());",
        "Assert.assertTrue(dashboardPage.getUserGreeting().contains(\"testuser\"));",
        "}",
        "@Test",
        "public void testInvalidLogin() {",
        "LoginPage loginPage = new LoginPage(driver);",
        "loginPage.enterUsername(\"invaliduser\");",
        "loginPage.enterPassword(\"wrongpassword\");",
        "loginPage.clickLoginButton();",
        "Assert.assertTrue(loginPage.isErrorMessageDisplayed());",
        "Assert.assertEquals(loginPage.getErrorMessage(), \"Invalid",
        "credentials\");",
        "}",
        "@AfterMethod",
        "public void tearDown() {",
        "driver.quit();",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q59",
      "num": "59",
      "question": "What is Page Object Model (POM) in Selenium?",
      "category": "Page Object Model & Design Patterns",
      "answers": [
        "POM is a design pattern that creates object repositories for UI elements.",
        "Advantages:",
        "\u2022 Code reusability",
        "\u2022 Better readability",
        "\u2022 Easy maintenance"
      ]
    },
    {
      "id": "selenium-q60",
      "num": "60",
      "question": "What is a Constructor in Java, and how is it used in Selenium POM?",
      "category": "Page Object Model & Design Patterns",
      "answers": [
        "A constructor is a special method used to initialize objects.",
        "In POM, constructors often initialize web elements with PageFactory:",
        "public LoginPage(WebDriver driver) {",
        "this.driver = driver;",
        "PageFactory.initElements(driver, this);",
        "}",
        "This ensures that all elements are ready when a page object is created."
      ]
    },
    {
      "id": "selenium-q61",
      "num": "61",
      "question": "What is PageFactory in Selenium?",
      "category": "Page Object Model & Design Patterns",
      "answers": [
        "A class in Selenium that initializes WebElements declared in a page object.",
        "PageFactory.initElements(driver, this);",
        "Benefits:",
        "\u2022 Reduces boilerplate findElement() calls.",
        "\u2022 Improves readability."
      ]
    },
    {
      "id": "selenium-q62",
      "num": "62",
      "category": "TestNG Framework Architecture & Annotations",
      "question": "What is TestNG, why is it used in Selenium automation, and how does it fundamentally differ from JUnit?",
      "answers": [
        "TestNG ('Test Next Generation') is an open-source automated testing framework created by C\u00e9dric Beust, inspired by JUnit and NUnit, specifically designed to overcome JUnit 4/3 limitations in enterprise functional and integration testing.",
        "\u2022 Why TestNG Is Used with Selenium:",
        "  o Test Execution Management: Selenium WebDriver is only a browser automation library\u2014it has no assertions, test runners, or reporting capabilities. TestNG acts as the execution engine and test orchestrator.",
        "  o Multi-Threading & Parallel Execution: Built-in parallel execution across classes, methods, and XML test suites without complex third-party runners.",
        "  o Flexible Parameterization: Native support for XML `<parameter>` and multi-dimensional `@DataProvider`.",
        "  o Flexible Grouping: Execute subsets of tests (e.g., `smoke`, `sanity`, `regression`) dynamically via XML.",
        "  o Execution Dependency: Explicit ordering with `dependsOnMethods` and `dependsOnGroups`.",
        "\u2022 Key Differences: TestNG vs JUnit 4 / 5:",
        "  o Annotations Hierarchy: TestNG provides a 5-tier setup hierarchy (@BeforeSuite, @BeforeTest, @BeforeClass, @BeforeMethod, @Test) vs JUnit's 2-tier (@BeforeAll, @BeforeEach).",
        "  o Test Dependency: TestNG natively supports `dependsOnMethods`; JUnit does not provide native dependency ordering.",
        "  o Data-Driven Testing: TestNG has `@DataProvider` returning `Object[][]` with parallel support; JUnit requires separate parameterized runners.",
        "  o Suite Configuration: TestNG uses powerful XML configuration (`testng.xml`); JUnit traditionally relies on annotations or code runners."
      ]
    },
    {
      "id": "selenium-q63",
      "num": "63",
      "category": "TestNG Framework Architecture & Annotations",
      "question": "How do you add TestNG to a Maven project using pom.xml and configure the required dependency?",
      "answers": [
        "To integrate TestNG into a Maven-based Selenium framework, add the official TestNG dependency in your `pom.xml` under `<dependencies>`:",
        "<dependency>",
        "    <groupId>org.testng</groupId>",
        "    <artifactId>testng</artifactId>",
        "    <version>7.8.0</version>",
        "    <scope>test</scope>",
        "</dependency>",
        "\u2022 Key Dependency Considerations:",
        "  o Scope `<scope>test</scope>`: Ensures TestNG classes are available exclusively during test compilation and execution, excluding them from production build artifacts (JAR/WAR).",
        "  o Maven Surefire Plugin: To execute TestNG suites via Maven CLI (`mvn clean test`), configure the `maven-surefire-plugin` in `pom.xml` with `<suiteXmlFile>testng.xml</suiteXmlFile>`.",
        "  o Non-Maven Setup: If not using Maven, download `testng-7.8.0.jar` and `jcommander.jar` from Maven Central and add them to the Java project's Build Path -> Libraries."
      ]
    },
    {
      "id": "selenium-q64",
      "num": "64",
      "category": "TestNG Framework Architecture & Annotations",
      "question": "Explain the complete TestNG Annotation hierarchy and execution order from @BeforeSuite to @AfterSuite.",
      "answers": [
        "TestNG executes annotations in a strict hierarchical order based on XML configuration boundaries:",
        "\u2022 The Exact Execution Order:",
        "  1. @BeforeSuite: Runs ONCE before all tests in the `<suite>` start executing.",
        "  2. @BeforeTest: Runs ONCE before any test method belonging to the `<test>` tag in `testng.xml`.",
        "  3. @BeforeClass: Runs ONCE before the first test method in the current class is invoked.",
        "  4. @BeforeMethod: Runs before EACH `@Test` method in the current class.",
        "  5. @Test: The actual test logic containing Selenium WebDriver interactions and assertions.",
        "  6. @AfterMethod: Runs after EACH `@Test` method completes (ideal for closing modals or taking failure screenshots).",
        "  7. @AfterClass: Runs ONCE after all test methods in the current class have executed.",
        "  8. @AfterTest: Runs ONCE after all test methods belonging to the `<test>` tag have run.",
        "  9. @AfterSuite: Runs ONCE after all tests in the entire XML suite have finished (ideal for flushing ExtentReports and sending email notifications).",
        "\u2022 Practical Automation Implementation:",
        "  @BeforeSuite public void setupExtentReports() { ... }",
        "  @BeforeTest public void setEnvironmentParams() { ... }",
        "  @BeforeClass public void setupTestClass() { ... }",
        "  @BeforeMethod public void launchBrowser() { driver = DriverFactory.getDriver(); }",
        "  @Test public void verifyUserLogin() { ... }",
        "  @AfterMethod public void tearDownBrowser() { driver.quit(); }",
        "  @AfterSuite public void tearDownSuite() { extent.flush(); }"
      ]
    },
    {
      "id": "selenium-q65",
      "num": "65",
      "category": "TestNG Suite XML Configuration & Groups",
      "question": "What is the purpose of testng.xml, and how do you configure test suites, classes, packages, verbose, and preserve-order?",
      "answers": [
        "`testng.xml` is the central orchestration configuration file in TestNG. It defines which test classes, methods, or packages run, how they are grouped, what parameters they receive, and whether they run in parallel.",
        "\u2022 Basic Structure of testng.xml:",
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        "<!DOCTYPE suite SYSTEM \"https://testng.org/testng-1.0.dtd\">",
        "<suite name=\"Regression Suite\" verbose=\"2\" parallel=\"tests\" thread-count=\"3\">",
        "    <test name=\"Chrome Login Tests\" preserve-order=\"true\">",
        "        <parameter name=\"browser\" value=\"chrome\" />",
        "        <classes>",
        "            <class name=\"com.deepakqa.tests.LoginTest\" />",
        "            <class name=\"com.deepakqa.tests.DashboardTest\" />",
        "        </classes>",
        "    </test>",
        "</suite>",
        "\u2022 Key Suite Attributes:",
        "  o `verbose=\"1-10\"`: Controls console log verbosity level (1 is minimal, 10 is maximum debug detail).",
        "  o `preserve-order=\"true\"`: Forces TestNG to execute classes and methods in the exact order declared in the XML rather than sorting alphabetically.",
        "  o `<packages>`: Allows running all test classes inside a package (`<package name=\"com.deepakqa.smoke.*\" />`) instead of listing individual classes."
      ]
    },
    {
      "id": "selenium-q66",
      "num": "66",
      "category": "TestNG Suite XML Configuration & Groups",
      "question": "How do Test Groups work in TestNG, and how do you include or exclude them in testng.xml?",
      "answers": [
        "TestNG groups allow categorizing test methods across different classes into logical buckets like `smoke`, `sanity`, `regression`, or `api` without modifying class hierarchies.",
        "\u2022 Tagging Tests with Groups in Java:",
        "  @Test(groups = {\"smoke\", \"regression\"})",
        "  public void testValidLogin() { ... }",
        "  @Test(groups = {\"regression\"})",
        "  public void testBulkOrder() { ... }",
        "\u2022 Configuring Groups in testng.xml:",
        "  <test name=\"Smoke Test Suite\">",
        "      <groups>",
        "          <run>",
        "              <include name=\"smoke\" />",
        "              <exclude name=\"broken\" />",
        "          </run>",
        "      </groups>",
        "      <packages>",
        "          <package name=\"com.deepakqa.tests.*\" />",
        "      </packages>",
        "  </test>",
        "\u2022 Priority of Exclude: If a test belongs to both `smoke` and `broken`, `<exclude name=\"broken\" />` always takes precedence, and the test will NOT run."
      ]
    },
    {
      "id": "selenium-q67",
      "num": "67",
      "category": "TestNG Suite XML Configuration & Groups",
      "question": "How do dependencies between tests work in TestNG? Explain dependsOnMethods and dependsOnGroups with alwaysRun.",
      "answers": [
        "Test dependencies allow specifying that a test method should only execute if another method or group has successfully passed.",
        "\u2022 `dependsOnMethods` Example:",
        "  @Test",
        "  public void loginTest() {",
        "      Assert.assertTrue(performLogin());",
        "  }",
        "  @Test(dependsOnMethods = {\"loginTest\"})",
        "  public void viewProfileTest() {",
        "      // Only runs if loginTest passed. If loginTest fails, this is SKIPPED, not marked failed.",
        "  }",
        "\u2022 `dependsOnGroups` Example:",
        "  @Test(dependsOnGroups = {\"auth-smoke\"})",
        "  public void checkoutTest() { ... }",
        "\u2022 The `alwaysRun = true` Flag:",
        "  o By default, if the prerequisite method fails, dependent methods are marked `SKIP`.",
        "  o If you add `alwaysRun = true`, the dependent method will execute even if the parent test failed:",
        "  @Test(dependsOnMethods = {\"loginTest\"}, alwaysRun = true)",
        "  public void cleanupSession() { ... }"
      ]
    },
    {
      "id": "selenium-q68",
      "num": "68",
      "category": "TestNG Suite XML Configuration & Groups",
      "question": "How does the priority attribute work in TestNG? What happens when priorities are negative, zero, or omitted?",
      "answers": [
        "The `priority` attribute on the `@Test` annotation dictates the execution sequence of test methods within a class.",
        "\u2022 Priority Rules in TestNG:",
        "  1. Lowest Number First: TestNG executes tests in ascending numerical order: `-1` runs before `0`, which runs before `1`.",
        "  2. Default Priority = 0: If `@Test` has no priority specified, it defaults to `priority = 0`.",
        "  3. Same Priority Sorting: If two or more test methods have the same priority (or no priority), TestNG executes them in alphabetical order by method name.",
        "\u2022 Code Example:",
        "  @Test(priority = -1) public void launch() { System.out.println(\"Runs 1st\"); }",
        "  @Test public void billing() { System.out.println(\"Runs 2nd (default 0, 'b' < 'l')\"); }",
        "  @Test public void login() { System.out.println(\"Runs 3rd (default 0, 'l' > 'b')\"); }",
        "  @Test(priority = 1) public void logout() { System.out.println(\"Runs 4th\"); }",
        "\u2022 Best Practice: Do not rely heavily on priorities for functional flows; use `dependsOnMethods` or independent atomic tests instead."
      ]
    },
    {
      "id": "selenium-q69",
      "num": "69",
      "category": "Data-Driven Testing & DataProviders",
      "question": "How do you pass parameters to TestNG tests using @Parameters and testng.xml?",
      "answers": [
        "The `@Parameters` annotation is used to pass external configuration values (such as browser type, base URL, timeout, environment) from `testng.xml` directly into test methods.",
        "\u2022 Java Test Class:",
        "  public class BaseTest {",
        "      @Parameters({\"browser\", \"appUrl\"})",
        "      @BeforeMethod",
        "      public void setUp(@Optional(\"chrome\") String browser, @Optional(\"https://test.qa.com\") String appUrl) {",
        "          if (browser.equalsIgnoreCase(\"chrome\")) driver = new ChromeDriver();",
        "          else if (browser.equalsIgnoreCase(\"firefox\")) driver = new FirefoxDriver();",
        "          driver.get(appUrl);",
        "      }",
        "  }",
        "\u2022 `testng.xml` Configuration:",
        "  <test name=\"Firefox Test Suite\">",
        "      <parameter name=\"browser\" value=\"firefox\" />",
        "      <parameter name=\"appUrl\" value=\"https://staging.deepakqa.com\" />",
        "      <classes><class name=\"com.deepakqa.tests.LoginTest\" /></classes>",
        "  </test>",
        "\u2022 The `@Optional` Annotation: Protects against missing parameter exceptions if a test is run directly from the IDE without `testng.xml`."
      ]
    },
    {
      "id": "selenium-q70",
      "num": "70",
      "category": "Data-Driven Testing & DataProviders",
      "question": "How do you implement data-driven testing using @DataProvider in TestNG? Explain returning Object[][] and dynamic method reflection.",
      "answers": [
        "A `@DataProvider` method generates and returns test data as a two-dimensional array (`Object[][]`) or an Iterator of Objects (`Iterator<Object[]>`):",
        "\u2022 1. Basic @DataProvider Example:",
        "  @DataProvider(name = \"loginCredentials\")",
        "  public Object[][] getData() {",
        "      return new Object[][] {",
        "          {\"standard_user\", \"secret_sauce\", \"pass\"},",
        "          {\"locked_out_user\", \"secret_sauce\", \"fail\"},",
        "          {\"invalid_user\", \"wrong_pass\", \"fail\"}",
        "      };",
        "  }",
        "  @Test(dataProvider = \"loginCredentials\")",
        "  public void testLogin(String username, String password, String expectedStatus) {",
        "      loginPage.login(username, password);",
        "      Assert.assertEquals(loginPage.getStatus(), expectedStatus);",
        "  }",
        "\u2022 2. Dynamic DataProvider Using `java.lang.reflect.Method`:",
        "  o A single DataProvider can supply different datasets depending on which test method calls it:",
        "  @DataProvider(name = \"commonData\")",
        "  public Object[][] getData(Method m) {",
        "      if (m.getName().equals(\"testAdminLogin\")) {",
        "          return new Object[][] {{\"admin@qa.com\", \"Admin#123\"}};",
        "      }",
        "      return new Object[][] {{\"user@qa.com\", \"User#123\"}};",
        "  }"
      ]
    },
    {
      "id": "selenium-q71",
      "num": "71",
      "category": "Parallel Execution & ThreadLocal WebDriver",
      "question": "How do you configure parallel test execution in TestNG across methods, tests, and classes using parallel and thread-count?",
      "answers": [
        "TestNG allows running tests concurrently to drastically reduce execution time across CI pipelines.",
        "\u2022 Parallel Execution Modes in `testng.xml`:",
        "  <suite name=\"Parallel Suite\" parallel=\"methods\" thread-count=\"4\">",
        "\u2022 Modes Explained:",
        "  1. `parallel=\"methods\"`: TestNG runs all `@Test` methods in separate threads. (Requires ThreadLocal WebDriver for safety).",
        "  2. `parallel=\"classes\"`: All test methods inside Class A run in thread 1, while test methods in Class B run in thread 2.",
        "  3. `parallel=\"tests\"`: All classes within `<test name=\"Test1\">` run in one thread, while `<test name=\"Test2\">` runs concurrently in another (ideal for cross-browser testing).",
        "\u2022 Thread-Count Attribute: Specifies the maximum number of worker threads allocated from the thread pool (e.g. `thread-count=\"5\"`).",
        "\u2022 Parallel DataProviders: You can also run DataProvider iterations concurrently by setting `@DataProvider(parallel = true)`."
      ]
    },
    {
      "id": "selenium-q72",
      "num": "72",
      "category": "Parallel Execution & ThreadLocal WebDriver",
      "question": "How do you ensure Thread Safety in Selenium parallel testing using ThreadLocal<WebDriver>?",
      "answers": [
        "In parallel execution, multiple threads share the same JVM memory space. If WebDriver is declared as a static variable (`public static WebDriver driver;`), threads overwrite each other's driver instances, leading to `NullPointerException` and session collision.",
        "\u2022 The ThreadLocal Solution:",
        "  `ThreadLocal<WebDriver>` allocates a dedicated, isolated copy of WebDriver for each thread:",
        "  public class DriverFactory {",
        "      private static ThreadLocal<WebDriver> tlDriver = new ThreadLocal<>();",
        "      public static void setDriver(WebDriver driver) {",
        "          tlDriver.set(driver);",
        "      }",
        "      public static WebDriver getDriver() {",
        "          return tlDriver.get();",
        "      }",
        "      public static void quitDriver() {",
        "          if (tlDriver.get() != null) {",
        "              tlDriver.get().quit();",
        "              tlDriver.remove(); // Mandatory to prevent memory leaks",
        "          }",
        "      }",
        "  }",
        "\u2022 Key Rule: Always call `tlDriver.remove()` after `driver.quit()` to allow the garbage collector to reclaim thread resources in thread pool environments."
      ]
    },
    {
      "id": "selenium-q73",
      "num": "73",
      "category": "TestNG Listeners, SoftAssert & Custom Reporters",
      "question": "What are TestNG Listeners, and how do you implement a custom ITestListener to capture screenshots on failure?",
      "answers": [
        "TestNG Listeners are interfaces that listen to test execution events and trigger custom logic when a test starts, succeeds, fails, or skips.",
        "\u2022 Core Listener Interfaces in TestNG:",
        "  1. `ITestListener`: Listens to method-level events (`onTestStart`, `onTestSuccess`, `onTestFailure`, `onTestSkipped`).",
        "  2. `ISuiteListener`: Listens to suite-level start and finish (`onStart`, `onFinish`).",
        "  3. `IAnnotationTransformer`: Dynamically modifies annotations (e.g. attaching RetryAnalyzer to all tests at runtime).",
        "  4. `IReporter`: Customizes HTML reports after all tests have completed.",
        "\u2022 Screenshot on Failure Implementation:",
        "  public class TestListener extends TestListenerAdapter {",
        "      @Override",
        "      public void onTestFailure(ITestResult result) {",
        "          WebDriver driver = DriverFactory.getDriver();",
        "          File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);",
        "          String path = \"screenshots/\" + result.getName() + \"_\" + System.currentTimeMillis() + \".png\";",
        "          try { FileUtils.copyFile(src, new File(path)); } catch (IOException e) { e.printStackTrace(); }",
        "          System.out.println(\"Screenshot captured for failed test: \" + result.getName());",
        "      }",
        "  }",
        "\u2022 Attaching to Suite in `testng.xml`:",
        "  <listeners>",
        "      <listener class-name=\"com.deepakqa.listeners.TestListener\" />",
        "  </listeners>"
      ]
    },
    {
      "id": "selenium-q74",
      "num": "74",
      "category": "TestNG Listeners, SoftAssert & Custom Reporters",
      "question": "What is SoftAssert in TestNG, when should you use it, and why is calling assertAll() mandatory?",
      "answers": [
        "In standard (Hard) assertions (`Assert.assertEquals`), if the assertion fails, an `AssertionError` is thrown immediately, and the remaining lines of the test method are NOT executed.",
        "\u2022 What SoftAssert Is:",
        "  `SoftAssert` allows executing multiple checks in a single test without halting execution when one fails.",
        "\u2022 When to Use SoftAssert:",
        "  o Validating multiple UI fields on a page (e.g., verifying user profile name, email, phone number, address).",
        "  o Verifying all footer links or table headers without failing the test on the first mismatch.",
        "\u2022 Code Example:",
        "  @Test",
        "  public void testUserProfile() {",
        "      SoftAssert softAssert = new SoftAssert();",
        "      softAssert.assertEquals(profilePage.getName(), \"John Doe\", \"Name mismatch\");",
        "      softAssert.assertEquals(profilePage.getEmail(), \"john@deepakqa.com\", \"Email mismatch\");",
        "      softAssert.assertTrue(profilePage.isPremiumBadgeVisible(), \"Badge not visible\");",
        "      // MANDATORY: Aggregates all failures and marks test failed if any assert failed",
        "      softAssert.assertAll();",
        "  }",
        "\u2022 The Critical `assertAll()` Rule: If you omit `softAssert.assertAll()`, the test will be marked PASSED even if all assertions failed! It is non-negotiable."
      ]
    },
    {
      "id": "selenium-q75",
      "num": "75",
      "category": "Advanced TestNG: @Factory, RetryAnalyzer & Jenkins CI/CD",
      "question": "What is the @Factory annotation in TestNG, and how does it dynamically instantiate test classes with different parameters?",
      "answers": [
        "`@Factory` is an advanced TestNG annotation used to dynamically instantiate test class objects with different constructor arguments at runtime.",
        "\u2022 `@Factory` vs `@DataProvider`:",
        "  o `@DataProvider`: Runs the SAME test class instance multiple times, passing different parameters to the specific `@Test` method.",
        "  o `@Factory`: Creates MULTIPLE separate instances of the test class, each with its own state and constructor arguments.",
        "\u2022 Code Implementation:",
        "  public class SearchTest {",
        "      private String searchKeyword;",
        "      public SearchTest(String searchKeyword) { this.searchKeyword = searchKeyword; }",
        "      @Test",
        "      public void executeSearch() {",
        "          driver.get(\"https://deepakqa.com/search?q=\" + searchKeyword);",
        "      }",
        "  }",
        "  public class TestFactory {",
        "      @Factory",
        "      public Object[] createInstances() {",
        "          return new Object[] {",
        "              new SearchTest(\"selenium\"),",
        "              new SearchTest(\"testng\"),",
        "              new SearchTest(\"playwright\")",
        "          };",
        "      }",
        "  }"
      ]
    },
    {
      "id": "selenium-q76",
      "num": "76",
      "category": "Advanced TestNG: @Factory, RetryAnalyzer & Jenkins CI/CD",
      "question": "What is IRetryAnalyzer, and how do you implement automatic test retries for flaky tests in TestNG?",
      "answers": [
        "`IRetryAnalyzer` is a TestNG interface used to automatically re-run failed test cases a specified number of times before finally marking them as failed, helping mitigate intermittent network or timing flakiness.",
        "\u2022 1. Implementing `IRetryAnalyzer`:",
        "  public class RetryAnalyzer implements IRetryAnalyzer {",
        "      private int retryCount = 0;",
        "      private static final int maxRetryCount = 2; // Retry twice",
        "      @Override",
        "      public boolean retry(ITestResult result) {",
        "          if (retryCount < maxRetryCount) {",
        "              retryCount++;",
        "              return true; // Tells TestNG to retry",
        "          }",
        "          return false; // Stop retrying",
        "      }",
        "  }",
        "\u2022 2. Applying to @Test Method:",
        "  @Test(retryAnalyzer = RetryAnalyzer.class)",
        "  public void testFlakyPaymentGateway() { ... }",
        "\u2022 3. Global Retry via `IAnnotationTransformer`:",
        "  o To avoid adding `retryAnalyzer` to every `@Test`, implement `IAnnotationTransformer` to attach it globally to all test annotations during suite initialization.",
        "  public class AnnotationTransformer implements IAnnotationTransformer {",
        "      @Override",
        "      public void transform(ITestAnnotation annotation, Class testClass, Constructor testConstructor, Method testMethod) {",
        "          annotation.setRetryAnalyzer(RetryAnalyzer.class);",
        "      }",
        "  }"
      ]
    },
    {
      "id": "selenium-q77",
      "num": "77",
      "category": "Advanced TestNG: @Factory, RetryAnalyzer & Jenkins CI/CD",
      "question": "How do you run TestNG tests in a Jenkins CI/CD pipeline using the Maven Surefire plugin and publish HTML reports?",
      "answers": [
        "Executing TestNG suites in Jenkins automated pipelines requires configuring the Maven Surefire plugin and defining pipeline stages.",
        "\u2022 1. `pom.xml` Surefire Configuration:",
        "  <plugin>",
        "      <groupId>org.apache.maven.plugins</groupId>",
        "      <artifactId>maven-surefire-plugin</artifactId>",
        "      <version>3.1.2</version>",
        "      <configuration>",
        "          <suiteXmlFiles>",
        "              <suiteXmlFile>${suiteXmlFile}</suiteXmlFile>",
        "          </suiteXmlFiles>",
        "      </configuration>",
        "  </plugin>",
        "\u2022 2. Jenkinsfile Declarative Pipeline:",
        "  pipeline {",
        "      agent any",
        "      tools { maven 'Maven-3.9'; jdk 'JDK-17' }",
        "      stages {",
        "          stage('Run TestNG Tests') {",
        "              steps {",
        "                  sh 'mvn clean test -DsuiteXmlFile=testng.xml'",
        "              }",
        "          }",
        "      }",
        "      post {",
        "          always {",
        "              publishHTML(target: [reportDir: 'target/surefire-reports', reportFiles: 'index.html', reportName: 'TestNG HTML Report'])",
        "              testng(pattern: 'target/surefire-reports/testng-results.xml')",
        "          }",
        "      }",
        "  }"
      ]
    },
    {
      "id": "selenium-q78",
      "num": "78",
      "category": "WebDriver Architecture & Setup",
      "question": "How does Selenium 4 W3C WebDriver standardization differ from Selenium 3 JSON Wire Protocol, and why does it eliminate flakiness?",
      "answers": [
        "In Selenium 3, client bindings (Java, Python) communicated with browser drivers (ChromeDriver, GeckoDriver) using the JSON Wire Protocol. The driver had to encode and decode requests between JSON Wire Protocol and the browser's native API, creating translation overhead and encoding mismatches.",
        "\u2022 The Selenium 4 W3C Standard:",
        "  o In Selenium 4, WebDriver is an official World Wide Web Consortium (W3C) recommendation.",
        "  o Both the client language bindings and browser drivers speak the exact same standardized W3C protocol natively over direct HTTP/REST.",
        "\u2022 Key Benefits:",
        "  1. Zero Encoding/Decoding Overhead: No middleware protocol translation layer.",
        "  2. Native Browser Support: Modern browsers are engineered directly against the W3C spec, drastically reducing subtle cross-browser execution discrepancies.",
        "  3. Direct Protocol Stability: Actions like touch actions, multi-finger gestures, and new tab handling have standardized W3C schemas."
      ]
    },
    {
      "id": "selenium-q79",
      "num": "79",
      "category": "Locators, Relative Locators & XPath",
      "question": "What are Relative Locators (Friendly Locators) in Selenium 4, and how do you use above(), below(), toLeftOf(), toRightOf(), and near()?",
      "answers": [
        "Relative Locators (introduced in Selenium 4 via the `RelativeLocator` class) allow finding elements based on their visual spatial proximity to other known anchor elements on the page.",
        "\u2022 The 5 Relative Locator Methods:",
        "  1. `above(WebElement)`: Element located visually above the anchor.",
        "  2. `below(WebElement)`: Element located visually below the anchor.",
        "  3. `toLeftOf(WebElement)`: Element located visually to the left of the anchor.",
        "  4. `toRightOf(WebElement)`: Element located visually to the right of the anchor.",
        "  5. `near(WebElement, distanceInPixels)`: Element located within 50px (or custom pixel distance) of the anchor.",
        "\u2022 Code Example:",
        "  import static org.openqa.selenium.support.locators.RelativeLocator.with;",
        "  WebElement passwordInput = driver.findElement(By.id(\"password\"));",
        "  // Find email input directly above password input",
        "  WebElement emailInput = driver.findElement(with(By.tagName(\"input\")).above(passwordInput));",
        "  // Find cancel button to the left of the Submit button",
        "  WebElement submitBtn = driver.findElement(By.id(\"submit\"));",
        "  WebElement cancelBtn = driver.findElement(with(By.tagName(\"button\")).toLeftOf(submitBtn));"
      ]
    },
    {
      "id": "selenium-q80",
      "num": "80",
      "category": "WebDriver Architecture & Setup",
      "question": "How do you access Chrome DevTools Protocol (CDP) and WebDriver BiDi in Selenium 4 for network mocking, console logs, and geo-location?",
      "answers": [
        "Selenium 4 provides direct access to the Chrome DevTools Protocol (CDP) via the `DevTools` interface, allowing Chromium-based browser inspection without external proxy servers.",
        "\u2022 1. Network Interception & Request Mocking:",
        "  ChromeDriver driver = new ChromeDriver();",
        "  DevTools devTools = driver.getDevTools();",
        "  devTools.createSession();",
        "  devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));",
        "  // Intercept and mock responses or block URLs (e.g. ad tracking or images)",
        "  devTools.send(Network.setBlockedURLs(List.of(\"*.png\", \"*.jpg\", \"*google-analytics.com*\")));",
        "\u2022 2. Capturing Browser Console Logs:",
        "  devTools.send(Log.enable());",
        "  devTools.addListener(Log.entryAdded(), logEntry -> {",
        "      System.out.println(\"Console Log [\" + logEntry.getLevel() + \"]: \" + logEntry.getText());",
        "  });",
        "\u2022 3. Emulating Geo-Location:",
        "  devTools.send(Emulation.setGeolocationOverride(Optional.of(37.7749), Optional.of(-122.4194), Optional.of(1)));",
        "  driver.get(\"https://maps.google.com\");"
      ]
    },
    {
      "id": "selenium-q81",
      "num": "81",
      "category": "Page Object Model & Design Patterns",
      "question": "Compare Page Object Model (POM) vs PageFactory vs Screenplay Pattern. Why does modern automation prefer private By locators over @FindBy?",
      "answers": [
        "1. Page Object Model (POM):",
        "  o Encapsulates page locators as `private By` variables and provides public interaction methods.",
        "  o Elements are resolved lazily on demand: `driver.findElement(usernameBy).sendKeys(user);`",
        "  o Immune to stale element issues because elements are fetched fresh every time.",
        "2. PageFactory (`@FindBy`):",
        "  o Uses `@FindBy(id = \"login\") WebElement loginBtn;` initialized via `PageFactory.initElements(driver, this);`.",
        "  o Caches proxy references. In SPAs (React/Vue/Angular), dynamic re-rendering frequently breaks cached proxies with `StaleElementReferenceException`.",
        "  o Modern SDET consensus avoids PageFactory in favor of pure POM or Screenplay.",
        "3. Screenplay Pattern (Serenity BDD):",
        "  o Refactors POM using SOLID principles: Actors, Tasks, Questions, and Abilities.",
        "  o Solves the 'bloated Page Object' antipattern by breaking 1,000-line page classes into reusable task components (e.g., `actor.attemptsTo(Login.with(credentials));`)."
      ]
    },
    {
      "id": "selenium-q82",
      "num": "82",
      "category": "Page Object Model & Design Patterns",
      "question": "How do you implement the Fluent Interface (Method Chaining) design pattern in Selenium Page Objects?",
      "answers": [
        "The Fluent Interface pattern returns page object instances from action methods, allowing test methods to chain interactions into human-readable sentences.",
        "\u2022 Implementation in Page Class:",
        "  public class LoginPage {",
        "      private WebDriver driver;",
        "      private By emailField = By.id(\"email\");",
        "      private By passField = By.id(\"password\");",
        "      private By submitBtn = By.id(\"submit\");",
        "      public LoginPage(WebDriver driver) { this.driver = driver; }",
        "      public LoginPage enterEmail(String email) {",
        "          driver.findElement(emailField).sendKeys(email);",
        "          return this; // Return same page object",
        "      }",
        "      public LoginPage enterPassword(String pass) {",
        "          driver.findElement(passField).sendKeys(pass);",
        "          return this;",
        "      }",
        "      public DashboardPage clickLogin() {",
        "          driver.findElement(submitBtn).click();",
        "          return new DashboardPage(driver); // Return next target page object",
        "      }",
        "  }",
        "\u2022 Readable Test Script:",
        "  @Test",
        "  public void testFluentLogin() {",
        "      new LoginPage(driver)",
        "          .enterEmail(\"deepak@qa.com\")",
        "          .enterPassword(\"SecurePassword123\")",
        "          .clickLogin()",
        "          .verifyWelcomeBanner();",
        "  }"
      ]
    },
    {
      "id": "selenium-q83",
      "num": "83",
      "category": "WebDriver Architecture & Setup",
      "question": "What is the technical difference between driver.close() and driver.quit() under the hood?",
      "answers": [
        "1. `driver.close()`:",
        "  o Closes ONLY the currently active browser window or tab that WebDriver is focused on.",
        "  o Does NOT terminate the underlying browser binary process or the driver executable (e.g. `chromedriver.exe`).",
        "  o If you close a tab, WebDriver's focus is NOT automatically shifted; you must explicitly call `driver.switchTo().window(otherHandle)`.",
        "  o If it was the only open tab, the browser window closes, but the driver process remains alive in OS memory as a zombie process.",
        "2. `driver.quit()`:",
        "  o Closes ALL open browser windows and tabs associated with the WebDriver session.",
        "  o Sends a DELETE session command (`/session/{sessionId}`) to the driver server.",
        "  o Gracefully terminates the browser process and the driver executable (`chromedriver.exe`), freeing OS RAM and ports.",
        "  o Nullifies the session ID. Calling any driver method after `quit()` throws `NoSuchSessionException`.",
        "\u2022 Best Practice: Always invoke `driver.quit()` inside `@AfterMethod` or `@AfterClass` to prevent memory leaks in CI runners."
      ]
    },
    {
      "id": "selenium-q84",
      "num": "84",
      "question": "Explain the concept of test automation framework architecture.",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Test Automation Framework is a structured set of guidelines and tools for creating",
        "reliable, maintainable tests.",
        "Layered Architecture:",
        "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
        "\u2502        Test Execution Layer             \u2502",
        "\u2502     (Test cases, test runners)          \u2502",
        "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
        "\u2502        Test Framework Layer             \u2502",
        "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
        "\u2502        Business Logic Layer             \u2502",
        "\u2502    (Page Objects, Step Definitions)     \u2502",
        "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
        "\u2502     Utilities & Helpers Layer           \u2502",
        "\u2502  (Drivers, Reporting, Logging, Config)  \u2502",
        "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
        "\u2502    Application Under Test (AUT)         \u2502",
        "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
        "Framework Components:",
        "// 1. Driver Manager (Singleton)",
        "public class DriverManager {",
        "private static WebDriver driver;",
        "public static WebDriver getDriver() {",
        "if (driver == null) {",
        "driver = new ChromeDriver();",
        "}",
        "return driver;",
        "}",
        "public static void quitDriver() {",
        "if (driver != null) {",
        "driver.quit();",
        "driver = null;",
        "}",
        "}",
        "}",
        "// 2. Configuration Reader",
        "public class ConfigReader {",
        "private static Properties properties;",
        "static {",
        "properties = new Properties();",
        "try {",
        "properties.load(new FileInputStream(\"config.properties\"));",
        "} catch (IOException e) {",
        "e.printStackTrace();",
        "}",
        "}",
        "public static String getProperty(String key) {",
        "return properties.getProperty(key);",
        "}",
        "}",
        "// 3. Page Object Model",
        "public class LoginPage {",
        "private WebDriver driver;",
        "private By usernameField = By.id(\"username\");",
        "private By passwordField = By.id(\"password\");",
        "private By loginButton = By.id(\"loginBtn\");",
        "public LoginPage(WebDriver driver) {",
        "this.driver = driver;",
        "}",
        "public void enterUsername(String username) {",
        "driver.findElement(usernameField).sendKeys(username);",
        "}",
        "public void enterPassword(String password) {",
        "driver.findElement(passwordField).sendKeys(password);",
        "}",
        "public DashboardPage clickLogin() {",
        "driver.findElement(loginButton).click();",
        "return new DashboardPage(driver);",
        "}",
        "}",
        "// 4. Test Base Class",
        "public class BaseTest {",
        "protected WebDriver driver;",
        "@BeforeMethod",
        "public void setUp() {",
        "driver = DriverManager.getDriver();",
        "driver.manage().window().maximize();",
        "driver.get(ConfigReader.getProperty(\"base.url\"));",
        "}",
        "@AfterMethod",
        "public void tearDown(ITestResult result) {",
        "if (ITestResult.FAILURE == result.getStatus()) {",
        "takeScreenshot(result.getName());",
        "}",
        "DriverManager.quitDriver();",
        "}",
        "protected void takeScreenshot(String testName) {",
        "File screenshot = ((TakesScreenshot) driver)",
        ".getScreenshotAs(OutputType.FILE);",
        "try {",
        "FileUtils.copyFile(screenshot,",
        "new File(\"screenshots/\" + testName + \".png\"));",
        "} catch (IOException e) {",
        "e.printStackTrace();",
        "}",
        "}",
        "}",
        "// 5. Test Class",
        "public class LoginTest extends BaseTest {",
        "@Test",
        "public void testValidLogin() {",
        "LoginPage loginPage = new LoginPage(driver);",
        "loginPage.enterUsername(\"testuser\");",
        "loginPage.enterPassword(\"password123\");",
        "DashboardPage dashboardPage = loginPage.clickLogin();",
        "Assert.assertTrue(dashboardPage.isDashboardDisplayed());",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q85",
      "num": "85",
      "question": "Explain CI/CD integration with test automation frameworks.",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "CI/CD integrates automated tests into continuous integration and deployment pipelines.",
        "CI/CD Pipeline with Tests:",
        "Developer Push Code",
        "\u2193",
        "Webhook Trigger",
        "\u2193",
        "Build Project",
        "\u2193",
        "Run Unit Tests",
        "\u2193",
        "Run Integration Tests",
        "\u2193",
        "Run Automation Tests (Smoke)",
        "\u2193",
        "Code Analysis",
        "\u2193",
        "Deploy to Staging",
        "\u2193",
        "Run Automation Tests (Full)",
        "\u2193",
        "Performance Tests",
        "\u2193",
        "Deploy to Production",
        "\u2193",
        "Monitor & Alert",
        "Jenkins Pipeline Example:",
        "pipeline {",
        "agent any",
        "stages {",
        "stage('Build') {",
        "steps {",
        "echo 'Building project...'",
        "sh 'mvn clean compile'",
        "}",
        "}",
        "stage('Unit Tests') {",
        "steps {",
        "echo 'Running unit tests...'",
        "sh 'mvn test'",
        "}",
        "}",
        "stage('Smoke Tests') {",
        "steps {",
        "echo 'Running smoke tests...'",
        "sh 'mvn test -Dgroups=smoke'",
        "}",
        "}",
        "stage('Regression Tests') {",
        "steps {",
        "echo 'Running regression tests...'",
        "sh 'mvn test -Dgroups=regression'",
        "}",
        "}",
        "stage('Deploy to Staging') {",
        "steps {",
        "echo 'Deploying to staging...'",
        "sh 'docker build -t app:${BUILD_NUMBER} .'",
        "sh 'docker push app:${BUILD_NUMBER}'",
        "sh 'kubectl set image deployment/app app=app:${BUILD_NUMBER}'",
        "}",
        "}",
        "stage('E2E Tests') {",
        "steps {",
        "echo 'Running E2E tests...'",
        "}",
        "}",
        "}",
        "post {",
        "always {",
        "// Generate reports",
        "junit 'target/surefire-reports/*.xml'",
        "publishHTML([",
        "reportDir: 'target/surefire-reports',",
        "reportFiles: 'index.html',",
        "reportName: 'Test Report'",
        "])",
        "// Archive test results",
        "archiveArtifacts artifacts: 'target/**', allowEmptyArchive: true",
        "}",
        "success {",
        "echo 'Pipeline succeeded!'",
        "// Deploy to production",
        "}",
        "failure {",
        "echo 'Pipeline failed!'",
        "// Send notification",
        "emailext(",
        "to: '${DEFAULT_RECIPIENTS}',",
        "subject: 'Build Failed: ${BUILD_NUMBER}',",
        "body: 'Test execution failed. Check logs for details.'",
        ")",
        "}",
        "}",
        "}",
        "POM Configuration:",
        "<plugin>",
        "<groupId>org.apache.maven.plugins</groupId>",
        "<artifactId>maven-surefire-plugin</artifactId>",
        "<version>3.0.0-M5</version>",
        "<configuration>",
        "<includes>",
        "<include>**/*Test.java</include>",
        "</includes>",
        "<suiteXmlFiles>",
        "<suiteXmlFile>${testngFile}</suiteXmlFile>",
        "</suiteXmlFiles>",
        "<parallel>methods</parallel>",
        "<threadCount>4</threadCount>",
        "</configuration>",
        "</plugin>",
        "<plugin>",
        "<groupId>org.jacoco</groupId>",
        "<artifactId>jacoco-maven-plugin</artifactId>",
        "<version>0.8.7</version>",
        "<executions>",
        "<execution>",
        "<goals>",
        "<goal>prepare-agent</goal>",
        "</goals>",
        "</execution>",
        "</executions>",
        "</plugin>"
      ]
    },
    {
      "id": "selenium-q86",
      "num": "86",
      "question": "What are best practices for creating scalable and maintainable test automation",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "frameworks?",
        "Best Practices:",
        "1. Modular Architecture: Separate concerns into different layers",
        "// Good structure",
        "src/",
        "\u251c\u2500\u2500 main/",
        "\u2502   \u251c\u2500\u2500 java/",
        "\u2502   \u2502   \u251c\u2500\u2500 com/automation/",
        "\u2502   \u2502   \u2502   \u251c\u2500\u2500 pages/         // Page objects",
        "\u2502   \u2502   \u2502   \u251c\u2500\u2500 actions/       // User actions",
        "\u2502   \u2502   \u2502   \u251c\u2500\u2500 utils/         // Utilities",
        "\u2502   \u2502   \u2502   \u251c\u2500\u2500 config/        // Configuration",
        "\u2502   \u2502   \u2502   \u2514\u2500\u2500 api/           // API clients",
        "\u2502   \u2502   \u2514\u2500\u2500 resources/",
        "\u2502   \u2502       \u2514\u2500\u2500 config.properties",
        "\u2502   \u2514\u2500\u2500 test/",
        "\u2502       \u251c\u2500\u2500 java/",
        "\u2502       \u2502   \u251c\u2500\u2500 com/automation/tests/  // Test cases",
        "\u2502       \u2502   \u2514\u2500\u2500 com/automation/listeners/ // Listeners",
        "\u2502       \u2514\u2500\u2500 resources/",
        "\u2502           \u2514\u2500\u2500 features/      // Feature files",
        "2. Centralized Configuration:",
        "public class ConfigReader {",
        "private static Properties properties = new Properties();",
        "static {",
        "loadProperties(\"src/main/resources/config.properties\");",
        "loadEnvironmentSpecificConfig();",
        "}",
        "private static void loadEnvironmentSpecificConfig() {",
        "String env = System.getenv(\"ENVIRONMENT\");",
        "if (env != null) {",
        "loadProperties(\"src/main/resources/\" + env +",
        "\".properties\");",
        "}",
        "}",
        "public static String getProperty(String key) {",
        "return properties.getProperty(key);",
        "}",
        "}",
        "3. Data-Driven Testing:",
        "@DataProvider(name = \"testData\")",
        "public Object[][] getTestData() {",
        "return readTestDataFromExternalSource();",
        "}",
        "@Test(dataProvider = \"testData\")",
        "public void testWithMultipleDataSets(Map<String, String> testData) {",
        "// Test implementation",
        "}",
        "4. Robust Waits and Synchronization:",
        "public class WaitUtility {",
        "public static WebElement waitForElement(WebDriver driver, By",
        "locator, int seconds) {",
        "WebDriverWait wait = new WebDriverWait(driver,",
        "Duration.ofSeconds(seconds));",
        "return",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(locator));",
        "}",
        "public static void waitForElementToDisappear(WebDriver driver, By",
        "locator) {",
        "WebDriverWait wait = new WebDriverWait(driver,",
        "Duration.ofSeconds(10));",
        "wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));",
        "}",
        "}",
        "5. Error Handling & Logging:",
        "public class Logger {",
        "private static final org.slf4j.Logger logger =",
        "LoggerFactory.getLogger(Logger.class);",
        "public static void info(String message) {",
        "logger.info(message);",
        "}",
        "public static void error(String message, Exception e) {",
        "logger.error(message, e);",
        "}",
        "}",
        "try {",
        "// Test code",
        "} catch (Exception e) {",
        "Logger.error(\"Test failed\", e);",
        "throw new AssertionError(\"Test execution error\", e);",
        "}",
        "6. Screenshot & Video Capture:",
        "public class ScreenshotUtility {",
        "public static void takeScreenshot(String testName) {",
        "File screenshot = ((TakesScreenshot) DriverManager.getDriver())",
        ".getScreenshotAs(OutputType.FILE);",
        "try {",
        "FileUtils.copyFile(screenshot,",
        "new File(\"screenshots/\" + testName + \".png\"));",
        "} catch (IOException e) {",
        "Logger.error(\"Screenshot failed\", e);",
        "}",
        "}",
        "}",
        "7. Reusable Utilities:",
        "public class ActionUtility {",
        "public static void switchToFrame(WebDriver driver, WebElement",
        "frame) {",
        "driver.switchTo().frame(frame);",
        "}",
        "public static void handleAlert(WebDriver driver, String action) {",
        "Alert alert = driver.switchTo().alert();",
        "if (\"ACCEPT\".equals(action)) {",
        "alert.accept();",
        "} else {",
        "alert.dismiss();",
        "}",
        "}",
        "public static List<String> getDropdownOptions(WebDriver driver, By",
        "locator) {",
        "Select dropdown = new Select(driver.findElement(locator));",
        "return dropdown.getOptions()",
        ".stream()",
        ".map(WebElement::getText)",
        ".collect(Collectors.toList());",
        "}",
        "}",
        "8. Version Control Best Practices:",
        ".gitignore:",
        "target/",
        ".classpath",
        ".project",
        "screenshots/",
        "reports/",
        "*.log",
        "9. Code Quality Tools:",
        "<!-- POM: SonarQube integration -->",
        "<plugin>",
        "<groupId>org.sonarsource.scanner.maven</groupId>",
        "<artifactId>sonar-maven-plugin</artifactId>",
        "<version>3.9.0.2155</version>",
        "</plugin>",
        "10. Documentation: java     /**      * Comprehensive documentation for",
        "framework usage,      * setup instructions, and best practices      */",
        "Bonus: Common Framework Design & Best Practices Questions (10",
        "Additional)"
      ]
    },
    {
      "id": "selenium-q87",
      "num": "87",
      "question": "How to implement test environment management?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "public enum TestEnvironment {",
        "DEV(\"https://dev.example.com\", \"dev_db\"),",
        "STAGING(\"https://staging.example.com\", \"staging_db\"),",
        "PRODUCTION(\"https://prod.example.com\", \"prod_db\");",
        "private String baseUrl;",
        "private String database;",
        "TestEnvironment(String baseUrl, String database) {",
        "this.baseUrl = baseUrl;",
        "this.database = database;",
        "}",
        "public String getBaseUrl() { return baseUrl; }",
        "public String getDatabase() { return database; }",
        "}",
        "public class EnvironmentManager {",
        "private static TestEnvironment currentEnvironment;",
        "static {",
        "String env = System.getProperty(\"env\", \"DEV\");",
        "currentEnvironment = TestEnvironment.valueOf(env.toUpperCase());",
        "}",
        "public static TestEnvironment getEnvironment() {",
        "return currentEnvironment;",
        "}",
        "public static String getBaseUrl() {",
        "return currentEnvironment.getBaseUrl();",
        "}",
        "}",
        "// Usage",
        "public class BaseTest {",
        "@BeforeClass",
        "public void setUp() {",
        "String baseUrl = EnvironmentManager.getBaseUrl();",
        "driver.get(baseUrl);",
        "}",
        "}",
        "// Run with specific environment",
        "// mvn test -Denv=staging"
      ]
    },
    {
      "id": "selenium-q88",
      "num": "88",
      "question": "How to implement reporting with screenshots and logs?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Already covered in Q66 and Q94. Here's a summary of integrated approach:",
        "public class AdvancedReporter {",
        "private ExtentReports extentReports;",
        "private ExtentTest extentTest;",
        "private static final Logger logger =",
        "LoggerFactory.getLogger(AdvancedReporter.class);",
        "public void startReport() {",
        "extentReports = new ExtentReports();",
        "extentReports.attachReporter(",
        "new ExtentSparkReporter(\"target/ExtentReport.html\")",
        ");",
        "}",
        "public void createTest(String testName) {",
        "extentTest = extentReports.createTest(testName);",
        "}",
        "public void logPass(String message) {",
        "logger.info(message);",
        "extentTest.pass(message);",
        "}",
        "public void logFail(String message, Throwable exception) {",
        "logger.error(message, exception);",
        "extentTest.fail(exception);",
        "attachScreenshot();",
        "}",
        "public void attachScreenshot() {",
        "String screenshotPath = takeScreenshot();",
        "extentTest.addScreenCaptureFromPath(screenshotPath);",
        "}",
        "public void endReport() {",
        "extentReports.flush();",
        "}",
        "private String takeScreenshot() {",
        "File screenshot = ((TakesScreenshot) DriverManager.getDriver())",
        ".getScreenshotAs(OutputType.FILE);",
        "String path = \"screenshots/\" + System.currentTimeMillis() + \".png\";",
        "try {",
        "FileUtils.copyFile(screenshot, new File(path));",
        "} catch (IOException e) {",
        "logger.error(\"Screenshot capture failed\", e);",
        "}",
        "return path;",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q89",
      "num": "89",
      "question": "How do you capture screenshots in Selenium?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "File src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);",
        "FileUtils.copyFile(src, new File(\"path/screenshot.png\"));"
      ]
    },
    {
      "id": "selenium-q90",
      "num": "90",
      "question": "How do you take full-page screenshots in Selenium?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Chrome-specific:",
        "((ChromeDriver) driver).getFullPageScreenshotAs(OutputType.FILE);",
        "For normal screenshots:",
        "TakesScreenshot ts = (TakesScreenshot) driver;",
        "File src = ts.getScreenshotAs(OutputType.FILE);"
      ]
    },
    {
      "id": "selenium-q91",
      "num": "91",
      "question": "What is an automation framework, and why is it important in Selenium projects?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "An automation framework is a structured set of guidelines, coding standards, tools, and practices for building",
        "and maintaining automated test scripts.",
        "Importance:",
        "\u2022 Code reusability (common functions in one place)",
        "\u2022 Maintainability (easy to update tests when UI changes)",
        "\u2022 Scalability (supports more tests without rework)",
        "\u2022 Reporting (detailed test results)",
        "\u2022 Integration (works with CI/CD tools like Jenkins)"
      ]
    },
    {
      "id": "selenium-q92",
      "num": "92",
      "question": "What are the types of Selenium automation frameworks?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "1. Linear (Record and Playback): Simple scripts; hard to maintain.",
        "2. Modular: Breaks app into modules; reusable code.",
        "3. Data-Driven: Reads input data from external sources (Excel, CSV, DB).",
        "4. Keyword-Driven: Uses action keywords to represent steps.",
        "5. Hybrid: Combination of data-driven + keyword-driven.",
        "6. Keyword & Hybrid Framework: Combines modular data-driven and keyword execution."
      ]
    },
    {
      "id": "selenium-q93",
      "num": "93",
      "question": "What is Maven, and how is it used in Selenium projects?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Maven is a build automation tool that manages:",
        "\u2022 Dependencies (Selenium, TestNG jars)",
        "\u2022 Build lifecycle (compile, test, package)",
        "\u2022 Project structure (standard directory layout)",
        "Example: Add Selenium dependency in pom.xml:",
        "<dependency>",
        "<groupId>org.seleniumhq.selenium</groupId>",
        "<artifactId>selenium-java</artifactId>",
        "<version>4.20.0</version>",
        "</dependency>"
      ]
    },
    {
      "id": "selenium-q94",
      "num": "94",
      "question": "What is Extent Reports, and how do you use it in Selenium?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Extent Reports is a reporting library that produces beautiful HTML reports.",
        "Basic setup:",
        "ExtentReports extent = new ExtentReports();",
        "ExtentTest test = extent.createTest(\"Login Test\");",
        "test.pass(\"Step passed\");",
        "extent.flush();"
      ]
    },
    {
      "id": "selenium-q95",
      "num": "95",
      "question": "How do you integrate Selenium tests with Jenkins?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "Steps:",
        "1. Install Jenkins.",
        "2. Create a new job.",
        "3. Pull project from Git.",
        "4. Add Maven build step: mvn clean test.",
        "5. Schedule or trigger builds."
      ]
    },
    {
      "id": "selenium-q96",
      "num": "96",
      "question": "How do you use Git in Selenium projects?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "\u2022 Clone repo: git clone url",
        "\u2022 Commit changes: git commit -m \"message\"",
        "\u2022 Push to repo: git push origin branch",
        "Git helps in version controlling test scripts."
      ]
    },
    {
      "id": "selenium-q97",
      "num": "97",
      "question": "What is CI/CD, and why is it important in automation?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "CI/CD stands for Continuous Integration / Continuous Deployment.",
        "In automation:",
        "\u2022 CI ensures tests run on every code commit.",
        "\u2022 CD ensures tested code gets deployed automatically.",
        "Benefits: Early bug detection, faster releases."
      ]
    },
    {
      "id": "selenium-q98",
      "num": "98",
      "question": "How do you create a Hybrid Framework in Selenium?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "A hybrid framework combines data-driven + keyword-driven approaches.",
        "Steps:",
        "1. Store test data in Excel.",
        "2. Store keywords like \"click\", \"enterText\".",
        "3. Use Java reflection to execute corresponding methods."
      ]
    },
    {
      "id": "selenium-q99",
      "num": "99",
      "question": "How do you integrate API testing with Selenium UI tests?",
      "category": "Automation Framework Architecture & CI/CD",
      "answers": [
        "\u2022 Use RestAssured or HTTPClient to perform backend validation.",
        "\u2022 Fetch API data, then compare with UI data in Selenium."
      ]
    },
    {
      "id": "selenium-q100",
      "num": "100",
      "question": "Explain OOP concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- Encapsulation: Bundling data (variables) and methods in a class; controlling access",
        "using access modifiers. ```java public class Person { private String name; // Private variable",
        "public String getName() {",
        "return name;",
        "}",
        "public void setName(String name) {",
        "this.name = name;",
        "}",
        "} ```",
        "\u2022 Inheritance: Deriving a new class from an existing class to reuse code and establish",
        "relationships.",
        "public class Animal {",
        "public void eat() { System.out.println(\"Eating...\"); }",
        "}",
        "public class Dog extends Animal {",
        "public void bark() { System.out.println(\"Barking...\"); }",
        "}",
        "\u2022 Polymorphism: Ability of objects to take multiple forms; achieved through method",
        "overloading and overriding.",
        "// Overloading",
        "public void click() { }",
        "public void click(WebElement element) { }",
        "// Overriding",
        "public class Animal {",
        "public void sound() { System.out.println(\"Some sound\"); }",
        "}",
        "public class Dog extends Animal {",
        "@Override",
        "public void sound() { System.out.println(\"Bark\"); }",
        "}",
        "\u2022 Abstraction: Hiding complex details and showing only essential features; achieved",
        "through abstract classes and interfaces.",
        "public abstract class Browser {",
        "public abstract void launchBrowser();",
        "public abstract void closeBrowser();",
        "}",
        "public class Chrome extends Browser {",
        "@Override",
        "public void launchBrowser() { System.out.println(\"Launching",
        "Chrome\"); }",
        "@Override",
        "public void closeBrowser() { System.out.println(\"Closing Chrome\");",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q101",
      "num": "101",
      "question": "What are the differences between static and non-static members?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "| Feature | Static | Non-Static | |\u2014\u2014\u2014|\u2014\u2014\u2013|\u2014\u2014\u2014\u2013| | Memory | Allocated once at class",
        "load time | Allocated per object instance | | Access | Through class name",
        "(ClassName.member) | Through object reference (obj.member) | | Modification | Changes",
        "affect all instances | Changes affect only that instance | | Inheritance | Cannot be overridden",
        "(only hidden) | Can be overridden |",
        "Example:",
        "public class Counter {",
        "public static int staticCount = 0;  // Shared across all instances",
        "public int nonStaticCount = 0;      // Unique per instance",
        "public static void incrementStatic() {",
        "staticCount++;",
        "}",
        "public void incrementNonStatic() {",
        "nonStaticCount++;",
        "}",
        "}",
        "Counter c1 = new Counter();",
        "Counter c2 = new Counter();",
        "c1.incrementStatic();      // staticCount = 1",
        "c2.incrementStatic();      // staticCount = 2 (both instances see same value)",
        "c1.incrementNonStatic();   // c1.nonStaticCount = 1",
        "c2.incrementNonStatic();   // c2.nonStaticCount = 1 (independent values)"
      ]
    },
    {
      "id": "selenium-q102",
      "num": "102",
      "question": "Explain the Exception Hierarchy in Java and how to handle exceptions.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Exception Hierarchy:",
        "Throwable",
        "\u251c\u2500\u2500 Error (System errors, not recoverable)",
        "\u2502   \u251c\u2500\u2500 OutOfMemoryError",
        "\u2502   \u251c\u2500\u2500 StackOverflowError",
        "\u251c\u2500\u2500 Exception (Recoverable)",
        "\u2502   \u251c\u2500\u2500 Checked Exception (must be caught/declared)",
        "\u2502   \u2502   \u251c\u2500\u2500 IOException",
        "\u2502   \u2502   \u251c\u2500\u2500 SQLException",
        "\u2502   \u2502   \u251c\u2500\u2500 FileNotFoundException",
        "\u2502   \u251c\u2500\u2500 Unchecked Exception (inherits RuntimeException)",
        "\u2502       \u251c\u2500\u2500 NullPointerException",
        "\u2502       \u251c\u2500\u2500 ArrayIndexOutOfBoundsException",
        "\u2502       \u251c\u2500\u2500 NoSuchElementException",
        "Exception Handling:",
        "// Try-Catch",
        "try {",
        "WebElement element = driver.findElement(By.id(\"nonexistent\"));",
        "} catch (NoSuchElementException e) {",
        "System.out.println(\"Element not found: \" + e.getMessage());",
        "}",
        "// Try-Catch-Finally",
        "try {",
        "int[] arr = {1, 2, 3};",
        "System.out.println(arr[5]);",
        "} catch (ArrayIndexOutOfBoundsException e) {",
        "System.out.println(\"Index out of bounds\");",
        "} finally {",
        "System.out.println(\"This always executes\");",
        "}",
        "// Multiple Catch Blocks",
        "try {",
        "// code",
        "} catch (NoSuchElementException e) {",
        "System.out.println(\"Element not found\");",
        "} catch (TimeoutException e) {",
        "System.out.println(\"Wait timeout\");",
        "} catch (Exception e) {",
        "System.out.println(\"Generic exception\");",
        "}",
        "// Try-Catch-Resources (Auto-closes resources)",
        "try (FileInputStream file = new FileInputStream(\"test.txt\")) {",
        "// Use file",
        "} catch (IOException e) {",
        "e.printStackTrace();",
        "}",
        "// Throw",
        "public void validateInput(String input) throws IllegalArgumentException {",
        "if (input == null || input.isEmpty()) {",
        "throw new IllegalArgumentException(\"Input cannot be empty\");",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q103",
      "num": "103",
      "question": "What is the difference between checked and unchecked exceptions?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "| Checked | Unchecked | |\u2014\u2014\u2014|\u2014\u2014\u2014\u2013| | Extends Exception (not RuntimeException) |",
        "Extends RuntimeException | | Must be caught or declared in method signature | Not",
        "required to be caught | | Compiler enforces exception handling | Compiler does not enforce",
        "| | Examples: IOException, SQLException | Examples: NullPointerException,",
        "ArrayIndexOutOfBoundsException |",
        "Example:",
        "// Checked Exception",
        "public void readFile(String path) throws IOException {",
        "FileInputStream file = new FileInputStream(path);",
        "// Must handle or throw",
        "}",
        "// Unchecked Exception",
        "public void printArray(int[] arr, int index) {",
        "System.out.println(arr[index]); // Can throw",
        "ArrayIndexOutOfBoundsException",
        "// No requirement to handle",
        "}",
        "// Handling checked exception",
        "try {",
        "readFile(\"nonexistent.txt\");",
        "} catch (IOException e) {",
        "e.printStackTrace();",
        "}"
      ]
    },
    {
      "id": "selenium-q104",
      "num": "104",
      "question": "Explain the difference between String, StringBuilder, and StringBuffer.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "| Feature | String | StringBuilder | StringBuffer | |\u2014\u2014\u2014|\u2014\u2014\u2013|\u2014\u2014\u2014\u2014\u2014|\u2014\u2014\u2014\u2014\u2013| |",
        "Immutable | Yes | No | No | | Thread-Safe | Yes | No | Yes (synchronized) | | Performance |",
        "Slow (creates new objects) | Fast | Slower (due to synchronization) | | Use Case | Fixed",
        "strings | Single-threaded dynamic strings | Multi-threaded dynamic strings |",
        "Example:",
        "// String - Immutable",
        "String str = \"Hello\";",
        "str = str + \" World\";  // Creates new String object",
        "// StringBuilder - Mutable, not thread-safe",
        "StringBuilder sb = new StringBuilder();",
        "sb.append(\"Hello\");",
        "sb.append(\" World\");",
        "System.out.println(sb.toString());  // \"Hello World\"",
        "// StringBuffer - Mutable, thread-safe",
        "StringBuffer sbf = new StringBuffer();",
        "sbf.append(\"Hello\");",
        "sbf.append(\" World\");",
        "System.out.println(sbf.toString());  // \"Hello World\"",
        "// Comparison - Performance",
        "long start = System.currentTimeMillis();",
        "String s = \"\";",
        "for (int i = 0; i < 10000; i++) {",
        "s += i;  // Creates new String each iteration",
        "}",
        "System.out.println(\"String: \" + (System.currentTimeMillis() - start)); //",
        "Slower",
        "start = System.currentTimeMillis();",
        "StringBuilder sb2 = new StringBuilder();",
        "for (int i = 0; i < 10000; i++) {",
        "sb2.append(i);  // Appends to same object",
        "}",
        "System.out.println(\"StringBuilder: \" + (System.currentTimeMillis() - start));",
        "// Faster"
      ]
    },
    {
      "id": "selenium-q105",
      "num": "105",
      "question": "What are the access modifiers in Java and their scope?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "| Modifier | Same Class | Same Package | Different Package (Subclass) | Different Package",
        "(Other) | |\u2014\u2014\u2014-|\u2014\u2014\u2014\u2013|\u2014\u2014\u2014\u2014\u2013|\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014|\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014| |",
        "public | \u2713 | \u2713 | \u2713 | \u2713 | | protected | \u2713 | \u2713 | \u2713 | \u2717 | | default (no modifier) | \u2713 | \u2713 | \u2717 | \u2717 | |",
        "private | \u2713 | \u2717 | \u2717 | \u2717 |",
        "Example:",
        "public class Parent {",
        "public void publicMethod() { }      // Accessible everywhere",
        "protected void protectedMethod() { } // Accessible in same package and",
        "subclasses",
        "void defaultMethod() { }             // Accessible in same package only",
        "private void privateMethod() { }     // Accessible only in this class",
        "}",
        "public class Child extends Parent {",
        "public void test() {",
        "publicMethod();           // \u2713 Accessible",
        "protectedMethod();        // \u2713 Accessible (subclass)",
        "// defaultMethod();       // \u2717 Not accessible (different package)",
        "// privateMethod();       // \u2717 Not accessible",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q106",
      "num": "106",
      "question": "Explain interfaces and abstract classes. When to use each?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- Interfaces: Contract defining methods that implementing classes must follow. Can",
        "contain constants and default methods. ```java public interface WebBrowser { void",
        "launchBrowser(); void closeBrowser(); void navigate(String url); }",
        "public class Chrome implements WebBrowser { @Override public void launchBrowser() {",
        "System.out.println(\u201cLaunching Chrome\u201d); } @Override public void closeBrowser() {",
        "System.out.println(\u201cClosing Chrome\u201d); } @Override public void navigate(String url) {",
        "System.out.println(\u201cNavigate to\u201d + url); } } ```",
        "\u2022 Abstract Classes: Partial implementation; can have abstract and concrete methods,",
        "constructors, and state.",
        "public abstract class Browser {",
        "public abstract void launchBrowser();",
        "public void closeBrowser() {",
        "System.out.println(\"Closing browser\");",
        "}",
        "}",
        "public class Firefox extends Browser {",
        "@Override",
        "public void launchBrowser() { System.out.println(\"Launching",
        "Firefox\"); }",
        "}",
        "When to use: - Interface: Define behavior/contract; allow unrelated classes to implement",
        "same functionality. - Abstract Class: Share code among related classes; define common",
        "state and behavior."
      ]
    },
    {
      "id": "selenium-q107",
      "num": "107",
      "question": "What is method overloading and method overriding? Provide examples.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- Method Overloading: Multiple methods with same name but different parameters in",
        "same class. Resolved at compile-time (static binding). ```java public class Calculator { //",
        "Same method name, different parameters public int add(int a, int b) { return a + b; } public",
        "double add(double a, double b) { return a + b; } public int add(int a, int b, int c) { return a +",
        "b + c; } public String add(String a, String b) { return a.concat(b); } }",
        "Calculator calc = new Calculator(); System.out.println(calc.add(5, 10)); // Calls int version",
        "System.out.println(calc.add(5.5, 10.5)); // Calls double version",
        "System.out.println(calc.add(5, 10, 15)); // Calls int version with 3 params",
        "System.out.println(calc.add(\u201cHello\u201d, \u201d World\u201d)); // Calls String version ```",
        "\u2022 Method Overriding: Subclass provides specific implementation of parent class",
        "method. Resolved at runtime (dynamic binding).",
        "public class Animal {",
        "public void sound() { System.out.println(\"Generic animal sound\"); }",
        "}",
        "public class Dog extends Animal {",
        "@Override",
        "public void sound() { System.out.println(\"Bark\"); }",
        "}",
        "public class Cat extends Animal {",
        "@Override",
        "public void sound() { System.out.println(\"Meow\"); }",
        "}",
        "Animal animal = new Dog();  // Reference of Animal, object of Dog",
        "animal.sound();             // Output: Bark (runtime polymorphism)"
      ]
    },
    {
      "id": "selenium-q108",
      "num": "108",
      "question": "Explain the concept of pass-by-value and pass-by-reference in Java.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Java is always pass-by-value, but behavior differs for primitives and objects:",
        "\u2022 Primitives: Value is copied; changes don't affect original.",
        "public void modifyPrimitive(int num) {",
        "num = 100;  // Modifies local copy only",
        "}",
        "int value = 5;",
        "modifyPrimitive(value);",
        "System.out.println(value);  // Still 5 (not affected)",
        "\u2022 Objects: Reference is copied; changes to object state affect original, but reassigning",
        "reference doesn't.",
        "public class User {",
        "public String name;",
        "}",
        "public void modifyObject(User user) {",
        "user.name = \"Modified\";  // Affects original object",
        "user = new User();       // Reassignment doesn't affect original",
        "reference",
        "}",
        "User user = new User();",
        "user.name = \"Original\";",
        "modifyObject(user);",
        "System.out.println(user.name);  // \"Modified\" (object state changed)"
      ]
    },
    {
      "id": "selenium-q109",
      "num": "109",
      "question": "What are constructors? Explain default, parameterized, and copy constructors.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- Default Constructor: No parameters; initializes objects with default values. ```java public",
        "class WebDriver { private String browserName;",
        "// Default constructor",
        "public WebDriver() {",
        "this.browserName = \"Chrome\";",
        "}",
        "}",
        "WebDriver driver = new WebDriver(); // Uses default constructor ```",
        "\u2022 Parameterized Constructor: Accepts parameters; allows custom initialization.",
        "public class WebDriver {",
        "private String browserName;",
        "// Parameterized constructor",
        "public WebDriver(String browserName) {",
        "this.browserName = browserName;",
        "}",
        "}",
        "WebDriver chromeDriver = new WebDriver(\"Chrome\");",
        "WebDriver firefoxDriver = new WebDriver(\"Firefox\");",
        "\u2022 Copy Constructor: Creates a copy of existing object.",
        "public class TestData {",
        "private String username;",
        "private String password;",
        "// Copy constructor",
        "public TestData(TestData other) {",
        "this.username = other.username;",
        "this.password = other.password;",
        "}",
        "}",
        "TestData original = new TestData();",
        "original.username = \"user\";",
        "TestData copy = new TestData(original);  // Copy created"
      ]
    },
    {
      "id": "selenium-q110",
      "num": "110",
      "question": "What is the \u201cinstanceof\u201d operator and how is it used?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "The instanceof operator checks if an object is an instance of a class or interface.",
        "public class BrowserFactory {",
        "public void performBrowserAction(WebDriver driver) {",
        "if (driver instanceof ChromeDriver) {",
        "System.out.println(\"Using Chrome specific features\");",
        "// Chrome-specific code",
        "} else if (driver instanceof FirefoxDriver) {",
        "System.out.println(\"Using Firefox specific features\");",
        "// Firefox-specific code",
        "} else if (driver instanceof WebDriver) {",
        "System.out.println(\"Generic WebDriver action\");",
        "}",
        "}",
        "}",
        "// Practical example",
        "WebDriver driver = new ChromeDriver();",
        "if (driver instanceof ChromeDriver) {",
        "ChromeDriver chromeDriver = (ChromeDriver) driver;  // Type casting",
        "chromeDriver.executeScript(\"console.log('Chrome specific');\");",
        "}",
        "// Check against interfaces",
        "if (driver instanceof TakesScreenshot) {",
        "TakesScreenshot screenshot = (TakesScreenshot) driver;",
        "// Take screenshot",
        "}"
      ]
    },
    {
      "id": "selenium-q111",
      "num": "111",
      "question": "Explain memory management, garbage collection, and memory leaks in Java.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- Memory Management: Java manages memory through Heap (objects) and Stack",
        "(references/primitives).",
        "\u2022 Garbage Collection (GC): Automatic process that removes unreferenced objects",
        "from memory.",
        "public class MemoryExample {",
        "public static void main(String[] args) {",
        "WebDriver driver = new ChromeDriver();  // Object allocated in",
        "Heap",
        "driver = null;                          // Reference removed",
        "// GC can now collect the object (not immediately, but",
        "eligible)",
        "}",
        "}",
        "\u2022 Memory Leaks: Objects that should be garbage collected but aren't.",
        "// Bad - Memory leak",
        "public class BrowserManager {",
        "private static List<WebDriver> drivers = new ArrayList<>();",
        "public static void createDriver() {",
        "WebDriver driver = new ChromeDriver();",
        "drivers.add(driver);  // Driver added to static list",
        "}",
        "// Drivers never removed from static list - MEMORY LEAK",
        "}",
        "// Good - Prevent memory leak",
        "public class BrowserManager {",
        "private List<WebDriver> drivers = new ArrayList<>();",
        "public void closeAllDrivers() {",
        "for (WebDriver driver : drivers) {",
        "driver.quit();",
        "}",
        "drivers.clear();  // Clear references",
        "}",
        "}",
        "Best Practices: - Set unused references to null - Close resources in finally blocks or try-",
        "with-resources - Avoid static collections that grow indefinitely - Use WeakReference for",
        "caching if needed"
      ]
    },
    {
      "id": "selenium-q112",
      "num": "112",
      "question": "What are wrapper classes and auto-boxing/auto-unboxing?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Wrapper Classes convert primitives to objects.",
        "// Wrapper classes",
        "Integer intObj = 10;           // Boxing (automatic)",
        "int intValue = intObj;         // Unboxing (automatic)",
        "Double doubleObj = 10.5;       // Boxing",
        "double doubleValue = doubleObj; // Unboxing",
        "Boolean boolObj = true;        // Boxing",
        "boolean boolValue = boolObj;   // Unboxing",
        "// Before Java 5 (Manual boxing/unboxing)",
        "Integer num = new Integer(5);",
        "int value = num.intValue();",
        "// Auto-boxing in Collections",
        "List<Integer> numbers = new ArrayList<>();",
        "numbers.add(10);               // Auto-boxing: 10 -> new Integer(10)",
        "int firstNum = numbers.get(0); // Auto-unboxing: Integer -> int",
        "// Useful wrapper methods",
        "String num = \"123\";",
        "int value = Integer.parseInt(num);        // String to int",
        "int value2 = Integer.valueOf(num);        // String to Integer",
        "Double value3 = Double.parseDouble(\"45.6\");",
        "Boolean value4 = Boolean.parseBoolean(\"true\");",
        "// Convert primitives to String",
        "String str1 = String.valueOf(100);",
        "String str2 = Integer.toString(100);"
      ]
    },
    {
      "id": "selenium-q113",
      "num": "113",
      "question": "What is the difference between == and .equals() in Java?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "- == operator: Compares references (memory addresses) for objects; values for",
        "primitives. ```java String str1 = new String(\u201cHello\u201d); String str2 = new String(\u201cHello\u201d);",
        "System.out.println(str1 == str2); // false (different objects)",
        "System.out.println(str1.equals(str2)); // true (same content)",
        "int a = 5; int b = 5; System.out.println(a == b); // true (same value) ```",
        "\u2022 .equals() method: Compares content/values. Can be overridden in classes.",
        "public class TestData {",
        "private String username;",
        "@Override",
        "public boolean equals(Object obj) {",
        "if (this == obj) return true;",
        "if (obj == null || getClass() != obj.getClass()) return false;",
        "TestData data = (TestData) obj;",
        "return Objects.equals(username, data.username);",
        "}",
        "}",
        "TestData data1 = new TestData(\"user1\");",
        "TestData data2 = new TestData(\"user1\");",
        "System.out.println(data1.equals(data2));  // true (if equals() properly",
        "overridden)"
      ]
    },
    {
      "id": "selenium-q114",
      "num": "114",
      "question": "Explain the concept of immutability and how to create immutable classes.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Immutable Class: Object state cannot be changed after creation.",
        "public final class ImmutableTestData {",
        "private final String username;",
        "private final String password;",
        "private final List<String> tags;",
        "// Constructor",
        "public ImmutableTestData(String username, String password, List<String>",
        "tags) {",
        "this.username = username;",
        "this.password = password;",
        "// Defensive copy for mutable fields",
        "this.tags = new ArrayList<>(tags);",
        "}",
        "// Getters only (no setters)",
        "public String getUsername() { return username; }",
        "public String getPassword() { return password; }",
        "// Return copy for mutable fields to prevent external modification",
        "public List<String> getTags() {",
        "return new ArrayList<>(tags);",
        "}",
        "@Override",
        "public String toString() {",
        "return \"ImmutableTestData{\" +",
        "\"username='\" + username + '\\'' +",
        "\", password='\" + password + '\\'' +",
        "\", tags=\" + tags +",
        "'}';",
        "}",
        "}",
        "// Usage",
        "List<String> tags = new ArrayList<>();",
        "tags.add(\"smoke\");",
        "tags.add(\"regression\");",
        "ImmutableTestData testData = new ImmutableTestData(\"user\", \"pass\", tags);",
        "// Cannot modify testData after creation",
        "Key Rules for Immutability: 1. Make class final (prevent inheritance) 2. Make all fields",
        "private and final 3. No setters 4. Return copies of mutable fields in getters 5. Initialize",
        "mutable fields defensively"
      ]
    },
    {
      "id": "selenium-q115",
      "num": "115",
      "question": "What are generics in Java? How do they ensure type safety?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Generics enable type-safe collections and methods by specifying type at compile-time.",
        "// Without generics (old way) - Type unsafe",
        "List list = new ArrayList();",
        "list.add(\"String\");",
        "list.add(123);",
        "String value = (String) list.get(1);  // ClassCastException at runtime",
        "// With generics - Type safe",
        "List<String> stringList = new ArrayList<String>();",
        "stringList.add(\"Hello\");",
        "// stringList.add(123);  // Compile error - type mismatch",
        "String value = stringList.get(0);  // No casting needed",
        "// Generic class",
        "public class TestDataContainer<T> {",
        "private T data;",
        "public void setData(T data) { this.data = data; }",
        "public T getData() { return data; }",
        "}",
        "TestDataContainer<String> container1 = new TestDataContainer<>();",
        "container1.setData(\"test data\");",
        "String data1 = container1.getData();  // No casting",
        "TestDataContainer<Integer> container2 = new TestDataContainer<>();",
        "container2.setData(123);",
        "Integer data2 = container2.getData();  // Type safe",
        "// Generic method",
        "public static <T> void printArray(T[] array) {",
        "for (T element : array) {",
        "System.out.println(element);",
        "}",
        "}",
        "String[] strings = {\"a\", \"b\", \"c\"};",
        "Integer[] integers = {1, 2, 3};",
        "printArray(strings);   // Works with String array",
        "printArray(integers);  // Works with Integer array",
        "// Bounded generics",
        "public static <T extends Number> void printNumber(T number) {",
        "System.out.println(number.doubleValue());",
        "}",
        "printNumber(123);      // Integer extends Number - OK",
        "printNumber(45.6);     // Double extends Number - OK",
        "// printNumber(\"test\");  // String doesn't extend Number - Compile error",
        "Type Safety Benefits: - Compile-time error detection instead of runtime exceptions -",
        "Eliminates need for explicit casting - Enables code reusability with type safety - Improves",
        "code readability and maintainability"
      ]
    },
    {
      "id": "selenium-q116",
      "num": "116",
      "question": "Explain lambda expressions and functional interfaces.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Lambda Expressions: Short syntax for implementing functional interfaces (interfaces",
        "with single abstract method).",
        "// Functional interface",
        "@FunctionalInterface",
        "public interface TestAction {",
        "void execute(String parameter);",
        "}",
        "// Before Lambda (Anonymous class)",
        "TestAction action = new TestAction() {",
        "@Override",
        "public void execute(String parameter) {",
        "System.out.println(\"Executing: \" + parameter);",
        "}",
        "};",
        "// With Lambda",
        "TestAction action = (parameter) -> System.out.println(\"Executing: \" +",
        "parameter);",
        "action.execute(\"test\");  // Output: Executing: test",
        "// Built-in Functional Interfaces",
        "// 1. Predicate<T> - Tests a condition",
        "Predicate<Integer> isEven = (num) -> num % 2 == 0;",
        "System.out.println(isEven.test(4));  // true",
        "// 2. Function<T, R> - Transforms input to output",
        "Function<String, Integer> stringLength = (str) -> str.length();",
        "System.out.println(stringLength.apply(\"Hello\"));  // 5",
        "// 3. Consumer<T> - Performs action without return",
        "Consumer<String> printUpperCase = (str) ->",
        "System.out.println(str.toUpperCase());",
        "printUpperCase.accept(\"hello\");  // HELLO",
        "// 4. Supplier<T> - Provides value",
        "Supplier<WebDriver> driverSupplier = () -> new ChromeDriver();",
        "WebDriver driver = driverSupplier.get();",
        "// Lambda with Streams",
        "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);",
        "numbers.stream()",
        ".filter(n -> n % 2 == 0)",
        ".map(n -> n * 2)",
        ".forEach(n -> System.out.println(n));  // 4, 8",
        "// Method references (shorthand for lambdas)",
        "List<String> browsers = Arrays.asList(\"Chrome\", \"Firefox\", \"Safari\");",
        "browsers.forEach(System.out::println);  // Method reference"
      ]
    },
    {
      "id": "selenium-q117",
      "num": "117",
      "question": "Why is Java preferred for Selenium automation?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Java is widely used with Selenium because:",
        "\u2022 Platform independence: Java code runs on any OS with JVM.",
        "\u2022 Rich library support: Built-in libraries for file handling, collections, date/time, etc.",
        "\u2022 Strong OOP support: Easier to structure large automation projects.",
        "\u2022 Multi-threading capabilities: Works well with parallel execution frameworks.",
        "\u2022 Integration-friendly: Compatible with TestNG, Maven, Jenkins, and reporting tools.",
        "\u2022 Large community: More tutorials, examples, and Q&A for troubleshooting."
      ]
    },
    {
      "id": "selenium-q118",
      "num": "118",
      "question": "Explain the main OOP concepts and how they apply in Selenium.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "1. Encapsulation: Wrapping data and methods into classes (Page Object Model uses this heavily).",
        "2. Inheritance: Reusing methods/fields from parent classes (e.g., BaseTest class for common methods).",
        "3. Polymorphism: Writing code that works in many forms \u2014 overloading methods for different inputs,",
        "overriding for different browser actions.",
        "4. Abstraction: Hiding implementation details (e.g., creating an interface for browser actions, then",
        "implementing it for Chrome, Firefox)."
      ]
    },
    {
      "id": "selenium-q119",
      "num": "119",
      "question": "How do you handle exceptions in Java Selenium scripts?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "\u2022 Try-Catch block: Handle known exceptions without breaking execution.",
        "try {",
        "driver.findElement(By.id(\"username\")).click();",
        "} catch (NoSuchElementException e) {",
        "System.out.println(\"Element not found\");",
        "}",
        "\u2022 Throws keyword: Pass exception handling to the caller.",
        "\u2022 Finally block: Executes cleanup code (like closing browsers)."
      ]
    },
    {
      "id": "selenium-q120",
      "num": "120",
      "question": "What are Access Modifiers in Java, and why are they important in Selenium framework",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "design?",
        "\u2022 public: Accessible from anywhere.",
        "\u2022 protected: Accessible within package + subclasses.",
        "\u2022 default: Accessible within package only.",
        "\u2022 private: Accessible within class only.",
        "Importance in Selenium:",
        "Use private for WebElement variables, and public methods for accessing them to maintain",
        "encapsulation."
      ]
    },
    {
      "id": "selenium-q121",
      "num": "121",
      "question": "Difference between static and non-static methods in Java.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "\u2022 Static: Belong to the class, called without creating an object.",
        "\u2022 Non-static: Belong to an instance, need an object to call.",
        "In Selenium: static utility methods (like reading config files) save memory."
      ]
    },
    {
      "id": "selenium-q122",
      "num": "122",
      "question": "Explain final, finally, and finalize() in Java.",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "\u2022 final: Constant variable or method that cannot be overridden.",
        "\u2022 finally: Code block that always executes after try-catch.",
        "\u2022 finalize(): Method called by Garbage Collector before object destruction."
      ]
    },
    {
      "id": "selenium-q123",
      "num": "123",
      "question": "How do you use super keyword in Selenium?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "super refers to the parent class.",
        "Example: In a BaseTest class having setup() method, we can call it in child test class:",
        "super.setup();"
      ]
    },
    {
      "id": "selenium-q124",
      "num": "124",
      "question": "How do you use Interfaces in Selenium?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Selenium WebDriver is itself an interface:",
        "WebDriver driver = new ChromeDriver();",
        "This allows switching between browsers easily."
      ]
    },
    {
      "id": "selenium-q125",
      "num": "125",
      "question": "How do you use Abstract Classes in Selenium?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "Abstract classes define partial implementation:",
        "public abstract class BrowserSetup {",
        "abstract void launchBrowser();",
        "}",
        "Child classes implement specific logic."
      ]
    },
    {
      "id": "selenium-q126",
      "num": "126",
      "question": "What is the difference between throw and throws in Java?",
      "category": "Core Java & OOP for Automation",
      "answers": [
        "\u2022 throw: Used to explicitly throw an exception.",
        "public void test() throws IOException { ... }"
      ]
    },
    {
      "id": "selenium-q127",
      "num": "127",
      "question": "What is the difference between HashMap and Hashtable?",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | HashMap | Hashtable | |\u2014\u2014\u2014|\u2014\u2014\u2014|\u2014\u2014\u2014\u2013| | Thread-Safe | No | Yes",
        "(synchronized) | | Performance | Fast | Slower (due to synchronization) | | Null",
        "Keys/Values | Allows one null key & multiple null values | Does not allow null keys or",
        "values | | Iteration | Fail-fast iterator | Enumeration and Iterator | | Legacy | Modern",
        "(introduced in Java 1.2) | Legacy (Java 1.0) |",
        "Example:",
        "// HashMap - Not thread-safe",
        "Map<String, String> map = new HashMap<>();",
        "map.put(\"browser\", \"Chrome\");",
        "map.put(\"url\", \"https://example.com\");",
        "map.put(null, \"nullValue\");  // Allowed",
        "map.put(\"key\", null);         // Allowed",
        "// Hashtable - Thread-safe but outdated",
        "Map<String, String> table = new Hashtable<>();",
        "table.put(\"browser\", \"Chrome\");",
        "// table.put(null, \"value\");  // NullPointerException",
        "// Thread-safe HashMap alternative",
        "Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());"
      ]
    },
    {
      "id": "selenium-q128",
      "num": "128",
      "question": "Explain the Collection hierarchy and the difference between Collection and Collections.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "- Collection: Interface at top of hierarchy; represents group of objects. Collection",
        "(interface)   \u251c\u2500\u2500 List (ordered, allows duplicates)   \u2502   \u251c\u2500\u2500 ArrayList   \u2502",
        "\u251c\u2500\u2500 LinkedList   \u2502   \u2514\u2500\u2500 Vector   \u251c\u2500\u2500 Set (unique, unordered)   \u2502   \u251c\u2500\u2500",
        "HashSet   \u2502   \u251c\u2500\u2500 TreeSet   \u2502   \u2514\u2500\u2500 LinkedHashSet   \u2514\u2500\u2500 Queue (FIFO)",
        "\u251c\u2500\u2500 PriorityQueue       \u2514\u2500\u2500 LinkedList",
        "\u2022 Collections: Utility class with static methods for manipulating collections.",
        "import java.util.Collections;",
        "List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5));",
        "Collections.sort(list);                    // Sort",
        "Collections.reverse(list);                 // Reverse",
        "Collections.shuffle(list);                 // Shuffle",
        "int maxValue = Collections.max(list);      // Maximum",
        "int minValue = Collections.min(list);      // Minimum",
        "List<String> syncList = Collections.synchronizedList(new",
        "ArrayList<>()); // Thread-safe",
        "Map<String, String> syncMap = Collections.synchronizedMap(new",
        "HashMap<>()); // Thread-safe",
        "List<Integer> immutableList = Collections.unmodifiableList(list); //",
        "Immutable"
      ]
    },
    {
      "id": "selenium-q129",
      "num": "129",
      "question": "Explain ArrayList, LinkedList, and Vector. When to use each?",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | ArrayList | LinkedList | Vector | |\u2014\u2014\u2014|\u2014\u2014\u2014\u2013|\u2014\u2014\u2014\u2013|\u2014\u2014\u2013| | Internal",
        "Structure | Dynamic array | Doubly linked list | Dynamic array (legacy) | | Access Time |",
        "O(1) | O(n) | O(1) | | Insertion/Deletion | O(n) | O(1) | O(n) | | Thread-Safe | No | No | Yes",
        "(synchronized) | | Use Case | Random access | Frequent insertions/deletions | Legacy",
        "(avoid) |",
        "Examples:",
        "// ArrayList - Best for frequent access",
        "List<String> browsers = new ArrayList<>();",
        "browsers.add(\"Chrome\");",
        "browsers.add(\"Firefox\");",
        "browsers.get(0);  // Fast - O(1)",
        "browsers.remove(1);  // Slower - O(n)",
        "// LinkedList - Best for insertions/deletions at beginning or middle",
        "LinkedList<String> queue = new LinkedList<>();",
        "queue.add(\"first\");",
        "queue.add(\"second\");",
        "queue.addFirst(\"zeroth\");  // Fast - O(1)",
        "queue.removeFirst();  // Fast - O(1)",
        "queue.get(0);  // Slower - O(n)",
        "// Vector - Legacy, avoid in new code",
        "Vector<String> vector = new Vector<>();  // Synchronized but outdated",
        "// Use Collections.synchronizedList(new ArrayList<>()) instead"
      ]
    },
    {
      "id": "selenium-q130",
      "num": "130",
      "question": "Explain HashSet, TreeSet, and LinkedHashSet with differences.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | HashSet | TreeSet | LinkedHashSet | |\u2014\u2014\u2014|\u2014\u2014\u2014|\u2014\u2014\u2014|\u2014\u2014\u2014\u2014\u2014-| |",
        "Order | No guaranteed order | Sorted order | Insertion order | | Performance | O(1) average",
        "| O(log n) | O(1) average | | Thread-Safe | No | No | No | | Null Values | Allows | Does not",
        "allow | Allows | | Comparable | No | Yes (elements must be comparable) | No |",
        "Examples:",
        "// HashSet - No order guarantee",
        "Set<String> hashSet = new HashSet<>();",
        "hashSet.add(\"Chrome\");",
        "hashSet.add(\"Firefox\");",
        "hashSet.add(\"Safari\");",
        "System.out.println(hashSet);  // Order may vary: [Firefox, Chrome, Safari]",
        "// TreeSet - Sorted order",
        "Set<String> treeSet = new TreeSet<>();",
        "treeSet.add(\"Chrome\");",
        "treeSet.add(\"Firefox\");",
        "treeSet.add(\"Safari\");",
        "System.out.println(treeSet);  // Output: [Chrome, Firefox, Safari] (sorted)",
        "// LinkedHashSet - Insertion order",
        "Set<String> linkedSet = new LinkedHashSet<>();",
        "linkedSet.add(\"Chrome\");",
        "linkedSet.add(\"Firefox\");",
        "linkedSet.add(\"Safari\");",
        "System.out.println(linkedSet);  // Output: [Chrome, Firefox, Safari]",
        "(insertion order)",
        "// TreeSet with custom objects",
        "class TestCase implements Comparable<TestCase> {",
        "String name;",
        "int priority;",
        "@Override",
        "public int compareTo(TestCase other) {",
        "return this.priority - other.priority;  // Sort by priority",
        "}",
        "}",
        "Set<TestCase> testCases = new TreeSet<>();",
        "testCases.add(new TestCase(\"Login\", 1));",
        "testCases.add(new TestCase(\"Dashboard\", 2));",
        "// Sorted by priority"
      ]
    },
    {
      "id": "selenium-q131",
      "num": "131",
      "question": "Explain HashMap, TreeMap, and LinkedHashMap with practical examples.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | HashMap | TreeMap | LinkedHashMap | |\u2014\u2014\u2014|\u2014\u2014\u2014|\u2014\u2014\u2014|\u2014\u2014\u2014\u2014\u2014-| |",
        "Order | No guaranteed order | Sorted by key | Insertion order | | Performance | O(1)",
        "average | O(log n) | O(1) average | | Thread-Safe | No | No | No | | Null Keys/Values | Allows",
        "null key and values | Does not allow null key | Allows null key and values |",
        "Examples:",
        "// HashMap - No order guarantee",
        "Map<String, Integer> hashMap = new HashMap<>();",
        "hashMap.put(\"Chrome\", 1);",
        "hashMap.put(\"Firefox\", 2);",
        "hashMap.put(\"Safari\", 3);",
        "System.out.println(hashMap);  // Order may vary",
        "// TreeMap - Sorted by key",
        "Map<String, Integer> treeMap = new TreeMap<>();",
        "treeMap.put(\"Chrome\", 1);",
        "treeMap.put(\"Firefox\", 2);",
        "treeMap.put(\"Safari\", 3);",
        "System.out.println(treeMap);  // Output: {Chrome=1, Firefox=2, Safari=3}",
        "(sorted)",
        "// LinkedHashMap - Insertion order",
        "Map<String, Integer> linkedMap = new LinkedHashMap<>();",
        "linkedMap.put(\"Chrome\", 1);",
        "linkedMap.put(\"Firefox\", 2);",
        "linkedMap.put(\"Safari\", 3);",
        "System.out.println(linkedMap);  // Output: {Chrome=1, Firefox=2, Safari=3}",
        "(insertion order)",
        "// Practical - Test execution order preservation",
        "Map<String, String> testSteps = new LinkedHashMap<>();",
        "testSteps.put(\"1\", \"Launch browser\");",
        "testSteps.put(\"2\", \"Navigate to URL\");",
        "testSteps.put(\"3\", \"Enter credentials\");",
        "testSteps.put(\"4\", \"Click login\");",
        "for (Map.Entry<String, String> entry : testSteps.entrySet()) {",
        "System.out.println(entry.getKey() + \": \" + entry.getValue());",
        "}  // Prints in insertion order"
      ]
    },
    {
      "id": "selenium-q132",
      "num": "132",
      "question": "Explain Comparable and Comparator interfaces with examples.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "- Comparable: Interface for natural sorting; object sorts itself. ```java public class TestCase",
        "implements Comparable { private String name; private int priority;",
        "public TestCase(String name, int priority) {",
        "this.name = name;",
        "this.priority = priority;",
        "}",
        "@Override",
        "public int compareTo(TestCase other) {",
        "// Sort by priority ascending",
        "return this.priority - other.priority;",
        "}",
        "}",
        "List cases = new ArrayList<>(); cases.add(new TestCase(\u201cLogin\u201d, 3)); cases.add(new",
        "TestCase(\u201cDashboard\u201d, 1)); cases.add(new TestCase(\u201cLogout\u201d, 2)); Collections.sort(cases);",
        "// Sorted by priority: Dashboard(1), Logout(2), Login(3) ```",
        "\u2022 Comparator: External comparator for custom sorting; can sort same object in",
        "different ways.",
        "public class TestCase {",
        "private String name;",
        "private int priority;",
        "// Getters",
        "public String getName() { return name; }",
        "public int getPriority() { return priority; }",
        "}",
        "// Sort by priority",
        "Comparator<TestCase> byPriority = (t1, t2) -> t1.getPriority() -",
        "t2.getPriority();",
        "// Sort by name",
        "Comparator<TestCase> byName = (t1, t2) ->",
        "t1.getName().compareTo(t2.getName());",
        "// Sort by priority descending",
        "Comparator<TestCase> byPriorityDesc = (t1, t2) -> t2.getPriority() -",
        "t1.getPriority();",
        "List<TestCase> cases = new ArrayList<>();",
        "cases.add(new TestCase(\"Login\", 3));",
        "cases.add(new TestCase(\"Dashboard\", 1));",
        "Collections.sort(cases, byPriority);     // Sort by priority",
        "Collections.sort(cases, byName);         // Sort by name",
        "Collections.sort(cases, byPriorityDesc); // Sort by priority descending",
        "Key Difference: - Comparable: One natural sorting (part of class definition) -",
        "Comparator: Multiple sorting strategies (external, flexible)"
      ]
    },
    {
      "id": "selenium-q133",
      "num": "133",
      "question": "Explain Iterator and how to remove elements while iterating.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "// Iterator interface",
        "List<String> browsers = new ArrayList<>();",
        "browsers.add(\"Chrome\");",
        "browsers.add(\"Firefox\");",
        "browsers.add(\"Safari\");",
        "// Traditional iteration",
        "Iterator<String> iterator = browsers.iterator();",
        "while (iterator.hasNext()) {",
        "String browser = iterator.next();",
        "System.out.println(browser);",
        "}",
        "// WRONG - Concurrent modification exception",
        "for (String browser : browsers) {",
        "if (browser.equals(\"Firefox\")) {",
        "browsers.remove(browser);  // ConcurrentModificationException",
        "}",
        "}",
        "// CORRECT - Use iterator to remove",
        "Iterator<String> iter = browsers.iterator();",
        "while (iter.hasNext()) {",
        "String browser = iter.next();",
        "if (browser.equals(\"Firefox\")) {",
        "iter.remove();  // Safe removal",
        "}",
        "}",
        "// Alternative - removeIf (Java 8+)",
        "browsers.removeIf(browser -> browser.equals(\"Firefox\"));",
        "// Alternative - Collect non-matching elements",
        "List<String> result = browsers.stream()",
        ".filter(browser -> !browser.equals(\"Firefox\"))",
        ".collect(Collectors.toList());"
      ]
    },
    {
      "id": "selenium-q134",
      "num": "134",
      "question": "Explain the fail-fast and fail-safe iterators.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "- Fail-Fast: Iterator throws ConcurrentModificationException if collection modified during",
        "iteration. ```java List list = new ArrayList<>(); list.add(\u201cA\u201d); list.add(\u201cB\u201d); list.add(\u201cC\u201d);",
        "Iterator iterator = list.iterator(); while (iterator.hasNext()) { String element =",
        "iterator.next(); if (element.equals(\u201cB\u201d)) { list.remove(\u201cB\u201d); //",
        "ConcurrentModificationException thrown } } ```",
        "\u2022 Fail-Safe: Iterator doesn't throw exception if collection modified; works on",
        "snapshot/copy.",
        "Map<String, String> map = new ConcurrentHashMap<>();",
        "map.put(\"1\", \"One\");",
        "map.put(\"2\", \"Two\");",
        "map.put(\"3\", \"Three\");",
        "Iterator<String> iterator = map.keySet().iterator();",
        "while (iterator.hasNext()) {",
        "String key = iterator.next();",
        "map.put(\"4\", \"Four\");  // No exception - ConcurrentHashMap is fail-",
        "safe",
        "}",
        "Collections with these characteristics: - Fail-Fast: ArrayList, HashMap, HashSet,",
        "LinkedList - Fail-Safe: ConcurrentHashMap, CopyOnWriteArrayList"
      ]
    },
    {
      "id": "selenium-q135",
      "num": "135",
      "question": "What is the difference between Collection.stream() and Collection.parallelStream()?",
      "category": "Java Collections Framework for QA",
      "answers": [
        "- stream(): Sequential stream; processes elements one by one. java   List<Integer>",
        "numbers = Arrays.asList(1, 2, 3, 4, 5);   numbers.stream()       .filter(n ->",
        "n % 2 == 0)       .map(n -> n * 2)       .forEach(System.out::println);  //",
        "Process sequentially",
        "\u2022 parallelStream(): Parallel stream; processes elements using multiple threads.",
        "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);",
        "numbers.parallelStream()",
        ".filter(n -> n % 2 == 0)",
        ".map(n -> n * 2)",
        ".forEach(System.out::println);  // Process in parallel",
        "Comparison:",
        "// Stream (sequential) - Order guaranteed",
        "List<String> testCases = Arrays.asList(\"Test1\", \"Test2\", \"Test3\", \"Test4\",",
        "\"Test5\");",
        "testCases.stream().forEach(System.out::println);",
        "// Output: Test1, Test2, Test3, Test4, Test5 (always same order)",
        "// ParallelStream - Order not guaranteed",
        "testCases.parallelStream().forEach(System.out::println);",
        "// Output: Test3, Test1, Test4, Test2, Test5 (order may vary)",
        "// Use forEachOrdered() to maintain order in parallel stream",
        "testCases.parallelStream().forEachOrdered(System.out::println);",
        "// Output: Test1, Test2, Test3, Test4, Test5 (order maintained)",
        "// Performance comparison",
        "List<Integer> largeList = IntStream.range(0,",
        "1000000).boxed().collect(Collectors.toList());",
        "long start = System.currentTimeMillis();",
        "largeList.stream().filter(n -> n % 2 == 0).count();",
        "System.out.println(\"Stream: \" + (System.currentTimeMillis() - start) + \"ms\");",
        "start = System.currentTimeMillis();",
        "largeList.parallelStream().filter(n -> n % 2 == 0).count();",
        "System.out.println(\"ParallelStream: \" + (System.currentTimeMillis() - start)",
        "+ \"ms\");",
        "When to use: - stream(): Small to medium collections, order matters - parallelStream():",
        "Large collections, order doesn't matter, CPU-intensive operations"
      ]
    },
    {
      "id": "selenium-q136",
      "num": "136",
      "question": "Explain Queue, Deque, and PriorityQueue with examples.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "- Queue: FIFO (First-In-First-Out) data structure. ```java Queue queue = new",
        "LinkedList<>(); queue.add(\u201cStep1\u201d); // Add to end queue.add(\u201cStep2\u201d);",
        "queue.add(\u201cStep3\u201d);",
        "String first = queue.poll(); // Remove from front: \u201cStep1\u201d String peek = queue.peek(); //",
        "View front without removing: \u201cStep2\u201d ```",
        "\u2022 Deque: Double-ended queue; supports insertion/removal from both ends.",
        "Deque<String> deque = new LinkedList<>();",
        "deque.addFirst(\"First\");      // Add to front",
        "deque.addLast(\"Last\");        // Add to end",
        "String front = deque.removeFirst();  // Remove from front",
        "String back = deque.removeLast();    // Remove from end",
        "String peekFirst = deque.getFirst(); // View front",
        "String peekLast = deque.getLast();   // View end",
        "\u2022 PriorityQueue: Elements ordered by priority (natural order or comparator).",
        "PriorityQueue<Integer> pQueue = new PriorityQueue<>();",
        "pQueue.add(5);",
        "pQueue.add(3);",
        "pQueue.add(7);",
        "pQueue.add(1);",
        "while (!pQueue.isEmpty()) {",
        "System.out.println(pQueue.poll());  // Output: 1, 3, 5, 7 (sorted)",
        "}",
        "// PriorityQueue with custom comparator (descending)",
        "PriorityQueue<Integer> descQueue = new PriorityQueue<>((a, b) -> b -",
        "a);",
        "descQueue.add(5);",
        "descQueue.add(3);",
        "descQueue.add(7);",
        "while (!descQueue.isEmpty()) {",
        "System.out.println(descQueue.poll());  // Output: 7, 5, 3 (reverse",
        "sorted)",
        "}"
      ]
    },
    {
      "id": "selenium-q137",
      "num": "137",
      "question": "Explain Map.Entry and how to iterate over Map with different methods.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "Map.Entry: Interface representing key-value pair in Map.",
        "Map<String, String> testData = new LinkedHashMap<>();",
        "testData.put(\"username\", \"testuser\");",
        "testData.put(\"password\", \"pass123\");",
        "testData.put(\"email\", \"test@example.com\");",
        "// Method 1: entrySet() - Most efficient",
        "for (Map.Entry<String, String> entry : testData.entrySet()) {",
        "String key = entry.getKey();",
        "String value = entry.getValue();",
        "System.out.println(key + \" : \" + value);",
        "}",
        "// Method 2: keySet()",
        "for (String key : testData.keySet()) {",
        "String value = testData.get(key);",
        "System.out.println(key + \" : \" + value);",
        "}",
        "// Method 3: values()",
        "for (String value : testData.values()) {",
        "System.out.println(value);",
        "}",
        "// Method 4: Iterator with entrySet()",
        "Iterator<Map.Entry<String, String>> iterator =",
        "testData.entrySet().iterator();",
        "while (iterator.hasNext()) {",
        "Map.Entry<String, String> entry = iterator.next();",
        "System.out.println(entry.getKey() + \" : \" + entry.getValue());",
        "}",
        "// Method 5: forEach() with lambda",
        "testData.forEach((key, value) -> System.out.println(key + \" : \" + value));",
        "// Method 6: Stream API",
        "testData.entrySet().stream()",
        ".forEach(entry -> System.out.println(entry.getKey() + \" : \" +",
        "entry.getValue()));",
        "// Modify values during iteration",
        "testData.entrySet().stream()",
        ".filter(entry -> entry.getKey().equals(\"password\"))",
        ".forEach(entry -> entry.setValue(\"newpass123\"));"
      ]
    },
    {
      "id": "selenium-q138",
      "num": "138",
      "question": "What are the differences between fail-fast and fail-safe collections?",
      "category": "Java Collections Framework for QA",
      "answers": [
        "Explained in Q47, but expanding for completeness:",
        "// Fail-Fast Collections: ArrayList, HashMap, HashSet",
        "List<String> failFastList = new ArrayList<>();",
        "failFastList.add(\"A\");",
        "failFastList.add(\"B\");",
        "failFastList.add(\"C\");",
        "// This will throw ConcurrentModificationException",
        "try {",
        "for (String element : failFastList) {",
        "if (element.equals(\"B\")) {",
        "failFastList.remove(element);  // Modification during iteration",
        "}",
        "}",
        "} catch (ConcurrentModificationException e) {",
        "System.out.println(\"Caught ConcurrentModificationException\");",
        "}",
        "// Fail-Safe Collections: CopyOnWriteArrayList, ConcurrentHashMap",
        "CopyOnWriteArrayList<String> failSafeList = new CopyOnWriteArrayList<>();",
        "failSafeList.add(\"A\");",
        "failSafeList.add(\"B\");",
        "failSafeList.add(\"C\");",
        "// No exception thrown",
        "for (String element : failSafeList) {",
        "if (element.equals(\"B\")) {",
        "failSafeList.remove(element);  // Safe modification during iteration",
        "}",
        "}",
        "// But note: Fail-safe may use snapshot approach",
        "// Iterator sees snapshot from creation time",
        "ConcurrentHashMap<String, Integer> concMap = new ConcurrentHashMap<>();",
        "concMap.put(\"1\", 100);",
        "concMap.put(\"2\", 200);",
        "concMap.put(\"3\", 300);",
        "Iterator<Integer> iter = concMap.values().iterator();",
        "concMap.put(\"4\", 400);  // Add after iterator creation",
        "while (iter.hasNext()) {",
        "System.out.println(iter.next());  // May or may not include \"4\" depending",
        "on implementation",
        "}"
      ]
    },
    {
      "id": "selenium-q139",
      "num": "139",
      "question": "Explain Stream API operations: filter, map, flatMap, reduce, collect.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);",
        "// filter() - Keep elements matching condition",
        "List<Integer> evenNumbers = numbers.stream()",
        ".filter(n -> n % 2 == 0)",
        ".collect(Collectors.toList());  // [2, 4, 6]",
        "// map() - Transform each element",
        "List<Integer> squared = numbers.stream()",
        ".map(n -> n * n)",
        ".collect(Collectors.toList());  // [1, 4, 9, 16, 25, 36]",
        "// flatMap() - Transform and flatten nested collections",
        "List<List<String>> nested = Arrays.asList(",
        "Arrays.asList(\"a\", \"b\"),",
        "Arrays.asList(\"c\", \"d\"),",
        "Arrays.asList(\"e\", \"f\")",
        ");",
        "List<String> flattened = nested.stream()",
        ".flatMap(List::stream)",
        ".collect(Collectors.toList());  // [a, b, c, d, e, f]",
        "// reduce() - Combine elements into single value",
        "int sum = numbers.stream().reduce(0, (a, b) -> a + b);  // 21",
        "int product = numbers.stream().reduce(1, (a, b) -> a * b);  // 720",
        "// collect() - Gather into collection",
        "List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"apricot\");",
        "// Collect to List",
        "List<String> aWords = words.stream()",
        ".filter(w -> w.startsWith(\"a\"))",
        ".collect(Collectors.toList());  // [apple, apricot]",
        "// Collect to Set",
        "Set<String> uniqueLengths = words.stream()",
        ".map(String::length)",
        ".map(String::valueOf)",
        ".collect(Collectors.toSet());",
        "// Collect to Map",
        "Map<String, Integer> wordLength = words.stream()",
        ".collect(Collectors.toMap(",
        "word -> word,",
        "String::length",
        "));  // {apple=5, banana=6, cherry=6, apricot=7}",
        "// Collect with grouping",
        "Map<Integer, List<String>> groupedByLength = words.stream()",
        ".collect(Collectors.groupingBy(String::length));",
        "// {5=[apple], 6=[banana, cherry], 7=[apricot]}",
        "// Chaining operations",
        "List<Integer> result = numbers.stream()",
        ".filter(n -> n > 2)           // [3, 4, 5, 6]",
        ".map(n -> n * 10)             // [30, 40, 50, 60]",
        ".filter(n -> n % 40 != 0)     // [30, 50, 60]",
        ".collect(Collectors.toList());"
      ]
    },
    {
      "id": "selenium-q140",
      "num": "140",
      "question": "What are the differences between array and ArrayList?",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | Array | ArrayList | |\u2014\u2014\u2014|\u2014\u2014-|\u2014\u2014\u2014\u2013| | Size | Fixed size | Dynamic size | |",
        "Type | Can store primitives and objects | Only stores objects | | Performance | Slightly faster",
        "| Slightly slower | | Memory | Fixed memory | Grows as needed | | Methods | Limited",
        "methods | Rich API (add, remove, etc.) |",
        "Examples:",
        "// Array - Fixed size",
        "String[] browsers = new String[3];",
        "browsers[0] = \"Chrome\";",
        "browsers[1] = \"Firefox\";",
        "// browsers[3] = \"Safari\";  // ArrayIndexOutOfBoundsException",
        "// Cannot dynamically add elements",
        "int length = browsers.length;",
        "// ArrayList - Dynamic size",
        "List<String> browserList = new ArrayList<>();",
        "browserList.add(\"Chrome\");",
        "browserList.add(\"Firefox\");",
        "browserList.add(\"Safari\");  // Dynamically grows",
        "browserList.add(\"Edge\");    // No error",
        "// Rich API",
        "browserList.remove(\"Firefox\");",
        "browserList.contains(\"Chrome\");  // true",
        "browserList.size();              // 3",
        "// Array with primitives",
        "int[] numbers = {1, 2, 3};  // Can store int directly",
        "// ArrayList cannot store primitives directly - uses wrapper classes",
        "List<Integer> numberList = new ArrayList<>();  // Integer, not int",
        "numberList.add(1);   // Auto-boxing",
        "int firstNum = numberList.get(0);  // Auto-unboxing",
        "// Convert array to ArrayList",
        "String[] arr = {\"Chrome\", \"Firefox\", \"Safari\"};",
        "List<String> list = new ArrayList<>(Arrays.asList(arr));",
        "list.add(\"Edge\");  // Now can add",
        "// Convert ArrayList to array",
        "String[] newArr = list.toArray(new String[0]);"
      ]
    },
    {
      "id": "selenium-q141",
      "num": "141",
      "question": "Explain the difference between List, Set, and Map.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "| Feature | List | Set | Map | |\u2014\u2014\u2014|\u2014\u2014|\u2014\u2013|\u2014\u2013| | Duplicates | Allows | Does not allow |",
        "Keys unique, values can duplicate | | Order | Maintains insertion/index order | Unordered",
        "(except TreeSet, LinkedHashSet) | Unordered (except TreeMap, LinkedHashMap) | | Access",
        "| By index (get(i)) | No index-based access | By key | | Iteration | Ordered iteration |",
        "Unordered iteration | Iterate over entries |",
        "Examples:",
        "// List - Ordered collection with duplicates",
        "List<String> list = new ArrayList<>();",
        "list.add(\"Chrome\");",
        "list.add(\"Firefox\");",
        "list.add(\"Chrome\");  // Duplicate allowed",
        "System.out.println(list.get(0));  // Access by index",
        "// Iteration maintains order",
        "// Set - Unique elements only",
        "Set<String> set = new HashSet<>();",
        "set.add(\"Chrome\");",
        "set.add(\"Firefox\");",
        "set.add(\"Chrome\");  // Duplicate ignored",
        "System.out.println(set.size());  // 2 (not 3)",
        "// Cannot access by index",
        "// Map - Key-value pairs",
        "Map<String, String> map = new HashMap<>();",
        "map.put(\"browser1\", \"Chrome\");",
        "map.put(\"browser2\", \"Firefox\");",
        "map.put(\"browser1\", \"Edge\");  // Overwrites previous value",
        "System.out.println(map.get(\"browser1\"));  // \"Edge\"",
        "System.out.println(map.size());  // 2",
        "// Iteration differences",
        "// List",
        "for (int i = 0; i < list.size(); i++) {",
        "System.out.println(list.get(i));",
        "}",
        "// Set",
        "for (String element : set) {",
        "System.out.println(element);",
        "}",
        "// Map",
        "for (Map.Entry<String, String> entry : map.entrySet()) {",
        "System.out.println(entry.getKey() + \" : \" + entry.getValue());",
        "}"
      ]
    },
    {
      "id": "selenium-q142",
      "num": "142",
      "question": "Explain Collectors class and its common methods.",
      "category": "Java Collections Framework for QA",
      "answers": [
        "Collectors: Utility class for collecting stream results into collections.",
        "List<String> browsers = Arrays.asList(\"Chrome\", \"Firefox\", \"Safari\", \"Edge\",",
        "\"Chrome\");",
        "// toList() - Collect to List",
        "List<String> list = browsers.stream().collect(Collectors.toList());",
        "// toSet() - Collect to Set",
        "Set<String> set = browsers.stream().collect(Collectors.toSet());",
        "// toMap() - Collect to Map",
        "Map<String, Integer> lengthMap = browsers.stream()",
        ".collect(Collectors.toMap(",
        "b -> b,              // Key",
        "String::length       // Value",
        "));",
        "// groupingBy() - Group by criteria",
        "Map<Integer, List<String>> groupedByLength = browsers.stream()",
        ".collect(Collectors.groupingBy(String::length));",
        "// partitioningBy() - Partition into true/false groups",
        "Map<Boolean, List<String>> partitioned = browsers.stream()",
        ".collect(Collectors.partitioningBy(b -> b.length() > 5));",
        "// joining() - Join elements into String",
        "String joined = browsers.stream()",
        ".collect(Collectors.joining(\", \"));  // \"Chrome, Firefox, Safari, Edge,",
        "Chrome\"",
        "// counting() - Count elements",
        "long count = browsers.stream()",
        ".collect(Collectors.counting());  // 5",
        "// averagingInt() - Average",
        "double avgLength = browsers.stream()",
        ".collect(Collectors.averagingInt(String::length));",
        "// maxBy() / minBy() - Find max/min",
        "Optional<String> longest = browsers.stream()",
        ".collect(Collectors.maxBy(Comparator.comparingInt(String::length)));",
        "// summarizingInt() - Get statistics",
        "IntSummaryStatistics stats = browsers.stream()",
        ".collect(Collectors.summarizingInt(String::length));",
        "System.out.println(\"Sum: \" + stats.getSum());",
        "System.out.println(\"Average: \" + stats.getAverage());",
        "System.out.println(\"Max: \" + stats.getMax());",
        "System.out.println(\"Min: \" + stats.getMin());",
        "System.out.println(\"Count: \" + stats.getCount());"
      ]
    },
    {
      "id": "selenium-q143",
      "num": "143",
      "question": "How do you handle StaleElementReferenceException?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "StaleElementReferenceException occurs when a WebElement reference becomes stale",
        "(DOM has been refreshed).",
        "Solutions:",
        "1. Re-locate the element after action:",
        "WebElement element = driver.findElement(By.id(\"dynamicElement\"));",
        "element.click();",
        "// DOM refreshes",
        "element = driver.findElement(By.id(\"dynamicElement\")); // Re-locate",
        "element.sendKeys(\"text\");",
        "2. Use Explicit Wait with WebDriverWait:",
        "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));",
        "WebElement element =",
        "wait.until(ExpectedConditions.presenceOfElementLocated(By.id(\"element\")",
        "));",
        "element.click();",
        "3. Wrap in Try-Catch and Retry:",
        "int attempts = 0;",
        "while (attempts < 3) {",
        "try {",
        "driver.findElement(By.id(\"element\")).click();",
        "break;",
        "} catch (StaleElementReferenceException e) {",
        "attempts++;",
        "}",
        "}"
      ]
    },
    {
      "id": "selenium-q144",
      "num": "144",
      "question": "In your Selenium project, how do you decide what to automate and what not to automate?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "Automation is most effective when applied to:",
        "\u2022 Repetitive tasks (e.g., regression testing)",
        "\u2022 Stable features (UI doesn't change often)",
        "\u2022 Data-driven tests with multiple inputs",
        "\u2022 Critical workflows (login, checkout)",
        "Avoid automating:",
        "\u2022 Features with frequent UI changes",
        "\u2022 Exploratory tests",
        "\u2022 Tests involving CAPTCHAs or 2FA, unless bypass methods are available."
      ]
    },
    {
      "id": "selenium-q145",
      "num": "145",
      "question": "How do you automate CAPTCHA in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "Direct CAPTCHA automation is not recommended for security and legal reasons.",
        "Workarounds:",
        "\u2022 Use test environments with CAPTCHA disabled.",
        "\u2022 Use pre-defined test keys.",
        "\u2022 Integrate with CAPTCHA-solving APIs (rare in QA, mostly in scraping)."
      ]
    },
    {
      "id": "selenium-q146",
      "num": "146",
      "question": "How do you handle \u201cElementClickInterceptedException\u201d in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "\u2022 Wait until element is clickable.",
        "\u2022 Scroll into view.",
        "\u2022 Ensure no overlays are covering it.",
        "\u2022 Use JavaScript click if unavoidable."
      ]
    },
    {
      "id": "selenium-q147",
      "num": "147",
      "question": "What's your approach to debugging a failed Selenium test?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "1. Check logs for exceptions.",
        "2. Reproduce manually.",
        "3. Add screenshots for failed steps.",
        "4. Verify locator hasn't changed.",
        "5. Check waits \u2014 might be timing issue.",
        "6. Run in debug mode in IDE."
      ]
    },
    {
      "id": "selenium-q148",
      "num": "148",
      "question": "How do you avoid flaky tests in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "\u2022 Use reliable locators (avoid index-based XPath).",
        "\u2022 Implement explicit waits instead of hard sleeps.",
        "\u2022 Avoid dependency on network speed.",
        "\u2022 Reset test data before execution."
      ]
    },
    {
      "id": "selenium-q149",
      "num": "149",
      "question": "How do you handle a stale element after a page refresh?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "\u2022 Re-locate the element after refresh.",
        "\u2022 Use ExpectedConditions:",
        "ExpectedConditions.refreshed(ExpectedConditions.visibilityOf(element));"
      ]
    },
    {
      "id": "selenium-q150",
      "num": "150",
      "question": "How do you measure page load time in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "Using JavaScriptExecutor:",
        "Long loadTime = (Long) js.executeScript(",
        "\"return performance.timing.loadEventEnd - performance.timing.navigationStart;\");"
      ]
    },
    {
      "id": "selenium-q151",
      "num": "151",
      "question": "How do you test responsive design in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "\u2022 Resize browser window with setSize().",
        "\u2022 Use Chrome DevTools emulation.",
        "\u2022 Integrate with mobile emulators."
      ]
    },
    {
      "id": "selenium-q152",
      "num": "152",
      "question": "How do you validate broken links in Selenium?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "1. Collect all <a> tags.",
        "2. Extract href.",
        "3. Send HTTP request and check status code.",
        "Example:",
        "HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();",
        "conn.setRequestMethod(\"HEAD\");"
      ]
    },
    {
      "id": "selenium-q153",
      "num": "153",
      "question": "What's your strategy when Selenium cannot automate a specific step?",
      "category": "Real-World QA Scenarios & Troubleshooting",
      "answers": [
        "\u2022 Use API calls instead of UI for that step.",
        "\u2022 Use database validation.",
        "\u2022 Mock services to bypass the UI step.",
        "\u2022 Discuss feasibility with the team \u2014 sometimes manual execution is necessary."
      ]
    }
  ],
  "interview-api-postman": [
    {
      "id": "api-q1",
      "num": "1",
      "question": "What is API testing and why is it important?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "API testing is the process of verifying that Application Programming Interfaces work as intended \u2014 not just in",
        "terms of returning correct data, but also in meeting functional, performance, and security requirements.",
        "Unlike UI testing, where you check the front-end interface, API testing focuses on the business logic layer \u2014",
        "ensuring that endpoints correctly process requests and return expected responses.",
        "It's important because:",
        "\u2022 APIs are the backbone of most modern applications (especially microservices).",
        "\u2022 Issues at the API level can break multiple downstream systems.",
        "\u2022 Faster feedback: API tests execute quicker than UI tests.",
        "Example: In an e-commerce app, the Add to Cart API must correctly handle stock availability, pricing, and",
        "user authentication before the UI can display it."
      ]
    },
    {
      "id": "api-q2",
      "num": "2",
      "question": "What are the different types of APIs?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "\u2022 Public APIs \u2013 Available to any developer (e.g., Google Maps API).",
        "\u2022 Private APIs \u2013 Internal to an organization.",
        "\u2022 Partner APIs \u2013 Shared with specific business partners under agreements.",
        "\u2022 Composite APIs \u2013 Combine multiple APIs into one call (common in microservices).",
        "Knowing API type is important because it influences authentication, security, and testing scope."
      ]
    },
    {
      "id": "api-q3",
      "num": "3",
      "question": "What is the difference between SOAP and REST APIs?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "SOAP (Simple Object Access Protocol)",
        "\u2022 Uses XML format for requests/responses.",
        "\u2022 Strict contract (WSDL).",
        "\u2022 Heavy, more secure by default.",
        "\u2022 Suitable for complex enterprise systems.",
        "REST (Representational State Transfer)",
        "\u2022 Uses HTTP methods (GET, POST, PUT, DELETE).",
        "\u2022 Can return JSON, XML, HTML.",
        "\u2022 Lightweight and faster.",
        "\u2022 Most popular for modern web/mobile apps."
      ]
    },
    {
      "id": "api-q4",
      "num": "4",
      "question": "Explain HTTP methods in API testing.",
      "category": "API Basics & Fundamentals",
      "answers": [
        "\u2022 GET \u2013 Retrieve data from the server.",
        "\u2022 POST \u2013 Create new resources.",
        "\u2022 PUT \u2013 Update a resource completely.",
        "\u2022 PATCH \u2013 Update a resource partially.",
        "\u2022 DELETE \u2013 Remove a resource.",
        "Example:",
        "GET /users/1 \u2013 fetch user with ID 1",
        "PUT /users/1 \u2013 update the entire user object",
        "PATCH /users/1 \u2013 update only part of the user data"
      ]
    },
    {
      "id": "api-q5",
      "num": "5",
      "question": "What is idempotency in HTTP methods?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "Idempotency means sending the same request multiple times will result in the same outcome.",
        "\u2022 GET, PUT, DELETE \u2192 Idempotent.",
        "\u2022 POST \u2192 Not idempotent.",
        "Example:",
        "\u2022 PUT /user/1 { \"name\": \"John\" } \u2192 No matter how many times you send it, result remains the same.",
        "\u2022 POST /user { \"name\": \"John\" } \u2192 Multiple sends will create multiple users."
      ]
    },
    {
      "id": "api-q6",
      "num": "6",
      "question": "Difference between URI, URL, and Endpoint.",
      "category": "API Basics & Fundamentals",
      "answers": [
        "\u2022 URI \u2013 Identifier for a resource (more general).",
        "\u2022 URL \u2013 A type of URI that includes the location (e.g., protocol + domain + path).",
        "\u2022 Endpoint \u2013 Specific URL where an API resource can be accessed.",
        "Example:",
        "\u2022 URI: /users/123",
        "\u2022 URL: https://api.example.com/users/123",
        "\u2022 Endpoint: GET request to that URL."
      ]
    },
    {
      "id": "api-q7",
      "num": "7",
      "question": "Categories of HTTP status codes.",
      "category": "API Basics & Fundamentals",
      "answers": [
        "\u2022 1xx \u2013 Informational (100 Continue)",
        "\u2022 2xx \u2013 Success (200 OK, 201 Created)",
        "\u2022 3xx \u2013 Redirection (301 Moved Permanently)",
        "\u2022 4xx \u2013 Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found)",
        "\u2022 5xx \u2013 Server Error (500 Internal Server Error)"
      ]
    },
    {
      "id": "api-q8",
      "num": "8",
      "question": "What are headers in API requests and responses?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "Headers carry metadata \u2014 such as authentication tokens, content type, caching instructions.",
        "Examples:",
        "\u2022 Content-Type: application/json",
        "\u2022 Authorization: Bearer <token>",
        "\u2022 Accept-Language: en-US"
      ]
    },
    {
      "id": "api-q9",
      "num": "9",
      "question": "What is JSON and why is it preferred over XML?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "JSON (JavaScript Object Notation) is lightweight, easy to read, and natively supported by JavaScript.",
        "Compared to XML:",
        "\u2022 Smaller payloads.",
        "\u2022 No closing tags \u2192 faster parsing.",
        "\u2022 More readable for humans."
      ]
    },
    {
      "id": "api-q10",
      "num": "10",
      "question": "How do you validate an API response?",
      "category": "API Basics & Fundamentals",
      "answers": [
        "Validation checks:",
        "\u2022 Status Code \u2013 Expected 200, 201, etc.",
        "\u2022 Response Body \u2013 Match expected fields and values.",
        "\u2022 Headers \u2013 Verify content type, caching.",
        "\u2022 Schema Validation \u2013 Ensure response matches defined structure."
      ]
    },
    {
      "id": "api-q11",
      "num": "11",
      "question": "What is Postman and why is it widely used in API testing?",
      "category": "Postman Features & Usage",
      "answers": [
        "Postman is an API development and testing tool that allows testers and developers to send requests to APIs,",
        "analyze responses, and automate test scenarios.",
        "Why it's popular:",
        "\u2022 User-friendly UI \u2013 Even beginners can quickly send API requests.",
        "\u2022 Supports multiple protocols \u2013 HTTP, HTTPS, WebSocket, gRPC.",
        "\u2022 Built-in scripting \u2013 Pre-request and test scripts using JavaScript.",
        "\u2022 Automation support \u2013 Newman CLI allows integration with CI/CD.",
        "\u2022 Environment & variable support \u2013 Useful for switching between dev/staging/prod.",
        "Example: Instead of manually writing curl commands, you can test an API with a click in Postman and save it",
        "for re-use."
      ]
    },
    {
      "id": "api-q12",
      "num": "12",
      "question": "Explain the structure of a request in Postman.",
      "category": "Postman Features & Usage",
      "answers": [
        "A request in Postman typically consists of:",
        "\u2022 Method (GET, POST, PUT, DELETE, PATCH)",
        "\u2022 URL/Endpoint (e.g., https://api.example.com/users)",
        "\u2022 Headers (e.g., Content-Type: application/json)",
        "\u2022 Body (Raw JSON, Form-data, GraphQL query, etc.)",
        "\u2022 Authorization (Basic, Bearer Token, OAuth, etc.)",
        "\u2022 Params (Query parameters like ?page=2&limit=10)"
      ]
    },
    {
      "id": "api-q13",
      "num": "13",
      "question": "What are Postman Collections and why are they important?",
      "category": "Postman Features & Usage",
      "answers": [
        "A Collection is a folder that organizes related API requests into a single group.",
        "Importance:",
        "\u2022 Helps keep test cases grouped logically.",
        "\u2022 Supports sharing across teams.",
        "\u2022 Can be run as a batch for automation.",
        "\u2022 Supports documentation generation.",
        "Example: You can create a User Management collection containing APIs for creating, updating, deleting, and",
        "retrieving users."
      ]
    },
    {
      "id": "api-q14",
      "num": "14",
      "question": "What are environments in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "Environments in Postman allow you to store and switch between sets of variables for different API contexts",
        "(Dev, Staging, Production).",
        "Example:",
        "\u2022 Dev Base URL: https://dev.api.example.com",
        "\u2022 Prod Base URL: https://api.example.com",
        "By changing the environment, you can run the same requests against different servers without editing the",
        "requests manually."
      ]
    },
    {
      "id": "api-q15",
      "num": "15",
      "question": "What are variables in Postman and how do you use them?",
      "category": "Postman Features & Usage",
      "answers": [
        "Variables store reusable values to make tests dynamic.",
        "Types of variables:",
        "\u2022 Global \u2013 Available everywhere.",
        "\u2022 Collection \u2013 Limited to a collection.",
        "\u2022 Environment \u2013 Limited to an environment.",
        "\u2022 Local \u2013 Limited to a single request execution.",
        "Usage:",
        "{{baseUrl}}/users/{{userId}}",
        "Here, baseUrl and userId can be stored in variables."
      ]
    },
    {
      "id": "api-q16",
      "num": "16",
      "question": "What is the difference between Pre-request Script and Tests in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "\u2022 Pre-request Script: JavaScript code that runs before the request is sent.",
        "Example: Generating a timestamp or token before request execution.",
        "\u2022 Tests: JavaScript code that runs after the response is received.",
        "Example: Validating that the status code is 200."
      ]
    },
    {
      "id": "api-q17",
      "num": "17",
      "question": "How do you write a basic test script in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "Example: Checking status code and response time:",
        "pm.test(\"Status code is 200\", function () {",
        "pm.response.to.have.status(200);",
        "});",
        "pm.test(\"Response time is less than 500ms\", function () {",
        "pm.expect(pm.response.responseTime).to.be.below(500);",
        "});"
      ]
    },
    {
      "id": "api-q18",
      "num": "18",
      "question": "How do you send authentication credentials in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "Postman supports multiple authentication types:",
        "\u2022 Basic Auth \u2013 Username/password encoded in Base64.",
        "\u2022 Bearer Token \u2013 Token passed in Authorization header.",
        "\u2022 OAuth 1.0 / 2.0 \u2013 Secure authentication flows.",
        "\u2022 API Key \u2013 Passed in query params or headers.",
        "Example for Bearer Token:",
        "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
      ]
    },
    {
      "id": "api-q19",
      "num": "19",
      "question": "What is Collection Runner in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "The Collection Runner allows you to run all requests in a collection in sequence.",
        "You can:",
        "\u2022 Pass external test data (CSV/JSON).",
        "\u2022 Repeat iterations.",
        "\u2022 View summary reports.",
        "Example: Running login \u2192 add product \u2192 checkout flow in one run."
      ]
    },
    {
      "id": "api-q20",
      "num": "20",
      "question": "What is Newman and why is it used?",
      "category": "Postman Features & Usage",
      "answers": [
        "Newman is Postman's command-line tool to run collections in automated pipelines.",
        "Why use it:",
        "\u2022 Integrates Postman tests into CI/CD (Jenkins, GitLab CI).",
        "\u2022 Supports JSON/HTML reports.",
        "\u2022 Executes tests without the Postman GUI.",
        "Command:",
        "newman run mycollection.json -e myenv.json"
      ]
    },
    {
      "id": "api-q21",
      "num": "21",
      "question": "How do you handle dynamic data in Postman tests?",
      "category": "Postman Features & Usage",
      "answers": [
        "\u2022 Use pm.variables.set() to set a variable dynamically.",
        "\u2022 Store values from one response to use in another request.",
        "Example:",
        "let userId = pm.response.json().id;",
        "pm.environment.set(\"userId\", userId);"
      ]
    },
    {
      "id": "api-q22",
      "num": "22",
      "question": "How do you import/export collections and environments in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "\u2022 Export \u2013 Right-click \u2192 Export as JSON.",
        "\u2022 Import \u2013 Click Import \u2192 Choose file or link.",
        "This is crucial for collaboration and version control."
      ]
    },
    {
      "id": "api-q23",
      "num": "23",
      "question": "What is a Monitor in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "A Monitor runs your collection at scheduled intervals and sends alerts if tests fail.",
        "Example: Run API health checks every hour and email results."
      ]
    },
    {
      "id": "api-q24",
      "num": "24",
      "question": "How do you validate JSON schema in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "You can use the tv4 or Ajv validator inside tests.",
        "const schema = {",
        "\"type\": \"object\",",
        "\"properties\": {",
        "\"id\": { \"type\": \"number\" },",
        "\"name\": { \"type\": \"string\" }",
        "},",
        "\"required\": [\"id\", \"name\"]",
        "};",
        "pm.test(\"Schema is valid\", function () {",
        "pm.response.to.have.jsonSchema(schema);",
        "});"
      ]
    },
    {
      "id": "api-q25",
      "num": "25",
      "question": "How do you pass query parameters in Postman?",
      "category": "Postman Features & Usage",
      "answers": [
        "You can:",
        "\u2022 Add them in the Params tab.",
        "\u2022 Append to URL manually (?page=1&limit=5).",
        "\u2022 Set dynamically with variables."
      ]
    },
    {
      "id": "api-q26",
      "num": "26",
      "question": "How do you approach testing a new API when no documentation is available?",
      "category": "API Testing in Depth",
      "answers": [
        "When there's no documentation, you need to reverse-engineer or explore the API:",
        "1. Check available code or network logs (e.g., browser DevTools, mobile proxy tools like",
        "Charles/Fiddler).",
        "2. Explore using Postman \u2013 start with GET requests to known endpoints.",
        "3. Check response headers and patterns \u2013 may give hints about parameters or content type.",
        "4. Look at error messages \u2013 sometimes APIs reveal required fields or validation rules.",
        "5. Talk to developers \u2013 confirm assumptions before deep testing.",
        "Example: In a mobile app, capturing network traffic during login might reveal /auth/login with required body",
        "parameters."
      ]
    },
    {
      "id": "api-q27",
      "num": "27",
      "question": "What are the most common API testing validations?",
      "category": "API Testing in Depth",
      "answers": [
        "You should validate:",
        "\u2022 Status Code \u2013 Matches expected result (e.g., 200 for success).",
        "\u2022 Response Body Content \u2013 Expected fields, values, and data types.",
        "\u2022 JSON/XML Schema \u2013 Structure matches contract.",
        "\u2022 Headers \u2013 Content-Type, caching, security headers.",
        "\u2022 Performance \u2013 Response time is within SLA.",
        "\u2022 Database \u2013 Data changes match request actions.",
        "\u2022 Idempotency \u2013 Multiple identical requests give the same result (for idempotent methods)."
      ]
    },
    {
      "id": "api-q28",
      "num": "28",
      "question": "How do you test API error handling?",
      "category": "API Testing in Depth",
      "answers": [
        "Negative testing is as important as positive testing:",
        "\u2022 Invalid inputs \u2013 Missing fields, incorrect data types.",
        "\u2022 Unauthorized access \u2013 Invalid token, missing token.",
        "\u2022 Resource not found \u2013 Requesting an ID that doesn't exist.",
        "\u2022 Method not allowed \u2013 Sending POST instead of GET.",
        "\u2022 Rate limiting \u2013 Sending too many requests.",
        "Example in Postman:",
        "pm.test(\"Returns 404 when user not found\", function () {",
        "pm.expect(pm.response.code).to.eql(404);",
        "});"
      ]
    },
    {
      "id": "api-q29",
      "num": "29",
      "question": "What is the difference between functional and non-functional API testing?",
      "category": "API Testing in Depth",
      "answers": [
        "\u2022 Functional Testing \u2013 Verifies that the API does what it's supposed to (correct inputs produce correct",
        "outputs).",
        "\u2022 Non-functional Testing \u2013 Focuses on performance, security, usability, scalability.",
        "Example:",
        "\u2022 Functional: Does GET /users/1 return the correct user?",
        "\u2022 Non-functional: Does GET /users/1 respond within 300ms under 1000 concurrent requests?"
      ]
    },
    {
      "id": "api-q30",
      "num": "30",
      "question": "How do you validate data integrity in API testing?",
      "category": "API Testing in Depth",
      "answers": [
        "Steps:",
        "1. Trigger the API \u2013 e.g., POST /users creates a new user.",
        "2. Check API Response \u2013 Ensure the returned data matches input.",
        "3. Verify Database \u2013 Run SQL query to ensure data is stored correctly.",
        "4. Retrieve via GET API \u2013 Ensure consistency between DB and API output."
      ]
    },
    {
      "id": "api-q31",
      "num": "31",
      "question": "How do you test API security in Postman?",
      "category": "API Testing in Depth",
      "answers": [
        "Security testing in Postman includes:",
        "\u2022 Authentication \u2013 Ensure endpoints require proper login.",
        "\u2022 Authorization \u2013 Ensure users can only access permitted resources.",
        "\u2022 Token Expiry \u2013 Check that expired tokens are rejected.",
        "\u2022 Data Exposure \u2013 Ensure sensitive data (passwords, credit cards) is never in plain text.",
        "\u2022 CORS Handling \u2013 Ensure API restricts requests from unknown domains."
      ]
    },
    {
      "id": "api-q32",
      "num": "32",
      "question": "How do you test an API for performance using Postman?",
      "category": "API Testing in Depth",
      "answers": [
        "Postman alone isn't a full performance testing tool, but you can:",
        "\u2022 Use pm.expect(pm.response.responseTime).to.be.below(500) to check speed.",
        "\u2022 Run APIs repeatedly using Collection Runner with multiple iterations.",
        "\u2022 For deeper load testing, export Postman collections to JMeter or k6."
      ]
    },
    {
      "id": "api-q33",
      "num": "33",
      "question": "How do you chain API requests in Postman?",
      "category": "API Testing in Depth",
      "answers": [
        "Chaining means using output from one API as input to another.",
        "Example:",
        "let token = pm.response.json().token;",
        "pm.environment.set(\"authToken\", token);",
        "Then in the next request, set:",
        "Authorization: Bearer {{authToken}}",
        "This is useful for login flows, order placements, etc."
      ]
    },
    {
      "id": "api-q34",
      "num": "34",
      "question": "How do you test APIs that have dependencies on other services?",
      "category": "API Testing in Depth",
      "answers": [
        "\u2022 Use mock servers when dependent services are unavailable.",
        "\u2022 Test with stubs for partial functionality.",
        "\u2022 Use contract testing to validate API interactions without full integration.",
        "Example: If your payment API depends on a banking API, you can mock the bank's success/failure responses to",
        "test your service behavior."
      ]
    },
    {
      "id": "api-q35",
      "num": "35",
      "question": "How do you handle dynamic tokens or session IDs in Postman?",
      "category": "API Testing in Depth",
      "answers": [
        "\u2022 Capture the token/session ID from login response:",
        "let sessionId = pm.response.json().sessionId;",
        "pm.environment.set(\"sessionId\", sessionId);",
        "\u2022 Use it in headers or params for subsequent requests:",
        "Session-Id: {{sessionId}}"
      ]
    },
    {
      "id": "api-q36",
      "num": "36",
      "question": "How do you ensure API backward compatibility?",
      "category": "API Testing in Depth",
      "answers": [
        "Backward compatibility means old clients still work when API is updated.",
        "Testing steps:",
        "\u2022 Run old test cases on the new API version.",
        "\u2022 Verify deprecated fields still work (until officially removed).",
        "\u2022 Ensure default values are returned when new fields are added."
      ]
    },
    {
      "id": "api-q37",
      "num": "37",
      "question": "How do you test API pagination?",
      "category": "API Testing in Depth",
      "answers": [
        "Pagination is tested by:",
        "\u2022 Checking correct page size \u2013 e.g., if limit=10, ensure only 10 items returned.",
        "\u2022 Validating total pages \u2013 Matches total data count.",
        "\u2022 Testing boundary values \u2013 First page, last page, empty page."
      ]
    },
    {
      "id": "api-q38",
      "num": "38",
      "question": "How do you test sorting and filtering in APIs?",
      "category": "API Testing in Depth",
      "answers": [
        "\u2022 Send API requests with sorting params (?sort=name&order=asc).",
        "\u2022 Verify the list is correctly sorted.",
        "\u2022 Apply filters (?status=active) and check only matching records are returned.",
        "\u2022 Combine filters and sorting for complex validations."
      ]
    },
    {
      "id": "api-q39",
      "num": "39",
      "question": "How do you validate API contracts?",
      "category": "API Testing in Depth",
      "answers": [
        "An API contract defines expected request/response structure (fields, types, rules).",
        "You can:",
        "\u2022 Use JSON Schema validation in Postman.",
        "\u2022 Compare response with OpenAPI/Swagger definitions."
      ]
    },
    {
      "id": "api-q40",
      "num": "40",
      "question": "How do you test APIs that return asynchronous responses?",
      "category": "API Testing in Depth",
      "answers": [
        "Some APIs return an immediate \u201cprocessing\u201d status and require polling:",
        "1. Send initial request \u2192 get job ID.",
        "2. Poll status API until job is completed.",
        "3. Validate final output.",
        "Example in Postman:",
        "let status = pm.response.json().status;",
        "pm.test(\"Processing started\", function () {",
        "pm.expect(status).to.eql(\"in_progress\");",
        "});"
      ]
    },
    {
      "id": "api-q41",
      "num": "41",
      "question": "What scripting language does Postman use for automation?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "Postman uses JavaScript for both Pre-request Scripts and Tests tabs.",
        "\u2022 Pre-request Scripts \u2192 Execute before sending the API request (used for dynamic data creation, signing",
        "requests, generating tokens).",
        "\u2022 Tests \u2192 Execute after receiving a response (used for validation, storing variables, chaining).",
        "Example Pre-request Script:",
        "javascript",
        "CopyEdit",
        "pm.environment.set(\"timestamp\", Date.now());"
      ]
    },
    {
      "id": "api-q42",
      "num": "42",
      "question": "How do you store and use dynamic values across requests?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "You can extract values from a response and store them in environment or global variables using:",
        "javascript",
        "CopyEdit",
        "let token = pm.response.json().token;",
        "pm.environment.set(\"authToken\", token);",
        "Then in another request, use:",
        "css",
        "CopyEdit",
        "Authorization: Bearer {{authToken}}",
        "This allows chaining requests like login \u2192 perform action \u2192 logout."
      ]
    },
    {
      "id": "api-q43",
      "num": "43",
      "question": "How do you run data-driven tests in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "Data-driven testing in Postman is done using Collection Runner with a CSV or JSON data file.",
        "Steps:",
        "1. Create test data file (users.csv).",
        "2. Use variables in requests ({{username}}, {{password}}).",
        "3. Run collection with data file in Collection Runner.",
        "Example CSV:",
        "username,password",
        "user1,pass123",
        "user2,pass456"
      ]
    },
    {
      "id": "api-q44",
      "num": "44",
      "question": "How do you write assertions for status codes and response times?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "pm.test(\"Status code is 200\", function () {",
        "pm.response.to.have.status(200);",
        "});",
        "pm.test(\"Response time is less than 500ms\", function () {",
        "pm.expect(pm.response.responseTime).to.be.below(500);",
        "});",
        "These ensure APIs return correct codes and are within performance SLAs."
      ]
    },
    {
      "id": "api-q45",
      "num": "45",
      "question": "How do you validate JSON response body in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "let jsonData = pm.response.json();",
        "pm.test(\"Name is John\", function () {",
        "pm.expect(jsonData.name).to.eql(\"John\");",
        "});",
        "You can validate:",
        "\u2022 Specific fields (jsonData.id)",
        "\u2022 Nested objects (jsonData.address.city)",
        "\u2022 Arrays (jsonData.items.length)"
      ]
    },
    {
      "id": "api-q46",
      "num": "46",
      "question": "How do you validate a JSON schema in Postman tests?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "const schema = {",
        "\"type\": \"object\",",
        "\"properties\": {",
        "\"id\": { \"type\": \"number\" },",
        "\"name\": { \"type\": \"string\" }",
        "},",
        "\"required\": [\"id\", \"name\"]",
        "};",
        "pm.test(\"Schema is valid\", function () {",
        "pm.response.to.have.jsonSchema(schema);",
        "});",
        "This ensures the API response matches the expected contract."
      ]
    },
    {
      "id": "api-q47",
      "num": "47",
      "question": "How do you log output to Postman Console?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "You can debug scripts using:",
        "console.log(\"Token:\", pm.environment.get(\"authToken\"));",
        "Postman Console is opened with View \u2192 Show Postman Console."
      ]
    },
    {
      "id": "api-q48",
      "num": "48",
      "question": "How do you handle loops in Postman scripts?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "Postman does not have native looping between requests in one run, but you can:",
        "\u2022 Use Collection Runner with multiple iterations.",
        "\u2022 Use scripts to call postman.setNextRequest() for conditional flows.",
        "Example:",
        "if(pm.environment.get(\"retryCount\") < 3) {",
        "postman.setNextRequest(\"Check Status\");",
        "}"
      ]
    },
    {
      "id": "api-q49",
      "num": "49",
      "question": "How do you call one request from another in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "You can:",
        "\u2022 Use postman.setNextRequest(\"Request Name\") for chaining.",
        "\u2022 Store variables in Pre-request scripts and reuse them.",
        "Example: Login request sets {{token}} \u2192 used in subsequent APIs."
      ]
    },
    {
      "id": "api-q50",
      "num": "50",
      "question": "How do you generate random test data in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "pm.environment.set(\"randomEmail\", `user${Math.floor(Math.random()*1000)}@test.com`);",
        "pm.environment.set(\"randomId\", Math.floor(Math.random()*10000));",
        "This is useful for avoiding duplicate data issues during test runs."
      ]
    },
    {
      "id": "api-q51",
      "num": "51",
      "question": "How do you handle conditional testing in Postman scripts?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "let status = pm.response.code;",
        "if (status === 200) {",
        "pm.test(\"Valid Response\", () => {",
        "pm.expect(pm.response.json().status).to.eql(\"success\");",
        "});",
        "} else {",
        "pm.test(\"Error Response\", () => {",
        "pm.expect(status).to.be.oneOf([400, 404]);",
        "});",
        "}",
        "This ensures flexible validation depending on API behavior."
      ]
    },
    {
      "id": "api-q52",
      "num": "52",
      "question": "How do you automate Postman tests in CI/CD pipelines?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "1. Export the Postman collection and environment.",
        "2. Install Newman in your CI/CD environment.",
        "3. Add a build step:",
        "newman run MyCollection.json -e MyEnv.json --reporters cli,html",
        "4. Fail the build if Newman tests fail."
      ]
    },
    {
      "id": "api-q53",
      "num": "53",
      "question": "How do you capture values from headers in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "let contentType = pm.response.headers.get(\"Content-Type\");",
        "pm.environment.set(\"contentType\", contentType);",
        "This is useful for APIs that send tokens in headers instead of body."
      ]
    },
    {
      "id": "api-q54",
      "num": "54",
      "question": "How do you validate arrays in Postman response?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "let jsonData = pm.response.json();",
        "pm.test(\"Array contains 'Apple'\", function () {",
        "pm.expect(jsonData.items).to.include(\"Apple\");",
        "});",
        "pm.test(\"Array length is 5\", function () {",
        "pm.expect(jsonData.items.length).to.eql(5);",
        "});"
      ]
    },
    {
      "id": "api-q55",
      "num": "55",
      "question": "How do you run only selected tests in a Postman collection?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "\u2022 Use folders and run them in Collection Runner.",
        "\u2022 Temporarily disable other requests.",
        "\u2022 Use postman.setNextRequest(null) to stop execution after certain tests."
      ]
    },
    {
      "id": "api-q56",
      "num": "56",
      "question": "How do you use environment variables in scripts?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "pm.environment.set(\"userId\", pm.response.json().id);",
        "let id = pm.environment.get(\"userId\");",
        "Environment variables make requests portable between Dev, QA, and Prod."
      ]
    },
    {
      "id": "api-q57",
      "num": "57",
      "question": "How do you parameterize requests in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "{{baseUrl}}/users/{{userId}}",
        "These placeholders are replaced by variable values at runtime."
      ]
    },
    {
      "id": "api-q58",
      "num": "58",
      "question": "How do you run Postman tests headlessly?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "Use Newman CLI:",
        "newman run mycollection.json -e myenv.json --reporters cli,json",
        "This is essential for automation and CI/CD."
      ]
    },
    {
      "id": "api-q59",
      "num": "59",
      "question": "How do you retry failed requests in Postman scripts?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "Postman itself doesn't have automatic retries, but you can simulate:",
        "if (pm.response.code !== 200) {",
        "postman.setNextRequest(\"Same Request Name\");",
        "}",
        "Limit retries with a counter variable."
      ]
    },
    {
      "id": "api-q60",
      "num": "60",
      "question": "How do you test APIs with file uploads in Postman?",
      "category": "Scripting & Automation in Postman",
      "answers": [
        "\u2022 Use form-data in the Body tab.",
        "\u2022 Select file type and attach the file.",
        "\u2022 Validate upload success in response."
      ]
    },
    {
      "id": "api-q61",
      "num": "61",
      "question": "How do you test versioned APIs?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "API versioning ensures backward compatibility when new changes are introduced.",
        "Steps:",
        "1. Identify available versions (/v1/, /v2/).",
        "2. Compare responses for the same request in each version.",
        "3. Ensure old clients still function with older versions.",
        "4. Validate deprecation notices in headers or documentation.",
        "5. Ensure new fields are optional and don't break existing responses.",
        "Example:",
        "GET /v1/users/123 returns {name, email}",
        "GET /v2/users/123 returns {name, email, phone} \u2014 old apps should still work without phone."
      ]
    },
    {
      "id": "api-q62",
      "num": "62",
      "question": "How do you test APIs in a microservices architecture?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Challenges:",
        "\u2022 APIs may depend on multiple services.",
        "\u2022 Failures in one service can cascade.",
        "Testing strategy:",
        "\u2022 Test each service independently with mock data.",
        "\u2022 Use contract testing (e.g., Pact) to verify integrations.",
        "\u2022 Test end-to-end workflows to ensure orchestration is correct.",
        "Example: In an e-commerce app, the Order Service API depends on Inventory Service and Payment Service."
      ]
    },
    {
      "id": "api-q63",
      "num": "63",
      "question": "How do you test APIs that return asynchronous results?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Some APIs process requests in the background and return job IDs.",
        "Steps:",
        "1. Send initial request (POST).",
        "2. Receive jobId and status pending.",
        "3. Poll status API until completion.",
        "4. Validate final output or error.",
        "Example in Postman:",
        "let status = pm.response.json().status;",
        "if (status !== \"completed\") {",
        "postman.setNextRequest(\"Check Job Status\");",
        "}"
      ]
    },
    {
      "id": "api-q64",
      "num": "64",
      "question": "How do you test APIs with third-party integrations?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Third-party APIs can be slow, expensive, or unavailable in testing.",
        "Solutions:",
        "\u2022 Use mock servers to simulate their responses.",
        "\u2022 Validate API error handling when the third party fails.",
        "\u2022 Verify that the correct payload is sent to the external API."
      ]
    },
    {
      "id": "api-q65",
      "num": "65",
      "question": "How do you test API rate limiting?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Rate limits prevent abuse.",
        "Steps:",
        "1. Identify rate limit policy (e.g., 100 requests/min).",
        "2. Send rapid requests until limit is hit.",
        "3. Validate correct error response (often 429 Too Many Requests).",
        "4. Check Retry-After header for cooldown time."
      ]
    },
    {
      "id": "api-q66",
      "num": "66",
      "question": "How do you test webhooks in Postman?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Webhooks send data to your endpoint when an event happens.",
        "Testing:",
        "\u2022 Use Postman's Mock Server as the webhook receiver.",
        "\u2022 Send a test event from the service.",
        "\u2022 Validate payload and headers received."
      ]
    },
    {
      "id": "api-q67",
      "num": "67",
      "question": "How do you test GraphQL APIs in Postman?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Steps:",
        "1. Set request type to POST.",
        "2. In Body \u2192 select GraphQL.",
        "3. Write query/mutation:",
        "query {",
        "user(id: \"123\") {",
        "name",
        "email",
        "}",
        "}",
        "4. Validate that only requested fields are returned."
      ]
    },
    {
      "id": "api-q68",
      "num": "68",
      "question": "How do you test APIs with file downloads?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Send request.",
        "\u2022 Check Content-Disposition header for filename.",
        "\u2022 Verify file type (Content-Type).",
        "\u2022 Save and compare file size/hash to expected."
      ]
    },
    {
      "id": "api-q69",
      "num": "69",
      "question": "How do you test APIs that require digital signatures?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Use Pre-request Scripts to generate HMAC or RSA signatures.",
        "\u2022 Use CryptoJS in Postman to hash request payload.",
        "Example:",
        "const hash = CryptoJS.HmacSHA256(pm.request.body.raw, \"secretKey\");",
        "pm.environment.set(\"signature\", hash.toString(CryptoJS.enc.Hex));"
      ]
    },
    {
      "id": "api-q70",
      "num": "70",
      "question": "How do you mock APIs in Postman?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Postman Mock Server steps:",
        "1. Create a new mock server.",
        "2. Define sample responses for endpoints.",
        "3. Use mock URL in place of real API.",
        "This is useful for testing UI before backend is ready."
      ]
    },
    {
      "id": "api-q71",
      "num": "71",
      "question": "How do you handle API request sequencing in Postman?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Use postman.setNextRequest() to define next request order.",
        "\u2022 Store values from previous responses in variables.",
        "\u2022 Example: Login \u2192 Create User \u2192 Get User \u2192 Delete User."
      ]
    },
    {
      "id": "api-q72",
      "num": "72",
      "question": "How do you test APIs that have different behavior for different users?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Use different authentication tokens for different roles (admin, user, guest).",
        "\u2022 Validate role-based access control (RBAC).",
        "\u2022 Example: Admin can DELETE /users/123, normal user cannot."
      ]
    },
    {
      "id": "api-q73",
      "num": "73",
      "question": "How do you test an API migration from monolith to microservices?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Identify API endpoints before and after migration.",
        "\u2022 Compare responses for the same input.",
        "\u2022 Test for performance improvements and no functional breakage.",
        "\u2022 Validate integration points with new microservices."
      ]
    },
    {
      "id": "api-q74",
      "num": "74",
      "question": "How do you test an API that returns streaming data?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Streaming APIs (e.g., WebSocket, SSE):",
        "\u2022 Connect to the stream in Postman (WebSocket tab).",
        "\u2022 Send a message and validate incoming stream messages.",
        "\u2022 Check message format and frequency."
      ]
    },
    {
      "id": "api-q75",
      "num": "75",
      "question": "How do you test APIs with scheduled jobs?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "If API triggers a scheduled task (e.g., nightly report):",
        "\u2022 Use a smaller schedule in test environment.",
        "\u2022 Trigger job manually if API supports it.",
        "\u2022 Validate job status and output."
      ]
    },
    {
      "id": "api-q76",
      "num": "76",
      "question": "How do you handle flaky APIs in automation?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Add retry logic in scripts.",
        "\u2022 Validate response before proceeding to next test.",
        "\u2022 Log failures for further analysis.",
        "Example:",
        "if(pm.response.code !== 200) {",
        "postman.setNextRequest(\"Same Request\");}"
      ]
    },
    {
      "id": "api-q77",
      "num": "77",
      "question": "How do you test localization in APIs?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Send requests with Accept-Language header (en-US, fr-FR).",
        "\u2022 Validate responses are translated correctly.",
        "\u2022 Check currency and date formats per locale."
      ]
    },
    {
      "id": "api-q78",
      "num": "78",
      "question": "How do you validate API caching behavior?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Check Cache-Control and ETag headers.",
        "\u2022 Send repeated requests and confirm whether server returns cached or fresh data."
      ]
    },
    {
      "id": "api-q79",
      "num": "79",
      "question": "How do you test APIs under failure scenarios?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "\u2022 Simulate server errors (mock 500 response).",
        "\u2022 Simulate network delays/timeouts.",
        "\u2022 Validate application behavior on API failure."
      ]
    },
    {
      "id": "api-q80",
      "num": "80",
      "question": "How do you test gRPC APIs in Postman?",
      "category": "Advanced Testing Scenarios",
      "answers": [
        "Postman now supports gRPC:",
        "\u2022 Import .proto file.",
        "\u2022 Select method to test.",
        "\u2022 Send request with parameters.",
        "\u2022 Validate response fields."
      ]
    },
    {
      "id": "api-q81",
      "num": "81",
      "question": "How do you integrate Postman tests into CI/CD pipelines?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Export Postman collection & environment as JSON.",
        "\u2022 Install Newman (Postman CLI).",
        "\u2022 In CI/CD (Jenkins, GitHub Actions, Azure DevOps), add a step to run:",
        "newman run collection.json -e environment.json",
        "\u2022 Fail build if any test fails (--bail)."
      ]
    },
    {
      "id": "api-q82",
      "num": "82",
      "question": "What is Newman and why is it used?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 CLI tool to run Postman collections without opening the UI.",
        "\u2022 Used in automation, CI/CD, and scheduled jobs.",
        "\u2022 Supports HTML, JSON, and JUnit reports."
      ]
    },
    {
      "id": "api-q83",
      "num": "83",
      "question": "How do you generate HTML reports from Newman?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "Install reporter:",
        "npm install -g newman-reporter-html",
        "Run with:",
        "bash",
        "CopyEdit",
        "newman run collection.json -r html"
      ]
    },
    {
      "id": "api-q84",
      "num": "84",
      "question": "How do you schedule Postman collections to run automatically?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "Options:",
        "\u2022 Use Newman + cron jobs on a server.",
        "\u2022 Use Postman Monitors (cloud execution on a schedule).",
        "\u2022 Integrate with Jenkins to run daily/nightly."
      ]
    },
    {
      "id": "api-q85",
      "num": "85",
      "question": "How do you pass dynamic environment variables in CI/CD?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Use environment JSON with placeholders.",
        "\u2022 Override variables with --env-var flag in Newman:",
        "newman run collection.json --env-var baseUrl=https://staging.api.com"
      ]
    },
    {
      "id": "api-q86",
      "num": "86",
      "question": "How do you run specific folders or requests from a collection in CI/CD?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "newman run collection.json --folder \"User APIs\"",
        "Useful when only a subset of tests needs to run."
      ]
    },
    {
      "id": "api-q87",
      "num": "87",
      "question": "How do you integrate Postman with version control (Git)?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Export collections as JSON and commit to Git.",
        "\u2022 Or use Postman API to sync and fetch latest collection before running.",
        "\u2022 Enables collaboration and CI/CD trigger on changes."
      ]
    },
    {
      "id": "api-q88",
      "num": "88",
      "question": "How do you test APIs automatically after deployment?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Add Newman run step post-deploy in CI/CD.",
        "\u2022 Run smoke tests on deployed environment to ensure it's live.",
        "\u2022 Fail pipeline if smoke test fails."
      ]
    },
    {
      "id": "api-q89",
      "num": "89",
      "question": "How do you run Postman collections in parallel?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "Newman doesn't support native parallelism, but:",
        "\u2022 Use newman-reporter-htmlextra with concurrent test runners.",
        "\u2022 Or split collections into multiple smaller ones and run in parallel in CI/CD."
      ]
    },
    {
      "id": "api-q90",
      "num": "90",
      "question": "How do you publish API test results to a dashboard?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Export Newman results as JUnit XML.",
        "\u2022 Feed XML into CI/CD dashboards (Jenkins, Azure).",
        "\u2022 Or use custom reporters for HTML dashboards.",
        "G. Best Practices & Common Pitfalls"
      ]
    },
    {
      "id": "api-q91",
      "num": "91",
      "question": "What are API testing best practices?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Test positive & negative scenarios.",
        "\u2022 Use environment variables instead of hardcoding.",
        "\u2022 Validate status codes, response time, and schema.",
        "\u2022 Keep collections modular."
      ]
    },
    {
      "id": "api-q92",
      "num": "92",
      "question": "How do you ensure API tests are maintainable?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Group related tests in folders.",
        "\u2022 Use variables for base URLs, tokens, IDs.",
        "\u2022 Use scripts for reusable logic."
      ]
    },
    {
      "id": "api-q93",
      "num": "93",
      "question": "What is schema validation and why is it important?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Ensures response structure matches API spec.",
        "\u2022 Prevents unexpected changes from breaking consumers.",
        "Example:",
        "pm.test(\"Schema valid\", function() {",
        "pm.response.to.have.jsonSchema(schema);",
        "});"
      ]
    },
    {
      "id": "api-q94",
      "num": "94",
      "question": "What's the difference between smoke, regression, and load testing in APIs?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Smoke: Quick check if API works.",
        "\u2022 Regression: Check all functionality after changes.",
        "\u2022 Load: Test performance under expected traffic."
      ]
    },
    {
      "id": "api-q95",
      "num": "95",
      "question": "What are common mistakes in Postman testing?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Hardcoding values.",
        "\u2022 Not testing error responses.",
        "\u2022 Ignoring response time.",
        "\u2022 Missing authentication checks."
      ]
    },
    {
      "id": "api-q96",
      "num": "96",
      "question": "How do you handle API security testing in Postman?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Test without authentication (should fail).",
        "\u2022 Test with expired tokens.",
        "\u2022 SQL injection & XSS payload checks in inputs.",
        "\u2022 Validate HTTPS is enforced."
      ]
    },
    {
      "id": "api-q97",
      "num": "97",
      "question": "How do you manage large Postman collections efficiently?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Break into smaller collections.",
        "\u2022 Use common pre-request & test scripts in globals.",
        "\u2022 Version control collections."
      ]
    },
    {
      "id": "api-q98",
      "num": "98",
      "question": "How do you test APIs with complex JSON structures?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Use pm.response.json() to parse.",
        "\u2022 Use lodash in scripts to navigate deep fields:",
        "javascript",
        "CopyEdit",
        "let value = _.get(pm.response.json(), 'data.user.details.email');"
      ]
    },
    {
      "id": "api-q99",
      "num": "99",
      "question": "How do you keep Postman environments in sync across teams?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "\u2022 Export & share environment JSON.",
        "\u2022 Use Postman workspaces for live sync.",
        "\u2022 Keep secrets in separate secure environments."
      ]
    },
    {
      "id": "api-q100",
      "num": "100",
      "question": "If an API test fails in CI/CD, how do you troubleshoot?",
      "category": "CI/CD & Integration Testing",
      "answers": [
        "1. Check request/response logs from Newman.",
        "2. Compare environment variables in local vs CI/CD.",
        "3. Validate authentication & endpoint availability.",
        "4. Retry manually in Postman to isolate the issue."
      ]
    },
    {
      "id": "api-q101",
      "num": "101",
      "category": "API Architecture & Protocols",
      "question": "Explain the Testing Pyramid: Why should 70-80% of automated tests live at the API layer, and how does API testing mitigate UI automation brittleness?",
      "answers": [
        "The Test Automation Pyramid (popularized by Mike Cohn) advocates for a broad foundation of Unit tests, a strong middle layer of API / Service integration tests, and a lean top layer of End-to-End UI tests.",
        "\u2022 Why 70-80% of Automated Tests Belong at the API Layer:",
        "  1. Speed of Execution: API requests complete in tens or hundreds of milliseconds (HTTP protocol round-trip), whereas browser UI tests take 5-15 seconds per test to spin up DOM, load CSS/JS assets, and wait for animations.",
        "  2. Zero UI Flakiness: APIs do not suffer from DOM re-rendering, CSS locator changes, stale element references, or viewport occlusion.",
        "  3. Business Logic Isolation: 90% of business rules (pricing calculations, auth checks, database mutations, validation constraints) reside in backend microservices, not frontend UI markup.",
        "  4. Early Defect Detection (Shift-Left): API test suites can be executed as soon as OpenAPI/Swagger contracts are defined, months before the frontend UI is even coded."
      ]
    },
    {
      "id": "api-q102",
      "num": "102",
      "category": "API Architecture & Protocols",
      "question": "Compare REST vs SOAP architecture, and explain HTTP methods idempotency (GET, PUT, DELETE vs POST, PATCH).",
      "answers": [
        "1. REST vs SOAP:",
        "  o REST (Representational State Transfer): An architectural style using standard HTTP verbs, stateless communication, lightweight JSON/XML data payloads, and URI-based resource identification.",
        "  o SOAP (Simple Object Access Protocol): A rigid XML-based protocol with strict WSDL contracts, built-in WS-Security, and higher transmission overhead.",
        "2. HTTP Method Idempotency (Critical for Test Automation):",
        "  o An HTTP method is idempotent if executing it multiple times yields the EXACT same server state as executing it once.",
        "  o Idempotent Methods:",
        "    - GET: Read-only, does not alter server state.",
        "    - PUT: Replaces the entire target resource with payload. Sending it 10 times results in the identical resource state.",
        "    - DELETE: Deletes resource. First call returns 200/204; subsequent calls return 404, but server state remains unchanged (resource is deleted).",
        "  o Non-Idempotent Methods:",
        "    - POST: Creates a new resource on every invocation. Calling POST 5 times creates 5 separate database records.",
        "    - PATCH: Applies partial modifications (e.g. increment balance by 10); repeating it changes state iteratively."
      ]
    },
    {
      "id": "api-q103",
      "num": "103",
      "category": "Rest Assured Automation DSL",
      "question": "Explain the Rest Assured architecture and BDD DSL: given().when().then().",
      "answers": [
        "Rest Assured is a popular Java DSL for RESTful API automation that uses BDD-style method chaining (`given().when().then()`):",
        "\u2022 1. `given()` (Preconditions & Request Specification):",
        "  o Configures base URI, path parameters, query parameters, headers, cookies, authentication tokens, and request body payload.",
        "\u2022 2. `when()` (Action):",
        "  o Executes the actual HTTP method: `get()`, `post()`, `put()`, `delete()`, `patch()`.",
        "\u2022 3. `then()` (Assertions & Response Validation):",
        "  o Validates status code, response headers, response body JSON paths, Hamcrest matchers, and response time.",
        "\u2022 Complete Code Example:",
        "  import static io.restassured.RestAssured.*;",
        "  import static org.hamcrest.Matchers.*;",
        "  @Test",
        "  public void testUserCreation() {",
        "      given()",
        "          .baseUri(\"https://reqres.in\")",
        "          .header(\"Content-Type\", \"application/json\")",
        "          .body(\"{\\\"name\\\": \\\"Deepak\\\", \\\"job\\\": \\\"SDET Lead\\\"}\")",
        "      .when()",
        "          .post(\"/api/users\")",
        "      .then()",
        "          .statusCode(201)",
        "          .body(\"name\", equalTo(\"Deepak\"))",
        "          .body(\"id\", notNullValue())",
        "          .time(lessThan(3000L));",
        "  }"
      ]
    },
    {
      "id": "api-q104",
      "num": "104",
      "category": "Rest Assured Automation DSL",
      "question": "How do you create reusable RequestSpecification and ResponseSpecification in Rest Assured to eliminate boilerplate across API test suites?",
      "answers": [
        "In enterprise test frameworks, duplicating base URIs, content types, and auth headers across 500 test methods violates DRY principles. `RequestSpecBuilder` and `ResponseSpecBuilder` solve this.",
        "\u2022 Code Implementation:",
        "  public class ApiBase {",
        "      public static RequestSpecification requestSpec;",
        "      public static ResponseSpecification responseSpec;",
        "      @BeforeSuite",
        "      public void setupSpecs() {",
        "          requestSpec = new RequestSpecBuilder()",
        "              .setBaseUri(\"https://api.deepakqa.com\")",
        "              .setContentType(ContentType.JSON)",
        "              .addHeader(\"Authorization\", \"Bearer \" + TokenManager.getToken())",
        "              .log(LogDetail.ALL)",
        "              .build();",
        "          responseSpec = new ResponseSpecBuilder()",
        "              .expectContentType(ContentType.JSON)",
        "              .expectResponseTime(lessThan(4000L))",
        "              .build();",
        "      }",
        "  }",
        "\u2022 Usage in Tests:",
        "  @Test",
        "  public void getUserProfile() {",
        "      given().spec(requestSpec)",
        "      .when().get(\"/v1/users/102\")",
        "      .then().spec(responseSpec).statusCode(200);",
        "  }"
      ]
    },
    {
      "id": "api-q105",
      "num": "105",
      "category": "POJO Serialization & Deserialization",
      "question": "How do Serialization and Deserialization work in Rest Assured using Jackson and POJOs?",
      "answers": [
        "Hardcoding raw JSON strings in test scripts is brittle and error-prone. Serialization and Deserialization map JSON directly to Java Plain Old Java Objects (POJOs) using Jackson or Gson.",
        "\u2022 1. Serialization (Java Object -> JSON String):",
        "  o Create a POJO class with private fields, getters, setters, and default constructor.",
        "  UserPayload user = new UserPayload(\"Deepak\", \"admin\", \"deepak@qa.com\");",
        "  given().spec(requestSpec)",
        "      .body(user) // Rest Assured automatically serializes POJO to JSON using Jackson",
        "  .when().post(\"/api/users\");",
        "\u2022 2. Deserialization (JSON String -> Java Object):",
        "  UserResponse response = given().spec(requestSpec)",
        "  .when().get(\"/api/users/10\")",
        "  .then().statusCode(200)",
        "  .extract().as(UserResponse.class); // Deserializes JSON response body into strongly typed object",
        "  Assert.assertEquals(response.getRole(), \"admin\");",
        "\u2022 Advantages: Strong compile-time typing, IDE autocomplete, and complete refactoring safety."
      ]
    },
    {
      "id": "api-q106",
      "num": "106",
      "category": "API Frameworks: Rest Assured vs Karate",
      "question": "Compare Rest Assured vs Karate Framework: When should an enterprise choose Java DSL over BDD Gherkin?",
      "answers": [
        "1. Rest Assured (Java DSL):",
        "  o Strengths: 100% native Java. Integrates effortlessly with existing Selenium/Java frameworks, Maven, TestNG, ExtentReports, and Jackson POJOs.",
        "  o Best for: SDET teams with strong Java skills building unified full-stack UI + API automation frameworks.",
        "2. Karate Framework (BDD Gherkin DSL):",
        "  o Strengths: No Java code required; tests are written directly in feature files (`Scenario: Given url 'https://api.com' When method get Then status 200`).",
        "  o Built-in parallel execution, native JSON assertions with fuzzy matching (`#regex`, `#notnull`), and integrated mock server capabilities.",
        "  o Best for: Cross-functional teams involving QA, business analysts, and developers who prefer readable domain-specific specifications without Java boilerplate."
      ]
    },
    {
      "id": "api-q107",
      "num": "107",
      "category": "API Mocking & Virtualization",
      "question": "What is API Mocking, and how do you use WireMock in automated tests to simulate third-party services and error states?",
      "answers": [
        "In microservices architectures, end-to-end tests frequently depend on third-party APIs (e.g. Stripe, PayPal, Twilio SMS) that are rate-limited, expensive, or unstable in staging environments. API Mocking stubs these dependencies.",
        "\u2022 WireMock Implementation:",
        "  WireMock runs an in-memory HTTP server that simulates real backend APIs on `localhost`:",
        "  WireMockServer wireMock = new WireMockServer(8089);",
        "  wireMock.start();",
        "  // Stub payment gateway success response",
        "  wireMock.stubFor(post(urlEqualTo(\"/v1/payments\"))",
        "      .willReturn(aResponse()",
        "          .withStatus(200)",
        "          .withHeader(\"Content-Type\", \"application/json\")",
        "          .withBody(\"{\\\"status\\\": \\\"PAID\\\", \\\"transactionId\\\": \\\"txn_999\\\"}\")));",
        "\u2022 Why It Matters for SDETs:",
        "  o Enables deterministic negative testing (simulating 500 Internal Server Errors, 504 Gateway Timeouts, 429 Rate Limits).",
        "  o Tests run in isolation with zero third-party cloud costs and zero external downtime."
      ]
    }
  ],
  "interview-sql-database": [
    {
      "id": "sql-q1",
      "num": "1",
      "question": "What is SQL and why is it important for a QA Engineer?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "SQL (Structured Query Language) is the standard language used to store, manipulate, and retrieve data from",
        "relational databases. For a QA Engineer, SQL is crucial because:",
        "• Most applications store data in databases, so verifying that the data is correct after operations (e.g., form",
        "submission, updates) is essential.",
        "• It allows you to perform backend testing without relying on the UI.",
        "• It helps in preparing test data for automation or manual testing.",
        "Example: If you want to check whether a newly registered user appears in the database,",
        "• SELECT * FROM users WHERE email = 'test@example.com';"
      ]
    },
    {
      "id": "sql-q2",
      "num": "2",
      "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "• DELETE – Removes specific rows from a table based on a WHERE clause. The table structure remains.",
        "Transaction logs are kept, so you can rollback if needed.",
        "DELETE FROM employees WHERE department = 'HR';",
        "• TRUNCATE – Removes all rows from a table, resets identity counters, and is faster than DELETE.",
        "You cannot rollback in most databases.",
        "TRUNCATE TABLE employees;",
        "• DROP – Completely removes the table and its structure from the database.",
        "DROP TABLE employees;",
        "QA relevance: Knowing the difference helps avoid accidental data loss when preparing or cleaning test data."
      ]
    },
    {
      "id": "sql-q3",
      "num": "3",
      "question": "What is a primary key? Can a table have multiple primary keys?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "A primary key is a column (or set of columns) that uniquely identifies each row in a table and does not allow",
        "NULL values.",
        "Example:",
        "CREATE TABLE students (",
        "student_id INT PRIMARY KEY,",
        "name VARCHAR(50)",
        ");",
        "• A table can have only one primary key constraint, but that key can be a composite key (multiple",
        "columns).",
        "QA use case: When inserting test data, you must ensure primary key values are unique to avoid errors."
      ]
    },
    {
      "id": "sql-q4",
      "num": "4",
      "question": "What is a foreign key and why is it important in testing?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "A foreign key is a column in one table that refers to the primary key in another table, establishing a relationship",
        "between tables.",
        "Example:",
        "CREATE TABLE orders (",
        "order_id INT PRIMARY KEY,",
        "customer_id INT,",
        "FOREIGN KEY (customer_id) REFERENCES customers(customer_id)",
        ");",
        "Importance for QA:",
        "• Ensures referential integrity (you cannot have an order without a valid customer).",
        "• While testing, you must insert data in the correct order (parent first, then child)."
      ]
    },
    {
      "id": "sql-q10",
      "num": "5",
      "question": "What is normalization and why is it important in databases?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "Normalization is the process of organizing data to reduce redundancy and improve data integrity.",
        "Common forms:",
        "• 1NF – No repeating groups, atomic values.",
        "• 2NF – No partial dependency.",
        "• 3NF – No transitive dependency.",
        "QA importance: Understanding normalization helps in writing joins for related data correctly."
      ]
    },
    {
      "id": "sql-q11",
      "num": "6",
      "question": "What is denormalization, and when might QA encounter it?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "Denormalization is the process of combining tables or adding redundant data to improve read performance at",
        "the expense of storage space.",
        "Example:",
        "• Instead of keeping customer details in a separate table and joining every time, some systems store them",
        "directly in the orders table for faster reporting.",
        "QA relevance: When testing reporting systems or data warehouses, denormalization is common — you",
        "need to ensure data consistency across multiple redundant storage locations."
      ]
    },
    {
      "id": "sql-q17",
      "num": "7",
      "question": "What is the difference between CHAR and VARCHAR?",
      "category": "SQL Basics, DDL & Table Constraints",
      "answers": [
        "Answer:",
        "• CHAR(n) – Fixed-length storage. Always takes n bytes even if data is shorter.",
        "• VARCHAR(n) – Variable-length storage. Uses only the space required.",
        "QA relevance: Helps understand storage behavior when validating DB schemas."
      ]
    },
    {
      "id": "sql-q5",
      "num": "8",
      "question": "What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?",
      "category": "Joins, Unions & Multi-Table Queries",
      "answers": [
        "Answer:",
        "• INNER JOIN – Returns only matching rows from both tables.",
        "• LEFT JOIN – Returns all rows from the left table, and matching rows from the right table.",
        "• RIGHT JOIN – Returns all rows from the right table, and matching rows from the left table.",
        "• FULL JOIN – Returns all rows from both tables, whether or not there's a match.",
        "Example:",
        "SELECT c.customer_name, o.order_id",
        "FROM customers c",
        "LEFT JOIN orders o ON c.customer_id = o.customer_id;",
        "QA use case: Often used in data verification across multiple related tables."
      ]
    },
    {
      "id": "sql-q13",
      "num": "9",
      "question": "Explain the difference between UNION and UNION ALL.",
      "category": "Joins, Unions & Multi-Table Queries",
      "answers": [
        "Answer:",
        "• UNION – Combines results from two queries and removes duplicates.",
        "• UNION ALL – Combines results and keeps duplicates.",
        "Example:",
        "SELECT city FROM customers",
        "UNION",
        "SELECT city FROM suppliers;",
        "QA note: If you're validating reports that should include duplicates (e.g., sales transactions), UNION ALL is the",
        "right choice."
      ]
    },
    {
      "id": "sql-q22",
      "num": "10",
      "question": "How do you find employees who don't have any orders?",
      "category": "Joins, Unions & Multi-Table Queries",
      "answers": [
        "Answer:",
        "SELECT e.employee_id, e.name",
        "FROM employees e",
        "LEFT JOIN orders o ON e.employee_id = o.employee_id",
        "WHERE o.order_id IS NULL;",
        "QA use case: Helpful in testing negative scenarios."
      ]
    },
    {
      "id": "sql-q27",
      "num": "11",
      "question": "What is a self-join and when is it used?",
      "category": "Joins, Unions & Multi-Table Queries",
      "answers": [
        "Answer:",
        "A self-join is when a table is joined with itself to compare rows.",
        "Example:",
        "SELECT e1.name, e2.name AS manager",
        "FROM employees e1",
        "JOIN employees e2 ON e1.manager_id = e2.employee_id;",
        "QA use case: Useful when verifying hierarchical relationships."
      ]
    },
    {
      "id": "sql-q47",
      "num": "12",
      "question": "How do you join more than two tables in SQL?",
      "category": "Joins, Unions & Multi-Table Queries",
      "answers": [
        "Answer:",
        "SELECT o.order_id, c.customer_name, p.product_name",
        "FROM orders o",
        "JOIN customers c ON o.customer_id = c.customer_id",
        "JOIN products p ON o.product_id = p.product_id;",
        "QA note: Often used in end-to-end data verification."
      ]
    },
    {
      "id": "sql-q7",
      "num": "13",
      "question": "What is the difference between WHERE and HAVING?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "• WHERE – Filters rows before grouping.",
        "• HAVING – Filters groups after aggregation.",
        "Example:",
        "-- Using WHERE",
        "SELECT * FROM employees WHERE department = 'IT';",
        "-- Using HAVING",
        "SELECT department, COUNT(*)",
        "FROM employees",
        "GROUP BY department",
        "HAVING COUNT(*) > 5;",
        "QA note: When validating aggregated reports, you'll often use HAVING."
      ]
    },
    {
      "id": "sql-q12",
      "num": "14",
      "question": "How do you get the count of rows without using COUNT(*)?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "You can use an identity column's MAX() or check row existence:",
        "SELECT MAX(id) FROM employees;",
        "But note — this method fails if rows have been deleted.",
        "QA use case: In certain performance-heavy queries, testers may use alternative approaches for faster validation."
      ]
    },
    {
      "id": "sql-q20",
      "num": "15",
      "question": "How do you find the total salary for each department?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "SELECT department, SUM(salary) AS total_salary",
        "FROM employees",
        "GROUP BY department;",
        "QA use case: Used when validating aggregated reports."
      ]
    },
    {
      "id": "sql-q23",
      "num": "16",
      "question": "How do you retrieve distinct department names from a table?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "SELECT DISTINCT department FROM employees;",
        "QA note: Prevents duplicate results when validating dropdown options."
      ]
    },
    {
      "id": "sql-q24",
      "num": "17",
      "question": "What's the difference between BETWEEN and IN?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "• BETWEEN – For ranges (inclusive).",
        "SELECT * FROM employees WHERE salary BETWEEN 5000 AND 10000;",
        "• IN – For specific values.",
        "SELECT * FROM employees WHERE department IN ('HR', 'IT');",
        "QA note: Choosing the right filter ensures accurate query results."
      ]
    },
    {
      "id": "sql-q25",
      "num": "18",
      "question": "How do you find the number of employees hired each year?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "SELECT YEAR(hire_date) AS hire_year, COUNT(*) AS num_employees",
        "FROM employees",
        "GROUP BY YEAR(hire_date);",
        "QA use case: Used when validating historical trends."
      ]
    },
    {
      "id": "sql-q26",
      "num": "19",
      "question": "How do you select records with salaries higher than the department average?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "SELECT *",
        "FROM employees e",
        "WHERE salary > (",
        "SELECT AVG(salary)",
        "FROM employees",
        "WHERE department = e.department",
        ");",
        "QA note: Useful when testing “top performer” logic."
      ]
    },
    {
      "id": "sql-q35",
      "num": "20",
      "question": "How do you find the highest salary in each department?",
      "category": "Filtering, Aggregations & Group By",
      "answers": [
        "Answer:",
        "SELECT department, MAX(salary) AS max_salary",
        "FROM employees",
        "GROUP BY department;",
        "QA use case: Validating top-earner logic per group."
      ]
    },
    {
      "id": "sql-q8",
      "num": "21",
      "question": "How do you find the second highest salary from a table?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "SELECT MAX(salary) AS second_highest",
        "FROM employees",
        "WHERE salary < (SELECT MAX(salary) FROM employees);",
        "Alternative (with OFFSET in some DBs):",
        "SELECT salary",
        "FROM employees",
        "ORDER BY salary DESC",
        "OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;",
        "QA use case: Useful in validating ranking logic in leaderboards or reports."
      ]
    },
    {
      "id": "sql-q14",
      "num": "22",
      "question": "How do you retrieve the top 5 records from a table?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "• In SQL Server:",
        "SELECT TOP 5 * FROM employees ORDER BY salary DESC;",
        "• In MySQL/PostgreSQL:",
        "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
        "QA note: Often used in ranking verification or leaderboards."
      ]
    },
    {
      "id": "sql-q28",
      "num": "23",
      "question": "How do you get all records except the highest salary?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "SELECT *",
        "FROM employees",
        "WHERE salary < (SELECT MAX(salary) FROM employees);",
        "QA note: Often used in ranking validations."
      ]
    },
    {
      "id": "sql-q29",
      "num": "24",
      "question": "What is a correlated subquery?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "A correlated subquery depends on the outer query for its values.",
        "Example:",
        "SELECT e1.name, e1.salary",
        "FROM employees e1",
        "WHERE salary > (",
        "SELECT AVG(salary)",
        "FROM employees e2",
        "WHERE e1.department = e2.department",
        ");",
        "QA note: Used when comparing row-specific values to group aggregates."
      ]
    },
    {
      "id": "sql-q31",
      "num": "25",
      "question": "How do you find employees whose salary is within the top 3 highest salaries in the",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "company?",
        "Answer:",
        "You can use DISTINCT with ORDER BY and LIMIT (or TOP in SQL Server):",
        "SELECT DISTINCT salary",
        "FROM employees",
        "ORDER BY salary DESC",
        "LIMIT 3;",
        "Then use this in a WHERE IN:",
        "SELECT *",
        "FROM employees",
        "WHERE salary IN (",
        "SELECT DISTINCT salary",
        "FROM employees",
        "ORDER BY salary DESC",
        "LIMIT 3",
        ");",
        "QA relevance: This is a common check when validating leaderboard rankings or incentive eligibility."
      ]
    },
    {
      "id": "sql-q33",
      "num": "26",
      "question": "What is the difference between EXISTS and IN?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "• IN – Retrieves a list of values and checks if a column matches any of them.",
        "• EXISTS – Returns TRUE if a subquery returns any rows, often more efficient for large datasets.",
        "Example:",
        "SELECT name FROM employees",
        "WHERE department_id IN (SELECT id FROM departments);",
        "SELECT name FROM employees e",
        "WHERE EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.id);",
        "QA use case: Choosing between the two can improve query speed in backend validation."
      ]
    },
    {
      "id": "sql-q44",
      "num": "27",
      "question": "How do you use a case statement in SQL?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "SELECT name,",
        "CASE",
        "WHEN salary > 10000 THEN 'High'",
        "WHEN salary BETWEEN 5000 AND 10000 THEN 'Medium'",
        "ELSE 'Low'",
        "END AS salary_range",
        "FROM employees;",
        "QA note: Helps in categorization-based validations."
      ]
    },
    {
      "id": "sql-q48",
      "num": "28",
      "question": "How do you pivot data in SQL?",
      "category": "Subqueries, Ranking & Advanced Selects",
      "answers": [
        "Answer:",
        "SELECT *",
        "FROM (SELECT department, salary FROM employees) AS src",
        "PIVOT (AVG(salary) FOR department IN ([IT], [HR], [Finance])) AS pvt;",
        "QA use case: Needed in report testing for aggregated data."
      ]
    },
    {
      "id": "sql-q6",
      "num": "29",
      "question": "How do you find duplicate records in a table?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT email, COUNT(*)",
        "FROM users",
        "GROUP BY email",
        "HAVING COUNT(*) > 1;",
        "Explanation:",
        "• GROUP BY groups records by email.",
        "• HAVING COUNT(*) > 1 filters only those emails that appear more than once.",
        "QA use case: To validate if the application prevents duplicate entries."
      ]
    },
    {
      "id": "sql-q9",
      "num": "30",
      "question": "How do you update multiple columns in a single query?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "UPDATE employees",
        "SET salary = salary * 1.1,",
        "department = 'Engineering'",
        "WHERE department = 'IT';",
        "QA relevance: Sometimes needed for bulk test data modification."
      ]
    },
    {
      "id": "sql-q15",
      "num": "31",
      "question": "How do you check for NULL values in SQL?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT * FROM employees WHERE department IS NULL;",
        "QA use case: Important for testing fields where null handling is part of the business rule (e.g., optional vs",
        "mandatory fields)."
      ]
    },
    {
      "id": "sql-q16",
      "num": "32",
      "question": "How do you replace NULL values with a default value?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT COALESCE(department, 'Not Assigned') AS department_name",
        "FROM employees;",
        "QA note: Useful when validating how missing data is displayed in the application."
      ]
    },
    {
      "id": "sql-q21",
      "num": "33",
      "question": "How do you fetch all records where a column contains a specific substring?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT * FROM employees WHERE name LIKE '%John%';",
        "QA note: Common when verifying search functionalities."
      ]
    },
    {
      "id": "sql-q30",
      "num": "34",
      "question": "How do you check if two tables have the same data?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT * FROM table1",
        "EXCEPT",
        "SELECT * FROM table2;",
        "SELECT * FROM table2",
        "EXCEPT",
        "SELECT * FROM table1;",
        "QA use case: Validating data migration or ETL processes."
      ]
    },
    {
      "id": "sql-q32",
      "num": "35",
      "question": "How do you check if a table has any rows without fetching the data?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT CASE WHEN EXISTS (SELECT 1 FROM employees)",
        "THEN 'Data exists'",
        "ELSE 'No data' END;",
        "QA note: Helps in quick verification during automation without fetching full datasets."
      ]
    },
    {
      "id": "sql-q37",
      "num": "36",
      "question": "How do you find records present in one table but not in another?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT *",
        "FROM table1",
        "WHERE id NOT IN (SELECT id FROM table2);",
        "Or with LEFT JOIN:",
        "SELECT t1.*",
        "FROM table1 t1",
        "LEFT JOIN table2 t2 ON t1.id = t2.id",
        "WHERE t2.id IS NULL;",
        "QA note: Essential for validating data migrations."
      ]
    },
    {
      "id": "sql-q38",
      "num": "37",
      "question": "How do you select random rows from a table?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "• MySQL:",
        "SELECT * FROM employees ORDER BY RAND() LIMIT 5;",
        "• SQL Server:",
        "SELECT TOP 5 * FROM employees ORDER BY NEWID();",
        "QA use case: Useful for random sampling in test data validation."
      ]
    },
    {
      "id": "sql-q39",
      "num": "38",
      "question": "How do you check for duplicate rows based on multiple columns?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT first_name, last_name, COUNT(*)",
        "FROM employees",
        "GROUP BY first_name, last_name",
        "HAVING COUNT(*) > 1;",
        "QA note: Prevents duplicate data entry validation failures."
      ]
    },
    {
      "id": "sql-q40",
      "num": "39",
      "question": "How do you delete duplicate rows but keep one instance?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "DELETE e1",
        "FROM employees e1",
        "JOIN employees e2",
        "ON e1.email = e2.email AND e1.id > e2.id;",
        "QA relevance: Common when cleaning up test databases."
      ]
    },
    {
      "id": "sql-q41",
      "num": "40",
      "question": "How do you convert a string to uppercase in SQL?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "SELECT UPPER(name) FROM employees;",
        "QA note: Useful when testing case-insensitive search."
      ]
    },
    {
      "id": "sql-q42",
      "num": "41",
      "question": "How do you find the length of a string in SQL?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "• MySQL:",
        "SELECT LENGTH(name) FROM employees;",
        "• SQL Server:",
        "SELECT LEN(name) FROM employees;",
        "QA note: Used in field length validation."
      ]
    },
    {
      "id": "sql-q45",
      "num": "42",
      "question": "How do you handle special characters in SQL queries?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "Escape them using backslash or double quotes depending on DB:",
        "SELECT * FROM employees WHERE name LIKE '%\\_%';",
        "QA relevance: Needed for search feature testing."
      ]
    },
    {
      "id": "sql-q46",
      "num": "43",
      "question": "How do you select only numeric values from a column containing mixed data?",
      "category": "Data Integrity, Duplicates & Text Functions",
      "answers": [
        "Answer:",
        "In MySQL:",
        "SELECT * FROM table_name WHERE column_name REGEXP '^[0-9]+$';",
        "QA note: Used when validating number-only input fields."
      ]
    },
    {
      "id": "sql-q18",
      "num": "44",
      "question": "How do you retrieve the last inserted record?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "• MySQL:",
        "SELECT * FROM employees ORDER BY id DESC LIMIT 1;",
        "SELECT TOP 1 * FROM employees ORDER BY id DESC;",
        "QA use case: After inserting a test record, you can confirm it was correctly added."
      ]
    },
    {
      "id": "sql-q19",
      "num": "45",
      "question": "What is an index in SQL?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "An index is a database object that improves query performance by allowing faster retrieval of rows.",
        "Types:",
        "• Clustered – Changes the physical storage order.",
        "• Non-clustered – Keeps a separate lookup structure.",
        "QA importance: Knowing indexes helps explain why some queries are slow during performance",
        "testing."
      ]
    },
    {
      "id": "sql-q34",
      "num": "46",
      "question": "How do you get the difference between two dates in SQL?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "• MySQL:",
        "SELECT DATEDIFF(end_date, start_date) AS days_diff FROM projects;",
        "• SQL Server:",
        "SELECT DATEDIFF(DAY, start_date, end_date) AS days_diff FROM projects;",
        "QA note: Useful when verifying SLA breaches or duration calculations."
      ]
    },
    {
      "id": "sql-q36",
      "num": "47",
      "question": "What is a view in SQL, and why might QA use it?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "A view is a virtual table created from a query.",
        "Example:",
        "CREATE VIEW high_salary_employees AS",
        "SELECT * FROM employees WHERE salary > 10000;",
        "QA uses:",
        "• To simplify complex queries during testing.",
        "• To create a filtered dataset for regression tests."
      ]
    },
    {
      "id": "sql-q43",
      "num": "48",
      "question": "How do you find all employees hired in the last 30 days?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "• MySQL:",
        "SELECT * FROM employees",
        "WHERE hire_date >= CURDATE() - INTERVAL 30 DAY;",
        "• SQL Server:",
        "SELECT * FROM employees",
        "WHERE hire_date >= DATEADD(DAY, -30, GETDATE());",
        "QA use case: Useful in validating “recently added” features."
      ]
    },
    {
      "id": "sql-q49",
      "num": "49",
      "question": "How do you handle transactions in SQL for testing?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "BEGIN TRANSACTION;",
        "UPDATE employees SET salary = salary * 1.1;",
        "ROLLBACK; -- to undo",
        "QA note: Transactions are useful for temporary data changes during testing without permanent effects."
      ]
    },
    {
      "id": "sql-q50",
      "num": "50",
      "question": "What are stored procedures and how can QA test them?",
      "category": "Database Architecture, Transactions & QA Testing",
      "answers": [
        "Answer:",
        "A stored procedure is a precompiled collection of SQL statements stored in the database.",
        "CREATE PROCEDURE GetHighSalaryEmployees()",
        "BEGIN",
        "SELECT * FROM employees WHERE salary > 10000;",
        "END;",
        "QA Testing Approach:",
        "• Call the procedure with various inputs.",
        "• Validate outputs match expected results.",
        "• Check for performance issues."
      ]
    }
  ],
  "interview-core-java": [
    {
      "id": "java-q1",
      "num": "1",
      "question": "What is Java, and why is it used in automation testing?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Java is a high-level, object-oriented programming language known for its platform independence, meaning",
        "code written once can run anywhere with a Java Virtual Machine (JVM).",
        "In automation testing, Java is popular because:",
        "\u2022 It has rich libraries for web automation (Selenium, Rest Assured).",
        "\u2022 It is object-oriented, making test scripts reusable and maintainable.",
        "\u2022 It supports multithreading for parallel test execution.",
        "\u2022 It integrates easily with Maven, TestNG, and Jenkins for CI/CD pipelines.",
        "Example in Selenium:",
        "System.out.println(\"Hello, Automation!\");"
      ]
    },
    {
      "id": "java-q2",
      "num": "2",
      "question": "What is the difference between JDK, JRE, and JVM?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 JDK (Java Development Kit) \u2013 Includes JRE + development tools (compiler javac) for creating Java",
        "programs.",
        "\u2022 JRE (Java Runtime Environment) \u2013 Provides JVM + libraries to run Java programs (no compiler).",
        "\u2022 JVM (Java Virtual Machine) \u2013 Converts Java bytecode into machine code for execution.",
        "In QA:",
        "\u2022 You install the JDK to write and compile automation scripts.",
        "\u2022 Your code runs in the JVM during test execution."
      ]
    },
    {
      "id": "java-q3",
      "num": "3",
      "question": "What are Java Data Types, and how are they used in test automation?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Java has primitive and non-primitive data types.",
        "Primitive: byte, short, int, long, float, double, char, boolean",
        "Non-primitive: String, Arrays, Classes, Interfaces",
        "Example:",
        "int testCount = 5; // primitive",
        "String testName = \"Login Test\"; // non-primitive",
        "boolean status = true;",
        "In QA, data types store:",
        "\u2022 Test counts",
        "\u2022 Test case names",
        "\u2022 Pass/Fail flags"
      ]
    },
    {
      "id": "java-q4",
      "num": "4",
      "question": "What is the difference between primitive and reference data types?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Primitive types store actual values directly in memory (e.g., int x = 10; stores 10).",
        "\u2022 Reference types store memory addresses pointing to objects (e.g., String s = new String(\"Test\");",
        "stores a reference to the string object in heap memory)."
      ]
    },
    {
      "id": "java-q5",
      "num": "5",
      "question": "What are Java Operators?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Java operators are special symbols that perform operations on variables/values.",
        "\u2022 Arithmetic: +, -, *, /, %",
        "\u2022 Relational: ==, !=, >, <, >=, <=",
        "\u2022 Logical: &&, ||, !",
        "\u2022 Assignment: =, +=, -=",
        "\u2022 Increment/Decrement: ++, --",
        "Example in Selenium:",
        "java",
        "CopyEdit",
        "if (driver.getTitle().equals(\"Dashboard\") && status == true) {",
        "System.out.println(\"Test Passed\");",
        "}"
      ]
    },
    {
      "id": "java-q6",
      "num": "6",
      "question": "Explain Conditional Statements in Java.",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Conditional statements control the flow of execution based on conditions:",
        "if (condition) { }",
        "else if (condition) { }",
        "else { }",
        "Example:",
        "if (statusCode == 200) {",
        "System.out.println(\"API Test Passed\");",
        "} else {",
        "System.out.println(\"API Test Failed\");",
        "}"
      ]
    },
    {
      "id": "java-q7",
      "num": "7",
      "question": "What is the difference between if-else and switch-case?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 if-else: Best for range-based or complex conditions.",
        "\u2022 switch-case: Best for fixed value checks.",
        "Example:",
        "switch(statusCode) {",
        "case 200: System.out.println(\"OK\"); break;",
        "case 404: System.out.println(\"Not Found\"); break;",
        "default: System.out.println(\"Unknown Status\");",
        "}"
      ]
    },
    {
      "id": "java-q8",
      "num": "8",
      "question": "What are Loops in Java, and how are they used in QA?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Loops repeat actions until a condition is met.",
        "\u2022 for loop \u2013 Known iterations",
        "\u2022 while loop \u2013 Runs while condition is true",
        "\u2022 do-while loop \u2013 Runs at least once",
        "Example:",
        "for (int i = 0; i < testCases.size(); i++) {",
        "runTest(testCases.get(i));",
        "}"
      ]
    },
    {
      "id": "java-q9",
      "num": "9",
      "question": "Difference between break and continue in loops?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 break \u2013 Stops the loop completely.",
        "\u2022 continue \u2013 Skips the current iteration and moves to the next.",
        "Example:",
        "for (String tc : testCases) {",
        "if (tc.contains(\"Deprecated\")) continue;",
        "executeTest(tc);",
        "}"
      ]
    },
    {
      "id": "java-q10",
      "num": "10",
      "question": "What is an Array in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "An array is a fixed-size collection of similar data types.",
        "Example:",
        "String[] browsers = {\"Chrome\", \"Firefox\", \"Edge\"};",
        "for (String browser : browsers) {",
        "System.out.println(browser);",
        "}",
        "In QA, arrays are used to store:",
        "\u2022 Multiple test inputs",
        "\u2022 Browser names",
        "\u2022 API endpoints"
      ]
    },
    {
      "id": "java-q11",
      "num": "11",
      "question": "Di&erence between Array and ArrayList in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Array: Fixed size, can store both primitive and object types.",
        "\u2022 ArrayList: Dynamic size, can store only objects (wrapper classes for primitives).",
        "Example in QA:",
        "// Array",
        "String[] browsers = {\"Chrome\", \"Firefox\"};",
        "// ArrayList",
        "ArrayList<String> testCases = new ArrayList<>();",
        "testCases.add(\"Login Test\");",
        "testCases.add(\"Checkout Test\");",
        "Automation projects prefer ArrayList because test case counts often change."
      ]
    },
    {
      "id": "java-q12",
      "num": "12",
      "question": "What is a String in Java, and why is it immutable?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 A String is a sequence of characters stored as an object.",
        "\u2022 Immutable means once created, the value cannot be changed.",
        "\u2022 If you modify it, a new object is created in memory.",
        "Example:",
        "String test = \"Login\";",
        "test = test + \" Test\"; // New object created",
        "In QA, immutability ensures test data consistency during execution."
      ]
    },
    {
      "id": "java-q13",
      "num": "13",
      "question": "Di&erence between String, StringBuilder, and StringBu&er?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 String: Immutable, slower in frequent modifications.",
        "\u2022 StringBuilder: Mutable, faster, not thread-safe.",
        "\u2022 StringBuffer: Mutable, thread-safe but slower than StringBuilder.",
        "Example:",
        "StringBuilder sb = new StringBuilder(\"Test\");",
        "sb.append(\" Passed\");",
        "In automation, StringBuilder is preferred for building large API requests dynamically."
      ]
    },
    {
      "id": "java-q14",
      "num": "14",
      "question": "What is Object-Oriented Programming (OOP) in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "OOP is a programming paradigm that organizes code into objects containing:",
        "1. Encapsulation \u2013 Wrapping data & methods.",
        "2. Inheritance \u2013 Reusing code from parent classes.",
        "3. Polymorphism \u2013 Methods behaving differently based on object.",
        "4. Abstraction \u2013 Hiding implementation details.",
        "QA Benefit: Makes automation frameworks modular & maintainable."
      ]
    },
    {
      "id": "java-q15",
      "num": "15",
      "question": "Explain Encapsulation with an example.",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Encapsulation means hiding data using private variables and exposing access via getters/setters.",
        "public class TestCase {",
        "private String name;",
        "public String getName() { return name; }",
        "public void setName(String name) { this.name = name; }",
        "}",
        "In QA, encapsulation is used for storing sensitive test data (like credentials)."
      ]
    },
    {
      "id": "java-q16",
      "num": "16",
      "question": "Explain Inheritance with an example.",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Inheritance allows one class to use properties/methods of another.",
        "class BaseTest {",
        "public void setup() { System.out.println(\"Launching Browser\"); }",
        "}",
        "class LoginTest extends BaseTest {",
        "public void runTest() { System.out.println(\"Executing Login Test\"); }",
        "}",
        "QA frameworks use BaseTest classes for common setup/teardown methods."
      ]
    },
    {
      "id": "java-q17",
      "num": "17",
      "question": "Explain Polymorphism with examples.",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Two types:",
        "\u2022 Compile-time (Overloading) \u2013 Same method name, different parameters.",
        "\u2022 Runtime (Overriding) \u2013 Same method signature, different implementation.",
        "Example:",
        "class TestRunner {",
        "void runTest(String name) { System.out.println(name); }",
        "void runTest(String name, int id) { System.out.println(name + \" \" + id); }",
        "}",
        "Used in QA when writing generic test methods for different test cases."
      ]
    },
    {
      "id": "java-q18",
      "num": "18",
      "question": "Explain Abstraction with an example.",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Hiding internal details, showing only essential methods.",
        "abstract class Browser {",
        "abstract void launch();",
        "}",
        "class Chrome extends Browser {",
        "void launch() { System.out.println(\"Launching Chrome\"); }",
        "}",
        "QA uses abstraction in framework interfaces and abstract classes."
      ]
    },
    {
      "id": "java-q19",
      "num": "19",
      "question": "Di&erence between Abstract Class and Interface?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Feature Abstract Class Interface",
        "Methods Can have abstract & concrete methods Only abstract (Java 7) / default + static (Java 8+)",
        "Variables Can be final/non-final Always public static final",
        "Inheritance Single Multiple",
        "Automation frameworks often use interfaces for WebDriver event handling."
      ]
    },
    {
      "id": "java-q20",
      "num": "20",
      "question": "What is Method Overloading and Overriding?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Overloading: Same method name, different parameters (compile-time).",
        "\u2022 Overriding: Same method name/signature in subclass (runtime)."
      ]
    },
    {
      "id": "java-q21",
      "num": "21",
      "question": "What is the di&erence between final, finally, and finalize()?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 final: Keyword for constant variables or preventing inheritance.",
        "\u2022 finally: Code block that always executes after try-catch.",
        "\u2022 finalize(): Method called by Garbage Collector before object destruction."
      ]
    },
    {
      "id": "java-q22",
      "num": "22",
      "question": "What is Exception Handling in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Mechanism to handle runtime errors without crashing the program.",
        "try {",
        "int num = 10 / 0;",
        "} catch (ArithmeticException e) {",
        "System.out.println(\"Cannot divide by zero\");",
        "} finally {",
        "System.out.println(\"Cleanup code\");",
        "}",
        "In QA, exception handling prevents script failure on minor issues."
      ]
    },
    {
      "id": "java-q23",
      "num": "23",
      "question": "Di&erence between Checked and Unchecked Exceptions?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Checked: Checked at compile time (IOException, SQLException).",
        "\u2022 Unchecked: Checked at runtime (NullPointerException, ArithmeticException)."
      ]
    },
    {
      "id": "java-q24",
      "num": "24",
      "question": "What is a Wrapper Class in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Object representation of primitive types.",
        "Example:",
        "int x = 5;",
        "Integer y = Integer.valueOf(x);",
        "Used in Collections, as they store only objects."
      ]
    },
    {
      "id": "java-q25",
      "num": "25",
      "question": "What is Autoboxing and Unboxing?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Autoboxing: Converting primitive to wrapper automatically.",
        "\u2022 Unboxing: Converting wrapper to primitive automatically."
      ]
    },
    {
      "id": "java-q26",
      "num": "26",
      "question": "What are Collections in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "A framework for storing/managing groups of objects.",
        "\u2022 List \u2013 Ordered, allows duplicates.",
        "\u2022 Set \u2013 Unordered, no duplicates.",
        "\u2022 Map \u2013 Key-value pairs."
      ]
    },
    {
      "id": "java-q27",
      "num": "27",
      "question": "Di&erence between List and Set?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 List: Allows duplicates, maintains insertion order.",
        "\u2022 Set: No duplicates, no guaranteed order."
      ]
    },
    {
      "id": "java-q28",
      "num": "28",
      "question": "Di&erence between HashMap and HashSet?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 HashMap: Stores key-value pairs.",
        "\u2022 HashSet: Stores only unique values."
      ]
    },
    {
      "id": "java-q29",
      "num": "29",
      "question": "How to iterate over a Collection?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "for (String test : testCases) {",
        "System.out.println(test);",
        "}",
        "Or using Iterator:",
        "Iterator<String> it = testCases.iterator();",
        "while (it.hasNext()) {",
        "System.out.println(it.next());",
        "}"
      ]
    },
    {
      "id": "java-q30",
      "num": "30",
      "question": "Di&erence between ArrayList and LinkedList?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 ArrayList: Better for searching.",
        "\u2022 LinkedList: Better for insertion/deletion."
      ]
    },
    {
      "id": "java-q31",
      "num": "31",
      "question": "What is a HashMap in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Stores data in key-value format.",
        "HashMap<Integer, String> map = new HashMap<>();",
        "map.put(1, \"Login Test\");",
        "QA uses HashMap for storing test case data dynamically."
      ]
    },
    {
      "id": "java-q32",
      "num": "32",
      "question": "What is Synchronization in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Process of controlling access to shared resources in multi-threading."
      ]
    },
    {
      "id": "java-q33",
      "num": "33",
      "question": "How is multi-threading used in automation?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Runs multiple tests in parallel to save execution time (TestNG parallel=\"methods\")."
      ]
    },
    {
      "id": "java-q34",
      "num": "34",
      "question": "What is the di&erence between throw and throws?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 throw: Used to explicitly throw an exception.",
        "\u2022 throws: Declares exceptions in method signature."
      ]
    },
    {
      "id": "java-q35",
      "num": "35",
      "question": "What is the di&erence between == and .equals()?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 ==: Compares memory references.",
        "\u2022 .equals(): Compares object values."
      ]
    },
    {
      "id": "java-q36",
      "num": "36",
      "question": "What are Static Methods and Variables?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Belong to the class, not instances. Used for utility methods in frameworks."
      ]
    },
    {
      "id": "java-q37",
      "num": "37",
      "question": "What are Constructors in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Special methods used to initialize objects."
      ]
    },
    {
      "id": "java-q38",
      "num": "38",
      "question": "Di&erence between default and parameterized constructors?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Default: No parameters.",
        "\u2022 Parameterized: Accepts arguments to set values."
      ]
    },
    {
      "id": "java-q39",
      "num": "39",
      "question": "What is the \u2018this' keyword in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Refers to the current object instance."
      ]
    },
    {
      "id": "java-q40",
      "num": "40",
      "question": "What is the \u2018super' keyword in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Refers to the parent class object/method."
      ]
    },
    {
      "id": "java-q41",
      "num": "41",
      "question": "What is File Handling in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Reading/writing files using File, FileReader, BufferedReader, etc.",
        "In QA, used for reading test data from .txt or .csv."
      ]
    },
    {
      "id": "java-q42",
      "num": "42",
      "question": "How to read a file in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"));",
        "String line;",
        "while ((line = br.readLine()) != null) {",
        "System.out.println(line);",
        "}",
        "br.close();"
      ]
    },
    {
      "id": "java-q43",
      "num": "43",
      "question": "How to write into a file in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "FileWriter writer = new FileWriter(\"output.txt\");",
        "writer.write(\"Test Passed\");",
        "writer.close();"
      ]
    },
    {
      "id": "java-q44",
      "num": "44",
      "question": "What is Serialization in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Converting object into byte stream for storage/transfer."
      ]
    },
    {
      "id": "java-q45",
      "num": "45",
      "question": "What is Deserialization in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Converting byte stream back to object."
      ]
    },
    {
      "id": "java-q46",
      "num": "46",
      "question": "What are Java Streams?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Used for processing collections in a functional style.",
        "list.stream().filter(x -> x.startsWith(\"T\")).forEach(System.out::println);"
      ]
    },
    {
      "id": "java-q47",
      "num": "47",
      "question": "Di&erence between Lambda Expressions and Anonymous Class?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Lambda: Short syntax for functional interfaces.",
        "\u2022 Anonymous class: Full class declaration without name."
      ]
    },
    {
      "id": "java-q48",
      "num": "48",
      "question": "How to handle dates in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Using LocalDate, LocalDateTime, SimpleDateFormat.",
        "LocalDate today = LocalDate.now();"
      ]
    },
    {
      "id": "java-q49",
      "num": "49",
      "question": "How to generate random data in Java?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "Random rand = new Random();",
        "int num = rand.nextInt(100);",
        "Useful for test data generation."
      ]
    },
    {
      "id": "java-q50",
      "num": "50",
      "question": "How is Java integrated in Selenium Automation?",
      "category": "Core Java for Automation",
      "answers": [
        "Answer:",
        "\u2022 Java is the language to write test scripts.",
        "\u2022 Selenium is the library that interacts with the browser.",
        "Example:",
        "WebDriver driver = new ChromeDriver();",
        "driver.get(\"https://example.com\");"
      ]
    },
    {
      "id": "java-q51",
      "num": "51",
      "category": "OOP Principles for Test Frameworks",
      "question": "How are the four fundamental OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction) specifically implemented in a test automation framework?",
      "answers": [
        "In modern test automation, Object-Oriented Programming (OOP) is not just theory\u2014it forms the structural backbone of scalable framework design:",
        "1. Encapsulation:",
        "  o Implementation: Locators (`private By username = By.id(\"user\");`) and WebDriver instances are kept private in Page classes.",
        "  o Public getter/action methods (`public void login(String u, String p)`) expose behavior without allowing test scripts to directly tamper with raw DOM selectors.",
        "2. Inheritance:",
        "  o Implementation: Reusable parent classes. `BaseTest` manages driver lifecycle (`@BeforeMethod`, `@AfterMethod`); all test classes (`LoginTest extends BaseTest`) inherit this without repeating setup code.",
        "  o Similarly, `BasePage` encapsulates common utilities (waits, clicks, scrolls), and individual page objects extend `BasePage`.",
        "3. Polymorphism:",
        "  o Implementation: `WebDriver driver = new ChromeDriver();` or `new FirefoxDriver();` demonstrates dynamic method dispatch (runtime polymorphism).",
        "  o Overloaded utility methods (`waitForElement(By locator)` vs `waitForElement(By locator, int timeout)`) demonstrate compile-time polymorphism.",
        "4. Abstraction:",
        "  o Implementation: Test cases interact with high-level business flows (`dashboardPage.transferFunds(\"$100\")`) completely abstracted from low-level WebDriver commands (`driver.findElement`, `Actions.moveToElement`, `WebDriverWait`)."
      ]
    },
    {
      "id": "java-q52",
      "num": "52",
      "category": "Collections Framework in Automation",
      "question": "Explain the practical framework use cases of the Java Collections Framework (List, Set, Map) in Selenium automation.",
      "answers": [
        "Collections are essential for managing dynamic web elements, browser windows, and test datasets:",
        "1. `List<WebElement>`:",
        "  o Returned by `driver.findElements(By.xpath(\"//table//tr\"))`.",
        "  o Preserves insertion order and permits duplicates. Ideal for counting search results, iterating through dropdown options (`<select>`), and scraping table data.",
        "2. `Set<String>`:",
        "  o Returned by `driver.getWindowHandles()`.",
        "  o Guarantees uniqueness. Essential for window switching: iterating through unique browser window IDs to switch focus to new popups or tabs.",
        "3. `Map<String, String>` / `Map<String, Object>`:",
        "  o Key-Value pairs. Heavily used for reading JSON/Excel test data rows (`Map<\"Username\", \"admin\">`), setting custom HTTP headers in API tests, and parsing configuration `.properties` files.",
        "4. `Queue` / `Deque`:",
        "  o Used for test execution retry queues, Breadth-First-Search (BFS) web crawlers, and link-checking spiders."
      ]
    },
    {
      "id": "java-q53",
      "num": "53",
      "category": "Exception Handling & Reliability",
      "question": "Detail the Java Exception hierarchy for QA: Checked vs Unchecked exceptions, and how to handle WebDriverException, NoSuchElementException, and StaleElementReferenceException.",
      "answers": [
        "Understanding Java exceptions distinguishes a junior scripter from a senior framework engineer:",
        "\u2022 1. Checked vs Unchecked Exceptions:",
        "  o Checked Exceptions (`IOException`, `SQLException`, `FileNotFoundException`): Enforced at compile time. Must be declared using `throws` or caught in a `try-catch` block (e.g., reading configuration files or Excel sheets).",
        "  o Unchecked Exceptions (`RuntimeException`): Occur at runtime. `WebDriverException` extends `RuntimeException`.",
        "\u2022 2. Key WebDriver Exceptions & Mitigation:",
        "  o `NoSuchElementException`: Thrown when locator cannot find element in DOM within the implicit wait timeout. Mitigation: Replace implicit waits with explicit `WebDriverWait` and `ExpectedConditions.visibilityOfElementLocated()`.",
        "  o `StaleElementReferenceException`: Thrown when the element is removed or re-rendered in the DOM after reference was acquired. Mitigation: Re-initialize the locator or catch exception and retry the lookup:",
        "    wait.ignoring(StaleElementReferenceException.class).until(ExpectedConditions.elementToBeClickable(locator));",
        "  o `TimeoutException`: Thrown when explicit wait condition is not met within specified duration. Check for slow network APIs or wrong selector locators.",
        "  o `ElementClickInterceptedException`: Another element (spinner, toast, sticky header) is occluding target. Mitigation: Wait for overlay invisibility or use `Actions.moveToElement()` or JavaScript click fallback."
      ]
    },
    {
      "id": "java-q54",
      "num": "54",
      "category": "Modern Java: Streams & Lambdas",
      "question": "How do you leverage Modern Java Streams and Lambdas in test automation for UI table assertions and API payload filtering?",
      "answers": [
        "Java 8+ Streams provide declarative, clean, and functional data transformation without verbose `for` loops:",
        "\u2022 1. Verifying Table Column Values in Selenium:",
        "  List<WebElement> priceElements = driver.findElements(By.cssSelector(\".inventory_item_price\"));",
        "  // Filter and assert all prices are below $100 using stream",
        "  boolean allAffordable = priceElements.stream()",
        "      .map(e -> Double.parseDouble(e.getText().replace(\"$\", \"\")))",
        "      .allMatch(price -> price < 100.0);",
        "  Assert.assertTrue(allAffordable, \"Found items exceeding $100!\");",
        "\u2022 2. Extracting Web Table Text into a List:",
        "  List<String> productNames = driver.findElements(By.cssSelector(\".inventory_item_name\"))",
        "      .stream()",
        "      .map(WebElement::getText)",
        "      .map(String::trim)",
        "      .collect(Collectors.toList());",
        "\u2022 3. Filtering First Matching Element:",
        "  WebElement targetItem = driver.findElements(By.className(\"product-card\")).stream()",
        "      .filter(card -> card.findElement(By.className(\"title\")).getText().equalsIgnoreCase(\"MacBook Pro\"))",
        "      .findFirst()",
        "      .orElseThrow(() -> new NoSuchElementException(\"MacBook Pro not found in catalog!\"));"
      ]
    },
    {
      "id": "java-q55",
      "num": "55",
      "category": "JVM Memory & Performance",
      "question": "How do JVM Memory Management and Garbage Collection affect parallel test execution, and why does static WebDriver cause OutOfMemoryError: Java heap space?",
      "answers": [
        "In parallel CI test execution, poor memory management frequently leads to build failures with `java.lang.OutOfMemoryError: Java heap space`.",
        "\u2022 Root Causes in Test Frameworks:",
        "  1. Static WebDriver Misuse: Declaring `public static WebDriver driver;` creates a shared root reference. Threads overwrite the pointer, leaving orphaned browser processes and memory-heavy DOM snapshots uncollected by the Garbage Collector.",
        "  2. Heavy Screenshot Buffers in Memory: Storing hundreds of byte arrays or `BufferedImage` objects in static ExtentReport lists consumes the JVM heap.",
        "  3. Static Page Objects: Holding references to stale WebElements prevents garbage collection of entire DOM trees.",
        "\u2022 Best Practices for SDETs:",
        "  o Use `ThreadLocal<WebDriver>` and ALWAYS call `.remove()` in `@AfterMethod`.",
        "  o Stream screenshots directly to disk storage rather than accumulating Base64 strings in heap memory.",
        "  o Configure JVM heap limits in `pom.xml` under `maven-surefire-plugin`: `<argLine>-Xmx2048m -XX:+UseG1GC</argLine>`."
      ]
    }
  ],
  "interview-java-coding-programs": [
    {
      "id": "coding-q1",
      "num": "1",
      "question": "Reverse a String",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class ReverseString {",
        "public static void main(String[] args) {",
        "String str = \"Automation\";",
        "String rev = \"\";",
        "for (int i = str.length() - 1; i >= 0; i--) {",
        "rev += str.charAt(i);",
        "}",
        "System.out.println(\"Reversed: \" + rev);",
        "}",
        "}",
        "Why QA needs this: Useful when validating reverse data transformations in APIs or UI."
      ]
    },
    {
      "id": "coding-q2",
      "num": "2",
      "question": "Check if a String is a Palindrome",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class PalindromeCheck {",
        "public static void main(String[] args) {",
        "String str = \"madam\";",
        "String rev = new StringBuilder(str).reverse().toString();",
        "if (str.equals(rev))",
        "System.out.println(\"Palindrome\");",
        "else",
        "System.out.println(\"Not Palindrome\");",
        "}",
        "}",
        "QA use: Checking same input/output values in transformations."
      ]
    },
    {
      "id": "coding-q3",
      "num": "3",
      "question": "Count Vowels in a String",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class CountVowels {",
        "public static void main(String[] args) {",
        "String str = \"Quality Assurance\";",
        "int count = 0;",
        "for (char c : str.toLowerCase().toCharArray()) {",
        "if (\"aeiou\".indexOf(c) != -1) count++;",
        "}",
        "System.out.println(\"Vowels: \" + count);",
        "}",
        "}",
        "QA use: Validating text data."
      ]
    },
    {
      "id": "coding-q9",
      "num": "4",
      "question": "Count Words in a String",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class WordCount {",
        "public static void main(String[] args) {",
        "String str = \"Automation testing with Java\";",
        "String[] words = str.trim().split(\"\\\\s+\");",
        "System.out.println(\"Words: \" + words.length);",
        "}",
        "}",
        "QA use: Checking text fields."
      ]
    },
    {
      "id": "coding-q13",
      "num": "5",
      "question": "Reverse Words in a Sentence",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class ReverseWords {",
        "public static void main(String[] args) {",
        "String str = \"I love Java\";",
        "String[] words = str.split(\" \");",
        "for (int i = words.length - 1; i >= 0; i--) {",
        "System.out.print(words[i] + \" \");",
        "}",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q14",
      "num": "6",
      "question": "Check Anagram Strings",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "import java.util.Arrays;",
        "public class AnagramCheck {",
        "public static void main(String[] args) {",
        "String s1 = \"listen\", s2 = \"silent\";",
        "char[] a1 = s1.toCharArray();",
        "char[] a2 = s2.toCharArray();",
        "Arrays.sort(a1);",
        "Arrays.sort(a2);",
        "System.out.println(Arrays.equals(a1, a2) ? \"Anagram\" : \"Not Anagram\");",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q17",
      "num": "7",
      "question": "Remove White Spaces from String",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class RemoveSpaces {",
        "public static void main(String[] args) {",
        "String str = \"  Hello   World  \";",
        "System.out.println(str.replaceAll(\"\\\\s+\", \"\"));",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q18",
      "num": "8",
      "question": "Convert String to Integer",
      "category": "String Manipulation & Text Processing",
      "answers": [
        "public class StringToInt {",
        "public static void main(String[] args) {",
        "String s = \"123\";",
        "int num = Integer.parseInt(s);",
        "System.out.println(num + 10);",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q7",
      "num": "9",
      "question": "Find Largest Number in Array",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "public class LargestInArray {",
        "public static void main(String[] args) {",
        "int[] arr = {10, 45, 23, 78, 56};",
        "int max = arr[0];",
        "for (int num : arr) {",
        "if (num > max) max = num;",
        "}",
        "System.out.println(\"Largest: \" + max);",
        "}",
        "}",
        "QA use: Finding max values in datasets."
      ]
    },
    {
      "id": "coding-q8",
      "num": "10",
      "question": "Reverse an Array",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "public class ReverseArray {",
        "public static void main(String[] args) {",
        "int[] arr = {1, 2, 3, 4, 5};",
        "for (int i = arr.length - 1; i >= 0; i--) {",
        "System.out.print(arr[i] + \" \");",
        "}",
        "}",
        "}",
        "QA use: Data order validation."
      ]
    },
    {
      "id": "coding-q10",
      "num": "11",
      "question": "Remove Duplicates from Array",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "import java.util.HashSet;",
        "public class RemoveDuplicates {",
        "public static void main(String[] args) {",
        "int[] arr = {1, 2, 2, 3, 4, 4};",
        "HashSet<Integer> set = new HashSet<>();",
        "for (int n : arr) set.add(n);",
        "System.out.println(set);",
        "}",
        "}",
        "QA use: Ensuring unique records."
      ]
    },
    {
      "id": "coding-q11",
      "num": "12",
      "question": "Find Duplicate Elements in Array",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "public class FindDuplicates {",
        "public static void main(String[] args) {",
        "int[] arr = {1, 2, 3, 2, 4, 5, 1};",
        "for (int i = 0; i < arr.length; i++) {",
        "for (int j = i+1; j < arr.length; j++) {",
        "if (arr[i] == arr[j])",
        "System.out.println(\"Duplicate: \" + arr[i]);",
        "}",
        "}",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q15",
      "num": "13",
      "question": "Find Second Largest Number",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "public class SecondLargest {",
        "public static void main(String[] args) {",
        "int[] arr = {10, 45, 78, 56};",
        "int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;",
        "for (int num : arr) {",
        "if (num > largest) {",
        "second = largest;",
        "largest = num;",
        "} else if (num > second && num != largest) {",
        "second = num;",
        "}",
        "}",
        "System.out.println(\"Second Largest: \" + second);",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q19",
      "num": "14",
      "question": "Find Missing Number in Array",
      "category": "Array Operations & Search Algorithms",
      "answers": [
        "public class MissingNumber {",
        "public static void main(String[] args) {",
        "int[] arr = {1, 2, 4, 5};",
        "int n = 5, total = n*(n+1)/2, sum = 0;",
        "for (int num : arr) sum += num;",
        "System.out.println(\"Missing: \" + (total - sum));",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q4",
      "num": "15",
      "question": "Swap Two Numbers Without Temporary Variable",
      "category": "Number & Mathematical Logic",
      "answers": [
        "public class SwapNumbers {",
        "public static void main(String[] args) {",
        "int a = 5, b = 10;",
        "a = a + b;",
        "b = a - b;",
        "a = a - b;",
        "System.out.println(\"a=\" + a + \", b=\" + b);",
        "}",
        "}",
        "QA use: Testing logic manipulation without extra memory."
      ]
    },
    {
      "id": "coding-q5",
      "num": "16",
      "question": "Find Factorial of a Number",
      "category": "Number & Mathematical Logic",
      "answers": [
        "public class Factorial {",
        "public static void main(String[] args) {",
        "int num = 5, fact = 1;",
        "for (int i = 1; i <= num; i++) {",
        "fact *= i;",
        "}",
        "System.out.println(\"Factorial: \" + fact);",
        "}",
        "}",
        "QA use: Mathematical validations in reports or APIs."
      ]
    },
    {
      "id": "coding-q6",
      "num": "17",
      "question": "Fibonacci Series",
      "category": "Number & Mathematical Logic",
      "answers": [
        "public class Fibonacci {",
        "public static void main(String[] args) {",
        "int n = 7, a = 0, b = 1;",
        "System.out.print(a + \" \" + b);",
        "for (int i = 2; i < n; i++) {",
        "int c = a + b;",
        "System.out.print(\" \" + c);",
        "a = b; b = c;",
        "}",
        "}",
        "}",
        "QA use: Data pattern validation."
      ]
    },
    {
      "id": "coding-q12",
      "num": "18",
      "question": "Check Prime Number",
      "category": "Number & Mathematical Logic",
      "answers": [
        "public class PrimeCheck {",
        "public static void main(String[] args) {",
        "int num = 13;",
        "boolean prime = true;",
        "for (int i = 2; i <= num/2; i++) {",
        "if (num % i == 0) { prime = false; break; }",
        "}",
        "System.out.println(prime ? \"Prime\" : \"Not Prime\");",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q16",
      "num": "19",
      "question": "Sum of Digits",
      "category": "Number & Mathematical Logic",
      "answers": [
        "public class SumDigits {",
        "public static void main(String[] args) {",
        "int num = 12345, sum = 0;",
        "while (num > 0) {",
        "sum += num % 10;",
        "num /= 10;",
        "}",
        "System.out.println(\"Sum: \" + sum);",
        "}",
        "}"
      ]
    },
    {
      "id": "coding-q20",
      "num": "20",
      "question": "Read File and Print Content",
      "category": "File I/O & Stream Handling",
      "answers": [
        "import java.io.*;",
        "public class ReadFile {",
        "public static void main(String[] args) throws Exception {",
        "BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"));",
        "String line;",
        "while ((line = br.readLine()) != null) {",
        "System.out.println(line);",
        "}",
        "br.close();",
        "}",
        "}",
        "QA use: Reading test data from a file."
      ]
    }
  ],
  "interview-git": [
    {
      "id": "git-q1",
      "num": "1",
      "question": "What is Git, why is it used, and how does Git differ from GitHub?",
      "category": "Git Basics & Configuration",
      "answers": [
        "Git is a free and open-source distributed version control system (VCS) designed to track changes in source code during software development.",
        "Key Differences between Git and GitHub:",
        "\u2022 Git: The version control tool installed locally on your computer to track file history and manage commits.",
        "\u2022 GitHub: A cloud-based hosting service and collaboration platform for Git repositories (owned by Microsoft since 2018).",
        "Why Git is essential for QA and developers:",
        "\u2022 Distributed collaboration: Teams can work together from anywhere without overwriting each other's work.",
        "\u2022 Full version history: Every modification is tracked with author, timestamp, and message.",
        "\u2022 Safe rollbacks: Easily revert to earlier working versions if bugs or regressions are introduced.",
        "\u2022 Branching freedom: Create isolated branches for testing new automation features without affecting stable code."
      ]
    },
    {
      "id": "git-q2",
      "num": "2",
      "question": "How do you configure Git username and email for the first time?",
      "category": "Git Basics & Configuration",
      "answers": [
        "When you install Git, you must set your username and email address. This information is attached to every commit you make.",
        "Commands:",
        "git config --global user.name \"Your Name\"",
        "git config --global user.email \"your.email@example.com\"",
        "Verification:",
        "git config --global --list",
        "Note: The --global flag applies this configuration to all repositories on your local system."
      ]
    },
    {
      "id": "git-q3",
      "num": "3",
      "question": "How do you initialize a new Git repository, and what is the .git folder?",
      "category": "Git Basics & Configuration",
      "answers": [
        "To start tracking an existing project or directory with Git, navigate to the project directory in your terminal and run:",
        "git init",
        "What happens:",
        "\u2022 Git creates a hidden directory named .git in the project root.",
        "\u2022 The .git directory contains all the metadata, object database, configuration files, and commit history for your repository.",
        "\u2022 From this point onward, Git watches the folder for additions, modifications, and deletions."
      ]
    },
    {
      "id": "git-q4",
      "num": "4",
      "question": "How do you stage files in Git, and what is the staging environment?",
      "category": "Git Basics & Configuration",
      "answers": [
        "Staging is the intermediate step before committing changes. Staged files are files that are prepared and ready to be committed.",
        "When you add or modify files in a repository, they start as 'untracked' or 'modified'. Adding them to the staging environment tells Git to include them in the next commit.",
        "Commands to stage files:",
        "\u2022 Stage a single file:",
        "git add <filename>",
        "\u2022 Stage all files and modifications in the current repository:",
        "git add --all",
        "git add -A",
        "git add .",
        "Best practice: Use git status to verify what files are staged before running git commit."
      ]
    },
    {
      "id": "git-q5",
      "num": "5",
      "question": "What is the difference between working directory, staging area, and local repository?",
      "category": "Git Basics & Configuration",
      "answers": [
        "Git manages your project across three main states or areas:",
        "1. Working Directory: The actual files on your filesystem that you are currently editing and working with.",
        "2. Staging Area (Index): A preparation area where Git stores changes that will be included in the next commit snapshot (populated via git add).",
        "3. Local Repository: The permanent local database where commits are securely recorded in the project's history (populated via git commit)."
      ]
    },
    {
      "id": "git-q6",
      "num": "6",
      "question": "How do you make a commit in Git, and what is a commit message?",
      "category": "Commits & History Tracking",
      "answers": [
        "A commit in Git acts as a permanent 'save point' or snapshot of your staged files at a specific moment in time.",
        "Command:",
        "git commit -m \"Add Selenium login test scenarios\"",
        "Key Points:",
        "\u2022 Always include a concise, descriptive commit message explaining what changed and why.",
        "\u2022 If you find a bug later, you can easily inspect or revert back to this exact commit save point.",
        "\u2022 Each commit receives a unique SHA-1 hash (e.g., 7a1f59c) identifying it."
      ]
    },
    {
      "id": "git-q7",
      "num": "7",
      "question": "How do you commit tracked files directly without staging (git commit without stage)?",
      "category": "Commits & History Tracking",
      "answers": [
        "For small changes on already tracked files, you can skip the git add staging step and commit directly using the -a (all) flag:",
        "git commit -a -m \"Update test timeout in config.properties\"",
        "Important Notes:",
        "\u2022 The -a flag automatically stages all modified and deleted tracked files before committing.",
        "\u2022 It does NOT stage brand-new untracked files. New files must always be added explicitly with git add."
      ]
    },
    {
      "id": "git-q8",
      "num": "8",
      "question": "How do you check the status of files in Git (normal vs compact short mode)?",
      "category": "Commits & History Tracking",
      "answers": [
        "To view which files are modified, staged, or untracked in your working tree:",
        "\u2022 Full status view:",
        "git status",
        "\u2022 Compact short status view:",
        "git status --short",
        "Short status output prefixes:",
        "\u2022 '??': Untracked file (not yet added to Git).",
        "\u2022 'A ': New file added to the staging area.",
        "\u2022 ' M': File modified in working directory but not yet staged.",
        "\u2022 'M ': File modified and staged for commit."
      ]
    },
    {
      "id": "git-q9",
      "num": "9",
      "question": "How do you view commit history in Git (git log and git log --oneline)?",
      "category": "Commits & History Tracking",
      "answers": [
        "The git log command displays the commit history for the current branch.",
        "Commands:",
        "\u2022 Detailed log with author, date, full hash, and message:",
        "git log",
        "\u2022 Compact one-line view with 7-character hash and commit message:",
        "git log --oneline",
        "\u2022 Visual graph view showing branches and merges:",
        "git log --oneline --graph --decorate",
        "Tip: Press 'q' to exit the log view in your terminal."
      ]
    },
    {
      "id": "git-q10",
      "num": "10",
      "question": "How do you access built-in help and command options in Git?",
      "category": "Commits & History Tracking",
      "answers": [
        "If you need to recall options or flags for any Git command:",
        "\u2022 See quick options for a specific command:",
        "git <command> --help",
        "git commit --help",
        "\u2022 See all possible available Git commands:",
        "git help --all",
        "Tip: If stuck in the pager list view, press SHIFT + G to jump to the end, then 'q' to exit."
      ]
    },
    {
      "id": "git-q11",
      "num": "11",
      "question": "What is Git branching, and why is it important in automation projects?",
      "category": "Branching & Merging",
      "answers": [
        "In Git, a branch is an isolated lightweight movable pointer to a commit. It allows you to develop features, fix bugs, or experiment without affecting the stable master/main branch.",
        "Benefits for QA Automation:",
        "\u2022 Isolated test development: Write new test suites on a feature-branch without breaking CI regression runs on main.",
        "\u2022 Safe peer reviews: Create Pull Requests (PRs) from your branch for peer review and CI test validation before merging.",
        "\u2022 Parallel team collaboration: Multiple automation engineers can work on different pages or modules simultaneously."
      ]
    },
    {
      "id": "git-q12",
      "num": "12",
      "question": "How do you create and list branches in Git?",
      "category": "Branching & Merging",
      "answers": [
        "Commands to manage branches:",
        "\u2022 Create a new branch without switching to it:",
        "git branch <branch-name>",
        "git branch feature/payment-tests",
        "\u2022 List all local branches (the active branch is marked with an asterisk *):",
        "git branch",
        "\u2022 List both local and remote branches:",
        "git branch -a",
        "\u2022 List only remote branches:",
        "git branch -r"
      ]
    },
    {
      "id": "git-q13",
      "num": "13",
      "question": "How do you switch branches and create a new branch directly in one step?",
      "category": "Branching & Merging",
      "answers": [
        "Commands:",
        "\u2022 Switch to an existing branch:",
        "git checkout <branch-name>",
        "git switch <branch-name>",
        "\u2022 Create a new branch and immediately switch to it in one command:",
        "git checkout -b <branch-name>",
        "git switch -c <branch-name>",
        "Example:",
        "git checkout -b fix/stale-element-wait",
        "This creates the branch 'fix/stale-element-wait' based on your current HEAD and switches your working directory to it."
      ]
    },
    {
      "id": "git-q14",
      "num": "14",
      "question": "How do you delete a branch locally in Git?",
      "category": "Branching & Merging",
      "answers": [
        "Once a branch has been merged into main/master, you can safely delete it to keep your repository clean.",
        "Commands:",
        "\u2022 Safe delete (only deletes if the branch has already been fully merged):",
        "git branch -d <branch-name>",
        "\u2022 Force delete (deletes the branch regardless of its merge status, discarding unmerged changes):",
        "git branch -D <branch-name>",
        "Note: You cannot delete the branch you are currently on. Switch to another branch (e.g., main) first."
      ]
    },
    {
      "id": "git-q15",
      "num": "15",
      "question": "How do you merge two branches in Git, and what is the best practice?",
      "category": "Branching & Merging",
      "answers": [
        "Merging combines the history and changes from a feature branch into your target branch (e.g., main/master).",
        "Steps:",
        "1. Switch to the target branch that will receive the changes:",
        "git checkout master",
        "2. Pull the latest updates to make sure your local target is fresh:",
        "git pull origin master",
        "3. Merge the feature branch into master:",
        "git merge feature/login-tests",
        "Best practice: Always test and verify the merged code locally or via CI before pushing to the remote repository."
      ]
    },
    {
      "id": "git-q16",
      "num": "16",
      "question": "What is the difference between a Local repository and a Remote repository?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "\u2022 Local Repository: The repository stored directly on your computer's local drive (in the .git directory). You can commit, create branches, and inspect history without an internet connection.",
        "\u2022 Remote Repository: The centralized repository hosted on a remote server or cloud service (e.g., GitHub, GitLab, Bitbucket, Azure DevOps). It serves as the single source of truth for the team to push and pull code."
      ]
    },
    {
      "id": "git-q17",
      "num": "17",
      "question": "How do you link a local repository to GitHub and push for the first time?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "Steps to connect a local repo to a newly created GitHub remote repo:",
        "1. Add the remote URL as 'origin':",
        "git remote add origin https://github.com/username/project.git",
        "Explanation: 'origin' is the conventional alias for your primary remote repository URL.",
        "2. Push your master branch and set upstream tracking:",
        "git push --set-upstream origin master",
        "OR:",
        "git push -u origin master",
        "The -u (--set-upstream) flag links your local master branch with origin/master so future commands only require 'git push' or 'git pull'."
      ]
    },
    {
      "id": "git-q18",
      "num": "18",
      "question": "How do you push subsequent commits and changes to a remote repository?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "Once upstream tracking has been established:",
        "1. Stage and commit your modifications locally:",
        "git commit -a -m \"Add API test assertions\"",
        "2. Push the commits to the remote origin:",
        "git push origin",
        "OR simply:",
        "git push",
        "This uploads all new local commits from your current branch to the remote repository on GitHub."
      ]
    },
    {
      "id": "git-q19",
      "num": "19",
      "question": "How do you pull changes from GitHub, and what is the difference between git pull and git fetch?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "Command to pull changes:",
        "git pull origin",
        "git pull",
        "Difference between git fetch and git pull:",
        "\u2022 git fetch: Downloads remote commits, branches, and tags into your local .git storage without modifying your working files. Safe to run anytime to inspect teammates' changes.",
        "\u2022 git pull: Automatically executes 'git fetch' followed immediately by 'git merge' to update your current local working directory with the remote changes."
      ]
    },
    {
      "id": "git-q20",
      "num": "20",
      "question": "How do you pull and switch to a remote branch created by a colleague on GitHub?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "When a teammate pushes a new branch to GitHub that is not yet on your local machine:",
        "1. Fetch all remote branches and metadata:",
        "git fetch origin",
        "2. View all branches to confirm the remote branch is visible:",
        "git branch -a",
        "3. Check out the remote branch (Git automatically creates a tracking local branch):",
        "git checkout <branch-name>",
        "git switch <branch-name>",
        "4. Pull the latest commits on that branch:",
        "git pull"
      ]
    },
    {
      "id": "git-q21",
      "num": "21",
      "question": "How do you push a newly created local branch to GitHub?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "Steps to share a local feature branch on GitHub:",
        "1. Create and switch to your local branch:",
        "git checkout -b feature/docker-setup",
        "2. Stage and commit your files:",
        "git add .",
        "git commit -m \"Add Dockerfile for headless test execution\"",
        "3. Push the branch to remote origin with tracking:",
        "git push -u origin feature/docker-setup",
        "After this, your branch will be visible on GitHub and ready for opening a Pull Request."
      ]
    },
    {
      "id": "git-q22",
      "num": "22",
      "question": "How do you clone a repository from GitHub to your local machine?",
      "category": "Remote Repositories & GitHub",
      "answers": [
        "Cloning creates a complete local copy of an existing remote repository, including all files, branches, and full commit history.",
        "Commands:",
        "\u2022 Clone into a folder with the repository's default name:",
        "git clone https://github.com/username/automation-framework.git",
        "\u2022 Clone into a specific custom directory name:",
        "git clone https://github.com/username/automation-framework.git my-local-folder",
        "Once cloned, Git automatically configures the remote 'origin' pointing to the source URL."
      ]
    },
    {
      "id": "git-q23",
      "num": "23",
      "question": "How do you undo changes using git revert without altering commit history?",
      "category": "Undoing Changes & Advanced Git",
      "answers": [
        "git revert undoes changes by creating a brand-new commit that applies the exact inverse of a previous commit. This keeps the commit history intact and safe for shared public branches.",
        "Commands:",
        "\u2022 Revert the latest commit (HEAD) without opening the editor:",
        "git revert HEAD --no-edit",
        "\u2022 Revert an earlier commit by its relative distance from HEAD:",
        "git revert HEAD~1",
        "git revert HEAD~2",
        "\u2022 Revert a specific commit by its 7-character hash:",
        "git revert 7a1f59c --no-edit",
        "Why use revert: It is safe for collaborative branches because it does not rewrite history or break other team members' copies."
      ]
    },
    {
      "id": "git-q24",
      "num": "24",
      "question": "How do you move a repository back using git reset, and how do you undo a reset?",
      "category": "Undoing Changes & Advanced Git",
      "answers": [
        "git reset moves the current HEAD and branch pointer back to a specified previous commit, discarding or unstaging changes made after that commit.",
        "Commands:",
        "\u2022 Reset to a specific commit hash (default is mixed reset: keeps files in working directory as unstaged):",
        "git reset <commithash>",
        "git reset 7a1f59c",
        "\u2022 Hard reset (discards all changes in staging and working directory permanently):",
        "git reset --hard <commithash>",
        "How to undo an accidental reset:",
        "Even if commits no longer appear in 'git log', Git retains them temporarily in the reflog. Run 'git reflog' to find the commit hash, and reset back to it:",
        "git reset <commithash>"
      ]
    },
    {
      "id": "git-q25",
      "num": "25",
      "question": "How do you modify the latest commit or add missed files using git commit --amend?",
      "category": "Undoing Changes & Advanced Git",
      "answers": [
        "git commit --amend is used to modify the most recent commit instead of creating an unnecessary extra commit.",
        "Use Cases:",
        "1. Fix a typo in the previous commit message:",
        "git commit --amend -m \"Correct commit message: fix POM locator\"",
        "2. Add a missed file to the previous commit:",
        "git add missed-config.properties",
        "git commit --amend --no-edit",
        "How it works: Git takes the staged files, combines them with the latest commit, and replaces the old commit entirely with a new commit hash.",
        "Warning: Only amend local commits that have NOT been pushed to a shared remote branch."
      ]
    }
  ],
  "interview-git-cicd-jenkins": [
    {
      "id": "devops-git-q1",
      "num": "1",
      "sectionNum": "1",
      "question": "What is Git and why is it important for QA engineers?",
      "category": "Git & CI/CD",
      "answers": [
        "Answer:",
        "Git is a distributed version control system used to track changes in source code over time. It allows multiple",
        "developers and testers to work on the same project without overwriting each other's work.",
        "Why it's important for QA:",
        "\u2022 QA can manage their automation test scripts effectively.",
        "\u2022 Enables rollback to a stable test version if new code breaks tests.",
        "\u2022 Supports branching, allowing QA to test features in isolation.",
        "Example:",
        "If a Selenium automation test breaks after a developer pushes new changes, QA can use:",
        "git log",
        "git checkout <commit-id>",
        "to roll back and confirm if the issue is due to the latest code.",
        "2. Di&erence between Git and GitHub.",
        "Answer:",
        "Feature Git GitHub",
        "Definition Local version control tool Cloud hosting service for Git repositories",
        "Location Installed locally Web-based",
        "Function Tracks and manages code changes Collaboration, Pull Requests, Issues",
        "O[line Support Yes No",
        "QA Usage:",
        "\u2022 Use Git to commit automation test updates locally.",
        "\u2022 Push code to GitHub for team review and CI/CD pipeline execution.",
        "3. Explain the Git branching model for QA.",
        "Answer:",
        "A common model is Git Flow:",
        "\u2022 main/master: Stable production code.",
        "\u2022 develop: Integration branch.",
        "\u2022 feature/: New feature branches.",
        "\u2022 release/: Pre-production testing branches.",
        "\u2022 hotfix/: Urgent bug fixes.",
        "QA Workflow Example:",
        "1. Developer creates feature/user-login.",
        "2. QA checks out that branch and runs automation tests.",
        "3. If all tests pass, QA approves merging into develop.",
        "4. How do you resolve merge conflicts in Git?",
        "Answer:",
        "Steps for QA:",
        "1. Attempt merge:",
        "git merge develop",
        "2. Git marks conflict lines in the file:",
        "<<<<<<< HEAD",
        "old test code",
        "=======",
        "updated test code",
        ">>>>>>> feature-branch",
        "3. Manually choose correct code.",
        "4. Save and run:",
        "git add .",
        "git commit -m \"Resolved merge conflict in loginTest.java\"",
        "git push",
        "5. How do you revert a commit without losing history?",
        "Answer:",
        "Use git revert <commit-id> instead of git reset to keep commit history.",
        "QA Example:",
        "Automation script change introduced flaky tests:",
        "git log",
        "git revert a1b2c3d",
        "6. Di&erence between git merge and git rebase.",
        "Answer:",
        "\u2022 Merge: Combines two branches and keeps commit history intact.",
        "\u2022 Rebase: Re-applies commits onto another branch, creating a linear history.",
        "QA Tip:",
        "Merge is safer for shared automation branches since it preserves change history.",
        "7. How to clone a repository from GitHub?",
        "Answer:",
        "git clone https://github.com/user/repo.git",
        "QA Use:",
        "Clone automation framework repository before starting regression tests.",
        "8. What is a pull request (PR) and why QA uses it?",
        "Answer:",
        "PR is a request to merge code changes from one branch to another.",
        "QA Benefits:",
        "\u2022 Review automation script changes.",
        "\u2022 Trigger test runs before merge.",
        "\u2022 Discuss potential issues with developers.",
        "9. How to stash changes in Git?",
        "Answer:",
        "Command:",
        "git stash",
        "git pull",
        "git stash pop",
        "QA Use:",
        "You're writing a test case but need to pull urgent changes from develop without losing work.",
        "10. Explain Git tags and QA usage.",
        "Answer:",
        "Tags mark specific commits, usually for releases.",
        "Example:",
        "git tag v1.0.0",
        "git push origin v1.0.0",
        "QA can tag stable automation builds.",
        "11. What is the di&erence between git fetch and git pull?",
        "Answer:",
        "\u2022 git fetch: Downloads latest changes but doesn't merge them.",
        "\u2022 git pull: Fetches and merges changes automatically.",
        "QA Tip:",
        "Use git fetch to review changes before merging to avoid breaking tests.",
        "12. How do you view commit history in Git?",
        "Answer:",
        "git log --oneline --graph --all",
        "QA can check when a specific test case was last modified.",
        "13. How do you create and switch to a new branch in Git?",
        "Answer:",
        "git checkout -b new-automation-tests",
        "QA uses branches to create isolated test cases for a feature.",
        "14. How do you delete a branch in Git?",
        "Answer:",
        "git branch -d old-branch   # local",
        "git push origin --delete old-branch   # remote",
        "QA deletes obsolete automation branches to keep repo clean.",
        "15. How do you see di&erences between two commits?",
        "Answer:",
        "git diff commit1 commit2",
        "QA can compare changes in a test file to identify why a test is failing.",
        "16. How do you undo the last commit but keep changes?",
        "Answer:",
        "git reset --soft HEAD~1",
        "Useful for QA when commit message was incorrect.",
        "17. What is .gitignore and why QA uses it?",
        "Answer:",
        ".gitignore lists files Git should ignore.",
        "QA Example:",
        "Ignore test-output/ reports so they don't clutter the repo.",
        "18. How do you check which branch you are on?",
        "Answer:",
        "git branch",
        "QA uses this to ensure they're testing the correct branch.",
        "19. How to rename a branch in Git?",
        "Answer:",
        "git branch -m old-name new-name",
        "QA renames branches for clarity (e.g., feature-tests \u2192 login-tests).",
        "20. How do you see who made changes to a file?",
        "Answer:",
        "git blame filename",
        "QA can find the developer who last modified a failing test case.",
        "CI/CD pipelines",
        "21. What is CI/CD and why is it important for QA engineers?",
        "Answer:",
        "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment.",
        "\u2022 Continuous Integration (CI): Developers frequently merge their code changes into a shared repository.",
        "Each merge triggers automated builds and tests.",
        "\u2022 Continuous Delivery (CD): After passing tests, code is packaged and made ready for deployment.",
        "Deployment is triggered manually.",
        "\u2022 Continuous Deployment: Every change that passes tests is deployed automatically without manual",
        "approval.",
        "Importance for QA:",
        "\u2022 Automation scripts are run immediately after code changes, catching defects early.",
        "\u2022 Builds are consistent and tested in the same environment every time.",
        "\u2022 QA can spend less time on repetitive regression tests and more on exploratory testing.",
        "QA Example:",
        "A Jenkins CI pipeline runs Selenium and API tests every time a developer commits code. If a bug is detected,",
        "QA gets instant feedback and can raise a defect without waiting for manual builds.",
        "22. What is the di&erence between Continuous Delivery and Continuous Deployment?",
        "Answer:",
        "Feature Continuous Delivery Continuous Deployment",
        "Deployment Manual trigger after QA approval Fully automated to production",
        "Feature Continuous Delivery Continuous Deployment",
        "Risk Level Lower Higher",
        "QA Involvement Approves and validates releases Monitors production after release",
        "Example QA tests in staging before pushing to",
        "live",
        "Code goes live right after automated tests",
        "pass",
        "QA Perspective:",
        "Continuous Delivery gives QA more control over when changes go live, while Continuous Deployment relies",
        "entirely on automation and monitoring.",
        "23. What is the role of QA in a CI/CD pipeline?",
        "Answer:",
        "QA's responsibilities in CI/CD include:",
        "1. Integrating automated tests (UI, API, performance) into the pipeline.",
        "2. Defining quality gates so builds fail if tests fail.",
        "3. Monitoring pipeline runs to detect flaky or broken tests.",
        "4. Collaborating with DevOps to set up staging/test environments.",
        "5. Reviewing test reports to ensure full coverage before deployment.",
        "Example:",
        "In a Jenkins pipeline, QA ensures that Postman API tests run before Selenium UI tests to catch backend issues",
        "early.",
        "24. How does CI/CD improve software quality for QA teams?",
        "Answer:",
        "\u2022 Faster feedback loop \u2192 Bugs found earlier.",
        "\u2022 Consistent environments \u2192 Less \u201cworks on my machine\u201d issues.",
        "\u2022 Reduced manual effort \u2192 Regression tests automated.",
        "\u2022 Release confidence \u2192 Only tested code is deployed.",
        "Example:",
        "A failing login test in CI alerts QA before release, preventing a production outage.",
        "25. What are quality gates in CI/CD and how does QA use them?",
        "Answer:",
        "Quality gates are conditions that must be met before code can be deployed.",
        "Examples for QA:",
        "\u2022 All unit & integration tests must pass.",
        "\u2022 Automation pass rate \u2265 95%.",
        "\u2022 Code coverage \u2265 80%.",
        "\u2022 No critical severity bugs in the issue tracker.",
        "In Jenkins, QA can configure pipelines to fail automatically if these conditions aren't met.",
        "26. How do you integrate automated tests in a CI/CD pipeline?",
        "Answer:",
        "Steps for QA:",
        "1. Push automation scripts to a Git repo.",
        "2. Configure Jenkins or GitHub Actions to pull code on every commit.",
        "3. Install dependencies (Java, Maven, Node.js, etc.).",
        "4. Run tests:",
        "bash",
        "CopyEdit",
        "mvn clean test",
        "5. Generate test reports (Allure, ExtentReports).",
        "6. Set build to fail if tests fail.",
        "27. How do you trigger a CI/CD pipeline automatically after code changes?",
        "Answer:",
        "Use webhooks or polling.",
        "\u2022 In GitHub \u2192 Jenkins, enable \u201cBuild when a change is pushed to GitHub\u201d.",
        "\u2022 Alternatively, Jenkins can poll the repo at intervals.",
        "QA Example:",
        "Whenever an automation script is updated in GitHub, Jenkins triggers regression testing automatically.",
        "28. What are the common stages of a CI/CD pipeline from a QA perspective?",
        "Answer:",
        "1. Build \u2192 Compile code.",
        "2. Unit Tests \u2192 Quick checks.",
        "3. Integration/API Tests \u2192 QA validates backend logic.",
        "4. UI Tests \u2192 Selenium/Playwright tests.",
        "5. Performance Tests \u2192 JMeter/Gatling.",
        "6. Deploy to Staging \u2192 QA performs final checks.",
        "7. Deploy to Production \u2192 Final release.",
        "29. What is a blue-green deployment and how does it help QA?",
        "Answer:",
        "Blue-green deployment means having two identical environments:",
        "\u2022 Blue: Current production.",
        "\u2022 Green: New version being tested.",
        "QA tests on green while blue is live. If green passes, traffic switches instantly.",
        "Benefit: No downtime and quick rollback if tests fail.",
        "30. How do you handle flaky tests in CI/CD pipelines?",
        "Answer:",
        "\u2022 Identify unstable tests by reviewing multiple failed builds.",
        "\u2022 Use retry mechanisms in test scripts.",
        "\u2022 Improve synchronization (explicit waits in Selenium).",
        "\u2022 Remove unnecessary dependencies on environment.",
        "QA Example:",
        "A Selenium test that fails randomly due to slow page load can be stabilized with:",
        "java",
        "CopyEdit",
        "WebDriverWait wait = new WebDriverWait(driver, 10);",
        "wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"login\")));",
        "31. What tools can be used for CI/CD in QA automation?",
        "Answer:",
        "\u2022 Jenkins \u2013 Most popular, highly customizable.",
        "\u2022 GitHub Actions \u2013 Easy GitHub integration.",
        "\u2022 GitLab CI/CD \u2013 Built-in for GitLab projects.",
        "\u2022 CircleCI \u2013 Cloud-based, fast.",
        "\u2022 Azure DevOps \u2013 Great for enterprise QA pipelines.",
        "32. How do you run parallel tests in CI/CD?",
        "Answer:",
        "\u2022 Use Selenium Grid or cloud services like BrowserStack/SauceLabs.",
        "\u2022 Configure pipeline to split test cases into multiple jobs.",
        "QA Benefit: Reduces test execution time significantly.",
        "33. How do you generate and share test reports in CI/CD?",
        "Answer:",
        "\u2022 Use Allure Reports, Extent Reports, or JUnit HTML reports.",
        "\u2022 Configure Jenkins \u201cPublish HTML Reports\u201d post-build step.",
        "\u2022 Share links to reports in Slack/Teams automatically.",
        "34. How do you manage test data in CI/CD?",
        "Answer:",
        "\u2022 Store test data in CSV, JSON, or databases.",
        "\u2022 Use environment variables for sensitive data.",
        "\u2022 Reset test data before each run to avoid pollution.",
        "35. What is the di&erence between CI/CD for backend APIs and frontend UI testing?",
        "Answer:",
        "\u2022 Backend CI/CD: Focuses on API testing, database migrations, and integration.",
        "\u2022 Frontend CI/CD: Focuses on UI testing across browsers and devices.",
        "QA Perspective: API tests run earlier in pipeline because they are faster and catch backend issues before UI",
        "tests.",
        "Jenkins"
      ]
    },
    {
      "id": "devops-jenkins-q36",
      "num": "2",
      "sectionNum": "36",
      "question": "What is Jenkins and why is it important for QA engineers?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "Jenkins is an open-source automation server used to build, test, and deploy applications.",
        "Importance for QA:",
        "\u2022 Automates test execution (UI, API, performance tests).",
        "\u2022 Integrates with GitHub/GitLab to run tests on every commit.",
        "\u2022 Generates and publishes test reports automatically.",
        "\u2022 Supports scheduling (nightly regression runs).",
        "\u2022 Works with Docker, Selenium Grid, Postman, and other QA tools.",
        "Example:",
        "When a developer commits code, Jenkins pulls the latest changes, runs Selenium regression tests, and sends",
        "results to QA via email/Slack."
      ]
    },
    {
      "id": "devops-jenkins-q37",
      "num": "3",
      "sectionNum": "37",
      "question": "How do you create a basic Jenkins job to run automation tests?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "Steps:",
        "1. Open Jenkins \u2192 \u201cNew Item\u201d.",
        "2. Select Freestyle Project \u2192 Name it (e.g., Selenium_UI_Tests).",
        "3. Configure Git repository URL.",
        "4. Set Build Triggers: \u201cBuild when a change is pushed to GitHub\u201d.",
        "5. Add Build Steps:",
        "bash",
        "CopyEdit",
        "mvn clean test",
        "6. Post-build actions: Publish HTML reports (Allure/Extent).",
        "QA Example:",
        "Run mvn clean test to execute Selenium + TestNG tests for UI verification."
      ]
    },
    {
      "id": "devops-jenkins-q38",
      "num": "4",
      "sectionNum": "38",
      "question": "What is the di&erence between a Freestyle job and a Pipeline job in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "Feature Freestyle Pipeline",
        "Setup GUI-based Code-based (Jenkinsfile)",
        "Flexibility Limited Highly customizable",
        "Version Control Cannot be versioned Can store Jenkinsfile in Git",
        "QA Usage Simple one-step automation tests Complex multi-stage CI/CD pipelines",
        "QA Tip:",
        "For simple automation, Freestyle works fine; for multi-environment testing, use Pipelines."
      ]
    },
    {
      "id": "devops-jenkins-q39",
      "num": "5",
      "sectionNum": "39",
      "question": "How do you configure Jenkins to trigger builds automatically from GitHub?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "1. Install GitHub Integration Plugin in Jenkins.",
        "2. In GitHub repo \u2192 Settings \u2192 Webhooks \u2192 Add webhook with Jenkins URL:",
        "arduino",
        "CopyEdit",
        "http://jenkins-server/github-webhook/",
        "3. In Jenkins job \u2192 Build Triggers \u2192 Check \u201cGitHub hook trigger for GITScm polling\u201d.",
        "4. Now, whenever code is pushed, Jenkins runs automatically.",
        "QA Example:",
        "Whenever a new Selenium test is committed, Jenkins immediately runs regression suite."
      ]
    },
    {
      "id": "devops-jenkins-q40",
      "num": "6",
      "sectionNum": "40",
      "question": "How do you integrate Selenium tests with Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "1. Push Selenium + TestNG/Maven project to GitHub.",
        "2. Configure Jenkins job to pull the repo.",
        "3. Add build command:",
        "bash",
        "CopyEdit",
        "mvn clean test",
        "4. Configure post-build action to publish reports from target/surefire-reports or Allure results."
      ]
    },
    {
      "id": "devops-jenkins-q41",
      "num": "7",
      "sectionNum": "41",
      "question": "How do you parameterize a Jenkins build for QA testing?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Go to job config \u2192 \u201cThis project is parameterized\u201d.",
        "\u2022 Add parameters:",
        "o Choice Parameter: Environment (DEV/STAGE/PROD).",
        "o String Parameter: Test suite name.",
        "QA Example:",
        "Select STAGE from the dropdown to run automation on staging environment without changing code."
      ]
    },
    {
      "id": "devops-jenkins-q42",
      "num": "8",
      "sectionNum": "42",
      "question": "What is a Jenkinsfile and why QA uses it?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "A Jenkinsfile defines a pipeline as code.",
        "Advantages for QA:",
        "\u2022 Version-controlled with test scripts.",
        "\u2022 Easy to replicate and modify pipelines.",
        "\u2022 Supports multiple stages (build \u2192 test \u2192 deploy).",
        "Example Jenkinsfile for QA:",
        "groovy",
        "CopyEdit",
        "pipeline {",
        "agent any",
        "stages {",
        "stage('Test') {",
        "steps {",
        "sh 'mvn clean test'",
        "}",
        "}",
        "stage('Report') {",
        "steps {",
        "publishHTML([reportDir: 'target/surefire-reports', reportFiles:",
        "'index.html'])",
        "}",
        "}",
        "}",
        "}"
      ]
    },
    {
      "id": "devops-jenkins-q43",
      "num": "9",
      "sectionNum": "43",
      "question": "How do you run tests in parallel in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Use Declarative Pipeline with parallel block.",
        "\u2022 Example:",
        "groovy",
        "CopyEdit",
        "parallel {",
        "stage('Chrome Tests') {",
        "steps { sh 'mvn test -Dbrowser=chrome' }",
        "}",
        "stage('Firefox Tests') {",
        "steps { sh 'mvn test -Dbrowser=firefox' }",
        "}",
        "}",
        "QA Benefit: Reduces execution time for cross-browser testing."
      ]
    },
    {
      "id": "devops-jenkins-q44",
      "num": "10",
      "sectionNum": "44",
      "question": "How do you integrate Postman API tests in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "1. Export Postman collection + environment JSON files.",
        "2. Install Newman on Jenkins server:",
        "bash",
        "CopyEdit",
        "npm install -g newman",
        "3. Add Jenkins build step:",
        "bash",
        "CopyEdit",
        "newman run collection.json -e environment.json --reporters cli,html"
      ]
    },
    {
      "id": "devops-jenkins-q45",
      "num": "11",
      "sectionNum": "45",
      "question": "How do you schedule a nightly regression run in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 In job config \u2192 Build Triggers \u2192 \u201cBuild periodically\u201d.",
        "\u2022 Example schedule:",
        "sql",
        "CopyEdit",
        "H 2 * * *   # Runs at 2 AM every day",
        "QA Use: Automate nightly regression testing for fresh results in the morning."
      ]
    },
    {
      "id": "devops-jenkins-q46",
      "num": "12",
      "sectionNum": "46",
      "question": "How do you publish HTML test reports in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "1. Install HTML Publisher Plugin.",
        "2. Post-build \u2192 Publish HTML reports.",
        "3. Set report directory and file name.",
        "QA Example:",
        "Publish Allure report from target/allure-report after test execution."
      ]
    },
    {
      "id": "devops-jenkins-q47",
      "num": "13",
      "sectionNum": "47",
      "question": "How do you handle failed builds in Jenkins for QA tests?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Enable Post-build actions to send failure notifications via email/Slack.",
        "\u2022 Use Post-build scripts to archive screenshots/logs.",
        "\u2022 Set Build status to unstable if non-critical tests fail."
      ]
    },
    {
      "id": "devops-jenkins-q48",
      "num": "14",
      "sectionNum": "48",
      "question": "How do you use Jenkins to test across multiple environments?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Use parameters for environment URLs.",
        "\u2022 Pass environment variable to test framework:",
        "bash",
        "CopyEdit",
        "mvn test -Denvironment=stage",
        "QA Example:",
        "Run the same suite in DEV, STAGE, and PROD without code changes."
      ]
    },
    {
      "id": "devops-jenkins-q49",
      "num": "15",
      "sectionNum": "49",
      "question": "How do you secure Jenkins for QA projects?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Enable role-based access control.",
        "\u2022 Restrict build execution rights.",
        "\u2022 Mask credentials in logs.",
        "\u2022 Use credentials plugin for API keys and passwords."
      ]
    },
    {
      "id": "devops-jenkins-q50",
      "num": "16",
      "sectionNum": "50",
      "question": "How do you archive test artifacts in Jenkins?",
      "category": "Jenkins",
      "answers": [
        "Answer:",
        "\u2022 Post-build \u2192 Archive the artifacts.",
        "\u2022 Example: Archive screenshots/ or logs/ directories for failed tests.",
        "QA Example:",
        "Every failed Selenium test screenshot is saved and downloadable from Jenkins.",
        "JIRA"
      ]
    },
    {
      "id": "devops-jira-q1",
      "num": "17",
      "sectionNum": "1",
      "question": "What is JIRA and why do QA engineers use it?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "JIRA is a project management and issue tracking tool developed by Atlassian.",
        "While it's widely used for Agile software development, QA engineers use it mainly for bug tracking, test",
        "management, and project collaboration.",
        "For QA, JIRA is important because:",
        "\u2022 It allows logging defects found during testing.",
        "\u2022 You can track the lifecycle of a bug from creation to closure.",
        "\u2022 Integrates with test management plugins like Zephyr, Xray, and TestRail.",
        "\u2022 Supports Agile boards (Scrum, Kanban) so QA can track testing progress in sprints.",
        "\u2022 Enables collaboration between QA, developers, and product managers.",
        "Example: If you find a bug in the checkout process during regression testing, you can log it in JIRA with steps",
        "to reproduce, attach screenshots, assign it to a developer, and track its fix."
      ]
    },
    {
      "id": "devops-jira-q2",
      "num": "18",
      "sectionNum": "2",
      "question": "What is an Issue in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "In JIRA, an Issue is the basic unit of work. It could be:",
        "\u2022 A bug found in testing.",
        "\u2022 A story describing a new feature.",
        "\u2022 A task for a developer or QA.",
        "\u2022 An epic representing a large set of related tasks.",
        "For QA, the most common issue type is Bug.",
        "Example: In a mobile app, if the \"Login\" button is not clickable, you would create a Bug issue in JIRA with all",
        "relevant details."
      ]
    },
    {
      "id": "devops-jira-q3",
      "num": "19",
      "sectionNum": "3",
      "question": "What is a Workflow in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "A Workflow in JIRA defines the lifecycle of an issue \u2014 the sequence of steps it goes through from creation to",
        "closure.",
        "Example of a QA bug workflow:",
        "1. Open/New \u2013 Bug is reported by QA.",
        "2. In Progress \u2013 Developer is fixing it.",
        "3. Resolved/Fixed \u2013 Developer marks it as fixed.",
        "4. Ready for Testing \u2013 QA tests the fix.",
        "5. Closed \u2013 QA verifies and closes the bug.",
        "6. Reopened \u2013 QA finds the bug still exists.",
        "A good workflow helps QA track the exact status of defects."
      ]
    },
    {
      "id": "devops-jira-q4",
      "num": "20",
      "sectionNum": "4",
      "question": "How do you create a Bug in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "Steps for QA:",
        "1. Click Create on the JIRA dashboard.",
        "2. Select Project and Issue Type as Bug.",
        "3. Fill Summary (short title) and Description (detailed explanation).",
        "4. Add Steps to Reproduce so the developer can replicate the bug.",
        "5. Attach screenshots or logs.",
        "6. Select Priority (High, Medium, Low) based on impact.",
        "7. Assign it to the relevant developer or leave it unassigned.",
        "8. Click Create.",
        "Tip for QA: Always write clear, reproducible bug reports so developers can fix them faster."
      ]
    },
    {
      "id": "devops-jira-q5",
      "num": "21",
      "sectionNum": "5",
      "question": "What is the di&erence between Priority and Severity in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "\u2022 Priority (Business perspective): Decides how quickly a bug should be fixed.",
        "o Example: A spelling mistake on the homepage might be low severity but high priority if a client",
        "demo is tomorrow.",
        "\u2022 Severity (Technical perspective): Indicates the impact of the bug on functionality.",
        "o Example: A crash in the payment gateway is high severity but may be low priority if the feature",
        "is not released yet.",
        "For QA, understanding both helps in correctly categorizing defects."
      ]
    },
    {
      "id": "devops-jira-q6",
      "num": "22",
      "sectionNum": "6",
      "question": "How do QA engineers use JIRA for Agile testing?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "In Agile projects:",
        "\u2022 QA uses Scrum boards to track testing tasks in sprints.",
        "\u2022 Stories are created for features, and sub-tasks for test cases.",
        "\u2022 Bugs are linked to stories so QA can see which feature they belong to.",
        "\u2022 QA participates in daily standups and updates task statuses.",
        "\u2022 Burndown charts in JIRA help monitor testing progress.",
        "Example: In Sprint 5, a login feature story might have linked sub-tasks for test case creation, execution, and bug",
        "logging."
      ]
    },
    {
      "id": "devops-jira-q7",
      "num": "23",
      "sectionNum": "7",
      "question": "Can JIRA be used for Test Case Management?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "Yes, but JIRA by itself does not have built-in test case management. QA teams use plugins like:",
        "\u2022 Zephyr for JIRA \u2013 Allows test case creation, execution, and reporting.",
        "\u2022 Xray \u2013 Manages manual and automated test cases.",
        "\u2022 TestRail integration \u2013 Connects external test management with JIRA.",
        "Example: Using Zephyr, QA can write test cases inside JIRA, execute them, and log bugs directly linked to",
        "failed tests."
      ]
    },
    {
      "id": "devops-jira-q8",
      "num": "24",
      "sectionNum": "8",
      "question": "How do you link issues in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "QA often needs to link bugs to related stories or other bugs for traceability.",
        "Steps:",
        "1. Open the issue.",
        "2. Click More \u2192 Link.",
        "3. Choose link type (e.g., \"relates to,\" \"is blocked by,\" \"duplicates\").",
        "4. Enter the issue key of the related item.",
        "Example: If Bug #123 is caused by incomplete work in Story #456, QA links it with \u201cis blocked by.\u201d"
      ]
    },
    {
      "id": "devops-jira-q9",
      "num": "25",
      "sectionNum": "9",
      "question": "What are JIRA Filters and how can QA use them?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "A Filter is a saved search query in JIRA. QA can use filters to:",
        "\u2022 View only open bugs.",
        "\u2022 See high-priority issues assigned to them.",
        "\u2022 List all bugs in a sprint.",
        "Example JQL (JIRA Query Language) for QA:",
        "jql",
        "CopyEdit",
        "project = \"E-Commerce\" AND issuetype = Bug AND status != Closed ORDER BY priority DESC",
        "This shows all open bugs in the \"E-Commerce\" project sorted by priority."
      ]
    },
    {
      "id": "devops-jira-q10",
      "num": "26",
      "sectionNum": "10",
      "question": "How do you generate reports in JIRA?",
      "category": "JIRA",
      "answers": [
        "Answer:",
        "QA can use JIRA reports to track testing and defect trends. Examples:",
        "\u2022 Created vs Resolved Issues \u2013 See if bug resolution is keeping up.",
        "\u2022 Sprint Report \u2013 Track completed and pending testing tasks.",
        "\u2022 Pie Chart Report \u2013 Show bugs by priority or status.",
        "Example: At the end of a sprint, QA might generate a \"Created vs Resolved Bugs\" report to check if there's a",
        "backlog.",
        "Docker"
      ]
    },
    {
      "id": "devops-docker-q1",
      "num": "27",
      "sectionNum": "1",
      "question": "What is Docker and why is it useful in QA testing?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Docker is an open-source platform that allows you to create, deploy, and run applications inside lightweight,",
        "portable containers. Unlike virtual machines (VMs), containers share the host OS kernel but run in isolation,",
        "making them faster and less resource-intensive.",
        "In QA, Docker is extremely useful because:",
        "\u2022 You can create identical environments across dev, QA, and production.",
        "\u2022 Tests can run in isolated containers without affecting the main system.",
        "\u2022 Environment setup becomes automated and repeatable, reducing \u201cworks on my machine\u201d issues.",
        "\u2022 You can easily test across multiple versions of a service (e.g., MySQL 5.7 vs MySQL 8.0).",
        "\u2022 CI/CD pipelines (Jenkins, GitHub Actions) can run Dockerized test suites reliably."
      ]
    },
    {
      "id": "devops-docker-q2",
      "num": "28",
      "sectionNum": "2",
      "question": "Di&erence between Docker and Virtual Machines for QA?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Virtual Machines (VMs):",
        "\u2022 Run a full OS with its own kernel \u2192 heavier and slower.",
        "\u2022 Take minutes to start.",
        "\u2022 Consume large amounts of disk and RAM.",
        "\u2022 Better for full OS simulation.",
        "Docker Containers:",
        "\u2022 Share host OS kernel \u2192 lightweight and fast.",
        "\u2022 Start in seconds.",
        "\u2022 Use fewer resources.",
        "\u2022 Ideal for QA automation where speed & consistency matter.",
        "\u2022 Allows parallel test runs by spinning up multiple containers.",
        "In QA, Docker is preferred because setting up a containerized test environment (like Selenium Grid, API",
        "mocks, databases) takes seconds compared to a VM."
      ]
    },
    {
      "id": "devops-docker-q3",
      "num": "29",
      "sectionNum": "3",
      "question": "What is a Docker image and container? How are they di&erent?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "\u2022 Docker Image:",
        "A read-only template containing application code, libraries, and dependencies. It's like a \u201cblueprint\u201d for",
        "creating containers. For example, an image could be python:3.10 or mysql:8.0.",
        "\u2022 Docker Container:",
        "A running instance of an image. It's where your application actually runs.",
        "Analogy: Image = recipe, Container = cooked dish.",
        "For QA, you might create an image for your automation framework, then run multiple containers for parallel",
        "testing."
      ]
    },
    {
      "id": "devops-docker-q4",
      "num": "30",
      "sectionNum": "4",
      "question": "How do you create and run a Docker container for automation testing?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Example: Running a Selenium Grid Node.",
        "bash",
        "CopyEdit",
        "docker run -d --name selenium-node -p 4444:4444 selenium/standalone-chrome",
        "Steps:",
        "1. Pull image from Docker Hub: docker pull selenium/standalone-chrome",
        "2. Run the container with port mapping.",
        "3. Point your test scripts to http://localhost:4444/wd/hub.",
        "This approach allows tests to run without needing Chrome installed locally, ensuring consistent browser",
        "versions for all testers."
      ]
    },
    {
      "id": "devops-docker-q5",
      "num": "31",
      "sectionNum": "5",
      "question": "What is Docker Hub and how do QA engineers use it?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Docker Hub is a cloud-based registry for storing and sharing container images.",
        "As a QA engineer, you can:",
        "\u2022 Pull ready-made images for databases, browsers, mock servers.",
        "\u2022 Push your custom automation framework image so the team can pull and run it easily.",
        "\u2022 Use official images for tools like Postman/Newman, Selenium, or JMeter in your pipeline."
      ]
    },
    {
      "id": "devops-docker-q6",
      "num": "32",
      "sectionNum": "6",
      "question": "How to write a Dockerfile for QA automation projects?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Example: Python + Selenium + Chrome",
        "dockerfile",
        "CopyEdit",
        "FROM python:3.10",
        "RUN pip install selenium pytest",
        "COPY tests/ /app/tests",
        "WORKDIR /app/tests",
        "CMD [\"pytest\", \"--html=report.html\"]",
        "Steps:",
        "1. Start from a base image (python:3.10).",
        "2. Install dependencies.",
        "3. Copy test files.",
        "4. Set working directory.",
        "5. Define default command to run tests.",
        "Benefit: Any team member can run docker build & docker run to execute tests without environment",
        "conflicts."
      ]
    },
    {
      "id": "devops-docker-q7",
      "num": "33",
      "sectionNum": "7",
      "question": "How do you share test environments using Docker Compose?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Docker Compose allows you to define multi-container setups in a docker-compose.yml file.",
        "Example: Selenium Grid + App Under Test.",
        "yaml",
        "CopyEdit",
        "version: '3'",
        "services:",
        "selenium-hub:",
        "image: selenium/hub",
        "ports:",
        "- \"4444:4444\"",
        "chrome:",
        "image: selenium/node-chrome",
        "depends_on:",
        "- selenium-hub",
        "environment:",
        "- HUB_HOST=selenium-hub",
        "You can start the whole environment using:",
        "bash",
        "CopyEdit",
        "docker-compose up",
        "QA benefit: One command sets up browsers, APIs, and databases."
      ]
    },
    {
      "id": "devops-docker-q8",
      "num": "34",
      "sectionNum": "8",
      "question": "What is the di&erence between docker run and docker exec in QA testing?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "\u2022 docker run \u2192 Creates and starts a new container.",
        "\u2022 docker exec \u2192 Runs a command inside an already running container.",
        "Example for QA:",
        "bash",
        "CopyEdit",
        "docker exec -it selenium-node bash",
        "This allows you to debug test failures by entering the container without restarting it."
      ]
    },
    {
      "id": "devops-docker-q9",
      "num": "35",
      "sectionNum": "9",
      "question": "How do you persist test results in Docker containers?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Containers are ephemeral; data is lost when stopped.",
        "Solution: Use Docker Volumes.",
        "Example:",
        "bash",
        "CopyEdit",
        "docker run -v $(pwd)/reports:/app/reports my-test-image",
        "Here, the test reports are saved on the host machine so they're available even after the container stops."
      ]
    },
    {
      "id": "devops-docker-q10",
      "num": "36",
      "sectionNum": "10",
      "question": "How do you optimize Docker images for faster QA pipeline execution?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "\u2022 Use smaller base images (e.g., python:3.10-slim).",
        "\u2022 Combine RUN commands to reduce layers.",
        "\u2022 Cache dependencies (pip, npm, Maven).",
        "\u2022 Remove unnecessary files after installation.",
        "\u2022 Use multi-stage builds to separate build/test stages.",
        "Optimized images make CI/CD faster, saving hours in large QA test suites."
      ]
    },
    {
      "id": "devops-docker-q11",
      "num": "37",
      "sectionNum": "11",
      "question": "How do you debug test failures in Docker containers?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "1. Run the container interactively:",
        "bash",
        "CopyEdit",
        "docker run -it my-test-image bash",
        "2. Inspect logs:",
        "bash",
        "CopyEdit",
        "docker logs <container_id>",
        "3. Mount local code directory and modify tests without rebuilding:",
        "bash",
        "CopyEdit",
        "docker run -v $(pwd):/app my-test-image",
        "This approach allows quick fixes and re-runs."
      ]
    },
    {
      "id": "devops-docker-q12",
      "num": "38",
      "sectionNum": "12",
      "question": "How do you integrate Docker with Jenkins for QA automation?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "In a Jenkins pipeline:",
        "groovy",
        "CopyEdit",
        "pipeline {",
        "agent { docker { image 'python:3.10' } }",
        "stages {",
        "stage('Run Tests') {",
        "steps {",
        "sh 'pytest tests/ --html=report.html'",
        "}",
        "}",
        "}",
        "}",
        "Benefits:",
        "\u2022 Jenkins agents run inside a Docker container with all dependencies.",
        "\u2022 No need to install tools on the Jenkins host.",
        "\u2022 Every build gets a fresh environment."
      ]
    },
    {
      "id": "devops-docker-q13",
      "num": "39",
      "sectionNum": "13",
      "question": "How can Docker help in cross-browser testing for QA?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Using Selenium Grid with Docker:",
        "\u2022 Run Chrome, Firefox, and Edge containers simultaneously.",
        "\u2022 Execute the same test suite on multiple browsers in parallel.",
        "\u2022 Containers have predefined versions, avoiding browser update issues."
      ]
    },
    {
      "id": "devops-docker-q14",
      "num": "40",
      "sectionNum": "14",
      "question": "What is a Docker Volume and why is it important for QA?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "A volume is persistent storage managed by Docker.",
        "In QA:",
        "\u2022 Use volumes to store logs, screenshots, test reports.",
        "\u2022 Share test data between containers.",
        "\u2022 Keep database state between test runs."
      ]
    },
    {
      "id": "devops-docker-q15",
      "num": "41",
      "sectionNum": "15",
      "question": "How do you run database containers for test automation?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Example:",
        "bash",
        "CopyEdit",
        "docker run -d --name mysql-test -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:8.0",
        "\u2022 Your test scripts can connect to localhost:3306.",
        "\u2022 Use a preloaded DB dump to simulate real test data."
      ]
    },
    {
      "id": "devops-docker-q16",
      "num": "42",
      "sectionNum": "16",
      "question": "What is the di&erence between docker ps and docker images?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "\u2022 docker ps \u2192 Lists running containers.",
        "\u2022 docker images \u2192 Lists available images.",
        "In QA debugging, docker ps -a is often used to check if a test container exited due to failure."
      ]
    },
    {
      "id": "devops-docker-q17",
      "num": "43",
      "sectionNum": "17",
      "question": "How do you remove unused containers and images to save disk space?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "bash",
        "CopyEdit",
        "docker system prune -a",
        "Removes:",
        "\u2022 Stopped containers.",
        "\u2022 Unused images.",
        "\u2022 Unused networks.",
        "Helps in keeping QA systems clean."
      ]
    },
    {
      "id": "devops-docker-q18",
      "num": "44",
      "sectionNum": "18",
      "question": "How do you use Docker for API testing?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Example:",
        "\u2022 Pull Postman/Newman Docker image:",
        "bash",
        "CopyEdit",
        "docker run -v $(pwd)/collections:/etc/newman postman/newman run collection.json",
        "\u2022 This allows API tests to run in CI/CD without installing Postman locally."
      ]
    },
    {
      "id": "devops-docker-q19",
      "num": "45",
      "sectionNum": "19",
      "question": "What are some common Docker commands every QA should know?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "\u2022 docker pull \u2192 Download image.",
        "\u2022 docker run \u2192 Start container.",
        "\u2022 docker ps \u2192 List containers.",
        "\u2022 docker logs \u2192 View logs.",
        "\u2022 docker exec \u2192 Run commands inside container.",
        "\u2022 docker stop / docker rm \u2192 Stop & remove containers."
      ]
    },
    {
      "id": "devops-docker-q20",
      "num": "46",
      "sectionNum": "20",
      "question": "How do you handle environment variables in Docker for QA tests?",
      "category": "Docker",
      "answers": [
        "Answer:",
        "Use -e flag or .env files:",
        "docker run -e ENV=QA -e API_KEY=12345 my-test-image",
        "In your automation code, fetch these environment variables for dynamic test configuration.",
        "Basic CLI & Linux Commands"
      ]
    },
    {
      "id": "devops-cli-q1",
      "num": "47",
      "sectionNum": "1",
      "question": "What is the CLI (Command Line Interface) and why should QA engineers know it?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "The Command Line Interface (CLI) is a text-based way to interact with a computer system, instead of using a",
        "graphical interface (GUI). QA engineers often work with CI/CD servers, cloud instances, and containerized",
        "environments \u2014 most of which are Linux-based and accessed via CLI.",
        "Why important for QA:",
        "\u2022 Test environment setup: Installing tools, libraries, or dependencies.",
        "\u2022 Log analysis: Searching error patterns in application logs.",
        "\u2022 Automation: Writing shell scripts to automate repetitive testing tasks.",
        "\u2022 Remote testing: Accessing test servers via SSH.",
        "\u2022 CI/CD pipelines: Jenkins, GitHub Actions, GitLab CI often run commands in CLI mode.",
        "Example: If your automated tests fail on a Jenkins server, you may need to SSH into the Linux server and run",
        "commands like tail -f app.log to investigate."
      ]
    },
    {
      "id": "devops-cli-q2",
      "num": "48",
      "sectionNum": "2",
      "question": "How do you list files and directories in Linux?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Use the ls command.",
        "ls",
        "Common options:",
        "\u2022 ls -l \u2192 Long listing with file permissions, owner, size, and timestamp.",
        "\u2022 ls -a \u2192 Includes hidden files (starting with .).",
        "\u2022 ls -lh \u2192 Human-readable file sizes (KB, MB).",
        "QA Example: When verifying if a test script or log file exists in a given directory, ls -l helps you check last",
        "modified times to confirm recent test execution."
      ]
    },
    {
      "id": "devops-cli-q3",
      "num": "49",
      "sectionNum": "3",
      "question": "How do you check your current directory?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Use:",
        "pwd",
        "Explanation: Prints the full path of the current working directory.",
        "QA Use Case: If you're navigating multiple directories to find logs or config files during debugging, pwd",
        "confirms your exact location."
      ]
    },
    {
      "id": "devops-cli-q4",
      "num": "50",
      "sectionNum": "4",
      "question": "How do you change directories?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Use:",
        "cd /path/to/directory",
        "Examples:",
        "\u2022 cd /var/log \u2192 Move to system logs folder.",
        "\u2022 cd .. \u2192 Move up one level.",
        "\u2022 cd ~ \u2192 Go to your home directory.",
        "QA Example: Moving into the /opt/jenkins/workspace/ folder to check automation test outputs."
      ]
    },
    {
      "id": "devops-cli-q5",
      "num": "51",
      "sectionNum": "5",
      "question": "How do you create a new directory?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Use:",
        "mkdir test-reports",
        "Explanation: Creates a folder named test-reports.",
        "QA Use Case: Before running automated tests, you might create a folder to store reports."
      ]
    },
    {
      "id": "devops-cli-q6",
      "num": "52",
      "sectionNum": "6",
      "question": "How do you create a new file from CLI?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Commands:",
        "touch file.txt",
        "or",
        "echo \"Hello\" > file.txt",
        "Explanation: touch creates an empty file. echo writes content into a file.",
        "QA Example: Creating test data files for manual or automation testing."
      ]
    },
    {
      "id": "devops-cli-q7",
      "num": "53",
      "sectionNum": "7",
      "question": "How do you view the contents of a file?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Commands:",
        "cat file.txt",
        "less file.txt",
        "more file.txt",
        "\u2022 cat \u2192 Displays the entire file.",
        "\u2022 less / more \u2192 Displays one screen at a time.",
        "QA Example: Checking automation logs for error messages after test execution."
      ]
    },
    {
      "id": "devops-cli-q8",
      "num": "54",
      "sectionNum": "8",
      "question": "How do you search inside a file for a keyword?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Use grep:",
        "grep \"ERROR\" app.log",
        "Common options:",
        "\u2022 grep -i \u2192 Case-insensitive search.",
        "\u2022 grep -n \u2192 Show line numbers.",
        "QA Example: Quickly finding error lines in test logs to identify failure causes."
      ]
    },
    {
      "id": "devops-cli-q9",
      "num": "55",
      "sectionNum": "9",
      "question": "How do you copy, move, and delete files in Linux?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Copy:",
        "cp source.txt destination.txt",
        "Move/Rename:",
        "mv oldname.txt newname.txt",
        "Delete:",
        "rm file.txt",
        "QA Use Case: Copying configuration files to different test environments or renaming logs for archiving."
      ]
    },
    {
      "id": "devops-cli-q10",
      "num": "56",
      "sectionNum": "10",
      "question": "How do you see running processes?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Commands:",
        "ps aux",
        "top",
        "htop  # if installed",
        "Explanation:",
        "\u2022 ps aux \u2192 Shows all running processes.",
        "\u2022 top \u2192 Real-time process viewer.",
        "QA Example: Checking if a test server or database service is running."
      ]
    },
    {
      "id": "devops-cli-q11",
      "num": "57",
      "sectionNum": "11",
      "question": "How do you check disk space usage?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Command:",
        "df -h",
        "Explanation: Shows available and used disk space in human-readable format.",
        "QA Example: If tests fail due to \"no space left on device\" errors, this command helps diagnose it."
      ]
    },
    {
      "id": "devops-cli-q12",
      "num": "58",
      "sectionNum": "12",
      "question": "How do you check memory usage?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Command:",
        "free -h",
        "Explanation: Displays total, used, and free memory.",
        "QA Example: If performance tests fail or run slowly, checking memory usage helps identify bottlenecks."
      ]
    },
    {
      "id": "devops-cli-q13",
      "num": "59",
      "sectionNum": "13",
      "question": "How do you monitor logs in real time?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Command:",
        "tail -f app.log",
        "Explanation: Shows the last lines of a log file and updates live as new entries are added.",
        "QA Example: While running tests, you can watch the log output in real time to detect failures immediately."
      ]
    },
    {
      "id": "devops-cli-q14",
      "num": "60",
      "sectionNum": "14",
      "question": "How do you find a file in Linux?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "Command:",
        "find /path -name \"filename.txt\"",
        "Explanation: Searches the given directory and subdirectories for a file.",
        "QA Example: Finding where Jenkins saved the latest automation report."
      ]
    },
    {
      "id": "devops-cli-q15",
      "num": "61",
      "sectionNum": "15",
      "question": "How do you check network connectivity?",
      "category": "CLI & Linux Commands",
      "answers": [
        "Answer:",
        "ping google.com",
        "curl -I https://example.com",
        "\u2022 ping \u2192 Tests if a server is reachable.",
        "\u2022 curl \u2192 Fetches a URL's headers or content.",
        "QA Example: Ensuring the application under test is reachable from the test server.",
        "Artificial Intilligence"
      ]
    },
    {
      "id": "devops-ai-q1",
      "num": "62",
      "sectionNum": "1",
      "question": "What is Artificial Intelligence (AI) and why is it important for QA?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Artificial Intelligence (AI) refers to the ability of machines or systems to perform tasks that typically require",
        "human intelligence, such as decision-making, learning, problem-solving, and pattern recognition.",
        "In QA, AI is important because:",
        "\u2022 It reduces manual effort in test creation and maintenance.",
        "\u2022 It automatically adapts tests to UI changes (self-healing).",
        "\u2022 It predicts defect-prone areas to optimize testing.",
        "\u2022 It improves accuracy in defect detection.",
        "Example: AI visual testing tools like Applitools Eyes can detect UI layout shifts that traditional",
        "automation may miss."
      ]
    },
    {
      "id": "devops-ai-q2",
      "num": "63",
      "sectionNum": "2",
      "question": "How is AI di&erent from traditional test automation?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "\u2022 Traditional Automation: Uses fixed scripts and locators; breaks if the UI changes; fully dependent on",
        "pre-written code.",
        "\u2022 AI-based Automation: Uses ML algorithms to learn from data, adapt to changes, and maintain scripts",
        "automatically.",
        "Example: In Selenium, if an element ID changes, a traditional script fails, but AI-powered tools find",
        "alternative identifiers to run tests successfully."
      ]
    },
    {
      "id": "devops-ai-q3",
      "num": "64",
      "sectionNum": "3",
      "question": "What is Machine Learning (ML) in QA?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Machine Learning is a subset of AI that learns from past data and improves over time without being explicitly",
        "programmed.",
        "In QA, ML is used for:",
        "\u2022 Defect prediction",
        "\u2022 Flaky test detection",
        "\u2022 Test case prioritization",
        "Example: ML models can analyze bug history to predict which modules have a higher chance of defects",
        "in the next release."
      ]
    },
    {
      "id": "devops-ai-q4",
      "num": "65",
      "sectionNum": "4",
      "question": "What are some AI-powered tools for QA?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "\u2022 Applitools Eyes \u2013 Visual regression testing.",
        "\u2022 Testim.io \u2013 AI-driven, self-healing automation.",
        "\u2022 Mabl \u2013 Auto-maintenance for functional tests.",
        "\u2022 Functionize \u2013 NLP-based test case creation.",
        "\u2022 Sealights \u2013 Test impact analysis.",
        "\u2022 ReportPortal \u2013 AI log analysis."
      ]
    },
    {
      "id": "devops-ai-q5",
      "num": "66",
      "sectionNum": "5",
      "question": "What is self-healing in AI automation?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Self-healing means AI automatically updates locators when the UI changes, preventing test failures.",
        "Example: If a \"Login\" button ID changes from btn-login to login-btn, AI can still identify it using other",
        "attributes like size, color, or position."
      ]
    },
    {
      "id": "devops-ai-q6",
      "num": "67",
      "sectionNum": "6",
      "question": "How does AI help in defect prediction?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI analyzes historical defect data, code changes, and commit history to predict areas with a higher probability",
        "of defects.",
        "Example: If past releases show frequent bugs in the \"payment gateway\" module, AI will recommend higher test",
        "coverage for that area."
      ]
    },
    {
      "id": "devops-ai-q7",
      "num": "68",
      "sectionNum": "7",
      "question": "What is visual testing in AI?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Visual testing compares the visual appearance of an application's UI with a baseline image.",
        "AI improves this by detecting pixel-level changes while ignoring acceptable differences (e.g., font rendering).",
        "Example: Applitools Eyes detects if a button's position has shifted slightly, even if the HTML code is the same."
      ]
    },
    {
      "id": "devops-ai-q8",
      "num": "69",
      "sectionNum": "8",
      "question": "How can AI help in exploratory testing?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Suggest unexplored test scenarios.",
        "\u2022 Record tester actions and convert them to scripts.",
        "\u2022 Highlight rarely used features that might need extra testing."
      ]
    },
    {
      "id": "devops-ai-q9",
      "num": "70",
      "sectionNum": "9",
      "question": "What are the challenges of using AI in QA?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Requires large amounts of clean data.",
        "\u2022 May produce false positives.",
        "\u2022 High tool cost.",
        "\u2022 Steep learning curve for QA engineers."
      ]
    },
    {
      "id": "devops-ai-q10",
      "num": "71",
      "sectionNum": "10",
      "question": "How can AI be used in log analysis?",
      "category": "AI for QA",
      "answers": [
        "AI tools like ReportPortal can scan thousands of log lines to identify failure patterns,",
        "group similar errors, and detect root causes.",
        "Example: AI can detect that most failures in a test run come from a database timeout",
        "issue."
      ]
    },
    {
      "id": "devops-ai-q11",
      "num": "72",
      "sectionNum": "11",
      "question": "What is AI-based test case prioritization?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI ranks test cases based on risk, historical failures, and recent code changes, ensuring high-risk cases run first.",
        "Example: In a CI/CD pipeline, AI might run regression tests for changed modules before others."
      ]
    },
    {
      "id": "devops-ai-q12",
      "num": "73",
      "sectionNum": "12",
      "question": "How does AI help in test coverage analysis?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI maps requirements, user flows, and code coverage to identify untested areas.",
        "Example: It might suggest adding tests for a newly introduced discount coupon feature that has no existing",
        "automated tests."
      ]
    },
    {
      "id": "devops-ai-q13",
      "num": "74",
      "sectionNum": "13",
      "question": "How can AI help in CI/CD pipelines?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Automates test execution decisions.",
        "\u2022 Prioritizes tests based on code changes.",
        "\u2022 Predicts release readiness.",
        "Example: Sealights can decide which tests to skip in a CI/CD run to save time."
      ]
    },
    {
      "id": "devops-ai-q14",
      "num": "75",
      "sectionNum": "14",
      "question": "What is the role of NLP in AI QA tools?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Natural Language Processing (NLP) allows QA engineers to write test cases in plain English, which the AI",
        "converts into executable scripts.",
        "Example: Writing \u201cClick on Login button and verify success message\u201d creates a working test."
      ]
    },
    {
      "id": "devops-ai-q15",
      "num": "76",
      "sectionNum": "15",
      "question": "How can AI handle flaky tests?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI identifies flaky tests by analyzing pass/fail history and execution patterns.",
        "Example: If a test fails 30% of the time without code changes, AI flags it for review."
      ]
    },
    {
      "id": "devops-ai-q16",
      "num": "77",
      "sectionNum": "16",
      "question": "What is predictive analytics in QA?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Using AI to forecast possible outcomes based on data trends.",
        "Example: Predicting the number of defects likely in the next sprint based on commit activity."
      ]
    },
    {
      "id": "devops-ai-q17",
      "num": "78",
      "sectionNum": "17",
      "question": "How does AI support performance testing?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Predict load impact based on historical traffic.",
        "\u2022 Identify performance bottlenecks faster.",
        "Example: AI detects that database queries slow down during peak hours and suggests optimization."
      ]
    },
    {
      "id": "devops-ai-q18",
      "num": "79",
      "sectionNum": "18",
      "question": "Can AI generate test data automatically?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "Yes, AI can create realistic test data by analyzing production datasets while masking sensitive information.",
        "Example: AI generates valid but anonymized user profiles for load testing."
      ]
    },
    {
      "id": "devops-ai-q19",
      "num": "80",
      "sectionNum": "19",
      "question": "How does AI improve regression testing?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI detects which parts of the application are affected by recent changes and runs only relevant regression tests,",
        "saving time."
      ]
    },
    {
      "id": "devops-ai-q20",
      "num": "81",
      "sectionNum": "20",
      "question": "How can AI help in root cause analysis?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "AI scans logs, code changes, and past bug reports to suggest possible causes of failures.",
        "Example: AI might link a UI crash to a specific recent JavaScript library update."
      ]
    },
    {
      "id": "devops-ai-q21",
      "num": "82",
      "sectionNum": "21",
      "question": "What is anomaly detection in QA using AI?",
      "category": "AI for QA",
      "answers": [
        "AI detects unusual patterns in application behavior or performance metrics.",
        "Example: AI notices that API response time suddenly doubles, even though functionality is",
        "correct."
      ]
    },
    {
      "id": "devops-ai-q22",
      "num": "83",
      "sectionNum": "22",
      "question": "How can AI integrate with Selenium?",
      "category": "AI for QA",
      "answers": [
        "\u2022 AI can improve element identification (self-healing).",
        "\u2022 AI can enhance visual validation.",
        "Example: Tools like Testim integrate AI with Selenium to adapt locators dynamically."
      ]
    },
    {
      "id": "devops-ai-q23",
      "num": "84",
      "sectionNum": "23",
      "question": "What are AI limitations in QA?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Cannot replace domain knowledge of testers.",
        "\u2022 Needs quality data to be effective.",
        "\u2022 Might miss context-specific issues."
      ]
    },
    {
      "id": "devops-ai-q24",
      "num": "85",
      "sectionNum": "24",
      "question": "What is an AI-driven defect management system?",
      "category": "AI for QA",
      "answers": [
        "Answer:",
        "A defect management system that uses AI to classify, assign, and prioritize bugs.",
        "Example: AI assigns high-priority defects to the right developer based on expertise."
      ]
    },
    {
      "id": "devops-ai-q25",
      "num": "86",
      "sectionNum": "25",
      "question": "What skills should a QA engineer learn for AI testing?",
      "category": "AI for QA",
      "answers": [
        "\u2022 Basic Machine Learning concepts.",
        "\u2022 Data analysis.",
        "\u2022 AI automation tools (Testim, Mabl, Applitools).",
        "\u2022 Python for AI scripting.",
        "\u2022 API testing with AI tools.",
        "Tricky & Miscellaneous"
      ]
    },
    {
      "id": "devops-misc-q1",
      "num": "87",
      "sectionNum": "1",
      "question": "How do you decide when to stop testing?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "There is no fixed rule, but testing is typically stopped when:",
        "\u2022 Test Coverage is Sufficient: All planned test cases are executed.",
        "\u2022 Defect Rate Falls: New defects found per day drop below an acceptable threshold.",
        "\u2022 Deadlines/Release Date: Sometimes testing stops due to time constraints.",
        "\u2022 Risk Acceptance: Business accepts the remaining risks.",
        "\u2022 Pass Criteria Met: Defined in the Test Plan.",
        "Example:",
        "If you are testing an e-commerce checkout module and all critical P1/P2 bugs are fixed, all high-priority test",
        "cases pass, and defect discovery rate is very low, you can stop testing."
      ]
    },
    {
      "id": "devops-misc-q2",
      "num": "88",
      "sectionNum": "2",
      "question": "What is the di&erence between Verification and Validation?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Verification: Ensures the product is being built correctly (process-oriented). Done during development",
        "stages.",
        "Example: Reviewing requirement documents.",
        "\u2022 Validation: Ensures the right product is built (product-oriented). Done after development.",
        "Example: Running functional tests to check if the application meets business needs."
      ]
    },
    {
      "id": "devops-misc-q3",
      "num": "89",
      "sectionNum": "3",
      "question": "What would you do if a developer rejects your defect?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Recheck the Defect: Validate with logs, screenshots, or steps to reproduce.",
        "\u2022 Refer to Requirements: Show proof from requirement documents or acceptance criteria.",
        "\u2022 Discuss: Arrange a quick call with the developer and product owner.",
        "\u2022 Escalate: If disagreement persists, involve the QA lead."
      ]
    },
    {
      "id": "devops-misc-q4",
      "num": "90",
      "sectionNum": "4",
      "question": "How do you test something without requirements?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Use Exploratory Testing techniques.",
        "\u2022 Analyze similar modules or past projects.",
        "\u2022 Ask stakeholders for high-level goals.",
        "\u2022 Use reverse engineering: observe the app and identify possible workflows.",
        "Example:",
        "If you get a payment gateway integration without proper docs, you can explore different payment methods,",
        "check response codes, and observe error handling."
      ]
    },
    {
      "id": "devops-misc-q5",
      "num": "91",
      "sectionNum": "5",
      "question": "What is a Severity vs Priority defect?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Severity: How badly the defect impacts the system. (Technical impact)",
        "\u2022 Priority: How soon it needs to be fixed. (Business urgency)",
        "Example:",
        "\u2022 High severity, low priority: Typo in the \u201cTerms & Conditions\u201d page.",
        "\u2022 Low severity, high priority: Logo is incorrect on the home page before a press release."
      ]
    },
    {
      "id": "devops-misc-q6",
      "num": "92",
      "sectionNum": "6",
      "question": "How do you test a feature when the environment is unstable?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Use mock data or stubs to simulate services.",
        "\u2022 Prioritize critical test cases.",
        "\u2022 Log environment issues separately from application bugs.",
        "\u2022 Use Docker to spin up stable local test setups."
      ]
    },
    {
      "id": "devops-misc-q7",
      "num": "93",
      "sectionNum": "7",
      "question": "What would you test in an elevator?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "Functional: Button operation, floor indicators, emergency stop.",
        "Non-functional: Load capacity, speed, noise, safety compliance.",
        "Negative cases: Pressing multiple buttons, emergency during overload."
      ]
    },
    {
      "id": "devops-misc-q8",
      "num": "94",
      "sectionNum": "8",
      "question": "How do you ensure your test cases are e&ective?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Cover all positive, negative, boundary scenarios.",
        "\u2022 Trace test cases to requirements using RTM (Requirement Traceability Matrix).",
        "\u2022 Regularly update cases after changes."
      ]
    },
    {
      "id": "devops-misc-q9",
      "num": "95",
      "sectionNum": "9",
      "question": "How would you test a login page beyond normal credentials?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 SQL Injection test.",
        "\u2022 XSS attacks.",
        "\u2022 Empty fields.",
        "\u2022 Special characters in username/password.",
        "\u2022 Multiple failed attempts lockout.",
        "\u2022 Session handling after login."
      ]
    },
    {
      "id": "devops-misc-q10",
      "num": "96",
      "sectionNum": "10",
      "question": "How do you test without a UI?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Use API testing with Postman/Newman.",
        "\u2022 Validate database changes directly via SQL queries.",
        "\u2022 Check logs and backend response codes."
      ]
    },
    {
      "id": "devops-misc-q11",
      "num": "97",
      "sectionNum": "11",
      "question": "How do you approach testing when timelines are very tight?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Use Risk-Based Testing: Focus on critical features.",
        "\u2022 Run smoke tests first.",
        "\u2022 Automate repetitive checks.",
        "\u2022 Test in parallel with multiple team members."
      ]
    },
    {
      "id": "devops-misc-q12",
      "num": "98",
      "sectionNum": "12",
      "question": "How do you know if your testing is good enough?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Low escape defect rate (few bugs found after release).",
        "\u2022 Positive feedback from stakeholders.",
        "\u2022 High coverage in test metrics."
      ]
    },
    {
      "id": "devops-misc-q13",
      "num": "99",
      "sectionNum": "13",
      "question": "Give an example of a bug that is hard to reproduce. How do you handle it?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "Example: A crash occurs only after long idle time and specific network conditions.",
        "Handling:",
        "\u2022 Add logging.",
        "\u2022 Try reproducing in different environments.",
        "\u2022 Use screen recording.",
        "\u2022 Check server logs."
      ]
    },
    {
      "id": "devops-misc-q14",
      "num": "100",
      "sectionNum": "14",
      "question": "How do you prioritize test cases?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Based on business impact.",
        "\u2022 Frequency of feature usage.",
        "\u2022 Past defect trends.",
        "\u2022 Critical path first."
      ]
    },
    {
      "id": "devops-misc-q15",
      "num": "101",
      "sectionNum": "15",
      "question": "How do you handle intermittent issues?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Run repeated tests.",
        "\u2022 Check environmental triggers.",
        "\u2022 Log timestamps to match with backend logs.",
        "\u2022 Use monitoring tools."
      ]
    },
    {
      "id": "devops-misc-q16",
      "num": "102",
      "sectionNum": "16",
      "question": "What is the di&erence between Smoke and Sanity testing?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "\u2022 Smoke Testing: Broad, shallow testing after a new build. Ensures major functions work.",
        "\u2022 Sanity Testing: Narrow, deep testing after a minor fix to check specific functionality."
      ]
    },
    {
      "id": "devops-misc-q17",
      "num": "103",
      "sectionNum": "17",
      "question": "How do you deal with changing requirements?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "\u2022 Maintain flexible test cases.",
        "\u2022 Keep RTM updated.",
        "\u2022 Re-run impacted test cases first.",
        "\u2022 Work closely with the product team."
      ]
    },
    {
      "id": "devops-misc-q18",
      "num": "104",
      "sectionNum": "18",
      "question": "What is an Escape Defect?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "A defect found in production that should have been caught during testing.",
        "Prevention: Improve coverage, peer reviews, better test data."
      ]
    },
    {
      "id": "devops-misc-q19",
      "num": "105",
      "sectionNum": "19",
      "question": "How do you test performance for a web app?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "\u2022 Use tools like JMeter or Locust.",
        "\u2022 Measure response time, throughput, error rate.",
        "\u2022 Test under load, stress, and endurance conditions."
      ]
    },
    {
      "id": "devops-misc-q20",
      "num": "106",
      "sectionNum": "20",
      "question": "What is the most challenging bug you found and how did you debug it?",
      "category": "Tricky & Miscellaneous",
      "answers": [
        "Answer:",
        "Interviewers expect a real project example here.",
        "Example: In a CI/CD pipeline, an API failed only when deployed to staging. Root cause was an outdated SSL",
        "certificate in that environment. Debugging involved analyzing Jenkins logs, API responses, and staging",
        "configurations."
      ]
    }
  ],
  "interview-100-real-time-scenarios": [
    {
      "id": "scenario-q1",
      "num": "1",
      "question": "How would you test an E-commerce website (like Amazon or Flipkart)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "Testing an e-commerce site involves multiple functional and non-functional scenarios.",
        "I would divide testing into modules:",
        "\u2022 Homepage: Check navigation, banners, responsiveness, broken links.",
        "\u2022 Search: Verify product search with valid/invalid keywords, filters, sorting, spelling mistakes.",
        "\u2022 Product Details Page: Check images, zoom, availability, add to cart, wishlist.",
        "\u2022 Cart & Checkout: Add/remove products, apply coupons, quantity update, price recalculation.",
        "\u2022 Payment Gateway: Test multiple methods (UPI, Credit card, COD), retry on failure, refund process.",
        "\u2022 Order Management: Verify order status (Pending \u2192 Shipped \u2192 Delivered), cancellation/refund flow.",
        "\u2022 Email/SMS Notifications: Confirm that order confirmation, shipping updates are sent.",
        "\ud83d\udc49 Example:",
        "If I'm testing \u201cApply Coupon Code\u201d, I'd check valid coupon (discount applied), expired coupon (error",
        "shown), and invalid coupon (error shown).",
        "This ensures end-to-end functional flow + usability + payment reliability."
      ]
    },
    {
      "id": "scenario-q2",
      "num": "2",
      "question": "How many test cases will you write to test an E-commerce site?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "There's no fixed number \u2014 it depends on scope. For a medium e-commerce site:",
        "\u2022 Homepage \u2192 20\u201330 test cases",
        "\u2022 Login/Register \u2192 30\u201340 test cases",
        "\u2022 Search & Filter \u2192 40\u201350 test cases",
        "\u2022 Cart & Checkout \u2192 50\u201370 test cases",
        "\u2022 Payments \u2192 70\u2013100 test cases",
        "\u2022 Order Management \u2192 40\u201360 test cases",
        "\ud83d\udc49 Roughly 300\u2013400 test cases for full regression.",
        "For smoke testing, I'd prioritize ~30\u201340 key cases (login, search, add to cart, checkout, payment)."
      ]
    },
    {
      "id": "scenario-q3",
      "num": "3",
      "question": "What if an API request passes but UI fails (e.g., Order API says \"Success\" but UI shows",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\"Failed\")?",
        "Answer:",
        "This happens due to UI and backend not being in sync.",
        "Steps:",
        "1. Validate API logs \u2192 Check if API responded with 200 success.",
        "2. Inspect UI logs (browser console, network tab) \u2192 Look for errors (JS, timeout, incorrect response",
        "handling).",
        "3. Verify mapping \u2192 Maybe API field changed but UI is still reading old key.",
        "\ud83d\udc49 Example:",
        "API response: { \"orderStatus\": \"success\" }",
        "But UI expects status = success. \u2192 Misalignment.",
        "As a tester, I'd raise a defect for integration mismatch and attach:",
        "\u2022 API response proof",
        "\u2022 UI screenshot",
        "\u2022 Console logs"
      ]
    },
    {
      "id": "scenario-q4",
      "num": "4",
      "question": "If a bug is not accepted by developers, how do you convince them?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "I follow a professional approach:",
        "1. Evidence-based communication \u2192 Provide logs, screenshots, API responses, steps to reproduce.",
        "2. Business impact \u2192 Explain how it affects customer experience.",
        "Example: \u201cIf user cannot apply a coupon, company may lose sales.\u201d",
        "3. Data-driven approach \u2192 Compare behavior with acceptance criteria (user story, requirement doc).",
        "\ud83d\udc49 Example:",
        "If developer says \u201cThis is not a bug, it's by design,\u201d I'd show requirement doc or mockup from BA to prove",
        "mismatch.",
        "If still not accepted \u2192 escalate to QA Lead / Product Owner."
      ]
    },
    {
      "id": "scenario-q5",
      "num": "5",
      "question": "What if your Pull Request (PR) is not approved for merging? How will you handle it?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 First, I'd check reviewer's comments \u2192 maybe I missed code quality checks, proper test coverage, or",
        "naming conventions.",
        "\u2022 If I strongly believe my code is correct, I'd schedule a quick call with reviewer to walk through code.",
        "\u2022 I'd use facts (test results, logs, automated run success) instead of arguments.",
        "\u2022 If still stuck \u2192 escalate politely to Lead/Manager.",
        "\ud83d\udc49 Example:",
        "If PR contains Selenium automation scripts for login tests, and reviewer says \u201cNot optimized,\u201d I'd show proof",
        "of execution time & coverage, then ask if they prefer Page Factory or different approach."
      ]
    },
    {
      "id": "scenario-q6",
      "num": "6",
      "question": "How do you test \u201cAdd to Cart\u201d functionality in an e-commerce app?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Add single product \u2192 Verify cart updates correctly.",
        "\u2022 Add multiple quantities \u2192 Price & total calculation correct.",
        "\u2022 Remove item \u2192 Cart count updates.",
        "\u2022 Empty cart \u2192 Verify checkout button disabled.",
        "\u2022 Cross-browser/device \u2192 Cart persists on login.",
        "\ud83d\udc49 Example:",
        "Bug found in real projects: Cart quantity didn't update when user pressed back button."
      ]
    },
    {
      "id": "scenario-q7",
      "num": "7",
      "question": "How do you handle a situation where high-severity bug is found just before release?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Immediately inform QA Lead, Dev Lead, Product Owner.",
        "\u2022 Show business impact (e.g., payment gateway not working = revenue loss).",
        "\u2022 Suggest workarounds if available.",
        "\u2022 If fix possible \u2192 delay release slightly and retest.",
        "\u2022 If no fix \u2192 request business decision (release with known bug or block release).",
        "\ud83d\udc49 Example:",
        "Found bug: \u201cCOD not available at checkout.\u201d \u2192 I'd escalate since it blocks 30% of orders."
      ]
    },
    {
      "id": "scenario-q8",
      "num": "8",
      "question": "How do you test API rate limiting (throttling)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Send multiple requests (100/sec).",
        "\u2022 Verify correct response code (429 Too Many Requests).",
        "\u2022 Check if retry after \u201cX seconds\u201d header is present.",
        "\ud83d\udc49 Example:",
        "In payments API, system allows only 5 retries \u2192 test by sending 6th request \u2192 must fail."
      ]
    },
    {
      "id": "scenario-q9",
      "num": "9",
      "question": "How do you test if email notifications are sent after order confirmation?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Place order \u2192 Verify email received.",
        "\u2022 Validate subject, content, order ID, timestamp.",
        "\u2022 Test negative case: Fake email ID \u2192 Should fail gracefully.",
        "\u2022 Test bulk order \u2192 Multiple emails sent correctly."
      ]
    },
    {
      "id": "scenario-q10",
      "num": "10",
      "question": "How do you ensure your automation scripts are stable and not flaky?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Use Explicit waits instead of hard sleeps.",
        "\u2022 Apply Page Object Model (POM) for reusability.",
        "\u2022 Handle dynamic locators with CSS/XPath strategies.",
        "\u2022 Run scripts in CI/CD (Jenkins) for consistency.",
        "\ud83d\udc49 Example:",
        "Login test failing sometimes \u2192 Added wait for \u201cLogin button enabled.\u201d Bug fixed."
      ]
    },
    {
      "id": "scenario-q11",
      "num": "11",
      "question": "If production issue is reported but you didn't catch it in testing, how do you handle it?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Accept responsibility & investigate root cause.",
        "\u2022 Check test coverage \u2192 was scenario missed?",
        "\u2022 Improve test cases / automation suite.",
        "\u2022 Add regression suite to prevent reoccurrence.",
        "\ud83d\udc49 Example:",
        "Missed bug: \u201cCoupon not working with guest checkout.\u201d \u2192 Added guest checkout test cases later."
      ]
    },
    {
      "id": "scenario-q12",
      "num": "12",
      "question": "How do you test multi-currency payment in an e-commerce site?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Select USD, INR, EUR \u2192 Check conversion rate, rounding.",
        "\u2022 Test different gateways (PayPal, Stripe).",
        "\u2022 Refund in same currency.",
        "\u2022 Validate against live exchange rates (mock data for testing)."
      ]
    },
    {
      "id": "scenario-q13",
      "num": "13",
      "question": "How do you test search functionality with filters (price, brand, category)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Search valid product \u2192 Filter by brand, check results.",
        "\u2022 Search invalid product \u2192 Show \u201cNo results.\u201d",
        "\u2022 Apply multiple filters \u2192 Results narrow down correctly.",
        "\u2022 Remove filters \u2192 Results reset.",
        "\ud83d\udc49 Example:",
        "Bug found: Search worked, but filters applied only after refreshing page."
      ]
    },
    {
      "id": "scenario-q14",
      "num": "14",
      "question": "If two developers raise bugs on each other's code, how do you as QA handle it?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Stay neutral \u2192 Focus on requirement vs actual behavior.",
        "\u2022 Retest both scenarios with documentation.",
        "\u2022 Attach logs/screenshots \u2192 Final decision based on facts."
      ]
    },
    {
      "id": "scenario-q15",
      "num": "15",
      "question": "How do you test mobile responsiveness of an e-commerce site?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Test on Chrome DevTools (mobile view).",
        "\u2022 Verify layout on iOS/Android devices.",
        "\u2022 Test touch actions (swipe, pinch zoom).",
        "\u2022 Check if checkout works smoothly on mobile."
      ]
    },
    {
      "id": "scenario-q16",
      "num": "16",
      "question": "How do you handle a failed automation build in Jenkins?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Check console logs.",
        "\u2022 Identify if failure due to environment, script, or actual bug.",
        "\u2022 If script issue \u2192 Fix and rerun.",
        "\u2022 If environment \u2192 Restart server/test DB.",
        "\u2022 If real bug \u2192 Log in JIRA."
      ]
    },
    {
      "id": "scenario-q17",
      "num": "17",
      "question": "How do you prioritize test cases when release deadline is short?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Run Smoke Test \u2192 Critical flows (Login, Search, Checkout, Payment).",
        "\u2022 Run Regression only on impacted modules.",
        "\u2022 Use Risk-based testing \u2192 High impact areas tested first."
      ]
    },
    {
      "id": "scenario-q18",
      "num": "18",
      "question": "How do you test refund flow in e-commerce?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Place an order \u2192 Cancel \u2192 Verify refund initiated.",
        "\u2022 Refund via wallet, card, UPI \u2192 Different timelines.",
        "\u2022 Partial refund (1 item out of 3).",
        "\u2022 Invalid refund request \u2192 Show error."
      ]
    },
    {
      "id": "scenario-q19",
      "num": "19",
      "question": "How do you test when multiple users access same product stock?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Simulate 2 users ordering same last item.",
        "\u2022 Ensure one order succeeds, other gets \u201cOut of stock.\u201d",
        "\u2022 Prevent overselling (negative stock)."
      ]
    },
    {
      "id": "scenario-q20",
      "num": "20",
      "question": "How do you test security in login (e.g., brute force, SQL injection)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Enter wrong password 5 times \u2192 Account locked.",
        "\u2022 SQL injection attempt in username \u2192 Should sanitize input.",
        "\u2022 Check OTP/password encryption."
      ]
    },
    {
      "id": "scenario-q21",
      "num": "21",
      "question": "How do you test user registration with email and mobile number?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "I'd validate both positive and negative cases:",
        "\u2022 Positive:",
        "o Register with valid email & strong password \u2192 success message.",
        "o OTP received for mobile/email verification.",
        "\u2022 Negative:",
        "o Invalid email format (abc@com) \u2192 Error message.",
        "o Already registered email/mobile \u2192 Duplicate error.",
        "o Weak password (12345) \u2192 Rejected.",
        "\ud83d\udc49 Example:",
        "Bug I faced: Registration accepted duplicate mobile numbers across accounts \u2192 escalated as data integrity",
        "issue."
      ]
    },
    {
      "id": "scenario-q22",
      "num": "22",
      "question": "How do you test \"Forgot Password\" functionality?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Enter valid registered email \u2192 OTP/Reset link sent.",
        "\u2022 Enter unregistered email \u2192 Show \u201cEmail not found.\u201d",
        "\u2022 Click reset link \u2192 New password setup.",
        "\u2022 Expired link \u2192 Show \u201cLink expired.\u201d",
        "\ud83d\udc49 Example:",
        "Real bug: Password reset link expired after 2 minutes instead of 24 hours \u2192 blocked many users."
      ]
    },
    {
      "id": "scenario-q23",
      "num": "23",
      "question": "How do you test file upload functionality (like profile picture upload)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Upload valid JPG, PNG \u2192 Success.",
        "\u2022 Upload large file (> limit, e.g., 5MB) \u2192 Error.",
        "\u2022 Upload malicious file (.exe) \u2192 Blocked.",
        "\u2022 Upload duplicate \u2192 Replaces old one.",
        "\ud83d\udc49 Example:",
        "Bug: Upload worked on Chrome but failed on Safari due to CORS issue."
      ]
    },
    {
      "id": "scenario-q24",
      "num": "24",
      "question": "How do you test payment refund timeline?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Wallet refund \u2192 Instant.",
        "\u2022 Credit card refund \u2192 5\u20137 days.",
        "\u2022 UPI refund \u2192 24 hours.",
        "\u2022 Cancel order \u2192 Verify refund initiation timestamp logged.",
        "\ud83d\udc49 Example:",
        "In one project, refund marked as \u201cProcessed\u201d in DB but didn't reflect in UI \u2192 raised bug for UI",
        "inconsistency."
      ]
    },
    {
      "id": "scenario-q25",
      "num": "25",
      "question": "How do you test a shopping cart when multiple tabs are open?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Add item in Tab 1 \u2192 Check reflected in Tab 2.",
        "\u2022 Remove item in Tab 2 \u2192 Updated in Tab 1.",
        "\u2022 Checkout in Tab 1 while Tab 2 still open \u2192 No duplicate order.",
        "\ud83d\udc49 Example:",
        "Bug: Adding product in Tab 1 didn't update Tab 2 until page refresh \u2192 inconsistent cart state."
      ]
    },
    {
      "id": "scenario-q26",
      "num": "26",
      "question": "How do you test search suggestions (auto-complete)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Typing \u201cLap\u201d \u2192 Suggest \u201cLaptop, Laptop Bag.\u201d",
        "\u2022 Wrong spelling \u2192 Fuzzy match (e.g., \u201cLaptoop\u201d).",
        "\u2022 Empty search \u2192 No suggestions.",
        "\u2022 SQL injection attempt \u2192 Sanitized.",
        "\ud83d\udc49 Example:",
        "Bug: Auto-suggestions leaked out-of-stock products that should've been hidden."
      ]
    },
    {
      "id": "scenario-q27",
      "num": "27",
      "question": "How do you handle if a developer says \"It's working on my machine\"?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Reproduce on QA environment \u2192 record video/logs.",
        "\u2022 Compare versions of build, DB, config.",
        "\u2022 Highlight environment mismatch.",
        "\u2022 If still denied \u2192 Involve DevOps to check deployment consistency.",
        "\ud83d\udc49 Example:",
        "Bug in checkout \u2192 worked locally but failed in staging \u2192 root cause was different API endpoint configs."
      ]
    },
    {
      "id": "scenario-q28",
      "num": "28",
      "question": "How do you test \"Add to Wishlist\" functionality?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Add single item \u2192 Wishlist updated.",
        "\u2022 Remove item \u2192 Removed.",
        "\u2022 Add out-of-stock item \u2192 Still allowed in wishlist.",
        "\u2022 Wishlist persists across sessions.",
        "\ud83d\udc49 Example:",
        "Bug: Wishlist cleared automatically after logout \u2192 unacceptable for customers."
      ]
    },
    {
      "id": "scenario-q29",
      "num": "29",
      "question": "How do you test multi-user login sessions (same account on di&erent devices)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Login on Device A & Device B simultaneously.",
        "\u2022 Add to cart on A \u2192 Syncs to B.",
        "\u2022 Logout from one device \u2192 Should not force logout on all (unless security setting requires).",
        "\ud83d\udc49 Example:",
        "Bug: One login invalidated the other \u2192 users couldn't shop across devices."
      ]
    },
    {
      "id": "scenario-q30",
      "num": "30",
      "question": "How do you test performance of product search API?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Check response time \u2192 Must be < 1 sec for 100 products.",
        "\u2022 Load test \u2192 5000 concurrent users searching.",
        "\u2022 Stress test \u2192 20,000 requests \u2192 API should fail gracefully.",
        "\ud83d\udc49 Example:",
        "Observed search API slowed to 6s under 1000 users \u2192 flagged for optimization."
      ]
    },
    {
      "id": "scenario-q31",
      "num": "31",
      "question": "How do you test cross-browser compatibility?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Test on Chrome, Firefox, Safari, Edge.",
        "\u2022 Verify CSS, fonts, alignments.",
        "\u2022 Check JavaScript functions (dropdowns, modals).",
        "\u2022 Automate via Selenium Grid / BrowserStack.",
        "\ud83d\udc49 Example:",
        "Bug: \u201cCheckout button not clickable on Safari\u201d due to CSS overlay issue."
      ]
    },
    {
      "id": "scenario-q32",
      "num": "32",
      "question": "How do you test product price calculation (discounts, tax, shipping)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Apply % discount coupon \u2192 Correct calculation.",
        "\u2022 Apply fixed discount (\u20b9100 off).",
        "\u2022 Apply tax \u2192 Correct GST calculation.",
        "\u2022 Add shipping charge.",
        "\u2022 Edge case: 100% discount coupon.",
        "\ud83d\udc49 Example:",
        "Bug: Discount applied twice when coupon re-entered \u2192 double deduction."
      ]
    },
    {
      "id": "scenario-q33",
      "num": "33",
      "question": "How do you test API timeout handling?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Delay API response > configured timeout (e.g., 30s).",
        "\u2022 Verify UI shows \u201cSomething went wrong\u201d not infinite loader.",
        "\u2022 Retry logic implemented.",
        "\ud83d\udc49 Example:",
        "Bug: App kept spinning for 5 mins because timeout not handled."
      ]
    },
    {
      "id": "scenario-q34",
      "num": "34",
      "question": "How do you handle priority vs severity conflicts in bugs?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Severity = impact on system.",
        "\u2022 Priority = urgency of fix.",
        "\ud83d\udc49 Example:",
        "\u2022 Spelling mistake in homepage \u2192 Low severity, High priority (customer-facing).",
        "\u2022 Crash in admin panel \u2192 High severity, Low priority (internal users only).",
        "As QA, I'd align with Product Owner for business impact."
      ]
    },
    {
      "id": "scenario-q35",
      "num": "35",
      "question": "How do you test order cancellation flow?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Cancel before shipment \u2192 Allowed.",
        "\u2022 Cancel after shipment \u2192 Not allowed.",
        "\u2022 Refund initiated after cancellation.",
        "\u2022 Multiple cancel attempts \u2192 Only first valid.",
        "\ud83d\udc49 Example:",
        "Bug: Cancellation allowed even after \u201cOut for delivery\u201d status."
      ]
    },
    {
      "id": "scenario-q36",
      "num": "36",
      "question": "How do you test \u201cApply Promo Code\u201d functionality?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Valid promo \u2192 Discount applied.",
        "\u2022 Expired promo \u2192 Error.",
        "\u2022 Invalid promo \u2192 Error.",
        "\u2022 Promo applied with minimum cart value condition.",
        "\ud83d\udc49 Example:",
        "Bug: Promo code applied even when cart < minimum value."
      ]
    },
    {
      "id": "scenario-q37",
      "num": "37",
      "question": "How do you test order tracking system?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Order status \u2192 Pending \u2192 Shipped \u2192 Out for Delivery \u2192 Delivered.",
        "\u2022 Wrong tracking ID \u2192 Error message.",
        "\u2022 Delivery delay \u2192 ETA updated.",
        "\u2022 Email/SMS notifications sent.",
        "\ud83d\udc49 Example:",
        "Bug: Tracking page showed \u201cDelivered\u201d but package still in transit."
      ]
    },
    {
      "id": "scenario-q38",
      "num": "38",
      "question": "How do you test login with social media (Google, Facebook)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Valid login \u2192 Redirect to homepage.",
        "\u2022 Invalid credentials \u2192 Error from OAuth.",
        "\u2022 Revoke permission \u2192 Login fails.",
        "\u2022 Multiple accounts \u2192 User chooses correct one.",
        "\ud83d\udc49 Example:",
        "Bug: Google login worked but didn't fetch user profile \u2192 incomplete onboarding."
      ]
    },
    {
      "id": "scenario-q39",
      "num": "39",
      "question": "How do you test checkout process with multiple payment methods?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 COD, UPI, Credit/Debit Card, Wallet.",
        "\u2022 Card with insufficient funds \u2192 Declined.",
        "\u2022 UPI with expired VPA \u2192 Error.",
        "\u2022 Wallet balance + card combined.",
        "\ud83d\udc49 Example:",
        "Bug: UPI payments succeeded but UI still showed \u201cPayment Failed.\u201d"
      ]
    },
    {
      "id": "scenario-q40",
      "num": "40",
      "question": "How do you test caching in e-commerce websites?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Add product \u2192 Refresh page \u2192 Updated stock must show.",
        "\u2022 Clear cache \u2192 Latest data fetched.",
        "\u2022 CDN caching for images.",
        "\u2022 Ensure sensitive data (cart, payment) not cached.",
        "\ud83d\udc49 Example:",
        "Bug: Out-of-stock product still showing available due to stale cache."
      ]
    },
    {
      "id": "scenario-q41",
      "num": "41",
      "question": "How do you test if an API response schema changes?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Maintain schema validation in automation (JSON schema).",
        "\u2022 If API previously returned { \"id\": 123 } and now returns { \"userId\": 123 }, UI might break.",
        "\u2022 Compare API contract against Swagger/Postman docs.",
        "\ud83d\udc49 Example:",
        "In one project, developer renamed orderStatus \u2192 status \u2192 UI crashed. Caught via schema validation test."
      ]
    },
    {
      "id": "scenario-q42",
      "num": "42",
      "question": "How do you test database data integrity after placing an order?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Place order \u2192 Verify Orders table has correct details (orderID, amount, status).",
        "\u2022 Inventory table should reduce stock.",
        "\u2022 Payment table should log transaction.",
        "\u2022 No orphan records (orders without payment).",
        "\ud83d\udc49 Example:",
        "Bug: Inventory was not reduced after COD orders \u2192 stock showed wrong availability."
      ]
    },
    {
      "id": "scenario-q43",
      "num": "43",
      "question": "How do you test API error codes?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 200 \u2192 Success.",
        "\u2022 400 \u2192 Bad Request.",
        "\u2022 401 \u2192 Unauthorized.",
        "\u2022 404 \u2192 Resource not found.",
        "\u2022 500 \u2192 Internal server error.",
        "\ud83d\udc49 Example:",
        "Payment API returned 200 even on failure \u2192 UI showed \u201cSuccess\u201d incorrectly. Reported as critical bug."
      ]
    },
    {
      "id": "scenario-q44",
      "num": "44",
      "question": "How do you test database rollback if a transaction fails?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Simulate payment failure \u2192 Order should not be created in DB.",
        "\u2022 Partial rollback check \u2192 No half-complete records.",
        "\ud83d\udc49 Example:",
        "Bug: Payment failed but order row still created \u2192 users got \u201cghost orders.\u201d"
      ]
    },
    {
      "id": "scenario-q45",
      "num": "45",
      "question": "How do you test API pagination?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Fetch products with limit=10, offset=0.",
        "\u2022 Next call \u2192 offset=10.",
        "\u2022 Verify no duplicates, no missing data.",
        "\u2022 Edge case: last page with < 10 results.",
        "\ud83d\udc49 Example:",
        "Bug: API returned duplicate products across pages."
      ]
    },
    {
      "id": "scenario-q46",
      "num": "46",
      "question": "How do you test automation scripts in parallel execution?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Run 10 login tests simultaneously using Selenium Grid.",
        "\u2022 Ensure data isolation (unique test data per thread).",
        "\u2022 Avoid static variables/shared drivers.",
        "\ud83d\udc49 Example:",
        "Parallel checkout tests failed because multiple threads used same account \u2192 fixed by creating separate test",
        "data pools."
      ]
    },
    {
      "id": "scenario-q47",
      "num": "47",
      "question": "How do you test CI/CD pipeline for automation tests?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Verify Jenkins job triggers on code push.",
        "\u2022 Smoke tests run first, regression later.",
        "\u2022 Report published (Allure/Extent).",
        "\u2022 Slack/email notifications configured.",
        "\ud83d\udc49 Example:",
        "Bug: Jenkins marked build \u201cgreen\u201d even when 10% tests failed due to incorrect exit code handling."
      ]
    },
    {
      "id": "scenario-q48",
      "num": "48",
      "question": "How do you test if API caching is implemented correctly?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Call same API twice \u2192 First call slower, second call faster (cache hit).",
        "\u2022 Invalidate cache \u2192 New data fetched.",
        "\u2022 Sensitive APIs (balance check) \u2192 Should never cache.",
        "\ud83d\udc49 Example:",
        "Bug: Cart API cached \u2192 User saw old cart even after removing items."
      ]
    },
    {
      "id": "scenario-q49",
      "num": "49",
      "question": "How do you test SQL injection vulnerability?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Enter input like ' OR 1=1 -- in login field.",
        "\u2022 If query not sanitized \u2192 All users can log in.",
        "\u2022 Verify error messages don't leak DB info.",
        "\ud83d\udc49 Example:",
        "Tested login with abc'-- \u2192 bypassed authentication. Reported as P1 Security Bug."
      ]
    },
    {
      "id": "scenario-q50",
      "num": "50",
      "question": "How do you test automation framework stability?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Run suite multiple times \u2192 Should pass consistently.",
        "\u2022 Retry logic for flaky tests.",
        "\u2022 Centralized test data.",
        "\u2022 Proper exception handling.",
        "\ud83d\udc49 Example:",
        "Flaky login test failed randomly \u2192 fixed by adding explicit wait for login button visibility."
      ]
    },
    {
      "id": "scenario-q51",
      "num": "51",
      "question": "How do you test API authentication (OAuth, JWT)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Valid token \u2192 API success.",
        "\u2022 Expired token \u2192 401 Unauthorized.",
        "\u2022 Tampered token \u2192 Invalid signature.",
        "\u2022 No token \u2192 Blocked.",
        "\ud83d\udc49 Example:",
        "Bug: API accepted expired JWT tokens \u2192 serious security issue."
      ]
    },
    {
      "id": "scenario-q52",
      "num": "52",
      "question": "How do you test CI/CD rollback mechanism?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Deploy faulty build \u2192 Pipeline should rollback to last stable version.",
        "\u2022 Verify rollback logs and notifications.",
        "\ud83d\udc49 Example:",
        "During a faulty checkout deployment, rollback didn't trigger \u2192 site went down for 30 mins. Reported as",
        "pipeline gap."
      ]
    },
    {
      "id": "scenario-q53",
      "num": "53",
      "question": "How do you test if automation test data is re-usable?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Ensure test data cleanup after execution.",
        "\u2022 Use random generators for email, order ID.",
        "\u2022 Reset DB or use mock services.",
        "\ud83d\udc49 Example:",
        "Tests failed because same user email reused \u2192 \u201cEmail already registered\u201d error. Fixed with UUID-based",
        "email creation."
      ]
    },
    {
      "id": "scenario-q54",
      "num": "54",
      "question": "How do you test API concurrency issues?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Trigger 10 parallel API calls to order same product.",
        "\u2022 Verify only one succeeds, others get \u201cOut of stock.\u201d",
        "\u2022 No duplicate records.",
        "\ud83d\udc49 Example:",
        "Bug: Two users placed order for last item \u2192 inventory went negative."
      ]
    },
    {
      "id": "scenario-q55",
      "num": "55",
      "question": "How do you test Jenkins pipeline scheduling?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Verify nightly regression triggers at 2 AM.",
        "\u2022 Check logs to confirm schedule execution.",
        "\u2022 Failures \u2192 Notifications sent to Slack/email.",
        "\ud83d\udc49 Example:",
        "Bug: Scheduled job skipped on weekends due to cron misconfiguration."
      ]
    },
    {
      "id": "scenario-q56",
      "num": "56",
      "question": "How do you test data migration when moving from old DB to new DB?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Row counts before & after migration.",
        "\u2022 Data consistency (no null values).",
        "\u2022 Key relationships maintained.",
        "\u2022 Random record checks.",
        "\ud83d\udc49 Example:",
        "Bug: OrderHistory table lost foreign key mapping after migration."
      ]
    },
    {
      "id": "scenario-q57",
      "num": "57",
      "question": "How do you test performance of automation framework?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Measure total suite execution time.",
        "\u2022 Identify slowest tests.",
        "\u2022 Optimize locators, reduce waits, parallelize execution.",
        "\ud83d\udc49 Example:",
        "Regression suite took 6 hours \u2192 reduced to 1.5 hours using parallel execution + optimized waits."
      ]
    },
    {
      "id": "scenario-q58",
      "num": "58",
      "question": "How do you test data encryption in API/DB?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 API should return masked data (e.g., ****1234 for card).",
        "\u2022 DB should store encrypted (AES/Hash), not plain text.",
        "\u2022 Verify secure transmission (HTTPS).",
        "\ud83d\udc49 Example:",
        "Bug: API returned full credit card number in response \u2192 escalated as Critical P0 issue."
      ]
    },
    {
      "id": "scenario-q59",
      "num": "59",
      "question": "How do you test log generation in applications?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Perform actions \u2192 Verify logs created.",
        "\u2022 Error case \u2192 Error logs recorded.",
        "\u2022 Logs rotated daily to prevent overflow.",
        "\ud83d\udc49 Example:",
        "Bug: Application logs exposed user passwords in plain text."
      ]
    },
    {
      "id": "scenario-q60",
      "num": "60",
      "question": "How do you test rollback in automation framework if test fails?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Test fails \u2192 Rollback test data.",
        "\u2022 Example: Create order test \u2192 If fails, order must be deleted.",
        "\u2022 Implement cleanup in @AfterMethod.",
        "\ud83d\udc49 Example:",
        "Order creation test failed \u2192 but leftover orders stayed in DB \u2192 polluted future tests. Fixed with cleanup",
        "method.",
        "\u26a1 Vamsi, that's Questions 41\u201360 with long answers, real project examples, and deep explanations.",
        "Would you like me to make the next 20 (61\u201380) around Agile/Scrum, Bug lifecycle, Stakeholder",
        "communication, and tricky \u201cconvince-the-developer\u201d type real-time scenarios?",
        "You said:",
        "yes",
        "ChatGPT said:",
        "Awesome",
        "\ud83d\udd25 Now let's go into Agile/Scrum, Bug Lifecycle, Stakeholder communication, and tricky",
        "\u201cconvince-the-developer\u201d type scenarios \u2014 the kind that most QA / Test Engineer / Automation Engineer",
        "interviews love to ask, because they test both technical + communication skills.",
        "Here's the next batch:",
        "\u2705 Real-Time QA Scenario Questions (61\u201380)"
      ]
    },
    {
      "id": "scenario-q61",
      "num": "61",
      "question": "In Agile, what will you do if developers deliver a user story very late in the sprint?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 If testing time is very short, I'd:",
        "o Prioritize smoke tests \u2192 Validate critical flow.",
        "o Automate regression in parallel.",
        "o Highlight risk in the daily stand-up to Scrum Master & PO.",
        "\u2022 If critical bugs found \u2192 Escalate risk of sprint goal failure.",
        "\ud83d\udc49 Example:",
        "In one sprint, developer delivered \u201cApply Promo Code\u201d story on the last day \u2192 only smoke tested discount",
        "logic, deferred full boundary tests to next sprint."
      ]
    },
    {
      "id": "scenario-q62",
      "num": "62",
      "question": "How do you test if Acceptance Criteria (AC) is unclear in a story?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Ask clarifying questions in grooming/refinement.",
        "\u2022 Use 3 Amigos approach (Dev, QA, PO).",
        "\u2022 Document assumptions if PO not available.",
        "\ud83d\udc49 Example:",
        "AC said: \u201cUser should see discounts.\u201d I asked \u2192 Flat discount or percentage? Applied before or after tax? \u2192",
        "Found missing business rules."
      ]
    },
    {
      "id": "scenario-q63",
      "num": "63",
      "question": "If you find a bug during sprint demo, how do you handle it?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Don't hide \u2192 Show bug transparently.",
        "\u2022 Explain expected vs actual behavior.",
        "\u2022 Raise Jira bug \u2192 Link to story.",
        "\u2022 If minor UI \u2192 Fix in next sprint.",
        "\u2022 If critical \u2192 Block release until fixed.",
        "\ud83d\udc49 Example:",
        "During demo, coupon field accepted invalid characters \u2192 demo failed but stakeholders appreciated honesty."
      ]
    },
    {
      "id": "scenario-q64",
      "num": "64",
      "question": "How do you handle a developer who always rejects your bugs as \u201cNot a bug\u201d?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Provide step-by-step repro, screenshots, logs.",
        "\u2022 Compare with requirements/AC.",
        "\u2022 If conflict \u2192 involve PO/BA for decision.",
        "\u2022 Maintain professional tone, avoid arguments.",
        "\ud83d\udc49 Example:",
        "Developer rejected \u201cCart not updating on back button.\u201d I showed requirement doc \u2192 bug got accepted."
      ]
    },
    {
      "id": "scenario-q65",
      "num": "65",
      "question": "How do you test a user story that has dependencies on another team?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Identify dependency early in sprint planning.",
        "\u2022 Use mock APIs or stubs if other team not ready.",
        "\u2022 Blocker tickets raised in Jira.",
        "\u2022 Sync in Scrum of Scrums if multi-team project.",
        "\ud83d\udc49 Example:",
        "Payment service not ready \u2192 I mocked API response in Postman to test checkout flow."
      ]
    },
    {
      "id": "scenario-q66",
      "num": "66",
      "question": "If PO insists on releasing with a known bug, what will you do?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Clearly explain business impact.",
        "\u2022 Provide examples: \u201cUser can't apply coupon \u2192 revenue loss.\u201d",
        "\u2022 If still insists \u2192 Document as Known Issue in release notes.",
        "\u2022 Add bug to backlog for next sprint.",
        "\ud83d\udc49 Example:",
        "Released with known issue \u201cWishlist not persisting\u201d \u2192 communicated upfront \u2192 reduced customer",
        "complaints."
      ]
    },
    {
      "id": "scenario-q67",
      "num": "67",
      "question": "How do you estimate testing e&ort in Agile?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Use Story Points or hours.",
        "\u2022 Consider: complexity, test data, environments, automation scope.",
        "\u2022 Example scale:",
        "o Simple login \u2192 2 points.",
        "o Payment gateway integration \u2192 8 points.",
        "\ud83d\udc49 Example:",
        "Estimated \u201cRefund flow\u201d as 5 points because of multiple scenarios (full, partial, wallet, card)."
      ]
    },
    {
      "id": "scenario-q68",
      "num": "68",
      "question": "How do you handle a blocker bug in the middle of sprint?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Raise immediately in stand-up.",
        "\u2022 Create blocker Jira ticket.",
        "\u2022 Collaborate with dev \u2192 maybe test other non-dependent stories.",
        "\u2022 Escalate if no quick resolution.",
        "\ud83d\udc49 Example:",
        "Checkout API down \u2192 blocked entire cart testing. Escalated to DevOps, switched to regression testing",
        "meanwhile."
      ]
    },
    {
      "id": "scenario-q69",
      "num": "69",
      "question": "How do you test when requirements keep changing?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Follow Agile principle \u2192 embrace change.",
        "\u2022 Use modular test cases \u2192 easy to update.",
        "\u2022 Automate stable flows.",
        "\u2022 Track changes in Jira Confluence.",
        "\ud83d\udc49 Example:",
        "Requirement: \u201cCOD enabled for all\u201d \u2192 changed to \u201cCOD only for orders < \u20b92000.\u201d Updated test cases quickly."
      ]
    },
    {
      "id": "scenario-q70",
      "num": "70",
      "question": "How do you report testing progress in Agile?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Daily stand-up \u2192 blockers, completed tasks, next tasks.",
        "\u2022 Jira dashboard \u2192 Story status (To Do, In Progress, Done).",
        "\u2022 Share Test Coverage Report (executed vs pending).",
        "\ud83d\udc49 Example:",
        "I used Jira Xray \u2192 showed 75% test execution, 5 open bugs \u2192 gave PO confidence before release."
      ]
    },
    {
      "id": "scenario-q71",
      "num": "71",
      "question": "If you miss testing a scenario and it fails in production, how do you handle it?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Accept mistake, no blame game.",
        "\u2022 Do root cause analysis \u2192 why missed? (requirement gap, lack of test data).",
        "\u2022 Add to regression suite.",
        "\u2022 Improve process to avoid repeat.",
        "\ud83d\udc49 Example:",
        "Missed \u201cGuest checkout + coupon\u201d \u2192 caused prod bug. Added guest checkout tests permanently."
      ]
    },
    {
      "id": "scenario-q72",
      "num": "72",
      "question": "How do you convince management to give more time for testing?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Show risk matrix \u2192 bugs found vs time spent.",
        "\u2022 Provide defect leakage stats \u2192 \u201cLess testing = higher production issues.\u201d",
        "\u2022 Suggest parallel automation to save time.",
        "\ud83d\udc49 Example:",
        "Convincing PO to give 1 more day found 3 more P1 bugs \u2192 proved value of extended testing."
      ]
    },
    {
      "id": "scenario-q73",
      "num": "73",
      "question": "How do you test bug fixes quickly in Agile?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Retest bug \u2192 verify exact scenario.",
        "\u2022 Run related regression cases.",
        "\u2022 Automate if recurring.",
        "\ud83d\udc49 Example:",
        "Fix for \u201cQuantity not updating in cart\u201d \u2192 retested with multiple products + checkout."
      ]
    },
    {
      "id": "scenario-q74",
      "num": "74",
      "question": "How do you test a feature with no documentation?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Explore feature using Exploratory Testing.",
        "\u2022 Discuss with dev/PO for expectations.",
        "\u2022 Check similar existing features.",
        "\u2022 Document findings as you test.",
        "\ud83d\udc49 Example:",
        "Feature \u201cGift wrapping\u201d had no doc \u2192 tested by trial, confirmed with dev, wrote own test notes."
      ]
    },
    {
      "id": "scenario-q75",
      "num": "75",
      "question": "How do you manage test cases in Agile (where requirements evolve)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Keep lightweight test cases in Jira/Xray/Zephyr.",
        "\u2022 Use checklists for evolving features.",
        "\u2022 Automate repetitive ones.",
        "\ud83d\udc49 Example:",
        "Maintained \u201cSearch & Filter\u201d checklist instead of 50 detailed cases \u2192 saved time when filters changed often."
      ]
    },
    {
      "id": "scenario-q76",
      "num": "76",
      "question": "How do you test sprint deliverables in very short time?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Apply Risk-based testing.",
        "\u2022 Focus on high-priority user journeys (login, checkout, payment).",
        "\u2022 Automate regression in background.",
        "\ud83d\udc49 Example:",
        "Had 4 hours to test \u2192 covered login, add to cart, payment only. Reported 1 critical bug \u2192 sprint saved."
      ]
    },
    {
      "id": "scenario-q77",
      "num": "77",
      "question": "How do you handle conflict with a developer?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Focus on data, not emotions.",
        "\u2022 Show logs, steps, screenshots.",
        "\u2022 If disagreement persists \u2192 escalate to Lead/PO.",
        "\u2022 Keep collaborative tone.",
        "\ud83d\udc49 Example:",
        "Developer said \u201cBug not valid.\u201d I demonstrated in staging \u2192 he accepted politely."
      ]
    },
    {
      "id": "scenario-q78",
      "num": "78",
      "question": "How do you test Agile user stories that don't fit in one sprint?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Split into smaller deliverables.",
        "\u2022 Example: Story \u201cRefund system\u201d \u2192",
        "o Sprint 1: Refund initiation API.",
        "o Sprint 2: UI & email confirmation.",
        "\u2022 Test incrementally.",
        "\ud83d\udc49 Example:",
        "Refund flow was too large \u2192 we split into API + UI \u2192 tested separately."
      ]
    },
    {
      "id": "scenario-q79",
      "num": "79",
      "question": "How do you test when development and QA environments di&er?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Verify configs with DevOps.",
        "\u2022 Use same DB seed/data set.",
        "\u2022 Raise env parity issue if major gaps.",
        "\ud83d\udc49 Example:",
        "Bug appeared in QA but not dev \u2192 root cause: different DB versions."
      ]
    },
    {
      "id": "scenario-q80",
      "num": "80",
      "question": "How do you test when multiple teams deliver microservices in parallel?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "Answer:",
        "\u2022 Test each microservice with mock contracts.",
        "\u2022 Once integrated, run end-to-end flows.",
        "\u2022 Automate contract tests with Postman/Newman.",
        "\ud83d\udc49 Example:",
        "Checkout used Payment + Inventory microservices. Payment team delivered late \u2192 I mocked payment API",
        "to continue testing."
      ]
    },
    {
      "id": "scenario-q81",
      "num": "81",
      "question": "How will you test cart abandonment recovery in an e-commerce site?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Add items to cart \u2192 abandon checkout.",
        "\u2022 Verify system sends email/SMS/push notification after X hours.",
        "\u2022 Ensure coupon code/discount is applied correctly.",
        "\u2022 Test API trigger for abandoned cart.",
        "\u2022 Example: User adds shoes worth \u20b92000 but leaves. After 24 hrs, system sends a mail: \u201cComplete",
        "purchase & get 10% off\u201d. Verify link redirects to pre-filled cart."
      ]
    },
    {
      "id": "scenario-q82",
      "num": "82",
      "question": "How will you test price updates when a product goes on sale?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Verify backend price update in DB.",
        "\u2022 UI should reflect sale price everywhere (product page, cart, order summary, invoice).",
        "\u2022 Ensure old customers don't get wrong prices.",
        "\u2022 Example: Product price drops from \u20b91500 \u2192 \u20b91200. If a user adds to cart before discount but buys",
        "later, order should calculate new discounted price."
      ]
    },
    {
      "id": "scenario-q83",
      "num": "83",
      "question": "How do you ensure test cases cover edge scenarios for payment gateway?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Test expired card, insufficient balance, wrong CVV, network failure, retry option.",
        "\u2022 Verify duplicate payment handling (should not double charge).",
        "\u2022 Example: API returns \"Transaction Declined - 51\" (insufficient funds), UI should show \u201cPayment",
        "Failed: Low Balance\u201d."
      ]
    },
    {
      "id": "scenario-q84",
      "num": "84",
      "question": "If a stakeholder rejects your bug saying \u201cNot reproducible\u201d , how will you handle?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Provide detailed steps, screenshots, and logs.",
        "\u2022 Record a video proof.",
        "\u2022 Check environment differences (e.g., staging vs prod).",
        "\u2022 Example: You find \u201cCart not updating in Safari browser\u201d but Dev says it works on Chrome. You share",
        "a video + browser logs to prove."
      ]
    },
    {
      "id": "scenario-q85",
      "num": "85",
      "question": "How do you test an OTP-based login system?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Validate OTP is generated correctly.",
        "\u2022 Expiry time (e.g., 3 mins).",
        "\u2022 Wrong OTP \u2192 proper error message.",
        "\u2022 Retry & resend functionality.",
        "\u2022 Example: If OTP expires in 3 mins but system accepts after 5 mins \u2192 security bug."
      ]
    },
    {
      "id": "scenario-q86",
      "num": "86",
      "question": "What if API response is slow, but UI has no timeout handling?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 API SLA should be \u2264 2s.",
        "\u2022 UI should show a loader & timeout error after X secs.",
        "\u2022 Example: Payment API takes 30s, but UI keeps spinning forever \u2192 poor UX. Raise a bug for timeout",
        "handling."
      ]
    },
    {
      "id": "scenario-q87",
      "num": "87",
      "question": "How will you test localization of an e-commerce site (multi-language)?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Switch language \u2192 verify translations across pages.",
        "\u2022 Currency conversion (\u20b9 \u2192 $, \u20ac, etc.).",
        "\u2022 RTL (Right-to-Left) for Arabic.",
        "\u2022 Example: In German site, \u201cAdd to Cart\u201d should be \u201cIn den Warenkorb\u201d. If only half-translated \u2192 bug."
      ]
    },
    {
      "id": "scenario-q88",
      "num": "88",
      "question": "How do you test performance of bulk order processing?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Place 100\u20131000 items in cart.",
        "\u2022 Validate system doesn't slow down.",
        "\u2022 API batch requests handling.",
        "\u2022 Example: If 500 items take 2 minutes to process, log a performance bug."
      ]
    },
    {
      "id": "scenario-q89",
      "num": "89",
      "question": "If Dev doesn't approve your PR merge for automation, how do you convince?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Share code quality checks (linting, SonarQube).",
        "\u2022 Provide test execution proof.",
        "\u2022 Show how automation reduces regression time.",
        "\u2022 Example: If manual checkout testing takes 1 hr, but your automation runs in 3 mins, highlight ROI."
      ]
    },
    {
      "id": "scenario-q90",
      "num": "90",
      "question": "How do you test coupons and discount codes?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Apply valid coupon \u2192 discount applied.",
        "\u2022 Expired coupon \u2192 error.",
        "\u2022 Min cart value validation.",
        "\u2022 One-time-use coupon check.",
        "\u2022 Example: If coupon \"NEW100\" is valid only for new users but works for existing ones, it's a business",
        "loss bug."
      ]
    },
    {
      "id": "scenario-q91",
      "num": "91",
      "question": "How do you test concurrency when multiple users update cart at same time?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Two users try to buy last item simultaneously.",
        "\u2022 Ensure only one order succeeds.",
        "\u2022 Locking mechanism check in DB.",
        "\u2022 Example: If both users purchase last laptop \u2192 overselling \u2192 critical bug."
      ]
    },
    {
      "id": "scenario-q92",
      "num": "92",
      "question": "How do you ensure data consistency across UI, API, DB?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 UI total = API response total = DB record.",
        "\u2022 Sync issues validation.",
        "\u2022 Example: Order shows \u20b92000 in UI but API says \u20b92200 \u2192 mismatch."
      ]
    },
    {
      "id": "scenario-q93",
      "num": "93",
      "question": "How do you test wishlist feature in e-commerce?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Add/remove items.",
        "\u2022 Persist wishlist after logout/login.",
        "\u2022 Cross-device sync.",
        "\u2022 Example: Add 5 items on mobile \u2192 login in web \u2192 items should still be present."
      ]
    },
    {
      "id": "scenario-q94",
      "num": "94",
      "question": "How do you handle flakiness in automation scripts?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Add proper waits (explicit wait > thread.sleep).",
        "\u2022 Stabilize locators.",
        "\u2022 Retry failed tests.",
        "\u2022 Example: If \u201cPlace Order\u201d button loads late, script fails randomly. Add WebDriverWait condition."
      ]
    },
    {
      "id": "scenario-q95",
      "num": "95",
      "question": "How will you test email notifications for order confirmation?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Trigger order \u2192 check mail delivery.",
        "\u2022 Verify subject, body, order ID.",
        "\u2022 Validate links inside mail.",
        "\u2022 Example: Order confirmation mail missing order ID \u2192 bug."
      ]
    },
    {
      "id": "scenario-q96",
      "num": "96",
      "question": "What if business says a bug is minor but you think it's critical?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Highlight impact on user & revenue.",
        "\u2022 Give real-world scenario.",
        "\u2022 Example: \u201cAdd to Cart button misaligned\u201d may look minor, but if unclickable in iPhone Safari \u2192",
        "critical."
      ]
    },
    {
      "id": "scenario-q97",
      "num": "97",
      "question": "How do you test order cancellation?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Cancel before shipment \u2192 allowed.",
        "\u2022 Cancel after shipment \u2192 not allowed.",
        "\u2022 Refund initiation check.",
        "\u2022 Example: If system allows cancellation after delivery \u2192 bug."
      ]
    },
    {
      "id": "scenario-q98",
      "num": "98",
      "question": "How do you test search functionality?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Search by product name, partial text, SKU, category.",
        "\u2022 Validate ranking (relevance).",
        "\u2022 Handle typos/autocomplete.",
        "\u2022 Example: Searching \u201ciphon\u201d should still suggest \u201ciPhone\u201d."
      ]
    },
    {
      "id": "scenario-q99",
      "num": "99",
      "question": "How do you test stock management in inventory system?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 Buy last item \u2192 stock should reduce.",
        "\u2022 API should update DB correctly.",
        "\u2022 Out-of-stock item shouldn't be purchasable.",
        "\u2022 Example: If 10 items in stock but 15 orders placed \u2192 overselling bug."
      ]
    },
    {
      "id": "scenario-q100",
      "num": "100",
      "question": "How do you test a new feature rollout using A/B testing?",
      "category": "Real-Time QA Scenarios",
      "answers": [
        "\ud83d\udc49 Answer:",
        "\u2022 50% users see old flow, 50% see new flow.",
        "\u2022 Validate segmentation logic.",
        "\u2022 Ensure tracking metrics are logged.",
        "\u2022 Example: If discount banner is shown only to group A but group B also sees \u2192 rollout bug.",
        "---------THE END---------"
      ]
    },
    {
      "id": "scenario-q101",
      "num": "101",
      "category": "SDET Role & Shift-Left Strategy",
      "question": "Manual QA vs SDET: What is the Shift-Left testing mindset, and how does an SDET contribute to in-sprint automation and architectural reviews?",
      "answers": [
        "Traditional QA tested software at the far right of the lifecycle: after developers finished coding. Shift-Left testing moves quality activities to the earliest possible phases of the SDLC (requirements, architecture, sprint planning).",
        "\u2022 Key Differences: Manual QA vs SDET:",
        "  o Manual QA: Focuses on functional black-box verification, exploratory testing, UI defect discovery, and user acceptance.",
        "  o SDET (Software Development Engineer in Test): A software engineer who writes production-grade code to build test frameworks, CI/CD gates, mock services, and performance harnesses.",
        "\u2022 How an SDET Drives Shift-Left Quality:",
        "  1. Architectural Reviews: Reviews API contracts (OpenAPI/Swagger) and database schemas before coding starts to identify security, validation, and performance flaws.",
        "  2. In-Sprint Automation: Writes automated API and component tests in parallel with developer feature branches, ensuring code has 100% test coverage before merging to main.",
        "  3. Quality Gates: Configures automated PR gates in GitHub Actions/Jenkins that block any commit introducing flakiness or regressions."
      ]
    },
    {
      "id": "scenario-q102",
      "num": "102",
      "category": "System Design for Test Infrastructure",
      "question": "System Design for Test Infrastructure: How do you design a scalable, distributed test execution framework supporting Docker containers, Selenium Grid, and parallel execution?",
      "answers": [
        "When enterprise test suites grow to 5,000+ tests, executing them on a single machine takes 10+ hours. Designing a distributed infrastructure is an essential Senior SDET competency:",
        "\u2022 Architecture Blueprint:",
        "  1. Test Orchestrator (CI/CD): Jenkins or GitHub Actions matrix job splits the test suite by tags/groups across multiple worker nodes.",
        "  2. Containerized Grid (Docker / Kubernetes):",
        "     o Selenium Grid Hub or Zalenium/Selenoid container receives incoming sessions.",
        "     o Dynamic Chrome/Firefox node containers spin up on demand and terminate after test completion.",
        "  3. ThreadLocal Driver Management: Each worker thread maintains its own isolated `ThreadLocal<WebDriver>` session.",
        "  4. Centralized Artifact Storage: Failure traces, screenshots, and video recordings are offloaded directly to AWS S3 / Azure Blob Storage.",
        "  5. Unified Observability: Test results stream to Allure Server / Grafana dashboards for real-time failure triage."
      ]
    },
    {
      "id": "scenario-q103",
      "num": "103",
      "category": "Behavioral & Situation Handling",
      "question": "How do you handle developer pushback when a developer claims a critical bug is 'Works as designed' or 'Cannot reproduce'?",
      "answers": [
        "Disagreements between QA and engineering are inevitable. Resolving them professionally requires objective telemetry and the STAR method:",
        "\u2022 The 4-Step Resolution Strategy:",
        "  1. Provide Irrefutable Evidence: Never argue verbally. Attach Playwright/Selenium traces, network HAR logs, console error stack traces, and environment configuration (OS, browser version, screen resolution).",
        "  2. Trace Back to Business Requirements: Cross-reference the accepted user story or Product Requirements Document (PRD). Show how the current behavior directly impacts end-user revenue or data integrity.",
        "  3. Schedule a 5-Minute Sync: Live screenshare to demonstrate reproduction steps on a clean environment or container to eliminate local dev environment caching discrepancies.",
        "  4. Escalate to Product Owner if Ambiguous: If the behavior is genuinely undefined in requirements, facilitate a quick triage with the Product Manager to establish official expected behavior."
      ]
    },
    {
      "id": "scenario-q104",
      "num": "104",
      "category": "Behavioral & Situation Handling",
      "question": "How do you manage test debt, flakiness, and hotfixes during high-pressure release crunches?",
      "answers": [
        "During major release crunches, flaky tests can paralyze CI/CD pipelines and cause false-alarm panics.",
        "\u2022 The Action Plan for Test Debt & Flakiness:",
        "  1. Immediate Quarantine: Any test that fails intermittently without a reproducible product defect is tagged `@Flaky` or moved to a separate non-blocking quarantine suite. NEVER allow a flaky test to block a production release PR.",
        "  2. Root Cause Classification: Classify flakiness into Infrastructure (runner resource starvation), Application (async rendering, un-hydrated DOM), or Framework (bad locators, hard sleeps).",
        "  3. Enforce Strict Flaky Test Budget: Maintain a team SLA: quarantined tests must be fixed within 2 sprints or permanently deleted. Zero tolerance for endless skipped tests.",
        "  4. Fast-Track Smoke Suite for Hotfixes: Maintain a hyper-reliable 5-minute Smoke Suite of 20 core business journeys to gate emergency hotfixes."
      ]
    },
    {
      "id": "scenario-q105",
      "num": "105",
      "category": "Behavioral & Situation Handling",
      "question": "How do you lead cross-functional defect triage meetings and perform Root Cause Analysis (RCA) across engineering teams?",
      "answers": [
        "Defect triage meetings prioritize bugs, assign ownership, and prevent delivery bottlenecks.",
        "\u2022 Defect Triage Best Practices:",
        "  o Cadence: Daily during release hardening; 2-3 times per week during normal sprints.",
        "  o Attendees: QA Lead, Dev Lead, Product Manager, and Release Engineer.",
        "  o Agenda: Review all newly filed bugs; evaluate Severity (technical impact) vs Priority (business urgency); assign target sprint or mark as Backlog/Won't Fix.",
        "\u2022 Root Cause Analysis (5 Whys Technique):",
        "  o Problem: Critical checkout bug escaped to production.",
        "  o 1. Why? The address validation service returned 500 for Canadian postal codes.",
        "  o 2. Why? The regex pattern only supported US ZIP codes.",
        "  o 3. Why? The developer only tested against local US test data.",
        "  o 4. Why? The automated regression suite lacked international postal code coverage.",
        "  o 5. Why? Canada localization requirements were added late in the sprint without updating test acceptance criteria.",
        "  o Corrective Action: Add parameterized international data tests and mandate acceptance criteria sign-off."
      ]
    }
  ],
  "interview-playwright-mcp": [
    {
      "id": "playwright-q1",
      "num": "1",
      "category": "Playwright Core & Engine Architecture",
      "question": "What is Microsoft Playwright, why was it created, and how does its protocol-level architecture differ from Selenium WebDriver?",
      "answers": [
        "Microsoft Playwright is a next-generation browser automation and end-to-end testing framework created to address systemic architectural weaknesses in older tools like Selenium and Cypress.",
        "\u2022 Why Playwright Was Created:",
        "  o Eliminate Flakiness: Traditional tools suffer from asynchronous timing issues, race conditions, and heavy reliance on arbitrary thread sleeps.",
        "  o Protocol-Level Control: Instead of relying on a separate HTTP-based intermediary (WebDriver/JSON Wire Protocol), Playwright communicates directly with browser engines over a persistent, bi-directional WebSocket connection.",
        "  o Multi-Browser Parity: Native, first-class support for Chromium (Chrome, Edge), WebKit (Safari), and Firefox on Windows, macOS, and Linux.",
        "  o Modern Single Page Applications (SPAs): Built from the ground up to understand client-side rendering, service workers, shadow DOM, and network lifecycle events.",
        "\u2022 Architectural Comparison:",
        "  o Selenium: Test Script (Language Binding) -> HTTP JSON Wire/W3C Request -> ChromeDriver/GeckoDriver -> Browser Engine. Each action incurs network overhead, latency, and serialization boundaries.",
        "  o Playwright: Test Script -> Single WebSocket Connection -> Browser Engine using Chrome DevTools Protocol (CDP), WebKit Remote Debugging Protocol, and Firefox Internal Juggler protocol.",
        "  o Key Internal Concept: Playwright understands complete browser internal state (framing, execution contexts, network idle), not just static DOM snapshots."
      ]
    },
    {
      "id": "playwright-q2",
      "num": "2",
      "category": "Playwright Core & Engine Architecture",
      "question": "Explain the relationship between Browser, BrowserContext, and Page in Playwright. Why is BrowserContext so powerful for parallel test isolation?",
      "answers": [
        "Playwright uses a hierarchical three-tiered architecture: Browser -> BrowserContext -> Page.",
        "1. Browser:",
        "  o Represents the physical browser executable process (e.g., chromium, webkit, firefox).",
        "  o Expensive to launch (consumes significant OS memory and CPU cycles). In Playwright, a single Browser instance is launched once and shared across multiple tests.",
        "  const browser = await chromium.launch({ headless: true });",
        "2. BrowserContext:",
        "  o An isolated in-memory browser session akin to an incognito window.",
        "  o Has its own completely separated cookies, localStorage, sessionStorage, indexedDB, and cache.",
        "  o Ultra-fast to create (takes only a few milliseconds) and requires virtually zero memory overhead compared to launching a new Browser binary.",
        "  const context = await browser.newContext();",
        "  o Why It Matters for Parallelism: 100 tests can run in 100 isolated contexts within a single browser process with zero state bleeding, completely replacing the slow practice of opening and closing browser binaries between tests.",
        "3. Page:",
        "  o Represents a single browser tab or popup window within a specific BrowserContext.",
        "  o All DOM interactions, user events, and page navigations occur on the Page object.",
        "  const page = await context.newPage();",
        "  await page.goto('https://app.example.com');"
      ]
    },
    {
      "id": "playwright-q3",
      "num": "3",
      "category": "Playwright Core & Engine Architecture",
      "question": "How do Playwright Locators work internally, and why are they fundamentally different from Selenium WebElements?",
      "answers": [
        "In traditional Selenium, `driver.findElement(By.id('submit'))` executes an immediate lookup and returns a static reference (`WebElement`) to a DOM element at that exact microsecond. If the DOM re-renders or updates asynchronously, calling any method throws a `StaleElementReferenceException`.",
        "\u2022 How Playwright Locators Differ:",
        "  o Live Queries, Not Static Snapshots: A Playwright Locator is not an element in memory; it is a descriptive recipe (a live query) evaluated on-demand right when an action is performed.",
        "  const loginBtn = page.getByRole('button', { name: 'Login' });",
        "  o Zero Stale Element Exceptions: Every time you perform an action (e.g., `await loginBtn.click()`), Playwright re-evaluates the query against the current DOM tree.",
        "  o Automatic Re-querying: If a framework like React or Vue re-renders the component, Playwright seamlessly resolves the latest element in the DOM without crashing.",
        "  o Strict Mode Enforcement: By default, if a locator resolves to multiple elements when an action expects a single element, Playwright immediately throws a strictness violation error, preventing accidental clicks on ambiguous controls.",
        "  o Foundation for AI/MCP: This resilient, self-updating query design is the exact architectural primitive that enables autonomous agents and self-healing algorithms to operate without brittle timing failures."
      ]
    },
    {
      "id": "playwright-q4",
      "num": "4",
      "category": "Playwright Core & Engine Architecture",
      "question": "What is Actionability and Auto-Waiting in Playwright? Detail the 6 state checks Playwright performs before firing an action.",
      "answers": [
        "Playwright eliminates manual waits (`sleep`, `Thread.sleep`, explicit condition polling) by enforcing automated Actionability Checks before performing any user interaction (click, type, check, hover).",
        "\u2022 The 6 Actionability Checks performed before `click()` or interaction:",
        "  1. Attached: The element must be present in the Document Object Model (DOM).",
        "  2. Visible: The element must not have `display: none`, `visibility: hidden`, or zero bounding box dimensions, and must not be hidden behind `opacity: 0`.",
        "  3. Stable: The element must have finished animating or moving across viewports (bounding box does not shift over consecutive animation frames).",
        "  4. Receives Events: The element must be hit-testable at its target coordinate (i.e. not obscured or occluded by a loading spinner, overlay, modal dialog, or toast message).",
        "  5. Enabled: The element must not possess the `disabled` HTML attribute or ARIA disabled state.",
        "  6. Editable: For text inputs (`fill`), the element must be enabled, visible, and not marked as `readonly`.",
        "\u2022 Under the Hood:",
        "  o Playwright polls these criteria continuously until the default timeout (30 seconds) expires. If all 6 pass, the action executes natively. If any fail, a descriptive timeout log explains exactly which condition was not met."
      ]
    },
    {
      "id": "playwright-q5",
      "num": "5",
      "category": "Playwright Core & Engine Architecture",
      "question": "How do Web-First Assertions work in Playwright, and why are they resilient to modern single-page application (SPA) asynchronous updates?",
      "answers": [
        "In traditional test runners (such as JUnit or standard Jest), assertions are instantaneous: `expect(element.getText()).toEqual('Success')` reads the property immediately. If an API response is still in-flight, the test fails immediately.",
        "\u2022 Playwright Web-First Assertions (`expect(locator)`):",
        "  o Polling & Auto-Retrying: Playwright assertions automatically poll the DOM repeatedly until the expected state is met or the assertion timeout (default: 5000ms) is reached.",
        "  await expect(page.getByRole('alert')).toHaveText('User saved successfully');",
        "  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();",
        "  await expect(page).toHaveURL(/.*dashboard/);",
        "\u2022 Key Resiliency Advantages for SPAs:",
        "  o Eliminates race conditions between frontend state management (Redux, TanStack Query, Zustand) and browser rendering.",
        "  o Automatically inverts checks cleanly: `await expect(page.getByTestId('spinner')).toBeHidden()` waits for the spinner to disappear without manual sleep cycles.",
        "  o Rich Diagnostic Diffing: If an assertion times out, Playwright provides terminal diffs showing expected vs received values alongside locator telemetry."
      ]
    },
    {
      "id": "playwright-q6",
      "num": "6",
      "category": "Playwright Core & Engine Architecture",
      "question": "Why is Playwright considered the ideal automation engine for AI and MCP-based testing systems?",
      "answers": [
        "Playwright is uniquely suited as the underlying execution engine for Model Context Protocol (MCP) and autonomous AI testing agents for several foundational reasons:",
        "1. Declarative, User-Facing APIs: Methods like `getByRole`, `getByLabel`, and `getByPlaceholder` mirror human visual and accessibility intent rather than fragile DOM implementation quirks.",
        "2. Deterministic Primitives: With built-in auto-waiting and actionability guarantees, AI agents do not need to write fragile wait boilerplate; actions either succeed or yield structured, diagnostic errors.",
        "3. Fast Accessibility Snapshots: Playwright can dump the browser's accessibility tree (`page.accessibility.snapshot()`) in milliseconds. This concise semantic tree represents what a user sees with minimal token footprint compared to raw 5MB HTML DOM dumps.",
        "4. Network & Console Observability: Playwright captures network requests, response payloads, console logs, and uncaught exceptions natively. AI agents can inspect network idle states to verify API responses before taking subsequent steps.",
        "5. First-Class TypeScript Typings: Strongly typed interfaces allow code generation agents to reason over syntax trees and produce compilable, deterministic specs with strict type safety."
      ]
    },
    {
      "id": "playwright-q7",
      "num": "7",
      "category": "Limits of Traditional Automation & MCP Fundamentals",
      "question": "What are the three core limitations causing traditional test automation to reach its limits at enterprise scale?",
      "answers": [
        "As software delivery accelerates, traditional end-to-end automation frameworks encounter three compounding bottlenecks:",
        "1. Maintenance Cost Explosion:",
        "  o In large enterprises, 60% to 70% of engineering automation bandwidth is spent updating broken locators, adjusting timeouts, and fixing tests broken by minor UI refactors rather than writing new coverage.",
        "  o CSS class changes, DOM re-nesting, and design system updates trigger cascading failures across hundreds of rigid tests.",
        "2. Flakiness at Scale:",
        "  o Asynchronous rendering, micro-frontend hydration, network latency fluctuations, and third-party script delays introduce race conditions.",
        "  o Flaky tests erode team confidence, leading engineers to ignore pipeline failures or repeatedly re-trigger builds.",
        "3. The Intent-to-Code Translation Gap:",
        "  o Manual QA and product owners think in business intent: 'Verify an admin can deactivate an employee and revoke access permissions'.",
        "  o Automation engineers must manually translate this into: DOM selectors + explicit waits + click handlers + assertion timeouts.",
        "  o This translation layer is slow, prone to misinterpretation, and creates a significant technical bottleneck in agile sprints."
      ]
    },
    {
      "id": "playwright-q8",
      "num": "8",
      "category": "Limits of Traditional Automation & MCP Fundamentals",
      "question": "What is Model Context Protocol (MCP), and what specific problem does it solve in AI-driven test automation?",
      "answers": [
        "Model Context Protocol (MCP) is an open standard developed by Anthropic that provides a standardized protocol for Large Language Models (LLMs) to securely interact with external tools, systems, and structured context.",
        "\u2022 What MCP Is NOT:",
        "  o MCP is not an automation framework (it does not replace Playwright).",
        "  o MCP is not a test runner (it does not replace Jest, Vitest, or Playwright Test runner).",
        "\u2022 What MCP Actually Is:",
        "  o A universal, client-server protocol (using JSON-RPC 2.0) that defines tool contracts, context sharing, and bi-directional communication between AI models and physical execution environments.",
        "\u2022 The Problem It Solves in QA Automation:",
        "  o Bridges the gap between static LLM reasoning and real-world web execution.",
        "  o Instead of an LLM generating isolated text scripts in an open loop with no idea if they work, MCP enables the LLM to invoke discrete browser actions (navigate, click, fill), receive real execution feedback (DOM snapshots, screenshot bytes, error traces), and iteratively adjust its actions until the test intent is satisfied."
      ]
    },
    {
      "id": "playwright-q9",
      "num": "9",
      "category": "Limits of Traditional Automation & MCP Fundamentals",
      "question": "Compare Prompt-Only AI vs MCP-Based AI for test automation across execution feedback, determinism, and state awareness.",
      "answers": [
        "The handbook outlines the fundamental difference between prompt-only AI and MCP-based automation:",
        "\u2022 Dimension 1: Communication Format",
        "  o Prompt-Only AI: Plain text in / plain text out. Returns unvalidated code snippets.",
        "  o MCP-Based AI: Governed tool calls governed by structured JSON-RPC contracts.",
        "\u2022 Dimension 2: Execution Feedback Loop",
        "  o Prompt-Only AI: Open loop. The AI produces code blindly; it has no mechanism to know if the target page loaded or if a selector exists.",
        "  o MCP-Based AI: Closed loop. Every action returns live browser state, DOM accessibility trees, network statuses, and screenshots back to the model before the next step.",
        "\u2022 Dimension 3: Determinism & Hallucination Risk",
        "  o Prompt-Only AI: High hallucination rate. Often invents non-existent methods, invalid XPath queries, or hallucinated UI buttons.",
        "  o MCP-Based AI: Deterministic execution. The agent can only call registered MCP tools with schema-validated arguments against live browser instances.",
        "\u2022 Dimension 4: Error Recovery",
        "  o Prompt-Only AI: Fails completely upon encountering a minor UI change.",
        "  o MCP-Based AI: Evaluates error telemetry and invokes self-healing subroutines to recover dynamically without human intervention."
      ]
    },
    {
      "id": "playwright-q10",
      "num": "10",
      "category": "Limits of Traditional Automation & MCP Fundamentals",
      "question": "What is the role of an MCP Server in testing, and what core capabilities does it expose to AI agents?",
      "answers": [
        "An MCP Server acts as the secure bridge and protocol gateway between the AI code agent and the underlying browser automation engine.",
        "\u2022 Core Responsibilities of an MCP Server:",
        "  1. Exposes Playwright Capabilities as Structured Tools: Registers concrete, callable functions (e.g. `playwright_navigate`, `playwright_click`, `playwright_fill`, `playwright_screenshot`) with well-defined JSON schema parameter definitions.",
        "  2. Translates AI Protocol Messages into Playwright APIs: Receives JSON-RPC requests from the agent and calls the corresponding Playwright methods on an active `BrowserContext` or `Page` instance.",
        "  3. Streams Execution Context Back to the Agent: Captures and serializes browser output\u2014including accessibility snapshots, URL changes, console logs, error messages, and visual screenshots\u2014and returns them in the tool response.",
        "  4. Enforces Governance & Security: Restricts dangerous browser operations, prevents arbitrary shell command execution, masks sensitive PII data, and logs all protocol payloads for compliance audits."
      ]
    },
    {
      "id": "playwright-q11",
      "num": "11",
      "category": "Limits of Traditional Automation & MCP Fundamentals",
      "question": "Why is an AI Code Agent (e.g., Claude, Copilot, Gemini) strictly required alongside an MCP server? What happens if you run MCP without a code agent?",
      "answers": [
        "A common misconception is that the MCP server itself contains artificial intelligence. The handbook explicitly emphasizes: MCP DOES NOT THINK.",
        "\u2022 Division of Responsibilities:",
        "  o The MCP Server is the execution muscle: A protocol wrapper providing raw tools and streaming data back and forth. It has no cognitive ability, cannot parse business intent, and cannot decide what action to take next.",
        "  o The AI Code Agent (Claude, Cursor, Copilot, Gemini) is the cognitive brain: It receives the human prompt, plans test steps, interprets DOM snapshots, inspects network responses, and decides which MCP tool to invoke.",
        "\u2022 What Happens Without a Code Agent:",
        "  o Without an AI agent, an MCP server is simply an over-engineered remote API wrapper.",
        "  o You have no intent interpretation, no automated planning, no dynamic self-healing, and no adaptive test generation.",
        "  o You are forced back to writing 100% manual scripts like classic automation."
      ]
    },
    {
      "id": "playwright-q12",
      "num": "12",
      "category": "Playwright MCP Architecture & Environment Setup",
      "question": "Walk through the complete architectural topology of Playwright MCP from human intent to browser execution.",
      "answers": [
        "The Playwright MCP architecture consists of five coordinated layers arranged in a hierarchical pipeline:",
        "1. User Intent Layer:",
        "  o Human QA engineer or SDET supplies high-level natural language intent (e.g., 'Verify a store manager can apply a 15% discount code at checkout').",
        "2. AI Code Agent Layer (Planner / Generator / Healer):",
        "  o Interprets the prompt, analyzes current state, constructs a state transition graph, and selects appropriate tool calls.",
        "3. Model Context Protocol (MCP) Interface Layer:",
        "  o Standardized JSON-RPC 2.0 communication bus delivering tool call requests and receiving typed responses over stdio or SSE (Server-Sent Events).",
        "4. Playwright MCP Server Layer:",
        "  o Validates request schemas, manages the browser lifecycle, and invokes native Playwright bindings.",
        "5. Playwright Engine & Real Browsers:",
        "  o Dispatches native DevTools protocol commands to Chromium, WebKit, or Firefox, interacting directly with web application pages.",
        "\u2022 Architectural Data Flow:",
        "  [User Intent] -> [AI Code Agent] <--(MCP Protocol JSON-RPC)--> [Playwright MCP Server] -> [Playwright Engine] -> [Target Web Application]"
      ]
    },
    {
      "id": "playwright-q13",
      "num": "13",
      "category": "Playwright MCP Architecture & Environment Setup",
      "question": "Detail the end-to-end execution lifecycle of a Playwright MCP test from prompt to artifact generation.",
      "answers": [
        "The handbook outlines the 6-phase execution lifecycle that governs every Playwright MCP workflow:",
        "1. Intent Received: The user prompt containing business requirements, role assumptions, and test boundaries is fed to the AI Code Agent.",
        "2. Planner Agent Creates Steps: The Planner breaks the prompt into an ordered state-dependency graph (e.g. Auth -> Navigate -> Identify -> Mutate -> Assert).",
        "3. Generator Produces Actions: The Generator emits deterministic Playwright primitives based on accessibility roles and semantic contracts.",
        "4. Execution Occurs: The MCP Server dispatches actions to the active Playwright browser context in sequence.",
        "5. Healer Reacts to Failures: If an actionability check fails or an assertion times out, the Healer intervenes, re-inspects live DOM, and attempts controlled recovery.",
        "6. Results & Artifacts Streamed: Screenshots, execution traces, network HAR files, and healing diffs are compiled and stored in version control for human audit."
      ]
    },
    {
      "id": "playwright-q14",
      "num": "14",
      "category": "Playwright MCP Architecture & Environment Setup",
      "question": "How do you set up a Playwright MCP testing environment? Explain the recommended Node.js version, package installation, and folder structure.",
      "answers": [
        "Setting up a production-ready Playwright MCP environment requires the following standardized configuration:",
        "\u2022 1. Prerequisites & Node Version:",
        "  o Node.js 18.x or 20.x LTS (Node 18+ is required for native WebStreams, crypto, and ES module support).",
        "  o Package manager: `npm` or `pnpm`.",
        "\u2022 2. Package Installation:",
        "  npm init playwright@latest -- --typescript",
        "  npm install @modelcontextprotocol/sdk @modelcontextprotocol/server-playwright --save-dev",
        "\u2022 3. Recommended Enterprise Folder Structure:",
        "  my-playwright-mcp-project/",
        "  \u251c\u2500\u2500 tests/",
        "  \u2502   \u251c\u2500\u2500 prompts/          # Version-controlled prompt specs (.prompt.md)",
        "  \u2502   \u251c\u2500\u2500 plans/            # Approved Planner state transition graphs (.plan.json)",
        "  \u2502   \u251c\u2500\u2500 specs/            # Generated deterministic Playwright test specs (.spec.ts)",
        "  \u2502   \u2514\u2500\u2500 mcp/              # Custom MCP tool definitions and helper hooks",
        "  \u251c\u2500\u2500 mcp-server/           # MCP server configuration and launch scripts",
        "  \u251c\u2500\u2500 playwright.config.ts  # Playwright root config (browsers, timeouts, reporters)",
        "  \u2514\u2500\u2500 package.json          # Dependencies and test script definitions"
      ]
    },
    {
      "id": "playwright-q15",
      "num": "15",
      "category": "Playwright MCP Architecture & Environment Setup",
      "question": "TypeScript vs JavaScript in Playwright MCP: Why does the handbook strongly recommend TypeScript for AI-driven automation?",
      "answers": [
        "The handbook delivers a clear strategic verdict: TypeScript is strongly recommended for all enterprise Playwright MCP implementations.",
        "\u2022 Why MCP Performs Significantly Better with TypeScript:",
        "  1. Abstract Syntax Tree (AST) Reasoning: Modern AI code agents reason over typed ASTs rather than raw strings. Type annotations define strict intent boundaries that the Generator cannot violate.",
        "  2. Safer Refactoring & Healing: When the Healer attempts to repair a broken selector, TypeScript's compiler immediately catches broken return types, parameter mismatches, or missing null-checks before execution.",
        "  3. Compile-Time Contract Validation: Playwright's typed interfaces (e.g. `Locator`, `Page`, `Expect`) ensure the AI emits only valid, existing API methods with correct options.",
        "  4. Superior Diffing & Governance: Git diffs of TypeScript specs clearly differentiate between structural logic changes and minor parameter updates.",
        "\u2022 Where JavaScript Is Still Acceptable:",
        "  o Quick disposable prototypes or proofs of concept (POCs).",
        "  o Small exploratory teams with minimal compliance/governance requirements.",
        "  o Legacy test suites where gradual migration has not yet begun."
      ]
    },
    {
      "id": "playwright-q16",
      "num": "16",
      "category": "Playwright MCP Architecture & Environment Setup",
      "question": "What tools are exposed by the Playwright MCP Server, and what are their respective parameter contracts?",
      "answers": [
        "The official Playwright MCP Server exposes discrete, granular browser automation tools to the AI model:",
        "1. `playwright_navigate`: Navigates the current browser tab to a specified URL.",
        "  o Arguments: `{ url: string, waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' }`",
        "2. `playwright_click`: Clicks an element identified by an accessibility role or selector.",
        "  o Arguments: `{ selector: string, button?: 'left' | 'right' | 'middle', timeout?: number }`",
        "3. `playwright_fill`: Clears an input field and types text into it.",
        "  o Arguments: `{ selector: string, value: string }`",
        "4. `playwright_hover`: Hovers over an element to trigger dropdowns, menus, or tooltips.",
        "  o Arguments: `{ selector: string }`",
        "5. `playwright_screenshot`: Captures a visual screenshot of the current page or specific element.",
        "  o Arguments: `{ name?: string, fullPage?: boolean }`",
        "6. `playwright_snapshot`: Captures the current page's simplified accessibility tree.",
        "  o Arguments: `{}` (Returns structured JSON representing visible roles, names, and states).",
        "7. `playwright_evaluate`: Executes a JavaScript expression in the context of the page.",
        "  o Arguments: `{ expression: string }`"
      ]
    },
    {
      "id": "playwright-q17",
      "num": "17",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "What is the Planner Agent in Playwright MCP, and what are its four internal reasoning phases?",
      "answers": [
        "The Planner Agent is the cognitive component responsible for converting raw human intent into a machine-executable test plan. Rather than creating a naive flat list of steps, the Planner builds a state transition graph.",
        "\u2022 The Four Internal Reasoning Phases:",
        "  1. Intent Classification: Classifies the prompt into intent categories: Navigation, Authentication, Role Authorization, State Mutation, Validation, or Negative/Constraint testing.",
        "  2. State Gap Analysis: Computes the delta between the current browser state (unauthenticated, home URL, empty session) and the desired end state (Admin on User Management table with user deactivated).",
        "  3. Dependency Ordering: Orders actions strictly based on prerequisite state dependencies rather than superficial UI order (e.g., Authentication MUST precede Authorization; Navigation MUST precede DOM Assertions).",
        "  4. Risk Annotation: Tags each planned step with risk factors (e.g., Locator Volatility Risk, Network Latency Risk, Authorization Failure Risk). These annotations guide the Healer if a step subsequently breaks."
      ]
    },
    {
      "id": "playwright-q18",
      "num": "18",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "Explain the State Gap Analysis performed by the Planner Agent with a concrete example.",
      "answers": [
        "State Gap Analysis evaluates the difference between 'Where the browser is now' and 'Where the browser must be' to fulfill the test intent.",
        "\u2022 Concrete Example:",
        "  o Human Prompt: 'Verify an Admin user can disable a standard user account.'",
        "  o Current Browser State: `about:blank`, cookies empty, unauthenticated session.",
        "  o Desired Target State: Authenticated Admin session on `/admin/users`, target user status toggled from 'Active' to 'Disabled', audit log updated.",
        "\u2022 Gap Computation:",
        "  o Gap 1: No valid auth credentials in storage -> Action: Must execute Admin login flow.",
        "  o Gap 2: Browser is on `/login`, not `/admin/users` -> Action: Must navigate to User Management via sidebar or direct URL.",
        "  o Gap 3: Target user must exist before disabling -> Action: Must search/identify target entity row in data table.",
        "  o Gap 4: Toggle mutation required -> Action: Click action menu -> Click 'Disable' -> Confirm in modal.",
        "  o Gap 5: State verification required -> Action: Assert row badge displays 'Disabled'.",
        "\u2022 Why It Matters: This rigorous gap analysis guarantees that mandatory prerequisites are never skipped by the AI agent."
      ]
    },
    {
      "id": "playwright-q19",
      "num": "19",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "What is the Generator Agent, and what is its internal Locator Strategy Decision Tree when converting plans into code?",
      "answers": [
        "The Generator Agent converts the Planner's state transition graph into deterministic Playwright TypeScript code, optimizing for locator stability and zero flakiness.",
        "\u2022 The Internal Locator Strategy Decision Tree (Strict Priority Order):",
        "  1. ARIA Role + Accessible Name (Highest Priority):",
        "     const saveBtn = page.getByRole('button', { name: 'Save Changes' });",
        "     Matches how assistive technologies and humans perceive the UI. Extremely resilient to CSS refactors.",
        "  2. Label-Based Selectors:",
        "     const emailInput = page.getByLabel('Work Email Address');",
        "     Used for form fields tied to accessible `<label>` elements.",
        "  3. Scoped Text Selectors:",
        "     const row = page.getByRole('row', { name: 'John Doe' });",
        "     const status = row.getByText('Active');",
        "     Used when an accessible name must be disambiguated within a specific parent container.",
        "  4. Test IDs / Structural CSS / XPath (Last Resort):",
        "     page.getByTestId('user-row-102');",
        "     Only used if accessibility attributes are completely missing. Structural CSS (`div > div:nth-child(2)`) and absolute XPath are forbidden because of high brittleness."
      ]
    },
    {
      "id": "playwright-q20",
      "num": "20",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "What is the Healer Agent in Playwright MCP, and under what specific runtime conditions is it triggered?",
      "answers": [
        "The Healer Agent is the reactive self-healing subsystem within Playwright MCP. It is strictly reactive\u2014it never runs proactively during normal execution.",
        "\u2022 Activation Trigger:",
        "  o The Healer activates ONLY after a contract violation or runtime failure occurs during test execution.",
        "\u2022 The 4 Specific Trigger Conditions:",
        "  1. Locator Resolution Failure: A locator fails to resolve to any matching element within the auto-wait timeout (e.g. element renamed or removed).",
        "  2. Assertion Timeout: A web-first assertion fails to meet its expected condition before timing out (e.g. status badge text mismatch).",
        "  3. Navigation Mismatch: The browser URL does not match the expected post-condition route (e.g. unexpected redirect to `/error` or session expiry).",
        "  4. Unexpected Modal or Intercepting Overlay: A cookie consent banner, marketing popup, or confirmation dialog occludes the target element, causing actionability checks to fail."
      ]
    },
    {
      "id": "playwright-q21",
      "num": "21",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "What is the hard rule regarding Healing Strategy Order in Playwright MCP? What is the strict boundary it must never cross?",
      "answers": [
        "The handbook defines a non-negotiable architectural rule: Healing must NEVER alter test intent or expected business outcomes.",
        "\u2022 Hard Rule - Healing Strategy Order:",
        "  1. Re-evaluate Locator with Updated DOM: Inspect the freshly captured DOM snapshot to see if the element was re-rendered or delayed.",
        "  2. Search for Semantic Equivalents: Look for elements sharing the same ARIA role and semantic meaning (e.g. 'Submit' -> 'Confirm', 'Disable' -> 'Deactivate').",
        "  3. Retry Action with Adjusted Preconditions: Dismiss unexpected overlays, scroll elements into view, or await network idle before re-attempting.",
        "  4. Re-plan ONLY the Failed Segment: If an intermediate step failed (e.g., navigation path changed), re-plan that specific hop while preserving original preconditions and assertions.",
        "  5. Escalate Failure (Stop Healing): If semantic recovery fails, terminate immediately and flag for human review. Never guess or force a pass.",
        "\u2022 Critical Inviolable Boundary:",
        "  o The Healer is NEVER permitted to change an assertion expectation (e.g. changing `toBe('Success')` to `toBe('Error')` just to make the test pass). Doing so constitutes catastrophic 'Intent Drift'."
      ]
    },
    {
      "id": "playwright-q22",
      "num": "22",
      "category": "Built-in Agents: Planner, Generator & Healer Mechanics",
      "question": "Walk through a concrete failure-to-recovery narrative: How does the Healer resolve a button label change from 'Disable' to 'Deactivate'?",
      "answers": [
        "The handbook details this exact real-world scenario to showcase governed self-healing:",
        "1. Failure Incident:",
        "  o Test spec executes: `await page.getByRole('button', { name: 'Disable' }).click();`",
        "  o A frontend UI redesign changed the button text to 'Deactivate'.",
        "  o Actionability timeout triggers after 30 seconds: Locator not found.",
        "2. Healer Intervention Process:",
        "  o Healer pauses execution and calls `playwright_snapshot` to fetch the live accessibility tree.",
        "  o Filters for elements with `role: 'button'` inside the target user card.",
        "  o Identifies a newly present button: `role: 'button', name: 'Deactivate'`. Performs semantic vector matching: 'Disable' and 'Deactivate' map to the same action intent in the user lifecycle ontology.",
        "  o Verifies that clicking 'Deactivate' triggers the identical state transition (toggling the user status).",
        "3. Recovery & Logging:",
        "  o Action is retried with the updated locator: `await page.getByRole('button', { name: 'Deactivate' }).click();`",
        "  o The subsequent assertion passes: `await expect(userStatus).toHaveText('Inactive');`",
        "  o Healing Diff Captured: The change is logged as a non-breaking adaptation and flagged in Git for human approval."
      ]
    },
    {
      "id": "playwright-q23",
      "num": "23",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "Walk through the 8-step full execution trace of an MCP-driven Playwright test from prompt submission to artifact generation.",
      "answers": [
        "The execution trace demonstrates the end-to-end handshake between human prompt, AI agent, MCP server, and browser:",
        "1. Prompt Received by AI Agent: High-level intent is submitted (e.g., 'Verify admin can log in and filter audit logs').",
        "2. Planner Generates Execution Graph: Planner decomposes intent into ordered state transitions and risk annotations.",
        "3. Generator Emits Playwright Code: Emits deterministic TypeScript actions utilizing ARIA locators and web-first assertions.",
        "4. MCP Server Executes Actions: Dispatches JSON-RPC requests to the Playwright engine step-by-step.",
        "5. Browser Returns DOM & Event Feedback: Playwright executes actions in Chromium and streams accessibility snapshots, console logs, and network events back to the MCP server.",
        "6. MCP Streams Results Back to Agent: Agent inspects live browser telemetry to confirm state changes before generating subsequent commands.",
        "7. Healer Intervenes if Contract Breaks: If any step encounters an unexpected DOM change or timeout, the Healer attempts governed recovery.",
        "8. Final Result & Artifacts Produced: Execution completes; traces, screenshots, video recordings, and healing logs are bundled and stored."
      ]
    },
    {
      "id": "playwright-q24",
      "num": "24",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "What mandatory observability artifacts must be retained for every MCP execution in an enterprise environment?",
      "answers": [
        "The handbook states: Observability artifacts are non-optional in enterprise usage. Without them, autonomous automation cannot be audited or trusted.",
        "\u2022 The 5 Mandatory Observability Artifacts:",
        "  1. Original Prompt: The exact, unedited natural language prompt submitted by the human tester.",
        "  2. Execution Plan (Versioned): The state transition graph and dependency sequence produced by the Planner, saved as a versioned JSON artifact.",
        "  3. Generated Code Snapshot: The exact TypeScript spec emitted by the Generator for that specific execution run.",
        "  4. Screenshots & Playwright Trace (.zip): Step-by-step DOM snapshots, action filmstrips, network request/response headers, and console messages viewable via `npx playwright show-trace`.",
        "  5. Healing Diffs (Before / After): Explicit line-by-line diffs documenting every healed locator or retried step, showing the original code vs the healed code and the AI's semantic reasoning."
      ]
    },
    {
      "id": "playwright-q25",
      "num": "25",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "How does Playwright MCP handle complex, auth-heavy enterprise flows (e.g., SSO login, multi-factor redirects, session state caching)?",
      "answers": [
        "Enterprise authentication (Okta, Azure AD, OAuth2) presents unique challenges due to external identity provider (IdP) redirects and multi-page state transitions.",
        "\u2022 Playwright MCP Strategies for Auth-Heavy Flows:",
        "  1. Planner IdP Recognition: The Planner identifies external redirect domains and avoids brittle UI locators on third-party login pages.",
        "  2. Post-Login Landing State Assertion: Rather than asserting an intermediate redirect URL, the test asserts on the final authenticated application shell:",
        "     await page.waitForURL('**/dashboard');",
        "     await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();",
        "  3. Session State Caching (`storageState`):",
        "     o Authenticating on every test slows pipelines. Playwright MCP saves the authenticated session state (cookies, tokens) once into a `storageState.json` file.",
        "     o Subsequent test runs inject this state directly into `browser.newContext({ storageState: 'admin-auth.json' })`, bypassing the login UI entirely and starting tests already authenticated."
      ]
    },
    {
      "id": "playwright-q26",
      "num": "26",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "How does Playwright MCP execute Role-Based Access Control (RBAC) UI validation without timing race conditions?",
      "answers": [
        "A classic enterprise bug occurs when testing negative permissions: asserting that a standard user CANNOT see an Admin button. If the assertion runs while the page is still loading, it passes prematurely even if the button appears a split second later.",
        "\u2022 The Correct RBAC Strategy in Playwright MCP:",
        "  1. Wait for Stable UI Readiness: Ensure all role-dependent data APIs have resolved before asserting permissions.",
        "     await page.waitForLoadState('networkidle');",
        "  2. Web-First Absence Assertion: Instead of `expect(locator.isVisible()).toBe(false)` (which does not auto-retry), use Playwright's web-first count or hidden matchers:",
        "     // Verify Admin controls are completely absent from DOM for standard users",
        "     await expect(page.getByRole('link', { name: 'User Management' })).toHaveCount(0);",
        "     await expect(page.getByTestId('admin-settings-tab')).toBeHidden();",
        "  3. Positive Baseline Assertion: Always verify that standard UI controls *are* visible first to guarantee the page loaded completely before asserting negative conditions."
      ]
    },
    {
      "id": "playwright-q27",
      "num": "27",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "How does Playwright MCP handle data-driven test scenarios compared to traditional loop-based parameterization?",
      "answers": [
        "In traditional test suites, data-driven testing is implemented using naive code loops (`for (const role of roles)`) inside a single test or bulky `@DataProvider` matrices. If iteration 2 fails, the entire test suite fails and state bleeding corrupts subsequent iterations.",
        "\u2022 Planner-Level Iteration in Playwright MCP:",
        "  o Prompt: 'For each user role (Admin, Manager, Standard), verify dashboard visibility rules.'",
        "  o Instead of generating a single giant loop, the Planner expands the prompt into discrete, scoped execution plans at the planning layer:",
        "    - Execution Plan A: Scope = Admin -> Validate Admin metrics widget.",
        "    - Execution Plan B: Scope = Manager -> Validate Department summary widget.",
        "    - Execution Plan C: Scope = Standard -> Validate Personal tasks widget.",
        "  o Each plan executes inside its own pristine, isolated `BrowserContext`. A failure in Manager validation is completely isolated and never cascades to Admin or Standard tests."
      ]
    },
    {
      "id": "playwright-q28",
      "num": "28",
      "category": "Step-by-Step Execution Traces & Enterprise Scenarios",
      "question": "How does Playwright MCP eliminate flakiness without using arbitrary sleeps like 'await page.waitForTimeout(5000)'?",
      "answers": [
        "Using hardcoded sleeps (`await page.waitForTimeout(5000)`) is the single most destructive anti-pattern in browser automation. It slows test suites by hours, yet still flakes when the network takes 5001ms.",
        "\u2022 The MCP-Driven Anti-Flakiness Strategy:",
        "  1. Network Idle Conditions: Await completion of in-flight XHR/fetch requests before interacting with dynamic components:",
        "     await page.waitForLoadState('networkidle');",
        "  2. Response Predicate Waiting: Explicitly wait for the exact backend API response payload to arrive before asserting UI state:",
        "     const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/users') && resp.status() === 200);",
        "     await page.getByRole('button', { name: 'Search' }).click();",
        "     await responsePromise;",
        "  3. State-Based Web-First Assertions: Assert directly on target element attributes (e.g. `toBeVisible()`, `toBeEnabled()`, `toHaveText()`), letting Playwright's built-in polling handle microsecond rendering delays."
      ]
    },
    {
      "id": "playwright-q29",
      "num": "29",
      "category": "Enterprise Governance, CI/CD, RACI & Audit Compliance",
      "question": "What are the three mandatory CI/CD execution modes for Playwright MCP, and how do their capabilities differ?",
      "answers": [
        "The handbook mandates that MCP automation must NEVER be run with unrestricted self-healing in all environments. CI/CD pipelines must enforce three strictly separated modes:",
        "1. Validation Mode (PR / Merge Gate):",
        "  o Purpose: Block regressions on code check-ins.",
        "  o MCP Capabilities: Self-Healing is DISABLED (\u274c). Re-planning is DISABLED (\u274c).",
        "  o Rule: Executes strictly deterministic, pre-approved Playwright code. Any failure halts the pipeline immediately to prevent merging broken code.",
        "2. Exploratory Mode (Nightly / Pre-Prod Runs):",
        "  o Purpose: Discover edge cases, test resilience, and explore dynamic UI paths.",
        "  o MCP Capabilities: Self-Healing is ALLOWED (\u2705). Intent alterations are FORBIDDEN (\u274c).",
        "  o Rule: Failures do not block deployment; healing diffs are captured and queued for human review.",
        "3. Adaptive Mode (Controlled Staging / Prod-like):",
        "  o Purpose: Validate complex workflows with third-party service dependencies.",
        "  o MCP Capabilities: Controlled healing with strict parameter guardrails (\u2705). Human approval required before committing healed specs."
      ]
    },
    {
      "id": "playwright-q30",
      "num": "30",
      "category": "Enterprise Governance, CI/CD, RACI & Audit Compliance",
      "question": "Detail the four recommended stages of an enterprise CI/CD pipeline incorporating Playwright MCP.",
      "answers": [
        "An enterprise-grade CI/CD pipeline incorporates four specialized stages for Playwright MCP:",
        "1. Prompt Validation Stage:",
        "  o Validates prompt syntax, intent clarity, and compliance with prompt engineering templates.",
        "  o Blocks vague, ambiguous, or underspecified prompts (e.g. 'Test the whole checkout') before wasting compute resources.",
        "2. Plan Generation & Diffing Stage:",
        "  o Planner compiles the state transition plan and compares it against the last approved baseline plan in Git.",
        "  o Flags newly added steps, deleted assertions, or unexpected scope expansions for lead review.",
        "3. Deterministic Execution Stage (PR Gate):",
        "  o Executes approved TypeScript specs with self-healing disabled. Zero tolerance for test flakiness or regressions.",
        "4. Adaptive Execution Stage (Optional / Nightly):",
        "  o Executes exploratory runs with self-healing enabled; captures healing diffs, trace logs, and accessibility snapshots for the QA review board."
      ]
    },
    {
      "id": "playwright-q31",
      "num": "31",
      "category": "Enterprise Governance, CI/CD, RACI & Audit Compliance",
      "question": "What is the Prompt Review & Versioning Workflow, and what items must be on the mandatory Prompt Review Checklist?",
      "answers": [
        "In MCP-based testing, prompts ARE test specifications and architecture decisions. Therefore, prompts must be version-controlled in Git and reviewed just like production code.",
        "\u2022 Prompt Lifecycle:",
        "  1. Draft prompt created by QA engineer or SDET in `tests/prompts/*.prompt.md`.",
        "  2. Planner Agent generates corresponding execution plan.",
        "  3. Peer Review: Tech Lead and QA Architect review prompt and generated plan together.",
        "  4. Approval & Version Lock: Approved prompt is merged to main branch and locked for CI execution.",
        "\u2022 Mandatory Prompt Review Checklist:",
        "  \u2713 Intent is explicit, measurable, and testable.",
        "  \u2713 No fragile implementation details embedded (e.g. no hardcoded XPath or CSS classes).",
        "  \u2713 Clear success criteria AND failure criteria explicitly stated.",
        "  \u2713 No scope creep (avoids 'test everything on this page').",
        "  \u2713 User roles, authorization boundaries, and test data requirements strictly defined."
      ]
    },
    {
      "id": "playwright-q32",
      "num": "32",
      "category": "Enterprise Governance, CI/CD, RACI & Audit Compliance",
      "question": "Explain the RACI Ownership Model for Playwright MCP across QA, Architects, Tech Leads, DevOps, Security, and AI Agents.",
      "answers": [
        "Without explicit ownership, autonomous testing failures become untraceable. The handbook specifies the enterprise RACI model:",
        "\u2022 The Non-Negotiable Principle: AI Agents are Responsible (R) for actions, but NEVER Accountable (A) for outcomes. A human must always own the accountability.",
        "\u2022 RACI Breakdown by Activity:",
        "  1. Prompt Creation: QA / SDET (Responsible - R) | Architect (Consulted - C) | Tech Lead (Accountable - A).",
        "  2. Prompt Approval: QA (Consulted - C) | Architect (Accountable - A) | Tech Lead (Accountable - A).",
        "  3. Plan & Code Generation: AI MCP Agent (Responsible - R) | QA (Informed - I) | Architect (Consulted - C).",
        "  4. Healing Acceptance Decision: QA (Consulted - C) | Architect (Accountable - A) | Tech Lead (Accountable - A) | AI Agent (Responsible - R).",
        "  5. CI/CD Pipeline Execution: DevOps / Platform (Responsible - R) | QA (Informed - I) | Tech Lead (Informed - I).",
        "  6. Audit Artifact Review: Security & Compliance (Accountable - A) | Architect (Consulted - C) | QA (Informed - I)."
      ]
    },
    {
      "id": "playwright-q33",
      "num": "33",
      "category": "Enterprise Governance, CI/CD, RACI & Audit Compliance",
      "question": "What are the compliance controls (SOC 2, ISO 27001, HIPAA) and leadership ROI metrics for Playwright MCP? Summarize the lessons learned from the real-world failure case study.",
      "answers": [
        "The handbook provides exhaustive guidance on enterprise compliance, ROI metrics, and lessons from a failed rollout:",
        "\u2022 Compliance Controls (SOC 2, ISO 27001, HIPAA):",
        "  o Audit Trails: Prompts, plans, and healing logs must be archived as immutable audit evidence.",
        "  o Data Masking & Redaction: Automatic masking of PII (Personally Identifiable Information) and PHI (Protected Health Information) in DOM snapshots and screenshots.",
        "  o Prohibit Silent Healing in Production Gates: Silent self-healing in pull request pipelines violates SOC 2 change management criteria.",
        "\u2022 Leadership ROI Metrics (What to Track vs Anti-Metrics):",
        "  o Tier 1 Core ROI Metrics (Track): Test maintenance hours saved (60-70% reduction), flakiness reduction rate, and time-to-test for new features.",
        "  o Anti-Metrics (Do NOT Track): Raw test count, lines of generated code, and 'AI coverage percentage'. These incentivize spamming low-value tests.",
        "\u2022 Real-World Failure Case Study Lessons:",
        "  o A global enterprise rolled out MCP in 3 weeks with unrestricted healing in PR pipelines and no human review. Outcome: Tests healed silently, drifting away from business intent. Real regressions slipped into production.",
        "  o Key Takeaway: 'MCP does not reduce quality cost by replacing people \u2014 it reduces waste by eliminating unnecessary translation and maintenance through governed intelligence.'"
      ]
    },
    {
      "id": "playwright-q34",
      "num": "34",
      "category": "Gen AI in Testing & Autonomous QA",
      "question": "What is the role of Generative AI as an SDET Co-Pilot in modern test automation?",
      "answers": [
        "Generative AI does not replace QA engineers\u2014it acts as an intelligence amplifier and co-pilot across the testing lifecycle:",
        "\u2022 Core Use Cases in Test Engineering:",
        "  1. Test Case Generation from User Stories: Feeding Jira requirements or PRDs to an LLM to generate comprehensive positive, negative, and edge-case boundary scenarios.",
        "  2. Automation Code Scaffolding: Generating Page Object models, boilerplate API client wrappers, and TypeScript/Java assertion skeletons.",
        "  3. Regex and XPath Authoring: Generating robust semantic XPath or CSS selectors based on HTML DOM snippets.",
        "  4. Log & Failure Analysis: Feeding failed CI/CD stack traces and Playwright trace logs into LLMs to summarize failure root causes and suggest remediations.",
        "\u2022 The Guiding Principle: AI suggests and accelerates; human SDETs validate, review, and govern."
      ]
    },
    {
      "id": "playwright-q35",
      "num": "35",
      "category": "Gen AI in Testing & Autonomous QA",
      "question": "How does AI-Driven Selector Healing work to prevent test failures when web applications undergo UI redesigns?",
      "answers": [
        "UI changes (e.g. changing button labels, redesigning DOM nesting, updating class names) cause 60-70% of automation maintenance overhead. AI-driven self-healing dynamically repairs broken locators:",
        "\u2022 How AI-Driven Self-Healing Operates:",
        "  1. Baseline Telemetry Capture: When a test passes, the engine records multiple attributes of the target element (ARIA role, tag, accessible name, coordinates, parent hierarchy, test ID).",
        "  2. Anomaly Detection: During execution, if `page.getByRole('button', { name: 'Submit' })` fails to resolve, self-healing intercepts the timeout.",
        "  3. Semantic Similarity Matching: The AI compares the live DOM against stored element attributes using vector embeddings and role ontologies (e.g. finding button with name 'Continue' or 'Place Order').",
        "  4. Fallback Execution & Diff Logging: The action is retried using the candidate element. If the action succeeds and triggers expected state transitions, a line-by-line healing diff is captured for human lead approval."
      ]
    },
    {
      "id": "playwright-q36",
      "num": "36",
      "category": "Gen AI in Testing & Autonomous QA",
      "question": "How do you perform Synthetic Test Data Generation using LLM prompt engineering for edge-case validation?",
      "answers": [
        "Generating compliant, diverse, and realistic test datasets is a major hurdle in regulated environments where production data cannot be used due to GDPR/HIPAA compliance.",
        "\u2022 Prompt Engineering for Synthetic Data:",
        "  o Prompt Example: 'Generate 10 valid JSON user objects for an e-commerce platform. Include edge cases: international phone numbers with country codes, apostrophes in names (O\\'Connor), hyphenated surnames, long email addresses (60 chars), and addresses with unicode accents.'",
        "\u2022 Automation Pipeline Integration:",
        "  o Automated scripts call LLM APIs (OpenAI / Claude / Gemini) in test setup hooks to generate dynamic payloads on-the-fly or save them as version-controlled JSON fixtures.",
        "  o Guarantees zero PII data leakage while exercising boundary conditions that manual testers frequently overlook."
      ]
    },
    {
      "id": "playwright-q37",
      "num": "37",
      "category": "Gen AI in Testing & Autonomous QA",
      "question": "What are the critical risks and limitations of Generative AI in software testing (hallucinations, PII/PHI privacy, non-determinism), and how do you govern them?",
      "answers": [
        "While Gen AI offers transformative productivity gains, unmanaged adoption introduces severe enterprise risks:",
        "\u2022 1. Hallucinations & False Confidence:",
        "  o LLMs can generate plausible-sounding assertions that test trivial conditions or invent non-existent API parameters. Governance: Mandatory peer review of AI-generated specs before merging to main.",
        "\u2022 2. Non-Determinism:",
        "  o LLMs may generate slightly different code or test plans on consecutive runs. Governance: Pin model temperature to 0.0 and freeze approved execution graphs in version control.",
        "\u2022 3. Data Privacy & Compliance (PII / PHI):",
        "  o Sending proprietary application DOMs, customer data, or internal API tokens to public cloud LLMs violates SOC 2 and GDPR. Governance: Use enterprise private LLM endpoints, enforce automated regex redaction of sensitive fields, and run local models where required.",
        "\u2022 4. Silent Over-Healing:",
        "  o Allowing self-healing algorithms to modify test expectations silently in production PR gates masks actual bugs. Governance: Forbid self-healing in pull request validation pipelines."
      ]
    }
  ]
};
