import { test, expect } from '@playwright/test';

test('Get Product by ID', async ({ request }) => {

  const response = await request.get(
    'https://reqres.in/api/collections/products/records/5929dd31-ca9d-46d0-8fcb-c61c469d5b8a?project_id=10848',
    {
      headers: {
        'x-api-key': 'pro_c4496d9f6545c35bda0e2743cb94bf22e7b8ee3c951f19f60f1a68e368b37a3a',
        'X-Reqres-Env': 'prod'
      }
    }
  );

  expect(response.status()).toBe(200);
  console.log(await response.json());


});