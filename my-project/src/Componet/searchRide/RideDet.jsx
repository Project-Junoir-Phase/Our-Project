import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar";

const RideDet = ({ ride }) => {
  console.log(ride);

  console.log(ride.ride_id, "hedhi rideid");
  return (
    <>
    <NavBar/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-white to-white shadow-lg">
        <div className="w-full max-w-4xl px-4 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div className="max-w-md mx-auto space-y-6">

      <div>
        <h1>{ride.reservationDate}</h1>
        <h2>{ride.startingPoint}</h2>
        <h2>{ride.endingPoint}</h2>
        <h2>{ride.Time}</h2>
        <h3>Total Price For 1 passanger </h3>
        <h3>{ride.price}</h3>
        <h4>3ammi echifour</h4>
        <img src="" alt="taswiret 3ammi echifour" />
        <h3>verified profile icone taa verifié</h3>
        <p>user.bio</p>
        <h3>lfaza taa l messaget </h3>
        <h3>
          Your reservation will be confirmed once the driver accepts your
          request
        </h3>
        <div className="services">
          {ride.smoking ? (
            <p>I dont mind cigarette in my car</p>
          ) : (
            <p>Smoking is bad it wont be allowed</p>
          )}
          {ride.pet ? (
            <p>Pets are cute , they are welcomed </p>
          ) : (
            <p>I have allergies please keep your pet home </p>
          )}
          {ride.backSeat ? (
            <p>you have some Space back there</p>
          ) : (
            <p>sorry fit yourselfs</p>
          )}
          {ride.loggage ? (
            <p>I got some room for loggage</p>
          ) : (
            <p>no room for loggage sorryyy</p>
          )}
        </div>
        <button> Book now </button>
      </div>
      </div>
    </div>
</div>
    </>
  );
};

export default RideDet;
