export interface TestEnvironment {
    USER_EMAIL: string;
    USER_PASSWORD: string;
    BASE_URL: string;
    ENVIRONMENT: string;
}

export const getEnvironmentVariables = (): TestEnvironment => {
    return {
        USER_EMAIL: process.env.USER_EMAIL || 'defaultuser@test.com',
        USER_PASSWORD: process.env.USER_PASSWORD || 'defaultpassword',
        BASE_URL: process.env.BASE_URL || 'http://automationexercise.com',
        ENVIRONMENT: process.env.ENVIRONMENT || 'test'
    };
};