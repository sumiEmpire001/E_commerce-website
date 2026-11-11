import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/storefront/");
});
test("shows catalogue and filters by keyword and category", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Explore our collection" })).toBeVisible();
  await expect(page.locator(".product-card")).toHaveCount(6);
  await page.getByRole("searchbox", { name: "Search products" }).fill("headphones");
  await expect(page.locator(".product-card")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Wireless Headphones" })).toBeVisible();
  await page.getByRole("searchbox", { name: "Search products" }).fill("");
  await page.getByLabel("Category").selectOption("Home");
  await expect(page.locator(".product-card")).toHaveCount(2);
});
test("adds, updates, and persists a demo cart", async ({ page }) => {
  await page.getByRole("article").filter({ hasText: "Everyday Canvas Tote" }).getByRole("button", { name: "Add to cart" }).click();
  await expect(page.locator("#cart-count")).toHaveText("1");
  await page.getByRole("button", { name: /Cart 1/ }).click();
  await expect(page.getByText("₦12,500", { exact: true }).last()).toBeVisible();
  await page.getByRole("button", { name: "Add one Everyday Canvas Tote" }).click();
  await expect(page.locator("#cart-count")).toHaveText("2");
  await page.reload();
  await expect(page.locator("#cart-count")).toHaveText("2");
  await page.getByRole("button", { name: /Cart 2/ }).click();
  await expect(page.locator("#subtotal")).toContainText("25,000");
  await expect(page.getByRole("button", { name: "Checkout coming soon" })).toBeDisabled();
});
test("sold-out products cannot be added and no checkout is offered", async ({ page }) => {
  const soldOut=page.getByRole("article").filter({ hasText: "Classic Wristwatch" });
  await expect(soldOut.getByRole("button", { name: "Sold out" })).toBeDisabled();
  await page.getByRole("button", { name: /Cart 0/ }).click();
  await expect(page.getByText("Demo cart only")).toBeVisible();
});
test("mobile viewport does not overflow horizontally", async ({ page, isMobile }) => {
  if (!isMobile) return;
  const overflow=await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});
