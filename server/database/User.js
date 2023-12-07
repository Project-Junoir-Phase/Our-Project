const mysql = require("mysql2")
const connection = require("./index.js")


const addUser = async (callback ,email , name , lastName , age , gender , phone , password) => {
  const sql = "insert into users (email , name , lastName , age , gender , phone , password) values (?,?,?,?,?,?,?)"
 return  connection.query(sql , [email , name , lastName , age , gender , phone , password], (err , result) => {
  callback(err , result)
 })

}

const findUser = async (callback , email ) => {
  const sql = "select * from users where users.email = ?"
  return connection.query(sql , [email] , (err , result) => {
    callback(err , result)
  })
}

module.exports = {
  addUser,
  findUser,
}