import Search from "./search";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";


const SearchPage = ()=>{

    return (
        <>
        <NavBar />
        <div className="absolute top-[187px] left-[201px] w-[584px] h-[177px]">
      <p className="absolute top-[0px] left-[201px] [font-family:'RectaW01-MediumCondensed-Regular',Helvetica] font-normal text-[#054854] text-[64px] tracking-[0] leading-[normal]">
        Where do you want to go?
      </p>
    </div>
        <Search />
        </>
    )
}

export default SearchPage