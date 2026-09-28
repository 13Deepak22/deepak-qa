import { expect, test } from "@playwright/test";
import { about, aboutChapters, education, experience, profile } from "../src/data";
import { expectNoBirthDate } from "./support/helpers";

test.describe("about", () => {
  test("shows the updated portrait with the resume identity", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(`About Me — ${profile.name}, ${profile.role}`);
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
    await expect(portrait).toHaveAttribute("src", /portrait\.[\w-]+\.png/);
    await expect.poll(() => portrait.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  });

  test("chapters track the reader and every chapter carries its detail", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/about");
    const chapters = page.getByRole("navigation", { name: "About chapters" });
    await expect(chapters.getByRole("link")).toHaveCount(aboutChapters.length);
    await expect(page.getByRole("navigation", { name: "Jump to a chapter" })).toBeHidden();

    await chapters.getByRole("link", { name: /Goals/ }).click();
    await expect(page.locator("#goals")).toBeInViewport();
    await expect(chapters.getByRole("link", { name: /Goals/ })).toHaveAttribute("aria-current", "location");

    for (const step of about.journey) {
      await expect(page.getByText(step.note)).toBeVisible();
    }
    for (const group of about.expertiseGroups) {
      await expect(page.locator("#content dt", { hasText: group.label })).toBeVisible();
    }
    for (const tag of about.interestTags) {
      await expect(page.locator("#content li", { hasText: tag }).first()).toBeVisible();
    }
    for (const goal of about.goalChecks) {
      await expect(page.getByText(goal, { exact: true })).toBeVisible();
    }
  });

  test("does not publish a date of birth", async ({ page }) => {
    await page.goto("/about");
    expectNoBirthDate(await page.locator("body").innerText());
  });

  test("phones get chapter shortcuts instead of the sidebar", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/about");
    await expect(page.getByRole("navigation", { name: "About chapters" })).toBeHidden();
    const jump = page.getByRole("navigation", { name: "Jump to a chapter" });
    await jump.getByRole("link", { name: /Expertise/ }).click();
    await expect(page.locator("#expertise")).toBeInViewport();
  });
});
