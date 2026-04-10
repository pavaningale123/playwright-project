import{test,expect } from '@playwright/test';

test('delete request',async ({request})=>{

  const response = await request.delete(
    'https://reqres.in/api/collections/products/records/5929dd31-ca9d-46d0-8fcb-c61c469d5b8a?project_id=10848')
   
    await expect(response.status()).toBe(204);
});