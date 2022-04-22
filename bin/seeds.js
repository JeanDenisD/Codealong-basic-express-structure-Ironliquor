const mongoose = require('mongoose');
const Product = require('../models/Product.model');

mongoose
    .connect('mongodb://localhost/ironliquor-ecommerce')
    .then(x => console.log(`Connected to Mongo! Databse name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo',err));

    const products =[
        {title: "Limoncello", price : 20, tags: ["spirits","italian","cocktail"],imageFile: "limoncello1.jpeg", stores:["online"]},
        {title: "Tequila", price : 35, tags: ["spirits","drink","best-sellers"],imageFile:"single-malt1.jpeg", stores: ["online","colombia"]},
        {title: "Whisky", price : 105, tags: ["spirits","drink"],imageFile:"tequila1.jpeg", stores:["online","germany"]},
        {title: "Rhum", price : 30, tags: ["spirits","drink"], stores:["online"]},
        {title: "Karib", price : 7, tags: ["cocktail","drink"], stores:["online"]},
        {title: "Champagne", price : 90, tags: ["drink","best-sellers"], stores:["online"]}
    ];

    Product.insertMany(products)
        .then( response => {
            console.log(`${response.length} products created`);
            console.log(response);
        })
        .catch((err) => {
            console.log(`error creating product in the DB`);
            console.log(err);
        })
        .finally(()=> mongoose.connection.close());