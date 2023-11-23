import { test as base } from "@playwright/test";
import { ServiceAggregator } from "../services/service_aggregator";
import { Application } from "../pages/application";
type testingFixtures = {
  services: ServiceAggregator;
  pages: Application;
};
export const test = base.extend<testingFixtures>({
  services: async ({ request }, use) => {
    await use(new ServiceAggregator( request));
  },
  pages: async ({ page }, use) => {
    await use(new Application( page));
  },
});

export { expect } from "@playwright/test";
