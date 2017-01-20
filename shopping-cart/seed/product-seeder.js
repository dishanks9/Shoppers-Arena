var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: "images/product1.jpg",
    title: "Gothic Video Game",
    description: "Awesome game!",
    price: 10
    }),
    new Product({
        imagePath: "images/product2.jpg",
        title: "Gothic Video Game1",
        description: "Awesome game1!",
        price: 11,
    }),
    new Product({
        imagePath: "images/product3.jpg",
        title: "Gothic Video Game2",
        description: "Awesome game2!",
        price: 12
    }),
    new Product({
        imagePath: "images/product4.jpg",
        title: "Gothic Video Game3",
        description: "Awesome game3!",
        price: 13
    }),
    new Product({
        imagePath: "images/product5.jpg",
        title: "Gothic Video Game4",
        description: "Awesome game4!",
        price: 14
    }),
    new Product({
        imagePath: "images/product6.jpg",
        title: "Gothic Video Game4",
        description: "Awesome game4!",
        price: 14
    })
];
var done =0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,results){
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}