import {test,expect} from '@playwright/test';

test('action test',async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fwishlist");
    await page.locator("//select[@id='customerCurrency']").selectOption('Euro');

    await page.locator("#FirstName").fill("Pavan");

    //radio button
    //await page.getByRole('radio',{name:'male',exact: true }).check();
    await page.locator("//input[@id='gender-male']").check();
     //await page.locator("//input[@id='gender-male']").uncheck();

     //checkbox
     await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']").uncheck();

     await page.getByRole('button',{name:'Electronics'}).hover();

      await page.getByRole('button',{name:'Register'}).press("Enter");
     

    await page.waitForTimeout(5000);
});