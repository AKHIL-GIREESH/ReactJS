const express = require("express")
const router = express.Router()
const {login,signUp} = require("../controllers/auth")

router.post('/Login', login)
router.post("/SignUp",signUp)

module.exports = router