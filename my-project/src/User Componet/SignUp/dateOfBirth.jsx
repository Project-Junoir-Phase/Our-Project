import React, { useContext, useState } from 'react'
import MyCalendar from '../../Calender'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const dateOfBirth = () => {
  
  const {userData , setUserData} = useContext(UserContext)

  const getBD = (birthDay) => {
    setUserData({...userData , dateOfBirth : birthDay})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">What's your date of birth?</h3>
      <MyCalendar getBD={getBD} />
      <Link to="/Register/Gender">Confirm</Link>
    </div>
    </div>
  )
}

export default dateOfBirth