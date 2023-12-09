import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const gender = ({onNext, onPrevious}) => {

  const {userData , setUserData} = useContext(UserContext)

  const handleGenderChange = (selectedGender) => {
    setUserData({ ...userData, gender: selectedGender });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">How would you like to be addressed?</h3>
      <div className="flex justify-between">
      <button onClick={() => handleGenderChange("Female")}>Mrs. / Ms.</button>
      <button onClick={()=> handleGenderChange("Male")}>Mr.</button>
      </div>
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

export default gender