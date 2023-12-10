const express = require("express")
const router = express.Router()
const verifyToken = require("../Helper/auth.js")

const {addUser, Login, getUser, getUserbyId} = require("../controller/User.js")

router.post("/Login", Login)
router.post("/Register", addUser)
router.get("/Profile" , verifyToken , getUser )
router.get("/User/:id" , getUserbyId )

module.exports = router