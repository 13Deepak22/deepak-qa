import type { DocCategory } from "./learn-docs-data";
import type { DetailedDoc } from "./learn-extended-docs";

export const JMETER_CATEGORIES: DocCategory[] = [
  {
    title: "Overview",
    id: "jmeter-overview",
    isDirectLink: true,
    defaultOpen: false,
    items: [{ id: "jmeter-overview", text: "Overview" }],
  },
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { id: "jmeter-quickstart", text: "Installation & GUI" },
      { id: "jmeter-test-plan", text: "Building a Test Plan" },
    ],
  },
  {
    title: "Core Components",
    defaultOpen: true,
    items: [
      { id: "jmeter-thread-groups", text: "Thread Groups & Workloads" },
      { id: "jmeter-samplers-controllers", text: "Samplers & Controllers" },
      { id: "jmeter-config-data", text: "Config Elements & CSV" },
      { id: "jmeter-assertions-processors", text: "Assertions, Timers & JSR223" },
    ],
  },
  {
    title: "Execution & Reporting",
    defaultOpen: false,
    items: [
      { id: "jmeter-cli-execution", text: "CLI (Non-GUI) Mode" },
      { id: "jmeter-distributed-testing", text: "Distributed Testing" },
      { id: "jmeter-reporting-dashboard", text: "HTML Dashboard & Metrics" },
    ],
  },
];

