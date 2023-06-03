
// get all contact

const getContact = (req, res)=>{
    res.status(200).json({ message :"Get All Contacts" });
};

//  create contact 


const createContact = (req, res)=>{
    res.status(201).json({ message :"Created Contact" });
};

//  Get Specific Contact 

const getCid =  (req, res)=>{
    res.status(200).json({ message :"Get Individual Contact" });
};

//  Update Specific Contact 

const updateCid =  (req, res)=>{
    res.status(200).json({ message :"Contact Updated successfully " });
}

//  delete Specific Contact 

const deleteCid =  (req, res)=>{
    res.status(200).json({ message : "delete Contact "});
}






module.exports = { getContact  , createContact , getCid , updateCid , deleteCid }