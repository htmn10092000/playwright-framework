import { Page, expect, Response } from "@playwright/test";

export class CommonActions {
  constructor(private readonly page: Page) {}

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async clearAndType(selector: string, value: string) {
    const locator = this.page.locator(selector);
    await locator.fill("");
    await locator.fill(value);
  }

  async pressEnter(selector: string) {
    await this.page.locator(selector).press("Enter");
  }

  async waitForOverlayGone(overlaySelector: string) {
    await this.page.waitForSelector(overlaySelector, { state: "hidden" });
  }

  async waitForEnabled(selector: string) {
    await expect(this.page.locator(selector)).toBeEnabled();
  }

  async waitForLabelVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async waitForApi(urlPart: string, status = 200): Promise<Response> {
    return await this.page.waitForResponse(
      res => res.url().includes(urlPart) && res.status() === status
    );
  }

  async isVisible(selector: string): Promise<boolean> {
    return this.page.locator(selector).isVisible();
  }

  async getText(selector: string): Promise<string> {
    return this.page.locator(selector).innerText();
  }
}