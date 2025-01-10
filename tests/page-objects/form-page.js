import { Page } from "@playwright/test";

const NAME = 'Edwin';
const EMAIL = 'EdwinCavero@gmail.com';
const ADDRESS = 'Av. Panamericana';
const CITY='Cbba';
const STATE='Cbba';
const ZIP='0000';
const NAMECARD='Edwin Cavero';
const CREDITCARDNUMBER='12345678';
const EXPMONTH='December';
const EXPYEAR='2043';
const CVV='6161';

class Form {
    constructor(page) {
        this.page = page;
        this.form = page.getByRole('link', { name: 'Form' })
        this.name = page.locator('#fname');
        this.email = page.locator('#email');
        this.address = page.locator('#adr');
        this.city = page.locator('#city');
        this.state = page.locator('#state');
        this.zip = page.locator('#zip');
        this.namecard = page.locator('#cname');
        this.creditcardnumber = page.locator('#ccnum');
        this.expmonth = page.locator('#expmonth');
        this.expyear = page.locator('#expyear');
        this.cvv = page.locator('#cvv');
        this.chbilling = page.locator('input[name="sameadr"]');
        this.continue = page.getByRole('button', { name: 'Continue to checkout' });
        this.ordernumber = page.locator("//*[@data-id='ordernumber']");
        this.total = page.locator("//p[contains(text(),'Total')]//span");
        this.productprices=page.locator("//a/following-sibling::*[@class='price']");
        this.dialog = page.on;

    }
    async navigateForm() {
        await this.form.click();
    }

    async fillForm(bool) {
        await this.name.fill(NAME);
        await this.email.fill(EMAIL);
        await this.address.fill(ADDRESS);
        await this.city.fill(CITY);
        await this.state.fill(STATE);
        await this.zip.fill(ZIP);
        await this.namecard.fill(NAMECARD);
        await this.creditcardnumber.fill(CREDITCARDNUMBER);
        await this.expmonth.selectOption({ label: EXPMONTH });
        await this.expyear.fill(EXPYEAR);
        await this.cvv.fill(CVV);
        await this.chbilling.setChecked(bool);

    }
    
    async getprice(productPrices) {
        const total = productPrices
            .map(price => parseFloat(price.replace(/[^0-9.-]+/g, '')))
            .reduce((sum, price) => sum + price, 0);
        return total;
    }

    async dialogalert(page) {
        await page.on('dialog', dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Shipping address same as billing checkbox must be selected.');
            dialog.accept();
        });
    }
}

module.exports = Form;