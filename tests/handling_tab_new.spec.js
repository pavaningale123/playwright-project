import { test, expect } from '@playwright/test';

test('handling new tab', async ({ page, context }) => {
    await page.goto("https://the-internet.herokuapp.com/windows");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),        //  listen on context, not page
        page.click("//a[@target='_blank']")
    ]);

    await newPage.waitForLoadState();
    console.log(await newPage.title());      // await title()
    await newPage.close();                   // await close()
});