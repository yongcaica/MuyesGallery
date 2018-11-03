var express = require("express");
var router  = express.Router();

//root route
router.get("/", function(req, res){
    res.render("home");
});

router.get("/login", function(req, res){
   res.render("login"); 
});

router.get("/register", function(req, res){
   res.render("register"); 
});

module.exports = router;