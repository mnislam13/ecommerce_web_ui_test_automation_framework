import { Page, Locator, expect } from '@playwright/test';

export class SignupLoginPage {
    readonly page: Page;
    readonly newUserSignupText: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newUserSignupText = page.locator('text=New User Signup!');
        this.signupNameInput = page.locator('input[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
    }

    async verifyNewUserSignupVisible(): Promise<void> {
        await expect(this.newUserSignupText).toBeVisible();
    }

    async fillSignupForm(name: string, email: string): Promise<void> {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
    }

    async clickSignupButton(): Promise<void> {
        await this.signupButton.click();
    }
}