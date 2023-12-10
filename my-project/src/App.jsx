import { useState, useEffect, createContext } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NotFound from "./NotFond";
import "./App.css";
import Calender from "./Calender";
import NavBar from "./NavBar";
import Search from "./search";
import SearchPage from "./SearchPage";
import AddForm from "./add/AddForm";

import SignUp from "./User Componet/SignUp/SignUp";
import Login from "./User Componet/Login/Login";
import LandingPage from "./LandingPage/HomePage";
import RideDet from "./Componet/searchRide/RideDet";
import AllRides from "./Componet/searchRide/AllRides";
import DummyData from "../dummyData";

export const searchContext = createContext();

function App() {
  const [localRides, setLocalRides] = useState(DummyData);
  const [ride, setRide] = useState([]);

  const fetchRides = () => {
    axios
      .get("http://localhost:3000/api/rides/getAll")
      .then((results) => {
        setLocalRides(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOneRide = (ride) => {
    setRide(ride);
  };



  const filterRides = (query) => {
    var data = [];

    localRides.map((ride) => {
      if (
        ride.startingPoint == query.startingPoint &&
        ride.endingPoint == query.endingPoint &&
        ride.reservationDate == query.reservationDate
        // ride.seatsAv >= query.seatsAv
      ) {
        data.push(ride);
      }
      return data;
    });

    setLocalRides(data);

    return data;
  };

  const filterServices = (services) => {
    var data = localRides.filter((ride) => {
      return Object.entries(services).every(([service, value]) => {
        return ride[service] === value;
      });
    });

    setLocalRides(data);
    return data;
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <>
      <searchContext.Provider value={{ filterRides, filterServices }}>
        <React.Suspense fallback={<>Loading...</>}>
          <Router>
            <Routes>
              <Route path="/" element={<NavBar />} /> 
              <Route path="*" element={<NotFound />} />
              <Route path="/Search" element={<SearchPage />} />
              <Route
                path="/AllRides"
                element={
                  <AllRides getOneRide={getOneRide} localRides={localRides} />
                }
              />
              <Route path="/rideDetails" element={<RideDet ride={ride} />} />
              <Route path="/AddRide" element={<AddForm />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/LandingPage" element={<LandingPage />} />
            </Routes>
          </Router>
        </React.Suspense>
      </searchContext.Provider>
    </>
  );
}

export default App;
