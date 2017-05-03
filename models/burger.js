// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	add: function(cb){
		orm.insertOne("burgers", "burger_name", "devoured",GET BURNER NAME, 0, function(res){
			cb(res);
		});
	}
}//end of burger object

module.exports = burger;