
import React from "react"

const RidesDetails = ({
  smoking,
  pet,
  backSeat,
  loggage,
  carColor,
  carPlate,
  carType,
  seatsBooked,
  seatsAv,
  onChange,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Details
        </h2>

        <label
          htmlFor="smoking"
          className="block text-sm font-medium text-gray-700"
        >Smoking
          <input
            id="smoking"
            className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="checkbox"
            value={smoking}
            checked={smoking}
            onChange={() => onChange("smoking", 1)}
          />
        </label>
        <label
          htmlFor="pet"
          className="block text-sm font-medium text-gray-700"
        >
          Pet
          <input
            id="pet"
            className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="checkbox"
            value={pet}
            checked={pet}
            onChange={() => onChange("pet", 1)}
          />
        </label>

        <label
          htmlFor="backSeat"
          className="block text-sm font-medium text-gray-700"
        >
          Back Seat
          <input
            id="backSeat"
            className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="checkbox"
            value={backSeat}
            checked={backSeat}
            onChange={() => onChange("backSeat", 1)}
          />
        </label>

        <label
          htmlFor="loggage"
          className="block text-sm font-medium text-gray-700"
        >
          Loggage
          <input
            id="loggage"
            className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="checkbox"
            value={loggage}
            checked={loggage}
            onChange={() => onChange("loggage", 1)}
          />
        </label>
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="carColor"
          id=""
          type="text"
          value={carColor}
          onChange={(e) => onChange("carColor", e.target.value)}
        />
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="carPlate"
          id=""
          type="text"
          value={carPlate}
          onChange={(e) => onChange("carPlate", e.target.value)}
        />
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="carType"
          id=""
          type="text"
          value={carType}
          onChange={(e) => onChange("carType", e.target.value)}
        />
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="seatsBooked"
          id=""
          type="number"
          value={seatsBooked}
          onChange={(e) => onChange("seatsBooked", JSON.parse( e.target.value))}
        />
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="seatsAv"
          id=""
          type="number"
          value={seatsAv}
          onChange={(e) => onChange("seatsAv", JSON.parse( e.target.value))}
        />
       <div className="flex justify-between">
      <input
              type="button"
              value="Next"
              onClick={onNext}
              className=" text-[19px] p-2 rounded-l-lg  text-white font-semibold transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[487px] left-[989px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              ></input>
     <input
            type="button"
            value="Previous"
            onClick={onPrevious}
            className=" text-[19px] p-2 rounded-tr-lg  rounded-br-lg text-white font-semibold  transition-colors cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[485px] left-[599px] rounded-6xl w-[145px] h-[50px] items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            ></input>
            </div>
      </div>
    </div>
  );
};

export default RidesDetails;