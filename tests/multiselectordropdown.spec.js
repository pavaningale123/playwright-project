const {test,expect} = require('@playwright/test');

test('multi select dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors', ['red', 'blue']);

    //assertion check no. of options 
    const selectedOptions = await page.locator('#colors option');
    await expect(selectedOptions).toHaveCount(7);

    // check presence of options in dropdown menu
    const content=await page.locator('#colors').textContent();
    await expect(content).toContain('Red');
    await expect(content).toContain('Blue');
    await expect(content).not.toContain('Green');

});