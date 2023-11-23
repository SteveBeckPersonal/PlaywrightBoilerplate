import { expect, Locator, Page } from "@playwright/test";
import { PageObject } from "./page_object";
export class DashboardPage extends PageObject {
    readonly page: Page;
   
   
    constructor(page: Page){
       super(page);
       this.page = page;
    }
    
    async visit(){
        await this.page.goto(`/dashboard`);
    }

    async someAction(){
      
    }

    


}