// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3100/login');
});

test.describe('Login Success', () => {
  test('Successfully login with credentials', async ({ page }) => {
    await page.locator('#username').fill('johndoe19');
    await page.locator('#password').fill('supersecret');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
    await expect(page.getByText('johndoe19')).toBeVisible();
  });
});
