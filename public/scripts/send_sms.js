

const accountSid = 'AC9ff7153d9652e55b5f8eb909e4f6c6f6';
const authToken = '34fac92f1c61ca94feada91f7eddfbc2';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+13143473160', to: '+14168465015'})
      .then(message => console.log(message.sid));
