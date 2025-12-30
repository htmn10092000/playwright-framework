import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login to the system', () => {
    test('Login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto('/login');
        await loginPage.waitForPageReady();
        await loginPage.login('niho','niho234');
        await expect(page.locator('#output #name')).toHaveText('Invalid username or password!');
    });
})