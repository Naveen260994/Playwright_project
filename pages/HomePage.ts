import { Page, expect, Locator } from '@playwright/test';
export class HomePage {

    private page: Page;
    private registerHeaderLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.registerHeaderLink = page.getByRole('link', { name: 'Register' });

    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto('https://demowebshop.tricentis.com/');

    }

    async registerheaderLink(): Promise<void>{
        await this.registerHeaderLink.click();

    }



}