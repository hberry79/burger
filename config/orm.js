var connection = require("../config/connection.js");

var orm = {
        selectAll: function(tableName, cb) {
            //instead of tableName as a var use ??
            var queryString = "SELECT * FROM " + tableName + ";";
            connection.query(queryString, function(err, res) {
                if (err) throw err;
                cb(res);
            })
        },
        insertOne: function(tableName, columns, values, cb) {
            // We will format the array into comma seperated values
            var formattedColumns = columns.join(',');
            //iterating thorugh the array to add single quotes to aid with cancatination and SQL syntax for varchar's
            var formattedValues = values.map(function(value) {
                return "'" + value + "'";
            })

            formattedValues = formattedValues.join(',');

            var queryString = 'INSERT INTO ' + tableName + ' (' + formattedColumns + ') VALUES (' + formattedValues + ');'
                /* sample query to match =INSERT INTO burgers (burger_name, devoured) VALUES ("happy meal", 1);*/
            console.log(queryString)
            connection.query(queryString, function(err, res) {
                if (err) throw err;
                cb(res);
            });
        },
        updateOne: function(tableName, column, val1, column2, val2, cb) {
        	var queryString = "UPDATE " + tableName + " SET " + column + '=' + val1 + " WHERE " + column2 + "=" + val2 + ';'

        	console.log(queryString)
        	/*UPDATE `burgers` SET `devoured`='1' WHERE `id`='2';*/
        	connection.query(queryString, function(err, res){
        	if (err) throw err;
        		cb(res);
        	});
        }
    } //end of orm object

// Export the orm object 
module.exports = orm;
