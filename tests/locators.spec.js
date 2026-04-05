//import { test, expect } from '@playwright/test';
const {test,expect} = require('@playwright/test');

test('locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    //click on login button

    await page.locator("id=login2").click();

    await page.fill("//*[@id='loginusername']", 'pavanol');
    
    await page.fill("//*[@id='loginpassword']", 'test@123');

    await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]");

    // verify logout button is visible
    const logout=await page.locator("//*[@id='logout2']")
    await expect(logout).toBeVisible();

    await page.close();

});

