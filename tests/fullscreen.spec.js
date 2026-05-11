import { test, chromium } from '@playwright/test';

test('full screen page', async () => {

    const browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    const context = await browser.newContext({
        viewport: null,
        deviceScaleFactor: undefined
    });

    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/#');


});