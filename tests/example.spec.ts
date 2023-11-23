import { test, expect } from '../fixtures/test_fixture';

test('Using pages', async ({ pages }) => {
  await pages.dashboardPage.visit();
  await pages.dashboardPage.someAction();
});

test('Using services', async ({ services }) => {
  //auth was done in the setup class
  //then call function requiring auth
  const data = await services.typicodeService.get();
  expect(data).not.toBeUndefined();
});

test('Using both', async ({ pages,services }) => {
  const data = await services.typicodeService.get();
  await pages.dashboardPage.visit();
  await pages.dashboardPage.someAction();
});