import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expiryMonthInput: Locator;
    readonly expiryYearInput: Locator;
    readonly payAndConfirmButton: Locator;
    readonly successMessage: Locator;
    readonly downloadInvoiceButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.locator('input[name="cvc"]');
        this.expiryMonthInput = page.locator('input[name="expiry_month"]');
        this.expiryYearInput = page.locator('input[name="expiry_year"]');
        this.payAndConfirmButton = page.locator('button[data-qa="pay-button"]');
        this.successMessage = page.locator('text=Congratulations! Your order has been confirmed!');
        this.downloadInvoiceButton = page.locator('a[href="/download_invoice/"]');
    }

    async fillPaymentDetails(cardName: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string): Promise<void> {
        await this.nameOnCardInput.fill(cardName);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expiryMonthInput.fill(expiryMonth);
        await this.expiryYearInput.fill(expiryYear);
    }

    async clickPayAndConfirm(): Promise<void> {
        await this.payAndConfirmButton.click();
    }

    async verifySuccessMessage(): Promise<void> {
        await expect(this.successMessage).toBeVisible();
    }

    async clickDownloadInvoice(): Promise<void> {
        await this.downloadInvoiceButton.click();
    }
}