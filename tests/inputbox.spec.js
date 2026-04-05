const {test, expect} = require('@playwright/test');
test('Input box', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await expect(page.locator('//input[@id="name"]')).toBeVisible();
    await expect(page.locator('//input[@id="name"]')).toBeEnabled();
    await expect(page.locator('//input[@id="name"]')).toHaveAttribute('type', 'text');
    await expect(page.locator('//input[@id="name"]')).toBeEditable();
    await page.locator('//input[@id="name"]').fill('Test');
    await expect(page.locator('//input[@id="name"]')).toHaveValue('Test');

    
});
