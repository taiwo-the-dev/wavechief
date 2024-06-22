import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Animate from '../UI/Animate';

interface AccordionProps {
  section: any;
  isActiveSection: boolean;
  setActiveIndex: (params: any) => void;
  sectionIndex: number;
}
const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}: AccordionProps) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className='mb-5'>
      <div className='flex justify-between items-center border-b pb-3'>
        <div className='app_accordion-question'>
          <p className='text-black'>{section.title}</p>
        </div>
        <div className='app_accordion-btn'>
          {isActiveSection ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ y: [100, 0] }}
              transition={{ duration: 1, ease: 'easeOut' }}>
              <Image
                src='/assets/minus-circle.svg'
                alt='minus-btn'
                width={100}
                height={100}
                className='w-6 h-6 cursor-pointer'
              />
            </motion.div>
          ) : (
            <Image
              src='/assets/plus-circle.svg'
              alt='minus-btn'
              width={100}
              height={100}
              className='w-6 h-6 cursor-pointer'
              onClick={toggleSection} 
            />
          )}
        </div>
      </div>
      {isActiveSection && (
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: [100, 0] }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='pt-6 pb-10 w-11/12 '>
          {section.content}
        </motion.p>
      )}
    </div>
  );
};
const AccordionItem = ({ sections }: { sections: any }) => {
  const [activeIndex, setActiveIndex] = useState<any>(0);
  return (
    <div className='app_accordion'>
      {sections.map((section: any, index: number) => (
        <Animate key={index} delayFigure={{ delay: index }}>
          <AccordionSection
            section={section}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        </Animate>
      ))}
    </div>
  );
};

export default AccordionItem;
