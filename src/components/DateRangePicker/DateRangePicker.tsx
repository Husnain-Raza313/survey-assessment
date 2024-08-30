import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

type DateRange = [Date | null, Date | null] | [undefined, undefined];

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: DateRange) => {
    const [start, end] = dates;
    setStartDate(start || null);
    setEndDate(end || null);
  };

  return (
    <div
      className="flex items-center px-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-auto pr-10"
      role="group"
      aria-labelledby="date-range-picker-label"
    >
      <FaCalendarAlt
        className="text-gray-400 mr-2"
        aria-hidden="true"
      />
      <label id="date-range-picker-label" className="sr-only">Select a date range</label>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        selectsRange
        placeholderText="Nov 16, 2021 - Nov 16, 2022"
        className="w-full 2xl:w-[120%] max-w-md py-2 px-2 border-0 rounded-md focus:outline-none"
        dateFormat="MMM d, yyyy"
        isClearable
        aria-labelledby="date-range-picker-label"
      />
    </div>
  );
};

export default DateRangePicker;
