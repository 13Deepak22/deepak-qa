import { expect, test, type Page } from "@playwright/test";
import {
  publicApps,
  unpublishedWork,
  about,
  education,
  experience,
  nav,
  practices,
  profile,
  releaseGate,
  toolkit,
} from "../src/data/portfolio";

async function expectNoHorizontalOverflow(page: Page) {
  const extra = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth;
  });
  expect(extra).toBeLessThanOrEqual(1);
}

async function openMobileMenu(page: Page) {
  await expect(async () => {
    const menu = page.getByRole("button", { name: "Menu" });
    if (await menu.isVisible()) await menu.click();
    await expect(page.getByRole("button", { name: "Close" })).toBeVisible({
      timeout: 1000,
    });
  }).toPass();
}

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the profile and release gate", async ({ page }) => {
    await expect(page).toHaveTitle(`${profile.name} — ${profile.role}`);
    await expect(
      page.getByRole("heading", { level: 1, name: profile.headline }),
    ).toBeVisible();
    await expect(page.getByText(profile.lede)).toBeVisible();
    await expect(page.getByText(profile.focus.join("  ·  "))).toBeVisible();
    await expect(page.getByLabel("Outcomes")).toHaveCount(0);

    await expect(page.getByText(`suite · ${releaseGate.suite}`)).toBeVisible();
    await expect(page.getByText(`runner · ${releaseGate.runner}`)).toBeVisible();
    for (const check of releaseGate.checks) {
      await expect(page.getByText(check.file)).toBeVisible();
    }
    await expect(page.getByText(`gate · ${releaseGate.gate}`)).toBeVisible();
    await page.getByRole("button", { name: "Rerun" }).click();
    await expect(page.getByText("run", { exact: true })).toBeVisible();
    await expect(page.getByText("0.0s").first()).toBeVisible();
    await expect(page.getByText(releaseGate.summary)).toBeVisible();
    await expect(page.getByText(releaseGate.checks[0].file)).toBeVisible();
  });

  test("lists every case study and the resume sections", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Public apps." })).toBeVisible();
    await expect(page.getByText(unpublishedWork)).toBeVisible();
    expect(publicApps).toHaveLength(6);
    await expect(page.getByRole("button", { name: /07/ })).toHaveCount(0);
    await expect(page.locator('#work a[href^="/work/"]')).toHaveCount(0);
    for (const app of publicApps) {
      await expect(page.getByText(app.title, { exact: true })).toBeVisible();
      await expect(page.getByText(app.detail)).toBeHidden();
    }

    for (const practice of practices) {
      await expect(page.locator("#practice").getByRole("heading", { name: practice.title })).toBeVisible();
    }
    await expect(page.getByRole("heading", { name: "A bug worth fixing." })).toHaveCount(0);
    for (const group of toolkit) {
      await expect(page.locator("#skills").getByRole("heading", { name: group.label, exact: true })).toBeVisible();
      for (const item of group.items) {
        await expect(page.getByText(item, { exact: true }).first()).toBeVisible();
      }
    }
    for (const role of experience) {
      await expect(page.getByRole("heading", { name: role.org }).first()).toBeVisible();
      await expect(page.getByText(role.period)).toBeVisible();
    }
    await expect(page.getByRole("heading", { name: education.degree })).toHaveCount(0);
    await expect(page.locator("#education")).toHaveCount(0);
  });

  test("does not show the portrait", async ({ page }) => {
    await expect(page.getByRole("img", { name: "Portrait of Deepak Gupta" })).toHaveCount(0);
  });

  test("does not publish a date of birth", async ({ page }) => {
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/date of birth|DOB/i);
  });

  test("skip link moves focus to the page content", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#content")).toBeFocused();
  });

  test("footer repeats the name and email", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer).toContainText(profile.name);
    await expect(footer).toContainText(profile.role);
    await expect(footer.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });
});

