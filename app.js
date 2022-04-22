const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Product = require('./models/Product.model');

const bodyParser = require('body-parser');


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//connection to the DB
mongoose
    .connect('mongodb://localhost/ironliquor-ecommerce')
    .then(x => console.log(`Connected to Mongo! Databse name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo',err));

// app.get(path,code);

app.get("/",(req, res, next)=>{
    // res.sendFile(__dirname + "/views/home.html");
    res.render("home")
})

app.get("/about", (req, res, next)=>{
    // console.log(req.url);
    // console.log(req.method);
    // res.sendFile(__dirname + "/views/about.html");
    res.render("about")
});

app.get("/contact", (req, res, next)=> {
    console.log("a request on the CONTACT page was received...");
    // res.sendFile(__dirname + "/views/contact.html");
    res.render("contact");
});

app.get("/products", (req, res, next) => {

    let filter;
    const max = req.query.maxPrice;
    
    if(max === undefined){
        filter = {};
    } else {
        filter = {price: {$lte: max} };
    }

    Product.find(filter)
        .then( productsArr => {
            res.render("productList", {products: productsArr} );
        })
        .catch( error => console.log("error getting products from DB", error) );
})

app.get("/products/:productId", (req, res, next) => {

    Product.findById(req.params.productId)
        .then(productDetails=>{
            res.render("product", productDetails);
        })
        .catch(err => console.error('Error getting product from DB',err));
});

// app.post(path,code)

app.post("/new",(req, res, next)=>{

    const newProduct = {
        title: req.body.title,
        price: req.body.price
    };

    Product.create(newProduct)
    .then(newProduct => {
        console.log("New product created");
        console.log(newProduct);
        res.redirect("/products"); //redirecct to the products page
    })
    .catch(error => {
        console.log("error creating a new product",error)
        res.redirect("/")
    })
})

app.listen(3001, ()=>{
    console.log("server listing to request...");
});

