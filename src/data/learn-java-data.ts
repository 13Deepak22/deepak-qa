import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const JAVA_CATEGORIES: DocCategory[] = [
  {
    title: "Basics",
    defaultOpen: true,
    items: [
      { id: "java-getting-started", text: "Java Setup & First Program" },
      { id: "java-keywords-types", text: "Keywords, Variables & Data Types" },
      { id: "java-operators-expressions", text: "Operators & Expressions" },
      { id: "java-control-flow", text: "If-Else & Modern Switch" },
      { id: "java-loops-iteration", text: "Loops & Dynamic Polling" },
      { id: "java-methods", text: "Methods, Overloading & Varargs" },
      { id: "java-arrays", text: "Arrays & Array Utilities" },
      { id: "java-strings-regex", text: "Strings, StringBuilder & Regex" },
    ],
  },
  {
    title: "OOP & Interface",
    defaultOpen: false,
    items: [
      { id: "java-oops-fundamentals", text: "Classes, Objects & Constructors" },
      { id: "java-oops-pillars", text: "4 OOP Pillars & Interfaces in POM" },
    ],
  },
  {
    title: "Collections",
    defaultOpen: false,
    items: [
      { id: "java-generics", text: "Generics & Type Safety" },
      { id: "java-collections", text: "Collections Framework (List, Set, Map)" },
    ],
  },
  {
    title: "Advance Java Concepts",
    defaultOpen: false,
    items: [
      { id: "java-exception-handling", text: "Exception Handling & Retries" },
      { id: "java-file-io-properties", text: "File Handling & Config Properties" },
      { id: "java-streams-lambdas", text: "Lambdas, Streams & Optional" },
      { id: "java-multithreading", text: "Multithreading & Synchronization" },
      { id: "java-jdbc", text: "JDBC Database Connectivity" },
    ],
  },
  {
    title: "Practice Java",
    defaultOpen: false,
    items: [
      { id: "java-testng-framework", text: "TestNG Annotations & DataProvider" },
      { id: "java-parallel-threadlocal", text: "Parallelism & ThreadLocal Driver" },
    ],
  },
];

