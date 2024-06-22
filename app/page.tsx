import Banner from '@/components/Banner/Banner';
import BottomCall from '@/components/CallToAction/BottomCall';
import CallToAction from '@/components/CallToAction/CallToAction';
import Faqs from '@/components/FAQs/Faqs';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import Hero from '@/components/Hero/Hero';
import Animate from '@/components/UI/Animate';
import Work from '@/components/Work/Work';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='m-0 bg-[#FEF5F5]'>
      <Navbar />
      <Animate delayFigure={{ delay: 0.25 }}>
        <Hero />
      </Animate>
      <Work />

      <div className='bg-white'>
        <Animate delayFigure={{ delay: 0.25 }}>
          <CallToAction />
        </Animate>

        <Banner />
      </div>

      <Faqs />

      <div className='bg-black'>
        <Animate delayFigure={{ delay: 0.25 }}>
          <BottomCall />
        </Animate>
        <Animate delayFigure={{ delay: 0.5 }}>
          <Footer />
        </Animate>
      </div>
    </div>
  );
};

export default Home;
