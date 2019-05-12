create database food_order;
use food_order;

CREATE TABLE dishes
(
id INTEGER AUTO_INCREMENT,
dish VARCHAR(255) NOT NULL,
description TEXT,
image VARCHAR(255),
price INTEGER,
duration INTEGER,
PRIMARY KEY (id)
);

CREATE TABLE orders
(
id INTEGER AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
dish VARCHAR(255) NOT NULL,
portion INTEGER DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO dishes (id, dish, description, image, price, duration) VALUES (01, 'Nasi Goreng', 'Pedas', 'gambar', 25000, 15);
