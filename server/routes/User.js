const express = require("express")
const router = express.Router()

const {addUser, Login} = require("../controller/User.js")

router.post("/Login", Login)
router.post("/Register", addUser)


module.exports = router