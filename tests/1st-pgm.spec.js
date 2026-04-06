const {test, expect} = require('@playwright/test');
// @playwright/test → module that provides testing utilities in Playwright

// We import 'test' and 'expect' from this module
// - test → used to define test cases
// - expect → used for assertions (validations)

// const → used to declare variables that cannot be reassigned
// Here, 'test' and 'expect' are declared as constants

test('first test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
// test → function used to define a test case
// 'first test' → name of the test case

// async → defines an asynchronous function
// ({ page }) → parameter that provides access to the Playwright page object for browser interactions

// await → used to wait for actions (like page load, click, etc.) to complete before moving to the next step

// Why async and await?
// - Playwright operations are asynchronous 
// - We must wait for each operation to complete before executing the next step

// JavaScript is asynchronous by nature,
// so async/await helps handle asynchronous operations in a clean and readable way

// async → makes the function return a Promise
// await → pauses execution until the Promise is resolved

    await expect(page).toHaveURL('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await page.close();

});




