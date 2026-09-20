import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginEmailInput = page.locator('input[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
    }

    async fillLoginCredentials(email: string, password: string): Promise<void> {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}