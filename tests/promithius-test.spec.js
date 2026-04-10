import{test,expect} from '@playwright/test';
const utils = require('../utility.json');
import{LoginPage} from '../pages/login'
test ('validate test',async ({page})=>{
    //login
    const loginpage= new LoginPage(page);
    await loginpage.LoginPagegoto();
    await page.waitForTimeout(5000);

});
