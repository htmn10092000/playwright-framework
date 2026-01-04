// pages/LoginPage.ts
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly userNameTxt: Locator;
  private readonly passWordTxt: Locator;
  private readonly loginBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.userNameTxt = this.page.locator('#userName');
    this.passWordTxt = this.page.locator('#password');
    this.loginBtn = this.page.locator('#login');
  }

  async login(username: string, password: string) {
    await this.userNameTxt.fill(username);
    await this.passWordTxt.fill(password);
    await this.loginBtn.click();
  }
}
