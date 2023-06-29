const express = require("express") ;
const router = express.Router() ;

const { getContact , createContact , getCid , updateCid , deleteCid , searchedContact } = require("../../controllers/contactController")
const validateToken = require("../../middleware/validateTokenHandler")    

router.use(validateToken)

router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getCid).put(updateCid).delete(deleteCid) ;
router.route("/search/:contact").get(searchedContact)


module.exports = router ;