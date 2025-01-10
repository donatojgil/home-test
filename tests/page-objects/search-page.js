import { Page } from "@playwright/test";

class Search {
    constructor(page) {
        this.page = page;
        this.input=page.locator("//input[@name='searchWord']");
        this.find=page.locator("//button[@type='submit']");
        this.message= page.locator('#result');
        this.search = page.getByRole('link', { name: 'Search' })
    }

    async fillWord() {
        await this.input.fill();
    }

    async navigateSearch() {
        this.search.click();
    }
}

module.exports = Search;