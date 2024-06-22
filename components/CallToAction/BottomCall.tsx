import React from 'react';
import ActionCard from './ActionCard';

const BottomCall = () => {
  return (
    <div className='pt-[100px] border-b border-t border-[#333]'>
      <div className='border-b border-t border-[#333]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row justify-start items-start '>
            <ActionCard
              title='Become a driver'
              content='Ship your parcel easily with no registration needed: compare courier services, fill out the necessary info'
              color='white'
              bg='bg-accent-100'
              rounded='rounded-tl-3xl rounded-bl-none lg:rounded-bl-3xl rounded-tr-3xl lg:rounded-tr-none'
              href='/'
            />
            <ActionCard
              title='Become a driver'
              content='Ship your parcel easily with no registration needed: compare courier services, fill out the necessary info'
              color='black'
              bg='bg-[#F8F7F4]'
              rounded='lg:rounded-tr-3xl rounded-br-3xl lg:rounded-tr-3xl rounded-bl-3xl lg:rounded-bl-none'
              href='/'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='border-l h-20 border-[#333]'></div>
      </div>
    </div>
  );
};

export default BottomCall;
