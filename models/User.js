//call mongoose
const mongoose = require("mongoose")
//create schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:true,
        required:true
    }

},{timestamps:true})
//create model
const User = mongoose.model("User",userSchema)
//exports module
module.exports = User;