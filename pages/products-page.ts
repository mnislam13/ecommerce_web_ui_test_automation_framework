import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productsButton: Locator;
    readonly allProductsTitle: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly viewProductButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsButton = page.locator('a[href="/products"]');
        this.allProductsTitle = page.locator('text=ALL PRODUCTS');
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.viewProductButton = page.locator('a[href*="/product_details/"]').first();
    }

    async clickProducts(): Promise<void> {
        await this.productsButton.click();
    }

    async verifyAllProductsPage(): Promise<void> {
        await expect(this.allProductsTitle).toBeVisible();
        await expect(this.page).toHaveURL(/products/);
    }

    async searchProduct(productTitle: string): Promise<void> {
        await this.searchInput.fill(productTitle);
    }

    async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    async clickViewProduct(): Promise<void> {
        await this.viewProductButton.click();
    }
}