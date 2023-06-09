const mongoose = require("mongoose");

const connectToDb = async () =>{
    try{

        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Connection to Database established" , connect.connection.host , connect.connection.name  )


    }catch(err){
        console.log("Mongodb Connection failed to establish Following error showed up =>" , err)
        process.exit(1)
    }
}

 module.exports = connectToDb ;
