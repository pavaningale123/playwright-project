import {test,expect} from '@playwright/test';

test('api put request', async ({request})=>{

        const put_req=await request.put(
            `${process.env.BASE_URL}/api/collections/products/records/5042097a-5a7c-40a6-90e5-be60dccc381f?project_id=14530`,
            {
                headers:
                {
                    'x-api-key':process.env.API_KEY,
                    'Content-Type':'application/json'
                },
                data:
                {
                    data:
                    {
                        name: "Wireless mouse",price: 66.99,category: "Electronics",in_stock: true
                    }
                }
            })

            const body=await put_req.json();
            console.log(body);

            await expect(put_req.status()).toBe(200);

});