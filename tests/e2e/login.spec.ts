import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { invalidUser } from '../../test-data/user';

test.describe('Login to the system', () => {
    test('Login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto('/login');
        await loginPage.waitForPageReady();
        await loginPage.login(invalidUser.username,invalidUser.password);
        expect(await loginPage.getErrorMessage()).toEqual('Invalid username or password!');
    });
})
// Updates:
// Create a common functions for handling multiple windows or tabs in the browser.
// Add envs file for testing in different environments like dev, staging, production.