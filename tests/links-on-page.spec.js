import {test, expect} from '@playwright/test';

test('links count', async ({page})=>
{
await page.goto("https://demoblaze.com/");

const links=await page.$$('a');

console.log("Links are : ", links.lenght);

for (const link of links)
{
    const linktext=await link.textContent();
    console.log(linktext)
}

})