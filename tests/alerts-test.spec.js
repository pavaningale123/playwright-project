import {test,expect} from '@playwright/test';
test('alerts test', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");

    //first we need enable the alerts

    // page.on('dialog', async dialog =>{
    //     expect(dialog.type()).toContain('alert');
    //     expect(dialog.message()).toContain("I am an alert box!");
    //     await dialog.accept();
    // })
    // //await page.getByRole('button',{name:'Simple Alert'}).click();
    // await page.click("//button[@id='alertBtn']");

    // page.on('dialog', async dialog =>{
    //     expect(dialog.type()).toContain('confirm');
    //     expect(dialog.message()).toContain("Press a button!");
    //     await dialog.accept();
    // })
    // await page.click("//button[@id='confirmBtn']"); 

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:")
        await dialog.accept("Harry Potter");
    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("//p[@id='demo']")).toContainText("Hello Harry Potter! How are you today?");

});