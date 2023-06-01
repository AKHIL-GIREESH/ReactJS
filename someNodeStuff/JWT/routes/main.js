const express = require("express")
const router = express.Router()
const {Login,DashBoard} = require("../controllers/main")
const authorization = require("../middleware/auth")

router.post('/Login', Login)
router.get('/DashBoard',authorization, DashBoard)

module.exports = router