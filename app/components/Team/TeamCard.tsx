import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  name: string;
  position: string;
}

const TeamCard = ({ image, name, position }: Props) => {
  return (
    <div className="p-4 transition-transform transform hover:scale-105">
      <Image
        src={image}
        alt={name}
        height={400}
        width={400}
        className="rounded-md mx-auto"
      />
      <h1 className="text-[40px] text-blue-950 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 bg-orange-600 text-white mx-auto w-fit font-medium">
        {position}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-red-600 mt-[1rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molveniam
      </p>
    </div>
  );
}

export default TeamCard;
