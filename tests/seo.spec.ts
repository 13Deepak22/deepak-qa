import { expect, test } from "@playwright/test";
import { profile } from "../src/data";

test.describe("crawl files", () => {
  test("sitemap and robots list the public pages", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    expect(xml).toContain("http://localhost:3000");
    expect(xml).toContain("/about");
    expect(xml).toContain("/portrait.png");
    expect(xml).toContain("/resume");
    expect(xml).not.toContain("/work/");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    const body = await robots.text();
    expect(body).toContain("Allow: /");
    expect(body).toContain("sitemap.xml");
  });

  test("home exposes a canonical link, a description, and person data", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "http://localhost:3000");
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /QA engineer in India/);
    await expect(description).toHaveAttribute("content", /Selenium/);
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toContain("Person");
    expect(jsonLd).toContain(profile.name);
    expect(jsonLd).toContain(profile.linkedin);
    expect(jsonLd).toContain(profile.github);
  });

  test("social image responds", async ({ request }) => {
    const image = await request.get("/opengraph-image");
    expect(image.ok()).toBeTruthy();
    expect(image.headers()["content-type"]).toContain("image/");
  });

  test("about has its own share image and profile page data", async ({ page, request }) => {
    await page.goto("/about");
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(ogImage).toContain("/about/opengraph-image");
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", /\/about\/opengraph-image/);
    const image = await request.get(new URL(ogImage!).pathname);
    expect(image.ok()).toBeTruthy();
    expect(image.headers()["content-type"]).toContain("image/png");

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.join("")).toContain('"ProfilePage"');
    expect(blocks.join("")).toContain(`"addressLocality":"${profile.places}"`);
  });

  test("manifest and missing pages carry the right signals", async ({ page, request }) => {
    const manifest = await request.get("/manifest.webmanifest");
    expect(manifest.ok()).toBeTruthy();
    expect((await manifest.json()).name).toContain(profile.name);

    await page.goto("/not-a-page");
    const robots = await page.locator('meta[name="robots"]').evaluateAll((tags) => tags.map((tag) => tag.getAttribute("content")));
    expect(robots.length).toBeGreaterThan(0);
    for (const content of robots) expect(content).toContain("noindex");
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  });
});
