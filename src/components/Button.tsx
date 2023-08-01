import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  color: string;
  href?: string;
  disable?: boolean;
};

const colors: { [key: string]: string } = {
  red: 'bg-red-normal hover:bg-red-hover text-white',
  primary: 'bg-primary hover:bg-secondary text-white',
};
export default function Button(props: ButtonProps) {
  let colorClass = colors[props.color];

  return (
    <div
      className={`w-full ${colorClass} cursor-pointer font-bold sm:text-lg md:text-lg lg:text-xl text-white-normal text-center rounded-xl h-16 justify-center items-center flex p-5 `}
      onClick={props.disable ? undefined : props.onClick}
      style={props.disable ? { pointerEvents: 'none', opacity: 0.5 } : {}}
    >
      {props.text}
    </div>
  );
}
