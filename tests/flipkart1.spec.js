import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Electronics' }).click();
  //await page.getByRole('link', { name: 'Earphones' }).click();
  await page.getByRole('link', { name: 'Earphones', exact: true }).click();
  await page.getByRole('link', { name: 'Image', exact: true }).nth(2).click();
});