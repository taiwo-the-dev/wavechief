'use client';
import { useState } from 'react';
import Image from 'next/image';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className='container relative z-10'>
      <div className='py-8 flex items-center justify-between'>
        <div>
          <Image src='/assets/logo.svg' alt='logo' width={100} height={100} />
        </div>

        {/* desktop Navbar */}
        <div className='bg-white hidden xl:flex items-center py-[20px] rounded-3xl px-[64px] justify-between'>
          <Nav />
        </div>

        <div className='flex flex-col xl:hidden items-center relative z-40'>
          <MobileNav open={open} toggleMenu={toggleMenu} />
        </div>
        <div className='flex items-center gap-2'>
          <div className='lg:hidden' onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-12'>
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <button
            className='hidden md:flex btn_primary py-3 px-6'
            >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
