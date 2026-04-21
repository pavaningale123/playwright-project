import { test,expect } from '@playwright/test';
test('drag and drop', async ({page})=>{

    await page.goto("https://testautomationcentral.com/demo/drag_and_drop.html");

    const src= await page.locator("//div[@id='draggable']");
    const dest = await page.locator("//div[@id='droppable']");

    await src.dragTo(dest);

    await expect(page.locator("//p[@id='drop-message']")).toHaveText("Dropped successfully!");
})