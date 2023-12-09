const express = require('express')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors());

//Require application Route modules
const ridesRoute = require("./routes/rides");

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use("/api/rides", ridesRoute);

module.exports = app;