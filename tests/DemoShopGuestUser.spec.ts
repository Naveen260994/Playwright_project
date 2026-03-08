import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Demo Web Shop guest user', () => {

  let homePage: HomePage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);

  });

  test('Welcome to the Demo Web Shop', async () => {
    await homePage.navigateToHomePage();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Demo Web Shop');
    console.log(await page.title());
  });

  test('Navigate to Registation page', async () => {
    await homePage.navigateToHomePage();
    await expect(homePage.registerHeaderLink).toBeVisible();
    await expect(homePage.registerHeaderLink).toHaveText('Register');
    await homePage.headerRegisterLink();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/register');

  });

  test('Navigate to Login page', async () => {
    await homePage.navigateToHomePage();
    await expect(homePage.loginHeaderLink).toBeVisible();
    await expect(homePage.loginHeaderLink).toHaveText('Log in');
    await homePage.headerLoginLink();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');

  });

});