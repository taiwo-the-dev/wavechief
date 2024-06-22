'use client';

import { motion, AnimatePresence, animate } from 'framer-motion';
import { usePathname } from 'next/navigation';
const Stairs = () => {
  const pathname = usePathname();

  const flair = [1,2,3,4,5,6]

  const stairAnimation = {
    initial: {
      top: '0%',
    },
    animate: {
      top: '-100%',
    },
    exit: {
      top: ['100%', '0%'],
    },
  };

  const reverseIndex = (index: number) => {
    const totalsteps = 6;
    return totalsteps - index - 1;
  };
  return (
    <>
      {flair.map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: reverseIndex(index) * 0.1,
              }}
              className='h-full w-full bg-accent-100 relative z-40'
            />
          );
        })
      }
    </>
  );
};

export default Stairs;
