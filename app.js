const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get(path,code);

app.get("/about", (req, res)=>{
    // console.log(req.url);
    // console.log(req.method);
    res.sendFile(__dirname + "/views/about.html");
    console.log("a request on the ABOUT page was received...");
});


app.get("/contact", (req, res, next)=> {
    res.sendFile(__dirname + "/views/contact.html");
    console.log("a request on the CONTACT page was received...");

});


app.listen(3001, ()=>{
    console.log("server listing to request...");
});

