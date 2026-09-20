import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly proceedToCheckoutButton: Locator;
    readonly quantityInput: Locator;
    readonly addToCartButton: Locator;
    readonly successMessage: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('a[href="/view_cart"]');
        this.proceedToCheckoutButton = page.locator('text=Proceed To Checkout');
        this.quantityInput = page.locator('#quantity');
        this.addToCartButton = page.locator('button[type="button"]').filter({ hasText: 'Add to cart' });
        this.successMessage = page.locator('text=Your product has been added to cart.');
        this.continueShoppingButton = page.locator('button[data-dismiss="modal"]').filter({ hasText: 'Continue Shopping' });
    }

    async setQuantity(quantity: string): Promise<void> {
        await this.quantityInput.clear();
        await this.quantityInput.fill(quantity);
    }

    async clickAddToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async verifySuccessMessage(): Promise<void> {
        await expect(this.successMessage).toBeVisible();
    }

    async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }

    async clickCartButton(): Promise<void> {
        await this.cartButton.click();
    }

    async clickProceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutButton.click();
    }
}