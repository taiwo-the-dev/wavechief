'use client';
import React from 'react';
import Card from './Card';
import { cardDetails } from './constant';
import Image from 'next/image';
import Animate from '../UI/Animate';

const Work = () => {
  return (
    <div className='container padding'>
      <div className='pb-100'>
        <Animate delayFigure={{ delay: 0.25 }}>
          <div className='rounded-3xl mb-2 flex items-center h-7 md:h-10 bg-[#FDE8E8] w-fit'>
            <span className='text-accent-100 px-4 md:px-6 text-16'>How it works</span>
          </div>
        </Animate>
        <Animate delayFigure={{ delay: 0.4 }}>
          <h1 className='title pb-5'>Elevate your delivery experience</h1>
        </Animate>
        <Animate delayFigure={{ delay: 0.5 }}>
          <p className='w-full lg:w-9/12'>
            Ship your parcel easily with no registration needed: compare courier
            services, fill out the necessary info, pay and prepare your package
            for the delivery. Track your shipment anytime from the website.
          </p>
        </Animate>
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-20'>
        <div className='basis-2/4 '>
          {cardDetails.map((data, index) => (
            <Animate key={index} delayFigure={{ delay: 0.25 * (index + 1) }}>
              <Card
                title={data.title}
                id={index}
                content={data.content}
                image={data.image}
              />
            </Animate>
          ))}
        </div>
        <Animate delayFigure={{ delay: 0.25 }}>
          <div className=' basis-2/2  h-auto relative z-10'>
            <Image
              src='/assets/frame.svg'
              alt='frame'
              width={700}
              height={100}
              className='h-400px'
            />
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Work;
