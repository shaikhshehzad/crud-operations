const asyncHandler = require("express-async-handler");

const bcrypt = require("bcrypt") ;
const User = require("../models/userModel") ;

const registerUser =  asyncHandler(async (req, res)=>{

    const { username , email , password }  = req.body;
    if(!username ||  !email ||  !password){
        res.status(400)
        throw new Error("All feilds are mandatory");
    }

    const userAvailable = await User.findOne({email});
    // res.json({ message : "Register the user"  });

    if(userAvailable){
        res.status(400);
        throw new Error("User Already Resgistered") ;
    }

    const hashedPassword = await bcrypt.hash(password , 10 );

    console.log("hashed password" ,hashedPassword  )

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log("user created succesfully  => " , user);

    if(user){
        res.status(201).json({ _id :user.id , email : user.email  });
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }



    // res.status(200).json({"message" : "register user" });
});

const loginUser =  asyncHandler(async (req, res)=>{
    res.status(200).json({"message" : "loginUser" });
});

const currentUser =  asyncHandler(async (req, res)=>{
    res.status(200).json({"message" : "currentUser " });
});


module.exports = { registerUser  , loginUser , currentUser }
