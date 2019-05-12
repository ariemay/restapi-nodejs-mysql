var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "2359media",
  database: "food_order",
  port: '3306'
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;