import { test, expect } from '@playwright/test';

test('Create Product API', async ({ request }) => {
var user_id;
  const response = await request.post(
    'https://reqres.in/api/collections/products/records?project_id=10848',
    {
      headers: {
        'x-api-key': 'pro_c4496d9f6545c35bda0e2743cb94bf22e7b8ee3c951f19f60f1a68e368b37a3a',
        'X-Reqres-Env': 'prod',
        'Content-Type': 'application/json'
      },
      data: {name: "Wireless Headphones",price: 59.99,category: "Electronics",in_stock: true}
      
    });

  console.log(await response.json());
  await expect(response.status()).toBe(201);

  var res=await response.json()
  user_id=res.id;

});

