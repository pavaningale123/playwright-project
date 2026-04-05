const {test,expect} = require('@playwright/test');

test('check checkbox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const sunday_checkbox=await page.locator('(//input[@id=\'sunday\'])[1]');
    await sunday_checkbox.check();
    expect(sunday_checkbox).toBeChecked();

    // multiple checkboxes
    const multiple_checkbox= [
        await page.locator('(//input[@id=\'sunday\'])[1]'),
        await page.locator('(//input[@id=\'monday\'])[1]'),
        await page.locator('(//input[@id=\'tuesday\'])[1]')
    ];

    for (const checkbox of multiple_checkbox) {
        await checkbox.check();
        expect(checkbox).toBeChecked();
    }

    //for uncheck
    for (const checkbox of multiple_checkbox) {
         await checkbox.uncheck();
        expect(checkbox).not.toBeChecked();
    }




});