var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});