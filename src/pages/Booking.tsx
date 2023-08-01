import Ticket from '@/components/Ticket';
import React from 'react';

const intialData = [
  {
    id: '123',
    from: 'Phnom Penh',
    to: 'Kirirom',
    date: '03/08/2023',
    platNumber: 'Hello Kon Papa',
    driverNumber: '0123456778',
    departureTime: '8:00 AM',
    text: 'Booking',
    color: 'primary',
  },
  {
    id: '123',
    from: 'Kirirom',
    to: 'Phnom Penh',
    date: '03/08/2023',
    platNumber: 'Hello Kon Papa',
    driverNumber: '0123456778',
    departureTime: '8:00 AM',
    text: 'Booking',
    color: 'primary',
  },
];

export default function Booking() {
  return (
    <div className=''>
      {intialData.map((destination, key) => (
        <div key={destination.id}>
          <Ticket
            id={destination.id}
            from={destination.from}
            to={destination.to}
            date={destination.date}
            platNumber={destination.platNumber}
            driverNumber={destination.driverNumber}
            departureTime={destination.departureTime}
            text={destination.text}
            color={destination.color}
          />
        </div>
      ))}
    </div>
  );
}
