require("dotenv").config()

const jwt = require("jsonwebtoken")


const verifyToken = (req , res , next) => {
  const token = req.body.token || req.query.token || req.headers["x-accesss-token"];

  if(!token) {
    return res.status(403).send("a token is required to access this")
  }

  try {
    const decoded = jwt.verify(token , process.env.SECRET_KEY);
    req.user = decoded
  }catch (err) {
    return res.status(401).send("invalid token")
  }
  return next()
}

module.exports = verifyToken