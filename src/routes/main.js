const express = require("express")


// Route is used for making URL from your web page on which click which page is served this decided by route 
const routes =  express.Router()

routes.get("/",(req,res)=>{
    res.send("this is served by router")
});

module.exports = routes