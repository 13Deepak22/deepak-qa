import { expect, test } from "@playwright/test";
import { profile } from "../src/data";

test.describe("contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("blocks an empty draft", async ({ page }) => {
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByPlaceholder("Your name")).toHaveJSProperty("validity.valueMissing", true);
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("blocks a blank name and an invalid email", async ({ page }) => {
    const name = page.getByPlaceholder("Your name");
    const email = page.getByPlaceholder("you@company.com");

    await name.fill("   ");
    await email.fill("ada@example.com");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(name).toHaveJSProperty("validity.customError", true);
    await expect(page.getByRole("status")).toHaveCount(0);

    await name.fill("Asha");
    await email.fill("not-an-email");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(email).toHaveJSProperty("validity.typeMismatch", true);
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("sends a note", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Asha");
    await page.getByPlaceholder("you@company.com").fill("asha@example.com");
    await page.getByPlaceholder("Your query").fill("Can you review a payments release?");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByRole("status")).toHaveText("Your mail app should open with this note.");
    await expect(page.getByRole("button", { name: /copy email/i })).toHaveCount(0);
  });

  test("groups phone, email, city, and profiles", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact.getByText("Phone", { exact: true })).toHaveCount(0);
    await expect(contact.getByRole("link", { name: "LinkedIn", exact: true })).toBeVisible();
    await expect(contact.getByRole("heading", { name: "Connect me." })).toBeVisible();
    await expect(page.getByPlaceholder("Your query")).toBeVisible();
    await expect(page.getByRole("link", { name: profile.phone })).toHaveAttribute(
      "href",
      profile.phoneHref,
    );
    const linkedin = page.getByRole("link", { name: "LinkedIn", exact: true });
    await expect(linkedin).toHaveAttribute("href", profile.linkedin);
    await expect(linkedin).toHaveAttribute("target", "_blank");
    await expect(linkedin).toHaveAttribute("rel", /noopener/);
    const github = page.getByRole("link", { name: "GitHub", exact: true });
    await expect(github).toHaveAttribute("href", profile.github);
    await expect(github).toHaveAttribute("target", "_blank");
    await expect(page.getByRole("link", { name: profile.email }).first()).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    await expect(contact.getByText(profile.location)).toHaveCount(0);
    await expect(contact.getByText(profile.places, { exact: true })).toBeVisible();
    await expect(contact.getByRole("button", { name: "Send" })).toBeVisible();
  });

  test("back to top returns to the start of the page", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    const top = page.getByRole("button", { name: "Back to top" });
    await expect(top).toBeVisible();
    await top.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY)).toBeLessThan(40);
  });
});
