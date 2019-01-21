var express = require("express");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);




app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});