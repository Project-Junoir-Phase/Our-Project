const { getAll, getOne, add } = require("../database/models/rides.js");
// const rides = require("../database/models/rides.js");
module.exports = {
  //method to fetch all rides from database.
  getAllrides: function (req, res) {
    getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  //method to get one ride by id.
  getOnerides: function (req, res) {
    const id = req.params.ride_id;
    getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, id);
  },
  //   method to add a ride to the database via the respective model function.
  addrides: function (req, res) {
    add(
      function (error, results) {
        if (error) res.status(500).send(error);
        else res.json(results);
      },
      req.body.startingPoint,
      req.body.endingPoint,
      req.body.smoking,
      req.body.pet,
      req.body.backSeat,
      req.body.loggage,
      req.body.price,
      req.body.carColor,
      req.body.carPlate,
      req.body.carType,
      req.body.seatsBooked,
      req.body.seatsAv,
      req.body.user_id,
      req.body.reservationDate,
      req.body.reservationTime
    );
  },
};
