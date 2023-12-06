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
    prise,
    carColor,
    carPlate,
    carType,
    seatsBooked,
    seatsAv,
    user_id,
    client_id
  ) {
    const sql = `INSERT INTO posts (startingPoint,
    endingPoint,
    smoking,
    pet,
    backSeat,
    loggage,
    prise,
    carColor,
    carPlate,
    carType,
    seatsBooked,
    seatsAv,
    user_id,
    client_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    connection.query(
      sql,
      [
        startingPoint,
        endingPoint,
        smoking,
        pet,
        backSeat,
        loggage,
        prise,
        carColor,
        carPlate,
        carType,
        seatsBooked,
        seatsAv,
        user_id,
        client_id,
      ],
      (error, results, fields) => {
        callback(error, results);
      }
    );
  },
};
