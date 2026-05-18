import {test,expect} from '@playwright/test';
const postreuestjsonfile = require('../test-data/post-request-body.json');

test('post api request using json file ',async({request})=>{
    const postapiresponse=await request.post('/booking',
        {
            headers:
            {
                'content-type':'application/json'
            },
            data:postreuestjsonfile
            
        } );

        //print body
        const postapiresponseBody=await postapiresponse.json();
        console.log(postapiresponseBody);

        //assert the status code

        await console.log('post api response is : ',postapiresponse.status());
        await expect(postapiresponse.status()).toBe(200);

        
        //printing the id
        console.log('id is : ',postapiresponseBody.bookingid);
        // json body assert

        await expect(postapiresponseBody.booking).toHaveProperty("firstname","Pavan2");

        //nested body assert

        await expect(postapiresponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");


})