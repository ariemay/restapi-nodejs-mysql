'use strict';

var response = require('../res');
var connection = require('../conn');

exports.showFoods = function(req, res) {
    connection.query('SELECT * FROM dishes', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.sendOrder = (req, res) => {

    var name = req.body.name;
    var dish = req.body.dish;
    var portion = req.body.portion;

    connection.query('INSERT INTO orders (name, dish, portion) VALUES (?,?,?)', [name,dish,portion],
    function(error, rows, fields) {
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};