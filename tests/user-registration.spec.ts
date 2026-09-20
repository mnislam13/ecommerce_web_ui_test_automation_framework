import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { SignupLoginPage } from '../pages/signup-login-page';
import { AccountInformationPage } from '../pages/account-information-page';
import { AccountCreatedPage } from '../pages/account-created-page';
import { DashboardPage } from '../pages/dashboard-page';
import { DataHelper } from '../utils/data-helper';
import { CommonHelpers } from '../utils/common-helpers';

test.describe('User Registration Tests', () => {
    test('User Registration Test - Complete Flow', async ({ page }) => {
        const testData = DataHelper.readCSV('./data/testdata.csv')[0];
        const uniqueEmail = DataHelper.generateRandomEmail();
        const uniqueName = `Test User ${DataHelper.generateRandomString(4)}`;

        const homePage = new HomePage(page);
        const signupLoginPage = new SignupLoginPage(page);
        const accountInformationPage = new AccountInformationPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);
        const dashboardPage = new DashboardPage(page);

        await homePage.navigate();
        await homePage.verifyHomePageVisible();

        await homePage.clickSignupLogin();
        await signupLoginPage.verifyNewUserSignupVisible();

        await signupLoginPage.fillSignupForm(uniqueName, uniqueEmail);
        await signupLoginPage.clickSignupButton();

        await accountInformationPage.selectTitle(testData.title);
        await accountInformationPage.fillPassword(testData.password);

        const dateOfBirth = await CommonHelpers.getCurrentDate();
        await accountInformationPage.selectDateOfBirth(dateOfBirth.day, dateOfBirth.month, dateOfBirth.year);

        await accountInformationPage.selectNewsletterAndOffers();

        await accountInformationPage.fillAddressDetails(testData);

        await accountInformationPage.clickCreateAccount();

        await accountCreatedPage.verifyAccountCreated();
        await accountCreatedPage.clickContinue();

        await dashboardPage.verifyLoggedInUser(uniqueName);
    });
});