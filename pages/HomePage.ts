import { Page, expect, Locator } from '@playwright/test';
import { ENV } from '../configure/env';
export class HomePage {

    readonly page: Page;
    readonly registerHeaderLink: Locator;
    readonly loginHeaderLink: Locator;
    readonly myaccountHeaderLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.registerHeaderLink = page.getByRole('link', { name: 'Register' });
        this.loginHeaderLink = page.getByRole('link', { name: 'Log in' });
        this.myaccountHeaderLink = page.getByRole('link', { name: ENV.USER_EMAIL });


    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto(ENV.BASE_URL);
    }

    async headerRegisterLink(): Promise<void> {
        await this.registerHeaderLink.click();
    }

    async headerLoginLink(): Promise<void> {

        await this.loginHeaderLink.click();
    }

    async headerMyAccountLink(): Promise<void> {
        await this.myaccountHeaderLink.click();
    }



}