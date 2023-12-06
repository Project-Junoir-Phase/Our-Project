const express = require("express");
const router = express.Router();

// Require controller modules.
const { getAllrides, addrides, getOnerides } = require("../controller/rides");



//GET request to fetch all ridess. NOTE This must come before route for id.
router.get("/getAll", getAllrides);
// GET request for one rides.
router.get("/:idrides", getOnerides);
// rides request for creating a new rides.
router.post("/add", addrides);
















module.exports = router;
