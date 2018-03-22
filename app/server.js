// ________________________________________
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ________________________________________
// Configure Express app
var app = express();
// Set initial port used by listener
var PORT = process.env.PORT || 8080;

// Data parsing with bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

// ________________________________________
// Routing - pointing server to apiRoutes.js & htmlRoutes.js files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// ________________________________________
// Listener - Start Server
app.listen(PORT, function() {
    console.log('Friend Finder app listening on PORT: ' + PORT);
 });