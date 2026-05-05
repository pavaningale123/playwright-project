import { test, } from '@playwright/test';

test('frame_testing', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Test123");

    //frame_3.html

await page.frameLocator("//frame[@src='frame_3.html']").frameLocator("iframe").locator("//div[@id='i24']");

await page.waitForTimeout(5000);


})



const [newPage] = await Promise.all([
context.waitForEvent('page'), // wait for new tab
page.click('#openTab') // action that opens new tab
]);
await newPage.waitForLoadState();
