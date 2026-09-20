import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signupLoginButton: Locator;
    readonly homePageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginButton = page.locator('a[href="/login"]');
        this.homePageTitle = page.locator('title');
    }

    async navigate(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'networkidle' });
    }

    async verifyHomePageVisible(): Promise<void> {
        await expect(this.page).toHaveURL(/automationexercise/);
        await expect(this.signupLoginButton).toBeVisible({ timeout: 10000 });
    }

    async clickSignupLogin(): Promise<void> {
        await this.signupLoginButton.click();
    }
}