const express = require('express');
const app = express(); // instance of express
const port = 8000;
const path = require('path');
app.use(express.urlencoded({extended:false}));
// define template engine
app.set("view engine" , "ejs");
app.set("views" , "view");
//path.join --- to join current directory and then join it with folder first name
app.use(express.static(path.join(__dirname , "public")));
app.use('/' , require('./route/index'));
app.listen(port , function(error){
    if(error){
        console.log("server is not running");
    }
    console.log(`server is on ${port} running`);
})





