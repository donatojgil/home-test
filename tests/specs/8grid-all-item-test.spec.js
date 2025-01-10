// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Grid=require('../page-objects/grid-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Grid All Items Test	', () => {
  test('Assert that all the items have a non empty title, price, image and a button', async ({ page }) => {
    const grid = new Grid(page);
    await grid.navigateGrid();
    await grid.isPresent();
    
  });
});