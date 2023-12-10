const mysql = require("mysql2")
const connection = require("./index.js")


const addUser =  (callback ,email , name , lastName , dateOfBirth , gender , phone , password) => {
  const sql = "insert into users (name,lastName,dateOfbirth,phoneNum,email,gender,review,password) values (?,?,?,?,?,?,?,?)"
 return  connection.query(sql , [name, lastName, dateOfBirth, phone, email, gender, 0, password], (err , result) => {
  callback(err , result)
 })

}

const findUser = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';

  connection.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }

    if (results.length > 0) {
      const user = results[0];
      return callback(null, user);
    } else {
      return callback(null, null); 
    }
  });
};

const getUserbyId = (id , callback) => {
  const sql = 'select * from users where user_id = ?'

  connection.query(sql , [id] , (err , results)=> {
    if (err) {
      return callback(err , null)
    }
    if(results.length > 0) {
      const user = results[0]
      return callback(null , user)
    }else {
      return callback(null , null)
    }
  })
}

const updateUserName = (id , name, lastName , callback ) => {
  const sql = 'update users set name = ?, lastName =? where user_id =?'

  connection.query(sql , [name , lastName , id] , (err , result) => {
    if(err) {
      return callback(err , null)
    }
    if(result.length > 0) {
      const user = result[0]
      return callback(null , user)
    }else {
      return callback(null , null)
    }
  })
}
const updateUserBio = (id , bio, callback ) => {
  const sql = 'update users set bio = ? where user_id =?'

  connection.query(sql , [bio, id] , (err , result) => {
    if(err) {
      return callback(err , null)
    }
    if(result.length > 0) {
      const user = result[0]
      return callback(null , user)
    }else {
      return callback(null , null)
    }
  })
}
const updateUserPhoneNum = (id , phoneNum ,  callback ) => {
  const sql = 'update users set phoneNum = ? where user_id =?'

  connection.query(sql , [phoneNum, id] , (err , result) => {
    if(err) {
      return callback(err , null)
    }
    if(result.length > 0) {
      const user = result[0]
      return callback(null , user)
    }else {
      return callback(null , null)
    }
  })
}
const updateUserPicture = (id , picProf , callback ) => {
  const sql = 'update users set picProf = ? where user_id =?'

  connection.query(sql , [picProf , id] , (err , result) => {
    if(err) {
      return callback(err , null)
    }
    if(result.length > 0) {
      const user = result[0]
      return callback(null , user)
    }else {
      return callback(null , null)
    }
  })
}

module.exports = {
  addUser,
  findUser,
  getUserbyId,
  updateUserName,
  updateUserBio,
  updateUserPhoneNum,
  updateUserPicture
}