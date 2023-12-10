import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "./SignUp.jsx"
import NavBar from '../../NavBar.jsx'
import '../../App.css'


const email = ({onNext}) => {
const {userData , setUserData} = useContext(UserContext)


const handleEmailChange = (e) => {
  setUserData({ ...userData, email: e.target.value });
};

  return (

<>

<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <div className="absolute top-[136px] left-[calc(50%_-_192px)] text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
    What's Your Email ?
      </div>
      <div className="input-group ">
      <label className="label">Email address</label>
      <input className=" input  bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 type="email" name="Email" autocomplete="off" placeholder='Email' onChange={handleEmailChange} />
      
      </div>
      <input
            type="button"
            value="Next"
            onClick={onNext}
            className=" text-[19px]  p-2 rounded-tr-lg rounded-br-lg text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[317px] left-[899px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          ></input>
      
    </div>
    </div>
</>

    
  )
}

export default email