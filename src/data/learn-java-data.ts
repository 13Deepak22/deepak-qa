// src/data/learn-java-data.ts
// Exhaustive Java curriculum aligned 1:1 with GeeksforGeeks (https://www.geeksforgeeks.org/java/)
import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const JAVA_CATEGORIES: DocCategory[] = [
  {
    "title": "Basics",
    "defaultOpen": true,
    "items": [
      {
        "id": "java-getting-started",
        "text": "Java Setup & Architecture (JDK, JRE, JVM)"
      },
      {
        "id": "java-io-syntax",
        "text": "Basic Input & Output (Scanner, PrintStream)"
      },
      {
        "id": "java-keywords-types",
        "text": "Identifiers, Keywords & Data Types"
      },
      {
        "id": "java-wrapper-classes",
        "text": "Wrapper Classes & Autoboxing"
      },
      {
        "id": "java-operators-expressions",
        "text": "Operators & Expressions"
      },
      {
        "id": "java-decision-making",
        "text": "Decision Making (If-Else & Modern Switch)"
      },
      {
        "id": "java-loops-jump",
        "text": "Loops & Jump Statements (break, continue)"
      }
    ]
  },
  {
    "title": "Methods",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-methods-basics",
        "text": "Methods in Java: Syntax & Invocation"
      },
      {
        "id": "java-static-instance-methods",
        "text": "Static Methods vs Instance Methods"
      },
      {
        "id": "java-access-modifiers",
        "text": "Access Modifiers (public, private, protected)"
      },
      {
        "id": "java-varargs-cmdline",
        "text": "Varargs & Command Line Arguments"
      }
    ]
  },
  {
    "title": "Arrays",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-arrays-fundamentals",
        "text": "1D Arrays: Declaration & Memory Layout"
      },
      {
        "id": "java-multidimensional-arrays",
        "text": "Multi-Dimensional & Jagged Arrays"
      },
      {
        "id": "java-arrays-class-methods",
        "text": "Arrays Class & Final Arrays"
      }
    ]
  },
  {
    "title": "Strings",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-strings-fundamentals",
        "text": "Strings & String Constant Pool (SCP)"
      },
      {
        "id": "java-string-equals-vs-double-equal",
        "text": "Comparison: .equals() vs =="
      },
      {
        "id": "java-string-methods-complete",
        "text": "Core String Methods Reference"
      },
      {
        "id": "java-stringbuilder-stringbuffer",
        "text": "StringBuilder vs StringBuffer vs String"
      }
    ]
  },
  {
    "title": "OOP Concepts",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-oops-fundamentals",
        "text": "Classes, Objects & Constructors"
      },
      {
        "id": "java-this-super-keywords",
        "text": "this & super Keywords"
      },
      {
        "id": "java-oops-four-pillars",
        "text": "4 OOP Pillars (Inheritance, Polymorphism...)"
      },
      {
        "id": "java-object-class-packages",
        "text": "Object Class & Package Management"
      }
    ]
  },
  {
    "title": "Interfaces",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-interfaces-basics",
        "text": "Interfaces in Java & Multiple Inheritance"
      },
      {
        "id": "java-class-vs-interface",
        "text": "Class vs Interface Comparison"
      },
      {
        "id": "java-special-interfaces",
        "text": "Functional, Nested & Marker Interfaces"
      }
    ]
  },
  {
    "title": "Exception Handling",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-exception-hierarchy",
        "text": "Exception Hierarchy & Try-Catch Blocks"
      },
      {
        "id": "java-throw-throws-custom",
        "text": "throw, throws & Custom Exceptions"
      },
      {
        "id": "java-final-finally-finalize",
        "text": "final vs finally vs finalize"
      },
      {
        "id": "java-advanced-exceptions",
        "text": "Chained Exceptions & Overriding Rules"
      }
    ]
  },
  {
    "title": "Regex",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-regex-fundamentals",
        "text": "Regex Introduction: Pattern & Matcher"
      },
      {
        "id": "java-regex-character-classes",
        "text": "Character Classes & Quantifiers"
      }
    ]
  },
  {
    "title": "Memory Allocation",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-memory-management",
        "text": "Stack vs Heap Memory Architecture"
      },
      {
        "id": "java-garbage-collection",
        "text": "Garbage Collection & JVM Collectors"
      },
      {
        "id": "java-memory-leaks",
        "text": "Memory Leaks & OutOfMemoryError (OOM)"
      }
    ]
  },
  {
    "title": "Generics",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-generics-classes-methods",
        "text": "Generic Classes & Methods"
      },
      {
        "id": "java-wildcards-bounded-types",
        "text": "Wildcards (<? extends T>, <? super T>)"
      },
      {
        "id": "java-type-erasure",
        "text": "Type Erasure & Generic Restrictions"
      }
    ]
  },
  {
    "title": "Collections",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-collections-framework",
        "text": "Collections Hierarchy Overview"
      },
      {
        "id": "java-list-interface",
        "text": "List Interface (ArrayList vs LinkedList)"
      },
      {
        "id": "java-set-interface",
        "text": "Set Interface (HashSet, TreeSet)"
      },
      {
        "id": "java-queue-deque-interface",
        "text": "Queue & Deque (PriorityQueue, ArrayDeque)"
      },
      {
        "id": "java-map-interface",
        "text": "Map Interface (HashMap, TreeMap)"
      },
      {
        "id": "java-iterators-comparators",
        "text": "Iterators, Comparable & Comparator"
      }
    ]
  },
  {
    "title": "Java 8+ Features",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-lambda-expressions",
        "text": "Lambda Expressions & Functional Syntax"
      },
      {
        "id": "java-functional-interfaces-builtins",
        "text": "Built-in Functional Interfaces (Predicate...)"
      },
      {
        "id": "java-stream-api-complete",
        "text": "Stream API (Filter, Map, FlatMap, Reduce)"
      },
      {
        "id": "java-optional-collectors",
        "text": "Optional Class & Stream Collectors"
      }
    ]
  },
  {
    "title": "Date and Time API",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-datetime-api",
        "text": "Date & Time API (LocalDate, LocalTime)"
      },
      {
        "id": "java-duration-period-formatting",
        "text": "Duration, Period & DateTimeFormatter"
      }
    ]
  },
  {
    "title": "Multithreading and Synchronization",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-multithreading-basics",
        "text": "Thread Creation & Lifecycle (Thread vs Runnable)"
      },
      {
        "id": "java-synchronization-locks",
        "text": "Synchronization, volatile & ReentrantLock"
      },
      {
        "id": "java-deadlock-prevention",
        "text": "Deadlock Detection & Prevention"
      },
      {
        "id": "java-thread-pools-executors",
        "text": "Thread Pools, ExecutorService & ThreadLocal"
      }
    ]
  },
  {
    "title": "File Handling",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-io-file-handling",
        "text": "File Handling & Java NIO (Paths & Files)"
      },
      {
        "id": "java-buffered-streams",
        "text": "BufferedReader, BufferedWriter & Streams"
      }
    ]
  },
  {
    "title": "Networking",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-networking-sockets",
        "text": "Socket Programming (Client & ServerSocket)"
      },
      {
        "id": "java-http-url-connections",
        "text": "URL Class, HttpURLConnection & HTTP Client"
      }
    ]
  },
  {
    "title": "Java Database Connectivity(JDBC)",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-jdbc-architecture",
        "text": "JDBC Architecture & Drivers"
      },
      {
        "id": "java-jdbc-statements-results",
        "text": "PreparedStatement, Queries & ResultSet"
      },
      {
        "id": "java-jdbc-transactions-pooling",
        "text": "Transactions, Savepoints & HikariCP"
      }
    ]
  },
  {
    "title": "Quiz and Coding Practice",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-coding-practice-problems",
        "text": "Top Coding Practice Problems"
      },
      {
        "id": "java-quizzes-drills",
        "text": "Topic-wise Quizzes & Code Output Drills"
      }
    ]
  },
  {
    "title": "Interview Questions",
    "defaultOpen": false,
    "items": [
      {
        "id": "java-core-interview-questions",
        "text": "Top 50 Core Java Interview Questions"
      },
      {
        "id": "java-advanced-automation-interview",
        "text": "Advanced Java & Automation Interview Questions"
      }
    ]
  }
];

