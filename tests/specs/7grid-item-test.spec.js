// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Grid=require('../page-objects/grid-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Grid Item Test', () => {
  test('Assert that in position 7 the product shown is "Super Pepperoni" and the price shown is $10', async ({ page }) => {
    const grid = new Grid(page);
    grid.navigateGrid();
    const ItemText = await grid.itemtext.textContent();
    expect(ItemText).toBe('Super Pepperoni');
    const ItemPrice = await grid.itemprice.textContent();
    expect(ItemPrice).toBe('$10');
  });
});