export const JMETER_DOCS: Record<string, DetailedDoc> = {
  /* ------------------------------------------------------------- */
  /* 1. OVERVIEW                                                   */
  /* ------------------------------------------------------------- */
  "jmeter-overview": {
    id: "jmeter-overview",
    title: "Apache JMeter Load & Performance Testing",
    category: "Overview",
    sourceUrl: "https://jmeter.apache.org/usermanual/get-started.html",
    description: "Apache JMeter is an open-source, 100% pure Java desktop application designed to load test functional behavior and measure system performance.",
    sections: [
      {
        id: "what-is-jmeter",
        heading: "What is Apache JMeter?",
        paragraphs: [
          "Apache JMeter is a flagship project of the Apache Software Foundation, widely recognized as the industry standard open-source performance, load, stress, and endurance testing tool.",
          "Originally developed by Stefano Mazzocchi to test Apache JServ (a precursor to Apache Tomcat), JMeter has evolved into an extensible, protocol-agnostic load generation engine.",
          "JMeter simulates heavy loads on servers, networks, or objects to test their strength or analyze overall performance under various workload conditions. It can generate concurrent virtual user traffic against web applications, REST APIs, SOAP services, databases, message queues, and FTP servers.",
        ],
        callouts: [
          {
            type: "warning",
            title: "JMeter is Not a Browser",
            text: "JMeter does not render HTML pages, execute client-side JavaScript, or download CSS styling automatically unless explicitly configured. It operates at the network protocol layer (HTTP, TCP, JDBC) to generate massive concurrent traffic with minimal CPU and memory overhead.",
          },
        ],
      },
      {
        id: "protocols-supported",
        heading: "Supported Protocols & Technologies",
        paragraphs: [
          "JMeter provides native support for generating load across a broad array of enterprise protocols:",
        ],
        table: {
          headers: ["Protocol / Technology", "Key Samplers", "Use Cases"],
          rows: [
            ["Web (HTTP, HTTPS)", "HTTP Request", "REST APIs, GraphQL, Microservices, Web Portals"],
            ["Web Services", "HTTP Request (SOAP/XML)", "Legacy enterprise SOAP endpoints & WSDL services"],
            ["Databases (JDBC)", "JDBC Request", "Direct database query load, connection pool stress testing"],
            ["Message Queues (JMS)", "JMS Publisher, JMS Subscriber", "Apache Kafka, ActiveMQ, RabbitMQ messaging throughput"],
            ["Mail (POP3, IMAP, SMTP)", "Mail Reader Sampler, SMTP Sampler", "Email delivery speed and mail server capacity"],
            ["TCP & Sockets", "TCP Sampler", "Custom binary protocols, raw TCP socket throughput"],
            ["Shell / OS Commands", "OS Process Sampler", "System-level benchmark scripts and utilities"],
            ["Java Objects", "Java Request, JUnit Request", "Custom Java libraries and internal micro-benchmarks"],
          ],
        },
      },
      {
        id: "execution-model",
        heading: "Architecture & Execution Model",
        paragraphs: [
          "JMeter executes inside the Java Virtual Machine (JVM). Each virtual user is represented by an independent Java Thread:",
          "• Multi-Threaded Concurrency: Threads execute in parallel according to your configured Thread Group properties (number of users, ramp-up time, loop count).",
          "• Non-Blocking JVM Tuning: For high-concurrency testing, JMeter's heap memory can be tuned via -Xms and -Xmx environment variables.",
          "• Extensible Architecture: Plugins can be added to the /lib/ext directory to inject custom samplers, listeners, and thread groups via the JMeter Plugins Manager.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 2. QUICKSTART & INSTALLATION                                  */
  /* ------------------------------------------------------------- */
  "jmeter-quickstart": {
    id: "jmeter-quickstart",
    title: "Installation & Launching the GUI",
    category: "Getting Started",
    sourceUrl: "https://jmeter.apache.org/usermanual/get-started.html#install",
    description: "Install Apache JMeter, verify Java runtime prerequisites, configure heap memory, and navigate the JMeter desktop interface.",
    sections: [
      {
        id: "prerequisites",
        heading: "Prerequisites & Java Version",
        paragraphs: [
          "JMeter is 100% Java-based and requires a fully compliant 64-bit Java Runtime Environment (JRE) or Java Development Kit (JDK):",
          "• Java 8, 11, 17, or 21 (64-bit recommended).",
          "• Check your current Java installation by running java -version in your terminal.",
          "• Ensure the JAVA_HOME environment variable is properly set in your system environment.",
        ],
      },
      {
        id: "download-install",
        heading: "Downloading & Installing JMeter",
        paragraphs: [
          "JMeter requires no complex installation wizard. Simply download the binary archive and unpack it to your preferred directory:",
        ],
        codeBlocks: [
          {
            title: "Download & Unpack Binary Archive",
            tabs: [
              {
                label: "Linux / macOS",
                language: "bash",
                code: `# Download latest Apache JMeter binary
wget https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.tgz

# Extract archive
tar -xzf apache-jmeter-5.6.3.tgz
cd apache-jmeter-5.6.3

# Launch JMeter GUI
./bin/jmeter`,
              },
              {
                label: "Windows (PowerShell)",
                language: "powershell",
                code: `# Download archive
Invoke-WebRequest -Uri "https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.zip" -OutFile "jmeter.zip"

# Unzip archive
Expand-Archive -Path "jmeter.zip" -DestinationPath "C:\\Tools\\JMeter"
cd "C:\\Tools\\JMeter\\apache-jmeter-5.6.3"

# Launch JMeter GUI
.\\bin\\jmeter.bat`,
              },
              {
                label: "Homebrew (macOS)",
                language: "bash",
                code: `# Install via Homebrew
brew install jmeter

# Launch
jmeter`,
              },
            ],
          },
        ],
      },
      {
        id: "heap-memory-tuning",
        heading: "Configuring JVM Heap Memory",
        paragraphs: [
          "By default, JMeter allocates 1 GB of heap memory. For load tests simulating hundreds or thousands of threads, adjust the initial (-Xms) and maximum (-Xmx) heap size in bin/jmeter.bat or bin/jmeter.sh:",
        ],
        codeBlocks: [
          {
            title: "Set JVM Memory Heap",
            tabs: [
              {
                label: "Environment Variable",
                language: "bash",
                code: `# Override heap memory via JVM_ARGS
export JVM_ARGS="-Xms2g -Xmx4g -XX:+UseG1GC"
jmeter`,
              },
              {
                label: "Windows CMD",
                language: "batch",
                code: `:: Set heap memory in Windows
set JVM_ARGS=-Xms2g -Xmx4g -XX:+UseG1GC
bin\\jmeter.bat`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "Garbage Collection Optimization",
            text: "Use the G1 Garbage Collector (-XX:+UseG1GC) for low-pause-time garbage collection when executing high-throughput load tests.",
          },
        ],
      },
      {
        id: "gui-layout",
        heading: "Navigating the JMeter GUI",
        paragraphs: [
          "The JMeter GUI window is organized into three primary regions:",
          "1. Left Tree Pane: Displays your hierarchical Test Plan elements (Thread Groups, Samplers, Logic Controllers, Listeners). Right-click any node to add child elements.",
          "2. Right Configuration Pane: Shows settings, parameters, and inputs for the currently selected tree item.",
          "3. Top Toolbar: Start/Stop buttons, Clear Results, Search, and elapsed run-time indicators.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 3. BUILDING A TEST PLAN                                       */
  /* ------------------------------------------------------------- */
  "jmeter-test-plan": {
    id: "jmeter-test-plan",
    title: "Building a Web Test Plan",
    category: "Getting Started",
    sourceUrl: "https://jmeter.apache.org/usermanual/build-web-test-plan.html",
    description: "Step-by-step instructions to create an end-to-end web performance test plan from scratch with HTTP defaults and Cookie management.",
    sections: [
      {
        id: "test-plan-elements",
        heading: "Essential Components of a Test Plan",
        paragraphs: [
          "Every realistic web or API test plan consists of five essential element layers organized hierarchically under the root Test Plan node:",
          "1. Thread Group: Configures virtual users, ramp-up period, and duration.",
          "2. Config Elements: HTTP Request Defaults, HTTP Header Manager, and HTTP Cookie Manager.",
          "3. Samplers: HTTP Request samplers targeting specific API endpoints.",
          "4. Timers: Simulates human user think time between actions.",
          "5. Listeners: Captures results, status codes, latency, and throughput.",
        ],
      },
      {
        id: "step-by-step-web-test",
        heading: "Step-by-Step: Creating a Web Test Plan",
        paragraphs: [
          "Follow these steps in the JMeter GUI:",
          "Step 1: Add a Thread Group (Right-click Test Plan -> Add -> Threads (Users) -> Thread Group). Set Number of Threads to 50, Ramp-up to 30s, and Loop Count to 5.",
          "Step 2: Add HTTP Request Defaults (Right-click Thread Group -> Add -> Config Element -> HTTP Request Defaults). Set Protocol to https and Server Name or IP to api.example.com.",
          "Step 3: Add HTTP Cookie Manager (Right-click Thread Group -> Add -> Config Element -> HTTP Cookie Manager). Check 'Clear cookies each iteration' to emulate unique user sessions.",
          "Step 4: Add HTTP Header Manager (Right-click Thread Group -> Add -> Config Element -> HTTP Header Manager). Add Content-Type: application/json.",
          "Step 5: Add HTTP Request Samplers (Right-click Thread Group -> Add -> Sampler -> HTTP Request). Set Method to GET or POST and Path to /api/v1/products.",
          "Step 6: Add View Results Tree & Summary Report (Right-click Thread Group -> Add -> Listener -> View Results Tree).",
        ],
        callouts: [
          {
            type: "note",
            title: "Saving Test Plans",
            text: "JMeter saves test plans as .jmx files (JMeter XML format). Always commit .jmx files into Git version control for CI/CD automation.",
          },
        ],
      },
      {
        id: "jmx-xml-format",
        heading: "Understanding the .jmx File Format",
        paragraphs: [
          "A .jmx file is standard XML representing the serialized tree of JMeter components, properties, and values:",
        ],
        codeBlocks: [
          {
            title: "Sample JMX XML Structure",
            tabs: [
              {
                label: "test-plan.jmx",
                language: "xml",
                code: `<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.6.3">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Deepak QA Load Suite" enabled="true">
      <stringProp name="TestPlan.comments">Enterprise API Performance Test</stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Concurrent Users" enabled="true">
        <stringProp name="ThreadGroup.num_threads">50</stringProp>
        <stringProp name="ThreadGroup.ramp_time">30</stringProp>
        <boolProp name="ThreadGroup.scheduler">false</boolProp>
        <stringProp name="ThreadGroup.duration"></stringProp>
        <stringProp name="ThreadGroup.delay"></stringProp>
      </ThreadGroup>
      <hashTree/>
    </hashTree>
  </hashTree>
</jmeterTestPlan>`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. THREAD GROUPS & WORKLOADS                                  */
  /* ------------------------------------------------------------- */
  "jmeter-thread-groups": {
    id: "jmeter-thread-groups",
    title: "Thread Groups & Workload Models",
    category: "Core Components",
    sourceUrl: "https://jmeter.apache.org/usermanual/test_plan.html#threadgroup",
    description: "Design realistic workload models: Smoke, Baseline, Load, Stress, Spike, and Soak/Endurance testing.",
    sections: [
      {
        id: "thread-group-parameters",
        heading: "Core Thread Group Parameters",
        paragraphs: [
          "A Thread Group controls the virtual user pool and execution schedule for all child samplers:",
          "• Number of Threads (Users): Number of simulated concurrent users.",
          "• Ramp-Up Period (seconds): Time taken to start all threads. If Number of Threads is 100 and Ramp-Up is 50 seconds, JMeter starts 2 new threads every second (100 / 50 = 2 threads/sec).",
          "• Loop Count: Number of iterations each thread executes. Can be set to 'Infinite'.",
          "• Same user on each iteration: Controls whether HTTP sessions and cookies are retained or wiped across loops.",
          "• Specify Thread Lifetime (Scheduler): Allows setting an exact Duration (e.g., 3600 seconds for 1 hour) and Startup Delay.",
        ],
      },
      {
        id: "workload-testing-types",
        heading: "Common Performance Testing Workload Models",
        paragraphs: [
          "Performance engineering requires modeling distinct workload shapes to answer specific architectural questions:",
        ],
        table: {
          headers: ["Test Type", "Purpose", "Workload Shape", "Duration"],
          rows: [
            ["Smoke Test", "Validate that the test plan executes without functional errors", "1-5 threads, 1 iteration", "1-2 minutes"],
            ["Baseline Test", "Establish single-user performance benchmarks and clean metrics", "5-10 threads, steady rate", "10-15 minutes"],
            ["Load Test", "Validate performance under expected peak production traffic", "Target peak concurrency (e.g. 500 threads)", "30-60 minutes"],
            ["Stress Test", "Determine breaking point and identify memory / connection exhaustion", "Gradually ramp up until error rate spikes", "1-2 hours"],
            ["Spike Test", "Evaluate system stability during sudden extreme bursts (flash sales)", "Instant jump from 10 to 1,000 threads", "5-10 minutes"],
            ["Soak / Endurance", "Identify memory leaks, resource degradation, and connection pool leaks", "70-80% peak load sustained continuously", "8-24 hours"],
          ],
        },
      },
      {
        id: "custom-thread-groups",
        heading: "Advanced Thread Groups via JMeter Plugins",
        paragraphs: [
          "For complex real-world schedules, install the Custom Thread Groups plugin via JMeter Plugins Manager:",
          "• Concurrency Thread Group: Defines load in terms of target concurrency with stepped ramp-up stages and steady-state holding periods.",
          "• Ultimate Thread Group: Supports multi-wave schedules with independent ramp-up, peak hold, and ramp-down times per thread segment.",
          "• Arrival Rate Thread Group: Controls user arrival rate (virtual users per minute) rather than active thread count.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 5. SAMPLERS & CONTROLLERS                                     */
  /* ------------------------------------------------------------- */
  "jmeter-samplers-controllers": {
    id: "jmeter-samplers-controllers",
    title: "Samplers & Logic Controllers",
    category: "Core Components",
    sourceUrl: "https://jmeter.apache.org/usermanual/component_reference.html#samplers",
    description: "Execute HTTP requests, database queries, and custom code, and control test flow with Transaction, Loop, and If controllers.",
    sections: [
      {
        id: "essential-samplers",
        heading: "Essential JMeter Samplers",
        paragraphs: [
          "Samplers instruct JMeter to send requests to target servers and wait for responses:",
          "• HTTP Request: The most widely used sampler. Supports GET, POST, PUT, DELETE, PATCH, and multipart file uploads.",
          "• JDBC Request: Executes SQL queries (SELECT, INSERT, UPDATE) against relational databases configured via a JDBC Connection Configuration element.",
          "• JSR223 Sampler: Executes custom Groovy scripts to perform custom computations, payload decryption, or mock data generation.",
          "• Dummy Sampler (Plugin): Simulates custom responses with configurable response codes, latency, and payload without hitting a real server.",
        ],
      },
      {
        id: "logic-controllers",
        heading: "Logic Controllers & Execution Flow",
        paragraphs: [
          "Logic Controllers control the order and conditionality of Sampler execution:",
        ],
        table: {
          headers: ["Controller", "Behavior", "Typical QA Use Case"],
          rows: [
            ["Transaction Controller", "Aggregates timings of all child samplers into a single composite metric", "Measure complete user journey: 'Checkout Flow'"],
            ["Once Only Controller", "Executes child elements only during the first iteration per thread", "User Authentication / Login step"],
            ["If Controller", "Evaluates boolean expression before running child samplers", "Run payment step only if cart item count > 0"],
            ["Loop Controller", "Repeats child requests N times or until condition is met", "Poll order status endpoint until completed"],
            ["Random Controller", "Picks one child sampler at random per iteration", "Simulate diverse user browsing behaviors"],
            ["Runtime Controller", "Limits execution time of child samplers to a fixed number of seconds", "Run browsing actions for exactly 120 seconds"],
          ],
        },
      },
      {
        id: "if-controller-syntax",
        heading: "If Controller Expression Syntax",
        paragraphs: [
          "In modern JMeter, always check 'Interpret Condition as Variable Expression?' and use Groovy expressions for optimal performance:",
        ],
        codeBlocks: [
          {
            title: "If Controller Condition Examples",
            tabs: [
              {
                label: "Groovy Expressions",
                language: "groovy",
                code: `// Check if variable equals string
\${__groovy(vars.get('HTTP_CODE') == '200')}

// Check numeric value
\${__groovy(vars.get('ITEM_COUNT').toInteger() > 0)}

// Check boolean variable
\${__groovy(vars.get('IS_LOGGED_IN') == 'true')}`,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 6. CONFIG ELEMENTS & CSV DATA                                 */
  /* ------------------------------------------------------------- */
  "jmeter-config-data": {
    id: "jmeter-config-data",
    title: "Configuration Elements & CSV Data",
    category: "Core Components",
    sourceUrl: "https://jmeter.apache.org/usermanual/component_reference.html#Configuration_Elements",
    description: "Parameterize test plans using CSV Data Set Config, User Defined Variables, and HTTP Header/Cookie Managers.",
    sections: [
      {
        id: "csv-data-set-config",
        heading: "CSV Data Set Config (Data-Driven Load Testing)",
        paragraphs: [
          "The CSV Data Set Config element reads rows from external CSV or TSV files to supply unique test credentials, product IDs, and search terms to virtual users on each iteration.",
        ],
        codeBlocks: [
          {
            title: "CSV Configuration Settings",
            tabs: [
              {
                label: "CSV Settings",
                language: "text",
                code: `Filename:                     test-data/users.csv
File encoding:                UTF-8
Variable Names (comma-delim): username,password,expectedRole
Ignore first line:            False
Delimiter:                    ,
Allow quoted data?:           True
Recycle on EOF?:              True
Stop thread on EOF?:          False
Sharing mode:                 All threads`,
              },
              {
                label: "users.csv",
                language: "text",
                code: `admin_user,SecretPass123!,ADMIN
qa_tester_01,Test@2026,TESTER
qa_tester_02,Test@2026,TESTER
guest_user_99,Guest#42,VIEWER`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "Sharing Mode Options",
            text: "• All threads: All threads share the single CSV file sequentially (recommended for user pools). • Current thread group: Each thread group reads the file independently. • Current thread: Each thread reads from row 1.",
          },
        ],
      },
      {
        id: "user-defined-variables",
        heading: "User Defined Variables (UDV)",
        paragraphs: [
          "The User Defined Variables config element centralizes global constants across your test plan. Variables defined here are initialized before any thread group starts executing:",
          "• HOST: api.deepak-qa.io",
          "• PORT: 443",
          "• PROTOCOL: https",
          "• BASE_PATH: /api/v2",
          "Reference them anywhere in your test plan using the ${VAR_NAME} syntax: ${PROTOCOL}://${HOST}:${PORT}${BASE_PATH}/users",
        ],
      },
      {
        id: "http-cookie-cache-manager",
        heading: "HTTP Cookie & Cache Managers",
        paragraphs: [
          "To accurately simulate real browser client behavior:",
          "• HTTP Cookie Manager: Stores and automatically sends cookies received from the server (e.g. JSESSIONID, session tokens). Check 'Clear cookies each iteration' to treat each loop as a clean browser session.",
          "• HTTP Cache Manager: Emulates browser caching mechanisms (Cache-Control, ETag, Last-Modified) so static assets and unchanged responses are not re-downloaded repeatedly.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 7. ASSERTIONS, TIMERS & JSR223                               */
  /* ------------------------------------------------------------- */
  "jmeter-assertions-processors": {
    id: "jmeter-assertions-processors",
    title: "Assertions, Timers & JSR223 Scripting",
    category: "Core Components",
    sourceUrl: "https://jmeter.apache.org/usermanual/component_reference.html#Assertions",
    description: "Validate server responses, inject realistic user think times, and write high-performance Groovy scripts with JSR223.",
    sections: [
      {
        id: "response-assertions",
        heading: "Validating Responses with Assertions",
        paragraphs: [
          "Assertions verify that the server response conforms to expected criteria. If an assertion fails, JMeter marks the sample as failed in test reports:",
          "• Response Assertion: Checks response headers, response code (e.g. 200, 201), or response body using Substring, Contains, or Perl-compatible Regular Expressions (PCRE).",
          "• JSON Assertion: Validates JSON responses using JSONPath expressions (e.g., $.data.status equals 'SUCCESS').",
          "• Duration Assertion: Fails if the sampler response time exceeds a maximum threshold in milliseconds (e.g. 500ms SLA).",
          "• Size Assertion: Verifies that response byte length is greater or less than expected values.",
        ],
      },
      {
        id: "timers-think-time",
        heading: "Timers (Think Time Simulation)",
        paragraphs: [
          "By default, JMeter sends requests without pausing, which creates unrealistic hammering on target servers. Timers introduce delays between samplers to mimic human reading and interaction pauses:",
          "• Constant Timer: Applies a fixed millisecond delay (e.g. 2000 ms).",
          "• Uniform Random Timer: Generates a random delay with a constant offset: (Random Number * Random Delay Maximum) + Constant Delay Offset.",
          "• Gaussian Random Timer: Uses a normal Gaussian distribution around a mean delay.",
          "• Constant Throughput Timer: Dynamically adjusts delays to maintain a specific target requests-per-minute (RPM) rate.",
        ],
      },
      {
        id: "jsr223-groovy-scripting",
        heading: "JSR223 Pre/Post Processors with Groovy",
        paragraphs: [
          "For custom logic, data manipulation, or cryptographic signature generation, use JSR223 Pre-Processor, JSR223 Post-Processor, or JSR223 Sampler with the Groovy language.",
          "Key implicit objects available in JSR223 scripts:",
          "• vars: JMeterVariables object (vars.get('name'), vars.put('name', 'val')). Thread-safe.",
          "• props: JMeterProperties object (props.get('prop'), props.put('prop', 'val')). Global across all threads.",
          "• prev: SampleResult object for previous sampler (prev.getResponseDataAsString(), prev.isSuccessful()).",
          "• ctx: JMeterContext object providing thread information.",
          "• log: Logger object (log.info('Message'), log.error('Error')).",
        ],
        codeBlocks: [
          {
            title: "Production Groovy JSR223 Script Examples",
            tabs: [
              {
                label: "Post-Processor (JSON Parse)",
                language: "groovy",
                code: `import groovy.json.JsonSlurper

// Parse response JSON payload
def response = prev.getResponseDataAsString()
def json = new JsonSlurper().parseText(response)

// Extract auth token and store in variable
if (json.token) {
    vars.put("AUTH_TOKEN", json.token)
    log.info("Extracted Token successfully: " + json.token.take(10) + "...")
} else {
    prev.setSuccessful(false)
    prev.setResponseMessage("Missing authentication token in response")
}`,
              },
              {
                label: "Pre-Processor (HMAC Signature)",
                language: "groovy",
                code: `import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

def secret = "deepak_qa_secret_key"
def timestamp = System.currentTimeMillis().toString()
def message = "GET:/api/v1/orders:" + timestamp

Mac mac = Mac.getInstance("HmacSHA256")
mac.init(new SecretKeySpec(secret.bytes, "HmacSHA256"))
def signature = mac.doFinal(message.bytes).encodeHex().toString()

vars.put("TIMESTAMP", timestamp)
vars.put("SIGNATURE", signature)`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "JSR223 Best Practice",
            text: "Always select 'Groovy' as the scripting language and keep 'Cache compiled script if available' checked. Groovy compiles directly to native Java bytecode, running up to 100x faster than Beanshell or JavaScript.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 8. CLI (NON-GUI) MODE EXECUTION                               */
  /* ------------------------------------------------------------- */
  "jmeter-cli-execution": {
    id: "jmeter-cli-execution",
    title: "CLI (Non-GUI) Mode Execution",
    category: "Execution & Reporting",
    sourceUrl: "https://jmeter.apache.org/usermanual/get-started.html#non_gui",
    description: "Execute load tests without GUI overhead, configure CLI parameters, and generate full HTML dashboard reports.",
    sections: [
      {
        id: "why-cli-mode",
        heading: "Best Practice Rule #1: Never Run Load in GUI Mode",
        paragraphs: [
          "The official Apache JMeter documentation explicitly states:",
          "'Don't run load tests in GUI mode! Use GUI mode ONLY for Test Plan creation and Test debugging.'",
          "The Java Swing GUI engine consumes massive memory and CPU resources to render table views, graphs, and tree structures. Running load in GUI mode creates severe client-side resource contention that skews latency measurements and leads to premature OutOfMemory errors.",
        ],
      },
      {
        id: "cli-command-syntax",
        heading: "CLI Execution Command Syntax",
        paragraphs: [
          "Execute headless load tests using the standard jmeter command line flags:",
        ],
        codeBlocks: [
          {
            title: "Standard Headless Load Execution Command",
            tabs: [
              {
                label: "Terminal (Bash)",
                language: "bash",
                code: `# Execute test plan headlessly, log samples to results.jtl, and generate HTML dashboard
jmeter -n \\
  -t ./test-plans/api-load-suite.jmx \\
  -l ./results/run-2026.jtl \\
  -e -o ./reports/html-dashboard/ \\
  -Jthreads=100 \\
  -Jrampup=30 \\
  -Jduration=600`,
              },
              {
                label: "Windows (PowerShell)",
                language: "powershell",
                code: `# Windows execution
.\\bin\\jmeter.bat -n \`
  -t .\\test-plans\\api-load-suite.jmx \`
  -l .\\results\\run-2026.jtl \`
  -e -o .\\reports\\html-dashboard\\ \`
  -Jthreads=100 \`
  -Jrampup=30`,
              },
            ],
          },
        ],
      },
      {
        id: "cli-flags-reference",
        heading: "CLI Flags Reference",
        paragraphs: [
          "Summary of essential command-line flags:",
        ],
        table: {
          headers: ["Flag", "Long Option", "Description"],
          rows: [
            ["-n", "--nongui", "Run JMeter in Non-GUI headless mode (mandatory for load testing)"],
            ["-t <file>", "--testfile", "Path to the input .jmx test plan file"],
            ["-l <file>", "--logfile", "Path to write raw sample results (.jtl or .csv format)"],
            ["-e", "--reportatendofloadtests", "Generate HTML dashboard report automatically upon test completion"],
            ["-o <dir>", "--reportoutputfolder", "Output folder path for the generated HTML dashboard (must be empty)"],
            ["-J<name>=<val>", "none", "Define local JMeter property (accessible in scripts via props.get('name'))"],
            ["-G<name>=<val>", "none", "Define global property broadcast to all remote slave injectors"],
            ["-D<name>=<val>", "none", "Define Java system property (e.g. -Djava.net.preferIPv4Stack=true)"],
            ["-r", "--runremote", "Start all remote servers specified in remote_hosts"],
            ["-R <hosts>", "--remotestart", "Start specific comma-separated remote servers (e.g. -R 10.0.0.1,10.0.0.2)"],
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 9. DISTRIBUTED TESTING (MASTER-SLAVE)                         */
  /* ------------------------------------------------------------- */
  "jmeter-distributed-testing": {
    id: "jmeter-distributed-testing",
    title: "Distributed Testing (Master-Slave)",
    category: "Execution & Reporting",
    sourceUrl: "https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.html",
    description: "Scale beyond a single machine's CPU and network limits using JMeter's distributed Master-Slave architecture.",
    sections: [
      {
        id: "why-distributed-testing",
        heading: "Why Use Distributed Testing?",
        paragraphs: [
          "A single standard injector machine can typically generate between 500 to 2,000 concurrent threads before encountering local network socket exhaustion, CPU saturation, or memory limits.",
          "To simulate 5,000 to 50,000+ concurrent virtual users, JMeter supports a distributed architecture where one Controller (Master) orchestrates multiple Injectors (Slaves / Workers).",
        ],
      },
      {
        id: "distributed-architecture",
        heading: "Controller / Injector Architecture",
        paragraphs: [
          "• Master (Controller): Holds the test plan (.jmx), coordinates test start/stop, broadcasts properties, and aggregates metrics.",
          "• Slaves (Injectors / Workers): Run the jmeter-server daemon, execute the test plan against the target server, and send sample results back to the Master.",
          "• Communication: Uses Java Remote Method Invocation (RMI) over TCP port 1099.",
        ],
      },
      {
        id: "configuration-steps",
        heading: "Configuration & Execution Steps",
        paragraphs: [
          "Step 1: Ensure all Master and Slave machines run identical versions of JMeter and Java.",
          "Step 2: On each Slave machine, start the jmeter-server daemon.",
          "Step 3: On the Master machine, configure slave IPs in bin/jmeter.properties or pass via the -R CLI flag:",
        ],
        codeBlocks: [
          {
            title: "1. Start Slave Injector",
            tabs: [
              {
                label: "Slave Terminal",
                language: "bash",
                code: `# Start JMeter server on slave node
./bin/jmeter-server -Djava.rmi.server.hostname=192.168.1.101

# Output:
# Created remote object: UnicastServerRef [liveRef: [endpoint:[192.168.1.101:1099]...`,
              },
            ],
          },
          {
            title: "2. Execute Distributed Load from Master",
            tabs: [
              {
                label: "Master Terminal",
                language: "bash",
                code: `# Run distributed test targeting 3 slave injectors
jmeter -n \\
  -t ./tests/api-stress.jmx \\
  -R 192.168.1.101,192.168.1.102,192.168.1.103 \\
  -l ./results/distributed-run.jtl \\
  -e -o ./reports/distributed-dashboard/`,
              },
            ],
          },
        ],
        callouts: [
          {
            type: "tip",
            title: "RMI SSL Security",
            text: "In JMeter 5.x+, RMI SSL is enabled by default. Run bin/create-rmi-keystore.sh (or .bat) to generate rmi_keystore.jks and copy it to all slave machines, or set server.rmi.ssl.disable=true in jmeter.properties for isolated test subnets.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- */
  /* 10. HTML DASHBOARD & METRICS (APDEX)                          */
  /* ------------------------------------------------------------- */
  "jmeter-reporting-dashboard": {
    id: "jmeter-reporting-dashboard",
    title: "HTML Dashboard & Performance Metrics",
    category: "Execution & Reporting",
    sourceUrl: "https://jmeter.apache.org/usermanual/generating-dashboard.html",
    description: "Interpret APDEX scores, response time percentiles (90th, 95th, 99th), throughput (RPS), and generate interactive HTML dashboards.",
    sections: [
      {
        id: "generating-dashboard-report",
        heading: "Generating the Interactive HTML Dashboard",
        paragraphs: [
          "JMeter provides a built-in dashboard generator that transforms raw .jtl sample logs into an interactive HTML report featuring responsive graphs, zoomable charts, and tabular transaction summaries.",
        ],
        codeBlocks: [
          {
            title: "Generate Dashboard from Existing JTL File",
            tabs: [
              {
                label: "Command",
                language: "bash",
                code: `# Generate HTML report from previous test run
jmeter -g ./results/load-test.jtl -o ./reports/dashboard-report/`,
              },
            ],
          },
        ],
      },
      {
        id: "key-metrics",
        heading: "Key Performance Metrics Explained",
        paragraphs: [
          "Professional performance engineering requires evaluating statistical distributions rather than simple arithmetic averages:",
        ],
        table: {
          headers: ["Metric", "Formula / Definition", "Why It Matters"],
          rows: [
            ["Throughput (RPS)", "Transactions / Second", "Measures the processing capacity of the system under load"],
            ["Average (Mean)", "Total Time / Total Requests", "Skewed heavily by extreme outliers; use percentiles instead"],
            ["90th Percentile (p90)", "90% of requests completed faster than this time", "Standard SLA metric for enterprise web applications"],
            ["95th Percentile (p95)", "95% of requests completed faster than this time", "Strict SLA benchmark for critical microservice endpoints"],
            ["99th Percentile (p99)", "99% of requests completed faster than this time", "Tail latency metric; exposes worst-case customer experience"],
            ["Error Rate %", "(Failed Samples / Total Samples) * 100", "Must remain below agreed threshold (typically < 0.1% for load tests)"],
            ["Latency (TTFB)", "Time to First Byte", "Time spent waiting for server processing before response download begins"],
          ],
        },
      },
      {
        id: "apdex-score",
        heading: "APDEX (Application Performance Index) Rating",
        paragraphs: [
          "The APDEX score is an open international standard for measuring end-user satisfaction with software response times. It converts raw latency numbers into a standardized score between 0.0 (Frustrated) and 1.0 (Excellent).",
          "• Satisfied ($T$): Responses faster than threshold $T$ (default 500ms). User feels no delay.",
          "• Tolerating ($4T$): Responses between $T$ and $4T$ (e.g. 500ms to 2000ms). User notices delay but completes task.",
          "• Frustrated: Responses slower than $4T$ or HTTP 5xx errors.",
        ],
        table: {
          headers: ["APDEX Score", "User Satisfaction Rating"],
          rows: [
            ["0.94 - 1.00", "Excellent (Industry Standard Target)"],
            ["0.85 - 0.93", "Good"],
            ["0.70 - 0.84", "Fair"],
            ["0.50 - 0.69", "Poor"],
            ["0.00 - 0.49", "Unacceptable"],
          ],
        },
      },
    ],
  },
};
