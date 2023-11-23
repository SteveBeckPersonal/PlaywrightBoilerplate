import { test as setup, expect } from "../fixtures/test_fixture";

setup("description", async ({ pages,services }) => {
    await services.authService.auth('username','password');
    await pages.loginPage.visit();
    await pages.loginPage.login('standard_user','secret_sauce');
    //saves the logged in state for repeated tests
    await pages.loginPage.validateLogin();
});