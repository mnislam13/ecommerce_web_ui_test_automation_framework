import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailsPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.product-information h2');
        this.productPrice = page.locator('.product-information span span');
    }

    async verifyProductTitle(expectedTitle: string): Promise<void> {
        await expect(this.productTitle).toContainText(expectedTitle);
    }

    async verifyProductPrice(expectedPrice: string): Promise<void> {
        await expect(this.productPrice).toContainText(expectedPrice);
    }
}