const express = require("express") ;
const router = express.Router() ;

// below for get all contact


router.route("/").get((req, res)=>{
    res.status(200).json({ message :"Get All Contacts V2" });
});

// below for creating a contact

router.route("/").get((req, res)=>{
    res.status(200).json({ message :"Get All Contacts V2" });
});








module.exports = router ;