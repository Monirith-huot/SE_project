import Button from '@/components/Button';
import DatePickerComponent from '@/components/DatePicker';
import PageLayout from '@/components/PageLayout';
import TextButton from '@/components/TextButton';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const navigation = useHistory();
  return (
    <PageLayout>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <div className='items-center justify-center flex flex-col pb-10'>
          <h3 className='pb-5'>Upcoming schedule</h3>
          <h1 className='py-10 text-primary'>02/07/2023</h1>

          <TextButton
            text='Booking now >'
            onClick={() => navigation.push('/booking')}
          />
        </div>
        <div className='items-center justify-center flex flex-col '>
          <h3 className='text-center'>You can find other avaible bus here</h3>
          <DatePickerComponent
            onChange={() => console.log('hello world')}
            error={'Please select any avaiable date'}
            placeholderText='Please select any avaiable date'
            includeDates={[new Date('2023/08/03'), new Date('2023/08/04')]}
          />
          <Button
            onClick={() => navigation.push('/booking')}
            text='Search'
            color='primary'
          />
        </div>
      </div>
    </PageLayout>
  );
}
