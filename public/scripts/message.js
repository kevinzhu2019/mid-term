// const final_amount = require ("./quantity")
const twilio = require("twilio");


const accountSid = process.env.accountSid
const authToken = process.env.authToken

const client = require("twilio")(accountSid, authToken);
client.messages.create({
 to:`+ 16477465908`,
 from: `+16476943212`,
 body: `Thank you for your order to Lighthouse Noodles ! Your order of  will be ready in . Your total is .`
})
.then((message) => console.log(message.sid));

