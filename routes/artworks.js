var express = require("express");
var router  = express.Router();
var Artwork = require("../models/artwork");

//INDEX - show all artworks
router.get("/", function(req, res){   //actually the route is "/artworks"
    // Get all artworks from DB
    Artwork.find({}, function(err, allArtworks){    //find all the artworks 
       if(err){
           console.log(err);
       } else {
          res.render("artworks/index",{artworks: allArtworks});  //first "artworks" is name, second "allArtworks" is the data we want to pass in
                                                                    //"res.render" show the files(here is "index.ejs") in views directory
       }
    });
});

//NEW - show form to create new artwork
router.get("/new", function(req, res){            //actually the route is "/artworks/new"
   res.render("artworks/new"); 
});
		
//CREATE - add new artwork to DB
router.post("/", function(req, res){       //actually the route is "/artworks"
    // get data from form and add to artworks array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    
    var newArtwork = {name: name, image: image, description: desc}
    // Create a new artwork and save to DB
    Artwork.create(newArtwork, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to artworks page
            console.log(newlyCreated);
            res.redirect("/artworks");    //"res.redirect" show the absolute route
        }
    });
});

// SHOW - shows more info about one artwork
router.get("/:id", function(req, res){               //actually the route is "/artworks/:id"
    //find the campground with provided ID
    Artwork.findById(req.params.id).exec(function(err, foundArtwork){
        if(err){
            console.log(err);
        } else {
            // console.log(foundArtwork);
            //render show template with that campground
            res.render("artworks/show", {artwork: foundArtwork});  //first "artworks" is name, second "foundArtwork" is the data we want to pass in
        }
    });
});

// EDIT ARTWORK ROUTE
router.get("/:id/edit", function(req, res){            //actually the route is "/artworks/:id/edit"
    Artwork.findById(req.params.id, function(err, foundArtwork){
      if(err){
        console.log(err);
      } else {
        // console.log(foundArtwork);
        res.render("artworks/edit", {artwork: foundArtwork});
        //edit某个specific artwork，所以这里要pass in一个对象参数foundArtwork
      }
    });
});

// UPDATE ARTWORK ROUTE------要先安装method-override，npm install method-override，http form目前只支持get和post，不支持put和delete这些请求，需要method-override来转换一下
router.put("/:id", function(req, res){
  // find and update the correct artwork
  Artwork.findByIdAndUpdate(req.params.id, req.body.artwork, {new: true}, function(err, updatedArtwork){
    if(err){
      res.redirect("/artworks");
    } else {
      //or use "updatedArtwork._id" replace "req.params.id"
      console.log(req.body.artwork);
      res.redirect("/artworks/" + req.params.id);
      // console.log(updatedArtwork);
    }
  });
});

// DESTROY ARTWORK ROUTE
router.delete("/:id",function(req, res){
   Artwork.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/artworks");
      } else {
          res.redirect("/artworks");
      }
   });
});

module.exports = router;

