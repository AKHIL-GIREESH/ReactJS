const express = require("express")
const router = express.Router()
const {login,signUp} = require("../controllers/auth")
const authorization = require("../middlewares/verifyAuth")

router.post('/Login',authorization, login)
router.post("/SignUp",signUp)

module.exports = router