import React,{useState} from "react"
import MyCalendar from "./Calender"


const Search = ()=>{

  const [calender,setCalender] = useState(false)

    return(
        <>
        
        <div className="absolute top-[187px] left-[201px] w-[1018px] h-[59px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1018px] h-[59px]" />
        <div className="absolute top-[0px] left-[867px] rounded-2xl bg-deepskyblue w-[151px] h-[59px] overflow-hidden">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_18.5px)] left-[calc(50%_-_42.5px)] text-3xl tracking-[0.05em] font-semibold font-estedad-vf text-white text-left inline-block w-[111px] hover:text-lightskyblue hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Search
          </button>
        </div>
        <div className="absolute top-[10.1px] left-[749px] w-[54px] h-[44.9px]">
          <img
            className="absolute top-[0px] left-[-1px] w-0.5 h-[42.8px]"
            alt=""
            src="/line-1.svg"
          />
          <img
            className="absolute top-[calc(50%_-_13.55px)] left-[10px] w-[25px] h-[25px] overflow-hidden"
            alt=""
            src="/4092564-profile-about-mobile-ui-user-icon-1.svg"
          />
          <div className="absolute top-[calc(50%_-_16.55px)] left-[45px]">
            1
          </div>
        </div>
        <div className="absolute top-[10.1px] left-[571px] w-[103px] h-[43.9px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.9px] left-[7px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/8674570-ic-fluent-calendar-rtl-regular-icon-1.svg"
            />
            <div className="relative text-xl tracking-[0.07em] font-estedad-vf text-darkslategray text-left">
              Today
            </div>
          </button>
          <img
            className="absolute top-[0px] left-[-1px] w-0.5 h-[42.8px]"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <div className="absolute top-[8px] left-[289px] w-[270px] h-[45px]">
          <img
            className="absolute top-[6.5px] left-[6px] w-[31px] h-8"
            alt=""
            src="/group-2.svg"
          />
          <input
            className="[border:none] font-estedad-vf text-xl bg-[transparent] absolute top-[5px] left-[34px] w-[236px] h-10 flex flex-row items-center justify-center p-2.5 box-border"
            placeholder="Going to..."
            type="text"
          />
          <img
            className="absolute top-[calc(50%_-_22.5px)] left-[-1px] w-0.5 h-[42.8px]"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <div className="absolute top-[8px] left-[16px] w-[250px] h-[46px]">
          <div className="absolute top-[6.5px] left-[0px] w-[38px] h-8 flex flex-row items-center justify-start">
            <img className="relative w-[31px] h-8" alt="" src="/group-3.svg" />
          </div>
          <input
            className="[border:none] font-estedad-vf text-xl bg-[transparent] absolute top-[0px] left-[40px] w-[210px] h-10"
            placeholder="Leaving from..."
            type="text"
          />
        </div>
      </div>
        
        </>
    )
}


export default Search