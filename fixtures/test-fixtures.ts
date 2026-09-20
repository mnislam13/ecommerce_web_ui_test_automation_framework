import { test as base } from '@playwright/test';
import { getEnvironmentVariables } from './environment';

export const test = base.extend<{
    environment: any;
}>({
    environment: async ({ }, use: any) => {
        const env = getEnvironmentVariables();
        await use(env);
    },
});