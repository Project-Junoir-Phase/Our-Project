import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [currentUser , setCurrentUser] = useState(
      localStorage.getItem("user_id")
    )
    const navigate = useNavigate()

    
    const getUserData = () => {
     if(!localStorage.length) {
    navigate("/" , {replace : true})
     }else{
    axios.get(`http://localhost:3000/User/${currentUser}`).then((res) => console.log(res.data)).catch((err) => console.log(err))
  }
}
  
useEffect(() => {
  getUserData()
})


  return (
    <div></div>
  )
}

export default Profile