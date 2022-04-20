const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));

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

app.get("/limoncello", (req, res, next) => {

    const data = {
        title: "Limoncello",
        price: 20,
        imageFile: "limoncello1.jpeg",
        stores: ["Online","Paris", "Albacete","London"],
    }

    res.render("product", data);
});

app.get("/single-malt", (req, res, next)=> {
    const data = {
        title: "Single Malt",
        price: 120,
        imageFile:"single-malt1.jpeg",
        stores: [],
    }

    res.render("product",data)
});

app.get("/tequila", (req, res, next)=> {
    const data = {
        title: "Tequila",
        price: 25,
        imageFile:"tequila1.jpeg",
        stores: ["Online","London"]
    }

    res.render("product",data)
});


app.listen(3001, ()=>{
    console.log("server listing to request...");
});

