import { test,expect } from '@playwright/test';

test('get request amazon', async ({request})=>{
    const getresponse=await request.get(
        'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/megamenumar18f.json?_=1777962009894',
        {
            headers:
            {
                "Accept":'application/json, text/javascript, */*; q=0.01',
                "accept-language": 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                "referer":'https://www.amazon.in/',
                "user-agent": 'Mozilla/5.0'
            }
        })
       const body= await getresponse.json();
       console.log(body);

       await expect(getresponse.status()).toBe(200);
       console.log('status code is : ',getresponse.status())
       //assertion

       await expect(body).not.toBeNull();//Response Body Not Empty
       //subnav-sl-megamenu-1
       await expect(body).toHaveProperty('subnav-sl-megamenu-1');
       
       //Honor
       await expect(body['subnav-sl-megamenu-1'].html).toContain('Honor');
       await expect(body['subnav-sl-megamenu-1'].html).toContain('Ambrane');

})