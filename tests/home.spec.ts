import { expect, test } from "@playwright/test";
import {
  education,
  experience,
  practices,
  profile,
  publicApps,
  releaseGate,
  roleTitles,
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

  test("an open app shows the product facts, the test scope, and its store link", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#work");
    for (const app of publicApps) {
      const item = page.locator(".work-app").filter({ has: appRow(page, app) });
      await appRow(page, app).click();
      await expect(item.getByText(app.product)).toBeVisible();
      for (const fact of app.facts) await expect(item.getByText(fact.value, { exact: true })).toBeVisible();
      await expect(item.getByText(`${app.tested.length} checks · pass`)).toBeVisible();
      for (const check of app.tested) await expect(item.getByText(check, { exact: true })).toBeVisible();
      const link = item.getByRole("link", { name: new RegExp(app.link.label) });
      await expect(link).toHaveAttribute("href", app.link.href);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });
});
