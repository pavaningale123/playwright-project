import { test,expect } from '@playwright/test';

test('api get request', async ({request})=> {

   const get_response= await request.get(
        'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/megamenumar18f.json?_=1778135771132',
        {
            headers:
            {
                "accept":'application/json, text/javascript, */*; q=0.01',
                "accept-language":'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                "referrer":"https://www.amazon.in/",
                "user-agent":"Mozilla/5.0"
            }
        })

        const body=get_response.json();
        console.log(body);

        await expect(get_response.status()).toBe(200);


})