const asyncHandler = require("express-async-handler")


const User = require("../models/userModel") 

const registerUser =  asyncHandler(async (req, res)=>{
    res.status(200).json({"message" : "register user" });
});

const loginUser =  asyncHandler(async (req, res)=>{
    res.status(200).json({"message" : "loginUser" });
});

const currentUser =  asyncHandler(async (req, res)=>{
    res.status(200).json({"message" : "currentUser " });
});


module.exports = { registerUser  , loginUser , currentUser }
