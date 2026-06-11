import { expect, Locator, Page } from '@playwright/test';

export class ContactsPage {
    readonly page: Page;
    readonly telegramLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Найнадійніший локатор — шукаємо за точним посиланням
        this.telegramLink = page.locator('a[href="https://t.me/fyfa1ka"]');
    }

    async checkTelegramLink() {
        await expect(this.telegramLink).toBeVisible();
    }
}