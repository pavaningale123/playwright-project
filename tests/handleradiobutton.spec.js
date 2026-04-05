const {test, expect} = require('@playwright/test');
test('Input box', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const radio_button=await page.locator("//input[@id='male']");
    radio_button.check();
    //assertion
    await expect(radio_button).toBeChecked();
    //await expect(radio_button).isChecked().toBeTruthy();

    const female_radio_button=await page.locator("//input[@id='female']");

    await expect(female_radio_button).not.toBeChecked();

  
});