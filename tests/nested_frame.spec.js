const {test, expect} = require('@playwright/test');
test('nested frames', async({page}) => {

   await page.goto('https://ui.vision/demo/webtest/frames/');

   const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
   await frame3.locator('//input[@name="mytext3"]').fill('welcome');

   await page.waitForTimeout(5000);


});