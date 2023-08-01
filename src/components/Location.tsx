import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { TbLocation } from 'react-icons/tb';
import LocationDetail from './LocationDetail';

type LocationProps = {
  from: string;
  to: string;
};
export default function Location(props: LocationProps) {
  function shortCutConvert(location: string) {
    return location === 'Phnom Penh' ? 'PP' : 'KR';
  }
  return (
    <div className='flex-row justify-start items-center'>
      <div className='hidden lg:block'>
        <div className='flex items-center'>
          <div className='text-start pr-20'>
            <h1 className='text-base md:text-lg lg:text-xl text-grey-normal'>
              From
            </h1>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold pt-3'>
              {props.from}
            </h1>
          </div>
          {/* <BsArrowRight width={40} height={100} /> */}
          <BsArrowRight className='w-32 h-10' />
          <div className='text-start pl-20'>
            <h1 className='text-base md:text-lg lg:text-xl text-grey-normal'>
              To
            </h1>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold pt-3'>
              {props.to}
            </h1>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-col items-start justify-start text-start'>
        <LocationDetail
          headline='From'
          location={props.from}
          icon={<MdOutlineLocationOn className='w-8 h-8 text-primary' />}
        />
        <LocationDetail
          headline='To'
          location={props.to}
          icon={<TbLocation className='w-8 h-8 text-primary' />}
        />
      </div>
    </div>
  );
}
