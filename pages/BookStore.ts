import { Page, Locator } from "@playwright/test";
import { CommonActions } from "../actions/commonActions";
export class BookStore {
    private readonly userNameLbl: Locator;
    private readonly commonActions: CommonActions

    constructor(protected readonly page: Page) {
        this.userNameLbl = this.page.locator('#userName-value');
        this.commonActions = new CommonActions(this.page);

    }

    async getLoggedInUserName(): Promise<string> {
        return this.commonActions.getText(this.userNameLbl);
    }
}