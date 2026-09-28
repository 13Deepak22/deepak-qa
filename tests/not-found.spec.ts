import { expect, test } from "@playwright/test";
import { profile } from "../src/data";

test.describe("not found", () => {
  test("unknown routes fail closed", async ({ page }) => {
    for (const path of ["/work/paulpay", "/not-a-page"]) {
      await page.goto(path);
      await expect(
        page.getByRole("heading", { name: "This case is not in the suite." }),
      ).toBeVisible();
      await expect(page.getByText("status · fail")).toBeVisible();
      await expect(page.getByRole("region", { name: "Route check output" })).toContainText(`GET ${path}`);
    }
    await page.getByRole("link", { name: "Back to the portfolio" }).click();
    await expect(page.getByRole("heading", { level: 1, name: profile.headline })).toBeVisible();
  });
});
