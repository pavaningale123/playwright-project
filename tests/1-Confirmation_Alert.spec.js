import {test,expect} from '@playwright/test';

test('confiramation alert', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");

    page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
        })

        await page.locator("//button[@id='confirmBtn']").click();
        await expect(page.locator("//p[@id='demo']")).toContainText("You pressed OK!");
})