
// import SelectServices from "./SelectServices";


import React, { useState } from "react";
import StartingPoint from "./StartingPoint";
import EndingPoint from "./EndingPoint";
import ReservationDate from "./ReservationDate";
import ReservationTime from "./reservationTime";
import EnterPrice from "./EnterPrice";
import RidesDetails from "./RidesDetails";
import ReviewAndSubmit from "./ReviewAndSubmit";
import axios from "axios";

const AddForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startingPoint, setStartingPoint] = useState("");
  const [endingPoint, setEndingPoint] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [price, setPrice] = useState("");
 

  const [ridesDetails, setRidesDetails] = useState({
    smoking: 0,
    pet: 0,
    backSeat: 0,
    loggage: 0,
    carColor: "",
    carPlate: "",
    carType: "",
    seatsBooked: 0,
    seatsAv: 1,
  });
  console.log(ridesDetails);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleStartingPointChange = (value) => {
    setStartingPoint(value);
  };

  const handleEndingPointChange = (value) => {
    setEndingPoint(value);
  };

  const handleDateSelection = (value) => {
    setReservationDate(value);
  };

  const handleTimeSelection = (value) => {
    setReservationTime(value);
  };

  const handlePriceChange = (value) => {
    var price = JSON.parse(value)
    console.log(typeof price,"jason price ");
    setPrice(price);
  };

  const handleRidesDetailsChange = (fieldName, value) => {
    
    setRidesDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (startingPoint,endingPoint,reservationDate,reservationTime,price,smoking , pet , backSeat , loggage , carColor, carPlate , carType , seatsBooked , seatsAv) => {
    console.log({startingPoint,
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
      reservationDate,
      reservationTime,
      user_id : 1},"data axios");
    
    try {
      const response = await axios.post("http://127.0.0.1:3000/add", {
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
        reservationDate,
        reservationTime,
        user_id : 1
      });

      if (response.status === 200) {
        console.log("Data saved successfully Hamdoullah ");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      {currentPage === 1 && (
        <StartingPoint
          value={startingPoint}
          onChange={handleStartingPointChange}
          onNext={nextPage}
        />
      )}

      {currentPage === 2 && (
        <EndingPoint
          value={endingPoint}
          onChange={handleEndingPointChange}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}

      {currentPage === 3 && (
        <ReservationDate
          value={reservationDate}
          onChange={handleDateSelection}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}

      {currentPage === 4 && (
        <ReservationTime
          value={reservationTime}
          onChange={handleTimeSelection}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}

      {currentPage === 5 && (
        <EnterPrice
          value={price}
          onChange={handlePriceChange}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}

      {currentPage === 6 && (
        <RidesDetails
          smoking={ridesDetails.smoking}
          pet={ridesDetails.pet}
          backSeat={ridesDetails.backSeat}
          loggage={ridesDetails.luggage}
          carColor={ridesDetails.carColor}
          carPlate={ridesDetails.carPlate}
          carType={ridesDetails.carType}
          seatsBooked={ridesDetails.seatsBooked}
          seatsAv={ridesDetails.seatsAv}
          onChange={handleRidesDetailsChange}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}

      {/* ReviewAndSubmit component */}
      {currentPage === 7 && (
        <ReviewAndSubmit
          startingPoint={startingPoint}
          endingPoint={endingPoint}
          reservationDate={reservationDate}
          reservationTime={reservationTime}
          price={price}
          ridesDetails={ridesDetails}
          onPrevious={previousPage}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AddForm;
