import { Page, expect, Locator } from '@playwright/test';
export class HomePage {

    readonly page: Page;
    readonly registerHeaderLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.registerHeaderLink = page.getByRole('link', { name: 'Register' });

    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto('https://demowebshop.tricentis.com/');

    }

    async gotoRegistrationpage(): Promise<void> {
        await this.registerHeaderLink.click();
    }



}