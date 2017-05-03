var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableName, cb){
		//instead of tableName as a var use ??
		var queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, res){
			if (err) throw err;
			cb(res);
		})
	},
	insertOne: function(){

	},
	updateOne: function(){

	}
}//end of orm object

// Export the orm object 
module.exports = orm;