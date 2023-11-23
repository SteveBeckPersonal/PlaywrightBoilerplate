import { Page } from "@playwright/test";
import { LoginPage } from "./login_page";
import { DashboardPage } from "./dashboard_page";

//Add page classes here to access through DI

export class Application{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    
    constructor(page:Page){
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
    }
}