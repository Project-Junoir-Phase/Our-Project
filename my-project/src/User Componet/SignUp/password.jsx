import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const Password = ({onNext, onPrevious}) => {

  const {userData , setUserData, userRegister} = useContext(UserContext)

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h1 className="absolute top-[106px] left-[calc(50%_-202px)] text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      Define Your Password
      </h1>

      <div className=" input-group">
      <label className="  label">Password</label>

      <input className=" input  bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 type="password" name="Name" placeholder='Enter Your Password ' onChange={handlePassword} />

      <svg stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon absolute top-[322px] left-[975px]">
  <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
      
 
 <label className=" absolute top-[380px] left-[540px] label">Confirme Password</label>

 <input className=" input absolute top-[400px] left-[530px]  bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 type="password" name="Name" placeholder='Confirme Your Password' />

 <svg stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon absolute top-[422px] left-[975px]">
  <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
            
      </div>
    
     <div className="flex justify-between">
     <Link to="/Login">
     <input
              type="button"
              value="Confirm"
              onClick={()=>userRegister(userData)}
              className="  text-[19px]  p-2 rounded-l-lg text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-deepskyblue absolute top-[507px] left-[900px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-cyan-600 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
     </Link>

     <input
            type="button"
            value="Previous"
            onClick={onPrevious}
            className=" text-[19px] p-2 rounded-tr-lg  rounded-br-lg text-white font-semibold  transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-deepskyblue absolute top-[507px] left-[460px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-cyan-600 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
            </div>
  </div>
    </div>  
  )
}

export default Password