import Search from "./search";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";


const SearchPage = ()=>{

    return (
        <>
        <NavBar />
        <div className="absolute top-[146px] left-[calc(50%_-_292px)] text-darkslategray text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Where Do You Want To Go ?
      </div>
        <div className="absolute top-[97px] left-[71px] w-[584px] h-[177px]">
        <Search/>
    </div>
        
        </>
    )
}

export default SearchPage