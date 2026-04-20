import { test,expect } from '@playwright/test';
test("alert with message", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByRole('link',({name:'SwitchTo'})).hover();
    await page.getByRole('link',({name:'Alerts'})).click();
    await page.getByRole('link',({name:"Alert with Textbox"})).click();

    page.once('dialog',async dialog=>{
        expect(dialog.message()).toContain("Please enter your name");
        await dialog.accept("Pavan");
    })

    await page.getByRole('button',({name:'click the button to demonstrate the prompt box'})).click();
    const confirmtext=await page.locator("//p[@id='demo']");
    //await expect(confirmtext).toBeVisible();
    //await expect(confirmtext).toContainText("Hello Pavan How are you today");
    await expect(page.locator("#demo")).toContainText("Hello Pavan How are you today");

})