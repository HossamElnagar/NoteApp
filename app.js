//dot env
require("dotenv").config()
//express
const express = require("express")
const app = express()
//middleware JSON
app.use(express.json())
//port
const port = process.env.PORT || 5000;
//DB connection
const mongoose = require("mongoose")
async function dbconnection(){
    try{
    await mongoose.connect(process.env.DB_URL)
    console.log("dbconnected")
    }catch(err){
        console.log(`server error`)
    }
}

//routes get post put delete
app.get("rout name",(req,res)=>{
    
})
//runserver
app.listen(port,()=>{
    console.log(`the server is running at port${port}`)
})