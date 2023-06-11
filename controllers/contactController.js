const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")


// get all contact

const getContact =  asyncHandler(async (req, res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//  create contact 


const createContact =  asyncHandler(async (req, res)=>{
    console.log("The request body is  => ",req.body)

    const { name , email , phone } = req.body ;
    if(!name || !email || !phone){
        // res.send("All feilds are mandatory")
        res.status(400);
        throw new Error("All feilds are mandatory")
    }
    const contact = await Contact.create({
        name : req.body.name,
        email : req.body.email,
        phone :  req.body.phone ,
        user_id: req.user.id,
    });
    res.status(201).json(contact);


    // res.status(201).json({ message :"Created Contact" });
});

//  Get Specific Contact 

const getCid =  asyncHandler(async (req, res)=>{
    res.status(200).json({ message :"Get Individual Contact" });
});

//  Update Specific Contact 

const updateCid =   asyncHandler(async (req, res)=>{
    res.status(200).json({ message :"Contact Updated successfully " });
});

//  delete Specific Contact 

const deleteCid =  asyncHandler(async (req, res)=>{
    res.status(200).json({ message : "delete Contact "});
});






module.exports = { getContact  , createContact , getCid , updateCid , deleteCid }