import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
 const navigate = useNavigate()
  if(!localStorage.length) {
    navigate("/" , {replace : true})
  }
  
  

  return (
    <div></div>
  )
}

export default Profile