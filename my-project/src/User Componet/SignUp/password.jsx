import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const Password = () => {

  const {userData , setUserData} = useContext(UserContext)

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };


  return (
    <div>
      <h3>Define your password</h3>
      <input type="text" placeholder='Type here' onChange={handlePassword} />
     <Link>Confirm</Link>
    </div>
  )
}

export default Password