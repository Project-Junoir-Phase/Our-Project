import React from "react";

import NavBar from "../NavBar";
import HomeImg from "./HomeImg";
import Search from "../search";
import Componet1 from "./Componet1";
import Componet2 from "./Componet2";
import Componet3 from "./Componet3";
import Componet4 from "./Componet4";
import Componet5 from "./Componet5";
import Footer from "./Footer";




const LandingPage = () => {




    return (
        <>
            <div className="w-[1525px]" >
            <HomeImg />
            <NavBar />
            <div className="absolute top-[225px] left-[90px]"> 
            <Search/>
            </div>
            <Componet1/>
            <Componet2/>
            <Componet3/>
            <Componet4 />
            <Componet5/>
            <Footer/>
            </div>

            
        </>



    )
}
export default LandingPage

