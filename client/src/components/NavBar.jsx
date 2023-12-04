import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div> <div>
      <Link to="/">
        Triki
      </Link>
      </div>
      <div>
        <Link to="/RideSearch">
        Search
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
