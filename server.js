// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const nodemailer = require("nodemailer")

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
     user: '64a8a2cb2a86f1',
     pass: 'ba3d08d50f5b68'
  }
  });

  app.post("/messages", (req, res) => {
    // console.log(req.body)
  const message = {
      from: req.body.email,
      to: `lighthousenoodles@email.com`,
      subject: req.body.subject,
      text: req.body.message
      };
    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    res.render("contact");
  })
});



// Home page
app.get("/", (req, res) => {
  let queryString = 'SELECT id, name, price, cook_time FROM lightmenus;';
  db.query(queryString)
  .then((result) => {
    console.log(result.rows);
    let templateVars = {menuItems: result.rows};
    res.render("index", templateVars);
  });
});

//route to order
app.get("/order", (req, res) => {
  res.render("order");
});

//route to contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

// route to about page
app.get("/about", (req, res) => {
  res.render("about");
});

//send message to Twilio
app.post("/order", (req, res) => {
  let foodNameArray = req.body.orderedItems;
  let message = "Hello, thank you for your purchase of";
  foodNameArray.forEach(function(element)  {
    message = message + " " + req.body[element] + " " + element + ", ";
  })
  message += "your subtotal is $" + req.body.subtotal + " with taxes of $" + req.body.taxes + " adding up to a total of $" + req.body.total + "."

  client.messages.create({
    body: `${message}`,
    from: `+16476943212`,
    to:   `+16477465908`
  })
  .then(message => console.log(message.sid));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

