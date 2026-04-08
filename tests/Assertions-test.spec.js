import{test,expect} from '@playwright/test';
test ('assertion test', async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //1.	expect(page). toHaveURL() → Page has URL 

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //2.	expect(page). toHaveTitle() → Page has title 

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3.	expect(locator). toBeVisible() → Element is visible 

    const companylogo=await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(companylogo).toBeVisible();

    //4.	expect(locator). toBeEnabled() → Control is enabled
    const searchbox=await page.locator("//input[@id='small-searchterms']");
    await expect(searchbox).toBeEnabled();

    //5.	expect(locator). toBeChecked() → Radio/Checkbox is checked 
    const checkbox=await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']");
    await expect (checkbox).toBeChecked();

    //6.	expect(locator). toHaveAttribute() → Element has attribute 

    const regbutton=await page.getByRole('button',{name:'Register'});
    await expect(regbutton).toHaveAttribute('name','register-button');

    //6.	expect(locator). toHaveAttribute() → Element has attribute 
    await expect(await page.locator("//div//h1[contains(text(),'Register')]")).toHaveText("Register");
      await expect(await page.locator("//div//h1[contains(text(),'Register')]")).toContainText("Regist");
//9.	expect(locator). toHaveValue(value) → Input has a value 

const firstname=await page.locator("//input[@id='FirstName']");
await firstname.fill('pavan');
await expect(firstname).toHaveValue('pavan');

    });