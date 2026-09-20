import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly loggedInText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedInText = page.locator('text=Logged in as');
    }

    async verifyLoggedInUser(username: string): Promise<void> {
        await expect(this.loggedInText).toBeVisible();
        await expect(this.page.locator(`text=Logged in as ${username}`)).toBeVisible();
    }
}