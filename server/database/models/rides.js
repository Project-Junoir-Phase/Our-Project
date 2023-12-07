// import the database connection
const connection = require("../index");
module.exports = {
  // a function which fetches all the rides
  getAll: function (callback) {
    const sql = "SELECT * FROM `rides`";
    connection.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  //a function that retrieves one ride record based on the provided id.
  getOne: function (callback, id) {
    const sql = "SELECT * FROM rides WHERE ride_id =?";
    connection.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a ride into the database
  add: function (
    callback,
    startingPoint,
    endingPoint,
    smoking,
    pet,
    backSeat,
    loggage,
    price,
    carColor,
    carPlate,
    carType,
    seatsBooked,
    seatsAv,
    user_id,
    reservationDate,
    date
  ) {
    const sql = `INSERT INTO rides (startingPoint,
    endingPoint,
    smoking,
    pet,
    backSeat,
    loggage,
    price,
    carColor,
    carPlate,
    carType,
    seatsBooked,
    seatsAv,
    user_id,
    reservationDate,
    date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    connection.query(
      sql,
      [
        startingPoint,
        endingPoint,
        smoking,
        pet,
        backSeat,
        loggage,
        price,
        carColor,
        carPlate,
        carType,
        seatsBooked,
        seatsAv,
        user_id,
        reservationDate,
        date,
      ],
      (error, results, fields) => {
        callback(error, results);
      }
    );
  },
};
