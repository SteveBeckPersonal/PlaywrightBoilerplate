import { expect, Locator, Page } from "@playwright/test";
import { PageObject } from "./page_object";
export class LoginPage extends PageObject {
    readonly page: Page;
    usernamefield: Locator;
    passwordfield: Locator;
    submitButton: Locator;
    dashboardTitle: Locator;

    constructor(page: Page){
       super(page);
       this.page = page;
       this.usernamefield = page.locator(`#user-name`);
       this.passwordfield = page.locator(`#password`);
       this.submitButton = page.getByRole('button', { name: 'LOGIN' })
       this.dashboardTitle = page.getByText(`Products`);
    }
    
    async visit(){
        await this.page.goto(`/`);
    }

    async login(username:string, password:string){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.submitButton.click();
    }

    async validateLogin(){
        await expect(this.dashboardTitle).toBeVisible();
        const authStatePath = `playwright/.auth/login.json`;
        await this.page.context().storageState({ path: authStatePath });
    }

}