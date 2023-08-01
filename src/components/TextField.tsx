// TextField.jsx
import React, { useState } from 'react';
// import EyeClose from '../../assets/icons/eye_off.svg';
// import EyeOpen from '../../assets/icons/eye_open.svg';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const colors: { [key: string]: string } = {
  readOnly: 'bg-light-hover',
  input: 'bg-textField',
};

type textFieldProps = {
  label?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  isPassword: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly: boolean;
  color: string;
  value: string | undefined;
};

export default function TextField(props: textFieldProps) {
  let colorClass = colors[props.color];
  const [showPassword, setShowPassword] = useState(props.isPassword);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className='block mb-2 text-base  md:text-lg lg:text-xl font-medium text-gray-900 dark:text-white'>
        {props.label}
      </label>

      <div className='relative'>
        {props.prefix && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-5'>
            {props.prefix}
          </div>
        )}
        <input
          readOnly={props.readOnly}
          type={showPassword ? 'password' : 'text'}
          id='input-group-1'
          className={`${colorClass} text-base lg:text-xl md:text-lg w-full h-16  hover:border-none px-16 focus:outline-none rounded-xl placeholder:text-grey text-grey`}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        {props.isPassword && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-5'>
            {showPassword ? (
              <BsEyeSlashFill
                className='w-5 h-5 text-grey'
                onClick={toggleShowPassword}
              />
            ) : (
              <BsEyeFill
                className='w-5 h-5 text-grey'
                onClick={toggleShowPassword}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
