import React from 'react'
import Ride from './Ride'
import RideDet from './RideDet'


const AllRides = ({rides,getOneRide}) => {
    // console.log(rides);
  return (
    <div>
    <Ride getOneRide={getOneRide} rides={rides}/>
    
    </div>
  )
}

export default AllRides
