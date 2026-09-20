import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductsPage } from '../pages/products-page';
import { ProductDetailsPage } from '../pages/product-details-page';
import { DataHelper } from '../utils/data-helper';

test.describe('Product Search Tests', () => {
    const productData = DataHelper.readCSV('./data/product-search-data.csv');

    for (const product of productData) {
        test(`Search Product Test - ${product.title}`, async ({ page }) => {
            test.setTimeout(120000);

            const homePage = new HomePage(page);
            const productsPage = new ProductsPage(page);
            const productDetailsPage = new ProductDetailsPage(page);

            console.log(`Searching for product: ${product.title} with price: ${product.price}`);

            await homePage.navigate();
            await homePage.verifyHomePageVisible();

            await productsPage.clickProducts();
            await productsPage.verifyAllProductsPage();

            await productsPage.searchProduct(product.title);
            await productsPage.clickSearchButton();

            await productsPage.clickViewProduct();

            await productDetailsPage.verifyProductTitle(product.title);
            await productDetailsPage.verifyProductPrice(product.price);

            console.log(`Product verification completed successfully for: ${product.title}`);
        });
    }
});