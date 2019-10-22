// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//changed to true
app.use(bodyParser.urlencoded({ extended: true }));
//commented this out
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/app/public')); 


//from npm body-parser
// parse application/json
app.use(bodyParser.json());

//require the html-routes
require('app\routing\api-route.js')(app);
require('app\routing\html-route.js')(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
