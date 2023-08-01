import React from 'react';

type TicketDetail = {
  icon: React.ReactNode;
  headline: string;
  detail: string;
};

export default function TicketDetail(props: TicketDetail) {
  return (
    <div className='flex mb-5 md:mb-5 lg:mb-0  items-center'>
      <div className='pr-5'>{props.icon}</div>
      <div>
        <h5 className='text-grey'>{props.headline}</h5>
        <h4>{props.detail}</h4>
      </div>
    </div>
  );
}
