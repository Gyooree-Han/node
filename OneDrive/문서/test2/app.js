// app.js
const express = require("express");
const ejs = require("ejs");
const res = require("express/lib/response");
const app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + '/'));

app.get("/",function(req , res){
    console.log("안녕 테스트");
    res.render("test1" , {});
    
});

app.get("/detail",function(req , res){
    console.log("안녕 테스트2");
    res.render("test2" , {});
});
 
app.listen(3000,function(){
    console.log("짜자잔!...");
});
