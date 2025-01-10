// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Search=require('../page-objects/search-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Search Empty', () => {
  test('Assert that "Please provide a search word." message is shown.', async ({ page }) => {
    const search = new Search(page);
    search.navigateSearch();
    await search.input.fill('');
    await search.find.click();
    await search.message.isVisible();
    await expect(search.message).toContainText('Please provide a search word.');
  
  });
});