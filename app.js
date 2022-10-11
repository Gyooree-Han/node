// app.js
const express = require("express");
const ejs = require("ejs");
const res = require("express/lib/response");
const app = express();
// server2.js

var mysql = require("mysql");
var client = mysql.createConnection({
    user: 'root',  //계정
    password: "root"  //DB비밀번호
});

// query(쿼리문, 콜백함수)
//데이터베이스명


app.set("view engine","ejs");
app.use(express.static(__dirname + '/'));

app.get("/",function(req , res){
    console.log("안녕 테스트");
    client.query("use databace1");
    client.query("select * from shopping", function (error, result, fields) {
        if (error) {
            console.log(error);
        }else{
            // console.log(result);
        }

        res.render("test1" , { shoppingList : result});
    });
    

    
    
});

app.get("/detail",function(req , res){
    console.log("안녕 테스트2");
    client.query("use database1");
    client.query("select * from board", function (error, result, fields) {
        if (error) {
            console.log(error);
        }else{
            console.log(result);
        }

        res.render("test2" , { testData : result});
    });

});
 
app.listen(3000,function(){
    console.log("짜자잔!...");
});

