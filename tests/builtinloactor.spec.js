const {test,expect} = require('@playwright/test');

test('Locate built in locator',async({page})=>{

    await page.goto('https://demoblaze.com/');

    // const logo= await page.getByAltText ('company-branding');
    // await expect(logo).toBeVisible();

    await page.getByPlaceholder
})