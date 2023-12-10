import React from 'react'
import RideDet from './RideDet'
import AllRides from './AllRides'

const SearchRide = ({rides }) => {

  return (
    <div>
      
      <AllRides getOneRide={getOneRide} localRides={localRides}/>
      <RideDet  ride={ride}/>
    </div>
  )
}

export default SearchRide
