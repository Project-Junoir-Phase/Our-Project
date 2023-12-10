const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//Require application Route modules
const ridesRoute = require("./routes/rides");
const UserRoute = require("./routes/User.js");



//Middleware to parse incoming requests with JSON and urlencoded payloads
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Add Routes to the middleware handling path, specifying the respective URL path
app.use("/api/rides", ridesRoute);
app.get("/getAll", ridesRoute);
app.post("/add", ridesRoute);
app.get("/:ride_id", ridesRoute);
app.delete("/:ride_id",ridesRoute)
app.put("/:ride_id",ridesRoute)



//This is the part of the server that is related to the user actions.//
app.use("/api/User", UserRoute)
app.post("/Login" , UserRoute)
app.post("/Register" , UserRoute)
app.get("/Profile" , UserRoute)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
