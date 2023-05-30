const express = require("express")
const router = express.Router()
const {Login,DashBoard} = require("../controllers/main")
router.post('/Login', Login)
router.get('/DashBoard', DashBoard)

module.exports = router