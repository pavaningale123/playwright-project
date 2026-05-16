import {test,expect} from '@playwright/test';

test('find oneplus product', async ({page})=>{
        await page.goto("https://www.flipkart.com/");
        await page.getByRole('link', { name: 'Electronics' }).click();
        await page.getByRole('link', { name: 'Earphones', exact: true }).click();
        //await page.getByText("Earphones").click();
       // await page.getByRole('link',{name:'oneplus'});
        //await expect(page.getByRole('link',{name:'oneplus'})).toContainText("oneplus")
        
        const oneplusLink = page.locator('a[href*="oneplus"]').first();
        //await expect(oneplusLink).toHaveAttribute("oneplus-nord-buds-3r");
        await expect(oneplusLink).toBeVisible();
        await page.waitForTimeout(5000);

});