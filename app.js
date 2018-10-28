var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose")

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://yong:caiyong1@cluster0-n172n.mongodb.net/test?retryWrites=true"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

var hostName = "127.0.0.1";
var port = 8080;

// mongoose.connect("mongodb://127.0.0.1:27017/Muyes_Gallery");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var artworks = [
	{name: "Salmon Creek", image: "https://farm2.staticflickr.com/1950/31697843298_3e4d8f71e6_b.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"}
];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/artworks", function(req, res){
	res.render("artworks", {artworks: artworks});
});

app.post("/artworks", function(req, res){
    // get data from form and add to artworks array
    var name = req.body.name;
    var image = req.body.image;
    var newArtwork = {name: name, image: image}
    artworks.push(newArtwork);
    //redirect back to artworks page
    res.redirect("/artworks");
});

app.get("/artworks/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(port, hostName, function(){
	console.log("The Gallery Server Has Started!");
});