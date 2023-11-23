import { expect, Locator, Page } from "@playwright/test";

//Store any shared / global functions here

export class PageObject  {
    readonly page: Page;
    constructor(page: Page){
       this.page = page;
    }
}