# Playwright Skeleton

The purpose of this repo is to provide a quickstart with Page Object Modelling and test fixtures.
The assumption is that the tester has knowldge  of playwright configuration and that this is to provide modelling and shared state accross tests.

To get started clone the repo and run npm install to download the dependencies.

Playwright will automatically save the requestContext state which will the tester to authenticate once and then be able to call authenticated services without hassle.

This has been done using a pre-test setup class but can be done per test using before statements.

The boilerplate provided uses [SauceLabs](https://www.saucedemo.com/v1/index.html) demo website just to show the basic page object model, as well as [JSONPlaceHolder](https://jsonplaceholder.typicode.com/) for the api section.

Credentials for Saucedemo are freely available on their login page and are not a secret. Credentials should otherwise be stored in a .env file and not uploaded to a git repo.

Sadly I do not have an server to prove authentication but, any suggestions are welcomed.