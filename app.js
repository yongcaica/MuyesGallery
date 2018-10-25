var express = require("express");
var app = express();
var hostName = "127.0.0.1";
var port = 8080;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.listen(port, hostName, function(){
	console.log("Server is started!!!");
});