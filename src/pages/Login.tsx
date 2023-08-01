import Button from '@/components/Button';
import Popup from '@/components/Popup';
import TextField from '@/components/TextField';
import React, { useState } from 'react';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const navigation = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState(false);

  const emailHanddle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordHanddle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClosePopup = () => {
    setPopUp(false);
  };

  const handleLogin = () => {
    if (email !== 'admin@gmail.com' && password !== '123') {
      setPopUp(true);
    } else {
      navigation.push('/home');
    }
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-background'>
      <div className='p-10 justify-center items-center'>
        <h1 className='text-center lg:text-5xl md:text-3xl sm:text-xl pb-5'>
          WELCOME TO BOOKING BUS SYSTEM
        </h1>
        <h5 className='text-center text-grey pb-5'>
          booking your next trip to Kirirom
        </h5>
        <div className='pb-5'>
          <TextField
            prefix={<HiOutlineMail size={25} />}
            label='Email'
            placeholder='Please input your email'
            isPassword={false}
            color={'input'}
            readOnly={false}
            value={email}
            onChange={emailHanddle}
          />
        </div>
        <div className='pb-10'>
          <TextField
            prefix={<HiOutlineLockClosed size={25} />}
            label='Password'
            placeholder='Please input your email'
            isPassword={true}
            color={'input'}
            readOnly={false}
            value={password}
            onChange={passwordHanddle}
          />
        </div>

        <Button text='login' color='primary' onClick={handleLogin} />
      </div>
      <Popup
        isOpen={popUp}
        onClose={handleClosePopup}
        modalHeader={'Wrong credential'}
        modalCotent={'Please recheck your passowrd and email again !'}
        isConfirm={false}
      />
    </div>
  );
}
