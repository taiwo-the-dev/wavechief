'use client'
import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Animate = ({ children, delayFigure }: { children: ReactNode, delayFigure: {delay: number} }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {once: true} )

  const mainControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start('visible'); 
    }
  }, [isInView])
  
  return (
    <div ref={ref}
      className='relative overflow-hidden
    '>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delayFigure }}>
          <div key='animate'>
            {children}
          </div>
        
      </motion.div>       
    </div>
  );
};

export default Animate;
