const {test, expect} = require('@playwright/test');
test('handle frames', async({page}) => {

   await page.goto('https://ui.vision/demo/webtest/frames/');

   //totsl number of frames
    const frames = page.frames();
    console.log('total frames: ' , frames.length);

    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill('//input[@name="mytext1"]','hello');

 


    await page.waitForTimeout(5000);
    
});