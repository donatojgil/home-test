// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Form=require('../page-objects/form-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Cart Total Test', () => {
  test('Assert that the cart total shown is correct for the item prices added', async ({ page }) => {
    const form = new Form(page);
    form.navigateForm();
    const total= await form.total.textContent();
    const productPrices = await form.productprices.allInnerTexts();
    const totalPrice = await form.getprice(productPrices);
    await expect('$' + totalPrice).toBe(total);
  });
});