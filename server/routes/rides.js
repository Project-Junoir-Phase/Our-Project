const express = require("express");
const router = express.Router();

// Require controller modules.
const { getAllrides, addrides, getOnerides,deleteRides,updateRides , updateSeat } = require("../controller/rides");

//GET request to fetch all ridess.
router.get("/getAll", getAllrides);
// GET request for one rides.
router.get("/:ride_id", getOnerides);
// rides request for creating a new rides.
router.post("/add", addrides);

router.delete("/:ride_id",deleteRides)

router.put("/:ride_id",updateRides)

router.put("/api/:id",updateSeat)

module.exports = router;
