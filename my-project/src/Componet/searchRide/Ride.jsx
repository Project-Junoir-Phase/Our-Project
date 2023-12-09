import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Ride = ({ localRides , getOneRide }) => {
  const navigate  = useNavigate()
  console.log(localRides, "guhu");
  return (
    <div>
      {localRides.map((ride) => {
        console.log(ride,"ghjkjhgyhuioliuytfghj");
        return (
          <div
            key={ride.ride_id}
            className=" top-[187px] left-[201px] w-[556px] h-[208px]"
          >
             <div onClick={()=>{getOneRide(ride)
              navigate('/rideDetails',{replace:true})}} >
              <div className=" top-[0px] left-[0px] rounded-2xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[500px] h-[250px] flex">
                <div className="flex flex-col justify-between p-4">
                  <div className="mb-2">
                    <h2>{ride.startingPoint}</h2>
                    <hr className="border-t border-gray-300 my-1" />
                    <h3>{ride.endingPoint}</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img
                      className="w-[50px] h-[50px] rounded-full mr-2"
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
        );
      })}
    </div>
  );
};

export default Ride;
