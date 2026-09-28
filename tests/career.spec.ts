import { expect, test } from "@playwright/test";
import { profile, resume } from "../src/data";
import { experienceLabel, experienceWords, experienceYears } from "../src/lib/career";

const ist = (iso: string) => new Date(`${iso}+05:30`);

test.describe("years of experience", () => {
  test("rolls over on the career anniversary, on the India calendar", () => {
    expect(experienceYears(ist("2026-07-05T23:59:00"))).toBe(2);
    expect(experienceYears(ist("2026-07-06T00:00:00"))).toBe(3);
    expect(experienceYears(ist("2026-09-28T12:00:00"))).toBe(3);
    expect(experienceYears(ist("2027-07-05T12:00:00"))).toBe(3);
    expect(experienceYears(ist("2027-07-06T00:01:00"))).toBe(4);
    expect(experienceYears(ist("2031-07-06T09:00:00"))).toBe(8);
  });

  test("formats as a label and in words", () => {
    const later = ist("2027-08-01T10:00:00");
    expect(experienceLabel(later)).toBe("4+");
    expect(experienceWords(later)).toBe("four");
  });

  test("feeds the live copy instead of a fixed number", async ({ page }) => {
    const label = experienceLabel();
    expect(profile.lede).toContain(`${label} years`);
    expect(resume.summary).toContain(`${label} years`);

    await page.goto("/");
    await expect(page.getByText(profile.lede)).toBeVisible();
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toContain(`${label} years`);

    await page.goto("/about");
    await expect(page.getByText(`more than ${experienceWords()} years`)).toBeVisible();
  });
});
