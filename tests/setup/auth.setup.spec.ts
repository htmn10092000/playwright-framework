import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { validUser } from '../../test-data/user';
import { BookStore } from '../../pages/BookStore';

test('login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/login');
    await loginPage.waitForPageReady();
    await loginPage.login(validUser.username,validUser.password);
    await page.waitForURL('**/profile');
    
    const bookStore = new BookStore(page);
    expect(await bookStore.getLoggedInUserName()).not.toBeNull();
    await page.context().storageState({path: 'auth.json'});
    await page.context().close();
})