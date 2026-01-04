import { Page } from "@playwright/test";
import { CommonActions } from "../actions/commonActions";

export abstract class BasePage {
  protected readonly actions: CommonActions;

  constructor(protected readonly page: Page) {
    this.actions = new CommonActions(page);
  }

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