test.describe("about", () => {
  test("shows the updated portrait with the resume identity", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(`About Me — ${profile.name}`);
    await expect(page.getByRole("heading", { level: 1, name: profile.name })).toBeVisible();
    for (const title of ["Who I am", "How I started", "Expertise", "Interests", "Goals"]) {
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
    }
    await expect(page.getByText(about.who)).toBeVisible();
    await expect(page.getByText(about.started)).toBeVisible();
    await expect(page.getByText(about.expertise)).toBeVisible();
    await expect(page.getByText(about.interests)).toBeVisible();
    await expect(page.getByText(about.goals)).toBeVisible();
    for (const term of about.expertiseTerms) {
      await expect(page.getByText(term, { exact: true })).toBeVisible();
    }
    await expect(page.getByText(profile.location)).toBeVisible();
    await expect(page.locator("#content").getByText(profile.places, { exact: true })).toBeVisible();
    await expect(page.getByText(education.school)).toBeVisible();
    const story = page.locator("#content");
    expect(await story.innerText()).not.toMatch(/\b[Hh]e\b/);
    for (const role of experience) {
      await expect(story.getByText(role.org)).toHaveCount(0);
    }
    await expect(page.getByRole("link", { name: "Selected work" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Start a conversation" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Full profile on LinkedIn" })).toHaveCount(0);
    for (const course of education.courses) {
      await expect(page.getByText(course, { exact: true })).toHaveCount(0);
    }
    for (const item of education.credentials) {
      await expect(page.getByText(item.name)).toHaveCount(0);
    }
    const portrait = page.getByRole("img", { name: "Portrait of Deepak Gupta" });
    await expect(portrait).toBeVisible();
    await expect(portrait).toHaveAttribute("src", /\/portrait\.png/);
  });
});

test.describe("navigation", () => {
  test("desktop nav reaches every section", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
    await expect(page.getByRole("link", { name: profile.availability })).toBeVisible();

    for (const item of nav) {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: item.label }).click();
      const id = item.href.split("#")[1];
      if (id) {
        await expect(page.locator(`#${id}`)).toBeInViewport();
      } else {
        await expect(page).toHaveURL(item.href);
      }
    }
  });

  test("tablet keeps the section nav and drops the long call to action", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
    await expect(page.getByRole("link", { name: profile.availability })).toBeHidden();
  });

  test("mobile menu opens, closes, and reaches skills", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
    await openMobileMenu(page);

    const mobile = page.getByRole("navigation", { name: "Mobile" });
    for (const item of nav) {
      await expect(mobile.getByRole("link", { name: item.label })).toBeVisible();
    }

    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
    await expect(mobile).toHaveCount(0);

    await openMobileMenu(page);
    await mobile.getByRole("link", { name: "What I know" }).click();
    await expect(page.locator("#skills")).toBeInViewport();
    await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
  });

  test("theme follows the system until the header toggle picks a mode", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /color theme|switch to/i });
    await expect(toggle).toBeVisible();
    await expect(page.locator("html")).not.toHaveAttribute("data-theme", /light|dark/);
    await expect(toggle).toHaveAccessibleName("Switch to light mode");

    await toggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(239, 234, 225)");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.getByRole("button", { name: "Switch to dark mode" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(28, 25, 21)");
  });

  test("hero shortcuts land on work and contact", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Selected work" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await page.getByRole("link", { name: "Start a conversation" }).click();
    await expect(page.locator("#contact")).toBeInViewport();
  });
});

