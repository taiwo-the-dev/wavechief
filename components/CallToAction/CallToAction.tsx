import Image from 'next/image';
import ActionCard from './ActionCard';
import SearchTab from './SearchTab';
import SearchIcon from '../svg/SearchIcon';
import Confetti from '../svg/Confetti';

const CallToAction = () => {
  return (
    <div className='container padding'>
      <div className='flex flex-col lg:flex-row justify-start items-stretch h-full'>
        <div className='basis-1/2'>
          <ActionCard
            title='Become a driver'
            content='Ship your parcel easily with no registration needed: compare courier services, fill out the necessary info'
            color='white'
            bg='bg-accent-100'
            rounded='rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none'
            href='/'
          />
          <ActionCard
            title='Become a driver'
            content='Ship your parcel easily with no registration needed: compare courier services, fill out the necessary info'
            color='black'
            bg='bg-[#F8F7F4]'
            rounded='rounded-bl-3xl rounded-br-3xl lg:rounded-br-none'
            href='/'
          />
        </div>
        <div className='basis-1/2 frame_bg rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl lg:rounded-tl-none lg:rounded-bl-none object-fill mt-5 lg:mt-0'>
          <div className='relative h-full md:hidden lg:flex'>
              <div className='relative lg:absolute flex justify-center items-center pt-10 pb-100 lg:p-0 lg:top-[12%] lg:left-[20%]'>
                <SearchTab content='Pickup a delivery request around you' rotate='rotate-6'>
                  <SearchIcon />
                </SearchTab>
              </div>

            <div className='relative lg:absolute flex justify-center items-center pt-40 pb-100 lg:p-0 lg:bottom-20 lg:left-[20%]'>
              <SearchTab content='Get instant payout for each delivery' rotate='-rotate-12'>
                <Confetti />
              </SearchTab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
