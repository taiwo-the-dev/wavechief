import Image from 'next/image';
import Link from 'next/link';

interface ActionCardProps {
  title: string;
  content: string;
  bg: string;
  color: string;
  rounded: string;
  href: string;
}

const ActionCard = ({ title, content, bg, color, rounded, href}: ActionCardProps) => {
  return (
    <div className={`p-[60px] ${bg} ${color === 'black' ? 'text-black' : 'text-white'} ${rounded}`}>
      <h1 className={`sub_title ${color === 'black' ? 'text-black' : 'text-white'}`}>{title}</h1>
      <div className='flex my-5 justify-end items-center'>
        <Link href={href} className={`w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer ${color === 'black' ? 'bg-black' : 'bg-white'}`}>
            {color === 'black' ? <Image src='/assets/arrowwhite.svg' alt='arrow' width={100} height={100} className='w-5 h-5 lg:w-10 lg:h-10'/> : <Image src='/assets/arrowblack.svg' alt='arrow' width={100} height={100} className='w-5 h-5 lg:w-10 lg:h-10'/>}
        </Link>
      </div>

      <p className='w-full lg:w-10/12'>{content}</p>
    </div>
  );
};

export default ActionCard;
