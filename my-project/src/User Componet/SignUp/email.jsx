import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "./SignUp.jsx"

const email = () => {
const {userData , setUserData} = useContext(UserContext)


const handleEmailChange = (e) => {
  setUserData({ ...userData, email: e.target.value });
};

  return (
    <div>
      <h3>What's your email?</h3>
      <input type="text" placeholder='Type here' onChange={handleEmailChange} />
      <Link to="/Register/Name">Confirm</Link>
    </div>
  )
}

export default email