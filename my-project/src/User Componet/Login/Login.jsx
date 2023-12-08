import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [token , setToken] = useState("")

  const userLogin = (email , password) => {
    axios.post("http://localhost:3000/Login" , {email,password}).then((res) => setToken(res.data)).catch((err) => console.log(err))
  }

  return (
    <div>
      <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() =>{
        userLogin(email , password)

      }}>Login</button>
    </div>
  )
}

export default Login
