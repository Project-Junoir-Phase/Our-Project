import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const RideDet = ({ ride }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userBio,setUserBio]= useState("")
  const [userName,setUserName]=useState("")
  const [userPicture,setUserPicture]=useState("")
  const [phoneNum,setPhoneNum]= useState("")
  console.log(state, "test");

  const handleRedirectClick = () => {
    navigate("/LandingPage", { replace: true });
  };

  const bookSeat = () => {
    axios
      .put(`http://127.0.0.1:3000/api/${ride.ride_id}`, {
        seatsAv: ride.seatsAv - 1,
        seatsBooked: ride.seatsBooked + 1,
      })
      .then((response) => {
        console.log("Ride details updated successfully", response.data);

        navigate("/LandingPage", { replace: true });
      })
      .catch((error) => {
        console.error("Error updating ride details", error);
      });
  };
  const fetchUserData = ()=>{

    axios
    .get(`http://127.0.0.1:3000/User/${state.ride.user_id}`)
    .then((results) => {
     setUserBio(results.data.bio)
     setUserName(results.data.name)
     setUserPicture(results.data.picProf)
     setPhoneNum(results.data.phoneNum)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(()=>{
    fetchUserData()
  })

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-white to-white shadow-lg">
        <div className="w-full max-w-4xl px-4 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <h1 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {state.ride.reservationDate}
              </h1>
              <h2 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {state.ride.startingPoint}
              </h2>
              <h2 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {state.ride.endingPoint}
              </h2>
              <h2 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {state.ride.Time}
              </h2>
              <h3 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                Total Price For 1 passanger {state.ride.price} Dt
              </h3>
              <h4 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {userName}
              </h4>
              <img src="" alt="taswiret 3ammi echifour" />

              <h3 className="mt-2 max-w-screen-sm text-40px text-blue-500">
                verified profile icone taa verifié
              </h3>
              <p className="mt-2 max-w-screen-sm text-40px text-blue-500">
                {userBio}
              </p>
              <h3 className="mt-2 max-w-screen-sm text-40px text-blue-500">
               Contact Mr/mrs {userName} on {phoneNum}
              </h3>
              <h3>verified profile icone taa verifiÃ©</h3>
              <h3>
                Your reservation will be confirmed once  accepts your
                request
              </h3>
              <div className="services">
                {state.ride.smoking ? (
                  <p className="mt-2 max-w-screen-sm text-gray-500 underline text-4xl">
                    I don't mind cigarettes in my car
                  </p>
                ) : (
                  <p className="mt-2 max-w-screen-sm text-red-500 underline text-4xl">
                    Smoking is bad it wont be allowed
                  </p>
                )}
                {state.ride.pet ? (
                  <p className="mt-2 max-w-screen-sm text-gray-500 underline text-4xl">
                    Pets are cute , they are welcomed{" "}
                  </p>
                ) : (
                  <p className="mt-2 max-w-screen-sm text-red-500 underline text-4xl">
                    I have allergies please keep your pet home{" "}
                  </p>
                )}
                {state.ride.backSeat ? (
                  <p className="mt-2 max-w-screen-sm text-gray-500 underline text-4xl">
                    you have some Space back there
                  </p>
                ) : (
                  <p className="mt-2 max-w-screen-sm text-red-500 underline text-4xl">
                    sorry fit yourselfs You will be sitting all three in the back
                  </p>
                )}
                {state.ride.loggage ? (
                  <p className="mt-2 max-w-screen-sm text-gray-500 underline text-4xl">
                    I got some room for loggage
                  </p>
                ) : (
                  <p className="mt-2 max-w-screen-sm text-red-500 underline text-4xl">
                    no room for loggage sorryyy
                  </p>
                )}
              </div>

              <button
                onClick={() => {
                  handleRedirectClick();
                  bookSeat();
                }}
              >
                {" "}
                Book now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RideDet;
