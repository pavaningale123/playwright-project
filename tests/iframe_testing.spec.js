import {test, expect} from '@playwright/test';

test('frame handling', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Pavan");

    await page.frameLocator("//frame[@src='frame_3.html']").frameLocator('iframe')
    .locator("//div[@id='i12']").click();


    await page.waitForTimeout(5000);
})