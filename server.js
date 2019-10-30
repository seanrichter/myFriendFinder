// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
//changed to true
app.use(express.urlencoded({ extended: true }));
//commented this out
app.use(express.json());
app.use(express.static(__dirname + "/app/public/"));

//require the html-routes
require("./app/routing/api-route")(app);
require("./app/routing/html-route")(app);
// Could not get this to route the 


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
