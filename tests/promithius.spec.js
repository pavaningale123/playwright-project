import{test,expect} from '@playwright/test';
const utils = require('../utility.json');
//import {utils} from '../utility.json'
import{LoginPage} from '../pages/login'
test ('validate test',async ({page})=>{

    const loginpage= new LoginPage(page);
    await loginpage.LoginPagegoto();


});
