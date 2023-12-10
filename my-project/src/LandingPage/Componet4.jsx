import React from "react";


const Componet4 =()=>{
    return(
        <>
        
      <div className="absolute top-[1614px] left-[0px] w-[1441px] h-96 overflow-hidden">
        <div className="absolute top-[117px] left-[210px] w-[465px] h-[95px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[45.5%] text-[27px]">
            Receive up to 100€ in Carpool Bonus!
          </div>
          <div className="absolute top-[43px] left-[0px] text-[14px] tracking-[0.02em] leading-[150%] text-lightslategray">
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`Good news, drivers: get rewarded for your good habits! Earn the `}</p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`Carpool Bonus by completing 3 carpools in 3 months. See eligibility `}</p>
            <p className="m-0">conditions.</p>
          </div>
        </div>
        <img
          className="absolute top-[5px] left-[656px] w-[571px] h-[381px] object-cover"
          alt=""
          src="/mesa-de-trabajo-1-3@2x.png"
        />
        <button className="cursor-pointer [border:none] py-[13px] px-3 bg-orchid absolute top-[256px] left-[372px] rounded-6xl w-[140px] h-12 overflow-hidden flex flex-row items-center justify-center box-border hover:bg-mediumorchid-200 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-purple active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="relative text-sm tracking-[-0.04em] leading-[145.5%] font-kaleko105w00-bold text-white text-left">
            Publish a Ride
          </div>
        </button>
      </div>


        </>
    )
}
export default Componet4