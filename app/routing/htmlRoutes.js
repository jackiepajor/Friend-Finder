// ________________________________________
// Dependencies
var path = require("path");

// ________________________________________
// Routing
module.exports = function (app) {

    // GET request to display the survey page 
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/survey.html'));
    });

    // Route to display the home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '../public/home.html'));
    });
};
