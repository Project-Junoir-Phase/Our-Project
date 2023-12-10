require("dotenv").config()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const {addUser, findUser, getUserbyId, updateUserName , updateUserBio , updateUserPhoneNum , updateUserPicture} = require("../database/User.js")

module.exports = {

addUser : async (req , res) => {

    let{name, lastName, dateOfBirth, phoneNum, email, gender,password} = req.body

    if(!(email && name && lastName && dateOfBirth && gender && phoneNum && password)) res.status(400).send("All inputs are Required")

    let encryptedPassword = await bcrypt.hash(password , 10)
    
    addUser((err ,result) => {
      if(err) res.status(500).send("this is the error" , err)
      else res.status(201).send("account was created")
    }, email , name , lastName , dateOfBirth , gender , phoneNum , encryptedPassword)

},

Login :async (req, res) => {
  let { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).send("All input is required");
  }

  findUser(email, async (err, user) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { user_id: user.user_id, email },
        process.env.SECRET_KEY,
        { expiresIn: "4h" }
      );

      return res.status(200).json({ token , user_id : user.user_id });
    } else {
      return res.status(401).send("Invalid password");
    }
  });
},

getUser : (req , res) => {
  try{
    let user = req.user
   findUser(user.email, (err , user) => {

     if(!user) {
       return res.status(404).send(err)
      }
      
      res.status(200).json(user)
    });
  }catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
},

getUserbyId : (req , res) => {
  try {
    let {id} = req.params
    getUserbyId(id , (err , user) => {
      if(!user) {
        return res.status(404).send(err)
      }
      res.status(200).json(user)
    })
  }catch (err) {
    console.log(err)
    res.status(404).send(err)
  }
},

updateUserName : (req , res) => {
  try {
    let {id} = req.params
    let {name , lastName} = req.body
    
    updateUserName(id , name , lastName , (err , result) => {
    
      res.status(200).send("updated!")
    })
  }catch (err) {
    console.log(err)
    res.status(404).send(err)
  }
},

updateUserBio : (req , res) => {
  try {
    let {id} = req.params
    let {bio} = req.body

    updateUserBio(id , bio , (err , result) => {
      res.status(200).send("updated!")
    })
  }catch (err) {
console.log(err)
res.status(404).send(err)
  }
},

updateUserPhoneNum : (req , res) => {
  try {
    let {id} = req.params
    let {phoneNum} = req.body

    updateUserBio(id , phoneNum , (err , result) => {
      res.status(200).send("updated!")
    })
  }catch (err) {
console.log(err)
res.status(404).send(err)
  }
},

updateUserPicture : (req , res) => {
  try {
    let {id} = req.params
    let {picProf} = req.body

    updateUserPicture(id , picProf , (err , result) => {
      res.status(200).send("updated!")
    })
  }catch (err) {
console.log(err)
res.status(500).send(err)
  }
}

}
