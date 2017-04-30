var express = require("express");
var burger = require("../models/cat.js");

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