import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('has title', async ({ page }) => {
  const homePage= new HomePage(page);
  await homePage.navigateToHomePage();
// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Demo Web Shop');
});
