import React from 'react';

type SecondaryButtonProps = {
  text: string;
  onClick: () => void;
};

export default function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <div
      className='cursor-pointer font-bold sm:text-lg md:text-xl lg:text-2xl text-grey text-center rounded-xl h-16 justify-center items-center flex border-grey border-2'
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}