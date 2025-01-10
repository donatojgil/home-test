// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Form = require('../page-objects/form-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Checkout Form Order Success', () => {
  test('Verify that if "Shipping address same as billing" checkbox is not checkmarked then checkmark it', async ({ page }) => {
    const form = new Form(page);
    await form.navigateForm();
    await form.fillForm(true);
    await form.continue.click();
    await page.waitForURL('http://localhost:3100/order');
    await expect(form.ordernumber).toBeVisible();
  });
});