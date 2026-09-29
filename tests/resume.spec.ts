import { expect, test } from "@playwright/test";
import { education, experience, profile, publicApps, resume, toolkit } from "../src/data";
import { expectNoBirthDate } from "./support/helpers";

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
    expectNoBirthDate(await page.locator("body").innerText());
  });

  test("offers the resume as PDF, Word, and JPG", async ({ page }) => {
    const options = page.getByRole("list", { name: "Download resume" }).getByRole("link");
    await expect(options).toHaveText(["PDF", "Word", "JPG"]);
    for (const { label, ext } of [
      { label: "PDF", ext: "pdf" },
      { label: "Word", ext: "docx" },
      { label: "JPG", ext: "jpg" },
    ]) {
      const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("link", { name: `Download resume as ${label}` }).click(),
      ]);
      expect(download.suggestedFilename()).toBe(`deepak-gupta-resume.${ext}`);
    }
  });

  for (const { format, type, magic } of [
    { format: "pdf", type: "application/pdf", magic: "%PDF" },
    { format: "docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", magic: "PK" },
    { format: "jpg", type: "image/jpeg", magic: "\xff\xd8\xff" },
  ]) {
    test(`${format} download is a real ${format.toUpperCase()} file`, async ({ request }) => {
      const response = await request.get(`/resume/download/${format}`);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toBe(type);
      expect(response.headers()["content-disposition"]).toBe(`attachment; filename="deepak-gupta-resume.${format}"`);
      const body = await response.body();
      expect(body.subarray(0, magic.length).toString("latin1")).toBe(magic);
      expect(body.length).toBeGreaterThan(5_000);
    });
  }

  test("unknown download formats return 404", async ({ request }) => {
    expect((await request.get("/resume/download/exe")).status()).toBe(404);
  });

  test("print layout keeps only the resume", async ({ page }) => {
    await page.emulateMedia({ media: "print" });
    await expect(page.getByRole("article", { name: `Resume of ${profile.name}` })).toBeVisible();
    await expect(page.getByRole("banner")).toBeHidden();
    await expect(page.getByRole("contentinfo")).toBeHidden();
    await expect(page.getByRole("list", { name: "Download resume" })).toBeHidden();
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(255, 255, 255)");
    const spacing = await page
      .locator(".resume-section h2")
      .evaluateAll((headings) => headings.map((heading) => getComputedStyle(heading).letterSpacing));
    for (const value of spacing) expect(["normal", "0px"]).toContain(value);
  });
});
