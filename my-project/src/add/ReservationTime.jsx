import React from "react";

const ReservationTime = ({ value, onChange, onNext, onPrevious }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    


      <div className=" max-w-4xl space-y-8  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="mb-10">
            <div className="flex max-w-4xl  justify-center">
        <h2 className="mt-6 text-center text-darkslategray w-full text-45xl font-rectaw01-mediumcondensed [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Time ?
        </h2>
        </div>
        <input
          className="bg-white border max-w-md h-8 mr-5 border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Going To .."
          id=""
          type="Time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
    <div className="flex justify-between">
      <input
              type="button"
              value="Next"
              onClick={onNext}
              className="  text-[19px]  p-2 rounded-l-lg text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-deepskyblue absolute top-[467px] left-[900px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-cyan-600 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
     <input
            type="button"
            value="Previous"
            onClick={onPrevious}
            className=" text-[19px] p-2 rounded-tr-lg  rounded-br-lg text-white font-semibold  transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-deepskyblue absolute top-[469px] left-[460px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-cyan-600 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
            </div>








    </div>
  );
};

export default ReservationTime;
