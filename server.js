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

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


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
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  let queryString = 'SELECT id, name, price, cook_time FROM lightmenus;';
  db.query(queryString)
  .then((result) => {
    console.log(result.rows);
    let templateVars = {menuItems: result.rows};
    res.render("index", templateVars);
  });
});

app.get("/order", (req, res) => {
  res.render("order");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/order", (req, res) => {
  // console.log(req)
  // console.log(req.body)
  let foodNameArray = req.body.orderedItems;
  console.log(foodNameArray);

  //below code is to fetch the total cooking time
  let queryParam = '';
  for (const item of foodNameArray) {
    queryParam = queryParam + '\'' + item + '\'' + ','
  }
  queryParam = queryParam.slice(0, -1);
  let queryString = `SELECT sum(cook_time) FROM lightmenus WHERE name in(${queryParam})`;
  const cookingTime = function(passingQuery) {
    db.query(passingQuery)
    .then((result) => {
      console.log(result.rows);
      let cookingTimeValue = result.rows[0].sum;
      console.log(cookingTimeValue);

      //below code is Kalvin's API call, has to move into .then function to use "cookingTimeValue" variable
      let customerMessage = `Hello ${req.body.name}, thank you for your purchase of`;
      foodNameArray.forEach(function(element)  {
        customerMessage = customerMessage + " " + req.body[element] + " " + element + ",";
      })
      customerMessage += " your subtotal is $" + req.body.subtotal + " with taxes of $" + req.body.taxes + " adding up to a total of $" + req.body.total + "."

      customerMessage += ` Please come and pick up your order in ${cookingTimeValue} minutes.`

      let restaurantMessage = `Hello, a customer named ${req.body.name} with the phone number ${req.body.phone} has just made the following purcase of`;
      foodNameArray.forEach(function(element)  {
        restaurantMessage = restaurantMessage  + " " + req.body[element] + " " + element + ",";
      })
      restaurantMessage += " order subtotal is $" + req.body.subtotal + " with taxes of $" + req.body.taxes + " adding up to a total of $" + req.body.total + "."

      restaurantMessage += ` Customer will come and take their orders in ${cookingTimeValue} minutes`;

      console.log(customerMessage)
      console.log(restaurantMessage)

      client.messages.create({
        body: customerMessage,
        from: `+12299992650`,
        to:   `+16477219688`
      })
      .then(message => console.log(message.sid));

      client.messages.create({
        body: restaurantMessage,
        from: `+12299992650`,
        to:   `+14168465015`
      })
      .then(message => console.log(message.sid));
    });
  }
  cookingTime(queryString, queryParam);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
