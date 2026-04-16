import{test,expect} from '@playwright/test';
const utils = require('../utility.json');
import{LoginPage} from '../pages/login';
import { HomeProductPage } from '../pages/home_product_select';
test ('validate test',async ({page})=>{
    //login
    const loginpage= new LoginPage(page);
    const homepage = new HomeProductPage(page);
    await loginpage.LoginPagegoto();
    await homepage.Homepageui();
    

});
