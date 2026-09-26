import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const paths = ["/", "/about", "/not-a-page"];

for (const path of paths) {
  test(`${path} has no accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
