import React from 'react';

type LocationDetail = {
  icon: React.ReactNode;
  location: string;
  headline: string;
};

const LocationDetail = (props: LocationDetail) => {
  return (
    <div className='flex mb-5 md:mb-5 lg:mb-0  items-center'>
      <div className='pr-5'>{props.icon}</div>
      <div>
        <h1 className='text-xs md:text-sm lg:text-base text-grey-normal'>
          {props.headline}
        </h1>
        <h1 className='text-sm md:text-base lg:text-lg font-bold'>
          {props.location}
        </h1>
      </div>
    </div>
  );
};

export default LocationDetail;
