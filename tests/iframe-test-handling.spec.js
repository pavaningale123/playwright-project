import {test,expect} from '@playwright/test';

test('iframe handling',async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    //Frame 1
    const frame1=await page.frameLocator("//frame[src='frame_1.html']")
    .locator("//input[@name='mytext1']");
    await frame1.fill("Hello frame 1");

    // Frame 3 nested frame

    //await page.frameLocator("//frame[@src='frame_3.html']").locator("//input[@name='mytext3']").fill("Hello Frame 3");
     await page.frameLocator("//frame[@src='frame_3.html']").frameLocator('iframe').locator("//*[@id='i21']").check()

    await page.waitForTimeout(5000);
});