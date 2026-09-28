import { expect, type Page } from "@playwright/test";

export async function expectNoHorizontalOverflow(page: Page) {
  const extra = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth;
  });
  expect(extra).toBeLessThanOrEqual(1);
}

export async function openMobileMenu(page: Page) {
  await expect(async () => {
    const menu = page.getByRole("button", { name: "Menu" });
    if (await menu.isVisible()) await menu.click();
    await expect(page.getByRole("button", { name: "Close" })).toBeVisible({
      timeout: 1000,
    });
  }).toPass();
}

const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December";
const FULL_DATE = new RegExp(
  [
    `\\b\\d{1,2}(st|nd|rd|th)?[\\s,]+(${MONTHS})[\\s,]+\\d{4}\\b`,
    `\\b(${MONTHS})\\s+\\d{1,2}(st|nd|rd|th)?,?\\s+\\d{4}\\b`,
    `\\b\\d{1,2}[/.-]\\d{1,2}[/.-](19|20)\\d{2}\\b`,
  ].join("|"),
  "i",
);

export function expectNoBirthDate(text: string) {
  expect(text).not.toMatch(/date of birth|\bDOB\b|\bborn\b/i);
  expect(text).not.toMatch(FULL_DATE);
}

export function appRow(page: Page, app: { index: string; title: string }) {
  return page.getByRole("button", { name: new RegExp(`${app.index}\\s+${app.title}\\b`) });
}
