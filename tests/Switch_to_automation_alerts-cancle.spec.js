import {test, expect} from '@playwright/test';

test("switch to alert", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByRole('link',({name:'SwitchTo'})).hover();
    await page.getByRole('link',({name:'Alerts'})).click();
    await page.getByRole('link',({name:"Alert with OK & Cancel"})).click();
    page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain("Press a Button !");
        //await dialog.accept();
        await dialog.dismiss();
    })

    await page.getByRole('button',({name:"click the button to display a confirm box"})).click();
    const confirmtext=await page.locator("//p[@id='demo']");
    //await expect(confirmtext).toHaveText("You pressed Ok");
    await expect(confirmtext).toHaveText("You Pressed Cancel");
    
    
  
});

//Listens for browser popups (alerts, confirm, prompt)