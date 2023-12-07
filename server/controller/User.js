require("dotenv")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const {addUser, findUser} = require("../database/User.js")

module.exports = {

addUser : async (req , res) => {

  try {
    let{email , name , lastName , age , gender , phone , password} = req.body

    if(!(email && name && lastName && age && gender && phone && password)) res.status(400).send("All inputs are Required")

    let encryptedPassword = await bcrypt.hash(password , 10)
    
    const user = await addUser((err ,result) => {
      if(err) res.status(400).send("this is the error" , err)
      else console.log("Account was created")
    }, email , name , lastName , age , gender , phone , encryptedPassword)

    const token = jwt.sign(
      {user_id : user.user_id , email , name , lastName , age , gender , phone , bio : user.bio , review : user.review , picProf : user.picProf , picCIN : user.picCIN},
      process.env.SECRET_KEY,
      {
        expiresIn : "4h"
      }
    )
    
    return res.status(201).json(user)

  }catch(err) {
      res.status(400).send("this is the error" , err)
  }

},

Login : async (req , res) => {
  try{
    

  }catch{

  }
}


}