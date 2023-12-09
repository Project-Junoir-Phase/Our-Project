import React, { createContext, useState } from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import axios from 'axios'
import Email from './email'
import FullName from './name&lastName'
import DateOfBirth from './dateOfBirth'
import Gender from './gender'
import Password from './password'
import PhoneNum from './PhoneNum'

export const UserContext = createContext()

const SignUp = () => {
  // const [token , setToken] = useState("")
  const [currentPage , setCurrentPage] = useState(1)
  const [userData , setUserData] = useState({
    email: "",
    name: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phoneNum : "",
    password: "",
  })
  
  console.log(userData)

  const userRegister = (userData) => {
    axios.post("http://localhost:3000/Register", userData).then((res) => console.log("account has been made")).catch((err)=> console.error(err))
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <UserContext.Provider value={{userData , setUserData, userRegister}}>
    {currentPage === 1 && (
      <Email 
      onNext={nextPage}
       />
    )}
    {currentPage === 2 && (
      <FullName 
      onNext = {nextPage}
      onPrevious = {previousPage}
      />
    )}
    {currentPage === 3 && (
      <DateOfBirth 
      onNext = {nextPage}
      onPrevious = {previousPage}
       />
    )}
    {currentPage === 4 && (
      <Gender 
      onNext = {nextPage}
      onPrevious = {previousPage}
      />
    )}
    {currentPage === 5 && (
      <PhoneNum
      onNext = {nextPage}
      onPrevious = {previousPage}
       />
    )}
    {currentPage === 6 && (
      <Password
      onNext = {nextPage}
      onPrevious = {previousPage}
       />
    )}
    </UserContext.Provider>
  )
}

export default SignUp