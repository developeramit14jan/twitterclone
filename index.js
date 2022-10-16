const express = require('express');
const app = express();
const port = 8000;
app.listen(port , function(error){
    if(error){
        console.log("server is not running");
    }
    console.log("server is running");
})