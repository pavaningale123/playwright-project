import {test,expe, expect} from '@playwright/test';

test('alert', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");

    // alert manage

    page.on('dialog', async dialog =>{

        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.mouse.wheel(0,500);
    await page.locator("//button[@id='alertBtn']").click();

    await page.waitForTimeout(5000);
});