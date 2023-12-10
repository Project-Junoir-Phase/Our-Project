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
    reservationTime
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
    reservationTime) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
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
        reservationTime,
      ],
      (error, results, fields) => {
        callback(error, results);
      }
    );
  },
  // a function that can be used to update a ride in the database
  update: function (
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
    reservationTime,
    id
  ) {
    const sql = `UPDATE rides SET startingPoint = ?, endingPoint = ?, smoking = ?, pet = ?, backSeat = ?, loggage = ?, price = ?, carColor = ?, carPlate = ?, carType = ?, seatsBooked = ?, seatsAv = ?, user_id = ?, reservationDate = ?, reservationTime = ? WHERE ride_id = ?`;
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
        reservationTime,
        id,
      ],
      (error, results, fields) => {
        callback(error, results);
      }
    );
  },
  updateSeats: function (
    callback,
    seatsBooked,
    seatsAv,
    id
  ) {
    const sql = `UPDATE rides SET  seatsBooked = ?, seatsAv = ? WHERE ride_id = ?`;
    connection.query(
      sql,
      [
        seatsBooked,
        seatsAv,
        id,
      ],
      (error, results, fields) => {
        callback(error, results);
      }
    );
  },
  // a function that can be used to delete a ride from the database
  Delete: function (callback, id) {
    const sql = "DELETE FROM rides WHERE ride_id = ?";
    connection.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  // a function that can be used to filter rides from the database
  //  filter: function (callback, filterOptions) {
  //     const sql = "SELECT * FROM rides WHERE ?";
  //     connection.query(sql, [filterOptions], function (error, results, fields) {
  //       callback(error, results);
  //     });
  //  },
};