const express = require('express')
const cors = require("cors")
const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log("Server Listening at http://localhost:3000")
})