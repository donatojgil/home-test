// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../page-objects/login-page');
const Search = require('../page-objects/search-page');

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.loginApp();
});

test.describe('Search Success', () => {
  test('Assert that "Found one result for" plus the word you searched is shown.', async ({ page }) => {
    const search = new Search(page);
    await search.navigateSearch();
    await search.input.fill('FastFood');
    await search.find.click();
    await search.message.isVisible();
    await expect(search.message).toContainText('FastFood');
  });
});