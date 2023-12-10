import React, { useContext, useState } from 'react'
import { UserContext } from './WholePage'


const Edit = () => {
  const {setCurrentPage} = useContext(UserContext)

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 style={{fontWeight : 'bold' , fontSize : 'large'}}>What would you like to edit</h3>
      <hr style={{marginTop : "50px" , marginBottom : "50px"}} />
    <ul>
    <li>
      <button>
        <span onClick={()=> setCurrentPage("Name")}>Name</span>
      </button>
    </li>
    <hr style={{marginTop : "50px" , marginBottom : "50px"}}/>
    <li>
      <button>
        <span  onClick={()=> setCurrentPage("Bio")}>Bio</span>
      </button>
    </li>
    <hr style={{marginTop : "50px" , marginBottom : "50px"}} />
    <li>
      <button>
        <span  onClick={()=> setCurrentPage("PhoneNum")}>Phone Number</span>
      </button>
    </li>
    <hr style={{marginTop : "50px" , marginBottom : "50px"}} />
    <li>
      <button>
        <span  onClick={()=> setCurrentPage("Picture")}>Picture</span>
      </button>
    </li>

    </ul>

    </div>
  )
}

export default Edit