import React from 'react';
import Menu from './Menu';
import { menuList } from './constant';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='border-b border-[#636363]'>
      <div className='border-b border-[#636363]'>
        <div className='container'>
          <div className='flex flex-row justify-start items-start lg:items-center'>
            {menuList.map((list, index) => (
              <Menu
                key={index}
                id={list.id}
                title={list.title}
                lists={list.lists}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='padding text-[#636363] text-xs'>
          <div className='flex justify-between w-full items-center'>
            <p className='text-[#636363]'>
              © 2024 Wavechief. All rights reserved.
            </p>

            <div className='flex justify-between gap-2 items-center'>
              <Image
                src='/assets/linkedin.svg'
                alt='linedin'
                width={100}
                height={100}
                className='w-6 h-6 md:w-8 md:h-8'
              />
              <Image
                src='/assets/facebook.svg'
                alt='linedin'
                width={100}
                height={100}
                className='w-5 h-5 md:w-7 md:h-7'
              />
              <Image
                src='/assets/twitter.svg'
                alt='linedin'
                width={100}
                height={100}
                className='w-6 h-6 md:w-8 md:h-8'
              />
            </div>
          </div>
          <p className='my-6 text-[#636363]'>
            Wavechief is a registered trademark of wavechief logistics
            headquartered in United Kingdom. All rights reserved.
          </p>
          <p className='pb-100 w-full lg:w-10/12 text-[#636363]'>
            All data and contents are ship your parcel easily with no
            registration needed: compare courier services, fill out the
            necessary info, pay and prepare your package for the delivery. Track
            your shipment anytime from the website.
          </p>
          <Image
            src='/assets/label.svg'
            width={100}
            height={100}
            alt='label'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
