import {test,expect} from '@playwright/test';

test('multiple_web_element',async({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    // const links = await page.$$('a');
    // console.log("Total links on the page: "+ links.length);
    
    // for (const link of links) {
    //     const linktext= await link.textContent();
    //     console.log(linktext);
    // }

    //how many product are there in the page
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); 
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a");
    
    for (const product of products)
    {
        const productname= await product.textContent();
        console.log(productname)
    }
});