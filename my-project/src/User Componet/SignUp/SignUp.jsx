import React, { createContext, useState } from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import axios from 'axios'
import Email from './email'
import FullName from './name&lastName'
import DateOfBirth from './dateOfBirth'
import Gender from './gender'
import Password from './password'

export const UserContext = createContext()

const SignUp = () => {
  // const [token , setToken] = useState("")
  const [userData , setUserData] = useState({
    email: "",
    name: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    password: "",
  })
  
  
  const userRegister = (userData) => {
    axios.post("http://localhost:3000/Register", userData).then((res) => console.log("account has been made")).catch((err)=> console.log(err))
  }

  return (
    <UserContext.Provider value={{userData , setUserData, userRegister}}>
    <BrowserRouter>
    <Routes>
      <Route path='/Register/Email' element={<Email />}/>
      <Route path='/Register/Name' element={<FullName />}/>
      <Route path='/Register/dateOfBirth' element={<DateOfBirth />}/>
      <Route path='/Register/Gender' element={<Gender />}/>
      <Route path='/Register/Password' element={<Password />}/>
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default SignUp