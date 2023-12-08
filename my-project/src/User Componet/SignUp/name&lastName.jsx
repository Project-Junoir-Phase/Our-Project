import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const FullName = () => {
  const {userData , setUserData} = useContext(UserContext)

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setUserData({ ...userData, lastName: e.target.value });
  };

  return (
    <div>
      <h3>What's your name?</h3>
    <input type="text" placeholder='Type here' onChange={handleNameChange} />
    <input type="text" placeholder='Type here' onChange={handleLastNameChange} />
    <Link to="/Register/dateOfBirth">Confirm</Link>
  </div>
  )
}

export default FullName