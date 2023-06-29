const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")



// get all contact

// @access private

const getContact =  asyncHandler(async (req, res)=>{
    console.log("req.body => " ,req.body)
    console.log("req.body => " ,req.body.user_id)

    if(req.body.user_id){
        const contacts = await Contact.find({user_id : req.body.user_id });

        res.status(200).json(contacts);
    }else{
        res.status(400);
        throw new Error("Validation with user id is missing ")

    }

    
});

//  create contact 
// @access private

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
        user_id:req.user.id
    });
    console.log(contact)
    res.status(201).json(contact);

 
    // res.status(201).json({ message :"Created Contact" });
});

//  Get Specific Contact 
// @access private
const getCid =  asyncHandler(async (req, res)=>{
    // res.status(200).json({ message :"Get Individual Contact" });
    const contact = await Contact.findById(req.params.id);
    let date_ob = new Date();
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    console.log(date_ob)


    console.log("Id from GId => " , req.params.id )
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);

});

//  Update Specific Contact 
// @access private
const updateCid =   asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);

    console.log("Id from GId => " , req.params.id )
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if(contact.user_id.toString() !== req.user.id ){
        res.status(403) ;
        throw new Error("User don't have permission ")
    }

    if(contact.user_id.toString() !== req.user.id ){
        res.status(403) ;
        throw new Error("User don't have permission ")
    }



    
    const updatedContact  = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true }
    );

    res.status(200).json(updatedContact);

    // res.status(200).json({ message :"Contact Updated successfully " });
});

//  delete Specific Contact 
// @access private
const deleteCid =  asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    console.log("Id from delete id => " , req.params.id )
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
    // res.status(200).json({ message : "delete Contact "});
});






module.exports = { getContact  , createContact , getCid , updateCid , deleteCid }