const express = require('express')
const cors = require("cors")
const app = express()

const PORT = 3000


app.use(express.json())


//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.urlencoded({extended: true}));

app.use(cors());

// app.use('/api/users', usersRoute);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log("Server Listening at http://localhost:3000")
})