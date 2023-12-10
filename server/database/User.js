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

module.exports = {
  addUser,
  findUser,
  getUserbyId,
}