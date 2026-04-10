import{test,expect } from '@playwright/test';

test('put request',async ({request})=>{

  const response = await request.put(
    'https://reqres.in/api/collections/products/records/5929dd31-ca9d-46d0-8fcb-c61c469d5b8a?project_id=10848',
    {
      headers: {
        'x-api-key': 'pro_c4496d9f6545c35bda0e2743cb94bf22e7b8ee3c951f19f60f1a68e368b37a3a',
        'X-Reqres-Env': 'prod',
        'Content-Type': 'application/json'
      },
      data: {name: "Wireless Headphones",price: 61.99,category: "Electronics",in_stock: true}
      
    });
    console.log(await response.json());
    await expect(response.status()).toBe(200);
});