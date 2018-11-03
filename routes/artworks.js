var express = require("express");
var router  = express.Router();
// var Campground = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function(req, res){
    res.render("artworks/artworks");
});

router.get("/new", function(req, res){
   res.render("artworks/new"); 
});

module.exports = router;

