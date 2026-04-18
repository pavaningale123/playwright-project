import {test,expect} from '@playwright/test';
import path from 'node:path';
test('alerts test', async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html");

    //await page.getByRole("textbox",{name:'First Name'}).fill("Test_Name");
    //First Name text box
    const firstname=await page.getByPlaceholder("First Name");
    await firstname.fill("Test_First_Name");
    await expect(firstname).toHaveValue("Test_First_Name");

     //Last Name text box
    const lastname=await page.getByPlaceholder("Last Name");
    await lastname.fill("Test_Last_Name");
    await expect(lastname).toHaveValue("Test_Last_Name");

    //Address text box
    const address=await page.locator("textarea[ng-model='Adress']");
    await address.fill("Pune-411040");
    await address.screenshot({path:'D://PlayWright//Playwright//Screenshots//address.png'})
    await expect(address).toHaveValue("Pune-411040");

    //email address text box
    const Email_address=await page.locator("//input[@type='email']");
    await Email_address.fill("test123@gmail.com");
    await expect(Email_address).toHaveValue("test123@gmail.com");

    //phone number text box
    const Phone=await page.locator("//input[@type='tel']");
    await Phone.fill("1790700130");
    await expect(Phone).toHaveValue("1790700130");

    //Male radio button
    const MaleRadio=await page.getByRole("radio",({name:'Male', exact: true}));
    await MaleRadio.click();
    await expect(MaleRadio).toBeChecked();

    //checkbox
    const Cricket_checkbox=await page.locator("//input[@value='Cricket']");
    await Cricket_checkbox.check();
    await expect(Cricket_checkbox).toBeChecked();

    const Cricket_Movies=await page.locator("//input[@value='Movies']");
    await Cricket_Movies.check();
    await expect(Cricket_Movies).toBeChecked();

    const Cricket_Hockey=await page.locator("//input[@value='Hockey']");
    await Cricket_Hockey.check();
    await expect(Cricket_Hockey).toBeChecked();

    //Language drop down

    await page.locator("//div[@id='msdd']").click();
    await page.locator("//a[contains(text(),'Arabic')]").click();
    await expect(page.locator("//div[@id='msdd']")).toContainText("Arabic");

    await page.locator('body').click();

    // Skills drop down

    const skills=await page.locator("//select[@id='Skills']");
    await skills.click();
    await skills.selectOption("C");
    await expect(skills).toHaveValue("C");
    await page.locator('body').click();
    // select country
    // await page.locator("//span[@id='select2-country-container']").click();
    // await page.locator("//input[@type='search']").fill("India").press("Enter");

//     const country_select=await page.locator("//span[@id='select2-country-container']");
//    // await country_select.scrollIntoViewIfNeeded();
//     await page.mouse.wheel(0, 500);
//    // await expect(country_select).toBeVisible();

//     await country_select.click();
    //Date Of Birth drop down
    //year
    await page.mouse.wheel(0, 500);
    const year = await page.locator("//select[@id='yearbox']");
    await year.selectOption('1985');
    await expect(year).toHaveValue('1985');

    //Month
    await page.getByPlaceholder("Month").selectOption("November");

    //Day
    await page.locator("//select[@id='daybox']").selectOption('24');


    //Password
    const password = 'Test@' + Math.floor(Math.random() * 10000);
    console.log(password)
    await page.locator("//input[@id='firstpassword']").fill(password);
    await page.locator("//input[@id='secondpassword']").fill(password);
    
    await page.getByRole("button",({name:"Submit"})).click();

        await page.waitForTimeout(5000);
    

    
    



});