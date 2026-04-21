import {test,expect} from '@playwright/test';
test('get api request', async({request})=>{

    const get_request=await request.get(
        `${process.env.BASE_URL}/api/collections/products/records/5929dd31-ca9d-46d0-8fcb-c61c469d5b8a?project_id=10848`,
        {
            headers:
            {
                'x-api-key':process.env.API_KEY
            }
        })

   const body=await get_request.json();
   console.log(body);
   await expect(get_request.status()).toBe(200);
});