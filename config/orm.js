var connection = require("../config/connection.js");
var queryString;

var orm = {
	selectAll: function(tableName, cb){
		//instead of tableName as a var use ??
		queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, res){
			if (err) throw err;
			cb(res);
		})
	},
	insertOne: function(tableName, req, cb){
		queryString = "INSERT INTO ?? ( ? , ?) VALUES (?, ?)", [tableName, ?req.body.burger_name]
		/*INSERT INTO burgers (burger_name, devoured) VALUES ("happy meal", 1);*/
		connection.query(queryString, function(err, res){
			if(err) throw err;
			cb(res);
		})
	},
	updateOne: function(){

	}
}//end of orm object

// Export the orm object 
module.exports = orm;