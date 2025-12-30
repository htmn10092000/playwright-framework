import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path: string) {
    await this.page.goto(path, { waitUntil: 'networkidle' });
  }

  async reload() {
    await this.page.reload();
  }

  async waitForUrl(url: string | RegExp) {
    await this.page.waitForURL(url);
  }

  async waitForPageReady() {
    await this.page.waitForLoadState('networkidle');
  }
}
