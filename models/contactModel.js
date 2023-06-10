const mongoose = require("mongoose");


const  contactSchema = mongoose.Schema({
    name:{
        type : String ,
        required : ["Please add the Contact Name"] ,
    },
    email:{
        type : String ,
        required : ["Please add the Email Address"],
    },
    phone:{
        type : String ,
        required : ["Please add the phone"],
    },



},{
    timestamps :true ,
})

module.exports = mongoose.model("Contact" , contactSchema );
