
import React from "react";
import Ride from "./Ride";
import NavBar from "../../NavBar";
import Search from "../../search";
import { useContext, useState } from "react";
import { searchContext } from "../../App";




const AllRides = ({ localRides, getOneRide }) => {
  const { filterServices } = useContext(searchContext);
  const [smokingChecked, setSmokingChecked] = useState(false);
  const [loggageChecked, setLoggageChecked] = useState(false);
  const [petsChecked, setPetsChecked] = useState(false);
  const [backSeatChecked, setBackSeatChecked] = useState(false);

  const handleFilterSmoking = () => {
    filterServices({ smoking: smokingChecked ? 1 : 0 });
  };

  const handleFilterLoggage = () => {
    filterServices({ loggage: loggageChecked ? 1 : 0 });
  };

  const handleFilterPets = () => {
    filterServices({ pet: petsChecked ? 1 : 0 });
  };

  const handleFilterBackSeat = () => {
    filterServices({ backSeat: backSeatChecked ? 1 : 0 });
  };

  return (
    <>

<NavBar/>
<Search/>

    <div className="flex flex-col md:flex-row h-screen mt-72 ml-28">
     
      <aside className="md:w-48 ">
        <div className="bg-white p-4 rounded-lg shadow-md ">
          <div className="flex flex-col items-center  gap-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={loggageChecked}
                  onChange={() => setLoggageChecked(!loggageChecked)}
                  className="form-checkbox text-blue-500 h-6 w-6"
                />
                <span className="ml-2 text-blue-500">Extra Loggage</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={smokingChecked}
                  onChange={() => setSmokingChecked(!smokingChecked)}
                  className="form-checkbox text-blue-500 h-6 w-6"
                />
                <span className="ml-2 text-blue-500">Smoking</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={petsChecked}
                  onChange={() => setPetsChecked(!petsChecked)}
                  className="form-checkbox text-blue-500 h-6 w-6"
                />
                <span className="ml-2 text-blue-500">Pets</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={backSeatChecked}
                  onChange={() => setBackSeatChecked(!backSeatChecked)}
                  className="form-checkbox text-blue-500 h-6 w-6"
                />
                <span className="ml-2 text-blue-500">Extra Room</span>
              </label>
            </div>
            <button
              onClick={() => {
                handleFilterLoggage();
                handleFilterSmoking();
                handleFilterPets();
                handleFilterBackSeat();
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Filter your Ride
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-grow">
        <Ride getOneRide={getOneRide} localRides={localRides} />
      </div>
    </div>
    
    
    
    
    </>
    
  );
};

export default AllRides;
