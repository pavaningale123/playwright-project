import {test,expect} from '@playwright/test';
test('drag and drop',async ({page})=>{
    await page.goto("https://testautomationcentral.com/demo/drag_and_drop.html");

    const src=await page.locator("//div[@id='draggable']");
    const traget= await page.locator("//div[@id='droppable']");

    await src.dragTo(traget);
    await expect(await page.locator("//p[@id='drop-message']")).toHaveText("Dropped successfully!");

    await page.waitForTimeout(5000);
});