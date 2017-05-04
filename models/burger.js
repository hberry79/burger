// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	add: function(val, cb){
orm.insertOne("burgers", ["burger_name", "devoured"], [val, '0'], function(res){
cb(res);
});
	},
	update: function(id, cb){
		orm.updateOne('burgers','devoured','1', 'id', '2',function(res){
			cb(res);
		});
	}
}//end of burger object

module.exports = burger;