import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('api post request',async ({request})=>{

    const post_req=await request.post(
        `${process.env.BASE_URL}/api/collections/products/records?project_id=14530`,
        {
            headers:
            {
                'x-api-key':process.env.API_KEY,
                'Content-Type':'application/json'
            },
            data:{
            data:{
                name: "Wireless mouse",price: 59.99,category: "Electronics",in_stock: true
            } 
        }
        })

        const body=await post_req.json();
        console.log(body);

        await expect(post_req.status()).toBe(201);

});
