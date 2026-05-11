import {test, expect} from '@playwright/test';

test('API-get-Amazon',async ({request})=>{
    const getresp=await request.get(
        'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/megamenumar18f.json?_=1778472067537',
        {
            headers:
            {
                "accept":"application/json",
                "accept-language":"en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                "referer":"https://www.amazon.in/"
            }
        })

        const body=await getresp.json();
        console.log(body);
        console.log(getresp.status());
        await expect(getresp.status()).toBe(200);
        //subnav-sl-megamenu-9
       
        await expect(body).toHaveProperty("subnav-sl-megamenu-9");


})
