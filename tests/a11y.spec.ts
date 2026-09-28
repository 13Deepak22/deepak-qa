import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { publicApps } from "../src/data";
import { appRow } from "./support/helpers";

const paths = ["/", "/about", "/resume", "/not-a-page"];

for (const scheme of ["light", "dark"] as const) {
  for (const path of paths) {
    test(`${path} has no accessibility violations in ${scheme} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(path);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    });
  }

  test(`an open app report has no accessibility violations in ${scheme} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
    await page.goto("/#work");
    await appRow(page, publicApps[0]).click();
    await expect(page.getByText(publicApps[0].detail)).toBeVisible();
    const results = await new AxeBuilder({ page }).include("#work").analyze();
    expect(results.violations).toEqual([]);
  });
}
