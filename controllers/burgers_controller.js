var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res){
	burger.all(function(data){
		var allBurgers = {
			burger: data
		};
		console.log(allBurgers);
		res.render("index", allBurgers);
	});
});



// Export routes for server.js to use.
module.exports = router;