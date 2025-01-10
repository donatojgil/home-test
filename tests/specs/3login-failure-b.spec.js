// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3100/login');
});

test.describe('Login Failure B', () => {
  test('Empty Credentials validation', async ({ page }) => {
    const login = new Login(page);
    await login.signin.click();
    await expect(login.message).toBeVisible();
    await expect(login.message).toContainText('Fields can not be empty');
  });
});
