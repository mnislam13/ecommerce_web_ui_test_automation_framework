import { Page, Locator, expect } from '@playwright/test';
import { CommonHelpers } from '../utils/common-helpers';

export class AccountInformationPage {
    readonly page: Page;
    readonly titleMr: Locator;
    readonly titleMrs: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countryDropdown: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleMr = page.locator('#id_gender1');
        this.titleMrs = page.locator('#id_gender2');
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.offersCheckbox = page.locator('#optin');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.address2Input = page.locator('#address2');
        this.countryDropdown = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async selectTitle(title: string): Promise<void> {
        if (title === 'Mr') {
            await this.titleMr.check();
        } else if (title === 'Mrs') {
            await this.titleMrs.check();
        }
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async selectDateOfBirth(day: string, month: string, year: string): Promise<void> {
        await CommonHelpers.selectDropdownByValue(this.page, '#days', day);
        await CommonHelpers.selectDropdownByValue(this.page, '#months', month);
        await CommonHelpers.selectDropdownByValue(this.page, '#years', year);
    }

    async selectNewsletterAndOffers(): Promise<void> {
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
    }

    async fillAddressDetails(data: any): Promise<void> {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.companyInput.fill(data.company);
        await this.addressInput.fill(data.address);
        await this.address2Input.fill(data.address2);
        await CommonHelpers.selectDropdownByText(this.page, '#country', data.country);
        await this.stateInput.fill(data.state);
        await this.cityInput.fill(data.city);
        await this.zipcodeInput.fill(data.zipcode);
        await this.mobileNumberInput.fill(data.mobile);
    }

    async clickCreateAccount(): Promise<void> {
        await this.createAccountButton.click();
    }
}