var path = require('path');

module.exports = function (app) {
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/app/public/survey.html'));
	});

	//this will send the user home
	app.get("/home", function (req, res) {
		res.sendFile(path.join(__dirname + '/app/public/home.html'));
	});
}