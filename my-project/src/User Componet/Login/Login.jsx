import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  // const [tokens , setTokens] = useState({})

  const navigate = useNavigate()

  const userLogin =async (email , password) => {
    await  axios.post("http://localhost:3000/Login" , {email,password}).then((res) => localStorage.setItem("token", res.data.user_id)).catch((err) => console.log(err))
  }

  return (
    <div>
      <input className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
       type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" onClick={() =>{
        userLogin(email , password)
        navigate("/" , {replace : true})
      }}>Login</button>
    </div>
  )
}

export default Login
