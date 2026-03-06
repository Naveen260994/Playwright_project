import { test, expect , Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Demo Web Shop', () => {

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

});