import{test,expect} from '@playwright/test';
const utils = require('../utility.json');
import { Automation_Register } from '../pages/automation_register';
test('validate register', async ({page})=>{
    //Register code here
    const register =  new Automation_Register(page);
    await register.Registerpage();
});


