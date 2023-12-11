import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import NavBar from '../../NavBar'
import { Link } from "react-router-dom";



const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  // const [tokens , setTokens] = useState({})

  const navigate = useNavigate()

  const userLogin =async (email , password) => {
    await  axios.post("http://localhost:3000/Login" , {email,password}).then((res) => localStorage.setItem("token", res.data.user_id)).catch((err) => console.log(err))
  }

  return (
    <>
    <NavBar />
    <div className='max-w-2xl w-full space-y-8  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-24 w-34"
                    src="/public/2x/Plan de travail 4@2x-8.png"/>
            </div>
            <h2 className="mt-6 text-center text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Login To Your Account
            </h2>
            <p className=" text-center text-sm text-darkslategray font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mt-5">
            Don't have an account yet?
            <Link to="/SignUp" className="font-medium text-purple-600 font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] text-darkslategray hover:text-purple-500">
                SignUp
            </Link>
            </p>
        </div>

      






      <input className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
       type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input className=" rounded-s-lg   bg-white border border-gray-300 py-2 px-4 block w-full rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />


<div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 font-medium text-purple-600 font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] text-darkslategray hover:text-purple-500 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium font-medium text-purple-600 font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] text-darkslategray hover:text-purple-500 text-purple-600 hover:text-purple-500">
            Forgot your password?
          </a>
        </div>
      </div>

<div className=' bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  place-content-center'>
<button  className= " group relative items-center  w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md  bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10 bg-deepskyblue p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-cyan-600 transition-colors" onClick={() =>{
        userLogin(email , password)
        navigate("/" , {replace : true})
      }}>Login</button>

</div>
      












    </div>
    </>
    
  )
}

export default Login
