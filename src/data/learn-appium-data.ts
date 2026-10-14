import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const APPIUM_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "appium-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "appium-overview", text: "Overview" }],
  },
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "appium-quickstart", text: "Installation & Setup" },
      { id: "appium-first-test", text: "Writing First Mobile Test" },
    ],
  },
  {
    title: "Core Concepts",
    defaultOpen: true,
    items: [
      { id: "appium-caps", text: "W3C Capabilities & Options" },
      { id: "appium-locators", text: "Mobile Locators & Selectors" },
      { id: "appium-gestures", text: "Gestures & W3C Actions" },
    ],
  },
  {
    title: "Tooling & Infrastructure",
    defaultOpen: false,
    items: [
      { id: "appium-drivers-plugins", text: "Drivers & Plugins Ecosystem" },
      { id: "appium-server-cli", text: "Server CLI & Configuration" },
    ],
  },
];

export const APPIUM_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "appium-overview": {
    id: "appium-overview",
    title: "Introduction to Appium & Architecture",
    category: "Overview",
    sourceUrl: "https://appium.io/docs/en/latest/",
    description: "Appium is an open-source, cross-platform test automation framework for native, hybrid, and mobile web apps across iOS, Android, and desktop platforms.",
    sections: [
      {
        id: "what-is-appium",
        heading: "What is Appium?",
        paragraphs: [
          "Appium is an open-source test automation framework for mobile, desktop, TV, and IoT applications. It enables software quality engineers to write automated tests against native iOS and Android apps, mobile web browsers (Safari, Chrome), and hybrid applications using a unified, standard API.",
          "Appium is built on the philosophy that you should not have to recompile your app, modify its source code, or include any proprietary SDK or agent just to automate it. It uses the vendor's own accessibility automation frameworks under the hood: Google UiAutomator2 / Espresso on Android, and Apple XCTest / XCUITest on iOS.",
          "Because Appium implements and extends the W3C WebDriver specification, tests can be authored in any programming language that has standard WebDriver client bindings, including JavaScript/TypeScript, Python, Java, C#, Ruby, and PHP.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Appium Philosophy",
            text: "1. Automate apps without recompilation. 2. Write tests in any programming language. 3. Use standard automation specifications (W3C WebDriver). 4. Maintain open-source ecosystem freedom.",
          },
        ],
      },
      {
        id: "appium-2-architecture",
        heading: "Appium 2.x Modular Architecture",
        paragraphs: [
          "Prior to version 2.0, Appium was distributed as a monolithic package that bundled drivers for Android, iOS, Windows, and Mac together. In Appium 2.x and 3.x, Appium was re-architected into a modular, plugin-extensible platform.",
          "The core Appium package is now a lightweight routing server and CLI tool. Automation drivers and community plugins are installed independently on-demand via the Appium CLI.",
        ],
        table: {
          headers: ["Aspect", "Appium 1.x (Legacy)", "Appium 2.x+ (Modern)"],
          rows: [
            ["Architecture", "Monolithic bundle containing all drivers", "Decoupled core CLI with modular driver ecosystem"],
            ["Driver Management", "Hardcoded into server package", "Installed independently: appium driver install <name>"],
            ["Plugins", "Limited, hard-coded capabilities", "Extensible plugin API: appium plugin install <name>"],
            ["W3C Compliance", "Hybrid (JSONWP + W3C WebDriver)", "Strict W3C WebDriver compliance enforced"],
            ["Vendor Capabilities", "Unprefixed capabilities allowed", "Strict appium: vendor capability prefix required"],
            ["Default Server Base Path", "/wd/hub", "/ (root)"],
          ],
        },
      },
      {
        id: "client-server-flow",
        heading: "Client-Server Execution Flow",
        paragraphs: [
          "Appium operates on a distributed client-server model over standard HTTP REST endpoints:",
          "1. Client Test Code: Your test script initializes a session specifying desired capabilities and issues commands (tap, sendKeys, scroll) using standard language client bindings.",
          "2. Appium Server: Listens on port 4723, translates W3C WebDriver JSON requests, and forwards them to the appropriate driver instance.",
          "3. Driver Layer: The driver (e.g., uiautomator2 or xcuitest) converts the request into the protocol understood by the device-side runner.",
          "4. Device Runner: On Android, the UiAutomator2 Server APK executes commands via Android Accessibility APIs. On iOS, WebDriverAgent-Runner executes commands via Apple's private XCTest daemon.",
          "5. Response: Results and DOM hierarchy snapshots flow back through the driver and server to your assertion engine.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. QUICKSTART & INSTALLATION                                  */
  /* ------------------------------------------------------------- */
  "appium-quickstart": {
    id: "appium-quickstart",
    title: "Installation & Driver Setup",
    category: "Getting Started",
    sourceUrl: "https://appium.io/docs/en/latest/quickstart/install/",
    description: "Install Appium 2.x globally, install Android and iOS automation drivers, and verify your development environment.",
    sections: [
      {
        id: "prerequisites",
        heading: "System Prerequisites",
        paragraphs: [
          "Before installing Appium, verify that your development machine has the required system dependencies installed:",
          "• Node.js: Version 18.0.0 or higher (LTS recommended).",
          "• Java Development Kit (JDK): JDK 11 or 17 (required for Android SDK tools and UiAutomator2). Set JAVA_HOME in your environment.",
          "• Android Studio & SDK: Required for Android testing. Set ANDROID_HOME and add platform-tools (adb) to your system PATH.",
          "• Xcode & Command Line Tools: Required for iOS testing (macOS only). Run xcode-select --install.",
        ],
      },
      {
        id: "installing-appium",
        heading: "Installing Appium Server CLI",
        paragraphs: [
          "Install the official Appium 2.x CLI globally using npm. Ensure you have appropriate permissions or use a Node version manager (nvm).",
        ],
        codeBlocks: [
          {
            title: "Install Appium Globally",
            tabs: [
              {
                label: "npm",
                language: "bash",
                code: `# Install Appium globally
npm install --location=global appium

# Check installed version
appium -v`,
              },
              {
                label: "yarn",
                language: "bash",
                code: `# Global install with yarn
yarn global add appium

# Check version
appium -v`,
              },
            ],
          },
        ],
      },
      {
        id: "installing-drivers",
        heading: "Installing Automation Drivers",
        paragraphs: [
          "Appium 2.x does not bundle any drivers by default. You must install the driver specific to the platform and target technology you wish to automate.",
        ],
        codeBlocks: [
          {
            title: "Appium Driver CLI Commands",
            tabs: [
              {
                label: "Android (UiAutomator2)",
                language: "bash",
                code: `# Install UiAutomator2 driver for modern Android apps
appium driver install uiautomator2

# Verify driver status
appium driver list --installed`,
              },
              {
                label: "iOS (XCUITest)",
                language: "bash",
                code: `# Install XCUITest driver for iOS/iPadOS/tvOS
appium driver install xcuitest

# Verify driver status
appium driver list --installed`,
              },
              {
                label: "Desktop Drivers",
                language: "bash",
                code: `# Install Windows desktop driver (Windows 10/11)
appium driver install windows

# Install macOS desktop driver
appium driver install mac2`,
              },
            ],
          },
        ],
      },
      {
        id: "appium-doctor",
        heading: "Verifying Setup with Appium Doctor",
        paragraphs: [
          "The Appium Doctor utility diagnoses and validates that all system environment variables, SDK binaries, and compilers are properly configured for automation.",
        ],
        codeBlocks: [
          {
            title: "Run Environment Diagnostics",
            tabs: [
              {
                label: "Doctor CLI",
                language: "bash",
                code: `# Run driver doctor for Android
appium driver doctor uiautomator2

# Run driver doctor for iOS (macOS only)
appium driver doctor xcuitest`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "note",
            title: "Environment Checklist",
            text: "Ensure ANDROID_HOME points to your Android SDK root, JAVA_HOME points to your JDK directory, and adb can be executed from any terminal prompt.",
          },
        ],
      },
      {
        id: "starting-server",
        heading: "Starting the Appium Server",
        paragraphs: [
          "Once drivers are installed, launch the Appium server from your terminal. By default, it binds to 0.0.0.0:4723 on root base path (/).",
        ],
        codeBlocks: [
          {
            title: "Start Appium Server",
            tabs: [
              {
                label: "Default Startup",
                language: "bash",
                code: `# Start Appium server
appium

# Output indicates active drivers and listening port:
# [Appium] Welcome to Appium v2.x.x
# [Appium] Attempting to load driver uiautomator2...
# [Appium] Appium REST http interface listener started on http://0.0.0.0:4723`,
              },
              {
                label: "Custom Port & Path",
                language: "bash",
                code: `# Start on custom port with legacy /wd/hub base path
appium --port 4723 --base-path /wd/hub --log-timestamp --local-timezone`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. FIRST MOBILE TEST                                          */
  /* ------------------------------------------------------------- */
  "appium-first-test": {
    id: "appium-first-test",
    title: "Writing Your First Mobile Test",
    category: "Getting Started",
    sourceUrl: "https://appium.io/docs/en/latest/quickstart/test-js/",
    description: "Complete, production-ready mobile test scripts for Android and iOS across JavaScript, Python, Java, and C#.",
    sections: [
      {
        id: "anatomy-of-mobile-test",
        heading: "Anatomy of an Appium Test",
        paragraphs: [
          "Every Appium mobile test follows a standard lifecycle:",
          "1. Capabilities Definition: Configure target OS, device name, automation engine, and app location.",
          "2. Session Initialization: Connect to the Appium server via remote WebDriver client.",
          "3. Element Interaction: Locate UI elements using Accessibility ID or native selectors, then trigger actions (tap, type).",
          "4. Assertion: Validate UI state against expected results.",
          "5. Session Teardown: Safely call driver.quit() or deleteSession() to free device resources.",
        ],
      },
      {
        id: "android-first-test",
        heading: "First Android Test (UiAutomator2)",
        paragraphs: [
          "The following complete example starts an Android session on an emulator, locates an element by accessibility id, sends text, and verifies the result.",
        ],
        codeBlocks: [
          {
            title: "Complete Android Test Script",
            tabs: [
              {
                label: "JavaScript (WebdriverIO)",
                language: "javascript",
                code: `const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android Emulator',
  'appium:app': 'https://github.com/appium/appium/raw/master/packages/appium/sample-code/apps/ApiDemos-debug.apk',
  'appium:appPackage': 'io.appium.android.apis',
  'appium:appActivity': '.ApiDemos',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // Locate element by accessibility id
    const appButton = await driver.$('~App');
    await appButton.click();

    // Verify next screen header
    const activityButton = await driver.$('~Activity');
    const isDisplayed = await activityButton.isDisplayed();
    console.log('Activity button visible:', isDisplayed);
  } finally {
    await driver.deleteSession();
  }
}

runTest().catch(console.error);`,
              },
              {
                label: "Python (pytest)",
                language: "python",
                code: `import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy

@pytest.fixture(scope="function")
def driver():
    options = UiAutomator2Options()
    options.platform_name = "Android"
    options.device_name = "Android Emulator"
    options.app = "/path/to/ApiDemos-debug.apk"
    options.app_package = "io.appium.android.apis"
    options.app_activity = ".ApiDemos"

    # Connect to Appium server on localhost:4723
    driver = webdriver.Remote("http://127.0.0.1:4723", options=options)
    yield driver
    driver.quit()

def test_navigate_to_activity(driver):
    # Locate element by Accessibility ID
    app_btn = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "App")
    app_btn.click()

    # Assert sub-menu is visible
    activity_btn = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Activity")
    assert activity_btn.is_displayed()`,
              },
              {
                label: "Java (TestNG)",
                language: "java",
                code: `import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.AppiumBy;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import java.net.URI;
import java.time.Duration;

public class AndroidTest {
    private AndroidDriver driver;

    @BeforeMethod
    public void setUp() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options()
            .setPlatformName("Android")
            .setDeviceName("Android Emulator")
            .setApp("/path/to/ApiDemos-debug.apk")
            .setAppPackage("io.appium.android.apis")
            .setAppActivity(".ApiDemos");

        driver = new AndroidDriver(URI.create("http://127.0.0.1:4723").toURL(), options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    @Test
    public void testOpenAppMenu() {
        driver.findElement(AppiumBy.accessibilityId("App")).click();
        boolean isDisplayed = driver.findElement(AppiumBy.accessibilityId("Activity")).isDisplayed();
        Assert.assertTrue(isDisplayed, "Activity option should be visible");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`,
              },
              {
                label: "C# (NUnit)",
                language: "csharp",
                code: `using System;
using NUnit.Framework;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Appium.Android;

namespace MobileAutomationTests
{
    [TestFixture]
    public class FirstAndroidTest
    {
        private AndroidDriver? _driver;

        [SetUp]
        public void Setup()
        {
            var options = new AppiumOptions
            {
                PlatformName = "Android",
                AutomationName = "UiAutomator2",
                DeviceName = "Android Emulator",
                App = "/path/to/ApiDemos-debug.apk"
            };
            options.AddAdditionalAppiumOption("appPackage", "io.appium.android.apis");
            options.AddAdditionalAppiumOption("appActivity", ".ApiDemos");

            _driver = new AndroidDriver(new Uri("http://127.0.0.1:4723"), options);
        }

        [Test]
        public void TestNavigateApp()
        {
            var appElement = _driver!.FindElement(MobileBy.AccessibilityId("App"));
            appElement.Click();

            var activityElement = _driver.FindElement(MobileBy.AccessibilityId("Activity"));
            Assert.That(activityElement.Displayed, Is.True);
        }

        [TearDown]
        public void Teardown()
        {
            _driver?.Quit();
            _driver?.Dispose();
        }
    }
}`,
              },
            ],
          },
        ],
      },
      {
        id: "ios-first-test",
        heading: "First iOS Test (XCUITest)",
        paragraphs: [
          "For iOS testing on macOS, use XCUITestOptions with an iOS Simulator or connected physical device. Target applications can be provided as a compiled .app bundle or .ipa.",
        ],
        codeBlocks: [
          {
            title: "iOS Test Example (Python)",
            tabs: [
              {
                label: "Python",
                language: "python",
                code: `from appium import webdriver
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy

options = XCUITestOptions()
options.platform_name = "iOS"
options.automation_name = "XCUITest"
options.device_name = "iPhone 15 Pro"
options.platform_version = "17.4"
options.app = "/path/to/MyDemoApp.app"

driver = webdriver.Remote("http://127.0.0.1:4723", options=options)

try:
    # Locate element by Accessibility ID
    cart_button = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "cart badge")
    cart_button.click()
finally:
    driver.quit()`,
              },
              {
                label: "Java",
                language: "java",
                code: `import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import io.appium.java_client.AppiumBy;
import java.net.URI;

public class IOSTest {
    public static void main(String[] args) throws Exception {
        XCUITestOptions options = new XCUITestOptions()
            .setPlatformName("iOS")
            .setDeviceName("iPhone 15 Pro")
            .setPlatformVersion("17.4")
            .setApp("/path/to/MyDemoApp.app");

        IOSDriver driver = new IOSDriver(URI.create("http://127.0.0.1:4723").toURL(), options);
        try {
            driver.findElement(AppiumBy.accessibilityId("cart badge")).click();
        } finally {
            driver.quit();
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
  /* 4. W3C CAPABILITIES & OPTIONS                                 */
  /* ------------------------------------------------------------- */
  "appium-caps": {
    id: "appium-caps",
    title: "W3C Capabilities & Options",
    category: "Core Concepts",
    sourceUrl: "https://appium.io/docs/en/latest/guides/caps/",
    description: "Master W3C-compliant capabilities, vendor prefixes, and typed option classes (UiAutomator2Options, XCUITestOptions).",
    sections: [
      {
        id: "w3c-capabilities-standard",
        heading: "The W3C Capabilities Standard",
        paragraphs: [
          "Under the official W3C WebDriver specification, any capability that is not part of the standard top-level set (such as browserName, platformName, acceptInsecureCerts) MUST include a vendor prefix with a colon.",
          "In Appium 2.x+, all Appium-specific configuration settings must be prefixed with appium: when declared in raw JSON or dictionaries (e.g. appium:automationName, appium:deviceName).",
          "Official client SDKs provide typed Options classes (such as UiAutomator2Options or XCUITestOptions) that automatically serialize capabilities with the required appium: prefix behind the scenes.",
        ],
      },
      {
        id: "core-capabilities-reference",
        heading: "Essential Capabilities Reference",
        paragraphs: [
          "The table below summarizes the most critical capabilities used across mobile test automation sessions:",
        ],
        table: {
          headers: ["Capability", "Type", "Platform", "Description"],
          rows: [
            ["platformName", "string", "Any", "Target operating system: 'Android', 'iOS', 'Windows', or 'Mac'"],
            ["appium:automationName", "string", "Any", "Automation engine: 'UiAutomator2', 'Espresso', 'XCUITest', 'mac2', 'windows'"],
            ["appium:deviceName", "string", "Any", "Name of the target device or emulator (e.g. 'Pixel_7_API_34', 'iPhone 15')"],
            ["appium:udid", "string", "Any", "Unique device identifier. Mandatory when multiple physical devices are connected"],
            ["appium:app", "string", "Any", "Absolute path or remote HTTP URL to the application binary (.apk, .aab, .ipa, .app.zip)"],
            ["appium:appPackage", "string", "Android", "Java package name of the Android app to launch (e.g. 'com.example.app')"],
            ["appium:appActivity", "string", "Android", "Activity name to launch upon session startup (e.g. '.MainActivity')"],
            ["appium:bundleId", "string", "iOS", "Bundle ID of the iOS application (e.g. 'com.apple.Preferences')"],
            ["appium:noReset", "boolean", "Any", "If true, preserves application state (cookies, login cache) across test sessions"],
            ["appium:fullReset", "boolean", "Any", "If true, completely uninstalls and purges app data after test completion"],
            ["appium:newCommandTimeout", "number", "Any", "Timeout in seconds Appium waits for a new client command before ending session (default 60s)"],
            ["appium:autoGrantPermissions", "boolean", "Android", "Automatically grants all requested runtime Android permissions on install"],
          ],
        },
      },
      {
        id: "typed-options-examples",
        heading: "Configuring Options in Code",
        paragraphs: [
          "Modern test code avoids untyped dictionaries and uses dedicated Option builders for compile-time safety and IDE auto-completion.",
        ],
        codeBlocks: [
          {
            title: "Options Builders Examples",
            tabs: [
              {
                label: "Java (UiAutomator2Options)",
                language: "java",
                code: `UiAutomator2Options options = new UiAutomator2Options()
    .setPlatformName("Android")
    .setDeviceName("emulator-5554")
    .setApp("/apps/production-build.apk")
    .setAppPackage("com.mycompany.app")
    .setAppActivity(".ui.SplashActivity")
    .setNoReset(true)
    .setAutoGrantPermissions(true)
    .setNewCommandTimeout(Duration.ofSeconds(120));`,
              },
              {
                label: "Python (XCUITestOptions)",
                language: "python",
                code: `from appium.options.ios import XCUITestOptions

options = XCUITestOptions()
options.platform_name = "iOS"
options.device_name = "iPhone 15 Pro Max"
options.platform_version = "17.4"
options.bundle_id = "com.apple.MobileAddressBook"
options.no_reset = True
options.new_command_timeout = 90`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. MOBILE LOCATORS & SELECTORS                                */
  /* ------------------------------------------------------------- */
  "appium-locators": {
    id: "appium-locators",
    title: "Mobile Locators & Selectors",
    category: "Core Concepts",
    sourceUrl: "https://appium.io/docs/en/latest/guides/locators/",
    description: "Strategies for finding elements on Android and iOS: Accessibility ID, ID, XPath, UiScrollable, iOS Class Chain, and Predicate Strings.",
    sections: [
      {
        id: "locator-hierarchy",
        heading: "Recommended Locator Strategy Hierarchy",
        paragraphs: [
          "Mobile UI structures differ significantly from HTML web pages. The element tree is an Accessibility hierarchy generated by the mobile OS.",
          "Evaluating deep XPath queries across complex native mobile view hierarchies can be 10x to 50x slower than web browsers. Follow the recommended hierarchy for resilient, high-speed tests:",
        ],
        table: {
          headers: ["Priority", "Strategy", "Platform", "Performance", "Notes"],
          rows: [
            ["1 (Best)", "Accessibility ID", "Cross-Platform", "Fastest (~10ms)", "Maps to content-desc (Android) & accessibilityIdentifier (iOS)"],
            ["2", "Resource ID / ID", "Android / iOS", "Fast (~20ms)", "package:id/view_name on Android; element id on iOS"],
            ["3", "iOS Class Chain", "iOS only", "Very Fast (~25ms)", "Hierarchical search engine native to WebDriverAgent"],
            ["4", "iOS Predicate String", "iOS only", "Fast (~30ms)", "NSPredicate query evaluation on element attributes"],
            ["5", "Android UiAutomator", "Android only", "Fast (~30ms)", "Direct UiSelector and UiScrollable evaluation in Android OS"],
            ["6 (Fallback)", "XPath", "Cross-Platform", "Slow (200-2000ms)", "Recursive XML traversal; use only when no unique identifier exists"],
          ],
        },
      },
      {
        id: "accessibility-id",
        heading: "Accessibility ID (Cross-Platform Standard)",
        paragraphs: [
          "Accessibility ID is the premier locator strategy in Appium. When developers set contentDescription on Android or accessibilityIdentifier on iOS, the identical test selector works seamlessly across both platforms.",
        ],
        codeBlocks: [
          {
            title: "Locating by Accessibility ID",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `// Locate by Accessibility ID across platforms
WebElement submitButton = driver.findElement(AppiumBy.accessibilityId("submit_payment_button"));
submitButton.click();`,
              },
              {
                label: "Python",
                language: "python",
                code: `# Python AppiumBy accessibility id
from appium.webdriver.common.appiumby import AppiumBy

submit_btn = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "submit_payment_button")
submit_btn.click()`,
              },
              {
                label: "JavaScript",
                language: "javascript",
                code: `// WebdriverIO tilde (~) prefix indicates accessibility id
const submitBtn = await driver.$('~submit_payment_button');
await submitBtn.click();`,
              },
            ],
          },
        ],
      },
      {
        id: "android-uiautomator-selectors",
        heading: "Android UiSelector & UiScrollable",
        paragraphs: [
          "The -android uiautomator strategy executes Java UiSelector expressions directly inside the Android runtime on the device. It enables powerful features like searching for scrollable elements and auto-scrolling until visible.",
        ],
        codeBlocks: [
          {
            title: "Android UiScrollable & UiSelector",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `// Scroll into view automatically until element with text is found
String scrollSelector = "new UiScrollable(new UiSelector().scrollable(true))"
    + ".scrollIntoView(new UiSelector().text(\\"Payment Methods\\"))";

WebElement target = driver.findElement(AppiumBy.androidUIAutomator(scrollSelector));
target.click();`,
              },
              {
                label: "Python",
                language: "python",
                code: `# Auto-scroll to element in Python
scroll_query = (
    'new UiScrollable(new UiSelector().scrollable(true))'
    '.scrollIntoView(new UiSelector().text("Payment Methods"))'
)
target = driver.find_element(AppiumBy.ANDROID_UIAUTOMATOR, scroll_query)
target.click()`,
              },
            ],
          },
        ],
      },
      {
        id: "ios-class-chain-predicate",
        heading: "iOS Class Chain & Predicate Strings",
        paragraphs: [
          "For iOS, XCUITest provides two high-performance native locator strategies that should always be preferred over XPath:",
          "• iOS Class Chain: Expresses direct parent-child relationships and indices: **/XCUIElementTypeCell[`label == 'Settings'`]/XCUIElementTypeButton",
          "• iOS Predicate String: Formulates boolean queries on element properties (type, name, label, value, visible): label BEGINSWITH 'Order' AND visible == 1",
        ],
        codeBlocks: [
          {
            title: "iOS Native Selectors",
            tabs: [
              {
                label: "Python",
                language: "python",
                code: `# iOS Class Chain
chain = "**/XCUIElementTypeTable/XCUIElementTypeCell[\`label == 'Account'\`]"
account_cell = driver.find_element(AppiumBy.IOS_CLASS_CHAIN, chain)

# iOS Predicate String
predicate = "type == 'XCUIElementTypeButton' AND name == 'Checkout' AND visible == 1"
checkout_btn = driver.find_element(AppiumBy.IOS_PREDICATE, predicate)`,
              },
              {
                label: "Java",
                language: "java",
                code: `// iOS Class Chain
WebElement account = driver.findElement(
    AppiumBy.iOSClassChain("**/XCUIElementTypeTable/XCUIElementTypeCell[\`label == 'Account'\`]")
);

// iOS Predicate String
WebElement checkout = driver.findElement(
    AppiumBy.iOSNsPredicateString("name == 'Checkout' AND visible == 1")
);`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. GESTURES & W3C ACTIONS                                     */
  /* ------------------------------------------------------------- */
  "appium-gestures": {
    id: "appium-gestures",
    title: "Gestures & W3C Actions",
    category: "Core Concepts",
    sourceUrl: "https://appium.io/docs/en/latest/guides/gestures/",
    description: "Perform complex touch gestures: Tap, Swipe, Scroll, Drag & Drop, and Pinch-to-Zoom using the W3C Actions API and native mobile commands.",
    sections: [
      {
        id: "w3c-actions-overview",
        heading: "W3C Actions vs Deprecated TouchAction",
        paragraphs: [
          "In early Appium versions, gestures were performed using the proprietary TouchAction and MultiTouchAction helper classes. In Appium 2.x and modern WebDriver specifications, TouchAction is completely deprecated and removed.",
          "Mobile gestures are now performed through two standardized approaches:",
          "1. W3C Actions API: Standardized cross-platform pointer sequences with pointerDown, pointerMove, and pointerUp.",
          "2. Native Mobile Execution Commands: High-level driver extensions called via driver.executeScript('mobile: <gesture>', args) (e.g. mobile: swipeGesture, mobile: scrollGesture).",
        ],
        callouts: [
          {
            type: "warning",
            title: "TouchAction is Deprecated",
            text: "Do not import or use TouchAction or MultiTouchAction in Appium 2+. Use W3C pointer actions or native mobile: executeScript commands.",
          },
        ],
      },
      {
        id: "native-mobile-commands",
        heading: "Native Mobile Execution Gestures (Recommended)",
        paragraphs: [
          "UiAutomator2 and XCUITest implement optimized native gesture extensions that avoid manual coordinate math and deliver buttery-smooth, reliable execution.",
        ],
        codeBlocks: [
          {
            title: "Native Mobile Gestures across Android & iOS",
            tabs: [
              {
                label: "Android Swipe (Python)",
                language: "python",
                code: `# Android native swipeGesture using execute_script
element = driver.find_element(AppiumBy.ID, "com.example:id/feed_container")

driver.execute_script("mobile: swipeGesture", {
    "elementId": element.id,
    "direction": "up",
    "percent": 0.75,
    "speed": 1000
})`,
              },
              {
                label: "Android Scroll (Java)",
                language: "java",
                code: `// Android native scrollGesture
WebElement scrollableArea = driver.findElement(AppiumBy.id("com.example:id/list"));

driver.executeScript("mobile: scrollGesture", Map.of(
    "elementId", ((RemoteWebElement) scrollableArea).getId(),
    "direction", "down",
    "percent", 1.0
));`,
              },
              {
                label: "iOS Swipe & Scroll (Java)",
                language: "java",
                code: `// iOS native scroll command
driver.executeScript("mobile: scroll", Map.of(
    "direction", "down"
));

// iOS native drag & drop
driver.executeScript("mobile: dragFromToForDuration", Map.of(
    "fromX", 100,
    "fromY", 200,
    "toX", 100,
    "toY", 600,
    "duration", 1.5
));`,
              },
              {
                label: "JavaScript (WebdriverIO)",
                language: "javascript",
                code: `// WebdriverIO Android swipe gesture
const container = await $('~feed_view');
await driver.execute('mobile: swipeGesture', {
  elementId: container.elementId,
  direction: 'up',
  percent: 0.8,
});`,
              },
            ],
          },
        ],
      },
      {
        id: "w3c-pointer-actions",
        heading: "Custom W3C Pointer Action Sequence",
        paragraphs: [
          "For advanced multi-finger gestures such as Pinch & Zoom, or drawing signatures on screen, build a standard W3C PointerInput action chain.",
        ],
        codeBlocks: [
          {
            title: "W3C Pointer Input Swipe Example",
            tabs: [
              {
                label: "Java",
                language: "java",
                code: `PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
Sequence swipe = new Sequence(finger, 1);

// Move to start coordinates
swipe.addAction(finger.createPointerMove(Duration.ZERO, PointerInput.Origin.viewport(), 500, 1500));
// Press down
swipe.addAction(finger.createPointerDown(PointerInput.MouseButton.LEFT.asArg()));
// Move finger up to scroll down
swipe.addAction(finger.createPointerMove(Duration.ofMillis(600), PointerInput.Origin.viewport(), 500, 500));
// Release finger
swipe.addAction(finger.createPointerUp(PointerInput.MouseButton.LEFT.asArg()));

driver.perform(Collections.singletonList(swipe));`,
              },
              {
                label: "Python",
                language: "python",
                code: `from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions import interaction
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput

actions = ActionChains(driver)
touch_input = PointerInput(interaction.POINTER_TOUCH, "touch")
actions.w3c_actions = ActionBuilder(driver, mouse=touch_input)

# Move, press, drag, and release
actions.w3c_actions.pointer_action.move_to_location(500, 1500)
actions.w3c_actions.pointer_action.pointer_down()
actions.w3c_actions.pointer_action.pause(0.2)
actions.w3c_actions.pointer_action.move_to_location(500, 500)
actions.w3c_actions.pointer_action.pointer_up()
actions.perform()`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. DRIVERS & PLUGINS ECOSYSTEM                                */
  /* ------------------------------------------------------------- */
  "appium-drivers-plugins": {
    id: "appium-drivers-plugins",
    title: "Drivers & Plugins Ecosystem",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://appium.io/docs/en/latest/ecosystem/",
    description: "Explore the Appium 2.x ecosystem of drivers (UiAutomator2, XCUITest, Espresso, Mac2, Windows) and community plugins.",
    sections: [
      {
        id: "driver-management",
        heading: "Driver Management CLI",
        paragraphs: [
          "Appium drivers are independent Node.js packages maintained by the Appium team and open source contributors. You can manage drivers directly from the terminal without reinstalling the Appium server.",
        ],
        codeBlocks: [
          {
            title: "Driver Management Commands",
            tabs: [
              {
                label: "Commands",
                language: "bash",
                code: `# List officially recognized and installed drivers
appium driver list

# Install official drivers
appium driver install uiautomator2
appium driver install xcuitest
appium driver install espresso
appium driver install mac2
appium driver install windows

# Update installed drivers to the latest versions
appium driver update uiautomator2

# Check driver-specific dependencies and environment
appium driver doctor uiautomator2`,
              },
            ],
          },
        ],
      },
      {
        id: "official-drivers-table",
        heading: "Core Drivers Overview",
        paragraphs: [
          "Select the driver tailored to your target platform and testing objectives:",
        ],
        table: {
          headers: ["Driver", "Platform", "Underlying Tech", "Best For"],
          rows: [
            ["uiautomator2", "Android", "Google UiAutomator2", "Standard Android native and hybrid automation"],
            ["xcuitest", "iOS / iPadOS / tvOS", "Apple XCUITest / WDA", "Standard iOS native and hybrid automation"],
            ["espresso", "Android", "Google AndroidX Espresso", "High-speed gray-box testing with internal access"],
            ["mac2", "macOS", "Apple Accessibility API", "Automating macOS native desktop software"],
            ["windows", "Windows 10/11", "Windows Application Driver", "Automating Win32, WPF, and UWP desktop apps"],
            ["flutter", "Flutter Apps", "Flutter Driver API", "Direct Flutter widget tree automation"],
          ],
        },
      },
      {
        id: "plugins-overview",
        heading: "Extending Appium with Plugins",
        paragraphs: [
          "Plugins intercept and modify Appium commands before or after they reach drivers. They can inject new HTTP endpoints, alter session startup, manage hardware, or provide AI-powered element matching.",
        ],
        codeBlocks: [
          {
            title: "Plugin CLI Commands",
            tabs: [
              {
                label: "Plugin Management",
                language: "bash",
                code: `# List available and installed plugins
appium plugin list

# Install the official Images plugin (OpenCV visual matching)
appium plugin install images

# Install Appium Device Farm plugin
appium plugin install device-farm

# Start Appium server activating the installed plugins
appium --use-plugins=images,device-farm`,
              },
            ],
          },
        ],
      },
      {
        id: "popular-plugins",
        heading: "High-Impact Official Plugins",
        paragraphs: [
          "• @appium/images-plugin: Enables visual element location using OpenCV image template matching (-image selector strategy). Indispensable for gaming apps and canvas elements.",
          "• appium-device-farm: Orchestrates multiple connected physical Android and iOS devices into an enterprise test grid with video streaming, device allocation, and dashboard reporting.",
          "• @appium/relaxed-caps-plugin: Allows legacy capability names without requiring the strict appium: prefix, smoothing migration from Appium 1.x.",
          "• appium-reporter-plugin: Generates rich HTML execution reports with screenshots, logs, and video attachments after test runs.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. APPIUM SERVER CLI & CONFIGURATION                         */
  /* ------------------------------------------------------------- */
  "appium-server-cli": {
    id: "appium-server-cli",
    title: "Server CLI & Configuration",
    category: "Tooling & Infrastructure",
    sourceUrl: "https://appium.io/docs/en/latest/guides/config/",
    description: "Configure the Appium server using CLI arguments, configuration files (appium.config.json), and explore debugging with Appium Inspector.",
    sections: [
      {
        id: "cli-flags",
        heading: "Essential Server CLI Arguments",
        paragraphs: [
          "When starting the Appium server, CLI arguments configure networking, logging, and security restrictions:",
        ],
        table: {
          headers: ["CLI Argument", "Short Flag", "Default", "Description"],
          rows: [
            ["--address <ip>", "-a", "0.0.0.0", "IPv4/IPv6 address to listen on"],
            ["--port <number>", "-p", "4723", "Port number for the HTTP server"],
            ["--base-path <path>", "-pa", "/", "Base URL path prefix (use /wd/hub for legacy v1 compatibility)"],
            ["--log <file>", "-g", "stdout", "Path to write server output logs to disk"],
            ["--log-level <level>", "none", "info", "Log verbosity: 'info', 'debug', 'warn', 'error'"],
            ["--allow-insecure <feat>", "none", "none", "Comma-separated list of insecure features to enable (e.g. adb_shell)"],
            ["--deny-insecure <feat>", "none", "none", "Comma-separated list of features to explicitly prohibit"],
            ["--use-drivers <list>", "none", "all", "Explicit list of drivers to load on startup"],
            ["--use-plugins <list>", "none", "none", "Explicit list of plugins to activate"],
          ],
        },
      },
      {
        id: "configuration-files",
        heading: "Declarative Configuration Files",
        paragraphs: [
          "Instead of passing long CLI arguments, Appium 2.x supports declarative configuration files (appium.config.json, .appiumrc.json, or appium.config.yaml). Place the file in your project root or pass it via --config.",
        ],
        codeBlocks: [
          {
            title: "appium.config.json Example",
            tabs: [
              {
                label: "JSON Config",
                language: "json",
                code: `{
  "server": {
    "address": "127.0.0.1",
    "port": 4723,
    "basePath": "/",
    "log": "./logs/appium-server.log",
    "logLevel": "info",
    "allowInsecure": ["adb_shell"],
    "useDrivers": ["uiautomator2", "xcuitest"],
    "usePlugins": ["images"]
  }
}`,
              },
              {
                label: "Start with Config",
                language: "bash",
                code: `# Appium will automatically detect appium.config.json in the current working directory:
appium

# Or specify a custom config file path:
appium --config ./configs/ci-appium.json`,
              },
            ],
          },
        ],
      },
      {
        id: "security-insecure-features",
        heading: "Security & Insecure Feature Flags",
        paragraphs: [
          "For security reasons, powerful OS capabilities that could expose the host machine or connected device (such as executing arbitrary adb shell commands) are disabled by default.",
          "To enable shell script execution via mobile: shell, start the server with the adb_shell flag explicitly whitelisted:",
        ],
        codeBlocks: [
          {
            title: "Enabling Shell Execution",
            tabs: [
              {
                label: "CLI Flag",
                language: "bash",
                code: `# Allow adb_shell feature
appium --allow-insecure=adb_shell

# Or allow multiple features
appium --allow-insecure=adb_shell,chromedriver_autodownload`,
              },
            ],
          },
        ],
      },
      {
        id: "appium-inspector",
        heading: "Visual Debugging with Appium Inspector",
        paragraphs: [
          "Appium Inspector is a dedicated desktop application (available for macOS, Windows, and Linux) that provides a visual interface for inspecting mobile app screens.",
          "With Appium Inspector, you can:",
          "• View the live interactive screenshot and XML accessibility hierarchy tree of your application.",
          "• Click any UI component to inspect its Accessibility ID, Resource ID, Class Name, and XPath.",
          "• Record taps, swipes, and text input to generate ready-to-run automation code in Python, Java, or JS.",
          "• Test capabilities configurations before writing test code.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Download Appium Inspector",
            text: "Appium Inspector is distributed as a standalone app or web browser tool at https://inspector.appiumpro.com/ or https://github.com/appium/appium-inspector/releases.",
          },
        ],
      },
    ],
  },
};
