const express = require("express")
const router = express.Router()
const verifyToken = require("../Helper/auth.js")

const {addUser, Login, getUser, getUserbyId , updateUserName , updateUserBio , updateUserPhoneNum, updateUserPicture} = require("../controller/User.js")

router.post("/Login", Login)
router.post("/Register", addUser)
router.get("/Profile" , verifyToken , getUser )
router.get("/User/:id" , getUserbyId )
router.put("/Edit/Name/:id", updateUserName )
router.put("/Edit/Bio/:id", updateUserBio )
router.put("/Edit/PhoneNum/:id", updateUserPhoneNum )
router.put("/Edit/Picture/:id", updateUserPicture )

module.exports = router