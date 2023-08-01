import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
type DatePickerComponentProps = {
  onChange: (date: Date | null) => void;
  includeDates: Date[];
  placeholderText: string;
  error: string;
};

export default function DatePickerComponent(props: DatePickerComponentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    props.onChange(date);
  };
  return (
    <div className='px-10 py-20'>
      <h4 className='pb-5'>Departure Date</h4>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className='w-96 bg-light-normal h-24 p-10 focus:outline-none text-grey text-lg'
        includeDates={props.includeDates}
        placeholderText={props.placeholderText}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      {props.error && (
        <p className='text-red-normal text-sm md:text-base lg:text-lg mt-1'>
          {props.error}
        </p>
      )}
    </div>
  );
}
