import { Page, Locator, expect } from '@playwright/test';

export class AccountCreatedPage {
    readonly page: Page;
    readonly accountCreatedText: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountCreatedText = page.locator('text=ACCOUNT CREATED!');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
    }

    async verifyAccountCreated(): Promise<void> {
        await expect(this.accountCreatedText).toBeVisible();
    }

    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }
}