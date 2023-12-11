
import React from "react";
import Maps from "./Map";



const StartingPoint = ({ value, onChange, onNext , startingPoint }) => {



  return (
    
<>

<div className=" max-w-xl  space-y-8  absolute top-[97px] right-[150px]">
      <div className="mb-10">
            <div className="flex max-w-4xl  justify-center">
        <h2 className="mt-6 text-center text-darkslategray w-full text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Where Do You  Want To Collect Your Passengers ?
        </h2>
        </div>
        <input
          className="bg-white border  max-w-lg h-8 ml-24  border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Leaving From"
          id=""
          type="text"
          value={startingPoint}
          onChange={(e) => onChange(e.target.value)}
        />
        
        <div className="flex justify-between">
      <input
              type="button"
              value="Next"
              onClick={onNext}
              className=" text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[307px] left-[579px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
            </div>
      </div>

    
    </div>

    <div >
      <Maps onChange={onChange} />

    </div>



</>



  );
};

export default StartingPoint;
