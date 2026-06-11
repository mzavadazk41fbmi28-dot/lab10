import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test.describe('Перевірка портфоліо', () => {

    test('Головна сторінка має правильний заголовок і завантажує фото', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await expect(homePage.mainTitle).toBeVisible();
        await expect(homePage.mentorImage).toBeVisible();
    });

    test('Фільтр навичок клікабельний', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.filterSkills();
    });

    test('Контакти містять правильне посилання на Telegram', async ({ page }) => {
        // 1. Заходимо на головну сторінку (вона точно відкривається)
        await page.goto('/');

        // 2. Бот сам клікає на посилання "Контакти" у твоєму Navbar
        await page.getByRole('link', { name: /Контакти/i }).click();

        // 3. Перевіряємо Телеграм вже на відкритій сторінці
        const contactsPage = new ContactsPage(page);
        await contactsPage.checkTelegramLink();
    });

});