import React from "react";


const Footer =()=>{

    return(
        <>
          <footer className="absolute top-[2602px] left-[0px] w-[1440px] h-[72px] overflow-hidden">
        
        <div className="absolute bottom-[-0.7px] left-[1px] bg-white w-[1440px] h-[70.7px]" />
        
      </footer>
      
      <footer className="absolute top-[2199px] left-[0px] w-[1540px] h-[403px] overflow-hidden text-left text-xl text-black font-neufreit">
        <div className="absolute bottom-[-0.3px] left-[1px] bg-gainsboro w-[1540px] h-[401.3px]" />
        <ul className="m-0 absolute top-[42px] left-[267px] w-[148px] h-[126px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.02em]">
            All Directories
          </b>
          <div className="absolute top-[63px] left-[0px] w-[148px] h-[63px] text-mini font-futura">
            <div className="absolute top-[0px] left-[0px] font-medium">
              All Carpool routes
            </div>
            <div className="absolute top-[44px] left-[0px] font-medium">
              All Carpool Destination
            </div>
          </div>
        </ul>
        <ul className="m-0 absolute top-[42px] left-[513px] w-[183px] h-[318px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.02em]">
            Top Carpool Routes
          </b>
          <div className="absolute top-[63px] left-[0px] w-[145px] h-[255px] text-mini font-futura">
            <div className="absolute top-[0px] left-[0px] font-medium">{`Tunis -> Sousse`}</div>
            <div className="absolute top-[59px] left-[0px] font-medium">{`Sousse -> Tunis`}</div>
            <div className="absolute top-[118px] left-[0px] font-medium">{`Tunis -> Safx`}</div>
            <div className="absolute top-[177px] left-[0px] font-medium">{`Safx -> Tunis`}</div>
            <div className="absolute top-[236px] left-[0px] font-medium">{`Djerba -> Tunis`}</div>
          </div>
        </ul>
        <ul className="m-0 absolute top-[42px] left-[789px] w-[83px] h-[318px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.02em]">
            About
          </b>
          <div className="absolute top-[63px] left-[0px] w-[83px] h-[255px] text-mini font-futura">
            <div className="absolute top-[0px] left-[0px] font-medium">
              How it works
            </div>
            <div className="absolute top-[59px] left-[0px] font-medium">
              About Us
            </div>
            <div className="absolute top-[118px] left-[0px] font-medium">
              Help Centre
            </div>
            <div className="absolute top-[177px] left-[0px] font-medium">
              Press
            </div>
            <div className="absolute top-[236px] left-[0px] font-medium">
              We’re Hiring
            </div>
          </div>
        </ul>
        <div className="absolute top-[317px] left-[1012px] w-[209px] h-12 text-[13px] text-lightslategray font-futura">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[0px] rounded-[11px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[209px] h-12" />
          <div className="absolute top-[6px] left-[5px] w-[54px] h-9">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Language
            </div>
            <div className="absolute top-[17px] left-[0px] text-mini font-medium text-darkslategray">
              English
            </div>
          </div>
          <img
            className="absolute top-[22px] left-[180.7px] w-[8.4px] h-1.5"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </footer>

        
        </>

    )
}
export default Footer