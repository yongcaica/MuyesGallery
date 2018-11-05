var express   = require("express"),
    app       = express(),
	mongoose  = require("mongoose");

var indexRoutes    = require("./routes/index"),
    artworkRoutes  = require("./routes/artworks")

mongoose.connect("mongodb://127.0.0.1:27017/muyesgallery");
// 连接成功
mongoose.connection.on('open', function(){
    console.log('MongoDB Connection Successed');
});
// 连接失败
mongoose.connection.on('error', function(){
    console.log('MongoDB Connection Error');
});

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set("view engine", "ejs");

var artworkSchema = new mongoose.Schema({
   name: String,
   image: String,
   desc: String
});

var Artwork = mongoose.model("Artwork", artworkSchema);

app.use("/", indexRoutes);
app.use("/artworks", artworkRoutes);


app.listen(8080, "127.0.0.1", function(){
	console.log("The Gallery Server Has Started!");
});