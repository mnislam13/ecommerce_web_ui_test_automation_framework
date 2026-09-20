import { Page } from '@playwright/test';

export class CommonHelpers {
    static async waitForPageLoad(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }

    static async scrollToElement(page: Page, selector: string): Promise<void> {
        await page.locator(selector).scrollIntoViewIfNeeded();
    }

    static async selectDropdownByValue(page: Page, selector: string, value: string): Promise<void> {
        await page.selectOption(selector, { value: value });
    }

    static async selectDropdownByText(page: Page, selector: string, text: string): Promise<void> {
        await page.selectOption(selector, { label: text });
    }

    static async getCurrentDate(): Promise<{ day: string; month: string; year: string }> {
        const now = new Date();
        const day = now.getDate().toString();
        const month = (now.getMonth() + 1).toString();
        const year = (now.getFullYear() - 25).toString();

        return { day, month, year };
    }
}