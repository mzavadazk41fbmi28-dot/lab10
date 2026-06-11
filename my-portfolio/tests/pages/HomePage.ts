import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly mainTitle: Locator;
    readonly mentorImage: Locator;
    readonly skillsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator('h1, .title'); // Шукаємо h1 або елемент з класом title
        this.mentorImage = page.locator('img.negr'); // Твоя фотографія
        this.skillsButton = page.getByRole('button', { name: /Всі навички/i });
    }

    async goto() {
        // baseURL вже налаштований, тому просто йдемо на корінь
        await this.page.goto('/');
    }

    async filterSkills() {
        await this.skillsButton.click();
    }
}