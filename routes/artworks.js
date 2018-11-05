var express = require("express");
var router  = express.Router();
var Artwork = require("../models/artwork");

router.get("/", function(req, res){
    // Get all campgrounds from DB
    Artwork.find({}, function(err, allArtworks){
       if(err){
           console.log(err);
       } else {
          res.render("artworks/artworks",{artworks: allArtworks});  //first "artworks" is name, second "allArtworks" is the data we want to pass in
       }
    });
});
		
//CREATE - add new artwork to DB
router.post("/", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    
    var newArtwork = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Artwork.create(newArtwork, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/artworks");
        }
    });
});

router.get("/new", function(req, res){
   res.render("artworks/new"); 
});

module.exports = router;

