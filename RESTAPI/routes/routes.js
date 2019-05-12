'use strict';

module.exports = function (app) {
    var foods = require('../controller/FoodController');
    var orders = require('../controller/OrderController');
    
    app.route('/customer')
        .get(foods.showFoods);
    app.route('/customer/order')
        .post(foods.sendOrder);
    app.route('/chef/orders')
        .get(orders.showOrders);
    app.route('/chef/add')
        .post(orders.addDish);
};