// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3100/login');
});

test.describe('Login Success', () => {
  test('Successfully login with credentials', async ({ page }) => {
    const login = new Login(page);
    await login.fillUsername('johndoe19');
    await login.fillPassword('supersecret');
    await login.signin.click();
    await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
    await expect(page.getByText('johndoe19')).toBeVisible();
  });
});
