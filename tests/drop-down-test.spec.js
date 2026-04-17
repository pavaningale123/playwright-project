// import {test,expect} from '@playwright/test';

// test('drop down',async ({page}) =>{

//    // await page.goto("https://testautomationpractice.blogspot.com/");
//     //await page.locator("//select[@id='country']").selectOption("India");
//         //     //assertions
//     // const countrieslist=await page.locator("#country option");
//     // await expect(countrieslist).toHaveCount(10);

//     // const countrieslist=await page.$$c;
//     // await expect(countrieslist.length).toBe(10);

//     // const counts= await page.locator("#country").textContent();
//     // await expect(counts.includes('India')).toBeTruthy();

//     const counts= await page.$$("#country");
//     //console.log(counts)
//     let status=false;
//     for (const count of counts)
//     {
//         let list=await count.textContent();
//         if(list.includes("India"))
//         {
//             status=true
//             break;
//         }
//     }
//     await expect(status).toBeTruthy();


    await page.waitForTimeout(5000);
    await page.
// });