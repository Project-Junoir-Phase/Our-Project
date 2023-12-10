import React, { useContext, useState } from 'react'
import { UserContext } from './WholePage'
import axios from 'axios'

const bio = () => {
  const [bio , setBio] = useState("")

  const {userData, setCurrentPage} = useContext(UserContext)

const handleBio = (e) => {
  setBio(e.target.value)
}

const handleUpdate = (bio) => {
  axios.put(`http://localhost:3000/Edit/Bio/${userData.user_id}`, {bio}).then((res) => console.log("updated!")).then(() => setCurrentPage("Profile")).catch((err)=> console.log(err))
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Define your Bio</h3>
      <input  className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
       type="text" placeholder='Type here' onChange={handleBio} />
       <div className="flex justify-between">
      <input
              type="button"
              value="Confirm"
              onClick={()=> handleUpdate(bio)}
              className=" text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[487px] left-[989px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
            </div>
    </div>
    </div>
  )
}

export default bio