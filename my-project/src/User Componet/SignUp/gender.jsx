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
      <h2 className="absolute top-[116px] left-[310px] text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      How Would You Like To Be Addressed ?
        </h2>
      <div className="flex justify-between">
      <button onClick={() => handleGenderChange("Female")}>Mrs. / Ms.</button>
      <button onClick={()=> handleGenderChange("Male")}>Mr.</button>
      </div>
      <div className="flex justify-between">
      <input
              type="button"
              value="Next"
              onClick={onNext}
              className=" text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[487px] left-[989px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
     <input
            type="button"
            value="Previous"
            onClick={onPrevious}
            className=" text-[19px] p-2 rounded-tr-lg  rounded-br-lg text-white font-semibold  transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[485px] left-[599px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
            </div>
    </div>
    </div>
  )
}

export default gender