import React from "react";
import './Reservation.css'
const Reservation = () => {
  return (
    <div>
      <form  className="search-form">
        <label>Leaving From ...</label>
        <input type="text" id="leaving" name="leaving" />
        <label>Going to ...</label>
        <input type="text" id="going" name="going" />
        <label>Passenger</label>
        <input type="number" id="passenger" min="1" />
        <label>Today</label>
        <input type="date" id="today" />
        <button type="submit">Search CarPool</button>
      </form>
    </div>
  );
};

export default Reservation;