export const JAVA_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. GETTING STARTED & SETUP                                    */
  /* ------------------------------------------------------------- */
  "java-getting-started": {
    id: "java-getting-started",
    title: "Java Getting Started: Architecture & Your First Program",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/java/java/",
    description: "Start Java from absolute zero: history, core features, JDK vs JRE vs JVM architecture, environment setup, and the complete line-by-line anatomy of a Java program.",
    sections: [
      {
        id: "what-is-java",
        heading: "What is Java & Why Learn It?",
        paragraphs: [
          "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Developed by James Gosling at Sun Microsystems (now Oracle) in 1995, Java's defining principle is 'Write Once, Run Anywhere' (WORA).",
          "In modern software engineering and QA automation, Java is the backbone of enterprise test automation frameworks including Selenium WebDriver, Appium (mobile testing), RestAssured (REST API automation), and Apache JMeter (performance engineering).",
        ],
        table: {
          headers: ["Java Feature", "Definition", "Benefit in Test Automation"],
          rows: [
            ["Platform Independent", "Compiles to bytecode (.class) executable on any OS with a JVM.", "Run the identical test suite across Windows developer machines, Linux CI/CD Docker containers, and macOS nodes."],
            ["Object-Oriented", "Organizes code into reusable Classes, Objects, and Inheritance hierarchies.", "Foundation of the Page Object Model (POM), eliminating code duplication."],
            ["Statically Typed", "Variable types checked strictly at compile-time before execution.", "Catches typos in element locators, invalid payload models, and missing parameters before tests launch."],
            ["Robust Memory", "Automatic Garbage Collection and strong memory management.", "Prevents memory leaks in large test suites running thousands of scenarios overnight."],
            ["Multithreaded", "Built-in support for concurrent thread execution.", "Powers parallel test execution across multiple browser instances simultaneously."],
          ],
        },
      },
      {
        id: "jdk-jre-jvm",
        heading: "JVM, JRE, and JDK Architecture Explained",
        paragraphs: [
          "Understanding the relationship between the JDK, JRE, and JVM is fundamental:",
        ],
        codeBlocks: [
          {
            title: "Java Platform Architecture",
            language: "bash",
            code: `┌─────────────────────────────────────────────────────────────┐
│ JDK (Java Development Kit)                                  │
│  - javac (Java Compiler)                                    │
│  - jdb (Debugger), javadoc, jar packager                    │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ JRE (Java Runtime Environment)                          │ │
│ │  - Standard Class Libraries (rt.jar, java.base)         │ │
│ │ ┌─────────────────────────────────────────────────────┐ │ │
│ │ │ JVM (Java Virtual Machine)                          │ │ │
│ │ │  - ClassLoader Subsystem                            │ │ │
│ │ │  - Memory Areas (Heap, Stack, Metaspace)            │ │ │
│ │ │  - Execution Engine (JIT Compiler, Interpreter, GC) │ │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘`,
          },
        ],
      },
      {
        id: "first-java-program",
        heading: "Line-by-Line Anatomy of Your First Java Program",
        paragraphs: [
          "Every Java program consists of at least one class definition and an entry point method named `main`:",
        ],
        codeBlocks: [
          {
            title: "HelloWorld.java",
            language: "java",
            code: `public class HelloWorld {
    // The entry point where the JVM begins execution
    public static void main(String[] args) {
        // System.out represents standard console output
        System.out.println("Hello, DeepakQA! Starting Java from zero.");
    }
}`,
          },
        ],
        table: {
          headers: ["Keyword / Component", "Role & Technical Explanation"],
          rows: [
            ["`public` (class)", "Access modifier making the class visible to the JVM and all external packages."],
            ["`class HelloWorld`", "Defines the class named 'HelloWorld'. In Java, file name must match the public class (`HelloWorld.java`)."],
            ["`public` (method)", "Allows the JVM runtime engine to invoke the `main` method from outside the class."],
            ["`static`", "Allows the JVM to call `main()` directly without needing to instantiate an object of `HelloWorld` first."],
            ["`void`", "Specifies that the `main` method does not return any value back to the operating system."],
            ["`main`", "The mandatory identifier recognized by JVM as the initial startup hook of any standalone application."],
            ["`String[] args`", "Array of String command-line arguments passed when launching the program (e.g. `java HelloWorld chrome staging`)."],
            ["`System.out.println()`", "`System` is a built-in class, `out` is standard output stream PrintStream, `println` prints text with a trailing newline."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. 50+ KEYWORDS & VARIABLES                                   */
  /* ------------------------------------------------------------- */
  "java-keywords-types": {
    id: "java-keywords-types",
    title: "Java 50+ Reserved Keywords, Data Types & Variables Directory",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/java-keywords/",
    description: "Complete encyclopedia of all 50+ Java reserved keywords categorized by purpose, along with primitive vs wrapper types, memory sizes, and variable scoping.",
    sections: [
      {
        id: "keywords-encyclopedia",
        heading: "Comprehensive 50+ Java Reserved Keywords Directory",
        paragraphs: [
          "Java reserves 50+ keywords that cannot be used as variable names, class names, or method identifiers. Below is the complete directory of Java keywords classified by operational role with direct QA testing applications:",
        ],
        table: {
          headers: ["Category", "Keyword", "Core Purpose", "Real-World Test Automation Application"],
          rows: [
            ["Access Modifiers", "`public`", "Accessible everywhere across all packages", "Test classes (`public class LoginTest`), public page methods (`public void submitForm()`)."],
            ["Access Modifiers", "`protected`", "Accessible within same package and subclasses", "BasePage methods (`protected void click(By locator)`) accessible by child page objects."],
            ["Access Modifiers", "`private`", "Accessible only within same class", "Page Object locators (`private final By submitBtn = By.id('submit');`) to enforce encapsulation."],
            ["Class & Structure", "`class`", "Declares a class blueprint", "Page Objects, Test Suites, TestNG Listener classes, and Utility helpers."],
            ["Class & Structure", "`interface`", "Declares an abstract contract", "`WebDriver`, `WebElement`, `SearchContext`, and custom API clients."],
            ["Class & Structure", "`enum`", "Defines a fixed set of constants", "Browser types (`Browser.CHROME, Browser.FIREFOX`), Environment targets (`Env.QA, Env.STAGE`)."],
            ["Class & Structure", "`extends`", "Inherits from a parent class", "All Page Objects extend `BasePage`; all Test classes extend `BaseTest`."],
            ["Class & Structure", "`implements`", "Implements an interface contract", "Custom listeners implementing `ITestListener` or `IAnnotationTransformer`."],
            ["Class & Structure", "`package`", "Declares namespace for current file", "Organizing framework into `pages`, `tests`, `utils`, `driver`, and `models`."],
            ["Class & Structure", "`import`", "Brings external classes into scope", "Importing Selenium classes (`import org.openqa.selenium.WebDriver;`)."],
            ["Flow Control", "`if` / `else`", "Conditional branching execution", "Asserting UI state, switching execution paths based on feature flags."],
            ["Flow Control", "`switch` / `case`", "Multi-branch decision logic", "Browser factory setup, Environment base URL resolution, HTTP status codes."],
            ["Flow Control", "`default`", "Fallback branch in switch", "Defaulting to headless Chrome when no browser flag is specified."],
            ["Flow Control", "`break`", "Exits out of a loop or switch", "Stopping element search loop immediately once target item is matched."],
            ["Flow Control", "`continue`", "Skips remainder of current loop iteration", "Skipping disabled/hidden table rows while iterating search results."],
            ["Flow Control", "`return`", "Exits method and provides return value", "Returning text extracted from an alert or returning a new Page Object for fluent chaining."],
            ["Flow Control", "`for`", "Indexed iteration loop", "Iterating through paginated grids, row-by-row table comparisons."],
            ["Flow Control", "`while`", "Pre-condition polling loop", "Polling dynamic DOM state or polling background async jobs via REST API."],
            ["Flow Control", "`do`", "Post-condition iteration loop", "Guaranteed at least one execution: retry clicking a flaky element."],
            ["Exception Handling", "`try` / `catch`", "Guards and handles runtime errors", "Handling `NoSuchElementException`, `StaleElementReferenceException` gracefully."],
            ["Exception Handling", "`finally`", "Cleanup block executed unconditionally", "Quitting WebDriver instances, closing file streams, releasing database connections."],
            ["Exception Handling", "`throw`", "Explicitly fires an exception", "Throwing `SkipException` in TestNG when environment prerequisites fail."],
            ["Exception Handling", "`throws`", "Declares exceptions in method signature", "`public void readFile() throws IOException` for checked exceptions."],
            ["Modifiers", "`final`", "Prevents modification, overriding, inheritance", "Constants (timeouts, base URLs), immutable Page locators, final utility classes."],
            ["Modifiers", "`static`", "Belongs to class rather than instances", "Framework constants (`ConfigReader.TIMEOUT`), singleton driver container."],
            ["Modifiers", "`abstract`", "Cannot be instantiated directly", "`BasePage` or `BaseApiTest` providing common architecture."],
            ["Modifiers", "`synchronized`", "Restricts thread access to one at a time", "Thread-safe screenshot capture or synchronized reporting loggers."],
            ["Modifiers", "`volatile`", "Ensures immediate variable visibility across threads", "Status flags shared between worker threads in parallel test runners."],
            ["Context & References", "`this`", "Refers to current class instance", "Initializing page driver: `this.driver = driver;`."],
            ["Context & References", "`super`", "Refers to immediate parent class", "Calling parent constructor: `super(driver);` in Page Objects."],
            ["Context & References", "`new`", "Allocates memory and instantiates object", "`WebDriver driver = new ChromeDriver();`."],
            ["Context & References", "`instanceof`", "Tests runtime type of an object", "Verifying whether an error is `StaleElementReferenceException`."],
            ["Context & References", "`void`", "Specifies method returns no value", "Setup and teardown hooks: `public void setUp()`."],
            ["Modern Java Keywords", "`var`", "Local variable type inference (Java 10+)", "`var elements = driver.findElements(By.tagName('a'));`."],
            ["Modern Java Keywords", "`record`", "Compact immutable data carriers (Java 16+)", "Modeling API JSON payloads and test user fixtures in a single line."],
            ["Modern Java Keywords", "`yield`", "Returns value from switch expression (Java 14+)", "Returning configured driver options from modern multi-line switch branches."],
          ],
        },
      },
      {
        id: "primitives-vs-wrappers",
        heading: "8 Primitive Data Types vs Wrapper Classes",
        table: {
          headers: ["Primitive Type", "Size (Bits)", "Default Value", "Wrapper Class", "Direct Automation Use Case"],
          rows: [
            ["`byte`", "8 bits", "0", "`Byte`", "Reading raw binary screenshot bytes or network packet buffers."],
            ["`short`", "16 bits", "0", "`Short`", "Compact numeric status codes in legacy systems."],
            ["`int`", "32 bits", "0", "`Integer`", "Timeouts, retry counters, HTTP status codes (200, 404), row counts."],
            ["`long`", "64 bits", "0L", "`Long`", "Epoch timestamps (`System.currentTimeMillis()`), database transaction IDs."],
            ["`float`", "32 bits", "0.0f", "`Float`", "Low-precision measurements, UI percentage offsets."],
            ["`double`", "64 bits", "0.0d", "`Double`", "Financial prices (`$149.99`), tax calculations, performance durations."],
            ["`boolean`", "1 bit (logical)", "false", "`Boolean`", "Assertions (`element.isDisplayed()`), headless mode flags."],
            ["`char`", "16 bits (Unicode)", "'\\u0000'", "`Character`", "Keyboard keystroke emulation (`Keys.ENTER`), parsing single characters."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. OPERATORS & EXPRESSIONS                                    */
  /* ------------------------------------------------------------- */
  "java-operators-expressions": {
    id: "java-operators-expressions",
    title: "Java Operators, Expressions & Precedence Hierarchy",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/operators-in-java/",
    description: "Master arithmetic, relational, logical, assignment, bitwise, and ternary operators with complete evaluation precedence tables used in test assertions.",
    sections: [
      {
        id: "operators-table",
        heading: "All Java Operators Categorized",
        table: {
          headers: ["Category", "Operator Symbols", "Operation Description", "Test Automation Example"],
          rows: [
            ["Arithmetic", "`+`, `-`, `*`, `/`, `%`", "Math calculations and string concatenation", "Total cart price: `subtotal + tax`, pagination: `page % 10`."],
            ["Relational", "`==`, `!=`, `>`, `<`, `>=`, `<=`", "Comparison returning boolean result", "Assert items found: `actualCount >= 1`."],
            ["Logical", "`&&`, `||`, `!`", "Short-circuit conditional logic", "Verify clickable AND displayed: `el.isDisplayed() && el.isEnabled()`."],
            ["Assignment", "`=`, `+=`, `-=`, `*=`, `/=`, `%=`", "Assigns calculated value to variable", "Accumulating total response time: `totalDuration += resTime`."],
            ["Unary", "`++`, `--`, `+`, `-`, `!`", "Prefix/postfix increment/decrement, negation", "Retry counter: `attempt++`, toggling flag: `!isClosed`."],
            ["Ternary", "`condition ? val1 : val2`", "Inline compact conditional expression", "Dynamic wait: `isHeadless ? 30 : 15`."],
            ["Type Comparison", "`instanceof`", "Checks whether object is instance of class", "Asserting exception type: `e instanceof StaleElementReferenceException`."],
          ],
        },
      },
      {
        id: "precedence-table",
        heading: "Operator Precedence & Associativity Hierarchy",
        paragraphs: [
          "When an expression has multiple operators, Java evaluates them in strict order of precedence (highest to lowest):",
        ],
        table: {
          headers: ["Precedence Level", "Operators", "Associativity"],
          rows: [
            ["1 (Highest)", "Parentheses `()`, Array subscript `[]`, Member access `.`", "Left to Right"],
            ["2 (Unary)", "Postfix `expr++`, `expr--`, Prefix `++expr`, `--expr`, Unary `+`, `-`, `!`, `~`", "Right to Left"],
            ["3 (Multiplicative)", "Multiplication `*`, Division `/`, Modulo `%`", "Left to Right"],
            ["4 (Additive)", "Addition `+`, Subtraction `-`", "Left to Right"],
            ["5 (Relational)", "Relational `<`, `<=`, `>`, `>=`, Type check `instanceof`", "Left to Right"],
            ["6 (Equality)", "Equal `==`, Not equal `!=`", "Left to Right"],
            ["7 (Logical AND)", "Logical short-circuit `&&`", "Left to Right"],
            ["8 (Logical OR)", "Logical short-circuit `||`", "Left to Right"],
            ["9 (Ternary)", "Conditional `? :`", "Right to Left"],
            ["10 (Assignment)", "Assignment `=`, `+=`, `-=`, `*=`, `/=`", "Right to Left"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. CONTROL FLOW & MODERN SWITCH                               */
  /* ------------------------------------------------------------- */
  "java-control-flow": {
    id: "java-control-flow",
    title: "Decision Making: If-Else & Modern Java 14+ Switch Expressions",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/decision-making-javaif-else-switch-break-continue-jump/",
    description: "Master if, if-else ladders, classic switch fallthrough, and modern Java 14+ switch expressions with arrow syntax (->) and yield for multi-browser drivers.",
    sections: [
      {
        id: "modern-switch-expressions",
        heading: "Modern Java 14+ Switch Expressions for Browser Drivers",
        codeBlocks: [
          {
            title: "Multi-Browser Driver Factory (Java 17+ Switch Expression)",
            language: "java",
            code: `package com.deepakqa.driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;

public class DriverFactory {
    public static WebDriver createDriver(String browserName, boolean headless) {
        String browser = (browserName == null) ? "chrome" : browserName.trim().toLowerCase();

        // Modern Java Switch Expression returning WebDriver directly
        return switch (browser) {
            case "chrome" -> {
                ChromeOptions options = new ChromeOptions();
                if (headless) options.addArguments("--headless=new", "--disable-gpu");
                options.addArguments("--window-size=1920,1080", "--no-sandbox");
                yield new ChromeDriver(options);
            }
            case "firefox" -> {
                FirefoxOptions options = new FirefoxOptions();
                if (headless) options.addArguments("-headless");
                yield new FirefoxDriver(options);
            }
            case "edge" -> {
                EdgeOptions options = new EdgeOptions();
                if (headless) options.addArguments("--headless=new");
                yield new EdgeDriver(options);
            }
            default -> throw new IllegalArgumentException("Unsupported browser: " + browser);
        };
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. LOOPS & ITERATION                                          */
  /* ------------------------------------------------------------- */
  "java-loops-iteration": {
    id: "java-loops-iteration",
    title: "Loops & Dynamic Polling: for, enhanced for-each, while & do-while",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/loops-in-java/",
    description: "Master classic indexed for loops, enhanced for-each for WebElement collections, while loops for polling dynamic DOM states, and do-while retries.",
    sections: [
      {
        id: "loop-types-comparison",
        heading: "Loop Mechanisms in Test Automation",
        table: {
          headers: ["Loop Type", "Evaluation Timing", "Best QA Automation Application"],
          rows: [
            ["Enhanced `for-each`", "Iterates every element in collection", "Iterating `List<WebElement>` to find matching text or click all checkboxes."],
            ["Classic `for (int i...)`", "Indexed iteration with counter", "Iterating paginated table rows where XPath index `//tr[i]` is needed."],
            ["`while (condition)`", "Pre-test condition checked before entry", "Polling until an asynchronous loading spinner disappears or status reaches 'COMPLETED'."],
            ["`do { ... } while ()`", "Post-test condition executed at least once", "Clicking a flaky UI button, checking if modal closed, and retrying if still present."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. METHODS, OVERLOADING & VARARGS                             */
  /* ------------------------------------------------------------- */
  "java-methods": {
    id: "java-methods",
    title: "Methods, Parameters, Method Overloading & Varargs",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/methods-in-java/",
    description: "Understand method declarations, pass-by-value semantics, method overloading, return types, static vs instance methods, and varargs (Type... args).",
    sections: [
      {
        id: "methods-overview",
        heading: "Method Anatomy & Pass by Value in Java",
        paragraphs: [
          "A method is a block of code which only runs when it is called. You can pass data (parameters) into a method, and it can return data as a result.",
          "**IMPORTANT:** Java is strictly **Pass-by-Value**. When passing an object reference to a method, the copy of the reference is passed by value, not the object itself.",
        ],
        codeBlocks: [
          {
            title: "Method Overloading & Varargs in Wait Utilities",
            language: "java",
            code: `public class WaitUtils {
    // Default wait with 10s timeout
    public static WebElement waitForElement(WebDriver driver, By locator) {
        return waitForElement(driver, locator, 10);
    }

    // Overloaded method with custom timeout
    public static WebElement waitForElement(WebDriver driver, By locator, int timeoutSeconds) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutSeconds));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    // Varargs: Accepts any number of locators (By... locators)
    public static WebElement waitForAny(WebDriver driver, By... locators) {
        for (By loc : locators) {
            List<WebElement> els = driver.findElements(loc);
            if (!els.isEmpty() && els.get(0).isDisplayed()) return els.get(0);
        }
        throw new NoSuchElementException("None of the provided locators were visible!");
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. ARRAYS & ARRAY UTILITIES                                   */
  /* ------------------------------------------------------------- */
  "java-arrays": {
    id: "java-arrays",
    title: "Java Arrays: 1D, 2D Matrices & java.util.Arrays Utilities",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/arrays-in-java/",
    description: "Master array creation, fixed memory allocation, multi-dimensional test data matrices for TestNG DataProviders, and java.util.Arrays helper methods.",
    sections: [
      {
        id: "arrays-in-qa",
        heading: "1D Arrays vs 2D Arrays in Test Automation",
        paragraphs: [
          "Arrays are fixed-size data structures that store elements of the same type in contiguous memory locations. In test automation, 2D arrays (`Object[][]`) are standard for TestNG `@DataProvider` test suites:",
        ],
        codeBlocks: [
          {
            title: "2D Object Array in TestNG DataProvider",
            language: "java",
            code: `import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import java.util.Arrays;

public class ArrayTestDemo {
    // 2D Array: Rows represent test cases, Columns represent parameters
    @DataProvider(name = "loginUsers")
    public Object[][] provideUserData() {
        return new Object[][] {
            { "standard_user", "secret_sauce", 200 },
            { "locked_out_user", "secret_sauce", 403 },
            { "problem_user", "secret_sauce", 200 }
        };
    }

    @Test(dataProvider = "loginUsers")
    public void testLogin(String user, String pass, int expectedStatus) {
        System.out.println("Testing user: " + user + " | Expected code: " + expectedStatus);
    }

    // Array manipulation using java.util.Arrays
    public static void main(String[] args) {
        int[] timeouts = { 30, 10, 60, 15 };
        Arrays.sort(timeouts); // In-place dual-pivot Quicksort: [10, 15, 30, 60]
        System.out.println("Sorted Timeouts: " + Arrays.toString(timeouts));
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. STRINGS, STRINGBUILDER & REGEX                             */
  /* ------------------------------------------------------------- */
  "java-strings-regex": {
    id: "java-strings-regex",
    title: "Strings, StringBuilder, Immutability & Regex in Java",
    category: "Basics",
    sourceUrl: "https://www.geeksforgeeks.org/strings-in-java/",
    description: "Master String immutability, String Constant Pool vs Heap, StringBuilder vs StringBuffer for dynamic payloads, and Regular Expressions (Pattern & Matcher).",
    sections: [
      {
        id: "top-string-methods-qa",
        heading: "Top 10 String Methods Used Every Day in QA",
        table: {
          headers: ["Method", "Signature", "QA Testing Application"],
          rows: [
            ["`.trim()`", "`String trim()`", "Sanitizes raw UI element text by stripping leading/trailing whitespace."],
            ["`.contains()`", "`boolean contains(CharSequence s)`", "Soft assertion to verify partial success messages: `banner.contains('Success')`."],
            ["`.equalsIgnoreCase()`", "`boolean equalsIgnoreCase(String s)`", "Case-insensitive verification: `status.equalsIgnoreCase('PAID')`."],
            ["`.split()`", "`String[] split(String regex)`", "Extracting values from delimited labels: `text.split(':')[1].trim()`."],
            ["`.replaceAll()`", "`String replaceAll(String regex, String repl)`", "Stripping non-numeric currency symbols: `price.replaceAll('[^0-9.]', '')`."],
            ["`.substring()`", "`String substring(int start, int end)`", "Extracting exact token slices from structured strings."],
            ["`.startsWith()`", "`boolean startsWith(String prefix)`", "Validating order prefixes: `orderId.startsWith('ORD-')`."],
            ["`.endsWith()`", "`boolean endsWith(String suffix)`", "Validating file download names: `fileName.endsWith('.pdf')`."],
            ["`.length()`", "`int length()`", "Boundary value validation: asserting password input exceeds 8 characters."],
            ["`.toLowerCase()`", "`String toLowerCase()`", "Normalizing browser or environment flags from CLI inputs."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. OOP FUNDAMENTALS: CLASSES & CONSTRUCTORS                   */
  /* ------------------------------------------------------------- */
  "java-oops-fundamentals": {
    id: "java-oops-fundamentals",
    title: "Classes, Objects, Constructors & this/super Keywords",
    category: "OOP & Interface",
    sourceUrl: "https://www.geeksforgeeks.org/classes-objects-java/",
    description: "Master class definitions, object instantiation, constructor types (default, parameterized, constructor overloading), and the this and super reference keywords.",
    sections: [
      {
        id: "constructors-in-pom",
        heading: "Constructors in Page Object Model (POM)",
        paragraphs: [
          "A Constructor is a special method used to initialize objects. It is called automatically when an object is created with `new`. It has no return type and shares the exact name as the class.",
        ],
        codeBlocks: [
          {
            title: "Constructor Chaining with this() and super()",
            language: "java",
            code: `package com.deepakqa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

// Parent Page Class
public class BasePage {
    protected WebDriver driver;
    protected WebDriverWait wait;

    // Parameterized Constructor
    public BasePage(WebDriver driver) {
        this(driver, 10); // Constructor chaining using this()
    }

    public BasePage(WebDriver driver, int timeoutSeconds) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutSeconds));
    }
}

// Child Page Class
public class LoginPage extends BasePage {
    public LoginPage(WebDriver driver) {
        super(driver); // Calls parent constructor via super()
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. THE 4 OOP PILLARS IN POM                                  */
  /* ------------------------------------------------------------- */
  "java-oops-pillars": {
    id: "java-oops-pillars",
    title: "The 4 OOP Pillars in Page Object Model: Encapsulation, Inheritance, Polymorphism & Abstraction",
    category: "OOP & Interface",
    sourceUrl: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    description: "Learn how the four pillars of Object-Oriented Programming—Encapsulation, Inheritance, Polymorphism, and Abstraction—form the foundation of Page Object Model architectures.",
    sections: [
      {
        id: "the-four-pillars",
        heading: "The Four Pillars of OOP in QA Frameworks",
        table: {
          headers: ["OOP Pillar", "Core Definition", "Real-World Test Automation Application"],
          rows: [
            ["1. Encapsulation", "Wrapping fields and methods; hiding internal state via private modifiers.", "Making element `By` locators `private` inside Page Classes, exposing public action methods (`login()`, `search()`)."],
            ["2. Inheritance", "Mechanism where a new class acquires properties of an existing parent class.", "`BaseTest` containing driver setup/teardown inherited by all tests; `BasePage` inherited by all pages."],
            ["3. Polymorphism", "Ability of an entity to take multiple forms (Overloading & Overriding).", "Overloading `click()` to accept either a `By` locator or `WebElement`; Overriding `isLoaded()` for SPAs."],
            ["4. Abstraction", "Hiding internal implementation details and exposing only essential interfaces.", "The `WebDriver` interface abstracts browser mechanics; `AbstractPage` mandates common lifecycle hooks."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 11. EXCEPTION HANDLING & RETRIES                              */
  /* ------------------------------------------------------------- */
  "java-exception-handling": {
    id: "java-exception-handling",
    title: "Exception Handling: Checked vs Unchecked & Selenium Retries",
    category: "Advance Java Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/exceptions-in-java/",
    description: "Master the Throwable hierarchy (Error vs Exception), Checked vs Unchecked exceptions, try-catch-finally, try-with-resources, and resilient recovery from Selenium exceptions.",
    sections: [
      {
        id: "throwable-hierarchy",
        heading: "Java Throwable Hierarchy Explained",
        paragraphs: [
          "All exceptions inherit from `java.lang.Throwable`:",
          "1. **Error:** Severe problems that an application should not try to catch (e.g., `OutOfMemoryError`, `StackOverflowError`).",
          "2. **Checked Exceptions:** Exceptions checked at compile-time (e.g., `IOException`, `SQLException`, `ClassNotFoundException`). Must be handled using `try-catch` or declared with `throws`.",
          "3. **Unchecked (Runtime) Exceptions:** Exceptions that occur at runtime (e.g., `NullPointerException`, `NoSuchElementException`, `IndexOutOfBoundsException`).",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 12. FILE I/O & CONFIG PROPERTIES                              */
  /* ------------------------------------------------------------- */
  "java-file-io-properties": {
    id: "java-file-io-properties",
    title: "File I/O, Properties Reader & JSON Test Data",
    category: "Advance Java Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/file-handling-in-java/",
    description: "Read config.properties for multi-environment test runs, manage CLI system overrides (-Denv=prod), and parse JSON test fixtures.",
    sections: [
      {
        id: "config-properties",
        heading: "Reading config.properties in Automation",
        codeBlocks: [
          {
            title: "ConfigReader.java",
            language: "java",
            code: `package com.deepakqa.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {
    private static Properties properties;

    static {
        try {
            FileInputStream input = new FileInputStream("src/test/resources/config.properties");
            properties = new Properties();
            properties.load(input);
            input.close();
        } catch (IOException e) {
            throw new RuntimeException("Could not load config.properties: " + e.getMessage());
        }
    }

    public static String getProperty(String key) {
        String sysProp = System.getProperty(key);
        return (sysProp != null && !sysProp.isEmpty()) ? sysProp : properties.getProperty(key);
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 13. GENERICS & TYPE SAFETY                                    */
  /* ------------------------------------------------------------- */
  "java-generics": {
    id: "java-generics",
    title: "Java Generics: Generic Classes, Methods & Wildcards (? extends T)",
    category: "Collections",
    sourceUrl: "https://www.geeksforgeeks.org/generics-in-java/",
    description: "Write type-safe, reusable test utilities using Java Generics: generic Page Object factories, API response deserializers, and wildcard bounds.",
    sections: [
      {
        id: "generic-page-factory",
        heading: "Generic Page Object Initializer in Java",
        codeBlocks: [
          {
            title: "Generic Page Factory Helper",
            language: "java",
            code: `package com.deepakqa.utils;

import org.openqa.selenium.WebDriver;

public class PageFactoryHelper {
    // Generic method <T> that instantiates any Page Object class dynamically
    public static <T> T getPage(WebDriver driver, Class<T> pageClass) {
        try {
            return pageClass.getDeclaredConstructor(WebDriver.class).newInstance(driver);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize Page Object: " + pageClass.getName(), e);
        }
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 14. COLLECTIONS FRAMEWORK                                     */
  /* ------------------------------------------------------------- */
  "java-collections": {
    id: "java-collections",
    title: "Collections Framework: List, Set, Map & Iterators in QA",
    category: "Collections",
    sourceUrl: "https://www.geeksforgeeks.org/collections-in-java-2/",
    description: "Master ArrayList vs LinkedList, HashSet vs TreeSet for window handles, and HashMap vs ConcurrentHashMap for thread-safe test headers and fixtures.",
    sections: [
      {
        id: "collections-overview",
        heading: "Core Collections in Test Automation",
        table: {
          headers: ["Collection Type", "Order / Duplicates", "Primary Test Automation Use Case"],
          rows: [
            ["List (`ArrayList`)", "Ordered; allows duplicates.", "Storing lists of web elements (`driver.findElements()`), dropdown option texts, table rows."],
            ["Set (`HashSet`)", "Unordered; guarantees UNIQUE elements.", "Handling window handles (`driver.getWindowHandles()`), deduplicating extracted categories."],
            ["Map (`HashMap`)", "Key-Value pairs; unique keys.", "Test data dictionaries, API JSON payloads, HTTP headers, reading Excel row data."],
            ["Map (`ConcurrentHashMap`)", "Thread-safe Key-Value pairs.", "Sharing test run session tokens across concurrent worker threads."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 15. STREAMS, LAMBDAS & MODERN JAVA 8+                         */
  /* ------------------------------------------------------------- */
  "java-streams-lambdas": {
    id: "java-streams-lambdas",
    title: "Java 8+ Streams API, Lambdas & Optional Class for QA",
    category: "Advance Java Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/stream-in-java/",
    description: "Write clean, declarative test assertions using Java Streams to filter element lists, extract text, and validate sort orders.",
    sections: [
      {
        id: "streams-in-qa",
        heading: "Stream Operations on WebElements",
        codeBlocks: [
          {
            title: "Streams on WebElements",
            language: "java",
            code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsInQA {
    public static void testCatalog(WebDriver driver) {
        List<WebElement> elements = driver.findElements(By.className("product-title"));

        // Extract and trim product titles into a List<String>
        List<String> titles = elements.stream()
                .map(WebElement::getText)
                .map(String::trim)
                .collect(Collectors.toList());

        // Check if any product matches target term
        boolean hasMacbook = titles.stream().anyMatch(t -> t.contains("MacBook Pro"));
        assert hasMacbook : "MacBook Pro was not found in catalog!";
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 16. MULTITHREADING & SYNCHRONIZATION                          */
  /* ------------------------------------------------------------- */
  "java-multithreading": {
    id: "java-multithreading",
    title: "Multithreading, Synchronization & Thread Pools in Java",
    category: "Advance Java Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/multithreading-in-java/",
    description: "Understand thread lifecycle (New, Runnable, Blocked, Terminated), Thread class vs Runnable, synchronization blocks, and Thread Pools (ExecutorService).",
    sections: [
      {
        id: "threads-in-testing",
        heading: "Thread Lifecycle & Parallel Execution",
        paragraphs: [
          "In test automation, multi-threading is used to execute test classes and test methods concurrently across distributed grid nodes, reducing test suite execution time from hours to minutes.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 17. JDBC DATABASE CONNECTIVITY                                */
  /* ------------------------------------------------------------- */
  "java-jdbc": {
    id: "java-jdbc",
    title: "Java Database Connectivity (JDBC) for QA Assertions",
    category: "Advance Java Concepts",
    sourceUrl: "https://www.geeksforgeeks.org/introduction-to-jdbc/",
    description: "Connect to relational databases (PostgreSQL, MySQL, Oracle), execute parameterized queries with PreparedStatement, and validate UI actions against the DB.",
    sections: [
      {
        id: "jdbc-code",
        heading: "Connecting to Database & Validating UI Orders",
        codeBlocks: [
          {
            title: "DatabaseAssertUtils.java",
            language: "java",
            code: `package com.deepakqa.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DatabaseAssertUtils {
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/deepakqa_db";
    private static final String DB_USER = "postgres";
    private static final String DB_PASS = "securepassword";

    public static String getOrderStatusFromDb(String orderId) {
        String query = "SELECT status FROM orders WHERE order_id = ?";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
             PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setString(1, orderId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getString("status");
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Database query failed: " + e.getMessage(), e);
        }
        return null;
    }
}`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 18. TESTNG FRAMEWORK                                          */
  /* ------------------------------------------------------------- */
  "java-testng-framework": {
    id: "java-testng-framework",
    title: "TestNG Framework: Annotations & DataProvider",
    category: "Practice Java",
    sourceUrl: "https://testng.org/doc/",
    description: "Master the industry-standard TestNG test runner: execution lifecycle annotations, SoftAssert vs HardAssert, and data-driven testing with @DataProvider.",
    sections: [
      {
        id: "testng-annotations-lifecycle",
        heading: "TestNG Annotation Lifecycle",
        table: {
          headers: ["Annotation", "Execution Frequency & Timing"],
          rows: [
            ["@BeforeSuite / @AfterSuite", "Runs once before/after all test suites in `testng.xml`."],
            ["@BeforeTest / @AfterTest", "Runs once before/after any `<test>` tag in `testng.xml`."],
            ["@BeforeClass / @AfterClass", "Runs once before/after all tests in the current test class."],
            ["@BeforeMethod / @AfterMethod", "Runs before/after EVERY individual `@Test` method (ideal for launching/closing browser)."],
            ["@Test", "Marks a method as an executable test case."],
            ["@DataProvider", "Supplies complex parameter arrays to test methods for data-driven testing."],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 19. PARALLEL THREADLOCAL DRIVER                               */
  /* ------------------------------------------------------------- */
  "java-parallel-threadlocal": {
    id: "java-parallel-threadlocal",
    title: "Parallel Execution & ThreadLocal WebDriver Management",
    category: "Practice Java",
    sourceUrl: "https://testng.org/doc/documentation-main.html#parallel-running",
    description: "Guarantee 100% thread safety during concurrent multi-browser test execution using Java ThreadLocal encapsulation and TestNG parallel XML suites.",
    sections: [
      {
        id: "why-threadlocal",
        heading: "Why ThreadLocal is Mandatory for Parallel Testing",
        paragraphs: [
          "If a framework declares `public static WebDriver driver;`, that single browser instance is shared across all threads. When tests run in parallel, one thread will navigate while another tries to click, resulting in chaotic race conditions and catastrophic test failures.",
          "`ThreadLocal<WebDriver>` creates an isolated, dedicated WebDriver instance for each executing thread, guaranteeing zero cross-talk between parallel tests.",
        ],
      },
    ],
  },
};
