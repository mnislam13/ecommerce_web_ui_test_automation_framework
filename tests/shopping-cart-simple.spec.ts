import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { SignupLoginPage } from '../pages/signup-login-page';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';
import { CartPage } from '../pages/cart-page';
import { DataHelper } from '../utils/data-helper';

test.describe('Shopping Cart Functionality Tests - Simple', () => {
    test('Shopping Cart Test - Login and Add to Cart', async ({ page }) => {
        test.setTimeout(120000);

        const loginData = DataHelper.readCSV('./data/login-credentials.csv')[0];

        const homePage = new HomePage(page);
        const signupLoginPage = new SignupLoginPage(page);
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        console.log(`Testing login and add to cart with email: ${loginData.email}`);

        await homePage.navigate();
        await homePage.verifyHomePageVisible();

        await homePage.clickSignupLogin();
        await loginPage.fillLoginCredentials(loginData.email, loginData.password);
        await loginPage.clickLoginButton();

        await productsPage.clickProducts();
        await productsPage.verifyAllProductsPage();

        await productsPage.searchProduct('Premium Polo T-Shirts');
        await productsPage.clickSearchButton();

        await productsPage.clickViewProduct();

        await cartPage.setQuantity('2');
        await cartPage.clickAddToCart();

        await cartPage.verifySuccessMessage();

        console.log('Login and add to cart test completed successfully');
    });
});