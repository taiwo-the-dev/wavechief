import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CardPropTypes {
  id: number;
  image: string;
  title: string;
  content: string;
}

const Card = ({ id, image, title, content }: CardPropTypes) => {

  return (
    <div
      className={`p-[32px] mb-5 rounded-xl ${id === 0 ? "bg-white" : "bg-transparent"}`}>
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image src={image} alt='Card-image' width={70} height={70} />
        </div>
        <div>
          <h4 className='font-semibold text-20'>{title}</h4>
          <p>{content}</p>  
        </div>
      </div>
    </div>
  );
};

export default Card;
