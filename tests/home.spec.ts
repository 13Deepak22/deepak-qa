import { expect, test } from "@playwright/test";
import {
  education,
  experience,
  profile,
  publicApps,
  releaseGate,
  roleTitles,
  services,
  toolkit,
  unpublishedWork,
} from "../src/data";
import { appRow, expectNoBirthDate } from "./support/helpers";

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the profile and release gate", async ({ page }) => {
    await expect(page).toHaveTitle(`${profile.name} — ${profile.role} | Manual & Automation Testing`);
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toHaveCount(1);
    await expect(h1).toHaveAccessibleName(`${profile.name} ${profile.role} — ${profile.headline}`);
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
    expect(publicApps).toHaveLength(7);
    await expect(page.getByRole("button", { name: /08/ })).toHaveCount(0);
    await expect(page.locator('#work a[href^="/work/"]')).toHaveCount(0);
    for (const app of publicApps) {
      await expect(page.getByText(app.title, { exact: true })).toBeVisible();
      await expect(page.getByText(app.detail)).toBeHidden();
    }

    const servicesSection = page.locator("#practice");
    for (const service of [...services.featured, ...services.support]) {
      await expect(servicesSection.getByRole("heading", { name: service.title })).toBeVisible();
    }
    for (const tool of services.tools) {
      await expect(servicesSection.getByRole("heading", { name: tool.name, exact: true })).toBeVisible();
      await expect(servicesSection.getByText(tool.use)).toBeVisible();
    }
    await expect(servicesSection.locator("li.tool-card .tool-tile svg")).toHaveCount(services.tools.length + 2);
    await expect(servicesSection.getByRole("heading", { name: "Testing types I cover" })).toHaveCount(0);
    for (const type of services.types) {
      await expect(servicesSection.locator(".marquee-track li", { hasText: type }).first()).toBeVisible();
    }
    const defects = servicesSection.locator("li", { has: page.getByRole("heading", { name: "Defect management" }) });
    await expect(defects.getByText("Jira", { exact: true })).toBeVisible();
    await expect(defects.getByText("Trello", { exact: true })).toBeVisible();
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

  test("role title types, then switches to another title from the list", async ({ page }) => {
    const typed = page.locator("[data-role-typed]");
    await expect(typed).toHaveText(profile.role, { timeout: 5000 });
    const seen = new Set<string>();
    await expect
      .poll(
        async () => {
          const text = (await typed.textContent()) ?? "";
          if (text !== profile.role && roleTitles.includes(text)) seen.add(text);
          return seen.size;
        },
        { timeout: 15000, intervals: [100] },
      )
      .toBeGreaterThan(0);
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      `${profile.name} ${profile.role} — ${profile.headline}`,
    );
  });

  test("role title stays put for reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.reload();
    const typed = page.locator("[data-role-typed]");
    await expect(typed).toHaveText(profile.role);
    await page.waitForTimeout(3500);
    await expect(typed).toHaveText(profile.role);
  });

  test("does not show the portrait", async ({ page }) => {
    await expect(page.getByRole("img", { name: "Portrait of Deepak Gupta" })).toHaveCount(0);
  });

  test("does not publish a date of birth", async ({ page }) => {
    expectNoBirthDate(await page.locator("body").innerText());
  });

  test("skip link moves focus to the page content", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#content")).toBeFocused();
  });

  test("footer carries the email and a copyright line, not a second header", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer).toContainText(`© ${new Date().getFullYear()} ${profile.name}`);
    await expect(footer.getByRole("navigation")).toHaveCount(0);
    await expect(footer.getByRole("link", { name: profile.name })).toHaveCount(0);
    await expect(footer.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });
});

test.describe("public apps", () => {
  test("each app opens a short note and closes again", async ({ page }) => {
    await page.goto("/#work");
    for (const app of publicApps) {
      const row = appRow(page, app);
      await expect(page.getByText(app.detail)).toBeHidden();
      await row.click();
      await expect(page.getByText(app.detail)).toBeVisible();
      await expect(page).toHaveURL(/\/#work$/);
      await row.click();
      await expect(page.getByText(app.detail)).toBeHidden();
    }
  });

  test("an open panel lines up with the row columns on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#work");
    const item = page.locator(".work-app").first();
    await item.locator(".work-toggle").click();
    const x = await item.evaluate((root) => {
      const left = (selector: string) => Math.round(root.querySelector(selector)!.getBoundingClientRect().left);
      const right = (selector: string) => Math.round(root.querySelector(selector)!.getBoundingClientRect().right);
      return {
        icon: left(".work-icon"),
        role: left(".work-panel p"),
        outcome: left(".work-toggle > span:nth-child(3)"),
        report: left(".work-report"),
        chevronRight: right(".work-chevron"),
        reportRight: right(".work-report"),
      };
    });
    expect(x.role).toBe(x.icon);
    expect(x.report).toBe(x.outcome);
    expect(x.reportRight).toBe(x.chevronRight);
  });

  test("opening a lower app keeps its row in place while the one above closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 780 });
    await page.goto("/#work");
    await page.waitForFunction(() => {
      const target = document.getElementById("work")!.getBoundingClientRect().top;
      return Math.abs(target) < 100;
    });
    await page.locator(".work-app").first().locator(".work-toggle").click();
    await page.waitForTimeout(700);
    const second = page.locator(".work-app").nth(1);
    await second.scrollIntoViewIfNeeded();
    const before = await second.evaluate((row) => row.getBoundingClientRect().top);
    await second.locator(".work-toggle").click();
    await page.waitForTimeout(700);
    const after = await second.evaluate((row) => row.getBoundingClientRect().top);
    expect(Math.abs(after - before)).toBeLessThan(4);
  });

  test("an open app shows only my role, the test scope, and its store link", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#work");
    await expect(page.locator("#work")).not.toContainText("About the app");
    for (const app of publicApps) {
      const item = page.locator(".work-app").filter({ has: appRow(page, app) });
      await appRow(page, app).click();
      await expect(item.getByText("My role", { exact: true })).toBeVisible();
      await expect(item.locator("dl")).toHaveCount(0);
      await expect(item.getByText(`${app.tested.length} checks · pass`)).toBeVisible();
      for (const check of app.tested) await expect(item.getByText(check, { exact: true })).toBeVisible();
      const link = item.getByRole("link", { name: new RegExp(app.link.label) });
      await expect(link).toHaveAttribute("href", app.link.href);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });
});
