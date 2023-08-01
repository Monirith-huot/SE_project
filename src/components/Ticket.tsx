'use client';
import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiBus, BiTimeFive } from 'react-icons/bi';
import { RxDividerVertical } from 'react-icons/rx';
import { BsFillCalendarFill, BsCalendar } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import TicketDetail from './TicketDetail';
import Location from './Location';
import Button from './Button';

type TicketProps = {
  id: string;
  from: string;
  to: string;
  date: string;
  platNumber: string;
  driverNumber: string;
  departureTime: string;
  text: string;
  color: string;
};

export default function Ticket(props: TicketProps) {
  // const formattedDate = convertDate(props.date);
  // const formmatedDeparueTime = convertTime(props.departureTime);
  const ticketId = props.id;
  const userToken = localStorage.getItem('token');

  const handleCancelTicket = async () => {
    setModalHeader('Confirmation');
    setModalContent('Are you sure, you want to cancel your ticket?');
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState('');
  const [modalContent, setModalContent] = useState('');
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='p-10'>
      <div className='p-10 rounded-xl bg-light-hover w-full flex flex-wrap items-center shadow-lg'>
        <div className='w-full lg:w-full flex flex-row justify-start items-center'>
          <Location from={props.from} to={props.to} />
        </div>
        <div className='flex flex-col lg:flex-row lg:w-full w-full md:w-full  items-start text-start lg:pt-10 justify-between'>
          <TicketDetail
            headline='Date'
            detail={props.date}
            icon={<BsCalendar className='w-7 h-7 text-primary' />}
          />
          <TicketDetail
            headline='Time'
            detail={props.departureTime}
            icon={<BiTimeFive className='w-7 h-7 text-primary' />}
          />
          <TicketDetail
            headline='Plate number'
            detail={props.platNumber}
            icon={<BiBus className='w-7 h-7 text-primary' />}
          />
          <TicketDetail
            headline='Driver Number'
            detail={props.driverNumber}
            icon={<IoIosCall className='w-7 h-7 text-primary' />}
          />
        </div>
        <div className='lg:pt-10 w-full'>
          <Button
            text={props.text}
            color={props.color}
            onClick={handleCancelTicket}
          />
        </div>
      </div>
    </div>
  );
}
