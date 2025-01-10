import { Page } from "@playwright/test";

class Checkout {

    constructor(page) {
        this.page = page;
        this.total = page.locator("//p[contains(text(),'Total')]//span");
        this.productprices=page.locator("//a/following-sibling::*[@class='price']");

    }  
};

module.exports = Checkout;