test.describe("public apps", () => {
  test("each app opens a short note and closes again", async ({ page }) => {
    await page.goto("/#work");
    for (const app of publicApps) {
      const row = page.getByRole("button", { name: new RegExp(`${app.index}\\s+${app.title}\\b`) });
      await expect(page.getByText(app.detail)).toBeHidden();
      await row.click();
      await expect(page.getByText(app.detail)).toBeVisible();
      await expect(page).toHaveURL(/\/#work$/);
      await row.click();
      await expect(page.getByText(app.detail)).toBeHidden();
    }
  });

  test("unknown routes fail closed", async ({ page }) => {
    for (const path of ["/work/paulpay", "/not-a-page"]) {
      await page.goto(path);
      await expect(
        page.getByRole("heading", { name: "This case is not in the suite." }),
      ).toBeVisible();
      await expect(page.getByText("status · fail")).toBeVisible();
    }
    await page.getByRole("link", { name: "Back to the portfolio" }).click();
    await expect(page.getByRole("heading", { level: 1, name: profile.headline })).toBeVisible();
  });
});

test.describe("contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("blocks an empty draft", async ({ page }) => {
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByPlaceholder("Your name")).toHaveJSProperty("validity.valueMissing", true);
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("blocks a blank name and an invalid email", async ({ page }) => {
    const name = page.getByPlaceholder("Your name");
    const email = page.getByPlaceholder("you@company.com");

    await name.fill("   ");
    await email.fill("ada@example.com");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(name).toHaveJSProperty("validity.customError", true);
    await expect(page.getByRole("status")).toHaveCount(0);

    await name.fill("Asha");
    await email.fill("not-an-email");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(email).toHaveJSProperty("validity.typeMismatch", true);
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("sends a note", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Asha");
    await page.getByPlaceholder("you@company.com").fill("asha@example.com");
    await page.getByPlaceholder("Your query").fill("Can you review a payments release?");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByRole("status")).toHaveText("Your mail app should open with this note.");
    await expect(page.getByRole("button", { name: /copy email/i })).toHaveCount(0);
  });

  test("groups phone, email, city, and profiles", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact.getByText("Phone", { exact: true })).toHaveCount(0);
    await expect(contact.getByRole("link", { name: "LinkedIn", exact: true })).toBeVisible();
    await expect(contact.getByRole("heading", { name: "Connect me." })).toBeVisible();
    await expect(page.getByPlaceholder("Your query")).toBeVisible();
    await expect(page.getByRole("link", { name: profile.phone })).toHaveAttribute(
      "href",
      profile.phoneHref,
    );
    const linkedin = page.getByRole("link", { name: "LinkedIn", exact: true });
    await expect(linkedin).toHaveAttribute("href", profile.linkedin);
    await expect(linkedin).toHaveAttribute("target", "_blank");
    await expect(linkedin).toHaveAttribute("rel", /noopener/);
    const github = page.getByRole("link", { name: "GitHub", exact: true });
    await expect(github).toHaveAttribute("href", profile.github);
    await expect(github).toHaveAttribute("target", "_blank");
    await expect(page.getByRole("link", { name: profile.email }).first()).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    await expect(contact.getByText(profile.location)).toHaveCount(0);
    await expect(contact.getByText(profile.places, { exact: true })).toBeVisible();
    await expect(contact.getByRole("button", { name: "Send" })).toBeVisible();
  });

  test("back to top returns to the start of the page", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    const top = page.getByRole("button", { name: "Back to top" });
    await expect(top).toBeVisible();
    await top.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY)).toBeLessThan(40);
  });
});

test.describe("layout", () => {
  const widths = [320, 390, 768, 1024, 1280, 1440];

  for (const width of widths) {
    test(`home does not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await expectNoHorizontalOverflow(page);
      await page.locator("#contact").scrollIntoViewIfNeeded();
      await expectNoHorizontalOverflow(page);
    });

    test(`about and not-found do not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const path of ["/about", "/not-a-page"]) {
        await page.goto(path);
        await expectNoHorizontalOverflow(page);
        await page.locator("#contact").scrollIntoViewIfNeeded();
        await expectNoHorizontalOverflow(page);
      }
    });

    test(`an open app note does not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/#work");
      await page.getByRole("button", { name: new RegExp(`${publicApps[0].index}\\s+${publicApps[0].title}\\b`) }).click();
      await expect(page.getByText(publicApps[0].detail)).toBeVisible();
      await expectNoHorizontalOverflow(page);
    });
  }
});

test.describe("crawl files", () => {
  test("sitemap and robots list the public pages", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    expect(xml).toContain("http://localhost:3000");
    expect(xml).toContain("/about");
    expect(xml).not.toContain("/work/");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    const body = await robots.text();
    expect(body).toContain("Allow: /");
    expect(body).toContain("sitemap.xml");
  });

  test("home exposes a canonical link, a description, and person data", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "http://localhost:3000");
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /QA engineer in India/);
    await expect(description).toHaveAttribute("content", /Selenium/);
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toContain("Person");
    expect(jsonLd).toContain(profile.name);
    expect(jsonLd).toContain(profile.linkedin);
    expect(jsonLd).toContain(profile.github);
  });

  test("social image responds", async ({ request }) => {
    const image = await request.get("/opengraph-image");
    expect(image.ok()).toBeTruthy();
    expect(image.headers()["content-type"]).toContain("image/");
  });
});
