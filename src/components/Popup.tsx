import React from 'react';
import ReactModal from 'react-modal';
import Button from './Button';
import SecondaryButton from './SecondaryButton';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  modalHeader: string;
  modalCotent: string;
  isConfirm: boolean;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%', // Width for mobile
    width: '500px', // Width for laptop
    backgroundColor: '#FFF',
    border: 'none',
  },
};

export default function Popup({
  isOpen,
  onClose,
  modalCotent,
  modalHeader,
  isConfirm,
}: PopupProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      ariaHideApp={false}
    >
      <div>
        <h1 className='font-bold text-lg md:text-xl lg:text-2xl pb-10'>
          {modalHeader}
        </h1>
      </div>
      <div>
        <h3 className='text-grey  lg:text-xl md:text-lg sm:text-base'>
          {modalCotent}
        </h3>
      </div>
      {isConfirm == true ? (
        <div className='w-full flex pt-10'>
          <div className='w-1/2 pr-5'>
            <SecondaryButton onClick={onClose} text='cancel' />
          </div>
          <div className='w-1/2'>
            <Button
              text='Okay'
              onClick={() => console.log('hello world')}
              color='primary'
            />
          </div>
        </div>
      ) : (
        <div className='pt-10'>
          <Button text='Okay' onClick={onClose} color='primary' />
        </div>
      )}
    </ReactModal>
  );
}
