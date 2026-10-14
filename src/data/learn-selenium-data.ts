import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const SELENIUM_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "selenium-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "selenium-overview", text: "Overview" }],
  },
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "selenium-getting-started", text: "Installation & Setup" },
      { id: "selenium-first-script", text: "First Selenium Script" },
    ],
  },
  {
    title: "WebDriver Fundamentals",
    defaultOpen: true,
    items: [
      { id: "selenium-locators", text: "Locators & Relative Locators" },
      { id: "selenium-waits", text: "Waits & Synchronization" },
      { id: "selenium-actions", text: "Actions API & User Input" },
    ],
  },
  {
    title: "Tooling & Infrastructure",
    defaultOpen: false,
    items: [
      { id: "selenium-manager", text: "Selenium Manager (Rust CLI)" },
      { id: "selenium-grid", text: "Selenium Grid 4 (Distributed)" },
      { id: "selenium-bidi", text: "Bidirectional Protocol (BiDi)" },
      { id: "selenium-pom", text: "Page Object Model & Best Practices" },
    ],
  },
];

export const SELENIUM_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "selenium-overview": {
    id: "selenium-overview",
    title: "The Selenium Browser Automation Project",
    category: "Overview",
    sourceUrl: "https://www.selenium.dev/documentation/overview/",
    description: "Selenium is an open-source umbrella project for a range of tools and libraries that enable and support the automated testing and interaction of web browsers.",
    sections: [
      {
        id: "introduction",
        heading: "What is Selenium?",
        paragraphs: [
          "Selenium is an umbrella project covering a suite of tools and libraries that enable browser automation across all major platforms and programming languages.",
          "It provides the infrastructure for implementations of the W3C WebDriver specification, allowing engineers to write interchangeable code that executes identically across Chromium (Chrome, Edge), Gecko (Firefox), and WebKit (Safari).",
          "Maintained by open-source volunteer contributors in close collaboration with browser vendors, Selenium is the international standard foundation for browser automation on the web.",
        ],
      },
      {
        id: "core-components",
        heading: "Core Project Components",
        paragraphs: [
          "The Selenium project consists of three primary pillars, plus automated driver tooling:",
        ],
        table: {
          headers: ["Component", "Purpose", "Primary Use Case"],
          rows: [
            ["Selenium WebDriver", "Language-specific client bindings & driver protocol", "Writing resilient programmatic test scripts in Java, Python, JS, C#, Ruby."],
            ["Selenium Manager", "Automated Rust binary driver manager (built-in)", "Zero-config driver and browser binary discovery and installation."],
            ["Selenium Grid 4", "Distributed test execution server & Hub/Node network", "Running tests in parallel across operating systems, browsers, and Docker containers."],
            ["Selenium IDE", "Browser extension for record and playback", "Rapid prototyping, exploratory testing, and bug reproduction."],
          ],
        },
      },
      {
        id: "w3c-architecture",
        heading: "W3C WebDriver Architecture",
        paragraphs: [
          "Selenium operates on a clear client-server architecture governed by the W3C WebDriver standard.",
          "Your test script executes via language bindings (Java, Python, JavaScript, C#), sending standard HTTP REST commands formatted as JSON over the W3C protocol to a lightweight browser driver executable (e.g. chromedriver, geckodriver, msedgedriver).",
          "The driver executable then communicates directly with the internal browser automation engine using native browser APIs.",
        ],
        codeBlocks: [
          {
            title: "Architecture Flow",
            language: "bash",
            code: `[Test Script: Java / Python / JS / C#]
                 │
                 ▼ (W3C JSON Wire Protocol over HTTP)
[Browser Driver: chromedriver / geckodriver / msedgedriver]
                 │
                 ▼ (Native Browser Automation Pipe / BiDi / CDP)
[Browser Process: Chrome / Firefox / Safari / Edge]`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. GETTING STARTED: INSTALLATION                              */
  /* ------------------------------------------------------------- */
  "selenium-getting-started": {
    id: "selenium-getting-started",
    title: "Installation & Setup",
    category: "Getting Started",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/getting_started/install_library/",
    description: "Install Selenium WebDriver bindings across your language of choice using standard package managers.",
    sections: [
      {
        id: "installing-libraries",
        heading: "Install Language Bindings",
        paragraphs: [
          "Selenium supports five official language bindings. Choose your preferred language and package manager to add Selenium WebDriver to your project dependencies.",
        ],
        codeBlocks: [
          {
            title: "Install Selenium WebDriver",
            tabs: [
              {
                label: "Java (Maven)",
                language: "xml",
                code: `<!-- Add to pom.xml dependencies -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.29.0</version>
</dependency>`,
              },
              {
                label: "Python (pip)",
                language: "bash",
                code: `# Install using pip
pip install selenium

# Verify installation
python -c "import selenium; print(selenium.__version__)"`,
              },
              {
                label: "Node.js (npm)",
                language: "bash",
                code: `# Install via npm in your project
npm install selenium-webdriver

# Or with yarn / pnpm
yarn add selenium-webdriver
pnpm add selenium-webdriver`,
              },
              {
                label: "C# (.NET)",
                language: "bash",
                code: `# Install via .NET CLI
dotnet add package Selenium.WebDriver

# Or via Package Manager Console
Install-Package Selenium.WebDriver`,
              },
            ],
          },
        ],
      },
      {
        id: "selenium-manager-zero-config",
        heading: "Automated Drivers with Selenium Manager",
        paragraphs: [
          "Starting with Selenium 4.6+, you no longer need to manually download chromedriver or geckodriver binaries, and you do not need third-party packages like WebDriverManager.",
          "Selenium Manager is a native Rust CLI bundled directly inside the language bindings. It inspects your installed browsers, detects their versions, and downloads the exact matching driver automatically in the background.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Zero Setup Required",
            text: "Just instantiate your driver (e.g., new ChromeDriver() or webdriver.Chrome()). Selenium Manager silently handles binary resolution on first run.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. FIRST SCRIPT                                               */
  /* ------------------------------------------------------------- */
  "selenium-first-script": {
    id: "selenium-first-script",
    title: "Writing Your First Selenium Script",
    category: "Getting Started",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/getting_started/first_script/",
    description: "Learn the eight essential components that make up every professional Selenium automation script.",
    sections: [
      {
        id: "eight-components",
        heading: "The 8 Essential Script Components",
        paragraphs: [
          "Every robust Selenium test script follows an 8-step lifecycle: starting the browser session, navigating, requesting metadata, configuring synchronization waits, locating elements, executing user actions, inspecting results, and closing the session cleanly.",
        ],
        table: {
          headers: ["Step", "Action", "Example API"],
          rows: [
            ["1. Start Session", "Initialize driver instance", "driver = new ChromeDriver()"],
            ["2. Take Action", "Navigate to target URL", "driver.get('https://example.com')"],
            ["3. Request Info", "Read title, URL, or window state", "driver.getTitle() / driver.getCurrentUrl()"],
            ["4. Establish Waits", "Configure explicit wait strategy", "wait = new WebDriverWait(driver, Duration.ofSeconds(10))"],
            ["5. Find Element", "Query DOM node with locator", "driver.findElement(By.name('q'))"],
            ["6. Element Action", "Simulate input, click, or select", "element.sendKeys('Selenium') / element.click()"],
            ["7. Element Info", "Extract text or assert conditions", "element.getText() / element.getAttribute('value')"],
            ["8. End Session", "Teardown browser process safely", "driver.quit()"],
          ],
        },
      },
      {
        id: "complete-script-example",
        heading: "Complete Working Script",
        paragraphs: [
          "Here is a complete, executable end-to-end script that navigates to a web form, submits input, establishes an explicit wait for the response, and verifies the message across all supported languages:",
        ],
        codeBlocks: [
          {
            title: "First Script Across Languages",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `package dev.selenium.getting_started;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class FirstScript {
    public static void main(String[] args) {
        // 1. Start the session
        WebDriver driver = new ChromeDriver();

        try {
            // 2. Take action on browser
            driver.get("https://www.selenium.dev/selenium/web/web-form.html");

            // 3. Request browser information
            String title = driver.getTitle();
            System.out.println("Page Title: " + title);

            // 4. Establish Waiting Strategy
            driver.manage().timeouts().implicitlyWait(Duration.ofMillis(500));

            // 5. Find an element
            WebElement textBox = driver.findElement(By.name("my-text"));
            WebElement submitButton = driver.findElement(By.cssSelector("button"));

            // 6. Take action on element
            textBox.sendKeys("Selenium Automation");
            submitButton.click();

            // 7. Request element information
            WebElement message = driver.findElement(By.id("message"));
            String value = message.getText();
            System.out.println("Result: " + value);
        } finally {
            // 8. End the session
            driver.quit();
        }
    }
}`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 1. Start the session
driver = webdriver.Chrome()

try:
    # 2. Take action on browser
    driver.get("https://www.selenium.dev/selenium/web/web-form.html")

    # 3. Request browser information
    print("Page Title:", driver.title)

    # 4. Establish Waiting Strategy
    wait = WebDriverWait(driver, timeout=10)

    # 5. Find an element
    text_box = driver.find_element(by=By.NAME, value="my-text")
    submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

    # 6. Take action on element
    text_box.send_keys("Selenium Automation")
    submit_button.click()

    # 7. Request element information
    message = wait.until(EC.visibility_of_element_located((By.ID, "message")))
    print("Result:", message.text)
    assert message.text == "Received!"

finally:
    # 8. End the session
    driver.quit()`,
              },
              {
                label: "JavaScript",
                language: "javascript",
                code: `const { Builder, By, until } = require('selenium-webdriver');

(async function firstScript() {
  // 1. Start the session
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 2. Take action on browser
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

    // 3. Request browser information
    const title = await driver.getTitle();
    console.log('Page Title:', title);

    // 4. Establish Waiting Strategy & Find an element
    const textBox = await driver.findElement(By.name('my-text'));
    const submitBtn = await driver.findElement(By.css('button'));

    // 5. Take action on element
    await textBox.sendKeys('Selenium Automation');
    await submitBtn.click();

    // 6. Request element information with explicit wait
    const message = await driver.wait(
      until.elementLocated(By.id('message')),
      5000
    );
    const text = await message.getText();
    console.log('Result:', text);
  } finally {
    // 8. End the session
    await driver.quit();
  }
})();`,
              },
              {
                label: "C#",
                language: "csharp",
                code: `using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

class FirstScript
{
    static void Main()
    {
        // 1. Start the session
        IWebDriver driver = new ChromeDriver();

        try
        {
            // 2. Take action on browser
            driver.Navigate().GoToUrl("https://www.selenium.dev/selenium/web/web-form.html");

            // 3. Request browser information
            Console.WriteLine("Title: " + driver.Title);

            // 4. Establish Waiting Strategy & 5. Find an element
            IWebElement textBox = driver.FindElement(By.Name("my-text"));
            IWebElement submitBtn = driver.FindElement(By.CssSelector("button"));

            // 6. Take action on element
            textBox.SendKeys("Selenium Automation");
            submitBtn.Click();

            // 7. Request element information
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            IWebElement message = wait.Until(d => d.FindElement(By.Id("message")));
            Console.WriteLine("Result: " + message.Text);
        }
        finally
        {
            // 8. End the session
            driver.Quit();
        }
    }
}`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. LOCATORS & RELATIVE LOCATORS                               */
  /* ------------------------------------------------------------- */
  "selenium-locators": {
    id: "selenium-locators",
    title: "Locators & Relative Locators",
    category: "WebDriver Fundamentals",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/elements/locators/",
    description: "Identify and locate DOM elements using standard By locator strategies and Selenium 4 friendly Relative Locators.",
    sections: [
      {
        id: "locator-strategies",
        heading: "Standard By Locator Strategies",
        paragraphs: [
          "A locator is a way to identify elements on a page. Selenium provides 8 built-in locator strategies via the By factory class:",
        ],
        table: {
          headers: ["Locator Strategy", "Description", "Java / Python Syntax"],
          rows: [
            ["By.id", "Matches exact element id attribute", "By.id('submit-btn') / (By.ID, 'submit-btn')"],
            ["By.name", "Matches form input name attribute", "By.name('username') / (By.NAME, 'username')"],
            ["By.className", "Matches CSS class names", "By.className('nav-item') / (By.CLASS_NAME, 'nav-item')"],
            ["By.cssSelector", "CSS Selector expressions", "By.cssSelector('div.card > button.primary')"],
            ["By.xpath", "XPath navigation query", "By.xpath(\"//button[contains(text(), 'Save')]\")"],
            ["By.tagName", "Matches HTML tag name", "By.tagName('a') / (By.TAG_NAME, 'a')"],
            ["By.linkText", "Matches exact visible text of an <a> link", "By.linkText('Documentation')"],
            ["By.partialLinkText", "Matches substring of an <a> link text", "By.partialLinkText('Doc')"],
          ],
        },
      },
      {
        id: "relative-locators",
        heading: "Selenium 4 Relative Locators (Friendly Locators)",
        paragraphs: [
          "Selenium 4 introduces Relative Locators, allowing you to locate elements based on their visual spatial proximity to other known elements on the page.",
          "Available directions include: above, below, toLeftOf, toRightOf, and near.",
        ],
        codeBlocks: [
          {
            title: "Relative Locators Syntax",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import static org.openqa.selenium.support.locators.RelativeLocator.with;

WebElement emailInput = driver.findElement(By.id("email"));

// Find password field below email input
WebElement passwordInput = driver.findElement(with(By.tagName("input")).below(emailInput));

// Find cancel button to the left of submit button
WebElement submitBtn = driver.findElement(By.id("submit"));
WebElement cancelBtn = driver.findElement(with(By.tagName("button")).toLeftOf(submitBtn));

// Find element visually near an icon (within 50 pixels)
WebElement helpTooltip = driver.findElement(with(By.className("tooltip")).near(emailInput, 50));`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium.webdriver.support.relative_locator import locate_with

email_input = driver.find_element(By.ID, "email")

# Find password field below email input
password_input = driver.find_element(locate_with(By.TAG_NAME, "input").below(email_input))

# Find cancel button to the left of submit button
submit_btn = driver.find_element(By.ID, "submit")
cancel_btn = driver.find_element(locate_with(By.TAG_NAME, "button").to_left_of(submit_btn))`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. WAITS & SYNCHRONIZATION                                    */
  /* ------------------------------------------------------------- */
  "selenium-waits": {
    id: "selenium-waits",
    title: "Waits & Synchronization",
    category: "WebDriver Fundamentals",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/waits/",
    description: "Eliminate flaky test failures by synchronizing WebDriver execution with modern asynchronous single-page applications.",
    sections: [
      {
        id: "explicit-waits",
        heading: "Explicit Waits (Recommended Best Practice)",
        paragraphs: [
          "Explicit waits allow your code to halt execution until a specific ExpectedCondition evaluates to true, or until a timeout occurs.",
          "Unlike arbitrary Thread.sleep() delays, explicit waits poll every 500ms and return immediately once the element is ready, ensuring fast and deterministic test runs.",
        ],
        codeBlocks: [
          {
            title: "WebDriverWait & ExpectedConditions",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Wait for element to be clickable before clicking
WebElement submitBtn = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit"))
);
submitBtn.click();

// Wait for element to be visible
WebElement banner = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.className("alert-success"))
);

// Wait for URL or title change
wait.until(ExpectedConditions.urlContains("/dashboard"));
wait.until(ExpectedConditions.titleIs("Dashboard — My App"));`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, timeout=10)

# Wait for element to be clickable
submit_btn = wait.until(EC.element_to_be_clickable((By.ID, "submit")))
submit_btn.click()

# Wait for visibility
banner = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "alert-success")))

# Wait for URL or title
wait.until(EC.url_contains("/dashboard"))
wait.until(EC.title_is("Dashboard — My App"))`,
              },
            ],
          },
        ],
      },
      {
        id: "implicit-vs-explicit",
        heading: "Implicit Waits vs Explicit Waits Warning",
        paragraphs: [
          "Implicit wait tells WebDriver to poll the DOM for a set duration when searching for ANY element if not immediately present.",
          "Caution: Do not mix implicit and explicit waits. Mixing them can cause unpredictable wait times and timeouts that exceed your configured duration limits.",
        ],
        callouts: [
          {
            type: "warning",
            title: "Do Not Mix Waits",
            text: "The official Selenium documentation advises: 'Do not mix implicit and explicit waits. Doing so can cause unpredictable wait times. For example, setting an implicit wait of 10s and an explicit wait of 15s could cause a timeout to occur after 20 seconds.'",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. ACTIONS API                                                */
  /* ------------------------------------------------------------- */
  "selenium-actions": {
    id: "selenium-actions",
    title: "Actions API & User Input",
    category: "WebDriver Fundamentals",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/actions_api/",
    description: "Emulate complex human gestures: mouse hover, drag-and-drop, keyboard key chords, and scroll wheels.",
    sections: [
      {
        id: "mouse-actions",
        heading: "Mouse Interactions",
        paragraphs: [
          "The Actions class provides a fluent API for chaining complex mouse gestures such as hover, double-click, context-click (right-click), and drag-and-drop.",
        ],
        codeBlocks: [
          {
            title: "Mouse Gestures",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

WebElement menu = driver.findElement(By.id("nav-dropdown"));
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

// Hover over menu to reveal submenu
actions.moveToElement(menu).perform();

// Context-click (Right-click)
actions.contextClick(menu).perform();

// Double click
actions.doubleClick(menu).perform();

// Drag and drop
actions.dragAndDrop(source, target).perform();`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium.webdriver.common.action_chains import ActionChains

actions = ActionChains(driver)

menu = driver.find_element(By.ID, "nav-dropdown")
source = driver.find_element(By.ID, "draggable")
target = driver.find_element(By.ID, "droppable")

# Hover
actions.move_to_element(menu).perform()

# Right-click
actions.context_click(menu).perform()

# Drag and drop
actions.drag_and_drop(source, target).perform()`,
              },
            ],
          },
        ],
      },
      {
        id: "keyboard-chords",
        heading: "Keyboard Key Combinations",
        paragraphs: [
          "Simulate keyboard shortcuts like Ctrl+A / Command+A, copy-paste, and key presses using keyDown and keyUp.",
        ],
        codeBlocks: [
          {
            title: "Key Chords",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import org.openqa.selenium.Keys;

// Select all text in input and copy
actions.click(textBox)
       .keyDown(Keys.CONTROL)
       .sendKeys("a")
       .sendKeys("c")
       .keyUp(Keys.CONTROL)
       .perform();`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium.webdriver.common.keys import Keys

# Select all text and copy
actions.click(text_box) \\
       .key_down(Keys.CONTROL) \\
       .send_keys("a") \\
       .send_keys("c") \\
       .key_up(Keys.CONTROL) \\
       .perform()`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. SELENIUM MANAGER                                           */
  /* ------------------------------------------------------------- */
  "selenium-manager": {
    id: "selenium-manager",
    title: "Selenium Manager (Rust CLI)",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://www.selenium.dev/documentation/selenium_manager/",
    description: "Automated driver and browser lifecycle manager built directly into Selenium in high-performance Rust.",
    sections: [
      {
        id: "overview",
        heading: "Automated Binary Resolution",
        paragraphs: [
          "Selenium Manager is a command-line tool written in Rust that provides automated driver and browser management for all Selenium language bindings.",
          "It ships pre-compiled inside the Selenium packages, requiring zero external dependencies, zero PATH configuration, and zero third-party utilities.",
        ],
      },
      {
        id: "browser-downloads",
        heading: "Automated Browser Installation (Chrome for Testing)",
        paragraphs: [
          "If a matching browser is not found on your operating system, Selenium Manager can automatically download the official portable browser binary (e.g. Chrome for Testing or Firefox) directly into a local user cache.",
        ],
        codeBlocks: [
          {
            title: "Selenium Manager CLI Diagnostic",
            language: "bash",
            code: `# Run driver discovery check directly from command line
./selenium-manager --browser chrome

# Output contains detected browser and driver location:
# {
#   "browser_version": "133.0.6943.98",
#   "driver_version": "133.0.6943.98",
#   "driver_path": "~/.cache/selenium/chromedriver/win64/133.0.6943.98/chromedriver.exe"
# }`,
          },
        ],
      },
      {
        id: "offline-enterprise",
        heading: "Offline & Proxy Configuration",
        paragraphs: [
          "In enterprise CI/CD environments behind restrictive firewalls or corporate proxies, Selenium Manager respects standard environment variables:",
        ],
        table: {
          headers: ["Environment Variable", "Purpose", "Default"],
          rows: [
            ["SE_CACHE_PATH", "Directory to store drivers and browser binaries", "~/.cache/selenium"],
            ["SE_AVOID_STATS", "Disable anonymous telemetry calls", "false"],
            ["SE_OFFLINE", "Prevent network calls and rely solely on local cache", "false"],
            ["HTTPS_PROXY", "HTTP/HTTPS proxy server endpoint", "system proxy"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. SELENIUM GRID 4                                            */
  /* ------------------------------------------------------------- */
  "selenium-grid": {
    id: "selenium-grid",
    title: "Selenium Grid 4 (Distributed)",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://www.selenium.dev/documentation/grid/",
    description: "Scale your automated test suite by executing tests in parallel across multiple machines, browsers, and Docker containers.",
    sections: [
      {
        id: "grid-architecture",
        heading: "Selenium Grid 4 Architecture",
        paragraphs: [
          "Selenium Grid allows you to run tests in parallel across different machines and manage different browser versions and operating systems centralizing in one network.",
          "Grid 4 was rewritten from the ground up to support modern microservices architecture, Docker integration, and native GraphQL monitoring.",
        ],
        codeBlocks: [
          {
            title: "Quickstart: Standalone Grid via Docker",
            language: "bash",
            code: `# Run standalone Chrome grid container
docker run -d -p 4444:4444 --shm-size="2g" selenium/standalone-chrome:latest

# Or launch standalone Selenium server JAR
java -jar selenium-server-4.29.0.jar standalone`,
          },
        ],
      },
      {
        id: "remote-webdriver",
        heading: "Connecting via RemoteWebDriver",
        paragraphs: [
          "To route test execution to a Selenium Grid instance, instantiate a RemoteWebDriver pointing to the Grid hub URL (default port 4444):",
        ],
        codeBlocks: [
          {
            title: "RemoteWebDriver Connection",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;

ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new");

WebDriver driver = new RemoteWebDriver(
    new URL("http://localhost:4444/wd/hub"),
    options
);`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--headless=new")

driver = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub",
    options=options
)`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. BIDIRECTIONAL PROTOCOL (BiDi)                              */
  /* ------------------------------------------------------------- */
  "selenium-bidi": {
    id: "selenium-bidi",
    title: "Bidirectional Protocol (BiDi)",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://www.selenium.dev/documentation/webdriver/bidi/",
    description: "Leverage real-time bidirectional communication for network interception, JavaScript console monitoring, and DOM mutation events.",
    sections: [
      {
        id: "bidi-overview",
        heading: "The Future: WebDriver BiDi",
        paragraphs: [
          "Traditional WebDriver is unidirectional: the client sends a request and waits for a response. WebDriver BiDi provides a two-way streaming protocol over WebSockets.",
          "This enables high-speed real-time event listening, network request mocking and interception, console log capturing, and DOM mutation tracking across all browser vendors.",
        ],
        codeBlocks: [
          {
            title: "Network Interception Example",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `import org.openqa.selenium.devtools.NetworkInterceptor;
import org.openqa.selenium.remote.http.Route;
import org.openqa.selenium.remote.http.HttpResponse;

// Intercept specific URL and mock response
Route route = Route.matching(req -> req.getUri().endsWith("/api/user"))
                   .to(() -> req -> new HttpResponse()
                       .setStatus(200)
                       .addHeader("Content-Type", "application/json")
                       .setContent(utf8String("{\\"name\\":\\"QA Engineer\\"}")));

try (NetworkInterceptor interceptor = new NetworkInterceptor(driver, route)) {
    driver.get("https://my-app.com/profile");
    // Assert mocked profile data rendered
}`,
              },
              {
                label: "Python",
                language: "python",
                code: `# Listen to JavaScript console errors via BiDi
from selenium import webdriver

driver = webdriver.Chrome()

def on_console_log(log_entry):
    if log_entry.level == "SEVERE":
        print("Console error detected:", log_entry.text)

driver.script.add_console_message_handler(on_console_log)
driver.get("https://my-app.com")`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. PAGE OBJECT MODEL (POM) & BEST PRACTICES                 */
  /* ------------------------------------------------------------- */
  "selenium-pom": {
    id: "selenium-pom",
    title: "Page Object Model & Best Practices",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://www.selenium.dev/documentation/test_practices/",
    description: "Design clean, maintainable, resilient test automation architectures using the Page Object Model design pattern.",
    sections: [
      {
        id: "page-object-pattern",
        heading: "Page Object Pattern",
        paragraphs: [
          "Page Object Model (POM) is an industry-standard design pattern where web pages are represented as object-oriented classes.",
          "Tests interact with the page through high-level business methods rather than directly manipulating raw By locators, separating test logic from page layout.",
        ],
        codeBlocks: [
          {
            title: "Clean Page Object Implementation",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    // Locators
    private final By usernameBy = By.id("username");
    private final By passwordBy = By.id("password");
    private final By submitBy = By.cssSelector("button[type='submit']");
    private final By errorBannerBy = By.className("flash.error");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public LoginPage enterUsername(String user) {
        driver.findElement(usernameBy).sendKeys(user);
        return this;
    }

    public LoginPage enterPassword(String pass) {
        driver.findElement(passwordBy).sendKeys(pass);
        return this;
    }

    public void clickSubmit() {
        wait.until(ExpectedConditions.elementToBeClickable(submitBy)).click();
    }

    public String getErrorMessage() {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(errorBannerBy)).getText();
    }
}`,
              },
              {
                label: "Python",
                language: "python",
                code: `class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)
        self.username_by = (By.ID, "username")
        self.password_by = (By.ID, "password")
        self.submit_by = (By.CSS_SELECTOR, "button[type='submit']")

    def login(self, username, password):
        self.driver.find_element(*self.username_by).send_keys(username)
        self.driver.find_element(*self.password_by).send_keys(password)
        self.wait.until(EC.element_to_be_clickable(self.submit_by)).click()`,
              },
            ],
          },
        ],
      },
    ],
  },
};

