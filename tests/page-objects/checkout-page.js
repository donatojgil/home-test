import { Page } from "@playwright/test";

class Checkout {
    constructor(page) {
        this.page = page;

    }
}

module.exports = Checkout;