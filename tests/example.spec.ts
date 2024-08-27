import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page.locator('#navbarSupportedContent').getByRole('link', { name: 'About' })).toBeVisible();
  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'About' }).click();
  await page.getByRole('heading', { name: 'About Us' }).click();
  await expect(page.locator('#navbarSupportedContent').getByRole('link', { name: 'Services' })).toBeVisible();
  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('heading', { name: 'Our Services' }).click();
});
