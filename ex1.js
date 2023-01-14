const express = require("express");
const app = express();
const boadyparser = require("body-parser");
const bodyform = boadyparser.urlencoded();
// var nStatic = require('node-static');

app.use(express.static(__dirname + '/public'));

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/pages/home.html");
    if(res.url=="/about"){
        returnFile(__dirname+"/pages/about.html",res)
    }
})

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/pages/about.html");
    if(res.url=="/links"){
        returnFile(__dirname+"/pages/links.html",res)
    }
})
app.get("/links",function(req,res){
    res.sendFile(__dirname+"/pages/links.html");
    if(res.url=="/home"){
        returnFile(__dirname+"/pages/home.html",res)
    }
})


app.post("/login",bodyform,function(req,res){
    if(req.body.password.length>=8 && req.body.value!==""){
        res.send("login sucess");
    }else{
        res.send("login faild")
    }
    console.log(res.body);
})

app.listen(8060);