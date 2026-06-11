import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    /* Наш локальний сервер з урахуванням папки репозиторію */
    baseURL: 'http://localhost:5173/lab10/',
    trace: 'on-first-retry',
  },

  /* Налаштування для автоматичного запуску Vite перед тестами */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173/lab10/',
    // @ts-ignore
    reuseExistingServer: !process.env.CI,
  },
});