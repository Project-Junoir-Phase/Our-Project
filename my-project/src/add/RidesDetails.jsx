
import React from "react"

const RidesDetails = ({
  smoking,
  pet,
  backSeat,
  luggage,
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
            onChange={() => onChange("smoking", !smoking)}
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
            onChange={() => onChange("pet", !pet)}
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
            onChange={() => onChange("backSeat", !backSeat)}
          />
        </label>

        <label
          htmlFor="luggage"
          className="block text-sm font-medium text-gray-700"
        >
          Luggage
          <input
            id="luggage"
            className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="checkbox"
            value={luggage}
            checked={luggage}
            onChange={() => onChange("luggage", !luggage)}
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
          onChange={(e) => onChange("seatsBooked", e.target.value)}
        />
        <input
          className="bg-white border border-gray-300 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="seatsAv"
          id=""
          type="number"
          value={seatsAv}
          onChange={(e) => onChange("seatsAv", e.target.value)}
        />
        <div className="flex justify-between">
          <input
            type="button"
            value="Previous"
            onClick={onPrevious}
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          ></input>
          <input
            type="button"
            value="Next"
            onClick={onNext}
            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default RidesDetails;