const express = require("express")
const router = express.Router()
const {GetAPage,GetAllPages,CreatePage,UpdatePage,RemovePage} = require("../Controllers/page")

router.route("/").get(GetAllPages).post(CreatePage)
router.route("/:id").get(GetAPage).patch(UpdatePage).delete(RemovePage)

module.exports = router