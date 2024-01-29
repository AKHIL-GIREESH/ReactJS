const express = require("express")
const router = express.Router()
const {login,dashboard,signUp} = require("../controllers/main")
const authentication = require("../middleware/authentication")

router.route('/login').post(login)
router.route('/signUp').post(signUp)
router.route('/dashboard').get(authentication,dashboard)

module.exports = router