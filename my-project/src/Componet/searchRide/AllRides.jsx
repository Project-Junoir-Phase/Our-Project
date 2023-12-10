import React from 'react'
import Ride from './Ride'
import NavBar from '../../NavBar'



const AllRides = ({localRides,getOneRide}) => {
  return (
    <div>
      <NavBar/>
    <Ride getOneRide={getOneRide} localRides={localRides}/>
    
    </div>
  )
}

export default AllRides
