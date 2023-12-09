import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const gender = () => {

  const {userData , setUserData} = useContext(UserContext)

  const handleGenderChange = (selectedGender) => {
    setUserData({ ...userData, gender: selectedGender });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">How would you like to be addressed?</h3>
      <button onClick={() => handleGenderChange("Female")}>Mrs. / Ms.</button>
      <button onClick={()=> handleGenderChange("Male")}>Mr.</button>

      <Link to="/Register/Password">Confirm</Link>
    </div>
    </div>
  )
}

export default gender