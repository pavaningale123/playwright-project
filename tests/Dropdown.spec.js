const {test,expect} = require('@playwright/test');

test('check checkbox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //working on dropdown

    await page.locator('#country').selectOption('india');

    //assertion
    await expect(page.locator('#country')).toHaveValue('india');

});
