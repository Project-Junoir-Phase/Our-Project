import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './SignUp'

const gender = () => {

  const {userData , setUserData} = useContext(UserContext)

  const handleGenderChange = (selectedGender) => {
    setUserData({ ...userData, gender: selectedGender });
  };

  return (
    <div>
      <h3>How would you like to be addressed?</h3>
      <button onClick={() => handleGenderChange("Female")}>Mrs. / Ms.</button>
      <button onClick={()=> handleGenderChange("Male")}>Mr.</button>

      <Link to="/Register/Password">Confirm</Link>
    </div>
  )
}

export default gender