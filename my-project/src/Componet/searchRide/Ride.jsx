
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Ride = ({ localRides, getOneRide }) => {
  const navigate = useNavigate();

  const handleRideClick = (ride) => {
    getOneRide(ride);
    navigate('/rideDetails', { replace: true });
  };

  return (
    <div className="flex flex-col items-center ">
      {localRides.map((ride) => (
        <div
          key={ride.ride_id}
          className="mb-4 p-4 rounded-md bg-white shadow-md w-96 " 
        >
          <div onClick={() => handleRideClick(ride)}>
            <div className="rounded-2xl bg-white shadow-md w-96 h-96 flex">
              <div className="flex flex-col justify-between p-4">
                <div className="mb-2">
                  <h2>{ride.startingPoint}</h2>
                  <hr className="border-t border-gray-300 my-1" />
                  <h3>{ride.endingPoint}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    className="w-12 h-12 rounded-full mr-2"
                    src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png"
                    alt=""
                  />
                  <h3>3ammi echifour</h3>
                </div>
                <div className="mb-2">
                  <p>Reservation Date: {ride.reservationDate}</p>
                  <p>Reservation Time: {ride.reservationTime}</p>
                </div>
              </div>
              <div className="flex items-end p-4">
                <h3>{ride.price} Dt</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ride;