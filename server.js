// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
//changed to true
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/app/public/"));

//require the html-routes
require(path.join(__dirname, "./app/routing/api-route.js"))(app);
require(path.join(__dirname, "./app/routing/html-route.js"))(app);
// Could not get this to route the 


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
