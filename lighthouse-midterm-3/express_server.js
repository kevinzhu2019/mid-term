
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});