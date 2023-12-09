import React, { useContext, useState } from 'react'
import MyCalendar from '../../Calender'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const dateOfBirth = ({onNext, onPrevious}) => {
  
  const {userData , setUserData} = useContext(UserContext)

  const handleDateOfBirth = (e) => {
    setUserData({...userData , dateOfBirth : e.target.value})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">What's your date of birth?</h3>
      <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder=""
          id=""
          type="date"
          onChange={handleDateOfBirth}
        />
      <div className="flex justify-between">
      <input
              type="button"
              value="Previous"
              onClick={onPrevious}
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              ></input>
      <input
            type="button"
            value="Next"
            onClick={onNext}
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            ></input>
            </div>
    </div>
    </div>
  )
}

export default dateOfBirth