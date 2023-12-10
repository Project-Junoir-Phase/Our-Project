import Search from "./search";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";


const SearchPage = ()=>{

    return (
        <>
        <div className="relative w-full h-[1024px] overflow-hidden text-left text-3xl text-darkslategray font-estedad-vf">
        <div className="absolute top-[107px] left-[101px] w-[1284px] h-[177px]">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Where Do You Want To Go?
      </h1>
    </div>
    </div>
    <div className="absolute top-[187px] left-[51px] w-[1184px] h-[177px]">
      
    <Search/>
    </div>
    <NavBar />
    
        
        </>
    )
}

export default SearchPage