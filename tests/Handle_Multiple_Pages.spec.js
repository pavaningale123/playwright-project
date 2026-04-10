import{test,expect} from '@playwright/test';
test('Handle Multiple Pages', async ({context,page}) => {
    //open main page
    await page.goto('https://testautomationpractice.blogspot.com/');
    //click and capture new tab
    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("a[href='http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger']")
    ]);

    await expect(newpage).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock");

    // await page.waitForTimeout(5000);
    // await newpage.waitForTimeout(5000);

});
