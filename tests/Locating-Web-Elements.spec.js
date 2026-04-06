import {test, expect} from '@playwright/test';

test('getByPlaceholder', async({page})=>{

    await page.goto('https://demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    //verifing logout button 
    const logout=await page.getByRole('link',{name:'Log out'});
    await expect(logout).toBeVisible();

    await page.waitForTimeout(5000);

    

});
