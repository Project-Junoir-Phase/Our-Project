import axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from './WholePage';

const Name = () => {
  const [name , setName] = useState("")
  const [lastName , setLastName] = useState("")

  const {userData , setCurrentPage} = useContext(UserContext)

  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/Edit/Name/${userData.user_id}` , {name , lastName}).then((res) => console.log("updated")).then(() => setCurrentPage("Profile")).catch((err) => console.log(err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className="absolute top-[136px] left-[calc(50%_-_192px)] text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      What's Your Name ?
      </div>

      <div className="input-group ">
      <label className="label">First Name</label>
      <input className=" input  bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 type="text" name="Name" placeholder='First Name ' onChange={handleNameChange} />
 <label className=" absolute top-[350px] left-[667px] label">Last Name</label>
      <input className=" input absolute top-[370px] left-[660px]  bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 type="text" name="Name" placeholder='Last Name' onChange={handleLastNameChange} />
      
      </div>

    
     <div className="flex justify-between">
      <input
              type="button"
              value="Confirm"
              onClick={()=> handleUpdate()}
              className=" text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[487px] left-[989px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
            </div>
  </div>
  </div>
  )
}

export default Name