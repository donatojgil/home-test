// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Form = require('../page-objects/form-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Checkout Form Alert', () => {
  test('Verify that if "Shipping address same as billing" checkbox is checkmarked, then uncheckmark it.', async ({ page }) => {
    const form = new Form(page);
    await form.navigateForm();
    await form.fillForm(false);
    await form.continue.click();
    await form.dialogalert(page);
  });
});