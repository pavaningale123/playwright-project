import { test,expect } from '@playwright/test';


test('api delete', async ({request})=> {

    const delete_req=await request.delete(
        `${process.env.BASE_URL}/api/collections/products/records/5042097a-5a7c-40a6-90e5-be60dccc381f?project_id=14530`,
        {
            headers:
            {
                'x-api-key':process.env.API_KEY,
                'Content-Type':'application/json'
            }

        })
        await expect(delete_req.status()).toBe(204);    
    
    });