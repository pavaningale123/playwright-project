const {test, expect} = require('@playwright/test');

test('Basic assertion', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // another way to 
    // const logo = await page.locator('xpath=/html/body/div[6]/header/div[2]/div[1]/a/img');
    // await expect(logo).toBeVisible();
    const logo = page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

    const searchbox=await page.locator('#small-searchterms');
    await expect(searchbox).toBeEnabled();
    
    const radio = await page.locator('#gender-male');
    await radio.check();
    await expect(radio).toBeChecked();

    const newsletter = await page.locator('#NewsLetterSubscriptions_0__IsActive');
    await expect(newsletter).toBeChecked();

    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');

    await expect(page.locator('//*[@id="main"]/div/section/div/div[1]/h1')).toHaveText('Register');

    await expect(page.locator('//*[@id="main"]/div/section/div/div[1]/h1')).toContainText('Regist');

    const emailid=await page.locator('//*[@id="Email"]');
    await emailid.fill('test@gmail.com');
    await expect(emailid).toHaveValue('test@gmail.com');

    });
