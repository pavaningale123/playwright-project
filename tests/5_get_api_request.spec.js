import {test,expect} from '@playwright/test';

test('post api request',async({request})=>{
    const postapiresponse=await request.post('/booking',
        {
            headers:
            {
                'content-type':'application/json'
            },
            data:
            
                {
    'firstname': "Pavan1",
    'lastname': "Ingale1",
    'totalprice': 1001,
    'depositpaid': true,
    'bookingdates': {
        'checkin': "2018-01-01",
        'checkout': "2019-01-01"
    },
    'additionalneeds': "super bowls"
}           
            
        } );

        //print body
        const postapiresponseBody=await postapiresponse.json();
        console.log(postapiresponseBody);
//"================== Get Response code===================="
       const bid = postapiresponseBody.bookingid;
//"================== Get Response code===================="
        //assert the status code

        await console.log('post api response is : ',postapiresponse.status());
        await expect(postapiresponse.status()).toBe(200);

        // json body assert

        await expect(postapiresponseBody.booking).toHaveProperty("firstname","Pavan1");

        //nested body assert

        await expect(postapiresponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");


         console.log("================== Get Response ====================")


        const getResponse=await request.get(`/booking/${bid}`);
        console.log(await getResponse.json())

        expect(getResponse.status()).toBe(200);



})