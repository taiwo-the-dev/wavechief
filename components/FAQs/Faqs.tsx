'use client';
import { lists } from './constants';
import AccordionItem from './AccordionItem';
import Image from 'next/image';
import Animate from '../UI/Animate';

const Faqs = () => {
  return (
    <div className='container padding'>
      <Animate delayFigure={{ delay: 0.25 }}>
        <h1 className='title'>FAQs</h1>
      </Animate>
      <Animate delayFigure={{ delay: 0.4 }}>
        <p>Everything you need to know about the product and billing.</p>
      </Animate>{' '}
      <div className='flex h-full flex-col lg:flex-row justify-between gap-20 items-stretch'>
        <div className='basis-1/2 mt-10'>
          <AccordionItem sections={lists} />
        </div>

        <div className='basis-1/3 bg-[#F47362] rounded-3xl'>
          <div className='relative'>
            {' '}
            <Image
              src='/assets/eclipse.svg'
              alt='eclipse'
              height={100}
              width={100}
              className='w-full flash'
            />
            <div className='flex justify-center items-center'>
              <div className='absolute bottom-28 md:bottom-[35%] lg:bottom-28 xl:bottom-[35%]'>
                <div className='flex justify-start items-center'>
                  <Image
                    src='/assets/avatar1.svg'
                    alt='avatar'
                    height={100}
                    width={100}
                    className='w-10 h-10 md:h-[60px] md:w-[60px] lg:w-10 lg:h-10 rounded-full'
                  />
                  <Image
                    src='/assets/avatar2.svg'
                    alt='avatar'
                    height={100}
                    width={100}
                    className='w-12 h-12 md:h-20 md:w-20 -mx-2  lg:w-12 lg:h-12 relative z-10 rounded-full'
                  />
                  <Image
                    src='/assets/avatar3.svg'
                    alt='avatar'
                    height={100}
                    width={100}
                    className='w-10 h-10 md:h-[60px] md:w-[60px] lg:w-10 lg:h-10 rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center px-4 md:px-6 lg:px-4 xl:px-6 pb-8'>
            <Animate delayFigure={{ delay: 0.25 }}>
              <p className='text-white'>Still have questions?</p>
            </Animate>
            <Animate delayFigure={{ delay: 0.4 }}>
              <p className='text-center my-2'>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </Animate>
            <Animate delayFigure={{ delay: 0.6 }}>
              <button className='btn_primary text-xs py-2 px-3 flex gap-1 items-center'>
                Talk to Us{' '}
                <Image
                  src='/assets/arrowwhite.svg'
                  alt='arrow'
                  width={100}
                  height={100}
                  className='h-4 w-4'
                />{' '}
              </button>
            </Animate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
