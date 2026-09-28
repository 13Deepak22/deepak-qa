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

export function appRow(page: Page, app: { index: string; title: string }) {
  return page.getByRole("button", { name: new RegExp(`${app.index}\\s+${app.title}\\b`) });
}
