const asyncHandler = require("express-async-handler")

// get all contact

const getContact =  asyncHandler(async (req, res)=>{
    res.status(200).json({ message :"Get All Contacts" });
});

//  create contact 


const createContact =  asyncHandler(async (req, res)=>{
    console.log(req.body)

    const { name , email , phone } = req.body ;
    if(!name || !email || !phone){
        // res.send("All feilds are mandatory")
        res.status(400);
        throw new Error("All feilds are mandatory")
    }


    res.status(201).json({ message :"Created Contact" });
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