import Animate from '../UI/Animate';
import ServiceArrow from '../svg/ServiceArrow';

interface ServiceTypeProps {
  title: string;
  content: string;
  id: number;
}
const Services = ({ title, content, id }: ServiceTypeProps) => {
  return (
    <div
      className={` px-6 py-20 border-r border-l border-b lg:border-b-0 lg:border-l-0 ${
        id === 0 && 'border-l'
      } ${id === 2 && 'border-b-0'} `}>
      <div className='flex justify-end items-center mb-2 text-sm'>
        <ServiceArrow />
      </div>

      <Animate delayFigure={{ delay: 0.25 + id }}>
        <h3 className='font-semibold'>{title}</h3>
      </Animate>
      <Animate delayFigure={{ delay: 0.25 + id }}>
        {' '}
        <p className='w-11/12'>{content}</p>
      </Animate>
    </div>
  );
};

export default Services;
