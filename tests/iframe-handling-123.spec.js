import { test,expect } from '@playwright/test';

test("Frame handling", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Pavan");

    




});