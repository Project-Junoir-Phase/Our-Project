import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const dateOfBirth = () => {
  
  const {userData , setUserData} = useContext(UserContext)



  return (
    <div>
      <h3>What's your date of birth?</h3>
      <input type="text" placeholder='Type here' onChange={(e)=> setDate(e.target.value)} />
      <Link to="/Register/Gender">Confirm</Link>
    </div>
  )
}

export default dateOfBirth