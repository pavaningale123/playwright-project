import {test,expect} from '@playwright/test';
import { faker, Faker } from '@faker-js/faker';
import { request } from 'node:http';
const date_time = require('luxon');

test('post api request dynamic data faker', async ({request})=>{

     const firstname = faker.person.firstName();
     const lastname = faker.person.lastName();
     const totalprice = faker.number.int(1000);
     const checkin = date_time.DateTime.now().toFormat('yyyy-MM-dd')
     const checkout = date_time.DateTime.now().plus({days:3}).toFormat('yyyy-MM-dd')
     const postreqresponse = await request.post('/booking',

        {
            headers:
            {
                'content-type':'application/json'
            },
            data:
            
                {
                "firstname": firstname,
                "lastname": lastname,
                "totalprice": totalprice,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": checkin,
                    "checkout": checkout
                },
                "additionalneeds": "super bowls"
            }
            });

//code for validation
const postreqresponseBody = await postreqresponse.json();
console.log(postreqresponseBody);

// status code check
await expect(postreqresponse.status()).toBe(200);

// bosy assert

await expect(postreqresponseBody.booking).toHaveProperty('firstname',firstname);

//nested body asset

await expect(postreqresponseBody.booking.bookingdates).toHaveProperty('checkin',checkin);


});