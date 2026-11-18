import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:4174/portfolio-v2/' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm start',
    env: { BROWSER: 'none', HOST: '127.0.0.1', PORT: '4174' },
    url: 'http://127.0.0.1:4174/portfolio-v2/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
