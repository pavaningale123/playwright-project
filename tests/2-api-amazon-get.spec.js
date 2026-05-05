//https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/subnavjan18.json?_=1777913951962

import {test,expect} from '@playwright/test';
test('get_resp', async ({request})=>{

        const get_response=await request.get(
            'https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/subnavjan18.json?_=1777913951962',
            {
                headers:
                {
                    "Accept":'application/json, text/javascript, */*; q=0.01',
                    "Referer": 'https://www.amazon.in/',
                    "user-agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',

                }
            })




     const text = await get_response.text();

  // إزالة BOM (important fix)
  const cleanText = text.replace(/^\uFEFF/, '');

  const body = JSON.parse(cleanText);

  console.log(body);

console.log("Status:", get_response.status());
expect(get_response.status()).toBe(200);

});