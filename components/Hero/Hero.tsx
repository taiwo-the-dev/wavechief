'use client';
import React from 'react';
import {motion} from 'framer-motion';
import Cloud from '../svg/Cloud';
import Little from '../svg/Little';
import SelectInput from '../SelectInput/SelectInput';


const Hero = () => {
  return (
    <div className='hero h-[85vh] xl:h-[100vh] w-full'>
      <div className='relative hero_section-content w-full'>
        <div className='flex flex-col justify-center items-center w-full'>
          {' '}
          <Little />{' '}
        </div>
        <div>
          <h1 className='w-full lg:w-10/12 text-center mx-auto title lg:z-10'>
            Effortlessly move your packages
          </h1>
          <div className='w-11/12 lg:w-9/12 mx-auto'>
            {' '}
            <p className='w-full lg:w-9/12 text-center mx-auto relative lg:z-10 text-p-70 text-20'>
              The smartest way to save money while moving, from booking to
              delivery. The UK’s favorite delivery, removals and transport
              marketplace
            </p>
          </div>
        </div>
        <div className='absolute left-0 top-0 md:top-10 z-0 hidden lg:block'>
          {' '}
          <Cloud />{' '}
        </div>
        <div className='absolute right-0 top-10 z-0 hidden lg:block'>
          {' '}
          <Cloud />{' '}
        </div>
      </div>

      <div
        className='search relative  
        w-10/12 md:w-9/12 2xl:w-8/12 mx-auto mt-20 md:mt-[150px]'>
        <div className='flex justify-start items-center w-full'>
          <div className='bg-accent-100 w-full xl:w-[220px] text-center text-white py-3 px-4 xl:px-0 rounded-tl-xl cursor-pointer'>
            <span>For Customers</span>
          </div>
          <div className='bg-white w-full xl:w-[220px] py-3 px-4 xl:px-0 text-center rounded-tr-xl cursor-pointer'>
            <span>For Drivers</span>
          </div>
        </div>
        <div className='w-full bg-white p-4 flex flex-col items-start justify-start lg:rounded-tr-xl rounded-b-xl'>
          <h3 className='uppercase text-16 mb-3 text-black'>What are you moving?</h3>
          <div className='flex flex-col md:flex-row justify-between gap-5 items-center w-full'>
            <div className='w-full lg:basis-4/5 md:basis-3/4'>
              <SelectInput />
            </div>
            <div className='w-full lg:basis-1/5 md:basis-2/6'>
              <button className='btn_primary p-3 text-xs md:text-sm w-full'>Send Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
