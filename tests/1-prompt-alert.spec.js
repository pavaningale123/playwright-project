import { test, expect } from '@playwright/test';

test('prompt alert', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/#");

    //alert handle
    page.on('dialog', async dialog =>
    
{
        expect(dialog.message()).toContain("Please enter your name:");
        await dialog.accept("Pavan");
})

        await page.locator("//button[@id='promptBtn']").click();
        await expect(page.locator("//p[@id='demo']")).toContainText("Hello Pavan! How are you today?");
    
})