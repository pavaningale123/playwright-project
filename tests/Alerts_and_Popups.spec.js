const {test, expect} = require('@playwright/test');
test.skip('alerts and popups', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

// enable alert handling // diaglog window handle
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

})
await page.click('(//button[normalize-space()="Simple Alert"])[1]');
await page.waitForTimeout(9000);
    
});

test.skip('confirm dialog ok and cancel', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

// enable alert handling // diaglog window handle
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();

})
await page.click('(//button[normalize-space()="Confirmation Alert"])[1]');
await expect(page.locator('(//p[@id="demo"])[1]')).toHaveText('You pressed OK!');
await page.waitForTimeout(9000);
    
});

test('prompt dialog', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

// enable alert handling // diaglog window handle
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Playwright');

})
await page.click('(//button[normalize-space()="Prompt Alert"])[1]');
await expect(page.locator("(//p[@id='demo'])[1]")).toHaveText('Hello Playwright! How are you today?');
await page.waitForTimeout(9000);
    
});





















/*
In Playwright, JavaScript alerts (alert/confirm/prompt) 
are handled using the dialog event, because they are browser-level popups and not part of the DOM.

    Explanation (Step-by-Step)
page.on('dialog', async dialog => {...})
Listens for any browser popup (alert/confirm/prompt).
Must be defined before triggering the popup.
    dialog.message()
Captures the text displayed in the popup.
expect(dialog.message()).toBe(...)
Validates that the popup message is correct.
    dialog.accept()
Clicks OK on the popup.
(Use dialog.dismiss() to click Cancel)
page.locator('#confirmBtn').click()
Performs the action that triggers the popup.

*/