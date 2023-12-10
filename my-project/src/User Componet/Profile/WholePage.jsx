import React, { createContext, useEffect, useState } from 'react'
import Profile from './profile'
import Name from './name'
import Picture from './picture'
import PhoneNum from './phoneNum'
import Bio from './bio'
import Edit from './Edit'
import NavBar from '../../NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()


const WholePage = () => {
  const [currentPage , setCurrentPage] = useState("Profile")
  const [userData , setUserData] = useState([])
  const handlePages = (page) => {
    setCurrentPage(page)
  }
  const [currentUser , setCurrentUser] = useState(
    localStorage.getItem("token")
  )
const navigate = useNavigate()
  
  const getUserData = () => {
   if(!localStorage.length) {
  navigate("/" , {replace : true})
   }else{
  axios.get(`http://localhost:3000/User/${currentUser}`).then((res) => setUserData(res.data)).catch((err) => console.log(err))
}
}

useEffect(() => {
getUserData()
})
  return (
    <UserContext.Provider value={{userData , setCurrentPage}}> 
    <NavBar /> 
    {currentPage === "Profile" && (
      <Profile handlePages={handlePages} />
    )}
    {currentPage === "Edit" && (
      <Edit />
    )}
    {currentPage === "Name" && (
      <Name />
    )}
    {currentPage === "Bio" && (
      <Bio />
    )}
    {currentPage === "Picture" && (
      <Picture />
    )}
    {currentPage === "PhoneNum" && (
      <PhoneNum />
    )}
    
    </UserContext.Provider>
  )
}

export default WholePage