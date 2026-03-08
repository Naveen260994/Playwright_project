import {request , test , Browser } from "@playwright/test";
import { ENV } from "../configure/env";

export async function loginApi(browser : Browser){
 
    const apiContext = await request.newContext();

    const response = await apiContext.post(`${ENV.BASE_URL}/login`, {
        form:{
            Email: ENV.USER_EMAIL,
            Password: ENV.USER_PASSWORD
        }
    });

    const cookies = await apiContext.storageState();
    const context = await browser.newContext({storageState: cookies});
    return context;
}