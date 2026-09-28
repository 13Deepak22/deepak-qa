import { expect, test } from "@playwright/test";
import { publicApps } from "../src/data";
import { appRow, expectNoHorizontalOverflow } from "./support/helpers";

test.describe("layout", () => {
  const widths = [320, 390, 768, 1024, 1280, 1440];

  for (const width of widths) {
    test(`home does not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await expectNoHorizontalOverflow(page);
      await page.locator("#contact").scrollIntoViewIfNeeded();
      await expectNoHorizontalOverflow(page);
    });

    test(`about, resume, and not-found do not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const path of ["/about", "/resume", "/not-a-page"]) {
        await page.goto(path);
        await expectNoHorizontalOverflow(page);
        await page.locator("#contact").scrollIntoViewIfNeeded();
        await expectNoHorizontalOverflow(page);
      }
    });

    test(`an open app note does not scroll sideways at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/#work");
      await appRow(page, publicApps[0]).click();
      await expect(page.getByText(publicApps[0].detail)).toBeVisible();
      await expectNoHorizontalOverflow(page);
    });
  }
});
