import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


const RideDet = ({ride}) => {
    console.log(ride);
   
    console.log(ride.ride_id,"hedhi rideid");
  return (
    <div>
      <h1>{ride.reservationDate}</h1>
      <h2>{ride.startingPoint}</h2>
      <h2>{ride.endingPoint}</h2>
      <h2>{ride.Time}</h2>
      <h3>Total Price For 1 passanger </h3>  
      <h3>{ride.price}</h3>
      <h4>3ammi echifour</h4>
      <img src="" alt="taswiret 3ammi echifour" />
    <h3>verified profile                icone taa verifié</h3>
    <p>user.bio</p>
    <h3>lfaza taa l messaget </h3>
    <h3>Your reservation will be confirmed once the driver accepts your request</h3>
    <div className='services'>
    {ride.smoking ? (<p>Je préfère  voyager en compagnie d’animaux</p>):(<p>Je ne préfère pas voyager en compagnie d’animaux</p>) }
    <h3>{ride.pet}</h3>
    <h3>{ride.backSeat}</h3>
    <h3>{ride.loggage}</h3>
    </div>
    <button>BookRide</button>
    </div> 
  )
}

export default RideDet
