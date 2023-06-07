const express = require("express") ;
const router = express.Router() ;

const { getContact , createContact , getCid , updateCid , deleteCid } = require("../controllers/contactController")



router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getCid).put(updateCid).delete(deleteCid) ;

module.exports = router ;