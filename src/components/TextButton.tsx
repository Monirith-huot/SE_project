import React from 'react';
type TextButtonProps = {
  text: string;
  onClick: () => void;
};

export default function TextButton(props: TextButtonProps) {
  return (
    <h4
      className='font-bold text-black hover:text-primary cursor-pointer pb-5'
      onClick={props.onClick}
    >
      {props.text}
    </h4>
  );
}
