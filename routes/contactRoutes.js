const express = require("express") ;
const router = express.Router() ;

const { getContact , createContact , getCid , updateCid , deleteCid } = require("../controllers/contactController")



router.route("/").get(getContact);
router.route("/").post(createContact)
router.route("/:id").get(getCid)
router.route("/:id").put(updateCid)
router.route("/:id").delete(deleteCid)


module.exports = router ;