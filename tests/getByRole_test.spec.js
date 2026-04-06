import {test,expect} from '@playwright/test';

test('getByRole test', async ({page}) => {
    //***************fill the text box for user name ****************** */
    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.getByRole('textbox',{name:'username'}).fill('student');


    // ******************click on link************************
    // await page.goto('https://practicetestautomation.com/');
    // const courseLink = await page.getByRole('link',{name:'nine courses with over 70,000 students'});
    // await courseLink.click();

    // await page.waitForTimeout(5000);

    // ******************click on button************************
    // await page.goto('https://practicetestautomation.com/contact/');
    // const submitbutton= await page.getByRole('button',{name:'Submit'});
    // await submitbutton.click();

    // ************** checkbox *************
    // await page.goto('https://testautomationcentral.com/demo/checkboxes.html#google_vignette');
    // const checkbox=await page.getByRole('checkbox',{name:'Styled Option 1'});
    // await checkbox.first().check()

    //******* click on phone */
await page.goto('https://demoblaze.com/');
const phonelink=await page.getByRole('link',{name:'Phones'}).click();
//await phonelink.click();

    await page.waitForTimeout(5000);
});

