const express = require("express")
const router = express.Router()
const verifyToken = require("../Helper/auth.js")

const {addUser, Login, getUser} = require("../controller/User.js")

router.post("/Login", Login)
router.post("/Register", addUser)
router.get("/Profile" , verifyToken , getUser )


module.exports = router