import {test, expect} from '@playwright/test';

test ('getAltByText',  async({page}) => {

    await page.goto('https://student.maharashtra.gov.in/adm_portal/Users/rte_index_new');
    const logo=await page.getByAltText('Logo image');
    await expect(logo).toBeVisible();

    await page.waitForTimeout(5000);

    });
