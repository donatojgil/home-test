import { Page } from "@playwright/test";
const { expect } = require('@playwright/test');

class Grid {
    constructor(page) {
        this.page = page;
        this.grid = page.getByRole('link', { name: 'Grid' })
        this.itemtext=page.locator("//*[@data-test-id='card-number'][text()='7']/following-sibling::h4/b");
        this.itemprice= page.locator("//*[@data-test-id='card-number'][text()='7']/following-sibling::p");
        this.items = page.locator('xpath=//div[@class="item"]');
        
    }

    async navigateGrid(){
        await this.grid.click();
        
    }
   
    async isTitlePresent(index){
        return await this.page.locator("//div[@class='item']["+index+"]/label")
    }
    
    async isPresent() {
        const count = await this.items.count();
        for (let i = 0; i < count; i++) {
            const item = this.items.nth(i);
            
            await expect(item.locator('img')).toBeVisible();
            await expect(item.locator('h4')).toBeVisible();
            await expect(item.locator('p#item-price')).toBeVisible();
            await expect(item.locator('button')).toBeVisible();
        }
    }
}

module.exports = Grid;