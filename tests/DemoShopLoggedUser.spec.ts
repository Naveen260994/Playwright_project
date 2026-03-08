import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { loginApi } from '../utils/loginApi';
import { ENV } from '../configure/env';

test.describe('Demo Web Shop logged in user', () => {
    let page: Page; 
    let homePage: HomePage;

    test.beforeAll('Login via API before all tests', async ({ browser }) => {
        const context = await loginApi(browser);
        page = await context.newPage();
        homePage = new HomePage(page);
    });

    test('Verify user is logged in', async () => {
        await homePage.navigateToHomePage();
        await expect(page).toHaveTitle('Demo Web Shop');
        console.log(await page.title());
        await expect(homePage.myaccountHeaderLink).toBeVisible();
        await expect(homePage.myaccountHeaderLink).toHaveText(ENV.USER_EMAIL);

    });


});