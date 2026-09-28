import { expect, test } from "@playwright/test";
import { education, experience, profile, publicApps, resume, toolkit } from "../src/data";

test.describe("resume", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resume");
  });

  test("uses standard ATS headings and plain contact details", async ({ page }) => {
    await expect(page).toHaveTitle(`Resume — ${profile.name}, ${profile.role}`);
    const sheet = page.getByRole("article", { name: `Resume of ${profile.name}` });
    await expect(sheet.getByRole("heading", { level: 1, name: profile.name })).toBeVisible();
    const sections = await sheet.getByRole("heading", { level: 2 }).allInnerTexts();
    expect(sections.map((title) => title.toLowerCase())).toEqual(
      ["Summary", "Skills", "Experience", "Projects", "Education", "Certifications and Courses"].map((title) =>
        title.toLowerCase(),
      ),
    );
    for (const detail of [profile.email, profile.phone, profile.places]) {
      await expect(sheet).toContainText(detail);
    }
    await expect(sheet.getByRole("link", { name: profile.email })).toHaveAttribute("href", `mailto:${profile.email}`);
    await expect(sheet.getByRole("img")).toHaveCount(0);
  });

  test("carries every role, skill, project, and credential", async ({ page }) => {
    const sheet = page.getByRole("article", { name: `Resume of ${profile.name}` });
    await expect(sheet).toContainText(resume.summary);
    for (const group of toolkit) {
      await expect(sheet).toContainText(group.items.join(", "));
    }
    await expect(sheet).toContainText(resume.exposureNote);
    for (const role of experience) {
      await expect(sheet).toContainText(role.org);
      for (const point of role.points) await expect(sheet).toContainText(point);
    }
    for (const app of publicApps) await expect(sheet).toContainText(app.detail);
    await expect(sheet).toContainText(education.school);
    for (const item of education.credentials) await expect(sheet).toContainText(item.name);
    for (const course of education.courses) await expect(sheet).toContainText(course);
  });

  test("does not publish a date of birth", async ({ page }) => {
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/date of birth|DOB/i);
  });

  test("download opens the print dialog", async ({ page }) => {
    await page.evaluate(() => {
      window.print = () => {
        document.body.dataset.printed = "true";
      };
    });
    await page.getByRole("button", { name: "Download PDF" }).click();
    await expect(page.locator("body")).toHaveAttribute("data-printed", "true");
  });

  test("print layout keeps only the resume", async ({ page }) => {
    await page.emulateMedia({ media: "print" });
    await expect(page.getByRole("article", { name: `Resume of ${profile.name}` })).toBeVisible();
    await expect(page.getByRole("banner")).toBeHidden();
    await expect(page.getByRole("contentinfo")).toBeHidden();
    await expect(page.getByRole("button", { name: "Download PDF" })).toBeHidden();
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(255, 255, 255)");
    const spacing = await page
      .locator(".resume-section h2")
      .evaluateAll((headings) => headings.map((heading) => getComputedStyle(heading).letterSpacing));
    for (const value of spacing) expect(["normal", "0px"]).toContain(value);
  });
});
