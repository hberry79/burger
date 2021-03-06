var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
    burger.all(function(data) {
        //console.log({ burger: data });
        res.render('index', { burger: data });
    });
});

router.post("/burgers/new", function(req, res) {
    burger.add(
        req.body.burgerName,
        function() {
            res.redirect("/");
        });
});

router.put("/burgers/eat", function(req, res){
	console.log(req.body.burger_id);
	burger.update(req.body.burger_id, function(){
		res.redirect("/");
	});
});
// Export routes for server.js to use.
module.exports = router;
