'use strict';

var response = require('../res');
var connection = require('../conn');

exports.showOrders = function(req, res) {
    connection.query('SELECT * FROM orders GROUP BY name', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.addDish = (req, res) => {

    var dish = req.body.dish;
    var description = req.body.description;
    var image = req.body.portion;
    var price = req.body.price;
    var duration = req.body.duration;

    connection.query('INSERT INTO dishes (dish, description, image, price, duration) VALUES (?,?,?,?,?)', [dish,description,image,price,duration],
    function(error, rows, fields) {
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan menu!", res)
        }
    });
};