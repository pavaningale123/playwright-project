const {test,expect} = require('@playwright/test');

test('Home Page', async ({page}) => {

    await page.goto('https://demoblaze.com/')
    //url validation
    await expect(page).toHaveURL('https://demoblaze.com/') //for validation we use expect
    //title validation
    await expect(page).toHaveTitle('STORE') 

    await page.close()
})
