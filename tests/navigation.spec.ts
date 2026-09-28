import { expect, test } from "@playwright/test";
import { nav, profile } from "../src/data";
import { openMobileMenu } from "./support/helpers";

test.describe("navigation", () => {
  test("desktop nav reaches every section", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
    await expect(page.getByRole("link", { name: profile.availability })).toBeVisible();

    for (const item of nav) {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: item.label }).click();
      const id = item.href.split("#")[1];
      if (id) {
        await expect(page.locator(`#${id}`)).toBeInViewport();
      } else {
        await expect(page).toHaveURL(item.href);
      }
    }
  });

  test("tablet keeps the section nav and drops the long call to action", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
    await expect(page.getByRole("link", { name: profile.availability })).toBeHidden();
  });

  test("mobile menu opens, closes, and reaches skills", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
    await openMobileMenu(page);

    const mobile = page.getByRole("navigation", { name: "Mobile" });
    for (const item of nav) {
      await expect(mobile.getByRole("link", { name: item.label })).toBeVisible();
    }

    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
    await expect(mobile).toHaveCount(0);

    await openMobileMenu(page);
    await mobile.getByRole("link", { name: "What I know" }).click();
    await expect(page.locator("#skills")).toBeInViewport();
    await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
  });

  test("theme follows the system until the header toggle picks a mode", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /color theme|switch to/i });
    await expect(toggle).toBeVisible();
    await expect(page.locator("html")).not.toHaveAttribute("data-theme", /light|dark/);
    await expect(toggle).toHaveAccessibleName("Switch to light mode");

    await toggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(239, 234, 225)");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.getByRole("button", { name: "Switch to dark mode" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(28, 25, 21)");
  });

  test("hero shortcuts land on work and contact", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Selected work" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await page.getByRole("link", { name: "Start a conversation" }).click();
    await expect(page.locator("#contact")).toBeInViewport();
  });
});
