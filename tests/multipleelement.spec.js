import { test, expect } from '@playwright/test';

test('Locate multiple elements', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // const links = await page.$$('a');

    // for (const link of links) {
    //     const text = await link.textContent();
    //     console.log(text);
    // }

    // cature all the product 
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products){
        const text=await product.textContent();
        console.log(text);
    }
})