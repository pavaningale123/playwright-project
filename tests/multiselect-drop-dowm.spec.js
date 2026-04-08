//How to handle Multi Select DropDown
import{test,expect} from '@playwright/test';

test('multi-select drop down',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption('#colors',['Red','Blue']);

    await page.waitForTimeout(5000);

});