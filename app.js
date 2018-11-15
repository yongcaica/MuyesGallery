var express         = require("express"),
    app             = express(),
	mongoose        = require("mongoose"),
	methodOverride  = require("method-override"),
	Artwork         = require("./models/artwork")
	// seedDB          = require("./seeds")

var indexRoutes    = require("./routes/index"),
    artworkRoutes  = require("./routes/artworks")

/*
mongoose.connect("mongodb://127.0.0.1:27017/muyesgallery", {useNewUrlParser: true });
// connect successfully
mongoose.connection.on('open', function(){
    console.log('MongoDB Connection Successed');
});
// connect fail
mongoose.connection.on('error', function(){
    console.log('MongoDB Connection Error');
});
*/

mongoose.connect("mongodb+srv://yong:caiyong1@cluster0-n172n.mongodb.net/muye?retryWrites=true", {useNewUrlParser: true });
//"muye" is the name of database
mongoose.connection.on('open', function(){
    console.log('MongoDB Connection Successed');
});
mongoose.connection.on('error', function(){
    console.log('MongoDB Connection Error');
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/artworks", artworkRoutes);


app.listen(8080, "127.0.0.1", function(){
	console.log("The Gallery Server Has Started!");
});
