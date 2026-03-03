import { Page, expect, Locator } from '@playwright/test';
export class HomePage {

    private page: Page;


    constructor(page: Page) {
        this.page = page;


    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto('https://demowebshop.tricentis.com/');

    }



}