export const JAVA_DOCS: Record<string, DetailedDoc> = {
  "java-getting-started": {
    "id": "java-getting-started",
    "title": "Java Getting Started: Architecture & Your First Program",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/java/java/",
    "description": "Start Java from absolute zero: language history, core design principles, JDK vs JRE vs JVM architecture, IDE configuration, and line-by-line anatomy of your first program.",
    "sections": [
      {
        "id": "what-is-java",
        "heading": "What is Java & Why Learn It?",
        "paragraphs": [
          "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Developed by James Gosling at Sun Microsystems in 1995 (acquired by Oracle in 2010), Java's defining principle is 'Write Once, Run Anywhere' (WORA).",
          "In modern software engineering and QA automation, Java is the backbone of industry-standard test automation frameworks including Selenium WebDriver, Appium (mobile testing), RestAssured (REST API automation), and Apache JMeter (performance engineering)."
        ],
        "table": {
          "headers": [
            "Java Feature",
            "Definition",
            "Benefit in Test Automation"
          ],
          "rows": [
            [
              "Platform Independent",
              "Compiles to bytecode (.class) executable on any OS with a JVM.",
              "Run the identical test suite across Windows developer machines, Linux CI/CD Docker containers, and macOS nodes."
            ],
            [
              "Object-Oriented",
              "Organizes code into reusable Classes, Objects, and Inheritance hierarchies.",
              "Foundation of the Page Object Model (POM), eliminating code duplication."
            ],
            [
              "Statically Typed",
              "Variable types checked strictly at compile-time before execution.",
              "Catches typos in element locators, invalid payload models, and missing parameters before tests launch."
            ],
            [
              "Robust Memory",
              "Automatic Garbage Collection and strong memory management.",
              "Prevents memory leaks in large test suites running thousands of scenarios overnight."
            ],
            [
              "Multithreaded",
              "Built-in support for concurrent thread execution.",
              "Powers parallel test execution across multiple browser instances simultaneously."
            ]
          ]
        }
      },
      {
        "id": "jdk-jre-jvm",
        "heading": "JVM, JRE, and JDK Architecture Explained",
        "paragraphs": [
          "Understanding the relationship between the JDK, JRE, and JVM is fundamental:"
        ],
        "codeBlocks": [
          {
            "title": "Java Platform Architecture",
            "language": "bash",
            "code": "┌─────────────────────────────────────────────────────────────┐\n│ JDK (Java Development Kit)                                  │\n│  - javac (Java Compiler)                                    │\n│  - jdb (Debugger), javadoc, jar packager                    │\n│ ┌─────────────────────────────────────────────────────────┐ │\n│ │ JRE (Java Runtime Environment)                          │ │\n│ │  - Standard Class Libraries (rt.jar, java.base)         │ │\n│ │ ┌─────────────────────────────────────────────────────┐ │ │\n│ │ │ JVM (Java Virtual Machine)                          │ │ │\n│ │ │  - ClassLoader Subsystem                            │ │ │\n│ │ │  - Memory Areas (Heap, Stack, Metaspace)            │ │ │\n│ │ │  - Execution Engine (JIT Compiler, Interpreter, GC) │ │ │\n│ │ └─────────────────────────────────────────────────────┘ │ │\n│ └─────────────────────────────────────────────────────────┘ │\n└─────────────────────────────────────────────────────────────┘"
          }
        ]
      },
      {
        "id": "first-java-program",
        "heading": "Line-by-Line Anatomy of Your First Java Program",
        "paragraphs": [
          "Every Java program consists of at least one class definition and an entry point method named main:"
        ],
        "codeBlocks": [
          {
            "title": "HelloWorld.java",
            "language": "java",
            "code": "public class HelloWorld {\n    // The entry point where the JVM begins execution\n    public static void main(String[] args) {\n        // System.out represents standard console output stream\n        System.out.println(\"Hello, DeepakQA! Starting Java from zero.\");\n    }\n}"
          }
        ],
        "table": {
          "headers": [
            "Keyword / Component",
            "Role & Technical Explanation"
          ],
          "rows": [
            [
              "public (class)",
              "Access modifier making the class visible to the JVM and external packages."
            ],
            [
              "class HelloWorld",
              "Defines the class named 'HelloWorld'. File name must match: HelloWorld.java."
            ],
            [
              "public (method)",
              "Allows the JVM runtime engine to invoke main() from outside the class."
            ],
            [
              "static",
              "Allows the JVM to call main() directly without instantiating an object of HelloWorld first."
            ],
            [
              "void",
              "Specifies that main() does not return any value back to the OS."
            ],
            [
              "main",
              "The mandatory identifier recognized by JVM as the initial startup hook of any standalone application."
            ],
            [
              "String[] args",
              "Array of String command-line arguments (e.g. java HelloWorld chrome staging)."
            ],
            [
              "System.out.println()",
              "System is a built-in class, out is PrintStream, println prints text with newline."
            ]
          ]
        }
      }
    ]
  },
  "java-io-syntax": {
    "id": "java-io-syntax",
    "title": "Basic Input & Output in Java (Scanner, PrintStream)",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/java-basic-input-and-output/",
    "description": "Master console input and output in Java using Scanner, BufferedReader, PrintStream formatting (printf), and standard stream redirection.",
    "sections": [
      {
        "id": "standard-output",
        "heading": "Standard Output: print vs println vs printf",
        "paragraphs": [
          "Java provides three primary console output methods on System.out:"
        ],
        "codeBlocks": [
          {
            "title": "OutputDemo.java",
            "language": "java",
            "code": "public class OutputDemo {\n    public static void main(String[] args) {\n        // print: Outputs text without newline\n        System.out.print(\"Running Test: \");\n        System.out.print(\"LoginVerification\\n\");\n\n        // println: Outputs text with trailing newline\n        System.out.println(\"Status: PASSED\");\n\n        // printf: Formatted string interpolation\n        String browser = \"Chrome\";\n        int durationMs = 1420;\n        double passRate = 98.75;\n        System.out.printf(\"Browser: %s | Duration: %d ms | Pass Rate: %.2f%%%n\", browser, durationMs, passRate);\n    }\n}"
          }
        ]
      },
      {
        "id": "scanner-input",
        "heading": "Console Input with java.util.Scanner",
        "paragraphs": [
          "The Scanner class parses primitive types and strings using regular expressions from System.in:"
        ],
        "codeBlocks": [
          {
            "title": "ScannerDemo.java",
            "language": "java",
            "code": "import java.util.Scanner;\n\npublic class ScannerDemo {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter target browser (Chrome/Firefox/Edge): \");\n        String browser = scanner.nextLine();\n\n        System.out.print(\"Enter test thread count: \");\n        int threads = scanner.nextInt();\n\n        System.out.printf(\"Configured test execution on %s across %d threads.%n\", browser, threads);\n        scanner.close(); // Clean up input stream\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-keywords-types": {
    "id": "java-keywords-types",
    "title": "Identifiers, Keywords & Data Types",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/java-keywords/",
    "description": "Complete encyclopedia of all 50+ Java reserved keywords categorized by purpose, along with primitive vs wrapper types, memory sizes, and variable scoping.",
    "sections": [
      {
        "id": "keywords-encyclopedia",
        "heading": "50+ Java Reserved Keywords Directory",
        "paragraphs": [
          "Java reserves 50+ keywords that cannot be used as variable names, class names, or method identifiers:"
        ],
        "table": {
          "headers": [
            "Category",
            "Keyword",
            "Core Purpose",
            "Real-World Test Automation Application"
          ],
          "rows": [
            [
              "Access Modifiers",
              "public",
              "Accessible everywhere across all packages",
              "Test classes (public class LoginTest), public page methods."
            ],
            [
              "Access Modifiers",
              "protected",
              "Accessible within package and subclasses",
              "BasePage methods accessible by child page objects."
            ],
            [
              "Access Modifiers",
              "private",
              "Accessible only within same class",
              "Page Object locators (private final By submitBtn) to enforce encapsulation."
            ],
            [
              "Class & Structure",
              "class",
              "Declares a class blueprint",
              "Page Objects, Test Suites, TestNG Listeners."
            ],
            [
              "Class & Structure",
              "interface",
              "Declares an abstract contract",
              "WebDriver, WebElement, SearchContext."
            ],
            [
              "Class & Structure",
              "enum",
              "Defines a fixed set of constants",
              "Browser types (Browser.CHROME), Environment (Env.QA)."
            ],
            [
              "Class & Structure",
              "extends",
              "Inherits from parent class",
              "All Page Objects extend BasePage; tests extend BaseTest."
            ],
            [
              "Class & Structure",
              "implements",
              "Implements an interface contract",
              "Custom listeners implementing ITestListener."
            ],
            [
              "Flow Control",
              "if / else",
              "Conditional branching execution",
              "Asserting UI state, switching paths based on flags."
            ],
            [
              "Flow Control",
              "switch / case",
              "Multi-branch decision logic",
              "Browser factory setup, Environment base URL resolution."
            ],
            [
              "Flow Control",
              "for / while",
              "Iteration & polling loops",
              "Polling dynamic DOM state or background async jobs."
            ],
            [
              "Exception Handling",
              "try / catch",
              "Guards and handles runtime errors",
              "Handling NoSuchElementException gracefully."
            ],
            [
              "Exception Handling",
              "finally",
              "Cleanup block executed unconditionally",
              "Quitting WebDriver instances, closing file streams."
            ],
            [
              "Modifiers",
              "final",
              "Prevents modification / inheritance",
              "Constants (timeouts, URLs), immutable locators."
            ],
            [
              "Modifiers",
              "static",
              "Belongs to class rather than instances",
              "Framework constants, singleton driver container."
            ],
            [
              "Modifiers",
              "synchronized",
              "Restricts thread access to one at a time",
              "Thread-safe screenshot capture or synchronized reporting."
            ],
            [
              "Context",
              "this / super",
              "Refers to current or parent instance",
              "Initializing page driver: this.driver = driver; super(driver);"
            ]
          ]
        }
      },
      {
        "id": "primitive-data-types",
        "heading": "8 Primitive Data Types in Java",
        "table": {
          "headers": [
            "Type",
            "Bits",
            "Range",
            "Default",
            "Example in QA Automation"
          ],
          "rows": [
            [
              "byte",
              "8",
              "-128 to 127",
              "0",
              "Reading raw HTTP byte buffers, status codes."
            ],
            [
              "short",
              "16",
              "-32,768 to 32,767",
              "0",
              "Port numbers (e.g. 8080, 4444 Selenium grid)."
            ],
            [
              "int",
              "32",
              "-2^31 to 2^31-1",
              "0",
              "Element counts, HTTP response codes (200, 404)."
            ],
            [
              "long",
              "64",
              "-2^63 to 2^63-1",
              "0L",
              "Epoch timestamps (System.currentTimeMillis())."
            ],
            [
              "float",
              "32",
              "~6-7 decimal digits",
              "0.0f",
              "Approximations, memory percentages."
            ],
            [
              "double",
              "64",
              "~15-17 decimal digits",
              "0.0d",
              "E-commerce prices ($29.99), response latency."
            ],
            [
              "boolean",
              "1",
              "true or false",
              "false",
              "element.isDisplayed(), isEnabled(), isSelected()."
            ],
            [
              "char",
              "16",
              "0 to 65,535 (Unicode)",
              "'\\u0000'",
              "Keyboard keys: Keys.ENTER, individual symbols."
            ]
          ]
        }
      }
    ]
  },
  "java-wrapper-classes": {
    "id": "java-wrapper-classes",
    "title": "Wrapper Classes & Autoboxing in Java",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/wrapper-classes-java/",
    "description": "Understand Java Wrapper Classes (Integer, Double, Boolean), Autoboxing and Unboxing, utility parsing methods, and why collections require wrapper objects.",
    "sections": [
      {
        "id": "wrapper-overview",
        "heading": "Why Java Uses Wrapper Classes",
        "paragraphs": [
          "Java is not 100% pure object-oriented because it retains 8 primitive types for raw computational speed. However, Java Collections (List, Set, Map) and Generics can only store Objects, not primitives.",
          "Wrapper classes encapsulate primitive data types into fully-fledged objects with rich utility methods."
        ],
        "table": {
          "headers": [
            "Primitive Type",
            "Wrapper Class",
            "Parsing Method",
            "Common QA Use Case"
          ],
          "rows": [
            [
              "int",
              "Integer",
              "Integer.parseInt(str)",
              "Extracting cart badge counter from DOM text: Integer.parseInt(\"3\")"
            ],
            [
              "double",
              "Double",
              "Double.parseDouble(str)",
              "Verifying checkout totals: Double.parseDouble(\"$49.99\".replace(\"$\", \"\"))"
            ],
            [
              "boolean",
              "Boolean",
              "Boolean.parseBoolean(str)",
              "Parsing config.properties flags: Boolean.parseBoolean(\"true\")"
            ],
            [
              "long",
              "Long",
              "Long.parseLong(str)",
              "Parsing order IDs or timestamps from JSON responses."
            ]
          ]
        }
      },
      {
        "id": "autoboxing-unboxing",
        "heading": "Autoboxing vs Unboxing",
        "codeBlocks": [
          {
            "title": "AutoboxingDemo.java",
            "language": "java",
            "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class AutoboxingDemo {\n    public static void main(String[] args) {\n        // Autoboxing: Automatic conversion of primitive to Wrapper Object\n        int primitiveTimeout = 30;\n        Integer objectTimeout = primitiveTimeout; // int -> Integer\n\n        // Collections require Objects, autoboxing happens seamlessly\n        List<Integer> statusCodes = new ArrayList<>();\n        statusCodes.add(200); // autoboxed: int 200 -> Integer.valueOf(200)\n        statusCodes.add(201);\n\n        // Unboxing: Automatic conversion of Wrapper Object to primitive\n        int firstStatus = statusCodes.get(0); // Integer -> int\n\n        System.out.println(\"First Status: \" + firstStatus);\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-operators-expressions": {
    "id": "java-operators-expressions",
    "title": "Operators & Expressions in Java",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/operators-in-java/",
    "description": "Exhaustive guide to Java operators: Arithmetic, Relational, Logical (short-circuit && vs &), Bitwise, Assignment, and Ternary operators.",
    "sections": [
      {
        "id": "operators-table",
        "heading": "Operators Classification & Precedence",
        "paragraphs": [
          "Operators are symbols used to perform operations on variables and values:"
        ],
        "table": {
          "headers": [
            "Operator Category",
            "Symbols",
            "Behavior",
            "Automation Example"
          ],
          "rows": [
            [
              "Arithmetic",
              "+, -, *, /, %",
              "Mathematical calculations",
              "Calculating average test duration: totalMs / testCount"
            ],
            [
              "Relational",
              "==, !=, >, <, >=, <=",
              "Returns boolean comparison",
              "assert responseCode == 200"
            ],
            [
              "Logical",
              "&&, ||, !",
              "Short-circuit boolean logic",
              "if (driver != null && element.isDisplayed())"
            ],
            [
              "Ternary",
              "? :",
              "Inline conditional expression",
              "String mode = isHeadless ? \"headless\" : \"headed\";"
            ],
            [
              "Assignment",
              "=, +=, -=, *=",
              "Assigns calculated value",
              "retryCount += 1"
            ],
            [
              "Unary",
              "++, --, +",
              "Increments or negates value",
              "for (int i = 0; i < maxRetries; i++)"
            ]
          ]
        }
      }
    ]
  },
  "java-decision-making": {
    "id": "java-decision-making",
    "title": "Decision Making (If-Else & Modern Switch Expressions)",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/decision-making-javaif-else-switch-break-continue-jump/",
    "description": "Master conditional execution in Java: if, if-else, nested if-else, and modern Java 14+ switch expressions with arrow syntax and yield.",
    "sections": [
      {
        "id": "modern-switch",
        "heading": "Modern Switch Expressions (Java 14+)",
        "paragraphs": [
          "Modern Java introduces arrow syntax (->) for switch expressions, eliminating accidental fall-through bugs caused by missing break statements:"
        ],
        "codeBlocks": [
          {
            "title": "BrowserFactory.java",
            "language": "java",
            "code": "public class BrowserFactory {\n    public static String resolveDriverType(String browserName) {\n        // Modern switch expression returning a value directly\n        return switch (browserName.toLowerCase()) {\n            case \"chrome\", \"google-chrome\" -> \"ChromeDriver\";\n            case \"firefox\", \"ff\" -> \"GeckoDriver\";\n            case \"edge\", \"msedge\" -> \"EdgeDriver\";\n            case \"safari\" -> \"SafariDriver\";\n            default -> {\n                System.out.println(\"Unknown browser, defaulting to Chrome\");\n                yield \"ChromeDriver\";\n            }\n        };\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Resolved: \" + resolveDriverType(\"firefox\"));\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-loops-jump": {
    "id": "java-loops-jump",
    "title": "Loops & Jump Statements (break, continue)",
    "category": "Basics",
    "sourceUrl": "https://www.geeksforgeeks.org/loops-in-java/",
    "description": "Explore iterative flow control in Java: for loops, enhanced for-each loops, while polling loops, do-while retry loops, and jump statements (break, continue, return).",
    "sections": [
      {
        "id": "loop-types",
        "heading": "Java Loop Constructs Comparison",
        "table": {
          "headers": [
            "Loop Type",
            "Condition Check",
            "Minimum Runs",
            "Ideal Automation Use Case"
          ],
          "rows": [
            [
              "for loop",
              "Pre-test (before each iteration)",
              "0",
              "Indexed iteration (e.g. iterating over 10 table rows)."
            ],
            [
              "enhanced for-each",
              "Iterates entire Iterable/Array",
              "0",
              "Iterating WebElements: for (WebElement el : elements)"
            ],
            [
              "while loop",
              "Pre-test",
              "0",
              "Dynamic condition polling: polling until spinner disappears."
            ],
            [
              "do-while loop",
              "Post-test (after body executes)",
              "1",
              "Retry clicking a flaky button at least once."
            ]
          ]
        }
      },
      {
        "id": "polling-example",
        "heading": "Dynamic Polling & Retry Loop Pattern",
        "codeBlocks": [
          {
            "title": "PollingRetryDemo.java",
            "language": "java",
            "code": "public class PollingRetryDemo {\n    public static boolean pollForCondition(int maxSeconds) {\n        int elapsed = 0;\n        while (elapsed < maxSeconds) {\n            if (checkIfJobComplete()) {\n                return true; // jump statement exiting method\n            }\n            try {\n                Thread.sleep(1000);\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n                break; // jump statement exiting loop\n            }\n            elapsed++;\n        }\n        return false;\n    }\n\n    private static boolean checkIfJobComplete() {\n        return Math.random() > 0.7; // simulated check\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-methods-basics": {
    "id": "java-methods-basics",
    "title": "Methods in Java: Syntax & Invocation",
    "category": "Methods",
    "sourceUrl": "https://www.geeksforgeeks.org/methods-in-java/",
    "description": "Learn how to define, overload, and invoke methods in Java, understand pass-by-value semantics, and construct modular, reusable test actions.",
    "sections": [
      {
        "id": "method-anatomy",
        "heading": "Anatomy of a Java Method",
        "paragraphs": [
          "A method is a block of code which only runs when it is called. Methods encapsulate reusable logic, take parameters, and optionally return values:"
        ],
        "codeBlocks": [
          {
            "title": "MethodSyntax.java",
            "language": "java",
            "code": "public class MethodSyntax {\n    // AccessModifier NonAccessModifier ReturnType MethodName(ParameterList)\n    public static int calculateDiscountedPrice(int basePrice, double discountPercentage) {\n        double discount = basePrice * (discountPercentage / 100.0);\n        return (int) (basePrice - discount);\n    }\n\n    public static void main(String[] args) {\n        int finalPrice = calculateDiscountedPrice(100, 15.0);\n        System.out.println(\"Final Price: $\" + finalPrice); // $85\n    }\n}"
          }
        ]
      },
      {
        "id": "pass-by-value",
        "heading": "Pass-by-Value Semantics in Java",
        "paragraphs": [
          "Java is strictly pass-by-value. When passing primitive variables, a copy of the literal value is passed. When passing object references, a copy of the reference address is passed, meaning changes to the object fields affect the original object, but reassigning the reference variable itself does not affect the caller."
        ]
      }
    ]
  },
  "java-static-instance-methods": {
    "id": "java-static-instance-methods",
    "title": "Static Methods vs Instance Methods",
    "category": "Methods",
    "sourceUrl": "https://www.geeksforgeeks.org/static-methods-vs-instance-methods-in-java/",
    "description": "Compare static methods (class-level utility) and instance methods (object-level behavior), their memory management, and when to use each in automation frameworks.",
    "sections": [
      {
        "id": "comparison-table",
        "heading": "Static vs Instance Methods Comparison",
        "table": {
          "headers": [
            "Feature",
            "Static Method",
            "Instance Method"
          ],
          "rows": [
            [
              "Binding",
              "Class level (invoked via ClassName.method())",
              "Object level (invoked via objectReference.method())"
            ],
            [
              "this / super",
              "Cannot use this or super keywords",
              "Can freely use this and super"
            ],
            [
              "Access",
              "Can only directly access static variables",
              "Can access both static and instance variables"
            ],
            [
              "Polymorphism",
              "Method hiding (resolved at compile time)",
              "Method overriding (runtime dynamic dispatch)"
            ],
            [
              "Automation Use Case",
              "Utility helpers: ScreenshotUtils.takeScreenshot()",
              "Page Object actions: loginPage.enterUsername()"
            ]
          ]
        }
      }
    ]
  },
  "java-access-modifiers": {
    "id": "java-access-modifiers",
    "title": "Access Modifiers in Java",
    "category": "Methods",
    "sourceUrl": "https://www.geeksforgeeks.org/access-modifiers-java/",
    "description": "Master Java's 4 access levels: public, protected, default (package-private), and private to design clean, encapsulated Page Object Model architectures.",
    "sections": [
      {
        "id": "matrix-table",
        "heading": "Access Modifier Visibility Matrix",
        "table": {
          "headers": [
            "Modifier",
            "Same Class",
            "Same Package",
            "Subclass (Different Pkg)",
            "World (Anywhere)"
          ],
          "rows": [
            [
              "public",
              "Yes",
              "Yes",
              "Yes",
              "Yes"
            ],
            [
              "protected",
              "Yes",
              "Yes",
              "Yes",
              "No"
            ],
            [
              "default (no keyword)",
              "Yes",
              "Yes",
              "No",
              "No"
            ],
            [
              "private",
              "Yes",
              "No",
              "No",
              "No"
            ]
          ]
        }
      }
    ]
  },
  "java-varargs-cmdline": {
    "id": "java-varargs-cmdline",
    "title": "Varargs & Command Line Arguments in Java",
    "category": "Methods",
    "sourceUrl": "https://www.geeksforgeeks.org/variable-arguments-varargs-in-java/",
    "description": "Utilize variable-length argument lists (varargs ...) and process String[] args command line arguments to make dynamic test runner entry points.",
    "sections": [
      {
        "id": "varargs-syntax",
        "heading": "Variable Arguments (Varargs) Syntax",
        "paragraphs": [
          "Varargs allow a method to accept zero or multiple arguments of a specified type using the ellipsis (...) operator:"
        ],
        "codeBlocks": [
          {
            "title": "VarargsDemo.java",
            "language": "java",
            "code": "public class VarargsDemo {\n    // Vararg parameter must always be the LAST parameter in the method signature\n    public static void waitForElements(int timeoutSeconds, String... locators) {\n        System.out.printf(\"Waiting up to %ds for %d elements%n\", timeoutSeconds, locators.length);\n        for (String locator : locators) {\n            System.out.println(\"Checking visibility of: \" + locator);\n        }\n    }\n\n    public static void main(String[] args) {\n        // Can be called with 0, 1, or multiple parameters\n        waitForElements(10, \"#username\", \"#password\", \"#submitBtn\");\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-arrays-fundamentals": {
    "id": "java-arrays-fundamentals",
    "title": "1D Arrays: Declaration & Memory Layout",
    "category": "Arrays",
    "sourceUrl": "https://www.geeksforgeeks.org/arrays-in-java/",
    "description": "Understand fixed-size 1D arrays in Java, contiguous heap memory allocation, default zero-values, and bounds checking (ArrayIndexOutOfBoundsException).",
    "sections": [
      {
        "id": "arrays-basics",
        "heading": "Declaring and Initializing 1D Arrays",
        "codeBlocks": [
          {
            "title": "ArrayDemo.java",
            "language": "java",
            "code": "public class ArrayDemo {\n    public static void main(String[] args) {\n        // 1. Declaration and memory allocation\n        int[] timeouts = new int[3];\n        timeouts[0] = 5;\n        timeouts[1] = 10;\n        timeouts[2] = 30;\n\n        // 2. Direct array literal initialization\n        String[] browsers = { \"chrome\", \"firefox\", \"edge\", \"safari\" };\n\n        // 3. Iterating with length property\n        for (int i = 0; i < browsers.length; i++) {\n            System.out.println(\"Target Browser: \" + browsers[i]);\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-multidimensional-arrays": {
    "id": "java-multidimensional-arrays",
    "title": "Multi-Dimensional & Jagged Arrays",
    "category": "Arrays",
    "sourceUrl": "https://www.geeksforgeeks.org/multidimensional-arrays-in-java/",
    "description": "Explore 2D matrix arrays, non-uniform jagged arrays, and see how TestNG @DataProvider utilizes Object[][] for data-driven test automation.",
    "sections": [
      {
        "id": "dataprovider-pattern",
        "heading": "2D Arrays in Data-Driven Testing (Object[][])",
        "codeBlocks": [
          {
            "title": "LoginDataProvider.java",
            "language": "java",
            "code": "public class LoginDataProvider {\n    // A 2D array: rows represent test executions, columns represent parameters\n    public static Object[][] getLoginTestData() {\n        return new Object[][] {\n            { \"standard_user\", \"secret_sauce\", 200, \"Dashboard\" },\n            { \"locked_out_user\", \"secret_sauce\", 403, \"User is locked out\" },\n            { \"problem_user\", \"invalid_pass\", 401, \"Invalid credentials\" }\n        };\n    }\n\n    public static void main(String[] args) {\n        Object[][] data = getLoginTestData();\n        for (Object[] row : data) {\n            System.out.printf(\"Running with User: %s | Expected: %s%n\", row[0], row[3]);\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-arrays-class-methods": {
    "id": "java-arrays-class-methods",
    "title": "Arrays Class & Final Arrays in Java",
    "category": "Arrays",
    "sourceUrl": "https://www.geeksforgeeks.org/array-class-in-java/",
    "description": "Master java.util.Arrays utility methods (sort, binarySearch, equals, copyOf, asList) and understand the immutability rules of final array references.",
    "sections": [
      {
        "id": "arrays-methods",
        "heading": "Key java.util.Arrays Utility Methods",
        "codeBlocks": [
          {
            "title": "ArraysUtilityDemo.java",
            "language": "java",
            "code": "import java.util.Arrays;\nimport java.util.List;\n\npublic class ArraysUtilityDemo {\n    public static void main(String[] args) {\n        int[] responseTimes = { 450, 120, 890, 310, 200 };\n\n        // 1. Sorting in-place (Dual-Pivot Quicksort)\n        Arrays.sort(responseTimes);\n        System.out.println(\"Sorted: \" + Arrays.toString(responseTimes));\n\n        // 2. Binary search on sorted array\n        int index = Arrays.binarySearch(responseTimes, 310);\n        System.out.println(\"Index of 310ms: \" + index);\n\n        // 3. Converting array to fixed-size List\n        List<String> environments = Arrays.asList(\"dev\", \"qa\", \"stage\", \"prod\");\n        System.out.println(\"Environments: \" + environments);\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-strings-fundamentals": {
    "id": "java-strings-fundamentals",
    "title": "Strings & String Constant Pool (SCP) in Java",
    "category": "Strings",
    "sourceUrl": "https://www.geeksforgeeks.org/strings-in-java/",
    "description": "Understand Java String immutability, the JVM String Constant Pool (SCP) memory zone, literal creation vs new String() heap allocation.",
    "sections": [
      {
        "id": "string-constant-pool",
        "heading": "String Constant Pool (SCP) Explained",
        "paragraphs": [
          "Strings in Java are immutable objects. To conserve memory, JVM maintains a special area inside the Heap called the String Constant Pool (SCP):",
          "When creating a string via literal (String s = \"test\"), JVM checks the SCP first. If already present, it reuses the reference. When using new String(\"test\"), JVM allocates a new object in the normal heap plus creates an entry in SCP."
        ]
      }
    ]
  },
  "java-string-equals-vs-double-equal": {
    "id": "java-string-equals-vs-double-equal",
    "title": "String Comparison: .equals() vs ==",
    "category": "Strings",
    "sourceUrl": "https://www.geeksforgeeks.org/difference-between-and-equals-method-in-java/",
    "description": "Deep dive into the critical distinction between reference equality (==) and content equality (.equals()), avoiding the #1 bug in test validation assertions.",
    "sections": [
      {
        "id": "comparison-code",
        "heading": "Code Demonstration: == vs .equals()",
        "codeBlocks": [
          {
            "title": "StringComparisonDemo.java",
            "language": "java",
            "code": "public class StringComparisonDemo {\n    public static void main(String[] args) {\n        String s1 = \"QA\"; // in SCP\n        String s2 = \"QA\"; // reuses reference from SCP\n        String s3 = new String(\"QA\"); // new object in heap\n\n        // == compares memory memory references (addresses)\n        System.out.println(\"s1 == s2: \" + (s1 == s2)); // true (same SCP address)\n        System.out.println(\"s1 == s3: \" + (s1 == s3)); // false (different addresses!)\n\n        // .equals() compares actual character content\n        System.out.println(\"s1.equals(s3): \" + s1.equals(s3)); // true (same content)\n        System.out.println(\"s1.equalsIgnoreCase(\"qa\"): \" + s1.equalsIgnoreCase(\"qa\")); // true\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-string-methods-complete": {
    "id": "java-string-methods-complete",
    "title": "Core String Methods Reference",
    "category": "Strings",
    "sourceUrl": "https://www.geeksforgeeks.org/java-string-methods/",
    "description": "Practical guide to essential Java String methods: length, substring, split, replace, contains, trim, toLowerCase, and regex matching.",
    "sections": [
      {
        "id": "methods-table",
        "heading": "Most Frequently Used String Methods in QA",
        "table": {
          "headers": [
            "Method",
            "Signature",
            "QA Automation Application"
          ],
          "rows": [
            [
              "length()",
              "int length()",
              "Asserting character limits on text area inputs."
            ],
            [
              "charAt(index)",
              "char charAt(int index)",
              "Extracting currency symbols (e.g. text.charAt(0) == '$')."
            ],
            [
              "substring()",
              "String substring(int start, int end)",
              "Extracting order ID from 'Order #12345 confirmed'."
            ],
            [
              "contains()",
              "boolean contains(CharSequence s)",
              "Verifying success banners: banner.contains('Saved successfully')."
            ],
            [
              "split()",
              "String[] split(String regex)",
              "Splitting CSV test data or JWT tokens by '.'."
            ],
            [
              "trim() / strip()",
              "String trim()",
              "Sanitizing whitespace from extracted DOM text."
            ],
            [
              "replace()",
              "String replace(char old, char new)",
              "Formatting currency: price.replace('$', '').trim()"
            ]
          ]
        }
      }
    ]
  },
  "java-stringbuilder-stringbuffer": {
    "id": "java-stringbuilder-stringbuffer",
    "title": "StringBuilder vs StringBuffer vs String",
    "category": "Strings",
    "sourceUrl": "https://www.geeksforgeeks.org/string-vs-stringbuilder-vs-stringbuffer-in-java/",
    "description": "Compare String (immutable), StringBuffer (mutable & synchronized), and StringBuilder (mutable & high-performance) for dynamic log and test report generation.",
    "sections": [
      {
        "id": "comparison-table",
        "heading": "String vs StringBuffer vs StringBuilder",
        "table": {
          "headers": [
            "Feature",
            "String",
            "StringBuffer",
            "StringBuilder"
          ],
          "rows": [
            [
              "Mutability",
              "Immutable (new object created on every edit)",
              "Mutable (modifies buffer in-place)",
              "Mutable (modifies buffer in-place)"
            ],
            [
              "Thread Safety",
              "Thread-safe (due to immutability)",
              "Thread-safe (synchronized methods)",
              "Not thread-safe (unsynchronized)"
            ],
            [
              "Performance",
              "Slow for frequent concatenations",
              "Medium (synchronization lock overhead)",
              "Fastest (zero lock overhead)"
            ],
            [
              "Introduced",
              "JDK 1.0",
              "JDK 1.0",
              "JDK 1.5"
            ],
            [
              "Recommended For",
              "Constants, keys, immutable state",
              "Multi-threaded legacy shared logging",
              "Single-threaded string building (test reports, queries)"
            ]
          ]
        }
      }
    ]
  },
  "java-oops-fundamentals": {
    "id": "java-oops-fundamentals",
    "title": "Classes, Objects & Constructors in Java",
    "category": "OOP Concepts",
    "sourceUrl": "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    "description": "Understand classes as architectural blueprints, object state and behavior, default vs parameterized constructors, and constructor chaining (this() / super()).",
    "sections": [
      {
        "id": "class-object-basics",
        "heading": "Classes and Objects: The Page Object Example",
        "paragraphs": [
          "A Class is a blueprint that defines the properties (fields) and behaviors (methods) of a concept. An Object is an instantiated instance of that blueprint occupying heap memory:"
        ],
        "codeBlocks": [
          {
            "title": "LoginPage.java",
            "language": "java",
            "code": "public class LoginPage {\n    // 1. Fields / State (Encapsulated)\n    private String pageUrl;\n    private int loadTimeoutSeconds;\n\n    // 2. Default Constructor\n    public LoginPage() {\n        this.pageUrl = \"https://example.com/login\";\n        this.loadTimeoutSeconds = 15;\n    }\n\n    // 3. Parameterized Constructor\n    public LoginPage(String customBaseUrl, int timeout) {\n        this.pageUrl = customBaseUrl + \"/login\";\n        this.loadTimeoutSeconds = timeout;\n    }\n\n    // 4. Methods / Behavior\n    public void navigate() {\n        System.out.println(\"Navigating to \" + pageUrl + \" with timeout \" + loadTimeoutSeconds + \"s\");\n    }\n\n    public static void main(String[] args) {\n        // Instantiating Objects using 'new'\n        LoginPage defaultLogin = new LoginPage();\n        LoginPage stagingLogin = new LoginPage(\"https://staging.example.com\", 30);\n\n        defaultLogin.navigate();\n        stagingLogin.navigate();\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-this-super-keywords": {
    "id": "java-this-super-keywords",
    "title": "this & super Keywords in Java",
    "category": "OOP Concepts",
    "sourceUrl": "https://www.geeksforgeeks.org/java-this-keyword/",
    "description": "Differentiate between this (current instance reference and constructor chaining) and super (parent class members and parent constructor invocation).",
    "sections": [
      {
        "id": "this-super-code",
        "heading": "Constructor Chaining with this() and super()",
        "codeBlocks": [
          {
            "title": "BaseAndChildPage.java",
            "language": "java",
            "code": "class BasePage {\n    protected String driverType;\n\n    public BasePage(String driverType) {\n        this.driverType = driverType;\n        System.out.println(\"BasePage initialized with driver: \" + driverType);\n    }\n}\n\nclass DashboardPage extends BasePage {\n    private String userRole;\n\n    public DashboardPage(String driverType, String userRole) {\n        super(driverType); // Calls parent constructor (must be first statement!)\n        this.userRole = userRole; // Disambiguates instance field from parameter\n    }\n\n    public DashboardPage(String userRole) {\n        this(\"chrome\", userRole); // Constructor chaining to another constructor in same class\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-oops-four-pillars": {
    "id": "java-oops-four-pillars",
    "title": "4 OOP Pillars (Inheritance, Polymorphism, Abstraction, Encapsulation)",
    "category": "OOP Concepts",
    "sourceUrl": "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    "description": "Master the 4 fundamental pillars of OOP with direct application to industrial Page Object Model (POM) and test automation framework architecture.",
    "sections": [
      {
        "id": "four-pillars-table",
        "heading": "The 4 OOP Pillars in Test Automation Architecture",
        "table": {
          "headers": [
            "Pillar",
            "Definition",
            "Implementation Mechanism",
            "POM Test Automation Architecture Application"
          ],
          "rows": [
            [
              "Encapsulation",
              "Bundling state and restricting direct field access.",
              "private fields + public getters / action methods.",
              "Locators kept private; tests never touch By locators directly, only call page action methods."
            ],
            [
              "Inheritance",
              "Deriving new classes from an existing parent class.",
              "extends keyword.",
              "All pages extend BasePage (inheriting WebDriver, explicit waits, logger); tests extend BaseTest."
            ],
            [
              "Polymorphism",
              "One interface, multiple implementations.",
              "Method Overloading (compile-time) & Overriding (runtime).",
              "Overloading click(By locator) and click(By locator, int timeout); WebDriver interface implemented by ChromeDriver, FirefoxDriver."
            ],
            [
              "Abstraction",
              "Hiding internal complexity and showing essential interface.",
              "abstract classes and interfaces.",
              "BasePage declared abstract; Page methods abstract away underlying Selenium sendKeys() / click() calls."
            ]
          ]
        }
      }
    ]
  },
  "java-object-class-packages": {
    "id": "java-object-class-packages",
    "title": "Object Class & Package Management in Java",
    "category": "OOP Concepts",
    "sourceUrl": "https://www.geeksforgeeks.org/object-class-in-java/",
    "description": "Learn why java.lang.Object is the cosmic root of all Java classes, how to properly override toString(), equals(), and hashCode(), and structure enterprise packages.",
    "sections": [
      {
        "id": "equals-hashcode-contract",
        "heading": "The equals() and hashCode() Contract",
        "paragraphs": [
          "If two objects are equal according to equals(Object), their hashCode() MUST produce the identical integer. Violating this rule breaks hash-based collections (HashMap, HashSet)."
        ]
      }
    ]
  },
  "java-interfaces-basics": {
    "id": "java-interfaces-basics",
    "title": "Interfaces in Java & Multiple Inheritance",
    "category": "Interfaces",
    "sourceUrl": "https://www.geeksforgeeks.org/interfaces-in-java/",
    "description": "Explore interface contracts, full abstraction, default and static methods (Java 8+), private interface methods (Java 9+), and resolving diamond multiple inheritance.",
    "sections": [
      {
        "id": "interface-code",
        "heading": "Defining and Implementing Interfaces",
        "codeBlocks": [
          {
            "title": "TestReporter.java",
            "language": "java",
            "code": "public interface TestReporter {\n    // Abstract method contract (implicitly public abstract)\n    void logStep(String stepName, String status);\n\n    // Default method with implementation (Java 8+)\n    default void logPass(String stepName) {\n        logStep(stepName, \"PASSED\");\n    }\n\n    // Static utility method in interface\n    static String getReportTimestamp() {\n        return java.time.Instant.now().toString();\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-class-vs-interface": {
    "id": "java-class-vs-interface",
    "title": "Class vs Interface Comparison in Java",
    "category": "Interfaces",
    "sourceUrl": "https://www.geeksforgeeks.org/differences-between-interface-and-class-in-java/",
    "description": "Comprehensive side-by-side architectural comparison between Concrete Classes, Abstract Classes, and Interfaces.",
    "sections": [
      {
        "id": "comparison-table",
        "heading": "Concrete Class vs Abstract Class vs Interface",
        "table": {
          "headers": [
            "Feature",
            "Concrete Class",
            "Abstract Class",
            "Interface"
          ],
          "rows": [
            [
              "Instantiation",
              "Directly with new",
              "Cannot be instantiated directly",
              "Cannot be instantiated directly"
            ],
            [
              "Inheritance",
              "Single class (extends)",
              "Single class (extends)",
              "Multiple interfaces (implements)"
            ],
            [
              "Methods",
              "Concrete only",
              "Concrete and abstract",
              "Abstract, default, and static methods"
            ],
            [
              "Variables",
              "Instance and static",
              "Instance and static",
              "public static final constants only"
            ],
            [
              "Constructors",
              "Yes",
              "Yes (called via super())",
              "No constructors allowed"
            ]
          ]
        }
      }
    ]
  },
  "java-special-interfaces": {
    "id": "java-special-interfaces",
    "title": "Functional, Nested & Marker Interfaces",
    "category": "Interfaces",
    "sourceUrl": "https://www.geeksforgeeks.org/java-functional-interfaces/",
    "description": "Examine Functional Interfaces (@FunctionalInterface Single Abstract Method), Marker Interfaces (Serializable, Cloneable), and Nested Interfaces in Java.",
    "sections": [
      {
        "id": "functional-interface",
        "heading": "@FunctionalInterface and SAM Rule",
        "paragraphs": [
          "A functional interface has exactly one abstract method (Single Abstract Method - SAM). It can have multiple default or static methods. It serves as the target type for lambda expressions and method references:"
        ],
        "codeBlocks": [
          {
            "title": "ConditionValidator.java",
            "language": "java",
            "code": "@FunctionalInterface\npublic interface ConditionValidator<T> {\n    boolean validate(T target); // Single Abstract Method\n}\n\n// Lambda usage:\n// ConditionValidator<String> isNonEmpty = s -> s != null && !s.trim().isEmpty();"
          }
        ]
      }
    ]
  },
  "java-exception-hierarchy": {
    "id": "java-exception-hierarchy",
    "title": "Exception Hierarchy & Try-Catch Blocks in Java",
    "category": "Exception Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/exceptions-in-java/",
    "description": "Master Java's Throwable hierarchy: Error vs Checked Exception vs Unchecked RuntimeException, try-catch-finally control flow, and multi-catch blocks.",
    "sections": [
      {
        "id": "hierarchy-tree",
        "heading": "Java Throwable Hierarchy",
        "codeBlocks": [
          {
            "title": "Exception Tree",
            "language": "bash",
            "code": "Throwable\n├── Error (Unchecked, JVM failures: OutOfMemoryError, StackOverflowError)\n└── Exception\n    ├── Checked Exceptions (Compile-time: IOException, SQLException, ClassNotFoundException)\n    └── RuntimeException (Unchecked: NullPointerException, NoSuchElementException, IllegalArgumentException)"
          }
        ]
      },
      {
        "id": "try-catch-syntax",
        "heading": "Try-Catch-Finally Execution Guarantees",
        "codeBlocks": [
          {
            "title": "ExceptionDemo.java",
            "language": "java",
            "code": "public class ExceptionDemo {\n    public static void executeSafeAction() {\n        try {\n            System.out.println(\"Attempting to locate element...\");\n            // Code that might throw an exception\n            throw new RuntimeException(\"Element not found on DOM\");\n        } catch (RuntimeException e) {\n            System.err.println(\"Caught exception: \" + e.getMessage());\n        } finally {\n            // finally block is GUARANTEED to execute, even if an exception was thrown\n            System.out.println(\"Cleanup: Teardown and logging completed.\");\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-throw-throws-custom": {
    "id": "java-throw-throws-custom",
    "title": "throw, throws & Custom Exceptions",
    "category": "Exception Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/throw-throws-java/",
    "description": "Compare throw (explicitly firing an exception) and throws (method signature propagation) and build meaningful custom domain exceptions for test automation.",
    "sections": [
      {
        "id": "custom-exception-code",
        "heading": "Creating Domain-Specific Custom Exceptions",
        "codeBlocks": [
          {
            "title": "FrameworkExceptions.java",
            "language": "java",
            "code": "// Custom unchecked exception for automation framework\npublic class ElementTimeoutException extends RuntimeException {\n    public ElementTimeoutException(String message) {\n        super(message);\n    }\n\n    public ElementTimeoutException(String message, Throwable cause) {\n        super(message, cause);\n    }\n}\n\n// Method using 'throws' and 'throw'\npublic class LocatorHelper {\n    public static void verifyElementVisible(String locator, boolean isPresent) {\n        if (!isPresent) {\n            throw new ElementTimeoutException(\"Timed out waiting for element: \" + locator);\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-final-finally-finalize": {
    "id": "java-final-finally-finalize",
    "title": "final vs finally vs finalize in Java",
    "category": "Exception Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/java-final-finally-and-finalize/",
    "description": "The classic Java interview question: final keyword (constants & immutability), finally block (cleanup guarantees), and finalize method (deprecated GC hook).",
    "sections": [
      {
        "id": "comparison-table",
        "heading": "final vs finally vs finalize",
        "table": {
          "headers": [
            "Concept",
            "Nature",
            "Purpose",
            "Code Example"
          ],
          "rows": [
            [
              "final",
              "Modifier keyword",
              "Declares constants, prevents method overriding and class inheritance",
              "final int TIMEOUT = 30;"
            ],
            [
              "finally",
              "Block keyword",
              "Clean-up block attached to try-catch; always executes",
              "try { ... } finally { driver.quit(); }"
            ],
            [
              "finalize",
              "Method (java.lang.Object)",
              "Called by Garbage Collector before destroying object (deprecated since Java 9)",
              "protected void finalize() throws Throwable { ... }"
            ]
          ]
        }
      }
    ]
  },
  "java-advanced-exceptions": {
    "id": "java-advanced-exceptions",
    "title": "Chained Exceptions & Overriding Rules",
    "category": "Exception Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/chained-exceptions-in-java/",
    "description": "Learn exception chaining (initCause / getCause), try-with-resources (AutoCloseable), and rules governing checked exceptions during subclass method overriding.",
    "sections": [
      {
        "id": "try-with-resources",
        "heading": "Modern Try-with-Resources (AutoCloseable)",
        "codeBlocks": [
          {
            "title": "TryWithResourcesDemo.java",
            "language": "java",
            "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class TryWithResourcesDemo {\n    public static void readConfigFile(String path) {\n        // Automatically calls .close() on buffer when try block exits\n        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Failed to read file: \" + e.getMessage());\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-regex-fundamentals": {
    "id": "java-regex-fundamentals",
    "title": "Regex Introduction: Pattern & Matcher in Java",
    "category": "Regex",
    "sourceUrl": "https://www.geeksforgeeks.org/regular-expressions-in-java/",
    "description": "Compile and match regular expressions in Java using java.util.regex.Pattern and Matcher classes for dynamic string parsing and test assertions.",
    "sections": [
      {
        "id": "regex-pattern-matcher",
        "heading": "Pattern and Matcher Architecture",
        "codeBlocks": [
          {
            "title": "RegexDemo.java",
            "language": "java",
            "code": "import java.util.regex.Matcher;\nimport java.util.regex.Pattern;\n\npublic class RegexDemo {\n    public static void main(String[] args) {\n        String testLog = \"Order #98721 placed successfully for user alice@example.com on 2026-10-14.\";\n\n        // Pattern: compile regex once for performance\n        Pattern orderPattern = Pattern.compile(\"Order #(\\\\d+)\");\n        Matcher matcher = orderPattern.matcher(testLog);\n\n        if (matcher.find()) {\n            String orderId = matcher.group(1); // captured group\n            System.out.println(\"Extracted Order ID: \" + orderId); // 98721\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-regex-character-classes": {
    "id": "java-regex-character-classes",
    "title": "Character Classes & Quantifiers in Java Regex",
    "category": "Regex",
    "sourceUrl": "https://www.geeksforgeeks.org/quantifiers-in-java/",
    "description": "Master character classes (\\d, \\w, \\s, [a-z]), boundary matchers (^, $), and quantifiers (*, +, ?, {n,m}) to validate emails, phone numbers, and URLs.",
    "sections": [
      {
        "id": "regex-cheatsheet",
        "heading": "Regex Character Classes & Quantifiers Cheatsheet",
        "table": {
          "headers": [
            "Pattern",
            "Meaning",
            "Matches Example"
          ],
          "rows": [
            [
              "\\\\d",
              "Any digit (0-9)",
              "5"
            ],
            [
              "\\\\D",
              "Any non-digit",
              "A"
            ],
            [
              "\\\\w",
              "Any word character [a-zA-Z0-9_]",
              "user_1"
            ],
            [
              "\\\\s",
              "Any whitespace character (space, tab, newline)",
              "' '"
            ],
            [
              "[abc]",
              "Any character a, b, or c",
              "b"
            ],
            [
              "[^abc]",
              "Any character except a, b, or c",
              "x"
            ],
            [
              "*",
              "Occurs zero or more times",
              "a* matches '', 'a', 'aaa'"
            ],
            [
              "+",
              "Occurs one or more times",
              "a+ matches 'a', 'aaa'"
            ],
            [
              "?",
              "Occurs zero or one time",
              "colou?r matches color and colour"
            ],
            [
              "{n,m}",
              "Occurs between n and m times",
              "\\\\d{3,5} matches 123, 12345"
            ]
          ]
        }
      }
    ]
  },
  "java-memory-management": {
    "id": "java-memory-management",
    "title": "Stack vs Heap Memory Architecture in Java",
    "category": "Memory Allocation",
    "sourceUrl": "https://www.geeksforgeeks.org/java-stack-vs-heap-memory-allocation/",
    "description": "Understand JVM memory anatomy: Stack frames (primitive values & method calls), Heap (all instantiated objects), and Metaspace (class metadata & bytecode).",
    "sections": [
      {
        "id": "stack-vs-heap",
        "heading": "Stack vs Heap Memory Comparison",
        "table": {
          "headers": [
            "Feature",
            "Stack Memory",
            "Heap Memory"
          ],
          "rows": [
            [
              "Storage",
              "Primitive local variables and object reference pointers",
              "All instantiated objects and instance variables"
            ],
            [
              "Thread Scope",
              "Private to each thread (hermetic thread-safety)",
              "Shared across all threads in the JVM process"
            ],
            [
              "Allocation",
              "LIFO (Last In First Out) method invocation frames",
              "Dynamic runtime allocation (new keyword)"
            ],
            [
              "Deallocation",
              "Automatic when method execution completes",
              "Managed by Garbage Collector when unreachable"
            ],
            [
              "Error Condition",
              "java.lang.StackOverflowError (infinite recursion)",
              "java.lang.OutOfMemoryError: Java heap space"
            ]
          ]
        }
      }
    ]
  },
  "java-garbage-collection": {
    "id": "java-garbage-collection",
    "title": "Garbage Collection & JVM Collectors",
    "category": "Memory Allocation",
    "sourceUrl": "https://www.geeksforgeeks.org/garbage-collection-in-java/",
    "description": "Learn how Java Garbage Collection automatically reclaims unreachable heap objects, the generational hypothesis (Young vs Old Gen), and modern GC algorithms (G1GC, ZGC).",
    "sections": [
      {
        "id": "gc-eligibility",
        "heading": "When Does an Object Become Eligible for GC?",
        "paragraphs": [
          "An object is eligible for garbage collection when it is no longer reachable by any live thread reference root (stack pointer, static variable):",
          "1. Nullifying the reference variable (driver = null;)",
          "2. Reassigning reference to another object (p1 = new Page();)",
          "3. Object created inside a method going out of scope",
          "4. Island of isolation: objects referencing each other but unreachable from root"
        ]
      }
    ]
  },
  "java-memory-leaks": {
    "id": "java-memory-leaks",
    "title": "Memory Leaks & OutOfMemoryError in Java",
    "category": "Memory Allocation",
    "sourceUrl": "https://www.geeksforgeeks.org/memory-leaks-in-java/",
    "description": "Diagnose and prevent OutOfMemoryError (OOM) caused by lingering static collections, unclosed IO streams, and ThreadLocal leaks in test automation suites.",
    "sections": [
      {
        "id": "common-test-leaks",
        "heading": "Top Memory Leaks in QA Automation Suites",
        "table": {
          "headers": [
            "Root Cause",
            "Mechanism",
            "Prevention & Solution"
          ],
          "rows": [
            [
              "Static Collections",
              "Appending reports or screenshots to a static List that never clears.",
              "Clear collections in @AfterSuite or use bounded ring buffers."
            ],
            [
              "Unremoved ThreadLocal",
              "Failing to call threadLocalDriver.remove() in parallel test suites.",
              "Always invoke threadLocalDriver.remove() in @AfterMethod teardown."
            ],
            [
              "Unclosed WebDriver",
              "Orphaned browser driver processes staying alive after exceptions.",
              "Wrap driver.quit() in finally block or TestNG listener."
            ]
          ]
        }
      }
    ]
  },
  "java-generics-classes-methods": {
    "id": "java-generics-classes-methods",
    "title": "Generic Classes & Methods in Java",
    "category": "Generics",
    "sourceUrl": "https://www.geeksforgeeks.org/generic-class-in-java/",
    "description": "Leverage Java Generics to achieve compile-time type safety, eliminate manual ClassCastException risks, and construct type-safe Page Object wrappers.",
    "sections": [
      {
        "id": "generic-class-demo",
        "heading": "Generic Container Class Pattern",
        "codeBlocks": [
          {
            "title": "ApiResponse.java",
            "language": "java",
            "code": "// T is a generic type placeholder resolved at compile time\npublic class ApiResponse<T> {\n    private int statusCode;\n    private T body;\n\n    public ApiResponse(int statusCode, T body) {\n        this.statusCode = statusCode;\n        this.body = body;\n    }\n\n    public int getStatusCode() { return statusCode; }\n    public T getBody() { return body; }\n\n    public static void main(String[] args) {\n        // Type-safe: compiler enforces String body\n        ApiResponse<String> textRes = new ApiResponse<>(200, \"OK\");\n        String text = textRes.getBody(); // No type casting needed!\n        System.out.println(\"Status: \" + textRes.getStatusCode() + \" | Body: \" + text);\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-wildcards-bounded-types": {
    "id": "java-wildcards-bounded-types",
    "title": "Wildcards & Bounded Types in Java Generics",
    "category": "Generics",
    "sourceUrl": "https://www.geeksforgeeks.org/wildcards-in-java/",
    "description": "Master wildcard syntax (<?>), upper bounded wildcards (<? extends T>), lower bounded wildcards (<? super T>), and the PECS rule (Producer Extends, Consumer Super).",
    "sections": [
      {
        "id": "pecs-rule",
        "heading": "The PECS Rule Explained",
        "paragraphs": [
          "PECS stands for Producer Extends, Consumer Super:",
          "- If your method reads/produces items from a collection, use <? extends T> (Upper Bounded).",
          "- If your method writes/consumes items into a collection, use <? super T> (Lower Bounded)."
        ]
      }
    ]
  },
  "java-type-erasure": {
    "id": "java-type-erasure",
    "title": "Type Erasure & Generic Restrictions in Java",
    "category": "Generics",
    "sourceUrl": "https://www.geeksforgeeks.org/type-erasure-java/",
    "description": "Understand how the Java compiler removes generic type information during compilation to maintain backward compatibility, and the resulting runtime limitations.",
    "sections": [
      {
        "id": "erasure-implications",
        "heading": "Compiler Type Erasure Implications",
        "paragraphs": [
          "During compilation, List<String> and List<Integer> both become raw List in bytecode. Type arguments are replaced by Object (or their bound).",
          "Consequently: you cannot instantiate generic types (new T()), cannot create generic arrays (new T[10]), and cannot use primitive types as generic arguments (use Integer, not int)."
        ]
      }
    ]
  },
  "java-collections-framework": {
    "id": "java-collections-framework",
    "title": "Collections Framework Overview & Hierarchy",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/java-collection-tutorial/",
    "description": "Comprehensive blueprint of the Java Collections Framework (JCF): Iterable, Collection, List, Set, Queue, and Map hierarchies with time complexities.",
    "sections": [
      {
        "id": "hierarchy-diagram",
        "heading": "Collections Framework Class Hierarchy",
        "codeBlocks": [
          {
            "title": "Collections Hierarchy",
            "language": "bash",
            "code": "Iterable (java.lang)\n└── Collection (java.util)\n    ├── List (Ordered, duplicates allowed, index-based)\n    │   ├── ArrayList (Dynamic array, fast O(1) random access)\n    │   ├── LinkedList (Doubly-linked list, fast O(1) add/remove at ends)\n    │   └── Vector (Legacy synchronized array)\n    ├── Set (Unordered, unique elements only)\n    │   ├── HashSet (Hash table, O(1) lookups)\n    │   ├── LinkedHashSet (Hash table + linked list, maintains insertion order)\n    │   └── TreeSet (Red-Black tree, sorted natural order O(log n))\n    └── Queue (FIFO queueing)\n        ├── PriorityQueue (Heap-based priority ordering)\n        └── Deque -> ArrayDeque (Double-ended queue, high performance stack/queue)\n\nMap (java.util - Separate hierarchy of Key-Value pairs)\n├── HashMap (Hash table, O(1) get/put)\n├── LinkedHashMap (Maintains insertion order)\n├── TreeMap (Red-Black tree, sorted by key)\n└── ConcurrentHashMap (Thread-safe segment/bucket locking)"
          }
        ]
      }
    ]
  },
  "java-list-interface": {
    "id": "java-list-interface",
    "title": "List Interface (ArrayList vs LinkedList vs Vector)",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/list-interface-java-examples/",
    "description": "Compare List implementations: ArrayList (resizable array), LinkedList (doubly-linked nodes), and Vector (synchronized legacy), with performance benchmarks.",
    "sections": [
      {
        "id": "arraylist-vs-linkedlist",
        "heading": "ArrayList vs LinkedList Architectural Comparison",
        "table": {
          "headers": [
            "Operation",
            "ArrayList",
            "LinkedList",
            "Winner in QA Automation"
          ],
          "rows": [
            [
              "get(index)",
              "O(1) direct offset index math",
              "O(n) sequential node pointer traversal",
              "ArrayList (vastly superior for table rows & locators)"
            ],
            [
              "add(element) (end)",
              "O(1) amortized",
              "O(1) append to tail",
              "Tie"
            ],
            [
              "add(0, element) (head)",
              "O(n) shifts all elements right",
              "O(1) updates head pointer",
              "LinkedList"
            ],
            [
              "Memory Overhead",
              "Low (contiguous array buffer)",
              "High (3 references per node: data, next, prev)",
              "ArrayList"
            ]
          ]
        }
      }
    ]
  },
  "java-set-interface": {
    "id": "java-set-interface",
    "title": "Set Interface (HashSet, LinkedHashSet, TreeSet)",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/set-in-java/",
    "description": "Explore the Set interface for uniqueness guarantees: HashSet (fastest hash lookup), LinkedHashSet (insertion-order preservation), and TreeSet (natural sorting).",
    "sections": [
      {
        "id": "set-comparison-table",
        "heading": "HashSet vs LinkedHashSet vs TreeSet",
        "table": {
          "headers": [
            "Feature",
            "HashSet",
            "LinkedHashSet",
            "TreeSet"
          ],
          "rows": [
            [
              "Underlying Structure",
              "HashMap",
              "HashMap + Doubly-linked list",
              "TreeMap (Red-Black Tree)"
            ],
            [
              "Duplicates",
              "Not allowed",
              "Not allowed",
              "Not allowed"
            ],
            [
              "Iteration Order",
              "Unordered / unpredictable",
              "Insertion order preserved",
              "Sorted natural / Comparator order"
            ],
            [
              "Time Complexity (add/contains)",
              "O(1)",
              "O(1)",
              "O(log n)"
            ],
            [
              "Null Elements",
              "Allows 1 null",
              "Allows 1 null",
              "Does NOT allow null (throws NPE)"
            ],
            [
              "Automation Use Case",
              "Deduplicating extracted URLs: Set<String> unique = new HashSet<>(urls);",
              "Preserving execution sequence of visited pages",
              "Sorting extracted pricing data to verify ascending order"
            ]
          ]
        }
      }
    ]
  },
  "java-queue-deque-interface": {
    "id": "java-queue-deque-interface",
    "title": "Queue & Deque (PriorityQueue, ArrayDeque)",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/queue-interface-java/",
    "description": "Understand FIFO queues and double-ended queues: offer() vs add(), poll() vs remove(), and why ArrayDeque is superior to java.util.Stack.",
    "sections": [
      {
        "id": "deque-pattern",
        "heading": "ArrayDeque as High-Performance Stack and Queue",
        "paragraphs": [
          "Java's legacy java.util.Stack is synchronized and slow. The official Java recommendation is to use ArrayDeque for both stacks (LIFO) and queues (FIFO):"
        ],
        "codeBlocks": [
          {
            "title": "TaskQueueDemo.java",
            "language": "java",
            "code": "import java.util.ArrayDeque;\nimport java.util.Deque;\n\npublic class TaskQueueDemo {\n    public static void main(String[] args) {\n        Deque<String> testQueue = new ArrayDeque<>();\n\n        // FIFO Queue operations: offer / poll\n        testQueue.offer(\"SmokeTest_Login\");\n        testQueue.offer(\"SmokeTest_Checkout\");\n        testQueue.offer(\"Regression_Profile\");\n\n        while (!testQueue.isEmpty()) {\n            String nextTest = testQueue.poll();\n            System.out.println(\"Executing next test: \" + nextTest);\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-map-interface": {
    "id": "java-map-interface",
    "title": "Map Interface (HashMap, LinkedHashMap, TreeMap)",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/map-interface-in-java/",
    "description": "Deep dive into Key-Value storage in Java: internal hashing bucket mechanism, collision treeification (Java 8+), and iterating entrySet().",
    "sections": [
      {
        "id": "hashmap-internals",
        "heading": "How HashMap Works Internally in Java",
        "paragraphs": [
          "HashMap stores data in an array of Node<K,V> buckets. When putting a key-value pair:",
          "1. hashCode() is computed on the key and passed through an internal bit-spreading hash function.",
          "2. Bucket index is computed: index = hash & (n - 1).",
          "3. If collision occurs, nodes are chained in a LinkedList. When a bucket reaches 8 nodes (TREEIFY_THRESHOLD) and table capacity >= 64, the list converts to a balanced Red-Black Tree, improving lookup from O(n) to O(log n)."
        ]
      }
    ]
  },
  "java-iterators-comparators": {
    "id": "java-iterators-comparators",
    "title": "Iterators, Comparable & Comparator in Java",
    "category": "Collections",
    "sourceUrl": "https://www.geeksforgeeks.org/iterators-in-java/",
    "description": "Master safe collection iteration with Iterator (preventing ConcurrentModificationException) and compare natural sorting (Comparable) with custom sorting (Comparator).",
    "sections": [
      {
        "id": "iterator-safety",
        "heading": "Safe Removal with Iterator vs For-Each Loop",
        "codeBlocks": [
          {
            "title": "SafeIteratorDemo.java",
            "language": "java",
            "code": "import java.util.ArrayList;\nimport java.util.Iterator;\nimport java.util.List;\n\npublic class SafeIteratorDemo {\n    public static void main(String[] args) {\n        List<String> tests = new ArrayList<>(List.of(\"test1\", \"skip_test2\", \"test3\"));\n\n        // WRONG: Modifying list during enhanced for-each throws ConcurrentModificationException!\n        // for (String t : tests) { if (t.startsWith(\"skip\")) tests.remove(t); }\n\n        // CORRECT: Using Iterator.remove()\n        Iterator<String> it = tests.iterator();\n        while (it.hasNext()) {\n            if (it.next().startsWith(\"skip\")) {\n                it.remove(); // Safely removes current element\n            }\n        }\n        System.out.println(\"Active tests: \" + tests);\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-lambda-expressions": {
    "id": "java-lambda-expressions",
    "title": "Lambda Expressions & Functional Syntax in Java",
    "category": "Java 8+ Features",
    "sourceUrl": "https://www.geeksforgeeks.org/lambda-expressions-java-8/",
    "description": "Write concise, expressive Java using arrow syntax (params) -> { body }, lexical scoping, effectively final variables, and lambda-powered explicit waits.",
    "sections": [
      {
        "id": "lambda-syntax",
        "heading": "Lambda Expression Anatomy",
        "codeBlocks": [
          {
            "title": "LambdaSyntaxDemo.java",
            "language": "java",
            "code": "// Traditional Anonymous Inner Class:\nRunnable r1 = new Runnable() {\n    @Override\n    public void run() {\n        System.out.println(\"Running test task\");\n    }\n};\n\n// Concise Java 8 Lambda Expression:\nRunnable r2 = () -> System.out.println(\"Running test task\");"
          }
        ]
      }
    ]
  },
  "java-functional-interfaces-builtins": {
    "id": "java-functional-interfaces-builtins",
    "title": "Built-in Functional Interfaces (Predicate, Consumer, Supplier, Function)",
    "category": "Java 8+ Features",
    "sourceUrl": "https://www.geeksforgeeks.org/java-8-predicate-with-examples/",
    "description": "Master java.util.function interfaces: Predicate<T> (boolean test), Consumer<T> (void accept), Supplier<T> (T get), and Function<T,R> (transform R apply).",
    "sections": [
      {
        "id": "builtin-interfaces-table",
        "heading": "The 4 Core Functional Interfaces",
        "table": {
          "headers": [
            "Interface",
            "Method Signature",
            "Purpose",
            "Test Automation Example"
          ],
          "rows": [
            [
              "Predicate<T>",
              "boolean test(T t)",
              "Evaluates a condition returning true/false",
              "Predicate<String> isValidEmail = s -> s.contains(\"@\");"
            ],
            [
              "Consumer<T>",
              "void accept(T t)",
              "Performs side-effect action without returning",
              "Consumer<WebElement> highlight = el -> js.executeScript(\"style.border='2px solid red'\", el);"
            ],
            [
              "Supplier<T>",
              "T get()",
              "Supplies a value without taking input",
              "Supplier<WebDriver> driverSupplier = () -> new ChromeDriver(); (Lazy driver initialization)"
            ],
            [
              "Function<T, R>",
              "R apply(T t)",
              "Transforms an input into an output",
              "Function<WebElement, String> getText = el -> el.getText().trim();"
            ]
          ]
        }
      }
    ]
  },
  "java-stream-api-complete": {
    "id": "java-stream-api-complete",
    "title": "Stream API (Filter, Map, FlatMap, Reduce)",
    "category": "Java 8+ Features",
    "sourceUrl": "https://www.geeksforgeeks.org/java-8-stream-tutorial/",
    "description": "Transform collections into declarative pipelines using intermediate operations (filter, map, sorted) and terminal operations (collect, findFirst, reduce).",
    "sections": [
      {
        "id": "stream-pipeline-code",
        "heading": "Filtering and Transforming Elements with Streams",
        "codeBlocks": [
          {
            "title": "StreamPipelineDemo.java",
            "language": "java",
            "code": "import java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamPipelineDemo {\n    public static void main(String[] args) {\n        List<String> rawPrices = List.of(\"$19.99\", \"$4.50\", \"N/A\", \"$120.00\", \"$49.99\");\n\n        // Declarative stream pipeline\n        List<Double> validPricesSorted = rawPrices.stream()\n            .filter(price -> price.startsWith(\"$\"))                // Intermediate: keep valid currency\n            .map(price -> Double.parseDouble(price.substring(1)))   // Intermediate: transform String -> Double\n            .filter(num -> num > 10.0)                             // Intermediate: prices over $10\n            .sorted()                                              // Intermediate: ascending sort\n            .collect(Collectors.toList());                         // Terminal: accumulate results\n\n        System.out.println(\"Extracted Prices: \" + validPricesSorted); // [19.99, 49.99, 120.0]\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-optional-collectors": {
    "id": "java-optional-collectors",
    "title": "Optional Class & Stream Collectors in Java",
    "category": "Java 8+ Features",
    "sourceUrl": "https://www.geeksforgeeks.org/java-8-optional-class/",
    "description": "Eliminate NullPointerException with java.util.Optional (isPresent, ifPresent, orElse, orElseThrow) and group data with Collectors (groupingBy, joining).",
    "sections": [
      {
        "id": "optional-idiom",
        "heading": "Defensive Coding with Optional",
        "codeBlocks": [
          {
            "title": "OptionalDemo.java",
            "language": "java",
            "code": "import java.util.Optional;\n\npublic class OptionalDemo {\n    public static Optional<String> findUserAuthToken(String userId) {\n        if (\"user_123\".equals(userId)) {\n            return Optional.of(\"jwt_token_abc_xyz\");\n        }\n        return Optional.empty(); // Clean representation of absence (no null!)\n    }\n\n    public static void main(String[] args) {\n        String token = findUserAuthToken(\"guest\")\n            .orElse(\"anonymous_guest_token\");\n        System.out.println(\"Using Token: \" + token);\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-datetime-api": {
    "id": "java-datetime-api",
    "title": "Date & Time API (LocalDate, LocalTime, LocalDateTime)",
    "category": "Date and Time API",
    "sourceUrl": "https://www.geeksforgeeks.org/new-date-time-api-java8/",
    "description": "Work with modern, immutable, thread-safe date and time abstractions in java.time (LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Instant).",
    "sections": [
      {
        "id": "datetime-classes",
        "heading": "Modern java.time Classes",
        "table": {
          "headers": [
            "Class",
            "Represents",
            "Example",
            "QA Automation Application"
          ],
          "rows": [
            [
              "LocalDate",
              "Date without time (year-month-day)",
              "2026-10-14",
              "Date picker inputs, date of birth validation"
            ],
            [
              "LocalTime",
              "Time without date (hour:minute:second)",
              "18:30:45",
              "Time slot selectors, flight departure times"
            ],
            [
              "LocalDateTime",
              "Both date and time (no timezone)",
              "2026-10-14T18:30:45",
              "Generating unique order IDs: Order_\" + LocalDateTime.now()"
            ],
            [
              "Instant",
              "Point on timeline in UTC (Unix epoch)",
              "2026-10-14T13:00:45Z",
              "Timestamping test run logs, benchmarking execution duration"
            ]
          ]
        }
      }
    ]
  },
  "java-duration-period-formatting": {
    "id": "java-duration-period-formatting",
    "title": "Duration, Period & DateTimeFormatter in Java",
    "category": "Date and Time API",
    "sourceUrl": "https://www.geeksforgeeks.org/java-time-format-datetimeformatterbuilder-class-in-java/",
    "description": "Measure time differences with Duration (seconds/nanos) and Period (days/months), and parse/format custom date strings using DateTimeFormatter.",
    "sections": [
      {
        "id": "formatting-code",
        "heading": "Formatting and Parsing Custom Date Strings",
        "codeBlocks": [
          {
            "title": "DateFormatDemo.java",
            "language": "java",
            "code": "import java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class DateFormatDemo {\n    public static void main(String[] args) {\n        LocalDateTime now = LocalDateTime.now();\n\n        // Custom formatting pattern\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd-MMM-yyyy HH:mm:ss\");\n        String formattedDate = now.format(formatter);\n        System.out.println(\"Formatted Test Run: \" + formattedDate); // 14-Oct-2026 18:35:10\n\n        // Parsing String back into LocalDate\n        DateTimeFormatter parser = DateTimeFormatter.ofPattern(\"MM/dd/yyyy\");\n        java.time.LocalDate parsed = java.time.LocalDate.parse(\"10/14/2026\", parser);\n        System.out.println(\"Parsed Year: \" + parsed.getYear());\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-multithreading-basics": {
    "id": "java-multithreading-basics",
    "title": "Thread Creation & Lifecycle (Thread vs Runnable)",
    "category": "Multithreading and Synchronization",
    "sourceUrl": "https://www.geeksforgeeks.org/multithreading-in-java/",
    "description": "Understand multithreading in Java: Thread class vs Runnable interface, start() vs run(), thread states (NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED).",
    "sections": [
      {
        "id": "thread-creation",
        "heading": "Creating Threads: Thread vs Runnable vs Lambda",
        "paragraphs": [
          "Java offers two primary ways to create a thread: extending Thread or implementing Runnable. Implementing Runnable is strongly favored because Java does not support multiple class inheritance."
        ],
        "codeBlocks": [
          {
            "title": "ThreadDemo.java",
            "language": "java",
            "code": "public class ThreadDemo {\n    public static void main(String[] args) {\n        // Modern approach: Runnable via lambda passed to Thread\n        Thread workerThread = new Thread(() -> {\n            System.out.println(\"Worker thread executing: \" + Thread.currentThread().getName());\n        });\n\n        workerThread.setName(\"TestExecutionWorker-1\");\n        workerThread.start(); // Spawns new OS thread and invokes run()\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-synchronization-locks": {
    "id": "java-synchronization-locks",
    "title": "Synchronization, volatile & ReentrantLock",
    "category": "Multithreading and Synchronization",
    "sourceUrl": "https://www.geeksforgeeks.org/synchronization-in-java/",
    "description": "Prevent race conditions on shared data using synchronized methods/blocks, memory visibility with volatile, and explicit ReentrantLock.",
    "sections": [
      {
        "id": "race-conditions",
        "heading": "Preventing Race Conditions with synchronized",
        "codeBlocks": [
          {
            "title": "SynchronizedCounter.java",
            "language": "java",
            "code": "public class SynchronizedCounter {\n    private int passedTests = 0;\n\n    // synchronized ensures only one thread increments passedTests at a time\n    public synchronized void recordPass() {\n        passedTests++;\n    }\n\n    public synchronized int getCount() {\n        return passedTests;\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-deadlock-prevention": {
    "id": "java-deadlock-prevention",
    "title": "Deadlock Detection & Prevention in Java",
    "category": "Multithreading and Synchronization",
    "sourceUrl": "https://www.geeksforgeeks.org/deadlock-in-java-multithreading/",
    "description": "Analyze the 4 conditions required for deadlock (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) and strategies to prevent lock freezing.",
    "sections": [
      {
        "id": "deadlock-prevention-strategies",
        "heading": "Strategies to Avoid Deadlocks",
        "paragraphs": [
          "1. Lock Ordering: Always acquire locks in the exact same global sequence across all threads.",
          "2. Lock Timeout: Use tryLock(timeout, unit) from ReentrantLock instead of blocking indefinitely with synchronized.",
          "3. Minimize Lock Scope: Hold locks for the absolute minimum number of instructions necessary."
        ]
      }
    ]
  },
  "java-thread-pools-executors": {
    "id": "java-thread-pools-executors",
    "title": "Thread Pools, ExecutorService & ThreadLocal",
    "category": "Multithreading and Synchronization",
    "sourceUrl": "https://www.geeksforgeeks.org/thread-pools-java/",
    "description": "Manage concurrent worker threads with ExecutorService and maintain isolated driver states in parallel test execution using ThreadLocal<T>.",
    "sections": [
      {
        "id": "threadlocal-driver",
        "heading": "ThreadLocal WebDriver in Parallel Test Execution",
        "codeBlocks": [
          {
            "title": "DriverManager.java",
            "language": "java",
            "code": "public class DriverManager {\n    // ThreadLocal ensures each thread has its own isolated WebDriver instance\n    private static final ThreadLocal<String> driverThreadLocal = new ThreadLocal<>();\n\n    public static void setDriver(String driverInstance) {\n        driverThreadLocal.set(driverInstance);\n    }\n\n    public static String getDriver() {\n        return driverThreadLocal.get();\n    }\n\n    public static void unload() {\n        driverThreadLocal.remove(); // CRITICAL: Always remove to prevent memory leaks in thread pools!\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-io-file-handling": {
    "id": "java-io-file-handling",
    "title": "File Handling & Java NIO (Paths & Files)",
    "category": "File Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/file-handling-in-java/",
    "description": "Read, write, create, and delete files in Java using classic java.io.File and high-performance modern java.nio.file.Files and Paths.",
    "sections": [
      {
        "id": "modern-nio-files",
        "heading": "Modern File Operations with java.nio.file.Files",
        "codeBlocks": [
          {
            "title": "FileOperationsDemo.java",
            "language": "java",
            "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class FileOperationsDemo {\n    public static void main(String[] args) throws IOException {\n        Path reportPath = Paths.get(\"target/test-report.txt\");\n\n        // 1. Write lines to file\n        List<String> lines = List.of(\"Test Suite: Smoke\", \"Status: PASSED\", \"Total: 42\");\n        Files.write(reportPath, lines);\n\n        // 2. Read all lines back\n        List<String> readLines = Files.readAllLines(reportPath);\n        for (String line : readLines) {\n            System.out.println(\"LOG: \" + line);\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-buffered-streams": {
    "id": "java-buffered-streams",
    "title": "BufferedReader, BufferedWriter & Streams in Java",
    "category": "File Handling",
    "sourceUrl": "https://www.geeksforgeeks.org/java-io-bufferedreader-class-java/",
    "description": "Efficient line-by-line file reading and writing using buffered character streams and FileInputStream / FileOutputStream for binary payloads.",
    "sections": [
      {
        "id": "buffered-reader-example",
        "heading": "Reading Large Log Files Line-by-Line",
        "codeBlocks": [
          {
            "title": "LogReaderDemo.java",
            "language": "java",
            "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class LogReaderDemo {\n    public static void parseErrorLogs(String filePath) {\n        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                if (line.contains(\"ERROR\") || line.contains(\"FATAL\")) {\n                    System.err.println(\"ALERT: \" + line);\n                }\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-networking-sockets": {
    "id": "java-networking-sockets",
    "title": "Socket Programming (Client & ServerSocket in Java)",
    "category": "Networking",
    "sourceUrl": "https://www.geeksforgeeks.org/socket-programming-in-java/",
    "description": "Understand TCP socket programming in Java: ServerSocket listening on ports, Socket connection establishment, and bidirectional I/O streams.",
    "sections": [
      {
        "id": "tcp-socket-architecture",
        "heading": "TCP Client-Server Socket Architecture",
        "paragraphs": [
          "Socket programming enables communication between two nodes over a network. A ServerSocket binds to a port and waits for client connections. A Socket connects to the server IP and port."
        ]
      }
    ]
  },
  "java-http-url-connections": {
    "id": "java-http-url-connections",
    "title": "URL Class, HttpURLConnection & Modern HTTP Client",
    "category": "Networking",
    "sourceUrl": "https://www.geeksforgeeks.org/url-class-java-examples/",
    "description": "Connect to REST APIs, parse HTTP response codes, read headers, and leverage the modern Java 11+ java.net.http.HttpClient.",
    "sections": [
      {
        "id": "java11-http-client",
        "heading": "Modern Java 11+ HttpClient for API Automation",
        "codeBlocks": [
          {
            "title": "HttpClientDemo.java",
            "language": "java",
            "code": "import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class HttpClientDemo {\n    public static void main(String[] args) throws Exception {\n        HttpClient client = HttpClient.newHttpClient();\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(\"https://httpbin.org/get\"))\n            .header(\"Accept\", \"application/json\")\n            .GET()\n            .build();\n\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n\n        System.out.println(\"HTTP Status: \" + response.statusCode());\n        System.out.println(\"Response Body: \" + response.body());\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-jdbc-architecture": {
    "id": "java-jdbc-architecture",
    "title": "JDBC Architecture & Drivers in Java",
    "category": "Java Database Connectivity(JDBC)",
    "sourceUrl": "https://www.geeksforgeeks.org/introduction-to-jdbc/",
    "description": "Master Java Database Connectivity (JDBC) 4-tier architecture, JDBC driver types (Type 4 Direct-to-Database Pure Java Thin Driver), and connection URLs.",
    "sections": [
      {
        "id": "jdbc-drivers-table",
        "heading": "4 Types of JDBC Drivers",
        "table": {
          "headers": [
            "Type",
            "Name",
            "Architecture",
            "Status & Industry Recommendation"
          ],
          "rows": [
            [
              "Type 1",
              "JDBC-ODBC Bridge",
              "Translates JDBC calls to ODBC calls via native C code",
              "Deprecated & removed in Java 8."
            ],
            [
              "Type 2",
              "Native-API Driver",
              "Converts JDBC calls into vendor-specific client API calls",
              "Requires client installation; rarely used."
            ],
            [
              "Type 3",
              "Network Protocol Driver",
              "Sends JDBC calls through an intermediate application server",
              "Complex setup; superseded by Type 4."
            ],
            [
              "Type 4",
              "Thin Driver (Pure Java)",
              "Communicates directly with database server using database vendor protocol",
              "Standard industry choice (e.g. PostgreSQL, MySQL, Oracle thin drivers)."
            ]
          ]
        }
      }
    ]
  },
  "java-jdbc-statements-results": {
    "id": "java-jdbc-statements-results",
    "title": "PreparedStatement, Queries & ResultSet in JDBC",
    "category": "Java Database Connectivity(JDBC)",
    "sourceUrl": "https://www.geeksforgeeks.org/types-of-statements-in-jdbc/",
    "description": "Execute SQL queries, prevent SQL injection vulnerabilities using parameterized PreparedStatement, and extract row data from ResultSet.",
    "sections": [
      {
        "id": "prepared-statement-code",
        "heading": "Safe Database Verification in QA Automation",
        "codeBlocks": [
          {
            "title": "DatabaseVerificationHelper.java",
            "language": "java",
            "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.PreparedStatement;\nimport java.sql.ResultSet;\n\npublic class DatabaseVerificationHelper {\n    private static final String DB_URL = \"jdbc:postgresql://localhost:5432/testdb\";\n    private static final String DB_USER = \"postgres\";\n    private static final String DB_PASS = \"secret\";\n\n    public static String getOrderStatus(String orderId) {\n        String sql = \"SELECT status FROM orders WHERE order_id = ?\";\n        // Try-with-resources closes connection, statement, and result set automatically\n        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);\n             PreparedStatement stmt = conn.prepareStatement(sql)) {\n            stmt.setString(1, orderId); // Parameterized query prevents SQL injection\n            try (ResultSet rs = stmt.executeQuery()) {\n                if (rs.next()) {\n                    return rs.getString(\"status\");\n                }\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        return null;\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-jdbc-transactions-pooling": {
    "id": "java-jdbc-transactions-pooling",
    "title": "Transactions, Savepoints & HikariCP Connection Pooling",
    "category": "Java Database Connectivity(JDBC)",
    "sourceUrl": "https://www.geeksforgeeks.org/transactions-in-jdbc/",
    "description": "Manage database transactions (commit, rollback, setAutoCommit(false)), handle transaction isolation levels, and configure HikariCP connection pools.",
    "sections": [
      {
        "id": "transaction-management",
        "heading": "ACID Transactions in JDBC",
        "paragraphs": [
          "By default, JDBC operates in auto-commit mode where every query commits immediately. For multi-step business transactions:",
          "1. Disable auto-commit: conn.setAutoCommit(false);",
          "2. Execute statements.",
          "3. On success: conn.commit();",
          "4. On exception: conn.rollback(); in the catch block."
        ]
      }
    ]
  },
  "java-coding-practice-problems": {
    "id": "java-coding-practice-problems",
    "title": "Top Coding Practice Problems & DSA Drills",
    "category": "Quiz and Coding Practice",
    "sourceUrl": "https://www.geeksforgeeks.org/java-coding-practice-problems-1/",
    "description": "Hands-on coding problems frequently asked in Java automation interviews: string reversals, palindrome checks, array duplicates, and character frequency maps.",
    "sections": [
      {
        "id": "top-coding-problems",
        "heading": "Core Coding Problems with Solutions",
        "codeBlocks": [
          {
            "title": "TopPracticeSolutions.java",
            "language": "java",
            "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class TopPracticeSolutions {\n    // 1. Reverse a string without built-in reverse()\n    public static String reverseString(String input) {\n        if (input == null) return null;\n        char[] chars = input.toCharArray();\n        int left = 0, right = chars.length - 1;\n        while (left < right) {\n            char temp = chars[left];\n            chars[left] = chars[right];\n            chars[right] = temp;\n            left++;\n            right--;\n        }\n        return new String(chars);\n    }\n\n    // 2. Count character frequencies in a string\n    public static Map<Character, Integer> countFrequencies(String input) {\n        Map<Character, Integer> counts = new HashMap<>();\n        for (char c : input.toCharArray()) {\n            counts.put(c, counts.getOrDefault(c, 0) + 1);\n        }\n        return counts;\n    }\n}"
          }
        ]
      }
    ]
  },
  "java-quizzes-drills": {
    "id": "java-quizzes-drills",
    "title": "Topic-wise Quizzes & Code Output Drills",
    "category": "Quiz and Coding Practice",
    "sourceUrl": "https://www.geeksforgeeks.org/java-quiz/",
    "description": "Test your Java mastery with tricky code output prediction puzzles, operator precedence challenges, and common traps in object references.",
    "sections": [
      {
        "id": "tricky-puzzles",
        "heading": "Top Tricky Java Output Puzzles",
        "paragraphs": [
          "Puzzle 1: System.out.println(10 + 20 + \"Hello\"); vs System.out.println(\"Hello\" + 10 + 20);",
          "Answer: '30Hello' vs 'Hello1020'. The + operator is left-associative; in the first case arithmetic addition occurs before concatenation. In the second, String concatenation turns subsequent operands into Strings."
        ]
      }
    ]
  },
  "java-core-interview-questions": {
    "id": "java-core-interview-questions",
    "title": "Top 50 Core Java Interview Questions & Answers",
    "category": "Interview Questions",
    "sourceUrl": "https://www.geeksforgeeks.org/java-interview-questions/",
    "description": "Curated answers to the most frequently asked Core Java interview questions: JVM internal memory, String immutability, equals vs hashCode, and abstract class vs interface.",
    "sections": [
      {
        "id": "top-interview-qna",
        "heading": "Top Core Java Interview Questions",
        "table": {
          "headers": [
            "Question",
            "Core Answer & Key Points"
          ],
          "rows": [
            [
              "Why is String immutable in Java?",
              "Security (parameters, network URLs), Thread-safety (shared without locks), and String Constant Pool caching."
            ],
            [
              "What is the difference between == and .equals()?",
              "== compares memory addresses (reference equality). .equals() compares character/field content."
            ],
            [
              "Can main() method be overloaded in Java?",
              "Yes, you can have multiple main() methods with different parameter signatures, but the JVM will only invoke public static void main(String[] args)."
            ],
            [
              "Why is Java not 100% object-oriented?",
              "Because it retains 8 primitive types (int, boolean, char, etc.) for performance rather than wrapping everything as an object."
            ],
            [
              "What is the diamond problem and how does Java solve it?",
              "Multiple inheritance ambiguity. Java classes do not allow multiple inheritance; default interface methods require explicit class disambiguation."
            ]
          ]
        }
      }
    ]
  },
  "java-advanced-automation-interview": {
    "id": "java-advanced-automation-interview",
    "title": "Advanced Java & Automation Interview Questions",
    "category": "Interview Questions",
    "sourceUrl": "https://www.geeksforgeeks.org/advance-java/advanced-java-interview-questions/",
    "description": "High-level interview questions for Senior QA Automation Engineers: ThreadLocal driver isolation, reflection API in test frameworks, custom annotations, and flaky test retry logic.",
    "sections": [
      {
        "id": "advanced-qa-qna",
        "heading": "Senior QA Automation Architecture Questions",
        "table": {
          "headers": [
            "Architecture Question",
            "Principal Answer"
          ],
          "rows": [
            [
              "How do you achieve thread-safe parallel test execution in Java?",
              "By wrapping the WebDriver instance inside a ThreadLocal<WebDriver> container and removing it in an @AfterMethod teardown."
            ],
            [
              "How does TestNG @DataProvider work under the hood?",
              "It uses Java Reflection to inspect method signatures and feeds each row of an Object[][] as parameters into the @Test method."
            ],
            [
              "How do you implement automatic test retries?",
              "Implement TestNG's IRetryAnalyzer interface: track a retryCount against maxRetryCount, returning true on retryable failure exceptions."
            ]
          ]
        }
      }
    ]
  }
};
