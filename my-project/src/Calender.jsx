import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyCalendar({getBD}) {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');

  const onChange = (value) => {
    setDate(value);
    let year = value.getFullYear();
    let month = value.getMonth() + 1;
    let day = value.getDate();
    setFormattedDate(`${day}/${month}/${year}`);
    getBD(setFormattedDate)
  };

  return (
    <div className="flex justify-center flex items-center justify-center w-full min-h-screen bg-gray-50 drop-shadow-2xl ">
      <div className="flex bg-white shadow-lg rounded-xl">
        <div className="w-64 h-72 border-r border-gray-100">
          <div className='m-auto flex flex-col text-xs px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-zinc-800 text-left' >
          <div className="flex flex-col text-sm font-semibold hover:bg-gray-100 border-gray-100  ">
          <Calendar
            className="text-center w-64 h-0 border-transparent   "
            onChange={onChange}
            value={date}
          />
          
          {/* <p className="mt-4 text-center ">{formattedDate}</p> */}
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default MyCalendar;