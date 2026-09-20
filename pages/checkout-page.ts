import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly placeOrderButton: Locator;
    readonly addressDetailsSection: Locator;
    readonly reviewOrderSection: Locator;
    readonly commentTextarea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.placeOrderButton = page.locator('a[href="/payment"]');
        this.addressDetailsSection = page.locator('text=Address Details');
        this.reviewOrderSection = page.locator('text=Review Your Order');
        this.commentTextarea = page.locator('textarea[name="message"]');
    }

    async verifyAddressDetails(): Promise<void> {
        await expect(this.addressDetailsSection).toBeVisible();
    }

    async verifyReviewOrder(): Promise<void> {
        await expect(this.reviewOrderSection).toBeVisible();
    }

    async fillComment(comment: string): Promise<void> {
        await this.commentTextarea.fill(comment);
    }

    async clickPlaceOrder(): Promise<void> {
        await this.placeOrderButton.click();
    }
}