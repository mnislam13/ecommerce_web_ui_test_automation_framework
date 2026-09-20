import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    workers: process.env.CI ? 1 : 1,
    timeout: 60000,
    reporter: [
        ['html'],
        ['json', { outputFile: 'test-results/results.json' }],
        ['list']
    ],
    use: {
        baseURL: process.env.BASE_URL || 'http://automationexercise.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        navigationTimeout: 60000,
        actionTimeout: 30000
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        }
    ],

    webServer: undefined,
});