import Image from 'next/image';
import React, { Fragment } from 'react';
import { services } from './constant';
import Services from './Services';
import Animate from '../UI/Animate';

const Banner = () => {
  return (
    <Fragment>
      <div className='container padding'>
        <div className='pb-100'>
          <Animate delayFigure={{ delay: 0.25 }}>
            <h1 className='title pb-4'>Delivering seamless delivery experience</h1>
          </Animate>
          <Animate delayFigure={{ delay: 0.5 }}>
            <p className='w-full lg:w-9/12'>
              Ship your parcel easily with no registration needed: compare
              courier services, fill out the necessary info, pay and prepare
              your package for the delivery. Track your shipment anytime from
              the website.
            </p>
          </Animate>
        </div>

        <Animate delayFigure={{delay: 0.25}}>
          <Image
            src='assets/man.svg'
            alt='man-moving-property'
            height={100}
            width={100}
            className='w-full'
          />
        </Animate>
      </div>
      <div className='w-full border-y'>
        <div className='container py-0 flex flex-col md:flex-row justify-between'>
          {services.map((service, index) => (
            <Animate key={index} delayFigure={{delay: index+2}}>
            <Services
              id={index}
              title={service.title}
              content={service.content}
            /></Animate>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
