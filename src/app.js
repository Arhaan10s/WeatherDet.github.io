const express = require('express');
const app = express();
const port=process.env.PORT || 8000 ;
const hbs = require('hbs');
const path=require('path');

// public sttaic path for conecting html pages
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//Rounting
app.get("",(req,res)=>{
    res.render('index');                   //using render after hbs import
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('Weather');
});

app.get("*",(req,res)=>{
    res.render('404error')
});

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`);
});