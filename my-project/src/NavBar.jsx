import React, { useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [serchBtn, setSearchBtn] = useState(true);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const handleButtonClick = () => {
    
    navigate("/Search", { replace: true });
  };

  const handelButton = () => {
    setSearchBtn(!serchBtn);
  };
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <header className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1525px] h-[77px] border-[1px] border-solid border-slateblue">
      <Link to="/LandingPage">
        <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[22px] left-[314px] flex flex-row items-center justify-center">
          <b className="relative text-lg font-neufreit text-deepskyblue text-left hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-mediumblue">
            Carpool
          </b>
        </button>
      </Link>

      <img
        className="absolute top-[10px] left-[99px] w-[181px] h-[57px] object-cover"
        alt=""
        src="/plan-de-travail-3-1@2x.png"
      />
      {serchBtn && (
        <Link to="/Search">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[11px] left-[925px] w-[135px] h-[53px] flex flex-row items-center justify-start gap-[12px]"
            onClick={() => {
              console.log("naviate to searchPage");
              handelButton();
              handleButtonClick();
            }}
          >
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/3844432-magnifier-search-zoom-icon-1.svg"
            />
            <b className="relative text-lg inline-block font-neufreit text-deepskyblue text-left w-[118px] h-[13px] shrink-0 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Search
            </b>
          </button>
        </Link>
      )}

      <div className="absolute top-[10px] left-[1500px] flex flex-row items-center justify-start gap-[1px]">
        <img
          value={selectedOption}
          onChange={handleDropdownChange}
          className="cursor-pointer p-2.5 bg-transparent border-none absolute top-[0px] left-[0px] h-11 w-[165px] text-deepskyblue relative w-[50px] h-14 object-cover"
          alt=""
          src="/plan-de-travail-3-copie-1@2x.png"
        />

        <Link to="/Profile">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[31px] h-8 overflow-hidden shrink-0 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <select>
              <option></option>
              <option>LogIn</option>
              <option>logOut</option>
            </select>
            <img
              className="absolute h-[29.38%] w-[47.1%] top-[54.37%] right-[27.74%] bottom-[16.25%] left-[25.16%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </button>
        </Link>
      </div>

      <div className="absolute top-[17px] left-[1110px] w-[165px] h-11">
        <Link to="/AddRide">
          <button className="cursor-pointer [border:none] py-2.5 pr-[5px] pl-2.5 bg-[transparent] absolute top-[0px] left-[0px] h-11 flex flex-row items-center justify-center box-border gap-[10px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 hover:flex"
              alt=""
              src="/392530-add-create-cross-new-plus-icon-1.svg"
            />
            <b className="relative text-lg inline-block font-neufreit text-deepskyblue text-left w-[141px] shrink-0 hover:text-royalblue hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-mediumslateblue">
              Publish a Ride
            </b>
          </button>
        </Link>
      </div>
    </header>
  );
};
export default NavBar;
